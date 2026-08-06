/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { refineServiceDecorator } from '../../../../platform/instantiation/common/instantiation.js';
import { Event } from '../../../../base/common/event.js';
import { Color } from '../../../../base/common/color.js';
import { IColorTheme, IThemeService, IFileIconTheme, IProductIconTheme } from '../../../../platform/theme/common/themeService.js';
import { ConfigurationTarget } from '../../../../platform/configuration/common/configuration.js';
import { isBoolean, isString } from '../../../../base/common/types.js';
import { IconContribution, IconDefinition } from '../../../../platform/theme/common/iconRegistry.js';
import { ColorScheme, ThemeTypeSelector } from '../../../../platform/theme/common/theme.js';

export const IWorkbenchThemeService = refineServiceDecorator<IThemeService, IWorkbenchThemeService>(IThemeService);

export const THEME_SCOPE_OPEN_PAREN = '[';
export const THEME_SCOPE_CLOSE_PAREN = ']';
export const THEME_SCOPE_WILDCARD = '*';

export const themeScopeRegex = /\[(.+?)\]/g;

export enum ThemeSettings {
	COLOR_THEME = 'workbench.colorTheme',
	FILE_ICON_THEME = 'workbench.iconTheme',
	PRODUCT_ICON_THEME = 'workbench.productIconTheme',
	COLOR_CUSTOMIZATIONS = 'workbench.colorCustomizations',
	TOKEN_COLOR_CUSTOMIZATIONS = 'editor.tokenColorCustomizations',
	SEMANTIC_TOKEN_COLOR_CUSTOMIZATIONS = 'editor.semanticTokenColorCustomizations',

	PREFERRED_DARK_THEME = 'workbench.preferredDarkColorTheme',
	PREFERRED_LIGHT_THEME = 'workbench.preferredLightColorTheme',
	PREFERRED_HC_DARK_THEME = 'workbench.preferredHighContrastColorTheme', /* id kept for compatibility reasons */
	PREFERRED_HC_LIGHT_THEME = 'workbench.preferredHighContrastLightColorTheme',
	DETECT_COLOR_SCHEME = 'window.autoDetectColorScheme',
	DETECT_HC = 'window.autoDetectHighContrast',

	SYSTEM_COLOR_THEME = 'window.systemColorTheme'
}

export namespace ThemeSettingDefaults {
	export const COLOR_THEME_DARK = 'Dark 2026';
	export const COLOR_THEME_LIGHT = 'Light 2026';
	export const COLOR_THEME_HC_DARK = 'Default High Contrast';
	export const COLOR_THEME_HC_LIGHT = 'Default High Contrast Light';

	export const FILE_ICON_THEME = 'vs-seti';
	export const PRODUCT_ICON_THEME = 'Default';
}

/**
 * Migrates legacy theme settings IDs to their current equivalents.
 * Theme IDs were simplified: "Default" prefix was removed from built-in themes,
 * and "Experimental" prefix was replaced when VS Code themes became GA.
 */
export function migrateThemeSettingsId(settingsId: string): string {
	switch (settingsId) {
		case 'Default Dark Modern': return 'Dark Modern';
		case 'Default Light Modern': return 'Light Modern';
		case 'Default Dark+': return 'Dark+';
		case 'Default Light+': return 'Light+';
		case 'Experimental Dark':
		case 'VS Code Dark':
			return ThemeSettingDefaults.COLOR_THEME_DARK;
		case 'Experimental Light':
		case 'VS Code Light':
			return ThemeSettingDefaults.COLOR_THEME_LIGHT;
	}
	return settingsId;
}

export const COLOR_THEME_DARK_INITIAL_COLORS = {
	'actionBar.toggledBackground': '#5fd6b71f',
	'activityBar.activeBorder': '#5fd6b7',
	'activityBar.background': '#081116',
	'activityBar.border': '#223139',
	'activityBar.foreground': '#dce7ea',
	'activityBar.inactiveForeground': '#8b9ba2',
	'activityBarBadge.background': '#5fd6b7',
	'activityBarBadge.foreground': '#dce7ea',
	'badge.background': '#8b9ba2',
	'badge.foreground': '#dce7ea',
	'button.background': '#5fd6b7',
	'button.border': '#dce7ea12',
	'button.foreground': '#dce7ea',
	'button.hoverBackground': '#237f6b',
	'button.secondaryBackground': '#111c22',
	'button.secondaryForeground': '#dce7ea',
	'button.secondaryHoverBackground': '#223139',
	'chat.slashCommandBackground': '#5fd6b726',
	'chat.slashCommandForeground': '#5fd6b7',
	'chat.editedFileForeground': '#d8c07b',
	'checkbox.background': '#111c22',
	'checkbox.border': '#223139',
	'debugToolBar.background': '#081116',
	'descriptionForeground': '#8b9ba2',
	'dropdown.background': '#111c22',
	'dropdown.border': '#223139',
	'dropdown.foreground': '#dce7ea',
	'dropdown.listBackground': '#0b171d',
	'editor.background': '#0b171d',
	'editor.findMatchBackground': '#d8c07b40',
	'editor.foreground': '#dce7ea',
	'editor.inactiveSelectionBackground': '#5fd6b740',
	'editor.selectionHighlightBackground': '#5fd6b726',
	'editorGroup.border': '#dce7ea17',
	'editorGroupHeader.tabsBackground': '#081116',
	'editorGroupHeader.tabsBorder': '#223139',
	'editorGutter.addedBackground': '#7fbd73',
	'editorGutter.deletedBackground': '#e86d78',
	'editorGutter.modifiedBackground': '#5fd6b7',
	'editorIndentGuide.activeBackground1': '#5fd6b740',
	'editorIndentGuide.background1': '#223139',
	'editorLineNumber.activeForeground': '#dce7ea',
	'editorLineNumber.foreground': '#8b9ba2',
	'editorOverviewRuler.border': '#081116',
	'editorWidget.background': '#111c22',
	'errorForeground': '#e86d78',
	'focusBorder': '#5fd6b7',
	'foreground': '#dce7ea',
	'icon.foreground': '#dce7ea',
	'input.background': '#111c22',
	'input.border': '#223139',
	'input.foreground': '#dce7ea',
	'input.placeholderForeground': '#8b9ba2',
	'inputOption.activeBackground': '#5fd6b740',
	'inputOption.activeBorder': '#5fd6b7',
	'keybindingLabel.foreground': '#dce7ea',
	'list.activeSelectionIconForeground': '#FFF',
	'list.dropBackground': '#5fd6b726',
	'menu.background': '#0b171d',
	'menu.border': '#223139',
	'menu.foreground': '#dce7ea',
	'menu.selectionBackground': '#5fd6b7',
	'menu.separatorBackground': '#223139',
	'notificationCenterHeader.background': '#0b171d',
	'notificationCenterHeader.foreground': '#dce7ea',
	'notifications.background': '#0b171d',
	'notifications.border': '#223139',
	'notifications.foreground': '#dce7ea',
	'panel.background': '#081116',
	'panel.border': '#223139',
	'panelInput.border': '#223139',
	'panelTitle.activeBorder': '#5fd6b7',
	'panelTitle.activeForeground': '#dce7ea',
	'panelTitle.inactiveForeground': '#8b9ba2',
	'peekViewEditor.background': '#0b171d',
	'peekViewEditor.matchHighlightBackground': '#d8c07b40',
	'peekViewResult.background': '#0b171d',
	'peekViewResult.matchHighlightBackground': '#d8c07b40',
	'pickerGroup.border': '#223139',
	'ports.iconRunningProcessForeground': '#7fbd73',
	'progressBar.background': '#5fd6b7',
	'quickInput.background': '#111c22',
	'quickInput.foreground': '#dce7ea',
	'settings.dropdownBackground': '#111c22',
	'settings.dropdownBorder': '#223139',
	'settings.headerForeground': '#dce7ea',
	'settings.modifiedItemIndicator': '#d8c07b40',
	'sideBar.background': '#081116',
	'sideBar.border': '#223139',
	'sideBar.foreground': '#dce7ea',
	'sideBarSectionHeader.background': '#081116',
	'sideBarSectionHeader.border': '#223139',
	'sideBarSectionHeader.foreground': '#dce7ea',
	'sideBarTitle.foreground': '#dce7ea',
	'statusBar.background': '#081116',
	'statusBar.border': '#223139',
	'statusBar.debuggingBackground': '#5fd6b7',
	'statusBar.debuggingForeground': '#dce7ea',
	'statusBar.focusBorder': '#5fd6b7',
	'statusBar.foreground': '#dce7ea',
	'statusBar.noFolderBackground': '#0b171d',
	'statusBarItem.focusBorder': '#5fd6b7',
	'statusBarItem.prominentBackground': '#8b9ba266',
	'statusBarItem.remoteBackground': '#5fd6b7',
	'statusBarItem.remoteForeground': '#dce7ea',
	'tab.activeBackground': '#0b171d',
	'tab.activeBorder': '#0b171d',
	'tab.activeBorderTop': '#5fd6b7',
	'tab.activeForeground': '#dce7ea',
	'tab.border': '#223139',
	'tab.hoverBackground': '#0b171d',
	'tab.inactiveBackground': '#081116',
	'tab.inactiveForeground': '#8b9ba2',
	'tab.lastPinnedBorder': '#223139',
	'tab.selectedBackground': '#111c22',
	'tab.selectedBorderTop': '#5fd6b7',
	'tab.selectedForeground': '#dce7eaa0',
	'tab.unfocusedActiveBorder': '#0b171d',
	'tab.unfocusedActiveBorderTop': '#223139',
	'tab.unfocusedHoverBackground': '#0b171d',
	'terminal.foreground': '#dce7ea',
	'terminal.inactiveSelectionBackground': '#5fd6b740',
	'terminal.tab.activeBorder': '#5fd6b7',
	'textBlockQuote.background': '#223139',
	'textBlockQuote.border': '#8b9ba2',
	'textCodeBlock.background': '#223139',
	'textLink.activeForeground': '#5fd6b7',
	'textLink.foreground': '#5fd6b7',
	'textPreformat.background': '#223139',
	'textPreformat.foreground': '#dce7ea',
	'textSeparator.foreground': '#223139',
	'titleBar.activeBackground': '#081116',
	'titleBar.activeForeground': '#dce7ea',
	'titleBar.border': '#223139',
	'titleBar.inactiveBackground': '#0b171d',
	'titleBar.inactiveForeground': '#8b9ba2',
	'welcomePage.progress.foreground': '#5fd6b7',
	'welcomePage.tileBackground': '#223139',
	'widget.border': '#111c22'
};

export const COLOR_THEME_LIGHT_INITIAL_COLORS = {
	'actionBar.toggledBackground': '#dddddd',
	'activityBar.activeBorder': '#005FB8',
	'activityBar.background': '#F8F8F8',
	'activityBar.border': '#E5E5E5',
	'activityBar.foreground': '#1F1F1F',
	'activityBar.inactiveForeground': '#616161',
	'activityBarBadge.background': '#005FB8',
	'activityBarBadge.foreground': '#FFFFFF',
	'badge.background': '#CCCCCC',
	'badge.foreground': '#3B3B3B',
	'button.background': '#005FB8',
	'button.border': '#0000001a',
	'button.foreground': '#FFFFFF',
	'button.hoverBackground': '#0258A8',
	'button.secondaryBackground': '#E5E5E5',
	'button.secondaryForeground': '#3B3B3B',
	'button.secondaryHoverBackground': '#CCCCCC',
	'chat.slashCommandBackground': '#ADCEFF7A',
	'chat.slashCommandForeground': '#26569E',
	'chat.editedFileForeground': '#895503',
	'checkbox.background': '#F8F8F8',
	'checkbox.border': '#CECECE',
	'descriptionForeground': '#3B3B3B',
	'diffEditor.unchangedRegionBackground': '#f8f8f8',
	'dropdown.background': '#FFFFFF',
	'dropdown.border': '#CECECE',
	'dropdown.foreground': '#3B3B3B',
	'dropdown.listBackground': '#FFFFFF',
	'editor.background': '#FFFFFF',
	'editor.foreground': '#3B3B3B',
	'editor.inactiveSelectionBackground': '#E5EBF1',
	'editor.selectionHighlightBackground': '#ADD6FF80',
	'editorGroup.border': '#E5E5E5',
	'editorGroupHeader.tabsBackground': '#F8F8F8',
	'editorGroupHeader.tabsBorder': '#E5E5E5',
	'editorGutter.addedBackground': '#2EA043',
	'editorGutter.deletedBackground': '#F85149',
	'editorGutter.modifiedBackground': '#005FB8',
	'editorIndentGuide.activeBackground1': '#939393',
	'editorIndentGuide.background1': '#D3D3D3',
	'editorLineNumber.activeForeground': '#171184',
	'editorLineNumber.foreground': '#6E7681',
	'editorOverviewRuler.border': '#E5E5E5',
	'editorSuggestWidget.background': '#F8F8F8',
	'editorWidget.background': '#F8F8F8',
	'errorForeground': '#F85149',
	'focusBorder': '#005FB8',
	'foreground': '#3B3B3B',
	'icon.foreground': '#3B3B3B',
	'input.background': '#FFFFFF',
	'input.border': '#CECECE',
	'input.foreground': '#3B3B3B',
	'input.placeholderForeground': '#767676',
	'inputOption.activeBackground': '#BED6ED',
	'inputOption.activeBorder': '#005FB8',
	'inputOption.activeForeground': '#000000',
	'keybindingLabel.foreground': '#3B3B3B',
	'list.activeSelectionBackground': '#E8E8E8',
	'list.activeSelectionForeground': '#000000',
	'list.activeSelectionIconForeground': '#000000',
	'list.focusAndSelectionOutline': '#005FB8',
	'list.hoverBackground': '#F2F2F2',
	'menu.border': '#CECECE',
	'menu.selectionBackground': '#005FB8',
	'menu.selectionForeground': '#ffffff',
	'notebook.cellBorderColor': '#E5E5E5',
	'notebook.selectedCellBackground': '#C8DDF150',
	'notificationCenterHeader.background': '#FFFFFF',
	'notificationCenterHeader.foreground': '#3B3B3B',
	'notifications.background': '#FFFFFF',
	'notifications.border': '#E5E5E5',
	'notifications.foreground': '#3B3B3B',
	'panel.background': '#F8F8F8',
	'panel.border': '#E5E5E5',
	'panelInput.border': '#E5E5E5',
	'panelTitle.activeBorder': '#005FB8',
	'panelTitle.activeForeground': '#3B3B3B',
	'panelTitle.inactiveForeground': '#3B3B3B',
	'peekViewEditor.matchHighlightBackground': '#BB800966',
	'peekViewResult.background': '#FFFFFF',
	'peekViewResult.matchHighlightBackground': '#BB800966',
	'pickerGroup.border': '#E5E5E5',
	'pickerGroup.foreground': '#8B949E',
	'ports.iconRunningProcessForeground': '#369432',
	'progressBar.background': '#005FB8',
	'quickInput.background': '#F8F8F8',
	'quickInput.foreground': '#3B3B3B',
	'searchEditor.textInputBorder': '#CECECE',
	'settings.dropdownBackground': '#FFFFFF',
	'settings.dropdownBorder': '#CECECE',
	'settings.headerForeground': '#1F1F1F',
	'settings.modifiedItemIndicator': '#BB800966',
	'settings.numberInputBorder': '#CECECE',
	'settings.textInputBorder': '#CECECE',
	'sideBar.background': '#F8F8F8',
	'sideBar.border': '#E5E5E5',
	'sideBar.foreground': '#3B3B3B',
	'sideBarSectionHeader.background': '#F8F8F8',
	'sideBarSectionHeader.border': '#E5E5E5',
	'sideBarSectionHeader.foreground': '#3B3B3B',
	'sideBarTitle.foreground': '#3B3B3B',
	'statusBar.background': '#F8F8F8',
	'statusBar.border': '#E5E5E5',
	'statusBar.debuggingBackground': '#FD716C',
	'statusBar.debuggingForeground': '#000000',
	'statusBar.focusBorder': '#005FB8',
	'statusBar.foreground': '#3B3B3B',
	'statusBar.noFolderBackground': '#F8F8F8',
	'statusBarItem.compactHoverBackground': '#CCCCCC',
	'statusBarItem.errorBackground': '#C72E0F',
	'statusBarItem.focusBorder': '#005FB8',
	'statusBarItem.hoverBackground': '#B8B8B850',
	'statusBarItem.prominentBackground': '#6E768166',
	'statusBarItem.remoteBackground': '#005FB8',
	'statusBarItem.remoteForeground': '#FFFFFF',
	'tab.activeBackground': '#FFFFFF',
	'tab.activeBorder': '#F8F8F8',
	'tab.activeBorderTop': '#005FB8',
	'tab.activeForeground': '#3B3B3B',
	'tab.border': '#E5E5E5',
	'tab.hoverBackground': '#FFFFFF',
	'tab.inactiveBackground': '#F8F8F8',
	'tab.inactiveForeground': '#868686',
	'tab.lastPinnedBorder': '#D4D4D4',
	'tab.selectedBackground': '#ffffffa5',
	'tab.selectedBorderTop': '#68a3da',
	'tab.selectedForeground': '#333333b3',
	'tab.unfocusedActiveBorder': '#F8F8F8',
	'tab.unfocusedActiveBorderTop': '#E5E5E5',
	'tab.unfocusedHoverBackground': '#F8F8F8',
	'terminal.foreground': '#3B3B3B',
	'terminal.inactiveSelectionBackground': '#E5EBF1',
	'terminal.tab.activeBorder': '#005FB8',
	'terminalCursor.foreground': '#005FB8',
	'textBlockQuote.background': '#F8F8F8',
	'textBlockQuote.border': '#E5E5E5',
	'textCodeBlock.background': '#F8F8F8',
	'textLink.activeForeground': '#005FB8',
	'textLink.foreground': '#005FB8',
	'textPreformat.background': '#0000001F',
	'textPreformat.foreground': '#3B3B3B',
	'textSeparator.foreground': '#21262D',
	'titleBar.activeBackground': '#F8F8F8',
	'titleBar.activeForeground': '#1E1E1E',
	'titleBar.border': '#E5E5E5',
	'titleBar.inactiveBackground': '#F8F8F8',
	'titleBar.inactiveForeground': '#8B949E',
	'welcomePage.tileBackground': '#F3F3F3',
	'widget.border': '#E5E5E5'
};

export interface IWorkbenchTheme {
	readonly id: string;
	readonly label: string;
	readonly extensionData?: ExtensionData;
	readonly description?: string;
	readonly settingsId: string | null;
}

export interface IWorkbenchColorTheme extends IWorkbenchTheme, IColorTheme {
	readonly settingsId: string;
	readonly tokenColors: ITextMateThemingRule[];
}

export interface IColorMap {
	[id: string]: Color;
}

export interface IWorkbenchFileIconTheme extends IWorkbenchTheme, IFileIconTheme {
}

export interface IWorkbenchProductIconTheme extends IWorkbenchTheme, IProductIconTheme {
	readonly settingsId: string;

	getIcon(icon: IconContribution): IconDefinition | undefined;
}

export type ThemeSettingTarget = ConfigurationTarget | undefined | 'auto' | 'preview';


export interface IWorkbenchThemeService extends IThemeService {
	readonly _serviceBrand: undefined;
	setColorTheme(themeId: string | undefined | IWorkbenchColorTheme, settingsTarget: ThemeSettingTarget): Promise<IWorkbenchColorTheme | null>;
	getColorTheme(): IWorkbenchColorTheme;
	getColorThemes(): Promise<IWorkbenchColorTheme[]>;
	getMarketplaceColorThemes(publisher: string, name: string, version: string): Promise<IWorkbenchColorTheme[]>;
	readonly onDidColorThemeChange: Event<IWorkbenchColorTheme>;

	getPreferredColorScheme(): ColorScheme | undefined;

	setFileIconTheme(iconThemeId: string | undefined | IWorkbenchFileIconTheme, settingsTarget: ThemeSettingTarget): Promise<IWorkbenchFileIconTheme>;
	getFileIconTheme(): IWorkbenchFileIconTheme;
	getFileIconThemes(): Promise<IWorkbenchFileIconTheme[]>;
	getMarketplaceFileIconThemes(publisher: string, name: string, version: string): Promise<IWorkbenchFileIconTheme[]>;
	readonly onDidFileIconThemeChange: Event<IWorkbenchFileIconTheme>;

	setProductIconTheme(iconThemeId: string | undefined | IWorkbenchProductIconTheme, settingsTarget: ThemeSettingTarget): Promise<IWorkbenchProductIconTheme>;
	getProductIconTheme(): IWorkbenchProductIconTheme;
	getProductIconThemes(): Promise<IWorkbenchProductIconTheme[]>;
	getMarketplaceProductIconThemes(publisher: string, name: string, version: string): Promise<IWorkbenchProductIconTheme[]>;
	readonly onDidProductIconThemeChange: Event<IWorkbenchProductIconTheme>;
}

export interface IThemeScopedColorCustomizations {
	[colorId: string]: string;
}

export interface IColorCustomizations {
	[colorIdOrThemeScope: string]: IThemeScopedColorCustomizations | string;
}

export interface IThemeScopedTokenColorCustomizations {
	[groupId: string]: ITextMateThemingRule[] | ITokenColorizationSetting | boolean | string | undefined;
	comments?: string | ITokenColorizationSetting;
	strings?: string | ITokenColorizationSetting;
	numbers?: string | ITokenColorizationSetting;
	keywords?: string | ITokenColorizationSetting;
	types?: string | ITokenColorizationSetting;
	functions?: string | ITokenColorizationSetting;
	variables?: string | ITokenColorizationSetting;
	textMateRules?: ITextMateThemingRule[];
	semanticHighlighting?: boolean; // deprecated, use ISemanticTokenColorCustomizations.enabled instead
}

export interface ITokenColorCustomizations {
	[groupIdOrThemeScope: string]: IThemeScopedTokenColorCustomizations | ITextMateThemingRule[] | ITokenColorizationSetting | boolean | string | undefined;
	comments?: string | ITokenColorizationSetting;
	strings?: string | ITokenColorizationSetting;
	numbers?: string | ITokenColorizationSetting;
	keywords?: string | ITokenColorizationSetting;
	types?: string | ITokenColorizationSetting;
	functions?: string | ITokenColorizationSetting;
	variables?: string | ITokenColorizationSetting;
	textMateRules?: ITextMateThemingRule[];
	semanticHighlighting?: boolean; // deprecated, use ISemanticTokenColorCustomizations.enabled instead
}

export interface IThemeScopedSemanticTokenColorCustomizations {
	[styleRule: string]: ISemanticTokenRules | boolean | undefined;
	enabled?: boolean;
	rules?: ISemanticTokenRules;
}

export interface ISemanticTokenColorCustomizations {
	[styleRuleOrThemeScope: string]: IThemeScopedSemanticTokenColorCustomizations | ISemanticTokenRules | boolean | undefined;
	enabled?: boolean;
	rules?: ISemanticTokenRules;
}

export interface IThemeScopedExperimentalSemanticTokenColorCustomizations {
	[themeScope: string]: ISemanticTokenRules | undefined;
}

export interface IExperimentalSemanticTokenColorCustomizations {
	[styleRuleOrThemeScope: string]: IThemeScopedExperimentalSemanticTokenColorCustomizations | ISemanticTokenRules | undefined;
}

export type IThemeScopedCustomizations =
	IThemeScopedColorCustomizations
	| IThemeScopedTokenColorCustomizations
	| IThemeScopedExperimentalSemanticTokenColorCustomizations
	| IThemeScopedSemanticTokenColorCustomizations;

export type IThemeScopableCustomizations =
	IColorCustomizations
	| ITokenColorCustomizations
	| IExperimentalSemanticTokenColorCustomizations
	| ISemanticTokenColorCustomizations;

export interface ISemanticTokenRules {
	[selector: string]: string | ISemanticTokenColorizationSetting | undefined;
}

export interface ITextMateThemingRule {
	name?: string;
	scope?: string | string[];
	settings: ITokenColorizationSetting;
}

export interface ITokenColorizationSetting {
	foreground?: string;
	background?: string;
	fontStyle?: string; /* [italic|bold|underline|strikethrough] */
	fontFamily?: string;
	fontSize?: number;
	lineHeight?: number;
}

export interface ISemanticTokenColorizationSetting {
	foreground?: string;
	fontStyle?: string; /* [italic|bold|underline|strikethrough] */
	bold?: boolean;
	underline?: boolean;
	strikethrough?: boolean;
	italic?: boolean;
}

export interface ExtensionData {
	extensionId: string;
	extensionPublisher: string;
	extensionName: string;
	extensionIsBuiltin: boolean;
}

export namespace ExtensionData {
	export function toJSONObject(d: ExtensionData | undefined): any {
		return d && { _extensionId: d.extensionId, _extensionIsBuiltin: d.extensionIsBuiltin, _extensionName: d.extensionName, _extensionPublisher: d.extensionPublisher };
	}
	export function fromJSONObject(o: any): ExtensionData | undefined {
		if (o && isString(o._extensionId) && isBoolean(o._extensionIsBuiltin) && isString(o._extensionName) && isString(o._extensionPublisher)) {
			return { extensionId: o._extensionId, extensionIsBuiltin: o._extensionIsBuiltin, extensionName: o._extensionName, extensionPublisher: o._extensionPublisher };
		}
		return undefined;
	}
	export function fromName(publisher: string, name: string, isBuiltin = false): ExtensionData {
		return { extensionPublisher: publisher, extensionId: `${publisher}.${name}`, extensionName: name, extensionIsBuiltin: isBuiltin };
	}
}

export interface IThemeExtensionPoint {
	id: string;
	label?: string;
	description?: string;
	path: string;
	uiTheme?: ThemeTypeSelector;
	_watch: boolean; // unsupported options to watch location
}
