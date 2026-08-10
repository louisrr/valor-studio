<!-- stdlib-reference-style: modern -->
> # `std::la`

`std::la` linear algebra operations.

[Standard library](standard-library/README.md) / [Algorithms and computing](standard-library/README.md#algorithms-and-computing) / **Linear algebra**

> **Source:** `stdlib/std/la.valor` · **Routines:** 75 public · 18 internal

## Routines

<details>
<summary>Browse all 93 routines</summary>

- [`runtime`](#fn-runtime)
- [`validGemmDimensions`](#fn-validgemmdimensions)
- [`sgemm`](#fn-sgemm)
- [`dgemm`](#fn-dgemm)
- [`sdot`](#fn-sdot)
- [`ddot`](#fn-ddot)
- [`saxpy`](#fn-saxpy)
- [`daxpy`](#fn-daxpy)
- [`tensor_dot`](#fn-tensor-dot)
- [`tensor_matmul`](#fn-tensor-matmul)
- [`vector_length`](#fn-vector-length)
- [`vector_base`](#fn-vector-base)
- [`vector_stride`](#fn-vector-stride)
- [`vector_alias_token`](#fn-vector-alias-token)
- [`la_add_fits`](#fn-la-add-fits)
- [`la_multiply_fits`](#fn-la-multiply-fits)
- [`vector_layout_valid`](#fn-vector-layout-valid)
- [`matrix_layout_valid`](#fn-matrix-layout-valid)
- [`exact_vector_mapping`](#fn-exact-vector-mapping)
- [`elementwise_alias_valid`](#fn-elementwise-alias-valid)
- [`disjoint_alias_valid`](#fn-disjoint-alias-valid)
- [`vector_offset`](#fn-vector-offset)
- [`matrix_offset`](#fn-matrix-offset)
- [`matrix_offset_values`](#fn-matrix-offset-values)
- [`la_abs_scalar`](#fn-la-abs-scalar)
- [`la_max_scalar`](#fn-la-max-scalar)
- [`la_min_scalar`](#fn-la-min-scalar)
- [`la_clamp_scalar`](#fn-la-clamp-scalar)
- [`la_exp_scalar`](#fn-la-exp-scalar)
- [`la_log_scalar`](#fn-la-log-scalar)
- [`la_sqrt_scalar`](#fn-la-sqrt-scalar)
- [`la_sigmoid_scalar`](#fn-la-sigmoid-scalar)
- [`la_tanh_scalar`](#fn-la-tanh-scalar)
- [`la_gelu_scalar`](#fn-la-gelu-scalar)
- [`unary_into_kernel`](#fn-unary-into-kernel)
- [`binary_into_kernel`](#fn-binary-into-kernel)
- [`add_into`](#fn-add-into)
- [`add`](#fn-add)
- [`subtract`](#fn-subtract)
- [`multiply`](#fn-multiply)
- [`divide`](#fn-divide)
- [`maximum`](#fn-maximum)
- [`minimum`](#fn-minimum)
- [`abs`](#fn-abs)
- [`exp`](#fn-exp)
- [`log`](#fn-log)
- [`sqrt`](#fn-sqrt)
- [`rsqrt`](#fn-rsqrt)
- [`sigmoid_into`](#fn-sigmoid-into)
- [`tanh_into`](#fn-tanh-into)
- [`relu_into`](#fn-relu-into)
- [`relu_in_place`](#fn-relu-in-place)
- [`gelu_into`](#fn-gelu-into)
- [`silu_into`](#fn-silu-into)
- [`clamp`](#fn-clamp)
- [`fma`](#fn-fma)
- [`where`](#fn-where)
- [`dot`](#fn-dot)
- [`axpy`](#fn-axpy)
- [`scal`](#fn-scal)
- [`norm`](#fn-norm)
- [`cosine_similarity`](#fn-cosine-similarity)
- [`gemv`](#fn-gemv)
- [`gemm_into`](#fn-gemm-into)
- [`gemm`](#fn-gemm)
- [`batched_gemm`](#fn-batched-gemm)
- [`tensor_dot_into`](#fn-tensor-dot-into)
- [`matmul_into`](#fn-matmul-into)
- [`batched_matmul`](#fn-batched-matmul)
- [`transpose_layout`](#fn-transpose-layout)
- [`transpose_into`](#fn-transpose-into)
- [`permute`](#fn-permute)
- [`reshape_view`](#fn-reshape-view)
- [`flatten_view`](#fn-flatten-view)
- [`reduce_sum`](#fn-reduce-sum)
- [`reduce_mean`](#fn-reduce-mean)
- [`reduce_max`](#fn-reduce-max)
- [`reduce_min`](#fn-reduce-min)
- [`argmax`](#fn-argmax)
- [`argmin`](#fn-argmin)
- [`gather`](#fn-gather)
- [`take`](#fn-take)
- [`scatter`](#fn-scatter)
- [`index_select`](#fn-index-select)
- [`conv1d_into`](#fn-conv1d-into)
- [`conv2d_into`](#fn-conv2d-into)
- [`depthwise_conv2d`](#fn-depthwise-conv2d)
- [`max_pool`](#fn-max-pool)
- [`average_pool`](#fn-average-pool)
- [`adaptive_pool`](#fn-adaptive-pool)
- [`layer_norm_into`](#fn-layer-norm-into)
- [`rms_norm_into`](#fn-rms-norm-into)
- [`batch_norm_inference`](#fn-batch-norm-inference)

</details>

## API reference

<a id="fn-runtime"></a>

> ## `runtime`

> *Internal API*
>
> Provides the module's **runtime** operation. Returns `@`.

```valor
@runtime(ai)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `ai`: ai (by value)

> ### RETURNS (@)

> ### EXAMPLE
>
> ```valor
> @ result = std::la::runtime(ai);
> ```

> ### SEE ALSO
>
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)
> - [`std::la::dgemm`](#fn-dgemm)

<a id="fn-validgemmdimensions"></a>

> ## `validGemmDimensions`

> *Internal API*
>
> Provides the module's **valid gemm dimensions** operation. Returns `bool`.

```valor
bool validGemmDimensions(u32 layout, u32 op_a, u32 op_b, u32 m, u32 n, u32 k, u32 lda, u32 ldb, u32 ldc)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `layout`: u32 (by value)
> - `op_a`: u32 (by value)
> - `op_b`: u32 (by value)
> - `m`: u32 (by value)
> - `n`: u32 (by value)
> - `k`: u32 (by value)
> - `lda`: u32 (by value)
> - `ldb`: u32 (by value)
> - `ldc`: u32 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::la::validGemmDimensions(layout, op_a, op_b, m, n, k, lda, ldb, ldc);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::sgemm`](#fn-sgemm)
> - [`std::la::dgemm`](#fn-dgemm)

<a id="fn-sgemm"></a>

> ## `sgemm`

> Repeated identical calls were bit-stable on one host in fb40536. Repeated identical calls were bit-stable on one host in fb40536. This is not established across hosts or BLAS implementations. Pass F_DETERMINISTIC to force the reference fallback. The flags argument has no default and is forwarded unchanged.

```valor
public i32 sgemm(u32 layout, u32 op_a, u32 op_b, u32 m, u32 n, u32 k, f32 alpha, ptr<f32, host> a, u32 lda, ptr<f32, host> b, u32 ldb, f32 beta, ptr<f32, host> c, u32 ldc, u32 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `layout`: u32 (by value)
> - `op_a`: u32 (by value)
> - `op_b`: u32 (by value)
> - `m`: u32 (by value)
> - `n`: u32 (by value)
> - `k`: u32 (by value)
> - `alpha`: f32 (by value)
> - `a`: ptr<f32, host> (by value)
> - `lda`: u32 (by value)
> - `b`: ptr<f32, host> (by value)
> - `ldb`: u32 (by value)
> - `beta`: f32 (by value)
> - `c`: ptr<f32, host> (by value)
> - `ldc`: u32 (by value)
> - `flags`: u32 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::sgemm(layout, op_a, op_b, m, n, k, alpha, a, lda, b, ldb, beta, c, ldc, flags);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::dgemm`](#fn-dgemm)

<a id="fn-dgemm"></a>

> ## `dgemm`

> Repeated identical calls were bit-stable on one host in fb40536. Repeated identical calls were bit-stable on one host in fb40536. This is not established across hosts or BLAS implementations. Pass F_DETERMINISTIC to force the reference fallback. The flags argument has no default and is forwarded unchanged.

```valor
public i32 dgemm(u32 layout, u32 op_a, u32 op_b, u32 m, u32 n, u32 k, f64 alpha, ptr<f64, host> a, u32 lda, ptr<f64, host> b, u32 ldb, f64 beta, ptr<f64, host> c, u32 ldc, u32 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `layout`: u32 (by value)
> - `op_a`: u32 (by value)
> - `op_b`: u32 (by value)
> - `m`: u32 (by value)
> - `n`: u32 (by value)
> - `k`: u32 (by value)
> - `alpha`: f64 (by value)
> - `a`: ptr<f64, host> (by value)
> - `lda`: u32 (by value)
> - `b`: ptr<f64, host> (by value)
> - `ldb`: u32 (by value)
> - `beta`: f64 (by value)
> - `c`: ptr<f64, host> (by value)
> - `ldc`: u32 (by value)
> - `flags`: u32 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::dgemm(layout, op_a, op_b, m, n, k, alpha, a, lda, b, ldb, beta, c, ldc, flags);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-sdot"></a>

> ## `sdot`

> Repeated identical calls were bit-stable on one host in fb40536. Repeated identical calls were bit-stable on one host in fb40536. This is not established across hosts or BLAS implementations. Pass F_DETERMINISTIC to force the reference fallback. The flags argument has no default and is forwarded unchanged.

```valor
public i32 sdot(u64 n, ptr<f32, host> x, u64 incx, ptr<f32, host> y, u64 incy, ptr<f32, host> out, u32 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: u64 (by value)
> - `x`: ptr<f32, host> (by value)
> - `incx`: u64 (by value)
> - `y`: ptr<f32, host> (by value)
> - `incy`: u64 (by value)
> - `out`: ptr<f32, host> (by value)
> - `flags`: u32 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::sdot(n, x, incx, y, incy, out, flags);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-ddot"></a>

> ## `ddot`

> Repeated identical calls were bit-stable on one host in fb40536. Repeated identical calls were bit-stable on one host in fb40536. This is not established across hosts or BLAS implementations. Pass F_DETERMINISTIC to force the reference fallback. The flags argument has no default and is forwarded unchanged.

```valor
public i32 ddot(u64 n, ptr<f64, host> x, u64 incx, ptr<f64, host> y, u64 incy, ptr<f64, host> out, u32 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: u64 (by value)
> - `x`: ptr<f64, host> (by value)
> - `incx`: u64 (by value)
> - `y`: ptr<f64, host> (by value)
> - `incy`: u64 (by value)
> - `out`: ptr<f64, host> (by value)
> - `flags`: u32 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::ddot(n, x, incx, y, incy, out, flags);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-saxpy"></a>

> ## `saxpy`

> Repeated identical calls were bit-stable on one host in fb40536. Repeated identical calls were bit-stable on one host in fb40536. This is not established across hosts or BLAS implementations. Pass F_DETERMINISTIC to force the reference fallback. The flags argument has no default and is forwarded unchanged.

```valor
public i32 saxpy(u64 n, f32 alpha, ptr<f32, host> x, u64 incx, ptr<f32, host> y, u64 incy, u32 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: u64 (by value)
> - `alpha`: f32 (by value)
> - `x`: ptr<f32, host> (by value)
> - `incx`: u64 (by value)
> - `y`: ptr<f32, host> (by value)
> - `incy`: u64 (by value)
> - `flags`: u32 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::saxpy(n, alpha, x, incx, y, incy, flags);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-daxpy"></a>

> ## `daxpy`

> Repeated identical calls were bit-stable on one host in fb40536. Repeated identical calls were bit-stable on one host in fb40536. This is not established across hosts or BLAS implementations. Pass F_DETERMINISTIC to force the reference fallback. The flags argument has no default and is forwarded unchanged.

```valor
public i32 daxpy(u64 n, f64 alpha, ptr<f64, host> x, u64 incx, ptr<f64, host> y, u64 incy, u32 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: u64 (by value)
> - `alpha`: f64 (by value)
> - `x`: ptr<f64, host> (by value)
> - `incx`: u64 (by value)
> - `y`: ptr<f64, host> (by value)
> - `incy`: u64 (by value)
> - `flags`: u32 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::daxpy(n, alpha, x, incx, y, incy, flags);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-tensor-dot"></a>

> ## `tensor_dot`

> Provides the module's **tensor dot** operation. Returns `tensor`.

```valor
public tensor tensor_dot(tensor A, tensor B)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `A`: tensor (by value)
> - `B`: tensor (by value)

> ### RETURNS (tensor)

> ### EXAMPLE
>
> ```valor
> tensor result = std::la::tensor_dot(A, B);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-tensor-matmul"></a>

> ## `tensor_matmul`

> Provides the module's **tensor matmul** operation. Returns `Tensor<2,[?,?],f32,row_major>`.

```valor
public Tensor<2,[?,?],f32,row_major> tensor_matmul( Tensor<2,[?,?],f32,row_major> A, Tensor<2,[?,?],f32,row_major> B)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `A`: Tensor<2,[?,?],f32,row_major> (by value)
> - `B`: Tensor<2,[?,?],f32,row_major> (by value)

> ### RETURNS (Tensor<2,[?,?],f32,row_major>)

> ### EXAMPLE
>
> ```valor
> Tensor<2,[?,?],f32,row_major> result = std::la::tensor_matmul(A, B);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-vector-length"></a>

> ## `vector_length`

> *Internal API*
>
> Provides the module's **vector length** operation. Returns `usize`.

```valor
usize vector_length((u8) -> u64 view)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `view`: (u8) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::la::vector_length(view);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-vector-base"></a>

> ## `vector_base`

> *Internal API*
>
> Provides the module's **vector base** operation. Returns `usize`.

```valor
usize vector_base((u8) -> u64 view)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `view`: (u8) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::la::vector_base(view);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-vector-stride"></a>

> ## `vector_stride`

> *Internal API*
>
> Provides the module's **vector stride** operation. Returns `usize`.

```valor
usize vector_stride((u8) -> u64 view)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `view`: (u8) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::la::vector_stride(view);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-vector-alias-token"></a>

> ## `vector_alias_token`

> *Internal API*
>
> Provides the module's **vector alias token** operation. Returns `u64`.

```valor
u64 vector_alias_token((u8) -> u64 view)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `view`: (u8) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::la::vector_alias_token(view);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-la-add-fits"></a>

> ## `la_add_fits`

> *Internal API*
>
> Provides the module's **la add fits** operation. Returns `bool`.

```valor
bool la_add_fits(usize left, usize right)
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
> bool result = std::la::la_add_fits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-la-multiply-fits"></a>

> ## `la_multiply_fits`

> *Internal API*
>
> Provides the module's **la multiply fits** operation. Returns `bool`.

```valor
bool la_multiply_fits(usize left, usize right)
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
> bool result = std::la::la_multiply_fits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-vector-layout-valid"></a>

> ## `vector_layout_valid`

> *Internal API*
>
> Provides the module's **vector layout valid** operation. Returns `bool`.

```valor
bool vector_layout_valid((u8) -> u64 view, bool mutable_view)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `mutable_view`: (u8) -> u64 view, bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::la::vector_layout_valid(mutable_view);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-matrix-layout-valid"></a>

> ## `matrix_layout_valid`

> *Internal API*
>
> Provides the module's **matrix layout valid** operation. Returns `bool`.

```valor
bool matrix_layout_valid((u8) -> u64 view, bool mutable_view)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `mutable_view`: (u8) -> u64 view, bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::la::matrix_layout_valid(mutable_view);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-exact-vector-mapping"></a>

> ## `exact_vector_mapping`

> *Internal API*
>
> Provides the module's **exact vector mapping** operation. Returns `bool`.

```valor
bool exact_vector_mapping((u8) -> u64 left, (u8) -> u64 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `right`: (u8) -> u64 left, (u8) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::la::exact_vector_mapping(right);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-elementwise-alias-valid"></a>

> ## `elementwise_alias_valid`

> *Internal API*
>
> Provides the module's **elementwise alias valid** operation. Returns `bool`.

```valor
bool elementwise_alias_valid((u8) -> u64 output, (u8) -> u64 input, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `alias_policy`: (u8) -> u64 output, (u8) -> u64 input, u8 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::la::elementwise_alias_valid(alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-disjoint-alias-valid"></a>

> ## `disjoint_alias_valid`

> *Internal API*
>
> Provides the module's **disjoint alias valid** operation. Returns `bool`.

```valor
bool disjoint_alias_valid(u64 output_token, u64 input_token, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `output_token`: u64 (by value)
> - `input_token`: u64 (by value)
> - `alias_policy`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::la::disjoint_alias_valid(output_token, input_token, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-vector-offset"></a>

> ## `vector_offset`

> *Internal API*
>
> Provides the module's **vector offset** operation. Returns `usize`.

```valor
usize vector_offset((u8) -> u64 view, usize index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: (u8) -> u64 view, usize (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::la::vector_offset(index);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-matrix-offset"></a>

> ## `matrix_offset`

> *Internal API*
>
> Provides the module's **matrix offset** operation. Returns `usize`.

```valor
usize matrix_offset((u8) -> u64 view, usize row, usize column)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `column`: (u8) -> u64 view, usize row, usize (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::la::matrix_offset(column);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-matrix-offset-values"></a>

> ## `matrix_offset_values`

> *Internal API*
>
> Provides the module's **matrix offset values** operation. Returns `usize`.

```valor
usize matrix_offset_values(usize offset, usize row_stride, usize column_stride, usize row, usize column)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: usize (by value)
> - `row_stride`: usize (by value)
> - `column_stride`: usize (by value)
> - `row`: usize (by value)
> - `column`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::la::matrix_offset_values(offset, row_stride, column_stride, row, column);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-la-abs-scalar"></a>

> ## `la_abs_scalar`

> Provides the module's **la abs scalar** operation. Returns `f64`.

```valor
public f64 la_abs_scalar(f64 value)
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
> f64 result = std::la::la_abs_scalar(value);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-la-max-scalar"></a>

> ## `la_max_scalar`

> Provides the module's **la max scalar** operation. Returns `f64`.

```valor
public f64 la_max_scalar(f64 left, f64 right)
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
> f64 result = std::la::la_max_scalar(left, right);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-la-min-scalar"></a>

> ## `la_min_scalar`

> Provides the module's **la min scalar** operation. Returns `f64`.

```valor
public f64 la_min_scalar(f64 left, f64 right)
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
> f64 result = std::la::la_min_scalar(left, right);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-la-clamp-scalar"></a>

> ## `la_clamp_scalar`

> Provides the module's **la clamp scalar** operation. Returns `f64`.

```valor
public f64 la_clamp_scalar(f64 value, f64 lower, f64 upper)
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
> f64 result = std::la::la_clamp_scalar(value, lower, upper);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-la-exp-scalar"></a>

> ## `la_exp_scalar`

> Pure-Valor range reduction plus a fixed Horner polynomial.

```valor
public f64 la_exp_scalar(f64 value)
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
> f64 result = std::la::la_exp_scalar(value);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-la-log-scalar"></a>

> ## `la_log_scalar`

> Provides the module's **la log scalar** operation. Returns `f64`.

```valor
public f64 la_log_scalar(f64 value)
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
> f64 result = std::la::la_log_scalar(value);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-la-sqrt-scalar"></a>

> ## `la_sqrt_scalar`

> Provides the module's **la sqrt scalar** operation. Returns `f64`.

```valor
public f64 la_sqrt_scalar(f64 value)
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
> f64 result = std::la::la_sqrt_scalar(value);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-la-sigmoid-scalar"></a>

> ## `la_sigmoid_scalar`

> Provides the module's **la sigmoid scalar** operation. Returns `f64`.

```valor
public f64 la_sigmoid_scalar(f64 value)
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
> f64 result = std::la::la_sigmoid_scalar(value);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-la-tanh-scalar"></a>

> ## `la_tanh_scalar`

> Provides the module's **la tanh scalar** operation. Returns `f64`.

```valor
public f64 la_tanh_scalar(f64 value)
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
> f64 result = std::la::la_tanh_scalar(value);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-la-gelu-scalar"></a>

> ## `la_gelu_scalar`

> Provides the module's **la gelu scalar** operation. Returns `f64`.

```valor
public f64 la_gelu_scalar(f64 value)
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
> f64 result = std::la::la_gelu_scalar(value);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-unary-into-kernel"></a>

> ## `unary_into_kernel`

> *Internal API*
>
> Provides the module's **unary into kernel** operation. Returns `i32`.

```valor
i32 unary_into_kernel((u8) -> u64 output, (usize, f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, u8 operation, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (u8) -> u64 output, ( (borrowed fn-ptr (callback))
> - `alias_policy`: f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, u8 operation, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::unary_into_kernel(usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-binary-into-kernel"></a>

> ## `binary_into_kernel`

> *Internal API*
>
> Provides the module's **binary into kernel** operation. Returns `i32`.

```valor
i32 binary_into_kernel((u8) -> u64 output, (usize, f64) -> void write_output, (u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, u8 operation, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (u8) -> u64 output, ( (borrowed fn-ptr (callback))
> - `alias_policy`: f64) -> void write_output, (u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, u8 operation, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::binary_into_kernel(usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-add-into"></a>

> ## `add_into`

> Provides the module's **add into** operation. Returns `i32`.

```valor
public i32 add_into((u8) -> u64 output, (usize, f64) -> void write_output, (u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (u8) -> u64 output, ( (borrowed fn-ptr (callback))
> - `alias_policy`: f64) -> void write_output, (u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::add_into(usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-add"></a>

> ## `add`

> Provides the module's **add** operation. Returns `i32`.

```valor
public i32 add((u8) -> u64 output, (usize, f64) -> void write_output, (u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (u8) -> u64 output, ( (borrowed fn-ptr (callback))
> - `alias_policy`: f64) -> void write_output, (u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::add(usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-subtract"></a>

> ## `subtract`

> Provides the module's **subtract** operation. Returns `i32`.

```valor
public i32 subtract((u8) -> u64 output, (usize, f64) -> void write_output, (u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (u8) -> u64 output, ( (borrowed fn-ptr (callback))
> - `alias_policy`: f64) -> void write_output, (u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::subtract(usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-multiply"></a>

> ## `multiply`

> Provides the module's **multiply** operation. Returns `i32`.

```valor
public i32 multiply((u8) -> u64 output, (usize, f64) -> void write_output, (u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (u8) -> u64 output, ( (borrowed fn-ptr (callback))
> - `alias_policy`: f64) -> void write_output, (u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::multiply(usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-divide"></a>

> ## `divide`

> Provides the module's **divide** operation. Returns `i32`.

```valor
public i32 divide((u8) -> u64 output, (usize, f64) -> void write_output, (u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (u8) -> u64 output, ( (borrowed fn-ptr (callback))
> - `alias_policy`: f64) -> void write_output, (u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::divide(usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-maximum"></a>

> ## `maximum`

> Provides the module's **maximum** operation. Returns `i32`.

```valor
public i32 maximum((u8) -> u64 output, (usize, f64) -> void write_output, (u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (u8) -> u64 output, ( (borrowed fn-ptr (callback))
> - `alias_policy`: f64) -> void write_output, (u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::maximum(usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-minimum"></a>

> ## `minimum`

> Provides the module's **minimum** operation. Returns `i32`.

```valor
public i32 minimum((u8) -> u64 output, (usize, f64) -> void write_output, (u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (u8) -> u64 output, ( (borrowed fn-ptr (callback))
> - `alias_policy`: f64) -> void write_output, (u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::minimum(usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-abs"></a>

> ## `abs`

> Provides the module's **abs** operation. Returns `i32`.

```valor
public i32 abs((u8) -> u64 output, (usize, f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (u8) -> u64 output, ( (borrowed fn-ptr (callback))
> - `alias_policy`: f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::abs(usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-exp"></a>

> ## `exp`

> Provides the module's **exp** operation. Returns `i32`.

```valor
public i32 exp((u8) -> u64 output, (usize, f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (u8) -> u64 output, ( (borrowed fn-ptr (callback))
> - `alias_policy`: f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::exp(usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-log"></a>

> ## `log`

> Provides the module's **log** operation. Returns `i32`.

```valor
public i32 log((u8) -> u64 output, (usize, f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (u8) -> u64 output, ( (borrowed fn-ptr (callback))
> - `alias_policy`: f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::log(usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-sqrt"></a>

> ## `sqrt`

> Provides the module's **sqrt** operation. Returns `i32`.

```valor
public i32 sqrt((u8) -> u64 output, (usize, f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (u8) -> u64 output, ( (borrowed fn-ptr (callback))
> - `alias_policy`: f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::sqrt(usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-rsqrt"></a>

> ## `rsqrt`

> Provides the module's **rsqrt** operation. Returns `i32`.

```valor
public i32 rsqrt((u8) -> u64 output, (usize, f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (u8) -> u64 output, ( (borrowed fn-ptr (callback))
> - `alias_policy`: f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::rsqrt(usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-sigmoid-into"></a>

> ## `sigmoid_into`

> Provides the module's **sigmoid into** operation. Returns `i32`.

```valor
public i32 sigmoid_into((u8) -> u64 output, (usize, f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (u8) -> u64 output, ( (borrowed fn-ptr (callback))
> - `alias_policy`: f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::sigmoid_into(usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-tanh-into"></a>

> ## `tanh_into`

> Provides the module's **tanh into** operation. Returns `i32`.

```valor
public i32 tanh_into((u8) -> u64 output, (usize, f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (u8) -> u64 output, ( (borrowed fn-ptr (callback))
> - `alias_policy`: f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::tanh_into(usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-relu-into"></a>

> ## `relu_into`

> Provides the module's **relu into** operation. Returns `i32`.

```valor
public i32 relu_into((u8) -> u64 output, (usize, f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (u8) -> u64 output, ( (borrowed fn-ptr (callback))
> - `alias_policy`: f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::relu_into(usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-relu-in-place"></a>

> ## `relu_in_place`

> Provides the module's **relu in place** operation. Returns `i32`.

```valor
public i32 relu_in_place((u8) -> u64 values, (usize) -> f64 read_values, (usize, f64) -> void write_values)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `write_values`: (u8) -> u64 values, (usize) -> f64 read_values, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::relu_in_place(write_values);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-gelu-into"></a>

> ## `gelu_into`

> Provides the module's **gelu into** operation. Returns `i32`.

```valor
public i32 gelu_into((u8) -> u64 output, (usize, f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (u8) -> u64 output, ( (borrowed fn-ptr (callback))
> - `alias_policy`: f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::gelu_into(usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-silu-into"></a>

> ## `silu_into`

> Provides the module's **silu into** operation. Returns `i32`.

```valor
public i32 silu_into((u8) -> u64 output, (usize, f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (u8) -> u64 output, ( (borrowed fn-ptr (callback))
> - `alias_policy`: f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::silu_into(usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-clamp"></a>

> ## `clamp`

> Provides the module's **clamp** operation. Returns `i32`.

```valor
public i32 clamp((u8) -> u64 output, (usize, f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, f64 lower, f64 upper, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (u8) -> u64 output, ( (borrowed fn-ptr (callback))
> - `alias_policy`: f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, f64 lower, f64 upper, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::clamp(usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-fma"></a>

> ## `fma`

> Provides the module's **fma** operation. Returns `i32`.

```valor
public i32 fma((u8) -> u64 output, (usize, f64) -> void write_output, (u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, (u8) -> u64 addend, (usize) -> f64 read_addend, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (u8) -> u64 output, ( (borrowed fn-ptr (callback))
> - `alias_policy`: f64) -> void write_output, (u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, (u8) -> u64 addend, (usize) -> f64 read_addend, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::fma(usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-where"></a>

> ## `where`

> Provides the module's **where** operation. Returns `i32`.

```valor
public i32 where((u8) -> u64 output, (usize, f64) -> void write_output, (u8) -> u64 condition, (usize) -> bool read_condition, (u8) -> u64 when_true, (usize) -> f64 read_true, (u8) -> u64 when_false, (usize) -> f64 read_false, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (u8) -> u64 output, ( (borrowed fn-ptr (callback))
> - `alias_policy`: f64) -> void write_output, (u8) -> u64 condition, (usize) -> bool read_condition, (u8) -> u64 when_true, (usize) -> f64 read_true, (u8) -> u64 when_false, (usize) -> f64 read_false, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::where(usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-dot"></a>

> ## `dot`

> Provides the module's **dot** operation. Returns `i32`.

```valor
public i32 dot((u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, (f64) -> void write_output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `write_output`: (u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, (f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::dot(write_output);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-axpy"></a>

> ## `axpy`

> Provides the module's **axpy** operation. Returns `i32`.

```valor
public i32 axpy((u8) -> u64 output, (usize) -> f64 read_output, (usize, f64) -> void write_output, f64 alpha, (u8) -> u64 x, (usize) -> f64 read_x, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `alias_policy`: (u8) -> u64 output, (usize) -> f64 read_output, (usize, f64) -> void write_output, f64 alpha, (u8) -> u64 x, (usize) -> f64 read_x, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::axpy(alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-scal"></a>

> ## `scal`

> Provides the module's **scal** operation. Returns `i32`.

```valor
public i32 scal((u8) -> u64 values, (usize) -> f64 read_values, (usize, f64) -> void write_values, f64 alpha)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `alpha`: (u8) -> u64 values, (usize) -> f64 read_values, (usize, f64) -> void write_values, f64 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::scal(alpha);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-norm"></a>

> ## `norm`

> Provides the module's **norm** operation. Returns `i32`.

```valor
public i32 norm((u8) -> u64 values, (usize) -> f64 read_values, (f64) -> void write_output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `write_output`: (u8) -> u64 values, (usize) -> f64 read_values, (f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::norm(write_output);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-cosine-similarity"></a>

> ## `cosine_similarity`

> Provides the module's **cosine similarity** operation. Returns `i32`.

```valor
public i32 cosine_similarity((u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, (f64) -> void write_output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `write_output`: (u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, (f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::cosine_similarity(write_output);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-gemv"></a>

> ## `gemv`

> Provides the module's **gemv** operation. Returns `i32`.

```valor
public i32 gemv((u8) -> u64 output, (usize, f64) -> void write_output, (u8) -> u64 matrix, (usize) -> f64 read_matrix, (u8) -> u64 vector, (usize) -> f64 read_vector, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (u8) -> u64 output, ( (borrowed fn-ptr (callback))
> - `alias_policy`: f64) -> void write_output, (u8) -> u64 matrix, (usize) -> f64 read_matrix, (u8) -> u64 vector, (usize) -> f64 read_vector, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::gemv(usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-gemm-into"></a>

> ## `gemm_into`

> Provides the module's **gemm into** operation. Returns `i32`.

```valor
public i32 gemm_into((u8) -> u64 output, (usize) -> f64 read_output, (usize, f64) -> void write_output, (u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, (u8) -> u64 workspace, (usize) -> f64 read_workspace, (usize, f64) -> void write_workspace, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^5)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `alias_policy`: (u8) -> u64 output, (usize) -> f64 read_output, (usize, f64) -> void write_output, (u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, (u8) -> u64 workspace, (usize) -> f64 read_workspace, (usize, f64) -> void write_workspace, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::gemm_into(alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-gemm"></a>

> ## `gemm`

> Provides the module's **gemm** operation. Returns `i32`.

```valor
public i32 gemm((u8) -> u64 output, (usize) -> f64 read_output, (usize, f64) -> void write_output, (u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, (u8) -> u64 workspace, (usize) -> f64 read_workspace, (usize, f64) -> void write_workspace, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `alias_policy`: (u8) -> u64 output, (usize) -> f64 read_output, (usize, f64) -> void write_output, (u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, (u8) -> u64 workspace, (usize) -> f64 read_workspace, (usize, f64) -> void write_workspace, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::gemm(alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-batched-gemm"></a>

> ## `batched_gemm`

> Provides the module's **batched gemm** operation. Returns `i32`.

```valor
public i32 batched_gemm((u8) -> u64 output, (usize) -> f64 read_output, (usize, f64) -> void write_output, (u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, (u8) -> u64 workspace, (usize) -> f64 read_workspace, (usize, f64) -> void write_workspace, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^4)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `alias_policy`: (u8) -> u64 output, (usize) -> f64 read_output, (usize, f64) -> void write_output, (u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, (u8) -> u64 workspace, (usize) -> f64 read_workspace, (usize, f64) -> void write_workspace, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::batched_gemm(alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-tensor-dot-into"></a>

> ## `tensor_dot_into`

> The original tensor_dot remains above. The original tensor_dot remains above.  The allocation-free collision-safe spelling is tensor_dot_into.

```valor
public i32 tensor_dot_into((u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, (f64) -> void write_output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `write_output`: (u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, (f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::tensor_dot_into(write_output);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-matmul-into"></a>

> ## `matmul_into`

> Provides the module's **matmul into** operation. Returns `i32`.

```valor
public i32 matmul_into((u8) -> u64 output, (usize) -> f64 read_output, (usize, f64) -> void write_output, (u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, (u8) -> u64 workspace, (usize) -> f64 read_workspace, (usize, f64) -> void write_workspace, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `alias_policy`: (u8) -> u64 output, (usize) -> f64 read_output, (usize, f64) -> void write_output, (u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, (u8) -> u64 workspace, (usize) -> f64 read_workspace, (usize, f64) -> void write_workspace, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::matmul_into(alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-batched-matmul"></a>

> ## `batched_matmul`

> Provides the module's **batched matmul** operation. Returns `i32`.

```valor
public i32 batched_matmul((u8) -> u64 output, (usize) -> f64 read_output, (usize, f64) -> void write_output, (u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, (u8) -> u64 workspace, (usize) -> f64 read_workspace, (usize, f64) -> void write_workspace, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `alias_policy`: (u8) -> u64 output, (usize) -> f64 read_output, (usize, f64) -> void write_output, (u8) -> u64 lhs, (usize) -> f64 read_lhs, (u8) -> u64 rhs, (usize) -> f64 read_rhs, (u8) -> u64 workspace, (usize) -> f64 read_workspace, (usize, f64) -> void write_workspace, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::batched_matmul(alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-transpose-layout"></a>

> ## `transpose_layout`

> Provides the module's **transpose layout** operation. Returns `i32`.

```valor
public i32 transpose_layout((u8) -> u64 input, (u8, u64) -> void write_output_field)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `u8`: (u8) -> u64 input, ( (borrowed fn-ptr (callback))
> - `write_output_field`: u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::transpose_layout(u8, write_output_field);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-transpose-into"></a>

> ## `transpose_into`

> Provides the module's **transpose into** operation. Returns `i32`.

```valor
public i32 transpose_into((u8) -> u64 input, (u8, u64) -> void write_output_field)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `u8`: (u8) -> u64 input, ( (borrowed fn-ptr (callback))
> - `write_output_field`: u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::transpose_into(u8, write_output_field);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-permute"></a>

> ## `permute`

> Provides the module's **permute** operation. Returns `i32`.

```valor
public i32 permute(usize rank, (usize) -> usize extent, (usize) -> usize stride, (usize) -> usize permutation, (usize, usize, usize) -> void write_axis)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rank`: usize (by value)
> - `write_axis`: (usize) -> usize extent, (usize) -> usize stride, (usize) -> usize permutation, (usize, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::permute(rank, write_axis);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-reshape-view"></a>

> ## `reshape_view`

> Provides the module's **reshape view** operation. Returns `i32`.

```valor
public i32 reshape_view(usize source_rank, (usize) -> usize source_extent, (usize) -> usize source_stride, usize output_rank, (usize) -> usize output_extent, (usize, usize) -> void write_axis)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `source_rank`: usize (by value)
> - `write_axis`: (usize) -> usize source_extent, (usize) -> usize source_stride, usize output_rank, (usize) -> usize output_extent, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::reshape_view(source_rank, write_axis);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-flatten-view"></a>

> ## `flatten_view`

> Provides the module's **flatten view** operation. Returns `i32`.

```valor
public i32 flatten_view(usize rank, (usize) -> usize extent, (usize) -> usize stride, (usize, usize) -> void write_length_stride)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rank`: usize (by value)
> - `write_length_stride`: (usize) -> usize extent, (usize) -> usize stride, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::flatten_view(rank, write_length_stride);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-reduce-sum"></a>

> ## `reduce_sum`

> Provides the module's **reduce sum** operation. Returns `i32`.

```valor
public i32 reduce_sum((u8) -> u64 input, (usize) -> f64 read_input, (f64) -> void write_output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `write_output`: (u8) -> u64 input, (usize) -> f64 read_input, (f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::reduce_sum(write_output);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-reduce-mean"></a>

> ## `reduce_mean`

> Provides the module's **reduce mean** operation. Returns `i32`.

```valor
public i32 reduce_mean((u8) -> u64 input, (usize) -> f64 read_input, (f64) -> void write_output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `write_output`: (u8) -> u64 input, (usize) -> f64 read_input, (f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::reduce_mean(write_output);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-reduce-max"></a>

> ## `reduce_max`

> Provides the module's **reduce max** operation. Returns `i32`.

```valor
public i32 reduce_max((u8) -> u64 input, (usize) -> f64 read_input, (f64) -> void write_output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `write_output`: (u8) -> u64 input, (usize) -> f64 read_input, (f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::reduce_max(write_output);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-reduce-min"></a>

> ## `reduce_min`

> Provides the module's **reduce min** operation. Returns `i32`.

```valor
public i32 reduce_min((u8) -> u64 input, (usize) -> f64 read_input, (f64) -> void write_output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `write_output`: (u8) -> u64 input, (usize) -> f64 read_input, (f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::reduce_min(write_output);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-argmax"></a>

> ## `argmax`

> Provides the module's **argmax** operation. Returns `i32`.

```valor
public i32 argmax((u8) -> u64 input, (usize) -> f64 read_input, (usize) -> void write_output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `write_output`: (u8) -> u64 input, (usize) -> f64 read_input, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::argmax(write_output);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-argmin"></a>

> ## `argmin`

> Provides the module's **argmin** operation. Returns `i32`.

```valor
public i32 argmin((u8) -> u64 input, (usize) -> f64 read_input, (usize) -> void write_output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `write_output`: (u8) -> u64 input, (usize) -> f64 read_input, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::argmin(write_output);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-gather"></a>

> ## `gather`

> Provides the module's **gather** operation. Returns `i32`.

```valor
public i32 gather((u8) -> u64 output, (usize, f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, (usize) -> usize read_index, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (u8) -> u64 output, ( (borrowed fn-ptr (callback))
> - `alias_policy`: f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, (usize) -> usize read_index, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::gather(usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-take"></a>

> ## `take`

> Provides the module's **take** operation. Returns `i32`.

```valor
public i32 take((u8) -> u64 output, (usize, f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, (usize) -> usize read_index, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (u8) -> u64 output, ( (borrowed fn-ptr (callback))
> - `alias_policy`: f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, (usize) -> usize read_index, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::take(usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-scatter"></a>

> ## `scatter`

> Duplicate destinations are resolved by increasing logical index: the last writer wins deterministically. Duplicate destinations are resolved by increasing logical index: the last writer wins deterministically.

```valor
public i32 scatter((u8) -> u64 output, (usize, f64) -> void write_output, (u8) -> u64 values, (usize) -> f64 read_values, (usize) -> usize read_index, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (u8) -> u64 output, ( (borrowed fn-ptr (callback))
> - `alias_policy`: f64) -> void write_output, (u8) -> u64 values, (usize) -> f64 read_values, (usize) -> usize read_index, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::scatter(usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-index-select"></a>

> ## `index_select`

> Provides the module's **index select** operation. Returns `i32`.

```valor
public i32 index_select((u8) -> u64 output, (usize, f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, usize axis, (usize) -> usize read_index, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (u8) -> u64 output, ( (borrowed fn-ptr (callback))
> - `alias_policy`: f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, usize axis, (usize) -> usize read_index, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::index_select(usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-conv1d-into"></a>

> ## `conv1d_into`

> Provides the module's **conv1d into** operation. Returns `i32`.

```valor
public i32 conv1d_into(usize input_channels, usize input_width, usize output_channels, usize output_width, usize kernel_width, usize step, usize dilation, usize padding, (usize, usize) -> f64 read_input, (usize, usize, usize) -> f64 read_kernel, (usize) -> f64 read_bias, (usize, usize, f64) -> void write_output, u64 output_token, u64 input_token, u64 kernel_token, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^4)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `input_channels`: usize (by value)
> - `input_width`: usize (by value)
> - `output_channels`: usize (by value)
> - `output_width`: usize (by value)
> - `kernel_width`: usize (by value)
> - `step`: usize (by value)
> - `dilation`: usize (by value)
> - `padding`: usize (by value)
> - `usize`: (usize, usize) -> f64 read_input, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `alias_policy`: usize) -> f64 read_kernel, (usize) -> f64 read_bias, (usize, usize, f64) -> void write_output, u64 output_token, u64 input_token, u64 kernel_token, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::conv1d_into(input_channels, input_width, output_channels, output_width, kernel_width, step, dilation, padding, usize, usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-conv2d-into"></a>

> ## `conv2d_into`

> Provides the module's **conv2d into** operation. Returns `i32`.

```valor
public i32 conv2d_into(usize input_channels, usize input_height, usize input_width, usize output_channels, usize output_height, usize output_width, usize kernel_height, usize kernel_width, usize row_step, usize column_step, usize row_dilation, usize column_dilation, usize row_padding, usize column_padding, (usize, usize, usize) -> f64 read_input, (usize, usize, usize, usize) -> f64 read_kernel, (usize) -> f64 read_bias, (usize, usize, usize, f64) -> void write_output, u64 output_token, u64 input_token, u64 kernel_token, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^6)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `input_channels`: usize (by value)
> - `input_height`: usize (by value)
> - `input_width`: usize (by value)
> - `output_channels`: usize (by value)
> - `output_height`: usize (by value)
> - `output_width`: usize (by value)
> - `kernel_height`: usize (by value)
> - `kernel_width`: usize (by value)
> - `row_step`: usize (by value)
> - `column_step`: usize (by value)
> - `row_dilation`: usize (by value)
> - `column_dilation`: usize (by value)
> - `row_padding`: usize (by value)
> - `column_padding`: usize (by value)
> - `usize`: (usize, usize, usize) -> f64 read_input, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `usize`: usize (by value)
> - `alias_policy`: usize) -> f64 read_kernel, (usize) -> f64 read_bias, (usize, usize, usize, f64) -> void write_output, u64 output_token, u64 input_token, u64 kernel_token, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::conv2d_into(input_channels, input_height, input_width, output_channels, output_height, output_width, kernel_height, kernel_width, row_step, column_step, row_dilation, column_dilation, row_padding, column_padding, usize, usize, usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-depthwise-conv2d"></a>

> ## `depthwise_conv2d`

> Provides the module's **depthwise conv2d** operation. Returns `i32`.

```valor
public i32 depthwise_conv2d( usize channels, usize input_height, usize input_width, usize output_height, usize output_width, usize kernel_height, usize kernel_width, usize row_step, usize column_step, usize row_padding, usize column_padding, (usize, usize, usize) -> f64 read_input, (usize, usize, usize) -> f64 read_kernel, (usize) -> f64 read_bias, (usize, usize, usize, f64) -> void write_output, u64 output_token, u64 input_token, u64 kernel_token, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^5)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `channels`: usize (by value)
> - `input_height`: usize (by value)
> - `input_width`: usize (by value)
> - `output_height`: usize (by value)
> - `output_width`: usize (by value)
> - `kernel_height`: usize (by value)
> - `kernel_width`: usize (by value)
> - `row_step`: usize (by value)
> - `column_step`: usize (by value)
> - `row_padding`: usize (by value)
> - `column_padding`: usize (by value)
> - `usize`: (usize, usize, usize) -> f64 read_input, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `alias_policy`: usize) -> f64 read_kernel, (usize) -> f64 read_bias, (usize, usize, usize, f64) -> void write_output, u64 output_token, u64 input_token, u64 kernel_token, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::depthwise_conv2d(channels, input_height, input_width, output_height, output_width, kernel_height, kernel_width, row_step, column_step, row_padding, column_padding, usize, usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-max-pool"></a>

> ## `max_pool`

> Provides the module's **max pool** operation. Returns `i32`.

```valor
public i32 max_pool(usize channels, usize input_height, usize input_width, usize output_height, usize output_width, usize window_height, usize window_width, usize row_step, usize column_step, (usize, usize, usize) -> f64 read_input, (usize, usize, usize, f64) -> void write_output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^5)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `channels`: usize (by value)
> - `input_height`: usize (by value)
> - `input_width`: usize (by value)
> - `output_height`: usize (by value)
> - `output_width`: usize (by value)
> - `window_height`: usize (by value)
> - `window_width`: usize (by value)
> - `row_step`: usize (by value)
> - `column_step`: usize (by value)
> - `usize`: (usize, usize, usize) -> f64 read_input, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `usize`: usize (by value)
> - `write_output`: f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::max_pool(channels, input_height, input_width, output_height, output_width, window_height, window_width, row_step, column_step, usize, usize, usize, write_output);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-average-pool"></a>

> ## `average_pool`

> Provides the module's **average pool** operation. Returns `i32`.

```valor
public i32 average_pool( usize channels, usize input_height, usize input_width, usize output_height, usize output_width, usize window_height, usize window_width, usize row_step, usize column_step, (usize, usize, usize) -> f64 read_input, (usize, usize, usize, f64) -> void write_output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^5)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `channels`: usize (by value)
> - `input_height`: usize (by value)
> - `input_width`: usize (by value)
> - `output_height`: usize (by value)
> - `output_width`: usize (by value)
> - `window_height`: usize (by value)
> - `window_width`: usize (by value)
> - `row_step`: usize (by value)
> - `column_step`: usize (by value)
> - `usize`: (usize, usize, usize) -> f64 read_input, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `usize`: usize (by value)
> - `write_output`: f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::average_pool(channels, input_height, input_width, output_height, output_width, window_height, window_width, row_step, column_step, usize, usize, usize, write_output);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-adaptive-pool"></a>

> ## `adaptive_pool`

> Provides the module's **adaptive pool** operation. Returns `i32`.

```valor
public i32 adaptive_pool( usize channels, usize input_height, usize input_width, usize output_height, usize output_width, (usize, usize, usize) -> f64 read_input, (usize, usize, usize, f64) -> void write_output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^5)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `channels`: usize (by value)
> - `input_height`: usize (by value)
> - `input_width`: usize (by value)
> - `output_height`: usize (by value)
> - `output_width`: usize (by value)
> - `usize`: (usize, usize, usize) -> f64 read_input, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `usize`: usize (by value)
> - `write_output`: f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::adaptive_pool(channels, input_height, input_width, output_height, output_width, usize, usize, usize, write_output);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-layer-norm-into"></a>

> ## `layer_norm_into`

> Provides the module's **layer norm into** operation. Returns `i32`.

```valor
public i32 layer_norm_into((u8) -> u64 output, (usize, f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, (usize) -> f64 read_scale, (usize) -> f64 read_bias, f64 epsilon, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (u8) -> u64 output, ( (borrowed fn-ptr (callback))
> - `alias_policy`: f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, (usize) -> f64 read_scale, (usize) -> f64 read_bias, f64 epsilon, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::layer_norm_into(usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-rms-norm-into"></a>

> ## `rms_norm_into`

> Provides the module's **rms norm into** operation. Returns `i32`.

```valor
public i32 rms_norm_into((u8) -> u64 output, (usize, f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, (usize) -> f64 read_scale, f64 epsilon, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (u8) -> u64 output, ( (borrowed fn-ptr (callback))
> - `alias_policy`: f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, (usize) -> f64 read_scale, f64 epsilon, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::rms_norm_into(usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

<a id="fn-batch-norm-inference"></a>

> ## `batch_norm_inference`

> Provides the module's **batch norm inference** operation. Returns `i32`.

```valor
public i32 batch_norm_inference( (u8) -> u64 output, (usize, f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, (usize) -> f64 read_mean, (usize) -> f64 read_variance, (usize) -> f64 read_scale, (usize) -> f64 read_bias, f64 epsilon, u8 alias_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `usize`: (u8) -> u64 output, ( (borrowed fn-ptr (callback))
> - `alias_policy`: f64) -> void write_output, (u8) -> u64 input, (usize) -> f64 read_input, (usize) -> f64 read_mean, (usize) -> f64 read_variance, (usize) -> f64 read_scale, (usize) -> f64 read_bias, f64 epsilon, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::la::batch_norm_inference(usize, alias_policy);
> ```

> ### SEE ALSO
>
> - [`std::la::runtime`](#fn-runtime)
> - [`std::la::validGemmDimensions`](#fn-validgemmdimensions)
> - [`std::la::sgemm`](#fn-sgemm)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Sparse computing](STD-SPARSE-DOC.md) · [Table of contents](standard-library/README.md) · [Solvers →](STD-SOLVER-DOC.md)
