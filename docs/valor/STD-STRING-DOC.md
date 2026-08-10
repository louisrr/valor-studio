<!-- stdlib-reference-style: modern -->
> # `std::string`

`std::string` is Valor's deterministic, versioned UTF-8 string core. It keeps string
storage immutable and caller-owned, uses byte indices, and writes transformed output
through explicit callback sinks instead of allocating hidden objects.

[Standard library](standard-library/README.md) / [Collections and text](standard-library/README.md#collections-and-text) / **Strings**

> **Source:** `stdlib/std/string.valor` · **ABI:** `VERSION = 1` · **Public routines:** 38

## How string data is passed

Most routines accept a byte length and a reader callback:

```valor
usize len
read : (usize) -> u8
```

A producer first exposes or computes its required length, then writes bytes through a
caller-owned sink with an explicit capacity:

```valor
write : (usize, u8) -> void
```

This makes ownership and failure visible. A status-returning producer does not call its
receiver or writer after an error. `view(string)` and `print(string)` are the two runtime
string adapters; the rest of the public surface operates on callback views.

## Contract summary

- Indices and lengths count **UTF-8 bytes**. Scalar operations are named `codePoint*`.
- Unicode data is frozen at **15.1.0**; case folding and whitespace are ASCII-only.
- `MAX_STRING_BYTES` caps sized output at 2³⁰ bytes, with overflow checked before multiplication.
- Search uses caller-provided KMP workspace and deterministic first/last/non-overlapping rules.
- Hex, Base64, UTF-16, JSON escaping, and both hash lanes are versioned and architecture-independent.
- The callback core allocates no heap storage and retains no callback or buffer reference.

See the [normative specification](STD-STRING-SPEC.md) for error semantics and the
[verification study](STD-STRING-IEEE.md) for proof and test boundaries.

## Public constants

| Constant | Value | Purpose |
|---|---:|---|
| `u32 VERSION` | `1` | std::string core ABI version |
| `u32 UNICODE_VERSION_MAJOR` | `15` | frozen Unicode Character Database |
| `u32 UNICODE_VERSION_MINOR` | `1` | version = 15.1.0 |
| `u32 UNICODE_VERSION_PATCH` | `0` | Unicode Character Database patch version. |
| `u64 STRING_HASH_SEED` | `1469598103` | Primary hash seed, frozen for ABI version 1. |
| `i32 OK` | `0` | Successful status result. |
| `i32 ERR_ENCODING` | `1` | input is not well-formed UTF-8 |
| `i32 ERR_BOUNDS` | `2` | byte index / range outside [0, len] |
| `i32 ERR_NO_SPACE` | `3` | caller output capacity too small |
| `i32 ERR_OVERFLOW` | `4` | a size computation would exceed MAX_STRING_BYTES |
| `i32 ERR_PARAM` | `5` | an argument is inconsistent (e.g. odd hex length) |
| `i32 ERR_EMPTY` | `6` | operation undefined on empty input |
| `i32 ORDER_LESS` | `0` | Lexicographic result: left is less than right. |
| `i32 ORDER_EQUAL` | `1` | Lexicographic result: both byte sequences are equal. |
| `i32 ORDER_GREATER` | `2` | Lexicographic result: left is greater than right. |
| `usize NOT_FOUND` | `9223372036854775807` | 2^63 - 1 |
| `usize MAX_STRING_BYTES` | `1073741824` | 2^30 |
| `u8 ASCII_UP_A` | `65` | 'A' |
| `u8 ASCII_UP_Z` | `90` | 'Z' |
| `u8 ASCII_LO_A` | `97` | 'a' |
| `u8 ASCII_LO_Z` | `122` | 'z' |
| `u8 ASCII_DIGIT0` | `48` | '0' |
| `u8 ASCII_CASE_GAP` | `32` | 'a' - 'A' |
| `u64 HASH_MOD_LOCAL` | `2147483647` | 2^31 - 1 (Mersenne prime) |
| `u64 STRING_HASH_ALT_SEED` | `2166136261` | FNV-32 offset basis |
| `u64 STRING_HASH_ALT_MULT` | `2654435761` | Knuth multiplicative (< 2^32) |

## Routines

### Runtime string view and stdout adapter

- [`view`](#fn-view)
- [`print`](#fn-print)

### Length, emptiness, encoding validity

- [`isEmpty`](#fn-isempty)
- [`byteLength`](#fn-bytelength)
- [`isValidUtf8`](#fn-isvalidutf8)
- [`codePointCount`](#fn-codepointcount)

### Element access

- [`charAt`](#fn-charat)
- [`isCharBoundary`](#fn-ischarboundary)
- [`codePointAt`](#fn-codepointat)

### Comparison and equality (all allocation-free, byte-exact)

- [`equals`](#fn-equals)
- [`compare`](#fn-compare)
- [`equalsIgnoreCaseAscii`](#fn-equalsignorecaseascii)

### Prefix / suffix / search  (worst-case linear, deterministic tie-breaks)

- [`startsWith`](#fn-startswith)
- [`endsWith`](#fn-endswith)
- [`indexOf`](#fn-indexof)
- [`contains`](#fn-contains)
- [`countMatches`](#fn-countmatches)
- [`lastIndexOf`](#fn-lastindexof)

### Slicing and whitespace (span-returning: allocation-free, no copy)

- [`stripSpan`](#fn-stripspan)
- [`stripLeftSpan`](#fn-stripleftspan)
- [`stripRightSpan`](#fn-striprightspan)
- [`substring`](#fn-substring)

### Case transforms (ASCII, locale-independent, two-pass sizing)

- [`toLowerAscii`](#fn-tolowerascii)
- [`toUpperAscii`](#fn-toupperascii)

### Producers with checked sizing (repeat, reverse)

- [`repeatLen`](#fn-repeatlen)
- [`repeat`](#fn-repeat)
- [`reverseCodePoints`](#fn-reversecodepoints)

### Encodings: hex and Base64 (fixed alphabets, explicit error results)

- [`toHexLen`](#fn-tohexlen)
- [`toHex`](#fn-tohex)
- [`fromHex`](#fn-fromhex)
- [`toBase64Len`](#fn-tobase64len)
- [`toBase64`](#fn-tobase64)

### UTF-16 transcoding (explicit endianness; no BOM)

- [`toUtf16Len`](#fn-toutf16len)
- [`toUtf16`](#fn-toutf16)

### Escaping (JSON)

- [`jsonEscapeLen`](#fn-jsonescapelen)
- [`jsonEscape`](#fn-jsonescape)

### Hashing (architecture-independent, versioned)

- [`hash`](#fn-hash)
- [`hashAlt`](#fn-hashalt)

## API reference

<a id="fn-view"></a>

> ## `view`

> Return a borrowed `(ptr,len)` view of the immutable runtime string.  The runtime ABI owns the representation conversion; VERSION 1 performs no copy, allocation, scan, mutation, or lazy initialisation.  The view is valid only for the lifetime of `s`.  O(1), deterministic, and bit-exact.

```valor
public stringview view(string s)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(1)

> ### INPUT PARAMETERS
>
> - `s`: `string`

> ### RETURNS (stringview)

> ### EXAMPLE
>
> ```valor
> stringview result = std::string::view(s);
> ```

> ### SEE ALSO
>
> - [`std::string::print`](#fn-print)

<a id="fn-print"></a>

> ## `print`

> Submit every byte of `s`, unchanged and without a trailing newline, to the versioned runtime stdout sink in one call.  This wrapper and view conversion are O(1) and allocation-free; transferring n bytes is necessarily O(n).
>
> Concurrency/progress boundary:
>
> - Concurrent calls are race-free when the runtime I/O configuration is fixed and the installed sink satisfies the ValorIoVTable contract.
>
> - The adapter is lock-free only for the documented subset consisting of a lock-free, nonblocking sink accepting the complete capped input in one call.  The default host stdout sink may block, buffer, or interleave concurrent records and is therefore outside that subset.
>
> - Bit-exactness covers the submitted byte sequence, not terminal rendering.
>
> - Numeric p99.999 bounds are platform/workload measurements, never a semantic property of this wrapper; see docs/STD-STRING-SPEC.md §11.

```valor
public void print(string s)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(1) wrapper and dispatch; O(n) byte transfer

> ### INPUT PARAMETERS
>
> - `s`: `string`

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::string::print(s);
> ```

> ### SEE ALSO
>
> - [`std::string::view`](#fn-view)
> - [`std::string::isEmpty`](#fn-isempty)

<a id="fn-isempty"></a>

> ## `isEmpty`

> True iff the string has zero bytes.  O(1), allocation-free.

```valor
public bool isEmpty(usize len)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(1)

> ### INPUT PARAMETERS
>
> - `len`: `usize`

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::string::isEmpty(len);
> ```

> ### SEE ALSO
>
> - [`std::string::print`](#fn-print)
> - [`std::string::byteLength`](#fn-bytelength)

<a id="fn-bytelength"></a>

> ## `byteLength`

> Byte length of the string.  Indices in this module are byte indices, so this is the identity on the length parameter; provided as the canonical name and the anchor for the "indices are bytes" contract.  O(1).

```valor
public usize byteLength(usize len)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(1)

> ### INPUT PARAMETERS
>
> - `len`: `usize`

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::string::byteLength(len);
> ```

> ### SEE ALSO
>
> - [`std::string::isEmpty`](#fn-isempty)
> - [`std::string::isValidUtf8`](#fn-isvalidutf8)

<a id="fn-isvalidutf8"></a>

> ## `isValidUtf8`

> True iff the `len` bytes read through `read` are well-formed UTF-8 under the frozen RFC-3629 policy (shortest form only, no surrogates, <= U+10FFFF). O(n), allocation-free, total.  Delegates the well-formedness automaton to std::bytes::validate_utf8.

```valor
public bool isValidUtf8(usize len, (usize) -> u8 read)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(n)

> ### INPUT PARAMETERS
>
> - `len`: `usize`
> - `read`: `(usize) -> u8`

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::string::isValidUtf8(len, read);
> ```

> ### SEE ALSO
>
> - [`std::string::byteLength`](#fn-bytelength)
> - [`std::string::codePointCount`](#fn-codepointcount)

<a id="fn-codepointcount"></a>

> ## `codePointCount`

> Number of Unicode scalar values in a well-formed UTF-8 string.  Returns OK and delivers the count through `receive`; returns ERR_ENCODING (receiver NOT called) if the input is not well-formed.  O(n), allocation-free.

```valor
public i32 codePointCount(
    usize len,
    (usize) -> u8 read,
    (usize) -> void receive
)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(n)

> ### INPUT PARAMETERS
>
> - `len`: `usize`
> - `read`: `(usize) -> u8`
> - `receive`: `(usize) -> void`

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::string::codePointCount(len, read, receive);
> ```

> ### SEE ALSO
>
> - [`std::string::isValidUtf8`](#fn-isvalidutf8)
> - [`std::string::charAt`](#fn-charat)

<a id="fn-charat"></a>

> ## `charAt`

> The byte at byte index `idx`.  Returns OK and delivers the byte through `receive`; returns ERR_BOUNDS (receiver NOT called) if idx >= len.  O(1).

```valor
public i32 charAt(
    usize len,
    (usize) -> u8 read,
    usize idx,
    (u8) -> void receive
)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(1)

> ### INPUT PARAMETERS
>
> - `len`: `usize`
> - `read`: `(usize) -> u8`
> - `idx`: `usize`
> - `receive`: `(u8) -> void`

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::string::charAt(len, read, idx, receive);
> ```

> ### SEE ALSO
>
> - [`std::string::codePointCount`](#fn-codepointcount)
> - [`std::string::isCharBoundary`](#fn-ischarboundary)

<a id="fn-ischarboundary"></a>

> ## `isCharBoundary`

> True iff byte index `idx` is a UTF-8 sequence boundary (idx == len, or the byte at idx is not a continuation byte 0b10xxxxxx).  O(1).  Lets a caller slice safely at byte indices.

```valor
public bool isCharBoundary(usize len, (usize) -> u8 read, usize idx)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(1)

> ### INPUT PARAMETERS
>
> - `len`: `usize`
> - `read`: `(usize) -> u8`
> - `idx`: `usize`

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::string::isCharBoundary(len, read, idx);
> ```

> ### SEE ALSO
>
> - [`std::string::charAt`](#fn-charat)
> - [`std::string::codePointAt`](#fn-codepointat)

<a id="fn-codepointat"></a>

> ## `codePointAt`

> Decode the Unicode scalar value whose UTF-8 sequence begins at byte offset `offset`.  Returns OK and delivers (scalar, byte_width) through `receive`; returns ERR_BOUNDS if offset >= len, or ERR_ENCODING if the sequence at offset is not well-formed (receiver NOT called on either error).  O(1) (<= 4 bytes).

```valor
public i32 codePointAt(
    usize len,
    (usize) -> u8 read,
    usize offset,
    (u32, usize) -> void receive
)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(1)

> ### INPUT PARAMETERS
>
> - `len`: `usize`
> - `read`: `(usize) -> u8`
> - `offset`: `usize`
> - `receive`: `(u32, usize) -> void`

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::string::codePointAt(len, read, offset, receive);
> ```

> ### SEE ALSO
>
> - [`std::string::isCharBoundary`](#fn-ischarboundary)
> - [`std::string::equals`](#fn-equals)

<a id="fn-equals"></a>

> ## `equals`

> Byte-exact equality: true iff both strings have the same length and bytes. O(min(na, nb)) with an early length reject.  Encoding-agnostic and total.

```valor
public bool equals(
    usize na,
    (usize) -> u8 read_a,
    usize nb,
    (usize) -> u8 read_b
)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(min(na, nb)

> ### INPUT PARAMETERS
>
> - `na`: `usize`
> - `read_a`: `(usize) -> u8`
> - `nb`: `usize`
> - `read_b`: `(usize) -> u8`

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::string::equals(na, read_a, nb, read_b);
> ```

> ### SEE ALSO
>
> - [`std::string::codePointAt`](#fn-codepointat)
> - [`std::string::compare`](#fn-compare)

<a id="fn-compare"></a>

> ## `compare`

> Lexicographic unsigned-byte ordering.  Returns ORDER_LESS / ORDER_EQUAL / ORDER_GREATER; when one string is a proper prefix of the other the shorter compares less.  O(min(na, nb)).  Encoding-agnostic and total; because UTF-8 preserves code-point order, this also orders well-formed strings by scalar.

```valor
public i32 compare(
    usize na,
    (usize) -> u8 read_a,
    usize nb,
    (usize) -> u8 read_b
)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(min(na, nb)

> ### INPUT PARAMETERS
>
> - `na`: `usize`
> - `read_a`: `(usize) -> u8`
> - `nb`: `usize`
> - `read_b`: `(usize) -> u8`

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::string::compare(na, read_a, nb, read_b);
> ```

> ### SEE ALSO
>
> - [`std::string::equals`](#fn-equals)
> - [`std::string::equalsIgnoreCaseAscii`](#fn-equalsignorecaseascii)

<a id="fn-equalsignorecaseascii"></a>

> ## `equalsIgnoreCaseAscii`

> Equality after ASCII-only case folding (A-Z ~ a-z); non-ASCII bytes must match exactly.  Locale-independent and deterministic.  O(min(na, nb)) with a length reject.  Full-Unicode case-insensitive comparison is a SEPARATE library.

```valor
public bool equalsIgnoreCaseAscii(
    usize na,
    (usize) -> u8 read_a,
    usize nb,
    (usize) -> u8 read_b
)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(min(na, nb)

> ### INPUT PARAMETERS
>
> - `na`: `usize`
> - `read_a`: `(usize) -> u8`
> - `nb`: `usize`
> - `read_b`: `(usize) -> u8`

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::string::equalsIgnoreCaseAscii(na, read_a, nb, read_b);
> ```

> ### SEE ALSO
>
> - [`std::string::compare`](#fn-compare)
> - [`std::string::startsWith`](#fn-startswith)

<a id="fn-startswith"></a>

> ## `startsWith`

> True iff `prefix` (length np) is a byte-prefix of the string.  O(np).

```valor
public bool startsWith(
    usize len,
    (usize) -> u8 read,
    usize np,
    (usize) -> u8 read_prefix
)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(np)

> ### INPUT PARAMETERS
>
> - `len`: `usize`
> - `read`: `(usize) -> u8`
> - `np`: `usize`
> - `read_prefix`: `(usize) -> u8`

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::string::startsWith(len, read, np, read_prefix);
> ```

> ### SEE ALSO
>
> - [`std::string::equalsIgnoreCaseAscii`](#fn-equalsignorecaseascii)
> - [`std::string::endsWith`](#fn-endswith)

<a id="fn-endswith"></a>

> ## `endsWith`

> True iff `suffix` (length ns) is a byte-suffix of the string.  O(ns).

```valor
public bool endsWith(
    usize len,
    (usize) -> u8 read,
    usize ns,
    (usize) -> u8 read_suffix
)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(ns)

> ### INPUT PARAMETERS
>
> - `len`: `usize`
> - `read`: `(usize) -> u8`
> - `ns`: `usize`
> - `read_suffix`: `(usize) -> u8`

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::string::endsWith(len, read, ns, read_suffix);
> ```

> ### SEE ALSO
>
> - [`std::string::startsWith`](#fn-startswith)
> - [`std::string::indexOf`](#fn-indexof)

<a id="fn-indexof"></a>

> ## `indexOf`

> Byte index of the FIRST occurrence of `needle` (length m) in the string, else NOT_FOUND.  Worst-case O(n + m) via KMP over a caller failure-table workspace (`cap` >= m); an empty needle matches at 0.  Deterministic: first match wins. The workspace is caller-owned and never retained.

```valor
public usize indexOf(
    usize len,
    (usize) -> u8 read,
    usize m,
    (usize) -> u8 read_needle,
    usize cap,
    (usize) -> usize read_fail,
    (usize, usize) -> void write_fail
)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(n + m)

> ### INPUT PARAMETERS
>
> - `len`: `usize`
> - `read`: `(usize) -> u8`
> - `m`: `usize`
> - `read_needle`: `(usize) -> u8`
> - `cap`: `usize`
> - `read_fail`: `(usize) -> usize`
> - `write_fail`: `(usize, usize) -> void`

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::string::indexOf(len, read, m, read_needle, cap, read_fail, write_fail);
> ```

> ### SEE ALSO
>
> - [`std::string::endsWith`](#fn-endswith)
> - [`std::string::contains`](#fn-contains)

<a id="fn-contains"></a>

> ## `contains`

> True iff `needle` occurs in the string.  Same worst-case-linear KMP engine as indexOf; workspace is caller-owned.

```valor
public bool contains(
    usize len,
    (usize) -> u8 read,
    usize m,
    (usize) -> u8 read_needle,
    usize cap,
    (usize) -> usize read_fail,
    (usize, usize) -> void write_fail
)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> See behavior above

> ### INPUT PARAMETERS
>
> - `len`: `usize`
> - `read`: `(usize) -> u8`
> - `m`: `usize`
> - `read_needle`: `(usize) -> u8`
> - `cap`: `usize`
> - `read_fail`: `(usize) -> usize`
> - `write_fail`: `(usize, usize) -> void`

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::string::contains(len, read, m, read_needle, cap, read_fail, write_fail);
> ```

> ### SEE ALSO
>
> - [`std::string::indexOf`](#fn-indexof)
> - [`std::string::countMatches`](#fn-countmatches)

<a id="fn-countmatches"></a>

> ## `countMatches`

> Number of NON-OVERLAPPING left-to-right occurrences of `needle` (length m, m >= 1) in the string, via a single KMP pass (build table once, then scan). Worst-case O(n + m).  An empty needle yields 0 (ERR_PARAM would be the alternative; 0 is the deterministic, allocation-free choice documented here). Deterministic tie-break: after a match the scan resumes past the match, so overlaps are not double counted.  Workspace (`cap` >= m) is caller-owned.

```valor
public usize countMatches(
    usize len,
    (usize) -> u8 read,
    usize m,
    (usize) -> u8 read_needle,
    usize cap,
    (usize) -> usize read_fail,
    (usize, usize) -> void write_fail
)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(n + m)

> ### INPUT PARAMETERS
>
> - `len`: `usize`
> - `read`: `(usize) -> u8`
> - `m`: `usize`
> - `read_needle`: `(usize) -> u8`
> - `cap`: `usize`
> - `read_fail`: `(usize) -> usize`
> - `write_fail`: `(usize, usize) -> void`

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::string::countMatches(len, read, m, read_needle, cap, read_fail, write_fail);
> ```

> ### SEE ALSO
>
> - [`std::string::contains`](#fn-contains)
> - [`std::string::lastIndexOf`](#fn-lastindexof)

<a id="fn-lastindexof"></a>

> ## `lastIndexOf`

> Byte index of the LAST occurrence of `needle` (length m, m >= 1), else NOT_FOUND, via a single forward KMP pass that records the most recent match start.  Worst-case O(n + m).  Deterministic tie-break: last match wins. Workspace (`cap` >= m) is caller-owned.

```valor
public usize lastIndexOf(
    usize len,
    (usize) -> u8 read,
    usize m,
    (usize) -> u8 read_needle,
    usize cap,
    (usize) -> usize read_fail,
    (usize, usize) -> void write_fail
)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(n + m)

> ### INPUT PARAMETERS
>
> - `len`: `usize`
> - `read`: `(usize) -> u8`
> - `m`: `usize`
> - `read_needle`: `(usize) -> u8`
> - `cap`: `usize`
> - `read_fail`: `(usize) -> usize`
> - `write_fail`: `(usize, usize) -> void`

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::string::lastIndexOf(len, read, m, read_needle, cap, read_fail, write_fail);
> ```

> ### SEE ALSO
>
> - [`std::string::countMatches`](#fn-countmatches)
> - [`std::string::stripSpan`](#fn-stripspan)

<a id="fn-stripspan"></a>

> ## `stripSpan`

> Report the byte range [start, end) of the string with leading and trailing ASCII whitespace removed, through `receive(start, end)`.  Allocation-free and copy-free (§13.3): the caller re-reads the same buffer over the reported span. On an all-whitespace or empty string, start == end (an empty span).  O(n).

```valor
public void stripSpan(
    usize len,
    (usize) -> u8 read,
    (usize, usize) -> void receive
)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(n)

> ### INPUT PARAMETERS
>
> - `len`: `usize`
> - `read`: `(usize) -> u8`
> - `receive`: `(usize, usize) -> void`

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::string::stripSpan(len, read, receive);
> ```

> ### SEE ALSO
>
> - [`std::string::lastIndexOf`](#fn-lastindexof)
> - [`std::string::stripLeftSpan`](#fn-stripleftspan)

<a id="fn-stripleftspan"></a>

> ## `stripLeftSpan`

> stripLeftSpan / stripRightSpan -- one-sided variants of stripSpan.

```valor
public void stripLeftSpan(
    usize len,
    (usize) -> u8 read,
    (usize, usize) -> void receive
)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> See behavior above

> ### INPUT PARAMETERS
>
> - `len`: `usize`
> - `read`: `(usize) -> u8`
> - `receive`: `(usize, usize) -> void`

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::string::stripLeftSpan(len, read, receive);
> ```

> ### SEE ALSO
>
> - [`std::string::stripSpan`](#fn-stripspan)
> - [`std::string::stripRightSpan`](#fn-striprightspan)

<a id="fn-striprightspan"></a>

> ## `stripRightSpan`

> Implements the `stripRightSpan` operation.

```valor
public void stripRightSpan(
    usize len,
    (usize) -> u8 read,
    (usize, usize) -> void receive
)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> See behavior above

> ### INPUT PARAMETERS
>
> - `len`: `usize`
> - `read`: `(usize) -> u8`
> - `receive`: `(usize, usize) -> void`

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::string::stripRightSpan(len, read, receive);
> ```

> ### SEE ALSO
>
> - [`std::string::stripLeftSpan`](#fn-stripleftspan)
> - [`std::string::substring`](#fn-substring)

<a id="fn-substring"></a>

> ## `substring`

> Copy the byte range [start, end) into the caller sink `write`, writing to output offsets 0..(end-start).  Returns OK on success; ERR_BOUNDS if the range is not within [0, len] or start > end; ERR_NO_SPACE if cap < end-start (writer NOT called on either error).  Byte-indexed; use isCharBoundary to slice on scalar boundaries.  O(end - start), allocation-free.

```valor
public i32 substring(
    usize len,
    (usize) -> u8 read,
    usize start,
    usize end,
    usize cap,
    (usize, u8) -> void write
)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(end - start)

> ### INPUT PARAMETERS
>
> - `len`: `usize`
> - `read`: `(usize) -> u8`
> - `start`: `usize`
> - `end`: `usize`
> - `cap`: `usize`
> - `write`: `(usize, u8) -> void`

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::string::substring(len, read, start, end, cap, write);
> ```

> ### SEE ALSO
>
> - [`std::string::stripRightSpan`](#fn-striprightspan)
> - [`std::string::toLowerAscii`](#fn-tolowerascii)

<a id="fn-tolowerascii"></a>

> ## `toLowerAscii`

> Implements the `toLowerAscii` operation.

```valor
public i32 toLowerAscii(
    usize len,
    (usize) -> u8 read,
    usize cap,
    (usize, u8) -> void write
)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> See behavior above

> ### INPUT PARAMETERS
>
> - `len`: `usize`
> - `read`: `(usize) -> u8`
> - `cap`: `usize`
> - `write`: `(usize, u8) -> void`

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::string::toLowerAscii(len, read, cap, write);
> ```

> ### SEE ALSO
>
> - [`std::string::substring`](#fn-substring)
> - [`std::string::toUpperAscii`](#fn-toupperascii)

<a id="fn-toupperascii"></a>

> ## `toUpperAscii`

> Implements the `toUpperAscii` operation.

```valor
public i32 toUpperAscii(
    usize len,
    (usize) -> u8 read,
    usize cap,
    (usize, u8) -> void write
)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> See behavior above

> ### INPUT PARAMETERS
>
> - `len`: `usize`
> - `read`: `(usize) -> u8`
> - `cap`: `usize`
> - `write`: `(usize, u8) -> void`

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::string::toUpperAscii(len, read, cap, write);
> ```

> ### SEE ALSO
>
> - [`std::string::toLowerAscii`](#fn-tolowerascii)
> - [`std::string::repeatLen`](#fn-repeatlen)

<a id="fn-repeatlen"></a>

> ## `repeatLen`

> Required output byte length of repeating the string `count` times, delivered through `receive`.  Returns OK, or ERR_OVERFLOW (receiver NOT called) if the product would exceed MAX_STRING_BYTES -- the check is BEFORE the multiply, so the size can never wrap.  O(1).

```valor
public i32 repeatLen(usize len, usize count, (usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(1)

> ### INPUT PARAMETERS
>
> - `len`: `usize`
> - `count`: `usize`
> - `receive`: `(usize) -> void`

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::string::repeatLen(len, count, receive);
> ```

> ### SEE ALSO
>
> - [`std::string::toUpperAscii`](#fn-toupperascii)
> - [`std::string::repeat`](#fn-repeat)

<a id="fn-repeat"></a>

> ## `repeat`

> Write `count` copies of the string into the caller sink.  Returns OK; ERR_OVERFLOW if the total exceeds MAX_STRING_BYTES; ERR_NO_SPACE if cap is smaller than the total (writer NOT called on error).  O(len * count).

```valor
public i32 repeat(
    usize len,
    (usize) -> u8 read,
    usize count,
    usize cap,
    (usize, u8) -> void write
)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(len * count)

> ### INPUT PARAMETERS
>
> - `len`: `usize`
> - `read`: `(usize) -> u8`
> - `count`: `usize`
> - `cap`: `usize`
> - `write`: `(usize, u8) -> void`

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::string::repeat(len, read, count, cap, write);
> ```

> ### SEE ALSO
>
> - [`std::string::repeatLen`](#fn-repeatlen)
> - [`std::string::reverseCodePoints`](#fn-reversecodepoints)

<a id="fn-reversecodepoints"></a>

> ## `reverseCodePoints`

> Reverse the string by Unicode scalar values (not by bytes): each code point's UTF-8 bytes are kept intact and its position mirrored.  Requires well-formed UTF-8; returns ERR_ENCODING (writer NOT called) otherwise, ERR_NO_SPACE if cap < len, else OK.  Output length equals input length.  O(n), single forward pass with O(1) extra state.

```valor
public i32 reverseCodePoints(
    usize len,
    (usize) -> u8 read,
    usize cap,
    (usize, u8) -> void write
)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(1)

> ### INPUT PARAMETERS
>
> - `len`: `usize`
> - `read`: `(usize) -> u8`
> - `cap`: `usize`
> - `write`: `(usize, u8) -> void`

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::string::reverseCodePoints(len, read, cap, write);
> ```

> ### SEE ALSO
>
> - [`std::string::repeat`](#fn-repeat)
> - [`std::string::toHexLen`](#fn-tohexlen)

<a id="fn-tohexlen"></a>

> ## `toHexLen`

> toHexLen -- output length of lowercase hex = 2 * len (checked).  Delivered through receive; ERR_OVERFLOW if 2*len > MAX_STRING_BYTES.

```valor
public i32 toHexLen(usize len, (usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> See behavior above

> ### INPUT PARAMETERS
>
> - `len`: `usize`
> - `receive`: `(usize) -> void`

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::string::toHexLen(len, receive);
> ```

> ### SEE ALSO
>
> - [`std::string::reverseCodePoints`](#fn-reversecodepoints)
> - [`std::string::toHex`](#fn-tohex)

<a id="fn-tohex"></a>

> ## `toHex`

> toHex -- lowercase hex encoding, 2 bytes out per input byte, high nibble first.  ERR_OVERFLOW if 2*len exceeds MAX_STRING_BYTES; ERR_NO_SPACE if cap < 2*len (writer NOT called on error).  O(n).  Total (any bytes accepted).

```valor
public i32 toHex(
    usize len,
    (usize) -> u8 read,
    usize cap,
    (usize, u8) -> void write
)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(n)

> ### INPUT PARAMETERS
>
> - `len`: `usize`
> - `read`: `(usize) -> u8`
> - `cap`: `usize`
> - `write`: `(usize, u8) -> void`

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::string::toHex(len, read, cap, write);
> ```

> ### SEE ALSO
>
> - [`std::string::toHexLen`](#fn-tohexlen)
> - [`std::string::fromHex`](#fn-fromhex)

<a id="fn-fromhex"></a>

> ## `fromHex`

> fromHex -- decode lowercase-or-uppercase hex.  ERR_PARAM if len is odd; ERR_ENCODING if any byte is not a hex digit; ERR_NO_SPACE if cap < len/2 (writer NOT called on error).  Output length is len/2.  O(n).

```valor
public i32 fromHex(
    usize len,
    (usize) -> u8 read,
    usize cap,
    (usize, u8) -> void write
)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(n)

> ### INPUT PARAMETERS
>
> - `len`: `usize`
> - `read`: `(usize) -> u8`
> - `cap`: `usize`
> - `write`: `(usize, u8) -> void`

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::string::fromHex(len, read, cap, write);
> ```

> ### SEE ALSO
>
> - [`std::string::toHex`](#fn-tohex)
> - [`std::string::toBase64Len`](#fn-tobase64len)

<a id="fn-tobase64len"></a>

> ## `toBase64Len`

> toBase64Len -- output length = 4 * ceil(len/3) (padded).  Delivered through receive; ERR_OVERFLOW if it would exceed MAX_STRING_BYTES.

```valor
public i32 toBase64Len(usize len, (usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> See behavior above

> ### INPUT PARAMETERS
>
> - `len`: `usize`
> - `receive`: `(usize) -> void`

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::string::toBase64Len(len, receive);
> ```

> ### SEE ALSO
>
> - [`std::string::fromHex`](#fn-fromhex)
> - [`std::string::toBase64`](#fn-tobase64)

<a id="fn-tobase64"></a>

> ## `toBase64`

> toBase64 -- RFC 4648 standard Base64 with '=' padding.  ERR_OVERFLOW if the padded length exceeds MAX_STRING_BYTES; ERR_NO_SPACE if cap is too small (writer NOT called on error).  O(n).  Total (any bytes accepted).

```valor
public i32 toBase64(
    usize len,
    (usize) -> u8 read,
    usize cap,
    (usize, u8) -> void write
)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(n)

> ### INPUT PARAMETERS
>
> - `len`: `usize`
> - `read`: `(usize) -> u8`
> - `cap`: `usize`
> - `write`: `(usize, u8) -> void`

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::string::toBase64(len, read, cap, write);
> ```

> ### SEE ALSO
>
> - [`std::string::toBase64Len`](#fn-tobase64len)
> - [`std::string::toUtf16Len`](#fn-toutf16len)

<a id="fn-toutf16len"></a>

> ## `toUtf16Len`

> Number of OUTPUT BYTES for the UTF-16 encoding (2 bytes per code unit; a scalar > U+FFFF uses a surrogate pair = 4 bytes).  Requires well-formed UTF-8; ERR_ENCODING (receiver NOT called) otherwise; ERR_OVERFLOW if it would exceed MAX_STRING_BYTES.  O(n).

```valor
public i32 toUtf16Len(
    usize len,
    (usize) -> u8 read,
    (usize) -> void receive
)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(n)

> ### INPUT PARAMETERS
>
> - `len`: `usize`
> - `read`: `(usize) -> u8`
> - `receive`: `(usize) -> void`

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::string::toUtf16Len(len, read, receive);
> ```

> ### SEE ALSO
>
> - [`std::string::toBase64`](#fn-tobase64)
> - [`std::string::toUtf16`](#fn-toutf16)

<a id="fn-toutf16"></a>

> ## `toUtf16`

> Transcode to UTF-16, writing code units as bytes in the requested order: big_endian == true emits high byte first, else low byte first.  No BOM is written.  Requires well-formed UTF-8 (ERR_ENCODING otherwise); ERR_NO_SPACE if cap is smaller than the required output (query toUtf16Len first).  Writer NOT called on error.  O(n).

```valor
public i32 toUtf16(
    usize len,
    (usize) -> u8 read,
    bool big_endian,
    usize cap,
    (usize, u8) -> void write
)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(n)

> ### INPUT PARAMETERS
>
> - `len`: `usize`
> - `read`: `(usize) -> u8`
> - `big_endian`: `bool`
> - `cap`: `usize`
> - `write`: `(usize, u8) -> void`

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::string::toUtf16(len, read, big_endian, cap, write);
> ```

> ### SEE ALSO
>
> - [`std::string::toUtf16Len`](#fn-toutf16len)
> - [`std::string::jsonEscapeLen`](#fn-jsonescapelen)

<a id="fn-jsonescapelen"></a>

> ## `jsonEscapeLen`

> Output byte length of the JSON string-body escaping of the input (the content between the quotes, quotes NOT included), delivered through receive.  Control bytes < 0x20 other than the named escapes become \u00XX (6 bytes); '"' and '\\' become 2 bytes; every other byte is copied verbatim (UTF-8 is passed through unchanged).  ERR_OVERFLOW if it would exceed MAX_STRING_BYTES.  O(n).

```valor
public i32 jsonEscapeLen(
    usize len,
    (usize) -> u8 read,
    (usize) -> void receive
)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(n)

> ### INPUT PARAMETERS
>
> - `len`: `usize`
> - `read`: `(usize) -> u8`
> - `receive`: `(usize) -> void`

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::string::jsonEscapeLen(len, read, receive);
> ```

> ### SEE ALSO
>
> - [`std::string::toUtf16`](#fn-toutf16)
> - [`std::string::jsonEscape`](#fn-jsonescape)

<a id="fn-jsonescape"></a>

> ## `jsonEscape`

> Write the JSON string-body escaping (no surrounding quotes) into the caller sink.  ERR_OVERFLOW / ERR_NO_SPACE as for the sizing query (writer NOT called on error; query jsonEscapeLen first).  O(n).

```valor
public i32 jsonEscape(
    usize len,
    (usize) -> u8 read,
    usize cap,
    (usize, u8) -> void write
)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(n)

> ### INPUT PARAMETERS
>
> - `len`: `usize`
> - `read`: `(usize) -> u8`
> - `cap`: `usize`
> - `write`: `(usize, u8) -> void`

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::string::jsonEscape(len, read, cap, write);
> ```

> ### SEE ALSO
>
> - [`std::string::jsonEscapeLen`](#fn-jsonescapelen)
> - [`std::string::hash`](#fn-hash)

<a id="fn-hash"></a>

> ## `hash`

> Versioned, architecture-independent 64-bit hash of the string's bytes: the std::builtins primary-lane multiply-add fold seeded with STRING_HASH_SEED. Identical bytes hash identically on every target and every optimisation level; the value is fixed for this VERSION.  O(n), allocation-free.

```valor
public u64 hash(usize len, (usize) -> u8 read)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(n)

> ### INPUT PARAMETERS
>
> - `len`: `usize`
> - `read`: `(usize) -> u8`

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::string::hash(len, read);
> ```

> ### SEE ALSO
>
> - [`std::string::jsonEscape`](#fn-jsonescape)
> - [`std::string::hashAlt`](#fn-hashalt)

<a id="fn-hashalt"></a>

> ## `hashAlt`

> Second, decorrelated hash lane with the module's own overflow-safe fold.  Two lanes so that a single-lane collision is never treated as proof of equality; callers that need collision resistance compare both lanes.  Architecture- independent and versioned.  O(n), allocation-free.

```valor
public u64 hashAlt(usize len, (usize) -> u8 read)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(n)

> ### INPUT PARAMETERS
>
> - `len`: `usize`
> - `read`: `(usize) -> u8`

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::string::hashAlt(len, read);
> ```

> ### SEE ALSO
>
> - [`std::string::hash`](#fn-hash)

## Verification boundary

The source, native harness, golden lowering tests, and Lean model cover complementary
parts of this API. Lean proves the primary versioned hash and selected hex/Base64 laws;
it does not prove every implementation routine. The native harness exercises the compiled
callback surface, including the alternate hash lane, UTF encodings, search, JSON escaping,
overflow rejection, and concurrent immutable reads.

`print` has a separate fixed-sink harness. On 2026-08-09 its current concurrency
byte-verification precheck failed, before the core sanitizer suite ran. The older latency
report is therefore historical evidence, not a current passing gate. Default stdout may
also block, buffer, or interleave concurrent records.

[← Streams](STD-STREAM-DOC.md) · [Table of contents](standard-library/README.md) · [Text →](STD-TEXT-DOC.md)
