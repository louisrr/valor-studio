<!-- stdlib-reference-style: modern -->
> # `std::ai`

`std::ai` aI-oriented primitives.

[Standard library](standard-library/README.md) / [Algorithms and computing](standard-library/README.md#algorithms-and-computing) / **Artificial intelligence**

> **Source:** `stdlib/std/ai.valor` · **Routines:** 45 public · 11 internal

## Routines

<details>
<summary>Browse all 56 routines</summary>

- [`ai_abs`](#fn-ai-abs)
- [`ai_max`](#fn-ai-max)
- [`ai_min`](#fn-ai-min)
- [`ai_clamp`](#fn-ai-clamp)
- [`ai_exp`](#fn-ai-exp)
- [`ai_log`](#fn-ai-log)
- [`ai_sqrt`](#fn-ai-sqrt)
- [`ai_rsqrt`](#fn-ai-rsqrt)
- [`ai_pow`](#fn-ai-pow)
- [`ai_sigmoid`](#fn-ai-sigmoid)
- [`ai_tanh`](#fn-ai-tanh)
- [`ai_silu`](#fn-ai-silu)
- [`ai_gelu`](#fn-ai-gelu)
- [`ai_reduce_angle`](#fn-ai-reduce-angle)
- [`ai_sin`](#fn-ai-sin)
- [`ai_cos`](#fn-ai-cos)
- [`ai_attention_shapes_valid`](#fn-ai-attention-shapes-valid)
- [`ai_online_row`](#fn-ai-online-row)
- [`ai_normalize_row`](#fn-ai-normalize-row)
- [`ai_allow_all`](#fn-ai-allow-all)
- [`ai_bias_zero`](#fn-ai-bias-zero)
- [`scaled_dot_product_attention_into`](#fn-scaled-dot-product-attention-into)
- [`masked_attention`](#fn-masked-attention)
- [`causal_attention`](#fn-causal-attention)
- [`grouped_query_attention`](#fn-grouped-query-attention)
- [`multi_query_attention`](#fn-multi-query-attention)
- [`paged_attention`](#fn-paged-attention)
- [`online_softmax_attention`](#fn-online-softmax-attention)
- [`finalize_attention`](#fn-finalize-attention)
- [`ai_capture_state`](#fn-ai-capture-state)
- [`tiled_attention`](#fn-tiled-attention)
- [`rotary_embedding`](#fn-rotary-embedding)
- [`alibi_slope`](#fn-alibi-slope)
- [`alibi_bias`](#fn-alibi-bias)
- [`kv_cache_append`](#fn-kv-cache-append)
- [`kv_cache_gather`](#fn-kv-cache-gather)
- [`kv_cache_compact`](#fn-kv-cache-compact)
- [`rms_norm_into`](#fn-rms-norm-into)
- [`layer_norm_into`](#fn-layer-norm-into)
- [`gated_linear_unit`](#fn-gated-linear-unit)
- [`swiglu`](#fn-swiglu)
- [`geglu`](#fn-geglu)
- [`greedy_decode`](#fn-greedy-decode)
- [`beam_search`](#fn-beam-search)
- [`top_k_decode`](#fn-top-k-decode)
- [`top_p_decode`](#fn-top-p-decode)
- [`repetition_penalty`](#fn-repetition-penalty)
- [`frequency_penalty`](#fn-frequency-penalty)
- [`presence_penalty`](#fn-presence-penalty)
- [`stop_sequence_match`](#fn-stop-sequence-match)
- [`expert_top_k`](#fn-expert-top-k)
- [`route_tokens`](#fn-route-tokens)
- [`count_expert_load`](#fn-count-expert-load)
- [`prefix_expert_offsets`](#fn-prefix-expert-offsets)
- [`dispatch_tokens`](#fn-dispatch-tokens)
- [`combine_expert_outputs`](#fn-combine-expert-outputs)

</details>

## API reference

<a id="fn-ai-abs"></a>

> ## `ai_abs`

> *Internal API*
>
> Provides the module's **ai abs** operation. Returns `f64`.

```valor
f64 ai_abs(f64 value)
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
> f64 result = std::ai::ai_abs(value);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)
> - [`std::ai::ai_clamp`](#fn-ai-clamp)

<a id="fn-ai-max"></a>

> ## `ai_max`

> *Internal API*
>
> Provides the module's **ai max** operation. Returns `f64`.

```valor
f64 ai_max(f64 left, f64 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: f64 (by value)
> - `right`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::ai::ai_max(left, right);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_min`](#fn-ai-min)
> - [`std::ai::ai_clamp`](#fn-ai-clamp)

<a id="fn-ai-min"></a>

> ## `ai_min`

> *Internal API*
>
> Provides the module's **ai min** operation. Returns `f64`.

```valor
f64 ai_min(f64 left, f64 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: f64 (by value)
> - `right`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::ai::ai_min(left, right);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_clamp`](#fn-ai-clamp)

<a id="fn-ai-clamp"></a>

> ## `ai_clamp`

> *Internal API*
>
> Provides the module's **ai clamp** operation. Returns `f64`.

```valor
f64 ai_clamp(f64 value, f64 lower, f64 upper)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: f64 (by value)
> - `lower`: f64 (by value)
> - `upper`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::ai::ai_clamp(value, lower, upper);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-ai-exp"></a>

> ## `ai_exp`

> exp(x) = 2^k exp(r), |r| <= ln(2)/2, evaluated by Horner.

```valor
public f64 ai_exp(f64 value)
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
> f64 result = std::ai::ai_exp(value);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-ai-log"></a>

> ## `ai_log`

> ln for strictly positive input via range reduction and an atanh series.

```valor
public f64 ai_log(f64 value)
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
> f64 result = std::ai::ai_log(value);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-ai-sqrt"></a>

> ## `ai_sqrt`

> Heron iteration; the reference kernels never take a square root of a negative value, so the domain guard returns zero rather than diverging. Heron iteration; the reference kernels never take a square root of a negative value, so the domain guard returns zero rather than diverging.

```valor
public f64 ai_sqrt(f64 value)
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
> f64 result = std::ai::ai_sqrt(value);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-ai-rsqrt"></a>

> ## `ai_rsqrt`

> Provides the module's **ai rsqrt** operation. Returns `f64`.

```valor
public f64 ai_rsqrt(f64 value)
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
> f64 result = std::ai::ai_rsqrt(value);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-ai-pow"></a>

> ## `ai_pow`

> Provides the module's **ai pow** operation. Returns `f64`.

```valor
public f64 ai_pow(f64 basis, f64 power)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `basis`: f64 (by value)
> - `power`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::ai::ai_pow(basis, power);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-ai-sigmoid"></a>

> ## `ai_sigmoid`

> Provides the module's **ai sigmoid** operation. Returns `f64`.

```valor
public f64 ai_sigmoid(f64 value)
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
> f64 result = std::ai::ai_sigmoid(value);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-ai-tanh"></a>

> ## `ai_tanh`

> Provides the module's **ai tanh** operation. Returns `f64`.

```valor
public f64 ai_tanh(f64 value)
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
> f64 result = std::ai::ai_tanh(value);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-ai-silu"></a>

> ## `ai_silu`

> SiLU / swish.

```valor
public f64 ai_silu(f64 value)
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
> f64 result = std::ai::ai_silu(value);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-ai-gelu"></a>

> ## `ai_gelu`

> GELU, tanh approximation (Hendrycks & Gimpel).

```valor
public f64 ai_gelu(f64 value)
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
> f64 result = std::ai::ai_gelu(value);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-ai-reduce-angle"></a>

> ## `ai_reduce_angle`

> *Internal API*
>
> Argument reduced to [-pi, pi] before a fixed Taylor expansion.

```valor
f64 ai_reduce_angle(f64 angle)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `angle`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::ai::ai_reduce_angle(angle);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-ai-sin"></a>

> ## `ai_sin`

> Provides the module's **ai sin** operation. Returns `f64`.

```valor
public f64 ai_sin(f64 angle)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `angle`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::ai::ai_sin(angle);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-ai-cos"></a>

> ## `ai_cos`

> Provides the module's **ai cos** operation. Returns `f64`.

```valor
public f64 ai_cos(f64 angle)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `angle`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::ai::ai_cos(angle);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-ai-attention-shapes-valid"></a>

> ## `ai_attention_shapes_valid`

> *Internal API*
>
> Provides the module's **ai attention shapes valid** operation. Returns `bool`.

```valor
bool ai_attention_shapes_valid(usize head_dim, usize value_dim)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `head_dim`: usize (by value)
> - `value_dim`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::ai::ai_attention_shapes_valid(head_dim, value_dim);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-ai-online-row"></a>

> ## `ai_online_row`

> *Internal API*
>
> One query row over [key_begin, key_end). One query row over [key_begin, key_end).  State (m, l, started) is supplied and returned so the caller can compose tiles; the accumulator is updated in place through read_accum / write_accum.  `allow` gates individual keys and `bias` is added to the raw score (ALiBi, relative position, padding mask).

```valor
i32 ai_online_row(usize key_begin, usize key_end, usize head_dim, usize value_dim, f64 scale, f64 in_max, f64 in_denom, bool in_started, (usize) -> f64 read_query, (usize, usize) -> f64 read_key, (usize, usize) -> f64 read_value, (usize) -> f64 read_bias, (usize) -> bool allow, (usize) -> f64 read_accum, (usize, f64) -> void write_accum, (f64, f64, bool) -> void receive_state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `key_begin`: usize (by value)
> - `key_end`: usize (by value)
> - `head_dim`: usize (by value)
> - `value_dim`: usize (by value)
> - `scale`: f64 (by value)
> - `in_max`: f64 (by value)
> - `in_denom`: f64 (by value)
> - `in_started`: bool (by value)
> - `usize`: (usize) -> f64 read_query, ( (borrowed fn-ptr (callback))
> - `receive_state`: usize) -> f64 read_key, (usize, usize) -> f64 read_value, (usize) -> f64 read_bias, (usize) -> bool allow, (usize) -> f64 read_accum, (usize, f64) -> void write_accum, (f64, f64, bool) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ai::ai_online_row(key_begin, key_end, head_dim, value_dim, scale, in_max, in_denom, in_started, usize, receive_state);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-ai-normalize-row"></a>

> ## `ai_normalize_row`

> *Internal API*
>
> Provides the module's **ai normalize row** operation.

```valor
void ai_normalize_row(usize value_dim, f64 denom, (usize) -> f64 read_accum, (usize, f64) -> void write_accum)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value_dim`: usize (by value)
> - `denom`: f64 (by value)
> - `usize`: (usize) -> f64 read_accum, ( (borrowed fn-ptr (callback))
> - `write_accum`: f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::ai::ai_normalize_row(value_dim, denom, usize, write_accum);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-ai-allow-all"></a>

> ## `ai_allow_all`

> *Internal API*
>
> Provides the module's **ai allow all** operation. Returns `bool`.

```valor
bool ai_allow_all(usize key)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `key`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::ai::ai_allow_all(key);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-ai-bias-zero"></a>

> ## `ai_bias_zero`

> *Internal API*
>
> Provides the module's **ai bias zero** operation. Returns `f64`.

```valor
f64 ai_bias_zero(usize key)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `key`: usize (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::ai::ai_bias_zero(key);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-scaled-dot-product-attention-into"></a>

> ## `scaled_dot_product_attention_into`

> Full multi-query scaled-dot-product attention. Full multi-query scaled-dot-product attention.  Queries are independent, so the outer loop is a NUMA/thread partition point.  The output view doubles as the online accumulator (read_output + write_output).

```valor
public i32 scaled_dot_product_attention_into( usize query_count, usize key_count, usize head_dim, usize value_dim, f64 scale, (usize, usize) -> f64 read_query, (usize, usize) -> f64 read_key, (usize, usize) -> f64 read_value, (usize, usize) -> f64 read_output, (usize, usize, f64) -> void write_output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^3)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `query_count`: usize (by value)
> - `key_count`: usize (by value)
> - `head_dim`: usize (by value)
> - `value_dim`: usize (by value)
> - `scale`: f64 (by value)
> - `usize`: (usize, usize) -> f64 read_query, ( (borrowed fn-ptr (callback))
> - `write_output`: usize) -> f64 read_key, (usize, usize) -> f64 read_value, (usize, usize) -> f64 read_output, (usize, usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ai::scaled_dot_product_attention_into(query_count, key_count, head_dim, value_dim, scale, usize, write_output);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-masked-attention"></a>

> ## `masked_attention`

> Additive/boolean masked attention. Additive/boolean masked attention.  `allow(query, key)` selects visible keys; masked keys contribute nothing (no allocation, no wasted exp).

```valor
public i32 masked_attention( usize query_count, usize key_count, usize head_dim, usize value_dim, f64 scale, (usize, usize) -> f64 read_query, (usize, usize) -> f64 read_key, (usize, usize) -> f64 read_value, (usize, usize) -> bool allow, (usize, usize) -> f64 read_output, (usize, usize, f64) -> void write_output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^3)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `query_count`: usize (by value)
> - `key_count`: usize (by value)
> - `head_dim`: usize (by value)
> - `value_dim`: usize (by value)
> - `scale`: f64 (by value)
> - `usize`: (usize, usize) -> f64 read_query, ( (borrowed fn-ptr (callback))
> - `write_output`: usize) -> f64 read_key, (usize, usize) -> f64 read_value, (usize, usize) -> bool allow, (usize, usize) -> f64 read_output, (usize, usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ai::masked_attention(query_count, key_count, head_dim, value_dim, scale, usize, write_output);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-causal-attention"></a>

> ## `causal_attention`

> Autoregressive causal attention. Autoregressive causal attention.  Query row `q` (absolute position `query_position_base + q`) attends to keys [0, position].  The key loop end is bounded, so future keys are never touched rather than masked after the fact.

```valor
public i32 causal_attention( usize query_count, usize key_count, usize head_dim, usize value_dim, usize query_position_base, f64 scale, (usize, usize) -> f64 read_query, (usize, usize) -> f64 read_key, (usize, usize) -> f64 read_value, (usize, usize) -> f64 read_output, (usize, usize, f64) -> void write_output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^3)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `query_count`: usize (by value)
> - `key_count`: usize (by value)
> - `head_dim`: usize (by value)
> - `value_dim`: usize (by value)
> - `query_position_base`: usize (by value)
> - `scale`: f64 (by value)
> - `usize`: (usize, usize) -> f64 read_query, ( (borrowed fn-ptr (callback))
> - `write_output`: usize) -> f64 read_key, (usize, usize) -> f64 read_value, (usize, usize) -> f64 read_output, (usize, usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ai::causal_attention(query_count, key_count, head_dim, value_dim, query_position_base, scale, usize, write_output);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-grouped-query-attention"></a>

> ## `grouped_query_attention`

> Grouped-query attention for one query position across `query_head_count` query heads that share `kv_head_count` key/value heads. Grouped-query attention for one query position across `query_head_count` query heads that share `kv_head_count` key/value heads.  Head `h` reads the kv head `h / (query_head_count / kv_head_count)`.

```valor
public i32 grouped_query_attention( usize query_head_count, usize kv_head_count, usize key_count, usize head_dim, usize value_dim, f64 scale, (usize, usize) -> f64 read_query, (usize, usize, usize) -> f64 read_key, (usize, usize, usize) -> f64 read_value, (usize, usize) -> f64 read_output, (usize, usize, f64) -> void write_output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^3)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `query_head_count`: usize (by value)
> - `kv_head_count`: usize (by value)
> - `key_count`: usize (by value)
> - `head_dim`: usize (by value)
> - `value_dim`: usize (by value)
> - `scale`: f64 (by value)
> - `usize`: (usize, usize) -> f64 read_query, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `write_output`: usize) -> f64 read_key, (usize, usize, usize) -> f64 read_value, (usize, usize) -> f64 read_output, (usize, usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ai::grouped_query_attention(query_head_count, kv_head_count, key_count, head_dim, value_dim, scale, usize, usize, write_output);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-multi-query-attention"></a>

> ## `multi_query_attention`

> Multi-query attention: every query head shares one key/value head. Multi-query attention: every query head shares one key/value head.  A direct specialisation of grouped-query attention with kv_head_count == 1.

```valor
public i32 multi_query_attention( usize query_head_count, usize key_count, usize head_dim, usize value_dim, f64 scale, (usize, usize) -> f64 read_query, (usize, usize) -> f64 read_key, (usize, usize) -> f64 read_value, (usize, usize) -> f64 read_output, (usize, usize, f64) -> void write_output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^3)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `query_head_count`: usize (by value)
> - `key_count`: usize (by value)
> - `head_dim`: usize (by value)
> - `value_dim`: usize (by value)
> - `scale`: f64 (by value)
> - `usize`: (usize, usize) -> f64 read_query, ( (borrowed fn-ptr (callback))
> - `write_output`: usize) -> f64 read_key, (usize, usize) -> f64 read_value, (usize, usize) -> f64 read_output, (usize, usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ai::multi_query_attention(query_head_count, key_count, head_dim, value_dim, scale, usize, write_output);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-paged-attention"></a>

> ## `paged_attention`

> Paged attention: the logical key axis is indirected through a page table. Paged attention: the logical key axis is indirected through a page table. `resolve(logical)` returns the physical slot of logical key `logical`; the kernel reads K/V at the physical slot, so a fragmented KV cache attends with no gather copy.

```valor
public i32 paged_attention( usize key_count, usize head_dim, usize value_dim, f64 scale, (usize) -> f64 read_query, (usize) -> usize resolve, (usize, usize) -> f64 read_key, (usize, usize) -> f64 read_value, (usize) -> f64 read_output, (usize, f64) -> void write_output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `key_count`: usize (by value)
> - `head_dim`: usize (by value)
> - `value_dim`: usize (by value)
> - `scale`: f64 (by value)
> - `write_output`: (usize) -> f64 read_query, (usize) -> usize resolve, (usize, usize) -> f64 read_key, (usize, usize) -> f64 read_value, (usize) -> f64 read_output, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ai::paged_attention(key_count, head_dim, value_dim, scale, write_output);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-online-softmax-attention"></a>

> ## `online_softmax_attention`

> One online-softmax tile for a single query row. One online-softmax tile for a single query row.  Processes keys [key_begin, key_end), updating the accumulator in place and reporting the new (max, denom, started) state through `receive_state`.  The caller loops over tiles and finalises with `finalize_attention`.  This is the composable core the other attention kernels are built from.

```valor
public i32 online_softmax_attention( usize key_begin, usize key_end, usize head_dim, usize value_dim, f64 scale, f64 running_max, f64 running_denom, bool started, (usize) -> f64 read_query, (usize, usize) -> f64 read_key, (usize, usize) -> f64 read_value, (usize) -> f64 read_accum, (usize, f64) -> void write_accum, (f64, f64, bool) -> void receive_state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `key_begin`: usize (by value)
> - `key_end`: usize (by value)
> - `head_dim`: usize (by value)
> - `value_dim`: usize (by value)
> - `scale`: f64 (by value)
> - `running_max`: f64 (by value)
> - `running_denom`: f64 (by value)
> - `started`: bool (by value)
> - `usize`: (usize) -> f64 read_query, ( (borrowed fn-ptr (callback))
> - `receive_state`: usize) -> f64 read_key, (usize, usize) -> f64 read_value, (usize) -> f64 read_accum, (usize, f64) -> void write_accum, (f64, f64, bool) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ai::online_softmax_attention(key_begin, key_end, head_dim, value_dim, scale, running_max, running_denom, started, usize, receive_state);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-finalize-attention"></a>

> ## `finalize_attention`

> Divide the accumulated numerator by the online denominator. Divide the accumulated numerator by the online denominator.  Pairs with the tiled loop over `online_softmax_attention`.

```valor
public i32 finalize_attention(usize value_dim, f64 running_denom, (usize) -> f64 read_accum, (usize, f64) -> void write_accum)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value_dim`: usize (by value)
> - `running_denom`: f64 (by value)
> - `usize`: (usize) -> f64 read_accum, ( (borrowed fn-ptr (callback))
> - `write_accum`: f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ai::finalize_attention(value_dim, running_denom, usize, write_accum);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-ai-capture-state"></a>

> ## `ai_capture_state`

> *Internal API*
>
> Provides the module's **ai capture state** operation.

```valor
void ai_capture_state(f64 running_max, f64 running_denom, bool started)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `running_max`: f64 (by value)
> - `running_denom`: f64 (by value)
> - `started`: bool (by value)

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::ai::ai_capture_state(running_max, running_denom, started);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-tiled-attention"></a>

> ## `tiled_attention`

> Full single-query attention driven tile-by-tile through the online kernel. Full single-query attention driven tile-by-tile through the online kernel. `tile_size` bounds the working key window; the score matrix is never materialised regardless of key_count.

```valor
public i32 tiled_attention( usize key_count, usize head_dim, usize value_dim, usize tile_size, f64 scale, (usize) -> f64 read_query, (usize, usize) -> f64 read_key, (usize, usize) -> f64 read_value, (usize) -> f64 read_accum, (usize, f64) -> void write_accum, (f64) -> void receive_denom)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^3)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `key_count`: usize (by value)
> - `head_dim`: usize (by value)
> - `value_dim`: usize (by value)
> - `tile_size`: usize (by value)
> - `scale`: f64 (by value)
> - `usize`: (usize) -> f64 read_query, ( (borrowed fn-ptr (callback))
> - `receive_denom`: usize) -> f64 read_key, (usize, usize) -> f64 read_value, (usize) -> f64 read_accum, (usize, f64) -> void write_accum, (f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ai::tiled_attention(key_count, head_dim, value_dim, tile_size, scale, usize, receive_denom);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-rotary-embedding"></a>

> ## `rotary_embedding`

> Rotary position embedding on one head vector. Rotary position embedding on one head vector.  Adjacent channels (2i, 2i+1) are rotated by position * theta_base^(-2i/head_dim); head_dim must be even.

```valor
public i32 rotary_embedding(usize head_dim, usize position, f64 theta_base, (usize) -> f64 read_in, (usize, f64) -> void write_out)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `head_dim`: usize (by value)
> - `position`: usize (by value)
> - `theta_base`: f64 (by value)
> - `usize`: (usize) -> f64 read_in, ( (borrowed fn-ptr (callback))
> - `write_out`: f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ai::rotary_embedding(head_dim, position, theta_base, usize, write_out);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-alibi-slope"></a>

> ## `alibi_slope`

> Standard geometric ALiBi slope for head `head_index` of `head_count`.

```valor
public f64 alibi_slope(usize head_index, usize head_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `head_index`: usize (by value)
> - `head_count`: usize (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::ai::alibi_slope(head_index, head_count);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-alibi-bias"></a>

> ## `alibi_bias`

> ALiBi additive bias for (query_position, key_position). ALiBi additive bias for (query_position, key_position).  Keys ahead of the query receive a strongly negative bias so a causal kernel discards them.

```valor
public f64 alibi_bias(f64 slope, usize query_position, usize key_position)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `slope`: f64 (by value)
> - `query_position`: usize (by value)
> - `key_position`: usize (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::ai::alibi_bias(slope, query_position, key_position);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-kv-cache-append"></a>

> ## `kv_cache_append`

> Append one token's K and V into the cache at `slot`.

```valor
public i32 kv_cache_append(usize slot, usize head_dim, usize value_dim, (usize) -> f64 read_key, (usize) -> f64 read_value, (usize, usize, f64) -> void write_key_cache, (usize, usize, f64) -> void write_value_cache)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `slot`: usize (by value)
> - `head_dim`: usize (by value)
> - `value_dim`: usize (by value)
> - `write_value_cache`: (usize) -> f64 read_key, (usize) -> f64 read_value, (usize, usize, f64) -> void write_key_cache, (usize, usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ai::kv_cache_append(slot, head_dim, value_dim, write_value_cache);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-kv-cache-gather"></a>

> ## `kv_cache_gather`

> Gather `count` cache rows into a contiguous output in the caller's explicit order: output row `i` receives cache row `select(i)`. Gather `count` cache rows into a contiguous output in the caller's explicit order: output row `i` receives cache row `select(i)`.

```valor
public i32 kv_cache_gather(usize count, usize head_dim, (usize) -> usize select, (usize, usize) -> f64 read_cache, (usize, usize, f64) -> void write_out)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `head_dim`: usize (by value)
> - `usize`: (usize) -> usize select, ( (borrowed fn-ptr (callback))
> - `write_out`: usize) -> f64 read_cache, (usize, usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ai::kv_cache_gather(count, head_dim, usize, write_out);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-kv-cache-compact"></a>

> ## `kv_cache_compact`

> Stable in-place compaction: surviving rows (live(row) true) are moved down, preserving order and closing gaps. Stable in-place compaction: surviving rows (live(row) true) are moved down, preserving order and closing gaps.  The retained length is reported.

```valor
public i32 kv_cache_compact(usize length, usize head_dim, (usize) -> bool live, (usize, usize) -> f64 read_cache, (usize, usize, f64) -> void write_cache, (usize) -> void receive_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `head_dim`: usize (by value)
> - `usize`: (usize) -> bool live, ( (borrowed fn-ptr (callback))
> - `receive_length`: usize) -> f64 read_cache, (usize, usize, f64) -> void write_cache, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ai::kv_cache_compact(length, head_dim, usize, receive_length);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-rms-norm-into"></a>

> ## `rms_norm_into`

> RMS normalisation over one feature vector: out = x / rms(x) * scale.

```valor
public i32 rms_norm_into(usize dim, f64 epsilon, (usize) -> f64 read_in, (usize) -> f64 read_scale, (usize, f64) -> void write_out)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `dim`: usize (by value)
> - `epsilon`: f64 (by value)
> - `write_out`: (usize) -> f64 read_in, (usize) -> f64 read_scale, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ai::rms_norm_into(dim, epsilon, write_out);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-layer-norm-into"></a>

> ## `layer_norm_into`

> Layer normalisation over one feature vector with scale and bias.

```valor
public i32 layer_norm_into(usize dim, f64 epsilon, (usize) -> f64 read_in, (usize) -> f64 read_scale, (usize) -> f64 read_bias, (usize, f64) -> void write_out)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `dim`: usize (by value)
> - `epsilon`: f64 (by value)
> - `write_out`: (usize) -> f64 read_in, (usize) -> f64 read_scale, (usize) -> f64 read_bias, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ai::layer_norm_into(dim, epsilon, write_out);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-gated-linear-unit"></a>

> ## `gated_linear_unit`

> Gated linear unit: out[i] = a[i] * sigmoid(b[i]).

```valor
public i32 gated_linear_unit(usize dim, (usize) -> f64 read_a, (usize) -> f64 read_b, (usize, f64) -> void write_out)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `dim`: usize (by value)
> - `write_out`: (usize) -> f64 read_a, (usize) -> f64 read_b, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ai::gated_linear_unit(dim, write_out);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-swiglu"></a>

> ## `swiglu`

> SwiGLU: out[i] = silu(a[i]) * b[i].

```valor
public i32 swiglu(usize dim, (usize) -> f64 read_a, (usize) -> f64 read_b, (usize, f64) -> void write_out)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `dim`: usize (by value)
> - `write_out`: (usize) -> f64 read_a, (usize) -> f64 read_b, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ai::swiglu(dim, write_out);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-geglu"></a>

> ## `geglu`

> GEGLU: out[i] = gelu(a[i]) * b[i].

```valor
public i32 geglu(usize dim, (usize) -> f64 read_a, (usize) -> f64 read_b, (usize, f64) -> void write_out)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `dim`: usize (by value)
> - `write_out`: (usize) -> f64 read_a, (usize) -> f64 read_b, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ai::geglu(dim, write_out);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-greedy-decode"></a>

> ## `greedy_decode`

> Argmax over the vocabulary, lowest index winning ties.

```valor
public i32 greedy_decode(usize vocab, (usize) -> f64 read_logit, (usize) -> void receive_token)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `vocab`: usize (by value)
> - `receive_token`: (usize) -> f64 read_logit, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ai::greedy_decode(vocab, receive_token);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-beam-search"></a>

> ## `beam_search`

> One beam-search expansion step. One beam-search expansion step.  Given `beam_width` live beams with cumulative log-probabilities and per-(beam, token) log-probabilities, emit the top `beam_width` continuations ranked by combined score.  Ties break by (beam, token) in row-major order.  Selection is O(beam_width^2 * vocab) with no scratch: each rank walks the flattened candidate space once, staying strictly below the previously emitted (score, index) frontier.

```valor
public i32 beam_search(usize beam_width, usize vocab, (usize) -> f64 read_beam_score, (usize, usize) -> f64 read_logprob, (usize, usize) -> void write_beam_token, (usize, f64) -> void write_score)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `beam_width`: usize (by value)
> - `vocab`: usize (by value)
> - `usize`: (usize) -> f64 read_beam_score, ( (borrowed fn-ptr (callback))
> - `write_score`: usize) -> f64 read_logprob, (usize, usize) -> void write_beam_token, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ai::beam_search(beam_width, vocab, usize, write_score);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-top-k-decode"></a>

> ## `top_k_decode`

> Temperature top-k sampling over a caller-ordered candidate list (descending logit). Temperature top-k sampling over a caller-ordered candidate list (descending logit).  A softmax over the first `k` candidates is drawn by inverse-CDF with the caller-supplied uniform `uniform` in [0, 1); the chosen candidate's token id is returned.  Reproducible given the same uniform.

```valor
public i32 top_k_decode(usize candidate_count, usize k, f64 temperature, f64 uniform, (usize) -> usize candidate_token, (usize) -> f64 candidate_logit, (usize) -> void receive_token)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `candidate_count`: usize (by value)
> - `k`: usize (by value)
> - `temperature`: f64 (by value)
> - `uniform`: f64 (by value)
> - `receive_token`: (usize) -> usize candidate_token, (usize) -> f64 candidate_logit, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ai::top_k_decode(candidate_count, k, temperature, uniform, receive_token);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-top-p-decode"></a>

> ## `top_p_decode`

> Temperature nucleus (top-p) sampling over a caller-ordered candidate list (descending logit). Temperature nucleus (top-p) sampling over a caller-ordered candidate list (descending logit).  The nucleus is the shortest descending prefix whose softmax mass reaches `probability`; a token is drawn from it by inverse-CDF with `uniform`.

```valor
public i32 top_p_decode(usize candidate_count, f64 probability, f64 temperature, f64 uniform, (usize) -> usize candidate_token, (usize) -> f64 candidate_logit, (usize) -> void receive_token)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `candidate_count`: usize (by value)
> - `probability`: f64 (by value)
> - `temperature`: f64 (by value)
> - `uniform`: f64 (by value)
> - `receive_token`: (usize) -> usize candidate_token, (usize) -> f64 candidate_logit, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ai::top_p_decode(candidate_count, probability, temperature, uniform, receive_token);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-repetition-penalty"></a>

> ## `repetition_penalty`

> Repetition penalty (CTRL / HF style): a seen token's positive logit is divided by `penalty`, its negative logit multiplied by it. Repetition penalty (CTRL / HF style): a seen token's positive logit is divided by `penalty`, its negative logit multiplied by it.

```valor
public f64 repetition_penalty(f64 logit, bool seen, f64 penalty)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `logit`: f64 (by value)
> - `seen`: bool (by value)
> - `penalty`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::ai::repetition_penalty(logit, seen, penalty);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-frequency-penalty"></a>

> ## `frequency_penalty`

> Frequency penalty: subtract alpha times the occurrence count.

```valor
public f64 frequency_penalty(f64 logit, u64 count, f64 alpha)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `logit`: f64 (by value)
> - `count`: u64 (by value)
> - `alpha`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::ai::frequency_penalty(logit, count, alpha);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-presence-penalty"></a>

> ## `presence_penalty`

> Presence penalty: subtract alpha once if the token has appeared.

```valor
public f64 presence_penalty(f64 logit, bool present, f64 alpha)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `logit`: f64 (by value)
> - `present`: bool (by value)
> - `alpha`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::ai::presence_penalty(logit, present, alpha);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-stop-sequence-match"></a>

> ## `stop_sequence_match`

> True when the last `stop_length` generated tokens equal the stop sequence.

```valor
public i32 stop_sequence_match(usize history_length, usize stop_length, (usize) -> i64 read_history, (usize) -> i64 read_stop, (bool) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `history_length`: usize (by value)
> - `stop_length`: usize (by value)
> - `receive`: (usize) -> i64 read_history, (usize) -> i64 read_stop, (bool) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ai::stop_sequence_match(history_length, stop_length, receive);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-expert-top-k"></a>

> ## `expert_top_k`

> Top-k expert routing for one token. Top-k expert routing for one token.  Selects the `k` highest router logits (lowest expert id winning ties) and writes them by descending logit together with a softmax gate normalised over the selected set.  No scratch: each rank walks the expert axis once below the previous frontier.

```valor
public i32 expert_top_k(usize num_experts, usize k, (usize) -> f64 read_router_logit, (usize, usize) -> void write_expert, (usize, f64) -> void write_weight)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `num_experts`: usize (by value)
> - `k`: usize (by value)
> - `usize`: (usize) -> f64 read_router_logit, ( (borrowed fn-ptr (callback))
> - `write_weight`: usize) -> void write_expert, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ai::expert_top_k(num_experts, k, usize, write_weight);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-route-tokens"></a>

> ## `route_tokens`

> Top-1 routing: assign each token to its argmax expert, lowest id winning ties. Top-1 routing: assign each token to its argmax expert, lowest id winning ties.  Token order is preserved.

```valor
public i32 route_tokens(usize num_tokens, usize num_experts, (usize, usize) -> f64 read_router_logit, (usize, usize) -> void write_assignment)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `num_tokens`: usize (by value)
> - `num_experts`: usize (by value)
> - `usize`: (usize, usize) -> f64 read_router_logit, ( (borrowed fn-ptr (callback))
> - `write_assignment`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ai::route_tokens(num_tokens, num_experts, usize, write_assignment);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-count-expert-load"></a>

> ## `count_expert_load`

> Count tokens routed to each expert. Count tokens routed to each expert.  Counts are zeroed then incremented in a single O(num_tokens + num_experts) pass through a caller-owned counter view.

```valor
public i32 count_expert_load(usize num_tokens, usize num_experts, (usize) -> usize read_assignment, (usize) -> u64 read_count, (usize, u64) -> void write_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `num_tokens`: usize (by value)
> - `num_experts`: usize (by value)
> - `write_count`: (usize) -> usize read_assignment, (usize) -> u64 read_count, (usize, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ai::count_expert_load(num_tokens, num_experts, write_count);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-prefix-expert-offsets"></a>

> ## `prefix_expert_offsets`

> Exclusive prefix sum of per-expert counts. Exclusive prefix sum of per-expert counts.  Writes offsets[0..num_experts]; offset[num_experts] is the total token count.

```valor
public i32 prefix_expert_offsets(usize num_experts, (usize) -> u64 read_count, (usize, u64) -> void write_offset)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `num_experts`: usize (by value)
> - `usize`: (usize) -> u64 read_count, ( (borrowed fn-ptr (callback))
> - `write_offset`: u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ai::prefix_expert_offsets(num_experts, usize, write_offset);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-dispatch-tokens"></a>

> ## `dispatch_tokens`

> Scatter token indices into per-expert contiguous slots. Scatter token indices into per-expert contiguous slots.  `read_cursor` / `write_cursor` is a caller-owned working copy of the offsets; scanning tokens in order keeps each expert's tokens in stable token order.

```valor
public i32 dispatch_tokens(usize num_tokens, usize num_experts, (usize) -> usize read_assignment, (usize) -> u64 read_cursor, (usize, u64) -> void write_cursor, (u64, usize) -> void write_dispatch)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `num_tokens`: usize (by value)
> - `num_experts`: usize (by value)
> - `write_dispatch`: (usize) -> usize read_assignment, (usize) -> u64 read_cursor, (usize, u64) -> void write_cursor, (u64, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ai::dispatch_tokens(num_tokens, num_experts, write_dispatch);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

<a id="fn-combine-expert-outputs"></a>

> ## `combine_expert_outputs`

> Combine per-token expert outputs back into a single vector per token, weighted by the routing gates: out[t] = sum_slot gate[t, slot] * y[t, slot]. Combine per-token expert outputs back into a single vector per token, weighted by the routing gates: out[t] = sum_slot gate[t, slot] * y[t, slot].

```valor
public i32 combine_expert_outputs(usize num_tokens, usize slots, usize dim, (usize, usize) -> f64 read_weight, (usize, usize, usize) -> f64 read_expert_output, (usize, usize, f64) -> void write_output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^3)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `num_tokens`: usize (by value)
> - `slots`: usize (by value)
> - `dim`: usize (by value)
> - `usize`: (usize, usize) -> f64 read_weight, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `write_output`: usize) -> f64 read_expert_output, (usize, usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ai::combine_expert_outputs(num_tokens, slots, dim, usize, usize, write_output);
> ```

> ### SEE ALSO
>
> - [`std::ai::ai_abs`](#fn-ai-abs)
> - [`std::ai::ai_max`](#fn-ai-max)
> - [`std::ai::ai_min`](#fn-ai-min)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Tensors](STD-TENSOR-DOC.md) · [Table of contents](standard-library/README.md) · [Memory →](STD-MEMORY-DOC.md)
