<!-- stdlib-reference-style: modern -->
> # `std::functools`

`std::functools` function composition and higher-order helpers.

[Standard library](standard-library/README.md) / [Collections and text](standard-library/README.md#collections-and-text) / **Functional tools**

> **Source:** `stdlib/std/functools.valor` · **Routines:** 103 public

## Routines

<details>
<summary>Browse all 103 routines</summary>

- [`add_fits`](#fn-add-fits)
- [`mul_fits`](#fn-mul-fits)
- [`min_count`](#fn-min-count)
- [`max_count`](#fn-max-count)
- [`sat_sub`](#fn-sat-sub)
- [`ceil_div`](#fn-ceil-div)
- [`mod_usize`](#fn-mod-usize)
- [`mod_u64`](#fn-mod-u64)
- [`invoke0`](#fn-invoke0)
- [`invoke1`](#fn-invoke1)
- [`invoke2`](#fn-invoke2)
- [`invoke3`](#fn-invoke3)
- [`forward_invoke2`](#fn-forward-invoke2)
- [`apply2`](#fn-apply2)
- [`apply3`](#fn-apply3)
- [`apply_indexed2`](#fn-apply-indexed2)
- [`capture_ref`](#fn-capture-ref)
- [`capture_copy`](#fn-capture-copy)
- [`capture_move`](#fn-capture-move)
- [`placeholder`](#fn-placeholder)
- [`bind_front1_apply1`](#fn-bind-front1-apply1)
- [`bind_front2_apply1`](#fn-bind-front2-apply1)
- [`bind_back1_apply1`](#fn-bind-back1-apply1)
- [`partial_outer_apply1`](#fn-partial-outer-apply1)
- [`bind_at_apply1`](#fn-bind-at-apply1)
- [`identity`](#fn-identity)
- [`compose2_apply`](#fn-compose2-apply)
- [`compose3_apply`](#fn-compose3-apply)
- [`pipe2_apply`](#fn-pipe2-apply)
- [`pipe3_apply`](#fn-pipe3-apply)
- [`constant_apply`](#fn-constant-apply)
- [`flip2_apply`](#fn-flip2-apply)
- [`on_compare`](#fn-on-compare)
- [`juxt2_apply`](#fn-juxt2-apply)
- [`tap_apply`](#fn-tap-apply)
- [`uncurry2_apply`](#fn-uncurry2-apply)
- [`ignore_second_apply`](#fn-ignore-second-apply)
- [`duplicate_arg_apply`](#fn-duplicate-arg-apply)
- [`with_arity`](#fn-with-arity)
- [`fold`](#fn-fold)
- [`reduce`](#fn-reduce)
- [`reduce_right`](#fn-reduce-right)
- [`fold_while`](#fn-fold-while)
- [`scan_into`](#fn-scan-into)
- [`accumulate_into`](#fn-accumulate-into)
- [`tree_reduce_range`](#fn-tree-reduce-range)
- [`tree_reduce`](#fn-tree-reduce)
- [`tree_reduce_block_range`](#fn-tree-reduce-block-range)
- [`tree_reduce_block`](#fn-tree-reduce-block)
- [`parallel_reduce_into`](#fn-parallel-reduce-into)
- [`not_pred`](#fn-not-pred)
- [`all_of2`](#fn-all-of2)
- [`any_of2`](#fn-any-of2)
- [`none_of2`](#fn-none-of2)
- [`all_of`](#fn-all-of)
- [`any_of`](#fn-any-of)
- [`none_of`](#fn-none-of)
- [`equal_to`](#fn-equal-to)
- [`less_by`](#fn-less-by)
- [`compare_by`](#fn-compare-by)
- [`fallback2`](#fn-fallback2)
- [`fallback3`](#fn-fallback3)
- [`recover`](#fn-recover)
- [`map_result`](#fn-map-result)
- [`map_error`](#fn-map-error)
- [`and_then`](#fn-and-then)
- [`or_else`](#fn-or-else)
- [`retry_bounded`](#fn-retry-bounded)
- [`register_case`](#fn-register-case)
- [`dispatch_find`](#fn-dispatch-find)
- [`dispatch_invoke`](#fn-dispatch-invoke)
- [`single_dispatch`](#fn-single-dispatch)
- [`visit`](#fn-visit)
- [`overload2_apply`](#fn-overload2-apply)
- [`overload3_apply`](#fn-overload3-apply)
- [`hash_seed_default`](#fn-hash-seed-default)
- [`default_key_policy`](#fn-default-key-policy)
- [`key_init`](#fn-key-init)
- [`key_mix`](#fn-key-mix)
- [`key_mix_i64`](#fn-key-mix-i64)
- [`key_mix_usize`](#fn-key-mix-usize)
- [`key_mix_type_tag`](#fn-key-mix-type-tag)
- [`key_finish`](#fn-key-finish)
- [`canonical_float_bits`](#fn-canonical-float-bits)
- [`key_mix_float_bits`](#fn-key-mix-float-bits)
- [`probe_slot`](#fn-probe-slot)
- [`slot_get_or_compute`](#fn-slot-get-or-compute)
- [`memoize_last`](#fn-memoize-last)
- [`memoize_once`](#fn-memoize-once)
- [`direct_cache_get_or_compute`](#fn-direct-cache-get-or-compute)
- [`fixed_cache_get_or_compute`](#fn-fixed-cache-get-or-compute)
- [`set_associative_get_or_compute`](#fn-set-associative-get-or-compute)
- [`fifo_cache_get_or_compute`](#fn-fifo-cache-get-or-compute)
- [`clock_cache_get_or_compute`](#fn-clock-cache-get-or-compute)
- [`lru_cache_get_or_compute`](#fn-lru-cache-get-or-compute)
- [`memoize_into`](#fn-memoize-into)
- [`clear_cache`](#fn-clear-cache)
- [`invalidate`](#fn-invalidate)
- [`contains_cached`](#fn-contains-cached)
- [`peek_cached`](#fn-peek-cached)
- [`cache_info`](#fn-cache-info)
- [`cache_capacity`](#fn-cache-capacity)
- [`resolve_handle`](#fn-resolve-handle)

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
> bool result = std::functools::add_fits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)
> - [`std::functools::max_count`](#fn-max-count)

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
> bool result = std::functools::mul_fits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::min_count`](#fn-min-count)
> - [`std::functools::max_count`](#fn-max-count)

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
> usize result = std::functools::min_count(left, right);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::max_count`](#fn-max-count)

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
> usize result = std::functools::max_count(left, right);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

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
> usize result = std::functools::sat_sub(left, right);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-ceil-div"></a>

> ## `ceil_div`

> Ceiling division for full-coverage block / partition counts.

```valor
public usize ceil_div(usize value, usize divisor)
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
> usize result = std::functools::ceil_div(value, divisor);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

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
> usize result = std::functools::mod_usize(value, divisor);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-mod-u64"></a>

> ## `mod_u64`

> u64 modulo emulated the same way (used for the key mixer).

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
> u64 result = std::functools::mod_u64(value, divisor);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-invoke0"></a>

> ## `invoke0`

> Provides the module's **invoke0** operation.

```valor
public void invoke0(() -> R callable, (R) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `receive`: () -> R callable, (R) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::functools::invoke0(receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-invoke1"></a>

> ## `invoke1`

> Provides the module's **invoke1** operation.

```valor
public void invoke1(A a, (A) -> R callable, (R) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: A (by value)
> - `receive`: (A) -> R callable, (R) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::functools::invoke1(a, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-invoke2"></a>

> ## `invoke2`

> Provides the module's **invoke2** operation.

```valor
public void invoke2(A a, B b, (A, B) -> R callable, (R) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: A (by value)
> - `b`: B (by value)
> - `receive`: (A, B) -> R callable, (R) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::functools::invoke2(a, b, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-invoke3"></a>

> ## `invoke3`

> Provides the module's **invoke3** operation.

```valor
public void invoke3(A a, B b, C c, (A, B, C) -> R callable, (R) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: A (by value)
> - `b`: B (by value)
> - `c`: C (by value)
> - `receive`: (A, B, C) -> R callable, (R) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::functools::invoke3(a, b, c, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-forward-invoke2"></a>

> ## `forward_invoke2`

> Provides the module's **forward invoke2** operation.

```valor
public void forward_invoke2(A a, B b, (A, B) -> R callable, (R) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: A (by value)
> - `b`: B (by value)
> - `receive`: (A, B) -> R callable, (R) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::functools::forward_invoke2(a, b, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-apply2"></a>

> ## `apply2`

> Provides the module's **apply2** operation.

```valor
public void apply2((usize) -> i64 read_arg, (i64, i64) -> R callable, (R) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `i64`: (usize) -> i64 read_arg, ( (borrowed fn-ptr (callback))
> - `receive`: i64) -> R callable, (R) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::functools::apply2(i64, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-apply3"></a>

> ## `apply3`

> Provides the module's **apply3** operation.

```valor
public void apply3((usize) -> i64 read_arg, (i64, i64, i64) -> R callable, (R) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `i64`: (usize) -> i64 read_arg, ( (borrowed fn-ptr (callback))
> - `i64`: i64 (by value)
> - `receive`: i64) -> R callable, (R) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::functools::apply3(i64, i64, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-apply-indexed2"></a>

> ## `apply_indexed2`

> Provides the module's **apply indexed2** operation.

```valor
public void apply_indexed2((usize) -> usize index_of, (usize) -> i64 read_arg, (i64, i64) -> R callable, (R) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `receive`: (usize) -> usize index_of, (usize) -> i64 read_arg, (i64, i64) -> R callable, (R) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::functools::apply_indexed2(receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-capture-ref"></a>

> ## `capture_ref`

> Provides the module's **capture ref** operation. Returns `u8`.

```valor
public u8 capture_ref(T value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: T (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::functools::capture_ref(value);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-capture-copy"></a>

> ## `capture_copy`

> Provides the module's **capture copy** operation. Returns `u8`.

```valor
public u8 capture_copy(T value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: T (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::functools::capture_copy(value);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-capture-move"></a>

> ## `capture_move`

> Provides the module's **capture move** operation. Returns `u8`.

```valor
public u8 capture_move(T value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: T (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::functools::capture_move(value);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-placeholder"></a>

> ## `placeholder`

> placeholder: the reserved position sentinel for explicit positional binding.

```valor
public usize placeholder()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::functools::placeholder();
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-bind-front1-apply1"></a>

> ## `bind_front1_apply1`

> Provides the module's **bind front1 apply1** operation.

```valor
public void bind_front1_apply1(A bound, B arg, (A, B) -> R callable, (R) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bound`: A (by value)
> - `arg`: B (by value)
> - `receive`: (A, B) -> R callable, (R) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::functools::bind_front1_apply1(bound, arg, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-bind-front2-apply1"></a>

> ## `bind_front2_apply1`

> Provides the module's **bind front2 apply1** operation.

```valor
public void bind_front2_apply1(A b0, B b1, C arg, (A, B, C) -> R callable, (R) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `b0`: A (by value)
> - `b1`: B (by value)
> - `arg`: C (by value)
> - `receive`: (A, B, C) -> R callable, (R) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::functools::bind_front2_apply1(b0, b1, arg, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-bind-back1-apply1"></a>

> ## `bind_back1_apply1`

> Provides the module's **bind back1 apply1** operation.

```valor
public void bind_back1_apply1(B bound, A arg, (A, B) -> R callable, (R) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bound`: B (by value)
> - `arg`: A (by value)
> - `receive`: (A, B) -> R callable, (R) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::functools::bind_back1_apply1(bound, arg, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-partial-outer-apply1"></a>

> ## `partial_outer_apply1`

> Provides the module's **partial outer apply1** operation.

```valor
public void partial_outer_apply1(A b0, C b2, B arg, (A, B, C) -> R callable, (R) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `b0`: A (by value)
> - `b2`: C (by value)
> - `arg`: B (by value)
> - `receive`: (A, B, C) -> R callable, (R) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::functools::partial_outer_apply1(b0, b2, arg, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-bind-at-apply1"></a>

> ## `bind_at_apply1`

> Provides the module's **bind at apply1** operation.

```valor
public void bind_at_apply1(bool front, A bound_first, B bound_second, A a, B b, (A, B) -> R callable, (R) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `front`: bool (by value)
> - `bound_first`: A (by value)
> - `bound_second`: B (by value)
> - `a`: A (by value)
> - `b`: B (by value)
> - `receive`: (A, B) -> R callable, (R) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::functools::bind_at_apply1(front, bound_first, bound_second, a, b, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-identity"></a>

> ## `identity`

> Provides the module's **identity** operation. Returns `T`.

```valor
public T identity(T value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: T (by value)

> ### RETURNS (T)

> ### EXAMPLE
>
> ```valor
> T result = std::functools::identity(value);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-compose2-apply"></a>

> ## `compose2_apply`

> Provides the module's **compose2 apply** operation.

```valor
public void compose2_apply(A x, (A) -> B g, (B) -> R f, (R) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `x`: A (by value)
> - `receive`: (A) -> B g, (B) -> R f, (R) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::functools::compose2_apply(x, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-compose3-apply"></a>

> ## `compose3_apply`

> Provides the module's **compose3 apply** operation.

```valor
public void compose3_apply(A x, (A) -> B h, (B) -> C g, (C) -> R f, (R) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `x`: A (by value)
> - `receive`: (A) -> B h, (B) -> C g, (C) -> R f, (R) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::functools::compose3_apply(x, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-pipe2-apply"></a>

> ## `pipe2_apply`

> Provides the module's **pipe2 apply** operation.

```valor
public void pipe2_apply(A x, (A) -> B f, (B) -> R g, (R) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `x`: A (by value)
> - `receive`: (A) -> B f, (B) -> R g, (R) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::functools::pipe2_apply(x, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-pipe3-apply"></a>

> ## `pipe3_apply`

> Provides the module's **pipe3 apply** operation.

```valor
public void pipe3_apply(A x, (A) -> B f, (B) -> C g, (C) -> R h, (R) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `x`: A (by value)
> - `receive`: (A) -> B f, (B) -> C g, (C) -> R h, (R) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::functools::pipe3_apply(x, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-constant-apply"></a>

> ## `constant_apply`

> Provides the module's **constant apply** operation.

```valor
public void constant_apply(R captured, A ignored, (R) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `captured`: R (by value)
> - `ignored`: A (by value)
> - `receive`: (R) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::functools::constant_apply(captured, ignored, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-flip2-apply"></a>

> ## `flip2_apply`

> Provides the module's **flip2 apply** operation.

```valor
public void flip2_apply(A a, B b, (B, A) -> R callable, (R) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: A (by value)
> - `b`: B (by value)
> - `receive`: (B, A) -> R callable, (R) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::functools::flip2_apply(a, b, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-on-compare"></a>

> ## `on_compare`

> Provides the module's **on compare** operation. Returns `i32`.

```valor
public i32 on_compare(A a, A b, (A) -> K project, (K, K) -> i32 compare)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: A (by value)
> - `b`: A (by value)
> - `K`: (A) -> K project, ( (borrowed fn-ptr (callback))
> - `compare`: K) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::on_compare(a, b, K, compare);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-juxt2-apply"></a>

> ## `juxt2_apply`

> Provides the module's **juxt2 apply** operation.

```valor
public void juxt2_apply(A x, (A) -> R f, (A) -> S g, (R, S) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `x`: A (by value)
> - `receive`: (A) -> R f, (A) -> S g, (R, S) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::functools::juxt2_apply(x, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-tap-apply"></a>

> ## `tap_apply`

> Provides the module's **tap apply** operation.

```valor
public void tap_apply(T x, (T) -> void observe, (T) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `x`: T (by value)
> - `receive`: (T) -> void observe, (T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::functools::tap_apply(x, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-uncurry2-apply"></a>

> ## `uncurry2_apply`

> Provides the module's **uncurry2 apply** operation.

```valor
public void uncurry2_apply(A a, B b, (A) -> M stage1, (M, B) -> R stage2, (R) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: A (by value)
> - `b`: B (by value)
> - `M`: (A) -> M stage1, ( (borrowed fn-ptr (callback))
> - `receive`: B) -> R stage2, (R) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::functools::uncurry2_apply(a, b, M, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-ignore-second-apply"></a>

> ## `ignore_second_apply`

> Provides the module's **ignore second apply** operation.

```valor
public void ignore_second_apply(A a, B ignored, (A) -> R callable, (R) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: A (by value)
> - `ignored`: B (by value)
> - `receive`: (A) -> R callable, (R) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::functools::ignore_second_apply(a, ignored, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-duplicate-arg-apply"></a>

> ## `duplicate_arg_apply`

> Provides the module's **duplicate arg apply** operation.

```valor
public void duplicate_arg_apply(A x, (A, A) -> R callable, (R) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `x`: A (by value)
> - `receive`: (A, A) -> R callable, (R) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::functools::duplicate_arg_apply(x, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-with-arity"></a>

> ## `with_arity`

> withArity: document/assert accepted arity for a generic wrapper (design 4.4 P2). withArity: document/assert accepted arity for a generic wrapper (design 4.4 P2).  Returns true when the observed argument count matches the expected one.

```valor
public bool with_arity(usize expected, usize observed)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `expected`: usize (by value)
> - `observed`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::functools::with_arity(expected, observed);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-fold"></a>

> ## `fold`

> fold: canonical strict left fold from an explicit initial accumulator.

```valor
public i32 fold(usize length, i64 initial, (usize) -> i64 read, (i64, i64) -> i64 combine, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `initial`: i64 (by value)
> - `i64`: (usize) -> i64 read, ( (borrowed fn-ptr (callback))
> - `receive`: i64) -> i64 combine, (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::fold(length, initial, i64, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-reduce"></a>

> ## `reduce`

> reduce: `fold` alias that seeds from the first element; an empty source is an explicit error rather than an implicit identity (design 4.5 / 8.3). reduce: `fold` alias that seeds from the first element; an empty source is an explicit error rather than an implicit identity (design 4.5 / 8.3).

```valor
public i32 reduce(usize length, (usize) -> i64 read, (i64, i64) -> i64 combine, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `i64`: (usize) -> i64 read, ( (borrowed fn-ptr (callback))
> - `receive`: i64) -> i64 combine, (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::reduce(length, i64, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-reduce-right"></a>

> ## `reduce_right`

> reduceRight: strict right fold, valid only for finite bidirectional input (design 4.5 P1). reduceRight: strict right fold, valid only for finite bidirectional input (design 4.5 P1).  Visits length-1 .. 0; the last element seeds the fold.

```valor
public i32 reduce_right(usize length, (usize) -> i64 read, (i64, i64) -> i64 combine, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `i64`: (usize) -> i64 read, ( (borrowed fn-ptr (callback))
> - `receive`: i64) -> i64 combine, (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::reduce_right(length, i64, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-fold-while"></a>

> ## `fold_while`

> foldWhile: fold until a typed continuation requests termination (design 4.5 P1). foldWhile: fold until a typed continuation requests termination (design 4.5 P1).  keep_going(acc, item) is consulted before each combine; the first false stops the fold and the accumulator reached so far is delivered.

```valor
public i32 fold_while(usize length, i64 initial, (usize) -> i64 read, (i64, i64) -> bool keep_going, (i64, i64) -> i64 combine, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `initial`: i64 (by value)
> - `i64`: (usize) -> i64 read, ( (borrowed fn-ptr (callback))
> - `receive`: i64) -> bool keep_going, (i64, i64) -> i64 combine, (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::fold_while(length, initial, i64, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-scan-into"></a>

> ## `scan_into`

> scan: produce the sequence of intermediate accumulators into caller-owned storage (design 4.5 P1; canonically housed in std::iter and re-exported). scan: produce the sequence of intermediate accumulators into caller-owned storage (design 4.5 P1; canonically housed in std::iter and re-exported). write_out(i, acc_after_i) receives each running accumulator in order.

```valor
public i32 scan_into(usize length, i64 initial, (usize) -> i64 read, (i64, i64) -> i64 combine, (usize, i64) -> void write_out)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `initial`: i64 (by value)
> - `i64`: (usize) -> i64 read, ( (borrowed fn-ptr (callback))
> - `write_out`: i64) -> i64 combine, (usize, i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::scan_into(length, initial, i64, write_out);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-accumulate-into"></a>

> ## `accumulate_into`

> accumulateInto: strict left fold whose running accumulator is written into a caller-owned workspace as well as returned (design 4.5 P1). accumulateInto: strict left fold whose running accumulator is written into a caller-owned workspace as well as returned (design 4.5 P1).  ERR_NO_SPACE if the workspace is smaller than the input.

```valor
public i32 accumulate_into(usize length, usize capacity, i64 initial, (usize) -> i64 read, (i64, i64) -> i64 combine, (usize, i64) -> void write_out, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `initial`: i64 (by value)
> - `i64`: (usize) -> i64 read, ( (borrowed fn-ptr (callback))
> - `receive`: i64) -> i64 combine, (usize, i64) -> void write_out, (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::accumulate_into(length, capacity, initial, i64, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-tree-reduce-range"></a>

> ## `tree_reduce_range`

> treeReduce: deterministic balanced reduction over [lo, hi) with a fixed midpoint split shape (design 4.5 / 8.3). treeReduce: deterministic balanced reduction over [lo, hi) with a fixed midpoint split shape (design 4.5 / 8.3).  For an associative `combine` this halves accumulation depth versus a left fold while remaining reproducible: the tree shape depends only on the index range, never on values or timing. `identity_value` is returned for an empty range.  Single-exit recursion; the depth is bounded by log2(length) so no @max_iter loop is required.

```valor
public i64 tree_reduce_range(usize lo, usize hi, i64 identity_value, (usize) -> i64 read, (i64, i64) -> i64 combine)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `lo`: usize (by value)
> - `hi`: usize (by value)
> - `identity_value`: i64 (by value)
> - `i64`: (usize) -> i64 read, ( (borrowed fn-ptr (callback))
> - `combine`: i64) -> i64 (borrowed fn-ptr (callback))

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::functools::tree_reduce_range(lo, hi, identity_value, i64, combine);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-tree-reduce"></a>

> ## `tree_reduce`

> treeReduce over a whole source; delivers the reduction through `receive`.

```valor
public i32 tree_reduce(usize length, i64 identity_value, (usize) -> i64 read, (i64, i64) -> i64 combine, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `identity_value`: i64 (by value)
> - `i64`: (usize) -> i64 read, ( (borrowed fn-ptr (callback))
> - `receive`: i64) -> i64 combine, (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::tree_reduce(length, identity_value, i64, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-tree-reduce-block-range"></a>

> ## `tree_reduce_block_range`

> treeReduce with an explicit block size and tail rule (design 8.3): elements within a block reduce left-to-right; block results reduce as a balanced tree. treeReduce with an explicit block size and tail rule (design 8.3): elements within a block reduce left-to-right; block results reduce as a balanced tree.  A short final block is folded by the same left rule, so block_size is the only knob affecting float accumulation order.  Deterministic for a fixed block_size regardless of hardware.

```valor
public i64 tree_reduce_block_range(usize lo, usize hi, usize block_size, i64 identity_value, (usize) -> i64 read, (i64, i64) -> i64 combine)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `lo`: usize (by value)
> - `hi`: usize (by value)
> - `block_size`: usize (by value)
> - `identity_value`: i64 (by value)
> - `i64`: (usize) -> i64 read, ( (borrowed fn-ptr (callback))
> - `combine`: i64) -> i64 (borrowed fn-ptr (callback))

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::functools::tree_reduce_block_range(lo, hi, block_size, identity_value, i64, combine);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-tree-reduce-block"></a>

> ## `tree_reduce_block`

> Provides the module's **tree reduce block** operation. Returns `i32`.

```valor
public i32 tree_reduce_block(usize length, usize block_size, i64 identity_value, (usize) -> i64 read, (i64, i64) -> i64 combine, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `block_size`: usize (by value)
> - `identity_value`: i64 (by value)
> - `i64`: (usize) -> i64 read, ( (borrowed fn-ptr (callback))
> - `receive`: i64) -> i64 combine, (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::tree_reduce_block(length, block_size, identity_value, i64, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-parallel-reduce-into"></a>

> ## `parallel_reduce_into`

> parallelReduce: deterministic partitioned reduction (design 4.5 P2 / 8.3). parallelReduce: deterministic partitioned reduction (design 4.5 P2 / 8.3). Partition boundaries and merge order are fixed independently of worker completion order: each of `partitions` contiguous ranges is folded left, its partial written to caller workspace, then partials merge left-to-right. The result is identical to a serial left fold of the partials regardless of which "worker" finishes first, so the logical output is deterministic.

```valor
public i32 parallel_reduce_into(usize length, usize partitions, usize workspace_capacity, i64 identity_value, (usize) -> i64 read, (i64, i64) -> i64 combine, (usize, i64) -> void write_partial, (usize) -> i64 read_partial, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `partitions`: usize (by value)
> - `workspace_capacity`: usize (by value)
> - `identity_value`: i64 (by value)
> - `i64`: (usize) -> i64 read, ( (borrowed fn-ptr (callback))
> - `receive`: i64) -> i64 combine, (usize, i64) -> void write_partial, (usize) -> i64 read_partial, (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::parallel_reduce_into(length, partitions, workspace_capacity, identity_value, i64, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-not-pred"></a>

> ## `not_pred`

> Provides the module's **not pred** operation. Returns `bool`.

```valor
public bool not_pred(A x, (A) -> bool predicate)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `x`: A (by value)
> - `predicate`: (A) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::functools::not_pred(x, predicate);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-all-of2"></a>

> ## `all_of2`

> Provides the module's **all of2** operation. Returns `bool`.

```valor
public bool all_of2(A x, (A) -> bool p, (A) -> bool q)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `x`: A (by value)
> - `q`: (A) -> bool p, (A) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::functools::all_of2(x, q);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-any-of2"></a>

> ## `any_of2`

> Provides the module's **any of2** operation. Returns `bool`.

```valor
public bool any_of2(A x, (A) -> bool p, (A) -> bool q)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `x`: A (by value)
> - `q`: (A) -> bool p, (A) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::functools::any_of2(x, q);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-none-of2"></a>

> ## `none_of2`

> Provides the module's **none of2** operation. Returns `bool`.

```valor
public bool none_of2(A x, (A) -> bool p, (A) -> bool q)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `x`: A (by value)
> - `q`: (A) -> bool p, (A) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::functools::none_of2(x, q);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-all-of"></a>

> ## `all_of`

> allOf over an indexed predicate family, short-circuit in index order.

```valor
public bool all_of(usize count, i64 x, (usize, i64) -> bool predicate_at)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `x`: i64 (by value)
> - `predicate_at`: (usize, i64) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::functools::all_of(count, x, predicate_at);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-any-of"></a>

> ## `any_of`

> anyOf over an indexed predicate family, short-circuit in index order.

```valor
public bool any_of(usize count, i64 x, (usize, i64) -> bool predicate_at)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `x`: i64 (by value)
> - `predicate_at`: (usize, i64) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::functools::any_of(count, x, predicate_at);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-none-of"></a>

> ## `none_of`

> noneOf over an indexed predicate family.

```valor
public bool none_of(usize count, i64 x, (usize, i64) -> bool predicate_at)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `x`: i64 (by value)
> - `predicate_at`: (usize, i64) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::functools::none_of(count, x, predicate_at);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-equal-to"></a>

> ## `equal_to`

> Provides the module's **equal to** operation. Returns `bool`.

```valor
public bool equal_to(T bound, T value, (T, T) -> bool equal)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bound`: T (by value)
> - `value`: T (by value)
> - `equal`: (T, T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::functools::equal_to(bound, value, equal);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-less-by"></a>

> ## `less_by`

> Provides the module's **less by** operation. Returns `bool`.

```valor
public bool less_by(A a, A b, (A) -> K project, (K, K) -> i32 compare)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: A (by value)
> - `b`: A (by value)
> - `K`: (A) -> K project, ( (borrowed fn-ptr (callback))
> - `compare`: K) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::functools::less_by(a, b, K, compare);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-compare-by"></a>

> ## `compare_by`

> Provides the module's **compare by** operation. Returns `i32`.

```valor
public i32 compare_by(A a, A b, (A) -> K project, (K, K) -> i32 compare)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: A (by value)
> - `b`: A (by value)
> - `K`: (A) -> K project, ( (borrowed fn-ptr (callback))
> - `compare`: K) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::compare_by(a, b, K, compare);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-fallback2"></a>

> ## `fallback2`

> Provides the module's **fallback2** operation. Returns `i32`.

```valor
public i32 fallback2(A x, (A, (R) -> void) -> i32 first, (A, (R) -> void) -> i32 second, (R) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `x`: A (by value)
> - `receive`: (A, (R) -> void) -> i32 first, (A, (R) -> void) -> i32 second, (R) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::fallback2(x, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-fallback3"></a>

> ## `fallback3`

> Provides the module's **fallback3** operation. Returns `i32`.

```valor
public i32 fallback3(A x, (A, (R) -> void) -> i32 first, (A, (R) -> void) -> i32 second, (A, (R) -> void) -> i32 third, (R) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `x`: A (by value)
> - `receive`: (A, (R) -> void) -> i32 first, (A, (R) -> void) -> i32 second, (A, (R) -> void) -> i32 third, (R) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::fallback3(x, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-recover"></a>

> ## `recover`

> recover: map a typed error code to a replacement value (design 4.7 P1). recover: map a typed error code to a replacement value (design 4.7 P1). On OK the original value flows through; otherwise `repair(error)` supplies a substitute and the combinator reports OK.

```valor
public i32 recover(i32 status, i64 value, (i32) -> i64 repair, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `status`: i32 (by value)
> - `value`: i64 (by value)
> - `receive`: (i32) -> i64 repair, (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::recover(status, value, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-map-result"></a>

> ## `map_result`

> mapResult: map only the success value of a Result (design 4.7 P1).

```valor
public i32 map_result(i32 status, i64 value, (i64) -> i64 transform, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `status`: i32 (by value)
> - `value`: i64 (by value)
> - `receive`: (i64) -> i64 transform, (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::map_result(status, value, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-map-error"></a>

> ## `map_error`

> mapError: map only the error code of a Result, leaving OK untouched.

```valor
public i32 map_error(i32 status, (i32) -> i32 transform)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `status`: i32 (by value)
> - `transform`: (i32) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::map_error(status, transform);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-and-then"></a>

> ## `and_then`

> Provides the module's **and then** operation. Returns `i32`.

```valor
public i32 and_then(i32 status, i64 value, (i64, (R) -> void) -> i32 next, (R) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `status`: i32 (by value)
> - `value`: i64 (by value)
> - `receive`: (i64, (R) -> void) -> i32 next, (R) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::and_then(status, value, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-or-else"></a>

> ## `or_else`

> orElse: deterministic fallback for a Result/Option (design 4.7 P1). orElse: deterministic fallback for a Result/Option (design 4.7 P1).  On error an alternative operation is tried; on OK the value flows straight through.

```valor
public i32 or_else(i32 status, i64 value, (i64) -> void receive, ((i64) -> void) -> i32 alternative)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `status`: i32 (by value)
> - `value`: i64 (by value)
> - `alternative`: (i64) -> void receive, ((i64) -> void) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::or_else(status, value, alternative);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-retry-bounded"></a>

> ## `retry_bounded`

> Provides the module's **retry bounded** operation. Returns `i32`.

```valor
public i32 retry_bounded(usize max_attempts, A x, (A, (R) -> void) -> i32 operation, (R) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `max_attempts`: usize (by value)
> - `x`: A (by value)
> - `receive`: (A, (R) -> void) -> i32 operation, (R) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::retry_bounded(max_attempts, x, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-register-case"></a>

> ## `register_case`

> registerCase: validate that a case may be written at `index` into a table of `capacity` cases during initialization (design 4.8 P1). registerCase: validate that a case may be written at `index` into a table of `capacity` cases during initialization (design 4.8 P1).  Returns OK when the slot is in range; caller performs the actual write into its own storage.

```valor
public i32 register_case(usize index, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::register_case(index, capacity);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-dispatch-find"></a>

> ## `dispatch_find`

> dispatch: find the first case whose tag matches, in canonical table order. dispatch: find the first case whose tag matches, in canonical table order. Returns the case index, or NO_INDEX when no case matches.

```valor
public usize dispatch_find(usize count, i64 tag, (usize) -> i64 read_tag)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `tag`: i64 (by value)
> - `read_tag`: (usize) -> i64 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::functools::dispatch_find(count, tag, read_tag);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-dispatch-invoke"></a>

> ## `dispatch_invoke`

> dispatch and invoke: resolve the case for `tag` and run its handler on `arg`. dispatch and invoke: resolve the case for `tag` and run its handler on `arg`. ERR_NOT_FOUND when no case matches; handler errors propagate unchanged.

```valor
public i32 dispatch_invoke(usize count, i64 tag, (usize) -> i64 read_tag, i64 arg, (usize, i64, (i64) -> void) -> i32 run_case, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `tag`: i64 (by value)
> - `usize`: (usize) -> i64 read_tag, i64 arg, ( (borrowed fn-ptr (callback))
> - `i64`: i64 (by value)
> - `receive`: (i64) -> void) -> i32 run_case, (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::dispatch_invoke(count, tag, usize, i64, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-single-dispatch"></a>

> ## `single_dispatch`

> singleDispatch: dispatch by one canonical key over a sorted key table using deterministic binary search (design 4.8 P2). singleDispatch: dispatch by one canonical key over a sorted key table using deterministic binary search (design 4.8 P2).  Returns the matching case index or NO_INDEX.  read_key must be non-decreasing in index.

```valor
public usize single_dispatch(usize count, i64 key, (usize) -> i64 read_key)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `key`: i64 (by value)
> - `read_key`: (usize) -> i64 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::functools::single_dispatch(count, key, read_key);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-visit"></a>

> ## `visit`

> visit: exhaustively dispatch over enum/variant alternatives (design 4.8 P1). visit: exhaustively dispatch over enum/variant alternatives (design 4.8 P1). ERR_INVALID when the tag is outside [0, variant_count); otherwise the tag's handler runs.  Exhaustiveness is the caller's obligation via variant_count.

```valor
public i32 visit(usize tag, usize variant_count, i64 arg, (usize, i64, (i64) -> void) -> i32 handle_variant, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: usize (by value)
> - `variant_count`: usize (by value)
> - `arg`: i64 (by value)
> - `receive`: (usize, i64, (i64) -> void) -> i32 handle_variant, (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::visit(tag, variant_count, arg, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-overload2-apply"></a>

> ## `overload2_apply`

> Provides the module's **overload2 apply** operation.

```valor
public void overload2_apply(usize which, i64 x, (i64) -> R first, (i64) -> R second, (R) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `which`: usize (by value)
> - `x`: i64 (by value)
> - `receive`: (i64) -> R first, (i64) -> R second, (R) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::functools::overload2_apply(which, x, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-overload3-apply"></a>

> ## `overload3_apply`

> Provides the module's **overload3 apply** operation.

```valor
public void overload3_apply(usize which, i64 x, (i64) -> R first, (i64) -> R second, (i64) -> R third, (R) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `which`: usize (by value)
> - `x`: i64 (by value)
> - `receive`: (i64) -> R first, (i64) -> R second, (i64) -> R third, (R) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::functools::overload3_apply(which, x, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-hash-seed-default"></a>

> ## `hash_seed_default`

> The fixed, non-randomized default hash seed (design 6.2).

```valor
public u64 hash_seed_default()
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
> u64 result = std::functools::hash_seed_default();
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-default-key-policy"></a>

> ## `default_key_policy`

> A default canonical key policy delivered field-by-field (fixed seed, bit-exact floats, type tags on). A default canonical key policy delivered field-by-field (fixed seed, bit-exact floats, type tags on).  Structs are caller-owned in this module, so policies are produced through a receive sink rather than returned by value; the caller populates its own CanonicalKeyPolicy descriptor.

```valor
public void default_key_policy((u64, u8, bool) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `receive`: (u64, u8, bool) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::functools::default_key_policy(receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-key-init"></a>

> ## `key_init`

> Begin a key accumulator from a policy seed, reduced into the mixer field.

```valor
public u64 key_init(u64 seed)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `seed`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::functools::key_init(seed);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-key-mix"></a>

> ## `key_mix`

> Fold one u64 value into the accumulator. Fold one u64 value into the accumulator.  Overflow-free by construction.

```valor
public u64 key_mix(u64 acc, u64 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `acc`: u64 (by value)
> - `value`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::functools::key_mix(acc, value);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-key-mix-i64"></a>

> ## `key_mix_i64`

> Fold one signed value into the accumulator via a canonical bit reinterpret.

```valor
public u64 key_mix_i64(u64 acc, i64 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `acc`: u64 (by value)
> - `value`: i64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::functools::key_mix_i64(acc, value);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-key-mix-usize"></a>

> ## `key_mix_usize`

> Fold one usize value into the accumulator.

```valor
public u64 key_mix_usize(u64 acc, usize value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `acc`: u64 (by value)
> - `value`: usize (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::functools::key_mix_usize(acc, value);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-key-mix-type-tag"></a>

> ## `key_mix_type_tag`

> Optionally fold a per-argument type tag so keys of different typed shapes stay distinct when the policy requests it (design 6.2: includeTypeTags). Optionally fold a per-argument type tag so keys of different typed shapes stay distinct when the policy requests it (design 6.2: includeTypeTags).

```valor
public u64 key_mix_type_tag(u64 acc, u64 type_tag, bool include_type_tags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `acc`: u64 (by value)
> - `type_tag`: u64 (by value)
> - `include_type_tags`: bool (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::functools::key_mix_type_tag(acc, type_tag, include_type_tags);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-key-finish"></a>

> ## `key_finish`

> Finalise an accumulator with one extra avalanche step.

```valor
public u64 key_finish(u64 acc)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `acc`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::functools::key_finish(acc);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-canonical-float-bits"></a>

> ## `canonical_float_bits`

> Canonicalise a double's bit pattern under a float-key policy (design 6.2). Canonicalise a double's bit pattern under a float-key policy (design 6.2). BIT_EXACT keeps the pattern verbatim.  CANONICAL_NAN collapses every NaN payload (and signaling NaN) to one quiet NaN and maps -0 to +0. NUMERIC_EQUAL additionally treats -0 and +0 as equal (same collapse here).

```valor
public u64 canonical_float_bits(u64 bits, u8 policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bits`: u64 (by value)
> - `policy`: u8 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::functools::canonical_float_bits(bits, policy);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-key-mix-float-bits"></a>

> ## `key_mix_float_bits`

> Fold a canonicalised float (given as raw bits) into a key accumulator.

```valor
public u64 key_mix_float_bits(u64 acc, u64 bits, u8 policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `acc`: u64 (by value)
> - `bits`: u64 (by value)
> - `policy`: u8 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::functools::key_mix_float_bits(acc, bits, policy);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-probe-slot"></a>

> ## `probe_slot`

> Slot selection: (hash + step) mod capacity, for linear-probe families.

```valor
public usize probe_slot(u64 hash, usize step, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `step`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::functools::probe_slot(hash, step, capacity);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-slot-get-or-compute"></a>

> ## `slot_get_or_compute`

> Provides the module's **slot get or compute** operation. Returns `i32`.

```valor
public i32 slot_get_or_compute(usize slot, u64 hash, K key, (usize) -> u8 load_state, (usize) -> u64 read_hash, (usize) -> K read_key, (usize) -> V read_value, (K, K) -> bool equal, (usize, u8, u8) -> bool cas_state, (usize, K, V, u64) -> void write_entry, (usize, u8) -> void publish_state, (K) -> V compute, u8 reentrant_policy, (u8) -> void record, (V) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `slot`: usize (by value)
> - `hash`: u64 (by value)
> - `key`: K (by value)
> - `receive`: (usize) -> u8 load_state, (usize) -> u64 read_hash, (usize) -> K read_key, (usize) -> V read_value, (K, K) -> bool equal, (usize, u8, u8) -> bool cas_state, (usize, K, V, u64) -> void write_entry, (usize, u8) -> void publish_state, (K) -> V compute, u8 reentrant_policy, (u8) -> void record, (V) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::slot_get_or_compute(slot, hash, key, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-memoize-last"></a>

> ## `memoize_last`

> Provides the module's **memoize last** operation. Returns `i32`.

```valor
public i32 memoize_last(u64 hash, K key, (usize) -> u8 load_state, (usize) -> u64 read_hash, (usize) -> K read_key, (usize) -> V read_value, (K, K) -> bool equal, (usize, u8, u8) -> bool cas_state, (usize, K, V, u64) -> void write_entry, (usize, u8) -> void publish_state, (K) -> V compute, (u8) -> void record, (V) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `key`: K (by value)
> - `receive`: (usize) -> u8 load_state, (usize) -> u64 read_hash, (usize) -> K read_key, (usize) -> V read_value, (K, K) -> bool equal, (usize, u8, u8) -> bool cas_state, (usize, K, V, u64) -> void write_entry, (usize, u8) -> void publish_state, (K) -> V compute, (u8) -> void record, (V) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::memoize_last(hash, key, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-memoize-once"></a>

> ## `memoize_once`

> Provides the module's **memoize once** operation. Returns `i32`.

```valor
public i32 memoize_once(u8 state, (usize) -> V read_value, (usize, u8, u8) -> bool cas_state, (usize, V) -> void write_value, (usize, u8) -> void publish_state, () -> V compute, (u8) -> void record, (V) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state`: u8 (by value)
> - `usize`: (usize) -> V read_value, ( (borrowed fn-ptr (callback))
> - `u8`: u8 (by value)
> - `receive`: u8) -> bool cas_state, (usize, V) -> void write_value, (usize, u8) -> void publish_state, () -> V compute, (u8) -> void record, (V) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::memoize_once(state, usize, u8, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-direct-cache-get-or-compute"></a>

> ## `direct_cache_get_or_compute`

> Provides the module's **direct cache get or compute** operation. Returns `i32`.

```valor
public i32 direct_cache_get_or_compute(usize capacity, u64 hash, K key, (usize) -> u8 load_state, (usize) -> u64 read_hash, (usize) -> K read_key, (usize) -> V read_value, (K, K) -> bool equal, (usize, u8, u8) -> bool cas_state, (usize, K, V, u64) -> void write_entry, (usize, u8) -> void publish_state, (K) -> V compute, u8 reentrant_policy, (u8) -> void record, (V) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `hash`: u64 (by value)
> - `key`: K (by value)
> - `receive`: (usize) -> u8 load_state, (usize) -> u64 read_hash, (usize) -> K read_key, (usize) -> V read_value, (K, K) -> bool equal, (usize, u8, u8) -> bool cas_state, (usize, K, V, u64) -> void write_entry, (usize, u8) -> void publish_state, (K) -> V compute, u8 reentrant_policy, (u8) -> void record, (V) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::direct_cache_get_or_compute(capacity, hash, key, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-fixed-cache-get-or-compute"></a>

> ## `fixed_cache_get_or_compute`

> Provides the module's **fixed cache get or compute** operation. Returns `i32`.

```valor
public i32 fixed_cache_get_or_compute(usize capacity, u64 hash, K key, u8 full_policy, (usize) -> u8 load_state, (usize) -> u64 read_hash, (usize) -> K read_key, (usize) -> V read_value, (K, K) -> bool equal, (usize, u8, u8) -> bool cas_state, (usize, K, V, u64) -> void write_entry, (usize, u8) -> void publish_state, (K) -> V compute, (u8) -> void record, (V) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `hash`: u64 (by value)
> - `key`: K (by value)
> - `full_policy`: u8 (by value)
> - `receive`: (usize) -> u8 load_state, (usize) -> u64 read_hash, (usize) -> K read_key, (usize) -> V read_value, (K, K) -> bool equal, (usize, u8, u8) -> bool cas_state, (usize, K, V, u64) -> void write_entry, (usize, u8) -> void publish_state, (K) -> V compute, (u8) -> void record, (V) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::fixed_cache_get_or_compute(capacity, hash, key, full_policy, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-set-associative-get-or-compute"></a>

> ## `set_associative_get_or_compute`

> Provides the module's **set associative get or compute** operation. Returns `i32`.

```valor
public i32 set_associative_get_or_compute(usize sets, usize ways, u64 hash, K key, u8 victim_policy, u64 tick, (usize) -> u8 load_state, (usize) -> u64 read_hash, (usize) -> K read_key, (usize) -> V read_value, (usize) -> u64 read_order, (K, K) -> bool equal, (usize, u8, u8) -> bool cas_state, (usize, K, V, u64) -> void write_entry, (usize, u64) -> void write_order, (usize, u8) -> void publish_state, (K) -> V compute, (u8) -> void record, (V) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `sets`: usize (by value)
> - `ways`: usize (by value)
> - `hash`: u64 (by value)
> - `key`: K (by value)
> - `victim_policy`: u8 (by value)
> - `tick`: u64 (by value)
> - `receive`: (usize) -> u8 load_state, (usize) -> u64 read_hash, (usize) -> K read_key, (usize) -> V read_value, (usize) -> u64 read_order, (K, K) -> bool equal, (usize, u8, u8) -> bool cas_state, (usize, K, V, u64) -> void write_entry, (usize, u64) -> void write_order, (usize, u8) -> void publish_state, (K) -> V compute, (u8) -> void record, (V) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::set_associative_get_or_compute(sets, ways, hash, key, victim_policy, tick, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-fifo-cache-get-or-compute"></a>

> ## `fifo_cache_get_or_compute`

> Provides the module's **fifo cache get or compute** operation. Returns `i32`.

```valor
public i32 fifo_cache_get_or_compute(usize capacity, usize cursor, u64 hash, K key, (usize) -> u8 load_state, (usize) -> u64 read_hash, (usize) -> K read_key, (usize) -> V read_value, (K, K) -> bool equal, (usize, u8, u8) -> bool cas_state, (usize, K, V, u64) -> void write_entry, (usize, u8) -> void publish_state, (usize) -> void advance_cursor, (K) -> V compute, (u8) -> void record, (V) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `cursor`: usize (by value)
> - `hash`: u64 (by value)
> - `key`: K (by value)
> - `receive`: (usize) -> u8 load_state, (usize) -> u64 read_hash, (usize) -> K read_key, (usize) -> V read_value, (K, K) -> bool equal, (usize, u8, u8) -> bool cas_state, (usize, K, V, u64) -> void write_entry, (usize, u8) -> void publish_state, (usize) -> void advance_cursor, (K) -> V compute, (u8) -> void record, (V) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::fifo_cache_get_or_compute(capacity, cursor, hash, key, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-clock-cache-get-or-compute"></a>

> ## `clock_cache_get_or_compute`

> Provides the module's **clock cache get or compute** operation. Returns `i32`.

```valor
public i32 clock_cache_get_or_compute(usize capacity, usize hand, u64 hash, K key, (usize) -> u8 load_state, (usize) -> u64 read_hash, (usize) -> K read_key, (usize) -> V read_value, (usize) -> u8 read_referenced, (K, K) -> bool equal, (usize, u8, u8) -> bool cas_state, (usize, K, V, u64) -> void write_entry, (usize, u8) -> void set_referenced, (usize, u8) -> void publish_state, (usize) -> void advance_hand, (K) -> V compute, (u8) -> void record, (V) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `hand`: usize (by value)
> - `hash`: u64 (by value)
> - `key`: K (by value)
> - `receive`: (usize) -> u8 load_state, (usize) -> u64 read_hash, (usize) -> K read_key, (usize) -> V read_value, (usize) -> u8 read_referenced, (K, K) -> bool equal, (usize, u8, u8) -> bool cas_state, (usize, K, V, u64) -> void write_entry, (usize, u8) -> void set_referenced, (usize, u8) -> void publish_state, (usize) -> void advance_hand, (K) -> V compute, (u8) -> void record, (V) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::clock_cache_get_or_compute(capacity, hand, hash, key, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-lru-cache-get-or-compute"></a>

> ## `lru_cache_get_or_compute`

> Provides the module's **lru cache get or compute** operation. Returns `i32`.

```valor
public i32 lru_cache_get_or_compute(usize capacity, usize head, usize tail, usize length, u64 hash, K key, (usize) -> u8 load_state, (usize) -> u64 read_hash, (usize) -> K read_key, (usize) -> V read_value, (usize) -> usize read_previous, (usize) -> usize read_next, (K, K) -> bool equal, (usize, u8, u8) -> bool cas_state, (usize, K, V, u64) -> void write_entry, (usize, usize) -> void write_previous, (usize, usize) -> void write_next, (usize, u8) -> void publish_state, (usize) -> void set_head, (usize) -> void set_tail, (usize) -> void set_length, (K) -> V compute, (u8) -> void record, (V) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `head`: usize (by value)
> - `tail`: usize (by value)
> - `length`: usize (by value)
> - `hash`: u64 (by value)
> - `key`: K (by value)
> - `receive`: (usize) -> u8 load_state, (usize) -> u64 read_hash, (usize) -> K read_key, (usize) -> V read_value, (usize) -> usize read_previous, (usize) -> usize read_next, (K, K) -> bool equal, (usize, u8, u8) -> bool cas_state, (usize, K, V, u64) -> void write_entry, (usize, usize) -> void write_previous, (usize, usize) -> void write_next, (usize, u8) -> void publish_state, (usize) -> void set_head, (usize) -> void set_tail, (usize) -> void set_length, (K) -> V compute, (u8) -> void record, (V) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::lru_cache_get_or_compute(capacity, head, tail, length, hash, key, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-memoize-into"></a>

> ## `memoize_into`

> Provides the module's **memoize into** operation. Returns `i32`.

```valor
public i32 memoize_into(u64 hash, K key, (u64, K, (V) -> void) -> i32 get_or_compute, (V) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `key`: K (by value)
> - `receive`: (u64, K, (V) -> void) -> i32 get_or_compute, (V) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::memoize_into(hash, key, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-clear-cache"></a>

> ## `clear_cache`

> clearCache: reset every slot to empty in canonical index order and report the count cleared. clearCache: reset every slot to empty in canonical index order and report the count cleared.  set_state(slot, LOOKUP_EMPTY) performs the caller-side write; bump_generation invalidates any outstanding CacheHandle.

```valor
public i32 clear_cache(usize capacity, (usize) -> u8 load_state, (usize, u8) -> void set_state, (u8) -> void record, () -> void bump_generation, (usize) -> void receive_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `usize`: (usize) -> u8 load_state, ( (borrowed fn-ptr (callback))
> - `receive_count`: u8) -> void set_state, (u8) -> void record, () -> void bump_generation, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::clear_cache(capacity, usize, receive_count);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-invalidate"></a>

> ## `invalidate`

> Provides the module's **invalidate** operation. Returns `i32`.

```valor
public i32 invalidate(usize capacity, u64 hash, K key, (usize) -> u8 load_state, (usize) -> u64 read_hash, (usize) -> K read_key, (K, K) -> bool equal, (usize, u8) -> void set_state, (u8) -> void record)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `hash`: u64 (by value)
> - `key`: K (by value)
> - `record`: (usize) -> u8 load_state, (usize) -> u64 read_hash, (usize) -> K read_key, (K, K) -> bool equal, (usize, u8) -> void set_state, (u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::invalidate(capacity, hash, key, record);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-contains-cached"></a>

> ## `contains_cached`

> Provides the module's **contains cached** operation. Returns `bool`.

```valor
public bool contains_cached(usize capacity, u64 hash, K key, (usize) -> u8 load_state, (usize) -> u64 read_hash, (usize) -> K read_key, (K, K) -> bool equal)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `hash`: u64 (by value)
> - `key`: K (by value)
> - `equal`: (usize) -> u8 load_state, (usize) -> u64 read_hash, (usize) -> K read_key, (K, K) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::functools::contains_cached(capacity, hash, key, equal);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-peek-cached"></a>

> ## `peek_cached`

> Provides the module's **peek cached** operation. Returns `i32`.

```valor
public i32 peek_cached(usize capacity, u64 hash, K key, (usize) -> u8 load_state, (usize) -> u64 read_hash, (usize) -> K read_key, (usize) -> V read_value, (K, K) -> bool equal, (V) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `hash`: u64 (by value)
> - `key`: K (by value)
> - `receive`: (usize) -> u8 load_state, (usize) -> u64 read_hash, (usize) -> K read_key, (usize) -> V read_value, (K, K) -> bool equal, (V) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::peek_cached(capacity, hash, key, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-cache-info"></a>

> ## `cache_info`

> cacheInfo: assemble the caller-visible statistics from the counter sink and deliver them in canonical CacheStats field order (design 4.9 P0). cacheInfo: assemble the caller-visible statistics from the counter sink and deliver them in canonical CacheStats field order (design 4.9 P0).  Counters are read by event code; the module keeps no hidden telemetry and constructs no struct itself -- the caller fills its own CacheStats from the sink.

```valor
public void cache_info((u8) -> u64 read_counter, (u64, u64, u64, u64, u64, u64, u64, u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `u64`: (u8) -> u64 read_counter, ( (borrowed fn-ptr (callback))
> - `u64`: u64 (by value)
> - `u64`: u64 (by value)
> - `u64`: u64 (by value)
> - `u64`: u64 (by value)
> - `u64`: u64 (by value)
> - `u64`: u64 (by value)
> - `receive`: u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::functools::cache_info(u64, u64, u64, u64, u64, u64, u64, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-cache-capacity"></a>

> ## `cache_capacity`

> cacheCapacity: report the fixed capacity (compile-time or runtime) of a cache (design 4.9 P0). cacheCapacity: report the fixed capacity (compile-time or runtime) of a cache (design 4.9 P0).  Identity by construction; present so capacity is a first-class, inspectable property of the memoized callable.

```valor
public usize cache_capacity(usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::functools::cache_capacity(capacity);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

<a id="fn-resolve-handle"></a>

> ## `resolve_handle`

> Provides the module's **resolve handle** operation. Returns `i32`.

```valor
public i32 resolve_handle(u32 handle_generation, u32 current_generation, (u32) -> V read_slot_value, u32 slot, (V) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `handle_generation`: u32 (by value)
> - `current_generation`: u32 (by value)
> - `receive`: (u32) -> V read_slot_value, u32 slot, (V) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::functools::resolve_handle(handle_generation, current_generation, receive);
> ```

> ### SEE ALSO
>
> - [`std::functools::add_fits`](#fn-add-fits)
> - [`std::functools::mul_fits`](#fn-mul-fits)
> - [`std::functools::min_count`](#fn-min-count)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Iterators](STD-ITER-DOC.md) · [Table of contents](standard-library/README.md) · [Streams →](STD-STREAM-DOC.md)
