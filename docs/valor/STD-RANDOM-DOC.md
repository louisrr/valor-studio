<!-- stdlib-reference-style: modern -->
> # `std::random`

`std::random` deterministic random-number operations.

[Standard library](standard-library/README.md) / [Algorithms and computing](standard-library/README.md#algorithms-and-computing) / **Random**

> **Source:** `stdlib/std/random.valor` · **Routines:** 20 public · 36 internal

## Routines

<details>
<summary>Browse all 56 routines</summary>

- [`word64`](#fn-word64)
- [`u64_max`](#fn-u64-max)
- [`mask32`](#fn-mask32)
- [`wadd`](#fn-wadd)
- [`wmul`](#fn-wmul)
- [`band`](#fn-band)
- [`bor`](#fn-bor)
- [`bxor`](#fn-bxor)
- [`pow2`](#fn-pow2)
- [`shl`](#fn-shl)
- [`shr`](#fn-shr)
- [`rotl`](#fn-rotl)
- [`add32`](#fn-add32)
- [`rotl32`](#fn-rotl32)
- [`rotr32`](#fn-rotr32)
- [`k_golden`](#fn-k-golden)
- [`k_smix1`](#fn-k-smix1)
- [`k_smix2`](#fn-k-smix2)
- [`k_streamg`](#fn-k-streamg)
- [`splitmix64`](#fn-splitmix64)
- [`deterministic_test`](#fn-deterministic-test)
- [`pcg_output`](#fn-pcg-output)
- [`pcg_advance`](#fn-pcg-advance)
- [`pcg_seed_state`](#fn-pcg-seed-state)
- [`pcg`](#fn-pcg)
- [`philox_block`](#fn-philox-block)
- [`philox`](#fn-philox)
- [`threefry_rotation`](#fn-threefry-rotation)
- [`threefry_key`](#fn-threefry-key)
- [`threefry`](#fn-threefry)
- [`to_unit`](#fn-to-unit)
- [`bounded_value`](#fn-bounded-value)
- [`uniform_int`](#fn-uniform-int)
- [`uniform_real`](#fn-uniform-real)
- [`bernoulli`](#fn-bernoulli)
- [`fabs`](#fn-fabs)
- [`fmax`](#fn-fmax)
- [`round_ties_even`](#fn-round-ties-even)
- [`ln_positive`](#fn-ln-positive)
- [`exp_stable`](#fn-exp-stable)
- [`normal`](#fn-normal)
- [`categorical`](#fn-categorical)
- [`multinomial`](#fn-multinomial)
- [`shuffle`](#fn-shuffle)
- [`sample`](#fn-sample)
- [`sample_without_replacement`](#fn-sample-without-replacement)
- [`reservoir_sample`](#fn-reservoir-sample)
- [`weighted_reservoir_sample`](#fn-weighted-reservoir-sample)
- [`max_logit`](#fn-max-logit)
- [`min_logit`](#fn-min-logit)
- [`sample_masked`](#fn-sample-masked)
- [`temperature_sample`](#fn-temperature-sample)
- [`count_ge`](#fn-count-ge)
- [`top_k_sample`](#fn-top-k-sample)
- [`mass_ge`](#fn-mass-ge)
- [`top_p_sample`](#fn-top-p-sample)

</details>

## API reference

<a id="fn-word64"></a>

> ## `word64`

> *Internal API*
>
> Assemble a 64-bit value from two 32-bit halves. Assemble a 64-bit value from two 32-bit halves.  `hi * 2^32 <= 2^64 - 2^32` and adding `lo < 2^32` stays below 2^64, so neither operation overflows.

```valor
u64 word64(u32 hi, u32 lo)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hi`: u32 (by value)
> - `lo`: u32 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::word64(hi, lo);
> ```

> ### SEE ALSO
>
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)
> - [`std::random::wadd`](#fn-wadd)

<a id="fn-u64-max"></a>

> ## `u64_max`

> *Internal API*
>
> Provides the module's **u64 max** operation. Returns `u64`.

```valor
u64 u64_max()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::u64_max();
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::mask32`](#fn-mask32)
> - [`std::random::wadd`](#fn-wadd)

<a id="fn-mask32"></a>

> ## `mask32`

> *Internal API*
>
> Low 32 bits of a word.

```valor
u64 mask32(u64 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::mask32(value);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::wadd`](#fn-wadd)

<a id="fn-wadd"></a>

> ## `wadd`

> *Internal API*
>
> Modular addition (mod 2^64). Modular addition (mod 2^64).  Limbs keep every partial sum below 2^33.

```valor
u64 wadd(u64 a, u64 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: u64 (by value)
> - `b`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::wadd(a, b);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-wmul"></a>

> ## `wmul`

> *Internal API*
>
> Modular multiplication (mod 2^64) via 32-bit schoolbook limbs. Modular multiplication (mod 2^64) via 32-bit schoolbook limbs.  Each partial product of two sub-2^32 limbs is below 2^64 and the cross terms are reduced before being recombined, so nothing overflows.

```valor
u64 wmul(u64 a, u64 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: u64 (by value)
> - `b`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::wmul(a, b);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-band"></a>

> ## `band`

> *Internal API*
>
> Bitwise primitives. Bitwise primitives.  A single distinct bit position is resolved per iteration; `result` only ever gains a not-yet-present power of two, so it stays below 2^64 and never traps.

```valor
u64 band(u64 a, u64 b)
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
> u64 result = std::random::band(a, b);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-bor"></a>

> ## `bor`

> *Internal API*
>
> Provides the module's **bor** operation. Returns `u64`.

```valor
u64 bor(u64 a, u64 b)
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
> u64 result = std::random::bor(a, b);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-bxor"></a>

> ## `bxor`

> *Internal API*
>
> Provides the module's **bxor** operation. Returns `u64`.

```valor
u64 bxor(u64 a, u64 b)
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
> u64 result = std::random::bxor(a, b);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-pow2"></a>

> ## `pow2`

> *Internal API*
>
> 2^n for n in [0, 63]. 2^n for n in [0, 63].  The final product reaches at most 2^63.

```valor
u64 pow2(u32 n)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: u32 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::pow2(n);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-shl"></a>

> ## `shl`

> *Internal API*
>
> Logical shifts on 64-bit words (n in [0, 63]).

```valor
u64 shl(u64 value, u32 n)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)
> - `n`: u32 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::shl(value, n);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-shr"></a>

> ## `shr`

> *Internal API*
>
> Provides the module's **shr** operation. Returns `u64`.

```valor
u64 shr(u64 value, u32 n)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)
> - `n`: u32 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::shr(value, n);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-rotl"></a>

> ## `rotl`

> *Internal API*
>
> Left rotation of a 64-bit word.

```valor
u64 rotl(u64 value, u32 n)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)
> - `n`: u32 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::rotl(value, n);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-add32"></a>

> ## `add32`

> *Internal API*
>
> Provides the module's **add32** operation. Returns `u64`.

```valor
u64 add32(u64 a, u64 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: u64 (by value)
> - `b`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::add32(a, b);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-rotl32"></a>

> ## `rotl32`

> *Internal API*
>
> Provides the module's **rotl32** operation. Returns `u64`.

```valor
u64 rotl32(u64 value, u32 n)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)
> - `n`: u32 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::rotl32(value, n);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-rotr32"></a>

> ## `rotr32`

> *Internal API*
>
> Provides the module's **rotr32** operation. Returns `u64`.

```valor
u64 rotr32(u64 value, u32 n)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)
> - `n`: u32 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::rotr32(value, n);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-k-golden"></a>

> ## `k_golden`

> *Internal API*
>
> Provides the module's **k golden** operation. Returns `u64`.

```valor
u64 k_golden()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::k_golden();
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-k-smix1"></a>

> ## `k_smix1`

> *Internal API*
>
> Provides the module's **k smix1** operation. Returns `u64`.

```valor
u64 k_smix1()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::k_smix1();
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-k-smix2"></a>

> ## `k_smix2`

> *Internal API*
>
> Provides the module's **k smix2** operation. Returns `u64`.

```valor
u64 k_smix2()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::k_smix2();
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-k-streamg"></a>

> ## `k_streamg`

> *Internal API*
>
> Provides the module's **k streamg** operation. Returns `u64`.

```valor
u64 k_streamg()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::k_streamg();
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-splitmix64"></a>

> ## `splitmix64`

> *Internal API*
>
> SplitMix64 finalizer: a strong bijective avalanche used to seed and to back the reference generator. SplitMix64 finalizer: a strong bijective avalanche used to seed and to back the reference generator.

```valor
u64 splitmix64(u64 state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::splitmix64(state);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-deterministic-test"></a>

> ## `deterministic_test`

> Provides the module's **deterministic test** operation. Returns `u64`.

```valor
public u64 deterministic_test(u64 seed, u64 stream_id, u64 counter)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `seed`: u64 (by value)
> - `stream_id`: u64 (by value)
> - `counter`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::deterministic_test(seed, stream_id, counter);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-pcg-output"></a>

> ## `pcg_output`

> *Internal API*
>
> Provides the module's **pcg output** operation. Returns `u64`.

```valor
u64 pcg_output(u64 state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::pcg_output(state);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-pcg-advance"></a>

> ## `pcg_advance`

> *Internal API*
>
> Advance an LCG (multiplier, increment) by `delta` steps, all mod 2^64.

```valor
u64 pcg_advance(u64 state, u64 distance, u64 mult, u64 inc)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state`: u64 (by value)
> - `distance`: u64 (by value)
> - `mult`: u64 (by value)
> - `inc`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::pcg_advance(state, distance, mult, inc);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-pcg-seed-state"></a>

> ## `pcg_seed_state`

> *Internal API*
>
> Provides the module's **pcg seed state** operation. Returns `u64`.

```valor
u64 pcg_seed_state(u64 seed, u64 inc)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `seed`: u64 (by value)
> - `inc`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::pcg_seed_state(seed, inc);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-pcg"></a>

> ## `pcg`

> Provides the module's **pcg** operation. Returns `u64`.

```valor
public u64 pcg(u64 seed, u64 stream_id, u64 counter)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `seed`: u64 (by value)
> - `stream_id`: u64 (by value)
> - `counter`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::pcg(seed, stream_id, counter);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-philox-block"></a>

> ## `philox_block`

> Provides the module's **philox block** operation. Returns `i32`.

```valor
public i32 philox_block(u64 seed, u64 stream_id, u64 counter, (u64, u64, u64, u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `seed`: u64 (by value)
> - `stream_id`: u64 (by value)
> - `counter`: u64 (by value)
> - `receive`: (u64, u64, u64, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::random::philox_block(seed, stream_id, counter, receive);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-philox"></a>

> ## `philox`

> Provides the module's **philox** operation. Returns `u64`.

```valor
public u64 philox(u64 seed, u64 stream_id, u64 counter)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `seed`: u64 (by value)
> - `stream_id`: u64 (by value)
> - `counter`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::philox(seed, stream_id, counter);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-threefry-rotation"></a>

> ## `threefry_rotation`

> *Internal API*
>
> Provides the module's **threefry rotation** operation. Returns `u32`.

```valor
u32 threefry_rotation(u32 index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::random::threefry_rotation(index);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-threefry-key"></a>

> ## `threefry_key`

> *Internal API*
>
> Provides the module's **threefry key** operation. Returns `u64`.

```valor
u64 threefry_key(u32 index, u64 ks0, u64 ks1, u64 ks2)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: u32 (by value)
> - `ks0`: u64 (by value)
> - `ks1`: u64 (by value)
> - `ks2`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::threefry_key(index, ks0, ks1, ks2);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-threefry"></a>

> ## `threefry`

> Provides the module's **threefry** operation. Returns `u64`.

```valor
public u64 threefry(u64 seed, u64 stream_id, u64 counter)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `seed`: u64 (by value)
> - `stream_id`: u64 (by value)
> - `counter`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::threefry(seed, stream_id, counter);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-to-unit"></a>

> ## `to_unit`

> 53-bit uniform in [0, 1).

```valor
public f64 to_unit(u64 bits)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bits`: u64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::random::to_unit(bits);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-bounded-value"></a>

> ## `bounded_value`

> *Internal API*
>
> Unbiased value in [0, span] (inclusive) drawn from position `key`. Unbiased value in [0, span] (inclusive) drawn from position `key`.  Rejection is performed in a nested stream dimension (perturbing stream_id per attempt) so the caller-visible counter is consumed exactly once per bounded draw, keeping the consumption order fixed while remaining rejection-unbiased.

```valor
u64 bounded_value(u64 seed, u64 stream_id, u64 key, u64 span, (u64, u64, u64) -> u64 engine)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `seed`: u64 (by value)
> - `stream_id`: u64 (by value)
> - `key`: u64 (by value)
> - `span`: u64 (by value)
> - `engine`: (u64, u64, u64) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::bounded_value(seed, stream_id, key, span, engine);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-uniform-int"></a>

> ## `uniform_int`

> Uniform integer in [low, high]. Uniform integer in [low, high].  Consumes exactly one counter unit.

```valor
public u64 uniform_int(u64 seed, u64 stream_id, u64 counter, u64 low, u64 high, (u64, u64, u64) -> u64 engine, (u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `seed`: u64 (by value)
> - `stream_id`: u64 (by value)
> - `counter`: u64 (by value)
> - `low`: u64 (by value)
> - `high`: u64 (by value)
> - `receive`: (u64, u64, u64) -> u64 engine, (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::uniform_int(seed, stream_id, counter, low, high, receive);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-uniform-real"></a>

> ## `uniform_real`

> Uniform real in [low, high). Uniform real in [low, high).  Consumes one counter unit.

```valor
public u64 uniform_real(u64 seed, u64 stream_id, u64 counter, f64 low, f64 high, (u64, u64, u64) -> u64 engine, (f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `seed`: u64 (by value)
> - `stream_id`: u64 (by value)
> - `counter`: u64 (by value)
> - `low`: f64 (by value)
> - `high`: f64 (by value)
> - `receive`: (u64, u64, u64) -> u64 engine, (f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::uniform_real(seed, stream_id, counter, low, high, receive);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-bernoulli"></a>

> ## `bernoulli`

> Bernoulli(p): emits 1 with probability p, else 0. Bernoulli(p): emits 1 with probability p, else 0.  One counter unit.

```valor
public u64 bernoulli(u64 seed, u64 stream_id, u64 counter, f64 p, (u64, u64, u64) -> u64 engine, (u32) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `seed`: u64 (by value)
> - `stream_id`: u64 (by value)
> - `counter`: u64 (by value)
> - `p`: f64 (by value)
> - `receive`: (u64, u64, u64) -> u64 engine, (u32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::bernoulli(seed, stream_id, counter, p, receive);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-fabs"></a>

> ## `fabs`

> *Internal API*
>
> Provides the module's **fabs** operation. Returns `f64`.

```valor
f64 fabs(f64 v)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `v`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::random::fabs(v);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-fmax"></a>

> ## `fmax`

> *Internal API*
>
> Provides the module's **fmax** operation. Returns `f64`.

```valor
f64 fmax(f64 a, f64 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: f64 (by value)
> - `b`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::random::fmax(a, b);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-round-ties-even"></a>

> ## `round_ties_even`

> *Internal API*
>
> Provides the module's **round ties even** operation. Returns `f64`.

```valor
f64 round_ties_even(f64 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::random::round_ties_even(value);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-ln-positive"></a>

> ## `ln_positive`

> *Internal API*
>
> ln for strictly positive argument via range reduction and an atanh series.

```valor
f64 ln_positive(f64 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::random::ln_positive(value);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-exp-stable"></a>

> ## `exp_stable`

> *Internal API*
>
> exp via 2^k * exp(r), |r| <= ln(2)/2, Horner evaluation.

```valor
f64 exp_stable(f64 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::random::exp_stable(value);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-normal"></a>

> ## `normal`

> Standard normal scaled to (mean, stddev) via the Marsaglia polar method (no trigonometric calls). Standard normal scaled to (mean, stddev) via the Marsaglia polar method (no trigonometric calls).  Consumes a variable, deterministic number of counter units and returns the next counter.

```valor
public u64 normal(u64 seed, u64 stream_id, u64 counter, f64 mean, f64 stddev, (u64, u64, u64) -> u64 engine, (f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `seed`: u64 (by value)
> - `stream_id`: u64 (by value)
> - `counter`: u64 (by value)
> - `mean`: f64 (by value)
> - `stddev`: f64 (by value)
> - `receive`: (u64, u64, u64) -> u64 engine, (f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::normal(seed, stream_id, counter, mean, stddev, receive);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-categorical"></a>

> ## `categorical`

> Categorical over k non-negative weights. Categorical over k non-negative weights.  Emits the chosen index; consumes one counter unit.

```valor
public u64 categorical(u64 seed, u64 stream_id, u64 counter, usize k, (usize) -> f64 weight, (u64, u64, u64) -> u64 engine, (usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `seed`: u64 (by value)
> - `stream_id`: u64 (by value)
> - `counter`: u64 (by value)
> - `k`: usize (by value)
> - `u64`: (usize) -> f64 weight, ( (borrowed fn-ptr (callback))
> - `u64`: u64 (by value)
> - `receive`: u64) -> u64 engine, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::categorical(seed, stream_id, counter, k, u64, u64, receive);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-multinomial"></a>

> ## `multinomial`

> Multinomial: draw `trials` independent categorical samples into k bins. Multinomial: draw `trials` independent categorical samples into k bins.  The caller owns the count buffer (pre-zeroed); counts are read/written in place (zero copy).  Consumes `trials` counter units.

```valor
public u64 multinomial(u64 seed, u64 stream_id, u64 counter, u64 trials, usize k, (usize) -> f64 weight, (u64, u64, u64) -> u64 engine, (usize) -> u64 read_count, (usize, u64) -> void write_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `seed`: u64 (by value)
> - `stream_id`: u64 (by value)
> - `counter`: u64 (by value)
> - `trials`: u64 (by value)
> - `k`: usize (by value)
> - `u64`: (usize) -> f64 weight, ( (borrowed fn-ptr (callback))
> - `u64`: u64 (by value)
> - `write_count`: u64) -> u64 engine, (usize) -> u64 read_count, (usize, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::multinomial(seed, stream_id, counter, trials, k, u64, u64, write_count);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-shuffle"></a>

> ## `shuffle`

> Provides the module's **shuffle** operation. Returns `u64`.

```valor
public u64 shuffle(u64 seed, u64 stream_id, u64 counter, usize length, (usize) -> T read, (usize, T) -> void write, (u64, u64, u64) -> u64 engine)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `seed`: u64 (by value)
> - `stream_id`: u64 (by value)
> - `counter`: u64 (by value)
> - `length`: usize (by value)
> - `usize`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `engine`: T) -> void write, (u64, u64, u64) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::shuffle(seed, stream_id, counter, length, usize, engine);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-sample"></a>

> ## `sample`

> Selection sampling (Knuth Algorithm S): choose `k` items from `n` in increasing index order, one streaming pass, no auxiliary storage. Selection sampling (Knuth Algorithm S): choose `k` items from `n` in increasing index order, one streaming pass, no auxiliary storage.  Each retained index is delivered as (rank, source_index).  Consumes up to one counter unit per examined item.

```valor
public u64 sample(u64 seed, u64 stream_id, u64 counter, usize n, usize k, (u64, u64, u64) -> u64 engine, (usize, usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `seed`: u64 (by value)
> - `stream_id`: u64 (by value)
> - `counter`: u64 (by value)
> - `n`: usize (by value)
> - `k`: usize (by value)
> - `usize`: (u64, u64, u64) -> u64 engine, ( (borrowed fn-ptr (callback))
> - `emit`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::sample(seed, stream_id, counter, n, k, usize, emit);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-sample-without-replacement"></a>

> ## `sample_without_replacement`

> Sample without replacement: a uniformly random k-subset in random order, produced by a partial Fisher-Yates over a caller-owned mutable index buffer (pre-filled with 0..n-1). Sample without replacement: a uniformly random k-subset in random order, produced by a partial Fisher-Yates over a caller-owned mutable index buffer (pre-filled with 0..n-1).  The first k entries hold the result on return. Consumes one counter unit per selected element.

```valor
public u64 sample_without_replacement(u64 seed, u64 stream_id, u64 counter, usize n, usize k, (usize) -> usize read_index, (usize, usize) -> void write_index, (u64, u64, u64) -> u64 engine)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `seed`: u64 (by value)
> - `stream_id`: u64 (by value)
> - `counter`: u64 (by value)
> - `n`: usize (by value)
> - `k`: usize (by value)
> - `usize`: (usize) -> usize read_index, ( (borrowed fn-ptr (callback))
> - `engine`: usize) -> void write_index, (u64, u64, u64) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::sample_without_replacement(seed, stream_id, counter, n, k, usize, engine);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-reservoir-sample"></a>

> ## `reservoir_sample`

> Provides the module's **reservoir sample** operation. Returns `u64`.

```valor
public u64 reservoir_sample(u64 seed, u64 stream_id, u64 counter, usize n, usize k, (usize) -> T read_source, (usize) -> T read_reservoir, (usize, T) -> void write_reservoir, (u64, u64, u64) -> u64 engine)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `seed`: u64 (by value)
> - `stream_id`: u64 (by value)
> - `counter`: u64 (by value)
> - `n`: usize (by value)
> - `k`: usize (by value)
> - `engine`: (usize) -> T read_source, (usize) -> T read_reservoir, (usize, T) -> void write_reservoir, (u64, u64, u64) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::reservoir_sample(seed, stream_id, counter, n, k, engine);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-weighted-reservoir-sample"></a>

> ## `weighted_reservoir_sample`

> Weighted reservoir sampling (Efraimidis-Spirakis A-Res). Weighted reservoir sampling (Efraimidis-Spirakis A-Res).  Item i receives key = u_i^(1/w_i); the k largest keys are retained.  Keys are compared in log space (log(u)/w) to avoid the pow and to stay numerically stable — a larger log-key is better.  Caller owns the reservoir index buffer and the parallel log-key buffer.  Consumes one counter unit per item.

```valor
public u64 weighted_reservoir_sample(u64 seed, u64 stream_id, u64 counter, usize n, usize k, (usize) -> f64 read_weight, (usize) -> usize read_res_index, (usize, usize) -> void write_res_index, (usize) -> f64 read_res_key, (usize, f64) -> void write_res_key, (u64, u64, u64) -> u64 engine)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `seed`: u64 (by value)
> - `stream_id`: u64 (by value)
> - `counter`: u64 (by value)
> - `n`: usize (by value)
> - `k`: usize (by value)
> - `engine`: (usize) -> f64 read_weight, (usize) -> usize read_res_index, (usize, usize) -> void write_res_index, (usize) -> f64 read_res_key, (usize, f64) -> void write_res_key, (u64, u64, u64) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::weighted_reservoir_sample(seed, stream_id, counter, n, k, engine);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-max-logit"></a>

> ## `max_logit`

> *Internal API*
>
> Provides the module's **max logit** operation. Returns `f64`.

```valor
f64 max_logit(usize n, (usize) -> f64 read_logit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `read_logit`: (usize) -> f64 (borrowed fn-ptr (callback))

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::random::max_logit(n, read_logit);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-min-logit"></a>

> ## `min_logit`

> *Internal API*
>
> Provides the module's **min logit** operation. Returns `f64`.

```valor
f64 min_logit(usize n, (usize) -> f64 read_logit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `read_logit`: (usize) -> f64 (borrowed fn-ptr (callback))

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::random::min_logit(n, read_logit);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-sample-masked"></a>

> ## `sample_masked`

> *Internal API*
>
> Sample an index proportional to exp((logit - shift)/temperature) restricted to logits >= floor_logit. Sample an index proportional to exp((logit - shift)/temperature) restricted to logits >= floor_logit.  Shared tail of all three decoders.

```valor
usize sample_masked(usize n, (usize) -> f64 read_logit, f64 shift, f64 temperature, f64 floor_logit, f64 u_unit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `u_unit`: (usize) -> f64 read_logit, f64 shift, f64 temperature, f64 floor_logit, f64 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::random::sample_masked(n, u_unit);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-temperature-sample"></a>

> ## `temperature_sample`

> Temperature sampling over the full vocabulary.

```valor
public u64 temperature_sample(u64 seed, u64 stream_id, u64 counter, usize n, (usize) -> f64 read_logit, f64 temperature, (u64, u64, u64) -> u64 engine, (usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `seed`: u64 (by value)
> - `stream_id`: u64 (by value)
> - `counter`: u64 (by value)
> - `n`: usize (by value)
> - `u64`: (usize) -> f64 read_logit, f64 temperature, ( (borrowed fn-ptr (callback))
> - `u64`: u64 (by value)
> - `receive`: u64) -> u64 engine, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::temperature_sample(seed, stream_id, counter, n, u64, u64, receive);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-count-ge"></a>

> ## `count_ge`

> *Internal API*
>
> Count of logits >= level.

```valor
usize count_ge(usize n, (usize) -> f64 read_logit, f64 level)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `level`: (usize) -> f64 read_logit, f64 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::random::count_ge(n, level);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-top-k-sample"></a>

> ## `top_k_sample`

> Top-k sampling. Top-k sampling.  The k-th largest logit is located by bisection on a logit threshold (monotone in the retained count), then temperature softmax is sampled over the retained set.  Ties at the cutoff are retained.

```valor
public u64 top_k_sample(u64 seed, u64 stream_id, u64 counter, usize n, (usize) -> f64 read_logit, usize k, f64 temperature, (u64, u64, u64) -> u64 engine, (usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `seed`: u64 (by value)
> - `stream_id`: u64 (by value)
> - `counter`: u64 (by value)
> - `n`: usize (by value)
> - `u64`: (usize) -> f64 read_logit, usize k, f64 temperature, ( (borrowed fn-ptr (callback))
> - `u64`: u64 (by value)
> - `receive`: u64) -> u64 engine, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::top_k_sample(seed, stream_id, counter, n, u64, u64, receive);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-mass-ge"></a>

> ## `mass_ge`

> *Internal API*
>
> Retained probability mass for logits with softmax prob >= tau, computed directly from logits (shift = max) without materializing probabilities. Retained probability mass for logits with softmax prob >= tau, computed directly from logits (shift = max) without materializing probabilities.

```valor
f64 mass_ge(usize n, (usize) -> f64 read_logit, f64 shift, f64 temperature, f64 total, f64 tau)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `tau`: (usize) -> f64 read_logit, f64 shift, f64 temperature, f64 total, f64 (borrowed fn-ptr (callback))

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::random::mass_ge(n, tau);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

<a id="fn-top-p-sample"></a>

> ## `top_p_sample`

> Top-p (nucleus) sampling. Top-p (nucleus) sampling.  The probability cutoff tau is the largest value whose retained mass still covers p; found by bisection (mass is monotone decreasing in tau).  The nucleus is then sampled by temperature softmax.

```valor
public u64 top_p_sample(u64 seed, u64 stream_id, u64 counter, usize n, (usize) -> f64 read_logit, f64 p, f64 temperature, (u64, u64, u64) -> u64 engine, (usize) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `seed`: u64 (by value)
> - `stream_id`: u64 (by value)
> - `counter`: u64 (by value)
> - `n`: usize (by value)
> - `u64`: (usize) -> f64 read_logit, f64 p, f64 temperature, ( (borrowed fn-ptr (callback))
> - `u64`: u64 (by value)
> - `receive`: u64) -> u64 engine, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::random::top_p_sample(seed, stream_id, counter, n, u64, u64, receive);
> ```

> ### SEE ALSO
>
> - [`std::random::word64`](#fn-word64)
> - [`std::random::u64_max`](#fn-u64-max)
> - [`std::random::mask32`](#fn-mask32)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Numeric](STD-NUMERIC-DOC.md) · [Table of contents](standard-library/README.md) · [Graphs →](STD-GRAPH-DOC.md)
