<!-- stdlib-reference-style: modern -->
> # `std::url`

`std::url` uRL parsing and normalization.

[Standard library](standard-library/README.md) / [Collections and text](standard-library/README.md#collections-and-text) / **URLs**

> **Source:** `stdlib/std/url.valor` · **Routines:** 59 public

## Routines

<details>
<summary>Browse all 59 routines</summary>

- [`both`](#fn-both)
- [`either`](#fn-either)
- [`addFits`](#fn-addfits)
- [`spanIsValid`](#fn-spanisvalid)
- [`validNumaPolicy`](#fn-validnumapolicy)
- [`validConcurrency`](#fn-validconcurrency)
- [`asciiAlpha`](#fn-asciialpha)
- [`asciiDigit`](#fn-asciidigit)
- [`asciiHex`](#fn-asciihex)
- [`hexValue`](#fn-hexvalue)
- [`upperHexDigit`](#fn-upperhexdigit)
- [`asciiLower`](#fn-asciilower)
- [`schemeByte`](#fn-schemebyte)
- [`unreserved`](#fn-unreserved)
- [`subDelimiter`](#fn-subdelimiter)
- [`controlByte`](#fn-controlbyte)
- [`validParseOptions`](#fn-validparseoptions)
- [`validParseLimits`](#fn-validparselimits)
- [`utf8Continuation`](#fn-utf8continuation)
- [`validateUtf8Range`](#fn-validateutf8range)
- [`validatePercentEscapes`](#fn-validatepercentescapes)
- [`validateControls`](#fn-validatecontrols)
- [`schemePrefixLength`](#fn-schemeprefixlength)
- [`hasValidSchemePrefix`](#fn-hasvalidschemeprefix)
- [`extractScheme`](#fn-extractscheme)
- [`validatePortRange`](#fn-validateportrange)
- [`parsePortRange`](#fn-parseportrange)
- [`validateIpv4Range`](#fn-validateipv4range)
- [`validateIpv6Range`](#fn-validateipv6range)
- [`registeredNameByte`](#fn-registerednamebyte)
- [`classifyHostRange`](#fn-classifyhostrange)
- [`parseAuthorityRange`](#fn-parseauthorityrange)
- [`parseAuthority`](#fn-parseauthority)
- [`parseHost`](#fn-parsehost)
- [`parseReference`](#fn-parsereference)
- [`parse`](#fn-parse)
- [`encodePassThrough`](#fn-encodepassthrough)
- [`encodedSizePolicy`](#fn-encodedsizepolicy)
- [`encodedSize`](#fn-encodedsize)
- [`encodedPairSize`](#fn-encodedpairsize)
- [`percentEncodePairIntoPolicy`](#fn-percentencodepairintopolicy)
- [`percentEncodeIntoPolicy`](#fn-percentencodeintopolicy)
- [`percentEncodeInto`](#fn-percentencodeinto)
- [`decodedSizeRange`](#fn-decodedsizerange)
- [`decodedSize`](#fn-decodedsize)
- [`percentDecodeInto`](#fn-percentdecodeinto)
- [`querySeparator`](#fn-queryseparator)
- [`queryPairs`](#fn-querypairs)
- [`parseQueryInto`](#fn-parsequeryinto)
- [`queryEncodedSize`](#fn-queryencodedsize)
- [`encodeQueryInto`](#fn-encodequeryinto)
- [`copyRange`](#fn-copyrange)
- [`removeDotSegmentsInto`](#fn-removedotsegmentsinto)
- [`resolveInto`](#fn-resolveinto)
- [`normalizeInto`](#fn-normalizeinto)
- [`rawEqual`](#fn-rawequal)
- [`stableHashRaw`](#fn-stablehashraw)
- [`schemeAllowed`](#fn-schemeallowed)
- [`viewIsValid`](#fn-viewisvalid)

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
> bool result = std::url::both(left, right);
> ```

> ### SEE ALSO
>
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)
> - [`std::url::spanIsValid`](#fn-spanisvalid)

<a id="fn-either"></a>

> ## `either`

> Provides the module's **either** operation. Returns `bool`.

```valor
public bool either(bool left, bool right)
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
> bool result = std::url::either(left, right);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::addFits`](#fn-addfits)
> - [`std::url::spanIsValid`](#fn-spanisvalid)

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
> bool result = std::url::addFits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::spanIsValid`](#fn-spanisvalid)

<a id="fn-spanisvalid"></a>

> ## `spanIsValid`

> Provides the module's **span is valid** operation. Returns `bool`.

```valor
public bool spanIsValid(usize offset, usize length, usize total)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: usize (by value)
> - `length`: usize (by value)
> - `total`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::url::spanIsValid(offset, length, total);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-validnumapolicy"></a>

> ## `validNumaPolicy`

> Provides the module's **valid numa policy** operation. Returns `bool`.

```valor
public bool validNumaPolicy(u8 policy)
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
> bool result = std::url::validNumaPolicy(policy);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-validconcurrency"></a>

> ## `validConcurrency`

> Provides the module's **valid concurrency** operation. Returns `bool`.

```valor
public bool validConcurrency(u8 policy)
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
> bool result = std::url::validConcurrency(policy);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

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
> bool result = std::url::asciiAlpha(byte);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

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
> bool result = std::url::asciiDigit(byte);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-asciihex"></a>

> ## `asciiHex`

> Provides the module's **ascii hex** operation. Returns `bool`.

```valor
public bool asciiHex(u8 byte)
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
> bool result = std::url::asciiHex(byte);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-hexvalue"></a>

> ## `hexValue`

> Provides the module's **hex value** operation. Returns `u8`.

```valor
public u8 hexValue(u8 byte)
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
> u8 result = std::url::hexValue(byte);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-upperhexdigit"></a>

> ## `upperHexDigit`

> Provides the module's **upper hex digit** operation. Returns `u8`.

```valor
public u8 upperHexDigit(u8 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u8 (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::url::upperHexDigit(value);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

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
> u8 result = std::url::asciiLower(byte);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-schemebyte"></a>

> ## `schemeByte`

> Provides the module's **scheme byte** operation. Returns `bool`.

```valor
public bool schemeByte(u8 byte)
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
> bool result = std::url::schemeByte(byte);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-unreserved"></a>

> ## `unreserved`

> Provides the module's **unreserved** operation. Returns `bool`.

```valor
public bool unreserved(u8 byte)
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
> bool result = std::url::unreserved(byte);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-subdelimiter"></a>

> ## `subDelimiter`

> Provides the module's **sub delimiter** operation. Returns `bool`.

```valor
public bool subDelimiter(u8 byte)
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
> bool result = std::url::subDelimiter(byte);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-controlbyte"></a>

> ## `controlByte`

> Provides the module's **control byte** operation. Returns `bool`.

```valor
public bool controlByte(u8 byte)
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
> bool result = std::url::controlByte(byte);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-validparseoptions"></a>

> ## `validParseOptions`

> Provides the module's **valid parse options** operation. Returns `bool`.

```valor
public bool validParseOptions(bool allow_relative_reference, bool allow_empty_host, bool strict_percent_escapes, bool validate_utf8, u8 backslash_policy, u8 control_character_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `allow_relative_reference`: bool (by value)
> - `allow_empty_host`: bool (by value)
> - `strict_percent_escapes`: bool (by value)
> - `validate_utf8`: bool (by value)
> - `backslash_policy`: u8 (by value)
> - `control_character_policy`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::url::validParseOptions(allow_relative_reference, allow_empty_host, strict_percent_escapes, validate_utf8, backslash_policy, control_character_policy);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-validparselimits"></a>

> ## `validParseLimits`

> Provides the module's **valid parse limits** operation. Returns `bool`.

```valor
public bool validParseLimits(usize max_url_bytes, usize max_scheme_bytes, usize max_authority_bytes, usize max_userinfo_bytes, usize max_host_bytes, usize max_path_bytes, usize max_query_bytes, usize max_fragment_bytes)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `max_url_bytes`: usize (by value)
> - `max_scheme_bytes`: usize (by value)
> - `max_authority_bytes`: usize (by value)
> - `max_userinfo_bytes`: usize (by value)
> - `max_host_bytes`: usize (by value)
> - `max_path_bytes`: usize (by value)
> - `max_query_bytes`: usize (by value)
> - `max_fragment_bytes`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::url::validParseLimits(max_url_bytes, max_scheme_bytes, max_authority_bytes, max_userinfo_bytes, max_host_bytes, max_path_bytes, max_query_bytes, max_fragment_bytes);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-utf8continuation"></a>

> ## `utf8Continuation`

> Provides the module's **utf8 continuation** operation. Returns `bool`.

```valor
public bool utf8Continuation(u8 byte)
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
> bool result = std::url::utf8Continuation(byte);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-validateutf8range"></a>

> ## `validateUtf8Range`

> Provides the module's **validate utf8 range** operation. Returns `i32`.

```valor
public i32 validateUtf8Range(usize start, usize length, (usize) -> u8 read_byte, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `length`: usize (by value)
> - `i32`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::url::validateUtf8Range(start, length, i32, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-validatepercentescapes"></a>

> ## `validatePercentEscapes`

> Provides the module's **validate percent escapes** operation. Returns `i32`.

```valor
public i32 validatePercentEscapes(usize start, usize length, (usize) -> u8 read_byte, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `length`: usize (by value)
> - `i32`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::url::validatePercentEscapes(start, length, i32, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-validatecontrols"></a>

> ## `validateControls`

> Provides the module's **validate controls** operation. Returns `i32`.

```valor
public i32 validateControls(usize length, u8 backslash_policy, u8 control_character_policy, (usize) -> u8 read_byte, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `backslash_policy`: u8 (by value)
> - `control_character_policy`: u8 (by value)
> - `i32`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::url::validateControls(length, backslash_policy, control_character_policy, i32, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-schemeprefixlength"></a>

> ## `schemePrefixLength`

> Provides the module's **scheme prefix length** operation. Returns `usize`.

```valor
public usize schemePrefixLength(usize length, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::url::schemePrefixLength(length, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-hasvalidschemeprefix"></a>

> ## `hasValidSchemePrefix`

> Provides the module's **has valid scheme prefix** operation. Returns `bool`.

```valor
public bool hasValidSchemePrefix(usize length, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::url::hasValidSchemePrefix(length, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-extractscheme"></a>

> ## `extractScheme`

> Provides the module's **extract scheme** operation. Returns `i32`.

```valor
public i32 extractScheme(usize length, (usize) -> u8 read_byte, (usize, usize) -> void receive_span, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `usize`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `receive_error`: usize) -> void receive_span, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::url::extractScheme(length, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-validateportrange"></a>

> ## `validatePortRange`

> Provides the module's **validate port range** operation. Returns `i32`.

```valor
public i32 validatePortRange(usize start, usize length, (usize) -> u8 read_byte, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `length`: usize (by value)
> - `i32`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::url::validatePortRange(start, length, i32, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-parseportrange"></a>

> ## `parsePortRange`

> Provides the module's **parse port range** operation. Returns `i32`.

```valor
public i32 parsePortRange(usize start, usize length, (usize) -> u8 read_byte, (u16) -> void receive_port, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `length`: usize (by value)
> - `receive_error`: (usize) -> u8 read_byte, (u16) -> void receive_port, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::url::parsePortRange(start, length, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-validateipv4range"></a>

> ## `validateIpv4Range`

> Provides the module's **validate ipv4 range** operation. Returns `i32`.

```valor
public i32 validateIpv4Range(usize start, usize length, (usize) -> u8 read_byte, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `length`: usize (by value)
> - `i32`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::url::validateIpv4Range(start, length, i32, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-validateipv6range"></a>

> ## `validateIpv6Range`

> Validates bracketed IPv6 syntax without allocating. Validates bracketed IPv6 syntax without allocating. Embedded IPv4 is accepted only in the final 32 bits and is validated by the same strict decimal rules as a standalone IPv4 host.

```valor
public i32 validateIpv6Range(usize start, usize length, (usize) -> u8 read_byte, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `length`: usize (by value)
> - `i32`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::url::validateIpv6Range(start, length, i32, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-registerednamebyte"></a>

> ## `registeredNameByte`

> Provides the module's **registered name byte** operation. Returns `bool`.

```valor
public bool registeredNameByte(u8 byte)
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
> bool result = std::url::registeredNameByte(byte);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-classifyhostrange"></a>

> ## `classifyHostRange`

> Provides the module's **classify host range** operation. Returns `i32`.

```valor
public i32 classifyHostRange(usize start, usize length, bool allow_empty, (usize) -> u8 read_byte, (u8) -> void receive_kind, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `length`: usize (by value)
> - `allow_empty`: bool (by value)
> - `receive_error`: (usize) -> u8 read_byte, (u8) -> void receive_kind, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::url::classifyHostRange(start, length, allow_empty, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-parseauthorityrange"></a>

> ## `parseAuthorityRange`

> Emits userinfo, username, password, host, and port ranges. Emits userinfo, username, password, host, and port ranges. Missing components use NO_OFFSET,0. The last '@' terminates userinfo, matching RFC authority decomposition while preventing a first-'@' host confusion.

```valor
public i32 parseAuthorityRange(usize start, usize length, bool allow_empty_host, usize max_userinfo_bytes, usize max_host_bytes, (usize) -> u8 read_byte, (u8, usize, usize) -> void receive_component, (u8) -> void receive_host_kind, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `length`: usize (by value)
> - `allow_empty_host`: bool (by value)
> - `max_userinfo_bytes`: usize (by value)
> - `max_host_bytes`: usize (by value)
> - `u8`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void receive_component, (u8) -> void receive_host_kind, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::url::parseAuthorityRange(start, length, allow_empty_host, max_userinfo_bytes, max_host_bytes, u8, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-parseauthority"></a>

> ## `parseAuthority`

> Provides the module's **parse authority** operation. Returns `i32`.

```valor
public i32 parseAuthority(usize length, bool allow_empty_host, usize max_userinfo_bytes, usize max_host_bytes, (usize) -> u8 read_byte, (u8, usize, usize) -> void receive_component, (u8) -> void receive_host_kind, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `allow_empty_host`: bool (by value)
> - `max_userinfo_bytes`: usize (by value)
> - `max_host_bytes`: usize (by value)
> - `u8`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void receive_component, (u8) -> void receive_host_kind, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::url::parseAuthority(length, allow_empty_host, max_userinfo_bytes, max_host_bytes, u8, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-parsehost"></a>

> ## `parseHost`

> Provides the module's **parse host** operation. Returns `i32`.

```valor
public i32 parseHost(usize length, bool allow_empty, (usize) -> u8 read_byte, (u8) -> void receive_kind, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `allow_empty`: bool (by value)
> - `receive_error`: (usize) -> u8 read_byte, (u8) -> void receive_kind, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::url::parseHost(length, allow_empty, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-parsereference"></a>

> ## `parseReference`

> Provides the module's **parse reference** operation. Returns `i32`.

```valor
public i32 parseReference(usize length, bool allow_relative_reference, bool allow_empty_host, bool strict_percent_escapes, bool validate_utf8, u8 backslash_policy, u8 control_character_policy, usize max_url_bytes, usize max_scheme_bytes, usize max_authority_bytes, usize max_userinfo_bytes, usize max_host_bytes, usize max_path_bytes, usize max_query_bytes, usize max_fragment_bytes, (usize) -> u8 read_byte, (u8, usize, usize) -> void receive_component, (u8) -> void receive_host_kind, (bool, bool, bool, bool) -> void receive_flags, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `allow_relative_reference`: bool (by value)
> - `allow_empty_host`: bool (by value)
> - `strict_percent_escapes`: bool (by value)
> - `validate_utf8`: bool (by value)
> - `backslash_policy`: u8 (by value)
> - `control_character_policy`: u8 (by value)
> - `max_url_bytes`: usize (by value)
> - `max_scheme_bytes`: usize (by value)
> - `max_authority_bytes`: usize (by value)
> - `max_userinfo_bytes`: usize (by value)
> - `max_host_bytes`: usize (by value)
> - `max_path_bytes`: usize (by value)
> - `max_query_bytes`: usize (by value)
> - `max_fragment_bytes`: usize (by value)
> - `u8`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void receive_component, (u8) -> void receive_host_kind, (bool, bool, bool, bool) -> void receive_flags, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::url::parseReference(length, allow_relative_reference, allow_empty_host, strict_percent_escapes, validate_utf8, backslash_policy, control_character_policy, max_url_bytes, max_scheme_bytes, max_authority_bytes, max_userinfo_bytes, max_host_bytes, max_path_bytes, max_query_bytes, max_fragment_bytes, u8, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-parse"></a>

> ## `parse`

> Provides the module's **parse** operation. Returns `i32`.

```valor
public i32 parse(usize length, bool allow_empty_host, bool strict_percent_escapes, bool validate_utf8, u8 backslash_policy, u8 control_character_policy, usize max_url_bytes, usize max_scheme_bytes, usize max_authority_bytes, usize max_userinfo_bytes, usize max_host_bytes, usize max_path_bytes, usize max_query_bytes, usize max_fragment_bytes, (usize) -> u8 read_byte, (u8, usize, usize) -> void receive_component, (u8) -> void receive_host_kind, (bool, bool, bool, bool) -> void receive_flags, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `allow_empty_host`: bool (by value)
> - `strict_percent_escapes`: bool (by value)
> - `validate_utf8`: bool (by value)
> - `backslash_policy`: u8 (by value)
> - `control_character_policy`: u8 (by value)
> - `max_url_bytes`: usize (by value)
> - `max_scheme_bytes`: usize (by value)
> - `max_authority_bytes`: usize (by value)
> - `max_userinfo_bytes`: usize (by value)
> - `max_host_bytes`: usize (by value)
> - `max_path_bytes`: usize (by value)
> - `max_query_bytes`: usize (by value)
> - `max_fragment_bytes`: usize (by value)
> - `u8`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void receive_component, (u8) -> void receive_host_kind, (bool, bool, bool, bool) -> void receive_flags, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::url::parse(length, allow_empty_host, strict_percent_escapes, validate_utf8, backslash_policy, control_character_policy, max_url_bytes, max_scheme_bytes, max_authority_bytes, max_userinfo_bytes, max_host_bytes, max_path_bytes, max_query_bytes, max_fragment_bytes, u8, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-encodepassthrough"></a>

> ## `encodePassThrough`

> Provides the module's **encode pass through** operation. Returns `bool`.

```valor
public bool encodePassThrough(u8 byte, u8 component)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte`: u8 (by value)
> - `component`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::url::encodePassThrough(byte, component);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-encodedsizepolicy"></a>

> ## `encodedSizePolicy`

> Provides the module's **encoded size policy** operation. Returns `usize`.

```valor
public usize encodedSizePolicy(usize length, u8 component, bool preserve_valid_escapes, bool space_as_plus, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `component`: u8 (by value)
> - `preserve_valid_escapes`: bool (by value)
> - `space_as_plus`: bool (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::url::encodedSizePolicy(length, component, preserve_valid_escapes, space_as_plus, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-encodedsize"></a>

> ## `encodedSize`

> Provides the module's **encoded size** operation. Returns `usize`.

```valor
public usize encodedSize(usize length, u8 component, bool preserve_valid_escapes, bool space_as_plus, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `component`: u8 (by value)
> - `preserve_valid_escapes`: bool (by value)
> - `space_as_plus`: bool (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::url::encodedSize(length, component, preserve_valid_escapes, space_as_plus, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-encodedpairsize"></a>

> ## `encodedPairSize`

> Provides the module's **encoded pair size** operation. Returns `usize`.

```valor
public usize encodedPairSize(usize pair, usize length, u8 component, bool preserve_valid_escapes, bool space_as_plus, (usize, usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `pair`: usize (by value)
> - `length`: usize (by value)
> - `component`: u8 (by value)
> - `preserve_valid_escapes`: bool (by value)
> - `space_as_plus`: bool (by value)
> - `read_byte`: (usize, usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::url::encodedPairSize(pair, length, component, preserve_valid_escapes, space_as_plus, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-percentencodepairintopolicy"></a>

> ## `percentEncodePairIntoPolicy`

> Provides the module's **percent encode pair into policy** operation. Returns `i32`.

```valor
public i32 percentEncodePairIntoPolicy(usize pair, usize length, usize output_start, usize capacity, u8 component, bool preserve_valid_escapes, bool space_as_plus, (usize, usize) -> u8 read_byte, (usize, u8) -> void write_byte, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `pair`: usize (by value)
> - `length`: usize (by value)
> - `output_start`: usize (by value)
> - `capacity`: usize (by value)
> - `component`: u8 (by value)
> - `preserve_valid_escapes`: bool (by value)
> - `space_as_plus`: bool (by value)
> - `usize`: (usize, usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `receive_error`: u8) -> void write_byte, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::url::percentEncodePairIntoPolicy(pair, length, output_start, capacity, component, preserve_valid_escapes, space_as_plus, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-percentencodeintopolicy"></a>

> ## `percentEncodeIntoPolicy`

> Provides the module's **percent encode into policy** operation. Returns `i32`.

```valor
public i32 percentEncodeIntoPolicy(usize length, usize capacity, u8 component, bool preserve_valid_escapes, bool space_as_plus, (usize) -> u8 read_byte, (usize, u8) -> void write_byte, (usize) -> void receive_length, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `component`: u8 (by value)
> - `preserve_valid_escapes`: bool (by value)
> - `space_as_plus`: bool (by value)
> - `usize`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `receive_error`: u8) -> void write_byte, (usize) -> void receive_length, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::url::percentEncodeIntoPolicy(length, capacity, component, preserve_valid_escapes, space_as_plus, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-percentencodeinto"></a>

> ## `percentEncodeInto`

> Provides the module's **percent encode into** operation. Returns `i32`.

```valor
public i32 percentEncodeInto(usize length, usize capacity, u8 component, bool preserve_valid_escapes, bool space_as_plus, (usize) -> u8 read_byte, (usize, u8) -> void write_byte, (usize) -> void receive_length, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `component`: u8 (by value)
> - `preserve_valid_escapes`: bool (by value)
> - `space_as_plus`: bool (by value)
> - `usize`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `receive_error`: u8) -> void write_byte, (usize) -> void receive_length, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::url::percentEncodeInto(length, capacity, component, preserve_valid_escapes, space_as_plus, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-decodedsizerange"></a>

> ## `decodedSizeRange`

> Provides the module's **decoded size range** operation. Returns `usize`.

```valor
public usize decodedSizeRange(usize start, usize length, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `length`: usize (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::url::decodedSizeRange(start, length, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-decodedsize"></a>

> ## `decodedSize`

> Provides the module's **decoded size** operation. Returns `usize`.

```valor
public usize decodedSize(usize length, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::url::decodedSize(length, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-percentdecodeinto"></a>

> ## `percentDecodeInto`

> Provides the module's **percent decode into** operation. Returns `i32`.

```valor
public i32 percentDecodeInto(usize length, usize capacity, bool strict_percent_escapes, bool plus_as_space, (usize) -> u8 read_byte, (usize, u8) -> void write_byte, (usize) -> void receive_length, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `strict_percent_escapes`: bool (by value)
> - `plus_as_space`: bool (by value)
> - `usize`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `receive_error`: u8) -> void write_byte, (usize) -> void receive_length, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::url::percentDecodeInto(length, capacity, strict_percent_escapes, plus_as_space, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-queryseparator"></a>

> ## `querySeparator`

> Provides the module's **query separator** operation. Returns `bool`.

```valor
public bool querySeparator(u8 byte, u8 separator_byte, bool allow_semicolon)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte`: u8 (by value)
> - `separator_byte`: u8 (by value)
> - `allow_semicolon`: bool (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::url::querySeparator(byte, separator_byte, allow_semicolon);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-querypairs"></a>

> ## `queryPairs`

> Emits raw, borrowed key/value spans in exact source order. Emits raw, borrowed key/value spans in exact source order. has_equals keeps "a" distinct from "a=". Decoding stays lazy and allocation free.

```valor
public i32 queryPairs(usize start, usize length, u8 separator_byte, bool allow_semicolon, bool keep_blank_values, bool require_equals, bool plus_as_space, bool strict_percent_escapes, bool decode_utf8, bool allow_empty_key, usize max_pairs, usize max_decoded_bytes, usize pair_capacity, (usize) -> u8 read_byte, (usize, usize, usize, usize, usize, bool) -> void receive_pair, (usize) -> void receive_count, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `length`: usize (by value)
> - `separator_byte`: u8 (by value)
> - `allow_semicolon`: bool (by value)
> - `keep_blank_values`: bool (by value)
> - `require_equals`: bool (by value)
> - `plus_as_space`: bool (by value)
> - `strict_percent_escapes`: bool (by value)
> - `decode_utf8`: bool (by value)
> - `allow_empty_key`: bool (by value)
> - `max_pairs`: usize (by value)
> - `max_decoded_bytes`: usize (by value)
> - `pair_capacity`: usize (by value)
> - `usize`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `usize`: usize (by value)
> - `usize`: usize (by value)
> - `usize`: usize (by value)
> - `receive_error`: bool) -> void receive_pair, (usize) -> void receive_count, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::url::queryPairs(start, length, separator_byte, allow_semicolon, keep_blank_values, require_equals, plus_as_space, strict_percent_escapes, decode_utf8, allow_empty_key, max_pairs, max_decoded_bytes, pair_capacity, usize, usize, usize, usize, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-parsequeryinto"></a>

> ## `parseQueryInto`

> Provides the module's **parse query into** operation. Returns `i32`.

```valor
public i32 parseQueryInto(usize start, usize length, u8 separator_byte, bool allow_semicolon, bool keep_blank_values, bool require_equals, bool plus_as_space, bool strict_percent_escapes, bool decode_utf8, bool allow_empty_key, usize max_pairs, usize max_decoded_bytes, usize pair_capacity, (usize) -> u8 read_byte, (usize, usize, usize, usize, usize, bool) -> void write_pair, (usize) -> void receive_count, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `length`: usize (by value)
> - `separator_byte`: u8 (by value)
> - `allow_semicolon`: bool (by value)
> - `keep_blank_values`: bool (by value)
> - `require_equals`: bool (by value)
> - `plus_as_space`: bool (by value)
> - `strict_percent_escapes`: bool (by value)
> - `decode_utf8`: bool (by value)
> - `allow_empty_key`: bool (by value)
> - `max_pairs`: usize (by value)
> - `max_decoded_bytes`: usize (by value)
> - `pair_capacity`: usize (by value)
> - `usize`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `usize`: usize (by value)
> - `usize`: usize (by value)
> - `usize`: usize (by value)
> - `receive_error`: bool) -> void write_pair, (usize) -> void receive_count, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::url::parseQueryInto(start, length, separator_byte, allow_semicolon, keep_blank_values, require_equals, plus_as_space, strict_percent_escapes, decode_utf8, allow_empty_key, max_pairs, max_decoded_bytes, pair_capacity, usize, usize, usize, usize, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-queryencodedsize"></a>

> ## `queryEncodedSize`

> Provides the module's **query encoded size** operation. Returns `usize`.

```valor
public usize queryEncodedSize(usize pair_count, bool form_mode, (usize) -> usize read_key_length, (usize) -> usize read_value_length, (usize) -> bool read_has_equals, (usize, usize) -> u8 read_key_byte, (usize, usize) -> u8 read_value_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `pair_count`: usize (by value)
> - `form_mode`: bool (by value)
> - `read_value_byte`: (usize) -> usize read_key_length, (usize) -> usize read_value_length, (usize) -> bool read_has_equals, (usize, usize) -> u8 read_key_byte, (usize, usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::url::queryEncodedSize(pair_count, form_mode, read_value_byte);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-encodequeryinto"></a>

> ## `encodeQueryInto`

> Provides the module's **encode query into** operation. Returns `i32`.

```valor
public i32 encodeQueryInto(usize pair_count, usize capacity, bool form_mode, (usize) -> usize read_key_length, (usize) -> usize read_value_length, (usize) -> bool read_has_equals, (usize, usize) -> u8 read_key_byte, (usize, usize) -> u8 read_value_byte, (usize, u8) -> void write_byte, (usize) -> void receive_length, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `pair_count`: usize (by value)
> - `capacity`: usize (by value)
> - `form_mode`: bool (by value)
> - `receive_error`: (usize) -> usize read_key_length, (usize) -> usize read_value_length, (usize) -> bool read_has_equals, (usize, usize) -> u8 read_key_byte, (usize, usize) -> u8 read_value_byte, (usize, u8) -> void write_byte, (usize) -> void receive_length, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::url::encodeQueryInto(pair_count, capacity, form_mode, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-copyrange"></a>

> ## `copyRange`

> Provides the module's **copy range** operation. Returns `i32`.

```valor
public i32 copyRange(usize start, usize length, usize output, (usize) -> u8 read_byte, (usize, u8) -> void write_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `length`: usize (by value)
> - `output`: usize (by value)
> - `usize`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `write_byte`: u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::url::copyRange(start, length, output, usize, write_byte);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-removedotsegmentsinto"></a>

> ## `removeDotSegmentsInto`

> Allocation-free RFC 3986 dot-segment removal. Allocation-free RFC 3986 dot-segment removal. pop_segment returns the output position immediately after removing its final path segment, never below floor. Forward in-place compaction is valid.

```valor
public i32 removeDotSegmentsInto(usize start, usize length, usize capacity, (usize) -> u8 read_byte, (usize, u8) -> void write_byte, (usize, usize) -> usize pop_segment, (usize) -> void receive_length, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `usize`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `receive_error`: u8) -> void write_byte, (usize, usize) -> usize pop_segment, (usize) -> void receive_length, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::url::removeDotSegmentsInto(start, length, capacity, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-resolveinto"></a>

> ## `resolveInto`

> resolveInto consumes raw base/reference bytes to avoid any copied UrlView. resolveInto consumes raw base/reference bytes to avoid any copied UrlView. The caller supplies component metadata captured from parseReference. This keeps resolution O(n+m), bounded, and storage-policy neutral.

```valor
public i32 resolveInto( usize base_length, usize reference_length, usize capacity, bool reference_has_scheme, bool reference_has_authority, bool reference_has_query, bool reference_has_fragment, usize base_scheme_start, usize base_scheme_length, usize base_authority_start, usize base_authority_length, usize base_path_start, usize base_path_length, usize base_query_start, usize base_query_length, bool base_has_query, usize reference_scheme_start, usize reference_scheme_length, usize reference_authority_start, usize reference_authority_length, usize reference_path_start, usize reference_path_length, usize reference_query_start, usize reference_query_length, usize reference_fragment_start, usize reference_fragment_length, bool remove_dot_segments, bool reject_backslash, (usize) -> u8 read_base, (usize) -> u8 read_reference, (usize, u8) -> void write_byte, (usize, usize) -> usize pop_segment, (usize) -> void receive_length, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `base_length`: usize (by value)
> - `reference_length`: usize (by value)
> - `capacity`: usize (by value)
> - `reference_has_scheme`: bool (by value)
> - `reference_has_authority`: bool (by value)
> - `reference_has_query`: bool (by value)
> - `reference_has_fragment`: bool (by value)
> - `base_scheme_start`: usize (by value)
> - `base_scheme_length`: usize (by value)
> - `base_authority_start`: usize (by value)
> - `base_authority_length`: usize (by value)
> - `base_path_start`: usize (by value)
> - `base_path_length`: usize (by value)
> - `base_query_start`: usize (by value)
> - `base_query_length`: usize (by value)
> - `base_has_query`: bool (by value)
> - `reference_scheme_start`: usize (by value)
> - `reference_scheme_length`: usize (by value)
> - `reference_authority_start`: usize (by value)
> - `reference_authority_length`: usize (by value)
> - `reference_path_start`: usize (by value)
> - `reference_path_length`: usize (by value)
> - `reference_query_start`: usize (by value)
> - `reference_query_length`: usize (by value)
> - `reference_fragment_start`: usize (by value)
> - `reference_fragment_length`: usize (by value)
> - `remove_dot_segments`: bool (by value)
> - `reject_backslash`: bool (by value)
> - `receive_error`: (usize) -> u8 read_base, (usize) -> u8 read_reference, (usize, u8) -> void write_byte, (usize, usize) -> usize pop_segment, (usize) -> void receive_length, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::url::resolveInto(base_length, reference_length, capacity, reference_has_scheme, reference_has_authority, reference_has_query, reference_has_fragment, base_scheme_start, base_scheme_length, base_authority_start, base_authority_length, base_path_start, base_path_length, base_query_start, base_query_length, base_has_query, reference_scheme_start, reference_scheme_length, reference_authority_start, reference_authority_length, reference_path_start, reference_path_length, reference_query_start, reference_query_length, reference_fragment_start, reference_fragment_length, remove_dot_segments, reject_backslash, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-normalizeinto"></a>

> ## `normalizeInto`

> Canonical byte emission for already parsed URLs. Canonical byte emission for already parsed URLs. RFC3986 lowercases scheme and registered-name host, uppercases percent hex, and decodes unreserved escapes. Dot-segment removal is the separate removeDotSegmentsInto pass so callers can provide the required segment-pop policy without hidden storage.

```valor
public i32 normalizeInto(usize length, usize capacity, u8 profile, usize scheme_start, usize scheme_length, usize host_start, usize host_length, (usize) -> u8 read_byte, (usize, u8) -> void write_byte, (usize) -> void receive_length, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `profile`: u8 (by value)
> - `scheme_start`: usize (by value)
> - `scheme_length`: usize (by value)
> - `host_start`: usize (by value)
> - `host_length`: usize (by value)
> - `usize`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `receive_error`: u8) -> void write_byte, (usize) -> void receive_length, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::url::normalizeInto(length, capacity, profile, scheme_start, scheme_length, host_start, host_length, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-rawequal"></a>

> ## `rawEqual`

> Provides the module's **raw equal** operation. Returns `bool`.

```valor
public bool rawEqual(usize left_length, usize right_length, (usize) -> u8 read_left, (usize) -> u8 read_right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_length`: usize (by value)
> - `right_length`: usize (by value)
> - `read_right`: (usize) -> u8 read_left, (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::url::rawEqual(left_length, right_length, read_right);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-stablehashraw"></a>

> ## `stableHashRaw`

> Provides the module's **stable hash raw** operation. Returns `u64`.

```valor
public u64 stableHashRaw(usize length, u64 fixed_seed, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `fixed_seed`: u64 (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::url::stableHashRaw(length, fixed_seed, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-schemeallowed"></a>

> ## `schemeAllowed`

> Provides the module's **scheme allowed** operation. Returns `bool`.

```valor
public bool schemeAllowed(usize scheme_start, usize scheme_length, usize allowed_count, (usize) -> u8 read_scheme_byte, (usize) -> usize read_allowed_length, (usize, usize) -> u8 read_allowed_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `scheme_start`: usize (by value)
> - `scheme_length`: usize (by value)
> - `allowed_count`: usize (by value)
> - `read_allowed_byte`: (usize) -> u8 read_scheme_byte, (usize) -> usize read_allowed_length, (usize, usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::url::schemeAllowed(scheme_start, scheme_length, allowed_count, read_allowed_byte);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

<a id="fn-viewisvalid"></a>

> ## `viewIsValid`

> Provides the module's **view is valid** operation. Returns `bool`.

```valor
public bool viewIsValid(usize byte_length, usize scheme_start, usize scheme_length, usize authority_start, usize authority_length, usize host_start, usize host_length, usize path_start, usize path_length, usize query_start, usize query_length, usize fragment_start, usize fragment_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)
> - `scheme_start`: usize (by value)
> - `scheme_length`: usize (by value)
> - `authority_start`: usize (by value)
> - `authority_length`: usize (by value)
> - `host_start`: usize (by value)
> - `host_length`: usize (by value)
> - `path_start`: usize (by value)
> - `path_length`: usize (by value)
> - `query_start`: usize (by value)
> - `query_length`: usize (by value)
> - `fragment_start`: usize (by value)
> - `fragment_length`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::url::viewIsValid(byte_length, scheme_start, scheme_length, authority_start, authority_length, host_start, host_length, path_start, path_length, query_start, query_length, fragment_start, fragment_length);
> ```

> ### SEE ALSO
>
> - [`std::url::both`](#fn-both)
> - [`std::url::either`](#fn-either)
> - [`std::url::addFits`](#fn-addfits)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Serialization](STD-SERIALIZATION-DOC.md) · [Table of contents](standard-library/README.md) · [String specification →](STD-STRING-SPEC.md)
