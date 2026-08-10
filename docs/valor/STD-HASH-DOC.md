<!-- stdlib-reference-style: modern -->
> # `std::hash`

`std::hash` general-purpose hash operations.

[Standard library](standard-library/README.md) / [Collections and text](standard-library/README.md#collections-and-text) / **Hashing**

> **Source:** `stdlib/std/hash.valor` · **Routines:** 18 public · 20 internal

## Routines

<details>
<summary>Browse all 38 routines</summary>

- [`stable_hash_version`](#fn-stable-hash-version)
- [`stable_hash_byte_order`](#fn-stable-hash-byte-order)
- [`word64`](#fn-word64)
- [`low32`](#fn-low32)
- [`wadd`](#fn-wadd)
- [`wmul`](#fn-wmul)
- [`bxor`](#fn-bxor)
- [`pow2`](#fn-pow2)
- [`shl`](#fn-shl)
- [`shr`](#fn-shr)
- [`rotl`](#fn-rotl)
- [`avalanche`](#fn-avalanche)
- [`stable_offset0`](#fn-stable-offset0)
- [`stable_offset1`](#fn-stable-offset1)
- [`stable_prime`](#fn-stable-prime)
- [`golden`](#fn-golden)
- [`stable_step`](#fn-stable-step)
- [`alternate_byte`](#fn-alternate-byte)
- [`wrapped_index`](#fn-wrapped-index)
- [`stable_finish_lane`](#fn-stable-finish-lane)
- [`stable64`](#fn-stable64)
- [`stable128`](#fn-stable128)
- [`stable_hash_bytes`](#fn-stable-hash-bytes)
- [`stable_hash_combine`](#fn-stable-hash-combine)
- [`hash_state_init`](#fn-hash-state-init)
- [`hash_state_update`](#fn-hash-state-update)
- [`hash_state_finalize`](#fn-hash-state-finalize)
- [`update`](#fn-update)
- [`finalize`](#fn-finalize)
- [`keyed_mix`](#fn-keyed-mix)
- [`randomized_hash`](#fn-randomized-hash)
- [`process_seeded_hash`](#fn-process-seeded-hash)
- [`seeded_slot_hash`](#fn-seeded-slot-hash)
- [`perfect_hash_build`](#fn-perfect-hash-build)
- [`perfect_hash_lookup`](#fn-perfect-hash-lookup)
- [`bloom_hashes`](#fn-bloom-hashes)
- [`consistent_hash`](#fn-consistent-hash)
- [`rendezvous_hash`](#fn-rendezvous-hash)

</details>

## API reference

<a id="fn-stable-hash-version"></a>

> ## `stable_hash_version`

> Provides the module's **stable hash version** operation. Returns `u64`.

```valor
public u64 stable_hash_version()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::hash::stable_hash_version();
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)
> - [`std::hash::low32`](#fn-low32)

<a id="fn-stable-hash-byte-order"></a>

> ## `stable_hash_byte_order`

> Provides the module's **stable hash byte order** operation. Returns `u8`.

```valor
public u8 stable_hash_byte_order()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::hash::stable_hash_byte_order();
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::word64`](#fn-word64)
> - [`std::hash::low32`](#fn-low32)

<a id="fn-word64"></a>

> ## `word64`

> *Internal API*
>
> Provides the module's **word64** operation. Returns `u64`.

```valor
u64 word64(u32 high, u32 low)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `high`: u32 (by value)
> - `low`: u32 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::hash::word64(high, low);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::low32`](#fn-low32)

<a id="fn-low32"></a>

> ## `low32`

> *Internal API*
>
> Provides the module's **low32** operation. Returns `u64`.

```valor
u64 low32(u64 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::hash::low32(value);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-wadd"></a>

> ## `wadd`

> *Internal API*
>
> Provides the module's **wadd** operation. Returns `u64`.

```valor
u64 wadd(u64 left, u64 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: u64 (by value)
> - `right`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::hash::wadd(left, right);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-wmul"></a>

> ## `wmul`

> *Internal API*
>
> Provides the module's **wmul** operation. Returns `u64`.

```valor
u64 wmul(u64 left, u64 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: u64 (by value)
> - `right`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::hash::wmul(left, right);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-bxor"></a>

> ## `bxor`

> *Internal API*
>
> Provides the module's **bxor** operation. Returns `u64`.

```valor
u64 bxor(u64 left, u64 right)
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
> u64 result = std::hash::bxor(left, right);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-pow2"></a>

> ## `pow2`

> *Internal API*
>
> Provides the module's **pow2** operation. Returns `u64`.

```valor
u64 pow2(u32 count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: u32 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::hash::pow2(count);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-shl"></a>

> ## `shl`

> *Internal API*
>
> Provides the module's **shl** operation. Returns `u64`.

```valor
u64 shl(u64 value, u32 count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)
> - `count`: u32 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::hash::shl(value, count);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-shr"></a>

> ## `shr`

> *Internal API*
>
> Provides the module's **shr** operation. Returns `u64`.

```valor
u64 shr(u64 value, u32 count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)
> - `count`: u32 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::hash::shr(value, count);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-rotl"></a>

> ## `rotl`

> *Internal API*
>
> Provides the module's **rotl** operation. Returns `u64`.

```valor
u64 rotl(u64 value, u32 count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)
> - `count`: u32 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::hash::rotl(value, count);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-avalanche"></a>

> ## `avalanche`

> *Internal API*
>
> Provides the module's **avalanche** operation. Returns `u64`.

```valor
u64 avalanche(u64 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::hash::avalanche(value);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-stable-offset0"></a>

> ## `stable_offset0`

> *Internal API*
>
> Provides the module's **stable offset0** operation. Returns `u64`.

```valor
u64 stable_offset0()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::hash::stable_offset0();
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-stable-offset1"></a>

> ## `stable_offset1`

> *Internal API*
>
> Provides the module's **stable offset1** operation. Returns `u64`.

```valor
u64 stable_offset1()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::hash::stable_offset1();
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-stable-prime"></a>

> ## `stable_prime`

> *Internal API*
>
> Provides the module's **stable prime** operation. Returns `u64`.

```valor
u64 stable_prime()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::hash::stable_prime();
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-golden"></a>

> ## `golden`

> *Internal API*
>
> Provides the module's **golden** operation. Returns `u64`.

```valor
u64 golden()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::hash::golden();
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-stable-step"></a>

> ## `stable_step`

> *Internal API*
>
> Provides the module's **stable step** operation. Returns `u64`.

```valor
u64 stable_step(u64 lane, u8 byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `lane`: u64 (by value)
> - `byte`: u8 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::hash::stable_step(lane, byte);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-alternate-byte"></a>

> ## `alternate_byte`

> *Internal API*
>
> Provides the module's **alternate byte** operation. Returns `u8`.

```valor
u8 alternate_byte(u8 byte)
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
> u8 result = std::hash::alternate_byte(byte);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-wrapped-index"></a>

> ## `wrapped_index`

> *Internal API*
>
> Provides the module's **wrapped index** operation. Returns `usize`.

```valor
usize wrapped_index(u64 value, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::hash::wrapped_index(value, capacity);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-stable-finish-lane"></a>

> ## `stable_finish_lane`

> *Internal API*
>
> Provides the module's **stable finish lane** operation. Returns `u64`.

```valor
u64 stable_finish_lane(u64 lane, u64 length, u64 domain)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `lane`: u64 (by value)
> - `length`: u64 (by value)
> - `domain`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::hash::stable_finish_lane(lane, length, domain);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-stable64"></a>

> ## `stable64`

> Provides the module's **stable64** operation. Returns `u64`.

```valor
public u64 stable64(usize length, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::hash::stable64(length, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-stable128"></a>

> ## `stable128`

> Provides the module's **stable128** operation.

```valor
public void stable128(usize length, (usize) -> u8 read_byte, (u64, u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `u64`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `receive`: u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::hash::stable128(length, u64, receive);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-stable-hash-bytes"></a>

> ## `stable_hash_bytes`

> Provides the module's **stable hash bytes** operation. Returns `u64`.

```valor
public u64 stable_hash_bytes(usize length, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::hash::stable_hash_bytes(length, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-stable-hash-combine"></a>

> ## `stable_hash_combine`

> Length-delimited combining prevents ambiguous concatenations. Length-delimited combining prevents ambiguous concatenations. The caller supplies already-stable component hashes; neither addresses nor host byte order participate.

```valor
public u64 stable_hash_combine(u64 accumulated, u64 component, u64 component_byte_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `accumulated`: u64 (by value)
> - `component`: u64 (by value)
> - `component_byte_length`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::hash::stable_hash_combine(accumulated, component, component_byte_length);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-hash-state-init"></a>

> ## `hash_state_init`

> Provides the module's **hash state init** operation.

```valor
public void hash_state_init((u64, u64, u64, u64) -> void receive_state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `receive_state`: (u64, u64, u64, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::hash::hash_state_init(receive_state);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-hash-state-update"></a>

> ## `hash_state_update`

> HashState::update is represented as a value-state transform because Valor v0.1 has no implicit mutable receiver. HashState::update is represented as a value-state transform because Valor v0.1 has no implicit mutable receiver. State leaves through receive_state.

```valor
public i32 hash_state_update( u64 state_lane0, u64 state_lane1, u64 prior_length, u64 format_version, usize length, (usize) -> u8 read_byte, (u64, u64, u64, u64) -> void receive_state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state_lane0`: u64 (by value)
> - `state_lane1`: u64 (by value)
> - `prior_length`: u64 (by value)
> - `format_version`: u64 (by value)
> - `length`: usize (by value)
> - `u64`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `u64`: u64 (by value)
> - `u64`: u64 (by value)
> - `receive_state`: u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::hash::hash_state_update(state_lane0, state_lane1, prior_length, format_version, length, u64, u64, u64, receive_state);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-hash-state-finalize"></a>

> ## `hash_state_finalize`

> HashState::finalize is non-mutating and may safely be called by many readers after an immutable state snapshot has been published. HashState::finalize is non-mutating and may safely be called by many readers after an immutable state snapshot has been published.

```valor
public i32 hash_state_finalize( u64 state_lane0, u64 state_lane1, u64 byte_length, u64 format_version, (u64, u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state_lane0`: u64 (by value)
> - `state_lane1`: u64 (by value)
> - `byte_length`: u64 (by value)
> - `format_version`: u64 (by value)
> - `receive`: (u64, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::hash::hash_state_finalize(state_lane0, state_lane1, byte_length, format_version, receive);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-update"></a>

> ## `update`

> Short aliases make the receiver operations read naturally after importing HashState: update(...) and finalize(...). Short aliases make the receiver operations read naturally after importing HashState: update(...) and finalize(...).

```valor
public i32 update( u64 state_lane0, u64 state_lane1, u64 prior_length, u64 format_version, usize length, (usize) -> u8 read_byte, (u64, u64, u64, u64) -> void receive_state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state_lane0`: u64 (by value)
> - `state_lane1`: u64 (by value)
> - `prior_length`: u64 (by value)
> - `format_version`: u64 (by value)
> - `length`: usize (by value)
> - `u64`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `u64`: u64 (by value)
> - `u64`: u64 (by value)
> - `receive_state`: u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::hash::update(state_lane0, state_lane1, prior_length, format_version, length, u64, u64, u64, receive_state);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-finalize"></a>

> ## `finalize`

> Provides the module's **finalize** operation. Returns `i32`.

```valor
public i32 finalize( u64 state_lane0, u64 state_lane1, u64 byte_length, u64 format_version, (u64, u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state_lane0`: u64 (by value)
> - `state_lane1`: u64 (by value)
> - `byte_length`: u64 (by value)
> - `format_version`: u64 (by value)
> - `receive`: (u64, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::hash::finalize(state_lane0, state_lane1, byte_length, format_version, receive);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-keyed-mix"></a>

> ## `keyed_mix`

> *Internal API*
>
> Keyed avalanche used by randomized hashing and routing. Keyed avalanche used by randomized hashing and routing. This is a compact SipHash-derived compression with a process-unique 128-bit key.

```valor
u64 keyed_mix(u64 message, u64 key0, u64 key1, u64 domain)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `message`: u64 (by value)
> - `key0`: u64 (by value)
> - `key1`: u64 (by value)
> - `domain`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::hash::keyed_mix(message, key0, key1, domain);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-randomized-hash"></a>

> ## `randomized_hash`

> Provides the module's **randomized hash** operation. Returns `u64`.

```valor
public u64 randomized_hash(usize length, u64 process_key0, u64 process_key1, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `process_key0`: u64 (by value)
> - `process_key1`: u64 (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::hash::randomized_hash(length, process_key0, process_key1, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-process-seeded-hash"></a>

> ## `process_seeded_hash`

> The epoch must change whenever process key material is regenerated. The epoch must change whenever process key material is regenerated. It is mixed into the key and output but is not a persisted format identifier.

```valor
public u64 process_seeded_hash( usize length, u64 process_seed, u64 process_epoch, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `process_seed`: u64 (by value)
> - `process_epoch`: u64 (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::hash::process_seeded_hash(length, process_seed, process_epoch, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-seeded-slot-hash"></a>

> ## `seeded_slot_hash`

> *Internal API*
>
> Provides the module's **seeded slot hash** operation. Returns `u64`.

```valor
u64 seeded_slot_hash(u64 stable_hash, u64 seed)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `stable_hash`: u64 (by value)
> - `seed`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::hash::seeded_slot_hash(stable_hash, seed);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-perfect-hash-build"></a>

> ## `perfect_hash_build`

> Provides the module's **perfect hash build** operation. Returns `i32`.

```valor
public i32 perfect_hash_build( usize key_count, usize capacity, usize max_seed_attempts, (usize) -> u64 read_stable_hash, (usize, u64) -> void write_slot_hash, (u64) -> void receive_seed)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^3)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `key_count`: usize (by value)
> - `capacity`: usize (by value)
> - `max_seed_attempts`: usize (by value)
> - `usize`: (usize) -> u64 read_stable_hash, ( (borrowed fn-ptr (callback))
> - `receive_seed`: u64) -> void write_slot_hash, (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::hash::perfect_hash_build(key_count, capacity, max_seed_attempts, usize, receive_seed);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-perfect-hash-lookup"></a>

> ## `perfect_hash_lookup`

> Provides the module's **perfect hash lookup** operation. Returns `i32`.

```valor
public i32 perfect_hash_lookup( u64 stable_hash, usize capacity, u64 seed, (usize) -> u64 read_slot_hash, (usize) -> void receive_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `stable_hash`: u64 (by value)
> - `capacity`: usize (by value)
> - `seed`: u64 (by value)
> - `receive_index`: (usize) -> u64 read_slot_hash, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::hash::perfect_hash_lookup(stable_hash, capacity, seed, receive_index);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-bloom-hashes"></a>

> ## `bloom_hashes`

> Kirsch-Mitzenmacher double hashing: k Bloom positions from two independent stable lanes, streamed directly to the caller without an index array. Kirsch-Mitzenmacher double hashing: k Bloom positions from two independent stable lanes, streamed directly to the caller without an index array.

```valor
public i32 bloom_hashes( u64 hash0, u64 hash1, usize bit_count, usize hash_count, (usize, usize) -> void receive_position)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash0`: u64 (by value)
> - `hash1`: u64 (by value)
> - `bit_count`: usize (by value)
> - `hash_count`: usize (by value)
> - `receive_position`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::hash::bloom_hashes(hash0, hash1, bit_count, hash_count, receive_position);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-consistent-hash"></a>

> ## `consistent_hash`

> Jump consistent hash. Jump consistent hash. Only integer arithmetic is used, so routing is stable across targets and moves approximately 1/N keys when a bucket is added.

```valor
public usize consistent_hash(u64 key_hash, usize node_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `key_hash`: u64 (by value)
> - `node_count`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::hash::consistent_hash(key_hash, node_count);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

<a id="fn-rendezvous-hash"></a>

> ## `rendezvous_hash`

> Highest-random-weight rendezvous hashing. Highest-random-weight rendezvous hashing. Node identity, not its address or iteration position, determines the score; ties select the lowest index.

```valor
public usize rendezvous_hash( u64 key_hash, usize node_count, (usize) -> u64 read_stable_node_id)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `key_hash`: u64 (by value)
> - `node_count`: usize (by value)
> - `read_stable_node_id`: (usize) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::hash::rendezvous_hash(key_hash, node_count, read_stable_node_id);
> ```

> ### SEE ALSO
>
> - [`std::hash::stable_hash_version`](#fn-stable-hash-version)
> - [`std::hash::stable_hash_byte_order`](#fn-stable-hash-byte-order)
> - [`std::hash::word64`](#fn-word64)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Data](STD-DATA-DOC.md) · [Table of contents](standard-library/README.md) · [Iterators →](STD-ITER-DOC.md)
