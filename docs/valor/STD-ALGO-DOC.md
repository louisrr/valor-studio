<!-- stdlib-reference-style: modern -->
> # `std::algo`

`std::algo` general algorithms.

[Standard library](standard-library/README.md) / [Algorithms and computing](standard-library/README.md#algorithms-and-computing) / **Algorithms**

> **Source:** `stdlib/std/algo.valor` · **Routines:** 66 public

## Routines

<details>
<summary>Browse all 66 routines</summary>

- [`memoize`](#fn-memoize)
- [`recurse`](#fn-recurse)
- [`base_case`](#fn-base-case)
- [`partition_copy`](#fn-partition-copy)
- [`retry`](#fn-retry)
- [`reduce_accumulate`](#fn-reduce-accumulate)
- [`backoff`](#fn-backoff)
- [`sliding_window`](#fn-sliding-window)
- [`search_bound`](#fn-search-bound)
- [`scan_prefix`](#fn-scan-prefix)
- [`select_k`](#fn-select-k)
- [`chunk_by`](#fn-chunk-by)
- [`zip_combine`](#fn-zip-combine)
- [`binary_predicate_diff`](#fn-binary-predicate-diff)
- [`sampling_reservoir`](#fn-sampling-reservoir)
- [`run_length_encode`](#fn-run-length-encode)
- [`for_each`](#fn-for-each)
- [`for_each_indexed`](#fn-for-each-indexed)
- [`visit`](#fn-visit)
- [`enumerate`](#fn-enumerate)
- [`find`](#fn-find)
- [`find_if`](#fn-find-if)
- [`find_last`](#fn-find-last)
- [`contains`](#fn-contains)
- [`count`](#fn-count)
- [`count_if`](#fn-count-if)
- [`equal`](#fn-equal)
- [`mismatch`](#fn-mismatch)
- [`lexicographical_compare`](#fn-lexicographical-compare)
- [`starts_with`](#fn-starts-with)
- [`ends_with`](#fn-ends-with)
- [`all_of`](#fn-all-of)
- [`any_of`](#fn-any-of)
- [`none_of`](#fn-none-of)
- [`transform`](#fn-transform)
- [`transform_in_place`](#fn-transform-in-place)
- [`zip_transform`](#fn-zip-transform)
- [`generate`](#fn-generate)
- [`fill`](#fn-fill)
- [`copy`](#fn-copy)
- [`copy_n`](#fn-copy-n)
- [`copy_if`](#fn-copy-if)
- [`move`](#fn-move)
- [`move_backward`](#fn-move-backward)
- [`remove`](#fn-remove)
- [`remove_if`](#fn-remove-if)
- [`unique`](#fn-unique)
- [`deduplicate_sorted`](#fn-deduplicate-sorted)
- [`partition`](#fn-partition)
- [`stable_partition`](#fn-stable-partition)
- [`partition_point`](#fn-partition-point)
- [`reverse`](#fn-reverse)
- [`rotate`](#fn-rotate)
- [`swap_ranges`](#fn-swap-ranges)
- [`shift_left`](#fn-shift-left)
- [`shift_right`](#fn-shift-right)
- [`lower_bound`](#fn-lower-bound)
- [`upper_bound`](#fn-upper-bound)
- [`equal_range`](#fn-equal-range)
- [`binary_search`](#fn-binary-search)
- [`min`](#fn-min)
- [`max`](#fn-max)
- [`minmax`](#fn-minmax)
- [`argmin`](#fn-argmin)
- [`argmax`](#fn-argmax)
- [`clamp`](#fn-clamp)

</details>

## API reference

<a id="fn-memoize"></a>

> ## `memoize`

> Provides the module's **memoize** operation. Returns `i32`.

```valor
public i32 memoize((i32) -> i32 operation, std::la::TensorViewMut<'a, 1, i32> keys, std::la::TensorViewMut<'b, 1, i32> values, std::la::TensorViewMut<'c, 1, i32> state, i32 capacity, i32 input)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: (i32) -> i32 operation, std::la::TensorViewMut<' (borrowed fn-ptr (callback))
> - `1`: 1 (by value)
> - `b`: i32> keys, std::la::TensorViewMut<' (by value)
> - `1`: 1 (by value)
> - `c`: i32> values, std::la::TensorViewMut<' (by value)
> - `1`: 1 (by value)
> - `input`: i32> state, i32 capacity, i32 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::memoize(a, 1, b, 1, c, 1, input);
> ```

> ### SEE ALSO
>
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)
> - [`std::algo::partition_copy`](#fn-partition-copy)

<a id="fn-recurse"></a>

> ## `recurse`

> Encapsulates structured recursive execution, managing call-stack state or guaranteeing Tail-Call Optimization (TCO) loop lowering at the IR level. Encapsulates structured recursive execution, managing call-stack state or guaranteeing Tail-Call Optimization (TCO) loop lowering at the IR level. Primary use: Safe recursion without stack-overflow risks in deterministic environments.

```valor
public i32 recurse((i32, i32) -> i32 step, i32 initial, i32 iterations)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `iterations`: (i32, i32) -> i32 step, i32 initial, i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::recurse(iterations);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::base_case`](#fn-base-case)
> - [`std::algo::partition_copy`](#fn-partition-copy)

<a id="fn-base-case"></a>

> ## `base_case`

> Standardizes terminal conditions and boundary guards for recursive or iterative workloads, returning an explicit boundary signal or fallback value. Standardizes terminal conditions and boundary guards for recursive or iterative workloads, returning an explicit boundary signal or fallback value. Primary use: Preventing infinite loops and enforcing constant-time termination bounds.

```valor
public i32 base_case(bool terminal, i32 fallback, (i32) -> i32 operation, i32 input)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `terminal`: bool (by value)
> - `fallback`: i32 (by value)
> - `input`: (i32) -> i32 operation, i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::base_case(terminal, fallback, input);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::partition_copy`](#fn-partition-copy)

<a id="fn-partition-copy"></a>

> ## `partition_copy`

> Provides the module's **partition copy** operation. Returns `i32`.

```valor
public i32 partition_copy(std::la::TensorView<'a, 1, i32> input, i32 length, (i32) -> bool predicate, std::la::TensorViewMut<'b, 1, i32> matching, std::la::TensorViewMut<'c, 1, i32> remaining, std::la::TensorViewMut<'d, 1, i32> counts)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `input`: std::la::TensorView<'a, 1, i32> (by value)
> - `length`: i32 (by value)
> - `b`: (i32) -> bool predicate, std::la::TensorViewMut<' (borrowed fn-ptr (callback))
> - `1`: 1 (by value)
> - `c`: i32> matching, std::la::TensorViewMut<' (by value)
> - `1`: 1 (by value)
> - `d`: i32> remaining, std::la::TensorViewMut<' (by value)
> - `1`: 1 (by value)
> - `counts`: i32> (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::partition_copy(input, length, b, 1, c, 1, d, 1, counts);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-retry"></a>

> ## `retry`

> Executes an operation repeatedly up to N times until it succeeds or hits a terminal failure condition. Executes an operation repeatedly up to N times until it succeeds or hits a terminal failure condition. Primary use: Resilience logic for I/O, network transactions, and hardware polling.

```valor
public i32 retry((i32) -> i32 operation, (i32) -> bool succeeded, i32 attempts)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `attempts`: (i32) -> i32 operation, (i32) -> bool succeeded, i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::retry(attempts);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-reduce-accumulate"></a>

> ## `reduce_accumulate`

> Provides the module's **reduce accumulate** operation. Returns `i32`.

```valor
public i32 reduce_accumulate(std::la::TensorView<'a, 1, i32> input, i32 length, i32 seed, (i32, i32) -> i32 combine)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `input`: std::la::TensorView<'a, 1, i32> (by value)
> - `length`: i32 (by value)
> - `seed`: i32 (by value)
> - `combine`: (i32, i32) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::reduce_accumulate(input, length, seed, combine);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-backoff"></a>

> ## `backoff`

> Manages CPU yield and delay timing strategies between execution attempts (e.g., constant, linear, or exponential with jitter). Manages CPU yield and delay timing strategies between execution attempts (e.g., constant, linear, or exponential with jitter). Primary use: Preventing CPU pipeline thrashing and bus contention in busy-wait loops.

```valor
public i32 backoff(i32 strategy, i32 attempt, i32 base_delay, i32 maximum_delay, i32 jitter)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `strategy`: i32 (by value)
> - `attempt`: i32 (by value)
> - `base_delay`: i32 (by value)
> - `maximum_delay`: i32 (by value)
> - `jitter`: i32 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::backoff(strategy, attempt, base_delay, maximum_delay, jitter);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-sliding-window"></a>

> ## `sliding_window`

> Provides the module's **sliding window** operation. Returns `i32`.

```valor
public i32 sliding_window(std::la::TensorView<'a, 1, i32> input, i32 length, i32 width, i32 stride, std::la::TensorViewMut<'b, 1, i32> output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `input`: std::la::TensorView<'a, 1, i32> (by value)
> - `length`: i32 (by value)
> - `width`: i32 (by value)
> - `stride`: i32 (by value)
> - `output`: std::la::TensorViewMut<'b, 1, i32> (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::sliding_window(input, length, width, stride, output);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-search-bound"></a>

> ## `search_bound`

> Provides the module's **search bound** operation. Returns `i32`.

```valor
public i32 search_bound(std::la::TensorView<'a, 1, i32> input, i32 length, i32 target, bool require_exact)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `input`: std::la::TensorView<'a, 1, i32> (by value)
> - `length`: i32 (by value)
> - `target`: i32 (by value)
> - `require_exact`: bool (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::search_bound(input, length, target, require_exact);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-scan-prefix"></a>

> ## `scan_prefix`

> Provides the module's **scan prefix** operation. Returns `i32`.

```valor
public i32 scan_prefix(std::la::TensorView<'a, 1, i32> input, i32 length, i32 seed, (i32, i32) -> i32 combine, std::la::TensorViewMut<'b, 1, i32> output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `input`: std::la::TensorView<'a, 1, i32> (by value)
> - `length`: i32 (by value)
> - `seed`: i32 (by value)
> - `b`: (i32, i32) -> i32 combine, std::la::TensorViewMut<' (borrowed fn-ptr (callback))
> - `1`: 1 (by value)
> - `output`: i32> (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::scan_prefix(input, length, seed, b, 1, output);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-select-k"></a>

> ## `select_k`

> Provides the module's **select k** operation. Returns `i32`.

```valor
public i32 select_k(std::la::TensorView<'a, 1, i32> input, i32 length, i32 k, std::la::TensorViewMut<'b, 1, i32> scratch)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `input`: std::la::TensorView<'a, 1, i32> (by value)
> - `length`: i32 (by value)
> - `k`: i32 (by value)
> - `scratch`: std::la::TensorViewMut<'b, 1, i32> (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::select_k(input, length, k, scratch);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-chunk-by"></a>

> ## `chunk_by`

> Provides the module's **chunk by** operation. Returns `i32`.

```valor
public i32 chunk_by(std::la::TensorView<'a, 1, i32> input, i32 length, (i32, i32) -> bool adjacent, std::la::TensorViewMut<'b, 1, i32> starts, std::la::TensorViewMut<'c, 1, i32> lengths)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `input`: std::la::TensorView<'a, 1, i32> (by value)
> - `length`: i32 (by value)
> - `b`: (i32, i32) -> bool adjacent, std::la::TensorViewMut<' (borrowed fn-ptr (callback))
> - `1`: 1 (by value)
> - `c`: i32> starts, std::la::TensorViewMut<' (by value)
> - `1`: 1 (by value)
> - `lengths`: i32> (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::chunk_by(input, length, b, 1, c, 1, lengths);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-zip-combine"></a>

> ## `zip_combine`

> Provides the module's **zip combine** operation. Returns `i32`.

```valor
public i32 zip_combine(std::la::TensorView<'a, 1, i32> left, i32 left_length, std::la::TensorView<'b, 1, i32> right, i32 right_length, (i32, i32) -> i32 combine, std::la::TensorViewMut<'c, 1, i32> output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: std::la::TensorView<'a, 1, i32> (by value)
> - `left_length`: i32 (by value)
> - `right`: std::la::TensorView<'b, 1, i32> (by value)
> - `right_length`: i32 (by value)
> - `c`: (i32, i32) -> i32 combine, std::la::TensorViewMut<' (borrowed fn-ptr (callback))
> - `1`: 1 (by value)
> - `output`: i32> (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::zip_combine(left, left_length, right, right_length, c, 1, output);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-binary-predicate-diff"></a>

> ## `binary_predicate_diff`

> Provides the module's **binary predicate diff** operation. Returns `i32`.

```valor
public i32 binary_predicate_diff( std::la::TensorView<'a, 1, i32> left, i32 left_length, std::la::TensorView<'b, 1, i32> right, i32 right_length, (i32, i32) -> bool less, std::la::TensorViewMut<'c, 1, i32> both, std::la::TensorViewMut<'d, 1, i32> left_only, std::la::TensorViewMut<'e, 1, i32> right_only, std::la::TensorViewMut<'f, 1, i32> counts)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: std::la::TensorView<'a, 1, i32> (by value)
> - `left_length`: i32 (by value)
> - `right`: std::la::TensorView<'b, 1, i32> (by value)
> - `right_length`: i32 (by value)
> - `c`: (i32, i32) -> bool less, std::la::TensorViewMut<' (borrowed fn-ptr (callback))
> - `1`: 1 (by value)
> - `d`: i32> both, std::la::TensorViewMut<' (by value)
> - `1`: 1 (by value)
> - `e`: i32> left_only, std::la::TensorViewMut<' (by value)
> - `1`: 1 (by value)
> - `f`: i32> right_only, std::la::TensorViewMut<' (by value)
> - `1`: 1 (by value)
> - `counts`: i32> (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::binary_predicate_diff(left, left_length, right, right_length, c, 1, d, 1, e, 1, f, 1, counts);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-sampling-reservoir"></a>

> ## `sampling_reservoir`

> Provides the module's **sampling reservoir** operation. Returns `i32`.

```valor
public i32 sampling_reservoir(std::la::TensorView<'a, 1, i32> input, i32 length, i32 k, i64 seed, std::la::TensorViewMut<'b, 1, i32> sample)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `input`: std::la::TensorView<'a, 1, i32> (by value)
> - `length`: i32 (by value)
> - `k`: i32 (by value)
> - `seed`: i64 (by value)
> - `sample`: std::la::TensorViewMut<'b, 1, i32> (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::sampling_reservoir(input, length, k, seed, sample);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-run-length-encode"></a>

> ## `run_length_encode`

> Provides the module's **run length encode** operation. Returns `i32`.

```valor
public i32 run_length_encode(std::la::TensorView<'a, 1, i32> input, i32 length, std::la::TensorViewMut<'b, 1, i32> values, std::la::TensorViewMut<'c, 1, i32> counts)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `input`: std::la::TensorView<'a, 1, i32> (by value)
> - `length`: i32 (by value)
> - `values`: std::la::TensorViewMut<'b, 1, i32> (by value)
> - `counts`: std::la::TensorViewMut<'c, 1, i32> (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::run_length_encode(input, length, values, counts);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-for-each"></a>

> ## `for_each`

> Provides the module's **for each** operation. Returns `i32`.

```valor
public i32 for_each(usize length, (usize) -> T read, (T) -> void operation)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `operation`: (usize) -> T read, (T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::for_each(length, operation);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-for-each-indexed"></a>

> ## `for_each_indexed`

> Provides the module's **for each indexed** operation. Returns `i32`.

```valor
public i32 for_each_indexed(usize length, (usize) -> T read, (usize, T) -> void operation)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `usize`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `operation`: T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::for_each_indexed(length, usize, operation);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-visit"></a>

> ## `visit`

> Visits logical positions without forcing an element load. Visits logical positions without forcing an element load.  This is the lowest-level traversal primitive for sparse, segmented, or computed views.

```valor
public i32 visit(usize length, (usize) -> void visitor)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `visitor`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::visit(length, visitor);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-enumerate"></a>

> ## `enumerate`

> Provides the module's **enumerate** operation. Returns `i32`.

```valor
public i32 enumerate(usize length, (usize) -> T read, (usize, T) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `usize`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `emit`: T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::enumerate(length, usize, emit);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-find"></a>

> ## `find`

> Provides the module's **find** operation. Returns `usize`.

```valor
public usize find(usize length, (usize) -> T read, T value, (T, T) -> bool equal_values)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `T`: (usize) -> T read, T value, ( (borrowed fn-ptr (callback))
> - `equal_values`: T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::find(length, T, equal_values);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-find-if"></a>

> ## `find_if`

> Provides the module's **find if** operation. Returns `usize`.

```valor
public usize find_if(usize length, (usize) -> T read, (T) -> bool predicate)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `predicate`: (usize) -> T read, (T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::find_if(length, predicate);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-find-last"></a>

> ## `find_last`

> Provides the module's **find last** operation. Returns `usize`.

```valor
public usize find_last(usize length, (usize) -> T read, T value, (T, T) -> bool equal_values)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `T`: (usize) -> T read, T value, ( (borrowed fn-ptr (callback))
> - `equal_values`: T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::find_last(length, T, equal_values);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-contains"></a>

> ## `contains`

> Provides the module's **contains** operation. Returns `bool`.

```valor
public bool contains(usize length, (usize) -> T read, T value, (T, T) -> bool equal_values)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `T`: (usize) -> T read, T value, ( (borrowed fn-ptr (callback))
> - `equal_values`: T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::algo::contains(length, T, equal_values);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-count"></a>

> ## `count`

> Provides the module's **count** operation. Returns `usize`.

```valor
public usize count(usize length, (usize) -> T read, T value, (T, T) -> bool equal_values)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `T`: (usize) -> T read, T value, ( (borrowed fn-ptr (callback))
> - `equal_values`: T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::count(length, T, equal_values);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-count-if"></a>

> ## `count_if`

> Provides the module's **count if** operation. Returns `usize`.

```valor
public usize count_if(usize length, (usize) -> T read, (T) -> bool predicate)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `predicate`: (usize) -> T read, (T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::count_if(length, predicate);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-equal"></a>

> ## `equal`

> Provides the module's **equal** operation. Returns `bool`.

```valor
public bool equal(usize left_length, (usize) -> T read_left, usize right_length, (usize) -> T read_right, (T, T) -> bool equal_values)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_length`: usize (by value)
> - `equal_values`: (usize) -> T read_left, usize right_length, (usize) -> T read_right, (T, T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::algo::equal(left_length, equal_values);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-mismatch"></a>

> ## `mismatch`

> Provides the module's **mismatch** operation. Returns `usize`.

```valor
public usize mismatch(usize left_length, (usize) -> T read_left, usize right_length, (usize) -> T read_right, (T, T) -> bool equal_values)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_length`: usize (by value)
> - `equal_values`: (usize) -> T read_left, usize right_length, (usize) -> T read_right, (T, T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::mismatch(left_length, equal_values);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-lexicographical-compare"></a>

> ## `lexicographical_compare`

> Provides the module's **lexicographical compare** operation. Returns `bool`.

```valor
public bool lexicographical_compare( usize left_length, (usize) -> T read_left, usize right_length, (usize) -> T read_right, (T, T) -> bool less)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_length`: usize (by value)
> - `less`: (usize) -> T read_left, usize right_length, (usize) -> T read_right, (T, T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::algo::lexicographical_compare(left_length, less);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-starts-with"></a>

> ## `starts_with`

> Provides the module's **starts with** operation. Returns `bool`.

```valor
public bool starts_with(usize length, (usize) -> T read, usize prefix_length, (usize) -> T read_prefix, (T, T) -> bool equal_values)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `equal_values`: (usize) -> T read, usize prefix_length, (usize) -> T read_prefix, (T, T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::algo::starts_with(length, equal_values);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-ends-with"></a>

> ## `ends_with`

> Provides the module's **ends with** operation. Returns `bool`.

```valor
public bool ends_with(usize length, (usize) -> T read, usize suffix_length, (usize) -> T read_suffix, (T, T) -> bool equal_values)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `equal_values`: (usize) -> T read, usize suffix_length, (usize) -> T read_suffix, (T, T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::algo::ends_with(length, equal_values);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-all-of"></a>

> ## `all_of`

> Provides the module's **all of** operation. Returns `bool`.

```valor
public bool all_of(usize length, (usize) -> T read, (T) -> bool predicate)
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
> bool result = std::algo::all_of(length, predicate);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-any-of"></a>

> ## `any_of`

> Provides the module's **any of** operation. Returns `bool`.

```valor
public bool any_of(usize length, (usize) -> T read, (T) -> bool predicate)
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
> bool result = std::algo::any_of(length, predicate);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-none-of"></a>

> ## `none_of`

> Provides the module's **none of** operation. Returns `bool`.

```valor
public bool none_of(usize length, (usize) -> T read, (T) -> bool predicate)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `predicate`: (usize) -> T read, (T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::algo::none_of(length, predicate);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-transform"></a>

> ## `transform`

> Provides the module's **transform** operation. Returns `usize`.

```valor
public usize transform(usize length, (usize) -> Input read, (Input) -> Output operation, (usize, Output) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `write`: (usize) -> Input read, (Input) -> Output operation, (usize, Output) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::transform(length, write);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-transform-in-place"></a>

> ## `transform_in_place`

> Provides the module's **transform in place** operation. Returns `usize`.

```valor
public usize transform_in_place(usize length, (usize) -> T read, (T) -> T operation, (usize, T) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `write`: (usize) -> T read, (T) -> T operation, (usize, T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::transform_in_place(length, write);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-zip-transform"></a>

> ## `zip_transform`

> Provides the module's **zip transform** operation. Returns `usize`.

```valor
public usize zip_transform( usize left_length, (usize) -> Left read_left, usize right_length, (usize) -> Right read_right, (Left, Right) -> Output operation, (usize, Output) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_length`: usize (by value)
> - `write`: (usize) -> Left read_left, usize right_length, (usize) -> Right read_right, (Left, Right) -> Output operation, (usize, Output) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::zip_transform(left_length, write);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-generate"></a>

> ## `generate`

> Provides the module's **generate** operation. Returns `usize`.

```valor
public usize generate(usize length, (usize) -> T generator, (usize, T) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `usize`: (usize) -> T generator, ( (borrowed fn-ptr (callback))
> - `write`: T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::generate(length, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-fill"></a>

> ## `fill`

> Provides the module's **fill** operation. Returns `usize`.

```valor
public usize fill(usize length, T value, (usize, T) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `value`: T (by value)
> - `write`: (usize, T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::fill(length, value, write);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-copy"></a>

> ## `copy`

> Provides the module's **copy** operation. Returns `usize`.

```valor
public usize copy(usize source_length, (usize) -> T read, usize destination_capacity, (usize, T) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `source_length`: usize (by value)
> - `usize`: (usize) -> T read, usize destination_capacity, ( (borrowed fn-ptr (callback))
> - `write`: T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::copy(source_length, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-copy-n"></a>

> ## `copy_n`

> Provides the module's **copy n** operation. Returns `usize`.

```valor
public usize copy_n(usize count_to_copy, (usize) -> T read, usize destination_capacity, (usize, T) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count_to_copy`: usize (by value)
> - `usize`: (usize) -> T read, usize destination_capacity, ( (borrowed fn-ptr (callback))
> - `write`: T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::copy_n(count_to_copy, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-copy-if"></a>

> ## `copy_if`

> Provides the module's **copy if** operation. Returns `usize`.

```valor
public usize copy_if(usize source_length, (usize) -> T read, (T) -> bool predicate, usize destination_capacity, (usize, T) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `source_length`: usize (by value)
> - `write`: (usize) -> T read, (T) -> bool predicate, usize destination_capacity, (usize, T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::copy_if(source_length, write);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-move"></a>

> ## `move`

> Provides the module's **move** operation. Returns `usize`.

```valor
public usize move(usize source_length, (usize) -> T take, usize destination_capacity, (usize, T) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `source_length`: usize (by value)
> - `usize`: (usize) -> T take, usize destination_capacity, ( (borrowed fn-ptr (callback))
> - `write`: T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::move(source_length, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-move-backward"></a>

> ## `move_backward`

> Provides the module's **move backward** operation. Returns `usize`.

```valor
public usize move_backward(usize source_length, (usize) -> T take, usize destination_capacity, (usize, T) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `source_length`: usize (by value)
> - `usize`: (usize) -> T take, usize destination_capacity, ( (borrowed fn-ptr (callback))
> - `write`: T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::move_backward(source_length, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-remove"></a>

> ## `remove`

> Provides the module's **remove** operation. Returns `usize`.

```valor
public usize remove(usize length, (usize) -> T read, T value, (T, T) -> bool equal_values, (usize, T) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `T`: (usize) -> T read, T value, ( (borrowed fn-ptr (callback))
> - `write`: T) -> bool equal_values, (usize, T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::remove(length, T, write);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-remove-if"></a>

> ## `remove_if`

> Provides the module's **remove if** operation. Returns `usize`.

```valor
public usize remove_if(usize length, (usize) -> T read, (T) -> bool predicate, (usize, T) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `write`: (usize) -> T read, (T) -> bool predicate, (usize, T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::remove_if(length, write);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-unique"></a>

> ## `unique`

> Provides the module's **unique** operation. Returns `usize`.

```valor
public usize unique(usize length, (usize) -> T read, (T, T) -> bool equal_values, (usize, T) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `T`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `write`: T) -> bool equal_values, (usize, T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::unique(length, T, write);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-deduplicate-sorted"></a>

> ## `deduplicate_sorted`

> Provides the module's **deduplicate sorted** operation. Returns `usize`.

```valor
public usize deduplicate_sorted(usize length, (usize) -> T read, (T, T) -> bool equal_values, (usize, T) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `T`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `write`: T) -> bool equal_values, (usize, T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::deduplicate_sorted(length, T, write);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-partition"></a>

> ## `partition`

> Provides the module's **partition** operation. Returns `usize`.

```valor
public usize partition(usize length, (usize) -> T read, (T) -> bool predicate, (usize, T) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `write`: (usize) -> T read, (T) -> bool predicate, (usize, T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::partition(length, write);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-stable-partition"></a>

> ## `stable_partition`

> Provides the module's **stable partition** operation. Returns `usize`.

```valor
public usize stable_partition(usize length, (usize) -> T read, (T) -> bool predicate, (usize, T) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `write`: (usize) -> T read, (T) -> bool predicate, (usize, T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::stable_partition(length, write);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-partition-point"></a>

> ## `partition_point`

> Provides the module's **partition point** operation. Returns `usize`.

```valor
public usize partition_point(usize length, (usize) -> T read, (T) -> bool predicate)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `predicate`: (usize) -> T read, (T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::partition_point(length, predicate);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-reverse"></a>

> ## `reverse`

> Provides the module's **reverse** operation. Returns `i32`.

```valor
public i32 reverse(usize length, (usize) -> T read, (usize, T) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `usize`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `write`: T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::reverse(length, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-rotate"></a>

> ## `rotate`

> Provides the module's **rotate** operation. Returns `i32`.

```valor
public i32 rotate(usize length, usize middle, (usize) -> T read, (usize, T) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `middle`: usize (by value)
> - `usize`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `write`: T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::rotate(length, middle, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-swap-ranges"></a>

> ## `swap_ranges`

> Provides the module's **swap ranges** operation. Returns `usize`.

```valor
public usize swap_ranges(usize left_length, (usize) -> T read_left, (usize, T) -> void write_left, usize right_length, (usize) -> T read_right, (usize, T) -> void write_right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_length`: usize (by value)
> - `usize`: (usize) -> T read_left, ( (borrowed fn-ptr (callback))
> - `write_right`: T) -> void write_left, usize right_length, (usize) -> T read_right, (usize, T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::swap_ranges(left_length, usize, write_right);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-shift-left"></a>

> ## `shift_left`

> Provides the module's **shift left** operation. Returns `usize`.

```valor
public usize shift_left(usize length, usize distance, (usize) -> T read, (usize, T) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `distance`: usize (by value)
> - `usize`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `write`: T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::shift_left(length, distance, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-shift-right"></a>

> ## `shift_right`

> Provides the module's **shift right** operation. Returns `usize`.

```valor
public usize shift_right(usize length, usize distance, (usize) -> T read, (usize, T) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `distance`: usize (by value)
> - `usize`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `write`: T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::shift_right(length, distance, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-lower-bound"></a>

> ## `lower_bound`

> Provides the module's **lower bound** operation. Returns `usize`.

```valor
public usize lower_bound(usize length, (usize) -> T read, T value, (T, T) -> bool less)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `T`: (usize) -> T read, T value, ( (borrowed fn-ptr (callback))
> - `less`: T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::lower_bound(length, T, less);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-upper-bound"></a>

> ## `upper_bound`

> Provides the module's **upper bound** operation. Returns `usize`.

```valor
public usize upper_bound(usize length, (usize) -> T read, T value, (T, T) -> bool less)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `T`: (usize) -> T read, T value, ( (borrowed fn-ptr (callback))
> - `less`: T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::algo::upper_bound(length, T, less);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-equal-range"></a>

> ## `equal_range`

> Provides the module's **equal range** operation. Returns `i32`.

```valor
public i32 equal_range(usize length, (usize) -> T read, T value, (T, T) -> bool less, (usize, usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `T`: (usize) -> T read, T value, ( (borrowed fn-ptr (callback))
> - `receive`: T) -> bool less, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::equal_range(length, T, receive);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-binary-search"></a>

> ## `binary_search`

> Provides the module's **binary search** operation. Returns `bool`.

```valor
public bool binary_search(usize length, (usize) -> T read, T value, (T, T) -> bool less)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `T`: (usize) -> T read, T value, ( (borrowed fn-ptr (callback))
> - `less`: T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::algo::binary_search(length, T, less);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

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
> i32 result = std::algo::min(length, T, receive);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

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
> i32 result = std::algo::max(length, T, receive);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

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
> i32 result = std::algo::minmax(length, T, receive);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

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
> usize result = std::algo::argmin(length, T, less);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

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
> usize result = std::algo::argmax(length, T, less);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

<a id="fn-clamp"></a>

> ## `clamp`

> Provides the module's **clamp** operation. Returns `T`.

```valor
public T clamp(T value, T lower, T upper, (T, T) -> bool less)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: T (by value)
> - `lower`: T (by value)
> - `upper`: T (by value)
> - `less`: (T, T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (T)

> ### EXAMPLE
>
> ```valor
> T result = std::algo::clamp(value, lower, upper, less);
> ```

> ### SEE ALSO
>
> - [`std::algo::memoize`](#fn-memoize)
> - [`std::algo::recurse`](#fn-recurse)
> - [`std::algo::base_case`](#fn-base-case)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← String verification study](STD-STRING-IEEE.md) · [Table of contents](standard-library/README.md) · [Sorting →](STD-ALGO-SORT-DOC.md)
