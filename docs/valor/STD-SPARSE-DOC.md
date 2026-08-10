<!-- stdlib-reference-style: modern -->
> # `std::sparse`

`std::sparse` sparse data and compute kernels.

[Standard library](standard-library/README.md) / [Algorithms and computing](standard-library/README.md#algorithms-and-computing) / **Sparse computing**

> **Source:** `stdlib/std/sparse.valor` · **Routines:** 18 public · 9 internal

## Routines

<details>
<summary>Browse all 27 routines</summary>

- [`magnitude`](#fn-magnitude)
- [`keep_value`](#fn-keep-value)
- [`perm_before`](#fn-perm-before)
- [`perm_sift_down`](#fn-perm-sift-down)
- [`perm_heapsort`](#fn-perm-heapsort)
- [`fill_identity_perm`](#fn-fill-identity-perm)
- [`coo_sort`](#fn-coo-sort)
- [`read_value_unused`](#fn-read-value-unused)
- [`coo_coalesce`](#fn-coo-coalesce)
- [`csr_sort_indices`](#fn-csr-sort-indices)
- [`csr_deduplicate`](#fn-csr-deduplicate)
- [`coo_to_csr`](#fn-coo-to-csr)
- [`csr_to_coo`](#fn-csr-to-coo)
- [`transpose_compressed`](#fn-transpose-compressed)
- [`csr_to_csc`](#fn-csr-to-csc)
- [`csc_to_csr`](#fn-csc-to-csr)
- [`csr_matvec`](#fn-csr-matvec)
- [`csr_matmul_dense`](#fn-csr-matmul-dense)
- [`sparse_dot`](#fn-sparse-dot)
- [`sparse_softmax`](#fn-sparse-softmax)
- [`select_priority`](#fn-select-priority)
- [`top_k_sparse`](#fn-top-k-sparse)
- [`gather_sparse`](#fn-gather-sparse)
- [`scatter_sparse`](#fn-scatter-sparse)
- [`prune_threshold`](#fn-prune-threshold)
- [`prune_top_k`](#fn-prune-top-k)
- [`prune_blocks`](#fn-prune-blocks)

</details>

## API reference

<a id="fn-magnitude"></a>

> ## `magnitude`

> *Internal API*
>
> Provides the module's **magnitude** operation. Returns `f64`.

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
> f64 result = std::sparse::magnitude(value);
> ```

> ### SEE ALSO
>
> - [`std::sparse::keep_value`](#fn-keep-value)
> - [`std::sparse::perm_before`](#fn-perm-before)
> - [`std::sparse::perm_sift_down`](#fn-perm-sift-down)

<a id="fn-keep-value"></a>

> ## `keep_value`

> *Internal API*
>
> True when a combined coordinate survives the caller's zero-elision policy.

```valor
bool keep_value(u8 policy, f64 value, f64 epsilon)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `policy`: u8 (by value)
> - `value`: f64 (by value)
> - `epsilon`: f64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::sparse::keep_value(policy, value, epsilon);
> ```

> ### SEE ALSO
>
> - [`std::sparse::magnitude`](#fn-magnitude)
> - [`std::sparse::perm_before`](#fn-perm-before)
> - [`std::sparse::perm_sift_down`](#fn-perm-sift-down)

<a id="fn-perm-before"></a>

> ## `perm_before`

> *Internal API*
>
> Provides the module's **perm before** operation. Returns `bool`.

```valor
bool perm_before(u8 order, (usize) -> u32 read_row, (usize) -> u32 read_col, (usize) -> u32 read_index, (usize) -> f64 read_value, usize a, usize b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `order`: u8 (by value)
> - `b`: (usize) -> u32 read_row, (usize) -> u32 read_col, (usize) -> u32 read_index, (usize) -> f64 read_value, usize a, usize (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::sparse::perm_before(order, b);
> ```

> ### SEE ALSO
>
> - [`std::sparse::magnitude`](#fn-magnitude)
> - [`std::sparse::keep_value`](#fn-keep-value)
> - [`std::sparse::perm_sift_down`](#fn-perm-sift-down)

<a id="fn-perm-sift-down"></a>

> ## `perm_sift_down`

> *Internal API*
>
> In-place binary-heap sift-down over perm[start, start + count). In-place binary-heap sift-down over perm[start, start + count).  Larger elements under `order` rise, so the range heap-sorts into ascending order.

```valor
void perm_sift_down(u8 order, (usize) -> u32 read_row, (usize) -> u32 read_col, (usize) -> u32 read_index, (usize) -> f64 read_value, (usize) -> usize read_perm, (usize, usize) -> void write_perm, usize start, usize count, usize root)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `order`: u8 (by value)
> - `root`: (usize) -> u32 read_row, (usize) -> u32 read_col, (usize) -> u32 read_index, (usize) -> f64 read_value, (usize) -> usize read_perm, (usize, usize) -> void write_perm, usize start, usize count, usize (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::sparse::perm_sift_down(order, root);
> ```

> ### SEE ALSO
>
> - [`std::sparse::magnitude`](#fn-magnitude)
> - [`std::sparse::keep_value`](#fn-keep-value)
> - [`std::sparse::perm_before`](#fn-perm-before)

<a id="fn-perm-heapsort"></a>

> ## `perm_heapsort`

> *Internal API*
>
> Ascending heapsort of perm[start, start + count). Ascending heapsort of perm[start, start + count).  O(count log count) time, O(1) auxiliary storage, and no dependence on the initial permutation, so the result is the unique canonical order for the chosen `order`.

```valor
void perm_heapsort(u8 order, (usize) -> u32 read_row, (usize) -> u32 read_col, (usize) -> u32 read_index, (usize) -> f64 read_value, (usize) -> usize read_perm, (usize, usize) -> void write_perm, usize start, usize count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `order`: u8 (by value)
> - `count`: (usize) -> u32 read_row, (usize) -> u32 read_col, (usize) -> u32 read_index, (usize) -> f64 read_value, (usize) -> usize read_perm, (usize, usize) -> void write_perm, usize start, usize (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::sparse::perm_heapsort(order, count);
> ```

> ### SEE ALSO
>
> - [`std::sparse::magnitude`](#fn-magnitude)
> - [`std::sparse::keep_value`](#fn-keep-value)
> - [`std::sparse::perm_before`](#fn-perm-before)

<a id="fn-fill-identity-perm"></a>

> ## `fill_identity_perm`

> *Internal API*
>
> Provides the module's **fill identity perm** operation.

```valor
void fill_identity_perm(usize count, (usize, usize) -> void write_perm)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `write_perm`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::sparse::fill_identity_perm(count, write_perm);
> ```

> ### SEE ALSO
>
> - [`std::sparse::magnitude`](#fn-magnitude)
> - [`std::sparse::keep_value`](#fn-keep-value)
> - [`std::sparse::perm_before`](#fn-perm-before)

<a id="fn-coo-sort"></a>

> ## `coo_sort`

> Produces a permutation of [0, nnz) that visits the COO entries in canonical (row, column, original_position) order. Produces a permutation of [0, nnz) that visits the COO entries in canonical (row, column, original_position) order.  The payload is never moved: the caller applies the permutation with gather_sparse, or streams it directly into coo_to_csr / coo_coalesce.  Deterministic for any input because the tie-break on original_position makes the order total.

```valor
public i32 coo_sort(usize nnz, (usize) -> u32 read_row, (usize) -> u32 read_col, usize perm_capacity, (usize) -> usize read_perm, (usize, usize) -> void write_perm)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `nnz`: usize (by value)
> - `write_perm`: (usize) -> u32 read_row, (usize) -> u32 read_col, usize perm_capacity, (usize) -> usize read_perm, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sparse::coo_sort(nnz, write_perm);
> ```

> ### SEE ALSO
>
> - [`std::sparse::magnitude`](#fn-magnitude)
> - [`std::sparse::keep_value`](#fn-keep-value)
> - [`std::sparse::perm_before`](#fn-perm-before)

<a id="fn-read-value-unused"></a>

> ## `read_value_unused`

> *Internal API*
>
> The COO/index orders never read a value; this stand-in keeps the shared heapsort signature satisfied without a payload accessor at the call site. The COO/index orders never read a value; this stand-in keeps the shared heapsort signature satisfied without a payload accessor at the call site.

```valor
f64 read_value_unused(usize index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: usize (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::sparse::read_value_unused(index);
> ```

> ### SEE ALSO
>
> - [`std::sparse::magnitude`](#fn-magnitude)
> - [`std::sparse::keep_value`](#fn-keep-value)
> - [`std::sparse::perm_before`](#fn-perm-before)

<a id="fn-coo-coalesce"></a>

> ## `coo_coalesce`

> Combines duplicate coordinates of a canonically ordered COO stream into a compact output. Combines duplicate coordinates of a canonically ordered COO stream into a compact output.  `read_perm` supplies the canonical visiting order from coo_sort.  Values within a coordinate group are summed sequentially in increasing original_position (the order the permutation already imposes), so the reduction is fully defined.  The combined value is emitted only when it survives the caller's zero-elision policy.  Output arrays are written densely from index 0 and the surviving count is delivered through `receive_count`.

```valor
public i32 coo_coalesce(usize nnz, (usize) -> u32 read_row, (usize) -> u32 read_col, (usize) -> f64 read_val, (usize) -> usize read_perm, u8 policy, f64 epsilon, usize out_capacity, (usize, u32) -> void write_row, (usize, u32) -> void write_col, (usize, f64) -> void write_val, (usize) -> void receive_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `nnz`: usize (by value)
> - `receive_count`: (usize) -> u32 read_row, (usize) -> u32 read_col, (usize) -> f64 read_val, (usize) -> usize read_perm, u8 policy, f64 epsilon, usize out_capacity, (usize, u32) -> void write_row, (usize, u32) -> void write_col, (usize, f64) -> void write_val, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sparse::coo_coalesce(nnz, receive_count);
> ```

> ### SEE ALSO
>
> - [`std::sparse::magnitude`](#fn-magnitude)
> - [`std::sparse::keep_value`](#fn-keep-value)
> - [`std::sparse::perm_before`](#fn-perm-before)

<a id="fn-csr-sort-indices"></a>

> ## `csr_sort_indices`

> Sorts the column indices inside every CSR row into ascending order, carrying each value with its column. Sorts the column indices inside every CSR row into ascending order, carrying each value with its column.  A stable insertion sort keeps equal columns in their original storage order, so a later csr_deduplicate combines them in a defined order.  Operates in place on the caller's column and value arrays.

```valor
public i32 csr_sort_indices(usize rows, (usize) -> usize read_rowptr, (usize) -> u32 read_col, (usize, u32) -> void write_col, (usize) -> f64 read_val, (usize, f64) -> void write_val)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^3)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rows`: usize (by value)
> - `write_val`: (usize) -> usize read_rowptr, (usize) -> u32 read_col, (usize, u32) -> void write_col, (usize) -> f64 read_val, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sparse::csr_sort_indices(rows, write_val);
> ```

> ### SEE ALSO
>
> - [`std::sparse::magnitude`](#fn-magnitude)
> - [`std::sparse::keep_value`](#fn-keep-value)
> - [`std::sparse::perm_before`](#fn-perm-before)

<a id="fn-csr-deduplicate"></a>

> ## `csr_deduplicate`

> Combines equal columns inside each already column-sorted CSR row. Combines equal columns inside each already column-sorted CSR row.  Values are summed sequentially in stored (ascending original_position) order, then the combined value is emitted only if it survives the zero-elision policy.  The output index never runs ahead of the read cursor, so compaction is safe in place on the caller's arrays.  A fresh row-pointer array and the surviving nnz are produced through `write_rowptr` and `receive_nnz`.

```valor
public i32 csr_deduplicate(usize rows, (usize) -> usize read_rowptr, (usize) -> u32 read_col, (usize) -> f64 read_val, u8 policy, f64 epsilon, (usize, usize) -> void write_rowptr, (usize, u32) -> void write_col, (usize, f64) -> void write_val, (usize) -> void receive_nnz)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^3)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rows`: usize (by value)
> - `receive_nnz`: (usize) -> usize read_rowptr, (usize) -> u32 read_col, (usize) -> f64 read_val, u8 policy, f64 epsilon, (usize, usize) -> void write_rowptr, (usize, u32) -> void write_col, (usize, f64) -> void write_val, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sparse::csr_deduplicate(rows, receive_nnz);
> ```

> ### SEE ALSO
>
> - [`std::sparse::magnitude`](#fn-magnitude)
> - [`std::sparse::keep_value`](#fn-keep-value)
> - [`std::sparse::perm_before`](#fn-perm-before)

<a id="fn-coo-to-csr"></a>

> ## `coo_to_csr`

> Builds a CSR matrix from COO triplets. Builds a CSR matrix from COO triplets.  `read_rowptr`/`write_rowptr` name the caller's row-pointer array of length rows + 1; it doubles as the counting workspace, so no separate scratch is required.  Entries are scattered in the canonical visiting order given by `read_perm`, and a stable counting scatter keeps each row's columns in that same order -- so a canonical permutation yields canonical CSR (ascending column, then original_position).

```valor
public i32 coo_to_csr(usize rows, usize nnz, (usize) -> u32 read_row, (usize) -> u32 read_col, (usize) -> f64 read_val, (usize) -> usize read_perm, usize rowptr_capacity, (usize) -> usize read_rowptr, (usize, usize) -> void write_rowptr, usize out_capacity, (usize, u32) -> void write_col, (usize, f64) -> void write_val)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rows`: usize (by value)
> - `nnz`: usize (by value)
> - `write_val`: (usize) -> u32 read_row, (usize) -> u32 read_col, (usize) -> f64 read_val, (usize) -> usize read_perm, usize rowptr_capacity, (usize) -> usize read_rowptr, (usize, usize) -> void write_rowptr, usize out_capacity, (usize, u32) -> void write_col, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sparse::coo_to_csr(rows, nnz, write_val);
> ```

> ### SEE ALSO
>
> - [`std::sparse::magnitude`](#fn-magnitude)
> - [`std::sparse::keep_value`](#fn-keep-value)
> - [`std::sparse::perm_before`](#fn-perm-before)

<a id="fn-csr-to-coo"></a>

> ## `csr_to_coo`

> Expands a CSR matrix into COO triplets, emitting the implicit row of each stored entry. Expands a CSR matrix into COO triplets, emitting the implicit row of each stored entry.  Output order is CSR storage order, which is canonical when the CSR is canonical.  Zero-copy on columns and values.

```valor
public i32 csr_to_coo(usize rows, (usize) -> usize read_rowptr, (usize) -> u32 read_col, (usize) -> f64 read_val, usize out_capacity, (usize, u32) -> void write_row, (usize, u32) -> void write_col, (usize, f64) -> void write_val)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rows`: usize (by value)
> - `write_val`: (usize) -> usize read_rowptr, (usize) -> u32 read_col, (usize) -> f64 read_val, usize out_capacity, (usize, u32) -> void write_row, (usize, u32) -> void write_col, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sparse::csr_to_coo(rows, write_val);
> ```

> ### SEE ALSO
>
> - [`std::sparse::magnitude`](#fn-magnitude)
> - [`std::sparse::keep_value`](#fn-keep-value)
> - [`std::sparse::perm_before`](#fn-perm-before)

<a id="fn-transpose-compressed"></a>

> ## `transpose_compressed`

> *Internal API*
>
> Shared sparse transpose. Shared sparse transpose.  A compressed matrix stored as (outer_ptr, inner_index, value) over `outer` major lines and `inner` minor lines is transposed into (new_ptr, outer_index, value) over `inner` major lines.  `new_ptr` (length inner + 1) doubles as the counting workspace. Majors are visited in ascending order and a stable counting scatter appends within each new major line, so the transpose of a canonical matrix is canonical.

```valor
i32 transpose_compressed(usize outer, usize inner, (usize) -> usize read_outptr, (usize) -> u32 read_inner, (usize) -> f64 read_val, usize newptr_capacity, (usize) -> usize read_newptr, (usize, usize) -> void write_newptr, usize out_capacity, (usize, u32) -> void write_outer, (usize, f64) -> void write_val)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `outer`: usize (by value)
> - `inner`: usize (by value)
> - `write_val`: (usize) -> usize read_outptr, (usize) -> u32 read_inner, (usize) -> f64 read_val, usize newptr_capacity, (usize) -> usize read_newptr, (usize, usize) -> void write_newptr, usize out_capacity, (usize, u32) -> void write_outer, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sparse::transpose_compressed(outer, inner, write_val);
> ```

> ### SEE ALSO
>
> - [`std::sparse::magnitude`](#fn-magnitude)
> - [`std::sparse::keep_value`](#fn-keep-value)
> - [`std::sparse::perm_before`](#fn-perm-before)

<a id="fn-csr-to-csc"></a>

> ## `csr_to_csc`

> Transposes a rows x cols CSR matrix into CSC form (colptr length cols + 1, row indices, values). Transposes a rows x cols CSR matrix into CSC form (colptr length cols + 1, row indices, values).  `read_colptr`/`write_colptr` double as the counting workspace.  Canonical CSR yields canonical CSC (ascending row within column).

```valor
public i32 csr_to_csc(usize rows, usize cols, (usize) -> usize read_rowptr, (usize) -> u32 read_col, (usize) -> f64 read_val, usize colptr_capacity, (usize) -> usize read_colptr, (usize, usize) -> void write_colptr, usize out_capacity, (usize, u32) -> void write_row, (usize, f64) -> void write_val)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rows`: usize (by value)
> - `cols`: usize (by value)
> - `write_val`: (usize) -> usize read_rowptr, (usize) -> u32 read_col, (usize) -> f64 read_val, usize colptr_capacity, (usize) -> usize read_colptr, (usize, usize) -> void write_colptr, usize out_capacity, (usize, u32) -> void write_row, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sparse::csr_to_csc(rows, cols, write_val);
> ```

> ### SEE ALSO
>
> - [`std::sparse::magnitude`](#fn-magnitude)
> - [`std::sparse::keep_value`](#fn-keep-value)
> - [`std::sparse::perm_before`](#fn-perm-before)

<a id="fn-csc-to-csr"></a>

> ## `csc_to_csr`

> Transposes a rows x cols CSC matrix (colptr length cols + 1, row indices, values) into CSR form. Transposes a rows x cols CSC matrix (colptr length cols + 1, row indices, values) into CSR form.  `read_rowptr`/`write_rowptr` double as the counting workspace.  Canonical CSC yields canonical CSR.

```valor
public i32 csc_to_csr(usize rows, usize cols, (usize) -> usize read_colptr, (usize) -> u32 read_row, (usize) -> f64 read_val, usize rowptr_capacity, (usize) -> usize read_rowptr, (usize, usize) -> void write_rowptr, usize out_capacity, (usize, u32) -> void write_col, (usize, f64) -> void write_val)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rows`: usize (by value)
> - `cols`: usize (by value)
> - `write_val`: (usize) -> usize read_colptr, (usize) -> u32 read_row, (usize) -> f64 read_val, usize rowptr_capacity, (usize) -> usize read_rowptr, (usize, usize) -> void write_rowptr, usize out_capacity, (usize, u32) -> void write_col, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sparse::csc_to_csr(rows, cols, write_val);
> ```

> ### SEE ALSO
>
> - [`std::sparse::magnitude`](#fn-magnitude)
> - [`std::sparse::keep_value`](#fn-keep-value)
> - [`std::sparse::perm_before`](#fn-perm-before)

<a id="fn-csr-matvec"></a>

> ## `csr_matvec`

> Dense result y = A x for a rows x cols CSR matrix A and dense vector x of length cols. Dense result y = A x for a rows x cols CSR matrix A and dense vector x of length cols.  Each row's dot product accumulates sequentially in stored column order, so the reduction order is defined; a canonical row makes it ascending-column order.

```valor
public i32 csr_matvec(usize rows, usize cols, (usize) -> usize read_rowptr, (usize) -> u32 read_col, (usize) -> f64 read_val, (usize) -> f64 read_x, (usize, f64) -> void write_y)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rows`: usize (by value)
> - `cols`: usize (by value)
> - `write_y`: (usize) -> usize read_rowptr, (usize) -> u32 read_col, (usize) -> f64 read_val, (usize) -> f64 read_x, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sparse::csr_matvec(rows, cols, write_y);
> ```

> ### SEE ALSO
>
> - [`std::sparse::magnitude`](#fn-magnitude)
> - [`std::sparse::keep_value`](#fn-keep-value)
> - [`std::sparse::perm_before`](#fn-perm-before)

<a id="fn-csr-matmul-dense"></a>

> ## `csr_matmul_dense`

> Dense result C = A B for a rows x k CSR matrix A and a dense row-major k x n matrix B; C is dense row-major rows x n and is supplied through read/write accessors so it can be accumulated in place. Dense result C = A B for a rows x k CSR matrix A and a dense row-major k x n matrix B; C is dense row-major rows x n and is supplied through read/write accessors so it can be accumulated in place.  Each output row is cleared, then every nonzero of A's row scales the corresponding B row into it.  The reduction over A's row proceeds in stored column order, giving a defined accumulation order per output element.

```valor
public i32 csr_matmul_dense(usize rows, usize k, usize n, (usize) -> usize read_rowptr, (usize) -> u32 read_col, (usize) -> f64 read_val, (usize) -> f64 read_b, usize c_capacity, (usize) -> f64 read_c, (usize, f64) -> void write_c)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^3)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rows`: usize (by value)
> - `k`: usize (by value)
> - `n`: usize (by value)
> - `write_c`: (usize) -> usize read_rowptr, (usize) -> u32 read_col, (usize) -> f64 read_val, (usize) -> f64 read_b, usize c_capacity, (usize) -> f64 read_c, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sparse::csr_matmul_dense(rows, k, n, write_c);
> ```

> ### SEE ALSO
>
> - [`std::sparse::magnitude`](#fn-magnitude)
> - [`std::sparse::keep_value`](#fn-keep-value)
> - [`std::sparse::perm_before`](#fn-perm-before)

<a id="fn-sparse-dot"></a>

> ## `sparse_dot`

> Inner product of two sparse vectors given as strictly ascending index/value lists. Inner product of two sparse vectors given as strictly ascending index/value lists.  A two-pointer merge accumulates products at matching indices in increasing index order, so the reduction order is defined.  Inputs are validated to be strictly increasing; a violation returns ERR_UNSORTED so the contract is never silently broken.

```valor
public i32 sparse_dot(usize nnz_a, (usize) -> u32 read_index_a, (usize) -> f64 read_val_a, usize nnz_b, (usize) -> u32 read_index_b, (usize) -> f64 read_val_b, (f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `nnz_a`: usize (by value)
> - `receive`: (usize) -> u32 read_index_a, (usize) -> f64 read_val_a, usize nnz_b, (usize) -> u32 read_index_b, (usize) -> f64 read_val_b, (f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sparse::sparse_dot(nnz_a, receive);
> ```

> ### SEE ALSO
>
> - [`std::sparse::magnitude`](#fn-magnitude)
> - [`std::sparse::keep_value`](#fn-keep-value)
> - [`std::sparse::perm_before`](#fn-perm-before)

<a id="fn-sparse-softmax"></a>

> ## `sparse_softmax`

> Numerically stable softmax over the stored values of a sparse vector, i.e. Numerically stable softmax over the stored values of a sparse vector, i.e. the sparsity pattern is the mask and implicit zeros do not participate.  The stored values form a dense contiguous block, so this delegates to std::numeric::softmax_stable, which subtracts the maximum and accumulates the denominator in a defined order.  Indices are unchanged; only values are rewritten in place.

```valor
public i32 sparse_softmax(usize nnz, (usize) -> f64 read_val, (usize, f64) -> void write_val)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `nnz`: usize (by value)
> - `usize`: (usize) -> f64 read_val, ( (borrowed fn-ptr (callback))
> - `write_val`: f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sparse::sparse_softmax(nnz, usize, write_val);
> ```

> ### SEE ALSO
>
> - [`std::sparse::magnitude`](#fn-magnitude)
> - [`std::sparse::keep_value`](#fn-keep-value)
> - [`std::sparse::perm_before`](#fn-perm-before)

<a id="fn-select-priority"></a>

> ## `select_priority`

> *Internal API*
>
> Sorts perm[0, nnz) so that the highest-priority entries -- larger magnitude, ties broken by smaller original_position -- occupy the front, then returns the count actually retained, min(k, nnz). Sorts perm[0, nnz) so that the highest-priority entries -- larger magnitude, ties broken by smaller original_position -- occupy the front, then returns the count actually retained, min(k, nnz).

```valor
usize select_priority(usize nnz, usize k, (usize) -> u32 read_index, (usize) -> f64 read_val, (usize) -> usize read_perm, (usize, usize) -> void write_perm)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `nnz`: usize (by value)
> - `k`: usize (by value)
> - `write_perm`: (usize) -> u32 read_index, (usize) -> f64 read_val, (usize) -> usize read_perm, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::sparse::select_priority(nnz, k, write_perm);
> ```

> ### SEE ALSO
>
> - [`std::sparse::magnitude`](#fn-magnitude)
> - [`std::sparse::keep_value`](#fn-keep-value)
> - [`std::sparse::perm_before`](#fn-perm-before)

<a id="fn-top-k-sparse"></a>

> ## `top_k_sparse`

> Selects the k largest-magnitude entries of a sparse vector and emits them in canonical ascending-index order (ties in magnitude resolved by smaller original_position, giving a deterministic selection). Selects the k largest-magnitude entries of a sparse vector and emits them in canonical ascending-index order (ties in magnitude resolved by smaller original_position, giving a deterministic selection).  The permutation workspace holds the selection state; the payload is copied out only for the survivors.

```valor
public i32 top_k_sparse(usize nnz, (usize) -> u32 read_index, (usize) -> f64 read_val, usize k, usize perm_capacity, (usize) -> usize read_perm, (usize, usize) -> void write_perm, usize out_capacity, (usize, u32) -> void write_index, (usize, f64) -> void write_val, (usize) -> void receive_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `nnz`: usize (by value)
> - `receive_count`: (usize) -> u32 read_index, (usize) -> f64 read_val, usize k, usize perm_capacity, (usize) -> usize read_perm, (usize, usize) -> void write_perm, usize out_capacity, (usize, u32) -> void write_index, (usize, f64) -> void write_val, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sparse::top_k_sparse(nnz, receive_count);
> ```

> ### SEE ALSO
>
> - [`std::sparse::magnitude`](#fn-magnitude)
> - [`std::sparse::keep_value`](#fn-keep-value)
> - [`std::sparse::perm_before`](#fn-perm-before)

<a id="fn-gather-sparse"></a>

> ## `gather_sparse`

> Materialises a permutation: output entry i is source entry perm[i]. Materialises a permutation: output entry i is source entry perm[i].  Pairs with coo_sort / top_k_sparse to turn an ordering into reordered storage without the kernels themselves ever moving a payload.  Input and output must not alias.

```valor
public i32 gather_sparse(usize count, (usize) -> usize read_perm, (usize) -> u32 read_source_index, (usize) -> f64 read_source_val, usize out_capacity, (usize, u32) -> void write_index, (usize, f64) -> void write_val)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `write_val`: (usize) -> usize read_perm, (usize) -> u32 read_source_index, (usize) -> f64 read_source_val, usize out_capacity, (usize, u32) -> void write_index, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sparse::gather_sparse(count, write_val);
> ```

> ### SEE ALSO
>
> - [`std::sparse::magnitude`](#fn-magnitude)
> - [`std::sparse::keep_value`](#fn-keep-value)
> - [`std::sparse::perm_before`](#fn-perm-before)

<a id="fn-scatter-sparse"></a>

> ## `scatter_sparse`

> Writes a sparse vector into a dense destination of length `dim`. Writes a sparse vector into a dense destination of length `dim`.  With SCATTER_OVERWRITE the last write in stored order wins; with SCATTER_ADD the destination accumulates in stored order (a defined reduction for repeated indices).  The destination is not cleared here -- the caller decides the background, so a masked scatter can preserve existing values.

```valor
public i32 scatter_sparse(usize nnz, (usize) -> u32 read_index, (usize) -> f64 read_val, usize dim, (usize) -> f64 read_dense, (usize, f64) -> void write_dense, u8 mode)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `nnz`: usize (by value)
> - `mode`: (usize) -> u32 read_index, (usize) -> f64 read_val, usize dim, (usize) -> f64 read_dense, (usize, f64) -> void write_dense, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sparse::scatter_sparse(nnz, mode);
> ```

> ### SEE ALSO
>
> - [`std::sparse::magnitude`](#fn-magnitude)
> - [`std::sparse::keep_value`](#fn-keep-value)
> - [`std::sparse::perm_before`](#fn-perm-before)

<a id="fn-prune-threshold"></a>

> ## `prune_threshold`

> Keeps entries whose magnitude exceeds `threshold`, dropping the rest, and compacts the survivors preserving input order (stable). Keeps entries whose magnitude exceeds `threshold`, dropping the rest, and compacts the survivors preserving input order (stable).  This is the magnitude form of the zero-elision policy applied to an existing pattern.

```valor
public i32 prune_threshold(usize nnz, (usize) -> u32 read_index, (usize) -> f64 read_val, f64 threshold, usize out_capacity, (usize, u32) -> void write_index, (usize, f64) -> void write_val, (usize) -> void receive_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `nnz`: usize (by value)
> - `receive_count`: (usize) -> u32 read_index, (usize) -> f64 read_val, f64 threshold, usize out_capacity, (usize, u32) -> void write_index, (usize, f64) -> void write_val, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sparse::prune_threshold(nnz, receive_count);
> ```

> ### SEE ALSO
>
> - [`std::sparse::magnitude`](#fn-magnitude)
> - [`std::sparse::keep_value`](#fn-keep-value)
> - [`std::sparse::perm_before`](#fn-perm-before)

<a id="fn-prune-top-k"></a>

> ## `prune_top_k`

> Keeps the k largest-magnitude entries (ties resolved by smaller original_position) and drops the rest, emitting the survivors in their original input order. Keeps the k largest-magnitude entries (ties resolved by smaller original_position) and drops the rest, emitting the survivors in their original input order.  Selection state lives in the caller's permutation workspace.

```valor
public i32 prune_top_k(usize nnz, (usize) -> u32 read_index, (usize) -> f64 read_val, usize k, usize perm_capacity, (usize) -> usize read_perm, (usize, usize) -> void write_perm, usize out_capacity, (usize, u32) -> void write_index, (usize, f64) -> void write_val, (usize) -> void receive_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `nnz`: usize (by value)
> - `receive_count`: (usize) -> u32 read_index, (usize) -> f64 read_val, usize k, usize perm_capacity, (usize) -> usize read_perm, (usize, usize) -> void write_perm, usize out_capacity, (usize, u32) -> void write_index, (usize, f64) -> void write_val, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sparse::prune_top_k(nnz, receive_count);
> ```

> ### SEE ALSO
>
> - [`std::sparse::magnitude`](#fn-magnitude)
> - [`std::sparse::keep_value`](#fn-keep-value)
> - [`std::sparse::perm_before`](#fn-perm-before)

<a id="fn-prune-blocks"></a>

> ## `prune_blocks`

> Structured pruning over contiguous index blocks of `block_size`. Structured pruning over contiguous index blocks of `block_size`.  The input must be sorted by index so a block's entries are contiguous.  Each block's L2 norm is accumulated in stored order; if it exceeds `threshold` the whole block is emitted, otherwise the whole block is dropped.  Survivors keep their input order.

```valor
public i32 prune_blocks(usize nnz, (usize) -> u32 read_index, (usize) -> f64 read_val, u32 block_size, f64 threshold, usize out_capacity, (usize, u32) -> void write_index, (usize, f64) -> void write_val, (usize) -> void receive_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `nnz`: usize (by value)
> - `receive_count`: (usize) -> u32 read_index, (usize) -> f64 read_val, u32 block_size, f64 threshold, usize out_capacity, (usize, u32) -> void write_index, (usize, f64) -> void write_val, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sparse::prune_blocks(nnz, receive_count);
> ```

> ### SEE ALSO
>
> - [`std::sparse::magnitude`](#fn-magnitude)
> - [`std::sparse::keep_value`](#fn-keep-value)
> - [`std::sparse::perm_before`](#fn-perm-before)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Graphs](STD-GRAPH-DOC.md) · [Table of contents](standard-library/README.md) · [Linear algebra →](STD-LA-DOC.md)
