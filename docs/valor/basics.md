# Language Basics

This section covers the everyday building blocks of a Valor program. If you know
a C-family language, most of this will be a matter of noting the differences.

## The shape of a program

A source file is a `module` declaration followed by imports and top-level
declarations (functions, variables, structs, enums, classes, services):

```valor
module app;

import std.io;

public const i32 LIMIT = 100;

public i32 main() {
    return 0;
}
```

## Syntax at a glance

- **Statements end with a semicolon `;`.** Newlines are not significant.
- **Blocks use braces `{ }`.**
- **Declarations lead with a type.** A function's return type comes before its
  name; a variable's type comes before *its* name (`i32 count = 0;`).
- **Comments** start with `//` and run to the end of the line. There are no block
  comments.

```valor
// This is a comment.
i32 total = 0;   // trailing comment
```

## Operators

Valor's operators follow C precedence and associativity.

| Category | Operators | Notes |
|---|---|---|
| Arithmetic | `+` `-` `*` `/` `%` | `/` and `%` **trap** on a zero divisor and on `INT_MIN / -1` |
| Bitwise | `&` `\|` `^` `~` | Integer operands only; `~` is width-masked |
| Shift | `<<` `>>` | Integer operands only; `>>` is arithmetic for signed, logical for unsigned |
| Comparison | `==` `!=` `<` `<=` `>` `>=` | Yield `bool` |

Precedence, tightest first: unary → `* / %` → `+ -` → `<< >>` → `< <= > >=` →
`== !=` → `&` → `^` → `|`.

> **Shifts trap out of range.** A shift whose amount is greater than or equal to the
> operand's bit width (e.g. `x << 64` on a 64-bit value) is a runtime trap, not
> undefined behavior — consistent with Valor's rule that an operation is either
> well-defined or it fails. A provably in-range constant shift (`x << 3`) compiles
> with no runtime check.

Bitwise, modulo, and shift operators reject floating-point operands at compile time.

### Numeric literals

Integer and floating-point literals may carry a type suffix (`123i64`, `1.0f32`,
`2bf16`). Floating-point literals also accept **scientific notation** — an `e` or `E`
exponent with an optional sign. A literal with an exponent is a float even without a
decimal point:

```valor
f64 planck   = 6.62607015e-34;
f64 thousand = 1e3;          // float, value 1000.0
f32 giga     = 1e9f32;       // exponent then f32 suffix
```

## Identifiers

- Must **start with a letter**, then may contain letters, digits, underscores,
  and hyphens.
- Are **case-sensitive**.

> **Reserved-word gotcha.** Valor bakes many math and deep-learning words into the
> language as keywords — `gate`, `residual`, `softmax`, `rms_norm`, `shard`,
> `reservoir`, `add`, `mul`, and more. You **cannot** use them as variable or
> function names. The idiomatic fix is a suffix: `gate_into`, `residual_out`.

## Two pages to read next

- **[Variables and Types](basics/variables-and-types.md)** — how to declare data
  and what types are available.
- **[Control Flow](basics/control-flow.md)** — conditionals, loops, and how
  execution moves through your code.
