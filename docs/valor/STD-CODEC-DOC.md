<!-- stdlib-reference-style: modern -->
> # `std::codec`

`std::codec` encoding and decoding primitives.

[Standard library](standard-library/README.md) / [Collections and text](standard-library/README.md#collections-and-text) / **Codecs**

> **Source:** `stdlib/std/codec.valor` · **Routines:** 25 public · 7 internal

## Routines

<details>
<summary>Browse all 32 routines</summary>

- [`codec_version`](#fn-codec-version)
- [`codec_endianness`](#fn-codec-endianness)
- [`modulo`](#fn-modulo)
- [`pow2_u64`](#fn-pow2-u64)
- [`pow2_usize`](#fn-pow2-usize)
- [`bit_length`](#fn-bit-length)
- [`magnitude`](#fn-magnitude)
- [`round_to_i64`](#fn-round-to-i64)
- [`encode_varint`](#fn-encode-varint)
- [`decode_varint`](#fn-decode-varint)
- [`encode_zigzag`](#fn-encode-zigzag)
- [`decode_zigzag`](#fn-decode-zigzag)
- [`delta_encode`](#fn-delta-encode)
- [`delta_decode`](#fn-delta-decode)
- [`run_length_encode`](#fn-run-length-encode)
- [`run_length_decode`](#fn-run-length-decode)
- [`dictionary_encode`](#fn-dictionary-encode)
- [`dictionary_decode`](#fn-dictionary-decode)
- [`bit_pack_word_count`](#fn-bit-pack-word-count)
- [`bit_pack`](#fn-bit-pack)
- [`bit_unpack`](#fn-bit-unpack)
- [`frame_of_reference_encode`](#fn-frame-of-reference-encode)
- [`frame_of_reference_decode`](#fn-frame-of-reference-decode)
- [`sparse_index_encode`](#fn-sparse-index-encode)
- [`sparse_index_decode`](#fn-sparse-index-decode)
- [`block_float_encode`](#fn-block-float-encode)
- [`block_float_decode`](#fn-block-float-decode)
- [`tile_count`](#fn-tile-count)
- [`tensor_tile_encode`](#fn-tensor-tile-encode)
- [`tensor_tile_decode`](#fn-tensor-tile-decode)
- [`checksum`](#fn-checksum)
- [`canonical_hash`](#fn-canonical-hash)

</details>

## API reference

<a id="fn-codec-version"></a>

> ## `codec_version`

> The stable version stamped into self-describing blocks.

```valor
public u64 codec_version()
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
> u64 result = std::codec::codec_version();
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_endianness`](#fn-codec-endianness)
> - [`std::codec::modulo`](#fn-modulo)
> - [`std::codec::pow2_u64`](#fn-pow2-u64)

<a id="fn-codec-endianness"></a>

> ## `codec_endianness`

> The specified endianness code for this module's serialised integers.

```valor
public u8 codec_endianness()
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
> u8 result = std::codec::codec_endianness();
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_version`](#fn-codec-version)
> - [`std::codec::modulo`](#fn-modulo)
> - [`std::codec::pow2_u64`](#fn-pow2-u64)

<a id="fn-modulo"></a>

> ## `modulo`

> *Internal API*
>
> Integer modulo (there is no `%` operator); delegates to the sealed builtin.

```valor
u64 modulo(u64 value, u64 divisor)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)
> - `divisor`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::codec::modulo(value, divisor);
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_version`](#fn-codec-version)
> - [`std::codec::codec_endianness`](#fn-codec-endianness)
> - [`std::codec::pow2_u64`](#fn-pow2-u64)

<a id="fn-pow2-u64"></a>

> ## `pow2_u64`

> *Internal API*
>
> 2^exponent as a u64 (exponent <= 63; 2^64 wraps to 0, so callers special-case a full 64-bit width). 2^exponent as a u64 (exponent <= 63; 2^64 wraps to 0, so callers special-case a full 64-bit width).  Multiply-doubling, no shift operator.

```valor
u64 pow2_u64(u32 exponent)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `exponent`: u32 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::codec::pow2_u64(exponent);
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_version`](#fn-codec-version)
> - [`std::codec::codec_endianness`](#fn-codec-endianness)
> - [`std::codec::modulo`](#fn-modulo)

<a id="fn-pow2-usize"></a>

> ## `pow2_usize`

> *Internal API*
>
> 2^exponent as a usize (exponent < 63), used to size word streams.

```valor
usize pow2_usize(u32 exponent)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `exponent`: u32 (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::codec::pow2_usize(exponent);
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_version`](#fn-codec-version)
> - [`std::codec::codec_endianness`](#fn-codec-endianness)
> - [`std::codec::modulo`](#fn-modulo)

<a id="fn-bit-length"></a>

> ## `bit_length`

> *Internal API*
>
> Number of significant bits in `value` (0 for value 0). Number of significant bits in `value` (0 for value 0).  This is the minimal fixed width that represents every residual in a frame-of-reference block.

```valor
u32 bit_length(u64 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::codec::bit_length(value);
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_version`](#fn-codec-version)
> - [`std::codec::codec_endianness`](#fn-codec-endianness)
> - [`std::codec::modulo`](#fn-modulo)

<a id="fn-magnitude"></a>

> ## `magnitude`

> *Internal API*
>
> Non-negative magnitude of a double without a library call (a select, not a branch on the value's bits). Non-negative magnitude of a double without a library call (a select, not a branch on the value's bits).  Written as a direct compare exactly as std::stream and std::sparse do; float ordering here is parse-stable.

```valor
f64 magnitude(f64 value)
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
> f64 result = std::codec::magnitude(value);
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_version`](#fn-codec-version)
> - [`std::codec::codec_endianness`](#fn-codec-endianness)
> - [`std::codec::modulo`](#fn-modulo)

<a id="fn-round-to-i64"></a>

> ## `round_to_i64`

> *Internal API*
>
> Round a double to the nearest i64, half away from zero, using only a truncating float->int cast (`as i64` truncates toward zero). Round a double to the nearest i64, half away from zero, using only a truncating float->int cast (`as i64` truncates toward zero).  Deterministic for a fixed input; no libm rint dependency.

```valor
i64 round_to_i64(f64 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: f64 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::codec::round_to_i64(value);
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_version`](#fn-codec-version)
> - [`std::codec::codec_endianness`](#fn-codec-endianness)
> - [`std::codec::modulo`](#fn-modulo)

<a id="fn-encode-varint"></a>

> ## `encode_varint`

> Emit `value` as a LEB128 byte sequence through `put_byte`, delivering the byte count through `receive_len`. Emit `value` as a LEB128 byte sequence through `put_byte`, delivering the byte count through `receive_len`.  Refuses if the caller's byte capacity is short, leaving no partial write beyond what the sink already accepted per index.

```valor
public i32 encode_varint(u64 value, usize byte_capacity, (usize, u8) -> void put_byte, (usize) -> void receive_len)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)
> - `byte_capacity`: usize (by value)
> - `receive_len`: (usize, u8) -> void put_byte, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::codec::encode_varint(value, byte_capacity, receive_len);
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_version`](#fn-codec-version)
> - [`std::codec::codec_endianness`](#fn-codec-endianness)
> - [`std::codec::modulo`](#fn-modulo)

<a id="fn-decode-varint"></a>

> ## `decode_varint`

> Read a LEB128 varint from up to `avail` bytes and deliver (value, bytes_used) through `receive`. Read a LEB128 varint from up to `avail` bytes and deliver (value, bytes_used) through `receive`.  A continuation byte with no successor, or a run longer than MAX_VARINT_BYTES, is rejected as ERR_TRUNCATED -- the decoder never reads past `avail` and never loops unbounded.

```valor
public i32 decode_varint(usize avail, (usize) -> u8 get_byte, (u64, usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `avail`: usize (by value)
> - `u64`: (usize) -> u8 get_byte, ( (borrowed fn-ptr (callback))
> - `receive`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::codec::decode_varint(avail, u64, receive);
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_version`](#fn-codec-version)
> - [`std::codec::codec_endianness`](#fn-codec-endianness)
> - [`std::codec::modulo`](#fn-modulo)

<a id="fn-encode-zigzag"></a>

> ## `encode_zigzag`

> Fold a signed i64 into an unsigned u64 so that small-magnitude values map to small unsigned codes (ideal varint input). Fold a signed i64 into an unsigned u64 so that small-magnitude values map to small unsigned codes (ideal varint input).  Overflow-safe at i64 min: for a negative n, -(n+1) lies in [0, 2^63-1] and never underflows.

```valor
public u64 encode_zigzag(i64 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: i64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::codec::encode_zigzag(value);
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_version`](#fn-codec-version)
> - [`std::codec::codec_endianness`](#fn-codec-endianness)
> - [`std::codec::modulo`](#fn-modulo)

<a id="fn-decode-zigzag"></a>

> ## `decode_zigzag`

> Inverse of encode_zigzag. Inverse of encode_zigzag.  Even codes decode to non-negative values, odd codes to negatives; exact across the full u64 domain including 2^64-1 -> i64 min.

```valor
public i64 decode_zigzag(u64 code)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `code`: u64 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::codec::decode_zigzag(code);
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_version`](#fn-codec-version)
> - [`std::codec::codec_endianness`](#fn-codec-endianness)
> - [`std::codec::modulo`](#fn-modulo)

<a id="fn-delta-encode"></a>

> ## `delta_encode`

> Replace a signed sequence with its first differences: out[0] = in[0], out[i] = in[i] - in[i-1]. Replace a signed sequence with its first differences: out[0] = in[0], out[i] = in[i] - in[i-1].  One forward sweep, O(1) state.  The transform is its own small wire format; pair it with zigzag+varint for a compact stream.

```valor
public i32 delta_encode(usize n, (usize) -> i64 read, usize out_capacity, (usize, i64) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `usize`: (usize) -> i64 read, usize out_capacity, ( (borrowed fn-ptr (callback))
> - `write`: i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::codec::delta_encode(n, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_version`](#fn-codec-version)
> - [`std::codec::codec_endianness`](#fn-codec-endianness)
> - [`std::codec::modulo`](#fn-modulo)

<a id="fn-delta-decode"></a>

> ## `delta_decode`

> Inverse prefix sum: out[0] = in[0], out[i] = out[i-1] + in[i]. Inverse prefix sum: out[0] = in[0], out[i] = out[i-1] + in[i].  The running value is kept in a register, so decoding needs no scratch and no read-back of the output -- the decoder cannot be made to allocate.

```valor
public i32 delta_decode(usize n, (usize) -> i64 read, usize out_capacity, (usize, i64) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `usize`: (usize) -> i64 read, usize out_capacity, ( (borrowed fn-ptr (callback))
> - `write`: i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::codec::delta_decode(n, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_version`](#fn-codec-version)
> - [`std::codec::codec_endianness`](#fn-codec-endianness)
> - [`std::codec::modulo`](#fn-modulo)

<a id="fn-run-length-encode"></a>

> ## `run_length_encode`

> Collapse maximal runs of equal u64 values into (value, count) pairs written to two parallel sinks; the number of runs leaves through `receive_runs`. Collapse maximal runs of equal u64 values into (value, count) pairs written to two parallel sinks; the number of runs leaves through `receive_runs`.  Bounded by `pair_capacity`, so a low-entropy or adversarial input cannot overrun.

```valor
public i32 run_length_encode(usize n, (usize) -> u64 read, usize pair_capacity, (usize, u64) -> void write_value, (usize, u64) -> void write_count, (usize) -> void receive_runs)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `usize`: (usize) -> u64 read, usize pair_capacity, ( (borrowed fn-ptr (callback))
> - `receive_runs`: u64) -> void write_value, (usize, u64) -> void write_count, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::codec::run_length_encode(n, usize, receive_runs);
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_version`](#fn-codec-version)
> - [`std::codec::codec_endianness`](#fn-codec-endianness)
> - [`std::codec::modulo`](#fn-modulo)

<a id="fn-run-length-decode"></a>

> ## `run_length_decode`

> Expand (value, count) pairs back into a flat sequence. Expand (value, count) pairs back into a flat sequence.  The total length is summed first and checked against `out_capacity` (ERR_WORKSPACE) so expansion can never allocate or write beyond the caller's declared buffer.

```valor
public i32 run_length_decode(usize runs, (usize) -> u64 read_value, (usize) -> u64 read_count, usize out_capacity, (usize, u64) -> void write, (usize) -> void receive_len)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `runs`: usize (by value)
> - `receive_len`: (usize) -> u64 read_value, (usize) -> u64 read_count, usize out_capacity, (usize, u64) -> void write, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::codec::run_length_decode(runs, receive_len);
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_version`](#fn-codec-version)
> - [`std::codec::codec_endianness`](#fn-codec-endianness)
> - [`std::codec::modulo`](#fn-modulo)

<a id="fn-dictionary-encode"></a>

> ## `dictionary_encode`

> Map each input symbol to a compact u32 code, building the dictionary in strict first-occurrence order (deterministic construction contract). Map each input symbol to a compact u32 code, building the dictionary in strict first-occurrence order (deterministic construction contract).  The dictionary grows in caller storage reached through read_dict/write_dict; a fresh symbol past `dict_capacity` returns ERR_WORKSPACE rather than growing unbounded.  The linear membership scan keeps the dictionary contiguous and cache-resident.

```valor
public i32 dictionary_encode(usize n, (usize) -> u64 read, usize dict_capacity, (usize) -> u64 read_dict, (usize, u64) -> void write_dict, (usize, u32) -> void write_code, (usize) -> void receive_dict_size)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `receive_dict_size`: (usize) -> u64 read, usize dict_capacity, (usize) -> u64 read_dict, (usize, u64) -> void write_dict, (usize, u32) -> void write_code, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::codec::dictionary_encode(n, receive_dict_size);
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_version`](#fn-codec-version)
> - [`std::codec::codec_endianness`](#fn-codec-endianness)
> - [`std::codec::modulo`](#fn-modulo)

<a id="fn-dictionary-decode"></a>

> ## `dictionary_decode`

> Reconstruct the symbol sequence from codes and the dictionary. Reconstruct the symbol sequence from codes and the dictionary.  Each code is bounds-checked against `dict_size` (ERR_FORMAT) before it indexes the dictionary, and the output is bounded by `out_capacity` (ERR_WORKSPACE).

```valor
public i32 dictionary_decode(usize n, (usize) -> u32 read_code, usize dict_size, (usize) -> u64 read_dict, usize out_capacity, (usize, u64) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `write`: (usize) -> u32 read_code, usize dict_size, (usize) -> u64 read_dict, usize out_capacity, (usize, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::codec::dictionary_decode(n, write);
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_version`](#fn-codec-version)
> - [`std::codec::codec_endianness`](#fn-codec-endianness)
> - [`std::codec::modulo`](#fn-modulo)

<a id="fn-bit-pack-word-count"></a>

> ## `bit_pack_word_count`

> Number of 64-bit words needed to hold `n` values of `bit_width` bits.

```valor
public usize bit_pack_word_count(usize n, u32 bit_width)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `bit_width`: u32 (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::codec::bit_pack_word_count(n, bit_width);
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_version`](#fn-codec-version)
> - [`std::codec::codec_endianness`](#fn-codec-endianness)
> - [`std::codec::modulo`](#fn-modulo)

<a id="fn-bit-pack"></a>

> ## `bit_pack`

> Pack `n` unsigned values, each `bit_width` bits (1..64), into a word stream. Pack `n` unsigned values, each `bit_width` bits (1..64), into a word stream. Values wider than `bit_width` are truncated to that width (mod 2^width), which keeps the format total; the packed word count is delivered through `receive_words`.

```valor
public i32 bit_pack(usize n, u32 bit_width, (usize) -> u64 read, usize word_capacity, (usize, u64) -> void write_word, (usize) -> void receive_words)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `bit_width`: u32 (by value)
> - `usize`: (usize) -> u64 read, usize word_capacity, ( (borrowed fn-ptr (callback))
> - `receive_words`: u64) -> void write_word, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::codec::bit_pack(n, bit_width, usize, receive_words);
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_version`](#fn-codec-version)
> - [`std::codec::codec_endianness`](#fn-codec-endianness)
> - [`std::codec::modulo`](#fn-modulo)

<a id="fn-bit-unpack"></a>

> ## `bit_unpack`

> Recover `n` values of `bit_width` bits from a packed word stream. Recover `n` values of `bit_width` bits from a packed word stream.  The required word count is derived from (n, bit_width) and checked against `word_count` (ERR_TRUNCATED) before any read, and the output is bounded by `out_capacity`.

```valor
public i32 bit_unpack(usize n, u32 bit_width, usize word_count, (usize) -> u64 read_word, usize out_capacity, (usize, u64) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `bit_width`: u32 (by value)
> - `word_count`: usize (by value)
> - `usize`: (usize) -> u64 read_word, usize out_capacity, ( (borrowed fn-ptr (callback))
> - `write`: u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::codec::bit_unpack(n, bit_width, word_count, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_version`](#fn-codec-version)
> - [`std::codec::codec_endianness`](#fn-codec-endianness)
> - [`std::codec::modulo`](#fn-modulo)

<a id="fn-frame-of-reference-encode"></a>

> ## `frame_of_reference_encode`

> Subtract the block minimum (the reference) from every value and bit-pack the non-negative residuals at the minimal width the largest residual needs. Subtract the block minimum (the reference) from every value and bit-pack the non-negative residuals at the minimal width the largest residual needs.  The output is a self-describing word block: a 5-word header (magic, version, reference, width, count) followed by the packed residuals.  `receive_words` reports the total word length.

```valor
public i32 frame_of_reference_encode(usize n, (usize) -> u64 read, usize word_capacity, (usize, u64) -> void write_word, (usize) -> void receive_words)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `usize`: (usize) -> u64 read, usize word_capacity, ( (borrowed fn-ptr (callback))
> - `receive_words`: u64) -> void write_word, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::codec::frame_of_reference_encode(n, usize, receive_words);
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_version`](#fn-codec-version)
> - [`std::codec::codec_endianness`](#fn-codec-endianness)
> - [`std::codec::modulo`](#fn-modulo)

<a id="fn-frame-of-reference-decode"></a>

> ## `frame_of_reference_decode`

> Validate the 5-word header (magic -> ERR_FORMAT, version -> ERR_VERSION), unpack the residuals, and add back the reference. Validate the 5-word header (magic -> ERR_FORMAT, version -> ERR_VERSION), unpack the residuals, and add back the reference.  The residual word span is checked against `word_count` (ERR_TRUNCATED) and the element count against `out_capacity` (ERR_WORKSPACE) before any value is written -- a corrupt header can never drive an unbounded or out-of-range decode.  The recovered element count is delivered through `receive_len`.

```valor
public i32 frame_of_reference_decode(usize word_count, (usize) -> u64 read_word, usize out_capacity, (usize, u64) -> void write, (usize) -> void receive_len)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `word_count`: usize (by value)
> - `usize`: (usize) -> u64 read_word, usize out_capacity, ( (borrowed fn-ptr (callback))
> - `receive_len`: u64) -> void write, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::codec::frame_of_reference_decode(word_count, usize, receive_len);
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_version`](#fn-codec-version)
> - [`std::codec::codec_endianness`](#fn-codec-endianness)
> - [`std::codec::modulo`](#fn-modulo)

<a id="fn-sparse-index-encode"></a>

> ## `sparse_index_encode`

> Encode a dense vector as the ascending list of its nonzero positions and their values. Encode a dense vector as the ascending list of its nonzero positions and their values.  Two parallel sinks receive indices (u32) and values (u64); the count of stored entries leaves through `receive_nnz`.  Bounded by `pair_capacity`.

```valor
public i32 sparse_index_encode(usize n, (usize) -> u64 read, usize pair_capacity, (usize, u32) -> void write_index, (usize, u64) -> void write_value, (usize) -> void receive_nnz)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `usize`: (usize) -> u64 read, usize pair_capacity, ( (borrowed fn-ptr (callback))
> - `receive_nnz`: u32) -> void write_index, (usize, u64) -> void write_value, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::codec::sparse_index_encode(n, usize, receive_nnz);
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_version`](#fn-codec-version)
> - [`std::codec::codec_endianness`](#fn-codec-endianness)
> - [`std::codec::modulo`](#fn-modulo)

<a id="fn-sparse-index-decode"></a>

> ## `sparse_index_decode`

> Scatter (index, value) pairs back into a dense vector of `dense_len`, filling the gaps with zero. Scatter (index, value) pairs back into a dense vector of `dense_len`, filling the gaps with zero.  Indices must be strictly ascending (ERR_UNSORTED, which also guarantees no duplicate destination) and in range (ERR_RANGE); both are checked against `dense_len` so the scatter stays inside the caller's buffer.

```valor
public i32 sparse_index_decode(usize nnz, (usize) -> u32 read_index, (usize) -> u64 read_value, usize dense_len, (usize, u64) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `nnz`: usize (by value)
> - `write`: (usize) -> u32 read_index, (usize) -> u64 read_value, usize dense_len, (usize, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::codec::sparse_index_decode(nnz, write);
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_version`](#fn-codec-version)
> - [`std::codec::codec_endianness`](#fn-codec-endianness)
> - [`std::codec::modulo`](#fn-modulo)

<a id="fn-block-float-encode"></a>

> ## `block_float_encode`

> Block floating point: quantise `n` doubles to signed integer mantissas that share one scale factor. Block floating point: quantise `n` doubles to signed integer mantissas that share one scale factor.  The scale is amax / (2^(mantissa_bits-1) - 1), where amax is the block's maximum magnitude, and each mantissa is round(v/scale) clamped to [-maxq, maxq].  The shared scale leaves through `receive_scale`; mantissas are written through `write_mantissa`.  mantissa_bits must be 2..64.

```valor
public i32 block_float_encode(usize n, (usize) -> f64 read, u32 mantissa_bits, usize out_capacity, (usize, i64) -> void write_mantissa, (f64) -> void receive_scale)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `usize`: (usize) -> f64 read, u32 mantissa_bits, usize out_capacity, ( (borrowed fn-ptr (callback))
> - `receive_scale`: i64) -> void write_mantissa, (f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::codec::block_float_encode(n, usize, receive_scale);
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_version`](#fn-codec-version)
> - [`std::codec::codec_endianness`](#fn-codec-endianness)
> - [`std::codec::modulo`](#fn-modulo)

<a id="fn-block-float-decode"></a>

> ## `block_float_decode`

> Reconstruct doubles from shared-scale mantissas: v[i] = mantissa[i] * scale. Reconstruct doubles from shared-scale mantissas: v[i] = mantissa[i] * scale. One multiply per element, one forward sweep; bounded by `out_capacity`.

```valor
public i32 block_float_decode(usize n, f64 scale, (usize) -> i64 read_mantissa, usize out_capacity, (usize, f64) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `scale`: f64 (by value)
> - `usize`: (usize) -> i64 read_mantissa, usize out_capacity, ( (borrowed fn-ptr (callback))
> - `write`: f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::codec::block_float_decode(n, scale, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_version`](#fn-codec-version)
> - [`std::codec::codec_endianness`](#fn-codec-endianness)
> - [`std::codec::modulo`](#fn-modulo)

<a id="fn-tile-count"></a>

> ## `tile_count`

> *Internal API*
>
> Number of tiles spanning `extent` at `tile` granularity (ceil division).

```valor
usize tile_count(usize extent, usize tile)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `extent`: usize (by value)
> - `tile`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::codec::tile_count(extent, tile);
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_version`](#fn-codec-version)
> - [`std::codec::codec_endianness`](#fn-codec-endianness)
> - [`std::codec::modulo`](#fn-modulo)

<a id="fn-tensor-tile-encode"></a>

> ## `tensor_tile_encode`

> Relayout a rows x cols matrix into cache-friendly tile-major order: outer loop over tiles in row-major tile order, inner loop over each tile's elements in row-major order, clamping partial edge tiles. Relayout a rows x cols matrix into cache-friendly tile-major order: outer loop over tiles in row-major tile order, inner loop over each tile's elements in row-major order, clamping partial edge tiles.  The linearised element count is delivered through `receive_len`.  This is a pure index permutation -- values are copied straight from source to destination with no arithmetic.

```valor
public i32 tensor_tile_encode(usize rows, usize cols, usize tile_h, usize tile_w, (usize, usize) -> f64 read, usize out_capacity, (usize, f64) -> void write, (usize) -> void receive_len)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^4)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rows`: usize (by value)
> - `cols`: usize (by value)
> - `tile_h`: usize (by value)
> - `tile_w`: usize (by value)
> - `usize`: (usize, usize) -> f64 read, usize out_capacity, ( (borrowed fn-ptr (callback))
> - `receive_len`: f64) -> void write, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::codec::tensor_tile_encode(rows, cols, tile_h, tile_w, usize, receive_len);
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_version`](#fn-codec-version)
> - [`std::codec::codec_endianness`](#fn-codec-endianness)
> - [`std::codec::modulo`](#fn-modulo)

<a id="fn-tensor-tile-decode"></a>

> ## `tensor_tile_decode`

> Inverse of tensor_tile_encode: walk the identical tile-major order and scatter the linear stream back into (row, col) positions of the matrix. Inverse of tensor_tile_encode: walk the identical tile-major order and scatter the linear stream back into (row, col) positions of the matrix.  Sharing the exact traversal order with the encoder makes the round trip an identity.

```valor
public i32 tensor_tile_decode(usize rows, usize cols, usize tile_h, usize tile_w, (usize) -> f64 read, (usize, usize, f64) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^4)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rows`: usize (by value)
> - `cols`: usize (by value)
> - `tile_h`: usize (by value)
> - `tile_w`: usize (by value)
> - `usize`: (usize) -> f64 read, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `write`: f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::codec::tensor_tile_decode(rows, cols, tile_h, tile_w, usize, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_version`](#fn-codec-version)
> - [`std::codec::codec_endianness`](#fn-codec-endianness)
> - [`std::codec::modulo`](#fn-modulo)

<a id="fn-checksum"></a>

> ## `checksum`

> A rolling two-sum (Adler/Fletcher-family) integrity check over `n` bytes: sum1 accumulates the bytes, sum2 accumulates sum1, both mod a 32-bit prime. A rolling two-sum (Adler/Fletcher-family) integrity check over `n` bytes: sum1 accumulates the bytes, sum2 accumulates sum1, both mod a 32-bit prime. The result packs sum2 in the high 32 bits and sum1 in the low 32 bits.  Order- sensitive and deterministic, so it detects reordering as well as bit flips.

```valor
public u64 checksum(usize n, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::codec::checksum(n, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_version`](#fn-codec-version)
> - [`std::codec::codec_endianness`](#fn-codec-endianness)
> - [`std::codec::modulo`](#fn-modulo)

<a id="fn-canonical-hash"></a>

> ## `canonical_hash`

> A versioned, seed-fixed, two-lane content hash over `n` bytes, delivered as (primary, alt) through `receive`. A versioned, seed-fixed, two-lane content hash over `n` bytes, delivered as (primary, alt) through `receive`.  Both lanes must agree for equality, so a single-lane collision is never taken as proof of equality.  Built on the sealed std::builtins hashing primitives, so it matches the rest of the stdlib's stable-hash contract and is never process-randomised.

```valor
public i32 canonical_hash(usize n, u64 seed, (usize) -> u8 read_byte, (u64, u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `seed`: u64 (by value)
> - `u64`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `receive`: u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::codec::canonical_hash(n, seed, u64, receive);
> ```

> ### SEE ALSO
>
> - [`std::codec::codec_version`](#fn-codec-version)
> - [`std::codec::codec_endianness`](#fn-codec-endianness)
> - [`std::codec::modulo`](#fn-modulo)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Regular expressions](STD-REGEX-DOC.md) · [Table of contents](standard-library/README.md) · [Serialization →](STD-SERIALIZATION-DOC.md)
