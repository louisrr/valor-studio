/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as childProcess from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import * as vscode from 'vscode';

interface CompilerPosition {
	readonly line: number;
	readonly col: number;
}

interface CompilerSpan {
	readonly file: string;
	readonly start: CompilerPosition;
	readonly end: CompilerPosition;
}

interface CompilerDiagnostic {
	readonly severity: string;
	readonly code?: string;
	readonly message: string;
	readonly primary_span: CompilerSpan;
}

interface CompilerOutput {
	readonly diagnostics: readonly CompilerDiagnostic[];
}

const getBundledCompilerPath = (context: vscode.ExtensionContext): string | undefined => {
	const platform = process.platform;
	const architecture = process.arch;
	if (platform !== 'darwin' && platform !== 'linux' && platform !== 'win32') {
		return undefined;
	}

	const executable = platform === 'win32' ? 'valorc.exe' : 'valorc';
	return context.asAbsolutePath(path.join('bin', `${platform}-${architecture}`, executable));
};

const getCompilerPath = (context: vscode.ExtensionContext): string | undefined => {
	const configuredPath = vscode.workspace.getConfiguration('valor').get<string | null>('compiler.path');
	if (configuredPath) {
		return configuredPath;
	}

	const bundledPath = getBundledCompilerPath(context);
	return bundledPath && fs.existsSync(bundledPath) ? bundledPath : undefined;
};

const getRuntimeArguments = (context: vscode.ExtensionContext): string[] => {
	const runtimeName = process.platform === 'win32' ? 'valor-rt.lib' : 'libvalor-rt.a';
	const runtimePath = context.asAbsolutePath(path.join('bin', `${process.platform}-${process.arch}`, runtimeName));
	return fs.existsSync(runtimePath) ? ['--runtime', runtimePath] : [];
};

const toPosition = (position: CompilerPosition): vscode.Position => new vscode.Position(
	Math.max(0, position.line - 1),
	Math.max(0, position.col - 1)
);

const toSeverity = (severity: string): vscode.DiagnosticSeverity => {
	switch (severity) {
		case 'warning':
			return vscode.DiagnosticSeverity.Warning;
		case 'info':
			return vscode.DiagnosticSeverity.Information;
		case 'hint':
			return vscode.DiagnosticSeverity.Hint;
		default:
			return vscode.DiagnosticSeverity.Error;
	}
};

const parseCompilerOutput = (stdout: string, stderr: string): CompilerOutput | undefined => {
	for (const text of [stdout, stderr]) {
		try {
			const value = JSON.parse(text.trim()) as CompilerOutput;
			if (Array.isArray(value.diagnostics)) {
				return value;
			}
		} catch {
			// Non-JSON output is displayed in the output channel below.
		}
	}
	return undefined;
};

const setDiagnostics = (collection: vscode.DiagnosticCollection, output: CompilerOutput | undefined): void => {
	collection.clear();
	if (!output) {
		return;
	}

	const diagnosticsByFile = new Map<string, vscode.Diagnostic[]>();
	for (const compilerDiagnostic of output.diagnostics) {
		const span = compilerDiagnostic.primary_span;
		const diagnostic = new vscode.Diagnostic(
			new vscode.Range(toPosition(span.start), toPosition(span.end)),
			compilerDiagnostic.message,
			toSeverity(compilerDiagnostic.severity)
		);
		diagnostic.code = compilerDiagnostic.code;
		diagnostic.source = 'valorc';

		const fileDiagnostics = diagnosticsByFile.get(span.file) ?? [];
		fileDiagnostics.push(diagnostic);
		diagnosticsByFile.set(span.file, fileDiagnostics);
	}

	for (const [file, diagnostics] of diagnosticsByFile) {
		collection.set(vscode.Uri.file(file), diagnostics);
	}
};

const getActiveValorDocument = async (): Promise<vscode.TextDocument | undefined> => {
	const document = vscode.window.activeTextEditor?.document;
	if (!document || document.languageId !== 'valor') {
		void vscode.window.showErrorMessage(vscode.l10n.t('Open a Valor file before running this command.'));
		return undefined;
	}
	if (document.isUntitled) {
		void vscode.window.showErrorMessage(vscode.l10n.t('Save the Valor file before running this command.'));
		return undefined;
	}
	if (document.isDirty && !await document.save()) {
		return undefined;
	}
	return document;
};

export function activate(context: vscode.ExtensionContext): void {
	const outputChannel = vscode.window.createOutputChannel('Valor');
	const diagnostics = vscode.languages.createDiagnosticCollection('valor');
	context.subscriptions.push(outputChannel, diagnostics);

	context.subscriptions.push(vscode.commands.registerCommand('valor.build', async () => {
		const document = await getActiveValorDocument();
		if (!document) {
			return;
		}

		const compiler = getCompilerPath(context);
		if (!compiler) {
			void vscode.window.showErrorMessage(vscode.l10n.t("The Valor compiler could not be found. Configure 'valor.compiler.path' or reinstall Valor Studio."));
			return;
		}

		outputChannel.clear();
		outputChannel.show(true);
		outputChannel.appendLine(vscode.l10n.t('Building {0}', document.fileName));
		childProcess.execFile(compiler, ['--json', 'build', document.fileName, ...getRuntimeArguments(context)], { cwd: path.dirname(document.fileName) }, (error, stdout, stderr) => {
			const compilerOutput = parseCompilerOutput(stdout, stderr);
			setDiagnostics(diagnostics, compilerOutput);
			if (stdout && !compilerOutput) {
				outputChannel.append(stdout);
			}
			if (stderr && !compilerOutput) {
				outputChannel.append(stderr);
			}
			if (error) {
				outputChannel.appendLine(vscode.l10n.t('Valor build failed with exit code {0}.', error.code ?? 'unknown'));
			} else {
				outputChannel.appendLine(vscode.l10n.t('Valor build completed successfully.'));
			}
		});
	}));

	context.subscriptions.push(vscode.commands.registerCommand('valor.run', async () => {
		const document = await getActiveValorDocument();
		if (!document) {
			return;
		}

		const compiler = getCompilerPath(context);
		if (!compiler) {
			void vscode.window.showErrorMessage(vscode.l10n.t("The Valor compiler could not be found. Configure 'valor.compiler.path' or reinstall Valor Studio."));
			return;
		}

		fs.mkdirSync(context.globalStorageUri.fsPath, { recursive: true });
		const executableName = process.platform === 'win32' ? 'valor-run.exe' : 'valor-run';
		const executablePath = path.join(context.globalStorageUri.fsPath, executableName);
		outputChannel.clear();
		outputChannel.show(true);
		outputChannel.appendLine(vscode.l10n.t('Building {0}', document.fileName));
		childProcess.execFile(compiler, ['--json', 'build', document.fileName, '--out', executablePath, ...getRuntimeArguments(context)], { cwd: path.dirname(document.fileName) }, (error, stdout, stderr) => {
			const compilerOutput = parseCompilerOutput(stdout, stderr);
			setDiagnostics(diagnostics, compilerOutput);
			if (error) {
				if (stdout && !compilerOutput) {
					outputChannel.append(stdout);
				}
				if (stderr && !compilerOutput) {
					outputChannel.append(stderr);
				}
				outputChannel.appendLine(vscode.l10n.t('Valor build failed with exit code {0}.', error.code ?? 'unknown'));
				return;
			}

			outputChannel.appendLine(vscode.l10n.t('Valor build completed successfully.'));
			const terminal = vscode.window.createTerminal({
				name: 'Valor',
				shellPath: executablePath,
				cwd: path.dirname(document.fileName)
			});
			terminal.show();
		});
	}));
}
