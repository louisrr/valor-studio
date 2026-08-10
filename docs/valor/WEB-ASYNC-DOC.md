<!-- stdlib-reference-style: modern -->
> # `web::async`

`web::async` async operations for web workloads.

[Standard library](standard-library/README.md) / [Web platform](standard-library/README.md#web-platform) / **Web async**

> **Source:** `stdlib/web/async.valor` · **Routines:** 3 public · 1 internal

## Routines

<details>
<summary>Browse all 4 routines</summary>

- [`profile`](#fn-profile)
- [`available`](#fn-available)
- [`init`](#fn-init)
- [`shutdown`](#fn-shutdown)

</details>

## API reference

<a id="fn-profile"></a>

> ## `profile`

> *Internal API*
>
> Provides the module's **profile** operation. Returns `@`.

```valor
@profile(web)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `web`: web (by value)

> ### RETURNS (@)

> ### EXAMPLE
>
> ```valor
> @ result = web::async::profile(web);
> ```

> ### SEE ALSO
>
> - [`web::async::available`](#fn-available)
> - [`web::async::init`](#fn-init)
> - [`web::async::shutdown`](#fn-shutdown)

<a id="fn-available"></a>

> ## `available`

> Provides the module's **available** operation. Returns `bool`.

```valor
public bool available()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = web::async::available();
> ```

> ### SEE ALSO
>
> - [`web::async::profile`](#fn-profile)
> - [`web::async::init`](#fn-init)
> - [`web::async::shutdown`](#fn-shutdown)

<a id="fn-init"></a>

> ## `init`

> Provides the module's **init** operation. Returns `bool`.

```valor
public bool init()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = web::async::init();
> ```

> ### SEE ALSO
>
> - [`web::async::profile`](#fn-profile)
> - [`web::async::available`](#fn-available)
> - [`web::async::shutdown`](#fn-shutdown)

<a id="fn-shutdown"></a>

> ## `shutdown`

> Provides the module's **shutdown** operation. Returns `bool`.

```valor
public bool shutdown()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = web::async::shutdown();
> ```

> ### SEE ALSO
>
> - [`web::async::profile`](#fn-profile)
> - [`web::async::available`](#fn-available)
> - [`web::async::init`](#fn-init)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Web profile](WEB-DOC.md) · [Table of contents](standard-library/README.md) · [Web HTTP →](WEB-HTTP-DOC.md)
