<!-- stdlib-reference-style: modern -->
> # `std::math`

`std::math` core mathematical functions.

[Standard library](standard-library/README.md) / [Algorithms and computing](standard-library/README.md#algorithms-and-computing) / **Mathematics**

> **Source:** `stdlib/std/math.valor` · **Routines:** 20 public · 1 internal

## Routines

<details>
<summary>Browse all 21 routines</summary>

- [`runtime`](#fn-runtime)
- [`abs`](#fn-abs)
- [`abs64`](#fn-abs64)
- [`min`](#fn-min)
- [`max`](#fn-max)
- [`clamp`](#fn-clamp)
- [`min_u32`](#fn-min-u32)
- [`max_u32`](#fn-max-u32)
- [`clamp_u32`](#fn-clamp-u32)
- [`sqrtf`](#fn-sqrtf)
- [`sqrt`](#fn-sqrt)
- [`floorf`](#fn-floorf)
- [`floor`](#fn-floor)
- [`ceilf`](#fn-ceilf)
- [`ceil`](#fn-ceil)
- [`clz_u32`](#fn-clz-u32)
- [`ctz_u32`](#fn-ctz-u32)
- [`popcount_u32`](#fn-popcount-u32)
- [`clz_u64`](#fn-clz-u64)
- [`ctz_u64`](#fn-ctz-u64)
- [`popcount_u64`](#fn-popcount-u64)

</details>

## API reference

<a id="fn-runtime"></a>

> ## `runtime`

> *Internal API*
>
> Provides the module's **runtime** operation. Returns `@`.

```valor
@runtime(ai)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `ai`: ai (by value)

> ### RETURNS (@)

> ### EXAMPLE
>
> ```valor
> @ result = std::math::runtime(ai);
> ```

> ### SEE ALSO
>
> - [`std::math::abs`](#fn-abs)
> - [`std::math::abs64`](#fn-abs64)
> - [`std::math::min`](#fn-min)

<a id="fn-abs"></a>

> ## `abs`

> Provides the module's **abs** operation. Returns `i32`.

```valor
public i32 abs(i32 v)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `v`: i32 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::math::abs(v);
> ```

> ### SEE ALSO
>
> - [`std::math::runtime`](#fn-runtime)
> - [`std::math::abs64`](#fn-abs64)
> - [`std::math::min`](#fn-min)

<a id="fn-abs64"></a>

> ## `abs64`

> Provides the module's **abs64** operation. Returns `i64`.

```valor
public i64 abs64(i64 v)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `v`: i64 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::math::abs64(v);
> ```

> ### SEE ALSO
>
> - [`std::math::runtime`](#fn-runtime)
> - [`std::math::abs`](#fn-abs)
> - [`std::math::min`](#fn-min)

<a id="fn-min"></a>

> ## `min`

> Provides the module's **min** operation. Returns `i32`.

```valor
public i32 min(i32 a, i32 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: i32 (by value)
> - `b`: i32 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::math::min(a, b);
> ```

> ### SEE ALSO
>
> - [`std::math::runtime`](#fn-runtime)
> - [`std::math::abs`](#fn-abs)
> - [`std::math::abs64`](#fn-abs64)

<a id="fn-max"></a>

> ## `max`

> Provides the module's **max** operation. Returns `i32`.

```valor
public i32 max(i32 a, i32 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: i32 (by value)
> - `b`: i32 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::math::max(a, b);
> ```

> ### SEE ALSO
>
> - [`std::math::runtime`](#fn-runtime)
> - [`std::math::abs`](#fn-abs)
> - [`std::math::abs64`](#fn-abs64)

<a id="fn-clamp"></a>

> ## `clamp`

> Provides the module's **clamp** operation. Returns `i32`.

```valor
public i32 clamp(i32 v, i32 lo, i32 hi)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `v`: i32 (by value)
> - `lo`: i32 (by value)
> - `hi`: i32 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::math::clamp(v, lo, hi);
> ```

> ### SEE ALSO
>
> - [`std::math::runtime`](#fn-runtime)
> - [`std::math::abs`](#fn-abs)
> - [`std::math::abs64`](#fn-abs64)

<a id="fn-min-u32"></a>

> ## `min_u32`

> Provides the module's **min u32** operation. Returns `u32`.

```valor
public u32 min_u32(u32 a, u32 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: u32 (by value)
> - `b`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::math::min_u32(a, b);
> ```

> ### SEE ALSO
>
> - [`std::math::runtime`](#fn-runtime)
> - [`std::math::abs`](#fn-abs)
> - [`std::math::abs64`](#fn-abs64)

<a id="fn-max-u32"></a>

> ## `max_u32`

> Provides the module's **max u32** operation. Returns `u32`.

```valor
public u32 max_u32(u32 a, u32 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: u32 (by value)
> - `b`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::math::max_u32(a, b);
> ```

> ### SEE ALSO
>
> - [`std::math::runtime`](#fn-runtime)
> - [`std::math::abs`](#fn-abs)
> - [`std::math::abs64`](#fn-abs64)

<a id="fn-clamp-u32"></a>

> ## `clamp_u32`

> Provides the module's **clamp u32** operation. Returns `u32`.

```valor
public u32 clamp_u32(u32 v, u32 lo, u32 hi)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `v`: u32 (by value)
> - `lo`: u32 (by value)
> - `hi`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::math::clamp_u32(v, lo, hi);
> ```

> ### SEE ALSO
>
> - [`std::math::runtime`](#fn-runtime)
> - [`std::math::abs`](#fn-abs)
> - [`std::math::abs64`](#fn-abs64)

<a id="fn-sqrtf"></a>

> ## `sqrtf`

> Provides the module's **sqrtf** operation. Returns `f32`.

```valor
public f32 sqrtf(f32 v)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `v`: f32 (by value)

> ### RETURNS (f32)

> ### EXAMPLE
>
> ```valor
> f32 result = std::math::sqrtf(v);
> ```

> ### SEE ALSO
>
> - [`std::math::runtime`](#fn-runtime)
> - [`std::math::abs`](#fn-abs)
> - [`std::math::abs64`](#fn-abs64)

<a id="fn-sqrt"></a>

> ## `sqrt`

> Provides the module's **sqrt** operation. Returns `f64`.

```valor
public f64 sqrt(f64 v)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `v`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::math::sqrt(v);
> ```

> ### SEE ALSO
>
> - [`std::math::runtime`](#fn-runtime)
> - [`std::math::abs`](#fn-abs)
> - [`std::math::abs64`](#fn-abs64)

<a id="fn-floorf"></a>

> ## `floorf`

> Provides the module's **floorf** operation. Returns `f32`.

```valor
public f32 floorf(f32 v)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `v`: f32 (by value)

> ### RETURNS (f32)

> ### EXAMPLE
>
> ```valor
> f32 result = std::math::floorf(v);
> ```

> ### SEE ALSO
>
> - [`std::math::runtime`](#fn-runtime)
> - [`std::math::abs`](#fn-abs)
> - [`std::math::abs64`](#fn-abs64)

<a id="fn-floor"></a>

> ## `floor`

> Provides the module's **floor** operation. Returns `f64`.

```valor
public f64 floor(f64 v)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `v`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::math::floor(v);
> ```

> ### SEE ALSO
>
> - [`std::math::runtime`](#fn-runtime)
> - [`std::math::abs`](#fn-abs)
> - [`std::math::abs64`](#fn-abs64)

<a id="fn-ceilf"></a>

> ## `ceilf`

> Provides the module's **ceilf** operation. Returns `f32`.

```valor
public f32 ceilf(f32 v)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `v`: f32 (by value)

> ### RETURNS (f32)

> ### EXAMPLE
>
> ```valor
> f32 result = std::math::ceilf(v);
> ```

> ### SEE ALSO
>
> - [`std::math::runtime`](#fn-runtime)
> - [`std::math::abs`](#fn-abs)
> - [`std::math::abs64`](#fn-abs64)

<a id="fn-ceil"></a>

> ## `ceil`

> Provides the module's **ceil** operation. Returns `f64`.

```valor
public f64 ceil(f64 v)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `v`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::math::ceil(v);
> ```

> ### SEE ALSO
>
> - [`std::math::runtime`](#fn-runtime)
> - [`std::math::abs`](#fn-abs)
> - [`std::math::abs64`](#fn-abs64)

<a id="fn-clz-u32"></a>

> ## `clz_u32`

> Provides the module's **clz u32** operation. Returns `u32`.

```valor
public u32 clz_u32(u32 v)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `v`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::math::clz_u32(v);
> ```

> ### SEE ALSO
>
> - [`std::math::runtime`](#fn-runtime)
> - [`std::math::abs`](#fn-abs)
> - [`std::math::abs64`](#fn-abs64)

<a id="fn-ctz-u32"></a>

> ## `ctz_u32`

> Provides the module's **ctz u32** operation. Returns `u32`.

```valor
public u32 ctz_u32(u32 v)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `v`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::math::ctz_u32(v);
> ```

> ### SEE ALSO
>
> - [`std::math::runtime`](#fn-runtime)
> - [`std::math::abs`](#fn-abs)
> - [`std::math::abs64`](#fn-abs64)

<a id="fn-popcount-u32"></a>

> ## `popcount_u32`

> Provides the module's **popcount u32** operation. Returns `u32`.

```valor
public u32 popcount_u32(u32 v)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `v`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::math::popcount_u32(v);
> ```

> ### SEE ALSO
>
> - [`std::math::runtime`](#fn-runtime)
> - [`std::math::abs`](#fn-abs)
> - [`std::math::abs64`](#fn-abs64)

<a id="fn-clz-u64"></a>

> ## `clz_u64`

> Provides the module's **clz u64** operation. Returns `u64`.

```valor
public u64 clz_u64(u64 v)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `v`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::math::clz_u64(v);
> ```

> ### SEE ALSO
>
> - [`std::math::runtime`](#fn-runtime)
> - [`std::math::abs`](#fn-abs)
> - [`std::math::abs64`](#fn-abs64)

<a id="fn-ctz-u64"></a>

> ## `ctz_u64`

> Provides the module's **ctz u64** operation. Returns `u64`.

```valor
public u64 ctz_u64(u64 v)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `v`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::math::ctz_u64(v);
> ```

> ### SEE ALSO
>
> - [`std::math::runtime`](#fn-runtime)
> - [`std::math::abs`](#fn-abs)
> - [`std::math::abs64`](#fn-abs64)

<a id="fn-popcount-u64"></a>

> ## `popcount_u64`

> Provides the module's **popcount u64** operation. Returns `u64`.

```valor
public u64 popcount_u64(u64 v)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `v`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::math::popcount_u64(v);
> ```

> ### SEE ALSO
>
> - [`std::math::runtime`](#fn-runtime)
> - [`std::math::abs`](#fn-abs)
> - [`std::math::abs64`](#fn-abs64)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Reduction](STD-ALGO-REDUCE-DOC.md) · [Table of contents](standard-library/README.md) · [Numeric →](STD-NUMERIC-DOC.md)
