<!-- stdlib-reference-style: modern -->
> # `std::serialization`

`std::serialization` structured serialization operations.

[Standard library](standard-library/README.md) / [Collections and text](standard-library/README.md#collections-and-text) / **Serialization**

> **Source:** `stdlib/std/serialization.valor` · **Routines:** 56 public

## Routines

<details>
<summary>Browse all 56 routines</summary>

- [`both`](#fn-both)
- [`either`](#fn-either)
- [`addFits`](#fn-addfits)
- [`multiplyFits`](#fn-multiplyfits)
- [`rangeIsValid`](#fn-rangeisvalid)
- [`formatIsValid`](#fn-formatisvalid)
- [`storageIsValid`](#fn-storageisvalid)
- [`concurrencyIsValid`](#fn-concurrencyisvalid)
- [`numaPolicyIsValid`](#fn-numapolicyisvalid)
- [`valueTagIsValid`](#fn-valuetagisvalid)
- [`alignmentIsValid`](#fn-alignmentisvalid)
- [`alignUp`](#fn-alignup)
- [`serializerStateIsValid`](#fn-serializerstateisvalid)
- [`deserializerStateIsValid`](#fn-deserializerstateisvalid)
- [`archiveStateIsValid`](#fn-archivestateisvalid)
- [`jsonValueStateIsValid`](#fn-jsonvaluestateisvalid)
- [`jsonObjectStateIsValid`](#fn-jsonobjectstateisvalid)
- [`jsonArrayStateIsValid`](#fn-jsonarraystateisvalid)
- [`arenaAllocationPlan`](#fn-arenaallocationplan)
- [`zeroCopySpan`](#fn-zerocopyspan)
- [`partitionBegin`](#fn-partitionbegin)
- [`partitionLength`](#fn-partitionlength)
- [`utf8IsContinuation`](#fn-utf8iscontinuation)
- [`utf8SequenceLength`](#fn-utf8sequencelength)
- [`validateUtf8`](#fn-validateutf8)
- [`jsonPlainPrefixSimd`](#fn-jsonplainprefixsimd)
- [`byteIsWhitespace`](#fn-byteiswhitespace)
- [`byteIsDigit`](#fn-byteisdigit)
- [`skipWhitespace`](#fn-skipwhitespace)
- [`jsonStringEnd`](#fn-jsonstringend)
- [`parseJsonUnsigned`](#fn-parsejsonunsigned)
- [`parseJsonSigned`](#fn-parsejsonsigned)
- [`jsonNumberEnd`](#fn-jsonnumberend)
- [`jsonNumberSpanIsValid`](#fn-jsonnumberspanisvalid)
- [`bytesMatch`](#fn-bytesmatch)
- [`parseJsonStreaming`](#fn-parsejsonstreaming)
- [`parseJsonDom`](#fn-parsejsondom)
- [`scanJsonStructuralGroups`](#fn-scanjsonstructuralgroups)
- [`writeBytes`](#fn-writebytes)
- [`jsonEscapedLength`](#fn-jsonescapedlength)
- [`hexDigit`](#fn-hexdigit)
- [`encodeJsonString`](#fn-encodejsonstring)
- [`unsignedDecimalLength`](#fn-unsigneddecimallength)
- [`encodeJsonUnsigned`](#fn-encodejsonunsigned)
- [`directDecode`](#fn-directdecode)
- [`directEncode`](#fn-directencode)
- [`archiveEntryAt`](#fn-archiveentryat)
- [`appendArchiveEntry`](#fn-appendarchiveentry)
- [`cborArgumentBytes`](#fn-cborargumentbytes)
- [`decodeCborHead`](#fn-decodecborhead)
- [`messagePackHeadBytes`](#fn-messagepackheadbytes)
- [`decodeMessagePackUnsigned`](#fn-decodemessagepackunsigned)
- [`parseXmlStreaming`](#fn-parsexmlstreaming)
- [`parseCsvRow`](#fn-parsecsvrow)
- [`publishSnapshot`](#fn-publishsnapshot)
- [`readSnapshot`](#fn-readsnapshot)

</details>

## API reference

<a id="fn-both"></a>

> ## `both`

> Provides the module's **both** operation. Returns `bool`.

```valor
public bool both(bool left, bool right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: bool (by value)
> - `right`: bool (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::serialization::both(left, right);
> ```

> ### SEE ALSO
>
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)
> - [`std::serialization::multiplyFits`](#fn-multiplyfits)

<a id="fn-either"></a>

> ## `either`

> Provides the module's **either** operation. Returns `bool`.

```valor
public bool either(bool left, bool right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: bool (by value)
> - `right`: bool (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::serialization::either(left, right);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::addFits`](#fn-addfits)
> - [`std::serialization::multiplyFits`](#fn-multiplyfits)

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
> bool result = std::serialization::addFits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::multiplyFits`](#fn-multiplyfits)

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
> bool result = std::serialization::multiplyFits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-rangeisvalid"></a>

> ## `rangeIsValid`

> Provides the module's **range is valid** operation. Returns `bool`.

```valor
public bool rangeIsValid(usize offset, usize count, usize length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: usize (by value)
> - `count`: usize (by value)
> - `length`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::serialization::rangeIsValid(offset, count, length);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-formatisvalid"></a>

> ## `formatIsValid`

> Provides the module's **format is valid** operation. Returns `bool`.

```valor
public bool formatIsValid(u8 format)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `format`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::serialization::formatIsValid(format);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-storageisvalid"></a>

> ## `storageIsValid`

> Provides the module's **storage is valid** operation. Returns `bool`.

```valor
public bool storageIsValid(u8 storage)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `storage`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::serialization::storageIsValid(storage);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-concurrencyisvalid"></a>

> ## `concurrencyIsValid`

> Provides the module's **concurrency is valid** operation. Returns `bool`.

```valor
public bool concurrencyIsValid(u8 mode)
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
> bool result = std::serialization::concurrencyIsValid(mode);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

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
> bool result = std::serialization::numaPolicyIsValid(policy);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-valuetagisvalid"></a>

> ## `valueTagIsValid`

> Provides the module's **value tag is valid** operation. Returns `bool`.

```valor
public bool valueTagIsValid(u8 tag)
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
> bool result = std::serialization::valueTagIsValid(tag);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

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
> bool result = std::serialization::alignmentIsValid(alignment);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-alignup"></a>

> ## `alignUp`

> Provides the module's **align up** operation. Returns `usize`.

```valor
public usize alignUp(usize value, usize alignment)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: usize (by value)
> - `alignment`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::serialization::alignUp(value, alignment);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-serializerstateisvalid"></a>

> ## `serializerStateIsValid`

> Provides the module's **serializer state is valid** operation. Returns `bool`.

```valor
public bool serializerStateIsValid(usize length, usize capacity, usize alignment, u8 format, u8 storage, u8 concurrency)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `alignment`: usize (by value)
> - `format`: u8 (by value)
> - `storage`: u8 (by value)
> - `concurrency`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::serialization::serializerStateIsValid(length, capacity, alignment, format, storage, concurrency);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-deserializerstateisvalid"></a>

> ## `deserializerStateIsValid`

> Provides the module's **deserializer state is valid** operation. Returns `bool`.

```valor
public bool deserializerStateIsValid(usize cursor, usize length, usize max_depth, u8 format, u8 storage, u8 concurrency)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `cursor`: usize (by value)
> - `length`: usize (by value)
> - `max_depth`: usize (by value)
> - `format`: u8 (by value)
> - `storage`: u8 (by value)
> - `concurrency`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::serialization::deserializerStateIsValid(cursor, length, max_depth, format, storage, concurrency);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-archivestateisvalid"></a>

> ## `archiveStateIsValid`

> Provides the module's **archive state is valid** operation. Returns `bool`.

```valor
public bool archiveStateIsValid(usize byte_length, usize byte_capacity, usize entry_count, usize entry_capacity, usize alignment)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)
> - `byte_capacity`: usize (by value)
> - `entry_count`: usize (by value)
> - `entry_capacity`: usize (by value)
> - `alignment`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::serialization::archiveStateIsValid(byte_length, byte_capacity, entry_count, entry_capacity, alignment);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-jsonvaluestateisvalid"></a>

> ## `jsonValueStateIsValid`

> Provides the module's **json value state is valid** operation. Returns `bool`.

```valor
public bool jsonValueStateIsValid(u8 tag, usize byte_offset, usize byte_length, usize source_length, usize child_begin, usize child_count, usize node_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: u8 (by value)
> - `byte_offset`: usize (by value)
> - `byte_length`: usize (by value)
> - `source_length`: usize (by value)
> - `child_begin`: usize (by value)
> - `child_count`: usize (by value)
> - `node_count`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::serialization::jsonValueStateIsValid(tag, byte_offset, byte_length, source_length, child_begin, child_count, node_count);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-jsonobjectstateisvalid"></a>

> ## `jsonObjectStateIsValid`

> Provides the module's **json object state is valid** operation. Returns `bool`.

```valor
public bool jsonObjectStateIsValid(usize member_begin, usize member_count, usize member_capacity, usize value_count, usize source_length, (usize) -> usize key_offset, (usize) -> usize key_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `member_begin`: usize (by value)
> - `member_count`: usize (by value)
> - `member_capacity`: usize (by value)
> - `value_count`: usize (by value)
> - `source_length`: usize (by value)
> - `key_length`: (usize) -> usize key_offset, (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::serialization::jsonObjectStateIsValid(member_begin, member_count, member_capacity, value_count, source_length, key_length);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-jsonarraystateisvalid"></a>

> ## `jsonArrayStateIsValid`

> Provides the module's **json array state is valid** operation. Returns `bool`.

```valor
public bool jsonArrayStateIsValid(usize element_begin, usize element_count, usize element_capacity, usize value_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `element_begin`: usize (by value)
> - `element_count`: usize (by value)
> - `element_capacity`: usize (by value)
> - `value_count`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::serialization::jsonArrayStateIsValid(element_begin, element_count, element_capacity, value_count);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-arenaallocationplan"></a>

> ## `arenaAllocationPlan`

> Computes a bump-allocation range without touching allocator state. Computes a bump-allocation range without touching allocator state. A caller may reserve that range with an atomic fetch-add or a thread-local arena.

```valor
public i32 arenaAllocationPlan(usize cursor, usize capacity, usize bytes, usize alignment, (usize, usize) -> void receive_range)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `cursor`: usize (by value)
> - `capacity`: usize (by value)
> - `bytes`: usize (by value)
> - `alignment`: usize (by value)
> - `receive_range`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::serialization::arenaAllocationPlan(cursor, capacity, bytes, alignment, receive_range);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-zerocopyspan"></a>

> ## `zeroCopySpan`

> Provides the module's **zero copy span** operation. Returns `i32`.

```valor
public i32 zeroCopySpan(usize offset, usize length, usize source_length, (usize, usize) -> void receive_span)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: usize (by value)
> - `length`: usize (by value)
> - `source_length`: usize (by value)
> - `receive_span`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::serialization::zeroCopySpan(offset, length, source_length, receive_span);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-partitionbegin"></a>

> ## `partitionBegin`

> Partitions contiguous work deterministically; callers may bind partitions to NUMA nodes without sharing mutable parser state. Partitions contiguous work deterministically; callers may bind partitions to NUMA nodes without sharing mutable parser state.

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
> usize result = std::serialization::partitionBegin(length, partitions, partition);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

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
> usize result = std::serialization::partitionLength(length, partitions, partition);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-utf8iscontinuation"></a>

> ## `utf8IsContinuation`

> Provides the module's **utf8 is continuation** operation. Returns `bool`.

```valor
public bool utf8IsContinuation(u8 byte)
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
> bool result = std::serialization::utf8IsContinuation(byte);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-utf8sequencelength"></a>

> ## `utf8SequenceLength`

> Provides the module's **utf8 sequence length** operation. Returns `usize`.

```valor
public usize utf8SequenceLength(u8 first)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `first`: u8 (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::serialization::utf8SequenceLength(first);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-validateutf8"></a>

> ## `validateUtf8`

> Provides the module's **validate utf8** operation. Returns `i32`.

```valor
public i32 validateUtf8(usize byte_length, (usize) -> u8 read_byte, (usize) -> void receive_error_offset)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)
> - `receive_error_offset`: (usize) -> u8 read_byte, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::serialization::validateUtf8(byte_length, receive_error_offset);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-jsonplainprefixsimd"></a>

> ## `jsonPlainPrefixSimd`

> The group callback handles exactly sixteen bytes and returns true when no byte can be JSON structural syntax, a quote, control, or non-ASCII. The group callback handles exactly sixteen bytes and returns true when no byte can be JSON structural syntax, a quote, control, or non-ASCII. This is the portable vectorization boundary; scalar code handles only the tail.

```valor
public usize jsonPlainPrefixSimd(usize byte_length, (usize) -> bool group_is_plain_ascii, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)
> - `read_byte`: (usize) -> bool group_is_plain_ascii, (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::serialization::jsonPlainPrefixSimd(byte_length, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-byteiswhitespace"></a>

> ## `byteIsWhitespace`

> Provides the module's **byte is whitespace** operation. Returns `bool`.

```valor
public bool byteIsWhitespace(u8 byte)
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
> bool result = std::serialization::byteIsWhitespace(byte);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-byteisdigit"></a>

> ## `byteIsDigit`

> Provides the module's **byte is digit** operation. Returns `bool`.

```valor
public bool byteIsDigit(u8 byte)
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
> bool result = std::serialization::byteIsDigit(byte);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-skipwhitespace"></a>

> ## `skipWhitespace`

> Provides the module's **skip whitespace** operation. Returns `usize`.

```valor
public usize skipWhitespace(usize offset, usize byte_length, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: usize (by value)
> - `byte_length`: usize (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::serialization::skipWhitespace(offset, byte_length, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-jsonstringend"></a>

> ## `jsonStringEnd`

> Provides the module's **json string end** operation. Returns `i32`.

```valor
public i32 jsonStringEnd(usize quote_offset, usize byte_length, (usize) -> u8 read_byte, (usize) -> void receive_end)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `quote_offset`: usize (by value)
> - `byte_length`: usize (by value)
> - `receive_end`: (usize) -> u8 read_byte, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::serialization::jsonStringEnd(quote_offset, byte_length, receive_end);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-parsejsonunsigned"></a>

> ## `parseJsonUnsigned`

> Provides the module's **parse json unsigned** operation. Returns `i32`.

```valor
public i32 parseJsonUnsigned(usize offset, usize length, (usize) -> u8 read_byte, (u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: usize (by value)
> - `length`: usize (by value)
> - `receive`: (usize) -> u8 read_byte, (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::serialization::parseJsonUnsigned(offset, length, receive);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-parsejsonsigned"></a>

> ## `parseJsonSigned`

> Provides the module's **parse json signed** operation. Returns `i32`.

```valor
public i32 parseJsonSigned(usize offset, usize length, (usize) -> u8 read_byte, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: usize (by value)
> - `length`: usize (by value)
> - `receive`: (usize) -> u8 read_byte, (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::serialization::parseJsonSigned(offset, length, receive);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-jsonnumberend"></a>

> ## `jsonNumberEnd`

> Provides the module's **json number end** operation. Returns `usize`.

```valor
public usize jsonNumberEnd(usize offset, usize byte_length, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: usize (by value)
> - `byte_length`: usize (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::serialization::jsonNumberEnd(offset, byte_length, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-jsonnumberspanisvalid"></a>

> ## `jsonNumberSpanIsValid`

> Provides the module's **json number span is valid** operation. Returns `bool`.

```valor
public bool jsonNumberSpanIsValid(usize offset, usize length, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: usize (by value)
> - `length`: usize (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::serialization::jsonNumberSpanIsValid(offset, length, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-bytesmatch"></a>

> ## `bytesMatch`

> Provides the module's **bytes match** operation. Returns `bool`.

```valor
public bool bytesMatch(usize offset, usize count, usize byte_length, (usize) -> u8 read_byte, (usize) -> u8 expected_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: usize (by value)
> - `count`: usize (by value)
> - `byte_length`: usize (by value)
> - `expected_byte`: (usize) -> u8 read_byte, (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::serialization::bytesMatch(offset, count, byte_length, expected_byte);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-parsejsonstreaming"></a>

> ## `parseJsonStreaming`

> Streaming lexer. Streaming lexer. Tokens are immutable source spans. Container balance and maximum depth are checked; a higher-level schema decoder can consume tokens directly without first allocating a DOM.

```valor
public i32 parseJsonStreaming(usize byte_length, usize max_depth, (usize) -> u8 read_byte, (u8, usize, usize, usize) -> void emit_token, (usize) -> void receive_error_offset)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)
> - `max_depth`: usize (by value)
> - `u8`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `usize`: usize (by value)
> - `receive_error_offset`: usize) -> void emit_token, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::serialization::parseJsonStreaming(byte_length, max_depth, u8, usize, usize, receive_error_offset);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-parsejsondom"></a>

> ## `parseJsonDom`

> DOM construction stays allocation-policy agnostic. DOM construction stays allocation-policy agnostic. reserve_node returns a compact arena slot; write_node stores source spans; publish_root is the release point for concurrent readers.

```valor
public i32 parseJsonDom(usize byte_length, usize max_depth, (usize) -> u8 read_byte, (u8, usize, usize, usize) -> void write_node, () -> void publish_root_release, (usize) -> void receive_error_offset)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)
> - `max_depth`: usize (by value)
> - `u8`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `usize`: usize (by value)
> - `receive_error_offset`: usize) -> void write_node, () -> void publish_root_release, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::serialization::parseJsonDom(byte_length, max_depth, u8, usize, usize, receive_error_offset);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-scanjsonstructuralgroups"></a>

> ## `scanJsonStructuralGroups`

> A SIMD front-end can report structural byte positions in batches, then use the same scalar parser for strings and tails. A SIMD front-end can report structural byte positions in batches, then use the same scalar parser for strings and tails. No target intrinsic is needed.

```valor
public i32 scanJsonStructuralGroups(usize byte_length, (usize) -> u16 structural_mask_16, (usize) -> void emit_structural_offset)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^3)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)
> - `emit_structural_offset`: (usize) -> u16 structural_mask_16, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::serialization::scanJsonStructuralGroups(byte_length, emit_structural_offset);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-writebytes"></a>

> ## `writeBytes`

> Provides the module's **write bytes** operation. Returns `i32`.

```valor
public i32 writeBytes(usize output_offset, usize byte_count, usize capacity, (usize) -> u8 read_source, (usize, u8) -> void write_output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `output_offset`: usize (by value)
> - `byte_count`: usize (by value)
> - `capacity`: usize (by value)
> - `usize`: (usize) -> u8 read_source, ( (borrowed fn-ptr (callback))
> - `write_output`: u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::serialization::writeBytes(output_offset, byte_count, capacity, usize, write_output);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-jsonescapedlength"></a>

> ## `jsonEscapedLength`

> Provides the module's **json escaped length** operation. Returns `usize`.

```valor
public usize jsonEscapedLength(usize byte_length, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::serialization::jsonEscapedLength(byte_length, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-hexdigit"></a>

> ## `hexDigit`

> Provides the module's **hex digit** operation. Returns `u8`.

```valor
public u8 hexDigit(u8 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u8 (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::serialization::hexDigit(value);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-encodejsonstring"></a>

> ## `encodeJsonString`

> Provides the module's **encode json string** operation. Returns `i32`.

```valor
public i32 encodeJsonString(usize byte_length, usize output_offset, usize capacity, (usize) -> u8 read_byte, (usize, u8) -> void write_output, (usize) -> void publish_length_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)
> - `output_offset`: usize (by value)
> - `capacity`: usize (by value)
> - `usize`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `publish_length_release`: u8) -> void write_output, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::serialization::encodeJsonString(byte_length, output_offset, capacity, usize, publish_length_release);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-unsigneddecimallength"></a>

> ## `unsignedDecimalLength`

> Provides the module's **unsigned decimal length** operation. Returns `usize`.

```valor
public usize unsignedDecimalLength(u64 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::serialization::unsignedDecimalLength(value);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-encodejsonunsigned"></a>

> ## `encodeJsonUnsigned`

> Provides the module's **encode json unsigned** operation. Returns `i32`.

```valor
public i32 encodeJsonUnsigned(u64 value, usize output_offset, usize capacity, (usize, u8) -> void write_output, (usize) -> void publish_length_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)
> - `output_offset`: usize (by value)
> - `capacity`: usize (by value)
> - `publish_length_release`: (usize, u8) -> void write_output, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::serialization::encodeJsonUnsigned(value, output_offset, capacity, publish_length_release);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-directdecode"></a>

> ## `directDecode`

> Provides the module's **direct decode** operation. Returns `i32`.

```valor
public i32 directDecode(usize byte_length, usize max_depth, (usize) -> u8 read_byte, (u8, usize, usize, usize) -> void consume_token, () -> T finish_value, (T) -> void receive_value, (usize) -> void receive_error_offset)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)
> - `max_depth`: usize (by value)
> - `u8`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `usize`: usize (by value)
> - `receive_error_offset`: usize) -> void consume_token, () -> T finish_value, (T) -> void receive_value, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::serialization::directDecode(byte_length, max_depth, u8, usize, usize, receive_error_offset);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-directencode"></a>

> ## `directEncode`

> Provides the module's **direct encode** operation. Returns `i32`.

```valor
public i32 directEncode(T value, usize capacity, usize encoded_length, (T, (u8, usize, usize) -> i32) -> i32 encode_fields, (u8, usize, usize) -> i32 emit_fragment, (usize) -> void publish_length_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: T (by value)
> - `capacity`: usize (by value)
> - `encoded_length`: usize (by value)
> - `publish_length_release`: (T, (u8, usize, usize) -> i32) -> i32 encode_fields, (u8, usize, usize) -> i32 emit_fragment, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::serialization::directEncode(value, capacity, encoded_length, publish_length_release);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-archiveentryat"></a>

> ## `archiveEntryAt`

> Provides the module's **archive entry at** operation. Returns `i32`.

```valor
public i32 archiveEntryAt(usize index, usize entry_count, usize byte_length, (usize) -> usize read_offset, (usize) -> usize read_length, (usize) -> u64 read_schema_id, (usize, usize, u64) -> void receive_entry)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: usize (by value)
> - `entry_count`: usize (by value)
> - `byte_length`: usize (by value)
> - `receive_entry`: (usize) -> usize read_offset, (usize) -> usize read_length, (usize) -> u64 read_schema_id, (usize, usize, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::serialization::archiveEntryAt(index, entry_count, byte_length, receive_entry);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-appendarchiveentry"></a>

> ## `appendArchiveEntry`

> Provides the module's **append archive entry** operation. Returns `i32`.

```valor
public i32 appendArchiveEntry(usize byte_length, usize byte_capacity, usize entry_count, usize entry_capacity, usize payload_length, u64 schema_id, (usize) -> u8 read_payload, (usize, u8) -> void write_byte, (usize, usize, usize, u64) -> void write_entry, (usize, usize) -> void publish_counts_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)
> - `byte_capacity`: usize (by value)
> - `entry_count`: usize (by value)
> - `entry_capacity`: usize (by value)
> - `payload_length`: usize (by value)
> - `schema_id`: u64 (by value)
> - `usize`: (usize) -> u8 read_payload, ( (borrowed fn-ptr (callback))
> - `publish_counts_release`: u8) -> void write_byte, (usize, usize, usize, u64) -> void write_entry, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::serialization::appendArchiveEntry(byte_length, byte_capacity, entry_count, entry_capacity, payload_length, schema_id, usize, publish_counts_release);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-cborargumentbytes"></a>

> ## `cborArgumentBytes`

> Provides the module's **cbor argument bytes** operation. Returns `usize`.

```valor
public usize cborArgumentBytes(u64 argument)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `argument`: u64 (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::serialization::cborArgumentBytes(argument);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-decodecborhead"></a>

> ## `decodeCborHead`

> Provides the module's **decode cbor head** operation. Returns `i32`.

```valor
public i32 decodeCborHead(usize offset, usize byte_length, (usize) -> u8 read_byte, (u8, u64, usize) -> void receive_head)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: usize (by value)
> - `byte_length`: usize (by value)
> - `u8`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `u64`: u64 (by value)
> - `receive_head`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::serialization::decodeCborHead(offset, byte_length, u8, u64, receive_head);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-messagepackheadbytes"></a>

> ## `messagePackHeadBytes`

> Provides the module's **message pack head bytes** operation. Returns `usize`.

```valor
public usize messagePackHeadBytes(u8 marker)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `marker`: u8 (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::serialization::messagePackHeadBytes(marker);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-decodemessagepackunsigned"></a>

> ## `decodeMessagePackUnsigned`

> Provides the module's **decode message pack unsigned** operation. Returns `i32`.

```valor
public i32 decodeMessagePackUnsigned(usize offset, usize byte_length, (usize) -> u8 read_byte, (u64, usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: usize (by value)
> - `byte_length`: usize (by value)
> - `u64`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `receive`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::serialization::decodeMessagePackUnsigned(offset, byte_length, u64, receive);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-parsexmlstreaming"></a>

> ## `parseXmlStreaming`

> Provides the module's **parse xml streaming** operation. Returns `i32`.

```valor
public i32 parseXmlStreaming(usize byte_length, usize max_depth, (usize) -> u8 read_byte, (u8, usize, usize, usize) -> void emit_event, (usize) -> void receive_error_offset)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)
> - `max_depth`: usize (by value)
> - `u8`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `usize`: usize (by value)
> - `receive_error_offset`: usize) -> void emit_event, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::serialization::parseXmlStreaming(byte_length, max_depth, u8, usize, usize, receive_error_offset);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-parsecsvrow"></a>

> ## `parseCsvRow`

> Emits zero-copy field spans. Emits zero-copy field spans. doubled_quote marks rows requiring lazy unescaping; unquoted fields always remain direct source slices.

```valor
public i32 parseCsvRow(usize row_offset, usize byte_length, u8 delimiter, (usize) -> u8 read_byte, (usize, usize, bool) -> void emit_field, (usize) -> void receive_next_row)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `row_offset`: usize (by value)
> - `byte_length`: usize (by value)
> - `delimiter`: u8 (by value)
> - `usize`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `receive_next_row`: bool) -> void emit_field, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::serialization::parseCsvRow(row_offset, byte_length, delimiter, usize, usize, receive_next_row);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-publishsnapshot"></a>

> ## `publishSnapshot`

> Writers build a complete immutable snapshot privately. Writers build a complete immutable snapshot privately. The even generation is published last with release semantics. Readers acquire it twice and retry if a concurrent writer changed the snapshot.

```valor
public i32 publishSnapshot(u64 generation, () -> void publish_payload, (u64) -> void publish_generation_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `generation`: u64 (by value)
> - `publish_generation_release`: () -> void publish_payload, (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::serialization::publishSnapshot(generation, publish_generation_release);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

<a id="fn-readsnapshot"></a>

> ## `readSnapshot`

> Provides the module's **read snapshot** operation. Returns `i32`.

```valor
public i32 readSnapshot(usize retry_limit, () -> u64 load_generation_acquire, () -> T read_payload, (T) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `retry_limit`: usize (by value)
> - `receive`: () -> u64 load_generation_acquire, () -> T read_payload, (T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::serialization::readSnapshot(retry_limit, receive);
> ```

> ### SEE ALSO
>
> - [`std::serialization::both`](#fn-both)
> - [`std::serialization::either`](#fn-either)
> - [`std::serialization::addFits`](#fn-addfits)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Codecs](STD-CODEC-DOC.md) · [Table of contents](standard-library/README.md) · [URLs →](STD-URL-DOC.md)
