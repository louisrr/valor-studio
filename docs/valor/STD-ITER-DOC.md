<!-- stdlib-reference-style: modern -->
> # `std::iter`

`std::iter` iterator construction and composition.

[Standard library](standard-library/README.md) / [Collections and text](standard-library/README.md#collections-and-text) / **Iterators**

> **Source:** `stdlib/std/iter.valor` · **Routines:** 102 public

## Routines

<details>
<summary>Browse all 102 routines</summary>

- [`add_fits`](#fn-add-fits)
- [`mul_fits`](#fn-mul-fits)
- [`min_count`](#fn-min-count)
- [`max_count`](#fn-max-count)
- [`sat_sub`](#fn-sat-sub)
- [`ceil_div`](#fn-ceil-div)
- [`hint_exact`](#fn-hint-exact)
- [`hint_take`](#fn-hint-take)
- [`hint_skip`](#fn-hint-skip)
- [`hint_step_by`](#fn-hint-step-by)
- [`hint_chunks`](#fn-hint-chunks)
- [`hint_windows`](#fn-hint-windows)
- [`hint_filter`](#fn-hint-filter)
- [`empty`](#fn-empty)
- [`once`](#fn-once)
- [`repeat`](#fn-repeat)
- [`repeat_with`](#fn-repeat-with)
- [`count_from`](#fn-count-from)
- [`range`](#fn-range)
- [`range_len`](#fn-range-len)
- [`from_slice`](#fn-from-slice)
- [`from_slice_simd`](#fn-from-slice-simd)
- [`from_span`](#fn-from-span)
- [`from_tensor_view`](#fn-from-tensor-view)
- [`from_strided`](#fn-from-strided)
- [`successors`](#fn-successors)
- [`unfold`](#fn-unfold)
- [`map`](#fn-map)
- [`filter`](#fn-filter)
- [`filter_map`](#fn-filter-map)
- [`inspect`](#fn-inspect)
- [`enumerate`](#fn-enumerate)
- [`take`](#fn-take)
- [`take_while`](#fn-take-while)
- [`skip`](#fn-skip)
- [`skip_while`](#fn-skip-while)
- [`step_by`](#fn-step-by)
- [`stride`](#fn-stride)
- [`chain`](#fn-chain)
- [`zip`](#fn-zip)
- [`zip_exact`](#fn-zip-exact)
- [`flatten`](#fn-flatten)
- [`flat_map`](#fn-flat-map)
- [`fuse`](#fn-fuse)
- [`peek_first`](#fn-peek-first)
- [`batch`](#fn-batch)
- [`chunks`](#fn-chunks)
- [`chunks_exact`](#fn-chunks-exact)
- [`windows`](#fn-windows)
- [`pairwise`](#fn-pairwise)
- [`interleave`](#fn-interleave)
- [`interleave_shortest`](#fn-interleave-shortest)
- [`round_robin`](#fn-round-robin)
- [`scan`](#fn-scan)
- [`map_accum`](#fn-map-accum)
- [`group_adjacent_by`](#fn-group-adjacent-by)
- [`dedup_adjacent`](#fn-dedup-adjacent)
- [`intersperse`](#fn-intersperse)
- [`pad_to`](#fn-pad-to)
- [`truncate_or_pad`](#fn-truncate-or-pad)
- [`mask`](#fn-mask)
- [`compress`](#fn-compress)
- [`product2`](#fn-product2)
- [`product_n`](#fn-product-n)
- [`permutation_count`](#fn-permutation-count)
- [`combination_count`](#fn-combination-count)
- [`permutations`](#fn-permutations)
- [`combinations`](#fn-combinations)
- [`combinations_with_replacement`](#fn-combinations-with-replacement)
- [`powerset`](#fn-powerset)
- [`for_each`](#fn-for-each)
- [`fold_i64`](#fn-fold-i64)
- [`reduce_i64`](#fn-reduce-i64)
- [`try_fold_i64`](#fn-try-fold-i64)
- [`collect_into`](#fn-collect-into)
- [`collect_array`](#fn-collect-array)
- [`count_items`](#fn-count-items)
- [`count_all`](#fn-count-all)
- [`sum_i64`](#fn-sum-i64)
- [`product_values_i64`](#fn-product-values-i64)
- [`min_by`](#fn-min-by)
- [`max_by`](#fn-max-by)
- [`iter_all`](#fn-iter-all)
- [`iter_any`](#fn-iter-any)
- [`iter_none`](#fn-iter-none)
- [`find`](#fn-find)
- [`find_map`](#fn-find-map)
- [`position`](#fn-position)
- [`nth`](#fn-nth)
- [`last`](#fn-last)
- [`compare_lexicographic`](#fn-compare-lexicographic)
- [`equal`](#fn-equal)
- [`bounded`](#fn-bounded)
- [`bounded_drive`](#fn-bounded-drive)
- [`exactly`](#fn-exactly)
- [`at_most`](#fn-at-most)
- [`with_fuel`](#fn-with-fuel)
- [`checked_index`](#fn-checked-index)
- [`assume_finite`](#fn-assume-finite)
- [`canonicalize_order`](#fn-canonicalize-order)
- [`replay`](#fn-replay)
- [`tee2`](#fn-tee2)

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
> bool result = std::iter::add_fits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)
> - [`std::iter::max_count`](#fn-max-count)

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
> bool result = std::iter::mul_fits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::min_count`](#fn-min-count)
> - [`std::iter::max_count`](#fn-max-count)

<a id="fn-min-count"></a>

> ## `min_count`

> The smaller of two counts, saturating (used for zip / take / bounded).

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
> usize result = std::iter::min_count(left, right);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::max_count`](#fn-max-count)

<a id="fn-max-count"></a>

> ## `max_count`

> The larger of two counts (used for padding targets).

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
> usize result = std::iter::max_count(left, right);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-sat-sub"></a>

> ## `sat_sub`

> Saturating subtraction: never traps, floors at zero (used for skip / remain).

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
> usize result = std::iter::sat_sub(left, right);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-ceil-div"></a>

> ## `ceil_div`

> Ceiling division for full-coverage chunk / window counts.

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
> usize result = std::iter::ceil_div(value, divisor);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-hint-exact"></a>

> ## `hint_exact`

> Provides the module's **hint exact** operation.

```valor
public void hint_exact(usize length, (usize, usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `receive`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::iter::hint_exact(length, receive);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-hint-take"></a>

> ## `hint_take`

> Provides the module's **hint take** operation.

```valor
public void hint_take(usize length, usize n, (usize, usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `n`: usize (by value)
> - `receive`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::iter::hint_take(length, n, receive);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-hint-skip"></a>

> ## `hint_skip`

> Provides the module's **hint skip** operation.

```valor
public void hint_skip(usize length, usize n, (usize, usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `n`: usize (by value)
> - `receive`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::iter::hint_skip(length, n, receive);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-hint-step-by"></a>

> ## `hint_step_by`

> Provides the module's **hint step by** operation.

```valor
public void hint_step_by(usize length, usize step, (usize, usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `step`: usize (by value)
> - `receive`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::iter::hint_step_by(length, step, receive);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-hint-chunks"></a>

> ## `hint_chunks`

> Provides the module's **hint chunks** operation.

```valor
public void hint_chunks(usize length, usize size, (usize, usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `size`: usize (by value)
> - `receive`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::iter::hint_chunks(length, size, receive);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-hint-windows"></a>

> ## `hint_windows`

> Provides the module's **hint windows** operation.

```valor
public void hint_windows(usize length, usize width, (usize, usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `width`: usize (by value)
> - `receive`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::iter::hint_windows(length, width, receive);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-hint-filter"></a>

> ## `hint_filter`

> filter can drop any subset, so only the upper bound is known exactly.

```valor
public void hint_filter(usize length, (usize, usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `receive`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::iter::hint_filter(length, receive);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-empty"></a>

> ## `empty`

> empty<T>(): produces no values. empty<T>(): produces no values.  Exact-size zero, trivially rewindable.

```valor
public i32 empty((i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `receive`: (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::empty(receive);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-once"></a>

> ## `once`

> once<T>(value): exactly one value.

```valor
public i32 once(i64 value, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: i64 (by value)
> - `receive`: (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::once(value, receive);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-repeat"></a>

> ## `repeat`

> repeat<T>(value): the same value, `times` times (bounded repetition).

```valor
public i32 repeat(i64 value, usize times, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: i64 (by value)
> - `times`: usize (by value)
> - `receive`: (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::repeat(value, times, receive);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-repeat-with"></a>

> ## `repeat_with`

> repeatWith<T>(producer): callback-produced values, `times` times. repeatWith<T>(producer): callback-produced values, `times` times.  The producer is indexed so it stays a pure function of its call position.

```valor
public i32 repeat_with(usize times, (usize) -> i64 produce, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `times`: usize (by value)
> - `receive`: (usize) -> i64 produce, (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::repeat_with(times, receive);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-count-from"></a>

> ## `count_from`

> count<T>(start, step): checked arithmetic sequence, capped at `limit` elements so the otherwise-infinite source is bounded. count<T>(start, step): checked arithmetic sequence, capped at `limit` elements so the otherwise-infinite source is bounded.

```valor
public i32 count_from(i64 start, i64 step, usize limit, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: i64 (by value)
> - `step`: i64 (by value)
> - `limit`: usize (by value)
> - `receive`: (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::count_from(start, step, limit, receive);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-range"></a>

> ## `range`

> range<T>(start, end, step): finite arithmetic progression over usize indices [start, end) advancing by step. range<T>(start, end, step): finite arithmetic progression over usize indices [start, end) advancing by step.  step == 0 is a construction error.

```valor
public i32 range(usize start, usize end, usize step, (usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `end`: usize (by value)
> - `step`: usize (by value)
> - `receive`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::range(start, end, step, receive);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-range-len"></a>

> ## `range_len`

> Element count of range<T>(start, end, step) without iterating.

```valor
public usize range_len(usize start, usize end, usize step)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `end`: usize (by value)
> - `step`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::iter::range_len(start, end, step);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-from-slice"></a>

> ## `from_slice`

> fromSlice<T>(source): zero-copy forward traversal. fromSlice<T>(source): zero-copy forward traversal.  emit receives each source index in order; the caller reads slice[index] without any copy.

```valor
public i32 from_slice(usize length, (usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `emit`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::from_slice(length, emit);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-from-slice-simd"></a>

> ## `from_slice_simd`

> fromSlice with an 8-lane batch hook plus a scalar remainder tail, so the caller can issue vector loads on the aligned body. fromSlice with an 8-lane batch hook plus a scalar remainder tail, so the caller can issue vector loads on the aligned body.  Deterministic order: every batched lane precedes the scalar remainder.

```valor
public i32 from_slice_simd(usize length, (usize, usize) -> void visit_batch8, (usize) -> void visit_scalar)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `visit_scalar`: (usize, usize) -> void visit_batch8, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::from_slice_simd(length, visit_scalar);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-from-span"></a>

> ## `from_span`

> fromSpan<T>(source): pointer + extent traversal. fromSpan<T>(source): pointer + extent traversal.  Identical index order to fromSlice; kept distinct so span-only callers document their intent.

```valor
public i32 from_span(usize length, (usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `emit`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::from_span(length, emit);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-from-tensor-view"></a>

> ## `from_tensor_view`

> fromTensorView<T>(source): logical-order element traversal of a dense view of `count` logical elements. fromTensorView<T>(source): logical-order element traversal of a dense view of `count` logical elements.  emit receives the logical index.

```valor
public i32 from_tensor_view(usize count, (usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `emit`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::from_tensor_view(count, emit);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-from-strided"></a>

> ## `from_strided`

> fromStridedView<T>(source, stride): deterministic strided traversal. fromStridedView<T>(source, stride): deterministic strided traversal.  emit receives the physical offset base_offset + k*stride for k in [0, count).

```valor
public i32 from_strided(usize base_offset, usize count, usize stride, (usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `base_offset`: usize (by value)
> - `count`: usize (by value)
> - `stride`: usize (by value)
> - `emit`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::from_strided(base_offset, count, stride, emit);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-successors"></a>

> ## `successors`

> successors<T>(seed, next): seed, f(seed), f(f(seed)), ... successors<T>(seed, next): seed, f(seed), f(f(seed)), ... terminating when `has_next` returns false, capped at `limit` for bounded execution.

```valor
public i32 successors(i64 seed, usize limit, (i64) -> bool has_next, (i64) -> i64 advance, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `seed`: i64 (by value)
> - `limit`: usize (by value)
> - `receive`: (i64) -> bool has_next, (i64) -> i64 advance, (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::successors(seed, limit, receive);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-unfold"></a>

> ## `unfold`

> unfold<S, T>(state, step): general state-machine source. unfold<S, T>(state, step): general state-machine source.  `has` reports whether a value remains, `out` projects the emitted value, `next` advances the (caller-held, i64-encoded) state.  Foundational for streaming decode.

```valor
public i32 unfold(i64 state0, usize limit, (i64) -> bool has, (i64) -> i64 out, (i64) -> i64 next, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state0`: i64 (by value)
> - `limit`: usize (by value)
> - `receive`: (i64) -> bool has, (i64) -> i64 out, (i64) -> i64 next, (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::unfold(state0, limit, receive);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-map"></a>

> ## `map`

> map(iter, mapper): one-to-one lazy transformation. map(iter, mapper): one-to-one lazy transformation.  `apply` reads the borrowed source element at the index and writes the caller's destination; the driver only sequences indices, so nothing is copied through iter.

```valor
public i32 map(usize length, (usize) -> void apply)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `apply`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::map(length, apply);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-filter"></a>

> ## `filter`

> filter(iter, predicate): retains values satisfying a deterministic predicate. filter(iter, predicate): retains values satisfying a deterministic predicate.  emit fires only for kept indices, in source order.

```valor
public i32 filter(usize length, (usize) -> bool keep, (usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `emit`: (usize) -> bool keep, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::filter(length, emit);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-filter-map"></a>

> ## `filter_map`

> filterMap(iter, mapper): maps and discards `none` results in one adaptor. filterMap(iter, mapper): maps and discards `none` results in one adaptor. `try_apply` performs the map into caller storage and returns whether the result was kept; emit fires for kept indices only.

```valor
public i32 filter_map(usize length, (usize) -> bool try_apply, (usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `emit`: (usize) -> bool try_apply, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::filter_map(length, emit);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-inspect"></a>

> ## `inspect`

> inspect(iter, observer): observes each value without changing the stream. inspect(iter, observer): observes each value without changing the stream. The observer runs, then the element is forwarded unchanged.

```valor
public i32 inspect(usize length, (usize) -> void observe, (usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `emit`: (usize) -> void observe, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::inspect(length, emit);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-enumerate"></a>

> ## `enumerate`

> enumerate(iter): yields deterministic zero-based indices with checked overflow. enumerate(iter): yields deterministic zero-based indices with checked overflow.  emit_at receives (ordinal, source_index).

```valor
public i32 enumerate(usize length, (usize, usize) -> void emit_at)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `emit_at`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::enumerate(length, emit_at);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-take"></a>

> ## `take`

> take(iter, count): caps a source after `count` values.

```valor
public i32 take(usize length, usize n, (usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `n`: usize (by value)
> - `emit`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::take(length, n, emit);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-take-while"></a>

> ## `take_while`

> takeWhile(iter, predicate): stops before the first false predicate result.

```valor
public i32 take_while(usize length, (usize) -> bool keep, (usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `emit`: (usize) -> bool keep, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::take_while(length, emit);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-skip"></a>

> ## `skip`

> skip(iter, count): lazily discards the first `count` values.

```valor
public i32 skip(usize length, usize n, (usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `n`: usize (by value)
> - `emit`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::skip(length, n, emit);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-skip-while"></a>

> ## `skip_while`

> skipWhile(iter, predicate): discards until the predicate first becomes false, then forwards the rest unconditionally. skipWhile(iter, predicate): discards until the predicate first becomes false, then forwards the rest unconditionally.

```valor
public i32 skip_while(usize length, (usize) -> bool keep, (usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `emit`: (usize) -> bool keep, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::skip_while(length, emit);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-step-by"></a>

> ## `step_by`

> stepBy(iter, step): returns every step-th element; step == 0 is a deterministic construction error. stepBy(iter, step): returns every step-th element; step == 0 is a deterministic construction error.

```valor
public i32 step_by(usize length, usize step, (usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `step`: usize (by value)
> - `emit`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::step_by(length, step, emit);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-stride"></a>

> ## `stride`

> stride(iter, step): AI-indexing alias of stepBy with identical semantics.

```valor
public i32 stride(usize length, usize step, (usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `step`: usize (by value)
> - `emit`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::stride(length, step, emit);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-chain"></a>

> ## `chain`

> chain(first, second): consumes `first` fully, then `second`. chain(first, second): consumes `first` fully, then `second`.  emit_first and emit_second sink from their respective sources so the two payloads keep their own borrows.

```valor
public i32 chain(usize len_first, usize len_second, (usize) -> void emit_first, (usize) -> void emit_second)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `len_first`: usize (by value)
> - `len_second`: usize (by value)
> - `emit_second`: (usize) -> void emit_first, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::chain(len_first, len_second, emit_second);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-zip"></a>

> ## `zip`

> zip(a, b): stops at the shorter source. zip(a, b): stops at the shorter source.  emit_pair receives the paired index that indexes both a and b (equal-length position).

```valor
public i32 zip(usize len_a, usize len_b, (usize, usize) -> void emit_pair)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `len_a`: usize (by value)
> - `len_b`: usize (by value)
> - `emit_pair`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::zip(len_a, len_b, emit_pair);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-zip-exact"></a>

> ## `zip_exact`

> zipExact(a, b): fails deterministically if the lengths differ.

```valor
public i32 zip_exact(usize len_a, usize len_b, (usize, usize) -> void emit_pair)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `len_a`: usize (by value)
> - `len_b`: usize (by value)
> - `emit_pair`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::zip_exact(len_a, len_b, emit_pair);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-flatten"></a>

> ## `flatten`

> flatten(iterOfIters): consumes nested iterators in outer order, then inner order. flatten(iterOfIters): consumes nested iterators in outer order, then inner order.  inner_len reports each inner length; emit_pair receives (outer_index, inner_index).

```valor
public i32 flatten(usize outer_len, (usize) -> usize inner_len, (usize, usize) -> void emit_pair)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `outer_len`: usize (by value)
> - `usize`: (usize) -> usize inner_len, ( (borrowed fn-ptr (callback))
> - `emit_pair`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::flatten(outer_len, usize, emit_pair);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-flat-map"></a>

> ## `flat_map`

> flatMap(iter, mapper): map followed by flatten with no intermediate allocation. flatMap(iter, mapper): map followed by flatten with no intermediate allocation.  `expand_len` maps an outer index to the produced inner length; emit_pair receives (outer_index, inner_index).

```valor
public i32 flat_map(usize outer_len, (usize) -> usize expand_len, (usize, usize) -> void emit_pair)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `outer_len`: usize (by value)
> - `usize`: (usize) -> usize expand_len, ( (borrowed fn-ptr (callback))
> - `emit_pair`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::flat_map(outer_len, usize, emit_pair);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-fuse"></a>

> ## `fuse`

> fuse(iter): after first exhaustion, remains exhausted and never polls upstream again. fuse(iter): after first exhaustion, remains exhausted and never polls upstream again.  Contiguous drivers are already fused, so this is a pass-through that documents the guarantee and forwards in order.

```valor
public i32 fuse(usize length, (usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `emit`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::fuse(length, emit);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-peek-first"></a>

> ## `peek_first`

> peekable(iter): one-element inline lookahead. peekable(iter): one-element inline lookahead.  Reports whether a first element exists and, if so, shows it to `peek` without advancing.  Returns true when the source is non-empty.

```valor
public bool peek_first(usize length, (usize) -> void peek)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `peek`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::iter::peek_first(length, peek);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-batch"></a>

> ## `batch`

> batch(iter, batchSize): yields bounded caller-buffer-backed batches. batch(iter, batchSize): yields bounded caller-buffer-backed batches. emit_batch receives (start_index, batch_len); the final batch may be short.

```valor
public i32 batch(usize length, usize batch_size, (usize, usize) -> void emit_batch)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `batch_size`: usize (by value)
> - `emit_batch`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::batch(length, batch_size, emit_batch);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-chunks"></a>

> ## `chunks`

> chunks(iter, chunkSize): consecutive non-overlapping chunks; last is short.

```valor
public i32 chunks(usize length, usize chunk_size, (usize, usize) -> void emit_chunk)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `chunk_size`: usize (by value)
> - `emit_chunk`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::chunks(length, chunk_size, emit_chunk);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-chunks-exact"></a>

> ## `chunks_exact`

> chunksExact(iter, chunkSize): only full chunks, plus a deterministic remainder. chunksExact(iter, chunkSize): only full chunks, plus a deterministic remainder.  emit_chunk receives (start, chunkSize); receive_remainder receives (start, remainder_len) once (remainder_len may be zero).

```valor
public i32 chunks_exact(usize length, usize chunk_size, (usize, usize) -> void emit_chunk, (usize, usize) -> void receive_remainder)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `chunk_size`: usize (by value)
> - `usize`: (usize, usize) -> void emit_chunk, ( (borrowed fn-ptr (callback))
> - `receive_remainder`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::chunks_exact(length, chunk_size, usize, receive_remainder);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-windows"></a>

> ## `windows`

> windows(iter, width): overlapping sliding windows. windows(iter, width): overlapping sliding windows.  emit_window receives (start, width); for contiguous sources each window is a borrowed slice.

```valor
public i32 windows(usize length, usize width, (usize, usize) -> void emit_window)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `width`: usize (by value)
> - `emit_window`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::windows(length, width, emit_window);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-pairwise"></a>

> ## `pairwise`

> pairwise(iter): windows(iter, 2) specialised for adjacent transitions. pairwise(iter): windows(iter, 2) specialised for adjacent transitions. emit_pair receives (i, i+1).

```valor
public i32 pairwise(usize length, (usize, usize) -> void emit_pair)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `emit_pair`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::pairwise(length, emit_pair);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-interleave"></a>

> ## `interleave`

> interleave(a, b): alternates sources in a fixed left-first order until the longer source is drained (the shorter simply stops contributing). interleave(a, b): alternates sources in a fixed left-first order until the longer source is drained (the shorter simply stops contributing).

```valor
public i32 interleave(usize len_a, usize len_b, (usize) -> void emit_a, (usize) -> void emit_b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `len_a`: usize (by value)
> - `len_b`: usize (by value)
> - `emit_b`: (usize) -> void emit_a, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::interleave(len_a, len_b, emit_b);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-interleave-shortest"></a>

> ## `interleave_shortest`

> interleaveShortest(a, b): stops as soon as either source ends.

```valor
public i32 interleave_shortest(usize len_a, usize len_b, (usize) -> void emit_a, (usize) -> void emit_b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `len_a`: usize (by value)
> - `len_b`: usize (by value)
> - `emit_b`: (usize) -> void emit_a, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::interleave_shortest(len_a, len_b, emit_b);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-round-robin"></a>

> ## `round_robin`

> roundRobin(iterators): consumes one item per iterator in stable input order until all are drained. roundRobin(iterators): consumes one item per iterator in stable input order until all are drained.  len_of reports each iterator's length; emit_at receives (iterator_index, element_index).  Iterator count must be bounded.

```valor
public i32 round_robin(usize iter_count, (usize) -> usize len_of, (usize, usize) -> void emit_at)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `iter_count`: usize (by value)
> - `usize`: (usize) -> usize len_of, ( (borrowed fn-ptr (callback))
> - `emit_at`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::round_robin(iter_count, usize, emit_at);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-scan"></a>

> ## `scan`

> scan(iter, state, folder): yields each intermediate accumulator state. scan(iter, state, folder): yields each intermediate accumulator state.  The accumulator lives in caller storage; `advance` folds the element at the index into it and emits the new state.  O(1) module-side state.

```valor
public i32 scan(usize length, (usize) -> void advance)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `advance`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::scan(length, advance);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-map-accum"></a>

> ## `map_accum`

> mapAccum(iter, state, mapper): state-threading map for token offsets and finite-state transforms. mapAccum(iter, state, mapper): state-threading map for token offsets and finite-state transforms.  Same shape as scan; kept distinct for intent.

```valor
public i32 map_accum(usize length, (usize) -> void advance)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `advance`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::map_accum(length, advance);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-group-adjacent-by"></a>

> ## `group_adjacent_by`

> groupAdjacentBy(iter, keyFn): groups consecutive equal keys only; never hashes or reorders. groupAdjacentBy(iter, keyFn): groups consecutive equal keys only; never hashes or reorders.  same_key(a, b) compares the keys at two adjacent indices; emit_group receives (start, group_len) per run.

```valor
public i32 group_adjacent_by(usize length, (usize, usize) -> bool same_key, (usize, usize) -> void emit_group)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `usize`: (usize, usize) -> bool same_key, ( (borrowed fn-ptr (callback))
> - `emit_group`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::group_adjacent_by(length, usize, emit_group);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-dedup-adjacent"></a>

> ## `dedup_adjacent`

> dedupAdjacent(iter): removes consecutive duplicates; deterministic, O(1) state. dedupAdjacent(iter): removes consecutive duplicates; deterministic, O(1) state.  same(a, b) reports payload equality of two adjacent indices; emit fires for the first element of each run.

```valor
public i32 dedup_adjacent(usize length, (usize, usize) -> bool same, (usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `emit`: (usize, usize) -> bool same, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::dedup_adjacent(length, emit);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-intersperse"></a>

> ## `intersperse`

> intersperse(iter, separator): places a separator between source values. intersperse(iter, separator): places a separator between source values. emit_sep fires between elements; emit forwards each element.

```valor
public i32 intersperse(usize length, () -> void emit_sep, (usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `emit`: () -> void emit_sep, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::intersperse(length, emit);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-pad-to"></a>

> ## `pad_to`

> padTo(iter, length, fill): extends a finite sequence to a target length by emitting `fill` for the deficit. padTo(iter, length, fill): extends a finite sequence to a target length by emitting `fill` for the deficit.  emit forwards real elements; emit_fill supplies padding.  If the source already meets the target, no fill is added.

```valor
public i32 pad_to(usize length, usize target, () -> void emit_fill, (usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `target`: usize (by value)
> - `emit`: () -> void emit_fill, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::pad_to(length, target, emit);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-truncate-or-pad"></a>

> ## `truncate_or_pad`

> truncateOrPad(iter, length, fill): canonical fixed-length preprocessing. truncateOrPad(iter, length, fill): canonical fixed-length preprocessing. Emits exactly `target` elements: the first min(length, target) real ones, then `fill` for any deficit.

```valor
public i32 truncate_or_pad(usize length, usize target, () -> void emit_fill, (usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `target`: usize (by value)
> - `emit`: () -> void emit_fill, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::truncate_or_pad(length, target, emit);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-mask"></a>

> ## `mask`

> mask(iter, maskIter): selects source values where the mask is true. mask(iter, maskIter): selects source values where the mask is true.  Stops at the shorter of the two unless `exact` requires equal lengths.  keep_mask reads the boolean mask at an index; emit forwards selected source indices.

```valor
public i32 mask(usize length, usize mask_len, bool exact, (usize) -> bool keep_mask, (usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `mask_len`: usize (by value)
> - `exact`: bool (by value)
> - `emit`: (usize) -> bool keep_mask, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::mask(length, mask_len, exact, emit);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-compress"></a>

> ## `compress`

> compress(iter, selectors): itertools.compress with stable positional behaviour -- forwards source[i] whenever selector[i] is truthy, stopping at the shorter of the two. compress(iter, selectors): itertools.compress with stable positional behaviour -- forwards source[i] whenever selector[i] is truthy, stopping at the shorter of the two.

```valor
public i32 compress(usize length, usize selector_len, (usize) -> bool select, (usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `selector_len`: usize (by value)
> - `emit`: (usize) -> bool select, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::compress(length, selector_len, emit);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-product2"></a>

> ## `product2`

> product(a, b): Cartesian product in lexicographic (a-major) order. product(a, b): Cartesian product in lexicographic (a-major) order. emit_pair receives (a_index, b_index).  The right source is re-scanned per left element, so it must be rewindable / random-access.

```valor
public i32 product2(usize len_a, usize len_b, (usize, usize) -> void emit_pair)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `len_a`: usize (by value)
> - `len_b`: usize (by value)
> - `emit_pair`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::product2(len_a, len_b, emit_pair);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-product-n"></a>

> ## `product_n`

> productN(sources, workspace): N-way Cartesian product with an explicit odometer workspace of `dims` usize digits. productN(sources, workspace): N-way Cartesian product with an explicit odometer workspace of `dims` usize digits.  extent(d) is the size of dimension d; read_digit / write_digit expose the caller workspace; emit() fires once per tuple, after which the caller reads the workspace digits.

```valor
public i32 product_n(usize dims, (usize) -> usize extent, (usize) -> usize read_digit, (usize, usize) -> void write_digit, () -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `dims`: usize (by value)
> - `emit`: (usize) -> usize extent, (usize) -> usize read_digit, (usize, usize) -> void write_digit, () -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::product_n(dims, emit);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-permutation-count"></a>

> ## `permutation_count`

> The count of r-permutations of n distinct items: n! The count of r-permutations of n distinct items: n! / (n-r)!.  Returns NO_INDEX and leaves overflow detection to the caller when it does not fit.

```valor
public usize permutation_count(usize n, usize r)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `r`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::iter::permutation_count(n, r);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-combination-count"></a>

> ## `combination_count`

> The count of r-combinations of n items: permutation_count(n, r) / r!.

```valor
public usize combination_count(usize n, usize r)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `r`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::iter::combination_count(n, r);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-permutations"></a>

> ## `permutations`

> permutations(iter, r, workspace): lexicographic r-permutations of n distinct indices using an itertools-style index/cycle workspace. permutations(iter, r, workspace): lexicographic r-permutations of n distinct indices using an itertools-style index/cycle workspace.  read_index / write_index hold the length-n index array; read_cycle / write_cycle hold the length-n cycle counters.  emit() fires per permutation; the caller reads the first r entries of the index array.

```valor
public i32 permutations(usize n, usize r, (usize) -> usize read_index, (usize, usize) -> void write_index, (usize) -> usize read_cycle, (usize, usize) -> void write_cycle, () -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^3)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `r`: usize (by value)
> - `usize`: (usize) -> usize read_index, ( (borrowed fn-ptr (callback))
> - `emit`: usize) -> void write_index, (usize) -> usize read_cycle, (usize, usize) -> void write_cycle, () -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::permutations(n, r, usize, emit);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-combinations"></a>

> ## `combinations`

> combinations(iter, r, workspace): lexicographic r-combinations without replacement over n indices. combinations(iter, r, workspace): lexicographic r-combinations without replacement over n indices.  read_index / write_index hold the length-r index array; emit() fires per combination.

```valor
public i32 combinations(usize n, usize r, (usize) -> usize read_index, (usize, usize) -> void write_index, () -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^3)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `r`: usize (by value)
> - `usize`: (usize) -> usize read_index, ( (borrowed fn-ptr (callback))
> - `emit`: usize) -> void write_index, () -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::combinations(n, r, usize, emit);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-combinations-with-replacement"></a>

> ## `combinations_with_replacement`

> combinationsWithReplacement(iter, r, workspace): lexicographic combinations allowing repeated elements. combinationsWithReplacement(iter, r, workspace): lexicographic combinations allowing repeated elements.  Same workspace contract as combinations.

```valor
public i32 combinations_with_replacement(usize n, usize r, (usize) -> usize read_index, (usize, usize) -> void write_index, () -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `r`: usize (by value)
> - `usize`: (usize) -> usize read_index, ( (borrowed fn-ptr (callback))
> - `emit`: usize) -> void write_index, () -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::combinations_with_replacement(n, r, usize, emit);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-powerset"></a>

> ## `powerset`

> powerset(iter, workspace): all subsets of n indices, only for explicitly bounded n. powerset(iter, workspace): all subsets of n indices, only for explicitly bounded n.  read_bit / write_bit hold an n-digit binary membership counter in caller workspace; emit() fires per subset (2^n total), after which the caller reads the membership bits.  Emission is in binary-counter order.

```valor
public i32 powerset(usize n, (usize) -> usize read_bit, (usize, usize) -> void write_bit, () -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `usize`: (usize) -> usize read_bit, ( (borrowed fn-ptr (callback))
> - `emit`: usize) -> void write_bit, () -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::powerset(n, usize, emit);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-for-each"></a>

> ## `for_each`

> forEach(iter, consumer): consumes in sequence order.

```valor
public i32 for_each(usize length, (usize) -> void consume)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `consume`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::for_each(length, consume);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-fold-i64"></a>

> ## `fold_i64`

> fold(iter, initial, reducer): left fold with an explicit i64 accumulator. fold(iter, initial, reducer): left fold with an explicit i64 accumulator. combine(acc, index) returns the next accumulator; the final value is delivered through receive.

```valor
public i32 fold_i64(usize length, i64 initial, (i64, usize) -> i64 combine, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `initial`: i64 (by value)
> - `receive`: (i64, usize) -> i64 combine, (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::fold_i64(length, initial, receive);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-reduce-i64"></a>

> ## `reduce_i64`

> reduce(iter, reducer): uses the first item as the initial accumulator; empty input is an explicit error. reduce(iter, reducer): uses the first item as the initial accumulator; empty input is an explicit error.

```valor
public i32 reduce_i64(usize length, (usize) -> i64 read, (i64, usize) -> i64 combine, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `i64`: (usize) -> i64 read, ( (borrowed fn-ptr (callback))
> - `receive`: usize) -> i64 combine, (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::reduce_i64(length, i64, receive);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-try-fold-i64"></a>

> ## `try_fold_i64`

> tryFold(iter, initial, reducer): early-exit fold with typed failure. tryFold(iter, initial, reducer): early-exit fold with typed failure. `ok` reports whether the element at the index may be folded; the first false result stops the fold at that point and yields ERR_CALLBACK.  The accumulator reached so far is still delivered through receive.

```valor
public i32 try_fold_i64(usize length, i64 initial, (usize) -> bool ok, (i64, usize) -> i64 combine, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `initial`: i64 (by value)
> - `i64`: (usize) -> bool ok, ( (borrowed fn-ptr (callback))
> - `receive`: usize) -> i64 combine, (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::try_fold_i64(length, initial, i64, receive);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-collect-into"></a>

> ## `collect_into`

> collectInto(iter, destination): writes source indices into caller-owned storage; never allocates. collectInto(iter, destination): writes source indices into caller-owned storage; never allocates.  write_out(out_pos, source_index) stores element order; ERR_NO_SPACE if the source exceeds the destination capacity.  The produced count is delivered through receive_count.

```valor
public i32 collect_into(usize length, usize capacity, (usize, usize) -> void write_out, (usize) -> void receive_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `receive_count`: (usize, usize) -> void write_out, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::collect_into(length, capacity, receive_count);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-collect-array"></a>

> ## `collect_array`

> collectArray<N>(iter): collects exactly (exact = true) or at most N elements into caller storage. collectArray<N>(iter): collects exactly (exact = true) or at most N elements into caller storage.  In exact mode a shorter source is an error.

```valor
public i32 collect_array(usize length, usize n, bool exact, (usize, usize) -> void write_out, (usize) -> void receive_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `n`: usize (by value)
> - `exact`: bool (by value)
> - `receive_count`: (usize, usize) -> void write_out, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::collect_array(length, n, exact, receive_count);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-count-items"></a>

> ## `count_items`

> countItems(iter): counts values with checked usize overflow. countItems(iter): counts values with checked usize overflow.  keep lets the count reflect a fused filter; pass an always-true keep for a raw count.

```valor
public i32 count_items(usize length, (usize) -> bool keep, (usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `receive`: (usize) -> bool keep, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::count_items(length, receive);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-count-all"></a>

> ## `count_all`

> count_all(iter): raw element count of a contiguous source.

```valor
public usize count_all(usize length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::iter::count_all(length);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-sum-i64"></a>

> ## `sum_i64`

> sum(iter): checked additive reduction over the i64 value channel.

```valor
public i32 sum_i64(usize length, (usize) -> i64 read, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `receive`: (usize) -> i64 read, (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::sum_i64(length, receive);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-product-values-i64"></a>

> ## `product_values_i64`

> productValues(iter): checked multiplicative reduction over i64 values.

```valor
public i32 product_values_i64(usize length, (usize) -> i64 read, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `receive`: (usize) -> i64 read, (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::product_values_i64(length, receive);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-min-by"></a>

> ## `min_by`

> min(iter): stable first-minimum by comparator. min(iter): stable first-minimum by comparator.  compare_at(a, b) returns < 0 when element a precedes element b.  The winning index is delivered through receive_index; empty input is an error.

```valor
public i32 min_by(usize length, (usize, usize) -> i32 compare_at, (usize) -> void receive_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `receive_index`: (usize, usize) -> i32 compare_at, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::min_by(length, receive_index);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-max-by"></a>

> ## `max_by`

> max(iter): stable first-maximum by comparator. max(iter): stable first-maximum by comparator.  A strictly-greater test keeps the first maximum on ties.

```valor
public i32 max_by(usize length, (usize, usize) -> i32 compare_at, (usize) -> void receive_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `receive_index`: (usize, usize) -> i32 compare_at, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::max_by(length, receive_index);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-iter-all"></a>

> ## `iter_all`

> all(iter, predicate): short-circuit universal predicate.

```valor
public bool iter_all(usize length, (usize) -> bool keep)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `keep`: (usize) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::iter::iter_all(length, keep);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-iter-any"></a>

> ## `iter_any`

> any(iter, predicate): short-circuit existential predicate.

```valor
public bool iter_any(usize length, (usize) -> bool keep)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `keep`: (usize) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::iter::iter_any(length, keep);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-iter-none"></a>

> ## `iter_none`

> none(iter, predicate): true when no value satisfies the predicate.

```valor
public bool iter_none(usize length, (usize) -> bool keep)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `keep`: (usize) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::iter::iter_none(length, keep);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-find"></a>

> ## `find`

> find(iter, predicate): returns the first matching index through receive_index; the boolean result reports whether a match was found. find(iter, predicate): returns the first matching index through receive_index; the boolean result reports whether a match was found.

```valor
public bool find(usize length, (usize) -> bool keep, (usize) -> void receive_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `receive_index`: (usize) -> bool keep, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::iter::find(length, receive_index);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-find-map"></a>

> ## `find_map`

> findMap(iter, mapper): returns the first index whose map result is kept. findMap(iter, mapper): returns the first index whose map result is kept. try_apply performs the map into caller storage and reports success.

```valor
public bool find_map(usize length, (usize) -> bool try_apply, (usize) -> void receive_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `receive_index`: (usize) -> bool try_apply, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::iter::find_map(length, receive_index);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-position"></a>

> ## `position`

> position(iter, predicate): returns the first matching zero-based index.

```valor
public bool position(usize length, (usize) -> bool keep, (usize) -> void receive_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `receive_index`: (usize) -> bool keep, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::iter::position(length, receive_index);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-nth"></a>

> ## `nth`

> nth(iter, index): consumes through the requested index and delivers it. nth(iter, index): consumes through the requested index and delivers it. Returns whether the source was long enough.

```valor
public bool nth(usize length, usize index, (usize) -> void receive_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `index`: usize (by value)
> - `receive_index`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::iter::nth(length, index, receive_index);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-last"></a>

> ## `last`

> last(iter): returns the final index using O(1) state.

```valor
public bool last(usize length, (usize) -> void receive_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `receive_index`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::iter::last(length, receive_index);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-compare-lexicographic"></a>

> ## `compare_lexicographic`

> compareLexicographic(a, b, comparator): stable ordered sequence comparison. compareLexicographic(a, b, comparator): stable ordered sequence comparison. compare_at(a_index, b_index) returns < 0 / 0 / > 0.  The result is one of ORDER_LESS / ORDER_EQUAL / ORDER_GREATER; a proper prefix compares LESS.

```valor
public i32 compare_lexicographic(usize len_a, usize len_b, (usize, usize) -> i32 compare_at)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `len_a`: usize (by value)
> - `len_b`: usize (by value)
> - `compare_at`: (usize, usize) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::compare_lexicographic(len_a, len_b, compare_at);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-equal"></a>

> ## `equal`

> equal(a, b, equality): elementwise equality with exact exhaustion match. equal(a, b, equality): elementwise equality with exact exhaustion match. equal_at(a_index, b_index) reports element equality.

```valor
public bool equal(usize len_a, usize len_b, (usize, usize) -> bool equal_at)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `len_a`: usize (by value)
> - `len_b`: usize (by value)
> - `equal_at`: (usize, usize) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::iter::equal(len_a, len_b, equal_at);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-bounded"></a>

> ## `bounded`

> bounded(iter, maxSteps): wraps a source with a hard step budget, returning the effective element count that will be produced. bounded(iter, maxSteps): wraps a source with a hard step budget, returning the effective element count that will be produced.

```valor
public usize bounded(usize length, usize max_steps)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `max_steps`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::iter::bounded(length, max_steps);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-bounded-drive"></a>

> ## `bounded_drive`

> bounded_drive(iter, maxSteps): drives at most max_steps elements, reporting ERR_BOUND if the source would have produced more. bounded_drive(iter, maxSteps): drives at most max_steps elements, reporting ERR_BOUND if the source would have produced more.  used tells the caller how many were actually emitted.

```valor
public i32 bounded_drive(usize length, usize max_steps, (usize) -> void emit, (usize) -> void receive_used)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `max_steps`: usize (by value)
> - `receive_used`: (usize) -> void emit, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::bounded_drive(length, max_steps, receive_used);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-exactly"></a>

> ## `exactly`

> exactly(iter, count): requires exactly `count` values; deterministic underflow/overflow failure otherwise. exactly(iter, count): requires exactly `count` values; deterministic underflow/overflow failure otherwise.

```valor
public i32 exactly(usize length, usize count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `count`: usize (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::exactly(length, count);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-at-most"></a>

> ## `at_most`

> atMost(iter, count): fails if the source yields more than `count` values.

```valor
public i32 at_most(usize length, usize count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `count`: usize (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::at_most(length, count);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-with-fuel"></a>

> ## `with_fuel`

> withFuel(iter, fuel): consumes one unit of fuel per produced item; stops deterministically when fuel is exhausted. withFuel(iter, fuel): consumes one unit of fuel per produced item; stops deterministically when fuel is exhausted.  ERR_FUEL is returned when the source outlives the fuel budget.  remaining fuel is delivered via receive.

```valor
public i32 with_fuel(usize length, usize fuel, (usize) -> void emit, (usize) -> void receive_remaining)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `fuel`: usize (by value)
> - `receive_remaining`: (usize) -> void emit, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::with_fuel(length, fuel, receive_remaining);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-checked-index"></a>

> ## `checked_index`

> checked(iter): validates that an index lies within a source before use, the primitive that promotes indexing failures into typed iterator errors. checked(iter): validates that an index lies within a source before use, the primitive that promotes indexing failures into typed iterator errors.

```valor
public bool checked_index(usize index, usize length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: usize (by value)
> - `length`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::iter::checked_index(index, length);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-assume-finite"></a>

> ## `assume_finite`

> assumeFinite(iter, proofToken): permits a finite-only consumer only when the caller supplies a nonzero proof token establishing finiteness. assumeFinite(iter, proofToken): permits a finite-only consumer only when the caller supplies a nonzero proof token establishing finiteness.  A zero token is rejected as ERR_INVALID; a valid token returns the finite length.

```valor
public i32 assume_finite(usize length, u64 proof_token, (usize) -> void receive_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `proof_token`: u64 (by value)
> - `receive_length`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::assume_finite(length, proof_token, receive_length);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-canonicalize-order"></a>

> ## `canonicalize_order`

> canonicalizeOrder(iter, orderingProof): only meaningful for sources whose native order is not guaranteed. canonicalizeOrder(iter, orderingProof): only meaningful for sources whose native order is not guaranteed.  Contiguous sources already have a canonical order, so this reports OK for a nonzero proof and rejects a missing one rather than silently sorting.

```valor
public i32 canonicalize_order(usize length, u64 ordering_proof)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `ordering_proof`: u64 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::canonicalize_order(length, ordering_proof);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-replay"></a>

> ## `replay`

> replay(iter, callerBuffer): explicitly materialises a single-pass source into caller-owned storage to create a rewindable iterator. replay(iter, callerBuffer): explicitly materialises a single-pass source into caller-owned storage to create a rewindable iterator.  write_out records element order; ERR_NO_SPACE if the source exceeds capacity.

```valor
public i32 replay(usize length, usize capacity, (usize, usize) -> void write_out, (usize) -> void receive_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `receive_count`: (usize, usize) -> void write_out, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::replay(length, capacity, receive_count);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

<a id="fn-tee2"></a>

> ## `tee2`

> tee(iter, outputs, callerBuffer): fan-out to two consumers with a bounded lag. tee(iter, outputs, callerBuffer): fan-out to two consumers with a bounded lag.  Each element is delivered to emit_a then emit_b in order from a single forward pass, so no hidden replay storage is required.  `lag` bounds how far the two logical outputs may diverge and must be at least one.

```valor
public i32 tee2(usize length, usize lag, (usize) -> void emit_a, (usize) -> void emit_b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `lag`: usize (by value)
> - `emit_b`: (usize) -> void emit_a, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::iter::tee2(length, lag, emit_b);
> ```

> ### SEE ALSO
>
> - [`std::iter::add_fits`](#fn-add-fits)
> - [`std::iter::mul_fits`](#fn-mul-fits)
> - [`std::iter::min_count`](#fn-min-count)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Hashing](STD-HASH-DOC.md) · [Table of contents](standard-library/README.md) · [Functional tools →](STD-FUNCTOOLS-DOC.md)
