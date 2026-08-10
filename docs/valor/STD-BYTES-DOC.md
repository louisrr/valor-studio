<!-- stdlib-reference-style: modern -->
> # `std::bytes`

`std::bytes` byte-oriented manipulation utilities.

[Standard library](standard-library/README.md) / [Collections and text](standard-library/README.md#collections-and-text) / **Bytes**

> **Source:** `stdlib/std/bytes.valor` · **Routines:** 32 public · 1 internal

## Routines

<details>
<summary>Browse all 33 routines</summary>

- [`is_ascii_digit`](#fn-is-ascii-digit)
- [`is_ascii_space`](#fn-is-ascii-space)
- [`is_utf8_continuation`](#fn-is-utf8-continuation)
- [`memchr`](#fn-memchr)
- [`find_byte`](#fn-find-byte)
- [`find_any_byte`](#fn-find-any-byte)
- [`build_kmp_table`](#fn-build-kmp-table)
- [`find_subsequence`](#fn-find-subsequence)
- [`compare_bytes`](#fn-compare-bytes)
- [`constant_time_equal`](#fn-constant-time-equal)
- [`starts_with`](#fn-starts-with)
- [`ends_with`](#fn-ends-with)
- [`parse_u64`](#fn-parse-u64)
- [`parse_u32`](#fn-parse-u32)
- [`parse_i64`](#fn-parse-i64)
- [`parse_i32`](#fn-parse-i32)
- [`scale_pow10`](#fn-scale-pow10)
- [`parse_f64`](#fn-parse-f64)
- [`parse_f32`](#fn-parse-f32)
- [`validate_utf8`](#fn-validate-utf8)
- [`utf8_sequence_length`](#fn-utf8-sequence-length)
- [`decode_utf8`](#fn-decode-utf8)
- [`encode_utf8`](#fn-encode-utf8)
- [`utf8_boundaries`](#fn-utf8-boundaries)
- [`split`](#fn-split)
- [`split_once`](#fn-split-once)
- [`lines`](#fn-lines)
- [`fields`](#fn-fields)
- [`pack_pair`](#fn-pack-pair)
- [`longest_prefix`](#fn-longest-prefix)
- [`merge_rank_lookup`](#fn-merge-rank-lookup)
- [`split_special_tokens`](#fn-split-special-tokens)
- [`byte_pair_merge`](#fn-byte-pair-merge)

</details>

## API reference

<a id="fn-is-ascii-digit"></a>

> ## `is_ascii_digit`

> True for an ASCII decimal digit '0'..'9' (48..57).

```valor
public bool is_ascii_digit(u8 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `b`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::bytes::is_ascii_digit(b);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)
> - [`std::bytes::memchr`](#fn-memchr)

<a id="fn-is-ascii-space"></a>

> ## `is_ascii_space`

> True for an ASCII whitespace byte: tab, LF, VT, FF, CR, space.

```valor
public bool is_ascii_space(u8 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `b`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::bytes::is_ascii_space(b);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)
> - [`std::bytes::memchr`](#fn-memchr)

<a id="fn-is-utf8-continuation"></a>

> ## `is_utf8_continuation`

> True for a UTF-8 continuation byte (0x80..0xBF, i.e. True for a UTF-8 continuation byte (0x80..0xBF, i.e. 128..191).  Bytes are widened to u32 before every ordering test: the backend lowers integer comparisons as signed, which would misread a byte whose high bit is set, and a value in [0, 255] is unaffected by sign only in a wider type.

```valor
public bool is_utf8_continuation(u8 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `b`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::bytes::is_utf8_continuation(b);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::memchr`](#fn-memchr)

<a id="fn-memchr"></a>

> ## `memchr`

> First index i in [0, n) with read(i) == target, else NOT_FOUND. First index i in [0, n) with read(i) == target, else NOT_FOUND.  The scalar reference a byte-parallel search must refine to.

```valor
public usize memchr(usize n, u8 target, (usize) -> u8 read)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `target`: u8 (by value)
> - `read`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::bytes::memchr(n, target, read);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)

<a id="fn-find-byte"></a>

> ## `find_byte`

> memchr from an explicit start offset: first index i in [start, n) with read(i) == target, else NOT_FOUND. memchr from an explicit start offset: first index i in [start, n) with read(i) == target, else NOT_FOUND.  A start beyond n yields NOT_FOUND.

```valor
public usize find_byte(usize start, usize n, u8 target, (usize) -> u8 read)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `n`: usize (by value)
> - `target`: u8 (by value)
> - `read`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::bytes::find_byte(start, n, target, read);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)

<a id="fn-find-any-byte"></a>

> ## `find_any_byte`

> First index i in [start, n) for which the caller membership predicate `member(read(i))` is true, else NOT_FOUND. First index i in [start, n) for which the caller membership predicate `member(read(i))` is true, else NOT_FOUND.  A caller backs `member` with a 256-entry lookup table for a branchless set test.

```valor
public usize find_any_byte(usize start, usize n, (usize) -> u8 read, (u8) -> bool member)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `n`: usize (by value)
> - `member`: (usize) -> u8 read, (u8) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::bytes::find_any_byte(start, n, member);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)

<a id="fn-build-kmp-table"></a>

> ## `build_kmp_table`

> Fill the Knuth-Morris-Pratt failure function for a needle of length m into a caller workspace of capacity `cap`. Fill the Knuth-Morris-Pratt failure function for a needle of length m into a caller workspace of capacity `cap`.  fail[i] is the length of the longest proper prefix of needle[0..i] that is also a suffix of it.  Returns ERR_WORKSPACE if the workspace is too small, else OK.  Linear time.

```valor
public i32 build_kmp_table(usize m, (usize) -> u8 read_needle, usize cap, (usize) -> usize read_fail, (usize, usize) -> void write_fail)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `m`: usize (by value)
> - `write_fail`: (usize) -> u8 read_needle, usize cap, (usize) -> usize read_fail, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::bytes::build_kmp_table(m, write_fail);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)

<a id="fn-find-subsequence"></a>

> ## `find_subsequence`

> First index in [0, n) at which the needle of length m occurs in the haystack of length n, else NOT_FOUND, via KMP over a caller failure-table workspace (capacity `cap` >= m). First index in [0, n) at which the needle of length m occurs in the haystack of length n, else NOT_FOUND, via KMP over a caller failure-table workspace (capacity `cap` >= m).  Runs in O(n + m).  An empty needle matches at 0; a needle longer than the haystack, or a workspace shorter than m, yields NOT_FOUND (no store is performed on the short-workspace path).

```valor
public usize find_subsequence(usize n, (usize) -> u8 read, usize m, (usize) -> u8 read_needle, usize cap, (usize) -> usize read_fail, (usize, usize) -> void write_fail)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `write_fail`: (usize) -> u8 read, usize m, (usize) -> u8 read_needle, usize cap, (usize) -> usize read_fail, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::bytes::find_subsequence(n, write_fail);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)

<a id="fn-compare-bytes"></a>

> ## `compare_bytes`

> Lexicographic (unsigned byte) comparison of buffer a (length na) and buffer b (length nb). Lexicographic (unsigned byte) comparison of buffer a (length na) and buffer b (length nb).  Returns a negative i32 if a < b, 0 if equal, positive if a > b; when one is a prefix of the other the shorter compares less.

```valor
public i32 compare_bytes(usize na, (usize) -> u8 read_a, usize nb, (usize) -> u8 read_b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `na`: usize (by value)
> - `read_b`: (usize) -> u8 read_a, usize nb, (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::bytes::compare_bytes(na, read_b);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)

<a id="fn-constant-time-equal"></a>

> ## `constant_time_equal`

> Data-independent equality: buffers of unequal length are unequal (length is not treated as secret), and equal-length buffers are compared with a fixed number of operations regardless of contents. Data-independent equality: buffers of unequal length are unequal (length is not treated as secret), and equal-length buffers are compared with a fixed number of operations regardless of contents.  There is no early exit and no content-dependent branch, so the running time does not reveal where (or whether) the buffers differ -- the property a secret comparison needs.

```valor
public bool constant_time_equal(usize na, (usize) -> u8 read_a, usize nb, (usize) -> u8 read_b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `na`: usize (by value)
> - `read_b`: (usize) -> u8 read_a, usize nb, (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::bytes::constant_time_equal(na, read_b);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)

<a id="fn-starts-with"></a>

> ## `starts_with`

> True when buffer a (length na) begins with prefix (length np).

```valor
public bool starts_with(usize na, (usize) -> u8 read_a, usize np, (usize) -> u8 read_prefix)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `na`: usize (by value)
> - `read_prefix`: (usize) -> u8 read_a, usize np, (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::bytes::starts_with(na, read_prefix);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)

<a id="fn-ends-with"></a>

> ## `ends_with`

> True when buffer a (length na) ends with suffix (length ns).

```valor
public bool ends_with(usize na, (usize) -> u8 read_a, usize ns, (usize) -> u8 read_suffix)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `na`: usize (by value)
> - `read_suffix`: (usize) -> u8 read_a, usize ns, (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::bytes::ends_with(na, read_suffix);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)

<a id="fn-parse-u64"></a>

> ## `parse_u64`

> parse_u64  -- grammar DIGIT+ , range [0, 2^64-1].

```valor
public i32 parse_u64(usize n, (usize) -> u8 read, (u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `receive`: (usize) -> u8 read, (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::bytes::parse_u64(n, receive);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)

<a id="fn-parse-u32"></a>

> ## `parse_u32`

> parse_u32  -- grammar DIGIT+ , range [0, 2^32-1].

```valor
public i32 parse_u32(usize n, (usize) -> u8 read, (u32) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `receive`: (usize) -> u8 read, (u32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::bytes::parse_u32(n, receive);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)

<a id="fn-parse-i64"></a>

> ## `parse_i64`

> parse_i64  -- grammar [+-]?DIGIT+ , range [-2^63, 2^63-1].

```valor
public i32 parse_i64(usize n, (usize) -> u8 read, (i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `receive`: (usize) -> u8 read, (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::bytes::parse_i64(n, receive);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)

<a id="fn-parse-i32"></a>

> ## `parse_i32`

> parse_i32  -- grammar [+-]?DIGIT+ , range [-2^31, 2^31-1].

```valor
public i32 parse_i32(usize n, (usize) -> u8 read, (i32) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `receive`: (usize) -> u8 read, (i32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::bytes::parse_i32(n, receive);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)

<a id="fn-scale-pow10"></a>

> ## `scale_pow10`

> *Internal API*
>
> value = mant * 10^netexp, negated when `neg`. value = mant * 10^netexp, negated when `neg`.  Deterministic on every target.

```valor
f64 scale_pow10(u64 mant, i32 netexp, bool neg)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `mant`: u64 (by value)
> - `netexp`: i32 (by value)
> - `neg`: bool (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::bytes::scale_pow10(mant, netexp, neg);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)

<a id="fn-parse-f64"></a>

> ## `parse_f64`

> parse_f64  -- strict finite decimal, delivers an IEEE double.

```valor
public i32 parse_f64(usize n, (usize) -> u8 read, (f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `receive`: (usize) -> u8 read, (f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::bytes::parse_f64(n, receive);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)

<a id="fn-parse-f32"></a>

> ## `parse_f32`

> parse_f32  -- strict finite decimal, delivers an IEEE single (double parse narrowed by one round to f32). parse_f32  -- strict finite decimal, delivers an IEEE single (double parse narrowed by one round to f32).

```valor
public i32 parse_f32(usize n, (usize) -> u8 read, (f32) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `receive`: (usize) -> u8 read, (f32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::bytes::parse_f32(n, receive);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)

<a id="fn-validate-utf8"></a>

> ## `validate_utf8`

> Returns OK when [0, n) is well-formed UTF-8. Returns OK when [0, n) is well-formed UTF-8.  On the first defect it calls on_error(offset) with the byte offset of the offending lead (or the start of a truncated/ill-formed sequence) and returns ERR_INVALID.

```valor
public i32 validate_utf8(usize n, (usize) -> u8 read, (usize) -> void on_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `on_error`: (usize) -> u8 read, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::bytes::validate_utf8(n, on_error);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)

<a id="fn-utf8-sequence-length"></a>

> ## `utf8_sequence_length`

> Byte length (1..4) encoded by a lead byte, or 0 if `b0` is not a valid lead.

```valor
public usize utf8_sequence_length(u8 b0)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `b0`: u8 (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::bytes::utf8_sequence_length(b0);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)

<a id="fn-decode-utf8"></a>

> ## `decode_utf8`

> Decode the single scalar beginning at `offset`. Decode the single scalar beginning at `offset`.  On success calls receive(code_point, byte_width) and returns OK; returns ERR_RANGE if offset is past the end and ERR_INVALID for any ill-formed / overlong / surrogate / out-of-range sequence.

```valor
public i32 decode_utf8(usize n, usize offset, (usize) -> u8 read, (u32, usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `offset`: usize (by value)
> - `u32`: (usize) -> u8 read, ( (borrowed fn-ptr (callback))
> - `receive`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::bytes::decode_utf8(n, offset, u32, receive);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)

<a id="fn-encode-utf8"></a>

> ## `encode_utf8`

> Encode `code_point` as 1..4 UTF-8 bytes written through write(offset+k, byte) and deliver the byte width through receive. Encode `code_point` as 1..4 UTF-8 bytes written through write(offset+k, byte) and deliver the byte width through receive.  Returns ERR_RANGE for a surrogate (U+D800..U+DFFF) or a value above U+10FFFF; OK otherwise.  Exact inverse of decode_utf8 on the well-formed scalar set.

```valor
public i32 encode_utf8(u32 code_point, usize offset, (usize, u8) -> void write, (usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `code_point`: u32 (by value)
> - `offset`: usize (by value)
> - `receive`: (usize, u8) -> void write, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::bytes::encode_utf8(code_point, offset, receive);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)

<a id="fn-utf8-boundaries"></a>

> ## `utf8_boundaries`

> Emit the start offset of every UTF-8 scalar in [0, n) -- i.e. Emit the start offset of every UTF-8 scalar in [0, n) -- i.e. every byte that is not a continuation byte (0x80..0xBF) -- through `emit`, and return the count.  This is a structural boundary scan (it locates scalar starts without a full validity check); pair it with validate_utf8 when well-formedness matters.

```valor
public usize utf8_boundaries(usize n, (usize) -> u8 read, (usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `emit`: (usize) -> u8 read, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::bytes::utf8_boundaries(n, emit);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)

<a id="fn-split"></a>

> ## `split`

> Partition [0, n) on the delimiter byte, emitting one (start, length) extent per field. Partition [0, n) on the delimiter byte, emitting one (start, length) extent per field.  Consecutive delimiters yield empty fields and a trailing delimiter yields a trailing empty field, so field count == delimiter count + 1.

```valor
public i32 split(usize n, u8 delim, (usize) -> u8 read, (usize, usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `delim`: u8 (by value)
> - `usize`: (usize) -> u8 read, ( (borrowed fn-ptr (callback))
> - `emit`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::bytes::split(n, delim, usize, emit);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)

<a id="fn-split-once"></a>

> ## `split_once`

> Split [0, n) at the first delimiter into (before, after). Split [0, n) at the first delimiter into (before, after).  When the delimiter is present, delivers receive(before_start=0, before_len=idx, after_start=idx+1, after_len) and returns OK; when absent, delivers the whole span as `before` and an empty `after`, and returns NO_MATCH.

```valor
public i32 split_once(usize n, u8 delim, (usize) -> u8 read, (usize, usize, usize, usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `delim`: u8 (by value)
> - `usize`: (usize) -> u8 read, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `usize`: usize (by value)
> - `receive`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::bytes::split_once(n, delim, usize, usize, usize, receive);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)

<a id="fn-lines"></a>

> ## `lines`

> Emit one (start, length) extent per line, splitting on LF (0x0A) and stripping a single CR (0x0D) that immediately precedes an LF (so CRLF and LF behave identically). Emit one (start, length) extent per line, splitting on LF (0x0A) and stripping a single CR (0x0D) that immediately precedes an LF (so CRLF and LF behave identically).  A final line without a trailing newline is emitted; a trailing newline does not produce an extra empty line.

```valor
public i32 lines(usize n, (usize) -> u8 read, (usize, usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `usize`: (usize) -> u8 read, ( (borrowed fn-ptr (callback))
> - `emit`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::bytes::lines(n, usize, emit);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)

<a id="fn-fields"></a>

> ## `fields`

> Emit one (start, length) extent per maximal run of non-whitespace bytes, skipping leading, trailing, and interior whitespace runs (ASCII whitespace as per is_ascii_space). Emit one (start, length) extent per maximal run of non-whitespace bytes, skipping leading, trailing, and interior whitespace runs (ASCII whitespace as per is_ascii_space).  No empty fields are emitted.

```valor
public i32 fields(usize n, (usize) -> u8 read, (usize, usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `usize`: (usize) -> u8 read, ( (borrowed fn-ptr (callback))
> - `emit`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::bytes::fields(n, usize, emit);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)

<a id="fn-pack-pair"></a>

> ## `pack_pair`

> Pack two symbol ids (each assumed < 2^32; higher bits are dropped) into one 64-bit key so an adjacent pair can index a rank table. Pack two symbol ids (each assumed < 2^32; higher bits are dropped) into one 64-bit key so an adjacent pair can index a rank table.  Overflow-safe.

```valor
public u64 pack_pair(u64 left, u64 right)
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
> u64 result = std::bytes::pack_pair(left, right);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)

<a id="fn-longest-prefix"></a>

> ## `longest_prefix`

> Walk a caller trie over [0, n) to find the longest prefix that is a vocabulary token. Walk a caller trie over [0, n) to find the longest prefix that is a vocabulary token.  `step(state, byte)` returns the next state or a negative value for a dead edge; `accept(state)` returns the token id at an accepting state or a negative value.  The root state is 0.  Delivers receive(best_id, best_len) and returns OK when some prefix matched (including the empty prefix if the root accepts), else delivers receive(-1, 0) and returns NO_MATCH.

```valor
public i32 longest_prefix(usize n, (usize) -> u8 read, (i64, u8) -> i64 step, (i64) -> i64 accept, (i64, usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `i64`: (usize) -> u8 read, ( (borrowed fn-ptr (callback))
> - `receive`: u8) -> i64 step, (i64) -> i64 accept, (i64, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::bytes::longest_prefix(n, i64, receive);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)

<a id="fn-merge-rank-lookup"></a>

> ## `merge_rank_lookup`

> Look up the BPE merge rank of the adjacent pair (left, right) in a caller open-addressing table of `capacity` slots (a power of two or prime chosen by the caller) using linear probing. Look up the BPE merge rank of the adjacent pair (left, right) in a caller open-addressing table of `capacity` slots (a power of two or prime chosen by the caller) using linear probing.  read_rank(slot) returns the stored rank or a negative value for an empty slot; read_key(slot) returns the packed key at a filled slot.  Returns the rank (>= 0) when the pair is present, else -1.  The linear probe keeps the scan on contiguous cache lines.

```valor
public i64 merge_rank_lookup(u64 left, u64 right, usize capacity, (usize) -> u64 read_key, (usize) -> i64 read_rank)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: u64 (by value)
> - `right`: u64 (by value)
> - `capacity`: usize (by value)
> - `read_rank`: (usize) -> u64 read_key, (usize) -> i64 (borrowed fn-ptr (callback))

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::bytes::merge_rank_lookup(left, right, capacity, read_rank);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)

<a id="fn-split-special-tokens"></a>

> ## `split_special_tokens`

> Segment [0, n) into alternating normal and special-token runs. Segment [0, n) into alternating normal and special-token runs.  At each position `special_len(pos)` returns the byte length of a special token that begins there (0 if none, longest match chosen by the caller) and `special_id(pos)` returns its id.  Emits emit(is_special, id, start, length) for each segment in order; normal segments carry id -1.  Special tokens are therefore never merged with surrounding text -- the invariant a BPE pre-tokenizer relies on.

```valor
public i32 split_special_tokens(usize n, (usize) -> u8 read, (usize) -> i64 special_len, (usize) -> i64 special_id, (bool, i64, usize, usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `emit`: (usize) -> u8 read, (usize) -> i64 special_len, (usize) -> i64 special_id, (bool, i64, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::bytes::split_special_tokens(n, emit);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)

<a id="fn-byte-pair-merge"></a>

> ## `byte_pair_merge`

> Run the BPE merge loop in place over a caller symbol buffer of `len` ids, reached through read_sym/write_sym. Run the BPE merge loop in place over a caller symbol buffer of `len` ids, reached through read_sym/write_sym.  `rank_of(left, right)` returns the merge rank of an adjacent pair (>= 0 mergeable, negative not), and `merge_of(left, right)` returns the id of the merged symbol.  Repeatedly merges the lowest-rank adjacent pair, breaking ties toward the leftmost pair, and compacts the buffer, until no adjacent pair is mergeable.  Returns the final symbol count; the surviving ids occupy [0, result) of the caller buffer.

```valor
public usize byte_pair_merge(usize len, (usize) -> i64 read_sym, (usize, i64) -> void write_sym, (i64, i64) -> i64 rank_of, (i64, i64) -> i64 merge_of)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `len`: usize (by value)
> - `usize`: (usize) -> i64 read_sym, ( (borrowed fn-ptr (callback))
> - `merge_of`: i64) -> void write_sym, (i64, i64) -> i64 rank_of, (i64, i64) -> i64 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::bytes::byte_pair_merge(len, usize, merge_of);
> ```

> ### SEE ALSO
>
> - [`std::bytes::is_ascii_digit`](#fn-is-ascii-digit)
> - [`std::bytes::is_ascii_space`](#fn-is-ascii-space)
> - [`std::bytes::is_utf8_continuation`](#fn-is-utf8-continuation)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Queues](STD-COLLECTIONS-QUEUE-DOC.md) · [Table of contents](standard-library/README.md) · [Data →](STD-DATA-DOC.md)
