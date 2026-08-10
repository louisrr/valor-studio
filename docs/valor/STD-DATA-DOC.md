<!-- stdlib-reference-style: modern -->
> # `std::data`

`std::data` general data transformation helpers.

[Standard library](standard-library/README.md) / [Collections and text](standard-library/README.md#collections-and-text) / **Data**

> **Source:** `stdlib/std/data.valor` · **Routines:** 38 public

## Routines

<details>
<summary>Browse all 38 routines</summary>

- [`addFits`](#fn-addfits)
- [`multiplyFits`](#fn-multiplyfits)
- [`rangeIsValid`](#fn-rangeisvalid)
- [`alignmentIsValid`](#fn-alignmentisvalid)
- [`encodingIsValid`](#fn-encodingisvalid)
- [`concurrencyIsValid`](#fn-concurrencyisvalid)
- [`columnDescriptorIsValid`](#fn-columndescriptorisvalid)
- [`viewDescriptorIsValid`](#fn-viewdescriptorisvalid)
- [`viewPhysicalIndex`](#fn-viewphysicalindex)
- [`schemaDescriptorIsValid`](#fn-schemadescriptorisvalid)
- [`batchDescriptorIsValid`](#fn-batchdescriptorisvalid)
- [`tableDescriptorIsValid`](#fn-tabledescriptorisvalid)
- [`validityWordCount`](#fn-validitywordcount)
- [`validityDescriptorIsValid`](#fn-validitydescriptorisvalid)
- [`validityWordIndex`](#fn-validitywordindex)
- [`validityBitIndex`](#fn-validitybitindex)
- [`validityBitDivisor`](#fn-validitybitdivisor)
- [`validityBit`](#fn-validitybit)
- [`validityAt`](#fn-validityat)
- [`countNulls`](#fn-countnulls)
- [`dictionaryCodesAreValid`](#fn-dictionarycodesarevalid)
- [`dictionaryAt`](#fn-dictionaryat)
- [`chunkOffsetsAreValid`](#fn-chunkoffsetsarevalid)
- [`chunkForRow`](#fn-chunkforrow)
- [`chunkLocalIndex`](#fn-chunklocalindex)
- [`columnAt`](#fn-columnat)
- [`nullableAt`](#fn-nullableat)
- [`rangeIndexKey`](#fn-rangeindexkey)
- [`sortedIndexFind`](#fn-sortedindexfind)
- [`multiIndexCodesAreValid`](#fn-multiindexcodesarevalid)
- [`groupOffsetsAreValid`](#fn-groupoffsetsarevalid)
- [`groupLength`](#fn-grouplength)
- [`rowViewIsValid`](#fn-rowviewisvalid)
- [`partitionBegin`](#fn-partitionbegin)
- [`partitionLength`](#fn-partitionlength)
- [`partitionNumaNode`](#fn-partitionnumanode)
- [`transformColumn`](#fn-transformcolumn)
- [`filterColumn`](#fn-filtercolumn)

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
> bool result = std::data::addFits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)
> - [`std::data::alignmentIsValid`](#fn-alignmentisvalid)

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
> bool result = std::data::multiplyFits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)
> - [`std::data::alignmentIsValid`](#fn-alignmentisvalid)

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
> bool result = std::data::rangeIsValid(begin, count, length);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::alignmentIsValid`](#fn-alignmentisvalid)

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
> bool result = std::data::alignmentIsValid(alignment);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-encodingisvalid"></a>

> ## `encodingIsValid`

> Provides the module's **encoding is valid** operation. Returns `bool`.

```valor
public bool encodingIsValid(u8 encoding)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `encoding`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::data::encodingIsValid(encoding);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-concurrencyisvalid"></a>

> ## `concurrencyIsValid`

> Provides the module's **concurrency is valid** operation. Returns `bool`.

```valor
public bool concurrencyIsValid(u8 concurrency)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `concurrency`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::data::concurrencyIsValid(concurrency);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-columndescriptorisvalid"></a>

> ## `columnDescriptorIsValid`

> Provides the module's **column descriptor is valid** operation. Returns `bool`.

```valor
public bool columnDescriptorIsValid(usize length, usize capacity, usize alignment, u8 storage, u8 concurrency)
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
> - `concurrency`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::data::columnDescriptorIsValid(length, capacity, alignment, storage, concurrency);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-viewdescriptorisvalid"></a>

> ## `viewDescriptorIsValid`

> Provides the module's **view descriptor is valid** operation. Returns `bool`.

```valor
public bool viewDescriptorIsValid(usize offset, usize length, usize stride, usize allocation_elements, usize alignment)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: usize (by value)
> - `length`: usize (by value)
> - `stride`: usize (by value)
> - `allocation_elements`: usize (by value)
> - `alignment`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::data::viewDescriptorIsValid(offset, length, stride, allocation_elements, alignment);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-viewphysicalindex"></a>

> ## `viewPhysicalIndex`

> Provides the module's **view physical index** operation. Returns `usize`.

```valor
public usize viewPhysicalIndex(usize offset, usize stride, usize index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: usize (by value)
> - `stride`: usize (by value)
> - `index`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::data::viewPhysicalIndex(offset, stride, index);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-schemadescriptorisvalid"></a>

> ## `schemaDescriptorIsValid`

> Provides the module's **schema descriptor is valid** operation. Returns `bool`.

```valor
public bool schemaDescriptorIsValid(usize field_count, usize name_bytes, usize metadata_bytes, (usize) -> usize name_offset, (usize) -> usize name_length, (usize) -> usize metadata_offset, (usize) -> usize metadata_length, (usize) -> u8 encoding)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `field_count`: usize (by value)
> - `name_bytes`: usize (by value)
> - `metadata_bytes`: usize (by value)
> - `encoding`: (usize) -> usize name_offset, (usize) -> usize name_length, (usize) -> usize metadata_offset, (usize) -> usize metadata_length, (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::data::schemaDescriptorIsValid(field_count, name_bytes, metadata_bytes, encoding);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-batchdescriptorisvalid"></a>

> ## `batchDescriptorIsValid`

> Provides the module's **batch descriptor is valid** operation. Returns `bool`.

```valor
public bool batchDescriptorIsValid(usize row_count, usize column_count, usize schema_field_count, u64 schema_fingerprint, u64 expected_fingerprint, (usize) -> usize column_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `row_count`: usize (by value)
> - `column_count`: usize (by value)
> - `schema_field_count`: usize (by value)
> - `schema_fingerprint`: u64 (by value)
> - `expected_fingerprint`: u64 (by value)
> - `column_length`: (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::data::batchDescriptorIsValid(row_count, column_count, schema_field_count, schema_fingerprint, expected_fingerprint, column_length);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-tabledescriptorisvalid"></a>

> ## `tableDescriptorIsValid`

> Provides the module's **table descriptor is valid** operation. Returns `bool`.

```valor
public bool tableDescriptorIsValid(usize row_count, usize column_count, usize batch_count, usize schema_field_count, u64 schema_fingerprint, u64 expected_fingerprint, (usize) -> usize batch_offset, (usize) -> usize batch_rows, (usize) -> usize batch_columns, (usize) -> u64 batch_fingerprint)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `row_count`: usize (by value)
> - `column_count`: usize (by value)
> - `batch_count`: usize (by value)
> - `schema_field_count`: usize (by value)
> - `schema_fingerprint`: u64 (by value)
> - `expected_fingerprint`: u64 (by value)
> - `batch_fingerprint`: (usize) -> usize batch_offset, (usize) -> usize batch_rows, (usize) -> usize batch_columns, (usize) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::data::tableDescriptorIsValid(row_count, column_count, batch_count, schema_field_count, schema_fingerprint, expected_fingerprint, batch_fingerprint);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-validitywordcount"></a>

> ## `validityWordCount`

> Provides the module's **validity word count** operation. Returns `usize`.

```valor
public usize validityWordCount(usize bit_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bit_length`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::data::validityWordCount(bit_length);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-validitydescriptorisvalid"></a>

> ## `validityDescriptorIsValid`

> Provides the module's **validity descriptor is valid** operation. Returns `bool`.

```valor
public bool validityDescriptorIsValid(usize bit_length, usize word_count, usize word_capacity, u64 null_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bit_length`: usize (by value)
> - `word_count`: usize (by value)
> - `word_capacity`: usize (by value)
> - `null_count`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::data::validityDescriptorIsValid(bit_length, word_count, word_capacity, null_count);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-validitywordindex"></a>

> ## `validityWordIndex`

> Provides the module's **validity word index** operation. Returns `usize`.

```valor
public usize validityWordIndex(usize index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::data::validityWordIndex(index);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-validitybitindex"></a>

> ## `validityBitIndex`

> Provides the module's **validity bit index** operation. Returns `usize`.

```valor
public usize validityBitIndex(usize index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::data::validityBitIndex(index);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-validitybitdivisor"></a>

> ## `validityBitDivisor`

> Provides the module's **validity bit divisor** operation. Returns `u64`.

```valor
public u64 validityBitDivisor(usize bit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bit`: usize (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::data::validityBitDivisor(bit);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-validitybit"></a>

> ## `validityBit`

> Division/remainder is used instead of target-specific bit intrinsics. Division/remainder is used instead of target-specific bit intrinsics. The result is still branch-free after descriptor validation.

```valor
public bool validityBit(usize index, (usize) -> u64 read_word)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: usize (by value)
> - `read_word`: (usize) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::data::validityBit(index, read_word);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-validityat"></a>

> ## `validityAt`

> Provides the module's **validity at** operation. Returns `i32`.

```valor
public i32 validityAt(usize index, usize bit_length, (usize) -> u64 read_word, (bool) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: usize (by value)
> - `bit_length`: usize (by value)
> - `receive`: (usize) -> u64 read_word, (bool) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::data::validityAt(index, bit_length, receive);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-countnulls"></a>

> ## `countNulls`

> Provides the module's **count nulls** operation. Returns `u64`.

```valor
public u64 countNulls(usize bit_length, (usize) -> u64 read_word)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bit_length`: usize (by value)
> - `read_word`: (usize) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::data::countNulls(bit_length, read_word);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-dictionarycodesarevalid"></a>

> ## `dictionaryCodesAreValid`

> Provides the module's **dictionary codes are valid** operation. Returns `bool`.

```valor
public bool dictionaryCodesAreValid(usize length, usize dictionary_length, usize validity_length, (usize) -> u32 read_code, (usize) -> bool is_valid)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `dictionary_length`: usize (by value)
> - `validity_length`: usize (by value)
> - `is_valid`: (usize) -> u32 read_code, (usize) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::data::dictionaryCodesAreValid(length, dictionary_length, validity_length, is_valid);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-dictionaryat"></a>

> ## `dictionaryAt`

> Provides the module's **dictionary at** operation. Returns `i32`.

```valor
public i32 dictionaryAt(usize index, usize length, usize dictionary_length, (usize) -> bool is_valid, (usize) -> u32 read_code, (usize) -> T read_dictionary, (T) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: usize (by value)
> - `length`: usize (by value)
> - `dictionary_length`: usize (by value)
> - `receive`: (usize) -> bool is_valid, (usize) -> u32 read_code, (usize) -> T read_dictionary, (T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::data::dictionaryAt(index, length, dictionary_length, receive);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-chunkoffsetsarevalid"></a>

> ## `chunkOffsetsAreValid`

> Provides the module's **chunk offsets are valid** operation. Returns `bool`.

```valor
public bool chunkOffsetsAreValid(usize length, usize chunk_count, (usize) -> usize offset, (usize) -> usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `chunk_count`: usize (by value)
> - `capacity`: (usize) -> usize offset, (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::data::chunkOffsetsAreValid(length, chunk_count, capacity);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-chunkforrow"></a>

> ## `chunkForRow`

> Binary search returns the chunk containing row, or NO_INDEX on bounds error.

```valor
public usize chunkForRow(usize row, usize length, usize chunk_count, (usize) -> usize offset)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `row`: usize (by value)
> - `length`: usize (by value)
> - `chunk_count`: usize (by value)
> - `offset`: (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::data::chunkForRow(row, length, chunk_count, offset);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-chunklocalindex"></a>

> ## `chunkLocalIndex`

> Provides the module's **chunk local index** operation. Returns `usize`.

```valor
public usize chunkLocalIndex(usize row, usize chunk, (usize) -> usize offset)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `row`: usize (by value)
> - `chunk`: usize (by value)
> - `offset`: (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::data::chunkLocalIndex(row, chunk, offset);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-columnat"></a>

> ## `columnAt`

> Provides the module's **column at** operation. Returns `i32`.

```valor
public i32 columnAt(usize index, usize length, usize offset, usize stride, (usize) -> T read, (T) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: usize (by value)
> - `length`: usize (by value)
> - `offset`: usize (by value)
> - `stride`: usize (by value)
> - `receive`: (usize) -> T read, (T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::data::columnAt(index, length, offset, stride, receive);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-nullableat"></a>

> ## `nullableAt`

> Provides the module's **nullable at** operation. Returns `i32`.

```valor
public i32 nullableAt(usize index, usize length, (usize) -> bool is_valid, (usize) -> T read, (T) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: usize (by value)
> - `length`: usize (by value)
> - `receive`: (usize) -> bool is_valid, (usize) -> T read, (T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::data::nullableAt(index, length, receive);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-rangeindexkey"></a>

> ## `rangeIndexKey`

> Provides the module's **range index key** operation. Returns `u64`.

```valor
public u64 rangeIndexKey(u64 start, u64 step, usize position)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: u64 (by value)
> - `step`: u64 (by value)
> - `position`: usize (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::data::rangeIndexKey(start, step, position);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-sortedindexfind"></a>

> ## `sortedIndexFind`

> Provides the module's **sorted index find** operation. Returns `usize`.

```valor
public usize sortedIndexFind(u64 key, usize length, (usize) -> u64 read_key)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `key`: u64 (by value)
> - `length`: usize (by value)
> - `read_key`: (usize) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::data::sortedIndexFind(key, length, read_key);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-multiindexcodesarevalid"></a>

> ## `multiIndexCodesAreValid`

> Provides the module's **multi index codes are valid** operation. Returns `bool`.

```valor
public bool multiIndexCodesAreValid(usize length, usize level_count, usize value_count, (usize) -> usize level_offset, (usize, usize) -> u32 read_code)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `level_count`: usize (by value)
> - `value_count`: usize (by value)
> - `usize`: (usize) -> usize level_offset, ( (borrowed fn-ptr (callback))
> - `read_code`: usize) -> u32 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::data::multiIndexCodesAreValid(length, level_count, value_count, usize, read_code);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-groupoffsetsarevalid"></a>

> ## `groupOffsetsAreValid`

> Provides the module's **group offsets are valid** operation. Returns `bool`.

```valor
public bool groupOffsetsAreValid(usize row_count, usize group_count, (usize) -> usize offset, (usize) -> usize row_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `row_count`: usize (by value)
> - `group_count`: usize (by value)
> - `row_index`: (usize) -> usize offset, (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::data::groupOffsetsAreValid(row_count, group_count, row_index);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-grouplength"></a>

> ## `groupLength`

> Provides the module's **group length** operation. Returns `usize`.

```valor
public usize groupLength(usize group, usize group_count, (usize) -> usize offset)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `group`: usize (by value)
> - `group_count`: usize (by value)
> - `offset`: (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::data::groupLength(group, group_count, offset);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-rowviewisvalid"></a>

> ## `rowViewIsValid`

> Provides the module's **row view is valid** operation. Returns `bool`.

```valor
public bool rowViewIsValid(usize row, usize row_count, usize column_count, usize schema_field_count, u64 schema_fingerprint, u64 expected_fingerprint)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `row`: usize (by value)
> - `row_count`: usize (by value)
> - `column_count`: usize (by value)
> - `schema_field_count`: usize (by value)
> - `schema_fingerprint`: u64 (by value)
> - `expected_fingerprint`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::data::rowViewIsValid(row, row_count, column_count, schema_field_count, schema_fingerprint, expected_fingerprint);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-partitionbegin"></a>

> ## `partitionBegin`

> Balanced deterministic partitioning gives each worker a contiguous span. Balanced deterministic partitioning gives each worker a contiguous span. Consecutive rows preserve cache locality and make column kernels vectorizable.

```valor
public usize partitionBegin(usize length, usize partition_count, usize partition)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `partition_count`: usize (by value)
> - `partition`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::data::partitionBegin(length, partition_count, partition);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-partitionlength"></a>

> ## `partitionLength`

> Provides the module's **partition length** operation. Returns `usize`.

```valor
public usize partitionLength(usize length, usize partition_count, usize partition)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `partition_count`: usize (by value)
> - `partition`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::data::partitionLength(length, partition_count, partition);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-partitionnumanode"></a>

> ## `partitionNumaNode`

> Provides the module's **partition numa node** operation. Returns `u32`.

```valor
public u32 partitionNumaNode(usize partition, usize node_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `partition`: usize (by value)
> - `node_count`: usize (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::data::partitionNumaNode(partition, node_count);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-transformcolumn"></a>

> ## `transformColumn`

> Provides the module's **transform column** operation. Returns `i32`.

```valor
public i32 transformColumn(usize length, (usize) -> T read, (T) -> T apply, (usize, T) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `write`: (usize) -> T read, (T) -> T apply, (usize, T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::data::transformColumn(length, write);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-filtercolumn"></a>

> ## `filterColumn`

> Provides the module's **filter column** operation. Returns `i32`.

```valor
public i32 filterColumn(usize length, (usize) -> bool select, (usize) -> T read, (usize, T) -> void write, (usize) -> void receive_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `receive_length`: (usize) -> bool select, (usize) -> T read, (usize, T) -> void write, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::data::filterColumn(length, receive_length);
> ```

> ### SEE ALSO
>
> - [`std::data::addFits`](#fn-addfits)
> - [`std::data::multiplyFits`](#fn-multiplyfits)
> - [`std::data::rangeIsValid`](#fn-rangeisvalid)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Bytes](STD-BYTES-DOC.md) · [Table of contents](standard-library/README.md) · [Hashing →](STD-HASH-DOC.md)
