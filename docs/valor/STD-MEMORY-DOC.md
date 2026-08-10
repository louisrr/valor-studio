<!-- stdlib-reference-style: modern -->
> # `std::memory`

`std::memory` memory-region and ownership helpers.

[Standard library](standard-library/README.md) / [Memory, storage, and I/O](standard-library/README.md#memory-storage-and-i-o) / **Memory**

> **Source:** `stdlib/std/memory.valor` · **Routines:** 31 public

## Routines

<details>
<summary>Browse all 31 routines</summary>

- [`alignmentIsValid`](#fn-alignmentisvalid)
- [`layoutIsValid`](#fn-layoutisvalid)
- [`alignedSize`](#fn-alignedsize)
- [`rangeFits`](#fn-rangefits)
- [`arenaRemaining`](#fn-arenaremaining)
- [`slabSizeClass`](#fn-slabsizeclass)
- [`cowTagIsValid`](#fn-cowtagisvalid)
- [`cowIsOwned`](#fn-cowisowned)
- [`sharedIsAlive`](#fn-sharedisalive)
- [`weakCanUpgrade`](#fn-weakcanupgrade)
- [`taggedPtrTagFits`](#fn-taggedptrtagfits)
- [`mappedPermissionsAreValid`](#fn-mappedpermissionsarevalid)
- [`alloc`](#fn-alloc)
- [`alloc_zeroed`](#fn-alloc-zeroed)
- [`realloc`](#fn-realloc)
- [`free`](#fn-free)
- [`usable_size`](#fn-usable-size)
- [`assumeAligned`](#fn-assumealigned)
- [`enableDeterministicAllocator`](#fn-enabledeterministicallocator)
- [`allocOnNuma`](#fn-alloconnuma)
- [`currentNumaNode`](#fn-currentnumanode)
- [`cacheLineBytes`](#fn-cachelinebytes)
- [`simdWidthBytes`](#fn-simdwidthbytes)
- [`detallocLatencyHistogram`](#fn-detalloclatencyhistogram)
- [`detallocFragmentation`](#fn-detallocfragmentation)
- [`bufferCreate`](#fn-buffercreate)
- [`bufferRetain`](#fn-bufferretain)
- [`bufferRelease`](#fn-bufferrelease)
- [`bufferData`](#fn-bufferdata)
- [`bufferLen`](#fn-bufferlen)
- [`bufferCap`](#fn-buffercap)

</details>

## API reference

<a id="fn-alignmentisvalid"></a>

> ## `alignmentIsValid`

> Provides the module's **alignment is valid** operation. Returns `bool`.

```valor
public bool alignmentIsValid(usize alignment)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `alignment`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::memory::alignmentIsValid(alignment);
> ```

> ### SEE ALSO
>
> - [`std::memory::layoutIsValid`](#fn-layoutisvalid)
> - [`std::memory::alignedSize`](#fn-alignedsize)
> - [`std::memory::rangeFits`](#fn-rangefits)

<a id="fn-layoutisvalid"></a>

> ## `layoutIsValid`

> Provides the module's **layout is valid** operation. Returns `bool`.

```valor
public bool layoutIsValid(usize size, usize alignment)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `size`: usize (by value)
> - `alignment`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::memory::layoutIsValid(size, alignment);
> ```

> ### SEE ALSO
>
> - [`std::memory::alignmentIsValid`](#fn-alignmentisvalid)
> - [`std::memory::alignedSize`](#fn-alignedsize)
> - [`std::memory::rangeFits`](#fn-rangefits)

<a id="fn-alignedsize"></a>

> ## `alignedSize`

> Provides the module's **aligned size** operation. Returns `usize`.

```valor
public usize alignedSize(usize size, usize alignment)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `size`: usize (by value)
> - `alignment`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::memory::alignedSize(size, alignment);
> ```

> ### SEE ALSO
>
> - [`std::memory::alignmentIsValid`](#fn-alignmentisvalid)
> - [`std::memory::layoutIsValid`](#fn-layoutisvalid)
> - [`std::memory::rangeFits`](#fn-rangefits)

<a id="fn-rangefits"></a>

> ## `rangeFits`

> Provides the module's **range fits** operation. Returns `bool`.

```valor
public bool rangeFits(usize offset, usize length, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: usize (by value)
> - `length`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::memory::rangeFits(offset, length, capacity);
> ```

> ### SEE ALSO
>
> - [`std::memory::alignmentIsValid`](#fn-alignmentisvalid)
> - [`std::memory::layoutIsValid`](#fn-layoutisvalid)
> - [`std::memory::alignedSize`](#fn-alignedsize)

<a id="fn-arenaremaining"></a>

> ## `arenaRemaining`

> Provides the module's **arena remaining** operation. Returns `usize`.

```valor
public usize arenaRemaining(usize capacity, usize used)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `used`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::memory::arenaRemaining(capacity, used);
> ```

> ### SEE ALSO
>
> - [`std::memory::alignmentIsValid`](#fn-alignmentisvalid)
> - [`std::memory::layoutIsValid`](#fn-layoutisvalid)
> - [`std::memory::alignedSize`](#fn-alignedsize)

<a id="fn-slabsizeclass"></a>

> ## `slabSizeClass`

> Provides the module's **slab size class** operation. Returns `usize`.

```valor
public usize slabSizeClass(usize size)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `size`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::memory::slabSizeClass(size);
> ```

> ### SEE ALSO
>
> - [`std::memory::alignmentIsValid`](#fn-alignmentisvalid)
> - [`std::memory::layoutIsValid`](#fn-layoutisvalid)
> - [`std::memory::alignedSize`](#fn-alignedsize)

<a id="fn-cowtagisvalid"></a>

> ## `cowTagIsValid`

> Provides the module's **cow tag is valid** operation. Returns `bool`.

```valor
public bool cowTagIsValid(u8 tag)
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
> bool result = std::memory::cowTagIsValid(tag);
> ```

> ### SEE ALSO
>
> - [`std::memory::alignmentIsValid`](#fn-alignmentisvalid)
> - [`std::memory::layoutIsValid`](#fn-layoutisvalid)
> - [`std::memory::alignedSize`](#fn-alignedsize)

<a id="fn-cowisowned"></a>

> ## `cowIsOwned`

> Provides the module's **cow is owned** operation. Returns `bool`.

```valor
public bool cowIsOwned(u8 tag)
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
> bool result = std::memory::cowIsOwned(tag);
> ```

> ### SEE ALSO
>
> - [`std::memory::alignmentIsValid`](#fn-alignmentisvalid)
> - [`std::memory::layoutIsValid`](#fn-layoutisvalid)
> - [`std::memory::alignedSize`](#fn-alignedsize)

<a id="fn-sharedisalive"></a>

> ## `sharedIsAlive`

> Provides the module's **shared is alive** operation. Returns `bool`.

```valor
public bool sharedIsAlive(usize strong_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `strong_count`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::memory::sharedIsAlive(strong_count);
> ```

> ### SEE ALSO
>
> - [`std::memory::alignmentIsValid`](#fn-alignmentisvalid)
> - [`std::memory::layoutIsValid`](#fn-layoutisvalid)
> - [`std::memory::alignedSize`](#fn-alignedsize)

<a id="fn-weakcanupgrade"></a>

> ## `weakCanUpgrade`

> Provides the module's **weak can upgrade** operation. Returns `bool`.

```valor
public bool weakCanUpgrade(usize strong_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `strong_count`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::memory::weakCanUpgrade(strong_count);
> ```

> ### SEE ALSO
>
> - [`std::memory::alignmentIsValid`](#fn-alignmentisvalid)
> - [`std::memory::layoutIsValid`](#fn-layoutisvalid)
> - [`std::memory::alignedSize`](#fn-alignedsize)

<a id="fn-taggedptrtagfits"></a>

> ## `taggedPtrTagFits`

> Provides the module's **tagged ptr tag fits** operation. Returns `bool`.

```valor
public bool taggedPtrTagFits(usize tag, u8 tag_bits)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: usize (by value)
> - `tag_bits`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::memory::taggedPtrTagFits(tag, tag_bits);
> ```

> ### SEE ALSO
>
> - [`std::memory::alignmentIsValid`](#fn-alignmentisvalid)
> - [`std::memory::layoutIsValid`](#fn-layoutisvalid)
> - [`std::memory::alignedSize`](#fn-alignedsize)

<a id="fn-mappedpermissionsarevalid"></a>

> ## `mappedPermissionsAreValid`

> Provides the module's **mapped permissions are valid** operation. Returns `bool`.

```valor
public bool mappedPermissionsAreValid(u8 permissions)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `permissions`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::memory::mappedPermissionsAreValid(permissions);
> ```

> ### SEE ALSO
>
> - [`std::memory::alignmentIsValid`](#fn-alignmentisvalid)
> - [`std::memory::layoutIsValid`](#fn-layoutisvalid)
> - [`std::memory::alignedSize`](#fn-alignedsize)

<a id="fn-alloc"></a>

> ## `alloc`

> Provides the module's **alloc** operation. Returns `ptr`.

```valor
public ptr alloc(usize size, usize align)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; Delegates to the runtime allocator: at least one valor_rt_* heap allocation on this path (see body).

> ### INPUT PARAMETERS
>
> - `size`: usize (by value)
> - `align`: usize (by value)

> ### RETURNS (ptr)

> ### EXAMPLE
>
> ```valor
> ptr result = std::memory::alloc(size, align);
> ```

> ### SEE ALSO
>
> - [`std::memory::alignmentIsValid`](#fn-alignmentisvalid)
> - [`std::memory::layoutIsValid`](#fn-layoutisvalid)
> - [`std::memory::alignedSize`](#fn-alignedsize)

<a id="fn-alloc-zeroed"></a>

> ## `alloc_zeroed`

> Provides the module's **alloc zeroed** operation. Returns `ptr`.

```valor
public ptr alloc_zeroed(usize size, usize align)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; Delegates to the runtime allocator: at least one valor_rt_* heap allocation on this path (see body).

> ### INPUT PARAMETERS
>
> - `size`: usize (by value)
> - `align`: usize (by value)

> ### RETURNS (ptr)

> ### EXAMPLE
>
> ```valor
> ptr result = std::memory::alloc_zeroed(size, align);
> ```

> ### SEE ALSO
>
> - [`std::memory::alignmentIsValid`](#fn-alignmentisvalid)
> - [`std::memory::layoutIsValid`](#fn-layoutisvalid)
> - [`std::memory::alignedSize`](#fn-alignedsize)

<a id="fn-realloc"></a>

> ## `realloc`

> Provides the module's **realloc** operation. Returns `ptr`.

```valor
public ptr realloc(ptr p, usize new_size, usize align)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; Delegates to the runtime allocator: at least one valor_rt_* heap allocation on this path (see body).

> ### INPUT PARAMETERS
>
> - `p`: ptr (by value)
> - `new_size`: usize (by value)
> - `align`: usize (by value)

> ### RETURNS (ptr)

> ### EXAMPLE
>
> ```valor
> ptr result = std::memory::realloc(p, new_size, align);
> ```

> ### SEE ALSO
>
> - [`std::memory::alignmentIsValid`](#fn-alignmentisvalid)
> - [`std::memory::layoutIsValid`](#fn-layoutisvalid)
> - [`std::memory::alignedSize`](#fn-alignedsize)

<a id="fn-free"></a>

> ## `free`

> Provides the module's **free** operation.

```valor
public void free(ptr p, usize size, usize align)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `p`: ptr (by value)
> - `size`: usize (by value)
> - `align`: usize (by value)

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::memory::free(p, size, align);
> ```

> ### SEE ALSO
>
> - [`std::memory::alignmentIsValid`](#fn-alignmentisvalid)
> - [`std::memory::layoutIsValid`](#fn-layoutisvalid)
> - [`std::memory::alignedSize`](#fn-alignedsize)

<a id="fn-usable-size"></a>

> ## `usable_size`

> Provides the module's **usable size** operation. Returns `usize`.

```valor
public usize usable_size(ptr p)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `p`: ptr (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::memory::usable_size(p);
> ```

> ### SEE ALSO
>
> - [`std::memory::alignmentIsValid`](#fn-alignmentisvalid)
> - [`std::memory::layoutIsValid`](#fn-layoutisvalid)
> - [`std::memory::alignedSize`](#fn-alignedsize)

<a id="fn-assumealigned"></a>

> ## `assumeAligned`

> Provides the module's **assume aligned** operation. Returns `ptr`.

```valor
public ptr assumeAligned(ptr p, usize align)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `p`: ptr (by value)
> - `align`: usize (by value)

> ### RETURNS (ptr)

> ### EXAMPLE
>
> ```valor
> ptr result = std::memory::assumeAligned(p, align);
> ```

> ### SEE ALSO
>
> - [`std::memory::alignmentIsValid`](#fn-alignmentisvalid)
> - [`std::memory::layoutIsValid`](#fn-layoutisvalid)
> - [`std::memory::alignedSize`](#fn-alignedsize)

<a id="fn-enabledeterministicallocator"></a>

> ## `enableDeterministicAllocator`

> Provides the module's **enable deterministic allocator** operation.

```valor
public void enableDeterministicAllocator(u32 flags, usize slab_page_size, usize max_slab_alloc)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u32 (by value)
> - `slab_page_size`: usize (by value)
> - `max_slab_alloc`: usize (by value)

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::memory::enableDeterministicAllocator(flags, slab_page_size, max_slab_alloc);
> ```

> ### SEE ALSO
>
> - [`std::memory::alignmentIsValid`](#fn-alignmentisvalid)
> - [`std::memory::layoutIsValid`](#fn-layoutisvalid)
> - [`std::memory::alignedSize`](#fn-alignedsize)

<a id="fn-alloconnuma"></a>

> ## `allocOnNuma`

> Provides the module's **alloc on numa** operation. Returns `ptr`.

```valor
public ptr allocOnNuma(usize size, usize align, u32 node)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; Delegates to the runtime allocator: at least one valor_rt_* heap allocation on this path (see body).

> ### INPUT PARAMETERS
>
> - `size`: usize (by value)
> - `align`: usize (by value)
> - `node`: u32 (by value)

> ### RETURNS (ptr)

> ### EXAMPLE
>
> ```valor
> ptr result = std::memory::allocOnNuma(size, align, node);
> ```

> ### SEE ALSO
>
> - [`std::memory::alignmentIsValid`](#fn-alignmentisvalid)
> - [`std::memory::layoutIsValid`](#fn-layoutisvalid)
> - [`std::memory::alignedSize`](#fn-alignedsize)

<a id="fn-currentnumanode"></a>

> ## `currentNumaNode`

> Provides the module's **current numa node** operation. Returns `u32`.

```valor
public u32 currentNumaNode()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::memory::currentNumaNode();
> ```

> ### SEE ALSO
>
> - [`std::memory::alignmentIsValid`](#fn-alignmentisvalid)
> - [`std::memory::layoutIsValid`](#fn-layoutisvalid)
> - [`std::memory::alignedSize`](#fn-alignedsize)

<a id="fn-cachelinebytes"></a>

> ## `cacheLineBytes`

> Provides the module's **cache line bytes** operation. Returns `u32`.

```valor
public u32 cacheLineBytes()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::memory::cacheLineBytes();
> ```

> ### SEE ALSO
>
> - [`std::memory::alignmentIsValid`](#fn-alignmentisvalid)
> - [`std::memory::layoutIsValid`](#fn-layoutisvalid)
> - [`std::memory::alignedSize`](#fn-alignedsize)

<a id="fn-simdwidthbytes"></a>

> ## `simdWidthBytes`

> Provides the module's **simd width bytes** operation. Returns `u32`.

```valor
public u32 simdWidthBytes()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::memory::simdWidthBytes();
> ```

> ### SEE ALSO
>
> - [`std::memory::alignmentIsValid`](#fn-alignmentisvalid)
> - [`std::memory::layoutIsValid`](#fn-layoutisvalid)
> - [`std::memory::alignedSize`](#fn-alignedsize)

<a id="fn-detalloclatencyhistogram"></a>

> ## `detallocLatencyHistogram`

> Provides the module's **detalloc latency histogram** operation.

```valor
public void detallocLatencyHistogram(ptr<u64, host> out_alloc, ptr<u64, host> out_free, usize buckets)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `out_alloc`: ptr<u64, host> (by value)
> - `out_free`: ptr<u64, host> (by value)
> - `buckets`: usize (by value)

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::memory::detallocLatencyHistogram(out_alloc, out_free, buckets);
> ```

> ### SEE ALSO
>
> - [`std::memory::alignmentIsValid`](#fn-alignmentisvalid)
> - [`std::memory::layoutIsValid`](#fn-layoutisvalid)
> - [`std::memory::alignedSize`](#fn-alignedsize)

<a id="fn-detallocfragmentation"></a>

> ## `detallocFragmentation`

> Provides the module's **detalloc fragmentation** operation.

```valor
public void detallocFragmentation(ptr<u64, host> out, usize out_len)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `out`: ptr<u64, host> (by value)
> - `out_len`: usize (by value)

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::memory::detallocFragmentation(out, out_len);
> ```

> ### SEE ALSO
>
> - [`std::memory::alignmentIsValid`](#fn-alignmentisvalid)
> - [`std::memory::layoutIsValid`](#fn-layoutisvalid)
> - [`std::memory::alignedSize`](#fn-alignedsize)

<a id="fn-buffercreate"></a>

> ## `bufferCreate`

> Provides the module's **buffer create** operation. Returns `Buffer`.

```valor
public Buffer bufferCreate(usize len, usize align)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; Delegates to the runtime allocator: at least one valor_rt_* heap allocation on this path (see body).

> ### INPUT PARAMETERS
>
> - `len`: usize (by value)
> - `align`: usize (by value)

> ### RETURNS (Buffer)

> ### EXAMPLE
>
> ```valor
> Buffer result = std::memory::bufferCreate(len, align);
> ```

> ### SEE ALSO
>
> - [`std::memory::alignmentIsValid`](#fn-alignmentisvalid)
> - [`std::memory::layoutIsValid`](#fn-layoutisvalid)
> - [`std::memory::alignedSize`](#fn-alignedsize)

<a id="fn-bufferretain"></a>

> ## `bufferRetain`

> Provides the module's **buffer retain** operation.

```valor
public void bufferRetain(Buffer b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `b`: Buffer (by value)

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::memory::bufferRetain(b);
> ```

> ### SEE ALSO
>
> - [`std::memory::alignmentIsValid`](#fn-alignmentisvalid)
> - [`std::memory::layoutIsValid`](#fn-layoutisvalid)
> - [`std::memory::alignedSize`](#fn-alignedsize)

<a id="fn-bufferrelease"></a>

> ## `bufferRelease`

> Provides the module's **buffer release** operation.

```valor
public void bufferRelease(Buffer b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `b`: Buffer (by value)

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::memory::bufferRelease(b);
> ```

> ### SEE ALSO
>
> - [`std::memory::alignmentIsValid`](#fn-alignmentisvalid)
> - [`std::memory::layoutIsValid`](#fn-layoutisvalid)
> - [`std::memory::alignedSize`](#fn-alignedsize)

<a id="fn-bufferdata"></a>

> ## `bufferData`

> Provides the module's **buffer data** operation. Returns `ptr`.

```valor
public ptr bufferData(Buffer b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `b`: Buffer (by value)

> ### RETURNS (ptr)

> ### EXAMPLE
>
> ```valor
> ptr result = std::memory::bufferData(b);
> ```

> ### SEE ALSO
>
> - [`std::memory::alignmentIsValid`](#fn-alignmentisvalid)
> - [`std::memory::layoutIsValid`](#fn-layoutisvalid)
> - [`std::memory::alignedSize`](#fn-alignedsize)

<a id="fn-bufferlen"></a>

> ## `bufferLen`

> Provides the module's **buffer len** operation. Returns `usize`.

```valor
public usize bufferLen(Buffer b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `b`: Buffer (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::memory::bufferLen(b);
> ```

> ### SEE ALSO
>
> - [`std::memory::alignmentIsValid`](#fn-alignmentisvalid)
> - [`std::memory::layoutIsValid`](#fn-layoutisvalid)
> - [`std::memory::alignedSize`](#fn-alignedsize)

<a id="fn-buffercap"></a>

> ## `bufferCap`

> Provides the module's **buffer cap** operation. Returns `usize`.

```valor
public usize bufferCap(Buffer b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `b`: Buffer (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::memory::bufferCap(b);
> ```

> ### SEE ALSO
>
> - [`std::memory::alignmentIsValid`](#fn-alignmentisvalid)
> - [`std::memory::layoutIsValid`](#fn-layoutisvalid)
> - [`std::memory::alignedSize`](#fn-alignedsize)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Artificial intelligence](STD-AI-DOC.md) · [Table of contents](standard-library/README.md) · [Memory algorithms →](STD-MEMORY-ALGO-DOC.md)
