<!-- stdlib-reference-style: modern -->
> # `std::net`

`std::net` network addressing and transport helpers.

[Standard library](standard-library/README.md) / [Networking and security](standard-library/README.md#networking-and-security) / **Networking**

> **Source:** `stdlib/std/net.valor` · **Routines:** 54 public · 1 internal

## Routines

<details>
<summary>Browse all 55 routines</summary>

- [`profile`](#fn-profile)
- [`addFits`](#fn-addfits)
- [`multiplyFits`](#fn-multiplyfits)
- [`powerOfTwo`](#fn-poweroftwo)
- [`rangeIsValid`](#fn-rangeisvalid)
- [`wrappedIndex`](#fn-wrappedindex)
- [`ipFamilyIsValid`](#fn-ipfamilyisvalid)
- [`socketAddressIsValid`](#fn-socketaddressisvalid)
- [`socketStateIsValid`](#fn-socketstateisvalid)
- [`packetBufferIsValid`](#fn-packetbufferisvalid)
- [`ioVectorListIsValid`](#fn-iovectorlistisvalid)
- [`selectNumaNode`](#fn-selectnumanode)
- [`selectShard`](#fn-selectshard)
- [`ipv4FromOctets`](#fn-ipv4fromoctets)
- [`ipv4Octet`](#fn-ipv4octet)
- [`queueStateIsValid`](#fn-queuestateisvalid)
- [`queueReadable`](#fn-queuereadable)
- [`queueWritable`](#fn-queuewritable)
- [`packetQueueTryReserve`](#fn-packetqueuetryreserve)
- [`packetQueuePublish`](#fn-packetqueuepublish)
- [`packetQueueTryAcquire`](#fn-packetqueuetryacquire)
- [`packetQueueRelease`](#fn-packetqueuerelease)
- [`packetQueueTryClaimMpmc`](#fn-packetqueuetryclaimmpmc)
- [`totalVectorBytes`](#fn-totalvectorbytes)
- [`submitIoVectors`](#fn-submitiovectors)
- [`receivePacket`](#fn-receivepacket)
- [`tcpConnect`](#fn-tcpconnect)
- [`tcpListen`](#fn-tcplisten)
- [`tcpAccept`](#fn-tcpaccept)
- [`closeSocket`](#fn-closesocket)
- [`submitDatagramBatch`](#fn-submitdatagrambatch)
- [`connectionPoolStart`](#fn-connectionpoolstart)
- [`connectionPoolTryAcquire`](#fn-connectionpooltryacquire)
- [`connectionPoolRelease`](#fn-connectionpoolrelease)
- [`saturatedAddU64`](#fn-saturatedaddu64)
- [`refillTokens`](#fn-refilltokens)
- [`tokenBucketTryConsume`](#fn-tokenbuckettryconsume)
- [`rateLimiterBucket`](#fn-ratelimiterbucket)
- [`rateLimitKey`](#fn-ratelimitkey)
- [`asciiAlpha`](#fn-asciialpha)
- [`asciiDigit`](#fn-asciidigit)
- [`asciiLower`](#fn-asciilower)
- [`uriSchemeByte`](#fn-urischemebyte)
- [`headerNameByte`](#fn-headernamebyte)
- [`headerNameHash`](#fn-headernamehash)
- [`findDelimiterSimd`](#fn-finddelimitersimd)
- [`validateUri`](#fn-validateuri)
- [`parseHeaderLines`](#fn-parseheaderlines)
- [`headerFind`](#fn-headerfind)
- [`httpVersionIsValid`](#fn-httpversionisvalid)
- [`httpStatusIsValid`](#fn-httpstatusisvalid)
- [`tlsAdvance`](#fn-tlsadvance)
- [`webSocketFrame`](#fn-websocketframe)
- [`dnsRecordTypeIsKnown`](#fn-dnsrecordtypeisknown)
- [`dnsCacheAccept`](#fn-dnscacheaccept)

</details>

## API reference

<a id="fn-profile"></a>

> ## `profile`

> *Internal API*
>
> Provides the module's **profile** operation. Returns `@`.

```valor
@profile(hyperscale)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hyperscale`: hyperscale (by value)

> ### RETURNS (@)

> ### EXAMPLE
>
> ```valor
> @ result = std::net::profile(hyperscale);
> ```

> ### SEE ALSO
>
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)
> - [`std::net::powerOfTwo`](#fn-poweroftwo)

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
> bool result = std::net::addFits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::multiplyFits`](#fn-multiplyfits)
> - [`std::net::powerOfTwo`](#fn-poweroftwo)

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
> bool result = std::net::multiplyFits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::powerOfTwo`](#fn-poweroftwo)

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
> bool result = std::net::powerOfTwo(value);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-rangeisvalid"></a>

> ## `rangeIsValid`

> Provides the module's **range is valid** operation. Returns `bool`.

```valor
public bool rangeIsValid(usize offset, usize length, usize capacity)
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
> bool result = std::net::rangeIsValid(offset, length, capacity);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

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
> usize result = std::net::wrappedIndex(sequence, capacity);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-ipfamilyisvalid"></a>

> ## `ipFamilyIsValid`

> Provides the module's **ip family is valid** operation. Returns `bool`.

```valor
public bool ipFamilyIsValid(u8 family)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `family`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::net::ipFamilyIsValid(family);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-socketaddressisvalid"></a>

> ## `socketAddressIsValid`

> Provides the module's **socket address is valid** operation. Returns `bool`.

```valor
public bool socketAddressIsValid(u8 family, u16 port)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `family`: u8 (by value)
> - `port`: u16 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::net::socketAddressIsValid(family, port);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-socketstateisvalid"></a>

> ## `socketStateIsValid`

> Provides the module's **socket state is valid** operation. Returns `bool`.

```valor
public bool socketStateIsValid(u8 state)
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
> bool result = std::net::socketStateIsValid(state);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-packetbufferisvalid"></a>

> ## `packetBufferIsValid`

> Provides the module's **packet buffer is valid** operation. Returns `bool`.

```valor
public bool packetBufferIsValid(usize capacity, usize data_offset, usize length, u8 state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `data_offset`: usize (by value)
> - `length`: usize (by value)
> - `state`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::net::packetBufferIsValid(capacity, data_offset, length, state);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-iovectorlistisvalid"></a>

> ## `ioVectorListIsValid`

> Provides the module's **io vector list is valid** operation. Returns `bool`.

```valor
public bool ioVectorListIsValid(usize count, usize byte_length, (usize) -> usize vector_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `byte_length`: usize (by value)
> - `vector_length`: (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::net::ioVectorListIsValid(count, byte_length, vector_length);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-selectnumanode"></a>

> ## `selectNumaNode`

> Provides the module's **select numa node** operation. Returns `u32`.

```valor
public u32 selectNumaNode(u64 key, u32 node_count, u8 policy, u32 preferred_node)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `key`: u64 (by value)
> - `node_count`: u32 (by value)
> - `policy`: u8 (by value)
> - `preferred_node`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::net::selectNumaNode(key, node_count, policy, preferred_node);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-selectshard"></a>

> ## `selectShard`

> Provides the module's **select shard** operation. Returns `usize`.

```valor
public usize selectShard(u64 key, usize shard_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `key`: u64 (by value)
> - `shard_count`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::net::selectShard(key, shard_count);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-ipv4fromoctets"></a>

> ## `ipv4FromOctets`

> Network-order IPv4 without bitwise source operations.

```valor
public u32 ipv4FromOctets(u8 a, u8 b, u8 c, u8 d)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: u8 (by value)
> - `b`: u8 (by value)
> - `c`: u8 (by value)
> - `d`: u8 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::net::ipv4FromOctets(a, b, c, d);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-ipv4octet"></a>

> ## `ipv4Octet`

> Provides the module's **ipv4 octet** operation. Returns `u8`.

```valor
public u8 ipv4Octet(u32 address, u8 index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `address`: u32 (by value)
> - `index`: u8 (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::net::ipv4Octet(address, index);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-queuestateisvalid"></a>

> ## `queueStateIsValid`

> Provides the module's **queue state is valid** operation. Returns `bool`.

```valor
public bool queueStateIsValid(usize consumer_sequence, usize producer_sequence, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `consumer_sequence`: usize (by value)
> - `producer_sequence`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::net::queueStateIsValid(consumer_sequence, producer_sequence, capacity);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-queuereadable"></a>

> ## `queueReadable`

> Provides the module's **queue readable** operation. Returns `usize`.

```valor
public usize queueReadable(usize consumer_sequence, usize producer_sequence, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `consumer_sequence`: usize (by value)
> - `producer_sequence`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::net::queueReadable(consumer_sequence, producer_sequence, capacity);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-queuewritable"></a>

> ## `queueWritable`

> Provides the module's **queue writable** operation. Returns `usize`.

```valor
public usize queueWritable(usize consumer_sequence, usize producer_sequence, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `consumer_sequence`: usize (by value)
> - `producer_sequence`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::net::queueWritable(consumer_sequence, producer_sequence, capacity);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-packetqueuetryreserve"></a>

> ## `packetQueueTryReserve`

> The SPSC fast path is wait-free when its supplied atomic operations are.

```valor
public i32 packetQueueTryReserve(usize capacity, () -> usize load_consumer_acquire, () -> usize load_producer_relaxed, (usize, usize) -> void receive_slot)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `receive_slot`: () -> usize load_consumer_acquire, () -> usize load_producer_relaxed, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::net::packetQueueTryReserve(capacity, receive_slot);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-packetqueuepublish"></a>

> ## `packetQueuePublish`

> Provides the module's **packet queue publish** operation. Returns `i32`.

```valor
public i32 packetQueuePublish(usize capacity, usize expected_sequence, () -> usize load_consumer_acquire, () -> usize load_producer_relaxed, (usize) -> void store_producer_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `expected_sequence`: usize (by value)
> - `store_producer_release`: () -> usize load_consumer_acquire, () -> usize load_producer_relaxed, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::net::packetQueuePublish(capacity, expected_sequence, store_producer_release);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-packetqueuetryacquire"></a>

> ## `packetQueueTryAcquire`

> Provides the module's **packet queue try acquire** operation. Returns `i32`.

```valor
public i32 packetQueueTryAcquire(usize capacity, () -> usize load_consumer_relaxed, () -> usize load_producer_acquire, (usize, usize) -> void receive_slot)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `receive_slot`: () -> usize load_consumer_relaxed, () -> usize load_producer_acquire, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::net::packetQueueTryAcquire(capacity, receive_slot);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-packetqueuerelease"></a>

> ## `packetQueueRelease`

> Provides the module's **packet queue release** operation. Returns `i32`.

```valor
public i32 packetQueueRelease(usize capacity, usize expected_sequence, () -> usize load_consumer_relaxed, () -> usize load_producer_acquire, (usize) -> void store_consumer_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `expected_sequence`: usize (by value)
> - `store_consumer_release`: () -> usize load_consumer_relaxed, () -> usize load_producer_acquire, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::net::packetQueueRelease(capacity, expected_sequence, store_consumer_release);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-packetqueuetryclaimmpmc"></a>

> ## `packetQueueTryClaimMpmc`

> An MPMC policy provides per-slot sequence comparison/exchange. An MPMC policy provides per-slot sequence comparison/exchange. No global lock or data copy is introduced by this algorithm.

```valor
public i32 packetQueueTryClaimMpmc(usize capacity, usize sequence, (usize, usize, usize) -> bool compare_exchange_slot_sequence, (usize) -> void receive_slot)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `sequence`: usize (by value)
> - `receive_slot`: (usize, usize, usize) -> bool compare_exchange_slot_sequence, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::net::packetQueueTryClaimMpmc(capacity, sequence, receive_slot);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-totalvectorbytes"></a>

> ## `totalVectorBytes`

> Provides the module's **total vector bytes** operation. Returns `i32`.

```valor
public i32 totalVectorBytes(usize vector_count, (usize) -> usize vector_length, (usize) -> void receive_total)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `vector_count`: usize (by value)
> - `receive_total`: (usize) -> usize vector_length, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::net::totalVectorBytes(vector_count, receive_total);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-submitiovectors"></a>

> ## `submitIoVectors`

> submit_vectors consumes borrowed slices directly. submit_vectors consumes borrowed slices directly. A target can lower the callback to its native vectored I/O instruction or queue submission.

```valor
public i32 submitIoVectors(u64 handle, u64 generation, usize vector_count, u32 numa_node, (usize) -> usize vector_length, (u64, u64, usize, usize, u32) -> i64 submit_vectors, (usize) -> void receive_transferred)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `handle`: u64 (by value)
> - `generation`: u64 (by value)
> - `vector_count`: usize (by value)
> - `numa_node`: u32 (by value)
> - `u64`: (usize) -> usize vector_length, ( (borrowed fn-ptr (callback))
> - `u64`: u64 (by value)
> - `usize`: usize (by value)
> - `usize`: usize (by value)
> - `receive_transferred`: u32) -> i64 submit_vectors, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::net::submitIoVectors(handle, generation, vector_count, numa_node, u64, u64, usize, usize, receive_transferred);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-receivepacket"></a>

> ## `receivePacket`

> Provides the module's **receive packet** operation. Returns `i32`.

```valor
public i32 receivePacket(u64 handle, u64 generation, usize capacity, usize headroom, u32 numa_node, (u64, u64, usize, usize, u32) -> i64 receive_into, (usize) -> void publish_length_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `handle`: u64 (by value)
> - `generation`: u64 (by value)
> - `capacity`: usize (by value)
> - `headroom`: usize (by value)
> - `numa_node`: u32 (by value)
> - `publish_length_release`: (u64, u64, usize, usize, u32) -> i64 receive_into, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::net::receivePacket(handle, generation, capacity, headroom, numa_node, publish_length_release);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-tcpconnect"></a>

> ## `tcpConnect`

> Provides the module's **tcp connect** operation. Returns `i32`.

```valor
public i32 tcpConnect(u8 family, u16 port, u32 numa_node, (u8, u16, u32) -> i64 connect_checked, (u64) -> void receive_handle)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `family`: u8 (by value)
> - `port`: u16 (by value)
> - `numa_node`: u32 (by value)
> - `receive_handle`: (u8, u16, u32) -> i64 connect_checked, (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::net::tcpConnect(family, port, numa_node, receive_handle);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-tcplisten"></a>

> ## `tcpListen`

> Provides the module's **tcp listen** operation. Returns `i32`.

```valor
public i32 tcpListen(u8 family, u16 port, u32 backlog, u32 numa_node, (u8, u16, u32, u32) -> i64 listen_checked, (u64) -> void receive_handle)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `family`: u8 (by value)
> - `port`: u16 (by value)
> - `backlog`: u32 (by value)
> - `numa_node`: u32 (by value)
> - `receive_handle`: (u8, u16, u32, u32) -> i64 listen_checked, (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::net::tcpListen(family, port, backlog, numa_node, receive_handle);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-tcpaccept"></a>

> ## `tcpAccept`

> Provides the module's **tcp accept** operation. Returns `i32`.

```valor
public i32 tcpAccept(u64 listener, u64 generation, u32 numa_node, (u64, u64, u32) -> i64 accept_checked, (u64) -> void receive_handle)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `listener`: u64 (by value)
> - `generation`: u64 (by value)
> - `numa_node`: u32 (by value)
> - `receive_handle`: (u64, u64, u32) -> i64 accept_checked, (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::net::tcpAccept(listener, generation, numa_node, receive_handle);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-closesocket"></a>

> ## `closeSocket`

> Provides the module's **close socket** operation. Returns `i32`.

```valor
public i32 closeSocket(u64 handle, u64 generation, (u64, u64) -> i32 close_checked)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `handle`: u64 (by value)
> - `generation`: u64 (by value)
> - `close_checked`: (u64, u64) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::net::closeSocket(handle, generation, close_checked);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-submitdatagrambatch"></a>

> ## `submitDatagramBatch`

> UDP and local-domain transports share the same zero-copy batch contract.

```valor
public i32 submitDatagramBatch(u64 handle, u64 generation, usize packet_count, u32 numa_node, (u64, u64, usize, u32) -> i64 submit_batch, (usize) -> void receive_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `handle`: u64 (by value)
> - `generation`: u64 (by value)
> - `packet_count`: usize (by value)
> - `numa_node`: u32 (by value)
> - `receive_count`: (u64, u64, usize, u32) -> i64 submit_batch, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::net::submitDatagramBatch(handle, generation, packet_count, numa_node, receive_count);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-connectionpoolstart"></a>

> ## `connectionPoolStart`

> Provides the module's **connection pool start** operation. Returns `usize`.

```valor
public usize connectionPoolStart(u64 key, u32 preferred_node, u32 node_count, usize slot_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `key`: u64 (by value)
> - `preferred_node`: u32 (by value)
> - `node_count`: u32 (by value)
> - `slot_count`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::net::connectionPoolStart(key, preferred_node, node_count, slot_count);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-connectionpooltryacquire"></a>

> ## `connectionPoolTryAcquire`

> Slots are scanned in deterministic NUMA-local order. Slots are scanned in deterministic NUMA-local order. The checked claim operation performs the atomic state transition.

```valor
public i32 connectionPoolTryAcquire(u64 key, u32 preferred_node, u32 node_count, usize slot_count, (usize) -> u32 slot_node, (usize) -> bool slot_is_idle, (usize) -> bool claim_idle_release, (usize) -> void receive_slot)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `key`: u64 (by value)
> - `preferred_node`: u32 (by value)
> - `node_count`: u32 (by value)
> - `slot_count`: usize (by value)
> - `receive_slot`: (usize) -> u32 slot_node, (usize) -> bool slot_is_idle, (usize) -> bool claim_idle_release, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::net::connectionPoolTryAcquire(key, preferred_node, node_count, slot_count, receive_slot);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-connectionpoolrelease"></a>

> ## `connectionPoolRelease`

> Provides the module's **connection pool release** operation. Returns `i32`.

```valor
public i32 connectionPoolRelease(usize slot, usize slot_count, u64 generation, (usize) -> u64 load_generation_acquire, (usize) -> bool release_idle)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `slot`: usize (by value)
> - `slot_count`: usize (by value)
> - `generation`: u64 (by value)
> - `release_idle`: (usize) -> u64 load_generation_acquire, (usize) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::net::connectionPoolRelease(slot, slot_count, generation, release_idle);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-saturatedaddu64"></a>

> ## `saturatedAddU64`

> Provides the module's **saturated add u64** operation. Returns `u64`.

```valor
public u64 saturatedAddU64(u64 left, u64 right, u64 limit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: u64 (by value)
> - `right`: u64 (by value)
> - `limit`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::net::saturatedAddU64(left, right, limit);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-refilltokens"></a>

> ## `refillTokens`

> Provides the module's **refill tokens** operation. Returns `u64`.

```valor
public u64 refillTokens(u64 tokens, u64 capacity, u64 rate_per_second, u64 elapsed_ns)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tokens`: u64 (by value)
> - `capacity`: u64 (by value)
> - `rate_per_second`: u64 (by value)
> - `elapsed_ns`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::net::refillTokens(tokens, capacity, rate_per_second, elapsed_ns);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-tokenbuckettryconsume"></a>

> ## `tokenBucketTryConsume`

> Provides the module's **token bucket try consume** operation. Returns `i32`.

```valor
public i32 tokenBucketTryConsume(u64 capacity, u64 rate_per_second, u64 cost, u64 now_ns, () -> u64 load_tokens_acquire, () -> u64 load_timestamp_acquire, (u64, u64, u64, u64) -> bool compare_exchange_state, (u64) -> void receive_remaining)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: u64 (by value)
> - `rate_per_second`: u64 (by value)
> - `cost`: u64 (by value)
> - `now_ns`: u64 (by value)
> - `receive_remaining`: () -> u64 load_tokens_acquire, () -> u64 load_timestamp_acquire, (u64, u64, u64, u64) -> bool compare_exchange_state, (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::net::tokenBucketTryConsume(capacity, rate_per_second, cost, now_ns, receive_remaining);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-ratelimiterbucket"></a>

> ## `rateLimiterBucket`

> Provides the module's **rate limiter bucket** operation. Returns `usize`.

```valor
public usize rateLimiterBucket(u64 key, u64 seed, usize bucket_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `key`: u64 (by value)
> - `seed`: u64 (by value)
> - `bucket_count`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::net::rateLimiterBucket(key, seed, bucket_count);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-ratelimitkey"></a>

> ## `rateLimitKey`

> Provides the module's **rate limit key** operation. Returns `i32`.

```valor
public i32 rateLimitKey(u64 key, u64 seed, usize bucket_count, u64 cost, u64 now_ns, (usize, u64, u64) -> i32 consume_bucket)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `key`: u64 (by value)
> - `seed`: u64 (by value)
> - `bucket_count`: usize (by value)
> - `cost`: u64 (by value)
> - `now_ns`: u64 (by value)
> - `consume_bucket`: (usize, u64, u64) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::net::rateLimitKey(key, seed, bucket_count, cost, now_ns, consume_bucket);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-asciialpha"></a>

> ## `asciiAlpha`

> Provides the module's **ascii alpha** operation. Returns `bool`.

```valor
public bool asciiAlpha(u8 byte)
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
> bool result = std::net::asciiAlpha(byte);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-asciidigit"></a>

> ## `asciiDigit`

> Provides the module's **ascii digit** operation. Returns `bool`.

```valor
public bool asciiDigit(u8 byte)
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
> bool result = std::net::asciiDigit(byte);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-asciilower"></a>

> ## `asciiLower`

> Provides the module's **ascii lower** operation. Returns `u8`.

```valor
public u8 asciiLower(u8 byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte`: u8 (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::net::asciiLower(byte);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-urischemebyte"></a>

> ## `uriSchemeByte`

> Provides the module's **uri scheme byte** operation. Returns `bool`.

```valor
public bool uriSchemeByte(u8 byte)
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
> bool result = std::net::uriSchemeByte(byte);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-headernamebyte"></a>

> ## `headerNameByte`

> Provides the module's **header name byte** operation. Returns `bool`.

```valor
public bool headerNameByte(u8 byte)
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
> bool result = std::net::headerNameByte(byte);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-headernamehash"></a>

> ## `headerNameHash`

> Polynomial hashing is stable across targets and lower-case folding makes header lookup case-insensitive without allocating normalized names. Polynomial hashing is stable across targets and lower-case folding makes header lookup case-insensitive without allocating normalized names.

```valor
public u64 headerNameHash(usize offset, usize length, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: usize (by value)
> - `length`: usize (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::net::headerNameHash(offset, length, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-finddelimitersimd"></a>

> ## `findDelimiterSimd`

> block_mask returns one bit per byte matching the requested delimiter. block_mask returns one bit per byte matching the requested delimiter. A backend may lower it to vector compares; the scalar fallback can implement the same checked callback contract.

```valor
public i32 findDelimiterSimd(usize offset, usize length, u8 delimiter, (usize, usize, u8) -> u64 block_mask, (usize) -> void receive_offset)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: usize (by value)
> - `length`: usize (by value)
> - `delimiter`: u8 (by value)
> - `receive_offset`: (usize, usize, u8) -> u64 block_mask, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::net::findDelimiterSimd(offset, length, delimiter, receive_offset);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-validateuri"></a>

> ## `validateUri`

> Provides the module's **validate uri** operation. Returns `i32`.

```valor
public i32 validateUri(usize length, (usize) -> u8 read_byte, (usize, usize, usize, usize, usize) -> void receive_parts)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `usize`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `usize`: usize (by value)
> - `usize`: usize (by value)
> - `receive_parts`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::net::validateUri(length, usize, usize, usize, usize, receive_parts);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-parseheaderlines"></a>

> ## `parseHeaderLines`

> Provides the module's **parse header lines** operation. Returns `i32`.

```valor
public i32 parseHeaderLines(usize offset, usize length, usize entry_capacity, (usize) -> u8 read_byte, (usize, usize, usize, usize, u64) -> void write_entry, (usize) -> void publish_count_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: usize (by value)
> - `length`: usize (by value)
> - `entry_capacity`: usize (by value)
> - `usize`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `usize`: usize (by value)
> - `usize`: usize (by value)
> - `publish_count_release`: u64) -> void write_entry, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::net::parseHeaderLines(offset, length, entry_capacity, usize, usize, usize, usize, publish_count_release);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-headerfind"></a>

> ## `headerFind`

> Provides the module's **header find** operation. Returns `i32`.

```valor
public i32 headerFind(usize count, usize name_length, (usize) -> u8 read_query_byte, (usize) -> u64 entry_hash, (usize) -> usize entry_name_length, (usize, usize) -> bool equal_folded_byte, (usize) -> void receive_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `name_length`: usize (by value)
> - `receive_index`: (usize) -> u8 read_query_byte, (usize) -> u64 entry_hash, (usize) -> usize entry_name_length, (usize, usize) -> bool equal_folded_byte, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::net::headerFind(count, name_length, receive_index);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-httpversionisvalid"></a>

> ## `httpVersionIsValid`

> Provides the module's **http version is valid** operation. Returns `bool`.

```valor
public bool httpVersionIsValid(u8 version)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `version`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::net::httpVersionIsValid(version);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-httpstatusisvalid"></a>

> ## `httpStatusIsValid`

> Provides the module's **http status is valid** operation. Returns `bool`.

```valor
public bool httpStatusIsValid(u16 status)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `status`: u16 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::net::httpStatusIsValid(status);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-tlsadvance"></a>

> ## `tlsAdvance`

> Provides the module's **tls advance** operation. Returns `i32`.

```valor
public i32 tlsAdvance(u8 state, u8 next_state, () -> i32 advance_checked)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state`: u8 (by value)
> - `next_state`: u8 (by value)
> - `advance_checked`: () -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::net::tlsAdvance(state, next_state, advance_checked);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-websocketframe"></a>

> ## `webSocketFrame`

> Provides the module's **web socket frame** operation. Returns `i32`.

```valor
public i32 webSocketFrame(usize payload_length, usize vector_count, (usize, usize) -> i32 submit_frame)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `payload_length`: usize (by value)
> - `vector_count`: usize (by value)
> - `submit_frame`: (usize, usize) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::net::webSocketFrame(payload_length, vector_count, submit_frame);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-dnsrecordtypeisknown"></a>

> ## `dnsRecordTypeIsKnown`

> Provides the module's **dns record type is known** operation. Returns `bool`.

```valor
public bool dnsRecordTypeIsKnown(u16 type_code)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `type_code`: u16 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::net::dnsRecordTypeIsKnown(type_code);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

<a id="fn-dnscacheaccept"></a>

> ## `dnsCacheAccept`

> Provides the module's **dns cache accept** operation. Returns `i32`.

```valor
public i32 dnsCacheAccept(u16 type_code, u32 ttl_seconds, u64 now_ns, (u64) -> void receive_expiry)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `type_code`: u16 (by value)
> - `ttl_seconds`: u32 (by value)
> - `now_ns`: u64 (by value)
> - `receive_expiry`: (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::net::dnsCacheAccept(type_code, ttl_seconds, now_ns, receive_expiry);
> ```

> ### SEE ALSO
>
> - [`std::net::profile`](#fn-profile)
> - [`std::net::addFits`](#fn-addfits)
> - [`std::net::multiplyFits`](#fn-multiplyfits)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Time](STD-TIME-DOC.md) · [Table of contents](standard-library/README.md) · [HTTP →](STD-HTTP-DOC.md)
