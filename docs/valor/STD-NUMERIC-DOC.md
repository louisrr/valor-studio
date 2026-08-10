<!-- stdlib-reference-style: modern -->
> # `std::numeric`

`std::numeric` numeric utility operations.

[Standard library](standard-library/README.md) / [Algorithms and computing](standard-library/README.md#algorithms-and-computing) / **Numeric**

> **Source:** `stdlib/std/numeric.valor` · **Routines:** 30 public · 10 internal

## Routines

<details>
<summary>Browse all 40 routines</summary>

- [`absolute`](#fn-absolute)
- [`maximum`](#fn-maximum)
- [`minimum`](#fn-minimum)
- [`clamp_f64`](#fn-clamp-f64)
- [`minimum_i64`](#fn-minimum-i64)
- [`log_positive`](#fn-log-positive)
- [`exponential`](#fn-exponential)
- [`kahan_sum`](#fn-kahan-sum)
- [`neumaier_sum`](#fn-neumaier-sum)
- [`pairwise_sum`](#fn-pairwise-sum)
- [`exact_sum`](#fn-exact-sum)
- [`compensated_dot`](#fn-compensated-dot)
- [`online_mean`](#fn-online-mean)
- [`online_variance`](#fn-online-variance)
- [`online_covariance`](#fn-online-covariance)
- [`log_sum_exp`](#fn-log-sum-exp)
- [`softmax_stable`](#fn-softmax-stable)
- [`log_softmax`](#fn-log-softmax)
- [`hypot_stable`](#fn-hypot-stable)
- [`normalize_l1`](#fn-normalize-l1)
- [`normalize_l2`](#fn-normalize-l2)
- [`clip_norm`](#fn-clip-norm)
- [`safe_divide`](#fn-safe-divide)
- [`add_fits`](#fn-add-fits)
- [`subtract_fits`](#fn-subtract-fits)
- [`multiply_fits`](#fn-multiply-fits)
- [`saturating_add`](#fn-saturating-add)
- [`saturating_subtract`](#fn-saturating-subtract)
- [`saturating_multiply`](#fn-saturating-multiply)
- [`checked_add`](#fn-checked-add)
- [`checked_subtract`](#fn-checked-subtract)
- [`checked_multiply`](#fn-checked-multiply)
- [`checked_divide`](#fn-checked-divide)
- [`round_ties_even`](#fn-round-ties-even)
- [`round_toward_zero`](#fn-round-toward-zero)
- [`round_toward_positive`](#fn-round-toward-positive)
- [`round_toward_negative`](#fn-round-toward-negative)
- [`quantize`](#fn-quantize)
- [`dequantize`](#fn-dequantize)
- [`requantize`](#fn-requantize)

</details>

## API reference

<a id="fn-absolute"></a>

> ## `absolute`

> *Internal API*
>
> Provides the module's **absolute** operation. Returns `f64`.

```valor
f64 absolute(f64 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::numeric::absolute(value);
> ```

> ### SEE ALSO
>
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)
> - [`std::numeric::clamp_f64`](#fn-clamp-f64)

<a id="fn-maximum"></a>

> ## `maximum`

> *Internal API*
>
> Provides the module's **maximum** operation. Returns `f64`.

```valor
f64 maximum(f64 left, f64 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: f64 (by value)
> - `right`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::numeric::maximum(left, right);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::minimum`](#fn-minimum)
> - [`std::numeric::clamp_f64`](#fn-clamp-f64)

<a id="fn-minimum"></a>

> ## `minimum`

> *Internal API*
>
> Provides the module's **minimum** operation. Returns `f64`.

```valor
f64 minimum(f64 left, f64 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: f64 (by value)
> - `right`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::numeric::minimum(left, right);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::clamp_f64`](#fn-clamp-f64)

<a id="fn-clamp-f64"></a>

> ## `clamp_f64`

> *Internal API*
>
> Provides the module's **clamp f64** operation. Returns `f64`.

```valor
f64 clamp_f64(f64 value, f64 lower, f64 upper)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: f64 (by value)
> - `lower`: f64 (by value)
> - `upper`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::numeric::clamp_f64(value, lower, upper);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-minimum-i64"></a>

> ## `minimum_i64`

> *Internal API*
>
> Provides the module's **minimum i64** operation. Returns `i64`.

```valor
i64 minimum_i64()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::numeric::minimum_i64();
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-log-positive"></a>

> ## `log_positive`

> *Internal API*
>
> Natural logarithm using range reduction and an atanh series. Natural logarithm using range reduction and an atanh series.  Its reduced argument is at most 1/3 in magnitude.

```valor
f64 log_positive(f64 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::numeric::log_positive(value);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-exponential"></a>

> ## `exponential`

> *Internal API*
>
> exp(x) = 2^k exp(r), with |r| <= ln(2)/2. exp(x) = 2^k exp(r), with |r| <= ln(2)/2.  Horner evaluation exposes a short dependency chain and avoids a foreign math call.

```valor
f64 exponential(f64 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::numeric::exponential(value);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-kahan-sum"></a>

> ## `kahan_sum`

> Provides the module's **kahan sum** operation. Returns `f64`.

```valor
public f64 kahan_sum(usize length, (usize) -> f64 read)
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
> f64 result = std::numeric::kahan_sum(length, read);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-neumaier-sum"></a>

> ## `neumaier_sum`

> Provides the module's **neumaier sum** operation. Returns `f64`.

```valor
public f64 neumaier_sum(usize length, (usize) -> f64 read)
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
> f64 result = std::numeric::neumaier_sum(length, read);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-pairwise-sum"></a>

> ## `pairwise_sum`

> Eight adjacent leaves are reduced by a fixed balanced tree. Eight adjacent leaves are reduced by a fixed balanced tree.  Block totals are combined with Neumaier compensation, avoiding scratch storage.

```valor
public f64 pairwise_sum(usize length, (usize) -> f64 read)
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
> f64 result = std::numeric::pairwise_sum(length, read);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-exact-sum"></a>

> ## `exact_sum`

> Provides the module's **exact sum** operation. Returns `f64`.

```valor
public f64 exact_sum(usize length, (usize) -> f64 read, Accumulator identity, (Accumulator, f64) -> Accumulator accumulate, (Accumulator) -> f64 finish)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `Accumulator`: (usize) -> f64 read, Accumulator identity, ( (borrowed fn-ptr (callback))
> - `finish`: f64) -> Accumulator accumulate, (Accumulator) -> f64 (borrowed fn-ptr (callback))

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::numeric::exact_sum(length, Accumulator, finish);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-compensated-dot"></a>

> ## `compensated_dot`

> Provides the module's **compensated dot** operation. Returns `f64`.

```valor
public f64 compensated_dot(usize length, (usize) -> f64 read_left, (usize) -> f64 read_right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `read_right`: (usize) -> f64 read_left, (usize) -> f64 (borrowed fn-ptr (callback))

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::numeric::compensated_dot(length, read_right);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-online-mean"></a>

> ## `online_mean`

> Provides the module's **online mean** operation. Returns `i32`.

```valor
public i32 online_mean(u64 count, f64 mean, f64 value, (u64, f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: u64 (by value)
> - `mean`: f64 (by value)
> - `value`: f64 (by value)
> - `receive`: (u64, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::numeric::online_mean(count, mean, value, receive);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-online-variance"></a>

> ## `online_variance`

> Provides the module's **online variance** operation. Returns `i32`.

```valor
public i32 online_variance(u64 count, f64 mean, f64 m2, f64 value, (u64, f64, f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: u64 (by value)
> - `mean`: f64 (by value)
> - `m2`: f64 (by value)
> - `value`: f64 (by value)
> - `receive`: (u64, f64, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::numeric::online_variance(count, mean, m2, value, receive);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-online-covariance"></a>

> ## `online_covariance`

> Provides the module's **online covariance** operation. Returns `i32`.

```valor
public i32 online_covariance(u64 count, f64 mean_left, f64 mean_right, f64 co_moment, f64 left, f64 right, (u64, f64, f64, f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: u64 (by value)
> - `mean_left`: f64 (by value)
> - `mean_right`: f64 (by value)
> - `co_moment`: f64 (by value)
> - `left`: f64 (by value)
> - `right`: f64 (by value)
> - `receive`: (u64, f64, f64, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::numeric::online_covariance(count, mean_left, mean_right, co_moment, left, right, receive);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-log-sum-exp"></a>

> ## `log_sum_exp`

> Provides the module's **log sum exp** operation. Returns `i32`.

```valor
public i32 log_sum_exp(usize length, (usize) -> f64 read, (f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `receive`: (usize) -> f64 read, (f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::numeric::log_sum_exp(length, receive);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-softmax-stable"></a>

> ## `softmax_stable`

> Provides the module's **softmax stable** operation. Returns `i32`.

```valor
public i32 softmax_stable(usize length, (usize) -> f64 read, (usize, f64) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `usize`: (usize) -> f64 read, ( (borrowed fn-ptr (callback))
> - `write`: f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::numeric::softmax_stable(length, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-log-softmax"></a>

> ## `log_softmax`

> Provides the module's **log softmax** operation. Returns `i32`.

```valor
public i32 log_softmax(usize length, (usize) -> f64 read, (usize, f64) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `usize`: (usize) -> f64 read, ( (borrowed fn-ptr (callback))
> - `write`: f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::numeric::log_softmax(length, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-hypot-stable"></a>

> ## `hypot_stable`

> Provides the module's **hypot stable** operation. Returns `f64`.

```valor
public f64 hypot_stable(f64 left, f64 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: f64 (by value)
> - `right`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::numeric::hypot_stable(left, right);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-normalize-l1"></a>

> ## `normalize_l1`

> Provides the module's **normalize l1** operation. Returns `i32`.

```valor
public i32 normalize_l1(usize length, (usize) -> f64 read, (usize, f64) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `usize`: (usize) -> f64 read, ( (borrowed fn-ptr (callback))
> - `write`: f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::numeric::normalize_l1(length, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-normalize-l2"></a>

> ## `normalize_l2`

> Provides the module's **normalize l2** operation. Returns `i32`.

```valor
public i32 normalize_l2(usize length, (usize) -> f64 read, (usize, f64) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `usize`: (usize) -> f64 read, ( (borrowed fn-ptr (callback))
> - `write`: f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::numeric::normalize_l2(length, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-clip-norm"></a>

> ## `clip_norm`

> Provides the module's **clip norm** operation. Returns `i32`.

```valor
public i32 clip_norm(usize length, (usize) -> f64 read, f64 maximum_norm, (usize, f64) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `usize`: (usize) -> f64 read, f64 maximum_norm, ( (borrowed fn-ptr (callback))
> - `write`: f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::numeric::clip_norm(length, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-safe-divide"></a>

> ## `safe_divide`

> Provides the module's **safe divide** operation. Returns `f64`.

```valor
public f64 safe_divide(f64 numerator, f64 denominator, f64 fallback)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `numerator`: f64 (by value)
> - `denominator`: f64 (by value)
> - `fallback`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::numeric::safe_divide(numerator, denominator, fallback);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-add-fits"></a>

> ## `add_fits`

> *Internal API*
>
> Provides the module's **add fits** operation. Returns `bool`.

```valor
bool add_fits(i64 left, i64 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: i64 (by value)
> - `right`: i64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::numeric::add_fits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-subtract-fits"></a>

> ## `subtract_fits`

> *Internal API*
>
> Provides the module's **subtract fits** operation. Returns `bool`.

```valor
bool subtract_fits(i64 left, i64 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: i64 (by value)
> - `right`: i64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::numeric::subtract_fits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-multiply-fits"></a>

> ## `multiply_fits`

> *Internal API*
>
> Provides the module's **multiply fits** operation. Returns `bool`.

```valor
bool multiply_fits(i64 left, i64 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: i64 (by value)
> - `right`: i64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::numeric::multiply_fits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-saturating-add"></a>

> ## `saturating_add`

> Provides the module's **saturating add** operation. Returns `i64`.

```valor
public i64 saturating_add(i64 left, i64 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: i64 (by value)
> - `right`: i64 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::numeric::saturating_add(left, right);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-saturating-subtract"></a>

> ## `saturating_subtract`

> Provides the module's **saturating subtract** operation. Returns `i64`.

```valor
public i64 saturating_subtract(i64 left, i64 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: i64 (by value)
> - `right`: i64 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::numeric::saturating_subtract(left, right);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-saturating-multiply"></a>

> ## `saturating_multiply`

> Provides the module's **saturating multiply** operation. Returns `i64`.

```valor
public i64 saturating_multiply(i64 left, i64 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: i64 (by value)
> - `right`: i64 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::numeric::saturating_multiply(left, right);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-checked-add"></a>

> ## `checked_add`

> Provides the module's **checked add** operation. Returns `i32`.

```valor
public i32 checked_add(i64 left, i64 right, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: i64 (by value)
> - `right`: i64 (by value)
> - `receive`: (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::numeric::checked_add(left, right, receive);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-checked-subtract"></a>

> ## `checked_subtract`

> Provides the module's **checked subtract** operation. Returns `i32`.

```valor
public i32 checked_subtract(i64 left, i64 right, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: i64 (by value)
> - `right`: i64 (by value)
> - `receive`: (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::numeric::checked_subtract(left, right, receive);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-checked-multiply"></a>

> ## `checked_multiply`

> Provides the module's **checked multiply** operation. Returns `i32`.

```valor
public i32 checked_multiply(i64 left, i64 right, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: i64 (by value)
> - `right`: i64 (by value)
> - `receive`: (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::numeric::checked_multiply(left, right, receive);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-checked-divide"></a>

> ## `checked_divide`

> Provides the module's **checked divide** operation. Returns `i32`.

```valor
public i32 checked_divide(i64 left, i64 right, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: i64 (by value)
> - `right`: i64 (by value)
> - `receive`: (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::numeric::checked_divide(left, right, receive);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-round-ties-even"></a>

> ## `round_ties_even`

> Provides the module's **round ties even** operation. Returns `f64`.

```valor
public f64 round_ties_even(f64 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::numeric::round_ties_even(value);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-round-toward-zero"></a>

> ## `round_toward_zero`

> Provides the module's **round toward zero** operation. Returns `f64`.

```valor
public f64 round_toward_zero(f64 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::numeric::round_toward_zero(value);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-round-toward-positive"></a>

> ## `round_toward_positive`

> Provides the module's **round toward positive** operation. Returns `f64`.

```valor
public f64 round_toward_positive(f64 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::numeric::round_toward_positive(value);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-round-toward-negative"></a>

> ## `round_toward_negative`

> Provides the module's **round toward negative** operation. Returns `f64`.

```valor
public f64 round_toward_negative(f64 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::numeric::round_toward_negative(value);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-quantize"></a>

> ## `quantize`

> Provides the module's **quantize** operation. Returns `i64`.

```valor
public i64 quantize(f64 value, f64 scale, i64 zero_point, i64 minimum_value, i64 maximum_value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: f64 (by value)
> - `scale`: f64 (by value)
> - `zero_point`: i64 (by value)
> - `minimum_value`: i64 (by value)
> - `maximum_value`: i64 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::numeric::quantize(value, scale, zero_point, minimum_value, maximum_value);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-dequantize"></a>

> ## `dequantize`

> Provides the module's **dequantize** operation. Returns `f64`.

```valor
public f64 dequantize(i64 value, f64 scale, i64 zero_point)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: i64 (by value)
> - `scale`: f64 (by value)
> - `zero_point`: i64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::numeric::dequantize(value, scale, zero_point);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

<a id="fn-requantize"></a>

> ## `requantize`

> Provides the module's **requantize** operation. Returns `i64`.

```valor
public i64 requantize(i64 value, f64 source_scale, i64 source_zero_point, f64 target_scale, i64 target_zero_point, i64 minimum_value, i64 maximum_value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: i64 (by value)
> - `source_scale`: f64 (by value)
> - `source_zero_point`: i64 (by value)
> - `target_scale`: f64 (by value)
> - `target_zero_point`: i64 (by value)
> - `minimum_value`: i64 (by value)
> - `maximum_value`: i64 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::numeric::requantize(value, source_scale, source_zero_point, target_scale, target_zero_point, minimum_value, maximum_value);
> ```

> ### SEE ALSO
>
> - [`std::numeric::absolute`](#fn-absolute)
> - [`std::numeric::maximum`](#fn-maximum)
> - [`std::numeric::minimum`](#fn-minimum)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Mathematics](STD-MATH-DOC.md) · [Table of contents](standard-library/README.md) · [Random →](STD-RANDOM-DOC.md)
