<!-- stdlib-reference-style: modern -->
> # `std::core`

`std::core` runtime profile, ABI helpers, and foundational operations.

[Standard library](standard-library/README.md) / [Foundations](standard-library/README.md#foundations) / **Core**

> **Source:** `stdlib/std/core.valor` · **Routines:** 52 public · 1 internal

## Routines

<details>
<summary>Browse all 53 routines</summary>

- [`runtime`](#fn-runtime)
- [`abi_version`](#fn-abi-version)
- [`init`](#fn-init)
- [`abort`](#fn-abort)
- [`panic`](#fn-panic)
- [`optionIsSome`](#fn-optionissome)
- [`optionIsNone`](#fn-optionisnone)
- [`optionTagIsValid`](#fn-optiontagisvalid)
- [`optionUnwrapI32`](#fn-optionunwrapi32)
- [`optionUnwrapI64`](#fn-optionunwrapi64)
- [`optionUnwrapOrI32`](#fn-optionunwrapori32)
- [`optionUnwrapOrI64`](#fn-optionunwrapori64)
- [`optionMapOrI32`](#fn-optionmapori32)
- [`resultIsOk`](#fn-resultisok)
- [`resultIsErr`](#fn-resultiserr)
- [`resultTagIsValid`](#fn-resulttagisvalid)
- [`resultUnwrapI64`](#fn-resultunwrapi64)
- [`resultUnwrapErrI32`](#fn-resultunwraperri32)
- [`resultUnwrapOrI64`](#fn-resultunwrapori64)
- [`eitherIsLeft`](#fn-eitherisleft)
- [`eitherIsRight`](#fn-eitherisright)
- [`eitherTagIsValid`](#fn-eithertagisvalid)
- [`eitherFoldI64`](#fn-eitherfoldi64)
- [`variantTagIsValid`](#fn-varianttagisvalid)
- [`variantAlternativeCountIsValid`](#fn-variantalternativecountisvalid)
- [`maybeUninitIsInitialized`](#fn-maybeuninitisinitialized)
- [`maybeUninitReadI64`](#fn-maybeuninitreadi64)
- [`orderingIsValid`](#fn-orderingisvalid)
- [`orderingReverse`](#fn-orderingreverse)
- [`compareI32`](#fn-comparei32)
- [`compareI64`](#fn-comparei64)
- [`compareU32`](#fn-compareu32)
- [`compareU64`](#fn-compareu64)
- [`compareString`](#fn-comparestring)
- [`rangeContainsI64`](#fn-rangecontainsi64)
- [`rangeInclusiveContainsI64`](#fn-rangeinclusivecontainsi64)
- [`rangeContainsU64`](#fn-rangecontainsu64)
- [`rangeInclusiveContainsU64`](#fn-rangeinclusivecontainsu64)
- [`stepRangeIsValidI64`](#fn-steprangeisvalidi64)
- [`stableIdEqual`](#fn-stableidequal)
- [`stableIdCompare`](#fn-stableidcompare)
- [`typeIdEqual`](#fn-typeidequal)
- [`typeIdCompare`](#fn-typeidcompare)
- [`anyHasType`](#fn-anyhastype)
- [`dynamicTagIsValid`](#fn-dynamictagisvalid)
- [`dynamicIsNull`](#fn-dynamicisnull)
- [`dynamicIsScalar`](#fn-dynamicisscalar)
- [`bookCreate`](#fn-bookcreate)
- [`bookDestroy`](#fn-bookdestroy)
- [`bookSubmit`](#fn-booksubmit)
- [`bookTick`](#fn-booktick)
- [`bookBest`](#fn-bookbest)
- [`riskCheckSimple`](#fn-riskchecksimple)

</details>

## API reference

<a id="fn-runtime"></a>

> ## `runtime`

> *Internal API*
>
> Provides the module's **runtime** operation. Returns `@`.

```valor
@runtime(hft)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hft`: hft (by value)

> ### RETURNS (@)

> ### EXAMPLE
>
> ```valor
> @ result = std::core::runtime(hft);
> ```

> ### SEE ALSO
>
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)
> - [`std::core::abort`](#fn-abort)

<a id="fn-abi-version"></a>

> ## `abi_version`

> Provides the module's **abi version** operation. Returns `u32`.

```valor
public u32 abi_version()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::core::abi_version();
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::init`](#fn-init)
> - [`std::core::abort`](#fn-abort)

<a id="fn-init"></a>

> ## `init`

> Provides the module's **init** operation.

```valor
public void init()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::core::init();
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::abort`](#fn-abort)

<a id="fn-abort"></a>

> ## `abort`

> Provides the module's **abort** operation.

```valor
public void abort()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::core::abort();
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-panic"></a>

> ## `panic`

> Provides the module's **panic** operation.

```valor
public void panic(string msg, string file, u32 line, u32 col)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `msg`: string (by value)
> - `file`: string (by value)
> - `line`: u32 (by value)
> - `col`: u32 (by value)

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::core::panic(msg, file, line, col);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-optionissome"></a>

> ## `optionIsSome`

> Provides the module's **option is some** operation. Returns `bool`.

```valor
public bool optionIsSome(u8 tag)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::core::optionIsSome(tag);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-optionisnone"></a>

> ## `optionIsNone`

> Provides the module's **option is none** operation. Returns `bool`.

```valor
public bool optionIsNone(u8 tag)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::core::optionIsNone(tag);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-optiontagisvalid"></a>

> ## `optionTagIsValid`

> Provides the module's **option tag is valid** operation. Returns `bool`.

```valor
public bool optionTagIsValid(u8 tag)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::core::optionTagIsValid(tag);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-optionunwrapi32"></a>

> ## `optionUnwrapI32`

> Provides the module's **option unwrap i32** operation. Returns `i32`.

```valor
public i32 optionUnwrapI32(u8 tag, i32 value, string msg, string file, u32 line, u32 col)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: u8 (by value)
> - `value`: i32 (by value)
> - `msg`: string (by value)
> - `file`: string (by value)
> - `line`: u32 (by value)
> - `col`: u32 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::core::optionUnwrapI32(tag, value, msg, file, line, col);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-optionunwrapi64"></a>

> ## `optionUnwrapI64`

> Provides the module's **option unwrap i64** operation. Returns `i64`.

```valor
public i64 optionUnwrapI64(u8 tag, i64 value, string msg, string file, u32 line, u32 col)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: u8 (by value)
> - `value`: i64 (by value)
> - `msg`: string (by value)
> - `file`: string (by value)
> - `line`: u32 (by value)
> - `col`: u32 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::core::optionUnwrapI64(tag, value, msg, file, line, col);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-optionunwrapori32"></a>

> ## `optionUnwrapOrI32`

> Provides the module's **option unwrap or i32** operation. Returns `i32`.

```valor
public i32 optionUnwrapOrI32(u8 tag, i32 value, i32 fallback)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: u8 (by value)
> - `value`: i32 (by value)
> - `fallback`: i32 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::core::optionUnwrapOrI32(tag, value, fallback);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-optionunwrapori64"></a>

> ## `optionUnwrapOrI64`

> Provides the module's **option unwrap or i64** operation. Returns `i64`.

```valor
public i64 optionUnwrapOrI64(u8 tag, i64 value, i64 fallback)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: u8 (by value)
> - `value`: i64 (by value)
> - `fallback`: i64 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::core::optionUnwrapOrI64(tag, value, fallback);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-optionmapori32"></a>

> ## `optionMapOrI32`

> Provides the module's **option map or i32** operation. Returns `i32`.

```valor
public i32 optionMapOrI32(u8 tag, i32 value, i32 fallback, (i32) -> i32 mapper)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: u8 (by value)
> - `value`: i32 (by value)
> - `fallback`: i32 (by value)
> - `mapper`: (i32) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::core::optionMapOrI32(tag, value, fallback, mapper);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-resultisok"></a>

> ## `resultIsOk`

> Provides the module's **result is ok** operation. Returns `bool`.

```valor
public bool resultIsOk(u8 tag)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::core::resultIsOk(tag);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-resultiserr"></a>

> ## `resultIsErr`

> Provides the module's **result is err** operation. Returns `bool`.

```valor
public bool resultIsErr(u8 tag)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::core::resultIsErr(tag);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-resulttagisvalid"></a>

> ## `resultTagIsValid`

> Provides the module's **result tag is valid** operation. Returns `bool`.

```valor
public bool resultTagIsValid(u8 tag)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::core::resultTagIsValid(tag);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-resultunwrapi64"></a>

> ## `resultUnwrapI64`

> Provides the module's **result unwrap i64** operation. Returns `i64`.

```valor
public i64 resultUnwrapI64(u8 tag, i64 value, string msg, string file, u32 line, u32 col)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: u8 (by value)
> - `value`: i64 (by value)
> - `msg`: string (by value)
> - `file`: string (by value)
> - `line`: u32 (by value)
> - `col`: u32 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::core::resultUnwrapI64(tag, value, msg, file, line, col);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-resultunwraperri32"></a>

> ## `resultUnwrapErrI32`

> Provides the module's **result unwrap err i32** operation. Returns `i32`.

```valor
public i32 resultUnwrapErrI32(u8 tag, i32 error, string msg, string file, u32 line, u32 col)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: u8 (by value)
> - `error`: i32 (by value)
> - `msg`: string (by value)
> - `file`: string (by value)
> - `line`: u32 (by value)
> - `col`: u32 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::core::resultUnwrapErrI32(tag, error, msg, file, line, col);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-resultunwrapori64"></a>

> ## `resultUnwrapOrI64`

> Provides the module's **result unwrap or i64** operation. Returns `i64`.

```valor
public i64 resultUnwrapOrI64(u8 tag, i64 value, i64 fallback)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: u8 (by value)
> - `value`: i64 (by value)
> - `fallback`: i64 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::core::resultUnwrapOrI64(tag, value, fallback);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-eitherisleft"></a>

> ## `eitherIsLeft`

> Provides the module's **either is left** operation. Returns `bool`.

```valor
public bool eitherIsLeft(u8 tag)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::core::eitherIsLeft(tag);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-eitherisright"></a>

> ## `eitherIsRight`

> Provides the module's **either is right** operation. Returns `bool`.

```valor
public bool eitherIsRight(u8 tag)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::core::eitherIsRight(tag);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-eithertagisvalid"></a>

> ## `eitherTagIsValid`

> Provides the module's **either tag is valid** operation. Returns `bool`.

```valor
public bool eitherTagIsValid(u8 tag)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::core::eitherTagIsValid(tag);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-eitherfoldi64"></a>

> ## `eitherFoldI64`

> Provides the module's **either fold i64** operation. Returns `i64`.

```valor
public i64 eitherFoldI64(u8 tag, i64 left, i64 right, (i64) -> i64 on_left, (i64) -> i64 on_right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: u8 (by value)
> - `left`: i64 (by value)
> - `right`: i64 (by value)
> - `on_right`: (i64) -> i64 on_left, (i64) -> i64 (borrowed fn-ptr (callback))

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::core::eitherFoldI64(tag, left, right, on_right);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-varianttagisvalid"></a>

> ## `variantTagIsValid`

> Provides the module's **variant tag is valid** operation. Returns `bool`.

```valor
public bool variantTagIsValid(u8 tag, u8 alternative_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: u8 (by value)
> - `alternative_count`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::core::variantTagIsValid(tag, alternative_count);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-variantalternativecountisvalid"></a>

> ## `variantAlternativeCountIsValid`

> Provides the module's **variant alternative count is valid** operation. Returns `bool`.

```valor
public bool variantAlternativeCountIsValid(u8 alternative_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `alternative_count`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::core::variantAlternativeCountIsValid(alternative_count);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-maybeuninitisinitialized"></a>

> ## `maybeUninitIsInitialized`

> Provides the module's **maybe uninit is initialized** operation. Returns `bool`.

```valor
public bool maybeUninitIsInitialized(bool initialized)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `initialized`: bool (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::core::maybeUninitIsInitialized(initialized);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-maybeuninitreadi64"></a>

> ## `maybeUninitReadI64`

> Provides the module's **maybe uninit read i64** operation. Returns `i64`.

```valor
public i64 maybeUninitReadI64(bool initialized, i64 value, string msg, string file, u32 line, u32 col)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `initialized`: bool (by value)
> - `value`: i64 (by value)
> - `msg`: string (by value)
> - `file`: string (by value)
> - `line`: u32 (by value)
> - `col`: u32 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::core::maybeUninitReadI64(initialized, value, msg, file, line, col);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-orderingisvalid"></a>

> ## `orderingIsValid`

> Provides the module's **ordering is valid** operation. Returns `bool`.

```valor
public bool orderingIsValid(i8 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: i8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::core::orderingIsValid(value);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-orderingreverse"></a>

> ## `orderingReverse`

> Provides the module's **ordering reverse** operation. Returns `i8`.

```valor
public i8 orderingReverse(i8 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: i8 (by value)

> ### RETURNS (i8)

> ### EXAMPLE
>
> ```valor
> i8 result = std::core::orderingReverse(value);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-comparei32"></a>

> ## `compareI32`

> Provides the module's **compare i32** operation. Returns `i8`.

```valor
public i8 compareI32(i32 left, i32 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: i32 (by value)
> - `right`: i32 (by value)

> ### RETURNS (i8)

> ### EXAMPLE
>
> ```valor
> i8 result = std::core::compareI32(left, right);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-comparei64"></a>

> ## `compareI64`

> Provides the module's **compare i64** operation. Returns `i8`.

```valor
public i8 compareI64(i64 left, i64 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: i64 (by value)
> - `right`: i64 (by value)

> ### RETURNS (i8)

> ### EXAMPLE
>
> ```valor
> i8 result = std::core::compareI64(left, right);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-compareu32"></a>

> ## `compareU32`

> Provides the module's **compare u32** operation. Returns `i8`.

```valor
public i8 compareU32(u32 left, u32 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: u32 (by value)
> - `right`: u32 (by value)

> ### RETURNS (i8)

> ### EXAMPLE
>
> ```valor
> i8 result = std::core::compareU32(left, right);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-compareu64"></a>

> ## `compareU64`

> Provides the module's **compare u64** operation. Returns `i8`.

```valor
public i8 compareU64(u64 left, u64 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: u64 (by value)
> - `right`: u64 (by value)

> ### RETURNS (i8)

> ### EXAMPLE
>
> ```valor
> i8 result = std::core::compareU64(left, right);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-comparestring"></a>

> ## `compareString`

> Provides the module's **compare string** operation. Returns `i8`.

```valor
public i8 compareString(string left, string right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: string (by value)
> - `right`: string (by value)

> ### RETURNS (i8)

> ### EXAMPLE
>
> ```valor
> i8 result = std::core::compareString(left, right);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-rangecontainsi64"></a>

> ## `rangeContainsI64`

> Provides the module's **range contains i64** operation. Returns `bool`.

```valor
public bool rangeContainsI64(i64 start, i64 end, i64 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: i64 (by value)
> - `end`: i64 (by value)
> - `value`: i64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::core::rangeContainsI64(start, end, value);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-rangeinclusivecontainsi64"></a>

> ## `rangeInclusiveContainsI64`

> Provides the module's **range inclusive contains i64** operation. Returns `bool`.

```valor
public bool rangeInclusiveContainsI64(i64 start, i64 end, i64 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: i64 (by value)
> - `end`: i64 (by value)
> - `value`: i64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::core::rangeInclusiveContainsI64(start, end, value);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-rangecontainsu64"></a>

> ## `rangeContainsU64`

> Provides the module's **range contains u64** operation. Returns `bool`.

```valor
public bool rangeContainsU64(u64 start, u64 end, u64 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: u64 (by value)
> - `end`: u64 (by value)
> - `value`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::core::rangeContainsU64(start, end, value);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-rangeinclusivecontainsu64"></a>

> ## `rangeInclusiveContainsU64`

> Provides the module's **range inclusive contains u64** operation. Returns `bool`.

```valor
public bool rangeInclusiveContainsU64(u64 start, u64 end, u64 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: u64 (by value)
> - `end`: u64 (by value)
> - `value`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::core::rangeInclusiveContainsU64(start, end, value);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-steprangeisvalidi64"></a>

> ## `stepRangeIsValidI64`

> Provides the module's **step range is valid i64** operation. Returns `bool`.

```valor
public bool stepRangeIsValidI64(i64 step)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `step`: i64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::core::stepRangeIsValidI64(step);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-stableidequal"></a>

> ## `stableIdEqual`

> Provides the module's **stable id equal** operation. Returns `bool`.

```valor
public bool stableIdEqual(u32 left_namespace, u32 left_local, u32 right_namespace, u32 right_local)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_namespace`: u32 (by value)
> - `left_local`: u32 (by value)
> - `right_namespace`: u32 (by value)
> - `right_local`: u32 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::core::stableIdEqual(left_namespace, left_local, right_namespace, right_local);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-stableidcompare"></a>

> ## `stableIdCompare`

> Provides the module's **stable id compare** operation. Returns `i8`.

```valor
public i8 stableIdCompare(u32 left_namespace, u32 left_local, u32 right_namespace, u32 right_local)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_namespace`: u32 (by value)
> - `left_local`: u32 (by value)
> - `right_namespace`: u32 (by value)
> - `right_local`: u32 (by value)

> ### RETURNS (i8)

> ### EXAMPLE
>
> ```valor
> i8 result = std::core::stableIdCompare(left_namespace, left_local, right_namespace, right_local);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-typeidequal"></a>

> ## `typeIdEqual`

> Provides the module's **type id equal** operation. Returns `bool`.

```valor
public bool typeIdEqual(u64 left, u64 right)
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
> bool result = std::core::typeIdEqual(left, right);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-typeidcompare"></a>

> ## `typeIdCompare`

> Provides the module's **type id compare** operation. Returns `i8`.

```valor
public i8 typeIdCompare(u64 left, u64 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: u64 (by value)
> - `right`: u64 (by value)

> ### RETURNS (i8)

> ### EXAMPLE
>
> ```valor
> i8 result = std::core::typeIdCompare(left, right);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-anyhastype"></a>

> ## `anyHasType`

> Provides the module's **any has type** operation. Returns `bool`.

```valor
public bool anyHasType(u64 stored_type_id, u64 requested_type_id)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `stored_type_id`: u64 (by value)
> - `requested_type_id`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::core::anyHasType(stored_type_id, requested_type_id);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-dynamictagisvalid"></a>

> ## `dynamicTagIsValid`

> Provides the module's **dynamic tag is valid** operation. Returns `bool`.

```valor
public bool dynamicTagIsValid(u8 tag)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::core::dynamicTagIsValid(tag);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-dynamicisnull"></a>

> ## `dynamicIsNull`

> Provides the module's **dynamic is null** operation. Returns `bool`.

```valor
public bool dynamicIsNull(u8 tag)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::core::dynamicIsNull(tag);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-dynamicisscalar"></a>

> ## `dynamicIsScalar`

> Provides the module's **dynamic is scalar** operation. Returns `bool`.

```valor
public bool dynamicIsScalar(u8 tag)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::core::dynamicIsScalar(tag);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-bookcreate"></a>

> ## `bookCreate`

> Provides the module's **book create** operation. Returns `OrderBook`.

```valor
public OrderBook bookCreate(u32 shard_count, u32 levels, u32 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `shard_count`: u32 (by value)
> - `levels`: u32 (by value)
> - `flags`: u32 (by value)

> ### RETURNS (OrderBook)

> ### EXAMPLE
>
> ```valor
> OrderBook result = std::core::bookCreate(shard_count, levels, flags);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-bookdestroy"></a>

> ## `bookDestroy`

> Provides the module's **book destroy** operation.

```valor
public void bookDestroy(OrderBook ob)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `ob`: OrderBook (by value)

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::core::bookDestroy(ob);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-booksubmit"></a>

> ## `bookSubmit`

> Provides the module's **book submit** operation. Returns `bool`.

```valor
public bool bookSubmit(OrderBook ob, u32 shard_id, BookUpdate upd)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `ob`: OrderBook (by value)
> - `shard_id`: u32 (by value)
> - `upd`: BookUpdate (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::core::bookSubmit(ob, shard_id, upd);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-booktick"></a>

> ## `bookTick`

> Provides the module's **book tick** operation. Returns `u32`.

```valor
public u32 bookTick(OrderBook ob, u32 max_updates)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `ob`: OrderBook (by value)
> - `max_updates`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::core::bookTick(ob, max_updates);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-bookbest"></a>

> ## `bookBest`

> Provides the module's **book best** operation. Returns `bool`.

```valor
public bool bookBest(OrderBook ob, ptr<BookLevel, host> out_bid, ptr<BookLevel, host> out_ask)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `ob`: OrderBook (by value)
> - `out_bid`: ptr<BookLevel, host> (by value)
> - `out_ask`: ptr<BookLevel, host> (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::core::bookBest(ob, out_bid, out_ask);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

<a id="fn-riskchecksimple"></a>

> ## `riskCheckSimple`

> Provides the module's **risk check simple** operation. Returns `bool`.

```valor
public bool riskCheckSimple(RiskLimits lim, i64 qty, i64 price)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `lim`: RiskLimits (by value)
> - `qty`: i64 (by value)
> - `price`: i64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::core::riskCheckSimple(lim, qty, price);
> ```

> ### SEE ALSO
>
> - [`std::core::runtime`](#fn-runtime)
> - [`std::core::abi_version`](#fn-abi-version)
> - [`std::core::init`](#fn-init)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

← Previous · [Table of contents](standard-library/README.md) · [Built-ins →](STD-BUILTINS-DOC.md)
