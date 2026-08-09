# Getting Started

This page walks you from an empty directory to a running Valor program.

## The compiler

Valor programs are built with **`valorc`** (the command is also available as
`valor`). Source files use the `.valor` extension (the `.draco` extension is also
accepted).

Check your install:

```bash
valorc --version
```

You should see `valorc 0.1.0`.

## Hello, Valor

Create a file called `hello.valor`:

```valor
module app;

import std.string;

public i32 main() {
    std::string::print("Hello, Valor!\n");
    return 0;
}
```

Three things to notice:

- **`module app;`** names the current module. Every file belongs to a module.
- **`import std.string;`** pulls in a standard-library module. Import paths are
  dot-separated (`std.string`), and once imported you call members with `::`
  (`std::string::print`).
- **`public i32 main()`** is the entry point. The return type (`i32`) comes
  *before* the name, and `public` makes it visible outside the module.

## Running a program

The quickest loop is `run`, which compiles and executes in one step:

```bash
valorc run hello.valor
```

A bare filename is shorthand for `run`, so this is equivalent:

```bash
valorc hello.valor
```

## Building a binary

To produce a linked executable instead of running immediately, use `build`:

```bash
valorc build hello.valor --out hello
```

Common build flags:

| Flag | Purpose |
|---|---|
| `--out <path>` | Name of the output binary |
| `-O0` … `-O3` | Optimization level |
| `-g` | Emit debug info |
| `--target <triple>` | Cross-compile for another platform |
| `--mode static\|shared` | Static binary or shared library |
| `--strict-deterministic` | Fail the build on any determinism violation |

> **Linking tip.** Valor links through a `clang`-compatible driver. If linking
> fails, point Valor at a full LLVM/Homebrew `clang` with `--clang <path>`.

## Cross-compiling

Pass a target triple to build for one of the supported platforms:

```bash
valorc build hello.valor --target aarch64-apple-darwin --out hello
```

Supported platforms: Apple AArch64, Android AArch64 / x86-64, Linux x86-64,
FreeBSD x86-64, and Windows x86-64.

## Project configuration: `valor.json`

For anything larger than a single file, a `valor.json` manifest sets project
defaults that the CLI can still override. It configures things like the runtime
allocator and the security profile:

```json
{
  "runtime":  { "allocator": "system" },
  "security": { "profile": "baseline" }
}
```

- `runtime.allocator` — `system`, `mimalloc`, `tcmalloc`, `jemalloc`, and others.
- `security.profile` — `baseline`, `production`, `hardened`, or `finance`.

## Exploring interactively

Run `valorc` with no arguments to start a REPL, or validate a snippet without a
full build:

```bash
valorc check-snippet "i32 x = 1 + 2;" --tier sema --kind statement
```

The `--tier` (`lex`, `parse`, `sema`) controls how far the checker goes — handy
for editor and tooling integration.

## Next steps

You now have a working toolchain. Choose the next part of the Getting Started
track:

- **[Using invariants](getting-started/invariants.md)** adds type, function, and
  loop correctness contracts.
- **[Building services](getting-started/services.md)** declares an API service
  and emits Docker Compose or Kubernetes deployment artifacts.
- **[Language Basics](basics.md)** covers the type system and control flow.
