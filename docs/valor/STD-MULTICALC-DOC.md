<!-- stdlib-reference-style: modern -->
> # `std::multicalc`

`std::multicalc` multivariable calculus operations.

[Standard library](standard-library/README.md) / [Algorithms and computing](standard-library/README.md#algorithms-and-computing) / **Multivariable calculus**

> **Source:** `stdlib/std/multicalc.valor` · **Routines:** 29 public · 11 internal

## Routines

<details>
<summary>Browse all 40 routines</summary>

- [`valid_step`](#fn-valid-step)
- [`valid_count`](#fn-valid-count)
- [`valid_step_count`](#fn-valid-step-count)
- [`valid_step_counts`](#fn-valid-step-counts)
- [`work_tile`](#fn-work-tile)
- [`square`](#fn-square)
- [`cube`](#fn-cube)
- [`fourth`](#fn-fourth)
- [`absolute`](#fn-absolute)
- [`ln_positive`](#fn-ln-positive)
- [`first_partial`](#fn-first-partial)
- [`second_partial`](#fn-second-partial)
- [`mixed_partial`](#fn-mixed-partial)
- [`gradient`](#fn-gradient)
- [`directional_derivative`](#fn-directional-derivative)
- [`hessian`](#fn-hessian)
- [`hessian_vector_product`](#fn-hessian-vector-product)
- [`jacobian`](#fn-jacobian)
- [`jacobian_determinant`](#fn-jacobian-determinant)
- [`total_differential`](#fn-total-differential)
- [`divergence`](#fn-divergence)
- [`curl`](#fn-curl)
- [`laplacian`](#fn-laplacian)
- [`vector_laplacian`](#fn-vector-laplacian)
- [`biharmonic_operator`](#fn-biharmonic-operator)
- [`frenet_serret_frame`](#fn-frenet-serret-frame)
- [`first_fundamental_form`](#fn-first-fundamental-form)
- [`second_fundamental_form`](#fn-second-fundamental-form)
- [`principal_curvatures`](#fn-principal-curvatures)
- [`geodesic_flow_step`](#fn-geodesic-flow-step)
- [`deformation_gradient`](#fn-deformation-gradient)
- [`velocity_gradient_decomposition`](#fn-velocity-gradient-decomposition)
- [`stress_divergence`](#fn-stress-divergence)
- [`lyapunov_exponent`](#fn-lyapunov-exponent)
- [`hausdorff_dimension_approx`](#fn-hausdorff-dimension-approx)
- [`phase_space_flow`](#fn-phase-space-flow)
- [`euler_lagrange_residual`](#fn-euler-lagrange-residual)
- [`hamiltonian_flow`](#fn-hamiltonian-flow)
- [`pinn_pde_residual`](#fn-pinn-pde-residual)
- [`lagrange_multipliers`](#fn-lagrange-multipliers)

</details>

## API reference

<a id="fn-valid-step"></a>

> ## `valid_step`

> Provides the module's **valid step** operation. Returns `bool`.

```valor
public bool valid_step(f64 step)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `step`: f64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::multicalc::valid_step(step);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)
> - [`std::multicalc::valid_step_counts`](#fn-valid-step-counts)

<a id="fn-valid-count"></a>

> ## `valid_count`

> *Internal API*
>
> Provides the module's **valid count** operation. Returns `bool`.

```valor
bool valid_count(usize count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::multicalc::valid_count(count);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)
> - [`std::multicalc::valid_step_counts`](#fn-valid-step-counts)

<a id="fn-valid-step-count"></a>

> ## `valid_step_count`

> *Internal API*
>
> Provides the module's **valid step count** operation. Returns `bool`.

```valor
bool valid_step_count(f64 step, usize count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `step`: f64 (by value)
> - `count`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::multicalc::valid_step_count(step, count);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_counts`](#fn-valid-step-counts)

<a id="fn-valid-step-counts"></a>

> ## `valid_step_counts`

> *Internal API*
>
> Provides the module's **valid step counts** operation. Returns `bool`.

```valor
bool valid_step_counts(f64 step, usize first, usize second)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `step`: f64 (by value)
> - `first`: usize (by value)
> - `second`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::multicalc::valid_step_counts(step, first, second);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-work-tile"></a>

> ## `work_tile`

> Provides the module's **work tile** operation.

```valor
public void work_tile(usize length, usize tile_count, usize tile, usize numa_nodes, (usize, usize, u32) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `tile_count`: usize (by value)
> - `tile`: usize (by value)
> - `numa_nodes`: usize (by value)
> - `receive`: (usize, usize, u32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::multicalc::work_tile(length, tile_count, tile, numa_nodes, receive);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-square"></a>

> ## `square`

> *Internal API*
>
> Provides the module's **square** operation. Returns `f64`.

```valor
f64 square(f64 value)
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
> f64 result = std::multicalc::square(value);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-cube"></a>

> ## `cube`

> *Internal API*
>
> Provides the module's **cube** operation. Returns `f64`.

```valor
f64 cube(f64 value)
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
> f64 result = std::multicalc::cube(value);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-fourth"></a>

> ## `fourth`

> *Internal API*
>
> Provides the module's **fourth** operation. Returns `f64`.

```valor
f64 fourth(f64 value)
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
> f64 result = std::multicalc::fourth(value);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-absolute"></a>

> ## `absolute`

> *Internal API*
>
> Provides the module's **absolute** operation. Returns `f64`.

```valor
f64 absolute(f64 value)
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
> f64 result = std::multicalc::absolute(value);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-ln-positive"></a>

> ## `ln_positive`

> *Internal API*
>
> Natural logarithm without a foreign call. Natural logarithm without a foreign call. Range reduction keeps the atanh-series argument in [-1/3,1/3], where twelve terms are sufficient for stable scientific estimates.

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
> f64 result = std::multicalc::ln_positive(value);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-first-partial"></a>

> ## `first_partial`

> *Internal API*
>
> Provides the module's **first partial** operation. Returns `f64`.

```valor
f64 first_partial(usize axis, f64 step, (usize, f64) -> f64 sample)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `axis`: usize (by value)
> - `step`: f64 (by value)
> - `sample`: (usize, f64) -> f64 (borrowed fn-ptr (callback))

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::multicalc::first_partial(axis, step, sample);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-second-partial"></a>

> ## `second_partial`

> *Internal API*
>
> Provides the module's **second partial** operation. Returns `f64`.

```valor
f64 second_partial(usize axis, f64 step, (usize, f64) -> f64 sample)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `axis`: usize (by value)
> - `step`: f64 (by value)
> - `sample`: (usize, f64) -> f64 (borrowed fn-ptr (callback))

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::multicalc::second_partial(axis, step, sample);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-mixed-partial"></a>

> ## `mixed_partial`

> *Internal API*
>
> Provides the module's **mixed partial** operation. Returns `f64`.

```valor
f64 mixed_partial(usize first_axis, usize second_axis, f64 step, (usize, f64, usize, f64) -> f64 sample)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `first_axis`: usize (by value)
> - `second_axis`: usize (by value)
> - `step`: f64 (by value)
> - `sample`: (usize, f64, usize, f64) -> f64 (borrowed fn-ptr (callback))

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::multicalc::mixed_partial(first_axis, second_axis, step, sample);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-gradient"></a>

> ## `gradient`

> Provides the module's **gradient** operation. Returns `i32`.

```valor
public i32 gradient(usize dimensions, f64 step, (usize, f64) -> f64 sample, std::la::TensorViewMut<'a, 1, f64> output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `dimensions`: usize (by value)
> - `step`: f64 (by value)
> - `a`: (usize, f64) -> f64 sample, std::la::TensorViewMut<' (borrowed fn-ptr (callback))
> - `1`: 1 (by value)
> - `output`: f64> (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::multicalc::gradient(dimensions, step, a, 1, output);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-directional-derivative"></a>

> ## `directional_derivative`

> Provides the module's **directional derivative** operation. Returns `i32`.

```valor
public i32 directional_derivative( usize dimensions, f64 step, (usize, f64) -> f64 sample, std::la::TensorView<'a, 1, f64> direction, (f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `dimensions`: usize (by value)
> - `step`: f64 (by value)
> - `a`: (usize, f64) -> f64 sample, std::la::TensorView<' (borrowed fn-ptr (callback))
> - `1`: 1 (by value)
> - `receive`: f64> direction, (f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::multicalc::directional_derivative(dimensions, step, a, 1, receive);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-hessian"></a>

> ## `hessian`

> Provides the module's **hessian** operation. Returns `i32`.

```valor
public i32 hessian(usize dimensions, f64 step, (usize, f64, usize, f64) -> f64 sample, std::la::TensorViewMut<'a, 2, f64> output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `dimensions`: usize (by value)
> - `step`: f64 (by value)
> - `a`: (usize, f64, usize, f64) -> f64 sample, std::la::TensorViewMut<' (borrowed fn-ptr (callback))
> - `2`: 2 (by value)
> - `output`: f64> (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::multicalc::hessian(dimensions, step, a, 2, output);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-hessian-vector-product"></a>

> ## `hessian_vector_product`

> Provides the module's **hessian vector product** operation. Returns `i32`.

```valor
public i32 hessian_vector_product( usize dimensions, f64 step, (usize, f64, usize, f64) -> f64 sample, std::la::TensorView<'a, 1, f64> vector, std::la::TensorViewMut<'b, 1, f64> output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `dimensions`: usize (by value)
> - `step`: f64 (by value)
> - `a`: (usize, f64, usize, f64) -> f64 sample, std::la::TensorView<' (borrowed fn-ptr (callback))
> - `1`: 1 (by value)
> - `b`: f64> vector, std::la::TensorViewMut<' (by value)
> - `1`: 1 (by value)
> - `output`: f64> (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::multicalc::hessian_vector_product(dimensions, step, a, 1, b, 1, output);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-jacobian"></a>

> ## `jacobian`

> Provides the module's **jacobian** operation. Returns `i32`.

```valor
public i32 jacobian(usize outputs, usize inputs, f64 step, (usize, usize, f64) -> f64 sample, std::la::TensorViewMut<'a, 2, f64> result)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `outputs`: usize (by value)
> - `inputs`: usize (by value)
> - `step`: f64 (by value)
> - `a`: (usize, usize, f64) -> f64 sample, std::la::TensorViewMut<' (borrowed fn-ptr (callback))
> - `2`: 2 (by value)
> - `result`: f64> (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::multicalc::jacobian(outputs, inputs, step, a, 2, result);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-jacobian-determinant"></a>

> ## `jacobian_determinant`

> Provides the module's **jacobian determinant** operation. Returns `i32`.

```valor
public i32 jacobian_determinant( usize dimensions, f64 step, (usize, usize, f64) -> f64 sample, std::la::TensorViewMut<'a, 2, f64> workspace, (f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^3)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `dimensions`: usize (by value)
> - `step`: f64 (by value)
> - `a`: (usize, usize, f64) -> f64 sample, std::la::TensorViewMut<' (borrowed fn-ptr (callback))
> - `2`: 2 (by value)
> - `receive`: f64> workspace, (f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::multicalc::jacobian_determinant(dimensions, step, a, 2, receive);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-total-differential"></a>

> ## `total_differential`

> Provides the module's **total differential** operation. Returns `i32`.

```valor
public i32 total_differential( usize dimensions, f64 step, (usize, f64) -> f64 sample, std::la::TensorView<'a, 1, f64> displacement, (f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `dimensions`: usize (by value)
> - `step`: f64 (by value)
> - `a`: (usize, f64) -> f64 sample, std::la::TensorView<' (borrowed fn-ptr (callback))
> - `1`: 1 (by value)
> - `receive`: f64> displacement, (f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::multicalc::total_differential(dimensions, step, a, 1, receive);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-divergence"></a>

> ## `divergence`

> Provides the module's **divergence** operation. Returns `i32`.

```valor
public i32 divergence(usize dimensions, f64 step, (usize, usize, f64) -> f64 sample, (f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `dimensions`: usize (by value)
> - `step`: f64 (by value)
> - `receive`: (usize, usize, f64) -> f64 sample, (f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::multicalc::divergence(dimensions, step, receive);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-curl"></a>

> ## `curl`

> Provides the module's **curl** operation. Returns `i32`.

```valor
public i32 curl(usize dimensions, f64 step, (usize, usize, f64) -> f64 sample, std::la::TensorViewMut<'a, 1, f64> output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `dimensions`: usize (by value)
> - `step`: f64 (by value)
> - `a`: (usize, usize, f64) -> f64 sample, std::la::TensorViewMut<' (borrowed fn-ptr (callback))
> - `1`: 1 (by value)
> - `output`: f64> (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::multicalc::curl(dimensions, step, a, 1, output);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-laplacian"></a>

> ## `laplacian`

> Provides the module's **laplacian** operation. Returns `i32`.

```valor
public i32 laplacian(usize dimensions, f64 step, (usize, f64) -> f64 sample, (f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `dimensions`: usize (by value)
> - `step`: f64 (by value)
> - `receive`: (usize, f64) -> f64 sample, (f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::multicalc::laplacian(dimensions, step, receive);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-vector-laplacian"></a>

> ## `vector_laplacian`

> Provides the module's **vector laplacian** operation. Returns `i32`.

```valor
public i32 vector_laplacian( usize components, usize dimensions, f64 step, (usize, usize, f64) -> f64 sample, std::la::TensorViewMut<'a, 1, f64> output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `components`: usize (by value)
> - `dimensions`: usize (by value)
> - `step`: f64 (by value)
> - `a`: (usize, usize, f64) -> f64 sample, std::la::TensorViewMut<' (borrowed fn-ptr (callback))
> - `1`: 1 (by value)
> - `output`: f64> (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::multicalc::vector_laplacian(components, dimensions, step, a, 1, output);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-biharmonic-operator"></a>

> ## `biharmonic_operator`

> Provides the module's **biharmonic operator** operation. Returns `i32`.

```valor
public i32 biharmonic_operator( usize dimensions, f64 step, (usize, f64, usize, f64) -> f64 sample, (f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `dimensions`: usize (by value)
> - `step`: f64 (by value)
> - `receive`: (usize, f64, usize, f64) -> f64 sample, (f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::multicalc::biharmonic_operator(dimensions, step, receive);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-frenet-serret-frame"></a>

> ## `frenet_serret_frame`

> Provides the module's **frenet serret frame** operation. Returns `i32`.

```valor
public i32 frenet_serret_frame( f64 step, (usize, f64) -> f64 curve, std::la::TensorViewMut<'a, 2, f64> frame, std::la::TensorViewMut<'b, 1, f64> invariants)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `step`: f64 (by value)
> - `a`: (usize, f64) -> f64 curve, std::la::TensorViewMut<' (borrowed fn-ptr (callback))
> - `2`: 2 (by value)
> - `b`: f64> frame, std::la::TensorViewMut<' (by value)
> - `1`: 1 (by value)
> - `invariants`: f64> (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::multicalc::frenet_serret_frame(step, a, 2, b, 1, invariants);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-first-fundamental-form"></a>

> ## `first_fundamental_form`

> Provides the module's **first fundamental form** operation. Returns `i32`.

```valor
public i32 first_fundamental_form( f64 step, (usize, f64, f64) -> f64 surface, std::la::TensorViewMut<'a, 2, f64> output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `step`: f64 (by value)
> - `a`: (usize, f64, f64) -> f64 surface, std::la::TensorViewMut<' (borrowed fn-ptr (callback))
> - `2`: 2 (by value)
> - `output`: f64> (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::multicalc::first_fundamental_form(step, a, 2, output);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-second-fundamental-form"></a>

> ## `second_fundamental_form`

> Provides the module's **second fundamental form** operation. Returns `i32`.

```valor
public i32 second_fundamental_form( f64 step, (usize, f64, f64) -> f64 surface, std::la::TensorViewMut<'a, 2, f64> output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `step`: f64 (by value)
> - `a`: (usize, f64, f64) -> f64 surface, std::la::TensorViewMut<' (borrowed fn-ptr (callback))
> - `2`: 2 (by value)
> - `output`: f64> (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::multicalc::second_fundamental_form(step, a, 2, output);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-principal-curvatures"></a>

> ## `principal_curvatures`

> Provides the module's **principal curvatures** operation. Returns `i32`.

```valor
public i32 principal_curvatures( std::la::TensorView<'a, 2, f64> first_form, std::la::TensorView<'b, 2, f64> second_form, (f64, f64, f64, f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `first_form`: std::la::TensorView<'a, 2, f64> (by value)
> - `second_form`: std::la::TensorView<'b, 2, f64> (by value)
> - `receive`: (f64, f64, f64, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::multicalc::principal_curvatures(first_form, second_form, receive);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-geodesic-flow-step"></a>

> ## `geodesic_flow_step`

> Provides the module's **geodesic flow step** operation. Returns `i32`.

```valor
public i32 geodesic_flow_step( usize dimensions, f64 dt, std::la::TensorView<'a, 1, f64> position, std::la::TensorView<'b, 1, f64> velocity, (usize, usize, usize) -> f64 christoffel, std::la::TensorViewMut<'c, 2, f64> output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^3)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `dimensions`: usize (by value)
> - `dt`: f64 (by value)
> - `position`: std::la::TensorView<'a, 1, f64> (by value)
> - `velocity`: std::la::TensorView<'b, 1, f64> (by value)
> - `c`: (usize, usize, usize) -> f64 christoffel, std::la::TensorViewMut<' (borrowed fn-ptr (callback))
> - `2`: 2 (by value)
> - `output`: f64> (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::multicalc::geodesic_flow_step(dimensions, dt, position, velocity, c, 2, output);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-deformation-gradient"></a>

> ## `deformation_gradient`

> Provides the module's **deformation gradient** operation. Returns `i32`.

```valor
public i32 deformation_gradient( usize dimensions, f64 step, (usize, usize, f64) -> f64 displacement, std::la::TensorViewMut<'a, 2, f64> output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `dimensions`: usize (by value)
> - `step`: f64 (by value)
> - `a`: (usize, usize, f64) -> f64 displacement, std::la::TensorViewMut<' (borrowed fn-ptr (callback))
> - `2`: 2 (by value)
> - `output`: f64> (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::multicalc::deformation_gradient(dimensions, step, a, 2, output);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-velocity-gradient-decomposition"></a>

> ## `velocity_gradient_decomposition`

> Provides the module's **velocity gradient decomposition** operation. Returns `i32`.

```valor
public i32 velocity_gradient_decomposition( usize dimensions, std::la::TensorView<'a, 2, f64> gradient_value, std::la::TensorViewMut<'b, 2, f64> deformation, std::la::TensorViewMut<'c, 2, f64> spin)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `dimensions`: usize (by value)
> - `gradient_value`: std::la::TensorView<'a, 2, f64> (by value)
> - `deformation`: std::la::TensorViewMut<'b, 2, f64> (by value)
> - `spin`: std::la::TensorViewMut<'c, 2, f64> (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::multicalc::velocity_gradient_decomposition(dimensions, gradient_value, deformation, spin);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-stress-divergence"></a>

> ## `stress_divergence`

> Provides the module's **stress divergence** operation. Returns `i32`.

```valor
public i32 stress_divergence( usize dimensions, f64 step, (usize, usize, usize, f64) -> f64 stress, std::la::TensorViewMut<'a, 1, f64> output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `dimensions`: usize (by value)
> - `step`: f64 (by value)
> - `a`: (usize, usize, usize, f64) -> f64 stress, std::la::TensorViewMut<' (borrowed fn-ptr (callback))
> - `1`: 1 (by value)
> - `output`: f64> (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::multicalc::stress_divergence(dimensions, step, a, 1, output);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-lyapunov-exponent"></a>

> ## `lyapunov_exponent`

> Provides the module's **lyapunov exponent** operation. Returns `i32`.

```valor
public i32 lyapunov_exponent(usize samples, f64 elapsed, (usize) -> f64 separation, (f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `samples`: usize (by value)
> - `elapsed`: f64 (by value)
> - `receive`: (usize) -> f64 separation, (f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::multicalc::lyapunov_exponent(samples, elapsed, receive);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-hausdorff-dimension-approx"></a>

> ## `hausdorff_dimension_approx`

> Provides the module's **hausdorff dimension approx** operation. Returns `i32`.

```valor
public i32 hausdorff_dimension_approx( usize scales, (usize) -> f64 box_size, (usize) -> usize box_count, (f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `scales`: usize (by value)
> - `receive`: (usize) -> f64 box_size, (usize) -> usize box_count, (f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::multicalc::hausdorff_dimension_approx(scales, receive);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-phase-space-flow"></a>

> ## `phase_space_flow`

> Provides the module's **phase space flow** operation. Returns `i32`.

```valor
public i32 phase_space_flow( usize dimensions, f64 step, (usize, usize, f64) -> f64 field, std::la::TensorViewMut<'a, 1, f64> flow, std::la::TensorViewMut<'b, 2, f64> local_jacobian)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `dimensions`: usize (by value)
> - `step`: f64 (by value)
> - `a`: (usize, usize, f64) -> f64 field, std::la::TensorViewMut<' (borrowed fn-ptr (callback))
> - `1`: 1 (by value)
> - `b`: f64> flow, std::la::TensorViewMut<' (by value)
> - `2`: 2 (by value)
> - `local_jacobian`: f64> (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::multicalc::phase_space_flow(dimensions, step, a, 1, b, 2, local_jacobian);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-euler-lagrange-residual"></a>

> ## `euler_lagrange_residual`

> Provides the module's **euler lagrange residual** operation. Returns `i32`.

```valor
public i32 euler_lagrange_residual( usize coordinates, f64 step, (usize) -> f64 partial_q, (usize, f64) -> f64 partial_velocity_at_time, std::la::TensorViewMut<'a, 1, f64> output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `coordinates`: usize (by value)
> - `step`: f64 (by value)
> - `usize`: (usize) -> f64 partial_q, ( (borrowed fn-ptr (callback))
> - `output`: f64) -> f64 partial_velocity_at_time, std::la::TensorViewMut<'a, 1, f64> (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::multicalc::euler_lagrange_residual(coordinates, step, usize, output);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-hamiltonian-flow"></a>

> ## `hamiltonian_flow`

> Provides the module's **hamiltonian flow** operation. Returns `i32`.

```valor
public i32 hamiltonian_flow( usize coordinates, f64 step, (bool, usize, f64) -> f64 hamiltonian, std::la::TensorViewMut<'a, 2, f64> output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `coordinates`: usize (by value)
> - `step`: f64 (by value)
> - `a`: (bool, usize, f64) -> f64 hamiltonian, std::la::TensorViewMut<' (borrowed fn-ptr (callback))
> - `2`: 2 (by value)
> - `output`: f64> (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::multicalc::hamiltonian_flow(coordinates, step, a, 2, output);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-pinn-pde-residual"></a>

> ## `pinn_pde_residual`

> Provides the module's **pinn pde residual** operation. Returns `i32`.

```valor
public i32 pinn_pde_residual( usize begin, usize end, (usize) -> f64 differential_operator, (usize) -> f64 forcing, std::la::TensorViewMut<'a, 1, f64> output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `begin`: usize (by value)
> - `end`: usize (by value)
> - `output`: (usize) -> f64 differential_operator, (usize) -> f64 forcing, std::la::TensorViewMut<'a, 1, f64> (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::multicalc::pinn_pde_residual(begin, end, output);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

<a id="fn-lagrange-multipliers"></a>

> ## `lagrange_multipliers`

> Provides the module's **lagrange multipliers** operation. Returns `i32`.

```valor
public i32 lagrange_multipliers( usize constraints, usize dimensions, std::la::TensorView<'a, 1, f64> objective_gradient, std::la::TensorView<'b, 2, f64> constraint_jacobian, std::la::TensorViewMut<'c, 2, f64> workspace, std::la::TensorViewMut<'d, 1, f64> multipliers)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^3)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `constraints`: usize (by value)
> - `dimensions`: usize (by value)
> - `objective_gradient`: std::la::TensorView<'a, 1, f64> (by value)
> - `constraint_jacobian`: std::la::TensorView<'b, 2, f64> (by value)
> - `workspace`: std::la::TensorViewMut<'c, 2, f64> (by value)
> - `multipliers`: std::la::TensorViewMut<'d, 1, f64> (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::multicalc::lagrange_multipliers(constraints, dimensions, objective_gradient, constraint_jacobian, workspace, multipliers);
> ```

> ### SEE ALSO
>
> - [`std::multicalc::valid_step`](#fn-valid-step)
> - [`std::multicalc::valid_count`](#fn-valid-count)
> - [`std::multicalc::valid_step_count`](#fn-valid-step-count)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Differential equations](STD-DIFFEQ-DOC.md) · [Table of contents](standard-library/README.md) · [Probabilistic computing →](STD-PROBABILISTIC-DOC.md)
