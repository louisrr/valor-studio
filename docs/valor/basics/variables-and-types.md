# Variables and Types

Valor is statically typed. Every value has a type known at compile time, and the
type leads the declaration.

## Declaring variables

The everyday form is **`Type name = expression;`** — the same C-style order you'd
use for a function parameter. A typed variable is **mutable by default**:

```valor
i32 count = 0;
count = count + 1;   // fine — mutable

f64 ratio = 3.5;
string label = "ok";
```

### Immutable typed variables: `const`

Prefix with `const` to forbid reassignment:

```valor
const i32 LIMIT = 100;
// LIMIT = 200;   // error: const cannot be reassigned
```

### Inferred constants: `let`

`let` introduces an **immutable, type-inferred** binding. It is deliberately
minimal — the type is always inferred and it can never be reassigned:

```valor
let width  = 640;          // inferred i32
let name   = "valor";      // inferred string
let area   = width * 480;  // computed constant
```

> **`let` is constants-only.** There is no `let mut`, and you cannot write a type
> annotation on a `let` (`let x: i32 = 0` is rejected). When you need a *mutable*
> or *explicitly typed* variable, use the `Type name = expr` form above.

### Choosing between the forms

| You want… | Use |
|---|---|
| A mutable variable | `Type name = expr;` |
| An immutable, explicitly typed value | `const Type name = expr;` |
| An immutable value, type inferred | `let name = expr;` |

## Scalar types

| Category | Types |
|---|---|
| Signed integers | `i8`, `i16`, `i32`, `i64`, `i128`, `isize` |
| Unsigned integers | `u8`, `u16`, `u32`, `u64`, `u128`, `usize` |
| Floating point | `f16`, `bf16`, `f32`, `f64` |
| Boolean | `bool` (`true` / `false`) |
| Text | `string` (UTF-8) |
| Character | `char` (a 32-bit Unicode scalar) |
| No value | `void` (for functions that return nothing) |

```valor
u8   flags   = 4;
i64  total   = 9000;
f32  weight  = 1.5;
bool ready   = true;
```

## Literals

- **Integers** are plain decimal digits: `42`, `1000`.
- **Floats** use a decimal point: `3.14`, `0.5`.
- **Booleans** are `true` and `false`.
- **Strings** are double-quoted: `"hello"`.

> **Numeric caveats to know.** These reflect real v0.1 codegen limits:
> - **No scientific notation** — write `1000000000`, not `1e9`.
> - Keep integer literals **below 2⁶³**; larger values can mis-lower.
> - There is **no `%` modulo operator and no bitwise operators** in ordinary
>   expressions; use standard-library functions for those.

## Conversions with `as`

Conversions between types are always explicit, using `as`:

```valor
i32 n     = 300;
i64 wide  = n as i64;
f64 fract = n as f64;
u8  small = n as u8;    // explicit narrowing
```

## Arrays

A fixed-size array is written `[T; N]` and built with a bracketed literal.
Elements are read by subscript:

```valor
[i32; 3] xs = [10, 20, 30];
i32 first = xs[0];        // 10
```

## Vectors, matrices, and tensors

Valor has first-class numeric container types for math and ML work:

```valor
Vector<f32, 4>            v;    // 4-lane SIMD vector
Matrix<f64, 3, 3>         m;    // 3x3 matrix
Tensor<2, [128, 256], f32> w;   // rank-2 tensor, dtype f32
```

### TensorView

A `Tensor` *owns* its data. A `TensorView` is a lightweight, **non-owning**
borrow into an existing tensor — it carries the rank, shape, and dtype but no
storage of its own, so passing one is cheap and copies nothing. Views come in a
read-only form (`TensorView`) and a writable form (`TensorViewMut`), and each
carries a lifetime (`'a`) tying it to the tensor it borrows from:

```valor
Tensor<2, [128, 256], f32> w;

// Borrow the whole tensor as a read-only view.
std::la::TensorView<'a, 2, f32> v = w.view();

// Borrow it mutably so a routine can write into the backing storage.
std::la::TensorViewMut<'a, 2, f32> vmut = w.view_mut();

// Views are what std routines accept, so they can operate on any tensor
// (or sub-region of one) without taking ownership of the data.
std::la::fill(vmut, 0.0);
```

Because a view only borrows, the tensor `w` must outlive every view taken from
it — the `'a` lifetime is what the compiler checks to guarantee that.

### Stride

A view does not have to be contiguous. Its **strides** say how many elements to
step in the underlying buffer to move one position along each axis. A row-major
`[128, 256]` tensor has strides `[256, 1]`: advancing one row skips 256
elements, advancing one column skips 1. Strides are what let a view describe a
non-contiguous slice — a single column, a transpose, or a broadcast — without
copying:

```valor
Tensor<2, [128, 256], f32> w;

// Contiguous row-major strides for the full tensor: [256, 1].
std::la::TensorView<'a, 2, f32> v = w.view();

// A column view: same buffer, extent 128, but stride 256 so each step
// jumps a whole row instead of one element.
std::la::TensorView<'a, 1, f32> col = w.column(3);   // stride 256

// A transposed view just swaps the strides to [1, 256] — no data moves.
std::la::TensorView<'a, 2, f32> t = w.transpose();
```

Since strides are just per-axis step counts, a stride of `1` is an ordinary
contiguous run, while a larger stride gathers spread-out elements (a column or
channel) as if they were dense.

A tensor dimension of `?` marks an unknown (dynamic) extent:

```valor
Tensor<2, [?, 768], f32> batch;  // dynamic first dimension
```

Valid tensor element types (dtypes) include `f16`, `bf16`, `f32`, `f64`, `i8`,
and `i32`.

## Structs

A `struct` groups named fields into an aggregate value type. Fields carry their
own visibility:

```valor
public struct Point {
    public i32 x;
    public i32 y;
};

// Construct with a brace literal (positional), then read fields with `.`.
Point p = Point{3, 4};
i32   px = p.x;         // 3
```

> **Field mutation is limited in v0.1.** You construct a struct value whole and
> read its fields; writing an individual field in place (`p.x = 5`) is a staged
> feature. Build a new value instead when you need a change.

## Enums

Scoped enumerations declare a fixed set of named values. Members are referenced
with `::`, and enums support `==` and `switch`:

```valor
public enum Color {
    Red,
    Green,
    Blue
};

Color c = Color::Green;
bool  isGreen = c == Color::Green;
```

You can pin the underlying integer type and explicit values:

```valor
public enum Status : u8 {
    Ok    = 0,
    Retry = 1,
    Fail  = 2
};
```

## Pointers and spans (systems code)

For low-level and interop code, Valor has address-space-aware pointers and spans:

```valor
ptr<i32, host>   p;    // pointer to i32 in the host address space
span<f32, global> s;   // a bounded view over f32 values
```

Address spaces are `global`, `shared`, `local`, `constant`, and `host`.

## Next

Continue to **[Control Flow](control-flow.md)** to put these values to work.
