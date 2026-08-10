<!-- stdlib-reference-style: modern -->
> # `std::collections::hash`

`std::collections::hash` hash-table control and lookup operations.

[Standard library](standard-library/README.md) / [Collections and text](standard-library/README.md#collections-and-text) / **Hash collections**

> **Source:** `stdlib/std/collections/hash.valor` · **Routines:** 64 public

## Routines

<details>
<summary>Browse all 64 routines</summary>

- [`mixHash`](#fn-mixhash)
- [`fingerprint`](#fn-fingerprint)
- [`controlIsFull`](#fn-controlisfull)
- [`controlIsEmpty`](#fn-controlisempty)
- [`controlIsDeleted`](#fn-controlisdeleted)
- [`controlStopsProbe`](#fn-controlstopsprobe)
- [`powerOfTwo`](#fn-poweroftwo)
- [`wrappedIndex`](#fn-wrappedindex)
- [`probeStart`](#fn-probestart)
- [`probeIndex`](#fn-probeindex)
- [`maxLoad`](#fn-maxload)
- [`tableStateIsValid`](#fn-tablestateisvalid)
- [`tableCanInsert`](#fn-tablecaninsert)
- [`tableShouldRehash`](#fn-tableshouldrehash)
- [`nextCapacity`](#fn-nextcapacity)
- [`maskBit`](#fn-maskbit)
- [`controlMatchMask`](#fn-controlmatchmask)
- [`controlAvailableMask`](#fn-controlavailablemask)
- [`firstMaskLane`](#fn-firstmasklane)
- [`swissFindGrouped`](#fn-swissfindgrouped)
- [`swissFind`](#fn-swissfind)
- [`swissGet`](#fn-swissget)
- [`swissInsert`](#fn-swissinsert)
- [`swissInsertOrAssign`](#fn-swissinsertorassign)
- [`swissErase`](#fn-swisserase)
- [`lengthAfterInsert`](#fn-lengthafterinsert)
- [`lengthAfterErase`](#fn-lengthaftererase)
- [`deletedAfterInsert`](#fn-deletedafterinsert)
- [`deletedAfterErase`](#fn-deletedaftererase)
- [`swissRehash`](#fn-swissrehash)
- [`probeDistance`](#fn-probedistance)
- [`robinHoodInsert`](#fn-robinhoodinsert)
- [`denseLengthAfterErase`](#fn-denselengthaftererase)
- [`linkAppend`](#fn-linkappend)
- [`linkRemove`](#fn-linkremove)
- [`linkMoveToTail`](#fn-linkmovetotail)
- [`multiMapAppendValue`](#fn-multimapappendvalue)
- [`biMapInsertCanCommit`](#fn-bimapinsertcancommit)
- [`biMapCommit`](#fn-bimapcommit)
- [`identityHash`](#fn-identityhash)
- [`identityEqual`](#fn-identityequal)
- [`lruTouch`](#fn-lrutouch)
- [`lruVictim`](#fn-lruvictim)
- [`ttlIsExpired`](#fn-ttlisexpired)
- [`ttlDeadlineFits`](#fn-ttldeadlinefits)
- [`ttlDeadline`](#fn-ttldeadline)
- [`ttlGet`](#fn-ttlget)
- [`ttlSweep`](#fn-ttlsweep)
- [`immutableGenerationIsNewer`](#fn-immutablegenerationisnewer)
- [`immutablePublish`](#fn-immutablepublish)
- [`orderPolicyIsValid`](#fn-orderpolicyisvalid)
- [`visitUnspecified`](#fn-visitunspecified)
- [`visitInsertionOrder`](#fn-visitinsertionorder)
- [`canonicalOrder`](#fn-canonicalorder)
- [`numaPolicyIsValid`](#fn-numapolicyisvalid)
- [`shardForHash`](#fn-shardforhash)
- [`numaPartitionBegin`](#fn-numapartitionbegin)
- [`numaPartitionLength`](#fn-numapartitionlength)
- [`concurrentSize`](#fn-concurrentsize)
- [`concurrentWithShard`](#fn-concurrentwithshard)
- [`lockFreeTryInsert`](#fn-lockfreetryinsert)
- [`lockFreeTryInsertUnique`](#fn-lockfreetryinsertunique)
- [`lockFreeHelpMigrate`](#fn-lockfreehelpmigrate)
- [`migrationIsComplete`](#fn-migrationiscomplete)

</details>

## API reference

<a id="fn-mixhash"></a>

> ## `mixHash`

> Provides the module's **mix hash** operation. Returns `u64`.

```valor
public u64 mixHash(u64 value, u64 seed)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)
> - `seed`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::collections::hash::mixHash(value, seed);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)
> - [`std::collections::hash::controlIsEmpty`](#fn-controlisempty)

<a id="fn-fingerprint"></a>

> ## `fingerprint`

> Provides the module's **fingerprint** operation. Returns `u8`.

```valor
public u8 fingerprint(u64 hash)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::collections::hash::fingerprint(hash);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)
> - [`std::collections::hash::controlIsEmpty`](#fn-controlisempty)

<a id="fn-controlisfull"></a>

> ## `controlIsFull`

> Provides the module's **control is full** operation. Returns `bool`.

```valor
public bool controlIsFull(u8 control)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `control`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::hash::controlIsFull(control);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsEmpty`](#fn-controlisempty)

<a id="fn-controlisempty"></a>

> ## `controlIsEmpty`

> Provides the module's **control is empty** operation. Returns `bool`.

```valor
public bool controlIsEmpty(u8 control)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `control`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::hash::controlIsEmpty(control);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-controlisdeleted"></a>

> ## `controlIsDeleted`

> Provides the module's **control is deleted** operation. Returns `bool`.

```valor
public bool controlIsDeleted(u8 control)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `control`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::hash::controlIsDeleted(control);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-controlstopsprobe"></a>

> ## `controlStopsProbe`

> Provides the module's **control stops probe** operation. Returns `bool`.

```valor
public bool controlStopsProbe(u8 control)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `control`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::hash::controlStopsProbe(control);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

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
> bool result = std::collections::hash::powerOfTwo(value);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-wrappedindex"></a>

> ## `wrappedIndex`

> Provides the module's **wrapped index** operation. Returns `usize`.

```valor
public usize wrappedIndex(usize value, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::hash::wrappedIndex(value, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-probestart"></a>

> ## `probeStart`

> Provides the module's **probe start** operation. Returns `usize`.

```valor
public usize probeStart(u64 hash, usize capacity)
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
> usize result = std::collections::hash::probeStart(hash, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-probeindex"></a>

> ## `probeIndex`

> Provides the module's **probe index** operation. Returns `usize`.

```valor
public usize probeIndex(usize start, usize group, usize lane, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `group`: usize (by value)
> - `lane`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::hash::probeIndex(start, group, lane, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-maxload"></a>

> ## `maxLoad`

> Provides the module's **max load** operation. Returns `usize`.

```valor
public usize maxLoad(usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::hash::maxLoad(capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-tablestateisvalid"></a>

> ## `tableStateIsValid`

> Provides the module's **table state is valid** operation. Returns `bool`.

```valor
public bool tableStateIsValid(usize length, usize deleted, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `deleted`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::hash::tableStateIsValid(length, deleted, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-tablecaninsert"></a>

> ## `tableCanInsert`

> Provides the module's **table can insert** operation. Returns `bool`.

```valor
public bool tableCanInsert(usize length, usize deleted, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `deleted`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::hash::tableCanInsert(length, deleted, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-tableshouldrehash"></a>

> ## `tableShouldRehash`

> Provides the module's **table should rehash** operation. Returns `bool`.

```valor
public bool tableShouldRehash(usize length, usize deleted, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `deleted`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::hash::tableShouldRehash(length, deleted, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-nextcapacity"></a>

> ## `nextCapacity`

> Provides the module's **next capacity** operation. Returns `usize`.

```valor
public usize nextCapacity(usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::hash::nextCapacity(capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-maskbit"></a>

> ## `maskBit`

> Provides the module's **mask bit** operation. Returns `u16`.

```valor
public u16 maskBit(usize lane)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `lane`: usize (by value)

> ### RETURNS (u16)

> ### EXAMPLE
>
> ```valor
> u16 result = std::collections::hash::maskBit(lane);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-controlmatchmask"></a>

> ## `controlMatchMask`

> Provides the module's **control match mask** operation. Returns `u16`.

```valor
public u16 controlMatchMask(usize group_start, u8 wanted, (usize) -> u8 read_control)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `group_start`: usize (by value)
> - `wanted`: u8 (by value)
> - `read_control`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (u16)

> ### EXAMPLE
>
> ```valor
> u16 result = std::collections::hash::controlMatchMask(group_start, wanted, read_control);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-controlavailablemask"></a>

> ## `controlAvailableMask`

> Provides the module's **control available mask** operation. Returns `u16`.

```valor
public u16 controlAvailableMask(usize group_start, (usize) -> u8 read_control)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `group_start`: usize (by value)
> - `read_control`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (u16)

> ### EXAMPLE
>
> ```valor
> u16 result = std::collections::hash::controlAvailableMask(group_start, read_control);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-firstmasklane"></a>

> ## `firstMaskLane`

> Provides the module's **first mask lane** operation. Returns `usize`.

```valor
public usize firstMaskLane(u16 mask)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `mask`: u16 (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::hash::firstMaskLane(mask);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-swissfindgrouped"></a>

> ## `swissFindGrouped`

> Provides the module's **swiss find grouped** operation. Returns `i32`.

```valor
public i32 swissFindGrouped(usize capacity, u64 hash, K key, (usize, u8) -> u16 load_match_mask, (usize) -> u16 load_empty_mask, (usize) -> K read_key, (K, K) -> bool equal, (usize) -> void receive_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `hash`: u64 (by value)
> - `key`: K (by value)
> - `receive_index`: (usize, u8) -> u16 load_match_mask, (usize) -> u16 load_empty_mask, (usize) -> K read_key, (K, K) -> bool equal, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::hash::swissFindGrouped(capacity, hash, key, receive_index);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-swissfind"></a>

> ## `swissFind`

> Provides the module's **swiss find** operation. Returns `i32`.

```valor
public i32 swissFind(usize capacity, u64 hash, K key, (usize) -> u8 read_control, (usize) -> K read_key, (K, K) -> bool equal, (usize) -> void receive_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `hash`: u64 (by value)
> - `key`: K (by value)
> - `receive_index`: (usize) -> u8 read_control, (usize) -> K read_key, (K, K) -> bool equal, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::hash::swissFind(capacity, hash, key, receive_index);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-swissget"></a>

> ## `swissGet`

> Provides the module's **swiss get** operation. Returns `i32`.

```valor
public i32 swissGet(usize capacity, u64 hash, K key, (usize) -> u8 read_control, (usize) -> K read_key, (usize) -> V read_value, (K, K) -> bool equal, (V) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `hash`: u64 (by value)
> - `key`: K (by value)
> - `receive`: (usize) -> u8 read_control, (usize) -> K read_key, (usize) -> V read_value, (K, K) -> bool equal, (V) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::hash::swissGet(capacity, hash, key, receive);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-swissinsert"></a>

> ## `swissInsert`

> Provides the module's **swiss insert** operation. Returns `i32`.

```valor
public i32 swissInsert(usize length, usize deleted, usize capacity, u64 hash, K key, V value, (usize) -> u8 read_control, (usize) -> K read_key, (usize, K, V) -> void write_entry, (usize, u8) -> void publish_control, (K, K) -> bool equal, (usize) -> void receive_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `deleted`: usize (by value)
> - `capacity`: usize (by value)
> - `hash`: u64 (by value)
> - `key`: K (by value)
> - `value`: V (by value)
> - `receive_index`: (usize) -> u8 read_control, (usize) -> K read_key, (usize, K, V) -> void write_entry, (usize, u8) -> void publish_control, (K, K) -> bool equal, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::hash::swissInsert(length, deleted, capacity, hash, key, value, receive_index);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-swissinsertorassign"></a>

> ## `swissInsertOrAssign`

> Provides the module's **swiss insert or assign** operation. Returns `i32`.

```valor
public i32 swissInsertOrAssign(usize length, usize deleted, usize capacity, u64 hash, K key, V value, (usize) -> u8 read_control, (usize) -> K read_key, (usize, K, V) -> void write_entry, (usize, u8) -> void publish_control, (K, K) -> bool equal, (usize) -> void receive_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `deleted`: usize (by value)
> - `capacity`: usize (by value)
> - `hash`: u64 (by value)
> - `key`: K (by value)
> - `value`: V (by value)
> - `receive_index`: (usize) -> u8 read_control, (usize) -> K read_key, (usize, K, V) -> void write_entry, (usize, u8) -> void publish_control, (K, K) -> bool equal, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::hash::swissInsertOrAssign(length, deleted, capacity, hash, key, value, receive_index);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-swisserase"></a>

> ## `swissErase`

> Provides the module's **swiss erase** operation. Returns `i32`.

```valor
public i32 swissErase(usize capacity, u64 hash, K key, (usize) -> u8 read_control, (usize) -> K read_key, (usize) -> V read_value, (usize, u8) -> void publish_control, (K, K) -> bool equal, (K, V) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `hash`: u64 (by value)
> - `key`: K (by value)
> - `receive`: (usize) -> u8 read_control, (usize) -> K read_key, (usize) -> V read_value, (usize, u8) -> void publish_control, (K, K) -> bool equal, (K, V) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::hash::swissErase(capacity, hash, key, receive);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-lengthafterinsert"></a>

> ## `lengthAfterInsert`

> Provides the module's **length after insert** operation. Returns `usize`.

```valor
public usize lengthAfterInsert(usize length, i32 status)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `status`: i32 (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::hash::lengthAfterInsert(length, status);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-lengthaftererase"></a>

> ## `lengthAfterErase`

> Provides the module's **length after erase** operation. Returns `usize`.

```valor
public usize lengthAfterErase(usize length, i32 status)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `status`: i32 (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::hash::lengthAfterErase(length, status);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-deletedafterinsert"></a>

> ## `deletedAfterInsert`

> Provides the module's **deleted after insert** operation. Returns `usize`.

```valor
public usize deletedAfterInsert(usize deleted, bool reused_deleted, i32 status)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `deleted`: usize (by value)
> - `reused_deleted`: bool (by value)
> - `status`: i32 (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::hash::deletedAfterInsert(deleted, reused_deleted, status);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-deletedaftererase"></a>

> ## `deletedAfterErase`

> Provides the module's **deleted after erase** operation. Returns `usize`.

```valor
public usize deletedAfterErase(usize deleted, i32 status)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `deleted`: usize (by value)
> - `status`: i32 (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::hash::deletedAfterErase(deleted, status);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-swissrehash"></a>

> ## `swissRehash`

> Provides the module's **swiss rehash** operation. Returns `i32`.

```valor
public i32 swissRehash(usize old_capacity, usize new_capacity, u64 hash_seed, (usize) -> u8 read_old_control, (usize) -> K read_old_key, (usize) -> V read_old_value, (K, u64) -> u64 hash_key, (usize) -> u8 read_new_control, (usize, K, V) -> void write_new_entry, (usize, u8) -> void publish_new_control)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `old_capacity`: usize (by value)
> - `new_capacity`: usize (by value)
> - `hash_seed`: u64 (by value)
> - `publish_new_control`: (usize) -> u8 read_old_control, (usize) -> K read_old_key, (usize) -> V read_old_value, (K, u64) -> u64 hash_key, (usize) -> u8 read_new_control, (usize, K, V) -> void write_new_entry, (usize, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::hash::swissRehash(old_capacity, new_capacity, hash_seed, publish_new_control);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-probedistance"></a>

> ## `probeDistance`

> Provides the module's **probe distance** operation. Returns `usize`.

```valor
public usize probeDistance(usize ideal, usize slot, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `ideal`: usize (by value)
> - `slot`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::hash::probeDistance(ideal, slot, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-robinhoodinsert"></a>

> ## `robinHoodInsert`

> Provides the module's **robin hood insert** operation. Returns `i32`.

```valor
public i32 robinHoodInsert(usize length, usize capacity, u64 hash, K key, V value, (usize) -> u8 read_control, (usize) -> u32 read_distance, (usize) -> K read_key, (usize) -> V read_value, (usize, K, V, u8, u32) -> void write_entry, (K, K) -> bool equal)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `hash`: u64 (by value)
> - `key`: K (by value)
> - `value`: V (by value)
> - `equal`: (usize) -> u8 read_control, (usize) -> u32 read_distance, (usize) -> K read_key, (usize) -> V read_value, (usize, K, V, u8, u32) -> void write_entry, (K, K) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::hash::robinHoodInsert(length, capacity, hash, key, value, equal);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-denselengthaftererase"></a>

> ## `denseLengthAfterErase`

> Provides the module's **dense length after erase** operation. Returns `usize`.

```valor
public usize denseLengthAfterErase(usize length, usize dense_index, (usize, usize) -> void move_dense, (usize, usize) -> void update_sparse)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `dense_index`: usize (by value)
> - `usize`: (usize, usize) -> void move_dense, ( (borrowed fn-ptr (callback))
> - `update_sparse`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::hash::denseLengthAfterErase(length, dense_index, usize, update_sparse);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-linkappend"></a>

> ## `linkAppend`

> Provides the module's **link append** operation. Returns `i32`.

```valor
public i32 linkAppend(usize slot, usize length, usize head, usize tail, (usize, usize) -> void write_previous, (usize, usize) -> void write_next, (usize, usize) -> void receive_ends)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `slot`: usize (by value)
> - `length`: usize (by value)
> - `head`: usize (by value)
> - `tail`: usize (by value)
> - `usize`: (usize, usize) -> void write_previous, ( (borrowed fn-ptr (callback))
> - `receive_ends`: usize) -> void write_next, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::hash::linkAppend(slot, length, head, tail, usize, receive_ends);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-linkremove"></a>

> ## `linkRemove`

> Provides the module's **link remove** operation. Returns `i32`.

```valor
public i32 linkRemove(usize slot, usize previous, usize next, usize head, usize tail, (usize, usize) -> void write_previous, (usize, usize) -> void write_next, (usize, usize) -> void receive_ends)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `slot`: usize (by value)
> - `previous`: usize (by value)
> - `next`: usize (by value)
> - `head`: usize (by value)
> - `tail`: usize (by value)
> - `usize`: (usize, usize) -> void write_previous, ( (borrowed fn-ptr (callback))
> - `receive_ends`: usize) -> void write_next, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::hash::linkRemove(slot, previous, next, head, tail, usize, receive_ends);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-linkmovetotail"></a>

> ## `linkMoveToTail`

> Provides the module's **link move to tail** operation. Returns `i32`.

```valor
public i32 linkMoveToTail(usize slot, usize previous, usize next, usize head, usize tail, (usize, usize) -> void write_previous, (usize, usize) -> void write_next, (usize, usize) -> void receive_ends)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `slot`: usize (by value)
> - `previous`: usize (by value)
> - `next`: usize (by value)
> - `head`: usize (by value)
> - `tail`: usize (by value)
> - `usize`: (usize, usize) -> void write_previous, ( (borrowed fn-ptr (callback))
> - `receive_ends`: usize) -> void write_next, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::hash::linkMoveToTail(slot, previous, next, head, tail, usize, receive_ends);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-multimapappendvalue"></a>

> ## `multiMapAppendValue`

> Provides the module's **multi map append value** operation. Returns `i32`.

```valor
public i32 multiMapAppendValue(usize value_length, usize value_capacity, usize old_head, V value, (usize, V, usize) -> void write_value, (usize) -> void receive_head)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value_length`: usize (by value)
> - `value_capacity`: usize (by value)
> - `old_head`: usize (by value)
> - `value`: V (by value)
> - `receive_head`: (usize, V, usize) -> void write_value, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::hash::multiMapAppendValue(value_length, value_capacity, old_head, value, receive_head);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-bimapinsertcancommit"></a>

> ## `biMapInsertCanCommit`

> Provides the module's **bi map insert can commit** operation. Returns `bool`.

```valor
public bool biMapInsertCanCommit(i32 forward_status, i32 reverse_status)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `forward_status`: i32 (by value)
> - `reverse_status`: i32 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::hash::biMapInsertCanCommit(forward_status, reverse_status);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-bimapcommit"></a>

> ## `biMapCommit`

> Provides the module's **bi map commit** operation. Returns `i32`.

```valor
public i32 biMapCommit(usize pair_index, usize forward_slot, usize reverse_slot, (usize, usize) -> void write_forward_slot, (usize, usize) -> void write_reverse_slot, (usize, u8) -> void publish_forward, (usize, u8) -> void publish_reverse, u8 forward_fingerprint, u8 reverse_fingerprint)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `pair_index`: usize (by value)
> - `forward_slot`: usize (by value)
> - `reverse_slot`: usize (by value)
> - `usize`: (usize, usize) -> void write_forward_slot, ( (borrowed fn-ptr (callback))
> - `reverse_fingerprint`: usize) -> void write_reverse_slot, (usize, u8) -> void publish_forward, (usize, u8) -> void publish_reverse, u8 forward_fingerprint, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::hash::biMapCommit(pair_index, forward_slot, reverse_slot, usize, reverse_fingerprint);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-identityhash"></a>

> ## `identityHash`

> Provides the module's **identity hash** operation. Returns `u64`.

```valor
public u64 identityHash(u64 identity, u64 seed)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `identity`: u64 (by value)
> - `seed`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::collections::hash::identityHash(identity, seed);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-identityequal"></a>

> ## `identityEqual`

> Provides the module's **identity equal** operation. Returns `bool`.

```valor
public bool identityEqual(u64 left, u64 right)
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
> bool result = std::collections::hash::identityEqual(left, right);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-lrutouch"></a>

> ## `lruTouch`

> Provides the module's **lru touch** operation. Returns `i32`.

```valor
public i32 lruTouch(usize slot, usize previous, usize next, usize least_recent, usize most_recent, (usize, usize) -> void write_previous, (usize, usize) -> void write_next, (usize, usize) -> void receive_ends)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `slot`: usize (by value)
> - `previous`: usize (by value)
> - `next`: usize (by value)
> - `least_recent`: usize (by value)
> - `most_recent`: usize (by value)
> - `usize`: (usize, usize) -> void write_previous, ( (borrowed fn-ptr (callback))
> - `receive_ends`: usize) -> void write_next, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::hash::lruTouch(slot, previous, next, least_recent, most_recent, usize, receive_ends);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-lruvictim"></a>

> ## `lruVictim`

> Provides the module's **lru victim** operation. Returns `i32`.

```valor
public i32 lruVictim(usize length, usize least_recent, (usize) -> void receive_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `least_recent`: usize (by value)
> - `receive_index`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::hash::lruVictim(length, least_recent, receive_index);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-ttlisexpired"></a>

> ## `ttlIsExpired`

> Provides the module's **ttl is expired** operation. Returns `bool`.

```valor
public bool ttlIsExpired(u64 expires_at, u64 now)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `expires_at`: u64 (by value)
> - `now`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::hash::ttlIsExpired(expires_at, now);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-ttldeadlinefits"></a>

> ## `ttlDeadlineFits`

> Provides the module's **ttl deadline fits** operation. Returns `bool`.

```valor
public bool ttlDeadlineFits(u64 now, u64 ttl)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `now`: u64 (by value)
> - `ttl`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::hash::ttlDeadlineFits(now, ttl);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-ttldeadline"></a>

> ## `ttlDeadline`

> Provides the module's **ttl deadline** operation. Returns `u64`.

```valor
public u64 ttlDeadline(u64 now, u64 ttl)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `now`: u64 (by value)
> - `ttl`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::collections::hash::ttlDeadline(now, ttl);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-ttlget"></a>

> ## `ttlGet`

> Provides the module's **ttl get** operation. Returns `i32`.

```valor
public i32 ttlGet(usize capacity, u64 hash, K key, u64 now, (usize) -> u8 read_control, (usize) -> K read_key, (usize) -> V read_value, (usize) -> u64 read_expiry, (K, K) -> bool equal, (V) -> void receive, (usize) -> void receive_expired_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `hash`: u64 (by value)
> - `key`: K (by value)
> - `now`: u64 (by value)
> - `receive_expired_index`: (usize) -> u8 read_control, (usize) -> K read_key, (usize) -> V read_value, (usize) -> u64 read_expiry, (K, K) -> bool equal, (V) -> void receive, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::hash::ttlGet(capacity, hash, key, now, receive_expired_index);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-ttlsweep"></a>

> ## `ttlSweep`

> Provides the module's **ttl sweep** operation. Returns `i32`.

```valor
public i32 ttlSweep(usize capacity, u64 now, (usize) -> u8 read_control, (usize) -> u64 read_expiry, (usize, u8) -> void publish_control, (usize) -> void receive_removed_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `now`: u64 (by value)
> - `receive_removed_count`: (usize) -> u8 read_control, (usize) -> u64 read_expiry, (usize, u8) -> void publish_control, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::hash::ttlSweep(capacity, now, receive_removed_count);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-immutablegenerationisnewer"></a>

> ## `immutableGenerationIsNewer`

> Provides the module's **immutable generation is newer** operation. Returns `bool`.

```valor
public bool immutableGenerationIsNewer(u64 candidate, u64 current)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `candidate`: u64 (by value)
> - `current`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::hash::immutableGenerationIsNewer(candidate, current);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-immutablepublish"></a>

> ## `immutablePublish`

> Provides the module's **immutable publish** operation. Returns `i32`.

```valor
public i32 immutablePublish(u64 current_generation, u64 candidate_generation, () -> void publish_snapshot)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `current_generation`: u64 (by value)
> - `candidate_generation`: u64 (by value)
> - `publish_snapshot`: () -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::hash::immutablePublish(current_generation, candidate_generation, publish_snapshot);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-orderpolicyisvalid"></a>

> ## `orderPolicyIsValid`

> Provides the module's **order policy is valid** operation. Returns `bool`.

```valor
public bool orderPolicyIsValid(u8 policy)
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
> bool result = std::collections::hash::orderPolicyIsValid(policy);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-visitunspecified"></a>

> ## `visitUnspecified`

> Provides the module's **visit unspecified** operation. Returns `i32`.

```valor
public i32 visitUnspecified(usize capacity, (usize) -> u8 read_control, (usize) -> void visit_slot)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `visit_slot`: (usize) -> u8 read_control, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::hash::visitUnspecified(capacity, visit_slot);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-visitinsertionorder"></a>

> ## `visitInsertionOrder`

> Provides the module's **visit insertion order** operation. Returns `i32`.

```valor
public i32 visitInsertionOrder(usize length, usize head, (usize) -> usize read_next, (usize) -> void visit_slot)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `head`: usize (by value)
> - `visit_slot`: (usize) -> usize read_next, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::hash::visitInsertionOrder(length, head, visit_slot);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-canonicalorder"></a>

> ## `canonicalOrder`

> Canonical iteration accepts a caller-owned index array. Canonical iteration accepts a caller-owned index array. Heapsort provides O(n log n) reproducible ordering without allocation inside this module.

```valor
public i32 canonicalOrder(usize length, (usize) -> usize read_index, (usize, usize) -> void write_index, (usize, usize) -> bool slot_precedes)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `usize`: (usize) -> usize read_index, ( (borrowed fn-ptr (callback))
> - `slot_precedes`: usize) -> void write_index, (usize, usize) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::hash::canonicalOrder(length, usize, slot_precedes);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

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
> bool result = std::collections::hash::numaPolicyIsValid(policy);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-shardforhash"></a>

> ## `shardForHash`

> Provides the module's **shard for hash** operation. Returns `usize`.

```valor
public usize shardForHash(u64 hash, usize shard_count)
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
> usize result = std::collections::hash::shardForHash(hash, shard_count);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-numapartitionbegin"></a>

> ## `numaPartitionBegin`

> Provides the module's **numa partition begin** operation. Returns `usize`.

```valor
public usize numaPartitionBegin(usize count, usize node_count, usize node)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `node_count`: usize (by value)
> - `node`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::hash::numaPartitionBegin(count, node_count, node);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-numapartitionlength"></a>

> ## `numaPartitionLength`

> Provides the module's **numa partition length** operation. Returns `usize`.

```valor
public usize numaPartitionLength(usize count, usize node_count, usize node)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `node_count`: usize (by value)
> - `node`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::hash::numaPartitionLength(count, node_count, node);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-concurrentsize"></a>

> ## `concurrentSize`

> Provides the module's **concurrent size** operation. Returns `usize`.

```valor
public usize concurrentSize(usize shard_count, (usize) -> usize read_shard_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `shard_count`: usize (by value)
> - `read_shard_length`: (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::hash::concurrentSize(shard_count, read_shard_length);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-concurrentwithshard"></a>

> ## `concurrentWithShard`

> Provides the module's **concurrent with shard** operation. Returns `i32`.

```valor
public i32 concurrentWithShard(u64 hash, usize shard_count, K key, V value, (usize) -> bool try_lock, (usize, K, V) -> i32 mutate, (usize) -> void unlock)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `shard_count`: usize (by value)
> - `key`: K (by value)
> - `value`: V (by value)
> - `usize`: (usize) -> bool try_lock, ( (borrowed fn-ptr (callback))
> - `K`: K (by value)
> - `unlock`: V) -> i32 mutate, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::hash::concurrentWithShard(hash, shard_count, key, value, usize, K, unlock);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-lockfreetryinsert"></a>

> ## `lockFreeTryInsert`

> Provides the module's **lock free try insert** operation. Returns `i32`.

```valor
public i32 lockFreeTryInsert(usize capacity, u64 hash, K key, V value, (usize) -> u8 load_control_acquire, (usize, u8, u8) -> bool compare_exchange_control, (usize, K, V) -> void write_entry, (usize, u8) -> void publish_control_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `hash`: u64 (by value)
> - `key`: K (by value)
> - `value`: V (by value)
> - `usize`: (usize) -> u8 load_control_acquire, ( (borrowed fn-ptr (callback))
> - `u8`: u8 (by value)
> - `publish_control_release`: u8) -> bool compare_exchange_control, (usize, K, V) -> void write_entry, (usize, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::hash::lockFreeTryInsert(capacity, hash, key, value, usize, u8, publish_control_release);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-lockfreetryinsertunique"></a>

> ## `lockFreeTryInsertUnique`

> Provides the module's **lock free try insert unique** operation. Returns `i32`.

```valor
public i32 lockFreeTryInsertUnique(usize capacity, u64 hash, K key, V value, (usize) -> u8 load_control_acquire, (usize) -> K read_key, (K, K) -> bool equal, (usize, u8, u8) -> bool compare_exchange_control, (usize, K, V) -> void write_entry, (usize, u8) -> void publish_control_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `hash`: u64 (by value)
> - `key`: K (by value)
> - `value`: V (by value)
> - `publish_control_release`: (usize) -> u8 load_control_acquire, (usize) -> K read_key, (K, K) -> bool equal, (usize, u8, u8) -> bool compare_exchange_control, (usize, K, V) -> void write_entry, (usize, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::hash::lockFreeTryInsertUnique(capacity, hash, key, value, publish_control_release);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-lockfreehelpmigrate"></a>

> ## `lockFreeHelpMigrate`

> Provides the module's **lock free help migrate** operation. Returns `i32`.

```valor
public i32 lockFreeHelpMigrate(usize segment_count, () -> usize load_migration_cursor, (usize, usize) -> bool compare_exchange_cursor, (usize) -> i32 migrate_segment)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `segment_count`: usize (by value)
> - `usize`: () -> usize load_migration_cursor, ( (borrowed fn-ptr (callback))
> - `migrate_segment`: usize) -> bool compare_exchange_cursor, (usize) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::hash::lockFreeHelpMigrate(segment_count, usize, migrate_segment);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

<a id="fn-migrationiscomplete"></a>

> ## `migrationIsComplete`

> Provides the module's **migration is complete** operation. Returns `bool`.

```valor
public bool migrationIsComplete(usize cursor, usize segment_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `cursor`: usize (by value)
> - `segment_count`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::hash::migrationIsComplete(cursor, segment_count);
> ```

> ### SEE ALSO
>
> - [`std::collections::hash::mixHash`](#fn-mixhash)
> - [`std::collections::hash::fingerprint`](#fn-fingerprint)
> - [`std::collections::hash::controlIsFull`](#fn-controlisfull)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Sequence collections](STD-COLLECTIONS-SEQUENCE-DOC.md) · [Table of contents](standard-library/README.md) · [Ordered collections →](STD-COLLECTIONS-ORDERED-DOC.md)
