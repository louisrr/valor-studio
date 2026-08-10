<!-- stdlib-reference-style: modern -->
> # `std::stream`

`std::stream` pull- and push-style stream processing.

[Standard library](standard-library/README.md) / [Collections and text](standard-library/README.md#collections-and-text) / **Streams**

> **Source:** `stdlib/std/stream.valor` · **Routines:** 44 public · 25 internal

## Routines

<details>
<summary>Browse all 69 routines</summary>

- [`magnitude`](#fn-magnitude)
- [`pow2_usize`](#fn-pow2-usize)
- [`pow2_u64`](#fn-pow2-u64)
- [`pow2_f64`](#fn-pow2-f64)
- [`stream_ln`](#fn-stream-ln)
- [`modulo`](#fn-modulo)
- [`word_bit`](#fn-word-bit)
- [`word_or`](#fn-word-or)
- [`chunk`](#fn-chunk)
- [`window`](#fn-window)
- [`tumbling_window`](#fn-tumbling-window)
- [`sliding_window`](#fn-sliding-window)
- [`rolling_sum`](#fn-rolling-sum)
- [`rolling_mean`](#fn-rolling-mean)
- [`rolling_extremum`](#fn-rolling-extremum)
- [`ring_slot`](#fn-ring-slot)
- [`rolling_min`](#fn-rolling-min)
- [`rolling_max`](#fn-rolling-max)
- [`rolling_variance`](#fn-rolling-variance)
- [`online_mean`](#fn-online-mean)
- [`online_variance`](#fn-online-variance)
- [`online_covariance`](#fn-online-covariance)
- [`variance_from_m2`](#fn-variance-from-m2)
- [`stddev_from_m2`](#fn-stddev-from-m2)
- [`covariance_from_comoment`](#fn-covariance-from-comoment)
- [`online_mean_merge`](#fn-online-mean-merge)
- [`online_variance_merge`](#fn-online-variance-merge)
- [`online_covariance_merge`](#fn-online-covariance-merge)
- [`reservoir_sample`](#fn-reservoir-sample)
- [`wr_sift_up`](#fn-wr-sift-up)
- [`wr_sift_down`](#fn-wr-sift-down)
- [`weighted_reservoir_sample`](#fn-weighted-reservoir-sample)
- [`heavy_hitters`](#fn-heavy-hitters)
- [`heavy_hitters_query`](#fn-heavy-hitters-query)
- [`cms_column`](#fn-cms-column)
- [`count_min_sketch`](#fn-count-min-sketch)
- [`count_min_sketch_query`](#fn-count-min-sketch-query)
- [`count_min_sketch_merge`](#fn-count-min-sketch-merge)
- [`hll_hash62`](#fn-hll-hash62)
- [`hll_rank`](#fn-hll-rank)
- [`hll_alpha`](#fn-hll-alpha)
- [`hyperloglog`](#fn-hyperloglog)
- [`hyperloglog_estimate`](#fn-hyperloglog-estimate)
- [`hyperloglog_merge`](#fn-hyperloglog-merge)
- [`bloom_word_count`](#fn-bloom-word-count)
- [`bloom_bit`](#fn-bloom-bit)
- [`bloom_filter`](#fn-bloom-filter)
- [`bloom_filter_contains`](#fn-bloom-filter-contains)
- [`bloom_filter_merge`](#fn-bloom-filter-merge)
- [`write_header`](#fn-write-header)
- [`check_header`](#fn-check-header)
- [`count_min_sketch_serialize`](#fn-count-min-sketch-serialize)
- [`count_min_sketch_deserialize`](#fn-count-min-sketch-deserialize)
- [`hyperloglog_serialize`](#fn-hyperloglog-serialize)
- [`hyperloglog_deserialize`](#fn-hyperloglog-deserialize)
- [`bloom_filter_serialize`](#fn-bloom-filter-serialize)
- [`bloom_filter_deserialize`](#fn-bloom-filter-deserialize)
- [`ms_compare`](#fn-ms-compare)
- [`ms_sift_down`](#fn-ms-sift-down)
- [`merge_sorted_streams`](#fn-merge-sorted-streams)
- [`es_sift_down`](#fn-es-sift-down)
- [`external_sort_run`](#fn-external-sort-run)
- [`es_run_len`](#fn-es-run-len)
- [`es_run_compare`](#fn-es-run-compare)
- [`es_merge_sift_down`](#fn-es-merge-sift-down)
- [`external_sort`](#fn-external-sort)
- [`external_group_by`](#fn-external-group-by)
- [`external_reduce`](#fn-external-reduce)
- [`external_reduce_u64`](#fn-external-reduce-u64)

</details>

## API reference

<a id="fn-magnitude"></a>

> ## `magnitude`

> *Internal API*
>
> Non-negative magnitude of a double without a library call.

```valor
f64 magnitude(f64 value)
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
> f64 result = std::stream::magnitude(value);
> ```

> ### SEE ALSO
>
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)
> - [`std::stream::pow2_f64`](#fn-pow2-f64)

<a id="fn-pow2-usize"></a>

> ## `pow2_usize`

> *Internal API*
>
> 2^exponent as a usize (exponent < 63).

```valor
usize pow2_usize(u32 exponent)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `exponent`: u32 (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::stream::pow2_usize(exponent);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)
> - [`std::stream::pow2_f64`](#fn-pow2-f64)

<a id="fn-pow2-u64"></a>

> ## `pow2_u64`

> *Internal API*
>
> 2^exponent as a u64 (exponent < 64), used for one-bit masks.

```valor
u64 pow2_u64(u32 exponent)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `exponent`: u32 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::stream::pow2_u64(exponent);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_f64`](#fn-pow2-f64)

<a id="fn-pow2-f64"></a>

> ## `pow2_f64`

> *Internal API*
>
> 2^exponent as a double (exponent < 1024).

```valor
f64 pow2_f64(u32 exponent)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `exponent`: u32 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::stream::pow2_f64(exponent);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-stream-ln"></a>

> ## `stream_ln`

> *Internal API*
>
> Natural logarithm by exponent reduction plus the fast-converging area-tangent series ln(m) = 2 * (t + t^3/3 + t^5/5 + ...), t = (m-1)/(m+1), on m in [1, 2). Natural logarithm by exponent reduction plus the fast-converging area-tangent series ln(m) = 2 * (t + t^3/3 + t^5/5 + ...), t = (m-1)/(m+1), on m in [1, 2). Deterministic (fixed 30-term series); valid for x > 0.

```valor
f64 stream_ln(f64 x)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `x`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::stream::stream_ln(x);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-modulo"></a>

> ## `modulo`

> *Internal API*
>
> Integer modulo helper reused from std::builtins (there is no `%` operator).

```valor
u64 modulo(u64 value, u64 divisor)
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
> u64 result = std::stream::modulo(value, divisor);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-word-bit"></a>

> ## `word_bit`

> *Internal API*
>
> The bit (0 or 1) at position `pos` of a 64-bit word, via division (no bitwise).

```valor
u64 word_bit(u64 value, u32 pos)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)
> - `pos`: u32 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::stream::word_bit(value, pos);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-word-or"></a>

> ## `word_or`

> *Internal API*
>
> Bitwise OR of two 64-bit words expressed with pure arithmetic (no `|`). Bitwise OR of two 64-bit words expressed with pure arithmetic (no `|`).  Used only on the Bloom-filter cold merge path; it reconstructs the union bit by bit.

```valor
u64 word_or(u64 a, u64 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: u64 (by value)
> - `b`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::stream::word_or(a, b);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-chunk"></a>

> ## `chunk`

> Partitions [0, n) into consecutive, non-overlapping runs of `chunk_size`. Partitions [0, n) into consecutive, non-overlapping runs of `chunk_size`.  The final run is short when n is not a multiple of chunk_size.  Deterministic and exhaustive: every index is covered exactly once.

```valor
public i32 chunk(usize n, usize chunk_size, (usize, usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `chunk_size`: usize (by value)
> - `emit`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::chunk(n, chunk_size, emit);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-window"></a>

> ## `window`

> The general windowing primitive. The general windowing primitive.  Emits windows of `size` advancing by `step`. When a trailing window would be short, `drop_partial` chooses whether to emit the partial window (false) or stop (true).  tumbling_window and sliding_window are thin policies over this core, so all three share one verified loop.

```valor
public i32 window(usize n, usize size, usize step, bool drop_partial, (usize, usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `size`: usize (by value)
> - `step`: usize (by value)
> - `drop_partial`: bool (by value)
> - `emit`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::window(n, size, step, drop_partial, emit);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-tumbling-window"></a>

> ## `tumbling_window`

> Non-overlapping fixed windows that fully partition [0, n); the last window is short when n is not a multiple of `size`. Non-overlapping fixed windows that fully partition [0, n); the last window is short when n is not a multiple of `size`.  (step == size, keep the remainder.)

```valor
public i32 tumbling_window(usize n, usize size, (usize, usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `size`: usize (by value)
> - `emit`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::tumbling_window(n, size, emit);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-sliding-window"></a>

> ## `sliding_window`

> Overlapping windows of `size` advancing by `step` (step <= size). Overlapping windows of `size` advancing by `step` (step <= size).  Only full windows are emitted -- a short tail is dropped -- so every emitted window has exactly `size` elements, which downstream fixed-shape SIMD kernels rely on.

```valor
public i32 sliding_window(usize n, usize size, usize step, (usize, usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `size`: usize (by value)
> - `step`: usize (by value)
> - `emit`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::sliding_window(n, size, step, emit);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-rolling-sum"></a>

> ## `rolling_sum`

> Running window sum. Running window sum.  The window slides by adding the entering element and subtracting the leaving element in that fixed order, so the reduction is deterministic for a given input on a given target.

```valor
public i32 rolling_sum(usize n, usize w, (usize) -> f64 read, (usize, f64) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `w`: usize (by value)
> - `usize`: (usize) -> f64 read, ( (borrowed fn-ptr (callback))
> - `emit`: f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::rolling_sum(n, w, usize, emit);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-rolling-mean"></a>

> ## `rolling_mean`

> Window arithmetic mean: rolling_sum divided by the (constant) window width.

```valor
public i32 rolling_mean(usize n, usize w, (usize) -> f64 read, (usize, f64) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `w`: usize (by value)
> - `usize`: (usize) -> f64 read, ( (borrowed fn-ptr (callback))
> - `emit`: f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::rolling_mean(n, w, usize, emit);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-rolling-extremum"></a>

> ## `rolling_extremum`

> *Internal API*
>
> Shared monotonic-deque core for rolling_min / rolling_max. Shared monotonic-deque core for rolling_min / rolling_max.  The deque holds candidate indices in a single reused `w`-slot ring (zero-copy sliding): the front is always the extremum of the current window, expired indices are evicted from the front, and dominated indices are popped from the back.  Each index is pushed and popped at most once, so the sweep is O(n) with O(w) state.

```valor
i32 rolling_extremum(bool want_max, usize n, usize w, (usize) -> f64 read, usize deq_capacity, (usize) -> usize read_deq, (usize, usize) -> void write_deq, (usize, f64) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^4)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `want_max`: bool (by value)
> - `n`: usize (by value)
> - `w`: usize (by value)
> - `emit`: (usize) -> f64 read, usize deq_capacity, (usize) -> usize read_deq, (usize, usize) -> void write_deq, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::rolling_extremum(want_max, n, w, emit);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-ring-slot"></a>

> ## `ring_slot`

> *Internal API*
>
> Ring index for the monotonic deque without a modulo operator.

```valor
usize ring_slot(usize counter, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `counter`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::stream::ring_slot(counter, capacity);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-rolling-min"></a>

> ## `rolling_min`

> Sliding-window minimum in O(n) via the monotonic deque. Sliding-window minimum in O(n) via the monotonic deque.  `deq` workspace must hold at least `w` indices.

```valor
public i32 rolling_min(usize n, usize w, (usize) -> f64 read, usize deq_capacity, (usize) -> usize read_deq, (usize, usize) -> void write_deq, (usize, f64) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `w`: usize (by value)
> - `emit`: (usize) -> f64 read, usize deq_capacity, (usize) -> usize read_deq, (usize, usize) -> void write_deq, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::rolling_min(n, w, emit);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-rolling-max"></a>

> ## `rolling_max`

> Sliding-window maximum in O(n) via the monotonic deque. Sliding-window maximum in O(n) via the monotonic deque.  `deq` workspace must hold at least `w` indices.

```valor
public i32 rolling_max(usize n, usize w, (usize) -> f64 read, usize deq_capacity, (usize) -> usize read_deq, (usize, usize) -> void write_deq, (usize, f64) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `w`: usize (by value)
> - `emit`: (usize) -> f64 read, usize deq_capacity, (usize) -> usize read_deq, (usize, usize) -> void write_deq, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::rolling_max(n, w, emit);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-rolling-variance"></a>

> ## `rolling_variance`

> Sliding-window variance from running sum and sum-of-squares, both slid in a fixed add-then-subtract order. Sliding-window variance from running sum and sum-of-squares, both slid in a fixed add-then-subtract order.  `ddof` selects the divisor (0 = population, 1 = sample); it must be strictly less than `w`.  Emits per window-end index.

```valor
public i32 rolling_variance(usize n, usize w, u32 ddof, (usize) -> f64 read, (usize, f64) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `w`: usize (by value)
> - `ddof`: u32 (by value)
> - `usize`: (usize) -> f64 read, ( (borrowed fn-ptr (callback))
> - `emit`: f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::rolling_variance(n, w, ddof, usize, emit);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-online-mean"></a>

> ## `online_mean`

> Welford mean update. Welford mean update.  Given the running (count, mean) and a new sample x, delivers the updated (count, mean).

```valor
public void online_mean(u64 count, f64 mean, f64 x, (u64, f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: u64 (by value)
> - `mean`: f64 (by value)
> - `x`: f64 (by value)
> - `receive`: (u64, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::stream::online_mean(count, mean, x, receive);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-online-variance"></a>

> ## `online_variance`

> Welford variance update carrying the running sum of squared deviations M2. Welford variance update carrying the running sum of squared deviations M2. State is (count, mean, m2); finalize with variance_from_m2.

```valor
public void online_variance(u64 count, f64 mean, f64 m2, f64 x, (u64, f64, f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: u64 (by value)
> - `mean`: f64 (by value)
> - `m2`: f64 (by value)
> - `x`: f64 (by value)
> - `receive`: (u64, f64, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::stream::online_variance(count, mean, m2, x, receive);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-online-covariance"></a>

> ## `online_covariance`

> Streaming covariance carrying the running co-moment C of two paired series. Streaming covariance carrying the running co-moment C of two paired series. State is (count, mean_x, mean_y, comoment); finalize with covariance_from_comoment.

```valor
public void online_covariance(u64 count, f64 mean_x, f64 mean_y, f64 comoment, f64 x, f64 y, (u64, f64, f64, f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: u64 (by value)
> - `mean_x`: f64 (by value)
> - `mean_y`: f64 (by value)
> - `comoment`: f64 (by value)
> - `x`: f64 (by value)
> - `y`: f64 (by value)
> - `receive`: (u64, f64, f64, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::stream::online_covariance(count, mean_x, mean_y, comoment, x, y, receive);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-variance-from-m2"></a>

> ## `variance_from_m2`

> Finalizers turning accumulated moments into a variance / covariance / stddev. Finalizers turning accumulated moments into a variance / covariance / stddev. `ddof` is 0 for a population estimate, 1 for a sample estimate.

```valor
public f64 variance_from_m2(f64 m2, u64 count, u32 ddof)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `m2`: f64 (by value)
> - `count`: u64 (by value)
> - `ddof`: u32 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::stream::variance_from_m2(m2, count, ddof);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-stddev-from-m2"></a>

> ## `stddev_from_m2`

> Provides the module's **stddev from m2** operation. Returns `f64`.

```valor
public f64 stddev_from_m2(f64 m2, u64 count, u32 ddof)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `m2`: f64 (by value)
> - `count`: u64 (by value)
> - `ddof`: u32 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::stream::stddev_from_m2(m2, count, ddof);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-covariance-from-comoment"></a>

> ## `covariance_from_comoment`

> Provides the module's **covariance from comoment** operation. Returns `f64`.

```valor
public f64 covariance_from_comoment(f64 comoment, u64 count, u32 ddof)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `comoment`: f64 (by value)
> - `count`: u64 (by value)
> - `ddof`: u32 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::stream::covariance_from_comoment(comoment, count, ddof);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-online-mean-merge"></a>

> ## `online_mean_merge`

> online_mean merge (Chan): combine two independent (count, mean) partials.

```valor
public void online_mean_merge(u64 count_a, f64 mean_a, u64 count_b, f64 mean_b, (u64, f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count_a`: u64 (by value)
> - `mean_a`: f64 (by value)
> - `count_b`: u64 (by value)
> - `mean_b`: f64 (by value)
> - `receive`: (u64, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::stream::online_mean_merge(count_a, mean_a, count_b, mean_b, receive);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-online-variance-merge"></a>

> ## `online_variance_merge`

> online_variance merge (Chan): combine two (count, mean, m2) partials with a fixed operand order so a shard tree folds deterministically. online_variance merge (Chan): combine two (count, mean, m2) partials with a fixed operand order so a shard tree folds deterministically.

```valor
public void online_variance_merge(u64 count_a, f64 mean_a, f64 m2_a, u64 count_b, f64 mean_b, f64 m2_b, (u64, f64, f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count_a`: u64 (by value)
> - `mean_a`: f64 (by value)
> - `m2_a`: f64 (by value)
> - `count_b`: u64 (by value)
> - `mean_b`: f64 (by value)
> - `m2_b`: f64 (by value)
> - `receive`: (u64, f64, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::stream::online_variance_merge(count_a, mean_a, m2_a, count_b, mean_b, m2_b, receive);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-online-covariance-merge"></a>

> ## `online_covariance_merge`

> online_covariance merge (Chan): combine two (count, mean_x, mean_y, comoment) partials with a fixed operand order. online_covariance merge (Chan): combine two (count, mean_x, mean_y, comoment) partials with a fixed operand order.

```valor
public void online_covariance_merge(u64 count_a, f64 mean_xa, f64 mean_ya, f64 co_a, u64 count_b, f64 mean_xb, f64 mean_yb, f64 co_b, (u64, f64, f64, f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count_a`: u64 (by value)
> - `mean_xa`: f64 (by value)
> - `mean_ya`: f64 (by value)
> - `co_a`: f64 (by value)
> - `count_b`: u64 (by value)
> - `mean_xb`: f64 (by value)
> - `mean_yb`: f64 (by value)
> - `co_b`: f64 (by value)
> - `receive`: (u64, f64, f64, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::stream::online_covariance_merge(count_a, mean_xa, mean_ya, co_a, count_b, mean_xb, mean_yb, co_b, receive);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-reservoir-sample"></a>

> ## `reservoir_sample`

> Algorithm R. Algorithm R.  Fills a size-`k` reservoir uniformly from a stream of unknown length n.  `random_word(i)` returns a uniform 64-bit word for item i; item i (>= k) evicts a uniformly chosen slot with probability k/(i+1).  On return the first `filled` reservoir slots hold the selected source indices.

```valor
public i32 reservoir_sample(usize n, usize k, (u64) -> u64 random_word, usize reservoir_capacity, (usize, usize) -> void write_slot, (usize) -> void receive_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `k`: usize (by value)
> - `usize`: (u64) -> u64 random_word, usize reservoir_capacity, ( (borrowed fn-ptr (callback))
> - `receive_count`: usize) -> void write_slot, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::reservoir_sample(n, k, usize, receive_count);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-wr-sift-up"></a>

> ## `wr_sift_up`

> *Internal API*
>
> Binary min-heap on the reservoir keys (smallest key at the root). Binary min-heap on the reservoir keys (smallest key at the root).  The heap arrays are caller-owned struct-of-arrays: keys and the source indices they belong to move together.

```valor
void wr_sift_up(usize node, (usize) -> f64 read_key, (usize, f64) -> void write_key, (usize) -> usize read_idx, (usize, usize) -> void write_idx)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `usize`: (usize) -> f64 read_key, ( (borrowed fn-ptr (callback))
> - `write_idx`: f64) -> void write_key, (usize) -> usize read_idx, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::stream::wr_sift_up(node, usize, write_idx);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-wr-sift-down"></a>

> ## `wr_sift_down`

> *Internal API*
>
> Provides the module's **wr sift down** operation.

```valor
void wr_sift_down(usize size, usize root, (usize) -> f64 read_key, (usize, f64) -> void write_key, (usize) -> usize read_idx, (usize, usize) -> void write_idx)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `size`: usize (by value)
> - `root`: usize (by value)
> - `usize`: (usize) -> f64 read_key, ( (borrowed fn-ptr (callback))
> - `write_idx`: f64) -> void write_key, (usize) -> usize read_idx, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::stream::wr_sift_down(size, root, usize, write_idx);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-weighted-reservoir-sample"></a>

> ## `weighted_reservoir_sample`

> Efraimidis-Spirakis A-Res weighted sampling without replacement. Efraimidis-Spirakis A-Res weighted sampling without replacement.  Each item i draws u in (0, 1) via `random_unit(i)` and gets key ln(u) / weight(i); the k items with the largest keys are retained in a min-heap (root = smallest kept key), so a heavier item is proportionally more likely to survive.  On return the first `filled` index slots hold the sampled source indices.  Weights must be strictly positive.

```valor
public i32 weighted_reservoir_sample(usize n, usize k, (u64) -> f64 random_unit, (usize) -> f64 read_weight, usize capacity, (usize) -> f64 read_key, (usize, f64) -> void write_key, (usize) -> usize read_idx, (usize, usize) -> void write_idx, (usize) -> void receive_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `k`: usize (by value)
> - `receive_count`: (u64) -> f64 random_unit, (usize) -> f64 read_weight, usize capacity, (usize) -> f64 read_key, (usize, f64) -> void write_key, (usize) -> usize read_idx, (usize, usize) -> void write_idx, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::weighted_reservoir_sample(n, k, receive_count);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-heavy-hitters"></a>

> ## `heavy_hitters`

> One Space-Saving update for `key`. One Space-Saving update for `key`.  If the key is present its count rises; a free slot admits a new key; otherwise the minimum-count slot is evicted and re-keyed to `key` with count = min + 1.  The new active-slot count is delivered through `receive_used`.

```valor
public i32 heavy_hitters(usize capacity, u64 key, (usize) -> u64 read_key, (usize, u64) -> void write_key, (usize) -> u64 read_count, (usize, u64) -> void write_count, usize used, (usize) -> void receive_used)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `key`: u64 (by value)
> - `usize`: (usize) -> u64 read_key, ( (borrowed fn-ptr (callback))
> - `receive_used`: u64) -> void write_key, (usize) -> u64 read_count, (usize, u64) -> void write_count, usize used, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::heavy_hitters(capacity, key, usize, receive_used);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-heavy-hitters-query"></a>

> ## `heavy_hitters_query`

> Emits every active slot whose count reaches `threshold` as emit(slot, key, count), in ascending slot order (deterministic). Emits every active slot whose count reaches `threshold` as emit(slot, key, count), in ascending slot order (deterministic).

```valor
public i32 heavy_hitters_query(usize used, u64 threshold, (usize) -> u64 read_key, (usize) -> u64 read_count, (usize, u64, u64) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `used`: usize (by value)
> - `threshold`: u64 (by value)
> - `emit`: (usize) -> u64 read_key, (usize) -> u64 read_count, (usize, u64, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::heavy_hitters_query(used, threshold, emit);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-cms-column"></a>

> ## `cms_column`

> *Internal API*
>
> Column of `key` in row `r` of a depth x width sketch under `seed`.

```valor
usize cms_column(usize r, usize width, u64 seed, u64 key)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `r`: usize (by value)
> - `width`: usize (by value)
> - `seed`: u64 (by value)
> - `key`: u64 (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::stream::cms_column(r, width, seed, key);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-count-min-sketch"></a>

> ## `count_min_sketch`

> Add `amount` to the count of `key`.

```valor
public i32 count_min_sketch(usize depth, usize width, u64 seed, u64 key, u64 amount, (usize) -> u64 read_cell, (usize, u64) -> void write_cell)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `depth`: usize (by value)
> - `width`: usize (by value)
> - `seed`: u64 (by value)
> - `key`: u64 (by value)
> - `amount`: u64 (by value)
> - `usize`: (usize) -> u64 read_cell, ( (borrowed fn-ptr (callback))
> - `write_cell`: u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::count_min_sketch(depth, width, seed, key, amount, usize, write_cell);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-count-min-sketch-query"></a>

> ## `count_min_sketch_query`

> Estimated count of `key`: the minimum over the `depth` probed cells.

```valor
public u64 count_min_sketch_query(usize depth, usize width, u64 seed, u64 key, (usize) -> u64 read_cell)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `depth`: usize (by value)
> - `width`: usize (by value)
> - `seed`: u64 (by value)
> - `key`: u64 (by value)
> - `read_cell`: (usize) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::stream::count_min_sketch_query(depth, width, seed, key, read_cell);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-count-min-sketch-merge"></a>

> ## `count_min_sketch_merge`

> Cell-wise sum of two same-shape sketches into an output table. Cell-wise sum of two same-shape sketches into an output table.  Combining in ascending cell index makes the merge deterministic; the sum of two count-min sketches is itself a valid count-min sketch of the combined stream.

```valor
public i32 count_min_sketch_merge(usize depth, usize width, (usize) -> u64 read_a, (usize) -> u64 read_b, (usize, u64) -> void write_out)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `depth`: usize (by value)
> - `width`: usize (by value)
> - `write_out`: (usize) -> u64 read_a, (usize) -> u64 read_b, (usize, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::count_min_sketch_merge(depth, width, write_out);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-hll-hash62"></a>

> ## `hll_hash62`

> *Internal API*
>
> A 62-bit hash composed from two independent 31-bit multiplicative hashes so there are enough bits for both the register index and the rank tail. A 62-bit hash composed from two independent 31-bit multiplicative hashes so there are enough bits for both the register index and the rank tail.

```valor
u64 hll_hash62(u64 key, u64 seed_a, u64 seed_b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `key`: u64 (by value)
> - `seed_a`: u64 (by value)
> - `seed_b`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::stream::hll_hash62(key, seed_a, seed_b);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-hll-rank"></a>

> ## `hll_rank`

> *Internal API*
>
> Rank of the leftmost set bit (1-based) among the low `bits` bits of w; when w is entirely zero over that field the rank is bits + 1. Rank of the leftmost set bit (1-based) among the low `bits` bits of w; when w is entirely zero over that field the rank is bits + 1.

```valor
u32 hll_rank(u64 w, u32 bits)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `w`: u64 (by value)
> - `bits`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::stream::hll_rank(w, bits);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-hll-alpha"></a>

> ## `hll_alpha`

> *Internal API*
>
> The Flajolet bias constant alpha_m for m registers.

```valor
f64 hll_alpha(usize m, f64 fm)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `m`: usize (by value)
> - `fm`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::stream::hll_alpha(m, fm);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-hyperloglog"></a>

> ## `hyperloglog`

> Fold `key` into the register array. Fold `key` into the register array.  seed_a / seed_b are the two hash seeds; the register is raised to max(old, rank).

```valor
public i32 hyperloglog(usize precision, u64 seed_a, u64 seed_b, u64 key, (usize) -> u8 read_reg, (usize, u8) -> void write_reg)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `precision`: usize (by value)
> - `seed_a`: u64 (by value)
> - `seed_b`: u64 (by value)
> - `key`: u64 (by value)
> - `usize`: (usize) -> u8 read_reg, ( (borrowed fn-ptr (callback))
> - `write_reg`: u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::hyperloglog(precision, seed_a, seed_b, key, usize, write_reg);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-hyperloglog-estimate"></a>

> ## `hyperloglog_estimate`

> Cardinality estimate from the registers: the bias-corrected harmonic mean, with a linear-counting correction when the estimate is small and some registers are still zero. Cardinality estimate from the registers: the bias-corrected harmonic mean, with a linear-counting correction when the estimate is small and some registers are still zero.

```valor
public f64 hyperloglog_estimate(usize precision, (usize) -> u8 read_reg)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `precision`: usize (by value)
> - `read_reg`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::stream::hyperloglog_estimate(precision, read_reg);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-hyperloglog-merge"></a>

> ## `hyperloglog_merge`

> Register-wise maximum of two same-precision register arrays into an output. Register-wise maximum of two same-precision register arrays into an output. The union of two HyperLogLog sketches is exactly the register-wise max, so the merge is both deterministic and exact for the union.

```valor
public i32 hyperloglog_merge(usize precision, (usize) -> u8 read_a, (usize) -> u8 read_b, (usize, u8) -> void write_out)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `precision`: usize (by value)
> - `write_out`: (usize) -> u8 read_a, (usize) -> u8 read_b, (usize, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::hyperloglog_merge(precision, write_out);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-bloom-word-count"></a>

> ## `bloom_word_count`

> Word count needed to hold `num_bits` bits.

```valor
public usize bloom_word_count(usize num_bits)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `num_bits`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::stream::bloom_word_count(num_bits);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-bloom-bit"></a>

> ## `bloom_bit`

> *Internal API*
>
> Bit position of probe `h` for `key` within [0, num_bits).

```valor
usize bloom_bit(usize num_bits, u64 seed, usize h, u64 key)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `num_bits`: usize (by value)
> - `seed`: u64 (by value)
> - `h`: usize (by value)
> - `key`: u64 (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::stream::bloom_bit(num_bits, seed, h, key);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-bloom-filter"></a>

> ## `bloom_filter`

> Insert `key` by setting its `num_hashes` probe bits.

```valor
public i32 bloom_filter(usize num_bits, usize num_hashes, u64 seed, u64 key, (usize) -> u64 read_word, (usize, u64) -> void write_word)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `num_bits`: usize (by value)
> - `num_hashes`: usize (by value)
> - `seed`: u64 (by value)
> - `key`: u64 (by value)
> - `usize`: (usize) -> u64 read_word, ( (borrowed fn-ptr (callback))
> - `write_word`: u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::bloom_filter(num_bits, num_hashes, seed, key, usize, write_word);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-bloom-filter-contains"></a>

> ## `bloom_filter_contains`

> True only when every probe bit of `key` is set. True only when every probe bit of `key` is set.  A false result is exact.

```valor
public bool bloom_filter_contains(usize num_bits, usize num_hashes, u64 seed, u64 key, (usize) -> u64 read_word)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `num_bits`: usize (by value)
> - `num_hashes`: usize (by value)
> - `seed`: u64 (by value)
> - `key`: u64 (by value)
> - `read_word`: (usize) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::stream::bloom_filter_contains(num_bits, num_hashes, seed, key, read_word);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-bloom-filter-merge"></a>

> ## `bloom_filter_merge`

> Word-wise union of two same-size filters into an output (ascending word index, so deterministic). Word-wise union of two same-size filters into an output (ascending word index, so deterministic).  The union of two Bloom filters over the same parameters is their bit-union.

```valor
public i32 bloom_filter_merge(usize num_words, (usize) -> u64 read_a, (usize) -> u64 read_b, (usize, u64) -> void write_out)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `num_words`: usize (by value)
> - `write_out`: (usize) -> u64 read_a, (usize) -> u64 read_b, (usize, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::bloom_filter_merge(num_words, write_out);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-write-header"></a>

> ## `write_header`

> *Internal API*
>
> Write the fixed 8-word header.

```valor
void write_header(u64 kind, u64 p0, u64 p1, u64 p2, u64 p3, (usize, u64) -> void put)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u64 (by value)
> - `p0`: u64 (by value)
> - `p1`: u64 (by value)
> - `p2`: u64 (by value)
> - `p3`: u64 (by value)
> - `put`: (usize, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::stream::write_header(kind, p0, p1, p2, p3, put);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-check-header"></a>

> ## `check_header`

> *Internal API*
>
> Validate magic/version and confirm the expected kind. Validate magic/version and confirm the expected kind.  Returns OK, ERR_FORMAT (bad magic/kind or truncated header) or ERR_VERSION.

```valor
i32 check_header(usize word_count, u64 expected_kind, (usize) -> u64 get_word)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `word_count`: usize (by value)
> - `expected_kind`: u64 (by value)
> - `get_word`: (usize) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::check_header(word_count, expected_kind, get_word);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-count-min-sketch-serialize"></a>

> ## `count_min_sketch_serialize`

> Header (params: depth, width, seed) followed by depth*width counter words. Header (params: depth, width, seed) followed by depth*width counter words. The total word count is delivered through `receive_word_count`.

```valor
public i32 count_min_sketch_serialize(usize depth, usize width, u64 seed, (usize) -> u64 read_cell, usize word_capacity, (usize, u64) -> void put_word, (usize) -> void receive_word_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `depth`: usize (by value)
> - `width`: usize (by value)
> - `seed`: u64 (by value)
> - `usize`: (usize) -> u64 read_cell, usize word_capacity, ( (borrowed fn-ptr (callback))
> - `receive_word_count`: u64) -> void put_word, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::count_min_sketch_serialize(depth, width, seed, usize, receive_word_count);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-count-min-sketch-deserialize"></a>

> ## `count_min_sketch_deserialize`

> Validate the header, restore the counters into caller storage, and deliver the recovered (depth, width, seed) through `receive_params`. Validate the header, restore the counters into caller storage, and deliver the recovered (depth, width, seed) through `receive_params`.

```valor
public i32 count_min_sketch_deserialize(usize word_count, (usize) -> u64 get_word, usize cell_capacity, (usize, u64) -> void write_cell, (usize, usize, u64) -> void receive_params)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `word_count`: usize (by value)
> - `usize`: (usize) -> u64 get_word, usize cell_capacity, ( (borrowed fn-ptr (callback))
> - `receive_params`: u64) -> void write_cell, (usize, usize, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::count_min_sketch_deserialize(word_count, usize, receive_params);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-hyperloglog-serialize"></a>

> ## `hyperloglog_serialize`

> Header (param: precision) followed by 2^precision register words (one register per word for a version-stable layout). Header (param: precision) followed by 2^precision register words (one register per word for a version-stable layout).

```valor
public i32 hyperloglog_serialize(usize precision, (usize) -> u8 read_reg, usize word_capacity, (usize, u64) -> void put_word, (usize) -> void receive_word_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `precision`: usize (by value)
> - `usize`: (usize) -> u8 read_reg, usize word_capacity, ( (borrowed fn-ptr (callback))
> - `receive_word_count`: u64) -> void put_word, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::hyperloglog_serialize(precision, usize, receive_word_count);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-hyperloglog-deserialize"></a>

> ## `hyperloglog_deserialize`

> Validate the header, restore the registers, and deliver `precision`.

```valor
public i32 hyperloglog_deserialize(usize word_count, (usize) -> u64 get_word, usize reg_capacity, (usize, u8) -> void write_reg, (usize) -> void receive_precision)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `word_count`: usize (by value)
> - `usize`: (usize) -> u64 get_word, usize reg_capacity, ( (borrowed fn-ptr (callback))
> - `receive_precision`: u8) -> void write_reg, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::hyperloglog_deserialize(word_count, usize, receive_precision);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-bloom-filter-serialize"></a>

> ## `bloom_filter_serialize`

> Header (params: num_bits, num_hashes, seed) followed by the packed words.

```valor
public i32 bloom_filter_serialize(usize num_bits, usize num_hashes, u64 seed, (usize) -> u64 read_word, usize word_capacity, (usize, u64) -> void put_word, (usize) -> void receive_word_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `num_bits`: usize (by value)
> - `num_hashes`: usize (by value)
> - `seed`: u64 (by value)
> - `usize`: (usize) -> u64 read_word, usize word_capacity, ( (borrowed fn-ptr (callback))
> - `receive_word_count`: u64) -> void put_word, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::bloom_filter_serialize(num_bits, num_hashes, seed, usize, receive_word_count);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-bloom-filter-deserialize"></a>

> ## `bloom_filter_deserialize`

> Validate the header, restore the packed words, and deliver the recovered (num_bits, num_hashes, seed) through `receive_params`. Validate the header, restore the packed words, and deliver the recovered (num_bits, num_hashes, seed) through `receive_params`.

```valor
public i32 bloom_filter_deserialize(usize word_count, (usize) -> u64 get_word, usize word_capacity, (usize, u64) -> void write_word, (usize, usize, u64) -> void receive_params)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `word_count`: usize (by value)
> - `usize`: (usize) -> u64 get_word, usize word_capacity, ( (borrowed fn-ptr (callback))
> - `receive_params`: u64) -> void write_word, (usize, usize, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::bloom_filter_deserialize(word_count, usize, receive_params);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-ms-compare"></a>

> ## `ms_compare`

> *Internal API*
>
> Total order over two stream heads: the caller comparator, tie-broken by the smaller stream index so equal keys keep a stable, reproducible order. Total order over two stream heads: the caller comparator, tie-broken by the smaller stream index so equal keys keep a stable, reproducible order.

```valor
i32 ms_compare(usize sa, usize sb, (usize) -> usize read_cursor, (usize, usize, usize, usize) -> i32 compare)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `sa`: usize (by value)
> - `sb`: usize (by value)
> - `usize`: (usize) -> usize read_cursor, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `usize`: usize (by value)
> - `compare`: usize) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::ms_compare(sa, sb, usize, usize, usize, compare);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-ms-sift-down"></a>

> ## `ms_sift_down`

> *Internal API*
>
> Min-heap sift-down over the heap of active stream ids.

```valor
void ms_sift_down(usize size, usize root, (usize) -> usize read_heap, (usize, usize) -> void write_heap, (usize) -> usize read_cursor, (usize, usize, usize, usize) -> i32 compare)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `size`: usize (by value)
> - `root`: usize (by value)
> - `usize`: (usize) -> usize read_heap, ( (borrowed fn-ptr (callback))
> - `compare`: usize) -> void write_heap, (usize) -> usize read_cursor, (usize, usize, usize, usize) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::stream::ms_sift_down(size, root, usize, compare);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-merge-sorted-streams"></a>

> ## `merge_sorted_streams`

> k-way merge of `num_streams` individually sorted streams. k-way merge of `num_streams` individually sorted streams.  `stream_len(s)` is the length of stream s; `compare(sa, ia, sb, ib)` orders element ia of stream sa against element ib of stream sb (return < 0 / 0 / > 0).  Heads are held in a min-heap of stream ids; each pop emits emit(stream_id, elem_index) in global sorted order, ties broken by stream id (deterministic).  The heap and per- stream cursor workspaces must each hold `num_streams` entries.

```valor
public i32 merge_sorted_streams(usize num_streams, (usize) -> usize stream_len, (usize, usize, usize, usize) -> i32 compare, usize heap_capacity, (usize) -> usize read_heap, (usize, usize) -> void write_heap, (usize) -> usize read_cursor, (usize, usize) -> void write_cursor, (usize, usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `num_streams`: usize (by value)
> - `usize`: (usize) -> usize stream_len, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `usize`: usize (by value)
> - `emit`: usize) -> i32 compare, usize heap_capacity, (usize) -> usize read_heap, (usize, usize) -> void write_heap, (usize) -> usize read_cursor, (usize, usize) -> void write_cursor, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::merge_sorted_streams(num_streams, usize, usize, usize, emit);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-es-sift-down"></a>

> ## `es_sift_down`

> *Internal API*
>
> Ascending heap-sort of one run [start, start + count) via caller comparator and swap, used to form the sorted runs of an external sort. Ascending heap-sort of one run [start, start + count) via caller comparator and swap, used to form the sorted runs of an external sort.

```valor
void es_sift_down(usize start, usize count, usize root, (usize, usize) -> i32 compare_abs, (usize, usize) -> void swap)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `count`: usize (by value)
> - `root`: usize (by value)
> - `usize`: (usize, usize) -> i32 compare_abs, ( (borrowed fn-ptr (callback))
> - `swap`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::stream::es_sift_down(start, count, root, usize, swap);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-external-sort-run"></a>

> ## `external_sort_run`

> Sort a single block [start, start + count) in place with an O(count log count) heap sort, comparing and swapping through the caller's accessors. Sort a single block [start, start + count) in place with an O(count log count) heap sort, comparing and swapping through the caller's accessors.  This is the run-formation phase of an external sort.

```valor
public i32 external_sort_run(usize start, usize count, (usize, usize) -> i32 compare_abs, (usize, usize) -> void swap)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `count`: usize (by value)
> - `usize`: (usize, usize) -> i32 compare_abs, ( (borrowed fn-ptr (callback))
> - `swap`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::external_sort_run(start, count, usize, swap);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-es-run-len"></a>

> ## `es_run_len`

> *Internal API*
>
> Length of run r for n elements partitioned into runs of `run_size`.

```valor
usize es_run_len(usize r, usize run_size, usize n)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `r`: usize (by value)
> - `run_size`: usize (by value)
> - `n`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::stream::es_run_len(r, run_size, n);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-es-run-compare"></a>

> ## `es_run_compare`

> *Internal API*
>
> Total order over two run heads (absolute index = r * run_size + cursor(r)), tie-broken by run index for determinism. Total order over two run heads (absolute index = r * run_size + cursor(r)), tie-broken by run index for determinism.

```valor
i32 es_run_compare(usize a, usize b, usize run_size, (usize) -> usize read_cursor, (usize, usize) -> i32 compare_abs)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: usize (by value)
> - `b`: usize (by value)
> - `run_size`: usize (by value)
> - `usize`: (usize) -> usize read_cursor, ( (borrowed fn-ptr (callback))
> - `compare_abs`: usize) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::es_run_compare(a, b, run_size, usize, compare_abs);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-es-merge-sift-down"></a>

> ## `es_merge_sift_down`

> *Internal API*
>
> Min-heap sift-down over the heap of active run ids during the merge phase.

```valor
void es_merge_sift_down(usize size, usize root, usize run_size, (usize) -> usize read_heap, (usize, usize) -> void write_heap, (usize) -> usize read_cursor, (usize, usize) -> i32 compare_abs)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `size`: usize (by value)
> - `root`: usize (by value)
> - `run_size`: usize (by value)
> - `usize`: (usize) -> usize read_heap, ( (borrowed fn-ptr (callback))
> - `compare_abs`: usize) -> void write_heap, (usize) -> usize read_cursor, (usize, usize) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::stream::es_merge_sift_down(size, root, run_size, usize, compare_abs);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-external-sort"></a>

> ## `external_sort`

> A full external sort skeleton over n elements. A full external sort skeleton over n elements.  Phase one forms sorted runs of `run_size` in place (heap sort through compare_abs / swap).  Phase two k-way merges the run heads through a min-heap and emits the globally sorted absolute indices to `emit`.  Only the run heap and per-run cursors are resident, so the working set is bounded by the run count, not by n.  Output order is fully determined (run-index tie-break).

```valor
public i32 external_sort(usize n, usize run_size, (usize, usize) -> i32 compare_abs, (usize, usize) -> void swap, usize heap_capacity, (usize) -> usize read_heap, (usize, usize) -> void write_heap, (usize) -> usize read_cursor, (usize, usize) -> void write_cursor, (usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `run_size`: usize (by value)
> - `usize`: (usize, usize) -> i32 compare_abs, ( (borrowed fn-ptr (callback))
> - `emit`: usize) -> void swap, usize heap_capacity, (usize) -> usize read_heap, (usize, usize) -> void write_heap, (usize) -> usize read_cursor, (usize, usize) -> void write_cursor, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::external_sort(n, run_size, usize, emit);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-external-group-by"></a>

> ## `external_group_by`

> Over a stream already ordered by key, emit each maximal run of equal keys as emit_group(start, count). Over a stream already ordered by key, emit each maximal run of equal keys as emit_group(start, count).  `key_compare(i, j)` returns 0 when the keys at i and j are equal.  Bounded O(1) memory; groups are emitted in stream order, so the result is deterministic for a given (sorted) input.

```valor
public i32 external_group_by(usize n, (usize, usize) -> i32 key_compare, (usize, usize) -> void emit_group)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `usize`: (usize, usize) -> i32 key_compare, ( (borrowed fn-ptr (callback))
> - `emit_group`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::stream::external_group_by(n, usize, emit_group);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-external-reduce"></a>

> ## `external_reduce`

> Deterministic left fold over n elements: acc starts at `initial` and is combined left to right as acc = combine(acc, i). Deterministic left fold over n elements: acc starts at `initial` and is combined left to right as acc = combine(acc, i).  The reducer reads element i itself, so no value is copied into the module.  O(1) resident memory; the fixed traversal order makes the reduction bit-reproducible.

```valor
public f64 external_reduce(usize n, f64 initial, (f64, usize) -> f64 combine)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `initial`: f64 (by value)
> - `combine`: (f64, usize) -> f64 (borrowed fn-ptr (callback))

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::stream::external_reduce(n, initial, combine);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

<a id="fn-external-reduce-u64"></a>

> ## `external_reduce_u64`

> Integer-valued companion to external_reduce for exact (overflow-defined) folds such as counts and checksums. Integer-valued companion to external_reduce for exact (overflow-defined) folds such as counts and checksums.

```valor
public u64 external_reduce_u64(usize n, u64 initial, (u64, usize) -> u64 combine)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `initial`: u64 (by value)
> - `combine`: (u64, usize) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::stream::external_reduce_u64(n, initial, combine);
> ```

> ### SEE ALSO
>
> - [`std::stream::magnitude`](#fn-magnitude)
> - [`std::stream::pow2_usize`](#fn-pow2-usize)
> - [`std::stream::pow2_u64`](#fn-pow2-u64)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Functional tools](STD-FUNCTOOLS-DOC.md) · [Table of contents](standard-library/README.md) · [Strings →](STD-STRING-DOC.md)
