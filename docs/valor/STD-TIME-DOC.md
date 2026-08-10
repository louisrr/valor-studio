<!-- stdlib-reference-style: modern -->
> # `std::time`

`std::time` clocks, durations, and time calculations.

[Standard library](standard-library/README.md) / [Concurrency and time](standard-library/README.md#concurrency-and-time) / **Time**

> **Source:** `stdlib/std/time.valor` · **Routines:** 76 public

## Routines

<details>
<summary>Browse all 76 routines</summary>

- [`minI64`](#fn-mini64)
- [`maxI64`](#fn-maxi64)
- [`minU64`](#fn-minu64)
- [`maxU64`](#fn-maxu64)
- [`floorDivI64`](#fn-floordivi64)
- [`floorModI64`](#fn-floormodi64)
- [`atLeastNegativeI64`](#fn-atleastnegativei64)
- [`addI64Fits`](#fn-addi64fits)
- [`subI64Fits`](#fn-subi64fits)
- [`addU64Fits`](#fn-addu64fits)
- [`saturatingAddU64`](#fn-saturatingaddu64)
- [`both`](#fn-both)
- [`validClockKind`](#fn-validclockkind)
- [`validTimerState`](#fn-validtimerstate)
- [`validCalendarKind`](#fn-validcalendarkind)
- [`validUtcOffset`](#fn-validutcoffset)
- [`durationIsCanonical`](#fn-durationiscanonical)
- [`durationIsZero`](#fn-durationiszero)
- [`durationCompare`](#fn-durationcompare)
- [`normalizeDuration`](#fn-normalizeduration)
- [`durationAdd`](#fn-durationadd)
- [`durationSubtract`](#fn-durationsubtract)
- [`durationFromNanoseconds`](#fn-durationfromnanoseconds)
- [`durationToNanoseconds`](#fn-durationtonanoseconds)
- [`instantSameClock`](#fn-instantsameclock)
- [`instantCompare`](#fn-instantcompare)
- [`instantElapsedTicks`](#fn-instantelapsedticks)
- [`instantAddTicks`](#fn-instantaddticks)
- [`ticksToDuration`](#fn-tickstoduration)
- [`systemTimeNow`](#fn-systemtimenow)
- [`monotonicTimeNow`](#fn-monotonictimenow)
- [`isGregorianLeapYear`](#fn-isgregorianleapyear)
- [`daysInGregorianMonth`](#fn-daysingregorianmonth)
- [`dateIsValid`](#fn-dateisvalid)
- [`timeOfDayIsValid`](#fn-timeofdayisvalid)
- [`timeOfDayHour`](#fn-timeofdayhour)
- [`timeOfDayMinute`](#fn-timeofdayminute)
- [`timeOfDaySecond`](#fn-timeofdaysecond)
- [`timeOfDayNanosecond`](#fn-timeofdaynanosecond)
- [`timeOfDayFromHmsNano`](#fn-timeofdayfromhmsnano)
- [`daysFromGregorianDate`](#fn-daysfromgregoriandate)
- [`gregorianDateFromDays`](#fn-gregoriandatefromdays)
- [`weekdayFromUnixDay`](#fn-weekdayfromunixday)
- [`dayOfYear`](#fn-dayofyear)
- [`dateAddDays`](#fn-dateadddays)
- [`dateAddPeriod`](#fn-dateaddperiod)
- [`utcDateTimeFromCivil`](#fn-utcdatetimefromcivil)
- [`utcDateTimeToCivil`](#fn-utcdatetimetocivil)
- [`timeZoneDescriptorIsValid`](#fn-timezonedescriptorisvalid)
- [`timeZoneOffsetIndex`](#fn-timezoneoffsetindex)
- [`timeZoneOffsetAt`](#fn-timezoneoffsetat)
- [`utcToZoned`](#fn-utctozoned)
- [`resolveLocalTime`](#fn-resolvelocaltime)
- [`timeZoneOffsetBatch`](#fn-timezoneoffsetbatch)
- [`deadlineIsExpired`](#fn-deadlineisexpired)
- [`deadlineRemainingTicks`](#fn-deadlineremainingticks)
- [`deadlineAfterTicks`](#fn-deadlineafterticks)
- [`timerPoll`](#fn-timerpoll)
- [`timerCancel`](#fn-timercancel)
- [`intervalTimerAdvance`](#fn-intervaltimeradvance)
- [`sleepUntil`](#fn-sleepuntil)
- [`stopwatchStart`](#fn-stopwatchstart)
- [`stopwatchStop`](#fn-stopwatchstop)
- [`stopwatchElapsedTicks`](#fn-stopwatchelapsedticks)
- [`logicalClockTick`](#fn-logicalclocktick)
- [`logicalClockMerge`](#fn-logicalclockmerge)
- [`lamportTick`](#fn-lamporttick)
- [`lamportMerge`](#fn-lamportmerge)
- [`lamportCompare`](#fn-lamportcompare)
- [`vectorClockDescriptorIsValid`](#fn-vectorclockdescriptorisvalid)
- [`vectorClockTick`](#fn-vectorclocktick)
- [`vectorClockMerge`](#fn-vectorclockmerge)
- [`vectorClockCompare`](#fn-vectorclockcompare)
- [`hybridLogicalNow`](#fn-hybridlogicalnow)
- [`hybridLogicalMerge`](#fn-hybridlogicalmerge)
- [`hybridLogicalCompare`](#fn-hybridlogicalcompare)

</details>

## API reference

<a id="fn-mini64"></a>

> ## `minI64`

> Provides the module's **min i64** operation. Returns `i64`.

```valor
public i64 minI64(i64 left, i64 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: i64 (by value)
> - `right`: i64 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::time::minI64(left, right);
> ```

> ### SEE ALSO
>
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)
> - [`std::time::maxU64`](#fn-maxu64)

<a id="fn-maxi64"></a>

> ## `maxI64`

> Provides the module's **max i64** operation. Returns `i64`.

```valor
public i64 maxI64(i64 left, i64 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: i64 (by value)
> - `right`: i64 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::time::maxI64(left, right);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::minU64`](#fn-minu64)
> - [`std::time::maxU64`](#fn-maxu64)

<a id="fn-minu64"></a>

> ## `minU64`

> Provides the module's **min u64** operation. Returns `u64`.

```valor
public u64 minU64(u64 left, u64 right)
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
> u64 result = std::time::minU64(left, right);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::maxU64`](#fn-maxu64)

<a id="fn-maxu64"></a>

> ## `maxU64`

> Provides the module's **max u64** operation. Returns `u64`.

```valor
public u64 maxU64(u64 left, u64 right)
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
> u64 result = std::time::maxU64(left, right);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-floordivi64"></a>

> ## `floorDivI64`

> Provides the module's **floor div i64** operation. Returns `i64`.

```valor
public i64 floorDivI64(i64 value, i64 divisor)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: i64 (by value)
> - `divisor`: i64 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::time::floorDivI64(value, divisor);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-floormodi64"></a>

> ## `floorModI64`

> Provides the module's **floor mod i64** operation. Returns `i64`.

```valor
public i64 floorModI64(i64 value, i64 divisor)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: i64 (by value)
> - `divisor`: i64 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::time::floorModI64(value, divisor);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-atleastnegativei64"></a>

> ## `atLeastNegativeI64`

> Provides the module's **at least negative i64** operation. Returns `bool`.

```valor
public bool atLeastNegativeI64(i64 value, i64 magnitude)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: i64 (by value)
> - `magnitude`: i64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::time::atLeastNegativeI64(value, magnitude);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-addi64fits"></a>

> ## `addI64Fits`

> Provides the module's **add i64 fits** operation. Returns `bool`.

```valor
public bool addI64Fits(i64 left, i64 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: i64 (by value)
> - `right`: i64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::time::addI64Fits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-subi64fits"></a>

> ## `subI64Fits`

> Provides the module's **sub i64 fits** operation. Returns `bool`.

```valor
public bool subI64Fits(i64 left, i64 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: i64 (by value)
> - `right`: i64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::time::subI64Fits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-addu64fits"></a>

> ## `addU64Fits`

> Provides the module's **add u64 fits** operation. Returns `bool`.

```valor
public bool addU64Fits(u64 left, u64 right)
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
> bool result = std::time::addU64Fits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-saturatingaddu64"></a>

> ## `saturatingAddU64`

> Provides the module's **saturating add u64** operation. Returns `u64`.

```valor
public u64 saturatingAddU64(u64 left, u64 right)
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
> u64 result = std::time::saturatingAddU64(left, right);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

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
> bool result = std::time::both(left, right);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-validclockkind"></a>

> ## `validClockKind`

> Provides the module's **valid clock kind** operation. Returns `bool`.

```valor
public bool validClockKind(u8 kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::time::validClockKind(kind);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-validtimerstate"></a>

> ## `validTimerState`

> Provides the module's **valid timer state** operation. Returns `bool`.

```valor
public bool validTimerState(u8 state)
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
> bool result = std::time::validTimerState(state);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-validcalendarkind"></a>

> ## `validCalendarKind`

> Provides the module's **valid calendar kind** operation. Returns `bool`.

```valor
public bool validCalendarKind(u8 kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::time::validCalendarKind(kind);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-validutcoffset"></a>

> ## `validUtcOffset`

> Provides the module's **valid utc offset** operation. Returns `bool`.

```valor
public bool validUtcOffset(i32 seconds)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `seconds`: i32 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::time::validUtcOffset(seconds);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-durationiscanonical"></a>

> ## `durationIsCanonical`

> Provides the module's **duration is canonical** operation. Returns `bool`.

```valor
public bool durationIsCanonical(i64 seconds, u32 nanoseconds)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `seconds`: i64 (by value)
> - `nanoseconds`: u32 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::time::durationIsCanonical(seconds, nanoseconds);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-durationiszero"></a>

> ## `durationIsZero`

> Provides the module's **duration is zero** operation. Returns `bool`.

```valor
public bool durationIsZero(i64 seconds, u32 nanoseconds)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `seconds`: i64 (by value)
> - `nanoseconds`: u32 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::time::durationIsZero(seconds, nanoseconds);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-durationcompare"></a>

> ## `durationCompare`

> Provides the module's **duration compare** operation. Returns `i8`.

```valor
public i8 durationCompare(i64 left_seconds, u32 left_nanoseconds, i64 right_seconds, u32 right_nanoseconds)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_seconds`: i64 (by value)
> - `left_nanoseconds`: u32 (by value)
> - `right_seconds`: i64 (by value)
> - `right_nanoseconds`: u32 (by value)

> ### RETURNS (i8)

> ### EXAMPLE
>
> ```valor
> i8 result = std::time::durationCompare(left_seconds, left_nanoseconds, right_seconds, right_nanoseconds);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-normalizeduration"></a>

> ## `normalizeDuration`

> Writes a canonical Duration. Writes a canonical Duration. The callback permits stack, register, arena, or atomic destination policy without constructing temporary aggregate storage.

```valor
public i32 normalizeDuration(i64 seconds, i64 nanoseconds, (i64, u32) -> void write_duration)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `seconds`: i64 (by value)
> - `nanoseconds`: i64 (by value)
> - `write_duration`: (i64, u32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::normalizeDuration(seconds, nanoseconds, write_duration);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-durationadd"></a>

> ## `durationAdd`

> Provides the module's **duration add** operation. Returns `i32`.

```valor
public i32 durationAdd(i64 left_seconds, u32 left_nanoseconds, i64 right_seconds, u32 right_nanoseconds, (i64, u32) -> void write_duration)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_seconds`: i64 (by value)
> - `left_nanoseconds`: u32 (by value)
> - `right_seconds`: i64 (by value)
> - `right_nanoseconds`: u32 (by value)
> - `write_duration`: (i64, u32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::durationAdd(left_seconds, left_nanoseconds, right_seconds, right_nanoseconds, write_duration);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-durationsubtract"></a>

> ## `durationSubtract`

> Provides the module's **duration subtract** operation. Returns `i32`.

```valor
public i32 durationSubtract(i64 left_seconds, u32 left_nanoseconds, i64 right_seconds, u32 right_nanoseconds, (i64, u32) -> void write_duration)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_seconds`: i64 (by value)
> - `left_nanoseconds`: u32 (by value)
> - `right_seconds`: i64 (by value)
> - `right_nanoseconds`: u32 (by value)
> - `write_duration`: (i64, u32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::durationSubtract(left_seconds, left_nanoseconds, right_seconds, right_nanoseconds, write_duration);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-durationfromnanoseconds"></a>

> ## `durationFromNanoseconds`

> Provides the module's **duration from nanoseconds** operation. Returns `i32`.

```valor
public i32 durationFromNanoseconds(i64 nanoseconds, (i64, u32) -> void write_duration)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `nanoseconds`: i64 (by value)
> - `write_duration`: (i64, u32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::durationFromNanoseconds(nanoseconds, write_duration);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-durationtonanoseconds"></a>

> ## `durationToNanoseconds`

> Provides the module's **duration to nanoseconds** operation. Returns `i32`.

```valor
public i32 durationToNanoseconds(i64 seconds, u32 nanoseconds, (i64) -> void write_nanoseconds)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `seconds`: i64 (by value)
> - `nanoseconds`: u32 (by value)
> - `write_nanoseconds`: (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::durationToNanoseconds(seconds, nanoseconds, write_nanoseconds);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-instantsameclock"></a>

> ## `instantSameClock`

> Provides the module's **instant same clock** operation. Returns `bool`.

```valor
public bool instantSameClock(u64 left_clock_id, u64 right_clock_id)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_clock_id`: u64 (by value)
> - `right_clock_id`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::time::instantSameClock(left_clock_id, right_clock_id);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-instantcompare"></a>

> ## `instantCompare`

> Provides the module's **instant compare** operation. Returns `i8`.

```valor
public i8 instantCompare(u64 left_ticks, u64 right_ticks)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_ticks`: u64 (by value)
> - `right_ticks`: u64 (by value)

> ### RETURNS (i8)

> ### EXAMPLE
>
> ```valor
> i8 result = std::time::instantCompare(left_ticks, right_ticks);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-instantelapsedticks"></a>

> ## `instantElapsedTicks`

> Provides the module's **instant elapsed ticks** operation. Returns `i32`.

```valor
public i32 instantElapsedTicks(u64 earlier_ticks, u64 earlier_clock_id, u64 later_ticks, u64 later_clock_id, (u64) -> void write_ticks)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `earlier_ticks`: u64 (by value)
> - `earlier_clock_id`: u64 (by value)
> - `later_ticks`: u64 (by value)
> - `later_clock_id`: u64 (by value)
> - `write_ticks`: (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::instantElapsedTicks(earlier_ticks, earlier_clock_id, later_ticks, later_clock_id, write_ticks);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-instantaddticks"></a>

> ## `instantAddTicks`

> Provides the module's **instant add ticks** operation. Returns `i32`.

```valor
public i32 instantAddTicks(u64 ticks, u64 clock_id, u64 delta_ticks, (u64, u64) -> void write_instant)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `ticks`: u64 (by value)
> - `clock_id`: u64 (by value)
> - `delta_ticks`: u64 (by value)
> - `write_instant`: (u64, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::instantAddTicks(ticks, clock_id, delta_ticks, write_instant);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-tickstoduration"></a>

> ## `ticksToDuration`

> Bresenham-style conversion preserves the fractional remainder so repeated conversions do not accumulate drift. Bresenham-style conversion preserves the fractional remainder so repeated conversions do not accumulate drift.

```valor
public i32 ticksToDuration(u64 ticks, u64 ticks_per_second, (i64, u32) -> void write_duration)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `ticks`: u64 (by value)
> - `ticks_per_second`: u64 (by value)
> - `write_duration`: (i64, u32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::ticksToDuration(ticks, ticks_per_second, write_duration);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-systemtimenow"></a>

> ## `systemTimeNow`

> Clock acquisition is capability policy, represented by callbacks.

```valor
public i32 systemTimeNow(() -> i64 read_unix_seconds, () -> u32 read_nanoseconds, (i64, u32) -> void write_system_time)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `write_system_time`: () -> i64 read_unix_seconds, () -> u32 read_nanoseconds, (i64, u32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::systemTimeNow(write_system_time);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-monotonictimenow"></a>

> ## `monotonicTimeNow`

> Provides the module's **monotonic time now** operation. Returns `i32`.

```valor
public i32 monotonicTimeNow(() -> u64 read_ticks, () -> u64 read_clock_id, () -> u64 read_ticks_per_second, (u64, u64, u64) -> void write_monotonic_time)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `write_monotonic_time`: () -> u64 read_ticks, () -> u64 read_clock_id, () -> u64 read_ticks_per_second, (u64, u64, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::monotonicTimeNow(write_monotonic_time);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-isgregorianleapyear"></a>

> ## `isGregorianLeapYear`

> Provides the module's **is gregorian leap year** operation. Returns `bool`.

```valor
public bool isGregorianLeapYear(i32 year)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `year`: i32 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::time::isGregorianLeapYear(year);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-daysingregorianmonth"></a>

> ## `daysInGregorianMonth`

> Provides the module's **days in gregorian month** operation. Returns `u8`.

```valor
public u8 daysInGregorianMonth(i32 year, u8 month)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `year`: i32 (by value)
> - `month`: u8 (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::time::daysInGregorianMonth(year, month);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-dateisvalid"></a>

> ## `dateIsValid`

> Provides the module's **date is valid** operation. Returns `bool`.

```valor
public bool dateIsValid(i32 year, u8 month, u8 day)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `year`: i32 (by value)
> - `month`: u8 (by value)
> - `day`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::time::dateIsValid(year, month, day);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-timeofdayisvalid"></a>

> ## `timeOfDayIsValid`

> Provides the module's **time of day is valid** operation. Returns `bool`.

```valor
public bool timeOfDayIsValid(u64 nanosecond_of_day)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `nanosecond_of_day`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::time::timeOfDayIsValid(nanosecond_of_day);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-timeofdayhour"></a>

> ## `timeOfDayHour`

> Provides the module's **time of day hour** operation. Returns `u8`.

```valor
public u8 timeOfDayHour(u64 nanosecond_of_day)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `nanosecond_of_day`: u64 (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::time::timeOfDayHour(nanosecond_of_day);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-timeofdayminute"></a>

> ## `timeOfDayMinute`

> Provides the module's **time of day minute** operation. Returns `u8`.

```valor
public u8 timeOfDayMinute(u64 nanosecond_of_day)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `nanosecond_of_day`: u64 (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::time::timeOfDayMinute(nanosecond_of_day);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-timeofdaysecond"></a>

> ## `timeOfDaySecond`

> Provides the module's **time of day second** operation. Returns `u8`.

```valor
public u8 timeOfDaySecond(u64 nanosecond_of_day)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `nanosecond_of_day`: u64 (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::time::timeOfDaySecond(nanosecond_of_day);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-timeofdaynanosecond"></a>

> ## `timeOfDayNanosecond`

> Provides the module's **time of day nanosecond** operation. Returns `u32`.

```valor
public u32 timeOfDayNanosecond(u64 nanosecond_of_day)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `nanosecond_of_day`: u64 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::time::timeOfDayNanosecond(nanosecond_of_day);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-timeofdayfromhmsnano"></a>

> ## `timeOfDayFromHmsNano`

> Provides the module's **time of day from hms nano** operation. Returns `i32`.

```valor
public i32 timeOfDayFromHmsNano(u8 hour, u8 minute, u8 second, u32 nanosecond, (u64) -> void write_time)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hour`: u8 (by value)
> - `minute`: u8 (by value)
> - `second`: u8 (by value)
> - `nanosecond`: u32 (by value)
> - `write_time`: (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::timeOfDayFromHmsNano(hour, minute, second, nanosecond, write_time);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-daysfromgregoriandate"></a>

> ## `daysFromGregorianDate`

> Howard Hinnant's era decomposition, shifted to the Unix epoch. Howard Hinnant's era decomposition, shifted to the Unix epoch. It is O(1) for every representable i32 year and handles astronomical year numbering.

```valor
public i64 daysFromGregorianDate(i32 year, u8 month, u8 day)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `year`: i32 (by value)
> - `month`: u8 (by value)
> - `day`: u8 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::time::daysFromGregorianDate(year, month, day);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-gregoriandatefromdays"></a>

> ## `gregorianDateFromDays`

> Provides the module's **gregorian date from days** operation. Returns `i32`.

```valor
public i32 gregorianDateFromDays(i64 unix_day, (i32, u8, u8) -> void write_date)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `unix_day`: i64 (by value)
> - `write_date`: (i32, u8, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::gregorianDateFromDays(unix_day, write_date);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-weekdayfromunixday"></a>

> ## `weekdayFromUnixDay`

> Provides the module's **weekday from unix day** operation. Returns `u8`.

```valor
public u8 weekdayFromUnixDay(i64 unix_day)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `unix_day`: i64 (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::time::weekdayFromUnixDay(unix_day);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-dayofyear"></a>

> ## `dayOfYear`

> Provides the module's **day of year** operation. Returns `u16`.

```valor
public u16 dayOfYear(i32 year, u8 month, u8 day)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `year`: i32 (by value)
> - `month`: u8 (by value)
> - `day`: u8 (by value)

> ### RETURNS (u16)

> ### EXAMPLE
>
> ```valor
> u16 result = std::time::dayOfYear(year, month, day);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-dateadddays"></a>

> ## `dateAddDays`

> Provides the module's **date add days** operation. Returns `i32`.

```valor
public i32 dateAddDays(i32 year, u8 month, u8 day, i64 days, (i32, u8, u8) -> void write_date)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `year`: i32 (by value)
> - `month`: u8 (by value)
> - `day`: u8 (by value)
> - `days`: i64 (by value)
> - `write_date`: (i32, u8, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::dateAddDays(year, month, day, days, write_date);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-dateaddperiod"></a>

> ## `dateAddPeriod`

> Civil period addition clamps the day to the target month, matching common calendar arithmetic while remaining deterministic. Civil period addition clamps the day to the target month, matching common calendar arithmetic while remaining deterministic.

```valor
public i32 dateAddPeriod(i32 year, u8 month, u8 day, i32 add_years, i32 add_months, i32 add_days, (i32, u8, u8) -> void write_date)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `year`: i32 (by value)
> - `month`: u8 (by value)
> - `day`: u8 (by value)
> - `add_years`: i32 (by value)
> - `add_months`: i32 (by value)
> - `add_days`: i32 (by value)
> - `write_date`: (i32, u8, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::dateAddPeriod(year, month, day, add_years, add_months, add_days, write_date);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-utcdatetimefromcivil"></a>

> ## `utcDateTimeFromCivil`

> Provides the module's **utc date time from civil** operation. Returns `i32`.

```valor
public i32 utcDateTimeFromCivil(i32 year, u8 month, u8 day, u64 nanosecond_of_day, (i64, u32) -> void write_utc)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `year`: i32 (by value)
> - `month`: u8 (by value)
> - `day`: u8 (by value)
> - `nanosecond_of_day`: u64 (by value)
> - `write_utc`: (i64, u32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::utcDateTimeFromCivil(year, month, day, nanosecond_of_day, write_utc);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-utcdatetimetocivil"></a>

> ## `utcDateTimeToCivil`

> Provides the module's **utc date time to civil** operation. Returns `i32`.

```valor
public i32 utcDateTimeToCivil(i64 unix_seconds, u32 nanoseconds, (i32, u8, u8, u64) -> void write_civil)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `unix_seconds`: i64 (by value)
> - `nanoseconds`: u32 (by value)
> - `write_civil`: (i32, u8, u8, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::utcDateTimeToCivil(unix_seconds, nanoseconds, write_civil);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-timezonedescriptorisvalid"></a>

> ## `timeZoneDescriptorIsValid`

> Provides the module's **time zone descriptor is valid** operation. Returns `bool`.

```valor
public bool timeZoneDescriptorIsValid(usize transition_count, u8 storage)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `transition_count`: usize (by value)
> - `storage`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::time::timeZoneDescriptorIsValid(transition_count, storage);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-timezoneoffsetindex"></a>

> ## `timeZoneOffsetIndex`

> Returns the offset-array index in [0, transition_count]. Returns the offset-array index in [0, transition_count]. A cache hit reads at most two transition values; a miss performs a bounded binary search and then publishes the hint with caller-selected atomic ordering.

```valor
public usize timeZoneOffsetIndex(i64 unix_seconds, usize transition_count, usize cached_index, (usize) -> i64 read_transition, (usize) -> void publish_cache)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `unix_seconds`: i64 (by value)
> - `transition_count`: usize (by value)
> - `cached_index`: usize (by value)
> - `publish_cache`: (usize) -> i64 read_transition, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::time::timeZoneOffsetIndex(unix_seconds, transition_count, cached_index, publish_cache);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-timezoneoffsetat"></a>

> ## `timeZoneOffsetAt`

> Provides the module's **time zone offset at** operation. Returns `i32`.

```valor
public i32 timeZoneOffsetAt(i64 unix_seconds, usize transition_count, usize cached_index, (usize) -> i64 read_transition, (usize) -> i32 read_offset, (usize) -> void publish_cache, (i32, usize) -> void write_offset)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `unix_seconds`: i64 (by value)
> - `transition_count`: usize (by value)
> - `cached_index`: usize (by value)
> - `write_offset`: (usize) -> i64 read_transition, (usize) -> i32 read_offset, (usize) -> void publish_cache, (i32, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::timeZoneOffsetAt(unix_seconds, transition_count, cached_index, write_offset);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-utctozoned"></a>

> ## `utcToZoned`

> Provides the module's **utc to zoned** operation. Returns `i32`.

```valor
public i32 utcToZoned(i64 unix_seconds, u32 nanoseconds, u64 zone_id, usize transition_count, usize cached_index, (usize) -> i64 read_transition, (usize) -> i32 read_offset, (usize) -> void publish_cache, (i64, u32, u64, i32, u32, u8) -> void write_zoned)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `unix_seconds`: i64 (by value)
> - `nanoseconds`: u32 (by value)
> - `zone_id`: u64 (by value)
> - `transition_count`: usize (by value)
> - `cached_index`: usize (by value)
> - `write_zoned`: (usize) -> i64 read_transition, (usize) -> i32 read_offset, (usize) -> void publish_cache, (i64, u32, u64, i32, u32, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::utcToZoned(unix_seconds, nanoseconds, zone_id, transition_count, cached_index, write_zoned);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-resolvelocaltime"></a>

> ## `resolveLocalTime`

> Resolves a local civil second by testing offsets adjacent to the transition search point. Resolves a local civil second by testing offsets adjacent to the transition search point. resolve_result receives UNIQUE/AMBIGUOUS/NONEXISTENT and up to two UTC candidates, allowing the caller to choose an explicit fold policy.

```valor
public i32 resolveLocalTime(i64 local_seconds, usize transition_count, usize cached_index, (usize) -> i64 read_transition, (usize) -> i32 read_offset, (usize) -> void publish_cache, (u8, i64, i64) -> void resolve_result)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `local_seconds`: i64 (by value)
> - `transition_count`: usize (by value)
> - `cached_index`: usize (by value)
> - `resolve_result`: (usize) -> i64 read_transition, (usize) -> i32 read_offset, (usize) -> void publish_cache, (u8, i64, i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::resolveLocalTime(local_seconds, transition_count, cached_index, resolve_result);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-timezoneoffsetbatch"></a>

> ## `timeZoneOffsetBatch`

> Batch lookup exposes a contiguous logical lane range. Batch lookup exposes a contiguous logical lane range. Implementations may vectorize read/write callbacks; no intermediate timezone values are copied.

```valor
public i32 timeZoneOffsetBatch(usize count, usize transition_count, usize cached_index, (usize) -> i64 read_unix_second, (usize) -> i64 read_transition, (usize) -> i32 read_offset, (usize) -> void publish_cache, (usize, i32) -> void write_offset)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `transition_count`: usize (by value)
> - `cached_index`: usize (by value)
> - `write_offset`: (usize) -> i64 read_unix_second, (usize) -> i64 read_transition, (usize) -> i32 read_offset, (usize) -> void publish_cache, (usize, i32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::timeZoneOffsetBatch(count, transition_count, cached_index, write_offset);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-deadlineisexpired"></a>

> ## `deadlineIsExpired`

> Provides the module's **deadline is expired** operation. Returns `bool`.

```valor
public bool deadlineIsExpired(u64 deadline_ticks, u64 deadline_clock_id, u8 finite, u64 now_ticks, u64 now_clock_id)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `deadline_ticks`: u64 (by value)
> - `deadline_clock_id`: u64 (by value)
> - `finite`: u8 (by value)
> - `now_ticks`: u64 (by value)
> - `now_clock_id`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::time::deadlineIsExpired(deadline_ticks, deadline_clock_id, finite, now_ticks, now_clock_id);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-deadlineremainingticks"></a>

> ## `deadlineRemainingTicks`

> Provides the module's **deadline remaining ticks** operation. Returns `i32`.

```valor
public i32 deadlineRemainingTicks(u64 deadline_ticks, u64 deadline_clock_id, u8 finite, u64 now_ticks, u64 now_clock_id, (u64) -> void write_remaining)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `deadline_ticks`: u64 (by value)
> - `deadline_clock_id`: u64 (by value)
> - `finite`: u8 (by value)
> - `now_ticks`: u64 (by value)
> - `now_clock_id`: u64 (by value)
> - `write_remaining`: (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::deadlineRemainingTicks(deadline_ticks, deadline_clock_id, finite, now_ticks, now_clock_id, write_remaining);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-deadlineafterticks"></a>

> ## `deadlineAfterTicks`

> Provides the module's **deadline after ticks** operation. Returns `i32`.

```valor
public i32 deadlineAfterTicks(u64 now_ticks, u64 clock_id, u64 delay_ticks, (u64, u64, u8) -> void write_deadline)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `now_ticks`: u64 (by value)
> - `clock_id`: u64 (by value)
> - `delay_ticks`: u64 (by value)
> - `write_deadline`: (u64, u64, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::deadlineAfterTicks(now_ticks, clock_id, delay_ticks, write_deadline);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-timerpoll"></a>

> ## `timerPoll`

> Provides the module's **timer poll** operation. Returns `i32`.

```valor
public i32 timerPoll(u64 deadline_ticks, u64 deadline_clock_id, u8 finite, u8 state, u64 now_ticks, u64 now_clock_id, () -> bool publish_fired_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `deadline_ticks`: u64 (by value)
> - `deadline_clock_id`: u64 (by value)
> - `finite`: u8 (by value)
> - `state`: u8 (by value)
> - `now_ticks`: u64 (by value)
> - `now_clock_id`: u64 (by value)
> - `publish_fired_release`: () -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::timerPoll(deadline_ticks, deadline_clock_id, finite, state, now_ticks, now_clock_id, publish_fired_release);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-timercancel"></a>

> ## `timerCancel`

> Provides the module's **timer cancel** operation. Returns `i32`.

```valor
public i32 timerCancel(u8 state, () -> bool publish_cancelled_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state`: u8 (by value)
> - `publish_cancelled_release`: () -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::timerCancel(state, publish_cancelled_release);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-intervaltimeradvance"></a>

> ## `intervalTimerAdvance`

> Advances from the previous scheduled deadline, not from now, so periodic timers do not drift. Advances from the previous scheduled deadline, not from now, so periodic timers do not drift. missed receives the number of elapsed intervals.

```valor
public i32 intervalTimerAdvance(u64 scheduled_ticks, u64 interval_ticks, u64 now_ticks, (u64, u64) -> void write_next_and_missed)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `scheduled_ticks`: u64 (by value)
> - `interval_ticks`: u64 (by value)
> - `now_ticks`: u64 (by value)
> - `write_next_and_missed`: (u64, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::intervalTimerAdvance(scheduled_ticks, interval_ticks, now_ticks, write_next_and_missed);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-sleepuntil"></a>

> ## `sleepUntil`

> Provides the module's **sleep until** operation. Returns `i32`.

```valor
public i32 sleepUntil(u64 deadline_ticks, u64 deadline_clock_id, () -> u64 read_now_ticks, () -> u64 read_clock_id, (u64) -> i32 park_for_at_most_ticks)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `deadline_ticks`: u64 (by value)
> - `deadline_clock_id`: u64 (by value)
> - `park_for_at_most_ticks`: () -> u64 read_now_ticks, () -> u64 read_clock_id, (u64) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::sleepUntil(deadline_ticks, deadline_clock_id, park_for_at_most_ticks);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-stopwatchstart"></a>

> ## `stopwatchStart`

> Provides the module's **stopwatch start** operation. Returns `i32`.

```valor
public i32 stopwatchStart(u64 now_ticks, u64 clock_id, u8 state, (u64, u64, u8) -> void write_started)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `now_ticks`: u64 (by value)
> - `clock_id`: u64 (by value)
> - `state`: u8 (by value)
> - `write_started`: (u64, u64, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::stopwatchStart(now_ticks, clock_id, state, write_started);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-stopwatchstop"></a>

> ## `stopwatchStop`

> Provides the module's **stopwatch stop** operation. Returns `i32`.

```valor
public i32 stopwatchStop(u64 started_ticks, u64 accumulated_ticks, u64 stored_clock_id, u8 state, u64 now_ticks, u64 now_clock_id, (u64, u8) -> void write_stopped)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `started_ticks`: u64 (by value)
> - `accumulated_ticks`: u64 (by value)
> - `stored_clock_id`: u64 (by value)
> - `state`: u8 (by value)
> - `now_ticks`: u64 (by value)
> - `now_clock_id`: u64 (by value)
> - `write_stopped`: (u64, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::stopwatchStop(started_ticks, accumulated_ticks, stored_clock_id, state, now_ticks, now_clock_id, write_stopped);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-stopwatchelapsedticks"></a>

> ## `stopwatchElapsedTicks`

> Provides the module's **stopwatch elapsed ticks** operation. Returns `i32`.

```valor
public i32 stopwatchElapsedTicks(u64 started_ticks, u64 accumulated_ticks, u64 stored_clock_id, u8 state, u64 now_ticks, u64 now_clock_id, (u64) -> void write_elapsed)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `started_ticks`: u64 (by value)
> - `accumulated_ticks`: u64 (by value)
> - `stored_clock_id`: u64 (by value)
> - `state`: u8 (by value)
> - `now_ticks`: u64 (by value)
> - `now_clock_id`: u64 (by value)
> - `write_elapsed`: (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::stopwatchElapsedTicks(started_ticks, accumulated_ticks, stored_clock_id, state, now_ticks, now_clock_id, write_elapsed);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-logicalclocktick"></a>

> ## `logicalClockTick`

> Provides the module's **logical clock tick** operation. Returns `u64`.

```valor
public u64 logicalClockTick(u64 counter)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `counter`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::time::logicalClockTick(counter);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-logicalclockmerge"></a>

> ## `logicalClockMerge`

> Provides the module's **logical clock merge** operation. Returns `u64`.

```valor
public u64 logicalClockMerge(u64 local, u64 remote)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `local`: u64 (by value)
> - `remote`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::time::logicalClockMerge(local, remote);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-lamporttick"></a>

> ## `lamportTick`

> Provides the module's **lamport tick** operation. Returns `u64`.

```valor
public u64 lamportTick(u64 counter)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `counter`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::time::lamportTick(counter);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-lamportmerge"></a>

> ## `lamportMerge`

> Provides the module's **lamport merge** operation. Returns `u64`.

```valor
public u64 lamportMerge(u64 local_counter, u64 remote_counter)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `local_counter`: u64 (by value)
> - `remote_counter`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::time::lamportMerge(local_counter, remote_counter);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-lamportcompare"></a>

> ## `lamportCompare`

> Provides the module's **lamport compare** operation. Returns `i8`.

```valor
public i8 lamportCompare(u64 left_counter, u64 left_node, u64 right_counter, u64 right_node)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_counter`: u64 (by value)
> - `left_node`: u64 (by value)
> - `right_counter`: u64 (by value)
> - `right_node`: u64 (by value)

> ### RETURNS (i8)

> ### EXAMPLE
>
> ```valor
> i8 result = std::time::lamportCompare(left_counter, left_node, right_counter, right_node);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-vectorclockdescriptorisvalid"></a>

> ## `vectorClockDescriptorIsValid`

> Provides the module's **vector clock descriptor is valid** operation. Returns `bool`.

```valor
public bool vectorClockDescriptorIsValid(usize component_count, usize local_component, u8 storage)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `component_count`: usize (by value)
> - `local_component`: usize (by value)
> - `storage`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::time::vectorClockDescriptorIsValid(component_count, local_component, storage);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-vectorclocktick"></a>

> ## `vectorClockTick`

> Provides the module's **vector clock tick** operation. Returns `i32`.

```valor
public i32 vectorClockTick(usize component_count, usize local_component, usize retry_limit, (usize) -> u64 load_acquire, (usize, u64, u64) -> bool compare_exchange_acq_rel)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `component_count`: usize (by value)
> - `local_component`: usize (by value)
> - `retry_limit`: usize (by value)
> - `usize`: (usize) -> u64 load_acquire, ( (borrowed fn-ptr (callback))
> - `u64`: u64 (by value)
> - `compare_exchange_acq_rel`: u64) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::vectorClockTick(component_count, local_component, retry_limit, usize, u64, compare_exchange_acq_rel);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-vectorclockmerge"></a>

> ## `vectorClockMerge`

> Component-wise maximum merge. Component-wise maximum merge. Each component is independently monotonic, so readers never observe a causally smaller published value.

```valor
public i32 vectorClockMerge(usize component_count, usize retry_limit, (usize) -> u64 load_local_acquire, (usize) -> u64 load_remote, (usize, u64, u64) -> bool compare_exchange_acq_rel)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `component_count`: usize (by value)
> - `retry_limit`: usize (by value)
> - `compare_exchange_acq_rel`: (usize) -> u64 load_local_acquire, (usize) -> u64 load_remote, (usize, u64, u64) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::vectorClockMerge(component_count, retry_limit, compare_exchange_acq_rel);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-vectorclockcompare"></a>

> ## `vectorClockCompare`

> Returns -1 (before), 0 (equal), 1 (after), or 2 (concurrent).

```valor
public i8 vectorClockCompare(usize component_count, (usize) -> u64 read_left, (usize) -> u64 read_right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `component_count`: usize (by value)
> - `read_right`: (usize) -> u64 read_left, (usize) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (i8)

> ### EXAMPLE
>
> ```valor
> i8 result = std::time::vectorClockCompare(component_count, read_right);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-hybridlogicalnow"></a>

> ## `hybridLogicalNow`

> Provides the module's **hybrid logical now** operation. Returns `i32`.

```valor
public i32 hybridLogicalNow(u64 local_physical_ms, u32 local_logical, u64 wall_physical_ms, (u64, u32) -> void write_clock)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `local_physical_ms`: u64 (by value)
> - `local_logical`: u32 (by value)
> - `wall_physical_ms`: u64 (by value)
> - `write_clock`: (u64, u32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::hybridLogicalNow(local_physical_ms, local_logical, wall_physical_ms, write_clock);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-hybridlogicalmerge"></a>

> ## `hybridLogicalMerge`

> Provides the module's **hybrid logical merge** operation. Returns `i32`.

```valor
public i32 hybridLogicalMerge(u64 local_physical_ms, u32 local_logical, u64 remote_physical_ms, u32 remote_logical, u64 wall_physical_ms, (u64, u32) -> void write_clock)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `local_physical_ms`: u64 (by value)
> - `local_logical`: u32 (by value)
> - `remote_physical_ms`: u64 (by value)
> - `remote_logical`: u32 (by value)
> - `wall_physical_ms`: u64 (by value)
> - `write_clock`: (u64, u32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::time::hybridLogicalMerge(local_physical_ms, local_logical, remote_physical_ms, remote_logical, wall_physical_ms, write_clock);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

<a id="fn-hybridlogicalcompare"></a>

> ## `hybridLogicalCompare`

> Provides the module's **hybrid logical compare** operation. Returns `i8`.

```valor
public i8 hybridLogicalCompare(u64 left_physical_ms, u32 left_logical, u32 left_node, u64 right_physical_ms, u32 right_logical, u32 right_node)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_physical_ms`: u64 (by value)
> - `left_logical`: u32 (by value)
> - `left_node`: u32 (by value)
> - `right_physical_ms`: u64 (by value)
> - `right_logical`: u32 (by value)
> - `right_node`: u32 (by value)

> ### RETURNS (i8)

> ### EXAMPLE
>
> ```valor
> i8 result = std::time::hybridLogicalCompare(left_physical_ms, left_logical, left_node, right_physical_ms, right_logical, right_node);
> ```

> ### SEE ALSO
>
> - [`std::time::minI64`](#fn-mini64)
> - [`std::time::maxI64`](#fn-maxi64)
> - [`std::time::minU64`](#fn-minu64)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Scheduling](STD-SCHEDULE-DOC.md) · [Table of contents](standard-library/README.md) · [Networking →](STD-NET-DOC.md)
