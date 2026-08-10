<!-- stdlib-reference-style: modern -->
> # `std::builtins`

`std::builtins` compiler-provided primitive operations.

[Standard library](standard-library/README.md) / [Foundations](standard-library/README.md#foundations) / **Built-ins**

> **Source:** `stdlib/std/builtins.valor` · **Routines:** 89 public

## Routines

<details>
<summary>Browse all 89 routines</summary>

- [`size_of_scalar`](#fn-size-of-scalar)
- [`align_of_scalar`](#fn-align-of-scalar)
- [`bit_width_scalar`](#fn-bit-width-scalar)
- [`is_same_scalar`](#fn-is-same-scalar)
- [`scalar_is_signed_int`](#fn-scalar-is-signed-int)
- [`scalar_is_unsigned_int`](#fn-scalar-is-unsigned-int)
- [`scalar_is_float`](#fn-scalar-is-float)
- [`scalar_type_id`](#fn-scalar-type-id)
- [`mod_u64`](#fn-mod-u64)
- [`mod_usize`](#fn-mod-usize)
- [`min_i64_value`](#fn-min-i64-value)
- [`max_u64_value`](#fn-max-u64-value)
- [`add_fits_u64`](#fn-add-fits-u64)
- [`add_fits_i64`](#fn-add-fits-i64)
- [`round_up`](#fn-round-up)
- [`is_aligned`](#fn-is-aligned)
- [`min_i8`](#fn-min-i8)
- [`max_i8`](#fn-max-i8)
- [`min_i16`](#fn-min-i16)
- [`max_i16`](#fn-max-i16)
- [`min_i32`](#fn-min-i32)
- [`max_i32`](#fn-max-i32)
- [`min_i64`](#fn-min-i64)
- [`max_i64`](#fn-max-i64)
- [`max_u8`](#fn-max-u8)
- [`max_u16`](#fn-max-u16)
- [`max_u32`](#fn-max-u32)
- [`max_u64`](#fn-max-u64)
- [`min_unsigned`](#fn-min-unsigned)
- [`epsilon_f64`](#fn-epsilon-f64)
- [`truth_i64`](#fn-truth-i64)
- [`truth_u64`](#fn-truth-u64)
- [`truth_usize`](#fn-truth-usize)
- [`truth_bool`](#fn-truth-bool)
- [`truth_code_i64`](#fn-truth-code-i64)
- [`checked_narrow_i64`](#fn-checked-narrow-i64)
- [`checked_narrow_u64`](#fn-checked-narrow-u64)
- [`checked_i64_to_u64`](#fn-checked-i64-to-u64)
- [`checked_u64_to_i64`](#fn-checked-u64-to-i64)
- [`saturating_narrow_i64`](#fn-saturating-narrow-i64)
- [`saturating_narrow_u64`](#fn-saturating-narrow-u64)
- [`bitcast_i32_to_u32`](#fn-bitcast-i32-to-u32)
- [`bitcast_u32_to_i32`](#fn-bitcast-u32-to-i32)
- [`hash_mix`](#fn-hash-mix)
- [`hash_mix_alt`](#fn-hash-mix-alt)
- [`hash_scalar`](#fn-hash-scalar)
- [`hash_bytes`](#fn-hash-bytes)
- [`hash_bytes_alt`](#fn-hash-bytes-alt)
- [`hash_finish`](#fn-hash-finish)
- [`hash_equal`](#fn-hash-equal)
- [`write_le_u64`](#fn-write-le-u64)
- [`write_le_u32`](#fn-write-le-u32)
- [`read_le_u64`](#fn-read-le-u64)
- [`assert_holds`](#fn-assert-holds)
- [`require_holds`](#fn-require-holds)
- [`panic_code`](#fn-panic-code)
- [`trap`](#fn-trap)
- [`unreachable`](#fn-unreachable)
- [`assume_holds`](#fn-assume-holds)
- [`compare_i64`](#fn-compare-i64)
- [`compare_u64`](#fn-compare-u64)
- [`compare_usize`](#fn-compare-usize)
- [`compare_bool`](#fn-compare-bool)
- [`equal_i64`](#fn-equal-i64)
- [`equal_u64`](#fn-equal-u64)
- [`equal_bool`](#fn-equal-bool)
- [`min_i64_of`](#fn-min-i64-of)
- [`max_i64_of`](#fn-max-i64-of)
- [`min_u64_of`](#fn-min-u64-of)
- [`max_u64_of`](#fn-max-u64-of)
- [`clamp_i64`](#fn-clamp-i64)
- [`range_len`](#fn-range-len)
- [`range_at`](#fn-range-at)
- [`range_valid`](#fn-range-valid)
- [`enumerate_index`](#fn-enumerate-index)
- [`zip_len`](#fn-zip-len)
- [`zip_len3`](#fn-zip-len3)
- [`min_usize`](#fn-min-usize)
- [`max_usize`](#fn-max-usize)
- [`all_of`](#fn-all-of)
- [`any_of`](#fn-any-of)
- [`count_if`](#fn-count-if)
- [`sum_i64`](#fn-sum-i64)
- [`sum_u64`](#fn-sum-u64)
- [`reduce_min_index`](#fn-reduce-min-index)
- [`reduce_max_index`](#fn-reduce-max-index)
- [`find_first`](#fn-find-first)
- [`swap_i64`](#fn-swap-i64)
- [`swap_u64`](#fn-swap-u64)

</details>

## API reference

<a id="fn-size-of-scalar"></a>

> ## `size_of_scalar`

> Byte size of a scalar type under the active ABI (0 for void / unknown).

```valor
public usize size_of_scalar(u8 tag)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: u8 (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::builtins::size_of_scalar(tag);
> ```

> ### SEE ALSO
>
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)
> - [`std::builtins::is_same_scalar`](#fn-is-same-scalar)

<a id="fn-align-of-scalar"></a>

> ## `align_of_scalar`

> Natural alignment of a scalar type (equals its size for these primitives).

```valor
public usize align_of_scalar(u8 tag)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: u8 (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::builtins::align_of_scalar(tag);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)
> - [`std::builtins::is_same_scalar`](#fn-is-same-scalar)

<a id="fn-bit-width-scalar"></a>

> ## `bit_width_scalar`

> Storage bit width of an integral / floating scalar (0 for void / unknown).

```valor
public u32 bit_width_scalar(u8 tag)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: u8 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::builtins::bit_width_scalar(tag);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::is_same_scalar`](#fn-is-same-scalar)

<a id="fn-is-same-scalar"></a>

> ## `is_same_scalar`

> Compile-time-style scalar type equality predicate (isSameType for scalars).

```valor
public bool is_same_scalar(u8 a, u8 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: u8 (by value)
> - `b`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::builtins::is_same_scalar(a, b);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-scalar-is-signed-int"></a>

> ## `scalar_is_signed_int`

> Is the tag a signed integer type?

```valor
public bool scalar_is_signed_int(u8 tag)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::builtins::scalar_is_signed_int(tag);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-scalar-is-unsigned-int"></a>

> ## `scalar_is_unsigned_int`

> Is the tag an unsigned integer type?

```valor
public bool scalar_is_unsigned_int(u8 tag)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::builtins::scalar_is_unsigned_int(tag);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-scalar-is-float"></a>

> ## `scalar_is_float`

> Is the tag a floating-point type?

```valor
public bool scalar_is_float(u8 tag)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::builtins::scalar_is_float(tag);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-scalar-type-id"></a>

> ## `scalar_type_id`

> Provides the module's **scalar type id** operation.

```valor
public void scalar_type_id(u8 tag, (u64, u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: u8 (by value)
> - `receive`: (u64, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::builtins::scalar_type_id(tag, receive);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-mod-u64"></a>

> ## `mod_u64`

> Provides the module's **mod u64** operation. Returns `u64`.

```valor
public u64 mod_u64(u64 value, u64 divisor)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)
> - `divisor`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::builtins::mod_u64(value, divisor);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-mod-usize"></a>

> ## `mod_usize`

> Provides the module's **mod usize** operation. Returns `usize`.

```valor
public usize mod_usize(usize value, usize divisor)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: usize (by value)
> - `divisor`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::builtins::mod_usize(value, divisor);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-min-i64-value"></a>

> ## `min_i64_value`

> Provides the module's **min i64 value** operation. Returns `i64`.

```valor
public i64 min_i64_value()
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
> i64 result = std::builtins::min_i64_value();
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-max-u64-value"></a>

> ## `max_u64_value`

> All-ones u64 (2^64 - 1) obtained by modular wrap of unsigned subtraction, since the literal itself is not constval-representable. All-ones u64 (2^64 - 1) obtained by modular wrap of unsigned subtraction, since the literal itself is not constval-representable.

```valor
public u64 max_u64_value()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::builtins::max_u64_value();
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-add-fits-u64"></a>

> ## `add_fits_u64`

> Does left + right fit in u64 without wrapping?

```valor
public bool add_fits_u64(u64 left, u64 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: u64 (by value)
> - `right`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::builtins::add_fits_u64(left, right);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-add-fits-i64"></a>

> ## `add_fits_i64`

> Does left + right fit in a signed i64 without overflow?

```valor
public bool add_fits_i64(i64 left, i64 right)
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
> bool result = std::builtins::add_fits_i64(left, right);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-round-up"></a>

> ## `round_up`

> Round `value` up to the next multiple of `align` (align >= 1), overflow-safe.

```valor
public usize round_up(usize value, usize align)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: usize (by value)
> - `align`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::builtins::round_up(value, align);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-is-aligned"></a>

> ## `is_aligned`

> Provides the module's **is aligned** operation. Returns `bool`.

```valor
public bool is_aligned(usize value, usize align)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: usize (by value)
> - `align`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::builtins::is_aligned(value, align);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-min-i8"></a>

> ## `min_i8`

> Provides the module's **min i8** operation. Returns `i64`.

```valor
public i64 min_i8()
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
> i64 result = std::builtins::min_i8();
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-max-i8"></a>

> ## `max_i8`

> Provides the module's **max i8** operation. Returns `i64`.

```valor
public i64 max_i8()
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
> i64 result = std::builtins::max_i8();
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-min-i16"></a>

> ## `min_i16`

> Provides the module's **min i16** operation. Returns `i64`.

```valor
public i64 min_i16()
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
> i64 result = std::builtins::min_i16();
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-max-i16"></a>

> ## `max_i16`

> Provides the module's **max i16** operation. Returns `i64`.

```valor
public i64 max_i16()
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
> i64 result = std::builtins::max_i16();
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-min-i32"></a>

> ## `min_i32`

> Provides the module's **min i32** operation. Returns `i64`.

```valor
public i64 min_i32()
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
> i64 result = std::builtins::min_i32();
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-max-i32"></a>

> ## `max_i32`

> Provides the module's **max i32** operation. Returns `i64`.

```valor
public i64 max_i32()
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
> i64 result = std::builtins::max_i32();
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-min-i64"></a>

> ## `min_i64`

> Provides the module's **min i64** operation. Returns `i64`.

```valor
public i64 min_i64()
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
> i64 result = std::builtins::min_i64();
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-max-i64"></a>

> ## `max_i64`

> Provides the module's **max i64** operation. Returns `i64`.

```valor
public i64 max_i64()
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
> i64 result = std::builtins::max_i64();
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-max-u8"></a>

> ## `max_u8`

> Provides the module's **max u8** operation. Returns `u64`.

```valor
public u64 max_u8()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::builtins::max_u8();
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-max-u16"></a>

> ## `max_u16`

> Provides the module's **max u16** operation. Returns `u64`.

```valor
public u64 max_u16()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::builtins::max_u16();
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-max-u32"></a>

> ## `max_u32`

> Provides the module's **max u32** operation. Returns `u64`.

```valor
public u64 max_u32()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::builtins::max_u32();
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-max-u64"></a>

> ## `max_u64`

> Provides the module's **max u64** operation. Returns `u64`.

```valor
public u64 max_u64()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::builtins::max_u64();
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-min-unsigned"></a>

> ## `min_unsigned`

> Provides the module's **min unsigned** operation. Returns `u64`.

```valor
public u64 min_unsigned()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::builtins::min_unsigned();
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-epsilon-f64"></a>

> ## `epsilon_f64`

> IEEE-754 machine epsilon. IEEE-754 machine epsilon.  f64 epsilon is returned as a value; f32 epsilon is exposed as its exact IEEE bit pattern (0x34000000) because emitting an f32 float value miscompiles in v0.1 -- callers reinterpret the bits if needed.

```valor
public f64 epsilon_f64()
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
> f64 result = std::builtins::epsilon_f64();
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-truth-i64"></a>

> ## `truth_i64`

> Provides the module's **truth i64** operation. Returns `bool`.

```valor
public bool truth_i64(i64 v)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `v`: i64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::builtins::truth_i64(v);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-truth-u64"></a>

> ## `truth_u64`

> Provides the module's **truth u64** operation. Returns `bool`.

```valor
public bool truth_u64(u64 v)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `v`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::builtins::truth_u64(v);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-truth-usize"></a>

> ## `truth_usize`

> Provides the module's **truth usize** operation. Returns `bool`.

```valor
public bool truth_usize(usize v)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `v`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::builtins::truth_usize(v);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-truth-bool"></a>

> ## `truth_bool`

> Provides the module's **truth bool** operation. Returns `bool`.

```valor
public bool truth_bool(bool v)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `v`: bool (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::builtins::truth_bool(v);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-truth-code-i64"></a>

> ## `truth_code_i64`

> Truth as the canonical TRUTH_* code (for tabular / branchless callers).

```valor
public i32 truth_code_i64(i64 v)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `v`: i64 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::builtins::truth_code_i64(v);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-checked-narrow-i64"></a>

> ## `checked_narrow_i64`

> Checked signed narrowing to an inclusive [lo, hi] window.

```valor
public i32 checked_narrow_i64(i64 value, i64 lo, i64 hi, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: i64 (by value)
> - `lo`: i64 (by value)
> - `hi`: i64 (by value)
> - `receive`: (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::builtins::checked_narrow_i64(value, lo, hi, receive);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-checked-narrow-u64"></a>

> ## `checked_narrow_u64`

> Checked unsigned narrowing to [0, hi].

```valor
public i32 checked_narrow_u64(u64 value, u64 hi, (u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)
> - `hi`: u64 (by value)
> - `receive`: (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::builtins::checked_narrow_u64(value, hi, receive);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-checked-i64-to-u64"></a>

> ## `checked_i64_to_u64`

> Checked i64 -> u64: fails on negative input.

```valor
public i32 checked_i64_to_u64(i64 value, (u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: i64 (by value)
> - `receive`: (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::builtins::checked_i64_to_u64(value, receive);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-checked-u64-to-i64"></a>

> ## `checked_u64_to_i64`

> Checked u64 -> i64: fails when the top bit is set (value > i64 max).

```valor
public i32 checked_u64_to_i64(u64 value, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)
> - `receive`: (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::builtins::checked_u64_to_i64(value, receive);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-saturating-narrow-i64"></a>

> ## `saturating_narrow_i64`

> Saturating signed narrowing to [lo, hi] (defined for all inputs).

```valor
public i64 saturating_narrow_i64(i64 value, i64 lo, i64 hi)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: i64 (by value)
> - `lo`: i64 (by value)
> - `hi`: i64 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::builtins::saturating_narrow_i64(value, lo, hi);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-saturating-narrow-u64"></a>

> ## `saturating_narrow_u64`

> Saturating unsigned clamp to [0, hi].

```valor
public u64 saturating_narrow_u64(u64 value, u64 hi)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)
> - `hi`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::builtins::saturating_narrow_u64(value, hi);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-bitcast-i32-to-u32"></a>

> ## `bitcast_i32_to_u32`

> Reinterpret an i32 bit pattern as u32 (two's-complement modular map).

```valor
public u32 bitcast_i32_to_u32(i32 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: i32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::builtins::bitcast_i32_to_u32(value);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-bitcast-u32-to-i32"></a>

> ## `bitcast_u32_to_i32`

> Reinterpret a u32 bit pattern as i32.

```valor
public i32 bitcast_u32_to_i32(u32 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u32 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::builtins::bitcast_u32_to_i32(value);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-hash-mix"></a>

> ## `hash_mix`

> Mix one 64-bit word into an accumulator (one fold step).

```valor
public u64 hash_mix(u64 acc, u64 word)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `acc`: u64 (by value)
> - `word`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::builtins::hash_mix(acc, word);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-hash-mix-alt"></a>

> ## `hash_mix_alt`

> Second, decorrelated lane so equality needs both lanes to agree.

```valor
public u64 hash_mix_alt(u64 acc, u64 word)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `acc`: u64 (by value)
> - `word`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::builtins::hash_mix_alt(acc, word);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-hash-scalar"></a>

> ## `hash_scalar`

> Deterministic hash of a single scalar word with an explicit seed.

```valor
public u64 hash_scalar(u64 value, u64 seed)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)
> - `seed`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::builtins::hash_scalar(value, seed);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-hash-bytes"></a>

> ## `hash_bytes`

> Fold `n` bytes read through `read_byte` into a stable primary-lane hash.

```valor
public u64 hash_bytes(usize n, u64 seed, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `seed`: u64 (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::builtins::hash_bytes(n, seed, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-hash-bytes-alt"></a>

> ## `hash_bytes_alt`

> Second-lane byte fold, decorrelated from hash_bytes.

```valor
public u64 hash_bytes_alt(usize n, u64 seed, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `seed`: u64 (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::builtins::hash_bytes_alt(n, seed, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-hash-finish"></a>

> ## `hash_finish`

> Seal two lanes into a canonical hash pair (delivered, not constructed).

```valor
public void hash_finish(u64 primary, u64 alt, (u64, u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `primary`: u64 (by value)
> - `alt`: u64 (by value)
> - `receive`: (u64, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::builtins::hash_finish(primary, alt, receive);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-hash-equal"></a>

> ## `hash_equal`

> Equality over a two-lane hash: both lanes must agree (never one alone).

```valor
public bool hash_equal(u64 a_primary, u64 a_alt, u64 b_primary, u64 b_alt)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a_primary`: u64 (by value)
> - `a_alt`: u64 (by value)
> - `b_primary`: u64 (by value)
> - `b_alt`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::builtins::hash_equal(a_primary, a_alt, b_primary, b_alt);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-write-le-u64"></a>

> ## `write_le_u64`

> Emit a u64 as 8 little-endian bytes through a caller (index,byte) sink.

```valor
public void write_le_u64(u64 value, (usize, u8) -> void put)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)
> - `put`: (usize, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::builtins::write_le_u64(value, put);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-write-le-u32"></a>

> ## `write_le_u32`

> Emit a u32 as 4 little-endian bytes.

```valor
public void write_le_u32(u32 value, (usize, u8) -> void put)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u32 (by value)
> - `put`: (usize, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::builtins::write_le_u32(value, put);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-read-le-u64"></a>

> ## `read_le_u64`

> Reassemble a u64 from 8 little-endian bytes read through `read_byte`.

```valor
public u64 read_le_u64((usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::builtins::read_le_u64(read_byte);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-assert-holds"></a>

> ## `assert_holds`

> Debug/profile-governed assertion: OK when it holds, TRAP_ASSERT otherwise.

```valor
public i32 assert_holds(bool condition)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `condition`: bool (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::builtins::assert_holds(condition);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-require-holds"></a>

> ## `require_holds`

> Recoverable contract: returns OK when it holds, else the caller's typed error. Recoverable contract: returns OK when it holds, else the caller's typed error. This is the only member that participates in normal control flow.

```valor
public i32 require_holds(bool condition, i32 error_code)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `condition`: bool (by value)
> - `error_code`: i32 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::builtins::require_holds(condition, error_code);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-panic-code"></a>

> ## `panic_code`

> Configured failure policy entry point: always the panic trap code.

```valor
public i32 panic_code()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::builtins::panic_code();
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-trap"></a>

> ## `trap`

> Minimal non-recoverable primitive: passes a stable numeric code through.

```valor
public i32 trap(i32 code)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `code`: i32 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::builtins::trap(code);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-unreachable"></a>

> ## `unreachable`

> Control-flow-cannot-arrive assertion: arriving is a correctness defect.

```valor
public i32 unreachable()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::builtins::unreachable();
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-assume-holds"></a>

> ## `assume_holds`

> Optimisation promise (privileged code only): OK when honoured, else the assume trap code -- a violated assume is undefined behaviour in real builds. Optimisation promise (privileged code only): OK when honoured, else the assume trap code -- a violated assume is undefined behaviour in real builds.

```valor
public i32 assume_holds(bool condition)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `condition`: bool (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::builtins::assume_holds(condition);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-compare-i64"></a>

> ## `compare_i64`

> Provides the module's **compare i64** operation. Returns `i32`.

```valor
public i32 compare_i64(i64 a, i64 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: i64 (by value)
> - `b`: i64 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::builtins::compare_i64(a, b);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-compare-u64"></a>

> ## `compare_u64`

> Provides the module's **compare u64** operation. Returns `i32`.

```valor
public i32 compare_u64(u64 a, u64 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: u64 (by value)
> - `b`: u64 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::builtins::compare_u64(a, b);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-compare-usize"></a>

> ## `compare_usize`

> Provides the module's **compare usize** operation. Returns `i32`.

```valor
public i32 compare_usize(usize a, usize b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: usize (by value)
> - `b`: usize (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::builtins::compare_usize(a, b);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-compare-bool"></a>

> ## `compare_bool`

> Provides the module's **compare bool** operation. Returns `i32`.

```valor
public i32 compare_bool(bool a, bool b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: bool (by value)
> - `b`: bool (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::builtins::compare_bool(a, b);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-equal-i64"></a>

> ## `equal_i64`

> Provides the module's **equal i64** operation. Returns `bool`.

```valor
public bool equal_i64(i64 a, i64 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: i64 (by value)
> - `b`: i64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::builtins::equal_i64(a, b);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-equal-u64"></a>

> ## `equal_u64`

> Provides the module's **equal u64** operation. Returns `bool`.

```valor
public bool equal_u64(u64 a, u64 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: u64 (by value)
> - `b`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::builtins::equal_u64(a, b);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-equal-bool"></a>

> ## `equal_bool`

> Provides the module's **equal bool** operation. Returns `bool`.

```valor
public bool equal_bool(bool a, bool b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: bool (by value)
> - `b`: bool (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::builtins::equal_bool(a, b);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-min-i64-of"></a>

> ## `min_i64_of`

> min / max with stable first-match tie behaviour (design section 4.5).

```valor
public i64 min_i64_of(i64 a, i64 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: i64 (by value)
> - `b`: i64 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::builtins::min_i64_of(a, b);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-max-i64-of"></a>

> ## `max_i64_of`

> Provides the module's **max i64 of** operation. Returns `i64`.

```valor
public i64 max_i64_of(i64 a, i64 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: i64 (by value)
> - `b`: i64 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::builtins::max_i64_of(a, b);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-min-u64-of"></a>

> ## `min_u64_of`

> Provides the module's **min u64 of** operation. Returns `u64`.

```valor
public u64 min_u64_of(u64 a, u64 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: u64 (by value)
> - `b`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::builtins::min_u64_of(a, b);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-max-u64-of"></a>

> ## `max_u64_of`

> Provides the module's **max u64 of** operation. Returns `u64`.

```valor
public u64 max_u64_of(u64 a, u64 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: u64 (by value)
> - `b`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::builtins::max_u64_of(a, b);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-clamp-i64"></a>

> ## `clamp_i64`

> Clamp into an inclusive [lo, hi] window (lo <= hi assumed).

```valor
public i64 clamp_i64(i64 value, i64 lo, i64 hi)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: i64 (by value)
> - `lo`: i64 (by value)
> - `hi`: i64 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::builtins::clamp_i64(value, lo, hi);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-range-len"></a>

> ## `range_len`

> Number of elements in the arithmetic range [start, end) with the given step (step must be non-zero; step's sign selects ascending / descending). Number of elements in the arithmetic range [start, end) with the given step (step must be non-zero; step's sign selects ascending / descending).

```valor
public usize range_len(i64 start, i64 end, i64 step)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: i64 (by value)
> - `end`: i64 (by value)
> - `step`: i64 (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::builtins::range_len(start, end, step);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-range-at"></a>

> ## `range_at`

> The i-th value of the range (start + i*step); caller keeps i < range_len.

```valor
public i64 range_at(i64 start, i64 step, usize i)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: i64 (by value)
> - `step`: i64 (by value)
> - `i`: usize (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::builtins::range_at(start, step, i);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-range-valid"></a>

> ## `range_valid`

> Is the range description well-formed (step non-zero)?

```valor
public bool range_valid(i64 step)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `step`: i64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::builtins::range_valid(step);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-enumerate-index"></a>

> ## `enumerate_index`

> enumerate: the index paired with element i is simply i; this exposes it as the canonical checked index type for symmetry with zip / range. enumerate: the index paired with element i is simply i; this exposes it as the canonical checked index type for symmetry with zip / range.

```valor
public usize enumerate_index(usize i)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `i`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::builtins::enumerate_index(i);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-zip-len"></a>

> ## `zip_len`

> zip length is the shortest of the inputs unless a strict policy is chosen.

```valor
public usize zip_len(usize a_len, usize b_len)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a_len`: usize (by value)
> - `b_len`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::builtins::zip_len(a_len, b_len);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-zip-len3"></a>

> ## `zip_len3`

> Provides the module's **zip len3** operation. Returns `usize`.

```valor
public usize zip_len3(usize a, usize b, usize c)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: usize (by value)
> - `b`: usize (by value)
> - `c`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::builtins::zip_len3(a, b, c);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-min-usize"></a>

> ## `min_usize`

> Provides the module's **min usize** operation. Returns `usize`.

```valor
public usize min_usize(usize a, usize b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: usize (by value)
> - `b`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::builtins::min_usize(a, b);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-max-usize"></a>

> ## `max_usize`

> Provides the module's **max usize** operation. Returns `usize`.

```valor
public usize max_usize(usize a, usize b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: usize (by value)
> - `b`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::builtins::max_usize(a, b);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-all-of"></a>

> ## `all_of`

> all(): every element satisfies `pred`; short-circuits on the first failure.

```valor
public bool all_of(usize n, (usize) -> bool pred)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `pred`: (usize) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::builtins::all_of(n, pred);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-any-of"></a>

> ## `any_of`

> any(): some element satisfies `pred`; short-circuits on the first success.

```valor
public bool any_of(usize n, (usize) -> bool pred)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `pred`: (usize) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::builtins::any_of(n, pred);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-count-if"></a>

> ## `count_if`

> count of elements satisfying `pred`.

```valor
public usize count_if(usize n, (usize) -> bool pred)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `pred`: (usize) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::builtins::count_if(n, pred);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-sum-i64"></a>

> ## `sum_i64`

> Checked signed sum starting from `init`; returns ERR_OVERFLOW and stops if any partial sum would overflow, else delivers the total through `receive`. Checked signed sum starting from `init`; returns ERR_OVERFLOW and stops if any partial sum would overflow, else delivers the total through `receive`.

```valor
public i32 sum_i64(usize n, i64 init, (usize) -> i64 read, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `init`: i64 (by value)
> - `receive`: (usize) -> i64 read, (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::builtins::sum_i64(n, init, receive);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-sum-u64"></a>

> ## `sum_u64`

> Unsigned wrapping-free sum (checked against u64 overflow).

```valor
public i32 sum_u64(usize n, u64 init, (usize) -> u64 read, (u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `init`: u64 (by value)
> - `receive`: (usize) -> u64 read, (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::builtins::sum_u64(n, init, receive);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-reduce-min-index"></a>

> ## `reduce_min_index`

> Index of the minimum element under a caller comparator (dodges float compare); stable first-match on ties. Index of the minimum element under a caller comparator (dodges float compare); stable first-match on ties.  Delivers the index; ERR_EMPTY when n == 0.

```valor
public i32 reduce_min_index(usize n, (usize, usize) -> i32 cmp, (usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `receive`: (usize, usize) -> i32 cmp, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::builtins::reduce_min_index(n, receive);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-reduce-max-index"></a>

> ## `reduce_max_index`

> Index of the maximum element under a caller comparator; stable first-match.

```valor
public i32 reduce_max_index(usize n, (usize, usize) -> i32 cmp, (usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `receive`: (usize, usize) -> i32 cmp, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::builtins::reduce_max_index(n, receive);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-find-first"></a>

> ## `find_first`

> Index of the first element satisfying `pred`; ERR_EMPTY if none match.

```valor
public i32 find_first(usize n, (usize) -> bool pred, (usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `receive`: (usize) -> bool pred, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::builtins::find_first(n, receive);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-swap-i64"></a>

> ## `swap_i64`

> Provides the module's **swap i64** operation.

```valor
public void swap_i64(i64 a, i64 b, (i64, i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: i64 (by value)
> - `b`: i64 (by value)
> - `receive`: (i64, i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::builtins::swap_i64(a, b, receive);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

<a id="fn-swap-u64"></a>

> ## `swap_u64`

> Provides the module's **swap u64** operation.

```valor
public void swap_u64(u64 a, u64 b, (u64, u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: u64 (by value)
> - `b`: u64 (by value)
> - `receive`: (u64, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::builtins::swap_u64(a, b, receive);
> ```

> ### SEE ALSO
>
> - [`std::builtins::size_of_scalar`](#fn-size-of-scalar)
> - [`std::builtins::align_of_scalar`](#fn-align-of-scalar)
> - [`std::builtins::bit_width_scalar`](#fn-bit-width-scalar)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Core](STD-CORE-DOC.md) · [Table of contents](standard-library/README.md) · [Typing →](STD-TYPING-DOC.md)
