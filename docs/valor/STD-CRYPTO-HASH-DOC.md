<!-- stdlib-reference-style: modern -->
> # `std::crypto::hash`

`std::crypto::hash` cryptographic hash operations.

[Standard library](standard-library/README.md) / [Networking and security](standard-library/README.md#networking-and-security) / **Cryptographic hashing**

> **Source:** `stdlib/std/crypto/hash.valor` · **Routines:** 10 public · 22 internal

## Routines

<details>
<summary>Browse all 32 routines</summary>

- [`crypto_hash_version`](#fn-crypto-hash-version)
- [`crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
- [`mod32`](#fn-mod32)
- [`add2`](#fn-add2)
- [`add4`](#fn-add4)
- [`add5`](#fn-add5)
- [`bit_xor`](#fn-bit-xor)
- [`bit_and`](#fn-bit-and)
- [`bit_or`](#fn-bit-or)
- [`bit_not`](#fn-bit-not)
- [`pow2`](#fn-pow2)
- [`shr`](#fn-shr)
- [`rotr`](#fn-rotr)
- [`xor3`](#fn-xor3)
- [`choose`](#fn-choose)
- [`majority`](#fn-majority)
- [`big_sigma0`](#fn-big-sigma0)
- [`big_sigma1`](#fn-big-sigma1)
- [`small_sigma0`](#fn-small-sigma0)
- [`small_sigma1`](#fn-small-sigma1)
- [`round_constant`](#fn-round-constant)
- [`hash_state_init`](#fn-hash-state-init)
- [`read_be_word`](#fn-read-be-word)
- [`sha256_compress`](#fn-sha256-compress)
- [`hash_state_update`](#fn-hash-state-update)
- [`write_length_suffix`](#fn-write-length-suffix)
- [`write_digest`](#fn-write-digest)
- [`hash_state_finalize`](#fn-hash-state-finalize)
- [`ignore_counters`](#fn-ignore-counters)
- [`sha256`](#fn-sha256)
- [`cryptographic_hash`](#fn-cryptographic-hash)
- [`digest_equal`](#fn-digest-equal)

</details>

## API reference

<a id="fn-crypto-hash-version"></a>

> ## `crypto_hash_version`

> Provides the module's **crypto hash version** operation. Returns `u64`.

```valor
public u64 crypto_hash_version()
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
> u64 result = std::crypto::hash::crypto_hash_version();
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
> - [`std::crypto::hash::mod32`](#fn-mod32)
> - [`std::crypto::hash::add2`](#fn-add2)

<a id="fn-crypto-hash-byte-order"></a>

> ## `crypto_hash_byte_order`

> Provides the module's **crypto hash byte order** operation. Returns `u8`.

```valor
public u8 crypto_hash_byte_order()
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
> u8 result = std::crypto::hash::crypto_hash_byte_order();
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_version`](#fn-crypto-hash-version)
> - [`std::crypto::hash::mod32`](#fn-mod32)
> - [`std::crypto::hash::add2`](#fn-add2)

<a id="fn-mod32"></a>

> ## `mod32`

> *Internal API*
>
> Provides the module's **mod32** operation. Returns `u64`.

```valor
u64 mod32(u64 value)
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
> u64 result = std::crypto::hash::mod32(value);
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_version`](#fn-crypto-hash-version)
> - [`std::crypto::hash::crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
> - [`std::crypto::hash::add2`](#fn-add2)

<a id="fn-add2"></a>

> ## `add2`

> *Internal API*
>
> Provides the module's **add2** operation. Returns `u32`.

```valor
u32 add2(u32 a, u32 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: u32 (by value)
> - `b`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::crypto::hash::add2(a, b);
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_version`](#fn-crypto-hash-version)
> - [`std::crypto::hash::crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
> - [`std::crypto::hash::mod32`](#fn-mod32)

<a id="fn-add4"></a>

> ## `add4`

> *Internal API*
>
> Provides the module's **add4** operation. Returns `u32`.

```valor
u32 add4(u32 a, u32 b, u32 c, u32 d)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: u32 (by value)
> - `b`: u32 (by value)
> - `c`: u32 (by value)
> - `d`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::crypto::hash::add4(a, b, c, d);
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_version`](#fn-crypto-hash-version)
> - [`std::crypto::hash::crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
> - [`std::crypto::hash::mod32`](#fn-mod32)

<a id="fn-add5"></a>

> ## `add5`

> *Internal API*
>
> Provides the module's **add5** operation. Returns `u32`.

```valor
u32 add5(u32 a, u32 b, u32 c, u32 d, u32 e)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: u32 (by value)
> - `b`: u32 (by value)
> - `c`: u32 (by value)
> - `d`: u32 (by value)
> - `e`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::crypto::hash::add5(a, b, c, d, e);
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_version`](#fn-crypto-hash-version)
> - [`std::crypto::hash::crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
> - [`std::crypto::hash::mod32`](#fn-mod32)

<a id="fn-bit-xor"></a>

> ## `bit_xor`

> *Internal API*
>
> Provides the module's **bit xor** operation. Returns `u32`.

```valor
u32 bit_xor(u32 left, u32 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: u32 (by value)
> - `right`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::crypto::hash::bit_xor(left, right);
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_version`](#fn-crypto-hash-version)
> - [`std::crypto::hash::crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
> - [`std::crypto::hash::mod32`](#fn-mod32)

<a id="fn-bit-and"></a>

> ## `bit_and`

> *Internal API*
>
> Provides the module's **bit and** operation. Returns `u32`.

```valor
u32 bit_and(u32 left, u32 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: u32 (by value)
> - `right`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::crypto::hash::bit_and(left, right);
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_version`](#fn-crypto-hash-version)
> - [`std::crypto::hash::crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
> - [`std::crypto::hash::mod32`](#fn-mod32)

<a id="fn-bit-or"></a>

> ## `bit_or`

> *Internal API*
>
> Provides the module's **bit or** operation. Returns `u32`.

```valor
u32 bit_or(u32 left, u32 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: u32 (by value)
> - `right`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::crypto::hash::bit_or(left, right);
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_version`](#fn-crypto-hash-version)
> - [`std::crypto::hash::crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
> - [`std::crypto::hash::mod32`](#fn-mod32)

<a id="fn-bit-not"></a>

> ## `bit_not`

> *Internal API*
>
> Provides the module's **bit not** operation. Returns `u32`.

```valor
u32 bit_not(u32 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::crypto::hash::bit_not(value);
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_version`](#fn-crypto-hash-version)
> - [`std::crypto::hash::crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
> - [`std::crypto::hash::mod32`](#fn-mod32)

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
> u64 result = std::crypto::hash::pow2(count);
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_version`](#fn-crypto-hash-version)
> - [`std::crypto::hash::crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
> - [`std::crypto::hash::mod32`](#fn-mod32)

<a id="fn-shr"></a>

> ## `shr`

> *Internal API*
>
> Provides the module's **shr** operation. Returns `u32`.

```valor
u32 shr(u32 value, u32 count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u32 (by value)
> - `count`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::crypto::hash::shr(value, count);
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_version`](#fn-crypto-hash-version)
> - [`std::crypto::hash::crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
> - [`std::crypto::hash::mod32`](#fn-mod32)

<a id="fn-rotr"></a>

> ## `rotr`

> *Internal API*
>
> Provides the module's **rotr** operation. Returns `u32`.

```valor
u32 rotr(u32 value, u32 count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u32 (by value)
> - `count`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::crypto::hash::rotr(value, count);
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_version`](#fn-crypto-hash-version)
> - [`std::crypto::hash::crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
> - [`std::crypto::hash::mod32`](#fn-mod32)

<a id="fn-xor3"></a>

> ## `xor3`

> *Internal API*
>
> Provides the module's **xor3** operation. Returns `u32`.

```valor
u32 xor3(u32 a, u32 b, u32 c)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: u32 (by value)
> - `b`: u32 (by value)
> - `c`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::crypto::hash::xor3(a, b, c);
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_version`](#fn-crypto-hash-version)
> - [`std::crypto::hash::crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
> - [`std::crypto::hash::mod32`](#fn-mod32)

<a id="fn-choose"></a>

> ## `choose`

> *Internal API*
>
> Provides the module's **choose** operation. Returns `u32`.

```valor
u32 choose(u32 x, u32 y, u32 z)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `x`: u32 (by value)
> - `y`: u32 (by value)
> - `z`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::crypto::hash::choose(x, y, z);
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_version`](#fn-crypto-hash-version)
> - [`std::crypto::hash::crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
> - [`std::crypto::hash::mod32`](#fn-mod32)

<a id="fn-majority"></a>

> ## `majority`

> *Internal API*
>
> Provides the module's **majority** operation. Returns `u32`.

```valor
u32 majority(u32 x, u32 y, u32 z)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `x`: u32 (by value)
> - `y`: u32 (by value)
> - `z`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::crypto::hash::majority(x, y, z);
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_version`](#fn-crypto-hash-version)
> - [`std::crypto::hash::crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
> - [`std::crypto::hash::mod32`](#fn-mod32)

<a id="fn-big-sigma0"></a>

> ## `big_sigma0`

> *Internal API*
>
> Provides the module's **big sigma0** operation. Returns `u32`.

```valor
u32 big_sigma0(u32 x)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `x`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::crypto::hash::big_sigma0(x);
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_version`](#fn-crypto-hash-version)
> - [`std::crypto::hash::crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
> - [`std::crypto::hash::mod32`](#fn-mod32)

<a id="fn-big-sigma1"></a>

> ## `big_sigma1`

> *Internal API*
>
> Provides the module's **big sigma1** operation. Returns `u32`.

```valor
u32 big_sigma1(u32 x)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `x`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::crypto::hash::big_sigma1(x);
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_version`](#fn-crypto-hash-version)
> - [`std::crypto::hash::crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
> - [`std::crypto::hash::mod32`](#fn-mod32)

<a id="fn-small-sigma0"></a>

> ## `small_sigma0`

> *Internal API*
>
> Provides the module's **small sigma0** operation. Returns `u32`.

```valor
u32 small_sigma0(u32 x)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `x`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::crypto::hash::small_sigma0(x);
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_version`](#fn-crypto-hash-version)
> - [`std::crypto::hash::crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
> - [`std::crypto::hash::mod32`](#fn-mod32)

<a id="fn-small-sigma1"></a>

> ## `small_sigma1`

> *Internal API*
>
> Provides the module's **small sigma1** operation. Returns `u32`.

```valor
u32 small_sigma1(u32 x)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `x`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::crypto::hash::small_sigma1(x);
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_version`](#fn-crypto-hash-version)
> - [`std::crypto::hash::crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
> - [`std::crypto::hash::mod32`](#fn-mod32)

<a id="fn-round-constant"></a>

> ## `round_constant`

> *Internal API*
>
> Provides the module's **round constant** operation. Returns `u32`.

```valor
u32 round_constant(usize round)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `round`: usize (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::crypto::hash::round_constant(round);
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_version`](#fn-crypto-hash-version)
> - [`std::crypto::hash::crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
> - [`std::crypto::hash::mod32`](#fn-mod32)

<a id="fn-hash-state-init"></a>

> ## `hash_state_init`

> Provides the module's **hash state init** operation.

```valor
public void hash_state_init((usize, u32) -> void write_state_word, (usize, u8) -> void clear_partial_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (usize, u32) -> void write_state_word, ( (borrowed fn-ptr (callback))
> - `clear_partial_byte`: u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::crypto::hash::hash_state_init(usize, clear_partial_byte);
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_version`](#fn-crypto-hash-version)
> - [`std::crypto::hash::crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
> - [`std::crypto::hash::mod32`](#fn-mod32)

<a id="fn-read-be-word"></a>

> ## `read_be_word`

> *Internal API*
>
> Provides the module's **read be word** operation. Returns `u32`.

```valor
u32 read_be_word(usize offset, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: usize (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::crypto::hash::read_be_word(offset, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_version`](#fn-crypto-hash-version)
> - [`std::crypto::hash::crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
> - [`std::crypto::hash::mod32`](#fn-mod32)

<a id="fn-sha256-compress"></a>

> ## `sha256_compress`

> Compress one complete block. Compress one complete block. schedule is exactly 256 caller-owned bytes and is reused for every block; its linear access pattern is SIMD/cache friendly.

```valor
public void sha256_compress( (usize) -> u8 read_block_byte, (usize) -> u32 read_state_word, (usize, u32) -> void write_state_word, (usize) -> u32 read_schedule_word, (usize, u32) -> void write_schedule_word)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `write_schedule_word`: (usize) -> u8 read_block_byte, (usize) -> u32 read_state_word, (usize, u32) -> void write_state_word, (usize) -> u32 read_schedule_word, (usize, u32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::crypto::hash::sha256_compress(write_schedule_word);
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_version`](#fn-crypto-hash-version)
> - [`std::crypto::hash::crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
> - [`std::crypto::hash::mod32`](#fn-mod32)

<a id="fn-hash-state-update"></a>

> ## `hash_state_update`

> HashState::update. HashState::update. The state counters are explicit snapshot values; the resulting counters are returned only after all state words are published.

```valor
public i32 hash_state_update( u64 prior_byte_length, usize prior_buffered, bool finalized, usize input_length, (usize) -> u8 read_input_byte, (usize) -> u8 read_partial_byte, (usize, u8) -> void write_partial_byte, (usize) -> u32 read_state_word, (usize, u32) -> void write_state_word, (usize) -> u32 read_schedule_word, (usize, u32) -> void write_schedule_word, (u64, usize) -> void receive_counters)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `prior_byte_length`: u64 (by value)
> - `prior_buffered`: usize (by value)
> - `finalized`: bool (by value)
> - `input_length`: usize (by value)
> - `receive_counters`: (usize) -> u8 read_input_byte, (usize) -> u8 read_partial_byte, (usize, u8) -> void write_partial_byte, (usize) -> u32 read_state_word, (usize, u32) -> void write_state_word, (usize) -> u32 read_schedule_word, (usize, u32) -> void write_schedule_word, (u64, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::crypto::hash::hash_state_update(prior_byte_length, prior_buffered, finalized, input_length, receive_counters);
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_version`](#fn-crypto-hash-version)
> - [`std::crypto::hash::crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
> - [`std::crypto::hash::mod32`](#fn-mod32)

<a id="fn-write-length-suffix"></a>

> ## `write_length_suffix`

> *Internal API*
>
> Provides the module's **write length suffix** operation.

```valor
void write_length_suffix(u64 byte_length, usize start, (usize, u8) -> void write_partial_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: u64 (by value)
> - `start`: usize (by value)
> - `write_partial_byte`: (usize, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::crypto::hash::write_length_suffix(byte_length, start, write_partial_byte);
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_version`](#fn-crypto-hash-version)
> - [`std::crypto::hash::crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
> - [`std::crypto::hash::mod32`](#fn-mod32)

<a id="fn-write-digest"></a>

> ## `write_digest`

> Provides the module's **write digest** operation.

```valor
public void write_digest( (usize) -> u32 read_state_word, (usize, u8) -> void write_digest_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (usize) -> u32 read_state_word, ( (borrowed fn-ptr (callback))
> - `write_digest_byte`: u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::crypto::hash::write_digest(usize, write_digest_byte);
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_version`](#fn-crypto-hash-version)
> - [`std::crypto::hash::crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
> - [`std::crypto::hash::mod32`](#fn-mod32)

<a id="fn-hash-state-finalize"></a>

> ## `hash_state_finalize`

> HashState::finalize. HashState::finalize. Padding is written in place into the partial block and needs at most two compressions. The digest is emitted directly in big endian.

```valor
public i32 hash_state_finalize( u64 byte_length, usize buffered, bool finalized, (usize) -> u8 read_partial_byte, (usize, u8) -> void write_partial_byte, (usize) -> u32 read_state_word, (usize, u32) -> void write_state_word, (usize) -> u32 read_schedule_word, (usize, u32) -> void write_schedule_word, (usize, u8) -> void write_digest_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: u64 (by value)
> - `buffered`: usize (by value)
> - `finalized`: bool (by value)
> - `usize`: (usize) -> u8 read_partial_byte, ( (borrowed fn-ptr (callback))
> - `write_digest_byte`: u8) -> void write_partial_byte, (usize) -> u32 read_state_word, (usize, u32) -> void write_state_word, (usize) -> u32 read_schedule_word, (usize, u32) -> void write_schedule_word, (usize, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::crypto::hash::hash_state_finalize(byte_length, buffered, finalized, usize, write_digest_byte);
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_version`](#fn-crypto-hash-version)
> - [`std::crypto::hash::crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
> - [`std::crypto::hash::mod32`](#fn-mod32)

<a id="fn-ignore-counters"></a>

> ## `ignore_counters`

> *Internal API*
>
> Provides the module's **ignore counters** operation.

```valor
void ignore_counters(u64 byte_length, usize buffered)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: u64 (by value)
> - `buffered`: usize (by value)

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::crypto::hash::ignore_counters(byte_length, buffered);
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_version`](#fn-crypto-hash-version)
> - [`std::crypto::hash::crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
> - [`std::crypto::hash::mod32`](#fn-mod32)

<a id="fn-sha256"></a>

> ## `sha256`

> One-shot convenience API over the same caller-owned state and schedule.

```valor
public i32 sha256( usize length, (usize) -> u8 read_input_byte, (usize) -> u8 read_partial_byte, (usize, u8) -> void write_partial_byte, (usize) -> u32 read_state_word, (usize, u32) -> void write_state_word, (usize) -> u32 read_schedule_word, (usize, u32) -> void write_schedule_word, (usize, u8) -> void write_digest_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `write_digest_byte`: (usize) -> u8 read_input_byte, (usize) -> u8 read_partial_byte, (usize, u8) -> void write_partial_byte, (usize) -> u32 read_state_word, (usize, u32) -> void write_state_word, (usize) -> u32 read_schedule_word, (usize, u32) -> void write_schedule_word, (usize, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::crypto::hash::sha256(length, write_digest_byte);
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_version`](#fn-crypto-hash-version)
> - [`std::crypto::hash::crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
> - [`std::crypto::hash::mod32`](#fn-mod32)

<a id="fn-cryptographic-hash"></a>

> ## `cryptographic_hash`

> Provides the module's **cryptographic hash** operation. Returns `i32`.

```valor
public i32 cryptographic_hash( usize length, (usize) -> u8 read_input_byte, (usize) -> u8 read_partial_byte, (usize, u8) -> void write_partial_byte, (usize) -> u32 read_state_word, (usize, u32) -> void write_state_word, (usize) -> u32 read_schedule_word, (usize, u32) -> void write_schedule_word, (usize, u8) -> void write_digest_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `write_digest_byte`: (usize) -> u8 read_input_byte, (usize) -> u8 read_partial_byte, (usize, u8) -> void write_partial_byte, (usize) -> u32 read_state_word, (usize, u32) -> void write_state_word, (usize) -> u32 read_schedule_word, (usize, u32) -> void write_schedule_word, (usize, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::crypto::hash::cryptographic_hash(length, write_digest_byte);
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_version`](#fn-crypto-hash-version)
> - [`std::crypto::hash::crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
> - [`std::crypto::hash::mod32`](#fn-mod32)

<a id="fn-digest-equal"></a>

> ## `digest_equal`

> Constant-work digest comparison: all 32 bytes are read before deciding.

```valor
public bool digest_equal((usize) -> u8 read_left, (usize) -> u8 read_right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `read_right`: (usize) -> u8 read_left, (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::crypto::hash::digest_equal(read_right);
> ```

> ### SEE ALSO
>
> - [`std::crypto::hash::crypto_hash_version`](#fn-crypto-hash-version)
> - [`std::crypto::hash::crypto_hash_byte_order`](#fn-crypto-hash-byte-order)
> - [`std::crypto::hash::mod32`](#fn-mod32)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Security](STD-SECURITY-DOC.md) · [Table of contents](standard-library/README.md) · [Web profile →](WEB-DOC.md)
