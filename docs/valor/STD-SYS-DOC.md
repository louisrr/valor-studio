<!-- stdlib-reference-style: modern -->
> # `std::sys`

`std::sys` low-level system-facing utilities.

[Standard library](standard-library/README.md) / [Foundations](standard-library/README.md#foundations) / **System**

> **Source:** `stdlib/std/sys.valor` · **Routines:** 49 public · 1 internal

## Routines

<details>
<summary>Browse all 50 routines</summary>

- [`mod_u64`](#fn-mod-u64)
- [`mod_usize`](#fn-mod-usize)
- [`flag_set`](#fn-flag-set)
- [`exit_success`](#fn-exit-success)
- [`exit_failure`](#fn-exit-failure)
- [`exit_usage_error`](#fn-exit-usage-error)
- [`exit_configuration_error`](#fn-exit-configuration-error)
- [`exit_status_valid`](#fn-exit-status-valid)
- [`exit_status_from_code`](#fn-exit-status-from-code)
- [`exit_status_code`](#fn-exit-status-code)
- [`exit_status_is_success`](#fn-exit-status-is-success)
- [`exit`](#fn-exit)
- [`exit_immediate`](#fn-exit-immediate)
- [`abort_code`](#fn-abort-code)
- [`set_exit_status`](#fn-set-exit-status)
- [`pointer_width_bytes`](#fn-pointer-width-bytes)
- [`target_is_64bit`](#fn-target-is-64bit)
- [`target_is_32bit`](#fn-target-is-32bit)
- [`is_little_endian`](#fn-is-little-endian)
- [`is_big_endian`](#fn-is-big-endian)
- [`cpu_has_feature`](#fn-cpu-has-feature)
- [`os_is_unix_like`](#fn-os-is-unix-like)
- [`argument_index_valid`](#fn-argument-index-valid)
- [`argument_at`](#fn-argument-at)
- [`argument_find`](#fn-argument-find)
- [`environment_contains`](#fn-environment-contains)
- [`environment_get`](#fn-environment-get)
- [`environment_entries_canonical`](#fn-environment-entries-canonical)
- [`environment_is_canonical`](#fn-environment-is-canonical)
- [`environment_digest`](#fn-environment-digest)
- [`cap_flag_at`](#fn-cap-flag-at)
- [`capability_admits`](#fn-capability-admits)
- [`capability_union`](#fn-capability-union)
- [`capability_subset`](#fn-capability-subset)
- [`capability_first_missing`](#fn-capability-first-missing)
- [`capability_check`](#fn-capability-check)
- [`prelude_allowed_capabilities`](#fn-prelude-allowed-capabilities)
- [`prelude_admits`](#fn-prelude-admits)
- [`within_symbol_budget`](#fn-within-symbol-budget)
- [`within_metadata_budget`](#fn-within-metadata-budget)
- [`within_import_budget`](#fn-within-import-budget)
- [`lookup_export`](#fn-lookup-export)
- [`namespace_visible_count`](#fn-namespace-visible-count)
- [`sanitize_namespace`](#fn-sanitize-namespace)
- [`abi_epoch_compatible`](#fn-abi-epoch-compatible)
- [`module_admit`](#fn-module-admit)
- [`context_absorb`](#fn-context-absorb)
- [`context_finish`](#fn-context-finish)
- [`context_equivalent`](#fn-context-equivalent)
- [`digest_equal`](#fn-digest-equal)

</details>

## API reference

<a id="fn-mod-u64"></a>

> ## `mod_u64`

> Provides the module's **mod u64** operation. Returns `u64`.

```valor
public u64 mod_u64(u64 value, u64 divisor)
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
> u64 result = std::sys::mod_u64(value, divisor);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)
> - [`std::sys::exit_success`](#fn-exit-success)

<a id="fn-mod-usize"></a>

> ## `mod_usize`

> Provides the module's **mod usize** operation. Returns `usize`.

```valor
public usize mod_usize(usize value, usize divisor)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: usize (by value)
> - `divisor`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::sys::mod_usize(value, divisor);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::flag_set`](#fn-flag-set)
> - [`std::sys::exit_success`](#fn-exit-success)

<a id="fn-flag-set"></a>

> ## `flag_set`

> Overflow-free single-bit test over an additive power-of-two flag word: the bit's column value is flags/flag; its low bit is column - (column/2)*2. Overflow-free single-bit test over an additive power-of-two flag word: the bit's column value is flags/flag; its low bit is column - (column/2)*2.

```valor
public bool flag_set(u64 flags, u64 flag)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u64 (by value)
> - `flag`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::sys::flag_set(flags, flag);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::exit_success`](#fn-exit-success)

<a id="fn-exit-success"></a>

> ## `exit_success`

> Documented canonical statuses.

```valor
public i32 exit_success()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sys::exit_success();
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-exit-failure"></a>

> ## `exit_failure`

> Provides the module's **exit failure** operation. Returns `i32`.

```valor
public i32 exit_failure()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sys::exit_failure();
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-exit-usage-error"></a>

> ## `exit_usage_error`

> Provides the module's **exit usage error** operation. Returns `i32`.

```valor
public i32 exit_usage_error()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sys::exit_usage_error();
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-exit-configuration-error"></a>

> ## `exit_configuration_error`

> Provides the module's **exit configuration error** operation. Returns `i32`.

```valor
public i32 exit_configuration_error()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sys::exit_configuration_error();
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-exit-status-valid"></a>

> ## `exit_status_valid`

> Well-formed status?

```valor
public bool exit_status_valid(i32 code)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `code`: i32 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::sys::exit_status_valid(code);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-exit-status-from-code"></a>

> ## `exit_status_from_code`

> ExitStatus::fromCode: deliver the validated code and success flag, or fail.

```valor
public i32 exit_status_from_code(i32 code, (i32, bool) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `code`: i32 (by value)
> - `receive`: (i32, bool) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sys::exit_status_from_code(code, receive);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-exit-status-code"></a>

> ## `exit_status_code`

> ExitStatus::code / is-success accessors (on the validated scalar).

```valor
public i32 exit_status_code(i32 code)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `code`: i32 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sys::exit_status_code(code);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-exit-status-is-success"></a>

> ## `exit_status_is_success`

> Provides the module's **exit status is success** operation. Returns `bool`.

```valor
public bool exit_status_is_success(i32 code)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `code`: i32 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::sys::exit_status_is_success(code);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-exit"></a>

> ## `exit`

> Orderly termination request; requires the ProcessExit capability (checked by the caller via capability_admits). Orderly termination request; requires the ProcessExit capability (checked by the caller via capability_admits).  Returns the exit status to hand the OS.

```valor
public i32 exit(i32 code)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `code`: i32 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sys::exit(code);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-exit-immediate"></a>

> ## `exit_immediate`

> Immediate termination (no cleanup) -- distinct restricted capability.

```valor
public i32 exit_immediate(i32 code)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `code`: i32 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sys::exit_immediate(code);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-abort-code"></a>

> ## `abort_code`

> Abnormal termination for corruption / invariant failure.

```valor
public i32 abort_code()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sys::abort_code();
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-set-exit-status"></a>

> ## `set_exit_status`

> setExitStatus: record the eventual status without terminating now.

```valor
public i32 set_exit_status(i32 code, (i32) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `code`: i32 (by value)
> - `receive`: (i32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sys::set_exit_status(code, receive);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-pointer-width-bytes"></a>

> ## `pointer_width_bytes`

> pointerWidth() helpers.

```valor
public u16 pointer_width_bytes(u16 width_bits)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `width_bits`: u16 (by value)

> ### RETURNS (u16)

> ### EXAMPLE
>
> ```valor
> u16 result = std::sys::pointer_width_bytes(width_bits);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-target-is-64bit"></a>

> ## `target_is_64bit`

> Provides the module's **target is 64bit** operation. Returns `bool`.

```valor
public bool target_is_64bit(u16 width_bits)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `width_bits`: u16 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::sys::target_is_64bit(width_bits);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-target-is-32bit"></a>

> ## `target_is_32bit`

> Provides the module's **target is 32bit** operation. Returns `bool`.

```valor
public bool target_is_32bit(u16 width_bits)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `width_bits`: u16 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::sys::target_is_32bit(width_bits);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-is-little-endian"></a>

> ## `is_little_endian`

> endianness() helpers.

```valor
public bool is_little_endian(u8 endian)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `endian`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::sys::is_little_endian(endian);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-is-big-endian"></a>

> ## `is_big_endian`

> Provides the module's **is big endian** operation. Returns `bool`.

```valor
public bool is_big_endian(u8 endian)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `endian`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::sys::is_big_endian(endian);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-cpu-has-feature"></a>

> ## `cpu_has_feature`

> cpuFeatureSet() membership (design 5.2, deterministic dispatch).

```valor
public bool cpu_has_feature(u64 features, u64 feature_flag)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `features`: u64 (by value)
> - `feature_flag`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::sys::cpu_has_feature(features, feature_flag);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-os-is-unix-like"></a>

> ## `os_is_unix_like`

> OS-family classification helpers.

```valor
public bool os_is_unix_like(u8 os)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `os`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::sys::os_is_unix_like(os);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-argument-index-valid"></a>

> ## `argument_index_valid`

> Is index i a valid argument position? Is index i a valid argument position?  (O(1), no scan.)

```valor
public bool argument_index_valid(usize n, usize i)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `i`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::sys::argument_index_valid(n, i);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-argument-at"></a>

> ## `argument_at`

> Bounds-checked argument access: OK + receive(i) when valid, else VALOR-SYS-1101.

```valor
public i32 argument_at(usize n, usize i, (usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `i`: usize (by value)
> - `receive`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sys::argument_at(n, i, receive);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-argument-find"></a>

> ## `argument_find`

> Find the first argument equal to a target token, compared through a caller comparator cmp(i) -> ORDER_* (target vs argument[i]); delivers its index. Find the first argument equal to a target token, compared through a caller comparator cmp(i) -> ORDER_* (target vs argument[i]); delivers its index.

```valor
public i32 argument_find(usize n, (usize) -> i32 cmp, (usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `receive`: (usize) -> i32 cmp, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sys::argument_find(n, receive);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-environment-contains"></a>

> ## `environment_contains`

> contains(key): binary search over the sorted snapshot.

```valor
public i32 environment_contains(usize n, (usize) -> i32 cmp, (usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `receive`: (usize) -> i32 cmp, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sys::environment_contains(n, receive);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-environment-get"></a>

> ## `environment_get`

> get(key): identical search delivering the matched entry index (the caller then reads that entry's value view). get(key): identical search delivering the matched entry index (the caller then reads that entry's value view).  Documented case policy is the caller's comparator, applied uniformly.

```valor
public i32 environment_get(usize n, (usize) -> i32 cmp, (usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `receive`: (usize) -> i32 cmp, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sys::environment_get(n, receive);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-environment-entries-canonical"></a>

> ## `environment_entries_canonical`

> entriesCanonical(): the snapshot is already canonical-sorted, so enumeration is a forward sweep 0..n delivering each index in order through `visit`. entriesCanonical(): the snapshot is already canonical-sorted, so enumeration is a forward sweep 0..n delivering each index in order through `visit`.

```valor
public void environment_entries_canonical(usize n, (usize) -> void visit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `visit`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::sys::environment_entries_canonical(n, visit);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-environment-is-canonical"></a>

> ## `environment_is_canonical`

> Verify the snapshot is canonically ordered: adjacent keys compared through order(i-1, i) must never be GREATER (strictly ascending, no duplicate keys). Verify the snapshot is canonically ordered: adjacent keys compared through order(i-1, i) must never be GREATER (strictly ascending, no duplicate keys).

```valor
public bool environment_is_canonical(usize n, (usize, usize) -> i32 order)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `order`: (usize, usize) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::sys::environment_is_canonical(n, order);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-environment-digest"></a>

> ## `environment_digest`

> Provides the module's **environment digest** operation.

```valor
public void environment_digest(usize n, (usize) -> bool include, (usize) -> u64 entry_word, (u64, u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `receive`: (usize) -> bool include, (usize) -> u64 entry_word, (u64, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::sys::environment_digest(n, receive);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-cap-flag-at"></a>

> ## `cap_flag_at`

> *Internal API*
>
> Provides the module's **cap flag at** operation. Returns `u64`.

```valor
u64 cap_flag_at(usize i)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `i`: usize (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::sys::cap_flag_at(i);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-capability-admits"></a>

> ## `capability_admits`

> Does the issued set grant a specific capability?

```valor
public bool capability_admits(u64 granted, u64 capability)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `granted`: u64 (by value)
> - `capability`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::sys::capability_admits(granted, capability);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-capability-union"></a>

> ## `capability_union`

> Union of two capability sets (disjoint additive flags -> checked add of the bits each set uniquely contributes; computed flag-by-flag, overflow-free). Union of two capability sets (disjoint additive flags -> checked add of the bits each set uniquely contributes; computed flag-by-flag, overflow-free).

```valor
public u64 capability_union(u64 a, u64 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: u64 (by value)
> - `b`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::sys::capability_union(a, b);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-capability-subset"></a>

> ## `capability_subset`

> Is `child` a subset of `parent` (every capability of child granted by parent)?

```valor
public bool capability_subset(u64 child, u64 parent)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `child`: u64 (by value)
> - `parent`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::sys::capability_subset(child, parent);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-capability-first-missing"></a>

> ## `capability_first_missing`

> First capability required but not granted (0 when all are satisfied); the canonical way to report VALOR-CAP-1300. First capability required but not granted (0 when all are satisfied); the canonical way to report VALOR-CAP-1300.

```valor
public u64 capability_first_missing(u64 required, u64 granted)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `required`: u64 (by value)
> - `granted`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::sys::capability_first_missing(required, granted);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-capability-check"></a>

> ## `capability_check`

> Admission check with a canonical diagnostic: OK, or VALOR-CAP-1300 delivered through `receive` naming the first missing capability. Admission check with a canonical diagnostic: OK, or VALOR-CAP-1300 delivered through `receive` naming the first missing capability.

```valor
public i32 capability_check(u64 required, u64 granted, (u64, u32) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `required`: u64 (by value)
> - `granted`: u64 (by value)
> - `receive`: (u64, u32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sys::capability_check(required, granted, receive);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-prelude-allowed-capabilities"></a>

> ## `prelude_allowed_capabilities`

> The capability mask a restricted prelude permits by default (design 6.1).

```valor
public u64 prelude_allowed_capabilities(u8 prelude)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `prelude`: u8 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::sys::prelude_allowed_capabilities(prelude);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-prelude-admits"></a>

> ## `prelude_admits`

> Does the prelude admit every requested capability? Does the prelude admit every requested capability? (fail-closed, design 3.)

```valor
public bool prelude_admits(u8 prelude, u64 requested)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `prelude`: u8 (by value)
> - `requested`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::sys::prelude_admits(prelude, requested);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-within-symbol-budget"></a>

> ## `within_symbol_budget`

> Namespace budget checks (design section 6, "namespace budget").

```valor
public bool within_symbol_budget(usize exported, usize max_exported)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `exported`: usize (by value)
> - `max_exported`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::sys::within_symbol_budget(exported, max_exported);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-within-metadata-budget"></a>

> ## `within_metadata_budget`

> Provides the module's **within metadata budget** operation. Returns `bool`.

```valor
public bool within_metadata_budget(u64 bytes, u64 max_bytes)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bytes`: u64 (by value)
> - `max_bytes`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::sys::within_metadata_budget(bytes, max_bytes);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-within-import-budget"></a>

> ## `within_import_budget`

> Provides the module's **within import budget** operation. Returns `bool`.

```valor
public bool within_import_budget(usize imports, usize max_imports)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `imports`: usize (by value)
> - `max_imports`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::sys::within_import_budget(imports, max_imports);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-lookup-export"></a>

> ## `lookup_export`

> lookupExport(name): bounded binary search over the public, name-sorted export table via a caller comparator cmp(i) -> ORDER_* (target vs export[i] name). lookupExport(name): bounded binary search over the public, name-sorted export table via a caller comparator cmp(i) -> ORDER_* (target vs export[i] name). Requires the NamespaceIntrospection capability; delivers the matched index.

```valor
public i32 lookup_export(u64 granted, usize export_count, (usize) -> i32 cmp, (usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `granted`: u64 (by value)
> - `export_count`: usize (by value)
> - `receive`: (usize) -> i32 cmp, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sys::lookup_export(granted, export_count, receive);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-namespace-visible-count"></a>

> ## `namespace_visible_count`

> Count the public, non-redacted exports admitted for tooling / transfer.

```valor
public usize namespace_visible_count(usize export_count, (usize) -> bool is_public, (usize) -> bool is_redacted)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `export_count`: usize (by value)
> - `is_redacted`: (usize) -> bool is_public, (usize) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::sys::namespace_visible_count(export_count, is_redacted);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-sanitize-namespace"></a>

> ## `sanitize_namespace`

> sanitizeNamespace: emit each admitted (public, non-redacted) export index to a caller sink in canonical order, capped by a symbol budget. sanitizeNamespace: emit each admitted (public, non-redacted) export index to a caller sink in canonical order, capped by a symbol budget.  Returns OK, or ERR_NO_SPACE (VALOR-NS-1204) with the truncation honoured, and delivers the emitted count.  Requires NamespaceIntrospection.

```valor
public i32 sanitize_namespace(u64 granted, usize export_count, usize max_symbols, (usize) -> bool is_public, (usize) -> bool is_redacted, (usize) -> void emit, (usize) -> void receive_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `granted`: u64 (by value)
> - `export_count`: usize (by value)
> - `max_symbols`: usize (by value)
> - `receive_count`: (usize) -> bool is_public, (usize) -> bool is_redacted, (usize) -> void emit, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sys::sanitize_namespace(granted, export_count, max_symbols, receive_count);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-abi-epoch-compatible"></a>

> ## `abi_epoch_compatible`

> ABI epochs are compatible when they are equal (strict) -- the conservative, fail-closed default (design section 6, "ABI epochs"). ABI epochs are compatible when they are equal (strict) -- the conservative, fail-closed default (design section 6, "ABI epochs").

```valor
public bool abi_epoch_compatible(u32 module_epoch, u32 host_epoch)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `module_epoch`: u32 (by value)
> - `host_epoch`: u32 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::sys::abi_epoch_compatible(module_epoch, host_epoch);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-module-admit"></a>

> ## `module_admit`

> Provides the module's **module admit** operation. Returns `i32`.

```valor
public i32 module_admit(bool signature_valid, bool digest_matches, u32 module_epoch, u32 host_epoch, u64 requested_caps, u64 policy_caps, (u32) -> void receive_diag)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `signature_valid`: bool (by value)
> - `digest_matches`: bool (by value)
> - `module_epoch`: u32 (by value)
> - `host_epoch`: u32 (by value)
> - `requested_caps`: u64 (by value)
> - `policy_caps`: u64 (by value)
> - `receive_diag`: (u32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sys::module_admit(signature_valid, digest_matches, module_epoch, host_epoch, requested_caps, policy_caps, receive_diag);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-context-absorb"></a>

> ## `context_absorb`

> Fold one context component word into a running two-lane digest.

```valor
public void context_absorb(u64 primary, u64 alt, u64 word, (u64, u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `primary`: u64 (by value)
> - `alt`: u64 (by value)
> - `word`: u64 (by value)
> - `receive`: (u64, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::sys::context_absorb(primary, alt, word, receive);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-context-finish"></a>

> ## `context_finish`

> Seal a two-lane context digest.

```valor
public void context_finish(u64 primary, u64 alt, (u64, u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `primary`: u64 (by value)
> - `alt`: u64 (by value)
> - `receive`: (u64, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::sys::context_finish(primary, alt, receive);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-context-equivalent"></a>

> ## `context_equivalent`

> Two canonical contexts are equivalent iff both digest lanes agree (a single lane match is never treated as equivalence). Two canonical contexts are equivalent iff both digest lanes agree (a single lane match is never treated as equivalence).

```valor
public bool context_equivalent(u64 a_primary, u64 a_alt, u64 b_primary, u64 b_alt)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a_primary`: u64 (by value)
> - `a_alt`: u64 (by value)
> - `b_primary`: u64 (by value)
> - `b_alt`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::sys::context_equivalent(a_primary, a_alt, b_primary, b_alt);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

<a id="fn-digest-equal"></a>

> ## `digest_equal`

> Are two 256-bit digests byte-identical across all four lanes?

```valor
public bool digest_equal(u64 a0, u64 a1, u64 a2, u64 a3, u64 b0, u64 b1, u64 b2, u64 b3)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a0`: u64 (by value)
> - `a1`: u64 (by value)
> - `a2`: u64 (by value)
> - `a3`: u64 (by value)
> - `b0`: u64 (by value)
> - `b1`: u64 (by value)
> - `b2`: u64 (by value)
> - `b3`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::sys::digest_equal(a0, a1, a2, a3, b0, b1, b2, b3);
> ```

> ### SEE ALSO
>
> - [`std::sys::mod_u64`](#fn-mod-u64)
> - [`std::sys::mod_usize`](#fn-mod-usize)
> - [`std::sys::flag_set`](#fn-flag-set)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Layout](STD-LAYOUT-DOC.md) · [Table of contents](standard-library/README.md) · [Compiler →](STD-COMPILER-DOC.md)
