<!-- stdlib-reference-style: modern -->
> # `std::algo::sort`

`std::algo::sort` sorting and ordering algorithms.

[Standard library](standard-library/README.md) / [Algorithms and computing](standard-library/README.md#algorithms-and-computing) / **Sorting**

> **Source:** `stdlib/std/algo/sort.valor` · **Routines:** 19 public · 2 internal

## Routines

<details>
<summary>Browse all 21 routines</summary>

- [`valid_order`](#fn-valid-order)
- [`validate_comparator`](#fn-validate-comparator)
- [`canonical_nan_order`](#fn-canonical-nan-order)
- [`canonical_nan_order_f32`](#fn-canonical-nan-order-f32)
- [`total_order_f32`](#fn-total-order-f32)
- [`total_order_f64`](#fn-total-order-f64)
- [`insertion_sort`](#fn-insertion-sort)
- [`binary_insertion_sort`](#fn-binary-insertion-sort)
- [`sift_down`](#fn-sift-down)
- [`heap_sort_range`](#fn-heap-sort-range)
- [`heap_sort`](#fn-heap-sort)
- [`introsort`](#fn-introsort)
- [`stable_merge_sort`](#fn-stable-merge-sort)
- [`radix_sort_u32`](#fn-radix-sort-u32)
- [`radix_sort_u64`](#fn-radix-sort-u64)
- [`counting_sort`](#fn-counting-sort)
- [`nth_element`](#fn-nth-element)
- [`partial_sort`](#fn-partial-sort)
- [`top_k`](#fn-top-k)
- [`stable_top_k`](#fn-stable-top-k)
- [`stable_sort`](#fn-stable-sort)

</details>

## API reference

<a id="fn-valid-order"></a>

> ## `valid_order`

> Provides the module's **valid order** operation. Returns `bool`.

```valor
public bool valid_order(i8 forward, i8 reverse)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `forward`: i8 (by value)
> - `reverse`: i8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::algo::sort::valid_order(forward, reverse);
> ```

> ### SEE ALSO
>
> - [`std::algo::sort::validate_comparator`](#fn-validate-comparator)
> - [`std::algo::sort::canonical_nan_order`](#fn-canonical-nan-order)
> - [`std::algo::sort::canonical_nan_order_f32`](#fn-canonical-nan-order-f32)

<a id="fn-validate-comparator"></a>

> ## `validate_comparator`

> Provides the module's **validate comparator** operation. Returns `i32`.

```valor
public i32 validate_comparator(usize length, (usize) -> T read, (T, T) -> i8 compare)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `T`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `compare`: T) -> i8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::sort::validate_comparator(length, T, compare);
> ```

> ### SEE ALSO
>
> - [`std::algo::sort::valid_order`](#fn-valid-order)
> - [`std::algo::sort::canonical_nan_order`](#fn-canonical-nan-order)
> - [`std::algo::sort::canonical_nan_order_f32`](#fn-canonical-nan-order-f32)

<a id="fn-canonical-nan-order"></a>

> ## `canonical_nan_order`

> Canonical floating order used by this module: -infinity < finite negatives < -0 < +0 < finite positives < +infinity < NaN. Canonical floating order used by this module: -infinity < finite negatives < -0 < +0 < finite positives < +infinity < NaN. All NaNs are one equivalence class.  Canonicalizing NaNs avoids payload and signaling-state dependence and therefore gives reproducible cross-target results without representation casts.

```valor
public i8 canonical_nan_order(f64 left, f64 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: f64 (by value)
> - `right`: f64 (by value)

> ### RETURNS (i8)

> ### EXAMPLE
>
> ```valor
> i8 result = std::algo::sort::canonical_nan_order(left, right);
> ```

> ### SEE ALSO
>
> - [`std::algo::sort::valid_order`](#fn-valid-order)
> - [`std::algo::sort::validate_comparator`](#fn-validate-comparator)
> - [`std::algo::sort::canonical_nan_order_f32`](#fn-canonical-nan-order-f32)

<a id="fn-canonical-nan-order-f32"></a>

> ## `canonical_nan_order_f32`

> Provides the module's **canonical nan order f32** operation. Returns `i8`.

```valor
public i8 canonical_nan_order_f32(f32 left, f32 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: f32 (by value)
> - `right`: f32 (by value)

> ### RETURNS (i8)

> ### EXAMPLE
>
> ```valor
> i8 result = std::algo::sort::canonical_nan_order_f32(left, right);
> ```

> ### SEE ALSO
>
> - [`std::algo::sort::valid_order`](#fn-valid-order)
> - [`std::algo::sort::validate_comparator`](#fn-validate-comparator)
> - [`std::algo::sort::canonical_nan_order`](#fn-canonical-nan-order)

<a id="fn-total-order-f32"></a>

> ## `total_order_f32`

> Provides the module's **total order f32** operation. Returns `i8`.

```valor
public i8 total_order_f32(f32 left, f32 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: f32 (by value)
> - `right`: f32 (by value)

> ### RETURNS (i8)

> ### EXAMPLE
>
> ```valor
> i8 result = std::algo::sort::total_order_f32(left, right);
> ```

> ### SEE ALSO
>
> - [`std::algo::sort::valid_order`](#fn-valid-order)
> - [`std::algo::sort::validate_comparator`](#fn-validate-comparator)
> - [`std::algo::sort::canonical_nan_order`](#fn-canonical-nan-order)

<a id="fn-total-order-f64"></a>

> ## `total_order_f64`

> Provides the module's **total order f64** operation. Returns `i8`.

```valor
public i8 total_order_f64(f64 left, f64 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: f64 (by value)
> - `right`: f64 (by value)

> ### RETURNS (i8)

> ### EXAMPLE
>
> ```valor
> i8 result = std::algo::sort::total_order_f64(left, right);
> ```

> ### SEE ALSO
>
> - [`std::algo::sort::valid_order`](#fn-valid-order)
> - [`std::algo::sort::validate_comparator`](#fn-validate-comparator)
> - [`std::algo::sort::canonical_nan_order`](#fn-canonical-nan-order)

<a id="fn-insertion-sort"></a>

> ## `insertion_sort`

> Provides the module's **insertion sort** operation. Returns `i32`.

```valor
public i32 insertion_sort(usize length, (usize) -> T read, (usize, T) -> void write, (T, T) -> i8 compare)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `usize`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `compare`: T) -> void write, (T, T) -> i8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::sort::insertion_sort(length, usize, compare);
> ```

> ### SEE ALSO
>
> - [`std::algo::sort::valid_order`](#fn-valid-order)
> - [`std::algo::sort::validate_comparator`](#fn-validate-comparator)
> - [`std::algo::sort::canonical_nan_order`](#fn-canonical-nan-order)

<a id="fn-binary-insertion-sort"></a>

> ## `binary_insertion_sort`

> Provides the module's **binary insertion sort** operation. Returns `i32`.

```valor
public i32 binary_insertion_sort(usize length, (usize) -> T read, (usize, T) -> void write, (T, T) -> i8 compare)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `usize`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `compare`: T) -> void write, (T, T) -> i8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::sort::binary_insertion_sort(length, usize, compare);
> ```

> ### SEE ALSO
>
> - [`std::algo::sort::valid_order`](#fn-valid-order)
> - [`std::algo::sort::validate_comparator`](#fn-validate-comparator)
> - [`std::algo::sort::canonical_nan_order`](#fn-canonical-nan-order)

<a id="fn-sift-down"></a>

> ## `sift_down`

> *Internal API*
>
> Provides the module's **sift down** operation. Returns `i32`.

```valor
i32 sift_down(usize start, usize count, usize root, (usize) -> T read, (usize, T) -> void write, (T, T) -> i8 compare)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `count`: usize (by value)
> - `root`: usize (by value)
> - `usize`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `compare`: T) -> void write, (T, T) -> i8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::sort::sift_down(start, count, root, usize, compare);
> ```

> ### SEE ALSO
>
> - [`std::algo::sort::valid_order`](#fn-valid-order)
> - [`std::algo::sort::validate_comparator`](#fn-validate-comparator)
> - [`std::algo::sort::canonical_nan_order`](#fn-canonical-nan-order)

<a id="fn-heap-sort-range"></a>

> ## `heap_sort_range`

> *Internal API*
>
> Provides the module's **heap sort range** operation. Returns `i32`.

```valor
i32 heap_sort_range(usize start, usize count, (usize) -> T read, (usize, T) -> void write, (T, T) -> i8 compare)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `count`: usize (by value)
> - `usize`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `compare`: T) -> void write, (T, T) -> i8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::sort::heap_sort_range(start, count, usize, compare);
> ```

> ### SEE ALSO
>
> - [`std::algo::sort::valid_order`](#fn-valid-order)
> - [`std::algo::sort::validate_comparator`](#fn-validate-comparator)
> - [`std::algo::sort::canonical_nan_order`](#fn-canonical-nan-order)

<a id="fn-heap-sort"></a>

> ## `heap_sort`

> Provides the module's **heap sort** operation. Returns `i32`.

```valor
public i32 heap_sort(usize length, (usize) -> T read, (usize, T) -> void write, (T, T) -> i8 compare)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `usize`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `compare`: T) -> void write, (T, T) -> i8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::sort::heap_sort(length, usize, compare);
> ```

> ### SEE ALSO
>
> - [`std::algo::sort::valid_order`](#fn-valid-order)
> - [`std::algo::sort::validate_comparator`](#fn-validate-comparator)
> - [`std::algo::sort::canonical_nan_order`](#fn-canonical-nan-order)

<a id="fn-introsort"></a>

> ## `introsort`

> Provides the module's **introsort** operation. Returns `i32`.

```valor
public i32 introsort(usize length, (usize) -> T read, (usize, T) -> void write, (T, T) -> i8 compare)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `usize`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `compare`: T) -> void write, (T, T) -> i8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::sort::introsort(length, usize, compare);
> ```

> ### SEE ALSO
>
> - [`std::algo::sort::valid_order`](#fn-valid-order)
> - [`std::algo::sort::validate_comparator`](#fn-validate-comparator)
> - [`std::algo::sort::canonical_nan_order`](#fn-canonical-nan-order)

<a id="fn-stable-merge-sort"></a>

> ## `stable_merge_sort`

> Provides the module's **stable merge sort** operation. Returns `i32`.

```valor
public i32 stable_merge_sort( usize length, (usize) -> T read, (usize, T) -> void write, usize scratch_capacity, (usize) -> T read_scratch, (usize, T) -> void write_scratch, (T, T) -> i8 compare)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^3)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `usize`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `compare`: T) -> void write, usize scratch_capacity, (usize) -> T read_scratch, (usize, T) -> void write_scratch, (T, T) -> i8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::sort::stable_merge_sort(length, usize, compare);
> ```

> ### SEE ALSO
>
> - [`std::algo::sort::valid_order`](#fn-valid-order)
> - [`std::algo::sort::validate_comparator`](#fn-validate-comparator)
> - [`std::algo::sort::canonical_nan_order`](#fn-canonical-nan-order)

<a id="fn-radix-sort-u32"></a>

> ## `radix_sort_u32`

> Stable binary LSD radix passes need exactly N elements of scratch and no histogram. Stable binary LSD radix passes need exactly N elements of scratch and no histogram.  Each pass performs two linear streams: count zero bits, then scatter.  This trades extra bandwidth for a tiny fixed working set and predictable branches.

```valor
public i32 radix_sort_u32( usize length, (usize) -> u32 read, (usize, u32) -> void write, usize scratch_capacity, (usize) -> u32 read_scratch, (usize, u32) -> void write_scratch)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `usize`: (usize) -> u32 read, ( (borrowed fn-ptr (callback))
> - `write_scratch`: u32) -> void write, usize scratch_capacity, (usize) -> u32 read_scratch, (usize, u32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::sort::radix_sort_u32(length, usize, write_scratch);
> ```

> ### SEE ALSO
>
> - [`std::algo::sort::valid_order`](#fn-valid-order)
> - [`std::algo::sort::validate_comparator`](#fn-validate-comparator)
> - [`std::algo::sort::canonical_nan_order`](#fn-canonical-nan-order)

<a id="fn-radix-sort-u64"></a>

> ## `radix_sort_u64`

> Provides the module's **radix sort u64** operation. Returns `i32`.

```valor
public i32 radix_sort_u64( usize length, (usize) -> u64 read, (usize, u64) -> void write, usize scratch_capacity, (usize) -> u64 read_scratch, (usize, u64) -> void write_scratch)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `usize`: (usize) -> u64 read, ( (borrowed fn-ptr (callback))
> - `write_scratch`: u64) -> void write, usize scratch_capacity, (usize) -> u64 read_scratch, (usize, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::sort::radix_sort_u64(length, usize, write_scratch);
> ```

> ### SEE ALSO
>
> - [`std::algo::sort::valid_order`](#fn-valid-order)
> - [`std::algo::sort::validate_comparator`](#fn-validate-comparator)
> - [`std::algo::sort::canonical_nan_order`](#fn-canonical-nan-order)

<a id="fn-counting-sort"></a>

> ## `counting_sort`

> Provides the module's **counting sort** operation. Returns `i32`.

```valor
public i32 counting_sort( usize length, (usize) -> T read, (usize, T) -> void write, (T) -> usize key, usize key_limit, usize scratch_capacity, (usize) -> T read_scratch, (usize, T) -> void write_scratch, usize counts_capacity, (usize) -> usize read_count, (usize, usize) -> void write_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `usize`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `write_count`: T) -> void write, (T) -> usize key, usize key_limit, usize scratch_capacity, (usize) -> T read_scratch, (usize, T) -> void write_scratch, usize counts_capacity, (usize) -> usize read_count, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::sort::counting_sort(length, usize, write_count);
> ```

> ### SEE ALSO
>
> - [`std::algo::sort::valid_order`](#fn-valid-order)
> - [`std::algo::sort::validate_comparator`](#fn-validate-comparator)
> - [`std::algo::sort::canonical_nan_order`](#fn-canonical-nan-order)

<a id="fn-nth-element"></a>

> ## `nth_element`

> Provides the module's **nth element** operation. Returns `i32`.

```valor
public i32 nth_element(usize length, usize nth, (usize) -> T read, (usize, T) -> void write, (T, T) -> i8 compare)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `nth`: usize (by value)
> - `usize`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `compare`: T) -> void write, (T, T) -> i8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::sort::nth_element(length, nth, usize, compare);
> ```

> ### SEE ALSO
>
> - [`std::algo::sort::valid_order`](#fn-valid-order)
> - [`std::algo::sort::validate_comparator`](#fn-validate-comparator)
> - [`std::algo::sort::canonical_nan_order`](#fn-canonical-nan-order)

<a id="fn-partial-sort"></a>

> ## `partial_sort`

> Provides the module's **partial sort** operation. Returns `i32`.

```valor
public i32 partial_sort(usize length, usize k, (usize) -> T read, (usize, T) -> void write, (T, T) -> i8 compare)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `k`: usize (by value)
> - `usize`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `compare`: T) -> void write, (T, T) -> i8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::sort::partial_sort(length, k, usize, compare);
> ```

> ### SEE ALSO
>
> - [`std::algo::sort::valid_order`](#fn-valid-order)
> - [`std::algo::sort::validate_comparator`](#fn-validate-comparator)
> - [`std::algo::sort::canonical_nan_order`](#fn-canonical-nan-order)

<a id="fn-top-k"></a>

> ## `top_k`

> Provides the module's **top k** operation. Returns `i32`.

```valor
public i32 top_k( usize length, (usize) -> T read, usize k, usize output_capacity, (usize, T) -> void write_output, usize scratch_capacity, (usize) -> T read_scratch, (usize, T) -> void write_scratch, (T, T) -> i8 compare)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `usize`: (usize) -> T read, usize k, usize output_capacity, ( (borrowed fn-ptr (callback))
> - `compare`: T) -> void write_output, usize scratch_capacity, (usize) -> T read_scratch, (usize, T) -> void write_scratch, (T, T) -> i8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::sort::top_k(length, usize, compare);
> ```

> ### SEE ALSO
>
> - [`std::algo::sort::valid_order`](#fn-valid-order)
> - [`std::algo::sort::validate_comparator`](#fn-validate-comparator)
> - [`std::algo::sort::canonical_nan_order`](#fn-canonical-nan-order)

<a id="fn-stable-top-k"></a>

> ## `stable_top_k`

> Provides the module's **stable top k** operation. Returns `i32`.

```valor
public i32 stable_top_k( usize length, (usize) -> T read, usize k, usize output_capacity, (usize, T) -> void write_output, usize scratch_capacity, (usize) -> T read_scratch, (usize, T) -> void write_scratch, (T, T) -> i8 compare)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `usize`: (usize) -> T read, usize k, usize output_capacity, ( (borrowed fn-ptr (callback))
> - `compare`: T) -> void write_output, usize scratch_capacity, (usize) -> T read_scratch, (usize, T) -> void write_scratch, (T, T) -> i8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::sort::stable_top_k(length, usize, compare);
> ```

> ### SEE ALSO
>
> - [`std::algo::sort::valid_order`](#fn-valid-order)
> - [`std::algo::sort::validate_comparator`](#fn-validate-comparator)
> - [`std::algo::sort::canonical_nan_order`](#fn-canonical-nan-order)

<a id="fn-stable-sort"></a>

> ## `stable_sort`

> Provides the module's **stable sort** operation. Returns `i32`.

```valor
public i32 stable_sort( usize length, (usize) -> T read, (usize, T) -> void write, usize scratch_capacity, (usize) -> T read_scratch, (usize, T) -> void write_scratch, (T, T) -> i8 compare)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `usize`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `compare`: T) -> void write, usize scratch_capacity, (usize) -> T read_scratch, (usize, T) -> void write_scratch, (T, T) -> i8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::algo::sort::stable_sort(length, usize, compare);
> ```

> ### SEE ALSO
>
> - [`std::algo::sort::valid_order`](#fn-valid-order)
> - [`std::algo::sort::validate_comparator`](#fn-validate-comparator)
> - [`std::algo::sort::canonical_nan_order`](#fn-canonical-nan-order)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Algorithms](STD-ALGO-DOC.md) · [Table of contents](standard-library/README.md) · [Reduction →](STD-ALGO-REDUCE-DOC.md)
