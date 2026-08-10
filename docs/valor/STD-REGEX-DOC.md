<!-- stdlib-reference-style: modern -->
> # `std::regex`

`std::regex` pattern matching operations.

[Standard library](standard-library/README.md) / [Collections and text](standard-library/README.md#collections-and-text) / **Regular expressions**

> **Source:** `stdlib/std/regex.valor` · **Routines:** 3 public

## Routines

<details>
<summary>Browse all 3 routines</summary>

- [`compile`](#fn-compile)
- [`compileFlags`](#fn-compileflags)
- [`free`](#fn-free)

</details>

## API reference

<a id="fn-compile"></a>

> ## `compile`

> Provides the module's **compile** operation. Returns `Regex`.

```valor
public Regex compile(string pattern)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `pattern`: string (by value)

> ### RETURNS (Regex)

> ### EXAMPLE
>
> ```valor
> Regex result = std::regex::compile(pattern);
> ```

> ### SEE ALSO
>
> - [`std::regex::compileFlags`](#fn-compileflags)
> - [`std::regex::free`](#fn-free)

<a id="fn-compileflags"></a>

> ## `compileFlags`

> Provides the module's **compile flags** operation. Returns `Regex`.

```valor
public Regex compileFlags(string pattern, string flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `pattern`: string (by value)
> - `flags`: string (by value)

> ### RETURNS (Regex)

> ### EXAMPLE
>
> ```valor
> Regex result = std::regex::compileFlags(pattern, flags);
> ```

> ### SEE ALSO
>
> - [`std::regex::compile`](#fn-compile)
> - [`std::regex::free`](#fn-free)

<a id="fn-free"></a>

> ## `free`

> Provides the module's **free** operation.

```valor
public void free(Regex rx)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rx`: Regex (by value)

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::regex::free(rx);
> ```

> ### SEE ALSO
>
> - [`std::regex::compile`](#fn-compile)
> - [`std::regex::compileFlags`](#fn-compileflags)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Text](STD-TEXT-DOC.md) · [Table of contents](standard-library/README.md) · [Codecs →](STD-CODEC-DOC.md)
