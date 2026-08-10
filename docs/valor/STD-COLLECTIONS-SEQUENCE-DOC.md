<!-- stdlib-reference-style: modern -->
> # `std::collections::sequence`

`std::collections::sequence` sequence-oriented collection kernels.

[Standard library](standard-library/README.md) / [Collections and text](standard-library/README.md#collections-and-text) / **Sequence collections**

> **Source:** `stdlib/std/collections/sequence.valor` · **Routines:** 76 public

## Routines

<details>
<summary>Browse all 76 routines</summary>

- [`addFits`](#fn-addfits)
- [`multiplyFits`](#fn-multiplyfits)
- [`lengthFitsCapacity`](#fn-lengthfitscapacity)
- [`indexIsValid`](#fn-indexisvalid)
- [`insertIndexIsValid`](#fn-insertindexisvalid)
- [`rangeIsValid`](#fn-rangeisvalid)
- [`remainingCapacity`](#fn-remainingcapacity)
- [`canAppend`](#fn-canappend)
- [`appendedLength`](#fn-appendedlength)
- [`poppedLength`](#fn-poppedlength)
- [`clampedLength`](#fn-clampedlength)
- [`geometricCapacity`](#fn-geometriccapacity)
- [`reserveExactCapacity`](#fn-reserveexactcapacity)
- [`storageModeIsValid`](#fn-storagemodeisvalid)
- [`smallVectorStateIsValid`](#fn-smallvectorstateisvalid)
- [`inlineVectorStateIsValid`](#fn-inlinevectorstateisvalid)
- [`sliceStateIsValid`](#fn-slicestateisvalid)
- [`stridedSliceStateIsValid`](#fn-stridedslicestateisvalid)
- [`stridedPhysicalIndex`](#fn-stridedphysicalindex)
- [`copyRange`](#fn-copyrange)
- [`moveRangeRight`](#fn-moverangeright)
- [`moveRangeLeft`](#fn-moverangeleft)
- [`reverseRange`](#fn-reverserange)
- [`fillRange`](#fn-fillrange)
- [`copyRangeI32`](#fn-copyrangei32)
- [`moveRangeRightI32`](#fn-moverangerighti32)
- [`moveRangeLeftI32`](#fn-moverangelefti32)
- [`reverseRangeI32`](#fn-reverserangei32)
- [`fillRangeI32`](#fn-fillrangei32)
- [`bitWordIndex`](#fn-bitwordindex)
- [`bitIndexInWord`](#fn-bitindexinword)
- [`bitMask`](#fn-bitmask)
- [`wordsForBits`](#fn-wordsforbits)
- [`bitStorageFits`](#fn-bitstoragefits)
- [`bitIndexIsValid`](#fn-bitindexisvalid)
- [`powerOfTwo`](#fn-poweroftwo)
- [`wrappedIndex`](#fn-wrappedindex)
- [`dequePhysicalIndex`](#fn-dequephysicalindex)
- [`dequePushFrontHead`](#fn-dequepushfronthead)
- [`dequePopFrontHead`](#fn-dequepopfronthead)
- [`ringStateIsValid`](#fn-ringstateisvalid)
- [`ringLength`](#fn-ringlength)
- [`ringCanPush`](#fn-ringcanpush)
- [`ringCanPop`](#fn-ringcanpop)
- [`ringPhysicalIndex`](#fn-ringphysicalindex)
- [`circularPolicyIsValid`](#fn-circularpolicyisvalid)
- [`circularStateIsValid`](#fn-circularstateisvalid)
- [`circularPushLength`](#fn-circularpushlength)
- [`circularHeadAfterOverwrite`](#fn-circularheadafteroverwrite)
- [`gapSize`](#fn-gapsize)
- [`gapBufferLength`](#fn-gapbufferlength)
- [`gapBufferStateIsValid`](#fn-gapbufferstateisvalid)
- [`gapPhysicalIndex`](#fn-gapphysicalindex)
- [`chunkSizeIsValid`](#fn-chunksizeisvalid)
- [`chunkIndex`](#fn-chunkindex)
- [`chunkOffset`](#fn-chunkoffset)
- [`chunksForLength`](#fn-chunksforlength)
- [`chunkedStateIsValid`](#fn-chunkedstateisvalid)
- [`segmentContains`](#fn-segmentcontains)
- [`segmentOffset`](#fn-segmentoffset)
- [`pageStateIsValid`](#fn-pagestateisvalid)
- [`pageIndex`](#fn-pageindex)
- [`pageOffset`](#fn-pageoffset)
- [`stableVectorStateIsValid`](#fn-stablevectorstateisvalid)
- [`numaPolicyIsValid`](#fn-numapolicyisvalid)
- [`partitionBegin`](#fn-partitionbegin)
- [`partitionLength`](#fn-partitionlength)
- [`linkedLengthAfterInsert`](#fn-linkedlengthafterinsert)
- [`linkedLengthAfterRemove`](#fn-linkedlengthafterremove)
- [`cursorStateIsValid`](#fn-cursorstateisvalid)
- [`cursorMoveNext`](#fn-cursormovenext)
- [`cursorMovePrevious`](#fn-cursormoveprevious)
- [`freeListStateIsValid`](#fn-freeliststateisvalid)
- [`freeListCanAcquire`](#fn-freelistcanacquire)
- [`freeListAfterAcquire`](#fn-freelistafteracquire)
- [`freeListAfterRelease`](#fn-freelistafterrelease)

</details>

## API reference

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
> bool result = std::collections::sequence::addFits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)
> - [`std::collections::sequence::indexIsValid`](#fn-indexisvalid)

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
> bool result = std::collections::sequence::multiplyFits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)
> - [`std::collections::sequence::indexIsValid`](#fn-indexisvalid)

<a id="fn-lengthfitscapacity"></a>

> ## `lengthFitsCapacity`

> Provides the module's **length fits capacity** operation. Returns `bool`.

```valor
public bool lengthFitsCapacity(usize length, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::sequence::lengthFitsCapacity(length, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::indexIsValid`](#fn-indexisvalid)

<a id="fn-indexisvalid"></a>

> ## `indexIsValid`

> Provides the module's **index is valid** operation. Returns `bool`.

```valor
public bool indexIsValid(usize index, usize length)
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
> bool result = std::collections::sequence::indexIsValid(index, length);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-insertindexisvalid"></a>

> ## `insertIndexIsValid`

> Provides the module's **insert index is valid** operation. Returns `bool`.

```valor
public bool insertIndexIsValid(usize index, usize length)
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
> bool result = std::collections::sequence::insertIndexIsValid(index, length);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

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
> bool result = std::collections::sequence::rangeIsValid(start, count, length);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-remainingcapacity"></a>

> ## `remainingCapacity`

> Provides the module's **remaining capacity** operation. Returns `usize`.

```valor
public usize remainingCapacity(usize length, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::sequence::remainingCapacity(length, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-canappend"></a>

> ## `canAppend`

> Provides the module's **can append** operation. Returns `bool`.

```valor
public bool canAppend(usize length, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::sequence::canAppend(length, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-appendedlength"></a>

> ## `appendedLength`

> Provides the module's **appended length** operation. Returns `usize`.

```valor
public usize appendedLength(usize length, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::sequence::appendedLength(length, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-poppedlength"></a>

> ## `poppedLength`

> Provides the module's **popped length** operation. Returns `usize`.

```valor
public usize poppedLength(usize length)
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
> usize result = std::collections::sequence::poppedLength(length);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-clampedlength"></a>

> ## `clampedLength`

> Provides the module's **clamped length** operation. Returns `usize`.

```valor
public usize clampedLength(usize length, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::sequence::clampedLength(length, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-geometriccapacity"></a>

> ## `geometricCapacity`

> Geometric<3, 2> growth with overflow detection and a deterministic fallback to the exact required capacity. Geometric<3, 2> growth with overflow detection and a deterministic fallback to the exact required capacity.

```valor
public usize geometricCapacity(usize current, usize required)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `current`: usize (by value)
> - `required`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::sequence::geometricCapacity(current, required);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-reserveexactcapacity"></a>

> ## `reserveExactCapacity`

> Provides the module's **reserve exact capacity** operation. Returns `usize`.

```valor
public usize reserveExactCapacity(usize current, usize requested)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `current`: usize (by value)
> - `requested`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::sequence::reserveExactCapacity(current, requested);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-storagemodeisvalid"></a>

> ## `storageModeIsValid`

> Provides the module's **storage mode is valid** operation. Returns `bool`.

```valor
public bool storageModeIsValid(u8 mode)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `mode`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::sequence::storageModeIsValid(mode);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-smallvectorstateisvalid"></a>

> ## `smallVectorStateIsValid`

> Provides the module's **small vector state is valid** operation. Returns `bool`.

```valor
public bool smallVectorStateIsValid(usize length, usize capacity, usize inline_capacity, u8 mode)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `inline_capacity`: usize (by value)
> - `mode`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::sequence::smallVectorStateIsValid(length, capacity, inline_capacity, mode);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-inlinevectorstateisvalid"></a>

> ## `inlineVectorStateIsValid`

> Provides the module's **inline vector state is valid** operation. Returns `bool`.

```valor
public bool inlineVectorStateIsValid(usize length, usize capacity, usize fixed_capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `fixed_capacity`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::sequence::inlineVectorStateIsValid(length, capacity, fixed_capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-slicestateisvalid"></a>

> ## `sliceStateIsValid`

> Provides the module's **slice state is valid** operation. Returns `bool`.

```valor
public bool sliceStateIsValid(usize start, usize length, usize backing_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `length`: usize (by value)
> - `backing_length`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::sequence::sliceStateIsValid(start, length, backing_length);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-stridedslicestateisvalid"></a>

> ## `stridedSliceStateIsValid`

> Provides the module's **strided slice state is valid** operation. Returns `bool`.

```valor
public bool stridedSliceStateIsValid(usize start, usize length, usize stride, usize backing_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `length`: usize (by value)
> - `stride`: usize (by value)
> - `backing_length`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::sequence::stridedSliceStateIsValid(start, length, stride, backing_length);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-stridedphysicalindex"></a>

> ## `stridedPhysicalIndex`

> Provides the module's **strided physical index** operation. Returns `usize`.

```valor
public usize stridedPhysicalIndex(usize start, usize logical_index, usize stride)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `logical_index`: usize (by value)
> - `stride`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::sequence::stridedPhysicalIndex(start, logical_index, stride);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-copyrange"></a>

> ## `copyRange`

> Provides the module's **copy range** operation. Returns `i32`.

```valor
public i32 copyRange(usize source_length, usize source_start, usize destination_capacity, usize destination_start, usize count, (usize) -> T read, (usize, T) -> void write)
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
> - `usize`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `write`: T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::sequence::copyRange(source_length, source_start, destination_capacity, destination_start, count, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-moverangeright"></a>

> ## `moveRangeRight`

> Provides the module's **move range right** operation. Returns `i32`.

```valor
public i32 moveRangeRight(usize length, usize capacity, usize start, usize count, usize distance, (usize) -> T read, (usize, T) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `start`: usize (by value)
> - `count`: usize (by value)
> - `distance`: usize (by value)
> - `usize`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `write`: T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::sequence::moveRangeRight(length, capacity, start, count, distance, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-moverangeleft"></a>

> ## `moveRangeLeft`

> Provides the module's **move range left** operation. Returns `i32`.

```valor
public i32 moveRangeLeft(usize length, usize start, usize count, usize distance, (usize) -> T read, (usize, T) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `start`: usize (by value)
> - `count`: usize (by value)
> - `distance`: usize (by value)
> - `usize`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `write`: T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::sequence::moveRangeLeft(length, start, count, distance, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-reverserange"></a>

> ## `reverseRange`

> Provides the module's **reverse range** operation. Returns `i32`.

```valor
public i32 reverseRange(usize length, usize start, usize count, (usize) -> T read, (usize, T) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `start`: usize (by value)
> - `count`: usize (by value)
> - `usize`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `write`: T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::sequence::reverseRange(length, start, count, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-fillrange"></a>

> ## `fillRange`

> Provides the module's **fill range** operation. Returns `i32`.

```valor
public i32 fillRange(usize capacity, usize start, usize count, T value, (usize, T) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `start`: usize (by value)
> - `count`: usize (by value)
> - `value`: T (by value)
> - `write`: (usize, T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::sequence::fillRange(capacity, start, count, value, write);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-copyrangei32"></a>

> ## `copyRangeI32`

> Valor v0.1 records generic functions in imported module metadata but does not yet code-generate their cross-module instantiations. Valor v0.1 records generic functions in imported module metadata but does not yet code-generate their cross-module instantiations.  These i32 forms provide immediately callable core operations for the language's primary integer sequence element type while retaining the fully generic definitions above for monomorphization-capable compilation modes.

```valor
public i32 copyRangeI32(usize source_length, usize source_start, usize destination_capacity, usize destination_start, usize count, (usize) -> i32 read, (usize, i32) -> void write)
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
> - `usize`: (usize) -> i32 read, ( (borrowed fn-ptr (callback))
> - `write`: i32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::sequence::copyRangeI32(source_length, source_start, destination_capacity, destination_start, count, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-moverangerighti32"></a>

> ## `moveRangeRightI32`

> Provides the module's **move range right i32** operation. Returns `i32`.

```valor
public i32 moveRangeRightI32(usize length, usize capacity, usize start, usize count, usize distance, (usize) -> i32 read, (usize, i32) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `start`: usize (by value)
> - `count`: usize (by value)
> - `distance`: usize (by value)
> - `usize`: (usize) -> i32 read, ( (borrowed fn-ptr (callback))
> - `write`: i32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::sequence::moveRangeRightI32(length, capacity, start, count, distance, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-moverangelefti32"></a>

> ## `moveRangeLeftI32`

> Provides the module's **move range left i32** operation. Returns `i32`.

```valor
public i32 moveRangeLeftI32(usize length, usize start, usize count, usize distance, (usize) -> i32 read, (usize, i32) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `start`: usize (by value)
> - `count`: usize (by value)
> - `distance`: usize (by value)
> - `usize`: (usize) -> i32 read, ( (borrowed fn-ptr (callback))
> - `write`: i32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::sequence::moveRangeLeftI32(length, start, count, distance, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-reverserangei32"></a>

> ## `reverseRangeI32`

> Provides the module's **reverse range i32** operation. Returns `i32`.

```valor
public i32 reverseRangeI32(usize length, usize start, usize count, (usize) -> i32 read, (usize, i32) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `start`: usize (by value)
> - `count`: usize (by value)
> - `usize`: (usize) -> i32 read, ( (borrowed fn-ptr (callback))
> - `write`: i32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::sequence::reverseRangeI32(length, start, count, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-fillrangei32"></a>

> ## `fillRangeI32`

> Provides the module's **fill range i32** operation. Returns `i32`.

```valor
public i32 fillRangeI32(usize capacity, usize start, usize count, i32 value, (usize, i32) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `start`: usize (by value)
> - `count`: usize (by value)
> - `value`: i32 (by value)
> - `write`: (usize, i32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::sequence::fillRangeI32(capacity, start, count, value, write);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-bitwordindex"></a>

> ## `bitWordIndex`

> Provides the module's **bit word index** operation. Returns `usize`.

```valor
public usize bitWordIndex(usize bit_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bit_index`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::sequence::bitWordIndex(bit_index);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-bitindexinword"></a>

> ## `bitIndexInWord`

> Provides the module's **bit index in word** operation. Returns `usize`.

```valor
public usize bitIndexInWord(usize bit_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bit_index`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::sequence::bitIndexInWord(bit_index);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-bitmask"></a>

> ## `bitMask`

> Provides the module's **bit mask** operation. Returns `u64`.

```valor
public u64 bitMask(usize bit_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bit_index`: usize (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::collections::sequence::bitMask(bit_index);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-wordsforbits"></a>

> ## `wordsForBits`

> Provides the module's **words for bits** operation. Returns `usize`.

```valor
public usize wordsForBits(usize bit_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bit_count`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::sequence::wordsForBits(bit_count);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-bitstoragefits"></a>

> ## `bitStorageFits`

> Provides the module's **bit storage fits** operation. Returns `bool`.

```valor
public bool bitStorageFits(usize bit_count, usize word_capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bit_count`: usize (by value)
> - `word_capacity`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::sequence::bitStorageFits(bit_count, word_capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-bitindexisvalid"></a>

> ## `bitIndexIsValid`

> Provides the module's **bit index is valid** operation. Returns `bool`.

```valor
public bool bitIndexIsValid(usize bit_index, usize bit_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bit_index`: usize (by value)
> - `bit_count`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::sequence::bitIndexIsValid(bit_index, bit_count);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

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
> bool result = std::collections::sequence::powerOfTwo(value);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-wrappedindex"></a>

> ## `wrappedIndex`

> Provides the module's **wrapped index** operation. Returns `usize`.

```valor
public usize wrappedIndex(usize index, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::sequence::wrappedIndex(index, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-dequephysicalindex"></a>

> ## `dequePhysicalIndex`

> Provides the module's **deque physical index** operation. Returns `usize`.

```valor
public usize dequePhysicalIndex(usize head, usize logical_index, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `head`: usize (by value)
> - `logical_index`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::sequence::dequePhysicalIndex(head, logical_index, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-dequepushfronthead"></a>

> ## `dequePushFrontHead`

> Provides the module's **deque push front head** operation. Returns `usize`.

```valor
public usize dequePushFrontHead(usize head, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `head`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::sequence::dequePushFrontHead(head, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-dequepopfronthead"></a>

> ## `dequePopFrontHead`

> Provides the module's **deque pop front head** operation. Returns `usize`.

```valor
public usize dequePopFrontHead(usize head, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `head`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::sequence::dequePopFrontHead(head, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-ringstateisvalid"></a>

> ## `ringStateIsValid`

> Provides the module's **ring state is valid** operation. Returns `bool`.

```valor
public bool ringStateIsValid(usize head_sequence, usize tail_sequence, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `head_sequence`: usize (by value)
> - `tail_sequence`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::sequence::ringStateIsValid(head_sequence, tail_sequence, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-ringlength"></a>

> ## `ringLength`

> Provides the module's **ring length** operation. Returns `usize`.

```valor
public usize ringLength(usize head_sequence, usize tail_sequence)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `head_sequence`: usize (by value)
> - `tail_sequence`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::sequence::ringLength(head_sequence, tail_sequence);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-ringcanpush"></a>

> ## `ringCanPush`

> Provides the module's **ring can push** operation. Returns `bool`.

```valor
public bool ringCanPush(usize head_sequence, usize tail_sequence, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `head_sequence`: usize (by value)
> - `tail_sequence`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::sequence::ringCanPush(head_sequence, tail_sequence, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-ringcanpop"></a>

> ## `ringCanPop`

> Provides the module's **ring can pop** operation. Returns `bool`.

```valor
public bool ringCanPop(usize head_sequence, usize tail_sequence, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `head_sequence`: usize (by value)
> - `tail_sequence`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::sequence::ringCanPop(head_sequence, tail_sequence, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-ringphysicalindex"></a>

> ## `ringPhysicalIndex`

> Provides the module's **ring physical index** operation. Returns `usize`.

```valor
public usize ringPhysicalIndex(usize sequence, usize capacity)
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
> usize result = std::collections::sequence::ringPhysicalIndex(sequence, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-circularpolicyisvalid"></a>

> ## `circularPolicyIsValid`

> Provides the module's **circular policy is valid** operation. Returns `bool`.

```valor
public bool circularPolicyIsValid(u8 policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `policy`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::sequence::circularPolicyIsValid(policy);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-circularstateisvalid"></a>

> ## `circularStateIsValid`

> Provides the module's **circular state is valid** operation. Returns `bool`.

```valor
public bool circularStateIsValid(usize length, usize capacity, usize head, u8 policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `head`: usize (by value)
> - `policy`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::sequence::circularStateIsValid(length, capacity, head, policy);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-circularpushlength"></a>

> ## `circularPushLength`

> Provides the module's **circular push length** operation. Returns `usize`.

```valor
public usize circularPushLength(usize length, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::sequence::circularPushLength(length, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-circularheadafteroverwrite"></a>

> ## `circularHeadAfterOverwrite`

> Provides the module's **circular head after overwrite** operation. Returns `usize`.

```valor
public usize circularHeadAfterOverwrite(usize head, usize length, usize capacity, u8 policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `head`: usize (by value)
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `policy`: u8 (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::sequence::circularHeadAfterOverwrite(head, length, capacity, policy);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-gapsize"></a>

> ## `gapSize`

> Provides the module's **gap size** operation. Returns `usize`.

```valor
public usize gapSize(usize gap_begin, usize gap_end)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `gap_begin`: usize (by value)
> - `gap_end`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::sequence::gapSize(gap_begin, gap_end);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-gapbufferlength"></a>

> ## `gapBufferLength`

> Provides the module's **gap buffer length** operation. Returns `usize`.

```valor
public usize gapBufferLength(usize capacity, usize gap_begin, usize gap_end)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `gap_begin`: usize (by value)
> - `gap_end`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::sequence::gapBufferLength(capacity, gap_begin, gap_end);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-gapbufferstateisvalid"></a>

> ## `gapBufferStateIsValid`

> Provides the module's **gap buffer state is valid** operation. Returns `bool`.

```valor
public bool gapBufferStateIsValid(usize capacity, usize gap_begin, usize gap_end)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `gap_begin`: usize (by value)
> - `gap_end`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::sequence::gapBufferStateIsValid(capacity, gap_begin, gap_end);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-gapphysicalindex"></a>

> ## `gapPhysicalIndex`

> Provides the module's **gap physical index** operation. Returns `usize`.

```valor
public usize gapPhysicalIndex(usize logical_index, usize gap_begin, usize gap_end)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `logical_index`: usize (by value)
> - `gap_begin`: usize (by value)
> - `gap_end`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::sequence::gapPhysicalIndex(logical_index, gap_begin, gap_end);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-chunksizeisvalid"></a>

> ## `chunkSizeIsValid`

> Provides the module's **chunk size is valid** operation. Returns `bool`.

```valor
public bool chunkSizeIsValid(usize chunk_size)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `chunk_size`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::sequence::chunkSizeIsValid(chunk_size);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-chunkindex"></a>

> ## `chunkIndex`

> Provides the module's **chunk index** operation. Returns `usize`.

```valor
public usize chunkIndex(usize index, usize chunk_size)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: usize (by value)
> - `chunk_size`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::sequence::chunkIndex(index, chunk_size);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-chunkoffset"></a>

> ## `chunkOffset`

> Provides the module's **chunk offset** operation. Returns `usize`.

```valor
public usize chunkOffset(usize index, usize chunk_size)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: usize (by value)
> - `chunk_size`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::sequence::chunkOffset(index, chunk_size);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-chunksforlength"></a>

> ## `chunksForLength`

> Provides the module's **chunks for length** operation. Returns `usize`.

```valor
public usize chunksForLength(usize length, usize chunk_size)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `chunk_size`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::sequence::chunksForLength(length, chunk_size);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-chunkedstateisvalid"></a>

> ## `chunkedStateIsValid`

> Provides the module's **chunked state is valid** operation. Returns `bool`.

```valor
public bool chunkedStateIsValid(usize length, usize chunk_count, usize chunk_size)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `chunk_count`: usize (by value)
> - `chunk_size`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::sequence::chunkedStateIsValid(length, chunk_count, chunk_size);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-segmentcontains"></a>

> ## `segmentContains`

> Provides the module's **segment contains** operation. Returns `bool`.

```valor
public bool segmentContains(usize segment_start, usize segment_length, usize logical_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `segment_start`: usize (by value)
> - `segment_length`: usize (by value)
> - `logical_index`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::sequence::segmentContains(segment_start, segment_length, logical_index);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-segmentoffset"></a>

> ## `segmentOffset`

> Provides the module's **segment offset** operation. Returns `usize`.

```valor
public usize segmentOffset(usize segment_start, usize logical_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `segment_start`: usize (by value)
> - `logical_index`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::sequence::segmentOffset(segment_start, logical_index);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-pagestateisvalid"></a>

> ## `pageStateIsValid`

> Provides the module's **page state is valid** operation. Returns `bool`.

```valor
public bool pageStateIsValid(usize length, usize page_count, usize elements_per_page, usize page_bytes)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `page_count`: usize (by value)
> - `elements_per_page`: usize (by value)
> - `page_bytes`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::sequence::pageStateIsValid(length, page_count, elements_per_page, page_bytes);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-pageindex"></a>

> ## `pageIndex`

> Provides the module's **page index** operation. Returns `usize`.

```valor
public usize pageIndex(usize index, usize elements_per_page)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: usize (by value)
> - `elements_per_page`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::sequence::pageIndex(index, elements_per_page);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-pageoffset"></a>

> ## `pageOffset`

> Provides the module's **page offset** operation. Returns `usize`.

```valor
public usize pageOffset(usize index, usize elements_per_page)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: usize (by value)
> - `elements_per_page`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::sequence::pageOffset(index, elements_per_page);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-stablevectorstateisvalid"></a>

> ## `stableVectorStateIsValid`

> Provides the module's **stable vector state is valid** operation. Returns `bool`.

```valor
public bool stableVectorStateIsValid(usize length, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::sequence::stableVectorStateIsValid(length, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-numapolicyisvalid"></a>

> ## `numaPolicyIsValid`

> Provides the module's **numa policy is valid** operation. Returns `bool`.

```valor
public bool numaPolicyIsValid(u8 policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `policy`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::sequence::numaPolicyIsValid(policy);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-partitionbegin"></a>

> ## `partitionBegin`

> Provides the module's **partition begin** operation. Returns `usize`.

```valor
public usize partitionBegin(usize length, usize partitions, usize partition)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `partitions`: usize (by value)
> - `partition`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::sequence::partitionBegin(length, partitions, partition);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-partitionlength"></a>

> ## `partitionLength`

> Provides the module's **partition length** operation. Returns `usize`.

```valor
public usize partitionLength(usize length, usize partitions, usize partition)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `partitions`: usize (by value)
> - `partition`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::sequence::partitionLength(length, partitions, partition);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-linkedlengthafterinsert"></a>

> ## `linkedLengthAfterInsert`

> Provides the module's **linked length after insert** operation. Returns `usize`.

```valor
public usize linkedLengthAfterInsert(usize length)
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
> usize result = std::collections::sequence::linkedLengthAfterInsert(length);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-linkedlengthafterremove"></a>

> ## `linkedLengthAfterRemove`

> Provides the module's **linked length after remove** operation. Returns `usize`.

```valor
public usize linkedLengthAfterRemove(usize length)
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
> usize result = std::collections::sequence::linkedLengthAfterRemove(length);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-cursorstateisvalid"></a>

> ## `cursorStateIsValid`

> Provides the module's **cursor state is valid** operation. Returns `bool`.

```valor
public bool cursorStateIsValid(usize length, usize cursor_index, bool has_cursor)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `cursor_index`: usize (by value)
> - `has_cursor`: bool (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::sequence::cursorStateIsValid(length, cursor_index, has_cursor);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-cursormovenext"></a>

> ## `cursorMoveNext`

> Provides the module's **cursor move next** operation. Returns `usize`.

```valor
public usize cursorMoveNext(usize length, usize cursor_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `cursor_index`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::sequence::cursorMoveNext(length, cursor_index);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-cursormoveprevious"></a>

> ## `cursorMovePrevious`

> Provides the module's **cursor move previous** operation. Returns `usize`.

```valor
public usize cursorMovePrevious(usize cursor_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `cursor_index`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::sequence::cursorMovePrevious(cursor_index);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-freeliststateisvalid"></a>

> ## `freeListStateIsValid`

> Provides the module's **free list state is valid** operation. Returns `bool`.

```valor
public bool freeListStateIsValid(usize available_count, usize total_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `available_count`: usize (by value)
> - `total_count`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::sequence::freeListStateIsValid(available_count, total_count);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-freelistcanacquire"></a>

> ## `freeListCanAcquire`

> Provides the module's **free list can acquire** operation. Returns `bool`.

```valor
public bool freeListCanAcquire(usize available_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `available_count`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::sequence::freeListCanAcquire(available_count);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-freelistafteracquire"></a>

> ## `freeListAfterAcquire`

> Provides the module's **free list after acquire** operation. Returns `usize`.

```valor
public usize freeListAfterAcquire(usize available_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `available_count`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::sequence::freeListAfterAcquire(available_count);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

<a id="fn-freelistafterrelease"></a>

> ## `freeListAfterRelease`

> Provides the module's **free list after release** operation. Returns `usize`.

```valor
public usize freeListAfterRelease(usize available_count, usize total_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `available_count`: usize (by value)
> - `total_count`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::sequence::freeListAfterRelease(available_count, total_count);
> ```

> ### SEE ALSO
>
> - [`std::collections::sequence::addFits`](#fn-addfits)
> - [`std::collections::sequence::multiplyFits`](#fn-multiplyfits)
> - [`std::collections::sequence::lengthFitsCapacity`](#fn-lengthfitscapacity)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Abstract syntax tree](STD-AST-DOC.md) · [Table of contents](standard-library/README.md) · [Hash collections →](STD-COLLECTIONS-HASH-DOC.md)
