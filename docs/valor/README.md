![Valor](https://img.shields.io/badge/Valor-Compiler-black)
![Runtime](https://img.shields.io/badge/Runtime-Deterministic-orange)
![C ABI](https://img.shields.io/badge/C_ABI-Stable-blue)
![Python FFI](https://img.shields.io/badge/Python_FFI-Supported-blue)
![LLVM](https://img.shields.io/badge/LLVM-Backend-blue)
![Lean 4](https://img.shields.io/badge/Lean4-Scoped_Proofs-purple)
![Property Tested](https://img.shields.io/badge/Property_Tests-Covered-purple)
![IR Validation](https://img.shields.io/badge/IR_Validation-Covered-success)
![determinism](https://img.shields.io/badge/execution-deterministic%20O(1)-brightgreen)
![LMFK](https://img.shields.io/badge/LMFK-contract%20compliant-000000)

# The Valor Programming Language

Valor is a statically typed, ahead-of-time compiled systems language built for
workloads where **the result and the timing must be reproducible**: numerical
computing, deep-learning kernels, high-frequency trading, and deployable
services. If you have written C, Rust, or C++, Valor's surface will feel
familiar — declarations lead with a type, blocks use braces, statements end
with a semicolon — with a few deliberate differences aimed at determinism.

## Why Valor

- **Deterministic by design.** The same source, built the same way, produces the
  same bytes and the same run-to-run behavior. A strict mode (`--strict-deterministic`)
  turns any determinism violation into a hard compile error.
- **Contracts and invariants are first-class.** Preconditions (`requires`),
  postconditions (`ensures`), and reusable constraint sets (`invariant`) let the
  compiler *prove* properties — or lower them to runtime checks when it can't.
- **Deep learning is syntax, not a library.** Operators like `matmul`, `attention`,
  `softmax`, and `layernorm` are built into the language, so models compose as
  first-class expressions.
- **Cost is part of the type system.** You can declare a worst-case budget
  (`@cost`) and have the compiler bound tail latency, making p99.999 a *proven
  ceiling* rather than a measurement.
- **Native performance.** Valor compiles through LLVM to native machine code.

## A first taste

```valor
module app;

// Return type leads, parameters are `Type name`.
public i64 fib(i64 n) {
    if (n < 2) { return n; }
    return fib(n - 1) + fib(n - 2);
}

public i32 main() {
    i64 answer = fib(10);
    return 0;
}
```

## What Valor is good at

| Domain | What the language gives you |
|---|---|
| Numerics & linear algebra | Fixed and dynamic `Tensor`/`Vector`/`Matrix` types, exact reproducibility |
| Deep learning | Built-in `matmul`, `attention`, `conv2d`, `softmax`, normalization operators |
| Systems & HFT | Bounded, constant-time code paths; `@noalloc`; worst-case cost contracts |
| Services | A structured `service` unit with deployment/manifest tooling |

## Invariants and services

Valor makes correctness and deployment intent part of the language instead of
leaving them in disconnected configuration files:

- **[`invariant`](getting-started/invariants.md)** defines predicates that must
  remain true for a type or loop. Function `requires` and `ensures` clauses add
  preconditions and postconditions. Proven checks can be erased; checks that
  must remain dynamic are handled according to the selected build profile.
- **[`service`](getting-started/services.md)** groups APIs, handlers, state,
  authentication, security, events, observability, resources, and deployment
  intent in one compiler-visible declaration. Valor emits stable service
  metadata and deployment artifacts for external drivers to consume.

## Supported platforms

Valor's backend targets these platform/architecture pairs:

- **Apple** — AArch64 (Apple silicon, macOS)
- **Android** — AArch64 and x86-64
- **Linux** — x86-64
- **FreeBSD** — x86-64
- **Windows** — x86-64

## Building from source

Valor's compiler is built with CMake and links against **LLVM 20.x**. Newer LLVM
majors are **not** supported yet — LLVM 22, for example, relocated the pass-plugin
header and changed ABI that Valor depends on. CMake hard-errors with guidance if it
finds an unsupported LLVM.

Prerequisites: CMake ≥ 3.18, Ninja or Make, a C++20 compiler, and **LLVM 20.x**.

```bash
# macOS (Homebrew) — LLVM 20 is keg-only, so point CMake at it explicitly:
brew install llvm@20
cmake -S . -B build -DCMAKE_BUILD_TYPE=Release \
  -DLLVM_DIR="$(brew --prefix llvm@20)/lib/cmake/llvm"
cmake --build build -j
ctest --test-dir build --output-on-failure --timeout 60
```

> **macOS note.** Binaries link the floating `opt/llvm` symlink, so the LLVM 20.x
> toolchain must also be the one resolved at *runtime*. If a newer `llvm` is linked
> as the default, either `brew link llvm@20` or keep LLVM 20 on the loader path when
> running the tests.

On Linux, install LLVM 20 from your distro or apt.llvm.org and pass the matching
`-DLLVM_DIR=.../lib/cmake/llvm`.


## Service deployment drivers

Valor separates deterministic compilation from effectful deployment. The
compiler validates a `service` declaration and can emit Docker Compose or
Kubernetes artifacts. Live infrastructure operations are performed by
separately versioned drivers that verify and consume the emitted deployment
contract.

| Driver | Compiler output or intent | Driver responsibility |
|---|---|---|
| Docker (`duq.docker`) | Docker Compose YAML and a pinned image reference | Build/pull images and preview, start, stop, or remove containers |
| Kubernetes (`duq.kubernetes`) | Kubernetes YAML | Server-side dry-run, apply, rollout, rollback, and delete cluster objects |
| AWS (`duq.aws`) | AWS provider intent | Map identity, policy, networking, storage, scaling, and accelerator requirements through AWS SDKs |
| GCP (`duq.gcp`) | GCP provider intent | Map the same contract to GCP identities, policies, networking, scaling, and accelerators |
| Azure (`duq.azure`) | Azure provider intent | Map the same contract to Azure identities, policies, networking, scaling, and accelerators |

Compilation never authenticates to Docker, Kubernetes, AWS, GCP, or Azure and
never mutates live infrastructure. Preview, apply, rollback, and destroy remain
explicit driver operations. See **[Building services](getting-started/services.md)**
for a first deployment artifact and **[Service Primitive](SERVICE.md)** for the
full driver contract, safety rules, and adapter examples.

## How this manual is organized

- **[Getting Started](getting-started.md)** — install the toolchain, compile and
  run your first program.
  - **[Using invariants](getting-started/invariants.md)** — add type, function,
    and loop correctness contracts.
  - **[Building services](getting-started/services.md)** — declare a service,
    configure its target, and emit deployment artifacts.
- **[Language Basics](basics.md)** — variables, types, and control flow.
- **[Functions and Modules](functions.md)** — functions, generics, imports, and
  the standard library.

> **Version note.** This manual describes Valor v0.1 as accepted by the shipping
> `valorc` front-end. A few constructs are recognized by the parser but not yet
> fully lowered by the backend; those are flagged inline as **staged**.