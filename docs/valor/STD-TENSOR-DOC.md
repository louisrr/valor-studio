<!-- stdlib-reference-style: modern -->
> # `std::tensor`

`std::tensor` tensor construction and compute operations.

[Standard library](standard-library/README.md) / [Algorithms and computing](standard-library/README.md#algorithms-and-computing) / **Tensors**

> **Source:** `stdlib/std/tensor.valor` · **Routines:** 34 public

## Routines

<details>
<summary>Browse all 34 routines</summary>

- [`rankIsValid`](#fn-rankisvalid)
- [`axisIsValid`](#fn-axisisvalid)
- [`layoutIsValid`](#fn-layoutisvalid)
- [`addFits`](#fn-addfits)
- [`multiplyFits`](#fn-multiplyfits)
- [`rangeIsValid`](#fn-rangeisvalid)
- [`shapeProductFits`](#fn-shapeproductfits)
- [`shapeElementCount`](#fn-shapeelementcount)
- [`descriptorRangeIsValid`](#fn-descriptorrangeisvalid)
- [`indexIsValid`](#fn-indexisvalid)
- [`physicalOffset`](#fn-physicaloffset)
- [`rowMajorContiguous`](#fn-rowmajorcontiguous)
- [`columnMajorContiguous`](#fn-columnmajorcontiguous)
- [`broadcastDimensionIsValid`](#fn-broadcastdimensionisvalid)
- [`broadcastStride`](#fn-broadcaststride)
- [`broadcastIsValid`](#fn-broadcastisvalid)
- [`sliceExtent`](#fn-sliceextent)
- [`sliceIsValid`](#fn-sliceisvalid)
- [`sliceOffset`](#fn-sliceoffset)
- [`sliceStride`](#fn-slicestride)
- [`permutationIsValid`](#fn-permutationisvalid)
- [`reshapeIsValid`](#fn-reshapeisvalid)
- [`gatherIsValid`](#fn-gatherisvalid)
- [`maskSelectedCount`](#fn-maskselectedcount)
- [`windowDimensionIsValid`](#fn-windowdimensionisvalid)
- [`windowCount`](#fn-windowcount)
- [`physicalOffsetFromLinear`](#fn-physicaloffsetfromlinear)
- [`tileBegin`](#fn-tilebegin)
- [`tileLength`](#fn-tilelength)
- [`tileNumaNode`](#fn-tilenumanode)
- [`contiguousRun`](#fn-contiguousrun)
- [`traverse`](#fn-traverse)
- [`evaluateUnary`](#fn-evaluateunary)
- [`evaluateBinary`](#fn-evaluatebinary)

</details>

## API reference

<a id="fn-rankisvalid"></a>

> ## `rankIsValid`

> Provides the module's **rank is valid** operation. Returns `bool`.

```valor
public bool rankIsValid(usize rank)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rank`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::tensor::rankIsValid(rank);
> ```

> ### SEE ALSO
>
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)
> - [`std::tensor::addFits`](#fn-addfits)

<a id="fn-axisisvalid"></a>

> ## `axisIsValid`

> Provides the module's **axis is valid** operation. Returns `bool`.

```valor
public bool axisIsValid(usize axis, usize rank)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `axis`: usize (by value)
> - `rank`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::tensor::axisIsValid(axis, rank);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)
> - [`std::tensor::addFits`](#fn-addfits)

<a id="fn-layoutisvalid"></a>

> ## `layoutIsValid`

> Provides the module's **layout is valid** operation. Returns `bool`.

```valor
public bool layoutIsValid(u8 layout)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `layout`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::tensor::layoutIsValid(layout);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::addFits`](#fn-addfits)

<a id="fn-addfits"></a>

> ## `addFits`

> Provides the module's **add fits** operation. Returns `bool`.

```valor
public bool addFits(usize left, usize right)
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
> bool result = std::tensor::addFits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)

<a id="fn-multiplyfits"></a>

> ## `multiplyFits`

> Provides the module's **multiply fits** operation. Returns `bool`.

```valor
public bool multiplyFits(usize left, usize right)
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
> bool result = std::tensor::multiplyFits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)

<a id="fn-rangeisvalid"></a>

> ## `rangeIsValid`

> Provides the module's **range is valid** operation. Returns `bool`.

```valor
public bool rangeIsValid(usize begin, usize count, usize length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `begin`: usize (by value)
> - `count`: usize (by value)
> - `length`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::tensor::rangeIsValid(begin, count, length);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)

<a id="fn-shapeproductfits"></a>

> ## `shapeProductFits`

> Zero extents are valid and describe an empty tensor. Zero extents are valid and describe an empty tensor.  The returned zero is therefore both the correct empty element count and the overflow sentinel; use shapeProductFits when the distinction matters.

```valor
public bool shapeProductFits(usize rank, (usize) -> usize extent)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rank`: usize (by value)
> - `extent`: (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::tensor::shapeProductFits(rank, extent);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)

<a id="fn-shapeelementcount"></a>

> ## `shapeElementCount`

> Provides the module's **shape element count** operation. Returns `usize`.

```valor
public usize shapeElementCount(usize rank, (usize) -> usize extent)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rank`: usize (by value)
> - `extent`: (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::tensor::shapeElementCount(rank, extent);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)

<a id="fn-descriptorrangeisvalid"></a>

> ## `descriptorRangeIsValid`

> Provides the module's **descriptor range is valid** operation. Returns `bool`.

```valor
public bool descriptorRangeIsValid(usize rank, usize offset, usize allocation_elements, (usize) -> usize extent, (usize) -> usize stride)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rank`: usize (by value)
> - `offset`: usize (by value)
> - `allocation_elements`: usize (by value)
> - `stride`: (usize) -> usize extent, (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::tensor::descriptorRangeIsValid(rank, offset, allocation_elements, stride);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)

<a id="fn-indexisvalid"></a>

> ## `indexIsValid`

> Provides the module's **index is valid** operation. Returns `bool`.

```valor
public bool indexIsValid(usize rank, (usize) -> usize coordinate, (usize) -> usize extent)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rank`: usize (by value)
> - `extent`: (usize) -> usize coordinate, (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::tensor::indexIsValid(rank, extent);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)

<a id="fn-physicaloffset"></a>

> ## `physicalOffset`

> Provides the module's **physical offset** operation. Returns `usize`.

```valor
public usize physicalOffset(usize rank, usize base_offset, (usize) -> usize coordinate, (usize) -> usize stride)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rank`: usize (by value)
> - `base_offset`: usize (by value)
> - `stride`: (usize) -> usize coordinate, (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::tensor::physicalOffset(rank, base_offset, stride);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)

<a id="fn-rowmajorcontiguous"></a>

> ## `rowMajorContiguous`

> Provides the module's **row major contiguous** operation. Returns `bool`.

```valor
public bool rowMajorContiguous(usize rank, (usize) -> usize extent, (usize) -> usize stride)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rank`: usize (by value)
> - `stride`: (usize) -> usize extent, (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::tensor::rowMajorContiguous(rank, stride);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)

<a id="fn-columnmajorcontiguous"></a>

> ## `columnMajorContiguous`

> Provides the module's **column major contiguous** operation. Returns `bool`.

```valor
public bool columnMajorContiguous(usize rank, (usize) -> usize extent, (usize) -> usize stride)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rank`: usize (by value)
> - `stride`: (usize) -> usize extent, (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::tensor::columnMajorContiguous(rank, stride);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)

<a id="fn-broadcastdimensionisvalid"></a>

> ## `broadcastDimensionIsValid`

> Provides the module's **broadcast dimension is valid** operation. Returns `bool`.

```valor
public bool broadcastDimensionIsValid(usize source, usize destination)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `source`: usize (by value)
> - `destination`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::tensor::broadcastDimensionIsValid(source, destination);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)

<a id="fn-broadcaststride"></a>

> ## `broadcastStride`

> Provides the module's **broadcast stride** operation. Returns `usize`.

```valor
public usize broadcastStride(usize source_extent, usize destination_extent, usize source_stride)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `source_extent`: usize (by value)
> - `destination_extent`: usize (by value)
> - `source_stride`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::tensor::broadcastStride(source_extent, destination_extent, source_stride);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)

<a id="fn-broadcastisvalid"></a>

> ## `broadcastIsValid`

> Provides the module's **broadcast is valid** operation. Returns `bool`.

```valor
public bool broadcastIsValid(usize rank, (usize) -> usize source_extent, (usize) -> usize destination_extent)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rank`: usize (by value)
> - `destination_extent`: (usize) -> usize source_extent, (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::tensor::broadcastIsValid(rank, destination_extent);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)

<a id="fn-sliceextent"></a>

> ## `sliceExtent`

> Provides the module's **slice extent** operation. Returns `usize`.

```valor
public usize sliceExtent(usize begin, usize end, usize step)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `begin`: usize (by value)
> - `end`: usize (by value)
> - `step`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::tensor::sliceExtent(begin, end, step);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)

<a id="fn-sliceisvalid"></a>

> ## `sliceIsValid`

> Provides the module's **slice is valid** operation. Returns `bool`.

```valor
public bool sliceIsValid(usize extent, usize begin, usize end, usize step)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `extent`: usize (by value)
> - `begin`: usize (by value)
> - `end`: usize (by value)
> - `step`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::tensor::sliceIsValid(extent, begin, end, step);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)

<a id="fn-sliceoffset"></a>

> ## `sliceOffset`

> Provides the module's **slice offset** operation. Returns `usize`.

```valor
public usize sliceOffset(usize base_offset, usize begin, usize stride)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `base_offset`: usize (by value)
> - `begin`: usize (by value)
> - `stride`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::tensor::sliceOffset(base_offset, begin, stride);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)

<a id="fn-slicestride"></a>

> ## `sliceStride`

> Provides the module's **slice stride** operation. Returns `usize`.

```valor
public usize sliceStride(usize stride, usize step)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `stride`: usize (by value)
> - `step`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::tensor::sliceStride(stride, step);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)

<a id="fn-permutationisvalid"></a>

> ## `permutationIsValid`

> Provides the module's **permutation is valid** operation. Returns `bool`.

```valor
public bool permutationIsValid(usize rank, (usize) -> usize permutation)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rank`: usize (by value)
> - `permutation`: (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::tensor::permutationIsValid(rank, permutation);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)

<a id="fn-reshapeisvalid"></a>

> ## `reshapeIsValid`

> Provides the module's **reshape is valid** operation. Returns `bool`.

```valor
public bool reshapeIsValid(usize source_rank, usize destination_rank, (usize) -> usize source_extent, (usize) -> usize destination_extent, bool source_contiguous)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `source_rank`: usize (by value)
> - `destination_rank`: usize (by value)
> - `source_contiguous`: (usize) -> usize source_extent, (usize) -> usize destination_extent, bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::tensor::reshapeIsValid(source_rank, destination_rank, source_contiguous);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)

<a id="fn-gatherisvalid"></a>

> ## `gatherIsValid`

> Provides the module's **gather is valid** operation. Returns `bool`.

```valor
public bool gatherIsValid(usize axis, usize rank, usize index_count, usize source_extent, (usize) -> usize read_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `axis`: usize (by value)
> - `rank`: usize (by value)
> - `index_count`: usize (by value)
> - `source_extent`: usize (by value)
> - `read_index`: (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::tensor::gatherIsValid(axis, rank, index_count, source_extent, read_index);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)

<a id="fn-maskselectedcount"></a>

> ## `maskSelectedCount`

> Provides the module's **mask selected count** operation. Returns `usize`.

```valor
public usize maskSelectedCount(usize mask_length, (usize) -> bool read_mask)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `mask_length`: usize (by value)
> - `read_mask`: (usize) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::tensor::maskSelectedCount(mask_length, read_mask);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)

<a id="fn-windowdimensionisvalid"></a>

> ## `windowDimensionIsValid`

> Provides the module's **window dimension is valid** operation. Returns `bool`.

```valor
public bool windowDimensionIsValid(usize extent, usize window, usize step)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `extent`: usize (by value)
> - `window`: usize (by value)
> - `step`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::tensor::windowDimensionIsValid(extent, window, step);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)

<a id="fn-windowcount"></a>

> ## `windowCount`

> Provides the module's **window count** operation. Returns `usize`.

```valor
public usize windowCount(usize extent, usize window, usize step)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `extent`: usize (by value)
> - `window`: usize (by value)
> - `step`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::tensor::windowCount(extent, window, step);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)

<a id="fn-physicaloffsetfromlinear"></a>

> ## `physicalOffsetFromLinear`

> Provides the module's **physical offset from linear** operation. Returns `usize`.

```valor
public usize physicalOffsetFromLinear(usize linear, usize rank, usize base_offset, (usize) -> usize extent, (usize) -> usize stride)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `linear`: usize (by value)
> - `rank`: usize (by value)
> - `base_offset`: usize (by value)
> - `stride`: (usize) -> usize extent, (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::tensor::physicalOffsetFromLinear(linear, rank, base_offset, stride);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)

<a id="fn-tilebegin"></a>

> ## `tileBegin`

> Deterministic balanced partitioning. Deterministic balanced partitioning.  Remainders are assigned to lower tile numbers, so results never depend on worker scheduling.

```valor
public usize tileBegin(usize length, usize tile_count, usize tile)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `tile_count`: usize (by value)
> - `tile`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::tensor::tileBegin(length, tile_count, tile);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)

<a id="fn-tilelength"></a>

> ## `tileLength`

> Provides the module's **tile length** operation. Returns `usize`.

```valor
public usize tileLength(usize length, usize tile_count, usize tile)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `tile_count`: usize (by value)
> - `tile`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::tensor::tileLength(length, tile_count, tile);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)

<a id="fn-tilenumanode"></a>

> ## `tileNumaNode`

> Provides the module's **tile numa node** operation. Returns `u32`.

```valor
public u32 tileNumaNode(usize tile, usize node_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tile`: usize (by value)
> - `node_count`: usize (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::tensor::tileNumaNode(tile, node_count);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)

<a id="fn-contiguousrun"></a>

> ## `contiguousRun`

> Provides the module's **contiguous run** operation. Returns `usize`.

```valor
public usize contiguousRun(usize length, usize linear, usize inner_extent, usize inner_stride)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `linear`: usize (by value)
> - `inner_extent`: usize (by value)
> - `inner_stride`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::tensor::contiguousRun(length, linear, inner_extent, inner_stride);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)

<a id="fn-traverse"></a>

> ## `traverse`

> Provides the module's **traverse** operation. Returns `i32`.

```valor
public i32 traverse(usize rank, usize base_offset, (usize) -> usize extent, (usize) -> usize stride, (usize, usize) -> void visit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rank`: usize (by value)
> - `base_offset`: usize (by value)
> - `visit`: (usize) -> usize extent, (usize) -> usize stride, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::tensor::traverse(rank, base_offset, visit);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)

<a id="fn-evaluateunary"></a>

> ## `evaluateUnary`

> Provides the module's **evaluate unary** operation. Returns `i32`.

```valor
public i32 evaluateUnary(usize rank, usize length, usize source_base, usize destination_base, (usize) -> usize extent, (usize) -> usize source_stride, (usize) -> usize destination_stride, (usize) -> T read, (T) -> T apply, (usize, T) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rank`: usize (by value)
> - `length`: usize (by value)
> - `source_base`: usize (by value)
> - `destination_base`: usize (by value)
> - `write`: (usize) -> usize extent, (usize) -> usize source_stride, (usize) -> usize destination_stride, (usize) -> T read, (T) -> T apply, (usize, T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::tensor::evaluateUnary(rank, length, source_base, destination_base, write);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)

<a id="fn-evaluatebinary"></a>

> ## `evaluateBinary`

> Provides the module's **evaluate binary** operation. Returns `i32`.

```valor
public i32 evaluateBinary(usize rank, usize length, usize left_base, usize right_base, usize destination_base, (usize) -> usize extent, (usize) -> usize left_stride, (usize) -> usize right_stride, (usize) -> usize destination_stride, (usize) -> T read_left, (usize) -> T read_right, (T, T) -> T apply, (usize, T) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rank`: usize (by value)
> - `length`: usize (by value)
> - `left_base`: usize (by value)
> - `right_base`: usize (by value)
> - `destination_base`: usize (by value)
> - `write`: (usize) -> usize extent, (usize) -> usize left_stride, (usize) -> usize right_stride, (usize) -> usize destination_stride, (usize) -> T read_left, (usize) -> T read_right, (T, T) -> T apply, (usize, T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::tensor::evaluateBinary(rank, length, left_base, right_base, destination_base, write);
> ```

> ### SEE ALSO
>
> - [`std::tensor::rankIsValid`](#fn-rankisvalid)
> - [`std::tensor::axisIsValid`](#fn-axisisvalid)
> - [`std::tensor::layoutIsValid`](#fn-layoutisvalid)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Quantitative computing](STD-QUANT-DOC.md) · [Table of contents](standard-library/README.md) · [Artificial intelligence →](STD-AI-DOC.md)
