<!-- stdlib-reference-style: modern -->
> # `std::probabilistic`

`std::probabilistic` probability-oriented computation.

[Standard library](standard-library/README.md) / [Algorithms and computing](standard-library/README.md#algorithms-and-computing) / **Probabilistic computing**

> **Source:** `stdlib/std/probabilistic.valor` · **Routines:** 64 public

## Routines

<details>
<summary>Browse all 64 routines</summary>

- [`powerOfTwo`](#fn-poweroftwo)
- [`wrappedIndex`](#fn-wrappedindex)
- [`mixedHash`](#fn-mixedhash)
- [`hashRound`](#fn-hashround)
- [`shardForHash`](#fn-shardforhash)
- [`validPlacement`](#fn-validplacement)
- [`progressGuarantee`](#fn-progressguarantee)
- [`saturatingAdd`](#fn-saturatingadd)
- [`powerOfTwoU64`](#fn-poweroftwou64)
- [`absF64`](#fn-absf64)
- [`naturalLog`](#fn-naturallog)
- [`bloomBitIndex`](#fn-bloombitindex)
- [`bloomInsert`](#fn-bloominsert)
- [`bloomInsertConcurrent`](#fn-bloominsertconcurrent)
- [`bloomMayContain`](#fn-bloommaycontain)
- [`bloomWordMask`](#fn-bloomwordmask)
- [`cuckooFingerprint`](#fn-cuckoofingerprint)
- [`cuckooPrimaryBucket`](#fn-cuckooprimarybucket)
- [`cuckooAlternateBucket`](#fn-cuckooalternatebucket)
- [`cuckooMayContain`](#fn-cuckoomaycontain)
- [`cuckooTryInsertConcurrent`](#fn-cuckootryinsertconcurrent)
- [`cuckooInsertBounded`](#fn-cuckooinsertbounded)
- [`cuckooErase`](#fn-cuckooerase)
- [`countMinIndex`](#fn-countminindex)
- [`countMinAdd`](#fn-countminadd)
- [`countMinAddConcurrent`](#fn-countminaddconcurrent)
- [`countMinEstimate`](#fn-countminestimate)
- [`countMinAddConservative`](#fn-countminaddconservative)
- [`hyperLogLogConfigurationValid`](#fn-hyperloglogconfigurationvalid)
- [`hyperLogLogRegister`](#fn-hyperloglogregister)
- [`hyperLogLogRank`](#fn-hyperloglogrank)
- [`hyperLogLogAdd`](#fn-hyperloglogadd)
- [`hyperLogLogAddConcurrent`](#fn-hyperloglogaddconcurrent)
- [`hyperLogLogAlpha`](#fn-hyperloglogalpha)
- [`hyperLogLogEstimate`](#fn-hyperloglogestimate)
- [`hyperLogLogMerge`](#fn-hyperloglogmerge)
- [`hyperLogLogMergeConcurrent`](#fn-hyperloglogmergeconcurrent)
- [`tDigestInsertionIndex`](#fn-tdigestinsertionindex)
- [`tDigestNearest`](#fn-tdigestnearest)
- [`tDigestMaximumWeight`](#fn-tdigestmaximumweight)
- [`tDigestAdd`](#fn-tdigestadd)
- [`tDigestAddConcurrent`](#fn-tdigestaddconcurrent)
- [`tDigestCompress`](#fn-tdigestcompress)
- [`tDigestQuantile`](#fn-tdigestquantile)
- [`histogramBin`](#fn-histogrambin)
- [`histogramAdd`](#fn-histogramadd)
- [`histogramAddConcurrent`](#fn-histogramaddconcurrent)
- [`histogramTotal`](#fn-histogramtotal)
- [`reservoirAdvance`](#fn-reservoiradvance)
- [`reservoirAdd`](#fn-reservoiradd)
- [`reservoirAddConcurrent`](#fn-reservoiraddconcurrent)
- [`runningMeanAdd`](#fn-runningmeanadd)
- [`runningMeanAddConcurrent`](#fn-runningmeanaddconcurrent)
- [`runningVarianceAdd`](#fn-runningvarianceadd)
- [`runningVarianceAddConcurrent`](#fn-runningvarianceaddconcurrent)
- [`runningVarianceValue`](#fn-runningvariancevalue)
- [`runningVarianceMerge`](#fn-runningvariancemerge)
- [`quantileValid`](#fn-quantilevalid)
- [`quantileMarkerIncrement`](#fn-quantilemarkerincrement)
- [`quantileBootstrapAdd`](#fn-quantilebootstrapadd)
- [`quantileInitialize`](#fn-quantileinitialize)
- [`quantileAdd`](#fn-quantileadd)
- [`quantileAddConcurrent`](#fn-quantileaddconcurrent)
- [`quantileEstimate`](#fn-quantileestimate)

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
> bool result = std::probabilistic::powerOfTwo(value);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)
> - [`std::probabilistic::hashRound`](#fn-hashround)

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
> usize result = std::probabilistic::wrappedIndex(value, capacity);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)
> - [`std::probabilistic::hashRound`](#fn-hashround)

<a id="fn-mixedhash"></a>

> ## `mixedHash`

> Provides the module's **mixed hash** operation. Returns `u64`.

```valor
public u64 mixedHash(u64 hash, u64 seed)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `seed`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::probabilistic::mixedHash(hash, seed);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::hashRound`](#fn-hashround)

<a id="fn-hashround"></a>

> ## `hashRound`

> Provides the module's **hash round** operation. Returns `u64`.

```valor
public u64 hashRound(u64 hash, u64 seed, usize round)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `seed`: u64 (by value)
> - `round`: usize (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::probabilistic::hashRound(hash, seed, round);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

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
> usize result = std::probabilistic::shardForHash(hash, shard_count);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-validplacement"></a>

> ## `validPlacement`

> Provides the module's **valid placement** operation. Returns `bool`.

```valor
public bool validPlacement(usize alignment, usize shard_count, u8 numa_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `alignment`: usize (by value)
> - `shard_count`: usize (by value)
> - `numa_policy`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::probabilistic::validPlacement(alignment, shard_count, numa_policy);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-progressguarantee"></a>

> ## `progressGuarantee`

> Provides the module's **progress guarantee** operation. Returns `u8`.

```valor
public u8 progressGuarantee(bool atomic_words_lock_free)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `atomic_words_lock_free`: bool (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::probabilistic::progressGuarantee(atomic_words_lock_free);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-saturatingadd"></a>

> ## `saturatingAdd`

> Provides the module's **saturating add** operation. Returns `u64`.

```valor
public u64 saturatingAdd(u64 value, u64 change)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)
> - `change`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::probabilistic::saturatingAdd(value, change);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-poweroftwou64"></a>

> ## `powerOfTwoU64`

> Provides the module's **power of two u64** operation. Returns `u64`.

```valor
public u64 powerOfTwoU64(usize exponent)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `exponent`: usize (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::probabilistic::powerOfTwoU64(exponent);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-absf64"></a>

> ## `absF64`

> Provides the module's **abs f64** operation. Returns `f64`.

```valor
public f64 absF64(f64 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::probabilistic::absF64(value);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-naturallog"></a>

> ## `naturalLog`

> Stable log approximation used by HyperLogLog small-range correction.

```valor
public f64 naturalLog(f64 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::probabilistic::naturalLog(value);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-bloombitindex"></a>

> ## `bloomBitIndex`

> Provides the module's **bloom bit index** operation. Returns `usize`.

```valor
public usize bloomBitIndex(u64 hash, u64 seed, usize round, usize bit_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `seed`: u64 (by value)
> - `round`: usize (by value)
> - `bit_count`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::probabilistic::bloomBitIndex(hash, seed, round, bit_count);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-bloominsert"></a>

> ## `bloomInsert`

> Provides the module's **bloom insert** operation. Returns `i32`.

```valor
public i32 bloomInsert(u64 hash, u64 seed, usize bit_count, u8 hash_count, (usize) -> u64 read_word, (usize, u64) -> void write_word)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `seed`: u64 (by value)
> - `bit_count`: usize (by value)
> - `hash_count`: u8 (by value)
> - `usize`: (usize) -> u64 read_word, ( (borrowed fn-ptr (callback))
> - `write_word`: u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::probabilistic::bloomInsert(hash, seed, bit_count, hash_count, usize, write_word);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-bloominsertconcurrent"></a>

> ## `bloomInsertConcurrent`

> atomic_or_word performs one acquire-release fetch-or operation.

```valor
public i32 bloomInsertConcurrent(u64 hash, u64 seed, usize bit_count, u8 hash_count, (usize, u64) -> bool atomic_or_word)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `seed`: u64 (by value)
> - `bit_count`: usize (by value)
> - `hash_count`: u8 (by value)
> - `atomic_or_word`: (usize, u64) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::probabilistic::bloomInsertConcurrent(hash, seed, bit_count, hash_count, atomic_or_word);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-bloommaycontain"></a>

> ## `bloomMayContain`

> Provides the module's **bloom may contain** operation. Returns `bool`.

```valor
public bool bloomMayContain(u64 hash, u64 seed, usize bit_count, u8 hash_count, (usize) -> u64 load_word_acquire)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `seed`: u64 (by value)
> - `bit_count`: usize (by value)
> - `hash_count`: u8 (by value)
> - `load_word_acquire`: (usize) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::probabilistic::bloomMayContain(hash, seed, bit_count, hash_count, load_word_acquire);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-bloomwordmask"></a>

> ## `bloomWordMask`

> Tests or sets a whole batch of hash-derived bits per word callback. Tests or sets a whole batch of hash-derived bits per word callback. This exposes a compact word lane to vectorizing backends without a temporary.

```valor
public u64 bloomWordMask(u64 hash, u64 seed, usize first_round, usize round_count, usize word_index, usize bit_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `seed`: u64 (by value)
> - `first_round`: usize (by value)
> - `round_count`: usize (by value)
> - `word_index`: usize (by value)
> - `bit_count`: usize (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::probabilistic::bloomWordMask(hash, seed, first_round, round_count, word_index, bit_count);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-cuckoofingerprint"></a>

> ## `cuckooFingerprint`

> Provides the module's **cuckoo fingerprint** operation. Returns `u16`.

```valor
public u16 cuckooFingerprint(u64 hash, u64 seed)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `seed`: u64 (by value)

> ### RETURNS (u16)

> ### EXAMPLE
>
> ```valor
> u16 result = std::probabilistic::cuckooFingerprint(hash, seed);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-cuckooprimarybucket"></a>

> ## `cuckooPrimaryBucket`

> Provides the module's **cuckoo primary bucket** operation. Returns `usize`.

```valor
public usize cuckooPrimaryBucket(u64 hash, u64 seed, usize bucket_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `seed`: u64 (by value)
> - `bucket_count`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::probabilistic::cuckooPrimaryBucket(hash, seed, bucket_count);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-cuckooalternatebucket"></a>

> ## `cuckooAlternateBucket`

> Provides the module's **cuckoo alternate bucket** operation. Returns `usize`.

```valor
public usize cuckooAlternateBucket(usize bucket, u16 fingerprint, u64 seed, usize bucket_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bucket`: usize (by value)
> - `fingerprint`: u16 (by value)
> - `seed`: u64 (by value)
> - `bucket_count`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::probabilistic::cuckooAlternateBucket(bucket, fingerprint, seed, bucket_count);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-cuckoomaycontain"></a>

> ## `cuckooMayContain`

> Provides the module's **cuckoo may contain** operation. Returns `bool`.

```valor
public bool cuckooMayContain(u64 hash, u64 seed, usize bucket_count, usize slots_per_bucket, (usize) -> u16 load_fingerprint_acquire)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `seed`: u64 (by value)
> - `bucket_count`: usize (by value)
> - `slots_per_bucket`: usize (by value)
> - `load_fingerprint_acquire`: (usize) -> u16 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::probabilistic::cuckooMayContain(hash, seed, bucket_count, slots_per_bucket, load_fingerprint_acquire);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-cuckootryinsertconcurrent"></a>

> ## `cuckooTryInsertConcurrent`

> Empty slots contain fingerprint zero. Empty slots contain fingerprint zero. The compare-exchange callback claims a slot atomically, so competing insertions never overwrite each other.

```valor
public i32 cuckooTryInsertConcurrent(u64 hash, u64 seed, usize bucket_count, usize slots_per_bucket, (usize) -> u16 load_fingerprint_acquire, (usize, u16, u16) -> bool compare_exchange_fingerprint)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `seed`: u64 (by value)
> - `bucket_count`: usize (by value)
> - `slots_per_bucket`: usize (by value)
> - `usize`: (usize) -> u16 load_fingerprint_acquire, ( (borrowed fn-ptr (callback))
> - `u16`: u16 (by value)
> - `compare_exchange_fingerprint`: u16) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::probabilistic::cuckooTryInsertConcurrent(hash, seed, bucket_count, slots_per_bucket, usize, u16, compare_exchange_fingerprint);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-cuckooinsertbounded"></a>

> ## `cuckooInsertBounded`

> Bounded displacement keeps insertion fixed-memory and wait-free for the chosen kick budget in local storage. Bounded displacement keeps insertion fixed-memory and wait-free for the chosen kick budget in local storage. exchange_fingerprint returns the victim.

```valor
public i32 cuckooInsertBounded(u64 hash, u64 seed, usize bucket_count, usize slots_per_bucket, usize max_kicks, (usize) -> u16 read_fingerprint, (usize, u16) -> void write_fingerprint, (usize, u16) -> u16 exchange_fingerprint)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `seed`: u64 (by value)
> - `bucket_count`: usize (by value)
> - `slots_per_bucket`: usize (by value)
> - `max_kicks`: usize (by value)
> - `usize`: (usize) -> u16 read_fingerprint, ( (borrowed fn-ptr (callback))
> - `exchange_fingerprint`: u16) -> void write_fingerprint, (usize, u16) -> u16 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::probabilistic::cuckooInsertBounded(hash, seed, bucket_count, slots_per_bucket, max_kicks, usize, exchange_fingerprint);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-cuckooerase"></a>

> ## `cuckooErase`

> Provides the module's **cuckoo erase** operation. Returns `i32`.

```valor
public i32 cuckooErase(u64 hash, u64 seed, usize bucket_count, usize slots_per_bucket, (usize) -> u16 load_fingerprint_acquire, (usize, u16, u16) -> bool compare_exchange_fingerprint)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `seed`: u64 (by value)
> - `bucket_count`: usize (by value)
> - `slots_per_bucket`: usize (by value)
> - `usize`: (usize) -> u16 load_fingerprint_acquire, ( (borrowed fn-ptr (callback))
> - `u16`: u16 (by value)
> - `compare_exchange_fingerprint`: u16) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::probabilistic::cuckooErase(hash, seed, bucket_count, slots_per_bucket, usize, u16, compare_exchange_fingerprint);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-countminindex"></a>

> ## `countMinIndex`

> Provides the module's **count min index** operation. Returns `usize`.

```valor
public usize countMinIndex(u64 hash, u64 seed, usize row, usize width)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `seed`: u64 (by value)
> - `row`: usize (by value)
> - `width`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::probabilistic::countMinIndex(hash, seed, row, width);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-countminadd"></a>

> ## `countMinAdd`

> Provides the module's **count min add** operation. Returns `i32`.

```valor
public i32 countMinAdd(u64 hash, u64 change, u64 seed, usize width, usize depth, (usize) -> u64 read_counter, (usize, u64) -> void write_counter)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `change`: u64 (by value)
> - `seed`: u64 (by value)
> - `width`: usize (by value)
> - `depth`: usize (by value)
> - `usize`: (usize) -> u64 read_counter, ( (borrowed fn-ptr (callback))
> - `write_counter`: u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::probabilistic::countMinAdd(hash, change, seed, width, depth, usize, write_counter);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-countminaddconcurrent"></a>

> ## `countMinAddConcurrent`

> Provides the module's **count min add concurrent** operation. Returns `i32`.

```valor
public i32 countMinAddConcurrent(u64 hash, u64 change, u64 seed, usize width, usize depth, (usize, u64) -> bool atomic_saturating_add)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `change`: u64 (by value)
> - `seed`: u64 (by value)
> - `width`: usize (by value)
> - `depth`: usize (by value)
> - `atomic_saturating_add`: (usize, u64) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::probabilistic::countMinAddConcurrent(hash, change, seed, width, depth, atomic_saturating_add);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-countminestimate"></a>

> ## `countMinEstimate`

> Provides the module's **count min estimate** operation. Returns `u64`.

```valor
public u64 countMinEstimate(u64 hash, u64 seed, usize width, usize depth, (usize) -> u64 load_counter_acquire)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `seed`: u64 (by value)
> - `width`: usize (by value)
> - `depth`: usize (by value)
> - `load_counter_acquire`: (usize) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::probabilistic::countMinEstimate(hash, seed, width, depth, load_counter_acquire);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-countminaddconservative"></a>

> ## `countMinAddConservative`

> Conservative update increments only counters currently equal to the minimum, reducing overestimation while retaining constant O(depth) update cost. Conservative update increments only counters currently equal to the minimum, reducing overestimation while retaining constant O(depth) update cost.

```valor
public i32 countMinAddConservative(u64 hash, u64 change, u64 seed, usize width, usize depth, (usize) -> u64 read_counter, (usize, u64, u64) -> bool compare_exchange_counter)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `change`: u64 (by value)
> - `seed`: u64 (by value)
> - `width`: usize (by value)
> - `depth`: usize (by value)
> - `usize`: (usize) -> u64 read_counter, ( (borrowed fn-ptr (callback))
> - `u64`: u64 (by value)
> - `compare_exchange_counter`: u64) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::probabilistic::countMinAddConservative(hash, change, seed, width, depth, usize, u64, compare_exchange_counter);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-hyperloglogconfigurationvalid"></a>

> ## `hyperLogLogConfigurationValid`

> Provides the module's **hyper log log configuration valid** operation. Returns `bool`.

```valor
public bool hyperLogLogConfigurationValid(u8 precision, usize register_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `precision`: u8 (by value)
> - `register_count`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::probabilistic::hyperLogLogConfigurationValid(precision, register_count);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-hyperloglogregister"></a>

> ## `hyperLogLogRegister`

> Provides the module's **hyper log log register** operation. Returns `usize`.

```valor
public usize hyperLogLogRegister(u64 hash, u64 seed, u8 precision)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `seed`: u64 (by value)
> - `precision`: u8 (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::probabilistic::hyperLogLogRegister(hash, seed, precision);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-hyperloglogrank"></a>

> ## `hyperLogLogRank`

> Rank of the first non-zero bit after the register-index portion. Rank of the first non-zero bit after the register-index portion. Arithmetic extraction avoids requiring target-specific bit intrinsics.

```valor
public u8 hyperLogLogRank(u64 hash, u64 seed, u8 precision)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `seed`: u64 (by value)
> - `precision`: u8 (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::probabilistic::hyperLogLogRank(hash, seed, precision);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-hyperloglogadd"></a>

> ## `hyperLogLogAdd`

> Provides the module's **hyper log log add** operation. Returns `i32`.

```valor
public i32 hyperLogLogAdd(u64 hash, u64 seed, u8 precision, usize register_count, (usize) -> u8 read_register, (usize, u8) -> void write_register)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `seed`: u64 (by value)
> - `precision`: u8 (by value)
> - `register_count`: usize (by value)
> - `usize`: (usize) -> u8 read_register, ( (borrowed fn-ptr (callback))
> - `write_register`: u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::probabilistic::hyperLogLogAdd(hash, seed, precision, register_count, usize, write_register);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-hyperloglogaddconcurrent"></a>

> ## `hyperLogLogAddConcurrent`

> Provides the module's **hyper log log add concurrent** operation. Returns `i32`.

```valor
public i32 hyperLogLogAddConcurrent(u64 hash, u64 seed, u8 precision, usize register_count, (usize, u8) -> bool atomic_max_register)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `seed`: u64 (by value)
> - `precision`: u8 (by value)
> - `register_count`: usize (by value)
> - `atomic_max_register`: (usize, u8) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::probabilistic::hyperLogLogAddConcurrent(hash, seed, precision, register_count, atomic_max_register);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-hyperloglogalpha"></a>

> ## `hyperLogLogAlpha`

> Provides the module's **hyper log log alpha** operation. Returns `f64`.

```valor
public f64 hyperLogLogAlpha(usize register_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `register_count`: usize (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::probabilistic::hyperLogLogAlpha(register_count);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-hyperloglogestimate"></a>

> ## `hyperLogLogEstimate`

> Provides the module's **hyper log log estimate** operation. Returns `f64`.

```valor
public f64 hyperLogLogEstimate(usize register_count, (usize) -> u8 load_register_acquire)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `register_count`: usize (by value)
> - `load_register_acquire`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::probabilistic::hyperLogLogEstimate(register_count, load_register_acquire);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-hyperloglogmerge"></a>

> ## `hyperLogLogMerge`

> Provides the module's **hyper log log merge** operation. Returns `i32`.

```valor
public i32 hyperLogLogMerge(usize register_count, (usize) -> u8 read_source, (usize) -> u8 read_target, (usize, u8) -> void write_target)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `register_count`: usize (by value)
> - `write_target`: (usize) -> u8 read_source, (usize) -> u8 read_target, (usize, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::probabilistic::hyperLogLogMerge(register_count, write_target);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-hyperloglogmergeconcurrent"></a>

> ## `hyperLogLogMergeConcurrent`

> Provides the module's **hyper log log merge concurrent** operation. Returns `i32`.

```valor
public i32 hyperLogLogMergeConcurrent(usize register_count, (usize) -> u8 read_source, (usize, u8) -> bool atomic_max_target)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `register_count`: usize (by value)
> - `usize`: (usize) -> u8 read_source, ( (borrowed fn-ptr (callback))
> - `atomic_max_target`: u8) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::probabilistic::hyperLogLogMergeConcurrent(register_count, usize, atomic_max_target);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-tdigestinsertionindex"></a>

> ## `tDigestInsertionIndex`

> Provides the module's **t digest insertion index** operation. Returns `usize`.

```valor
public usize tDigestInsertionIndex(f64 value, usize centroid_count, (usize) -> f64 read_mean)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: f64 (by value)
> - `centroid_count`: usize (by value)
> - `read_mean`: (usize) -> f64 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::probabilistic::tDigestInsertionIndex(value, centroid_count, read_mean);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-tdigestnearest"></a>

> ## `tDigestNearest`

> Provides the module's **t digest nearest** operation. Returns `usize`.

```valor
public usize tDigestNearest(f64 value, usize centroid_count, (usize) -> f64 read_mean)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: f64 (by value)
> - `centroid_count`: usize (by value)
> - `read_mean`: (usize) -> f64 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::probabilistic::tDigestNearest(value, centroid_count, read_mean);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-tdigestmaximumweight"></a>

> ## `tDigestMaximumWeight`

> Provides the module's **t digest maximum weight** operation. Returns `f64`.

```valor
public f64 tDigestMaximumWeight(f64 cumulative_weight, f64 total_weight, f64 compression)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `cumulative_weight`: f64 (by value)
> - `total_weight`: f64 (by value)
> - `compression`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::probabilistic::tDigestMaximumWeight(cumulative_weight, total_weight, compression);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-tdigestadd"></a>

> ## `tDigestAdd`

> insert_centroid shifts caller-owned parallel arrays and inserts one pair.

```valor
public i32 tDigestAdd(f64 value, f64 weight, usize centroid_count, usize centroid_capacity, f64 total_weight, f64 compression, (usize) -> f64 read_mean, (usize) -> f64 read_weight, (usize, f64, f64) -> void write_centroid, (usize, f64, f64) -> void insert_centroid)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: f64 (by value)
> - `weight`: f64 (by value)
> - `centroid_count`: usize (by value)
> - `centroid_capacity`: usize (by value)
> - `total_weight`: f64 (by value)
> - `compression`: f64 (by value)
> - `insert_centroid`: (usize) -> f64 read_mean, (usize) -> f64 read_weight, (usize, f64, f64) -> void write_centroid, (usize, f64, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::probabilistic::tDigestAdd(value, weight, centroid_count, centroid_capacity, total_weight, compression, insert_centroid);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-tdigestaddconcurrent"></a>

> ## `tDigestAddConcurrent`

> The callback atomically validates a version, applies one bounded append-or-merge update to inactive storage, and publishes that storage. The callback atomically validates a version, applies one bounded append-or-merge update to inactive storage, and publishes that storage. Copy-free double buffering belongs to the caller so the complete digest state, including total_weight, becomes visible as one release operation.

```valor
public i32 tDigestAddConcurrent(f64 value, f64 weight, () -> u64 load_version_acquire, (u64, f64, f64) -> bool compare_exchange_digest)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: f64 (by value)
> - `weight`: f64 (by value)
> - `u64`: () -> u64 load_version_acquire, ( (borrowed fn-ptr (callback))
> - `f64`: f64 (by value)
> - `compare_exchange_digest`: f64) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::probabilistic::tDigestAddConcurrent(value, weight, u64, f64, compare_exchange_digest);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-tdigestcompress"></a>

> ## `tDigestCompress`

> One compression pass streams sorted centroids into a caller-selected output buffer. One compression pass streams sorted centroids into a caller-selected output buffer. emit_centroid returns false if that fixed buffer is exhausted.

```valor
public i32 tDigestCompress(usize centroid_count, f64 total_weight, f64 compression, (usize) -> f64 read_mean, (usize) -> f64 read_weight, (f64, f64) -> bool emit_centroid)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `centroid_count`: usize (by value)
> - `total_weight`: f64 (by value)
> - `compression`: f64 (by value)
> - `emit_centroid`: (usize) -> f64 read_mean, (usize) -> f64 read_weight, (f64, f64) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::probabilistic::tDigestCompress(centroid_count, total_weight, compression, emit_centroid);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-tdigestquantile"></a>

> ## `tDigestQuantile`

> Provides the module's **t digest quantile** operation. Returns `f64`.

```valor
public f64 tDigestQuantile(f64 quantile, usize centroid_count, f64 total_weight, (usize) -> f64 read_mean, (usize) -> f64 read_weight)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `quantile`: f64 (by value)
> - `centroid_count`: usize (by value)
> - `total_weight`: f64 (by value)
> - `read_weight`: (usize) -> f64 read_mean, (usize) -> f64 (borrowed fn-ptr (callback))

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::probabilistic::tDigestQuantile(quantile, centroid_count, total_weight, read_weight);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-histogrambin"></a>

> ## `histogramBin`

> Provides the module's **histogram bin** operation. Returns `usize`.

```valor
public usize histogramBin(T value, usize bin_count, (usize) -> T read_upper_bound, (T, T) -> bool less_or_equal)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: T (by value)
> - `bin_count`: usize (by value)
> - `T`: (usize) -> T read_upper_bound, ( (borrowed fn-ptr (callback))
> - `less_or_equal`: T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::probabilistic::histogramBin(value, bin_count, T, less_or_equal);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-histogramadd"></a>

> ## `histogramAdd`

> Provides the module's **histogram add** operation. Returns `i32`.

```valor
public i32 histogramAdd(T value, u64 weight, usize bin_count, (usize) -> T read_upper_bound, (T, T) -> bool less_or_equal, (usize) -> u64 read_count, (usize, u64) -> void write_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: T (by value)
> - `weight`: u64 (by value)
> - `bin_count`: usize (by value)
> - `T`: (usize) -> T read_upper_bound, ( (borrowed fn-ptr (callback))
> - `write_count`: T) -> bool less_or_equal, (usize) -> u64 read_count, (usize, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::probabilistic::histogramAdd(value, weight, bin_count, T, write_count);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-histogramaddconcurrent"></a>

> ## `histogramAddConcurrent`

> Provides the module's **histogram add concurrent** operation. Returns `i32`.

```valor
public i32 histogramAddConcurrent(T value, u64 weight, usize bin_count, (usize) -> T read_upper_bound, (T, T) -> bool less_or_equal, (usize, u64) -> bool atomic_saturating_add)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: T (by value)
> - `weight`: u64 (by value)
> - `bin_count`: usize (by value)
> - `T`: (usize) -> T read_upper_bound, ( (borrowed fn-ptr (callback))
> - `atomic_saturating_add`: T) -> bool less_or_equal, (usize, u64) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::probabilistic::histogramAddConcurrent(value, weight, bin_count, T, atomic_saturating_add);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-histogramtotal"></a>

> ## `histogramTotal`

> Provides the module's **histogram total** operation. Returns `u64`.

```valor
public u64 histogramTotal(usize bin_count, (usize) -> u64 load_count_acquire)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bin_count`: usize (by value)
> - `load_count_acquire`: (usize) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::probabilistic::histogramTotal(bin_count, load_count_acquire);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-reservoiradvance"></a>

> ## `reservoirAdvance`

> Provides the module's **reservoir advance** operation. Returns `u64`.

```valor
public u64 reservoirAdvance(u64 state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::probabilistic::reservoirAdvance(state);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-reservoiradd"></a>

> ## `reservoirAdd`

> Provides the module's **reservoir add** operation. Returns `i32`.

```valor
public i32 reservoirAdd(T value, usize capacity, u64 seen, u64 random_state, (usize, T) -> void write_sample, (u64, u64) -> void publish_state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: T (by value)
> - `capacity`: usize (by value)
> - `seen`: u64 (by value)
> - `random_state`: u64 (by value)
> - `u64`: (usize, T) -> void write_sample, ( (borrowed fn-ptr (callback))
> - `publish_state`: u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::probabilistic::reservoirAdd(value, capacity, seen, random_state, u64, publish_state);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-reservoiraddconcurrent"></a>

> ## `reservoirAddConcurrent`

> Provides the module's **reservoir add concurrent** operation. Returns `i32`.

```valor
public i32 reservoirAddConcurrent(T value, usize capacity, () -> u64 load_seen_acquire, (u64, u64) -> bool compare_exchange_seen, (usize, T) -> void publish_sample_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: T (by value)
> - `capacity`: usize (by value)
> - `u64`: () -> u64 load_seen_acquire, ( (borrowed fn-ptr (callback))
> - `publish_sample_release`: u64) -> bool compare_exchange_seen, (usize, T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::probabilistic::reservoirAddConcurrent(value, capacity, u64, publish_sample_release);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-runningmeanadd"></a>

> ## `runningMeanAdd`

> Provides the module's **running mean add** operation. Returns `i32`.

```valor
public i32 runningMeanAdd(T value, u64 count, T mean, (T, T, u64) -> T blend, (u64, T) -> void publish_state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: T (by value)
> - `count`: u64 (by value)
> - `mean`: T (by value)
> - `u64`: (T, T, u64) -> T blend, ( (borrowed fn-ptr (callback))
> - `publish_state`: T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::probabilistic::runningMeanAdd(value, count, mean, u64, publish_state);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-runningmeanaddconcurrent"></a>

> ## `runningMeanAddConcurrent`

> Provides the module's **running mean add concurrent** operation. Returns `i32`.

```valor
public i32 runningMeanAddConcurrent(T value, () -> u64 load_version_acquire, (u64) -> u64 load_count_at_version, (u64) -> T load_mean_at_version, (T, T, u64) -> T blend, (u64, u64, T) -> bool compare_exchange_state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: T (by value)
> - `compare_exchange_state`: () -> u64 load_version_acquire, (u64) -> u64 load_count_at_version, (u64) -> T load_mean_at_version, (T, T, u64) -> T blend, (u64, u64, T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::probabilistic::runningMeanAddConcurrent(value, compare_exchange_state);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-runningvarianceadd"></a>

> ## `runningVarianceAdd`

> Provides the module's **running variance add** operation. Returns `i32`.

```valor
public i32 runningVarianceAdd(T value, u64 count, T mean, T m2, (T, T) -> T difference, (T, T, u64) -> T shift_mean, (T, T, T) -> T accumulate_m2, (u64, T, T) -> void publish_state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: T (by value)
> - `count`: u64 (by value)
> - `mean`: T (by value)
> - `m2`: T (by value)
> - `T`: (T, T) -> T difference, ( (borrowed fn-ptr (callback))
> - `T`: T (by value)
> - `publish_state`: u64) -> T shift_mean, (T, T, T) -> T accumulate_m2, (u64, T, T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::probabilistic::runningVarianceAdd(value, count, mean, m2, T, T, publish_state);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-runningvarianceaddconcurrent"></a>

> ## `runningVarianceAddConcurrent`

> Provides the module's **running variance add concurrent** operation. Returns `i32`.

```valor
public i32 runningVarianceAddConcurrent(T value, () -> u64 load_version_acquire, (u64) -> u64 load_count_at_version, (u64) -> T load_mean_at_version, (u64) -> T load_m2_at_version, (T, T) -> T difference, (T, T, u64) -> T shift_mean, (T, T, T) -> T accumulate_m2, (u64, u64, T, T) -> bool compare_exchange_state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: T (by value)
> - `compare_exchange_state`: () -> u64 load_version_acquire, (u64) -> u64 load_count_at_version, (u64) -> T load_mean_at_version, (u64) -> T load_m2_at_version, (T, T) -> T difference, (T, T, u64) -> T shift_mean, (T, T, T) -> T accumulate_m2, (u64, u64, T, T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::probabilistic::runningVarianceAddConcurrent(value, compare_exchange_state);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-runningvariancevalue"></a>

> ## `runningVarianceValue`

> Provides the module's **running variance value** operation. Returns `i32`.

```valor
public i32 runningVarianceValue(u64 count, T m2, bool sample, (T, u64) -> T divide, (T) -> void receive_variance)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: u64 (by value)
> - `m2`: T (by value)
> - `sample`: bool (by value)
> - `receive_variance`: (T, u64) -> T divide, (T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::probabilistic::runningVarianceValue(count, m2, sample, receive_variance);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-runningvariancemerge"></a>

> ## `runningVarianceMerge`

> Provides the module's **running variance merge** operation. Returns `i32`.

```valor
public i32 runningVarianceMerge(u64 left_count, T left_mean, T left_m2, u64 right_count, T right_mean, T right_m2, (T, T) -> T difference, (T, T, u64, u64) -> T merge_mean, (T, T, T, u64, u64) -> T merge_m2, (u64, T, T) -> void receive_state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_count`: u64 (by value)
> - `left_mean`: T (by value)
> - `left_m2`: T (by value)
> - `right_count`: u64 (by value)
> - `right_mean`: T (by value)
> - `right_m2`: T (by value)
> - `T`: (T, T) -> T difference, ( (borrowed fn-ptr (callback))
> - `T`: T (by value)
> - `u64`: u64 (by value)
> - `receive_state`: u64) -> T merge_mean, (T, T, T, u64, u64) -> T merge_m2, (u64, T, T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::probabilistic::runningVarianceMerge(left_count, left_mean, left_m2, right_count, right_mean, right_m2, T, T, u64, receive_state);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-quantilevalid"></a>

> ## `quantileValid`

> Provides the module's **quantile valid** operation. Returns `bool`.

```valor
public bool quantileValid(f64 quantile)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `quantile`: f64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::probabilistic::quantileValid(quantile);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-quantilemarkerincrement"></a>

> ## `quantileMarkerIncrement`

> Provides the module's **quantile marker increment** operation. Returns `f64`.

```valor
public f64 quantileMarkerIncrement(f64 quantile, usize marker)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `quantile`: f64 (by value)
> - `marker`: usize (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::probabilistic::quantileMarkerIncrement(quantile, marker);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-quantilebootstrapadd"></a>

> ## `quantileBootstrapAdd`

> Provides the module's **quantile bootstrap add** operation. Returns `i32`.

```valor
public i32 quantileBootstrapAdd(T value, usize bootstrap_count, (usize, T) -> void write_bootstrap)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: T (by value)
> - `bootstrap_count`: usize (by value)
> - `write_bootstrap`: (usize, T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::probabilistic::quantileBootstrapAdd(value, bootstrap_count, write_bootstrap);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-quantileinitialize"></a>

> ## `quantileInitialize`

> Provides the module's **quantile initialize** operation. Returns `i32`.

```valor
public i32 quantileInitialize(f64 quantile, usize bootstrap_count, (usize) -> T read_bootstrap, (usize, T) -> void write_bootstrap, (T, T) -> bool less, (usize, T) -> void write_height, (usize, f64, f64) -> void write_position_and_increment)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `quantile`: f64 (by value)
> - `bootstrap_count`: usize (by value)
> - `usize`: (usize) -> T read_bootstrap, ( (borrowed fn-ptr (callback))
> - `write_position_and_increment`: T) -> void write_bootstrap, (T, T) -> bool less, (usize, T) -> void write_height, (usize, f64, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::probabilistic::quantileInitialize(quantile, bootstrap_count, usize, write_position_and_increment);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-quantileadd"></a>

> ## `quantileAdd`

> Provides the module's **quantile add** operation. Returns `i32`.

```valor
public i32 quantileAdd(T value, f64 quantile, (usize) -> T read_height, (usize) -> f64 read_position, (usize) -> f64 read_desired_position, (usize) -> f64 read_increment, (T, T) -> bool less, (usize, i32, T, T, T, f64, f64, f64) -> T adjust_height, (usize, T) -> void write_height, (usize, f64, f64) -> void write_position_and_desired)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: T (by value)
> - `quantile`: f64 (by value)
> - `write_position_and_desired`: (usize) -> T read_height, (usize) -> f64 read_position, (usize) -> f64 read_desired_position, (usize) -> f64 read_increment, (T, T) -> bool less, (usize, i32, T, T, T, f64, f64, f64) -> T adjust_height, (usize, T) -> void write_height, (usize, f64, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::probabilistic::quantileAdd(value, quantile, write_position_and_desired);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-quantileaddconcurrent"></a>

> ## `quantileAddConcurrent`

> Provides the module's **quantile add concurrent** operation. Returns `i32`.

```valor
public i32 quantileAddConcurrent(T value, f64 quantile, () -> u64 load_version_acquire, (u64, T, f64) -> bool compare_exchange_estimator)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: T (by value)
> - `quantile`: f64 (by value)
> - `u64`: () -> u64 load_version_acquire, ( (borrowed fn-ptr (callback))
> - `T`: T (by value)
> - `compare_exchange_estimator`: f64) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::probabilistic::quantileAddConcurrent(value, quantile, u64, T, compare_exchange_estimator);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

<a id="fn-quantileestimate"></a>

> ## `quantileEstimate`

> Provides the module's **quantile estimate** operation. Returns `T`.

```valor
public T quantileEstimate(usize count, f64 quantile, (usize) -> T read_height, (usize) -> T read_bootstrap, (T, T) -> bool less)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `quantile`: f64 (by value)
> - `less`: (usize) -> T read_height, (usize) -> T read_bootstrap, (T, T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (T)

> ### EXAMPLE
>
> ```valor
> T result = std::probabilistic::quantileEstimate(count, quantile, less);
> ```

> ### SEE ALSO
>
> - [`std::probabilistic::powerOfTwo`](#fn-poweroftwo)
> - [`std::probabilistic::wrappedIndex`](#fn-wrappedindex)
> - [`std::probabilistic::mixedHash`](#fn-mixedhash)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Multivariable calculus](STD-MULTICALC-DOC.md) · [Table of contents](standard-library/README.md) · [Quantitative computing →](STD-QUANT-DOC.md)
