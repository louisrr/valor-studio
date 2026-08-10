# Control Flow

Valor's control flow is C-family: braced blocks, parenthesized conditions, and a
familiar set of loops. Conditions are ordinary `bool` expressions.

## Blocks

A block groups statements and introduces a scope:

```valor
{
    i32 tmp = compute();
    use(tmp);
}
```

## Conditionals: `if` / `else`

```valor
if (n < 0) {
    return 0;
} else {
    return n;
}
```

`else` is optional, and `else if` chains work as expected:

```valor
if (score >= 90) {
    grade = 1;
} else if (score >= 80) {
    grade = 2;
} else {
    grade = 3;
}
```

> **`<` vs. templates.** After an identifier, a bare `<` may be read as the start
> of a template argument list rather than "less than". If a comparison like
> `a < b` confuses the parser, swap the operands: write `b > a`.

## `while` loops

```valor
i32 i = 0;
while (i < 10) {
    process(i);
    i = i + 1;
}
```

## `for` loops

The classic three-clause `for` is available and behaves like C — an initializer,
a condition, and a step:

```valor
for (i32 i = 0; i < n; i = i + 1) {
    accumulate(i);
}
```

The `++` shorthand is accepted in the step position:

```valor
for (i32 i = 0; i < n; i++) {
    accumulate(i);
}
```

## `for each` — deterministic traversal

`for each` walks a collection with a stable, single-pass, deterministic order.
The collection is evaluated exactly once. There are two forms:

```valor
// Element only
for each item in items {
    handle(item);
}

// Indexed: (index, element)
for each (idx, item) in items {
    handle_at(idx, item);
}
```

Add `mut` to write elements back as you traverse:

```valor
for each mut x in values {
    x = x + 1;
}
```

### Execution policies

You can request a traversal policy with an attribute. **Serial** (the default)
and **SIMD** are available today:

```valor
@policy(simd)
for each x in data {
    accumulate(x);
}
```

> **Staged policies.** `@policy(numa_local)`, `@policy(parallel_deterministic)`,
> and `@constant_trace` are accepted by the parser but rejected at compile time in
> this version — use `serial` or `simd` for now.

### Frozen extent

Inside a `for each`, you may **not reassign the collection** you are iterating —
the traversal length is frozen when the loop starts. Doing so is a compile error.

## `switch`

`switch` selects among constant cases; `break` ends a case and `default` handles
the rest:

```valor
switch (status) {
    case 0: { handle_ok();    break; }
    case 1: { handle_retry(); break; }
    default: { handle_fail(); break; }
}
```

`switch` works well with enums:

```valor
switch (color) {
    case Color::Red:   { r(); break; }
    case Color::Green: { g(); break; }
    default:           { b(); break; }
}
```

## `return`

`return` exits a function, optionally with a value. A `void` function returns
with a bare `return;`:

```valor
public i32 doubled(i32 n) {
    return n * 2;
}

public void log_ready() {
    if (!ready) { return; }   // early exit
    emit();
}
```

## A tip on loop and control shape

For the most predictable code generation, prefer a **single exit** — one `return`
at the end of a function rather than many early returns scattered through nested
`if`s. Deeply nested early returns can occasionally trip the compiler's
uninitialized-value analysis; restructuring to a single exit resolves it.

```valor
// Preferred: compute into a result, return once.
public i32 classify(i32 n) {
    i32 result = 0;
    if (n > 0) {
        result = 1;
    } else if (n < 0) {
        result = -1;
    }
    return result;
}
```

## Loop attributes

Beyond `@policy`, loops accept hints that bound or transform them:

| Attribute | Effect |
|---|---|
| `@max_iter(N)` | Cap the iteration count (bounded execution) |
| `@unroll(N)` | Unroll the loop by `N` |
| `@vectorize` | Request SIMD vectorization |

```valor
@max_iter(1024)
while (!done) {
    step();
}
```

## Next

Continue to **[Functions and Modules](../functions.md)**.
