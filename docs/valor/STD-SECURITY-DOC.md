<!-- stdlib-reference-style: modern -->
> # `std::security`

`std::security` security checks and policy operations.

[Standard library](standard-library/README.md) / [Networking and security](standard-library/README.md#networking-and-security) / **Security**

> **Source:** `stdlib/std/security.valor` · **Routines:** 30 public

## Routines

<details>
<summary>Browse all 30 routines</summary>

- [`both`](#fn-both)
- [`addFits`](#fn-addfits)
- [`rangeIsValid`](#fn-rangeisvalid)
- [`powerOfTwo`](#fn-poweroftwo)
- [`storageIsValid`](#fn-storageisvalid)
- [`concurrencyIsValid`](#fn-concurrencyisvalid)
- [`numaPolicyIsValid`](#fn-numapolicyisvalid)
- [`keyAlgorithmIsValid`](#fn-keyalgorithmisvalid)
- [`signatureAlgorithmIsValid`](#fn-signaturealgorithmisvalid)
- [`fixedSizeIsValid`](#fn-fixedsizeisvalid)
- [`secureBufferStateIsValid`](#fn-securebufferstateisvalid)
- [`certificateStateIsValid`](#fn-certificatestateisvalid)
- [`partitionBegin`](#fn-partitionbegin)
- [`partitionLength`](#fn-partitionlength)
- [`secureErase`](#fn-secureerase)
- [`secureEraseSimd`](#fn-secureerasesimd)
- [`constantTimeEqual`](#fn-constanttimeequal)
- [`constantTimeEqualSimd`](#fn-constanttimeequalsimd)
- [`constantTimeSelectU8`](#fn-constanttimeselectu8)
- [`constantTimeCopy`](#fn-constanttimecopy)
- [`redactedDebugByte`](#fn-redacteddebugbyte)
- [`writeRedactedDebug`](#fn-writeredacteddebug)
- [`permissionContains`](#fn-permissioncontains)
- [`permissionUnion`](#fn-permissionunion)
- [`permissionIntersection`](#fn-permissionintersection)
- [`capabilityIsActive`](#fn-capabilityisactive)
- [`validateAccessToken`](#fn-validateaccesstoken)
- [`serializeProtected`](#fn-serializeprotected)
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
> bool result = std::security::both(left, right);
> ```

> ### SEE ALSO
>
> - [`std::security::addFits`](#fn-addfits)
> - [`std::security::rangeIsValid`](#fn-rangeisvalid)
> - [`std::security::powerOfTwo`](#fn-poweroftwo)

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
> bool result = std::security::addFits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::security::both`](#fn-both)
> - [`std::security::rangeIsValid`](#fn-rangeisvalid)
> - [`std::security::powerOfTwo`](#fn-poweroftwo)

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
> bool result = std::security::rangeIsValid(offset, count, length);
> ```

> ### SEE ALSO
>
> - [`std::security::both`](#fn-both)
> - [`std::security::addFits`](#fn-addfits)
> - [`std::security::powerOfTwo`](#fn-poweroftwo)

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
> bool result = std::security::powerOfTwo(value);
> ```

> ### SEE ALSO
>
> - [`std::security::both`](#fn-both)
> - [`std::security::addFits`](#fn-addfits)
> - [`std::security::rangeIsValid`](#fn-rangeisvalid)

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
> bool result = std::security::storageIsValid(storage);
> ```

> ### SEE ALSO
>
> - [`std::security::both`](#fn-both)
> - [`std::security::addFits`](#fn-addfits)
> - [`std::security::rangeIsValid`](#fn-rangeisvalid)

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
> bool result = std::security::concurrencyIsValid(concurrency);
> ```

> ### SEE ALSO
>
> - [`std::security::both`](#fn-both)
> - [`std::security::addFits`](#fn-addfits)
> - [`std::security::rangeIsValid`](#fn-rangeisvalid)

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
> bool result = std::security::numaPolicyIsValid(policy);
> ```

> ### SEE ALSO
>
> - [`std::security::both`](#fn-both)
> - [`std::security::addFits`](#fn-addfits)
> - [`std::security::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-keyalgorithmisvalid"></a>

> ## `keyAlgorithmIsValid`

> Provides the module's **key algorithm is valid** operation. Returns `bool`.

```valor
public bool keyAlgorithmIsValid(u8 algorithm)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `algorithm`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::security::keyAlgorithmIsValid(algorithm);
> ```

> ### SEE ALSO
>
> - [`std::security::both`](#fn-both)
> - [`std::security::addFits`](#fn-addfits)
> - [`std::security::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-signaturealgorithmisvalid"></a>

> ## `signatureAlgorithmIsValid`

> Provides the module's **signature algorithm is valid** operation. Returns `bool`.

```valor
public bool signatureAlgorithmIsValid(u8 algorithm)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `algorithm`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::security::signatureAlgorithmIsValid(algorithm);
> ```

> ### SEE ALSO
>
> - [`std::security::both`](#fn-both)
> - [`std::security::addFits`](#fn-addfits)
> - [`std::security::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-fixedsizeisvalid"></a>

> ## `fixedSizeIsValid`

> Provides the module's **fixed size is valid** operation. Returns `bool`.

```valor
public bool fixedSizeIsValid(usize byte_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::security::fixedSizeIsValid(byte_length);
> ```

> ### SEE ALSO
>
> - [`std::security::both`](#fn-both)
> - [`std::security::addFits`](#fn-addfits)
> - [`std::security::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-securebufferstateisvalid"></a>

> ## `secureBufferStateIsValid`

> Provides the module's **secure buffer state is valid** operation. Returns `bool`.

```valor
public bool secureBufferStateIsValid(usize length, usize capacity, usize alignment, u8 storage, u8 concurrency)
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
> bool result = std::security::secureBufferStateIsValid(length, capacity, alignment, storage, concurrency);
> ```

> ### SEE ALSO
>
> - [`std::security::both`](#fn-both)
> - [`std::security::addFits`](#fn-addfits)
> - [`std::security::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-certificatestateisvalid"></a>

> ## `certificateStateIsValid`

> Provides the module's **certificate state is valid** operation. Returns `bool`.

```valor
public bool certificateStateIsValid(usize byte_length, usize subject_offset, usize subject_length, usize issuer_offset, usize issuer_length, u64 not_before, u64 not_after, u8 format)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)
> - `subject_offset`: usize (by value)
> - `subject_length`: usize (by value)
> - `issuer_offset`: usize (by value)
> - `issuer_length`: usize (by value)
> - `not_before`: u64 (by value)
> - `not_after`: u64 (by value)
> - `format`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::security::certificateStateIsValid(byte_length, subject_offset, subject_length, issuer_offset, issuer_length, not_before, not_after, format);
> ```

> ### SEE ALSO
>
> - [`std::security::both`](#fn-both)
> - [`std::security::addFits`](#fn-addfits)
> - [`std::security::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-partitionbegin"></a>

> ## `partitionBegin`

> Deterministic contiguous partitioning lets callers bind independent ranges to NUMA nodes without sharing mutable state. Deterministic contiguous partitioning lets callers bind independent ranges to NUMA nodes without sharing mutable state.

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
> usize result = std::security::partitionBegin(length, partitions, partition);
> ```

> ### SEE ALSO
>
> - [`std::security::both`](#fn-both)
> - [`std::security::addFits`](#fn-addfits)
> - [`std::security::rangeIsValid`](#fn-rangeisvalid)

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
> usize result = std::security::partitionLength(length, partitions, partition);
> ```

> ### SEE ALSO
>
> - [`std::security::both`](#fn-both)
> - [`std::security::addFits`](#fn-addfits)
> - [`std::security::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-secureerase"></a>

> ## `secureErase`

> write_byte must perform an observable store to exclusively borrowed storage. write_byte must perform an observable store to exclusively borrowed storage. completion_barrier is called after the final store and is the safe runtime or device-specific compiler-barrier boundary. No secret value is returned.

```valor
public i32 secureErase(usize byte_length, (usize, u8) -> void write_byte, () -> void completion_barrier)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)
> - `completion_barrier`: (usize, u8) -> void write_byte, () -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::security::secureErase(byte_length, completion_barrier);
> ```

> ### SEE ALSO
>
> - [`std::security::both`](#fn-both)
> - [`std::security::addFits`](#fn-addfits)
> - [`std::security::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-secureerasesimd"></a>

> ## `secureEraseSimd`

> Erases equal-sized SIMD blocks through a caller vector primitive and uses scalar observable stores only for the tail. Erases equal-sized SIMD blocks through a caller vector primitive and uses scalar observable stores only for the tail.

```valor
public i32 secureEraseSimd(usize byte_length, (usize) -> void erase_block_16, (usize, u8) -> void write_byte, () -> void completion_barrier)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)
> - `usize`: (usize) -> void erase_block_16, ( (borrowed fn-ptr (callback))
> - `completion_barrier`: u8) -> void write_byte, () -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::security::secureEraseSimd(byte_length, usize, completion_barrier);
> ```

> ### SEE ALSO
>
> - [`std::security::both`](#fn-both)
> - [`std::security::addFits`](#fn-addfits)
> - [`std::security::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-constanttimeequal"></a>

> ## `constantTimeEqual`

> Executes exactly byte_length reads from each input and never exits early. Executes exactly byte_length reads from each input and never exits early. The only data-dependent decision occurs after all bytes are accumulated.

```valor
public bool constantTimeEqual(usize byte_length, (usize) -> u8 read_left, (usize) -> u8 read_right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)
> - `read_right`: (usize) -> u8 read_left, (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::security::constantTimeEqual(byte_length, read_right);
> ```

> ### SEE ALSO
>
> - [`std::security::both`](#fn-both)
> - [`std::security::addFits`](#fn-addfits)
> - [`std::security::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-constanttimeequalsimd"></a>

> ## `constantTimeEqualSimd`

> compare_block_16 must read exactly sixteen bytes from both inputs and return true on any mismatch. compare_block_16 must read exactly sixteen bytes from both inputs and return true on any mismatch. This contract permits native SIMD without alignment-dependent or data-dependent fallback.

```valor
public bool constantTimeEqualSimd(usize byte_length, (usize) -> bool compare_block_16, (usize) -> u8 read_left, (usize) -> u8 read_right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)
> - `read_right`: (usize) -> bool compare_block_16, (usize) -> u8 read_left, (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::security::constantTimeEqualSimd(byte_length, read_right);
> ```

> ### SEE ALSO
>
> - [`std::security::both`](#fn-both)
> - [`std::security::addFits`](#fn-addfits)
> - [`std::security::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-constanttimeselectu8"></a>

> ## `constantTimeSelectU8`

> mask must be either 0 or 255. mask must be either 0 or 255. Selection is branch-free with respect to the selected values and maps directly to a vector multiply/add blend.

```valor
public u8 constantTimeSelectU8(u8 mask, u8 when_set, u8 when_clear)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `mask`: u8 (by value)
> - `when_set`: u8 (by value)
> - `when_clear`: u8 (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::security::constantTimeSelectU8(mask, when_set, when_clear);
> ```

> ### SEE ALSO
>
> - [`std::security::both`](#fn-both)
> - [`std::security::addFits`](#fn-addfits)
> - [`std::security::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-constanttimecopy"></a>

> ## `constantTimeCopy`

> Provides the module's **constant time copy** operation. Returns `i32`.

```valor
public i32 constantTimeCopy(usize byte_length, u8 mask, (usize) -> u8 read_when_set, (usize) -> u8 read_when_clear, (usize, u8) -> void write_result)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)
> - `mask`: u8 (by value)
> - `write_result`: (usize) -> u8 read_when_set, (usize) -> u8 read_when_clear, (usize, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::security::constantTimeCopy(byte_length, mask, write_result);
> ```

> ### SEE ALSO
>
> - [`std::security::both`](#fn-both)
> - [`std::security::addFits`](#fn-addfits)
> - [`std::security::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-redacteddebugbyte"></a>

> ## `redactedDebugByte`

> Provides the module's **redacted debug byte** operation. Returns `u8`.

```valor
public u8 redactedDebugByte(usize offset)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: usize (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::security::redactedDebugByte(offset);
> ```

> ### SEE ALSO
>
> - [`std::security::both`](#fn-both)
> - [`std::security::addFits`](#fn-addfits)
> - [`std::security::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-writeredacteddebug"></a>

> ## `writeRedactedDebug`

> Secret wrappers should route Debug and Display through this fixed redaction.

```valor
public i32 writeRedactedDebug(usize capacity, (usize, u8) -> void write_byte, (usize) -> void receive_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `receive_length`: (usize, u8) -> void write_byte, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::security::writeRedactedDebug(capacity, receive_length);
> ```

> ### SEE ALSO
>
> - [`std::security::both`](#fn-both)
> - [`std::security::addFits`](#fn-addfits)
> - [`std::security::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-permissioncontains"></a>

> ## `permissionContains`

> Provides the module's **permission contains** operation. Returns `bool`.

```valor
public bool permissionContains(u64 granted, u64 required)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `granted`: u64 (by value)
> - `required`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::security::permissionContains(granted, required);
> ```

> ### SEE ALSO
>
> - [`std::security::both`](#fn-both)
> - [`std::security::addFits`](#fn-addfits)
> - [`std::security::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-permissionunion"></a>

> ## `permissionUnion`

> Provides the module's **permission union** operation. Returns `u64`.

```valor
public u64 permissionUnion(u64 left, u64 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: u64 (by value)
> - `right`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::security::permissionUnion(left, right);
> ```

> ### SEE ALSO
>
> - [`std::security::both`](#fn-both)
> - [`std::security::addFits`](#fn-addfits)
> - [`std::security::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-permissionintersection"></a>

> ## `permissionIntersection`

> Provides the module's **permission intersection** operation. Returns `u64`.

```valor
public u64 permissionIntersection(u64 left, u64 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: u64 (by value)
> - `right`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::security::permissionIntersection(left, right);
> ```

> ### SEE ALSO
>
> - [`std::security::both`](#fn-both)
> - [`std::security::addFits`](#fn-addfits)
> - [`std::security::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-capabilityisactive"></a>

> ## `capabilityIsActive`

> Provides the module's **capability is active** operation. Returns `bool`.

```valor
public bool capabilityIsActive(u64 granted, u64 required, u64 capability_resource, u64 required_resource, u64 not_before, u64 not_after, u64 now, bool revoked)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `granted`: u64 (by value)
> - `required`: u64 (by value)
> - `capability_resource`: u64 (by value)
> - `required_resource`: u64 (by value)
> - `not_before`: u64 (by value)
> - `not_after`: u64 (by value)
> - `now`: u64 (by value)
> - `revoked`: bool (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::security::capabilityIsActive(granted, required, capability_resource, required_resource, not_before, not_after, now, revoked);
> ```

> ### SEE ALSO
>
> - [`std::security::both`](#fn-both)
> - [`std::security::addFits`](#fn-addfits)
> - [`std::security::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-validateaccesstoken"></a>

> ## `validateAccessToken`

> Provides the module's **validate access token** operation. Returns `i32`.

```valor
public i32 validateAccessToken(u64 granted, u64 required, u64 token_audience, u64 required_audience, u64 not_before, u64 not_after, u64 now, bool validated, bool revoked)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `granted`: u64 (by value)
> - `required`: u64 (by value)
> - `token_audience`: u64 (by value)
> - `required_audience`: u64 (by value)
> - `not_before`: u64 (by value)
> - `not_after`: u64 (by value)
> - `now`: u64 (by value)
> - `validated`: bool (by value)
> - `revoked`: bool (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::security::validateAccessToken(granted, required, token_audience, required_audience, not_before, not_after, now, validated, revoked);
> ```

> ### SEE ALSO
>
> - [`std::security::both`](#fn-both)
> - [`std::security::addFits`](#fn-addfits)
> - [`std::security::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-serializeprotected"></a>

> ## `serializeProtected`

> Serialization is denied unless an active capability grants both export and secret serialization. Serialization is denied unless an active capability grants both export and secret serialization. The source is read once and copied directly into the caller's destination; no intermediate plaintext allocation is created.

```valor
public i32 serializeProtected(usize byte_length, usize capacity, u64 granted, u64 capability_resource, u64 required_resource, u64 not_before, u64 not_after, u64 now, bool revoked, (usize) -> u8 read_secret, (usize, u8) -> void write_output, (usize) -> void receive_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)
> - `capacity`: usize (by value)
> - `granted`: u64 (by value)
> - `capability_resource`: u64 (by value)
> - `required_resource`: u64 (by value)
> - `not_before`: u64 (by value)
> - `not_after`: u64 (by value)
> - `now`: u64 (by value)
> - `revoked`: bool (by value)
> - `usize`: (usize) -> u8 read_secret, ( (borrowed fn-ptr (callback))
> - `receive_length`: u8) -> void write_output, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::security::serializeProtected(byte_length, capacity, granted, capability_resource, required_resource, not_before, not_after, now, revoked, usize, receive_length);
> ```

> ### SEE ALSO
>
> - [`std::security::both`](#fn-both)
> - [`std::security::addFits`](#fn-addfits)
> - [`std::security::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-publishsnapshot"></a>

> ## `publishSnapshot`

> Provides the module's **publish snapshot** operation. Returns `i32`.

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
> i32 result = std::security::publishSnapshot(generation, publish_generation_release);
> ```

> ### SEE ALSO
>
> - [`std::security::both`](#fn-both)
> - [`std::security::addFits`](#fn-addfits)
> - [`std::security::rangeIsValid`](#fn-rangeisvalid)

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
> i32 result = std::security::readSnapshot(retry_limit, receive);
> ```

> ### SEE ALSO
>
> - [`std::security::both`](#fn-both)
> - [`std::security::addFits`](#fn-addfits)
> - [`std::security::rangeIsValid`](#fn-rangeisvalid)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← HTTP](STD-HTTP-DOC.md) · [Table of contents](standard-library/README.md) · [Cryptographic hashing →](STD-CRYPTO-HASH-DOC.md)
