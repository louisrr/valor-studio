# Functions and Modules

Functions are the unit of computation in Valor; modules are the unit of
organization. This page covers declaring and calling functions, generics,
contracts, and how modules and the standard library fit together.

## Declaring a function

A function declaration is **`[visibility] ReturnType name(params) { body }`**. The
return type leads, and each parameter is written **`Type name`**:

```valor
public i32 add(i32 a, i32 b) {
    return a + b;
}
```

Use `void` for a function that returns nothing:

```valor
public void greet(string who) {
    std::string::print(who);
}
```

## Calling functions

Call by name with a parenthesized argument list. Functions in another module are
reached with a `::` qualified path:

```valor
i32 sum   = add(2, 3);
i32 found = std::bytes::find(haystack, needle);
```

## Visibility

A declaration is **private to its module** unless marked otherwise:

| Modifier | Meaning |
|---|---|
| `pub` / `public` | Exported / visible outside the module |
| `private` | Module-internal (the default) |
| `protected` | Visible to subtypes (used in the object model) |
| `encrypted` | Encryption scope for sensitive state |

```valor
public  i32 exported(i32 x) { return x; }
private i32 helper(i32 x)   { return x + 1; }
```

## Functions as values

Valor has function-typed parameters and inline lambdas, which is how the standard
library expresses callbacks.

### Function-type parameters

A function type is written **`(ArgTypes) -> ReturnType`**:

```valor
// `mapper` is a function taking an i32 and returning an i32.
public i32 apply(i32 x, (i32) -> i32 mapper) {
    return mapper(x);
}
```

### Lambdas

A lambda is **`(Type name, ...) -> ReturnType { body }`** and can be passed
directly where a function value is expected:

```valor
i32 y = apply(10, (i32 n) -> i32 { return n * n; });   // 100
```

## Generics (templates)

Prefix a declaration with `template <...>` to make it generic over types or over
constant values. Type parameters use `typename` (or `class`); value parameters
are written `Type name`:

```valor
template <typename T>
public T identity(T value) {
    return value;
}

template <typename T, i64 N>
public i64 capacity() {
    return N;
}
```

Structs can be generic too:

```valor
template <typename T>
public struct Box {
    public T value;
};
```

At the call site you can supply template arguments explicitly:

```valor
i32 z = identity<i32>(5);
```

## Compile-time evaluation

Valor distinguishes several compile-time tiers you can attach to a declaration:

| Keyword | Meaning |
|---|---|
| `const` | An immutable constant binding |
| `constexpr` | Usable in constant expressions |
| `consteval` | *Must* be evaluated at compile time |
| `constval` | The reliable tier for large / exact constants |
| `comptime` | A compile-time execution block |

```valor
constexpr i32 square(i32 n) {
    return n * n;
}

const i32 NINE = square(3);   // folded at compile time
```

> **Tip.** When a literal is large enough to overflow or mis-lower, route it
> through a `constval` declaration — that is the dependable path for exact
> constants.

## Contracts: `requires` / `ensures`

Attach preconditions and postconditions directly to a function. The compiler
tries to *prove* each obligation and *lowers* it to a runtime check when it
cannot:

```valor
public i32 divide(i32 a, i32 b)
    requires b != 0
{
    return a / b;
}
```

## Cost and safety annotations

Annotations (attributes) precede a declaration with `@`:

```valor
@noalloc                 // asserts (and can prove) no heap allocation
@cost(worst_case_tokens = 2000)
public i32 hot_path(i32 x) {
    return x + 1;
}
```

Other commonly useful attributes include `@pure` (no side effects),
`@max_iter(N)` (bounded iteration), and `@vectorize` / `@simd_required`.

## Kernel and device functions

For accelerator and SIMD work, `kernel` marks a device entry point and `device`
marks device-callable code:

```valor
kernel void saxpy(f32 a, span<f32, global> x, span<f32, global> y) {
    // ... elementwise work ...
}
```

## Deep-learning operators

Because ML operators are part of the language, model math reads as ordinary
expressions. The `@` operator is matrix multiplication, and operators like
`attention`, `softmax`, `layernorm`, `relu`, and `conv2d` are built in:

```valor
// `@` is matmul; `scores` then flows through softmax.
Tensor<2, [?, ?], f32> scores = query @ key;
```

## Modules and imports

Every file starts with a `module` declaration. Bring in other modules with
`import`, using a **dot-separated** path:

```valor
module app;

import std.io;
import std.bytes;
import std.collections.hash as hmap;   // alias with `as`
```

- Import paths use **dots**: `std.collections.hash`.
- Members are then referenced with **`::`**: `std::bytes::find(...)`.
- `as` gives a module an alias you can use as a shorter qualifier.

## The standard library

The standard library lives under `std::…` and is broad. A sampling:

| Module | What it offers |
|---|---|
| `std.core` | Foundational types (`Option`, `Result`, `Either`) and runtime lifecycle |
| `std.io` | Input/output |
| `std.math` | Scalar numerics and linear-algebra storage |
| `std.bytes` | Byte search, comparison, parsing, UTF-8, tokenization |
| `std.collections.*` | Hash, ordered, persistent, queue, and sequence containers |
| `std.ai` | Deep-learning primitives |
| `std.random` | Deterministic, counter-based RNGs and distributions |
| `std.graph` | Graph algorithms (BFS/DFS, shortest paths, SCC, …) |

Import the module you need and call its functions with a qualified path:

```valor
import std.core;

// Option is a tagged value; helpers unwrap it safely.
i32 v = std::core::optionUnwrapOrI32(tag, value, 0);
```

## Where to go next

You now have the full surface of everyday Valor: types, control flow, functions,
generics, contracts, and modules. From here, explore the
**[Standard Library](standard-library/README.md)** for the `std.*`/`web.*` modules
your program needs, and reach for `--strict-deterministic` when reproducibility
must be guaranteed.
