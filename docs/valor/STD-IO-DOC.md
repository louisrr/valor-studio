<!-- stdlib-reference-style: modern -->
> # `std::io`

`std::io` general input/output operations.

[Standard library](standard-library/README.md) / [Memory, storage, and I/O](standard-library/README.md#memory-storage-and-i-o) / **Input and output**

> **Source:** `stdlib/std/io.valor` · **Routines:** 64 public · 1 internal

## Routines

<details>
<summary>Browse all 65 routines</summary>

- [`capability`](#fn-capability)
- [`write`](#fn-write)
- [`print`](#fn-print)
- [`eprint`](#fn-eprint)
- [`fixParse`](#fn-fixparse)
- [`fixFindTag`](#fn-fixfindtag)
- [`addFits`](#fn-addfits)
- [`multiplyFits`](#fn-multiplyfits)
- [`powerOfTwo`](#fn-poweroftwo)
- [`alignmentIsValid`](#fn-alignmentisvalid)
- [`rangeIsValid`](#fn-rangeisvalid)
- [`wrappedIndex`](#fn-wrappedindex)
- [`alignedSize`](#fn-alignedsize)
- [`ioSliceStateIsValid`](#fn-ioslicestateisvalid)
- [`ioBufferStateIsValid`](#fn-iobufferstateisvalid)
- [`ringStateIsValid`](#fn-ringstateisvalid)
- [`ringReadable`](#fn-ringreadable)
- [`ringWritable`](#fn-ringwritable)
- [`ringContiguousReadable`](#fn-ringcontiguousreadable)
- [`ringContiguousWritable`](#fn-ringcontiguouswritable)
- [`byteOrderIsValid`](#fn-byteorderisvalid)
- [`streamStateIsValid`](#fn-streamstateisvalid)
- [`mapStateIsValid`](#fn-mapstateisvalid)
- [`registeredBufferStateIsValid`](#fn-registeredbufferstateisvalid)
- [`dmaLayoutIsValid`](#fn-dmalayoutisvalid)
- [`selectNumaNode`](#fn-selectnumanode)
- [`reserveBufferWrite`](#fn-reservebufferwrite)
- [`commitBufferWrite`](#fn-commitbufferwrite)
- [`acquireBufferRead`](#fn-acquirebufferread)
- [`consumeBufferRead`](#fn-consumebufferread)
- [`pipeTryReserveWrite`](#fn-pipetryreservewrite)
- [`pipeCommitWrite`](#fn-pipecommitwrite)
- [`pipeTryAcquireRead`](#fn-pipetryacquireread)
- [`pipeConsumeRead`](#fn-pipeconsumeread)
- [`totalSliceBytes`](#fn-totalslicebytes)
- [`scatterRead`](#fn-scatterread)
- [`gatherWrite`](#fn-gatherwrite)
- [`copyExact`](#fn-copyexact)
- [`copyBlocks`](#fn-copyblocks)
- [`seekTarget`](#fn-seektarget)
- [`memoryRead`](#fn-memoryread)
- [`memoryWrite`](#fn-memorywrite)
- [`mapMemory`](#fn-mapmemory)
- [`unmapMemory`](#fn-unmapmemory)
- [`registerBuffer`](#fn-registerbuffer)
- [`unregisterBuffer`](#fn-unregisterbuffer)
- [`decodeU16`](#fn-decodeu16)
- [`encodeU16`](#fn-encodeu16)
- [`decodeU32`](#fn-decodeu32)
- [`encodeU32`](#fn-encodeu32)
- [`decodeU64`](#fn-decodeu64)
- [`encodeU64`](#fn-encodeu64)
- [`utf8SequenceWidth`](#fn-utf8sequencewidth)
- [`utf8Continuation`](#fn-utf8continuation)
- [`validateUtf8`](#fn-validateutf8)
- [`findLine`](#fn-findline)
- [`bufferedReadFill`](#fn-bufferedreadfill)
- [`bufferedWriteFlush`](#fn-bufferedwriteflush)
- [`asyncOperationIsValid`](#fn-asyncoperationisvalid)
- [`asyncRequestStateIsValid`](#fn-asyncrequeststateisvalid)
- [`submitAsyncIo`](#fn-submitasyncio)
- [`pollAsyncIo`](#fn-pollasyncio)
- [`cancelAsyncIo`](#fn-cancelasyncio)
- [`pipeProgress`](#fn-pipeprogress)
- [`asyncProgress`](#fn-asyncprogress)

</details>

## API reference

<a id="fn-capability"></a>

> ## `capability`

> *Internal API*
>
> Provides the module's **capability** operation. Returns `@`.

```valor
@capability(fs)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `fs`: fs (by value)

> ### RETURNS (@)

> ### EXAMPLE
>
> ```valor
> @ result = std::io::capability(fs);
> ```

> ### SEE ALSO
>
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)
> - [`std::io::eprint`](#fn-eprint)

<a id="fn-write"></a>

> ## `write`

> Provides the module's **write** operation. Returns `i32`.

```valor
public i32 write(i32 fd, string s)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `fd`: i32 (by value)
> - `s`: string (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::write(fd, s);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::print`](#fn-print)
> - [`std::io::eprint`](#fn-eprint)

<a id="fn-print"></a>

> ## `print`

> Provides the module's **print** operation.

```valor
public void print(string s)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `s`: string (by value)

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::io::print(s);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::eprint`](#fn-eprint)

<a id="fn-eprint"></a>

> ## `eprint`

> Provides the module's **eprint** operation.

```valor
public void eprint(string s)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `s`: string (by value)

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::io::eprint(s);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-fixparse"></a>

> ## `fixParse`

> Provides the module's **fix parse** operation. Returns `i32`.

```valor
public i32 fixParse(ptr<u8, host> msg, usize len, ptr<FixField, host> out_fields, u32 out_cap, ptr<u32, host> out_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `msg`: ptr<u8, host> (by value)
> - `len`: usize (by value)
> - `out_fields`: ptr<FixField, host> (by value)
> - `out_cap`: u32 (by value)
> - `out_count`: ptr<u32, host> (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::fixParse(msg, len, out_fields, out_cap, out_count);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-fixfindtag"></a>

> ## `fixFindTag`

> Provides the module's **fix find tag** operation. Returns `bool`.

```valor
public bool fixFindTag(ptr<u8, host> msg, usize len, u32 tag, ptr<u32, host> out_value_off, ptr<u32, host> out_value_len)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `msg`: ptr<u8, host> (by value)
> - `len`: usize (by value)
> - `tag`: u32 (by value)
> - `out_value_off`: ptr<u32, host> (by value)
> - `out_value_len`: ptr<u32, host> (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::io::fixFindTag(msg, len, tag, out_value_off, out_value_len);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

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
> bool result = std::io::addFits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

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
> bool result = std::io::multiplyFits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-poweroftwo"></a>

> ## `powerOfTwo`

> Provides the module's **power of two** operation. Returns `bool`.

```valor
public bool powerOfTwo(usize value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::io::powerOfTwo(value);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-alignmentisvalid"></a>

> ## `alignmentIsValid`

> Provides the module's **alignment is valid** operation. Returns `bool`.

```valor
public bool alignmentIsValid(usize alignment)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `alignment`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::io::alignmentIsValid(alignment);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-rangeisvalid"></a>

> ## `rangeIsValid`

> Provides the module's **range is valid** operation. Returns `bool`.

```valor
public bool rangeIsValid(usize start, usize count, usize length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `count`: usize (by value)
> - `length`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::io::rangeIsValid(start, count, length);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-wrappedindex"></a>

> ## `wrappedIndex`

> Provides the module's **wrapped index** operation. Returns `usize`.

```valor
public usize wrappedIndex(usize sequence, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `sequence`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::io::wrappedIndex(sequence, capacity);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

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
> usize result = std::io::alignedSize(size, alignment);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-ioslicestateisvalid"></a>

> ## `ioSliceStateIsValid`

> Provides the module's **io slice state is valid** operation. Returns `bool`.

```valor
public bool ioSliceStateIsValid(usize length, usize alignment)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `alignment`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::io::ioSliceStateIsValid(length, alignment);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-iobufferstateisvalid"></a>

> ## `ioBufferStateIsValid`

> Provides the module's **io buffer state is valid** operation. Returns `bool`.

```valor
public bool ioBufferStateIsValid(usize length, usize capacity, usize alignment, u8 storage)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `alignment`: usize (by value)
> - `storage`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::io::ioBufferStateIsValid(length, capacity, alignment, storage);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-ringstateisvalid"></a>

> ## `ringStateIsValid`

> Provides the module's **ring state is valid** operation. Returns `bool`.

```valor
public bool ringStateIsValid(usize read_sequence, usize write_sequence, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `read_sequence`: usize (by value)
> - `write_sequence`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::io::ringStateIsValid(read_sequence, write_sequence, capacity);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-ringreadable"></a>

> ## `ringReadable`

> Provides the module's **ring readable** operation. Returns `usize`.

```valor
public usize ringReadable(usize read_sequence, usize write_sequence, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `read_sequence`: usize (by value)
> - `write_sequence`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::io::ringReadable(read_sequence, write_sequence, capacity);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-ringwritable"></a>

> ## `ringWritable`

> Provides the module's **ring writable** operation. Returns `usize`.

```valor
public usize ringWritable(usize read_sequence, usize write_sequence, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `read_sequence`: usize (by value)
> - `write_sequence`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::io::ringWritable(read_sequence, write_sequence, capacity);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-ringcontiguousreadable"></a>

> ## `ringContiguousReadable`

> Provides the module's **ring contiguous readable** operation. Returns `usize`.

```valor
public usize ringContiguousReadable(usize read_sequence, usize write_sequence, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `read_sequence`: usize (by value)
> - `write_sequence`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::io::ringContiguousReadable(read_sequence, write_sequence, capacity);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-ringcontiguouswritable"></a>

> ## `ringContiguousWritable`

> Provides the module's **ring contiguous writable** operation. Returns `usize`.

```valor
public usize ringContiguousWritable(usize read_sequence, usize write_sequence, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `read_sequence`: usize (by value)
> - `write_sequence`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::io::ringContiguousWritable(read_sequence, write_sequence, capacity);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-byteorderisvalid"></a>

> ## `byteOrderIsValid`

> Provides the module's **byte order is valid** operation. Returns `bool`.

```valor
public bool byteOrderIsValid(u8 order)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `order`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::io::byteOrderIsValid(order);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-streamstateisvalid"></a>

> ## `streamStateIsValid`

> Provides the module's **stream state is valid** operation. Returns `bool`.

```valor
public bool streamStateIsValid(u8 state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::io::streamStateIsValid(state);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-mapstateisvalid"></a>

> ## `mapStateIsValid`

> Provides the module's **map state is valid** operation. Returns `bool`.

```valor
public bool mapStateIsValid(usize length, usize file_offset, usize page_size, u8 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `file_offset`: usize (by value)
> - `page_size`: usize (by value)
> - `flags`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::io::mapStateIsValid(length, file_offset, page_size, flags);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-registeredbufferstateisvalid"></a>

> ## `registeredBufferStateIsValid`

> Provides the module's **registered buffer state is valid** operation. Returns `bool`.

```valor
public bool registeredBufferStateIsValid(usize length, usize alignment, u64 registration)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `alignment`: usize (by value)
> - `registration`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::io::registeredBufferStateIsValid(length, alignment, registration);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-dmalayoutisvalid"></a>

> ## `dmaLayoutIsValid`

> Provides the module's **dma layout is valid** operation. Returns `bool`.

```valor
public bool dmaLayoutIsValid(usize length, usize alignment, usize device_alignment)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `alignment`: usize (by value)
> - `device_alignment`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::io::dmaLayoutIsValid(length, alignment, device_alignment);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-selectnumanode"></a>

> ## `selectNumaNode`

> Deterministic first-touch selection. Deterministic first-touch selection. Callers may replace this with their placement policy, but the descriptor always records the selected node.

```valor
public u32 selectNumaNode(u64 stream_id, u32 node_count, u8 policy, u32 preferred_node)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `stream_id`: u64 (by value)
> - `node_count`: u32 (by value)
> - `policy`: u8 (by value)
> - `preferred_node`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::io::selectNumaNode(stream_id, node_count, policy, preferred_node);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-reservebufferwrite"></a>

> ## `reserveBufferWrite`

> A successful reservation is one contiguous span. A successful reservation is one contiguous span. The caller may reserve again after committing to obtain the wrapped span.

```valor
public i32 reserveBufferWrite(usize read_sequence, usize write_sequence, usize capacity, usize requested, (usize, usize) -> void receive_span)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `read_sequence`: usize (by value)
> - `write_sequence`: usize (by value)
> - `capacity`: usize (by value)
> - `requested`: usize (by value)
> - `receive_span`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::reserveBufferWrite(read_sequence, write_sequence, capacity, requested, receive_span);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-commitbufferwrite"></a>

> ## `commitBufferWrite`

> Provides the module's **commit buffer write** operation. Returns `i32`.

```valor
public i32 commitBufferWrite(usize read_sequence, usize write_sequence, usize capacity, usize written, (usize) -> void store_write_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `read_sequence`: usize (by value)
> - `write_sequence`: usize (by value)
> - `capacity`: usize (by value)
> - `written`: usize (by value)
> - `store_write_release`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::commitBufferWrite(read_sequence, write_sequence, capacity, written, store_write_release);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-acquirebufferread"></a>

> ## `acquireBufferRead`

> Provides the module's **acquire buffer read** operation. Returns `i32`.

```valor
public i32 acquireBufferRead(usize read_sequence, usize write_sequence, usize capacity, usize requested, (usize, usize) -> void receive_span)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `read_sequence`: usize (by value)
> - `write_sequence`: usize (by value)
> - `capacity`: usize (by value)
> - `requested`: usize (by value)
> - `receive_span`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::acquireBufferRead(read_sequence, write_sequence, capacity, requested, receive_span);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-consumebufferread"></a>

> ## `consumeBufferRead`

> Provides the module's **consume buffer read** operation. Returns `i32`.

```valor
public i32 consumeBufferRead(usize read_sequence, usize write_sequence, usize capacity, usize consumed, (usize) -> void store_read_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `read_sequence`: usize (by value)
> - `write_sequence`: usize (by value)
> - `capacity`: usize (by value)
> - `consumed`: usize (by value)
> - `store_read_release`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::consumeBufferRead(read_sequence, write_sequence, capacity, consumed, store_read_release);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-pipetryreservewrite"></a>

> ## `pipeTryReserveWrite`

> SPSC zero-copy reservations are wait-free when the supplied loads/stores are wait-free. SPSC zero-copy reservations are wait-free when the supplied loads/stores are wait-free. Acquire/release ordering makes producer and consumer thread-safe.

```valor
public i32 pipeTryReserveWrite(usize capacity, usize requested, () -> usize load_read_acquire, () -> usize load_write_relaxed, (usize, usize) -> void receive_span)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `requested`: usize (by value)
> - `receive_span`: () -> usize load_read_acquire, () -> usize load_write_relaxed, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::pipeTryReserveWrite(capacity, requested, receive_span);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-pipecommitwrite"></a>

> ## `pipeCommitWrite`

> Provides the module's **pipe commit write** operation. Returns `i32`.

```valor
public i32 pipeCommitWrite(usize capacity, usize written, () -> usize load_read_acquire, () -> usize load_write_relaxed, (usize) -> void store_write_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `written`: usize (by value)
> - `store_write_release`: () -> usize load_read_acquire, () -> usize load_write_relaxed, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::pipeCommitWrite(capacity, written, store_write_release);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-pipetryacquireread"></a>

> ## `pipeTryAcquireRead`

> Provides the module's **pipe try acquire read** operation. Returns `i32`.

```valor
public i32 pipeTryAcquireRead(usize capacity, usize requested, () -> usize load_read_relaxed, () -> usize load_write_acquire, (usize, usize) -> void receive_span)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `requested`: usize (by value)
> - `receive_span`: () -> usize load_read_relaxed, () -> usize load_write_acquire, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::pipeTryAcquireRead(capacity, requested, receive_span);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-pipeconsumeread"></a>

> ## `pipeConsumeRead`

> Provides the module's **pipe consume read** operation. Returns `i32`.

```valor
public i32 pipeConsumeRead(usize capacity, usize consumed, () -> usize load_read_relaxed, () -> usize load_write_acquire, (usize) -> void store_read_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `consumed`: usize (by value)
> - `store_read_release`: () -> usize load_read_relaxed, () -> usize load_write_acquire, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::pipeConsumeRead(capacity, consumed, store_read_release);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-totalslicebytes"></a>

> ## `totalSliceBytes`

> Provides the module's **total slice bytes** operation. Returns `i32`.

```valor
public i32 totalSliceBytes(usize slice_count, (usize) -> usize slice_length, (usize) -> void receive_total)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `slice_count`: usize (by value)
> - `receive_total`: (usize) -> usize slice_length, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::totalSliceBytes(slice_count, receive_total);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-scatterread"></a>

> ## `scatterRead`

> transfer_slice operates directly on slice storage and returns bytes moved. transfer_slice operates directly on slice storage and returns bytes moved. A short transfer ends the batch without touching later slices.

```valor
public i32 scatterRead(usize slice_count, (usize) -> usize slice_capacity, (usize, usize) -> i64 transfer_slice, (usize) -> void receive_total)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `slice_count`: usize (by value)
> - `usize`: (usize) -> usize slice_capacity, ( (borrowed fn-ptr (callback))
> - `receive_total`: usize) -> i64 transfer_slice, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::scatterRead(slice_count, usize, receive_total);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-gatherwrite"></a>

> ## `gatherWrite`

> Provides the module's **gather write** operation. Returns `i32`.

```valor
public i32 gatherWrite(usize slice_count, (usize) -> usize slice_length, (usize, usize) -> i64 transfer_slice, (usize) -> void receive_total)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `slice_count`: usize (by value)
> - `usize`: (usize) -> usize slice_length, ( (borrowed fn-ptr (callback))
> - `receive_total`: usize) -> i64 transfer_slice, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::gatherWrite(slice_count, usize, receive_total);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-copyexact"></a>

> ## `copyExact`

> copyExact is the fallback for devices without vectored operations. copyExact is the fallback for devices without vectored operations. Access is still zero-allocation and bounds checked; vector-capable policies can supply a block callback through copyBlocks instead.

```valor
public i32 copyExact(usize source_length, usize source_start, usize destination_capacity, usize destination_start, usize count, (usize) -> u8 read_byte, (usize, u8) -> void write_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `source_length`: usize (by value)
> - `source_start`: usize (by value)
> - `destination_capacity`: usize (by value)
> - `destination_start`: usize (by value)
> - `count`: usize (by value)
> - `usize`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `write_byte`: u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::copyExact(source_length, source_start, destination_capacity, destination_start, count, usize, write_byte);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-copyblocks"></a>

> ## `copyBlocks`

> Provides the module's **copy blocks** operation. Returns `i32`.

```valor
public i32 copyBlocks(usize byte_count, usize block_bytes, (usize, usize) -> void copy_block)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_count`: usize (by value)
> - `block_bytes`: usize (by value)
> - `copy_block`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::copyBlocks(byte_count, block_bytes, copy_block);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-seektarget"></a>

> ## `seekTarget`

> Provides the module's **seek target** operation. Returns `i32`.

```valor
public i32 seekTarget(u64 position, u64 length, i64 offset, u8 origin, (u64) -> void receive_position)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `position`: u64 (by value)
> - `length`: u64 (by value)
> - `offset`: i64 (by value)
> - `origin`: u8 (by value)
> - `receive_position`: (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::seekTarget(position, length, offset, origin, receive_position);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-memoryread"></a>

> ## `memoryRead`

> Provides the module's **memory read** operation. Returns `i32`.

```valor
public i32 memoryRead(usize length, usize position, usize requested, (usize, usize) -> void receive_span, (usize) -> void receive_next_position)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `position`: usize (by value)
> - `requested`: usize (by value)
> - `receive_next_position`: (usize, usize) -> void receive_span, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::memoryRead(length, position, requested, receive_next_position);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-memorywrite"></a>

> ## `memoryWrite`

> Provides the module's **memory write** operation. Returns `i32`.

```valor
public i32 memoryWrite(usize length, usize capacity, usize position, usize requested, bool extend, (usize, usize) -> void receive_span, (usize, usize) -> void receive_state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `position`: usize (by value)
> - `requested`: usize (by value)
> - `extend`: bool (by value)
> - `usize`: (usize, usize) -> void receive_span, ( (borrowed fn-ptr (callback))
> - `receive_state`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::memoryWrite(length, capacity, position, requested, extend, usize, receive_state);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-mapmemory"></a>

> ## `mapMemory`

> These functions validate portable metadata and delegate the privileged target action to the active checked capability implementation. These functions validate portable metadata and delegate the privileged target action to the active checked capability implementation.

```valor
public i32 mapMemory(usize length, usize file_offset, usize page_size, u8 flags, (usize, usize, u8) -> i32 create_mapping)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `file_offset`: usize (by value)
> - `page_size`: usize (by value)
> - `flags`: u8 (by value)
> - `create_mapping`: (usize, usize, u8) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::mapMemory(length, file_offset, page_size, flags, create_mapping);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-unmapmemory"></a>

> ## `unmapMemory`

> Provides the module's **unmap memory** operation. Returns `i32`.

```valor
public i32 unmapMemory(u64 mapping, usize length, (u64, usize) -> i32 release_mapping)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `mapping`: u64 (by value)
> - `length`: usize (by value)
> - `release_mapping`: (u64, usize) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::unmapMemory(mapping, length, release_mapping);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-registerbuffer"></a>

> ## `registerBuffer`

> Provides the module's **register buffer** operation. Returns `i32`.

```valor
public i32 registerBuffer(usize length, usize alignment, u32 queue, (usize, usize, u32) -> i32 register_storage)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `alignment`: usize (by value)
> - `queue`: u32 (by value)
> - `register_storage`: (usize, usize, u32) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::registerBuffer(length, alignment, queue, register_storage);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-unregisterbuffer"></a>

> ## `unregisterBuffer`

> Provides the module's **unregister buffer** operation. Returns `i32`.

```valor
public i32 unregisterBuffer(u64 registration, u32 queue, (u64, u32) -> i32 unregister_storage)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `registration`: u64 (by value)
> - `queue`: u32 (by value)
> - `unregister_storage`: (u64, u32) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::unregisterBuffer(registration, queue, unregister_storage);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-decodeu16"></a>

> ## `decodeU16`

> Provides the module's **decode u16** operation. Returns `i32`.

```valor
public i32 decodeU16(usize available, u8 order, (usize) -> u8 read_byte, (u16) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `available`: usize (by value)
> - `order`: u8 (by value)
> - `receive`: (usize) -> u8 read_byte, (u16) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::decodeU16(available, order, receive);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-encodeu16"></a>

> ## `encodeU16`

> Provides the module's **encode u16** operation. Returns `i32`.

```valor
public i32 encodeU16(usize capacity, u16 value, u8 order, (usize, u8) -> void write_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `value`: u16 (by value)
> - `order`: u8 (by value)
> - `write_byte`: (usize, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::encodeU16(capacity, value, order, write_byte);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-decodeu32"></a>

> ## `decodeU32`

> Provides the module's **decode u32** operation. Returns `i32`.

```valor
public i32 decodeU32(usize available, u8 order, (usize) -> u8 read_byte, (u32) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `available`: usize (by value)
> - `order`: u8 (by value)
> - `receive`: (usize) -> u8 read_byte, (u32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::decodeU32(available, order, receive);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-encodeu32"></a>

> ## `encodeU32`

> Provides the module's **encode u32** operation. Returns `i32`.

```valor
public i32 encodeU32(usize capacity, u32 value, u8 order, (usize, u8) -> void write_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `value`: u32 (by value)
> - `order`: u8 (by value)
> - `write_byte`: (usize, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::encodeU32(capacity, value, order, write_byte);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-decodeu64"></a>

> ## `decodeU64`

> Provides the module's **decode u64** operation. Returns `i32`.

```valor
public i32 decodeU64(usize available, u8 order, (usize) -> u8 read_byte, (u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `available`: usize (by value)
> - `order`: u8 (by value)
> - `receive`: (usize) -> u8 read_byte, (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::decodeU64(available, order, receive);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-encodeu64"></a>

> ## `encodeU64`

> Provides the module's **encode u64** operation. Returns `i32`.

```valor
public i32 encodeU64(usize capacity, u64 value, u8 order, (usize, u8) -> void write_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `value`: u64 (by value)
> - `order`: u8 (by value)
> - `write_byte`: (usize, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::encodeU64(capacity, value, order, write_byte);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-utf8sequencewidth"></a>

> ## `utf8SequenceWidth`

> Provides the module's **utf8 sequence width** operation. Returns `usize`.

```valor
public usize utf8SequenceWidth(u8 lead)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `lead`: u8 (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::io::utf8SequenceWidth(lead);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-utf8continuation"></a>

> ## `utf8Continuation`

> Provides the module's **utf8 continuation** operation. Returns `bool`.

```valor
public bool utf8Continuation(u8 byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::io::utf8Continuation(byte);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-validateutf8"></a>

> ## `validateUtf8`

> Provides the module's **validate utf8** operation. Returns `i32`.

```valor
public i32 validateUtf8(usize length, (usize) -> u8 read_byte, (usize) -> void receive_code_points)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `receive_code_points`: (usize) -> u8 read_byte, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::validateUtf8(length, receive_code_points);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-findline"></a>

> ## `findLine`

> Returns a zero-copy line span. Returns a zero-copy line span. The delimiter is excluded from the span and consumed_bytes includes it, allowing the caller to advance a ring safely.

```valor
public i32 findLine(usize length, u8 newline, (usize) -> u8 read_byte, (usize, usize) -> void receive_line)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `newline`: u8 (by value)
> - `usize`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `receive_line`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::findLine(length, newline, usize, receive_line);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-bufferedreadfill"></a>

> ## `bufferedReadFill`

> Provides the module's **buffered read fill** operation. Returns `i32`.

```valor
public i32 bufferedReadFill(usize read_sequence, usize write_sequence, usize capacity, (usize, usize) -> i64 read_into_span, (usize) -> void store_write_release, (usize) -> void receive_transferred)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `read_sequence`: usize (by value)
> - `write_sequence`: usize (by value)
> - `capacity`: usize (by value)
> - `receive_transferred`: (usize, usize) -> i64 read_into_span, (usize) -> void store_write_release, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::bufferedReadFill(read_sequence, write_sequence, capacity, receive_transferred);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-bufferedwriteflush"></a>

> ## `bufferedWriteFlush`

> Provides the module's **buffered write flush** operation. Returns `i32`.

```valor
public i32 bufferedWriteFlush(usize read_sequence, usize write_sequence, usize capacity, (usize, usize) -> i64 write_from_span, (usize) -> void store_read_release, (usize) -> void receive_transferred)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `read_sequence`: usize (by value)
> - `write_sequence`: usize (by value)
> - `capacity`: usize (by value)
> - `receive_transferred`: (usize, usize) -> i64 write_from_span, (usize) -> void store_read_release, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::bufferedWriteFlush(read_sequence, write_sequence, capacity, receive_transferred);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-asyncoperationisvalid"></a>

> ## `asyncOperationIsValid`

> Provides the module's **async operation is valid** operation. Returns `bool`.

```valor
public bool asyncOperationIsValid(u8 operation)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `operation`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::io::asyncOperationIsValid(operation);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-asyncrequeststateisvalid"></a>

> ## `asyncRequestStateIsValid`

> Provides the module's **async request state is valid** operation. Returns `bool`.

```valor
public bool asyncRequestStateIsValid(u8 state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::io::asyncRequestStateIsValid(state);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-submitasyncio"></a>

> ## `submitAsyncIo`

> Provides the module's **submit async io** operation. Returns `i32`.

```valor
public i32 submitAsyncIo(u8 operation, usize slice_count, u64 generation, u32 queue, (u8, usize, u64, u32) -> i32 submit_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `operation`: u8 (by value)
> - `slice_count`: usize (by value)
> - `generation`: u64 (by value)
> - `queue`: u32 (by value)
> - `submit_release`: (u8, usize, u64, u32) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::submitAsyncIo(operation, slice_count, generation, queue, submit_release);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-pollasyncio"></a>

> ## `pollAsyncIo`

> Provides the module's **poll async io** operation. Returns `i32`.

```valor
public i32 pollAsyncIo(u64 generation, () -> u8 load_state_acquire, () -> i32 load_status, () -> u64 load_transferred, (i32, u64) -> void receive_completion)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `generation`: u64 (by value)
> - `receive_completion`: () -> u8 load_state_acquire, () -> i32 load_status, () -> u64 load_transferred, (i32, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::pollAsyncIo(generation, receive_completion);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-cancelasyncio"></a>

> ## `cancelAsyncIo`

> Provides the module's **cancel async io** operation. Returns `i32`.

```valor
public i32 cancelAsyncIo(u64 generation, (u8, u8) -> bool compare_exchange_state_acq_rel, (u64) -> void cancel_submission)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `generation`: u64 (by value)
> - `cancel_submission`: (u8, u8) -> bool compare_exchange_state_acq_rel, (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::io::cancelAsyncIo(generation, cancel_submission);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-pipeprogress"></a>

> ## `pipeProgress`

> Provides the module's **pipe progress** operation. Returns `u8`.

```valor
public u8 pipeProgress(bool atomics_lock_free, bool single_producer, bool single_consumer)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `atomics_lock_free`: bool (by value)
> - `single_producer`: bool (by value)
> - `single_consumer`: bool (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::io::pipeProgress(atomics_lock_free, single_producer, single_consumer);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

<a id="fn-asyncprogress"></a>

> ## `asyncProgress`

> Provides the module's **async progress** operation. Returns `u8`.

```valor
public u8 asyncProgress(bool submission_lock_free, bool completion_lock_free)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `submission_lock_free`: bool (by value)
> - `completion_lock_free`: bool (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::io::asyncProgress(submission_lock_free, completion_lock_free);
> ```

> ### SEE ALSO
>
> - [`std::io::capability`](#fn-capability)
> - [`std::io::write`](#fn-write)
> - [`std::io::print`](#fn-print)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Memory algorithms](STD-MEMORY-ALGO-DOC.md) · [Table of contents](standard-library/README.md) · [File systems →](STD-FS-DOC.md)
