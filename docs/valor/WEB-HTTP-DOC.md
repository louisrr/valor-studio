<!-- stdlib-reference-style: modern -->
> # `web::http`

`web::http` web-profile HTTP operations.

[Standard library](standard-library/README.md) / [Web platform](standard-library/README.md#web-platform) / **Web HTTP**

> **Source:** `stdlib/web/http.valor` · **Routines:** 1 public · 1 internal

## Routines

<details>
<summary>Browse all 2 routines</summary>

- [`profile`](#fn-profile)
- [`available`](#fn-available)

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
> @ result = web::http::profile(web);
> ```

> ### SEE ALSO
>
> - [`web::http::available`](#fn-available)

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
> bool result = web::http::available();
> ```

> ### SEE ALSO
>
> - [`web::http::profile`](#fn-profile)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Web async](WEB-ASYNC-DOC.md) · [Table of contents](standard-library/README.md) · [JSON →](WEB-JSON-DOC.md)
