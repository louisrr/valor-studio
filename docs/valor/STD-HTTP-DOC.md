<!-- stdlib-reference-style: modern -->
> # `std::http`

`std::http` standard-library HTTP operations.

[Standard library](standard-library/README.md) / [Networking and security](standard-library/README.md#networking-and-security) / **HTTP**

> **Source:** `stdlib/std/http.valor` · **Routines:** 102 public

## Routines

<details>
<summary>Browse all 102 routines</summary>

- [`both`](#fn-both)
- [`either`](#fn-either)
- [`addFits`](#fn-addfits)
- [`spanIsValid`](#fn-spanisvalid)
- [`validNumaPolicy`](#fn-validnumapolicy)
- [`validConcurrency`](#fn-validconcurrency)
- [`asciiDigit`](#fn-asciidigit)
- [`asciiUpper`](#fn-asciiupper)
- [`asciiLowerAlpha`](#fn-asciiloweralpha)
- [`asciiAlpha`](#fn-asciialpha)
- [`asciiHex`](#fn-asciihex)
- [`hexValue`](#fn-hexvalue)
- [`hexDigit`](#fn-hexdigit)
- [`asciiLower`](#fn-asciilower)
- [`tokenByte`](#fn-tokenbyte)
- [`owsByte`](#fn-owsbyte)
- [`vcharByte`](#fn-vcharbyte)
- [`obsTextByte`](#fn-obstextbyte)
- [`fieldValueByte`](#fn-fieldvaluebyte)
- [`targetByte`](#fn-targetbyte)
- [`validLimits`](#fn-validlimits)
- [`parseMethod`](#fn-parsemethod)
- [`matchLiteral`](#fn-matchliteral)
- [`statusCode`](#fn-statuscode)
- [`validateHeaderName`](#fn-validateheadername)
- [`validateHeaderValue`](#fn-validateheadervalue)
- [`headerNameEqual`](#fn-headernameequal)
- [`parseContentLength`](#fn-parsecontentlength)
- [`findByte`](#fn-findbyte)
- [`scanLf`](#fn-scanlf)
- [`lineContentEnd`](#fn-linecontentend)
- [`bareLineFeed`](#fn-barelinefeed)
- [`methodTokenValid`](#fn-methodtokenvalid)
- [`classifyMethod`](#fn-classifymethod)
- [`classifyVersion`](#fn-classifyversion)
- [`parseHttpVersion`](#fn-parsehttpversion)
- [`parseRequestLine`](#fn-parserequestline)
- [`parseStatusLine`](#fn-parsestatusline)
- [`parseHeaderField`](#fn-parseheaderfield)
- [`parseHeaderBlock`](#fn-parseheaderblock)
- [`parseRequestHead`](#fn-parserequesthead)
- [`parseResponseHead`](#fn-parseresponsehead)
- [`flagBit`](#fn-flagbit)
- [`hasFlag`](#fn-hasflag)
- [`readBigEndian`](#fn-readbigendian)
- [`stripReservedBit`](#fn-stripreservedbit)
- [`prefaceByte`](#fn-prefacebyte)
- [`validateClientPreface`](#fn-validateclientpreface)
- [`emitClientPreface`](#fn-emitclientpreface)
- [`parseFrameHeader`](#fn-parseframeheader)
- [`mapFrameType`](#fn-mapframetype)
- [`encodeFrameHeader`](#fn-encodeframeheader)
- [`validateFrame`](#fn-validateframe)
- [`parseSettings`](#fn-parsesettings)
- [`applySetting`](#fn-applysetting)
- [`makeSettingsAck`](#fn-makesettingsack)
- [`ignoreError`](#fn-ignoreerror)
- [`parsePing`](#fn-parseping)
- [`makePingAck`](#fn-makepingack)
- [`parseGoAway`](#fn-parsegoaway)
- [`encodeGoAway`](#fn-encodegoaway)
- [`encodeRstStream`](#fn-encoderststream)
- [`putBigEndian32`](#fn-putbigendian32)
- [`streamTransition`](#fn-streamtransition)
- [`receiveFrame`](#fn-receiveframe)
- [`sendFrame`](#fn-sendframe)
- [`openStream`](#fn-openstream)
- [`resetStream`](#fn-resetstream)
- [`closeStream`](#fn-closestream)
- [`beginGracefulShutdown`](#fn-begingracefulshutdown)
- [`maxWindowSigned`](#fn-maxwindowsigned)
- [`minWindowSigned`](#fn-minwindowsigned)
- [`windowUpdateValid`](#fn-windowupdatevalid)
- [`windowAfterUpdate`](#fn-windowafterupdate)
- [`windowConsumeValid`](#fn-windowconsumevalid)
- [`windowAfterConsume`](#fn-windowafterconsume)
- [`applyConnectionWindowUpdate`](#fn-applyconnectionwindowupdate)
- [`applyStreamWindowUpdate`](#fn-applystreamwindowupdate)
- [`consumeConnectionWindow`](#fn-consumeconnectionwindow)
- [`consumeStreamWindow`](#fn-consumestreamwindow)
- [`reserveSendCredit`](#fn-reservesendcredit)
- [`initialWindowChangeValid`](#fn-initialwindowchangevalid)
- [`windowAfterInitialChange`](#fn-windowafterinitialchange)
- [`decodeInteger`](#fn-decodeinteger)
- [`encodeInteger`](#fn-encodeinteger)
- [`decodeString`](#fn-decodestring)
- [`encodeString`](#fn-encodestring)
- [`capture_into_header`](#fn-capture-into-header)
- [`integerEncodedLength`](#fn-integerencodedlength)
- [`staticIndexValid`](#fn-staticindexvalid)
- [`staticHasValue`](#fn-statichasvalue)
- [`dynamicEntrySize`](#fn-dynamicentrysize)
- [`dynamicInsertFits`](#fn-dynamicinsertfits)
- [`evictToFit`](#fn-evicttofit)
- [`applyTableSizeUpdate`](#fn-applytablesizeupdate)
- [`resizeDynamicTable`](#fn-resizedynamictable)
- [`huffmanPaddingValid`](#fn-huffmanpaddingvalid)
- [`huffmanDecode`](#fn-huffmandecode)
- [`classifyRepresentation`](#fn-classifyrepresentation)
- [`representationPrefixBits`](#fn-representationprefixbits)
- [`decodeHeaderBlock`](#fn-decodeheaderblock)
- [`skipString`](#fn-skipstring)

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
> bool result = std::http::both(left, right);
> ```

> ### SEE ALSO
>
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)
> - [`std::http::spanIsValid`](#fn-spanisvalid)

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
> bool result = std::http::either(left, right);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::addFits`](#fn-addfits)
> - [`std::http::spanIsValid`](#fn-spanisvalid)

<a id="fn-addfits"></a>

> ## `addFits`

> Provides the module's **add fits** operation. Returns `bool`.

```valor
public bool addFits(u64 left, u64 right)
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
> bool result = std::http::addFits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::spanIsValid`](#fn-spanisvalid)

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
> bool result = std::http::spanIsValid(offset, length, total);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

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
> bool result = std::http::validNumaPolicy(policy);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

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
> bool result = std::http::validConcurrency(policy);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

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
> bool result = std::http::asciiDigit(byte);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-asciiupper"></a>

> ## `asciiUpper`

> Provides the module's **ascii upper** operation. Returns `bool`.

```valor
public bool asciiUpper(u8 byte)
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
> bool result = std::http::asciiUpper(byte);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-asciiloweralpha"></a>

> ## `asciiLowerAlpha`

> Provides the module's **ascii lower alpha** operation. Returns `bool`.

```valor
public bool asciiLowerAlpha(u8 byte)
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
> bool result = std::http::asciiLowerAlpha(byte);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

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
> bool result = std::http::asciiAlpha(byte);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

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
> bool result = std::http::asciiHex(byte);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

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
> u8 result = std::http::hexValue(byte);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-hexdigit"></a>

> ## `hexDigit`

> Provides the module's **hex digit** operation. Returns `u8`.

```valor
public u8 hexDigit(u8 value)
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
> u8 result = std::http::hexDigit(value);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

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
> u8 result = std::http::asciiLower(byte);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-tokenbyte"></a>

> ## `tokenByte`

> RFC 9110 token character: alnum plus a fixed punctuation set. RFC 9110 token character: alnum plus a fixed punctuation set. No allocation, no lookup table; a scalar or a 16-lane SIMD scan must agree byte for byte.

```valor
public bool tokenByte(u8 byte)
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
> bool result = std::http::tokenByte(byte);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-owsbyte"></a>

> ## `owsByte`

> Optional (obsolete) whitespace: SP or HTAB.

```valor
public bool owsByte(u8 byte)
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
> bool result = std::http::owsByte(byte);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-vcharbyte"></a>

> ## `vcharByte`

> VCHAR (visible ASCII). VCHAR (visible ASCII). obs-text (0x80..0xFF) is admitted only when policy allows it, checked by the caller with obsTextByte.

```valor
public bool vcharByte(u8 byte)
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
> bool result = std::http::vcharByte(byte);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-obstextbyte"></a>

> ## `obsTextByte`

> Provides the module's **obs text byte** operation. Returns `bool`.

```valor
public bool obsTextByte(u8 byte)
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
> bool result = std::http::obsTextByte(byte);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-fieldvaluebyte"></a>

> ## `fieldValueByte`

> A legal field-value byte given the obs-text policy. A legal field-value byte given the obs-text policy. Field values reject controls other than SP/HTAB; CR and LF are handled by the line scanner.

```valor
public bool fieldValueByte(u8 byte, bool allow_obs_text)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte`: u8 (by value)
> - `allow_obs_text`: bool (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::http::fieldValueByte(byte, allow_obs_text);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-targetbyte"></a>

> ## `targetByte`

> A request-target byte in origin/absolute/authority/asterisk forms is any VCHAR; detailed grammar is delegated to std::url on demand. A request-target byte in origin/absolute/authority/asterisk forms is any VCHAR; detailed grammar is delegated to std::url on demand.

```valor
public bool targetByte(u8 byte)
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
> bool result = std::http::targetByte(byte);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-validlimits"></a>

> ## `validLimits`

> Limits are supplied to the primitives as individual scalar arguments rather than as a struct value: Valor v0.1 stdlib functions communicate only through scalars and callbacks, so the HttpLimits struct is an ABI/descriptor type for callers, and validLimits checks the same fields passed positionally. Limits are supplied to the primitives as individual scalar arguments rather than as a struct value: Valor v0.1 stdlib functions communicate only through scalars and callbacks, so the HttpLimits struct is an ABI/descriptor type for callers, and validLimits checks the same fields passed positionally.

```valor
public bool validLimits(u32 max_start_line_bytes, u32 max_header_count, u32 max_header_name_bytes, u32 max_header_value_bytes, u32 max_header_block_bytes, u64 max_body_bytes)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `max_start_line_bytes`: u32 (by value)
> - `max_header_count`: u32 (by value)
> - `max_header_name_bytes`: u32 (by value)
> - `max_header_value_bytes`: u32 (by value)
> - `max_header_block_bytes`: u32 (by value)
> - `max_body_bytes`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::http::validLimits(max_start_line_bytes, max_header_count, max_header_name_bytes, max_header_value_bytes, max_header_block_bytes, max_body_bytes);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-parsemethod"></a>

> ## `parseMethod`

> Classify a method token by exact byte identity. Classify a method token by exact byte identity. Returns a known METHOD_* id, or METHOD_EXTENSION when the bytes form a valid but unknown token. Invalid token bytes yield ERR_INVALID_METHOD via receive_error and a METHOD_EXTENSION fallthrough is not emitted. The original span is preserved by the caller.

```valor
public i32 parseMethod(usize start, usize length, (usize) -> u8 read_byte, (u8) -> void receive_method, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `length`: usize (by value)
> - `receive_error`: (usize) -> u8 read_byte, (u8) -> void receive_method, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::parseMethod(start, length, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-matchliteral"></a>

> ## `matchLiteral`

> Compare a span against up to seven fixed uppercase bytes of a known method. Compare a span against up to seven fixed uppercase bytes of a known method. Trailing zero arguments are ignored when want_length < 7.

```valor
public bool matchLiteral(usize start, usize length, (usize) -> u8 read_byte, u8 c0, u8 c1, u8 c2, u8 c3, u8 c4, u8 c5, u8 c6, usize want_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `length`: usize (by value)
> - `want_length`: (usize) -> u8 read_byte, u8 c0, u8 c1, u8 c2, u8 c3, u8 c4, u8 c5, u8 c6, usize (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::http::matchLiteral(start, length, want_length);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-statuscode"></a>

> ## `statusCode`

> Validate a numeric status value and emit it. Validate a numeric status value and emit it. Rejects values outside the three-digit HTTP status domain without an explicit internal path.

```valor
public i32 statusCode(u16 value, (u16) -> void receive_status, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u16 (by value)
> - `i32`: (u16) -> void receive_status, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::statusCode(value, i32, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-validateheadername"></a>

> ## `validateHeaderName`

> Validate a header field-name token. Validate a header field-name token. Bounded by max bytes; ASCII token grammar.

```valor
public i32 validateHeaderName(usize start, usize length, u32 max_bytes, (usize) -> u8 read_byte, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `length`: usize (by value)
> - `max_bytes`: u32 (by value)
> - `i32`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::validateHeaderName(start, length, max_bytes, i32, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-validateheadervalue"></a>

> ## `validateHeaderValue`

> Validate a header field-value. Validate a header field-value. Rejects prohibited control bytes; retains exact bytes (no normalization). Leading/trailing OWS is permitted by grammar and is not stripped here.

```valor
public i32 validateHeaderValue(usize start, usize length, u32 max_bytes, bool allow_obs_text, (usize) -> u8 read_byte, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `length`: usize (by value)
> - `max_bytes`: u32 (by value)
> - `allow_obs_text`: bool (by value)
> - `i32`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::validateHeaderValue(start, length, max_bytes, allow_obs_text, i32, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-headernameequal"></a>

> ## `headerNameEqual`

> ASCII case-insensitive header-name comparison without allocating.

```valor
public bool headerNameEqual(usize a_start, usize a_length, usize b_start, usize b_length, (usize) -> u8 read_a, (usize) -> u8 read_b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a_start`: usize (by value)
> - `a_length`: usize (by value)
> - `b_start`: usize (by value)
> - `b_length`: usize (by value)
> - `read_b`: (usize) -> u8 read_a, (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::http::headerNameEqual(a_start, a_length, b_start, b_length, read_b);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-parsecontentlength"></a>

> ## `parseContentLength`

> Parse a Content-Length field value into a u64. Parse a Content-Length field value into a u64. Rejects empty values, non-digit bytes, embedded whitespace disallowed by grammar, and decimal overflow. A comma list that does not canonicalize to one identical value is rejected by the caller with parseContentLengthList.

```valor
public i32 parseContentLength(usize start, usize length, (usize) -> u8 read_byte, (u64) -> void receive_value, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `length`: usize (by value)
> - `receive_error`: (usize) -> u8 read_byte, (u64) -> void receive_value, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::parseContentLength(start, length, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-findbyte"></a>

> ## `findByte`

> Linear delimiter scan over [start, end). Linear delimiter scan over [start, end). Returns index or NO_OFFSET. Suitable for scalar or 16-lane SIMD lowering; both must agree on the returned index.

```valor
public usize findByte(usize start, usize end, u8 needle, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `end`: usize (by value)
> - `needle`: u8 (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::http::findByte(start, end, needle, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-scanlf"></a>

> ## `scanLf`

> Index of the next LF (0x0A) in [cursor, end), or NO_OFFSET when absent.

```valor
public usize scanLf(usize cursor, usize end, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `cursor`: usize (by value)
> - `end`: usize (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::http::scanLf(cursor, end, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-linecontentend"></a>

> ## `lineContentEnd`

> Content end of a line whose LF is at lf: strips a single preceding CR.

```valor
public usize lineContentEnd(usize cursor, usize lf, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `cursor`: usize (by value)
> - `lf`: usize (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::http::lineContentEnd(cursor, lf, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-barelinefeed"></a>

> ## `bareLineFeed`

> True when the line ending at lf uses a bare LF (no CR) — rejected in strict.

```valor
public bool bareLineFeed(usize cursor, usize lf, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `cursor`: usize (by value)
> - `lf`: usize (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::http::bareLineFeed(cursor, lf, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-methodtokenvalid"></a>

> ## `methodTokenValid`

> True when every byte of the span is a valid token byte.

```valor
public bool methodTokenValid(usize start, usize length, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `length`: usize (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::http::methodTokenValid(start, length, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-classifymethod"></a>

> ## `classifyMethod`

> Map an already token-validated span to a known method id or METHOD_EXTENSION.

```valor
public u8 classifyMethod(usize start, usize length, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `length`: usize (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::http::classifyMethod(start, length, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-classifyversion"></a>

> ## `classifyVersion`

> Map an "HTTP/x.y" span to HTTP_1_0/HTTP_1_1, or 255 when the shape is invalid.

```valor
public u8 classifyVersion(usize start, usize length, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `length`: usize (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::http::classifyVersion(start, length, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-parsehttpversion"></a>

> ## `parseHttpVersion`

> Public "HTTP/x.y" version-token parser. Public "HTTP/x.y" version-token parser. Emits HTTP_1_0 or HTTP_1_1, or reports ERR_INVALID_VERSION for any other shape or major/minor combination.

```valor
public i32 parseHttpVersion(usize start, usize length, (usize) -> u8 read_byte, (u8) -> void receive_version, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `length`: usize (by value)
> - `receive_error`: (usize) -> u8 read_byte, (u8) -> void receive_version, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::parseHttpVersion(start, length, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-parserequestline"></a>

> ## `parseRequestLine`

> Parse "method SP request-target SP HTTP-version" over [start, line_end).

```valor
public i32 parseRequestLine(usize start, usize line_end, (usize) -> u8 read_byte, (u8, usize, usize, u8) -> void receive_request_line, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `line_end`: usize (by value)
> - `u8`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `usize`: usize (by value)
> - `receive_error`: u8) -> void receive_request_line, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::parseRequestLine(start, line_end, u8, usize, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-parsestatusline"></a>

> ## `parseStatusLine`

> Parse "HTTP-version SP status-code SP [reason]" over [start, line_end). Parse "HTTP-version SP status-code SP [reason]" over [start, line_end). allow_obs_text controls whether obs-text bytes are accepted in the reason.

```valor
public i32 parseStatusLine(usize start, usize line_end, bool allow_obs_text, (usize) -> u8 read_byte, (u8, u16, usize, usize) -> void receive_status_line, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `line_end`: usize (by value)
> - `allow_obs_text`: bool (by value)
> - `u8`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `u16`: u16 (by value)
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void receive_status_line, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::parseStatusLine(start, line_end, allow_obs_text, u8, u16, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-parseheaderfield"></a>

> ## `parseHeaderField`

> Parse a single "name: value" field over [start, content_end).

```valor
public i32 parseHeaderField(usize start, usize content_end, u32 max_name_bytes, u32 max_value_bytes, bool allow_obs_text, (usize) -> u8 read_byte, (usize, usize, usize, usize) -> void receive_header, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `content_end`: usize (by value)
> - `max_name_bytes`: u32 (by value)
> - `max_value_bytes`: u32 (by value)
> - `allow_obs_text`: bool (by value)
> - `usize`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void receive_header, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::parseHeaderField(start, content_end, max_name_bytes, max_value_bytes, allow_obs_text, usize, usize, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-parseheaderblock"></a>

> ## `parseHeaderBlock`

> Parse the header block starting at cursor until the terminating empty line. Parse the header block starting at cursor until the terminating empty line. Streams each field via receive_header, then emits the consumed end index via receive_consumed. Returns NEED_INPUT when the block is incomplete.

```valor
public i32 parseHeaderBlock(usize cursor, usize end, u32 max_header_count, u32 max_name_bytes, u32 max_value_bytes, u32 max_block_bytes, bool allow_obs_text, bool allow_obs_fold, bool reject_ws_before_colon, bool crlf_only, (usize) -> u8 read_byte, (usize, usize, usize, usize) -> void receive_header, (usize) -> void receive_consumed, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `cursor`: usize (by value)
> - `end`: usize (by value)
> - `max_header_count`: u32 (by value)
> - `max_name_bytes`: u32 (by value)
> - `max_value_bytes`: u32 (by value)
> - `max_block_bytes`: u32 (by value)
> - `allow_obs_text`: bool (by value)
> - `allow_obs_fold`: bool (by value)
> - `reject_ws_before_colon`: bool (by value)
> - `crlf_only`: bool (by value)
> - `usize`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void receive_header, (usize) -> void receive_consumed, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::parseHeaderBlock(cursor, end, max_header_count, max_name_bytes, max_value_bytes, max_block_bytes, allow_obs_text, allow_obs_fold, reject_ws_before_colon, crlf_only, usize, usize, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-parserequesthead"></a>

> ## `parseRequestHead`

> Parse an incremental request head from [start, end).

```valor
public i32 parseRequestHead(usize start, usize end, u32 max_start_line_bytes, u32 max_header_count, u32 max_name_bytes, u32 max_value_bytes, u32 max_block_bytes, bool allow_obs_text, bool allow_obs_fold, bool reject_ws_before_colon, bool crlf_only, (usize) -> u8 read_byte, (u8, usize, usize, u8) -> void receive_request_line, (usize, usize, usize, usize) -> void receive_header, (usize) -> void receive_consumed, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `end`: usize (by value)
> - `max_start_line_bytes`: u32 (by value)
> - `max_header_count`: u32 (by value)
> - `max_name_bytes`: u32 (by value)
> - `max_value_bytes`: u32 (by value)
> - `max_block_bytes`: u32 (by value)
> - `allow_obs_text`: bool (by value)
> - `allow_obs_fold`: bool (by value)
> - `reject_ws_before_colon`: bool (by value)
> - `crlf_only`: bool (by value)
> - `u8`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `usize`: usize (by value)
> - `receive_error`: u8) -> void receive_request_line, (usize, usize, usize, usize) -> void receive_header, (usize) -> void receive_consumed, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::parseRequestHead(start, end, max_start_line_bytes, max_header_count, max_name_bytes, max_value_bytes, max_block_bytes, allow_obs_text, allow_obs_fold, reject_ws_before_colon, crlf_only, u8, usize, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-parseresponsehead"></a>

> ## `parseResponseHead`

> Parse an incremental response head from [start, end).

```valor
public i32 parseResponseHead(usize start, usize end, u32 max_start_line_bytes, u32 max_header_count, u32 max_name_bytes, u32 max_value_bytes, u32 max_block_bytes, bool allow_obs_text, bool allow_obs_fold, bool reject_ws_before_colon, bool crlf_only, (usize) -> u8 read_byte, (u8, u16, usize, usize) -> void receive_status_line, (usize, usize, usize, usize) -> void receive_header, (usize) -> void receive_consumed, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `end`: usize (by value)
> - `max_start_line_bytes`: u32 (by value)
> - `max_header_count`: u32 (by value)
> - `max_name_bytes`: u32 (by value)
> - `max_value_bytes`: u32 (by value)
> - `max_block_bytes`: u32 (by value)
> - `allow_obs_text`: bool (by value)
> - `allow_obs_fold`: bool (by value)
> - `reject_ws_before_colon`: bool (by value)
> - `crlf_only`: bool (by value)
> - `u8`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `u16`: u16 (by value)
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void receive_status_line, (usize, usize, usize, usize) -> void receive_header, (usize) -> void receive_consumed, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::parseResponseHead(start, end, max_start_line_bytes, max_header_count, max_name_bytes, max_value_bytes, max_block_bytes, allow_obs_text, allow_obs_fold, reject_ws_before_colon, crlf_only, u8, u16, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-flagbit"></a>

> ## `flagBit`

> Returns 1 when bit k (0 = least significant) of a byte-sized value is set.

```valor
public u8 flagBit(u8 value, u8 k)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u8 (by value)
> - `k`: u8 (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::http::flagBit(value, k);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-hasflag"></a>

> ## `hasFlag`

> True when a specific flag mask (single bit) is present in a flags byte.

```valor
public bool hasFlag(u8 flags, u8 mask)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u8 (by value)
> - `mask`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::http::hasFlag(flags, mask);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-readbigendian"></a>

> ## `readBigEndian`

> Assemble an unsigned big-endian integer from n bytes at start (n in 1..8).

```valor
public u64 readBigEndian(usize start, usize n, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `n`: usize (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::http::readBigEndian(start, n, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-stripreservedbit"></a>

> ## `stripReservedBit`

> Strip the top (reserved) bit of a 32-bit big-endian field, yielding 31 bits.

```valor
public u32 stripReservedBit(u64 field32)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `field32`: u64 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::http::stripReservedBit(field32);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-prefacebyte"></a>

> ## `prefaceByte`

> The 24-byte client preface: "PRI * HTTP/2.0\r\n\r\nSM\r\n\r\n".

```valor
public u8 prefaceByte(usize index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: usize (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::http::prefaceByte(index);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-validateclientpreface"></a>

> ## `validateClientPreface`

> Validate the 24-byte client preface at [start, start+24). Validate the 24-byte client preface at [start, start+24). Exact byte match; no partial state transition is implied by a mismatch.

```valor
public i32 validateClientPreface(usize start, (usize) -> u8 read_byte, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `i32`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::validateClientPreface(start, i32, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-emitclientpreface"></a>

> ## `emitClientPreface`

> Emit the 24-byte client preface through put_byte(index, byte).

```valor
public i32 emitClientPreface((usize, u8) -> void put_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `put_byte`: (usize, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::emitClientPreface(put_byte);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-parseframeheader"></a>

> ## `parseFrameHeader`

> Parse the fixed 9-byte frame header at [start, start+9). Parse the fixed 9-byte frame header at [start, start+9). Emits receive_header(length, type, flags, stream_id) with the reserved bit stripped from stream_id. Unknown wire types are surfaced as their raw value; callers map to FRAME_UNKNOWN via mapFrameType.

```valor
public i32 parseFrameHeader(usize start, (usize) -> u8 read_byte, (u32, u8, u8, u32) -> void receive_header, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `u32`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `u8`: u8 (by value)
> - `u8`: u8 (by value)
> - `receive_error`: u32) -> void receive_header, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::parseFrameHeader(start, u32, u8, u8, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-mapframetype"></a>

> ## `mapFrameType`

> Map a wire frame-type byte to a known FRAME_* id or FRAME_UNKNOWN.

```valor
public u8 mapFrameType(u8 type_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `type_byte`: u8 (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::http::mapFrameType(type_byte);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-encodeframeheader"></a>

> ## `encodeFrameHeader`

> Encode a 9-byte frame header. Encode a 9-byte frame header. length must fit 24 bits; stream_id 31 bits.

```valor
public i32 encodeFrameHeader(u32 length, u8 type_byte, u8 flags, u32 stream_id, (usize, u8) -> void put_byte, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: u32 (by value)
> - `type_byte`: u8 (by value)
> - `flags`: u8 (by value)
> - `stream_id`: u32 (by value)
> - `i32`: (usize, u8) -> void put_byte, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::encodeFrameHeader(length, type_byte, flags, stream_id, i32, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-validateframe"></a>

> ## `validateFrame`

> Validate a parsed frame header against configured maxima and structural rules that do not require connection history. Validate a parsed frame header against configured maxima and structural rules that do not require connection history. stream_zero_required and stream_nonzero_required encode the per-type stream rule; length bounds and the declared payload length are checked against max_frame_size and available bytes.

```valor
public i32 validateFrame(u32 length, u8 type_byte, u32 stream_id, u32 max_frame_size, usize available_payload, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: u32 (by value)
> - `type_byte`: u8 (by value)
> - `stream_id`: u32 (by value)
> - `max_frame_size`: u32 (by value)
> - `available_payload`: usize (by value)
> - `receive_error`: (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::validateFrame(length, type_byte, stream_id, max_frame_size, available_payload, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-parsesettings"></a>

> ## `parseSettings`

> Parse a SETTINGS payload of length bytes (must be a multiple of 6). Parse a SETTINGS payload of length bytes (must be a multiple of 6). Each entry is streamed as receive_setting(id, value) in wire order.

```valor
public i32 parseSettings(usize start, usize length, (usize) -> u8 read_byte, (u16, u32) -> void receive_setting, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `length`: usize (by value)
> - `u16`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `receive_error`: u32) -> void receive_setting, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::parseSettings(start, length, u16, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-applysetting"></a>

> ## `applySetting`

> Validate a single setting id/value pair against protocol ranges. Validate a single setting id/value pair against protocol ranges. Unknown ids are ignored (must be tolerated), not rejected.

```valor
public i32 applySetting(u16 id, u32 value, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `id`: u16 (by value)
> - `value`: u32 (by value)
> - `receive_error`: (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::applySetting(id, value, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-makesettingsack"></a>

> ## `makeSettingsAck`

> Emit a SETTINGS ACK frame (9-byte header, zero length, ACK flag, stream 0).

```valor
public i32 makeSettingsAck((usize, u8) -> void put_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `put_byte`: (usize, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::makeSettingsAck(put_byte);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-ignoreerror"></a>

> ## `ignoreError`

> A do-nothing error sink for encoders whose inputs are already validated.

```valor
public void ignoreError(i32 code, usize offset, usize detail)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `code`: i32 (by value)
> - `offset`: usize (by value)
> - `detail`: usize (by value)

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::http::ignoreError(code, offset, detail);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-parseping"></a>

> ## `parsePing`

> Validate a PING frame length (must be exactly 8). Validate a PING frame length (must be exactly 8). Opaque data is a caller view.

```valor
public i32 parsePing(u32 length, u32 stream_id, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: u32 (by value)
> - `stream_id`: u32 (by value)
> - `receive_error`: (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::parsePing(length, stream_id, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-makepingack"></a>

> ## `makePingAck`

> Emit a PING ACK frame, copying the 8 opaque bytes from [data_start, +8).

```valor
public i32 makePingAck(usize data_start, (usize) -> u8 read_byte, (usize, u8) -> void put_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `data_start`: usize (by value)
> - `usize`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `put_byte`: u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::makePingAck(data_start, usize, put_byte);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-parsegoaway"></a>

> ## `parseGoAway`

> Parse a GOAWAY payload (length >= 8). Parse a GOAWAY payload (length >= 8). Emits last-stream, error-code, and the opaque debug-data span. Debug bytes are preserved, not interpreted.

```valor
public i32 parseGoAway(usize start, usize length, (usize) -> u8 read_byte, (u32, u32, usize, usize) -> void receive_goaway, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `length`: usize (by value)
> - `u32`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `u32`: u32 (by value)
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void receive_goaway, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::parseGoAway(start, length, u32, u32, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-encodegoaway"></a>

> ## `encodeGoAway`

> Encode a GOAWAY frame with no debug data (8-byte payload).

```valor
public i32 encodeGoAway(u32 last_stream, u32 error_code, (usize, u8) -> void put_byte, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `last_stream`: u32 (by value)
> - `error_code`: u32 (by value)
> - `i32`: (usize, u8) -> void put_byte, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::encodeGoAway(last_stream, error_code, i32, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-encoderststream"></a>

> ## `encodeRstStream`

> Encode an RST_STREAM frame (4-byte payload carrying the error code).

```valor
public i32 encodeRstStream(u32 stream_id, u32 error_code, (usize, u8) -> void put_byte, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `stream_id`: u32 (by value)
> - `error_code`: u32 (by value)
> - `i32`: (usize, u8) -> void put_byte, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::encodeRstStream(stream_id, error_code, i32, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-putbigendian32"></a>

> ## `putBigEndian32`

> Write a 32-bit big-endian value at offset through put_byte.

```valor
public void putBigEndian32(usize offset, u32 value, (usize, u8) -> void put_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: usize (by value)
> - `value`: u32 (by value)
> - `put_byte`: (usize, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::http::putBigEndian32(offset, value, put_byte);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-streamtransition"></a>

> ## `streamTransition`

> Provides the module's **stream transition** operation. Returns `u8`.

```valor
public u8 streamTransition(u8 state, u8 frame_type, bool is_local, bool end)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state`: u8 (by value)
> - `frame_type`: u8 (by value)
> - `is_local`: bool (by value)
> - `end`: bool (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::http::streamTransition(state, frame_type, is_local, end);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-receiveframe"></a>

> ## `receiveFrame`

> Drive a receive event, emitting the new state or a stream error.

```valor
public i32 receiveFrame(u8 state, u8 frame_type, bool end, u32 stream_id, (u8) -> void receive_state, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state`: u8 (by value)
> - `frame_type`: u8 (by value)
> - `end`: bool (by value)
> - `stream_id`: u32 (by value)
> - `i32`: (u8) -> void receive_state, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::receiveFrame(state, frame_type, end, stream_id, i32, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-sendframe"></a>

> ## `sendFrame`

> Drive a send event, emitting the new state or a stream error.

```valor
public i32 sendFrame(u8 state, u8 frame_type, bool end, u32 stream_id, (u8) -> void receive_state, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state`: u8 (by value)
> - `frame_type`: u8 (by value)
> - `end`: bool (by value)
> - `stream_id`: u32 (by value)
> - `i32`: (u8) -> void receive_state, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::sendFrame(state, frame_type, end, stream_id, i32, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-openstream"></a>

> ## `openStream`

> Open a new stream from IDLE with a HEADERS event, returning the resulting state. Open a new stream from IDLE with a HEADERS event, returning the resulting state. Enforces client/server stream-id parity and monotonic ordering.

```valor
public i32 openStream(u32 stream_id, u32 last_opened, bool is_local, bool initiator_is_client, bool end, (u8) -> void receive_state, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `stream_id`: u32 (by value)
> - `last_opened`: u32 (by value)
> - `is_local`: bool (by value)
> - `initiator_is_client`: bool (by value)
> - `end`: bool (by value)
> - `i32`: (u8) -> void receive_state, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::openStream(stream_id, last_opened, is_local, initiator_is_client, end, i32, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-resetstream"></a>

> ## `resetStream`

> Force a stream to CLOSED via RST_STREAM semantics.

```valor
public i32 resetStream(u8 state, u32 stream_id, (u8) -> void receive_state, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state`: u8 (by value)
> - `stream_id`: u32 (by value)
> - `i32`: (u8) -> void receive_state, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::resetStream(state, stream_id, i32, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-closestream"></a>

> ## `closeStream`

> Close a stream that has completed both directions.

```valor
public i32 closeStream(u8 state, u32 stream_id, (u8) -> void receive_state, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state`: u8 (by value)
> - `stream_id`: u32 (by value)
> - `i32`: (u8) -> void receive_state, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::closeStream(state, stream_id, i32, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-begingracefulshutdown"></a>

> ## `beginGracefulShutdown`

> Begin graceful shutdown by emitting a GOAWAY with the given last-stream id.

```valor
public i32 beginGracefulShutdown(u32 last_stream, u32 error_code, (usize, u8) -> void put_byte, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `last_stream`: u32 (by value)
> - `error_code`: u32 (by value)
> - `i32`: (usize, u8) -> void put_byte, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::beginGracefulShutdown(last_stream, error_code, i32, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-maxwindowsigned"></a>

> ## `maxWindowSigned`

> Provides the module's **max window signed** operation. Returns `i64`.

```valor
public i64 maxWindowSigned()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::http::maxWindowSigned();
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-minwindowsigned"></a>

> ## `minWindowSigned`

> Provides the module's **min window signed** operation. Returns `i64`.

```valor
public i64 minWindowSigned()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::http::minWindowSigned();
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-windowupdatevalid"></a>

> ## `windowUpdateValid`

> A WINDOW_UPDATE increment must be 1..2^31-1 and must not push the window past 2^31-1. A WINDOW_UPDATE increment must be 1..2^31-1 and must not push the window past 2^31-1.

```valor
public bool windowUpdateValid(i64 window, i64 increment)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `window`: i64 (by value)
> - `increment`: i64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::http::windowUpdateValid(window, increment);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-windowafterupdate"></a>

> ## `windowAfterUpdate`

> Provides the module's **window after update** operation. Returns `i64`.

```valor
public i64 windowAfterUpdate(i64 window, i64 increment)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `window`: i64 (by value)
> - `increment`: i64 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::http::windowAfterUpdate(window, increment);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-windowconsumevalid"></a>

> ## `windowConsumeValid`

> Consuming (sending/receiving) flow-controlled bytes must not drive a window below the signed floor. Consuming (sending/receiving) flow-controlled bytes must not drive a window below the signed floor.

```valor
public bool windowConsumeValid(i64 window, i64 amount)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `window`: i64 (by value)
> - `amount`: i64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::http::windowConsumeValid(window, amount);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-windowafterconsume"></a>

> ## `windowAfterConsume`

> Provides the module's **window after consume** operation. Returns `i64`.

```valor
public i64 windowAfterConsume(i64 window, i64 amount)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `window`: i64 (by value)
> - `amount`: i64 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::http::windowAfterConsume(window, amount);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-applyconnectionwindowupdate"></a>

> ## `applyConnectionWindowUpdate`

> Apply a WINDOW_UPDATE to a connection window, emitting the new value.

```valor
public i32 applyConnectionWindowUpdate(i64 window, i64 increment, (i64) -> void receive_window, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `window`: i64 (by value)
> - `increment`: i64 (by value)
> - `i32`: (i64) -> void receive_window, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::applyConnectionWindowUpdate(window, increment, i32, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-applystreamwindowupdate"></a>

> ## `applyStreamWindowUpdate`

> Apply a WINDOW_UPDATE to a stream window, emitting the new value.

```valor
public i32 applyStreamWindowUpdate(i64 window, i64 increment, u32 stream_id, (i64) -> void receive_window, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `window`: i64 (by value)
> - `increment`: i64 (by value)
> - `stream_id`: u32 (by value)
> - `i32`: (i64) -> void receive_window, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::applyStreamWindowUpdate(window, increment, stream_id, i32, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-consumeconnectionwindow"></a>

> ## `consumeConnectionWindow`

> Consume connection-level send/receive credit, emitting the new window.

```valor
public i32 consumeConnectionWindow(i64 window, i64 amount, (i64) -> void receive_window, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `window`: i64 (by value)
> - `amount`: i64 (by value)
> - `i32`: (i64) -> void receive_window, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::consumeConnectionWindow(window, amount, i32, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-consumestreamwindow"></a>

> ## `consumeStreamWindow`

> Consume stream-level credit, emitting the new window.

```valor
public i32 consumeStreamWindow(i64 window, i64 amount, u32 stream_id, (i64) -> void receive_window, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `window`: i64 (by value)
> - `amount`: i64 (by value)
> - `stream_id`: u32 (by value)
> - `i32`: (i64) -> void receive_window, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::consumeStreamWindow(window, amount, stream_id, i32, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-reservesendcredit"></a>

> ## `reserveSendCredit`

> Reserve sendable credit as min(want, connection_window, stream_window), floored at zero. Reserve sendable credit as min(want, connection_window, stream_window), floored at zero. Credit is only committed by a subsequent consume call once bytes are handed to the transport contract.

```valor
public i64 reserveSendCredit(i64 connection_window, i64 stream_window, i64 want)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `connection_window`: i64 (by value)
> - `stream_window`: i64 (by value)
> - `want`: i64 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::http::reserveSendCredit(connection_window, stream_window, want);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-initialwindowchangevalid"></a>

> ## `initialWindowChangeValid`

> Recompute a stream window when SETTINGS_INITIAL_WINDOW_SIZE changes by delta.

```valor
public bool initialWindowChangeValid(i64 window, i64 delta)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `window`: i64 (by value)
> - `delta`: i64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::http::initialWindowChangeValid(window, delta);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-windowafterinitialchange"></a>

> ## `windowAfterInitialChange`

> Provides the module's **window after initial change** operation. Returns `i64`.

```valor
public i64 windowAfterInitialChange(i64 window, i64 delta)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `window`: i64 (by value)
> - `delta`: i64 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::http::windowAfterInitialChange(window, delta);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-decodeinteger"></a>

> ## `decodeInteger`

> Decode an HPACK integer with an N-bit prefix (prefix_bits in 1..8) from [start, end). Decode an HPACK integer with an N-bit prefix (prefix_bits in 1..8) from [start, end). Emits the value and the number of bytes consumed. Rejects overflow, truncation, and non-minimal continuation past 63 bits.

```valor
public i32 decodeInteger(usize start, usize end, u8 prefix_bits, (usize) -> u8 read_byte, (u64) -> void receive_value, (usize) -> void receive_consumed, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `end`: usize (by value)
> - `prefix_bits`: u8 (by value)
> - `receive_error`: (usize) -> u8 read_byte, (u64) -> void receive_value, (usize) -> void receive_consumed, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::decodeInteger(start, end, prefix_bits, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-encodeinteger"></a>

> ## `encodeInteger`

> Encode an HPACK integer with an N-bit prefix. Encode an HPACK integer with an N-bit prefix. prefix_high carries the fixed high bits of the first byte (e.g. an indexing pattern). Emits bytes via put_byte from offset and reports the encoded length.

```valor
public i32 encodeInteger(u64 value, u8 prefix_bits, u8 prefix_high, usize offset, (usize, u8) -> void put_byte, (usize) -> void receive_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)
> - `prefix_bits`: u8 (by value)
> - `prefix_high`: u8 (by value)
> - `offset`: usize (by value)
> - `receive_length`: (usize, u8) -> void put_byte, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::encodeInteger(value, prefix_bits, prefix_high, offset, receive_length);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-decodestring"></a>

> ## `decodeString`

> Decode a string literal header: an H flag plus a 7-bit-prefix length, then the bytes. Decode a string literal header: an H flag plus a 7-bit-prefix length, then the bytes. Emits (huffman, data_start, data_length) as a view into the input, and the total consumed bytes. Huffman decoding of the data is delegated to a caller-supplied canonical table via huffmanDecode.

```valor
public i32 decodeString(usize start, usize end, (usize) -> u8 read_byte, (u8, usize, usize) -> void receive_string, (usize) -> void receive_consumed, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `end`: usize (by value)
> - `u8`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void receive_string, (usize) -> void receive_consumed, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::decodeString(start, end, u8, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-encodestring"></a>

> ## `encodeString`

> Encode a raw (non-Huffman) string literal: 7-bit-prefix length with H=0, then the bytes copied from [src_start, src_start+length). Encode a raw (non-Huffman) string literal: 7-bit-prefix length with H=0, then the bytes copied from [src_start, src_start+length). Reports total length.

```valor
public i32 encodeString(usize src_start, usize length, (usize) -> u8 read_byte, usize offset, (usize, u8) -> void put_byte, (usize) -> void receive_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `src_start`: usize (by value)
> - `length`: usize (by value)
> - `usize`: (usize) -> u8 read_byte, usize offset, ( (borrowed fn-ptr (callback))
> - `receive_length`: u8) -> void put_byte, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::encodeString(src_start, length, usize, receive_length);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-capture-into-header"></a>

> ## `capture_into_header`

> A discard sink for encodeInteger's length callback where the caller recomputes the length via integerEncodedLength. A discard sink for encodeInteger's length callback where the caller recomputes the length via integerEncodedLength.

```valor
public void capture_into_header(usize length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::http::capture_into_header(length);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-integerencodedlength"></a>

> ## `integerEncodedLength`

> Number of bytes an HPACK integer occupies for a given prefix width.

```valor
public usize integerEncodedLength(u64 value, u8 prefix_bits)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)
> - `prefix_bits`: u8 (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::http::integerEncodedLength(value, prefix_bits);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-staticindexvalid"></a>

> ## `staticIndexValid`

> Provides the module's **static index valid** operation. Returns `bool`.

```valor
public bool staticIndexValid(u64 index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::http::staticIndexValid(index);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-statichasvalue"></a>

> ## `staticHasValue`

> Static entries 2,3 (:method GET/POST), 4,5 (:path / and /index.html), 8..14 (:status values), etc. Static entries 2,3 (:method GET/POST), 4,5 (:path / and /index.html), 8..14 (:status values), etc. carry a value; the remainder are name-only references. This predicate lets a decoder decide name-only vs name+value without the raw byte table.

```valor
public bool staticHasValue(u64 index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::http::staticHasValue(index);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-dynamicentrysize"></a>

> ## `dynamicEntrySize`

> RFC 7541 section 4.1 entry size: name length + value length + 32.

```valor
public u64 dynamicEntrySize(u64 name_length, u64 value_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `name_length`: u64 (by value)
> - `value_length`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::http::dynamicEntrySize(name_length, value_length);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-dynamicinsertfits"></a>

> ## `dynamicInsertFits`

> True when an entry of entry_size can ever fit in a table of max_size.

```valor
public bool dynamicInsertFits(u64 entry_size, u64 max_size)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `entry_size`: u64 (by value)
> - `max_size`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::http::dynamicInsertFits(entry_size, max_size);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-evicttofit"></a>

> ## `evictToFit`

> Evict oldest entries until current_size + incoming fits within max_size, or until the table is empty (which is valid: an entry larger than the table clears it). Evict oldest entries until current_size + incoming fits within max_size, or until the table is empty (which is valid: an entry larger than the table clears it). entry_size(i) reports the size of the i-th oldest live entry; evict(i) is called for each evicted entry in oldest-first order; the final live size is emitted via receive_size.

```valor
public i32 evictToFit(u64 current_size, u64 incoming, u64 max_size, u32 count, (u32) -> u64 entry_size, (u32) -> void evict, (u64) -> void receive_size)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `current_size`: u64 (by value)
> - `incoming`: u64 (by value)
> - `max_size`: u64 (by value)
> - `count`: u32 (by value)
> - `receive_size`: (u32) -> u64 entry_size, (u32) -> void evict, (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::evictToFit(current_size, incoming, max_size, count, receive_size);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-applytablesizeupdate"></a>

> ## `applyTableSizeUpdate`

> Apply a dynamic-table size update. Apply a dynamic-table size update. new_size must not exceed the maximum the decoder advertised via SETTINGS_HEADER_TABLE_SIZE.

```valor
public i32 applyTableSizeUpdate(u64 new_size, u64 settings_max, (u64) -> void receive_size, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `new_size`: u64 (by value)
> - `settings_max`: u64 (by value)
> - `i32`: (u64) -> void receive_size, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `receive_error`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::applyTableSizeUpdate(new_size, settings_max, i32, usize, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-resizedynamictable"></a>

> ## `resizeDynamicTable`

> Resize the dynamic table to new_max, evicting oldest entries as needed.

```valor
public i32 resizeDynamicTable(u64 current_size, u64 new_max, u32 count, (u32) -> u64 entry_size, (u32) -> void evict, (u64) -> void receive_size, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `current_size`: u64 (by value)
> - `new_max`: u64 (by value)
> - `count`: u32 (by value)
> - `receive_error`: (u32) -> u64 entry_size, (u32) -> void evict, (u64) -> void receive_size, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::resizeDynamicTable(current_size, new_max, count, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-huffmanpaddingvalid"></a>

> ## `huffmanPaddingValid`

> Validate the trailing padding of a Huffman-coded string: the pad must be the most-significant bits of the EOS symbol (all ones) and strictly shorter than one byte. Validate the trailing padding of a Huffman-coded string: the pad must be the most-significant bits of the EOS symbol (all ones) and strictly shorter than one byte. This checks the final byte's low `pad_bits` are all ones.

```valor
public bool huffmanPaddingValid(u8 last_byte, u8 pad_bits)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `last_byte`: u8 (by value)
> - `pad_bits`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::http::huffmanPaddingValid(last_byte, pad_bits);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-huffmandecode"></a>

> ## `huffmanDecode`

> Decode a Huffman-coded byte range [start, start+length) bit by bit. Decode a Huffman-coded byte range [start, start+length) bit by bit. The canonical 256-symbol table is supplied by the caller as step(node, bit) which walks a decoding trie and returns a packed result: 0 = continue, otherwise a symbol+1 in the high bits with the next node in the low bits is not modeled here; instead lookup(node, bit) returns the next node and emit fires when a symbol is completed. Keeping the table caller-side preserves boundedness.

```valor
public i32 huffmanDecode(usize start, usize length, (usize) -> u8 read_byte, (u32, u8) -> u32 next_node, (u32) -> i32 node_symbol, (u8) -> void emit_symbol, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `length`: usize (by value)
> - `u32`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `receive_error`: u8) -> u32 next_node, (u32) -> i32 node_symbol, (u8) -> void emit_symbol, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::huffmanDecode(start, length, u32, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-classifyrepresentation"></a>

> ## `classifyRepresentation`

> Classify the leading byte of an HPACK representation, returning the kind and the integer prefix width to use for its index/size field. Classify the leading byte of an HPACK representation, returning the kind and the integer prefix width to use for its index/size field.

```valor
public u8 classifyRepresentation(u8 first)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `first`: u8 (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::http::classifyRepresentation(first);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-representationprefixbits"></a>

> ## `representationPrefixBits`

> Provides the module's **representation prefix bits** operation. Returns `u8`.

```valor
public u8 representationPrefixBits(u8 kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u8 (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::http::representationPrefixBits(kind);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-decodeheaderblock"></a>

> ## `decodeHeaderBlock`

> Emit the kind and starting index of each representation in a header block so a caller-owned decoder can resolve indices against static/dynamic tables and pull literal name/value views via decodeString. Emit the kind and starting index of each representation in a header block so a caller-owned decoder can resolve indices against static/dynamic tables and pull literal name/value views via decodeString. This driver validates framing (index zero for indexed is illegal; truncation) and reports the byte offset of each representation. It does not itself mutate the dynamic table.

```valor
public i32 decodeHeaderBlock(usize start, usize end, (usize) -> u8 read_byte, (u8, usize) -> void receive_representation, (i32, usize, usize) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `end`: usize (by value)
> - `u8`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `receive_error`: usize) -> void receive_representation, (i32, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::http::decodeHeaderBlock(start, end, u8, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

<a id="fn-skipstring"></a>

> ## `skipString`

> Advance past one HPACK string literal, returning the index just past it (or a value greater than end when truncated). Advance past one HPACK string literal, returning the index just past it (or a value greater than end when truncated).

```valor
public usize skipString(usize start, usize end, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `end`: usize (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::http::skipString(start, end, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::http::both`](#fn-both)
> - [`std::http::either`](#fn-either)
> - [`std::http::addFits`](#fn-addfits)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Networking](STD-NET-DOC.md) · [Table of contents](standard-library/README.md) · [Security →](STD-SECURITY-DOC.md)
