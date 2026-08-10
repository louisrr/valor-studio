<!-- stdlib-reference-style: modern -->
> # `std::text`

`std::text` text processing and Unicode-facing operations.

[Standard library](standard-library/README.md) / [Collections and text](standard-library/README.md#collections-and-text) / **Text**

> **Source:** `stdlib/std/text.valor` · **Routines:** 65 public

## Routines

<details>
<summary>Browse all 65 routines</summary>

- [`both`](#fn-both)
- [`either`](#fn-either)
- [`validStorageMode`](#fn-validstoragemode)
- [`validConcurrency`](#fn-validconcurrency)
- [`validNumaPolicy`](#fn-validnumapolicy)
- [`stringStateIsValid`](#fn-stringstateisvalid)
- [`viewStateIsValid`](#fn-viewstateisvalid)
- [`byteLength`](#fn-bytelength)
- [`byteIndexIsValid`](#fn-byteindexisvalid)
- [`byteAt`](#fn-byteat)
- [`sliceRangeIsValid`](#fn-slicerangeisvalid)
- [`growthCapacity`](#fn-growthcapacity)
- [`appendPlan`](#fn-appendplan)
- [`appendBytes`](#fn-appendbytes)
- [`compareBytes`](#fn-comparebytes)
- [`equalBytes`](#fn-equalbytes)
- [`equalBytesGrouped`](#fn-equalbytesgrouped)
- [`codePointIsScalar`](#fn-codepointisscalar)
- [`utf8IsContinuation`](#fn-utf8iscontinuation)
- [`utf8SequenceLength`](#fn-utf8sequencelength)
- [`utf8DecodeAt`](#fn-utf8decodeat)
- [`utf8Validate`](#fn-utf8validate)
- [`utf8AsciiPrefixGrouped`](#fn-utf8asciiprefixgrouped)
- [`codePointCount`](#fn-codepointcount)
- [`codePointOffset`](#fn-codepointoffset)
- [`utf8EncodedLength`](#fn-utf8encodedlength)
- [`utf8Encode`](#fn-utf8encode)
- [`utf16EncodedLength`](#fn-utf16encodedlength)
- [`utf16Encode`](#fn-utf16encode)
- [`graphemeBreakAllowed`](#fn-graphemebreakallowed)
- [`normalizeCodePoints`](#fn-normalizecodepoints)
- [`builderStateIsValid`](#fn-builderstateisvalid)
- [`ropeNodeIsValid`](#fn-ropenodeisvalid)
- [`ropeConcatHeight`](#fn-ropeconcatheight)
- [`ropeLocate`](#fn-ropelocate)
- [`ropeSplitPlan`](#fn-ropesplitplan)
- [`gapBufferStateIsValid`](#fn-gapbufferstateisvalid)
- [`gapBufferLength`](#fn-gapbufferlength)
- [`gapBufferPhysicalIndex`](#fn-gapbufferphysicalindex)
- [`gapBufferMove`](#fn-gapbuffermove)
- [`gapBufferInsert`](#fn-gapbufferinsert)
- [`cursorAdvanceCodePoint`](#fn-cursoradvancecodepoint)
- [`lineMapBuild`](#fn-linemapbuild)
- [`lineMapLookup`](#fn-linemaplookup)
- [`publishTextGeneration`](#fn-publishtextgeneration)
- [`parseCursorStateIsValid`](#fn-parsecursorstateisvalid)
- [`scanWhile`](#fn-scanwhile)
- [`asciiIsWhitespace`](#fn-asciiiswhitespace)
- [`asciiIsDigit`](#fn-asciiisdigit)
- [`asciiIsAlpha`](#fn-asciiisalpha)
- [`asciiIsIdentifierContinue`](#fn-asciiisidentifiercontinue)
- [`parseUnsignedDecimal`](#fn-parseunsigneddecimal)
- [`formatUnsignedDecimal`](#fn-formatunsigneddecimal)
- [`regexProgramStateIsValid`](#fn-regexprogramstateisvalid)
- [`regexEpsilonClosure`](#fn-regexepsilonclosure)
- [`regexMatchThompson`](#fn-regexmatchthompson)
- [`globMatch`](#fn-globmatch)
- [`textHash`](#fn-texthash)
- [`internerProbeStart`](#fn-internerprobestart)
- [`internerFind`](#fn-internerfind)
- [`internerInsert`](#fn-internerinsert)
- [`internerShard`](#fn-internershard)
- [`internerCanonicalMerge`](#fn-internercanonicalmerge)
- [`symbolEqual`](#fn-symbolequal)
- [`atomEqual`](#fn-atomequal)

</details>

## API reference

<a id="fn-both"></a>

> ## `both`

> v0.1 deliberately has no short-circuit boolean operators. v0.1 deliberately has no short-circuit boolean operators. These helpers keep compound predicates explicit and portable across the current AST.

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
> bool result = std::text::both(left, right);
> ```

> ### SEE ALSO
>
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)
> - [`std::text::validConcurrency`](#fn-validconcurrency)

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
> bool result = std::text::either(left, right);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::validStorageMode`](#fn-validstoragemode)
> - [`std::text::validConcurrency`](#fn-validconcurrency)

<a id="fn-validstoragemode"></a>

> ## `validStorageMode`

> Provides the module's **valid storage mode** operation. Returns `bool`.

```valor
public bool validStorageMode(u8 mode)
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
> bool result = std::text::validStorageMode(mode);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validConcurrency`](#fn-validconcurrency)

<a id="fn-validconcurrency"></a>

> ## `validConcurrency`

> Provides the module's **valid concurrency** operation. Returns `bool`.

```valor
public bool validConcurrency(u8 mode)
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
> bool result = std::text::validConcurrency(mode);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-validnumapolicy"></a>

> ## `validNumaPolicy`

> Provides the module's **valid numa policy** operation. Returns `bool`.

```valor
public bool validNumaPolicy(u8 policy)
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
> bool result = std::text::validNumaPolicy(policy);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-stringstateisvalid"></a>

> ## `stringStateIsValid`

> Provides the module's **string state is valid** operation. Returns `bool`.

```valor
public bool stringStateIsValid(usize byte_length, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::text::stringStateIsValid(byte_length, capacity);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-viewstateisvalid"></a>

> ## `viewStateIsValid`

> Provides the module's **view state is valid** operation. Returns `bool`.

```valor
public bool viewStateIsValid(usize byte_length, usize backing_bytes)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)
> - `backing_bytes`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::text::viewStateIsValid(byte_length, backing_bytes);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-bytelength"></a>

> ## `byteLength`

> Provides the module's **byte length** operation. Returns `usize`.

```valor
public usize byteLength(usize byte_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::text::byteLength(byte_length);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-byteindexisvalid"></a>

> ## `byteIndexIsValid`

> Provides the module's **byte index is valid** operation. Returns `bool`.

```valor
public bool byteIndexIsValid(usize index, usize byte_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: usize (by value)
> - `byte_length`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::text::byteIndexIsValid(index, byte_length);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-byteat"></a>

> ## `byteAt`

> Provides the module's **byte at** operation. Returns `i32`.

```valor
public i32 byteAt(usize index, usize byte_length, (usize) -> u8 read_byte, (u8) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: usize (by value)
> - `byte_length`: usize (by value)
> - `receive`: (usize) -> u8 read_byte, (u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::text::byteAt(index, byte_length, receive);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-slicerangeisvalid"></a>

> ## `sliceRangeIsValid`

> Provides the module's **slice range is valid** operation. Returns `bool`.

```valor
public bool sliceRangeIsValid(usize start, usize end, usize byte_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `end`: usize (by value)
> - `byte_length`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::text::sliceRangeIsValid(start, end, byte_length);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-growthcapacity"></a>

> ## `growthCapacity`

> Provides the module's **growth capacity** operation. Returns `usize`.

```valor
public usize growthCapacity(usize current, usize required)
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
> usize result = std::text::growthCapacity(current, required);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-appendplan"></a>

> ## `appendPlan`

> Provides the module's **append plan** operation. Returns `i32`.

```valor
public i32 appendPlan(usize byte_length, usize capacity, usize append_bytes, (usize) -> void receive_required_capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)
> - `capacity`: usize (by value)
> - `append_bytes`: usize (by value)
> - `receive_required_capacity`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::text::appendPlan(byte_length, capacity, append_bytes, receive_required_capacity);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-appendbytes"></a>

> ## `appendBytes`

> Provides the module's **append bytes** operation. Returns `i32`.

```valor
public i32 appendBytes(usize byte_length, usize capacity, usize append_bytes, (usize) -> u8 read_source, (usize, u8) -> void write_destination, (usize) -> void publish_length_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)
> - `capacity`: usize (by value)
> - `append_bytes`: usize (by value)
> - `usize`: (usize) -> u8 read_source, ( (borrowed fn-ptr (callback))
> - `publish_length_release`: u8) -> void write_destination, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::text::appendBytes(byte_length, capacity, append_bytes, usize, publish_length_release);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-comparebytes"></a>

> ## `compareBytes`

> Provides the module's **compare bytes** operation. Returns `i32`.

```valor
public i32 compareBytes(usize left_length, usize right_length, (usize) -> u8 read_left, (usize) -> u8 read_right, (i32) -> void receive_ordering)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_length`: usize (by value)
> - `right_length`: usize (by value)
> - `receive_ordering`: (usize) -> u8 read_left, (usize) -> u8 read_right, (i32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::text::compareBytes(left_length, right_length, receive_ordering);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-equalbytes"></a>

> ## `equalBytes`

> Provides the module's **equal bytes** operation. Returns `bool`.

```valor
public bool equalBytes(usize left_length, usize right_length, (usize) -> u8 read_left, (usize) -> u8 read_right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_length`: usize (by value)
> - `right_length`: usize (by value)
> - `read_right`: (usize) -> u8 read_left, (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::text::equalBytes(left_length, right_length, read_right);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-equalbytesgrouped"></a>

> ## `equalBytesGrouped`

> A vectorized reader may compare 16 bytes per callback. A vectorized reader may compare 16 bytes per callback. The fallback tail is scalar. This is a SIMD boundary, not a target-specific intrinsic.

```valor
public bool equalBytesGrouped(usize byte_length, (usize) -> bool equal_group_16, (usize) -> bool equal_tail_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)
> - `equal_tail_byte`: (usize) -> bool equal_group_16, (usize) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::text::equalBytesGrouped(byte_length, equal_tail_byte);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-codepointisscalar"></a>

> ## `codePointIsScalar`

> Provides the module's **code point is scalar** operation. Returns `bool`.

```valor
public bool codePointIsScalar(u32 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u32 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::text::codePointIsScalar(value);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

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
> bool result = std::text::utf8IsContinuation(byte);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

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
> usize result = std::text::utf8SequenceLength(first);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-utf8decodeat"></a>

> ## `utf8DecodeAt`

> Provides the module's **utf8 decode at** operation. Returns `i32`.

```valor
public i32 utf8DecodeAt(usize offset, usize byte_length, (usize) -> u8 read_byte, (u32, usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: usize (by value)
> - `byte_length`: usize (by value)
> - `u32`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `receive`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::text::utf8DecodeAt(offset, byte_length, u32, receive);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-utf8validate"></a>

> ## `utf8Validate`

> Provides the module's **utf8 validate** operation. Returns `i32`.

```valor
public i32 utf8Validate(usize byte_length, (usize) -> u8 read_byte, (usize) -> void receive_error_offset)
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
> i32 result = std::text::utf8Validate(byte_length, receive_error_offset);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-utf8asciiprefixgrouped"></a>

> ## `utf8AsciiPrefixGrouped`

> The group callback may use a vector instruction to reject any non-ASCII byte. The group callback may use a vector instruction to reject any non-ASCII byte. It returns true only when all 16 bytes are ASCII.

```valor
public usize utf8AsciiPrefixGrouped(usize byte_length, (usize) -> bool group_is_ascii, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)
> - `read_byte`: (usize) -> bool group_is_ascii, (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::text::utf8AsciiPrefixGrouped(byte_length, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-codepointcount"></a>

> ## `codePointCount`

> Provides the module's **code point count** operation. Returns `i32`.

```valor
public i32 codePointCount(usize byte_length, (usize) -> u8 read_byte, (usize) -> void receive_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)
> - `receive_count`: (usize) -> u8 read_byte, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::text::codePointCount(byte_length, receive_count);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-codepointoffset"></a>

> ## `codePointOffset`

> Provides the module's **code point offset** operation. Returns `i32`.

```valor
public i32 codePointOffset(usize wanted_index, usize byte_length, (usize) -> u8 read_byte, (usize) -> void receive_byte_offset)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `wanted_index`: usize (by value)
> - `byte_length`: usize (by value)
> - `receive_byte_offset`: (usize) -> u8 read_byte, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::text::codePointOffset(wanted_index, byte_length, receive_byte_offset);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-utf8encodedlength"></a>

> ## `utf8EncodedLength`

> Provides the module's **utf8 encoded length** operation. Returns `usize`.

```valor
public usize utf8EncodedLength(u32 code_point)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `code_point`: u32 (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::text::utf8EncodedLength(code_point);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-utf8encode"></a>

> ## `utf8Encode`

> Provides the module's **utf8 encode** operation. Returns `i32`.

```valor
public i32 utf8Encode(u32 code_point, (usize, u8) -> void write_byte, (usize) -> void receive_width)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `code_point`: u32 (by value)
> - `receive_width`: (usize, u8) -> void write_byte, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::text::utf8Encode(code_point, receive_width);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-utf16encodedlength"></a>

> ## `utf16EncodedLength`

> Provides the module's **utf16 encoded length** operation. Returns `usize`.

```valor
public usize utf16EncodedLength(u32 code_point)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `code_point`: u32 (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::text::utf16EncodedLength(code_point);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-utf16encode"></a>

> ## `utf16Encode`

> Provides the module's **utf16 encode** operation. Returns `i32`.

```valor
public i32 utf16Encode(u32 code_point, (usize, u16) -> void write_unit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `code_point`: u32 (by value)
> - `write_unit`: (usize, u16) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::text::utf16Encode(code_point, write_unit);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-graphemebreakallowed"></a>

> ## `graphemeBreakAllowed`

> Provides the module's **grapheme break allowed** operation. Returns `bool`.

```valor
public bool graphemeBreakAllowed(u8 left, u8 right, usize regional_run, bool zwj_after_extended_pictographic)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: u8 (by value)
> - `right`: u8 (by value)
> - `regional_run`: usize (by value)
> - `zwj_after_extended_pictographic`: bool (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::text::graphemeBreakAllowed(left, right, regional_run, zwj_after_extended_pictographic);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-normalizecodepoints"></a>

> ## `normalizeCodePoints`

> Unicode normalization is table-driven. Unicode normalization is table-driven. decompose emits one canonical or compatibility decomposition; combining_class and compose implement the Unicode data tables in ordinary caller-owned Valor storage.

```valor
public i32 normalizeCodePoints(usize input_count, usize output_capacity, u8 form, (usize) -> u32 read_input, (u32, bool) -> usize decomposition_length, (u32, bool, usize) -> u32 read_decomposition, (u32) -> u8 combining_class, (u32, u32) -> u32 compose, (usize, u32) -> void write_output, (usize) -> u32 read_output, (usize) -> void publish_output_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `input_count`: usize (by value)
> - `output_capacity`: usize (by value)
> - `form`: u8 (by value)
> - `u32`: (usize) -> u32 read_input, ( (borrowed fn-ptr (callback))
> - `publish_output_count`: bool) -> usize decomposition_length, (u32, bool, usize) -> u32 read_decomposition, (u32) -> u8 combining_class, (u32, u32) -> u32 compose, (usize, u32) -> void write_output, (usize) -> u32 read_output, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::text::normalizeCodePoints(input_count, output_capacity, form, u32, publish_output_count);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-builderstateisvalid"></a>

> ## `builderStateIsValid`

> Provides the module's **builder state is valid** operation. Returns `bool`.

```valor
public bool builderStateIsValid(usize byte_length, usize capacity, u8 concurrency, u8 numa_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)
> - `capacity`: usize (by value)
> - `concurrency`: u8 (by value)
> - `numa_policy`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::text::builderStateIsValid(byte_length, capacity, concurrency, numa_policy);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-ropenodeisvalid"></a>

> ## `ropeNodeIsValid`

> Provides the module's **rope node is valid** operation. Returns `bool`.

```valor
public bool ropeNodeIsValid(usize chunk_bytes, usize left_bytes, usize right_bytes, usize total_bytes, u16 left_height, u16 right_height, u16 height)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `chunk_bytes`: usize (by value)
> - `left_bytes`: usize (by value)
> - `right_bytes`: usize (by value)
> - `total_bytes`: usize (by value)
> - `left_height`: u16 (by value)
> - `right_height`: u16 (by value)
> - `height`: u16 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::text::ropeNodeIsValid(chunk_bytes, left_bytes, right_bytes, total_bytes, left_height, right_height, height);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-ropeconcatheight"></a>

> ## `ropeConcatHeight`

> Provides the module's **rope concat height** operation. Returns `usize`.

```valor
public usize ropeConcatHeight(u16 left_height, u16 right_height)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_height`: u16 (by value)
> - `right_height`: u16 (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::text::ropeConcatHeight(left_height, right_height);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-ropelocate"></a>

> ## `ropeLocate`

> Descends a balanced immutable rope in O(log n). Descends a balanced immutable rope in O(log n). Leaf delivery is zero-copy.

```valor
public i32 ropeLocate(usize index, usize byte_length, () -> usize read_left_bytes, () -> usize read_chunk_bytes, () -> bool has_left, () -> bool has_right, () -> void descend_left, () -> void descend_right, (usize) -> void receive_chunk_offset)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: usize (by value)
> - `byte_length`: usize (by value)
> - `receive_chunk_offset`: () -> usize read_left_bytes, () -> usize read_chunk_bytes, () -> bool has_left, () -> bool has_right, () -> void descend_left, () -> void descend_right, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::text::ropeLocate(index, byte_length, receive_chunk_offset);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-ropesplitplan"></a>

> ## `ropeSplitPlan`

> Provides the module's **rope split plan** operation. Returns `i32`.

```valor
public i32 ropeSplitPlan(usize split_offset, usize byte_length, (usize, usize) -> void receive_lengths)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `split_offset`: usize (by value)
> - `byte_length`: usize (by value)
> - `receive_lengths`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::text::ropeSplitPlan(split_offset, byte_length, receive_lengths);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

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
> bool result = std::text::gapBufferStateIsValid(capacity, gap_begin, gap_end);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

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
> usize result = std::text::gapBufferLength(capacity, gap_begin, gap_end);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-gapbufferphysicalindex"></a>

> ## `gapBufferPhysicalIndex`

> Provides the module's **gap buffer physical index** operation. Returns `usize`.

```valor
public usize gapBufferPhysicalIndex(usize logical_index, usize capacity, usize gap_begin, usize gap_end)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `logical_index`: usize (by value)
> - `capacity`: usize (by value)
> - `gap_begin`: usize (by value)
> - `gap_end`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::text::gapBufferPhysicalIndex(logical_index, capacity, gap_begin, gap_end);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-gapbuffermove"></a>

> ## `gapBufferMove`

> Provides the module's **gap buffer move** operation. Returns `i32`.

```valor
public i32 gapBufferMove(usize capacity, usize gap_begin, usize gap_end, usize target, (usize) -> u8 read_byte, (usize, u8) -> void write_byte, (usize, usize) -> void publish_gap_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `gap_begin`: usize (by value)
> - `gap_end`: usize (by value)
> - `target`: usize (by value)
> - `usize`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `publish_gap_release`: u8) -> void write_byte, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::text::gapBufferMove(capacity, gap_begin, gap_end, target, usize, publish_gap_release);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-gapbufferinsert"></a>

> ## `gapBufferInsert`

> Provides the module's **gap buffer insert** operation. Returns `i32`.

```valor
public i32 gapBufferInsert(usize capacity, usize gap_begin, usize gap_end, usize source_length, (usize) -> u8 read_source, (usize, u8) -> void write_byte, (usize, usize) -> void publish_gap_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `gap_begin`: usize (by value)
> - `gap_end`: usize (by value)
> - `source_length`: usize (by value)
> - `usize`: (usize) -> u8 read_source, ( (borrowed fn-ptr (callback))
> - `publish_gap_release`: u8) -> void write_byte, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::text::gapBufferInsert(capacity, gap_begin, gap_end, source_length, usize, publish_gap_release);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-cursoradvancecodepoint"></a>

> ## `cursorAdvanceCodePoint`

> Provides the module's **cursor advance code point** operation. Returns `i32`.

```valor
public i32 cursorAdvanceCodePoint(usize byte_offset, usize byte_length, (usize) -> u8 read_byte, (usize, usize) -> void receive_position)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_offset`: usize (by value)
> - `byte_length`: usize (by value)
> - `usize`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `receive_position`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::text::cursorAdvanceCodePoint(byte_offset, byte_length, usize, receive_position);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-linemapbuild"></a>

> ## `lineMapBuild`

> Provides the module's **line map build** operation. Returns `i32`.

```valor
public i32 lineMapBuild(usize byte_length, (usize) -> u8 read_byte, (usize, usize) -> void write_line_start, (usize) -> void publish_line_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)
> - `usize`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `publish_line_count`: usize) -> void write_line_start, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::text::lineMapBuild(byte_length, usize, publish_line_count);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-linemaplookup"></a>

> ## `lineMapLookup`

> Provides the module's **line map lookup** operation. Returns `i32`.

```valor
public i32 lineMapLookup(usize byte_offset, usize byte_length, usize line_count, (usize) -> usize read_line_start, (usize, usize) -> void receive_line_column)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_offset`: usize (by value)
> - `byte_length`: usize (by value)
> - `line_count`: usize (by value)
> - `usize`: (usize) -> usize read_line_start, ( (borrowed fn-ptr (callback))
> - `receive_line_column`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::text::lineMapLookup(byte_offset, byte_length, line_count, usize, receive_line_column);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-publishtextgeneration"></a>

> ## `publishTextGeneration`

> Optimistic publication makes mutable snapshots thread-safe. Optimistic publication makes mutable snapshots thread-safe. It is lock-free exactly when the supplied compare-exchange is lock-free on the target.

```valor
public i32 publishTextGeneration(u64 expected_generation, u64 next_generation, bool target_cas_is_lock_free, () -> bool snapshot_is_complete, (u64, u64) -> bool compare_exchange_generation, () -> void publish_root_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `expected_generation`: u64 (by value)
> - `next_generation`: u64 (by value)
> - `target_cas_is_lock_free`: bool (by value)
> - `u64`: () -> bool snapshot_is_complete, ( (borrowed fn-ptr (callback))
> - `publish_root_release`: u64) -> bool compare_exchange_generation, () -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::text::publishTextGeneration(expected_generation, next_generation, target_cas_is_lock_free, u64, publish_root_release);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-parsecursorstateisvalid"></a>

> ## `parseCursorStateIsValid`

> Provides the module's **parse cursor state is valid** operation. Returns `bool`.

```valor
public bool parseCursorStateIsValid(usize offset, usize byte_length, usize token_start)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: usize (by value)
> - `byte_length`: usize (by value)
> - `token_start`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::text::parseCursorStateIsValid(offset, byte_length, token_start);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-scanwhile"></a>

> ## `scanWhile`

> Provides the module's **scan while** operation. Returns `i32`.

```valor
public i32 scanWhile(usize start, usize byte_length, (usize) -> u8 read_byte, (u8) -> bool accepts, (usize, usize) -> void receive_range)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `byte_length`: usize (by value)
> - `receive_range`: (usize) -> u8 read_byte, (u8) -> bool accepts, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::text::scanWhile(start, byte_length, receive_range);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-asciiiswhitespace"></a>

> ## `asciiIsWhitespace`

> Provides the module's **ascii is whitespace** operation. Returns `bool`.

```valor
public bool asciiIsWhitespace(u8 byte)
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
> bool result = std::text::asciiIsWhitespace(byte);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-asciiisdigit"></a>

> ## `asciiIsDigit`

> Provides the module's **ascii is digit** operation. Returns `bool`.

```valor
public bool asciiIsDigit(u8 byte)
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
> bool result = std::text::asciiIsDigit(byte);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-asciiisalpha"></a>

> ## `asciiIsAlpha`

> Provides the module's **ascii is alpha** operation. Returns `bool`.

```valor
public bool asciiIsAlpha(u8 byte)
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
> bool result = std::text::asciiIsAlpha(byte);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-asciiisidentifiercontinue"></a>

> ## `asciiIsIdentifierContinue`

> Provides the module's **ascii is identifier continue** operation. Returns `bool`.

```valor
public bool asciiIsIdentifierContinue(u8 byte)
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
> bool result = std::text::asciiIsIdentifierContinue(byte);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-parseunsigneddecimal"></a>

> ## `parseUnsignedDecimal`

> Provides the module's **parse unsigned decimal** operation. Returns `i32`.

```valor
public i32 parseUnsignedDecimal(usize start, usize end, (usize) -> u8 read_byte, (u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `end`: usize (by value)
> - `receive`: (usize) -> u8 read_byte, (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::text::parseUnsignedDecimal(start, end, receive);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-formatunsigneddecimal"></a>

> ## `formatUnsignedDecimal`

> Writes decimal digits backwards into caller storage and then emits them in display order. Writes decimal digits backwards into caller storage and then emits them in display order. No allocation or temporary String is required.

```valor
public i32 formatUnsignedDecimal(u64 value, (usize, u8) -> void write_reverse_digit, (usize) -> u8 read_reverse_digit, (usize, u8) -> void write_output, (usize) -> void publish_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)
> - `publish_length`: (usize, u8) -> void write_reverse_digit, (usize) -> u8 read_reverse_digit, (usize, u8) -> void write_output, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::text::formatUnsignedDecimal(value, publish_length);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-regexprogramstateisvalid"></a>

> ## `regexProgramStateIsValid`

> Provides the module's **regex program state is valid** operation. Returns `bool`.

```valor
public bool regexProgramStateIsValid(usize state_count, u32 start_state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state_count`: usize (by value)
> - `start_state`: u32 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::text::regexProgramStateIsValid(state_count, start_state);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-regexepsilonclosure"></a>

> ## `regexEpsilonClosure`

> Epsilon closure for a Thompson program. Epsilon closure for a Thompson program. activate returns true only for a newly activated state, bounding the closure to O(states + transitions).

```valor
public i32 regexEpsilonClosure(usize state_count, usize position, usize input_length, (usize) -> bool is_active, (usize) -> u8 read_opcode, (usize) -> u32 read_arg0, (usize) -> u32 read_arg1, (usize) -> bool activate)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state_count`: usize (by value)
> - `position`: usize (by value)
> - `input_length`: usize (by value)
> - `activate`: (usize) -> bool is_active, (usize) -> u8 read_opcode, (usize) -> u32 read_arg0, (usize) -> u32 read_arg1, (usize) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::text::regexEpsilonClosure(state_count, position, input_length, activate);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-regexmatchthompson"></a>

> ## `regexMatchThompson`

> Thompson NFA simulation. Thompson NFA simulation. State sets are caller-owned bitsets. Every input byte advances the whole active set once, guaranteeing O(bytes * states) and excluding catastrophic backtracking.

```valor
public i32 regexMatchThompson(usize input_length, usize state_count, u32 start_state, (usize) -> u8 read_input, (usize) -> u8 read_opcode, (usize) -> u32 read_arg0, (usize) -> u32 read_arg1, (u32, u8) -> bool class_matches, () -> void clear_current, () -> void clear_next, (usize) -> bool current_active, (usize) -> bool next_active, (usize) -> bool activate_current, (usize) -> bool activate_next, () -> void swap_sets, (bool) -> void receive_match)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `input_length`: usize (by value)
> - `state_count`: usize (by value)
> - `start_state`: u32 (by value)
> - `receive_match`: (usize) -> u8 read_input, (usize) -> u8 read_opcode, (usize) -> u32 read_arg0, (usize) -> u32 read_arg1, (u32, u8) -> bool class_matches, () -> void clear_current, () -> void clear_next, (usize) -> bool current_active, (usize) -> bool next_active, (usize) -> bool activate_current, (usize) -> bool activate_next, () -> void swap_sets, (bool) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::text::regexMatchThompson(input_length, state_count, start_state, receive_match);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-globmatch"></a>

> ## `globMatch`

> Linear wildcard matcher with a single remembered star. Linear wildcard matcher with a single remembered star. It never recursively backtracks and uses constant auxiliary memory.

```valor
public bool globMatch(usize text_length, usize pattern_length, u8 separator, (usize) -> u8 read_text, (usize) -> u8 read_pattern)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `text_length`: usize (by value)
> - `pattern_length`: usize (by value)
> - `separator`: u8 (by value)
> - `read_pattern`: (usize) -> u8 read_text, (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::text::globMatch(text_length, pattern_length, separator, read_pattern);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-texthash"></a>

> ## `textHash`

> Provides the module's **text hash** operation. Returns `u64`.

```valor
public u64 textHash(usize byte_length, u64 seed, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)
> - `seed`: u64 (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::text::textHash(byte_length, seed, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-internerprobestart"></a>

> ## `internerProbeStart`

> Provides the module's **interner probe start** operation. Returns `usize`.

```valor
public usize internerProbeStart(u64 hash, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::text::internerProbeStart(hash, capacity);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-internerfind"></a>

> ## `internerFind`

> Provides the module's **interner find** operation. Returns `i32`.

```valor
public i32 internerFind(usize table_capacity, u64 hash, usize byte_length, (usize) -> u8 read_control, (usize) -> u64 read_hash, (usize) -> usize read_length, (usize, usize) -> bool bytes_equal, (usize) -> u64 read_symbol, (u64) -> void receive_symbol)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `table_capacity`: usize (by value)
> - `hash`: u64 (by value)
> - `byte_length`: usize (by value)
> - `receive_symbol`: (usize) -> u8 read_control, (usize) -> u64 read_hash, (usize) -> usize read_length, (usize, usize) -> bool bytes_equal, (usize) -> u64 read_symbol, (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::text::internerFind(table_capacity, hash, byte_length, receive_symbol);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-internerinsert"></a>

> ## `internerInsert`

> Claim -> copy immutable arena bytes -> publish control. Claim -> copy immutable arena bytes -> publish control. Readers never see a partially initialized entry. Progress is lock-free only when claim_slot is.

```valor
public i32 internerInsert(usize table_capacity, usize arena_used, usize arena_capacity, u64 hash, usize byte_length, u64 symbol, bool target_cas_is_lock_free, (usize) -> u8 read_control, (usize) -> bool claim_slot, (usize) -> u8 read_source_byte, (usize, u8) -> void write_arena_byte, (usize, u64, usize, usize, u64) -> void write_metadata, (usize) -> void publish_control_release, (usize, usize) -> void publish_counts_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `table_capacity`: usize (by value)
> - `arena_used`: usize (by value)
> - `arena_capacity`: usize (by value)
> - `hash`: u64 (by value)
> - `byte_length`: usize (by value)
> - `symbol`: u64 (by value)
> - `target_cas_is_lock_free`: bool (by value)
> - `publish_counts_release`: (usize) -> u8 read_control, (usize) -> bool claim_slot, (usize) -> u8 read_source_byte, (usize, u8) -> void write_arena_byte, (usize, u64, usize, usize, u64) -> void write_metadata, (usize) -> void publish_control_release, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::text::internerInsert(table_capacity, arena_used, arena_capacity, hash, byte_length, symbol, target_cas_is_lock_free, publish_counts_release);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-internershard"></a>

> ## `internerShard`

> Provides the module's **interner shard** operation. Returns `usize`.

```valor
public usize internerShard(u64 hash, usize shard_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `shard_count`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::text::internerShard(hash, shard_count);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-internercanonicalmerge"></a>

> ## `internerCanonicalMerge`

> Deterministic merge assigns canonical symbols in sorted (hash, bytes) order. Deterministic merge assigns canonical symbols in sorted (hash, bytes) order. The caller supplies stable sorting/index access over temporary per-thread interners, keeping the merge independent of thread scheduling.

```valor
public i32 internerCanonicalMerge(usize entry_count, (usize) -> usize read_sorted_entry, (usize) -> u64 read_entry_hash, (usize, usize) -> i32 compare_entry_bytes, (usize, u64) -> void assign_symbol)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `entry_count`: usize (by value)
> - `assign_symbol`: (usize) -> usize read_sorted_entry, (usize) -> u64 read_entry_hash, (usize, usize) -> i32 compare_entry_bytes, (usize, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::text::internerCanonicalMerge(entry_count, assign_symbol);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-symbolequal"></a>

> ## `symbolEqual`

> Provides the module's **symbol equal** operation. Returns `bool`.

```valor
public bool symbolEqual(u64 left, u64 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: u64 (by value)
> - `right`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::text::symbolEqual(left, right);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

<a id="fn-atomequal"></a>

> ## `atomEqual`

> Provides the module's **atom equal** operation. Returns `bool`.

```valor
public bool atomEqual(u64 left, u64 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: u64 (by value)
> - `right`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::text::atomEqual(left, right);
> ```

> ### SEE ALSO
>
> - [`std::text::both`](#fn-both)
> - [`std::text::either`](#fn-either)
> - [`std::text::validStorageMode`](#fn-validstoragemode)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Strings](STD-STRING-DOC.md) · [Table of contents](standard-library/README.md) · [Regular expressions →](STD-REGEX-DOC.md)
