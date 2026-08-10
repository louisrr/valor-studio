<!-- stdlib-reference-style: modern -->
> # `std::quant`

`std::quant` quantitative and financial operations.

[Standard library](standard-library/README.md) / [Algorithms and computing](standard-library/README.md#algorithms-and-computing) / **Quantitative computing**

> **Source:** `stdlib/std/quant.valor` · **Routines:** 32 public · 28 internal

## Routines

<details>
<summary>Browse all 60 routines</summary>

- [`absolute_f64`](#fn-absolute-f64)
- [`maximum_f64`](#fn-maximum-f64)
- [`minimum_f64`](#fn-minimum-f64)
- [`clamp_f64`](#fn-clamp-f64)
- [`clamp_i64`](#fn-clamp-i64)
- [`pow2_i64`](#fn-pow2-i64)
- [`pow2_f64`](#fn-pow2-f64)
- [`trunc_f64`](#fn-trunc-f64)
- [`floor_f64`](#fn-floor-f64)
- [`ceil_f64`](#fn-ceil-f64)
- [`f64_infinity`](#fn-f64-infinity)
- [`f64_nan`](#fn-f64-nan)
- [`round_to_integer`](#fn-round-to-integer)
- [`binary_exponent`](#fn-binary-exponent)
- [`float_to_half_bits`](#fn-float-to-half-bits)
- [`mantissa_scale_pow_unit`](#fn-mantissa-scale-pow-unit)
- [`half_bits_to_float`](#fn-half-bits-to-float)
- [`f32_to_f16`](#fn-f32-to-f16)
- [`f16_to_f32`](#fn-f16-to-f32)
- [`f32_to_bf16`](#fn-f32-to-bf16)
- [`bf16_to_f32`](#fn-bf16-to-f32)
- [`minmax_range`](#fn-minmax-range)
- [`quantile_sorted`](#fn-quantile-sorted)
- [`percentile_range`](#fn-percentile-range)
- [`histogram_range`](#fn-histogram-range)
- [`signed_qmax`](#fn-signed-qmax)
- [`signed_qmin`](#fn-signed-qmin)
- [`derive_affine`](#fn-derive-affine)
- [`per_tensor_scale`](#fn-per-tensor-scale)
- [`per_channel_scale`](#fn-per-channel-scale)
- [`groupwise_scale`](#fn-groupwise-scale)
- [`calibrate_minmax`](#fn-calibrate-minmax)
- [`calibrate_percentile`](#fn-calibrate-percentile)
- [`histogram_low_edge`](#fn-histogram-low-edge)
- [`histogram_high_edge`](#fn-histogram-high-edge)
- [`calibrate_histogram`](#fn-calibrate-histogram)
- [`apply_saturation`](#fn-apply-saturation)
- [`quantize_symmetric`](#fn-quantize-symmetric)
- [`quantize_asymmetric`](#fn-quantize-asymmetric)
- [`quantize_per_channel`](#fn-quantize-per-channel)
- [`quantize_groupwise`](#fn-quantize-groupwise)
- [`dequantize`](#fn-dequantize)
- [`dequantize_per_channel`](#fn-dequantize-per-channel)
- [`to_nibble`](#fn-to-nibble)
- [`from_nibble`](#fn-from-nibble)
- [`to_crumb`](#fn-to-crumb)
- [`from_crumb`](#fn-from-crumb)
- [`pack_i4`](#fn-pack-i4)
- [`unpack_i4`](#fn-unpack-i4)
- [`pack_i2`](#fn-pack-i2)
- [`unpack_i2`](#fn-unpack-i2)
- [`pack_bits`](#fn-pack-bits)
- [`unpack_bits`](#fn-unpack-bits)
- [`dot_wide`](#fn-dot-wide)
- [`dot_i8`](#fn-dot-i8)
- [`dot_i4`](#fn-dot-i4)
- [`gemm_integer`](#fn-gemm-integer)
- [`gemm_i8`](#fn-gemm-i8)
- [`gemm_i4`](#fn-gemm-i4)
- [`requantize_i32_to_i8`](#fn-requantize-i32-to-i8)

</details>

## API reference

<a id="fn-absolute-f64"></a>

> ## `absolute_f64`

> *Internal API*
>
> Provides the module's **absolute f64** operation. Returns `f64`.

```valor
f64 absolute_f64(f64 value)
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
> f64 result = std::quant::absolute_f64(value);
> ```

> ### SEE ALSO
>
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)
> - [`std::quant::clamp_f64`](#fn-clamp-f64)

<a id="fn-maximum-f64"></a>

> ## `maximum_f64`

> *Internal API*
>
> Provides the module's **maximum f64** operation. Returns `f64`.

```valor
f64 maximum_f64(f64 left, f64 right)
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
> f64 result = std::quant::maximum_f64(left, right);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)
> - [`std::quant::clamp_f64`](#fn-clamp-f64)

<a id="fn-minimum-f64"></a>

> ## `minimum_f64`

> *Internal API*
>
> Provides the module's **minimum f64** operation. Returns `f64`.

```valor
f64 minimum_f64(f64 left, f64 right)
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
> f64 result = std::quant::minimum_f64(left, right);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::clamp_f64`](#fn-clamp-f64)

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
> f64 result = std::quant::clamp_f64(value, lower, upper);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-clamp-i64"></a>

> ## `clamp_i64`

> *Internal API*
>
> Provides the module's **clamp i64** operation. Returns `i64`.

```valor
i64 clamp_i64(i64 value, i64 lower, i64 upper)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: i64 (by value)
> - `lower`: i64 (by value)
> - `upper`: i64 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::quant::clamp_i64(value, lower, upper);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-pow2-i64"></a>

> ## `pow2_i64`

> *Internal API*
>
> Integer power of two (exact through 2^62).

```valor
i64 pow2_i64(i32 exponent)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `exponent`: i32 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::quant::pow2_i64(exponent);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-pow2-f64"></a>

> ## `pow2_f64`

> *Internal API*
>
> Binary power of two, including negative exponents. Binary power of two, including negative exponents.  A multiply chain keeps the value exact and avoids a foreign math call.

```valor
f64 pow2_f64(i32 exponent)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `exponent`: i32 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::quant::pow2_f64(exponent);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-trunc-f64"></a>

> ## `trunc_f64`

> *Internal API*
>
> Truncation toward zero. Truncation toward zero.  Above 2^52 every f64 is already integral, so the value is returned unchanged; below it an i64 round-trip discards the fraction without touching the floating-point environment.

```valor
f64 trunc_f64(f64 value)
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
> f64 result = std::quant::trunc_f64(value);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-floor-f64"></a>

> ## `floor_f64`

> *Internal API*
>
> Provides the module's **floor f64** operation. Returns `f64`.

```valor
f64 floor_f64(f64 value)
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
> f64 result = std::quant::floor_f64(value);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-ceil-f64"></a>

> ## `ceil_f64`

> *Internal API*
>
> Provides the module's **ceil f64** operation. Returns `f64`.

```valor
f64 ceil_f64(f64 value)
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
> f64 result = std::quant::ceil_f64(value);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-f64-infinity"></a>

> ## `f64_infinity`

> *Internal API*
>
> Non-trapping infinity and NaN, built by overflow rather than division so no integer divide-by-zero is ever executed. Non-trapping infinity and NaN, built by overflow rather than division so no integer divide-by-zero is ever executed.  Repeated squaring reaches 2^4096, which is beyond the finite f64 range and evaluates to +infinity.

```valor
f64 f64_infinity()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::quant::f64_infinity();
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-f64-nan"></a>

> ## `f64_nan`

> *Internal API*
>
> Provides the module's **f64 nan** operation. Returns `f64`.

```valor
f64 f64_nan()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::quant::f64_nan();
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-round-to-integer"></a>

> ## `round_to_integer`

> Deterministic rounding -----------------------------------------------------  `round_to_integer` is the single rounding primitive. Deterministic rounding ----------------------------------------------------- `round_to_integer` is the single rounding primitive.  It returns an integer-valued f64 chosen by `mode`; ROUND_STOCHASTIC rounds up with probability equal to the fractional part, using the caller's draw.

```valor
public f64 round_to_integer(f64 value, i32 mode, u64 random_bits)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: f64 (by value)
> - `mode`: i32 (by value)
> - `random_bits`: u64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::quant::round_to_integer(value, mode, random_bits);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-binary-exponent"></a>

> ## `binary_exponent`

> *Internal API*
>
> Normalized binary exponent: returns `e` with `value` in [2^e, 2^(e+1)) for a strictly positive finite input. Normalized binary exponent: returns `e` with `value` in [2^e, 2^(e+1)) for a strictly positive finite input.

```valor
i32 binary_exponent(f64 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: f64 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::quant::binary_exponent(value);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-float-to-half-bits"></a>

> ## `float_to_half_bits`

> *Internal API*
>
> Provides the module's **float to half bits** operation. Returns `i32`.

```valor
i32 float_to_half_bits(f64 value, i32 mode, u64 random_bits, i32 mantissa_bits, i32 exponent_bias, i32 max_biased_exponent, i32 quiet_nan_bits)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: f64 (by value)
> - `mode`: i32 (by value)
> - `random_bits`: u64 (by value)
> - `mantissa_bits`: i32 (by value)
> - `exponent_bias`: i32 (by value)
> - `max_biased_exponent`: i32 (by value)
> - `quiet_nan_bits`: i32 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::quant::float_to_half_bits(value, mode, random_bits, mantissa_bits, exponent_bias, max_biased_exponent, quiet_nan_bits);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-mantissa-scale-pow-unit"></a>

> ## `mantissa_scale_pow_unit`

> *Internal API*
>
> 2^mantissa_bits as the exponent-field stride (value of the low exponent bit).

```valor
i32 mantissa_scale_pow_unit(i32 mantissa_bits)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `mantissa_bits`: i32 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::quant::mantissa_scale_pow_unit(mantissa_bits);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-half-bits-to-float"></a>

> ## `half_bits_to_float`

> *Internal API*
>
> Provides the module's **half bits to float** operation. Returns `f64`.

```valor
f64 half_bits_to_float(i32 bits, i32 mantissa_bits, i32 exponent_bias, i32 max_biased_exponent)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bits`: i32 (by value)
> - `mantissa_bits`: i32 (by value)
> - `exponent_bias`: i32 (by value)
> - `max_biased_exponent`: i32 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::quant::half_bits_to_float(bits, mantissa_bits, exponent_bias, max_biased_exponent);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-f32-to-f16"></a>

> ## `f32_to_f16`

> Provides the module's **f32 to f16** operation. Returns `u16`.

```valor
public u16 f32_to_f16(f32 input, i32 mode, u64 random_bits)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `input`: f32 (by value)
> - `mode`: i32 (by value)
> - `random_bits`: u64 (by value)

> ### RETURNS (u16)

> ### EXAMPLE
>
> ```valor
> u16 result = std::quant::f32_to_f16(input, mode, random_bits);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-f16-to-f32"></a>

> ## `f16_to_f32`

> Provides the module's **f16 to f32** operation. Returns `f32`.

```valor
public f32 f16_to_f32(u16 bits)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bits`: u16 (by value)

> ### RETURNS (f32)

> ### EXAMPLE
>
> ```valor
> f32 result = std::quant::f16_to_f32(bits);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-f32-to-bf16"></a>

> ## `f32_to_bf16`

> Provides the module's **f32 to bf16** operation. Returns `u16`.

```valor
public u16 f32_to_bf16(f32 input, i32 mode, u64 random_bits)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `input`: f32 (by value)
> - `mode`: i32 (by value)
> - `random_bits`: u64 (by value)

> ### RETURNS (u16)

> ### EXAMPLE
>
> ```valor
> u16 result = std::quant::f32_to_bf16(input, mode, random_bits);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-bf16-to-f32"></a>

> ## `bf16_to_f32`

> Provides the module's **bf16 to f32** operation. Returns `f32`.

```valor
public f32 bf16_to_f32(u16 bits)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bits`: u16 (by value)

> ### RETURNS (f32)

> ### EXAMPLE
>
> ```valor
> f32 result = std::quant::bf16_to_f32(bits);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-minmax-range"></a>

> ## `minmax_range`

> Single pass min/max. Single pass min/max.  Four lanes are tracked independently so the reduction exposes parallel accumulators; the lanes are combined in a fixed order.

```valor
public i32 minmax_range(usize length, (usize) -> f64 read, (f64, f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `f64`: (usize) -> f64 read, ( (borrowed fn-ptr (callback))
> - `receive`: f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::quant::minmax_range(length, f64, receive);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-quantile-sorted"></a>

> ## `quantile_sorted`

> *Internal API*
>
> Sample quantile of an already-sorted view via linear interpolation. Sample quantile of an already-sorted view via linear interpolation.  Sorting is the caller's responsibility, which keeps this routine allocation-free and its result a deterministic function of the input order.

```valor
f64 quantile_sorted(usize length, (usize) -> f64 read, f64 quantile)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `quantile`: (usize) -> f64 read, f64 (borrowed fn-ptr (callback))

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::quant::quantile_sorted(length, quantile);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-percentile-range"></a>

> ## `percentile_range`

> Provides the module's **percentile range** operation. Returns `i32`.

```valor
public i32 percentile_range(usize length, (usize) -> f64 read_sorted, f64 low_quantile, f64 high_quantile, (f64, f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `f64`: (usize) -> f64 read_sorted, f64 low_quantile, f64 high_quantile, ( (borrowed fn-ptr (callback))
> - `receive`: f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::quant::percentile_range(length, f64, receive);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-histogram-range"></a>

> ## `histogram_range`

> Trim a precomputed histogram to the tightest [lo, hi] covering `coverage` fraction of the mass, discarding symmetric tails. Trim a precomputed histogram to the tightest [lo, hi] covering `coverage` fraction of the mass, discarding symmetric tails.  Bin `k` spans [range_low + k*width, range_low + (k+1)*width).

```valor
public i32 histogram_range(usize bin_count, (usize) -> u64 read_count, f64 range_low, f64 range_high, f64 coverage, (f64, f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bin_count`: usize (by value)
> - `f64`: (usize) -> u64 read_count, f64 range_low, f64 range_high, f64 coverage, ( (borrowed fn-ptr (callback))
> - `receive`: f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::quant::histogram_range(bin_count, f64, receive);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-signed-qmax"></a>

> ## `signed_qmax`

> *Internal API*
>
> Provides the module's **signed qmax** operation. Returns `i64`.

```valor
i64 signed_qmax(i32 bits)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bits`: i32 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::quant::signed_qmax(bits);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-signed-qmin"></a>

> ## `signed_qmin`

> *Internal API*
>
> Provides the module's **signed qmin** operation. Returns `i64`.

```valor
i64 signed_qmin(i32 bits)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bits`: i32 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::quant::signed_qmin(bits);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-derive-affine"></a>

> ## `derive_affine`

> Provides the module's **derive affine** operation. Returns `i32`.

```valor
public i32 derive_affine(f64 range_low, f64 range_high, i32 bits, bool symmetric, i32 mode, (f64, i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `range_low`: f64 (by value)
> - `range_high`: f64 (by value)
> - `bits`: i32 (by value)
> - `symmetric`: bool (by value)
> - `mode`: i32 (by value)
> - `receive`: (f64, i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::quant::derive_affine(range_low, range_high, bits, symmetric, mode, receive);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-per-tensor-scale"></a>

> ## `per_tensor_scale`

> Provides the module's **per tensor scale** operation. Returns `i32`.

```valor
public i32 per_tensor_scale(f64 range_low, f64 range_high, i32 bits, bool symmetric, i32 mode, (f64, i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `range_low`: f64 (by value)
> - `range_high`: f64 (by value)
> - `bits`: i32 (by value)
> - `symmetric`: bool (by value)
> - `mode`: i32 (by value)
> - `receive`: (f64, i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::quant::per_tensor_scale(range_low, range_high, bits, symmetric, mode, receive);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-per-channel-scale"></a>

> ## `per_channel_scale`

> Provides the module's **per channel scale** operation. Returns `i32`.

```valor
public i32 per_channel_scale(usize channels, (usize) -> f64 read_low, (usize) -> f64 read_high, i32 bits, bool symmetric, i32 mode, (usize, f64, i64) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `channels`: usize (by value)
> - `write`: (usize) -> f64 read_low, (usize) -> f64 read_high, i32 bits, bool symmetric, i32 mode, (usize, f64, i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::quant::per_channel_scale(channels, write);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-groupwise-scale"></a>

> ## `groupwise_scale`

> Provides the module's **groupwise scale** operation. Returns `i32`.

```valor
public i32 groupwise_scale(usize group_count, (usize) -> f64 read_low, (usize) -> f64 read_high, i32 bits, bool symmetric, i32 mode, (usize, f64, i64) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `group_count`: usize (by value)
> - `write`: (usize) -> f64 read_low, (usize) -> f64 read_high, i32 bits, bool symmetric, i32 mode, (usize, f64, i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::quant::groupwise_scale(group_count, write);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-calibrate-minmax"></a>

> ## `calibrate_minmax`

> Provides the module's **calibrate minmax** operation. Returns `i32`.

```valor
public i32 calibrate_minmax(usize length, (usize) -> f64 read, i32 bits, bool symmetric, i32 mode, (f64, i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `f64`: (usize) -> f64 read, i32 bits, bool symmetric, i32 mode, ( (borrowed fn-ptr (callback))
> - `receive`: i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::quant::calibrate_minmax(length, f64, receive);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-calibrate-percentile"></a>

> ## `calibrate_percentile`

> Provides the module's **calibrate percentile** operation. Returns `i32`.

```valor
public i32 calibrate_percentile(usize length, (usize) -> f64 read_sorted, f64 low_quantile, f64 high_quantile, i32 bits, bool symmetric, i32 mode, (f64, i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `f64`: (usize) -> f64 read_sorted, f64 low_quantile, f64 high_quantile, i32 bits, bool symmetric, i32 mode, ( (borrowed fn-ptr (callback))
> - `receive`: i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::quant::calibrate_percentile(length, f64, receive);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-histogram-low-edge"></a>

> ## `histogram_low_edge`

> *Internal API*
>
> Shared histogram-trimming core. Shared histogram-trimming core.  Returns the trimmed low edge; the high edge is produced by `histogram_high_edge` so the two-value result is delivered without a struct or a captured closure.

```valor
f64 histogram_low_edge(usize bin_count, (usize) -> u64 read_count, f64 range_low, f64 range_high, f64 coverage)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bin_count`: usize (by value)
> - `coverage`: (usize) -> u64 read_count, f64 range_low, f64 range_high, f64 (borrowed fn-ptr (callback))

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::quant::histogram_low_edge(bin_count, coverage);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-histogram-high-edge"></a>

> ## `histogram_high_edge`

> *Internal API*
>
> Provides the module's **histogram high edge** operation. Returns `f64`.

```valor
f64 histogram_high_edge(usize bin_count, (usize) -> u64 read_count, f64 range_low, f64 range_high, f64 coverage)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bin_count`: usize (by value)
> - `coverage`: (usize) -> u64 read_count, f64 range_low, f64 range_high, f64 (borrowed fn-ptr (callback))

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::quant::histogram_high_edge(bin_count, coverage);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-calibrate-histogram"></a>

> ## `calibrate_histogram`

> Provides the module's **calibrate histogram** operation. Returns `i32`.

```valor
public i32 calibrate_histogram(usize bin_count, (usize) -> u64 read_count, f64 range_low, f64 range_high, f64 coverage, i32 bits, bool symmetric, i32 mode, (f64, i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bin_count`: usize (by value)
> - `f64`: (usize) -> u64 read_count, f64 range_low, f64 range_high, f64 coverage, i32 bits, bool symmetric, i32 mode, ( (borrowed fn-ptr (callback))
> - `receive`: i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::quant::calibrate_histogram(bin_count, f64, receive);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-apply-saturation"></a>

> ## `apply_saturation`

> *Internal API*
>
> Provides the module's **apply saturation** operation. Returns `i64`.

```valor
i64 apply_saturation(i64 value, i64 qmin, i64 qmax, i32 saturation)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: i64 (by value)
> - `qmin`: i64 (by value)
> - `qmax`: i64 (by value)
> - `saturation`: i32 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::quant::apply_saturation(value, qmin, qmax, saturation);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-quantize-symmetric"></a>

> ## `quantize_symmetric`

> Provides the module's **quantize symmetric** operation. Returns `i64`.

```valor
public i64 quantize_symmetric(f64 value, f64 scale, i64 qmin, i64 qmax, i32 mode, i32 saturation, u64 random_bits)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: f64 (by value)
> - `scale`: f64 (by value)
> - `qmin`: i64 (by value)
> - `qmax`: i64 (by value)
> - `mode`: i32 (by value)
> - `saturation`: i32 (by value)
> - `random_bits`: u64 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::quant::quantize_symmetric(value, scale, qmin, qmax, mode, saturation, random_bits);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-quantize-asymmetric"></a>

> ## `quantize_asymmetric`

> Provides the module's **quantize asymmetric** operation. Returns `i64`.

```valor
public i64 quantize_asymmetric(f64 value, f64 scale, i64 zero_point, i64 qmin, i64 qmax, i32 mode, i32 saturation, u64 random_bits)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: f64 (by value)
> - `scale`: f64 (by value)
> - `zero_point`: i64 (by value)
> - `qmin`: i64 (by value)
> - `qmax`: i64 (by value)
> - `mode`: i32 (by value)
> - `saturation`: i32 (by value)
> - `random_bits`: u64 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::quant::quantize_asymmetric(value, scale, zero_point, qmin, qmax, mode, saturation, random_bits);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-quantize-per-channel"></a>

> ## `quantize_per_channel`

> Per-channel quantization. Per-channel quantization.  `channel_of` maps an element index to its channel so scale and zero-point views can be shared across a tensor of any layout.

```valor
public i32 quantize_per_channel(usize length, (usize) -> f64 read, (usize) -> usize channel_of, (usize) -> f64 read_scale, (usize) -> i64 read_zero_point, i64 qmin, i64 qmax, i32 mode, i32 saturation, (usize) -> u64 read_random, (usize, i64) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `write`: (usize) -> f64 read, (usize) -> usize channel_of, (usize) -> f64 read_scale, (usize) -> i64 read_zero_point, i64 qmin, i64 qmax, i32 mode, i32 saturation, (usize) -> u64 read_random, (usize, i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::quant::quantize_per_channel(length, write);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-quantize-groupwise"></a>

> ## `quantize_groupwise`

> Group-wise quantization: consecutive runs of `group_size` elements share one scale and zero point. Group-wise quantization: consecutive runs of `group_size` elements share one scale and zero point.

```valor
public i32 quantize_groupwise(usize length, usize group_size, (usize) -> f64 read, (usize) -> f64 read_scale, (usize) -> i64 read_zero_point, i64 qmin, i64 qmax, i32 mode, i32 saturation, (usize) -> u64 read_random, (usize, i64) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `group_size`: usize (by value)
> - `write`: (usize) -> f64 read, (usize) -> f64 read_scale, (usize) -> i64 read_zero_point, i64 qmin, i64 qmax, i32 mode, i32 saturation, (usize) -> u64 read_random, (usize, i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::quant::quantize_groupwise(length, group_size, write);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

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
> f64 result = std::quant::dequantize(value, scale, zero_point);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-dequantize-per-channel"></a>

> ## `dequantize_per_channel`

> Provides the module's **dequantize per channel** operation. Returns `i32`.

```valor
public i32 dequantize_per_channel(usize length, (usize) -> i64 read, (usize) -> usize channel_of, (usize) -> f64 read_scale, (usize) -> i64 read_zero_point, (usize, f64) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `write`: (usize) -> i64 read, (usize) -> usize channel_of, (usize) -> f64 read_scale, (usize) -> i64 read_zero_point, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::quant::dequantize_per_channel(length, write);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-to-nibble"></a>

> ## `to_nibble`

> *Internal API*
>
> Provides the module's **to nibble** operation. Returns `i32`.

```valor
i32 to_nibble(i32 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: i32 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::quant::to_nibble(value);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-from-nibble"></a>

> ## `from_nibble`

> *Internal API*
>
> Provides the module's **from nibble** operation. Returns `i32`.

```valor
i32 from_nibble(i32 nibble)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `nibble`: i32 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::quant::from_nibble(nibble);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-to-crumb"></a>

> ## `to_crumb`

> *Internal API*
>
> Provides the module's **to crumb** operation. Returns `i32`.

```valor
i32 to_crumb(i32 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: i32 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::quant::to_crumb(value);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-from-crumb"></a>

> ## `from_crumb`

> *Internal API*
>
> Provides the module's **from crumb** operation. Returns `i32`.

```valor
i32 from_crumb(i32 crumb)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `crumb`: i32 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::quant::from_crumb(crumb);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-pack-i4"></a>

> ## `pack_i4`

> Two signed 4-bit values per byte.

```valor
public i32 pack_i4(usize count, (usize) -> i32 read, (usize, u8) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `usize`: (usize) -> i32 read, ( (borrowed fn-ptr (callback))
> - `write`: u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::quant::pack_i4(count, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-unpack-i4"></a>

> ## `unpack_i4`

> Provides the module's **unpack i4** operation. Returns `i32`.

```valor
public i32 unpack_i4(usize byte_count, (usize) -> u8 read_byte, usize value_count, (usize, i32) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_count`: usize (by value)
> - `usize`: (usize) -> u8 read_byte, usize value_count, ( (borrowed fn-ptr (callback))
> - `write`: i32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::quant::unpack_i4(byte_count, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-pack-i2"></a>

> ## `pack_i2`

> Four signed 2-bit values per byte.

```valor
public i32 pack_i2(usize count, (usize) -> i32 read, (usize, u8) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `usize`: (usize) -> i32 read, ( (borrowed fn-ptr (callback))
> - `write`: u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::quant::pack_i2(count, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-unpack-i2"></a>

> ## `unpack_i2`

> Provides the module's **unpack i2** operation. Returns `i32`.

```valor
public i32 unpack_i2(usize byte_count, (usize) -> u8 read_byte, usize value_count, (usize, i32) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_count`: usize (by value)
> - `usize`: (usize) -> u8 read_byte, usize value_count, ( (borrowed fn-ptr (callback))
> - `write`: i32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::quant::unpack_i2(byte_count, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-pack-bits"></a>

> ## `pack_bits`

> Eight booleans per byte, least-significant bit first.

```valor
public i32 pack_bits(usize count, (usize) -> bool read, (usize, u8) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `usize`: (usize) -> bool read, ( (borrowed fn-ptr (callback))
> - `write`: u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::quant::pack_bits(count, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-unpack-bits"></a>

> ## `unpack_bits`

> Provides the module's **unpack bits** operation. Returns `i32`.

```valor
public i32 unpack_bits(usize byte_count, (usize) -> u8 read_byte, usize value_count, (usize, bool) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_count`: usize (by value)
> - `usize`: (usize) -> u8 read_byte, usize value_count, ( (borrowed fn-ptr (callback))
> - `write`: bool) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::quant::unpack_bits(byte_count, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-dot-wide"></a>

> ## `dot_wide`

> *Internal API*
>
> Provides the module's **dot wide** operation. Returns `i64`.

```valor
i64 dot_wide(usize length, (usize) -> i32 read_left, (usize) -> i32 read_right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `read_right`: (usize) -> i32 read_left, (usize) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::quant::dot_wide(length, read_right);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-dot-i8"></a>

> ## `dot_i8`

> Provides the module's **dot i8** operation. Returns `i64`.

```valor
public i64 dot_i8(usize length, (usize) -> i32 read_left, (usize) -> i32 read_right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `read_right`: (usize) -> i32 read_left, (usize) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::quant::dot_i8(length, read_right);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-dot-i4"></a>

> ## `dot_i4`

> Provides the module's **dot i4** operation. Returns `i64`.

```valor
public i64 dot_i4(usize length, (usize) -> i32 read_left, (usize) -> i32 read_right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `read_right`: (usize) -> i32 read_left, (usize) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::quant::dot_i4(length, read_right);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-gemm-integer"></a>

> ## `gemm_integer`

> *Internal API*
>
> Row-major integer GEMM: a is m x k, b is k x n, c is m x n. Row-major integer GEMM: a is m x k, b is k x n, c is m x n.  Accumulation is i64 internally; each output is written as i32.

```valor
i32 gemm_integer(usize rows, usize inner, usize columns, (usize) -> i32 read_a, (usize) -> i32 read_b, (usize, i32) -> void write_c)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^3)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rows`: usize (by value)
> - `inner`: usize (by value)
> - `columns`: usize (by value)
> - `write_c`: (usize) -> i32 read_a, (usize) -> i32 read_b, (usize, i32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::quant::gemm_integer(rows, inner, columns, write_c);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-gemm-i8"></a>

> ## `gemm_i8`

> Provides the module's **gemm i8** operation. Returns `i32`.

```valor
public i32 gemm_i8(usize rows, usize inner, usize columns, (usize) -> i32 read_a, (usize) -> i32 read_b, (usize, i32) -> void write_c)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rows`: usize (by value)
> - `inner`: usize (by value)
> - `columns`: usize (by value)
> - `write_c`: (usize) -> i32 read_a, (usize) -> i32 read_b, (usize, i32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::quant::gemm_i8(rows, inner, columns, write_c);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-gemm-i4"></a>

> ## `gemm_i4`

> Provides the module's **gemm i4** operation. Returns `i32`.

```valor
public i32 gemm_i4(usize rows, usize inner, usize columns, (usize) -> i32 read_a, (usize) -> i32 read_b, (usize, i32) -> void write_c)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rows`: usize (by value)
> - `inner`: usize (by value)
> - `columns`: usize (by value)
> - `write_c`: (usize) -> i32 read_a, (usize) -> i32 read_b, (usize, i32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::quant::gemm_i4(rows, inner, columns, write_c);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

<a id="fn-requantize-i32-to-i8"></a>

> ## `requantize_i32_to_i8`

> Requantize an i32 accumulator into an 8-bit code: multiply by the composed scale ratio, round under the explicit mode, shift by the output zero point, and saturate. Requantize an i32 accumulator into an 8-bit code: multiply by the composed scale ratio, round under the explicit mode, shift by the output zero point, and saturate.

```valor
public i32 requantize_i32_to_i8(i32 accumulator, f64 multiplier, i64 zero_point, i64 qmin, i64 qmax, i32 mode, i32 saturation, u64 random_bits)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `accumulator`: i32 (by value)
> - `multiplier`: f64 (by value)
> - `zero_point`: i64 (by value)
> - `qmin`: i64 (by value)
> - `qmax`: i64 (by value)
> - `mode`: i32 (by value)
> - `saturation`: i32 (by value)
> - `random_bits`: u64 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::quant::requantize_i32_to_i8(accumulator, multiplier, zero_point, qmin, qmax, mode, saturation, random_bits);
> ```

> ### SEE ALSO
>
> - [`std::quant::absolute_f64`](#fn-absolute-f64)
> - [`std::quant::maximum_f64`](#fn-maximum-f64)
> - [`std::quant::minimum_f64`](#fn-minimum-f64)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Probabilistic computing](STD-PROBABILISTIC-DOC.md) · [Table of contents](standard-library/README.md) · [Tensors →](STD-TENSOR-DOC.md)
