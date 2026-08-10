<!-- stdlib-reference-style: modern -->
> # `std::typing`

`std::typing` type inspection and typing utilities.

[Standard library](standard-library/README.md) / [Foundations](standard-library/README.md#foundations) / **Typing**

> **Source:** `stdlib/std/typing.valor` · **Routines:** 134 public

## Routines

<details>
<summary>Browse all 134 routines</summary>

- [`add_fits`](#fn-add-fits)
- [`add_fits_u64`](#fn-add-fits-u64)
- [`mul_fits`](#fn-mul-fits)
- [`min_count`](#fn-min-count)
- [`max_count`](#fn-max-count)
- [`sat_sub`](#fn-sat-sub)
- [`mod_usize`](#fn-mod-usize)
- [`mod_u64`](#fn-mod-u64)
- [`round_up`](#fn-round-up)
- [`is_aligned`](#fn-is-aligned)
- [`flag_set`](#fn-flag-set)
- [`flag_union`](#fn-flag-union)
- [`id_mix`](#fn-id-mix)
- [`id_mix_alt`](#fn-id-mix-alt)
- [`id_seed`](#fn-id-seed)
- [`id_seed_alt`](#fn-id-seed-alt)
- [`id_fold_bytes`](#fn-id-fold-bytes)
- [`id_fold_bytes_alt`](#fn-id-fold-bytes-alt)
- [`id_finish`](#fn-id-finish)
- [`id_equal`](#fn-id-equal)
- [`id_order`](#fn-id-order)
- [`registry_intern`](#fn-registry-intern)
- [`registry_lookup`](#fn-registry-lookup)
- [`is_same`](#fn-is-same)
- [`is_sized`](#fn-is-sized)
- [`is_trivially_copyable`](#fn-is-trivially-copyable)
- [`is_zeroable`](#fn-is-zeroable)
- [`is_pod`](#fn-is-pod)
- [`is_send`](#fn-is-send)
- [`is_sync`](#fn-is-sync)
- [`is_subtype`](#fn-is-subtype)
- [`is_integer`](#fn-is-integer)
- [`is_float`](#fn-is-float)
- [`is_bool`](#fn-is-bool)
- [`is_enum`](#fn-is-enum)
- [`is_record`](#fn-is-record)
- [`is_union`](#fn-is-union)
- [`is_tuple`](#fn-is-tuple)
- [`is_pointer`](#fn-is-pointer)
- [`is_reference`](#fn-is-reference)
- [`is_array`](#fn-is-array)
- [`is_slice`](#fn-is-slice)
- [`is_function`](#fn-is-function)
- [`is_protocol`](#fn-is-protocol)
- [`is_distinct`](#fn-is-distinct)
- [`is_opaque`](#fn-is-opaque)
- [`is_tensor`](#fn-is-tensor)
- [`is_const`](#fn-is-const)
- [`is_mutable`](#fn-is-mutable)
- [`is_owned`](#fn-is-owned)
- [`is_borrowed`](#fn-is-borrowed)
- [`is_nullable`](#fn-is-nullable)
- [`is_copy`](#fn-is-copy)
- [`is_move_only`](#fn-is-move-only)
- [`has_drop`](#fn-has-drop)
- [`is_hashable`](#fn-is-hashable)
- [`is_ordered`](#fn-is-ordered)
- [`is_equatable`](#fn-is-equatable)
- [`is_mutable_view`](#fn-is-mutable-view)
- [`is_static_lifetime`](#fn-is-static-lifetime)
- [`is_freeze`](#fn-is-freeze)
- [`constraint_integral`](#fn-constraint-integral)
- [`constraint_floating`](#fn-constraint-floating)
- [`constraint_numeric`](#fn-constraint-numeric)
- [`constraint_ordered`](#fn-constraint-ordered)
- [`constraint_equatable`](#fn-constraint-equatable)
- [`constraint_hashable`](#fn-constraint-hashable)
- [`constraint_iterable`](#fn-constraint-iterable)
- [`constraint_contiguous`](#fn-constraint-contiguous)
- [`constraint_callable`](#fn-constraint-callable)
- [`constraint_serializable`](#fn-constraint-serializable)
- [`constraint_layout_compatible`](#fn-constraint-layout-compatible)
- [`constraint_bit_castable`](#fn-constraint-bit-castable)
- [`compute_record_layout`](#fn-compute-record-layout)
- [`stride_of`](#fn-stride-of)
- [`size_of`](#fn-size-of)
- [`alignment_of`](#fn-alignment-of)
- [`offset_of`](#fn-offset-of)
- [`padding_of`](#fn-padding-of)
- [`layout_of`](#fn-layout-of)
- [`emit_result`](#fn-emit-result)
- [`assert_size`](#fn-assert-size)
- [`assert_alignment`](#fn-assert-alignment)
- [`assert_offset`](#fn-assert-offset)
- [`assert_no_padding`](#fn-assert-no-padding)
- [`assert_layout`](#fn-assert-layout)
- [`assert_abi`](#fn-assert-abi)
- [`repr_is_stable`](#fn-repr-is-stable)
- [`repr_allows_field_reference`](#fn-repr-allows-field-reference)
- [`repr_wire_valid`](#fn-repr-wire-valid)
- [`repr_transparent_valid`](#fn-repr-transparent-valid)
- [`fields`](#fn-fields)
- [`name_equal`](#fn-name-equal)
- [`field_index_by_name`](#fn-field-index-by-name)
- [`has_field`](#fn-has-field)
- [`variants`](#fn-variants)
- [`discriminant_type`](#fn-discriminant-type)
- [`is_captureless`](#fn-is-captureless)
- [`is_noexcept`](#fn-is-noexcept)
- [`is_pure`](#fn-is-pure)
- [`is_send_callable`](#fn-is-send-callable)
- [`callable_matches`](#fn-callable-matches)
- [`callable_submittable`](#fn-callable-submittable)
- [`shape_of`](#fn-shape-of)
- [`constraint_rank`](#fn-constraint-rank)
- [`static_extent`](#fn-static-extent)
- [`constraint_static_extent`](#fn-constraint-static-extent)
- [`constraint_bounded_extent`](#fn-constraint-bounded-extent)
- [`constraint_shape`](#fn-constraint-shape)
- [`constraint_element_type`](#fn-constraint-element-type)
- [`constraint_contiguous_layout`](#fn-constraint-contiguous-layout)
- [`is_contiguous`](#fn-is-contiguous)
- [`constraint_aligned_elements`](#fn-constraint-aligned-elements)
- [`constraint_no_alias`](#fn-constraint-no-alias)
- [`can_convert`](#fn-can-convert)
- [`can_losslessly_convert`](#fn-can-losslessly-convert)
- [`can_bit_cast`](#fn-can-bit-cast)
- [`bit_cast`](#fn-bit-cast)
- [`checked_cast`](#fn-checked-cast)
- [`layout_view`](#fn-layout-view)
- [`distinct_shares_representation`](#fn-distinct-shares-representation)
- [`distinct_interoperable`](#fn-distinct-interoperable)
- [`alias_shares_identity`](#fn-alias-shares-identity)
- [`annotations`](#fn-annotations)
- [`has_annotation`](#fn-has-annotation)
- [`annotation_index`](#fn-annotation-index)
- [`annotation_value_legal`](#fn-annotation-value-legal)
- [`annotation_key_order`](#fn-annotation-key-order)
- [`is_emitted`](#fn-is-emitted)
- [`emit_type_info`](#fn-emit-type-info)
- [`metadata_budget_ok`](#fn-metadata-budget-ok)
- [`declaration_order`](#fn-declaration-order)
- [`diagnostic_rank`](#fn-diagnostic-rank)
- [`select_diagnostic`](#fn-select-diagnostic)

</details>

## API reference

<a id="fn-add-fits"></a>

> ## `add_fits`

> Provides the module's **add fits** operation. Returns `bool`.

```valor
public bool add_fits(usize left, usize right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: usize (by value)
> - `right`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::add_fits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)
> - [`std::typing::min_count`](#fn-min-count)

<a id="fn-add-fits-u64"></a>

> ## `add_fits_u64`

> Provides the module's **add fits u64** operation. Returns `bool`.

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
> bool result = std::typing::add_fits_u64(left, right);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::mul_fits`](#fn-mul-fits)
> - [`std::typing::min_count`](#fn-min-count)

<a id="fn-mul-fits"></a>

> ## `mul_fits`

> Provides the module's **mul fits** operation. Returns `bool`.

```valor
public bool mul_fits(usize left, usize right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: usize (by value)
> - `right`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::mul_fits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::min_count`](#fn-min-count)

<a id="fn-min-count"></a>

> ## `min_count`

> Provides the module's **min count** operation. Returns `usize`.

```valor
public usize min_count(usize left, usize right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: usize (by value)
> - `right`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::typing::min_count(left, right);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-max-count"></a>

> ## `max_count`

> Provides the module's **max count** operation. Returns `usize`.

```valor
public usize max_count(usize left, usize right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: usize (by value)
> - `right`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::typing::max_count(left, right);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-sat-sub"></a>

> ## `sat_sub`

> Saturating subtraction: never traps, floors at zero.

```valor
public usize sat_sub(usize left, usize right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: usize (by value)
> - `right`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::typing::sat_sub(left, right);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-mod-usize"></a>

> ## `mod_usize`

> usize modulo emulated with truncating division (no `%` operator exists).

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
> usize result = std::typing::mod_usize(value, divisor);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-mod-u64"></a>

> ## `mod_u64`

> u64 modulo emulated the same way (used by the identity fold).

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
> u64 result = std::typing::mod_u64(value, divisor);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-round-up"></a>

> ## `round_up`

> Round `value` up to the next multiple of `align` (align > 0), overflow-safe. Round `value` up to the next multiple of `align` (align > 0), overflow-safe. Branch-light: the single guard only protects the checked add from trapping.

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
> usize result = std::typing::round_up(value, align);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-aligned"></a>

> ## `is_aligned`

> Is `value` an exact multiple of `align`? Is `value` an exact multiple of `align`? (align may be 1).

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
> bool result = std::typing::is_aligned(value, align);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-flag-set"></a>

> ## `flag_set`

> Provides the module's **flag set** operation. Returns `bool`.

```valor
public bool flag_set(u64 flags, u64 flag)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u64 (by value)
> - `flag`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::flag_set(flags, flag);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-flag-union"></a>

> ## `flag_union`

> Combine two flag words without double-counting overlapping bits: the caller guarantees disjoint inputs, so a plain checked add is the canonical union. Combine two flag words without double-counting overlapping bits: the caller guarantees disjoint inputs, so a plain checked add is the canonical union.

```valor
public u64 flag_union(u64 left, u64 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: u64 (by value)
> - `right`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::typing::flag_union(left, right);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-id-mix"></a>

> ## `id_mix`

> Reduce an arbitrary u64 token into the Mersenne field, then fold it.

```valor
public u64 id_mix(u64 accumulator, u64 token)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `accumulator`: u64 (by value)
> - `token`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::typing::id_mix(accumulator, token);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-id-mix-alt"></a>

> ## `id_mix_alt`

> Second, independent lane: a different additive constant decorrelates it from the primary lane so a collision must occur in both to be undetected. Second, independent lane: a different additive constant decorrelates it from the primary lane so a collision must occur in both to be undetected.

```valor
public u64 id_mix_alt(u64 accumulator, u64 token)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `accumulator`: u64 (by value)
> - `token`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::typing::id_mix_alt(accumulator, token);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-id-seed"></a>

> ## `id_seed`

> Seed a fresh fold with the language ABI version ("valor.type.v1").

```valor
public u64 id_seed()
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
> u64 result = std::typing::id_seed();
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-id-seed-alt"></a>

> ## `id_seed_alt`

> Provides the module's **id seed alt** operation. Returns `u64`.

```valor
public u64 id_seed_alt()
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
> u64 result = std::typing::id_seed_alt();
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-id-fold-bytes"></a>

> ## `id_fold_bytes`

> Fold a canonical string handle (module/type name) one byte at a time in declaration order, so path- or hash-order-dependent naming never contributes. Fold a canonical string handle (module/type name) one byte at a time in declaration order, so path- or hash-order-dependent naming never contributes.

```valor
public u64 id_fold_bytes(u64 accumulator, (usize) -> u8 read_byte, usize length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `accumulator`: u64 (by value)
> - `length`: (usize) -> u8 read_byte, usize (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::typing::id_fold_bytes(accumulator, length);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-id-fold-bytes-alt"></a>

> ## `id_fold_bytes_alt`

> Provides the module's **id fold bytes alt** operation. Returns `u64`.

```valor
public u64 id_fold_bytes_alt(u64 accumulator, (usize) -> u8 read_byte, usize length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `accumulator`: u64 (by value)
> - `length`: (usize) -> u8 read_byte, usize (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::typing::id_fold_bytes_alt(accumulator, length);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-id-finish"></a>

> ## `id_finish`

> Seal the two lanes and deliver a TypeId through `receive` (no struct-value construction inside the module -- the caller owns the destination). Seal the two lanes and deliver a TypeId through `receive` (no struct-value construction inside the module -- the caller owns the destination).

```valor
public void id_finish(u64 primary, u64 alternate, (u64, u64, u32, u32) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `primary`: u64 (by value)
> - `alternate`: u64 (by value)
> - `receive`: (u64, u64, u32, u32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::typing::id_finish(primary, alternate, receive);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-id-equal"></a>

> ## `id_equal`

> Exact canonical id equality: both independent lanes must agree. Exact canonical id equality: both independent lanes must agree.  A single-lane match is treated as a *possible* collision, never as proof (design 18).

```valor
public bool id_equal(u64 a_value, u64 a_fingerprint, u64 b_value, u64 b_fingerprint)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a_value`: u64 (by value)
> - `a_fingerprint`: u64 (by value)
> - `b_value`: u64 (by value)
> - `b_fingerprint`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::id_equal(a_value, a_fingerprint, b_value, b_fingerprint);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-id-order"></a>

> ## `id_order`

> Deterministic total order over ids for canonical sorting / dedup (design 23: "deduplicate identical canonical descriptors deterministically"). Deterministic total order over ids for canonical sorting / dedup (design 23: "deduplicate identical canonical descriptors deterministically").  Returns an i32 ORDER_* code, never a float relational operator.

```valor
public i32 id_order(u64 a_value, u64 a_fingerprint, u64 b_value, u64 b_fingerprint)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a_value`: u64 (by value)
> - `a_fingerprint`: u64 (by value)
> - `b_value`: u64 (by value)
> - `b_fingerprint`: u64 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::typing::id_order(a_value, a_fingerprint, b_value, b_fingerprint);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-registry-intern"></a>

> ## `registry_intern`

> Provides the module's **registry intern** operation. Returns `i32`.

```valor
public i32 registry_intern(usize capacity, u64 id_value, u64 id_fingerprint, (usize) -> u8 load_state, (usize, u8, u8) -> bool cas_state, (usize) -> u64 load_id, (usize) -> u64 load_fingerprint, (usize, u64, u64) -> void publish_slot, (usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `id_value`: u64 (by value)
> - `id_fingerprint`: u64 (by value)
> - `usize`: (usize) -> u8 load_state, ( (borrowed fn-ptr (callback))
> - `u8`: u8 (by value)
> - `receive`: u8) -> bool cas_state, (usize) -> u64 load_id, (usize) -> u64 load_fingerprint, (usize, u64, u64) -> void publish_slot, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::typing::registry_intern(capacity, id_value, id_fingerprint, usize, u8, receive);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-registry-lookup"></a>

> ## `registry_lookup`

> Read-only lookup: resolve a previously interned id to its slot without mutating the registry (pure, trivially shareable across threads). Read-only lookup: resolve a previously interned id to its slot without mutating the registry (pure, trivially shareable across threads).

```valor
public i32 registry_lookup(usize capacity, u64 id_value, u64 id_fingerprint, (usize) -> u8 load_state, (usize) -> u64 load_id, (usize) -> u64 load_fingerprint, (usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `id_value`: u64 (by value)
> - `id_fingerprint`: u64 (by value)
> - `receive`: (usize) -> u8 load_state, (usize) -> u64 load_id, (usize) -> u64 load_fingerprint, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::typing::registry_lookup(capacity, id_value, id_fingerprint, receive);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-same"></a>

> ## `is_same`

> Exact canonical type equality (is_same<A,B>) over the two id lanes of each.

```valor
public bool is_same(u64 a_value, u64 a_fingerprint, u64 b_value, u64 b_fingerprint)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a_value`: u64 (by value)
> - `a_fingerprint`: u64 (by value)
> - `b_value`: u64 (by value)
> - `b_fingerprint`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_same(a_value, a_fingerprint, b_value, b_fingerprint);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-sized"></a>

> ## `is_sized`

> Storage size is known at the use site (is_sized<T>).

```valor
public bool is_sized(u64 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_sized(flags);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-trivially-copyable"></a>

> ## `is_trivially_copyable`

> Bitwise copy is semantically valid (is_trivially_copyable<T>).

```valor
public bool is_trivially_copyable(u64 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_trivially_copyable(flags);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-zeroable"></a>

> ## `is_zeroable`

> An all-zero bit pattern is a valid value (is_zeroable<T>).

```valor
public bool is_zeroable(u64 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_zeroable(flags);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-pod"></a>

> ## `is_pod`

> Strict plain-data contract defined by Valor (is_pod<T>): sized, trivially copyable, zeroable, and drop-free. Strict plain-data contract defined by Valor (is_pod<T>): sized, trivially copyable, zeroable, and drop-free.  Computed, never asserted by the user.

```valor
public bool is_pod(u64 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_pod(flags);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-send"></a>

> ## `is_send`

> Cross-thread movement safety (is_send<T>) -- a proven capability, never forged.

```valor
public bool is_send(u64 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_send(flags);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-sync"></a>

> ## `is_sync`

> Shared-reference safety (is_sync<T>).

```valor
public bool is_sync(u64 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_sync(flags);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-subtype"></a>

> ## `is_subtype`

> Declared nominal or protocol conformance (is_subtype<A,B>): the caller supplies the proven conformance relation as a predicate over the two ids, because subtyping is a compiler judgment, not a descriptor field. Declared nominal or protocol conformance (is_subtype<A,B>): the caller supplies the proven conformance relation as a predicate over the two ids, because subtyping is a compiler judgment, not a descriptor field.

```valor
public bool is_subtype(u64 sub_value, u64 sub_fingerprint, u64 super_value, u64 super_fingerprint, (u64, u64) -> bool conforms)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `sub_value`: u64 (by value)
> - `sub_fingerprint`: u64 (by value)
> - `super_value`: u64 (by value)
> - `super_fingerprint`: u64 (by value)
> - `conforms`: (u64, u64) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_subtype(sub_value, sub_fingerprint, super_value, super_fingerprint, conforms);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-integer"></a>

> ## `is_integer`

> Provides the module's **is integer** operation. Returns `bool`.

```valor
public bool is_integer(u8 kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_integer(kind);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-float"></a>

> ## `is_float`

> Provides the module's **is float** operation. Returns `bool`.

```valor
public bool is_float(u8 kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_float(kind);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-bool"></a>

> ## `is_bool`

> Provides the module's **is bool** operation. Returns `bool`.

```valor
public bool is_bool(u8 kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_bool(kind);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-enum"></a>

> ## `is_enum`

> Provides the module's **is enum** operation. Returns `bool`.

```valor
public bool is_enum(u8 kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_enum(kind);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-record"></a>

> ## `is_record`

> Provides the module's **is record** operation. Returns `bool`.

```valor
public bool is_record(u8 kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_record(kind);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-union"></a>

> ## `is_union`

> Provides the module's **is union** operation. Returns `bool`.

```valor
public bool is_union(u8 kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_union(kind);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-tuple"></a>

> ## `is_tuple`

> Provides the module's **is tuple** operation. Returns `bool`.

```valor
public bool is_tuple(u8 kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_tuple(kind);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-pointer"></a>

> ## `is_pointer`

> Provides the module's **is pointer** operation. Returns `bool`.

```valor
public bool is_pointer(u8 kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_pointer(kind);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-reference"></a>

> ## `is_reference`

> Provides the module's **is reference** operation. Returns `bool`.

```valor
public bool is_reference(u8 kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_reference(kind);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-array"></a>

> ## `is_array`

> Provides the module's **is array** operation. Returns `bool`.

```valor
public bool is_array(u8 kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_array(kind);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-slice"></a>

> ## `is_slice`

> Provides the module's **is slice** operation. Returns `bool`.

```valor
public bool is_slice(u8 kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_slice(kind);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-function"></a>

> ## `is_function`

> Provides the module's **is function** operation. Returns `bool`.

```valor
public bool is_function(u8 kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_function(kind);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-protocol"></a>

> ## `is_protocol`

> Provides the module's **is protocol** operation. Returns `bool`.

```valor
public bool is_protocol(u8 kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_protocol(kind);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-distinct"></a>

> ## `is_distinct`

> Provides the module's **is distinct** operation. Returns `bool`.

```valor
public bool is_distinct(u8 kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_distinct(kind);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-opaque"></a>

> ## `is_opaque`

> Provides the module's **is opaque** operation. Returns `bool`.

```valor
public bool is_opaque(u8 kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_opaque(kind);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-tensor"></a>

> ## `is_tensor`

> Provides the module's **is tensor** operation. Returns `bool`.

```valor
public bool is_tensor(u8 kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_tensor(kind);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-const"></a>

> ## `is_const`

> Qualifiers (design section 24).

```valor
public bool is_const(u8 mutability)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `mutability`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_const(mutability);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-mutable"></a>

> ## `is_mutable`

> Provides the module's **is mutable** operation. Returns `bool`.

```valor
public bool is_mutable(u8 mutability)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `mutability`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_mutable(mutability);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-owned"></a>

> ## `is_owned`

> Provides the module's **is owned** operation. Returns `bool`.

```valor
public bool is_owned(u8 ownership)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `ownership`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_owned(ownership);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-borrowed"></a>

> ## `is_borrowed`

> Provides the module's **is borrowed** operation. Returns `bool`.

```valor
public bool is_borrowed(u8 ownership)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `ownership`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_borrowed(ownership);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-nullable"></a>

> ## `is_nullable`

> Provides the module's **is nullable** operation. Returns `bool`.

```valor
public bool is_nullable(u64 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_nullable(flags);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-copy"></a>

> ## `is_copy`

> Capabilities (design section 24).

```valor
public bool is_copy(u64 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_copy(flags);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-move-only"></a>

> ## `is_move_only`

> Provides the module's **is move only** operation. Returns `bool`.

```valor
public bool is_move_only(u64 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_move_only(flags);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-has-drop"></a>

> ## `has_drop`

> Provides the module's **has drop** operation. Returns `bool`.

```valor
public bool has_drop(u64 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::has_drop(flags);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-hashable"></a>

> ## `is_hashable`

> Provides the module's **is hashable** operation. Returns `bool`.

```valor
public bool is_hashable(u64 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_hashable(flags);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-ordered"></a>

> ## `is_ordered`

> Provides the module's **is ordered** operation. Returns `bool`.

```valor
public bool is_ordered(u64 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_ordered(flags);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-equatable"></a>

> ## `is_equatable`

> Provides the module's **is equatable** operation. Returns `bool`.

```valor
public bool is_equatable(u64 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_equatable(flags);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-mutable-view"></a>

> ## `is_mutable_view`

> Ownership / lifetime / mutability metadata (design section 13).

```valor
public bool is_mutable_view(u8 kind, u8 mutability)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u8 (by value)
> - `mutability`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_mutable_view(kind, mutability);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-static-lifetime"></a>

> ## `is_static_lifetime`

> Provides the module's **is static lifetime** operation. Returns `bool`.

```valor
public bool is_static_lifetime(u8 ownership)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `ownership`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_static_lifetime(ownership);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-freeze"></a>

> ## `is_freeze`

> Provides the module's **is freeze** operation. Returns `bool`.

```valor
public bool is_freeze(u64 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_freeze(flags);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-constraint-integral"></a>

> ## `constraint_integral`

> Provides the module's **constraint integral** operation. Returns `bool`.

```valor
public bool constraint_integral(u8 kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::constraint_integral(kind);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-constraint-floating"></a>

> ## `constraint_floating`

> Provides the module's **constraint floating** operation. Returns `bool`.

```valor
public bool constraint_floating(u8 kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::constraint_floating(kind);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-constraint-numeric"></a>

> ## `constraint_numeric`

> Provides the module's **constraint numeric** operation. Returns `bool`.

```valor
public bool constraint_numeric(u8 kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::constraint_numeric(kind);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-constraint-ordered"></a>

> ## `constraint_ordered`

> Provides the module's **constraint ordered** operation. Returns `bool`.

```valor
public bool constraint_ordered(u64 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::constraint_ordered(flags);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-constraint-equatable"></a>

> ## `constraint_equatable`

> Provides the module's **constraint equatable** operation. Returns `bool`.

```valor
public bool constraint_equatable(u64 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::constraint_equatable(flags);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-constraint-hashable"></a>

> ## `constraint_hashable`

> Provides the module's **constraint hashable** operation. Returns `bool`.

```valor
public bool constraint_hashable(u64 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::constraint_hashable(flags);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-constraint-iterable"></a>

> ## `constraint_iterable`

> Provides the module's **constraint iterable** operation. Returns `bool`.

```valor
public bool constraint_iterable(u64 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::constraint_iterable(flags);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-constraint-contiguous"></a>

> ## `constraint_contiguous`

> Provides the module's **constraint contiguous** operation. Returns `bool`.

```valor
public bool constraint_contiguous(u64 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::constraint_contiguous(flags);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-constraint-callable"></a>

> ## `constraint_callable`

> Callable<F,Sig>: F exactly satisfies the signature. Callable<F,Sig>: F exactly satisfies the signature.  The caller proves the signature match (a compiler judgment); this gates on that plus the callable kind so a non-function id can never satisfy the constraint.

```valor
public bool constraint_callable(u8 kind, u64 callable_id, u64 signature_id, (u64, u64) -> bool signature_matches)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u8 (by value)
> - `callable_id`: u64 (by value)
> - `signature_id`: u64 (by value)
> - `signature_matches`: (u64, u64) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::constraint_callable(kind, callable_id, signature_id, signature_matches);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-constraint-serializable"></a>

> ## `constraint_serializable`

> Serializable<T,Format>: a format-specific serializer is defined -- resolved by a caller predicate keyed on the type id and a canonical format code. Serializable<T,Format>: a format-specific serializer is defined -- resolved by a caller predicate keyed on the type id and a canonical format code.

```valor
public bool constraint_serializable(u64 type_id_value, u32 format_code, (u64, u32) -> bool has_serializer)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `type_id_value`: u64 (by value)
> - `format_code`: u32 (by value)
> - `has_serializer`: (u64, u32) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::constraint_serializable(type_id_value, format_code, has_serializer);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-constraint-layout-compatible"></a>

> ## `constraint_layout_compatible`

> LayoutCompatible<A,B>: explicitly proven compatible layouts under a stated ABI (design section 6). LayoutCompatible<A,B>: explicitly proven compatible layouts under a stated ABI (design section 6).  Compatibility requires equal size, equal alignment, and a matching ABI tag; field-by-field proof is the layout engine's job.

```valor
public bool constraint_layout_compatible(usize a_size, usize a_align, u8 a_abi, usize b_size, usize b_align, u8 b_abi)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a_size`: usize (by value)
> - `a_align`: usize (by value)
> - `a_abi`: u8 (by value)
> - `b_size`: usize (by value)
> - `b_align`: usize (by value)
> - `b_abi`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::constraint_layout_compatible(a_size, a_align, a_abi, b_size, b_align, b_abi);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-constraint-bit-castable"></a>

> ## `constraint_bit_castable`

> BitCastable<A,B>: equal size plus legal bit-pattern conversion rules.

```valor
public bool constraint_bit_castable(usize a_size, u64 a_flags, usize b_size, u64 b_flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a_size`: usize (by value)
> - `a_flags`: u64 (by value)
> - `b_size`: usize (by value)
> - `b_flags`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::constraint_bit_castable(a_size, a_flags, b_size, b_flags);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-compute-record-layout"></a>

> ## `compute_record_layout`

> Emit each field offset in declaration order and deliver (size, align, padding) through `receive`. Emit each field offset in declaration order and deliver (size, align, padding) through `receive`.  `packed_align` caps every field's effective alignment for @repr(packed, N); pass 0 for the natural (non-packed) layout.

```valor
public i32 compute_record_layout(usize field_total, (usize) -> usize field_size, (usize) -> usize field_align, usize packed_align, (usize, usize) -> void emit_offset, (usize, usize, u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `field_total`: usize (by value)
> - `receive`: (usize) -> usize field_size, (usize) -> usize field_align, usize packed_align, (usize, usize) -> void emit_offset, (usize, usize, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::typing::compute_record_layout(field_total, receive);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-stride-of"></a>

> ## `stride_of`

> Array stride: element size rounded up to element alignment (design section 9, "stride after required tail padding"). Array stride: element size rounded up to element alignment (design section 9, "stride after required tail padding").

```valor
public usize stride_of(usize element_size, usize element_align)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `element_size`: usize (by value)
> - `element_align`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::typing::stride_of(element_size, element_align);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-size-of"></a>

> ## `size_of`

> size_of<T>: compile-time byte size; reject unsized T (design section 9).

```valor
public i32 size_of(u64 flags, usize size, (usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u64 (by value)
> - `size`: usize (by value)
> - `receive`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::typing::size_of(flags, size, receive);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-alignment-of"></a>

> ## `alignment_of`

> alignment_of<T>: compile-time required alignment (floored at 1).

```valor
public usize alignment_of(usize align)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `align`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::typing::alignment_of(align);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-offset-of"></a>

> ## `offset_of`

> offset_of<T>(field): verified byte offset of a statically-named field. offset_of<T>(field): verified byte offset of a statically-named field.  The caller resolves the field's declaration index; this returns its offset from the layout's field table through `read_offset`.

```valor
public i32 offset_of(usize field_total, usize field_index, (usize) -> usize read_offset, (usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `field_total`: usize (by value)
> - `field_index`: usize (by value)
> - `receive`: (usize) -> usize read_offset, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::typing::offset_of(field_total, field_index, receive);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-padding-of"></a>

> ## `padding_of`

> padding_of<T>: total padding bytes within the type (identity accessor over the resolved Layout field). padding_of<T>: total padding bytes within the type (identity accessor over the resolved Layout field).

```valor
public u64 padding_of(u64 padding_bytes)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `padding_bytes`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::typing::padding_of(padding_bytes);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-layout-of"></a>

> ## `layout_of`

> layout_of<T>: deliver the immutable target-resolved Layout fields. layout_of<T>: deliver the immutable target-resolved Layout fields.  The descriptor is compiler-built; this is the canonical read accessor.

```valor
public void layout_of(usize size, usize align, usize stride, u64 padding_bytes, (usize, usize, usize, u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `size`: usize (by value)
> - `align`: usize (by value)
> - `stride`: usize (by value)
> - `padding_bytes`: u64 (by value)
> - `receive`: (usize, usize, usize, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::typing::layout_of(size, align, stride, padding_bytes, receive);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-emit-result"></a>

> ## `emit_result`

> Deliver a ConstraintResult without constructing a struct value.

```valor
public void emit_result(bool satisfied, u32 diagnostic, u64 expected, u64 computed, (bool, u32, u64, u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `satisfied`: bool (by value)
> - `diagnostic`: u32 (by value)
> - `expected`: u64 (by value)
> - `computed`: u64 (by value)
> - `receive`: (bool, u32, u64, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::typing::emit_result(satisfied, diagnostic, expected, computed, receive);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-assert-size"></a>

> ## `assert_size`

> assert_size<T>(n): compilation fails unless the size is exactly n.

```valor
public void assert_size(usize computed_size, usize expected, (bool, u32, u64, u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `computed_size`: usize (by value)
> - `expected`: usize (by value)
> - `receive`: (bool, u32, u64, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::typing::assert_size(computed_size, expected, receive);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-assert-alignment"></a>

> ## `assert_alignment`

> assert_alignment<T>(n): fails unless the alignment is exactly n.

```valor
public void assert_alignment(usize computed_align, usize expected, (bool, u32, u64, u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `computed_align`: usize (by value)
> - `expected`: usize (by value)
> - `receive`: (bool, u32, u64, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::typing::assert_alignment(computed_align, expected, receive);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-assert-offset"></a>

> ## `assert_offset`

> assert_offset<T>(field, n): fails unless the named field's offset is exactly n.

```valor
public void assert_offset(usize computed_offset, usize expected, (bool, u32, u64, u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `computed_offset`: usize (by value)
> - `expected`: usize (by value)
> - `receive`: (bool, u32, u64, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::typing::assert_offset(computed_offset, expected, receive);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-assert-no-padding"></a>

> ## `assert_no_padding`

> assert_no_padding<T>(): fails if any padding range exists.

```valor
public void assert_no_padding(bool has_padding, u64 padding_bytes, (bool, u32, u64, u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `has_padding`: bool (by value)
> - `padding_bytes`: u64 (by value)
> - `receive`: (bool, u32, u64, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::typing::assert_no_padding(has_padding, padding_bytes, receive);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-assert-layout"></a>

> ## `assert_layout`

> assert_layout<A,B>(): fails unless the chosen compatibility mode is proven.

```valor
public void assert_layout(usize a_size, usize a_align, u8 a_abi, usize b_size, usize b_align, u8 b_abi, (bool, u32, u64, u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a_size`: usize (by value)
> - `a_align`: usize (by value)
> - `a_abi`: u8 (by value)
> - `b_size`: usize (by value)
> - `b_align`: usize (by value)
> - `b_abi`: u8 (by value)
> - `receive`: (bool, u32, u64, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::typing::assert_layout(a_size, a_align, a_abi, b_size, b_align, b_abi, receive);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-assert-abi"></a>

> ## `assert_abi`

> assert_abi<T>(AbiTag): fails unless the type meets the named ABI contract.

```valor
public void assert_abi(u8 layout_abi, u32 tag_code, (bool, u32, u64, u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `layout_abi`: u8 (by value)
> - `tag_code`: u32 (by value)
> - `receive`: (bool, u32, u64, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::typing::assert_abi(layout_abi, tag_code, receive);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-repr-is-stable"></a>

> ## `repr_is_stable`

> Provides the module's **repr is stable** operation. Returns `bool`.

```valor
public bool repr_is_stable(u8 repr)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `repr`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::repr_is_stable(repr);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-repr-allows-field-reference"></a>

> ## `repr_allows_field_reference`

> A reference to a field is legal only when the field meets its natural alignment; under packed(N) an underaligned field cannot be referenced (VALOR-LAYOUT-1104). A reference to a field is legal only when the field meets its natural alignment; under packed(N) an underaligned field cannot be referenced (VALOR-LAYOUT-1104).

```valor
public bool repr_allows_field_reference(u8 repr, usize field_offset, usize field_align)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `repr`: u8 (by value)
> - `field_offset`: usize (by value)
> - `field_align`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::repr_allows_field_reference(repr, field_offset, field_align);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-repr-wire-valid"></a>

> ## `repr_wire_valid`

> A wire repr must declare an explicit endianness and carry no implicit padding.

```valor
public bool repr_wire_valid(u8 repr, u8 endian, bool has_padding)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `repr`: u8 (by value)
> - `endian`: u8 (by value)
> - `has_padding`: bool (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::repr_wire_valid(repr, endian, has_padding);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-repr-transparent-valid"></a>

> ## `repr_transparent_valid`

> A transparent repr wraps exactly one non-zero-sized field.

```valor
public bool repr_transparent_valid(u8 repr, usize non_zero_field_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `repr`: u8 (by value)
> - `non_zero_field_count`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::repr_transparent_valid(repr, non_zero_field_count);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-fields"></a>

> ## `fields`

> fields<T>(): visit each field's (index, type_id, offset, size) in order.

```valor
public i32 fields(usize count, (usize) -> u64 read_type_id, (usize) -> usize read_offset, (usize) -> usize read_size, (usize, u64, usize, usize) -> void visit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `visit`: (usize) -> u64 read_type_id, (usize) -> usize read_offset, (usize) -> usize read_size, (usize, u64, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::typing::fields(count, visit);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-name-equal"></a>

> ## `name_equal`

> Canonical byte equality of two string-pool spans (declaration order preserved by the caller's readers). Canonical byte equality of two string-pool spans (declaration order preserved by the caller's readers).  Used to resolve a named field/variant/annotation.

```valor
public bool name_equal((usize) -> u8 read_a, usize len_a, (usize) -> u8 read_b, usize len_b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `len_b`: (usize) -> u8 read_a, usize len_a, (usize) -> u8 read_b, usize (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::name_equal(len_b);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-field-index-by-name"></a>

> ## `field_index_by_name`

> field<T>(name): return the matching field's declaration index, else error.

```valor
public i32 field_index_by_name(usize count, (usize) -> u8 read_target, usize target_len, (usize, usize) -> u8 read_field_name, (usize) -> usize read_field_name_len, (usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `usize`: (usize) -> u8 read_target, usize target_len, ( (borrowed fn-ptr (callback))
> - `receive`: usize) -> u8 read_field_name, (usize) -> usize read_field_name_len, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::typing::field_index_by_name(count, usize, receive);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-has-field"></a>

> ## `has_field`

> has_field<T>(name): compile-time predicate for constrained generic code.

```valor
public bool has_field(usize count, (usize) -> u8 read_target, usize target_len, (usize, usize) -> u8 read_field_name, (usize) -> usize read_field_name_len)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `usize`: (usize) -> u8 read_target, usize target_len, ( (borrowed fn-ptr (callback))
> - `read_field_name_len`: usize) -> u8 read_field_name, (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::has_field(count, usize, read_field_name_len);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-variants"></a>

> ## `variants`

> variants<T>(): visit each variant's (index, discriminant, payload_type_id).

```valor
public i32 variants(usize count, (usize) -> u64 read_discriminant, (usize) -> u64 read_payload_type_id, (usize, u64, u64) -> void visit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `visit`: (usize) -> u64 read_discriminant, (usize) -> u64 read_payload_type_id, (usize, u64, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::typing::variants(count, visit);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-discriminant-type"></a>

> ## `discriminant_type`

> discriminant_type<T>(): the enum's underlying discriminant TypeId.value.

```valor
public u64 discriminant_type((usize) -> u64 read_discriminant_id)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `read_discriminant_id`: (usize) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::typing::discriminant_type(read_discriminant_id);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-captureless"></a>

> ## `is_captureless`

> is_captureless<F>(): allows conversion to a plain function pointer.

```valor
public bool is_captureless(usize capture_size, u64 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capture_size`: usize (by value)
> - `flags`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_captureless(capture_size, flags);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-noexcept"></a>

> ## `is_noexcept`

> is_noexcept<F>(): the callable cannot propagate a trap through this boundary.

```valor
public bool is_noexcept(u64 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_noexcept(flags);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-pure"></a>

> ## `is_pure`

> is_pure<F>(): compiler-verified effect summary (never a user assertion alone).

```valor
public bool is_pure(u64 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_pure(flags);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-send-callable"></a>

> ## `is_send_callable`

> is_send_callable<F>(): the callable and its captures may move to another worker.

```valor
public bool is_send_callable(u64 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_send_callable(flags);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-callable-matches"></a>

> ## `callable_matches`

> Callable<F, Signature>: invocation compatibility -- the callable's canonical signature id equals the required signature id. Callable<F, Signature>: invocation compatibility -- the callable's canonical signature id equals the required signature id.

```valor
public bool callable_matches(u64 signature_id, u64 required_id)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `signature_id`: u64 (by value)
> - `required_id`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::callable_matches(signature_id, required_id);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-callable-submittable"></a>

> ## `callable_submittable`

> The full precondition a `submit(executor, work)` gates on (design section 7): the work matches the signature, is effect-clean at the boundary, and its captures are send-safe. The full precondition a `submit(executor, work)` gates on (design section 7): the work matches the signature, is effect-clean at the boundary, and its captures are send-safe.

```valor
public bool callable_submittable(u64 signature_id, u64 required_id, u64 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `signature_id`: u64 (by value)
> - `required_id`: u64 (by value)
> - `flags`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::callable_submittable(signature_id, required_id, flags);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-shape-of"></a>

> ## `shape_of`

> shape_of<T>(): visit each axis extent in axis order.

```valor
public i32 shape_of(usize rank, (usize) -> u64 read_extent, (usize, u64) -> void visit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rank`: usize (by value)
> - `usize`: (usize) -> u64 read_extent, ( (borrowed fn-ptr (callback))
> - `visit`: u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::typing::shape_of(rank, usize, visit);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-constraint-rank"></a>

> ## `constraint_rank`

> Rank<T,N>: the tensor has exactly rank N.

```valor
public bool constraint_rank(usize rank, usize expected_rank)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rank`: usize (by value)
> - `expected_rank`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::constraint_rank(rank, expected_rank);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-static-extent"></a>

> ## `static_extent`

> static_extent<T,Axis>: the compile-time extent of an axis (SYMBOLIC_DIM if only symbolically known). static_extent<T,Axis>: the compile-time extent of an axis (SYMBOLIC_DIM if only symbolically known).

```valor
public u64 static_extent(usize rank, usize axis, (usize) -> u64 read_extent)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rank`: usize (by value)
> - `axis`: usize (by value)
> - `read_extent`: (usize) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::typing::static_extent(rank, axis, read_extent);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-constraint-static-extent"></a>

> ## `constraint_static_extent`

> StaticExtent<T,Axis,N>: the axis extent is the compile-time constant N.

```valor
public bool constraint_static_extent(usize rank, usize axis, u64 expected, (usize) -> u64 read_extent)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rank`: usize (by value)
> - `axis`: usize (by value)
> - `expected`: u64 (by value)
> - `read_extent`: (usize) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::constraint_static_extent(rank, axis, expected, read_extent);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-constraint-bounded-extent"></a>

> ## `constraint_bounded_extent`

> BoundedExtent<T,Axis,Max>: the runtime extent cannot exceed Max.

```valor
public bool constraint_bounded_extent(usize rank, usize axis, u64 max_extent, (usize) -> u64 read_bound)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rank`: usize (by value)
> - `axis`: usize (by value)
> - `max_extent`: u64 (by value)
> - `read_bound`: (usize) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::constraint_bounded_extent(rank, axis, max_extent, read_bound);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-constraint-shape"></a>

> ## `constraint_shape`

> Shape<T, Dims...>: every axis extent equals its expected value (or the expectation is symbolic, which any concrete extent satisfies). Shape<T, Dims...>: every axis extent equals its expected value (or the expectation is symbolic, which any concrete extent satisfies).

```valor
public bool constraint_shape(usize rank, usize expected_rank, (usize) -> u64 read_extent, (usize) -> u64 read_expected)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rank`: usize (by value)
> - `expected_rank`: usize (by value)
> - `read_expected`: (usize) -> u64 read_extent, (usize) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::constraint_shape(rank, expected_rank, read_expected);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-constraint-element-type"></a>

> ## `constraint_element_type`

> ElementType<T,E>: the tensor element type is E.

```valor
public bool constraint_element_type(u64 element_type_id, u64 element_id)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `element_type_id`: u64 (by value)
> - `element_id`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::constraint_element_type(element_type_id, element_id);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-constraint-contiguous-layout"></a>

> ## `constraint_contiguous_layout`

> ContiguousLayout<T>: canonical contiguous stride relation holds.

```valor
public bool constraint_contiguous_layout(usize contiguous)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `contiguous`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::constraint_contiguous_layout(contiguous);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-contiguous"></a>

> ## `is_contiguous`

> is_contiguous(view): the runtime/descriptor contiguity query.

```valor
public bool is_contiguous(usize contiguous)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `contiguous`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_contiguous(contiguous);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-constraint-aligned-elements"></a>

> ## `constraint_aligned_elements`

> AlignedElements<T,N>: base and every legal element access meet N-byte alignment. AlignedElements<T,N>: base and every legal element access meet N-byte alignment.  Element stride and origin must both be multiples of N.

```valor
public bool constraint_aligned_elements(usize element_align, usize alignment, usize origin_address, usize element_stride)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `element_align`: usize (by value)
> - `alignment`: usize (by value)
> - `origin_address`: usize (by value)
> - `element_stride`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::constraint_aligned_elements(element_align, alignment, origin_address, element_stride);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-constraint-no-alias"></a>

> ## `constraint_no_alias`

> NoAlias<A,B>: compiler-proven non-overlap for the operation scope. NoAlias<A,B>: compiler-proven non-overlap for the operation scope.  Overlap is a memory-range judgment the caller supplies; this checks the disjointness of two [start, start+length) intervals as the canonical proof obligation.

```valor
public bool constraint_no_alias(usize a_start, usize a_length, usize b_start, usize b_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a_start`: usize (by value)
> - `a_length`: usize (by value)
> - `b_start`: usize (by value)
> - `b_length`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::constraint_no_alias(a_start, a_length, b_start, b_length);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-can-convert"></a>

> ## `can_convert`

> can_convert<A,B>(): a language-defined value conversion exists (numeric widen, distinct unwrap, etc.) -- resolved by a caller predicate over the two ids. can_convert<A,B>(): a language-defined value conversion exists (numeric widen, distinct unwrap, etc.) -- resolved by a caller predicate over the two ids.

```valor
public bool can_convert(u64 a_value, u64 a_fingerprint, u64 b_value, u64 b_fingerprint, (u64, u64) -> bool convertible)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a_value`: u64 (by value)
> - `a_fingerprint`: u64 (by value)
> - `b_value`: u64 (by value)
> - `b_fingerprint`: u64 (by value)
> - `convertible`: (u64, u64) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::can_convert(a_value, a_fingerprint, b_value, b_fingerprint, convertible);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-can-losslessly-convert"></a>

> ## `can_losslessly_convert`

> can_losslessly_convert<A,B>(): every A value is exactly representable as B. can_losslessly_convert<A,B>(): every A value is exactly representable as B. For integers this is a width/sign relation supplied by the caller; equal ids are trivially lossless.

```valor
public bool can_losslessly_convert(u64 a_value, u64 a_fingerprint, u64 b_value, u64 b_fingerprint, (u64, u64) -> bool lossless)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a_value`: u64 (by value)
> - `a_fingerprint`: u64 (by value)
> - `b_value`: u64 (by value)
> - `b_fingerprint`: u64 (by value)
> - `lossless`: (u64, u64) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::can_losslessly_convert(a_value, a_fingerprint, b_value, b_fingerprint, lossless);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-can-bit-cast"></a>

> ## `can_bit_cast`

> can_bit_cast<A,B>(): equal size and bit-pattern legality are proven.

```valor
public bool can_bit_cast(usize a_size, u64 a_flags, usize b_size, u64 b_flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a_size`: usize (by value)
> - `a_flags`: u64 (by value)
> - `b_size`: usize (by value)
> - `b_flags`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::can_bit_cast(a_size, a_flags, b_size, b_flags);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-bit-cast"></a>

> ## `bit_cast`

> bit_cast<B>(A): pure value reinterpretation with the size proof discharged. bit_cast<B>(A): pure value reinterpretation with the size proof discharged. Reads `size` source bytes and writes them to the destination in order; returns a diagnostic status so an unproven cast is reported, never silently performed.

```valor
public i32 bit_cast(usize size, bool proven, (usize) -> u8 read_source, (usize, u8) -> void write_dest)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `size`: usize (by value)
> - `proven`: bool (by value)
> - `usize`: (usize) -> u8 read_source, ( (borrowed fn-ptr (callback))
> - `write_dest`: u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::typing::bit_cast(size, proven, usize, write_dest);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-checked-cast"></a>

> ## `checked_cast`

> checked_cast<B>(A): runtime range check for a narrowing conversion. checked_cast<B>(A): runtime range check for a narrowing conversion.  `value` is the source; [low, high] is B's inclusive representable range; delivers the narrowed value through `receive` on success, else an explicit error status.

```valor
public i32 checked_cast(u64 value, u64 low, u64 high, (u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)
> - `low`: u64 (by value)
> - `high`: u64 (by value)
> - `receive`: (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::typing::checked_cast(value, low, high, receive);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-layout-view"></a>

> ## `layout_view`

> layout_view<B>(bytes): create a view only when alignment, length, lifetime, and validity rules hold (design section 17). layout_view<B>(bytes): create a view only when alignment, length, lifetime, and validity rules hold (design section 17).  Returns OK iff the byte span is long enough and correctly aligned for B; the caller forms the typed view.

```valor
public i32 layout_view(usize byte_length, usize origin_address, usize element_size, usize element_align)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)
> - `origin_address`: usize (by value)
> - `element_size`: usize (by value)
> - `element_align`: usize (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::typing::layout_view(byte_length, origin_address, element_size, element_align);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-distinct-shares-representation"></a>

> ## `distinct_shares_representation`

> A distinct type shares its underlying representation with repr(transparent), but never its identity: unwrapping/constructing must be explicit. A distinct type shares its underlying representation with repr(transparent), but never its identity: unwrapping/constructing must be explicit.

```valor
public bool distinct_shares_representation(u8 distinct_kind, u8 distinct_repr, usize distinct_size, usize distinct_align, usize underlying_size, usize underlying_align)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `distinct_kind`: u8 (by value)
> - `distinct_repr`: u8 (by value)
> - `distinct_size`: usize (by value)
> - `distinct_align`: usize (by value)
> - `underlying_size`: usize (by value)
> - `underlying_align`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::distinct_shares_representation(distinct_kind, distinct_repr, distinct_size, distinct_align, underlying_size, underlying_align);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-distinct-interoperable"></a>

> ## `distinct_interoperable`

> Two distinct types are never implicitly interoperable even with equal representation -- identity, not layout, governs assignment. Two distinct types are never implicitly interoperable even with equal representation -- identity, not layout, governs assignment.

```valor
public bool distinct_interoperable(u64 a_value, u64 a_fingerprint, u64 b_value, u64 b_fingerprint)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a_value`: u64 (by value)
> - `a_fingerprint`: u64 (by value)
> - `b_value`: u64 (by value)
> - `b_fingerprint`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::distinct_interoperable(a_value, a_fingerprint, b_value, b_fingerprint);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-alias-shares-identity"></a>

> ## `alias_shares_identity`

> An alias is fully transparent: it always shares identity with its target.

```valor
public bool alias_shares_identity(u64 alias_value, u64 alias_fingerprint, u64 target_value, u64 target_fingerprint)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `alias_value`: u64 (by value)
> - `alias_fingerprint`: u64 (by value)
> - `target_value`: u64 (by value)
> - `target_fingerprint`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::alias_shares_identity(alias_value, alias_fingerprint, target_value, target_fingerprint);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-annotations"></a>

> ## `annotations`

> annotations(T): visit each (index, key handle, value tag) in canonical order.

```valor
public i32 annotations(usize count, (usize) -> u64 read_key_offset, (usize) -> u64 read_key_length, (usize) -> u8 read_value_tag, (usize, u64, u64, u8) -> void visit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `visit`: (usize) -> u64 read_key_offset, (usize) -> u64 read_key_length, (usize) -> u8 read_value_tag, (usize, u64, u64, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::typing::annotations(count, visit);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-has-annotation"></a>

> ## `has_annotation`

> has_annotation(T, key): canonical byte-equality predicate over the tag keys.

```valor
public bool has_annotation(usize count, (usize) -> u8 read_target, usize target_len, (usize, usize) -> u8 read_key, (usize) -> usize read_key_len)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `usize`: (usize) -> u8 read_target, usize target_len, ( (borrowed fn-ptr (callback))
> - `read_key_len`: usize) -> u8 read_key, (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::has_annotation(count, usize, read_key_len);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-annotation-index"></a>

> ## `annotation_index`

> annotation(T, key): return the matching tag's index, else error.

```valor
public i32 annotation_index(usize count, (usize) -> u8 read_target, usize target_len, (usize, usize) -> u8 read_key, (usize) -> usize read_key_len, (usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `usize`: (usize) -> u8 read_target, usize target_len, ( (borrowed fn-ptr (callback))
> - `receive`: usize) -> u8 read_key, (usize) -> usize read_key_len, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::typing::annotation_index(count, usize, receive);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-annotation-value-legal"></a>

> ## `annotation_value_legal`

> A metadata value is legal only if its tag names a closed v1 domain type (design section 14: only ints, bools, strings, type ids, enums, fixed tuples). A metadata value is legal only if its tag names a closed v1 domain type (design section 14: only ints, bools, strings, type ids, enums, fixed tuples).

```valor
public bool annotation_value_legal(u8 value_tag)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value_tag`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::annotation_value_legal(value_tag);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-annotation-key-order"></a>

> ## `annotation_key_order`

> Canonical key ordering: annotation keys are compared by byte order so serialization is stable regardless of source declaration accidents. Canonical key ordering: annotation keys are compared by byte order so serialization is stable regardless of source declaration accidents.

```valor
public i32 annotation_key_order((usize) -> u8 read_a, usize len_a, (usize) -> u8 read_b, usize len_b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `len_b`: (usize) -> u8 read_a, usize len_a, (usize) -> u8 read_b, usize (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::typing::annotation_key_order(len_b);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-is-emitted"></a>

> ## `is_emitted`

> Was runtime metadata emitted for this type?

```valor
public bool is_emitted(u64 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::is_emitted(flags);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-emit-type-info"></a>

> ## `emit_type_info`

> emit_type_info(T): deliver the read-only metadata triple only when the program requested emission; otherwise report VALOR-TYPE-1004. emit_type_info(T): deliver the read-only metadata triple only when the program requested emission; otherwise report VALOR-TYPE-1004.  Bounded by construction -- it copies fixed descriptor fields, never an unbounded graph.

```valor
public i32 emit_type_info(u64 flags, u64 id_value, u64 id_fingerprint, (u64, u64, u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u64 (by value)
> - `id_value`: u64 (by value)
> - `id_fingerprint`: u64 (by value)
> - `receive`: (u64, u64, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::typing::emit_type_info(flags, id_value, id_fingerprint, receive);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-metadata-budget-ok"></a>

> ## `metadata_budget_ok`

> A runtime-emitted metadata blob is bounded in depth, count, and byte size (design section 22, schema-bomb defense). A runtime-emitted metadata blob is bounded in depth, count, and byte size (design section 22, schema-bomb defense).  This validates a proposed blob budget before emission.

```valor
public bool metadata_budget_ok(usize depth, usize count, usize byte_size, usize max_depth, usize max_count, usize max_bytes)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `depth`: usize (by value)
> - `count`: usize (by value)
> - `byte_size`: usize (by value)
> - `max_depth`: usize (by value)
> - `max_count`: usize (by value)
> - `max_bytes`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::typing::metadata_budget_ok(depth, count, byte_size, max_depth, max_count, max_bytes);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-declaration-order"></a>

> ## `declaration_order`

> Canonical declaration-order comparator: sort metadata by declaration index so hash-map traversal order can never leak into exposed order (design 19). Canonical declaration-order comparator: sort metadata by declaration index so hash-map traversal order can never leak into exposed order (design 19).

```valor
public i32 declaration_order(u32 index_a, u32 index_b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index_a`: u32 (by value)
> - `index_b`: u32 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::typing::declaration_order(index_a, index_b);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-diagnostic-rank"></a>

> ## `diagnostic_rank`

> Fixed diagnostic precedence (design section 21: "error selection must follow a fixed precedence table"). Fixed diagnostic precedence (design section 21: "error selection must follow a fixed precedence table").  A lower rank is reported first; constraint errors precede layout errors, which precede ABI/bit-cast errors.

```valor
public u32 diagnostic_rank(u32 code)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `code`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::typing::diagnostic_rank(code);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

<a id="fn-select-diagnostic"></a>

> ## `select_diagnostic`

> Select the higher-precedence (lower-rank) of two diagnostics; 0 means "none".

```valor
public u32 select_diagnostic(u32 left, u32 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: u32 (by value)
> - `right`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::typing::select_diagnostic(left, right);
> ```

> ### SEE ALSO
>
> - [`std::typing::add_fits`](#fn-add-fits)
> - [`std::typing::add_fits_u64`](#fn-add-fits-u64)
> - [`std::typing::mul_fits`](#fn-mul-fits)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Built-ins](STD-BUILTINS-DOC.md) · [Table of contents](standard-library/README.md) · [Layout →](STD-LAYOUT-DOC.md)
