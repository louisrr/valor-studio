<!-- stdlib-reference-style: modern -->
> # `std::storage`

`std::storage` durable storage operations.

[Standard library](standard-library/README.md) / [Memory, storage, and I/O](standard-library/README.md#memory-storage-and-i-o) / **Storage**

> **Source:** `stdlib/std/storage.valor` · **Routines:** 80 public

## Routines

<details>
<summary>Browse all 80 routines</summary>

- [`powerOfTwo`](#fn-poweroftwo)
- [`wrappedIndex`](#fn-wrappedindex)
- [`mixHash`](#fn-mixhash)
- [`hashByte`](#fn-hashbyte)
- [`hashBytes`](#fn-hashbytes)
- [`validCapacity`](#fn-validcapacity)
- [`numaPolicyIsValid`](#fn-numapolicyisvalid)
- [`shardForHash`](#fn-shardforhash)
- [`numaForShard`](#fn-numaforshard)
- [`partitionBegin`](#fn-partitionbegin)
- [`partitionLength`](#fn-partitionlength)
- [`intrusiveAppend`](#fn-intrusiveappend)
- [`intrusiveRemove`](#fn-intrusiveremove)
- [`intrusiveTouch`](#fn-intrusivetouch)
- [`lruVictim`](#fn-lruvictim)
- [`lruFind`](#fn-lrufind)
- [`lruInsertOrReplace`](#fn-lruinsertorreplace)
- [`saturatingFrequencyIncrement`](#fn-saturatingfrequencyincrement)
- [`lfuTouch`](#fn-lfutouch)
- [`lfuVictim`](#fn-lfuvictim)
- [`arcIncreaseTarget`](#fn-arcincreasetarget)
- [`arcDecreaseTarget`](#fn-arcdecreasetarget)
- [`arcReplacementList`](#fn-arcreplacementlist)
- [`clockVictim`](#fn-clockvictim)
- [`ttlDeadlineFits`](#fn-ttldeadlinefits)
- [`ttlDeadline`](#fn-ttldeadline)
- [`ttlExpired`](#fn-ttlexpired)
- [`ttlFind`](#fn-ttlfind)
- [`ttlSweep`](#fn-ttlsweep)
- [`withShard`](#fn-withshard)
- [`concurrentRead`](#fn-concurrentread)
- [`concurrentWrite`](#fn-concurrentwrite)
- [`pageByteOffset`](#fn-pagebyteoffset)
- [`pageRangeFits`](#fn-pagerangefits)
- [`blockIdentity`](#fn-blockidentity)
- [`flushDirtyPages`](#fn-flushdirtypages)
- [`probeSlot`](#fn-probeslot)
- [`keyValueGet`](#fn-keyvalueget)
- [`keyValuePut`](#fn-keyvalueput)
- [`snapshotCreate`](#fn-snapshotcreate)
- [`snapshotVisible`](#fn-snapshotvisible)
- [`transactionBegin`](#fn-transactionbegin)
- [`transactionActive`](#fn-transactionactive)
- [`transactionValidate`](#fn-transactionvalidate)
- [`transactionCommit`](#fn-transactioncommit)
- [`transactionAbort`](#fn-transactionabort)
- [`writeBatchAppend`](#fn-writebatchappend)
- [`writeBatchVisit`](#fn-writebatchvisit)
- [`walRecordBytes`](#fn-walrecordbytes)
- [`walReserve`](#fn-walreserve)
- [`walChecksum`](#fn-walchecksum)
- [`walAppend`](#fn-walappend)
- [`walRecover`](#fn-walrecover)
- [`mappedRead`](#fn-mappedread)
- [`mappedFlush`](#fn-mappedflush)
- [`skipTowerOffset`](#fn-skiptoweroffset)
- [`skipHeight`](#fn-skipheight)
- [`skipFind`](#fn-skipfind)
- [`skipFindPredecessors`](#fn-skipfindpredecessors)
- [`skipPublishNode`](#fn-skippublishnode)
- [`commonPrefixLength`](#fn-commonprefixlength)
- [`compareBytesGrouped`](#fn-comparebytesgrouped)
- [`prefixEncode`](#fn-prefixencode)
- [`prefixRecordFits`](#fn-prefixrecordfits)
- [`bloomBitIndex`](#fn-bloombitindex)
- [`bloomInsert`](#fn-bloominsert)
- [`bloomMayContain`](#fn-bloommaycontain)
- [`sstableCandidateBlock`](#fn-sstablecandidateblock)
- [`sstableBlockValid`](#fn-sstableblockvalid)
- [`sstableSearchBlock`](#fn-sstablesearchblock)
- [`lsmLevelTargetBytes`](#fn-lsmleveltargetbytes)
- [`lsmLevelNeedsCompaction`](#fn-lsmlevelneedscompaction)
- [`lsmPickCompactionLevel`](#fn-lsmpickcompactionlevel)
- [`lsmGet`](#fn-lsmget)
- [`lsmMerge`](#fn-lsmmerge)
- [`objectId`](#fn-objectid)
- [`objectFind`](#fn-objectfind)
- [`objectPut`](#fn-objectput)
- [`objectReadRange`](#fn-objectreadrange)
- [`objectVerify`](#fn-objectverify)

</details>

## API reference

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
> bool result = std::storage::powerOfTwo(value);
> ```

> ### SEE ALSO
>
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)
> - [`std::storage::hashByte`](#fn-hashbyte)

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
> usize result = std::storage::wrappedIndex(value, capacity);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::mixHash`](#fn-mixhash)
> - [`std::storage::hashByte`](#fn-hashbyte)

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
> u64 result = std::storage::mixHash(value, seed);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::hashByte`](#fn-hashbyte)

<a id="fn-hashbyte"></a>

> ## `hashByte`

> Provides the module's **hash byte** operation. Returns `u64`.

```valor
public u64 hashByte(u64 hash, u8 byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `byte`: u8 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::storage::hashByte(hash, byte);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-hashbytes"></a>

> ## `hashBytes`

> Provides the module's **hash bytes** operation. Returns `u64`.

```valor
public u64 hashBytes(usize length, u64 seed, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `seed`: u64 (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::storage::hashBytes(length, seed, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-validcapacity"></a>

> ## `validCapacity`

> Provides the module's **valid capacity** operation. Returns `bool`.

```valor
public bool validCapacity(usize length, usize capacity)
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
> bool result = std::storage::validCapacity(length, capacity);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

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
> bool result = std::storage::numaPolicyIsValid(policy);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

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
> usize result = std::storage::shardForHash(hash, shard_count);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-numaforshard"></a>

> ## `numaForShard`

> Provides the module's **numa for shard** operation. Returns `u32`.

```valor
public u32 numaForShard(usize shard_index, usize shard_count, u32 node_count, u8 policy, u32 local_node)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `shard_index`: usize (by value)
> - `shard_count`: usize (by value)
> - `node_count`: u32 (by value)
> - `policy`: u8 (by value)
> - `local_node`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::storage::numaForShard(shard_index, shard_count, node_count, policy, local_node);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-partitionbegin"></a>

> ## `partitionBegin`

> Provides the module's **partition begin** operation. Returns `usize`.

```valor
public usize partitionBegin(usize count, usize partitions, usize partition)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `partitions`: usize (by value)
> - `partition`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::storage::partitionBegin(count, partitions, partition);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-partitionlength"></a>

> ## `partitionLength`

> Provides the module's **partition length** operation. Returns `usize`.

```valor
public usize partitionLength(usize count, usize partitions, usize partition)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `partitions`: usize (by value)
> - `partition`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::storage::partitionLength(count, partitions, partition);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-intrusiveappend"></a>

> ## `intrusiveAppend`

> Provides the module's **intrusive append** operation. Returns `i32`.

```valor
public i32 intrusiveAppend(usize slot, usize length, usize head, usize tail, (usize, usize) -> void write_previous, (usize, usize) -> void write_next, (usize, usize) -> void receive_ends)
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
> i32 result = std::storage::intrusiveAppend(slot, length, head, tail, usize, receive_ends);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-intrusiveremove"></a>

> ## `intrusiveRemove`

> Provides the module's **intrusive remove** operation. Returns `i32`.

```valor
public i32 intrusiveRemove(usize slot, usize previous, usize next, usize head, usize tail, (usize, usize) -> void write_previous, (usize, usize) -> void write_next, (usize, usize) -> void receive_ends)
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
> i32 result = std::storage::intrusiveRemove(slot, previous, next, head, tail, usize, receive_ends);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-intrusivetouch"></a>

> ## `intrusiveTouch`

> Provides the module's **intrusive touch** operation. Returns `i32`.

```valor
public i32 intrusiveTouch(usize slot, usize previous, usize next, usize length, usize head, usize tail, (usize, usize) -> void write_previous, (usize, usize) -> void write_next, (usize, usize) -> void receive_ends)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `slot`: usize (by value)
> - `previous`: usize (by value)
> - `next`: usize (by value)
> - `length`: usize (by value)
> - `head`: usize (by value)
> - `tail`: usize (by value)
> - `usize`: (usize, usize) -> void write_previous, ( (borrowed fn-ptr (callback))
> - `receive_ends`: usize) -> void write_next, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::intrusiveTouch(slot, previous, next, length, head, tail, usize, receive_ends);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-lruvictim"></a>

> ## `lruVictim`

> Provides the module's **lru victim** operation. Returns `i32`.

```valor
public i32 lruVictim(usize length, usize head, (usize) -> void receive_slot)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `head`: usize (by value)
> - `receive_slot`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::lruVictim(length, head, receive_slot);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-lrufind"></a>

> ## `lruFind`

> Provides the module's **lru find** operation. Returns `i32`.

```valor
public i32 lruFind(usize capacity, u64 hash, K key, (usize) -> u8 load_state_acquire, (usize) -> u64 read_hash, (usize) -> K read_key, (usize) -> V read_value, (K, K) -> bool equal, (usize, V) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `hash`: u64 (by value)
> - `key`: K (by value)
> - `receive`: (usize) -> u8 load_state_acquire, (usize) -> u64 read_hash, (usize) -> K read_key, (usize) -> V read_value, (K, K) -> bool equal, (usize, V) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::lruFind(capacity, hash, key, receive);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-lruinsertorreplace"></a>

> ## `lruInsertOrReplace`

> Provides the module's **lru insert or replace** operation. Returns `i32`.

```valor
public i32 lruInsertOrReplace(usize length, usize capacity, u64 hash, K key, V value, (usize) -> u8 load_state_acquire, (usize) -> u64 read_hash, (usize) -> K read_key, (K, K) -> bool equal, (usize) -> usize read_previous, (usize) -> usize read_next, (usize, u8, u8) -> bool compare_exchange_state, (usize, K, V, u64) -> void write_entry, (usize, u8) -> void publish_state_release, (usize, usize) -> void write_previous, (usize, usize) -> void write_next, (usize) -> void receive_slot)
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
> - `receive_slot`: (usize) -> u8 load_state_acquire, (usize) -> u64 read_hash, (usize) -> K read_key, (K, K) -> bool equal, (usize) -> usize read_previous, (usize) -> usize read_next, (usize, u8, u8) -> bool compare_exchange_state, (usize, K, V, u64) -> void write_entry, (usize, u8) -> void publish_state_release, (usize, usize) -> void write_previous, (usize, usize) -> void write_next, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::lruInsertOrReplace(length, capacity, hash, key, value, receive_slot);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-saturatingfrequencyincrement"></a>

> ## `saturatingFrequencyIncrement`

> Provides the module's **saturating frequency increment** operation. Returns `u32`.

```valor
public u32 saturatingFrequencyIncrement(u32 frequency)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `frequency`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::storage::saturatingFrequencyIncrement(frequency);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-lfutouch"></a>

> ## `lfuTouch`

> Provides the module's **lfu touch** operation.

```valor
public void lfuTouch(usize slot, u32 frequency, u64 epoch, (usize, u32) -> void write_frequency, (usize, u64) -> void write_epoch)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `slot`: usize (by value)
> - `frequency`: u32 (by value)
> - `epoch`: u64 (by value)
> - `usize`: (usize, u32) -> void write_frequency, ( (borrowed fn-ptr (callback))
> - `write_epoch`: u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::storage::lfuTouch(slot, frequency, epoch, usize, write_epoch);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-lfuvictim"></a>

> ## `lfuVictim`

> Provides the module's **lfu victim** operation. Returns `i32`.

```valor
public i32 lfuVictim(usize capacity, (usize) -> u8 load_state_acquire, (usize) -> u32 read_frequency, (usize) -> u64 read_epoch, (usize) -> void receive_slot)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `receive_slot`: (usize) -> u8 load_state_acquire, (usize) -> u32 read_frequency, (usize) -> u64 read_epoch, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::lfuVictim(capacity, receive_slot);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-arcincreasetarget"></a>

> ## `arcIncreaseTarget`

> Provides the module's **arc increase target** operation. Returns `usize`.

```valor
public usize arcIncreaseTarget(usize target, usize b1_length, usize b2_length, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `target`: usize (by value)
> - `b1_length`: usize (by value)
> - `b2_length`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::storage::arcIncreaseTarget(target, b1_length, b2_length, capacity);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-arcdecreasetarget"></a>

> ## `arcDecreaseTarget`

> Provides the module's **arc decrease target** operation. Returns `usize`.

```valor
public usize arcDecreaseTarget(usize target, usize b1_length, usize b2_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `target`: usize (by value)
> - `b1_length`: usize (by value)
> - `b2_length`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::storage::arcDecreaseTarget(target, b1_length, b2_length);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-arcreplacementlist"></a>

> ## `arcReplacementList`

> Provides the module's **arc replacement list** operation. Returns `u8`.

```valor
public u8 arcReplacementList(usize t1_length, usize target_t1, u8 incoming_list)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `t1_length`: usize (by value)
> - `target_t1`: usize (by value)
> - `incoming_list`: u8 (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::storage::arcReplacementList(t1_length, target_t1, incoming_list);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-clockvictim"></a>

> ## `clockVictim`

> Provides the module's **clock victim** operation. Returns `i32`.

```valor
public i32 clockVictim(usize capacity, usize hand, (usize) -> u8 load_state_acquire, (usize) -> u8 load_referenced_acquire, (usize, u8) -> void publish_referenced_release, (usize, usize) -> void receive_slot_and_hand)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `hand`: usize (by value)
> - `receive_slot_and_hand`: (usize) -> u8 load_state_acquire, (usize) -> u8 load_referenced_acquire, (usize, u8) -> void publish_referenced_release, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::clockVictim(capacity, hand, receive_slot_and_hand);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

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
> bool result = std::storage::ttlDeadlineFits(now, ttl);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

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
> u64 result = std::storage::ttlDeadline(now, ttl);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-ttlexpired"></a>

> ## `ttlExpired`

> Provides the module's **ttl expired** operation. Returns `bool`.

```valor
public bool ttlExpired(u64 expires_at, u64 now)
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
> bool result = std::storage::ttlExpired(expires_at, now);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-ttlfind"></a>

> ## `ttlFind`

> Provides the module's **ttl find** operation. Returns `i32`.

```valor
public i32 ttlFind(usize capacity, u64 hash, K key, u64 now, (usize) -> u8 load_state_acquire, (usize) -> u64 read_hash, (usize) -> K read_key, (usize) -> V read_value, (usize) -> u64 read_expiry, (K, K) -> bool equal, (V) -> void receive, (usize) -> void receive_expired_slot)
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
> - `receive_expired_slot`: (usize) -> u8 load_state_acquire, (usize) -> u64 read_hash, (usize) -> K read_key, (usize) -> V read_value, (usize) -> u64 read_expiry, (K, K) -> bool equal, (V) -> void receive, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::ttlFind(capacity, hash, key, now, receive_expired_slot);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-ttlsweep"></a>

> ## `ttlSweep`

> Provides the module's **ttl sweep** operation. Returns `i32`.

```valor
public i32 ttlSweep(usize capacity, u64 now, (usize) -> u8 load_state_acquire, (usize) -> u64 read_expiry, (usize, u8, u8) -> bool compare_exchange_state, (usize) -> void receive_removed)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `now`: u64 (by value)
> - `receive_removed`: (usize) -> u8 load_state_acquire, (usize) -> u64 read_expiry, (usize, u8, u8) -> bool compare_exchange_state, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::ttlSweep(capacity, now, receive_removed);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-withshard"></a>

> ## `withShard`

> Provides the module's **with shard** operation. Returns `i32`.

```valor
public i32 withShard(u64 hash, usize shard_count, (usize) -> i32 operation)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `shard_count`: usize (by value)
> - `operation`: (usize) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::withShard(hash, shard_count, operation);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-concurrentread"></a>

> ## `concurrentRead`

> Provides the module's **concurrent read** operation. Returns `i32`.

```valor
public i32 concurrentRead(usize retry_limit, () -> u64 load_version_acquire, () -> i32 read_operation)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `retry_limit`: usize (by value)
> - `read_operation`: () -> u64 load_version_acquire, () -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::concurrentRead(retry_limit, read_operation);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-concurrentwrite"></a>

> ## `concurrentWrite`

> Provides the module's **concurrent write** operation. Returns `i32`.

```valor
public i32 concurrentWrite(usize retry_limit, () -> u64 load_version_acquire, (u64, u64) -> bool compare_exchange_version, () -> i32 write_operation, (u64) -> void publish_version_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `retry_limit`: usize (by value)
> - `u64`: () -> u64 load_version_acquire, ( (borrowed fn-ptr (callback))
> - `publish_version_release`: u64) -> bool compare_exchange_version, () -> i32 write_operation, (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::concurrentWrite(retry_limit, u64, publish_version_release);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-pagebyteoffset"></a>

> ## `pageByteOffset`

> Provides the module's **page byte offset** operation. Returns `usize`.

```valor
public usize pageByteOffset(u64 page_id, usize page_bytes)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `page_id`: u64 (by value)
> - `page_bytes`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::storage::pageByteOffset(page_id, page_bytes);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-pagerangefits"></a>

> ## `pageRangeFits`

> Provides the module's **page range fits** operation. Returns `bool`.

```valor
public bool pageRangeFits(usize byte_offset, usize byte_length, usize mapped_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_offset`: usize (by value)
> - `byte_length`: usize (by value)
> - `mapped_length`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::storage::pageRangeFits(byte_offset, byte_length, mapped_length);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-blockidentity"></a>

> ## `blockIdentity`

> Provides the module's **block identity** operation. Returns `u64`.

```valor
public u64 blockIdentity(u64 file_id, u64 block_offset)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `file_id`: u64 (by value)
> - `block_offset`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::storage::blockIdentity(file_id, block_offset);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-flushdirtypages"></a>

> ## `flushDirtyPages`

> Provides the module's **flush dirty pages** operation. Returns `i32`.

```valor
public i32 flushDirtyPages(usize capacity, (usize) -> u8 load_state_acquire, (usize) -> bool load_dirty_acquire, (usize) -> i32 flush_page, (usize, bool) -> void publish_dirty_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `publish_dirty_release`: (usize) -> u8 load_state_acquire, (usize) -> bool load_dirty_acquire, (usize) -> i32 flush_page, (usize, bool) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::flushDirtyPages(capacity, publish_dirty_release);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-probeslot"></a>

> ## `probeSlot`

> Provides the module's **probe slot** operation. Returns `usize`.

```valor
public usize probeSlot(u64 hash, usize step, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `step`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::storage::probeSlot(hash, step, capacity);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-keyvalueget"></a>

> ## `keyValueGet`

> Provides the module's **key value get** operation. Returns `i32`.

```valor
public i32 keyValueGet(usize capacity, u64 hash, K key, u64 snapshot_sequence, (usize) -> u8 load_state_acquire, (usize) -> u64 read_hash, (usize) -> K read_key, (usize) -> V read_value, (usize) -> u64 read_sequence, (K, K) -> bool equal, (V, u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `hash`: u64 (by value)
> - `key`: K (by value)
> - `snapshot_sequence`: u64 (by value)
> - `receive`: (usize) -> u8 load_state_acquire, (usize) -> u64 read_hash, (usize) -> K read_key, (usize) -> V read_value, (usize) -> u64 read_sequence, (K, K) -> bool equal, (V, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::keyValueGet(capacity, hash, key, snapshot_sequence, receive);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-keyvalueput"></a>

> ## `keyValuePut`

> Provides the module's **key value put** operation. Returns `i32`.

```valor
public i32 keyValuePut(usize length, usize deleted, usize capacity, u64 hash, K key, V value, u64 sequence, (usize) -> u8 load_state_acquire, (usize) -> u64 read_hash, (usize) -> K read_key, (K, K) -> bool equal, (usize, u8, u8) -> bool compare_exchange_state, (usize, K, V, u64, u64) -> void write_entry, (usize, u8) -> void publish_state_release, (usize, bool) -> void receive_slot_and_inserted)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `deleted`: usize (by value)
> - `capacity`: usize (by value)
> - `hash`: u64 (by value)
> - `key`: K (by value)
> - `value`: V (by value)
> - `sequence`: u64 (by value)
> - `receive_slot_and_inserted`: (usize) -> u8 load_state_acquire, (usize) -> u64 read_hash, (usize) -> K read_key, (K, K) -> bool equal, (usize, u8, u8) -> bool compare_exchange_state, (usize, K, V, u64, u64) -> void write_entry, (usize, u8) -> void publish_state_release, (usize, bool) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::keyValuePut(length, deleted, capacity, hash, key, value, sequence, receive_slot_and_inserted);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-snapshotcreate"></a>

> ## `snapshotCreate`

> Provides the module's **snapshot create** operation.

```valor
public void snapshotCreate(u64 sequence, u64 generation, usize root, usize length, u32 numa_node, (u64, u64, usize, usize, u32) -> void receive_snapshot)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `sequence`: u64 (by value)
> - `generation`: u64 (by value)
> - `root`: usize (by value)
> - `length`: usize (by value)
> - `numa_node`: u32 (by value)
> - `receive_snapshot`: (u64, u64, usize, usize, u32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::storage::snapshotCreate(sequence, generation, root, length, numa_node, receive_snapshot);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-snapshotvisible"></a>

> ## `snapshotVisible`

> Provides the module's **snapshot visible** operation. Returns `bool`.

```valor
public bool snapshotVisible(u64 value_sequence, u64 snapshot_sequence)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value_sequence`: u64 (by value)
> - `snapshot_sequence`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::storage::snapshotVisible(value_sequence, snapshot_sequence);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-transactionbegin"></a>

> ## `transactionBegin`

> Provides the module's **transaction begin** operation.

```valor
public void transactionBegin(u64 id, u64 read_sequence, usize batch_begin, u32 owner_thread, u8 durability, bool read_only, (u64, u64, u64, usize, usize, u32, u8, u8, u8) -> void receive_transaction)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `id`: u64 (by value)
> - `read_sequence`: u64 (by value)
> - `batch_begin`: usize (by value)
> - `owner_thread`: u32 (by value)
> - `durability`: u8 (by value)
> - `read_only`: bool (by value)
> - `receive_transaction`: (u64, u64, u64, usize, usize, u32, u8, u8, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::storage::transactionBegin(id, read_sequence, batch_begin, owner_thread, durability, read_only, receive_transaction);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-transactionactive"></a>

> ## `transactionActive`

> Provides the module's **transaction active** operation. Returns `bool`.

```valor
public bool transactionActive(u8 state)
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
> bool result = std::storage::transactionActive(state);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-transactionvalidate"></a>

> ## `transactionValidate`

> Provides the module's **transaction validate** operation. Returns `i32`.

```valor
public i32 transactionValidate(u8 transaction_state, u64 read_sequence, usize read_count, (usize) -> u64 read_observed_sequence, (usize) -> u64 load_current_sequence_acquire)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `transaction_state`: u8 (by value)
> - `read_sequence`: u64 (by value)
> - `read_count`: usize (by value)
> - `load_current_sequence_acquire`: (usize) -> u64 read_observed_sequence, (usize) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::transactionValidate(transaction_state, read_sequence, read_count, load_current_sequence_acquire);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-transactioncommit"></a>

> ## `transactionCommit`

> Provides the module's **transaction commit** operation. Returns `i32`.

```valor
public i32 transactionCommit(u8 transaction_state, u8 read_only, u8 durability, u64 commit_sequence, () -> i32 append_wal, () -> i32 apply_batch, () -> i32 sync_wal, (u8, u64) -> void publish_state_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `transaction_state`: u8 (by value)
> - `read_only`: u8 (by value)
> - `durability`: u8 (by value)
> - `commit_sequence`: u64 (by value)
> - `publish_state_release`: () -> i32 append_wal, () -> i32 apply_batch, () -> i32 sync_wal, (u8, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::transactionCommit(transaction_state, read_only, durability, commit_sequence, publish_state_release);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-transactionabort"></a>

> ## `transactionAbort`

> Provides the module's **transaction abort** operation. Returns `i32`.

```valor
public i32 transactionAbort(u8 transaction_state, () -> i32 append_abort, (u8, u64) -> void publish_state_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `transaction_state`: u8 (by value)
> - `u8`: () -> i32 append_abort, ( (borrowed fn-ptr (callback))
> - `publish_state_release`: u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::transactionAbort(transaction_state, u8, publish_state_release);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-writebatchappend"></a>

> ## `writeBatchAppend`

> Provides the module's **write batch append** operation. Returns `i32`.

```valor
public i32 writeBatchAppend(usize length, usize capacity, usize encoded_bytes, usize key_bytes, usize value_bytes, u8 operation, (usize, usize) -> void receive_index_and_new_bytes)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `encoded_bytes`: usize (by value)
> - `key_bytes`: usize (by value)
> - `value_bytes`: usize (by value)
> - `operation`: u8 (by value)
> - `receive_index_and_new_bytes`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::writeBatchAppend(length, capacity, encoded_bytes, key_bytes, value_bytes, operation, receive_index_and_new_bytes);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-writebatchvisit"></a>

> ## `writeBatchVisit`

> Provides the module's **write batch visit** operation. Returns `i32`.

```valor
public i32 writeBatchVisit(usize length, (usize) -> u8 read_operation, (usize) -> i32 visit_entry)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `visit_entry`: (usize) -> u8 read_operation, (usize) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::writeBatchVisit(length, visit_entry);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-walrecordbytes"></a>

> ## `walRecordBytes`

> Provides the module's **wal record bytes** operation. Returns `usize`.

```valor
public usize walRecordBytes(usize key_bytes, usize value_bytes)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `key_bytes`: usize (by value)
> - `value_bytes`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::storage::walRecordBytes(key_bytes, value_bytes);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-walreserve"></a>

> ## `walReserve`

> Provides the module's **wal reserve** operation. Returns `i32`.

```valor
public i32 walReserve(usize length, usize capacity, usize record_bytes, (usize) -> void receive_offset)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `record_bytes`: usize (by value)
> - `receive_offset`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::walReserve(length, capacity, record_bytes, receive_offset);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-walchecksum"></a>

> ## `walChecksum`

> Provides the module's **wal checksum** operation. Returns `u64`.

```valor
public u64 walChecksum(usize offset, usize length, u64 previous, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: usize (by value)
> - `length`: usize (by value)
> - `previous`: u64 (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::storage::walChecksum(offset, length, previous, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-walappend"></a>

> ## `walAppend`

> Provides the module's **wal append** operation. Returns `i32`.

```valor
public i32 walAppend(usize length, usize capacity, u64 next_sequence, u8 kind, u64 transaction_id, usize key_bytes, usize value_bytes, (usize, u8, u64, u64, usize, usize) -> void write_header, (usize) -> void write_payload, (usize, usize) -> u64 checksum_range, (usize, u64) -> void write_trailer, (usize, u64) -> void publish_length_and_sequence_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `next_sequence`: u64 (by value)
> - `kind`: u8 (by value)
> - `transaction_id`: u64 (by value)
> - `key_bytes`: usize (by value)
> - `value_bytes`: usize (by value)
> - `publish_length_and_sequence_release`: (usize, u8, u64, u64, usize, usize) -> void write_header, (usize) -> void write_payload, (usize, usize) -> u64 checksum_range, (usize, u64) -> void write_trailer, (usize, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::walAppend(length, capacity, next_sequence, kind, transaction_id, key_bytes, value_bytes, publish_length_and_sequence_release);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-walrecover"></a>

> ## `walRecover`

> Provides the module's **wal recover** operation. Returns `i32`.

```valor
public i32 walRecover(usize durable_length, (usize) -> usize read_record_length, (usize) -> u64 read_checksum, (usize, usize) -> u64 checksum_range, (usize) -> i32 replay_record, (usize) -> void receive_valid_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `durable_length`: usize (by value)
> - `receive_valid_length`: (usize) -> usize read_record_length, (usize) -> u64 read_checksum, (usize, usize) -> u64 checksum_range, (usize) -> i32 replay_record, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::walRecover(durable_length, receive_valid_length);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-mappedread"></a>

> ## `mappedRead`

> Provides the module's **mapped read** operation. Returns `i32`.

```valor
public i32 mappedRead(ptr<u8, host> bytes, usize region_length, usize offset, usize length, (ptr<u8, host>, usize, usize) -> void receive_view)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bytes`: ptr<u8, host> (by value)
> - `region_length`: usize (by value)
> - `offset`: usize (by value)
> - `length`: usize (by value)
> - `receive_view`: (ptr<u8, host>, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::mappedRead(bytes, region_length, offset, length, receive_view);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-mappedflush"></a>

> ## `mappedFlush`

> Provides the module's **mapped flush** operation. Returns `i32`.

```valor
public i32 mappedFlush(u64 mapping_id, usize region_length, bool writable, usize offset, usize length, (u64, usize, usize) -> i32 flush_mapping)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `mapping_id`: u64 (by value)
> - `region_length`: usize (by value)
> - `writable`: bool (by value)
> - `offset`: usize (by value)
> - `length`: usize (by value)
> - `flush_mapping`: (u64, usize, usize) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::mappedFlush(mapping_id, region_length, writable, offset, length, flush_mapping);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-skiptoweroffset"></a>

> ## `skipTowerOffset`

> Provides the module's **skip tower offset** operation. Returns `usize`.

```valor
public usize skipTowerOffset(usize node, usize level, usize stride)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `level`: usize (by value)
> - `stride`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::storage::skipTowerOffset(node, level, stride);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-skipheight"></a>

> ## `skipHeight`

> Provides the module's **skip height** operation. Returns `u8`.

```valor
public u8 skipHeight(u64 hash, usize max_levels)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `max_levels`: usize (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::storage::skipHeight(hash, max_levels);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-skipfind"></a>

> ## `skipFind`

> Provides the module's **skip find** operation. Returns `i32`.

```valor
public i32 skipFind(usize head, usize max_levels, K key, (usize, usize) -> usize read_next_acquire, (usize) -> K read_key, (K, K) -> i32 compare, (usize) -> void receive_node)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `head`: usize (by value)
> - `max_levels`: usize (by value)
> - `key`: K (by value)
> - `receive_node`: (usize, usize) -> usize read_next_acquire, (usize) -> K read_key, (K, K) -> i32 compare, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::skipFind(head, max_levels, key, receive_node);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-skipfindpredecessors"></a>

> ## `skipFindPredecessors`

> Provides the module's **skip find predecessors** operation. Returns `i32`.

```valor
public i32 skipFindPredecessors(usize head, usize max_levels, K key, (usize, usize) -> usize read_next_acquire, (usize) -> K read_key, (K, K) -> i32 compare, (usize, usize) -> void receive_predecessor_and_successor)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `head`: usize (by value)
> - `max_levels`: usize (by value)
> - `key`: K (by value)
> - `receive_predecessor_and_successor`: (usize, usize) -> usize read_next_acquire, (usize) -> K read_key, (K, K) -> i32 compare, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::skipFindPredecessors(head, max_levels, key, receive_predecessor_and_successor);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-skippublishnode"></a>

> ## `skipPublishNode`

> Provides the module's **skip publish node** operation. Returns `i32`.

```valor
public i32 skipPublishNode(usize node, usize height, (usize) -> usize read_predecessor, (usize) -> usize read_successor, (usize, usize, usize) -> void write_next, (usize, usize, usize, usize) -> bool compare_exchange_next)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `height`: usize (by value)
> - `compare_exchange_next`: (usize) -> usize read_predecessor, (usize) -> usize read_successor, (usize, usize, usize) -> void write_next, (usize, usize, usize, usize) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::skipPublishNode(node, height, compare_exchange_next);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-commonprefixlength"></a>

> ## `commonPrefixLength`

> Provides the module's **common prefix length** operation. Returns `usize`.

```valor
public usize commonPrefixLength(usize left_length, usize right_length, (usize) -> u8 read_left, (usize) -> u8 read_right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_length`: usize (by value)
> - `right_length`: usize (by value)
> - `read_right`: (usize) -> u8 read_left, (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::storage::commonPrefixLength(left_length, right_length, read_right);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-comparebytesgrouped"></a>

> ## `compareBytesGrouped`

> The mask callback is the vectorization boundary. The mask callback is the vectorization boundary. A Valor IR target may compare sixteen bytes per call; the scalar fallback can construct the same mask without changing this algorithm.

```valor
public i32 compareBytesGrouped(usize left_length, usize right_length, (usize) -> u16 equal_mask_16, (usize) -> u8 read_left, (usize) -> u8 read_right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_length`: usize (by value)
> - `right_length`: usize (by value)
> - `read_right`: (usize) -> u16 equal_mask_16, (usize) -> u8 read_left, (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::compareBytesGrouped(left_length, right_length, read_right);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-prefixencode"></a>

> ## `prefixEncode`

> Provides the module's **prefix encode** operation. Returns `i32`.

```valor
public i32 prefixEncode(usize key_length, usize previous_length, (usize) -> u8 read_key, (usize) -> u8 read_previous, (usize, usize) -> void receive_prefix_and_suffix)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `key_length`: usize (by value)
> - `previous_length`: usize (by value)
> - `receive_prefix_and_suffix`: (usize) -> u8 read_key, (usize) -> u8 read_previous, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::prefixEncode(key_length, previous_length, receive_prefix_and_suffix);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-prefixrecordfits"></a>

> ## `prefixRecordFits`

> Provides the module's **prefix record fits** operation. Returns `bool`.

```valor
public bool prefixRecordFits(usize prefix_length, usize suffix_length, usize previous_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `prefix_length`: usize (by value)
> - `suffix_length`: usize (by value)
> - `previous_length`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::storage::prefixRecordFits(prefix_length, suffix_length, previous_length);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-bloombitindex"></a>

> ## `bloomBitIndex`

> Provides the module's **bloom bit index** operation. Returns `usize`.

```valor
public usize bloomBitIndex(u64 hash, u8 round, usize bit_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `round`: u8 (by value)
> - `bit_count`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::storage::bloomBitIndex(hash, round, bit_count);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-bloominsert"></a>

> ## `bloomInsert`

> Provides the module's **bloom insert** operation. Returns `i32`.

```valor
public i32 bloomInsert(u64 hash, usize bit_count, u8 hash_count, (usize) -> u8 read_byte, (usize, u8) -> void write_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `bit_count`: usize (by value)
> - `hash_count`: u8 (by value)
> - `usize`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `write_byte`: u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::bloomInsert(hash, bit_count, hash_count, usize, write_byte);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-bloommaycontain"></a>

> ## `bloomMayContain`

> Provides the module's **bloom may contain** operation. Returns `bool`.

```valor
public bool bloomMayContain(u64 hash, usize bit_count, u8 hash_count, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `bit_count`: usize (by value)
> - `hash_count`: u8 (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::storage::bloomMayContain(hash, bit_count, hash_count, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-sstablecandidateblock"></a>

> ## `sstableCandidateBlock`

> Provides the module's **sstable candidate block** operation. Returns `i32`.

```valor
public i32 sstableCandidateBlock(usize block_count, u64 hash, (usize) -> u64 read_smallest_hash, (usize) -> u64 read_largest_hash, (usize) -> void receive_block)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `block_count`: usize (by value)
> - `hash`: u64 (by value)
> - `receive_block`: (usize) -> u64 read_smallest_hash, (usize) -> u64 read_largest_hash, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::sstableCandidateBlock(block_count, hash, receive_block);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-sstableblockvalid"></a>

> ## `sstableBlockValid`

> Provides the module's **sstable block valid** operation. Returns `bool`.

```valor
public bool sstableBlockValid(usize offset, usize length, usize table_bytes, u64 expected_checksum, (usize, usize) -> u64 checksum_range)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: usize (by value)
> - `length`: usize (by value)
> - `table_bytes`: usize (by value)
> - `expected_checksum`: u64 (by value)
> - `checksum_range`: (usize, usize) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::storage::sstableBlockValid(offset, length, table_bytes, expected_checksum, checksum_range);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-sstablesearchblock"></a>

> ## `sstableSearchBlock`

> Provides the module's **sstable search block** operation. Returns `i32`.

```valor
public i32 sstableSearchBlock(usize entry_count, (usize) -> i32 compare_entry_key, (usize) -> u64 read_sequence, u64 snapshot_sequence, (usize) -> bool is_tombstone, (usize) -> void receive_entry)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `entry_count`: usize (by value)
> - `receive_entry`: (usize) -> i32 compare_entry_key, (usize) -> u64 read_sequence, u64 snapshot_sequence, (usize) -> bool is_tombstone, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::sstableSearchBlock(entry_count, receive_entry);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-lsmleveltargetbytes"></a>

> ## `lsmLevelTargetBytes`

> Provides the module's **lsm level target bytes** operation. Returns `usize`.

```valor
public usize lsmLevelTargetBytes(usize base_bytes, usize multiplier, usize level)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `base_bytes`: usize (by value)
> - `multiplier`: usize (by value)
> - `level`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::storage::lsmLevelTargetBytes(base_bytes, multiplier, level);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-lsmlevelneedscompaction"></a>

> ## `lsmLevelNeedsCompaction`

> Provides the module's **lsm level needs compaction** operation. Returns `bool`.

```valor
public bool lsmLevelNeedsCompaction(usize level_bytes, usize base_bytes, usize multiplier, usize level)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `level_bytes`: usize (by value)
> - `base_bytes`: usize (by value)
> - `multiplier`: usize (by value)
> - `level`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::storage::lsmLevelNeedsCompaction(level_bytes, base_bytes, multiplier, level);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-lsmpickcompactionlevel"></a>

> ## `lsmPickCompactionLevel`

> Provides the module's **lsm pick compaction level** operation. Returns `usize`.

```valor
public usize lsmPickCompactionLevel(usize level_count, usize base_bytes, usize multiplier, (usize) -> usize read_level_bytes)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `level_count`: usize (by value)
> - `base_bytes`: usize (by value)
> - `multiplier`: usize (by value)
> - `read_level_bytes`: (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::storage::lsmPickCompactionLevel(level_count, base_bytes, multiplier, read_level_bytes);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-lsmget"></a>

> ## `lsmGet`

> Provides the module's **lsm get** operation. Returns `i32`.

```valor
public i32 lsmGet(u64 hash, u64 snapshot_sequence, usize immutable_count, usize table_count, () -> i32 search_mutable, (usize) -> i32 search_immutable, (usize, u64, u64) -> bool table_may_contain, (usize) -> i32 search_table)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `snapshot_sequence`: u64 (by value)
> - `immutable_count`: usize (by value)
> - `table_count`: usize (by value)
> - `search_table`: () -> i32 search_mutable, (usize) -> i32 search_immutable, (usize, u64, u64) -> bool table_may_contain, (usize) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::lsmGet(hash, snapshot_sequence, immutable_count, table_count, search_table);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-lsmmerge"></a>

> ## `lsmMerge`

> Provides the module's **lsm merge** operation. Returns `i32`.

```valor
public i32 lsmMerge(usize source_count, (usize) -> bool source_has_entry, (usize, usize) -> i32 compare_source_heads, (usize) -> u64 read_source_sequence, (usize) -> bool source_head_is_tombstone, (usize) -> i32 emit_source_head, (usize) -> void advance_source)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `source_count`: usize (by value)
> - `usize`: (usize) -> bool source_has_entry, ( (borrowed fn-ptr (callback))
> - `advance_source`: usize) -> i32 compare_source_heads, (usize) -> u64 read_source_sequence, (usize) -> bool source_head_is_tombstone, (usize) -> i32 emit_source_head, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::lsmMerge(source_count, usize, advance_source);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-objectid"></a>

> ## `objectId`

> Provides the module's **object id** operation. Returns `u64`.

```valor
public u64 objectId(u64 namespace_id, u64 content_hash)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `namespace_id`: u64 (by value)
> - `content_hash`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::storage::objectId(namespace_id, content_hash);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-objectfind"></a>

> ## `objectFind`

> Provides the module's **object find** operation. Returns `i32`.

```valor
public i32 objectFind(usize capacity, u64 object_id, u64 maximum_version, (usize) -> u8 load_state_acquire, (usize) -> u64 read_object_id, (usize) -> u64 read_version, (usize) -> void receive_slot)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `object_id`: u64 (by value)
> - `maximum_version`: u64 (by value)
> - `receive_slot`: (usize) -> u8 load_state_acquire, (usize) -> u64 read_object_id, (usize) -> u64 read_version, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::objectFind(capacity, object_id, maximum_version, receive_slot);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-objectput"></a>

> ## `objectPut`

> Provides the module's **object put** operation. Returns `i32`.

```valor
public i32 objectPut(usize length, usize capacity, usize data_bytes, usize object_bytes, u64 object_id, u64 version, u64 checksum, (usize) -> u8 load_state_acquire, (usize, u8, u8) -> bool compare_exchange_state, (usize, u64, u64, usize, usize, u64) -> void write_metadata, (usize) -> i32 write_payload, (usize, u8) -> void publish_state_release, (usize, usize) -> void receive_slot_and_new_data_bytes)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `data_bytes`: usize (by value)
> - `object_bytes`: usize (by value)
> - `object_id`: u64 (by value)
> - `version`: u64 (by value)
> - `checksum`: u64 (by value)
> - `usize`: (usize) -> u8 load_state_acquire, ( (borrowed fn-ptr (callback))
> - `u8`: u8 (by value)
> - `receive_slot_and_new_data_bytes`: u8) -> bool compare_exchange_state, (usize, u64, u64, usize, usize, u64) -> void write_metadata, (usize) -> i32 write_payload, (usize, u8) -> void publish_state_release, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::objectPut(length, capacity, data_bytes, object_bytes, object_id, version, checksum, usize, u8, receive_slot_and_new_data_bytes);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-objectreadrange"></a>

> ## `objectReadRange`

> Provides the module's **object read range** operation. Returns `i32`.

```valor
public i32 objectReadRange(usize object_offset, usize object_length, usize range_offset, usize range_length, (usize, usize) -> void receive_range)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `object_offset`: usize (by value)
> - `object_length`: usize (by value)
> - `range_offset`: usize (by value)
> - `range_length`: usize (by value)
> - `receive_range`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::objectReadRange(object_offset, object_length, range_offset, range_length, receive_range);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

<a id="fn-objectverify"></a>

> ## `objectVerify`

> Provides the module's **object verify** operation. Returns `i32`.

```valor
public i32 objectVerify(usize offset, usize length, u64 expected_checksum, (usize, usize) -> u64 checksum_range)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: usize (by value)
> - `length`: usize (by value)
> - `expected_checksum`: u64 (by value)
> - `checksum_range`: (usize, usize) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::storage::objectVerify(offset, length, expected_checksum, checksum_range);
> ```

> ### SEE ALSO
>
> - [`std::storage::powerOfTwo`](#fn-poweroftwo)
> - [`std::storage::wrappedIndex`](#fn-wrappedindex)
> - [`std::storage::mixHash`](#fn-mixhash)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← File systems](STD-FS-DOC.md) · [Table of contents](standard-library/README.md) · [Async →](STD-ASYNC-DOC.md)
