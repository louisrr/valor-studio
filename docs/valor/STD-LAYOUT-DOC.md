<!-- stdlib-reference-style: modern -->
> # `std::layout`

`std::layout` size, alignment, and layout operations.

[Standard library](standard-library/README.md) / [Foundations](standard-library/README.md#foundations) / **Layout**

> **Source:** `stdlib/std/layout.valor` · **Routines:** 29 public

## Routines

<details>
<summary>Browse all 29 routines</summary>

- [`ceil_div`](#fn-ceil-div)
- [`min_usize`](#fn-min-usize)
- [`is_pow2`](#fn-is-pow2)
- [`is_supported_alignment`](#fn-is-supported-alignment)
- [`workspace_bytes`](#fn-workspace-bytes)
- [`block_workspace`](#fn-block-workspace)
- [`block`](#fn-block)
- [`unblock`](#fn-unblock)
- [`tile`](#fn-tile)
- [`interleave`](#fn-interleave)
- [`deinterleave`](#fn-deinterleave)
- [`transpose_blocked`](#fn-transpose-blocked)
- [`transpose_in_place`](#fn-transpose-in-place)
- [`pack_contiguous`](#fn-pack-contiguous)
- [`pack_strided`](#fn-pack-strided)
- [`pack_gemm_a_workspace`](#fn-pack-gemm-a-workspace)
- [`pack_gemm_a`](#fn-pack-gemm-a)
- [`pack_gemm_b_workspace`](#fn-pack-gemm-b-workspace)
- [`pack_gemm_b`](#fn-pack-gemm-b)
- [`pack_attention_qkv_workspace`](#fn-pack-attention-qkv-workspace)
- [`pack_attention_qkv`](#fn-pack-attention-qkv)
- [`pack_quantized_weights_workspace`](#fn-pack-quantized-weights-workspace)
- [`pack_quantized_weights`](#fn-pack-quantized-weights)
- [`layout_convert`](#fn-layout-convert)
- [`aos_to_soa`](#fn-aos-to-soa)
- [`soa_to_aos`](#fn-soa-to-aos)
- [`morton_max_bits`](#fn-morton-max-bits)
- [`morton_encode`](#fn-morton-encode)
- [`morton_decode`](#fn-morton-decode)

</details>

## API reference

<a id="fn-ceil-div"></a>

> ## `ceil_div`

> Ceiling of a / b for b >= 1. Ceiling of a / b for b >= 1.  a and b are extents (< 2^63) so the add and the divide are exact and never touch a sign bit.

```valor
public usize ceil_div(usize a, usize b)
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
> usize result = std::layout::ceil_div(a, b);
> ```

> ### SEE ALSO
>
> - [`std::layout::min_usize`](#fn-min-usize)
> - [`std::layout::is_pow2`](#fn-is-pow2)
> - [`std::layout::is_supported_alignment`](#fn-is-supported-alignment)

<a id="fn-min-usize"></a>

> ## `min_usize`

> Smaller of two extents (branch kept trivial for the ragged-edge clamp).

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
> usize result = std::layout::min_usize(a, b);
> ```

> ### SEE ALSO
>
> - [`std::layout::ceil_div`](#fn-ceil-div)
> - [`std::layout::is_pow2`](#fn-is-pow2)
> - [`std::layout::is_supported_alignment`](#fn-is-supported-alignment)

<a id="fn-is-pow2"></a>

> ## `is_pow2`

> True when x is a power of two (1, 2, 4, ...). True when x is a power of two (1, 2, 4, ...).  Used to validate alignments. x is a power of two iff it has exactly one set bit; counted by repeated halving (the language has no bitwise ops), which is exact since x < 2^63.

```valor
public bool is_pow2(usize x)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `x`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::layout::is_pow2(x);
> ```

> ### SEE ALSO
>
> - [`std::layout::ceil_div`](#fn-ceil-div)
> - [`std::layout::min_usize`](#fn-min-usize)
> - [`std::layout::is_supported_alignment`](#fn-is-supported-alignment)

<a id="fn-is-supported-alignment"></a>

> ## `is_supported_alignment`

> A supported alignment is any power of two >= 1.

```valor
public bool is_supported_alignment(usize align)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `align`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::layout::is_supported_alignment(align);
> ```

> ### SEE ALSO
>
> - [`std::layout::ceil_div`](#fn-ceil-div)
> - [`std::layout::min_usize`](#fn-min-usize)
> - [`std::layout::is_pow2`](#fn-is-pow2)

<a id="fn-workspace-bytes"></a>

> ## `workspace_bytes`

> Bytes needed to hold `count` elements of `elem_size` bytes, with the base address rounded up to `align`. Bytes needed to hold `count` elements of `elem_size` bytes, with the base address rounded up to `align`.  Alignment padding is accounted for so a caller can size an aligned workspace exactly.  Returns 0 for an unsupported alignment.

```valor
public usize workspace_bytes(usize count, usize elem_size, usize align)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `elem_size`: usize (by value)
> - `align`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::layout::workspace_bytes(count, elem_size, align);
> ```

> ### SEE ALSO
>
> - [`std::layout::ceil_div`](#fn-ceil-div)
> - [`std::layout::min_usize`](#fn-min-usize)
> - [`std::layout::is_pow2`](#fn-is-pow2)

<a id="fn-block-workspace"></a>

> ## `block_workspace`

> Destination element count for the padded blocked layout.

```valor
public usize block_workspace(usize rows, usize cols, usize tile_rows, usize tile_cols)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rows`: usize (by value)
> - `cols`: usize (by value)
> - `tile_rows`: usize (by value)
> - `tile_cols`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::layout::block_workspace(rows, cols, tile_rows, tile_cols);
> ```

> ### SEE ALSO
>
> - [`std::layout::ceil_div`](#fn-ceil-div)
> - [`std::layout::min_usize`](#fn-min-usize)
> - [`std::layout::is_pow2`](#fn-is-pow2)

<a id="fn-block"></a>

> ## `block`

> block: row-major (rows x cols, ld_src) -> padded blocked layout. block: row-major (rows x cols, ld_src) -> padded blocked layout.  For every real element (r, c) calls move(dst, src) with src = r*ld_src + c dst = tile_index*(tile_rows*tile_cols) + in_r*tile_cols + in_c Emits exactly rows*cols moves in ascending (r, then c) order.

```valor
public i32 block(usize rows, usize cols, usize ld_src, usize tile_rows, usize tile_cols, (usize, usize) -> void move)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rows`: usize (by value)
> - `cols`: usize (by value)
> - `ld_src`: usize (by value)
> - `tile_rows`: usize (by value)
> - `tile_cols`: usize (by value)
> - `move`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::layout::block(rows, cols, ld_src, tile_rows, tile_cols, move);
> ```

> ### SEE ALSO
>
> - [`std::layout::ceil_div`](#fn-ceil-div)
> - [`std::layout::min_usize`](#fn-min-usize)
> - [`std::layout::is_pow2`](#fn-is-pow2)

<a id="fn-unblock"></a>

> ## `unblock`

> unblock: padded blocked layout -> row-major (rows x cols, ld_dst). unblock: padded blocked layout -> row-major (rows x cols, ld_dst).  Exact inverse of `block`: for every real element (r, c) calls move(dst, src) with src = tile_index*(tile_rows*tile_cols) + in_r*tile_cols + in_c dst = r*ld_dst + c

```valor
public i32 unblock(usize rows, usize cols, usize ld_dst, usize tile_rows, usize tile_cols, (usize, usize) -> void move)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rows`: usize (by value)
> - `cols`: usize (by value)
> - `ld_dst`: usize (by value)
> - `tile_rows`: usize (by value)
> - `tile_cols`: usize (by value)
> - `move`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::layout::unblock(rows, cols, ld_dst, tile_rows, tile_cols, move);
> ```

> ### SEE ALSO
>
> - [`std::layout::ceil_div`](#fn-ceil-div)
> - [`std::layout::min_usize`](#fn-min-usize)
> - [`std::layout::is_pow2`](#fn-is-pow2)

<a id="fn-tile"></a>

> ## `tile`

> tile: enumerate the blocking plan without moving anything. tile: enumerate the blocking plan without moving anything.  For each tile in row-major tile order emits emit(tile_r, tile_c, row0, col0, trows, tcols, dst_offset) where (row0, col0) is the tile origin, (trows, tcols) its *actual* extent (clamped at a ragged edge), and dst_offset its base in the padded blocked layout.  A caller drives its own per-tile micro-kernel over each described block -- the tile-granular counterpart to `block`'s element-granular map.

```valor
public i32 tile(usize rows, usize cols, usize tile_rows, usize tile_cols, (usize, usize, usize, usize, usize, usize, usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rows`: usize (by value)
> - `cols`: usize (by value)
> - `tile_rows`: usize (by value)
> - `tile_cols`: usize (by value)
> - `emit`: (usize, usize, usize, usize, usize, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::layout::tile(rows, cols, tile_rows, tile_cols, emit);
> ```

> ### SEE ALSO
>
> - [`std::layout::ceil_div`](#fn-ceil-div)
> - [`std::layout::min_usize`](#fn-min-usize)
> - [`std::layout::is_pow2`](#fn-is-pow2)

<a id="fn-interleave"></a>

> ## `interleave`

> interleave: out[i*streams + k] = stream[k][i].

```valor
public i32 interleave(usize streams, usize length, (usize, usize) -> void move)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `streams`: usize (by value)
> - `length`: usize (by value)
> - `move`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::layout::interleave(streams, length, move);
> ```

> ### SEE ALSO
>
> - [`std::layout::ceil_div`](#fn-ceil-div)
> - [`std::layout::min_usize`](#fn-min-usize)
> - [`std::layout::is_pow2`](#fn-is-pow2)

<a id="fn-deinterleave"></a>

> ## `deinterleave`

> deinterleave: stream[k][i] = in[i*streams + k]. deinterleave: stream[k][i] = in[i*streams + k].  Inverse of interleave.

```valor
public i32 deinterleave(usize streams, usize length, (usize, usize) -> void move)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `streams`: usize (by value)
> - `length`: usize (by value)
> - `move`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::layout::deinterleave(streams, length, move);
> ```

> ### SEE ALSO
>
> - [`std::layout::ceil_div`](#fn-ceil-div)
> - [`std::layout::min_usize`](#fn-min-usize)
> - [`std::layout::is_pow2`](#fn-is-pow2)

<a id="fn-transpose-blocked"></a>

> ## `transpose_blocked`

> transpose_blocked: out-of-place transpose of a `rows x cols` row-major source (leading dim ld_src >= cols) into a `cols x rows` row-major destination (leading dim ld_dst >= rows), walked in `tile_size x tile_size` blocks so each inner sweep touches one cache-resident tile of each operand. transpose_blocked: out-of-place transpose of a `rows x cols` row-major source (leading dim ld_src >= cols) into a `cols x rows` row-major destination (leading dim ld_dst >= rows), walked in `tile_size x tile_size` blocks so each inner sweep touches one cache-resident tile of each operand.  For every real element calls move(dst, src) with src = gr*ld_src + gc, dst = gc*ld_dst + gr.

```valor
public i32 transpose_blocked(usize rows, usize cols, usize ld_src, usize ld_dst, usize tile_size, (usize, usize) -> void move)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^4)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rows`: usize (by value)
> - `cols`: usize (by value)
> - `ld_src`: usize (by value)
> - `ld_dst`: usize (by value)
> - `tile_size`: usize (by value)
> - `move`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::layout::transpose_blocked(rows, cols, ld_src, ld_dst, tile_size, move);
> ```

> ### SEE ALSO
>
> - [`std::layout::ceil_div`](#fn-ceil-div)
> - [`std::layout::min_usize`](#fn-min-usize)
> - [`std::layout::is_pow2`](#fn-is-pow2)

<a id="fn-transpose-in-place"></a>

> ## `transpose_in_place`

> transpose_in_place: in-place transpose of a square `n x n` matrix with leading dimension `ld` (>= n). transpose_in_place: in-place transpose of a square `n x n` matrix with leading dimension `ld` (>= n).  Emits swap(a, b) for every strictly-upper pair a = r*ld + c , b = c*ld + r   (c > r) so each off-diagonal pair is exchanged exactly once and the diagonal is left untouched.  Rectangular in-place transposition is a cycle-following permutation and is intentionally out of scope here (use transpose_blocked).

```valor
public i32 transpose_in_place(usize n, usize ld, (usize, usize) -> void swap)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `ld`: usize (by value)
> - `swap`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::layout::transpose_in_place(n, ld, swap);
> ```

> ### SEE ALSO
>
> - [`std::layout::ceil_div`](#fn-ceil-div)
> - [`std::layout::min_usize`](#fn-min-usize)
> - [`std::layout::is_pow2`](#fn-is-pow2)

<a id="fn-pack-contiguous"></a>

> ## `pack_contiguous`

> pack_contiguous: gather `count` elements starting at `origin` with element stride `stride` into a dense run. pack_contiguous: gather `count` elements starting at `origin` with element stride `stride` into a dense run.  move(dst, src): dst = i, src = origin + i*stride. A stride of 1 is an ordinary contiguous copy; a larger stride gathers a column / channel out of an interleaved buffer into unit-stride form.

```valor
public i32 pack_contiguous(usize count, usize origin, usize stride, (usize, usize) -> void move)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `origin`: usize (by value)
> - `stride`: usize (by value)
> - `move`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::layout::pack_contiguous(count, origin, stride, move);
> ```

> ### SEE ALSO
>
> - [`std::layout::ceil_div`](#fn-ceil-div)
> - [`std::layout::min_usize`](#fn-min-usize)
> - [`std::layout::is_pow2`](#fn-is-pow2)

<a id="fn-pack-strided"></a>

> ## `pack_strided`

> pack_strided: pack a `rows x cols` sub-block anchored at (row0, col0) out of a larger row-major source (leading dim ld_src) into a dense row-major run. pack_strided: pack a `rows x cols` sub-block anchored at (row0, col0) out of a larger row-major source (leading dim ld_src) into a dense row-major run. src = (row0 + r)*ld_src + (col0 + c) ,  dst = r*cols + c

```valor
public i32 pack_strided(usize rows, usize cols, usize ld_src, usize row0, usize col0, (usize, usize) -> void move)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rows`: usize (by value)
> - `cols`: usize (by value)
> - `ld_src`: usize (by value)
> - `row0`: usize (by value)
> - `col0`: usize (by value)
> - `move`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::layout::pack_strided(rows, cols, ld_src, row0, col0, move);
> ```

> ### SEE ALSO
>
> - [`std::layout::ceil_div`](#fn-ceil-div)
> - [`std::layout::min_usize`](#fn-min-usize)
> - [`std::layout::is_pow2`](#fn-is-pow2)

<a id="fn-pack-gemm-a-workspace"></a>

> ## `pack_gemm_a_workspace`

> Destination element count for pack_gemm_a (padded panels).

```valor
public usize pack_gemm_a_workspace(usize mc, usize kc, usize mr, usize mr_pad)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `mc`: usize (by value)
> - `kc`: usize (by value)
> - `mr`: usize (by value)
> - `mr_pad`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::layout::pack_gemm_a_workspace(mc, kc, mr, mr_pad);
> ```

> ### SEE ALSO
>
> - [`std::layout::ceil_div`](#fn-ceil-div)
> - [`std::layout::min_usize`](#fn-min-usize)
> - [`std::layout::is_pow2`](#fn-is-pow2)

<a id="fn-pack-gemm-a"></a>

> ## `pack_gemm_a`

> pack_gemm_a: pack an `mc x kc` A block (row-major, leading dim ld_a) into the canonical GEMM-A micro-panel layout: `ceil(mc/mr)` panels of `mr` rows, each panel stored *column-major* (contiguous down the mr rows for a fixed k) so the inner GEMM kernel streams a full mr-lane column with unit stride. pack_gemm_a: pack an `mc x kc` A block (row-major, leading dim ld_a) into the canonical GEMM-A micro-panel layout: `ceil(mc/mr)` panels of `mr` rows, each panel stored *column-major* (contiguous down the mr rows for a fixed k) so the inner GEMM kernel streams a full mr-lane column with unit stride.  `mr_pad` (>= mr) is the explicit padded panel row-stride the caller sets to a SIMD-aligned value; padded lanes at a ragged panel are skipped. src = (p*mr + i)*ld_a + k dst = p*(kc*mr_pad) + k*mr_pad + i        (i in [0, rows_this), k in [0, kc))

```valor
public i32 pack_gemm_a(usize mc, usize kc, usize ld_a, usize mr, usize mr_pad, (usize, usize) -> void move)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^3)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `mc`: usize (by value)
> - `kc`: usize (by value)
> - `ld_a`: usize (by value)
> - `mr`: usize (by value)
> - `mr_pad`: usize (by value)
> - `move`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::layout::pack_gemm_a(mc, kc, ld_a, mr, mr_pad, move);
> ```

> ### SEE ALSO
>
> - [`std::layout::ceil_div`](#fn-ceil-div)
> - [`std::layout::min_usize`](#fn-min-usize)
> - [`std::layout::is_pow2`](#fn-is-pow2)

<a id="fn-pack-gemm-b-workspace"></a>

> ## `pack_gemm_b_workspace`

> Destination element count for pack_gemm_b (padded panels).

```valor
public usize pack_gemm_b_workspace(usize kc, usize nc, usize nr, usize nr_pad)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kc`: usize (by value)
> - `nc`: usize (by value)
> - `nr`: usize (by value)
> - `nr_pad`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::layout::pack_gemm_b_workspace(kc, nc, nr, nr_pad);
> ```

> ### SEE ALSO
>
> - [`std::layout::ceil_div`](#fn-ceil-div)
> - [`std::layout::min_usize`](#fn-min-usize)
> - [`std::layout::is_pow2`](#fn-is-pow2)

<a id="fn-pack-gemm-b"></a>

> ## `pack_gemm_b`

> pack_gemm_b: pack a `kc x nc` B block (row-major, leading dim ld_b) into the canonical GEMM-B micro-panel layout: `ceil(nc/nr)` panels of `nr` columns, each panel stored *row-major* (contiguous across the nr columns for a fixed k) so the inner kernel streams a full nr-lane row with unit stride. pack_gemm_b: pack a `kc x nc` B block (row-major, leading dim ld_b) into the canonical GEMM-B micro-panel layout: `ceil(nc/nr)` panels of `nr` columns, each panel stored *row-major* (contiguous across the nr columns for a fixed k) so the inner kernel streams a full nr-lane row with unit stride.  `nr_pad` (>= nr) is the explicit padded panel column-stride; padded lanes are skipped. src = k*ld_b + (q*nr + j) dst = q*(kc*nr_pad) + k*nr_pad + j        (j in [0, cols_this), k in [0, kc))

```valor
public i32 pack_gemm_b(usize kc, usize nc, usize ld_b, usize nr, usize nr_pad, (usize, usize) -> void move)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^3)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kc`: usize (by value)
> - `nc`: usize (by value)
> - `ld_b`: usize (by value)
> - `nr`: usize (by value)
> - `nr_pad`: usize (by value)
> - `move`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::layout::pack_gemm_b(kc, nc, ld_b, nr, nr_pad, move);
> ```

> ### SEE ALSO
>
> - [`std::layout::ceil_div`](#fn-ceil-div)
> - [`std::layout::min_usize`](#fn-min-usize)
> - [`std::layout::is_pow2`](#fn-is-pow2)

<a id="fn-pack-attention-qkv-workspace"></a>

> ## `pack_attention_qkv_workspace`

> Destination element count for pack_attention_qkv (equals the input size).

```valor
public usize pack_attention_qkv_workspace(usize tokens, usize heads, usize head_dim)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tokens`: usize (by value)
> - `heads`: usize (by value)
> - `head_dim`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::layout::pack_attention_qkv_workspace(tokens, heads, head_dim);
> ```

> ### SEE ALSO
>
> - [`std::layout::ceil_div`](#fn-ceil-div)
> - [`std::layout::min_usize`](#fn-min-usize)
> - [`std::layout::is_pow2`](#fn-is-pow2)

<a id="fn-pack-attention-qkv"></a>

> ## `pack_attention_qkv`

> pack_attention_qkv: repack a fused QKV projection from token-major interleaved layout [tokens][3][heads][head_dim] into head-major contiguous layout [3][heads][tokens][head_dim], so each (which, head) slice -- the operand a single attention head streams -- is one contiguous, unit-stride block. pack_attention_qkv: repack a fused QKV projection from token-major interleaved layout [tokens][3][heads][head_dim] into head-major contiguous layout [3][heads][tokens][head_dim], so each (which, head) slice -- the operand a single attention head streams -- is one contiguous, unit-stride block. src = ((t*3 + w)*heads + h)*head_dim + d dst = ((w*heads + h)*tokens + t)*head_dim + d `which` w ranges 0..2 for Q, K, V respectively.

```valor
public i32 pack_attention_qkv(usize tokens, usize heads, usize head_dim, (usize, usize) -> void move)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^4)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tokens`: usize (by value)
> - `heads`: usize (by value)
> - `head_dim`: usize (by value)
> - `move`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::layout::pack_attention_qkv(tokens, heads, head_dim, move);
> ```

> ### SEE ALSO
>
> - [`std::layout::ceil_div`](#fn-ceil-div)
> - [`std::layout::min_usize`](#fn-min-usize)
> - [`std::layout::is_pow2`](#fn-is-pow2)

<a id="fn-pack-quantized-weights-workspace"></a>

> ## `pack_quantized_weights_workspace`

> Destination weight element count for pack_quantized_weights (padded groups).

```valor
public usize pack_quantized_weights_workspace(usize rows, usize cols, usize group)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rows`: usize (by value)
> - `cols`: usize (by value)
> - `group`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::layout::pack_quantized_weights_workspace(rows, cols, group);
> ```

> ### SEE ALSO
>
> - [`std::layout::ceil_div`](#fn-ceil-div)
> - [`std::layout::min_usize`](#fn-min-usize)
> - [`std::layout::is_pow2`](#fn-is-pow2)

<a id="fn-pack-quantized-weights"></a>

> ## `pack_quantized_weights`

> pack_quantized_weights: relayout a `rows x cols` weight matrix (row-major, leading dim ld_src) for grouped (per-`group` columns) quantized inference. pack_quantized_weights: relayout a `rows x cols` weight matrix (row-major, leading dim ld_src) for grouped (per-`group` columns) quantized inference. Each row's columns are cut into `ceil(cols/group)` groups of `group`; a group becomes one contiguous, padded run so a dequant kernel loads a group's packed weights and its single shared scale in one sweep.  Two callbacks: move(dst, src)                      : dst = (r*ngroups + g)*group + in_g src = r*ld_src + c scale_emit(scale_index, row, group_index) : scale_index = r*ngroups + g so the caller places (or computes) each group's scale at the canonical slot that lines up with the packed weights.  Padded columns at a ragged group are skipped by `move` (the scale slot is still emitted).

```valor
public i32 pack_quantized_weights(usize rows, usize cols, usize ld_src, usize group, (usize, usize) -> void move, (usize, usize, usize) -> void scale_emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rows`: usize (by value)
> - `cols`: usize (by value)
> - `ld_src`: usize (by value)
> - `group`: usize (by value)
> - `usize`: (usize, usize) -> void move, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `scale_emit`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::layout::pack_quantized_weights(rows, cols, ld_src, group, usize, usize, scale_emit);
> ```

> ### SEE ALSO
>
> - [`std::layout::ceil_div`](#fn-ceil-div)
> - [`std::layout::min_usize`](#fn-min-usize)
> - [`std::layout::is_pow2`](#fn-is-pow2)

<a id="fn-layout-convert"></a>

> ## `layout_convert`

> layout_convert: general strided N-D relayout. layout_convert: general strided N-D relayout.  The logical shape is `rank` dims (rank in [1, MAX_RANK]) read through `shape(d)`; the source and destination linear addresses of a multi-index are the dot products with `src_stride(d)` and `dst_stride(d)`.  The driver sweeps the logical index space in row-major (last dim fastest) order and calls move(dst, src) for each element.  This is the generic engine the specialized packers above are hand unrolled forms of; setting the strides to any permutation / broadcast pattern realises transpose, dimension reorder, or gather without a bespoke kernel. The index space is decomposed per element with divides and mods over the shape (no per-dim scratch array is held), keeping the driver allocation-free.

```valor
public i32 layout_convert(usize rank, (usize) -> usize shape, (usize) -> usize src_stride, (usize) -> usize dst_stride, (usize, usize) -> void move)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rank`: usize (by value)
> - `move`: (usize) -> usize shape, (usize) -> usize src_stride, (usize) -> usize dst_stride, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::layout::layout_convert(rank, move);
> ```

> ### SEE ALSO
>
> - [`std::layout::ceil_div`](#fn-ceil-div)
> - [`std::layout::min_usize`](#fn-min-usize)
> - [`std::layout::is_pow2`](#fn-is-pow2)

<a id="fn-aos-to-soa"></a>

> ## `aos_to_soa`

> aos_to_soa: an array of `count` structs of `fields` scalar fields each, laid out array-of-structs (field f of record i at i*fields + f), is transposed to struct-of-arrays (field f of record i at f*count + i), so each field becomes a unit-stride column a SIMD kernel can stream. aos_to_soa: an array of `count` structs of `fields` scalar fields each, laid out array-of-structs (field f of record i at i*fields + f), is transposed to struct-of-arrays (field f of record i at f*count + i), so each field becomes a unit-stride column a SIMD kernel can stream. src = i*fields + f ,  dst = f*count + i

```valor
public i32 aos_to_soa(usize count, usize fields, (usize, usize) -> void move)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `fields`: usize (by value)
> - `move`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::layout::aos_to_soa(count, fields, move);
> ```

> ### SEE ALSO
>
> - [`std::layout::ceil_div`](#fn-ceil-div)
> - [`std::layout::min_usize`](#fn-min-usize)
> - [`std::layout::is_pow2`](#fn-is-pow2)

<a id="fn-soa-to-aos"></a>

> ## `soa_to_aos`

> soa_to_aos: exact inverse of aos_to_soa. soa_to_aos: exact inverse of aos_to_soa. src = f*count + i ,  dst = i*fields + f

```valor
public i32 soa_to_aos(usize count, usize fields, (usize, usize) -> void move)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `fields`: usize (by value)
> - `move`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::layout::soa_to_aos(count, fields, move);
> ```

> ### SEE ALSO
>
> - [`std::layout::ceil_div`](#fn-ceil-div)
> - [`std::layout::min_usize`](#fn-min-usize)
> - [`std::layout::is_pow2`](#fn-is-pow2)

<a id="fn-morton-max-bits"></a>

> ## `morton_max_bits`

> Largest bits-per-coordinate that keeps an encoded key (and every intermediate weight) below 2^63 for a given spatial dimensionality. Largest bits-per-coordinate that keeps an encoded key (and every intermediate weight) below 2^63 for a given spatial dimensionality.

```valor
public usize morton_max_bits(usize dims)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `dims`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::layout::morton_max_bits(dims);
> ```

> ### SEE ALSO
>
> - [`std::layout::ceil_div`](#fn-ceil-div)
> - [`std::layout::min_usize`](#fn-min-usize)
> - [`std::layout::is_pow2`](#fn-is-pow2)

<a id="fn-morton-encode"></a>

> ## `morton_encode`

> morton_encode: interleave `bits` low bits of each of `dims` coordinates (dims in [2, 3]) into a Z-order key. morton_encode: interleave `bits` low bits of each of `dims` coordinates (dims in [2, 3]) into a Z-order key.  Coordinate d is read through coord(d); only its low `bits` bits participate (higher bits are ignored).  `bits` is clamped to morton_max_bits(dims) so the result never overflows / traps.  The key places coordinate d's bit i at key-bit i*dims + d (LSB-first, canonical). Returns 0 for an out-of-range dimensionality.

```valor
public u64 morton_encode(usize dims, usize bits, (usize) -> u64 coord)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `dims`: usize (by value)
> - `bits`: usize (by value)
> - `coord`: (usize) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::layout::morton_encode(dims, bits, coord);
> ```

> ### SEE ALSO
>
> - [`std::layout::ceil_div`](#fn-ceil-div)
> - [`std::layout::min_usize`](#fn-min-usize)
> - [`std::layout::is_pow2`](#fn-is-pow2)

<a id="fn-morton-decode"></a>

> ## `morton_decode`

> morton_decode: recover the `dims` coordinates from a Z-order key produced with the same `dims`/`bits`, delivering each through receive(dim, value). morton_decode: recover the `dims` coordinates from a Z-order key produced with the same `dims`/`bits`, delivering each through receive(dim, value).  The i-th bit of coordinate d is read from key-bit i*dims + d.  `bits` is clamped to morton_max_bits(dims) to match the encoder.  No-op for a bad dimensionality.

```valor
public void morton_decode(u64 code, usize dims, usize bits, (usize, u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `code`: u64 (by value)
> - `dims`: usize (by value)
> - `bits`: usize (by value)
> - `receive`: (usize, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::layout::morton_decode(code, dims, bits, receive);
> ```

> ### SEE ALSO
>
> - [`std::layout::ceil_div`](#fn-ceil-div)
> - [`std::layout::min_usize`](#fn-min-usize)
> - [`std::layout::is_pow2`](#fn-is-pow2)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Typing](STD-TYPING-DOC.md) · [Table of contents](standard-library/README.md) · [System →](STD-SYS-DOC.md)
