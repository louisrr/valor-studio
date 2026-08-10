<!-- stdlib-reference-style: modern -->
> # `std::algo::reduce`

`std::algo::reduce` reduction and aggregation algorithms.

[Standard library](standard-library/README.md) / [Algorithms and computing](standard-library/README.md#algorithms-and-computing) / **Reduction**

> **Source:** `stdlib/std/algo/reduce.valor` · **Routines:** 32 public

## Routines

<details>
<summary>Browse all 32 routines</summary>

- [`reduce`](#fn-reduce)
- [`ordered`](#fn-ordered)
- [`fold_left`](#fn-fold-left)
- [`fold_right`](#fn-fold-right)
- [`transform_reduce`](#fn-transform-reduce)
- [`tree`](#fn-tree)
- [`reproducible`](#fn-reproducible)
- [`exact`](#fn-exact)
- [`inclusive_scan`](#fn-inclusive-scan)
- [`exclusive_scan`](#fn-exclusive-scan)
- [`transform_scan`](#fn-transform-scan)
- [`sum`](#fn-sum)
- [`product`](#fn-product)
- [`dot`](#fn-dot)
- [`sum_compensated_f64`](#fn-sum-compensated-f64)
- [`min`](#fn-min)
- [`max`](#fn-max)
- [`minmax`](#fn-minmax)
- [`argmin`](#fn-argmin)
- [`argmax`](#fn-argmax)
- [`mean`](#fn-mean)
- [`variance`](#fn-variance)
- [`standard_deviation`](#fn-standard-deviation)
- [`norm_l1`](#fn-norm-l1)
- [`norm_l2`](#fn-norm-l2)
- [`all`](#fn-all)
- [`any`](#fn-any)
- [`count_nonzero`](#fn-count-nonzero)
- [`segmented_reduce`](#fn-segmented-reduce)
- [`segmented_scan`](#fn-segmented-scan)
- [`gather_reduce`](#fn-gather-reduce)
- [`scatter_reduce`](#fn-scatter-reduce)

</details>

## API reference

<a id="fn-reduce"></a>

> ## `reduce`

> Provides the module's **reduce** operation. Returns `T`.

```valor
public T reduce(usize length, (usize) -> T read, T identity, (T, T) -> T combine)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `T`: (usize) -> T read, T identity, ( (borrowed fn-ptr (callback))
> - `combine`: T) -> T (borrowed fn-ptr (callback))

> ### RETURNS (T)

> ### EXAMPLE
>
> ```valor
> T result = std::algo::reduce::reduce(length, T, combine);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::ordered`](#fn-ordered)
> - [`std::algo::reduce::fold_left`](#fn-fold-left)
> - [`std::algo::reduce::fold_right`](#fn-fold-right)

<a id="fn-ordered"></a>

> ## `ordered`

> Provides the module's **ordered** operation. Returns `T`.

```valor
public T ordered(usize length, (usize) -> T read, T identity, (T, T) -> T combine)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `T`: (usize) -> T read, T identity, ( (borrowed fn-ptr (callback))
> - `combine`: T) -> T (borrowed fn-ptr (callback))

> ### RETURNS (T)

> ### EXAMPLE
>
> ```valor
> T result = std::algo::reduce::ordered(length, T, combine);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::reduce`](#fn-reduce)
> - [`std::algo::reduce::fold_left`](#fn-fold-left)
> - [`std::algo::reduce::fold_right`](#fn-fold-right)

<a id="fn-fold-left"></a>

> ## `fold_left`

> Provides the module's **fold left** operation. Returns `T`.

```valor
public T fold_left(usize length, (usize) -> T read, T identity, (T, T) -> T combine)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `T`: (usize) -> T read, T identity, ( (borrowed fn-ptr (callback))
> - `combine`: T) -> T (borrowed fn-ptr (callback))

> ### RETURNS (T)

> ### EXAMPLE
>
> ```valor
> T result = std::algo::reduce::fold_left(length, T, combine);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::reduce`](#fn-reduce)
> - [`std::algo::reduce::ordered`](#fn-ordered)
> - [`std::algo::reduce::fold_right`](#fn-fold-right)

<a id="fn-fold-right"></a>

> ## `fold_right`

> Provides the module's **fold right** operation. Returns `T`.

```valor
public T fold_right(usize length, (usize) -> T read, T identity, (T, T) -> T combine)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `T`: (usize) -> T read, T identity, ( (borrowed fn-ptr (callback))
> - `combine`: T) -> T (borrowed fn-ptr (callback))

> ### RETURNS (T)

> ### EXAMPLE
>
> ```valor
> T result = std::algo::reduce::fold_right(length, T, combine);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::reduce`](#fn-reduce)
> - [`std::algo::reduce::ordered`](#fn-ordered)
> - [`std::algo::reduce::fold_left`](#fn-fold-left)

<a id="fn-transform-reduce"></a>

> ## `transform_reduce`

> Provides the module's **transform reduce** operation. Returns `Result`.

```valor
public Result transform_reduce(usize length, (usize) -> Input read, Result identity, (Input) -> Result transform, (Result, Result) -> Result combine)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `combine`: (usize) -> Input read, Result identity, (Input) -> Result transform, (Result, Result) -> Result (borrowed fn-ptr (callback))

> ### RETURNS (Result)

> ### EXAMPLE
>
> ```valor
> Result result = std::algo::reduce::transform_reduce(length, combine);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::reduce`](#fn-reduce)
> - [`std::algo::reduce::ordered`](#fn-ordered)
> - [`std::algo::reduce::fold_left`](#fn-fold-left)

<a id="fn-tree"></a>

> ## `tree`

> Provides the module's **tree** operation. Returns `i32`.

```valor
public i32 tree(usize length, (usize) -> T read, T identity, (T, T) -> T combine, usize scratch_capacity, (usize) -> T read_scratch, (usize, T) -> void write_scratch, (T) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `T`: (usize) -> T read, T identity, ( (borrowed fn-ptr (callback))
> - `receive`: T) -> T combine, usize scratch_capacity, (usize) -> T read_scratch, (usize, T) -> void write_scratch, (T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::reduce::tree(length, T, receive);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::reduce`](#fn-reduce)
> - [`std::algo::reduce::ordered`](#fn-ordered)
> - [`std::algo::reduce::fold_left`](#fn-fold-left)

<a id="fn-reproducible"></a>

> ## `reproducible`

> Provides the module's **reproducible** operation. Returns `i32`.

```valor
public i32 reproducible(usize length, (usize) -> T read, T identity, (T, T) -> T combine, usize scratch_capacity, (usize) -> T read_scratch, (usize, T) -> void write_scratch, (T) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `T`: (usize) -> T read, T identity, ( (borrowed fn-ptr (callback))
> - `receive`: T) -> T combine, usize scratch_capacity, (usize) -> T read_scratch, (usize, T) -> void write_scratch, (T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::reduce::reproducible(length, T, receive);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::reduce`](#fn-reduce)
> - [`std::algo::reduce::ordered`](#fn-ordered)
> - [`std::algo::reduce::fold_left`](#fn-fold-left)

<a id="fn-exact"></a>

> ## `exact`

> Provides the module's **exact** operation. Returns `Result`.

```valor
public Result exact(usize length, (usize) -> Input read, Accumulator identity, (Accumulator, Input) -> Accumulator accumulate, (Accumulator) -> Result finish)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `Accumulator`: (usize) -> Input read, Accumulator identity, ( (borrowed fn-ptr (callback))
> - `finish`: Input) -> Accumulator accumulate, (Accumulator) -> Result (borrowed fn-ptr (callback))

> ### RETURNS (Result)

> ### EXAMPLE
>
> ```valor
> Result result = std::algo::reduce::exact(length, Accumulator, finish);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::reduce`](#fn-reduce)
> - [`std::algo::reduce::ordered`](#fn-ordered)
> - [`std::algo::reduce::fold_left`](#fn-fold-left)

<a id="fn-inclusive-scan"></a>

> ## `inclusive_scan`

> Provides the module's **inclusive scan** operation. Returns `usize`.

```valor
public usize inclusive_scan(usize length, (usize) -> T read, T identity, (T, T) -> T combine, (usize, T) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `T`: (usize) -> T read, T identity, ( (borrowed fn-ptr (callback))
> - `write`: T) -> T combine, (usize, T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::reduce::inclusive_scan(length, T, write);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::reduce`](#fn-reduce)
> - [`std::algo::reduce::ordered`](#fn-ordered)
> - [`std::algo::reduce::fold_left`](#fn-fold-left)

<a id="fn-exclusive-scan"></a>

> ## `exclusive_scan`

> Provides the module's **exclusive scan** operation. Returns `usize`.

```valor
public usize exclusive_scan(usize length, (usize) -> T read, T identity, (T, T) -> T combine, (usize, T) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `T`: (usize) -> T read, T identity, ( (borrowed fn-ptr (callback))
> - `write`: T) -> T combine, (usize, T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::reduce::exclusive_scan(length, T, write);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::reduce`](#fn-reduce)
> - [`std::algo::reduce::ordered`](#fn-ordered)
> - [`std::algo::reduce::fold_left`](#fn-fold-left)

<a id="fn-transform-scan"></a>

> ## `transform_scan`

> Provides the module's **transform scan** operation. Returns `usize`.

```valor
public usize transform_scan(usize length, (usize) -> Input read, Result identity, (Input) -> Result transform, (Result, Result) -> Result combine, bool inclusive, (usize, Result) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `write`: (usize) -> Input read, Result identity, (Input) -> Result transform, (Result, Result) -> Result combine, bool inclusive, (usize, Result) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::reduce::transform_scan(length, write);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::reduce`](#fn-reduce)
> - [`std::algo::reduce::ordered`](#fn-ordered)
> - [`std::algo::reduce::fold_left`](#fn-fold-left)

<a id="fn-sum"></a>

> ## `sum`

> Provides the module's **sum** operation. Returns `T`.

```valor
public T sum(usize length, (usize) -> T read, T zero, (T, T) -> T add_values)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `T`: (usize) -> T read, T zero, ( (borrowed fn-ptr (callback))
> - `add_values`: T) -> T (borrowed fn-ptr (callback))

> ### RETURNS (T)

> ### EXAMPLE
>
> ```valor
> T result = std::algo::reduce::sum(length, T, add_values);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::reduce`](#fn-reduce)
> - [`std::algo::reduce::ordered`](#fn-ordered)
> - [`std::algo::reduce::fold_left`](#fn-fold-left)

<a id="fn-product"></a>

> ## `product`

> Provides the module's **product** operation. Returns `T`.

```valor
public T product(usize length, (usize) -> T read, T one, (T, T) -> T multiply)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `T`: (usize) -> T read, T one, ( (borrowed fn-ptr (callback))
> - `multiply`: T) -> T (borrowed fn-ptr (callback))

> ### RETURNS (T)

> ### EXAMPLE
>
> ```valor
> T result = std::algo::reduce::product(length, T, multiply);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::reduce`](#fn-reduce)
> - [`std::algo::reduce::ordered`](#fn-ordered)
> - [`std::algo::reduce::fold_left`](#fn-fold-left)

<a id="fn-dot"></a>

> ## `dot`

> Provides the module's **dot** operation. Returns `Result`.

```valor
public Result dot(usize length, (usize) -> Left read_left, (usize) -> Right read_right, Result zero, (Left, Right) -> Result multiply, (Result, Result) -> Result add_values)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `add_values`: (usize) -> Left read_left, (usize) -> Right read_right, Result zero, (Left, Right) -> Result multiply, (Result, Result) -> Result (borrowed fn-ptr (callback))

> ### RETURNS (Result)

> ### EXAMPLE
>
> ```valor
> Result result = std::algo::reduce::dot(length, add_values);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::reduce`](#fn-reduce)
> - [`std::algo::reduce::ordered`](#fn-ordered)
> - [`std::algo::reduce::fold_left`](#fn-fold-left)

<a id="fn-sum-compensated-f64"></a>

> ## `sum_compensated_f64`

> Kahan compensation. Kahan compensation.  It has a fixed ordered topology and is independent of worker count.  It is more accurate than native accumulation but is not advertised as mathematically exact; exact floating reduction uses `exact`.

```valor
public f64 sum_compensated_f64(usize length, (usize) -> f64 read)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `read`: (usize) -> f64 (borrowed fn-ptr (callback))

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::algo::reduce::sum_compensated_f64(length, read);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::reduce`](#fn-reduce)
> - [`std::algo::reduce::ordered`](#fn-ordered)
> - [`std::algo::reduce::fold_left`](#fn-fold-left)

<a id="fn-min"></a>

> ## `min`

> Provides the module's **min** operation. Returns `i32`.

```valor
public i32 min(usize length, (usize) -> T read, (T, T) -> bool less, (T) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `T`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `receive`: T) -> bool less, (T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::reduce::min(length, T, receive);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::reduce`](#fn-reduce)
> - [`std::algo::reduce::ordered`](#fn-ordered)
> - [`std::algo::reduce::fold_left`](#fn-fold-left)

<a id="fn-max"></a>

> ## `max`

> Provides the module's **max** operation. Returns `i32`.

```valor
public i32 max(usize length, (usize) -> T read, (T, T) -> bool less, (T) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `T`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `receive`: T) -> bool less, (T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::reduce::max(length, T, receive);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::reduce`](#fn-reduce)
> - [`std::algo::reduce::ordered`](#fn-ordered)
> - [`std::algo::reduce::fold_left`](#fn-fold-left)

<a id="fn-minmax"></a>

> ## `minmax`

> Provides the module's **minmax** operation. Returns `i32`.

```valor
public i32 minmax(usize length, (usize) -> T read, (T, T) -> bool less, (T, T) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `T`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `receive`: T) -> bool less, (T, T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::reduce::minmax(length, T, receive);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::reduce`](#fn-reduce)
> - [`std::algo::reduce::ordered`](#fn-ordered)
> - [`std::algo::reduce::fold_left`](#fn-fold-left)

<a id="fn-argmin"></a>

> ## `argmin`

> Provides the module's **argmin** operation. Returns `usize`.

```valor
public usize argmin(usize length, (usize) -> T read, (T, T) -> bool less)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `T`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `less`: T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::reduce::argmin(length, T, less);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::reduce`](#fn-reduce)
> - [`std::algo::reduce::ordered`](#fn-ordered)
> - [`std::algo::reduce::fold_left`](#fn-fold-left)

<a id="fn-argmax"></a>

> ## `argmax`

> Provides the module's **argmax** operation. Returns `usize`.

```valor
public usize argmax(usize length, (usize) -> T read, (T, T) -> bool less)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `T`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `less`: T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::reduce::argmax(length, T, less);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::reduce`](#fn-reduce)
> - [`std::algo::reduce::ordered`](#fn-ordered)
> - [`std::algo::reduce::fold_left`](#fn-fold-left)

<a id="fn-mean"></a>

> ## `mean`

> Provides the module's **mean** operation. Returns `i32`.

```valor
public i32 mean(usize length, (usize) -> f64 read, (usize, (usize) -> f64) -> f64 sum_values, (f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `usize`: (usize) -> f64 read, ( (borrowed fn-ptr (callback))
> - `receive`: (usize) -> f64) -> f64 sum_values, (f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::reduce::mean(length, usize, receive);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::reduce`](#fn-reduce)
> - [`std::algo::reduce::ordered`](#fn-ordered)
> - [`std::algo::reduce::fold_left`](#fn-fold-left)

<a id="fn-variance"></a>

> ## `variance`

> FP policy: FP_NATIVE with a strict ordered Welford topology. FP policy: FP_NATIVE with a strict ordered Welford topology.  This avoids a second data pass and large intermediate squares. sample_variance=true uses Bessel's correction.  Use `exact` for an exact/superaccumulator policy.

```valor
public i32 variance(usize length, (usize) -> f64 read, bool sample_variance, (f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `receive`: (usize) -> f64 read, bool sample_variance, (f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::reduce::variance(length, receive);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::reduce`](#fn-reduce)
> - [`std::algo::reduce::ordered`](#fn-ordered)
> - [`std::algo::reduce::fold_left`](#fn-fold-left)

<a id="fn-standard-deviation"></a>

> ## `standard_deviation`

> FP policy: FP_NATIVE with the same strict ordered Welford topology as variance, followed by one correctly typed std.math sqrt operation. FP policy: FP_NATIVE with the same strict ordered Welford topology as variance, followed by one correctly typed std.math sqrt operation.

```valor
public i32 standard_deviation(usize length, (usize) -> f64 read, bool sample_variance, (f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `receive`: (usize) -> f64 read, bool sample_variance, (f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::reduce::standard_deviation(length, receive);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::reduce`](#fn-reduce)
> - [`std::algo::reduce::ordered`](#fn-ordered)
> - [`std::algo::reduce::fold_left`](#fn-fold-left)

<a id="fn-norm-l1"></a>

> ## `norm_l1`

> FP policy: FP_NATIVE in input order. FP policy: FP_NATIVE in input order. `magnitude` makes signed-zero, NaN, and custom-number absolute-value semantics explicit.

```valor
public f64 norm_l1(usize length, (usize) -> f64 read, (f64) -> f64 magnitude)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `magnitude`: (usize) -> f64 read, (f64) -> f64 (borrowed fn-ptr (callback))

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::algo::reduce::norm_l1(length, magnitude);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::reduce`](#fn-reduce)
> - [`std::algo::reduce::ordered`](#fn-ordered)
> - [`std::algo::reduce::fold_left`](#fn-fold-left)

<a id="fn-norm-l2"></a>

> ## `norm_l2`

> FP policy: FP_NATIVE ordered sum-of-squares. FP policy: FP_NATIVE ordered sum-of-squares.  The fixed loop order is part of the contract. Callers requiring an overflow-resistant or exact norm can use `exact` with a scaled or superaccumulator state and apply sqrt only in `finish`.

```valor
public f64 norm_l2(usize length, (usize) -> f64 read)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `read`: (usize) -> f64 (borrowed fn-ptr (callback))

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::algo::reduce::norm_l2(length, read);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::reduce`](#fn-reduce)
> - [`std::algo::reduce::ordered`](#fn-ordered)
> - [`std::algo::reduce::fold_left`](#fn-fold-left)

<a id="fn-all"></a>

> ## `all`

> Provides the module's **all** operation. Returns `bool`.

```valor
public bool all(usize length, (usize) -> T read, (T) -> bool predicate)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `predicate`: (usize) -> T read, (T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::algo::reduce::all(length, predicate);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::reduce`](#fn-reduce)
> - [`std::algo::reduce::ordered`](#fn-ordered)
> - [`std::algo::reduce::fold_left`](#fn-fold-left)

<a id="fn-any"></a>

> ## `any`

> Provides the module's **any** operation. Returns `bool`.

```valor
public bool any(usize length, (usize) -> T read, (T) -> bool predicate)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `predicate`: (usize) -> T read, (T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::algo::reduce::any(length, predicate);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::reduce`](#fn-reduce)
> - [`std::algo::reduce::ordered`](#fn-ordered)
> - [`std::algo::reduce::fold_left`](#fn-fold-left)

<a id="fn-count-nonzero"></a>

> ## `count_nonzero`

> Provides the module's **count nonzero** operation. Returns `usize`.

```valor
public usize count_nonzero(usize length, (usize) -> T read, (T) -> bool nonzero)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `nonzero`: (usize) -> T read, (T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::reduce::count_nonzero(length, nonzero);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::reduce`](#fn-reduce)
> - [`std::algo::reduce::ordered`](#fn-ordered)
> - [`std::algo::reduce::fold_left`](#fn-fold-left)

<a id="fn-segmented-reduce"></a>

> ## `segmented_reduce`

> Provides the module's **segmented reduce** operation. Returns `i32`.

```valor
public i32 segmented_reduce(usize length, usize segment_count, (usize) -> usize offset, (usize) -> T read, T identity, (T, T) -> T combine, (usize, T) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `segment_count`: usize (by value)
> - `write`: (usize) -> usize offset, (usize) -> T read, T identity, (T, T) -> T combine, (usize, T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::reduce::segmented_reduce(length, segment_count, write);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::reduce`](#fn-reduce)
> - [`std::algo::reduce::ordered`](#fn-ordered)
> - [`std::algo::reduce::fold_left`](#fn-fold-left)

<a id="fn-segmented-scan"></a>

> ## `segmented_scan`

> Provides the module's **segmented scan** operation. Returns `i32`.

```valor
public i32 segmented_scan(usize length, usize segment_count, (usize) -> usize offset, (usize) -> T read, T identity, (T, T) -> T combine, bool inclusive, (usize, T) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `segment_count`: usize (by value)
> - `write`: (usize) -> usize offset, (usize) -> T read, T identity, (T, T) -> T combine, bool inclusive, (usize, T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::reduce::segmented_scan(length, segment_count, write);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::reduce`](#fn-reduce)
> - [`std::algo::reduce::ordered`](#fn-ordered)
> - [`std::algo::reduce::fold_left`](#fn-fold-left)

<a id="fn-gather-reduce"></a>

> ## `gather_reduce`

> Provides the module's **gather reduce** operation. Returns `T`.

```valor
public T gather_reduce(usize index_count, (usize) -> usize index, (usize) -> T read, T identity, (T, T) -> T combine)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index_count`: usize (by value)
> - `combine`: (usize) -> usize index, (usize) -> T read, T identity, (T, T) -> T (borrowed fn-ptr (callback))

> ### RETURNS (T)

> ### EXAMPLE
>
> ```valor
> T result = std::algo::reduce::gather_reduce(index_count, combine);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::reduce`](#fn-reduce)
> - [`std::algo::reduce::ordered`](#fn-ordered)
> - [`std::algo::reduce::fold_left`](#fn-fold-left)

<a id="fn-scatter-reduce"></a>

> ## `scatter_reduce`

> Provides the module's **scatter reduce** operation. Returns `usize`.

```valor
public usize scatter_reduce(usize length, (usize) -> Input read, (usize) -> usize destination, (Input) -> Result transform, (usize, Result) -> void accumulate)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `accumulate`: (usize) -> Input read, (usize) -> usize destination, (Input) -> Result transform, (usize, Result) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::reduce::scatter_reduce(length, accumulate);
> ```

> ### SEE ALSO
>
> - [`std::algo::reduce::reduce`](#fn-reduce)
> - [`std::algo::reduce::ordered`](#fn-ordered)
> - [`std::algo::reduce::fold_left`](#fn-fold-left)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Sorting](STD-ALGO-SORT-DOC.md) · [Table of contents](standard-library/README.md) · [Mathematics →](STD-MATH-DOC.md)
