<!-- stdlib-reference-style: modern -->
> # `std::diffeq`

`std::diffeq` differential-equation kernels.

[Standard library](standard-library/README.md) / [Algorithms and computing](standard-library/README.md#algorithms-and-computing) / **Differential equations**

> **Source:** `stdlib/std/diffeq.valor` · **Routines:** 31 public · 8 internal

## Routines

<details>
<summary>Browse all 39 routines</summary>

- [`power_of_two`](#fn-power-of-two)
- [`valid_placement`](#fn-valid-placement)
- [`valid_state`](#fn-valid-state)
- [`valid_stages`](#fn-valid-stages)
- [`valid_grid`](#fn-valid-grid)
- [`work_tile`](#fn-work-tile)
- [`publish_state`](#fn-publish-state)
- [`absolute`](#fn-absolute)
- [`maximum`](#fn-maximum)
- [`minimum`](#fn-minimum)
- [`square_root`](#fn-square-root)
- [`valid_step`](#fn-valid-step)
- [`clamped_step`](#fn-clamped-step)
- [`error_scale`](#fn-error-scale)
- [`euler_forward`](#fn-euler-forward)
- [`verlet_velocity`](#fn-verlet-velocity)
- [`runge_kutta_4`](#fn-runge-kutta-4)
- [`dopri5_adaptive`](#fn-dopri5-adaptive)
- [`backward_euler`](#fn-backward-euler)
- [`crank_nicolson`](#fn-crank-nicolson)
- [`bdf_dae`](#fn-bdf-dae)
- [`rosenbrock_w`](#fn-rosenbrock-w)
- [`euler_maruyama`](#fn-euler-maruyama)
- [`milstein_adaptive`](#fn-milstein-adaptive)
- [`schrodinger_solver`](#fn-schrodinger-solver)
- [`master_equation_lindblad`](#fn-master-equation-lindblad)
- [`valid_spacing`](#fn-valid-spacing)
- [`poisson_solver`](#fn-poisson-solver)
- [`heat_diffusion_pde`](#fn-heat-diffusion-pde)
- [`navier_stokes_incompressible`](#fn-navier-stokes-incompressible)
- [`wave_equation_3d`](#fn-wave-equation-3d)
- [`maxwell_pde_solver`](#fn-maxwell-pde-solver)
- [`elastodynamics_pde`](#fn-elastodynamics-pde)
- [`neural_ode_layer`](#fn-neural-ode-layer)
- [`pinn_loss_integrator`](#fn-pinn-loss-integrator)
- [`symplectic_neural_network`](#fn-symplectic-neural-network)
- [`lorenz_attractor_stepper`](#fn-lorenz-attractor-stepper)
- [`geodesic_pde_stepper`](#fn-geodesic-pde-stepper)
- [`hamilton_jacobi_bellman`](#fn-hamilton-jacobi-bellman)

</details>

## API reference

<a id="fn-power-of-two"></a>

> ## `power_of_two`

> Provides the module's **power of two** operation. Returns `bool`.

```valor
public bool power_of_two(usize value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::diffeq::power_of_two(value);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)
> - [`std::diffeq::valid_stages`](#fn-valid-stages)

<a id="fn-valid-placement"></a>

> ## `valid_placement`

> Provides the module's **valid placement** operation. Returns `bool`.

```valor
public bool valid_placement(usize alignment, usize shard_count, u8 numa_policy, u8 progress)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `alignment`: usize (by value)
> - `shard_count`: usize (by value)
> - `numa_policy`: u8 (by value)
> - `progress`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::diffeq::valid_placement(alignment, shard_count, numa_policy, progress);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_state`](#fn-valid-state)
> - [`std::diffeq::valid_stages`](#fn-valid-stages)

<a id="fn-valid-state"></a>

> ## `valid_state`

> Provides the module's **valid state** operation. Returns `bool`.

```valor
public bool valid_state(usize components, usize lanes, usize component_stride, usize capacity, usize alignment, usize shard_count, u8 numa_policy, u8 progress)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `components`: usize (by value)
> - `lanes`: usize (by value)
> - `component_stride`: usize (by value)
> - `capacity`: usize (by value)
> - `alignment`: usize (by value)
> - `shard_count`: usize (by value)
> - `numa_policy`: u8 (by value)
> - `progress`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::diffeq::valid_state(components, lanes, component_stride, capacity, alignment, shard_count, numa_policy, progress);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_stages`](#fn-valid-stages)

<a id="fn-valid-stages"></a>

> ## `valid_stages`

> Provides the module's **valid stages** operation. Returns `bool`.

```valor
public bool valid_stages(usize stage_count, usize components, usize lanes, usize stage_stride, usize component_stride, usize capacity, usize alignment, usize shard_count, u8 numa_policy, u8 progress)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `stage_count`: usize (by value)
> - `components`: usize (by value)
> - `lanes`: usize (by value)
> - `stage_stride`: usize (by value)
> - `component_stride`: usize (by value)
> - `capacity`: usize (by value)
> - `alignment`: usize (by value)
> - `shard_count`: usize (by value)
> - `numa_policy`: u8 (by value)
> - `progress`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::diffeq::valid_stages(stage_count, components, lanes, stage_stride, component_stride, capacity, alignment, shard_count, numa_policy, progress);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-valid-grid"></a>

> ## `valid_grid`

> Provides the module's **valid grid** operation. Returns `bool`.

```valor
public bool valid_grid(usize field_count, usize nx, usize ny, usize nz, usize x_stride, usize y_stride, usize z_stride, usize field_stride, usize capacity, usize alignment, usize shard_count, u8 numa_policy, u8 progress)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `field_count`: usize (by value)
> - `nx`: usize (by value)
> - `ny`: usize (by value)
> - `nz`: usize (by value)
> - `x_stride`: usize (by value)
> - `y_stride`: usize (by value)
> - `z_stride`: usize (by value)
> - `field_stride`: usize (by value)
> - `capacity`: usize (by value)
> - `alignment`: usize (by value)
> - `shard_count`: usize (by value)
> - `numa_policy`: u8 (by value)
> - `progress`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::diffeq::valid_grid(field_count, nx, ny, nz, x_stride, y_stride, z_stride, field_stride, capacity, alignment, shard_count, numa_policy, progress);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

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
> std::diffeq::work_tile(length, tile_count, tile, numa_nodes, receive);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-publish-state"></a>

> ## `publish_state`

> Provides the module's **publish state** operation. Returns `i32`.

```valor
public i32 publish_state(usize slot, u64 expected_sequence, (usize, u64, u64) -> bool compare_exchange_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `slot`: usize (by value)
> - `expected_sequence`: u64 (by value)
> - `compare_exchange_release`: (usize, u64, u64) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::diffeq::publish_state(slot, expected_sequence, compare_exchange_release);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

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
> f64 result = std::diffeq::absolute(value);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-maximum"></a>

> ## `maximum`

> *Internal API*
>
> Provides the module's **maximum** operation. Returns `f64`.

```valor
f64 maximum(f64 left, f64 right)
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
> f64 result = std::diffeq::maximum(left, right);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-minimum"></a>

> ## `minimum`

> *Internal API*
>
> Provides the module's **minimum** operation. Returns `f64`.

```valor
f64 minimum(f64 left, f64 right)
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
> f64 result = std::diffeq::minimum(left, right);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-square-root"></a>

> ## `square_root`

> *Internal API*
>
> Provides the module's **square root** operation. Returns `f64`.

```valor
f64 square_root(f64 value)
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
> f64 result = std::diffeq::square_root(value);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-valid-step"></a>

> ## `valid_step`

> *Internal API*
>
> Provides the module's **valid step** operation. Returns `bool`.

```valor
bool valid_step(f64 step, usize components)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `step`: f64 (by value)
> - `components`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::diffeq::valid_step(step, components);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-clamped-step"></a>

> ## `clamped_step`

> *Internal API*
>
> Provides the module's **clamped step** operation. Returns `f64`.

```valor
f64 clamped_step(f64 value, f64 minimum_step, f64 maximum_step)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: f64 (by value)
> - `minimum_step`: f64 (by value)
> - `maximum_step`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::diffeq::clamped_step(value, minimum_step, maximum_step);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-error-scale"></a>

> ## `error_scale`

> *Internal API*
>
> Provides the module's **error scale** operation. Returns `f64`.

```valor
f64 error_scale(f64 current, f64 candidate, f64 absolute_tolerance, f64 relative_tolerance)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `current`: f64 (by value)
> - `candidate`: f64 (by value)
> - `absolute_tolerance`: f64 (by value)
> - `relative_tolerance`: f64 (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::diffeq::error_scale(current, candidate, absolute_tolerance, relative_tolerance);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-euler-forward"></a>

> ## `euler_forward`

> Provides the module's **euler forward** operation. Returns `i32`.

```valor
public i32 euler_forward( usize components, f64 time, f64 step, (usize) -> f64 read, (u8, f64, usize) -> f64 rhs, (usize, f64) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `components`: usize (by value)
> - `time`: f64 (by value)
> - `step`: f64 (by value)
> - `u8`: (usize) -> f64 read, ( (borrowed fn-ptr (callback))
> - `f64`: f64 (by value)
> - `write`: usize) -> f64 rhs, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::diffeq::euler_forward(components, time, step, u8, f64, write);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-verlet-velocity"></a>

> ## `verlet_velocity`

> Provides the module's **verlet velocity** operation. Returns `i32`.

```valor
public i32 verlet_velocity( usize components, f64 time, f64 step, (usize) -> f64 read_position, (usize) -> f64 read_velocity, (u8, f64, usize) -> f64 acceleration, (usize, f64) -> void stage_position, (usize, f64) -> void write_position, (usize, f64) -> void write_velocity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `components`: usize (by value)
> - `time`: f64 (by value)
> - `step`: f64 (by value)
> - `write_velocity`: (usize) -> f64 read_position, (usize) -> f64 read_velocity, (u8, f64, usize) -> f64 acceleration, (usize, f64) -> void stage_position, (usize, f64) -> void write_position, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::diffeq::verlet_velocity(components, time, step, write_velocity);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-runge-kutta-4"></a>

> ## `runge_kutta_4`

> Provides the module's **runge kutta 4** operation. Returns `i32`.

```valor
public i32 runge_kutta_4( usize components, f64 time, f64 step, (usize) -> f64 read, (u8, f64, usize) -> f64 rhs, (u8, usize, f64) -> void stage_write, (u8, usize) -> f64 slope_read, (u8, usize, f64) -> void slope_write, (usize, f64) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `components`: usize (by value)
> - `time`: f64 (by value)
> - `step`: f64 (by value)
> - `u8`: (usize) -> f64 read, ( (borrowed fn-ptr (callback))
> - `f64`: f64 (by value)
> - `write`: usize) -> f64 rhs, (u8, usize, f64) -> void stage_write, (u8, usize) -> f64 slope_read, (u8, usize, f64) -> void slope_write, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::diffeq::runge_kutta_4(components, time, step, u8, f64, write);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-dopri5-adaptive"></a>

> ## `dopri5_adaptive`

> Dormand-Prince 5(4). Dormand-Prince 5(4). The callback installs each stage in caller scratch.

```valor
public i32 dopri5_adaptive( usize components, f64 time, f64 requested_step, f64 absolute_tolerance, f64 relative_tolerance, f64 minimum_step, f64 maximum_step, (usize) -> f64 read, (u8, f64, usize) -> f64 rhs, (u8, usize, f64) -> void stage_write, (u8, usize) -> f64 slope_read, (u8, usize, f64) -> void slope_write, (usize, f64) -> void write, (usize, usize, usize, f64, f64, f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `components`: usize (by value)
> - `time`: f64 (by value)
> - `requested_step`: f64 (by value)
> - `absolute_tolerance`: f64 (by value)
> - `relative_tolerance`: f64 (by value)
> - `minimum_step`: f64 (by value)
> - `maximum_step`: f64 (by value)
> - `u8`: (usize) -> f64 read, ( (borrowed fn-ptr (callback))
> - `f64`: f64 (by value)
> - `receive`: usize) -> f64 rhs, (u8, usize, f64) -> void stage_write, (u8, usize) -> f64 slope_read, (u8, usize, f64) -> void slope_write, (usize, f64) -> void write, (usize, usize, usize, f64, f64, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::diffeq::dopri5_adaptive(components, time, requested_step, absolute_tolerance, relative_tolerance, minimum_step, maximum_step, u8, f64, receive);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-backward-euler"></a>

> ## `backward_euler`

> Provides the module's **backward euler** operation. Returns `i32`.

```valor
public i32 backward_euler( usize components, f64 time, f64 step, usize iterations, (usize) -> f64 read, (u8, f64, usize) -> f64 rhs, (usize) -> f64 candidate_read, (usize, f64) -> void candidate_write, (usize, f64) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `components`: usize (by value)
> - `time`: f64 (by value)
> - `step`: f64 (by value)
> - `iterations`: usize (by value)
> - `u8`: (usize) -> f64 read, ( (borrowed fn-ptr (callback))
> - `f64`: f64 (by value)
> - `write`: usize) -> f64 rhs, (usize) -> f64 candidate_read, (usize, f64) -> void candidate_write, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::diffeq::backward_euler(components, time, step, iterations, u8, f64, write);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-crank-nicolson"></a>

> ## `crank_nicolson`

> Provides the module's **crank nicolson** operation. Returns `i32`.

```valor
public i32 crank_nicolson( usize components, f64 time, f64 step, usize iterations, (usize) -> f64 read, (u8, f64, usize) -> f64 rhs, (usize) -> f64 candidate_read, (usize, f64) -> void candidate_write, (usize, f64) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `components`: usize (by value)
> - `time`: f64 (by value)
> - `step`: f64 (by value)
> - `iterations`: usize (by value)
> - `u8`: (usize) -> f64 read, ( (borrowed fn-ptr (callback))
> - `f64`: f64 (by value)
> - `write`: usize) -> f64 rhs, (usize) -> f64 candidate_read, (usize, f64) -> void candidate_write, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::diffeq::crank_nicolson(components, time, step, iterations, u8, f64, write);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-bdf-dae"></a>

> ## `bdf_dae`

> Provides the module's **bdf dae** operation. Returns `i32`.

```valor
public i32 bdf_dae( usize components, u8 order, f64 time, f64 step, usize iterations, (u8, usize) -> f64 history, (u8, f64, usize) -> f64 residual_correction, (usize) -> f64 candidate_read, (usize, f64) -> void candidate_write, (usize, f64) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `components`: usize (by value)
> - `order`: u8 (by value)
> - `time`: f64 (by value)
> - `step`: f64 (by value)
> - `iterations`: usize (by value)
> - `u8`: (u8, usize) -> f64 history, ( (borrowed fn-ptr (callback))
> - `f64`: f64 (by value)
> - `write`: usize) -> f64 residual_correction, (usize) -> f64 candidate_read, (usize, f64) -> void candidate_write, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::diffeq::bdf_dae(components, order, time, step, iterations, u8, f64, write);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-rosenbrock-w"></a>

> ## `rosenbrock_w`

> solve(stage,component,rhs) applies the caller's factorized (I - gamma*h*J) operator without exposing its storage. solve(stage,component,rhs) applies the caller's factorized (I - gamma*h*J) operator without exposing its storage.

```valor
public i32 rosenbrock_w( usize components, f64 time, f64 step, f64 gamma, (usize) -> f64 read, (u8, f64, usize) -> f64 rhs, (u8, usize, f64) -> f64 solve, (usize, f64) -> void stage_write, (usize, f64) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `components`: usize (by value)
> - `time`: f64 (by value)
> - `step`: f64 (by value)
> - `gamma`: f64 (by value)
> - `u8`: (usize) -> f64 read, ( (borrowed fn-ptr (callback))
> - `f64`: f64 (by value)
> - `write`: usize) -> f64 rhs, (u8, usize, f64) -> f64 solve, (usize, f64) -> void stage_write, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::diffeq::rosenbrock_w(components, time, step, gamma, u8, f64, write);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-euler-maruyama"></a>

> ## `euler_maruyama`

> Provides the module's **euler maruyama** operation. Returns `i32`.

```valor
public i32 euler_maruyama( usize components, f64 time, f64 step, (usize) -> f64 read, (f64, usize) -> f64 drift, (f64, usize) -> f64 diffusion, (usize) -> f64 normal_increment, (usize, f64) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `components`: usize (by value)
> - `time`: f64 (by value)
> - `step`: f64 (by value)
> - `f64`: (usize) -> f64 read, ( (borrowed fn-ptr (callback))
> - `write`: usize) -> f64 drift, (f64, usize) -> f64 diffusion, (usize) -> f64 normal_increment, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::diffeq::euler_maruyama(components, time, step, f64, write);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-milstein-adaptive"></a>

> ## `milstein_adaptive`

> Provides the module's **milstein adaptive** operation. Returns `i32`.

```valor
public i32 milstein_adaptive( usize components, f64 time, f64 step, f64 absolute_tolerance, f64 relative_tolerance, (usize) -> f64 read, (f64, usize) -> f64 drift, (f64, usize) -> f64 diffusion, (f64, usize) -> f64 diffusion_derivative, (usize) -> f64 normal_increment, (usize) -> f64 candidate_read, (usize, f64) -> void candidate_write, (usize, f64) -> void write, (usize, usize, usize, f64, f64, f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `components`: usize (by value)
> - `time`: f64 (by value)
> - `step`: f64 (by value)
> - `absolute_tolerance`: f64 (by value)
> - `relative_tolerance`: f64 (by value)
> - `f64`: (usize) -> f64 read, ( (borrowed fn-ptr (callback))
> - `receive`: usize) -> f64 drift, (f64, usize) -> f64 diffusion, (f64, usize) -> f64 diffusion_derivative, (usize) -> f64 normal_increment, (usize) -> f64 candidate_read, (usize, f64) -> void candidate_write, (usize, f64) -> void write, (usize, usize, usize, f64, f64, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::diffeq::milstein_adaptive(components, time, step, absolute_tolerance, relative_tolerance, f64, receive);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-schrodinger-solver"></a>

> ## `schrodinger_solver`

> Hamiltonian returns H*psi for the selected component.

```valor
public i32 schrodinger_solver( usize components, f64 time, f64 step, (usize) -> f64 read_real, (usize) -> f64 read_imaginary, (f64, usize) -> f64 hamiltonian_real, (f64, usize) -> f64 hamiltonian_imaginary, (usize, f64, f64) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `components`: usize (by value)
> - `time`: f64 (by value)
> - `step`: f64 (by value)
> - `write`: (usize) -> f64 read_real, (usize) -> f64 read_imaginary, (f64, usize) -> f64 hamiltonian_real, (f64, usize) -> f64 hamiltonian_imaginary, (usize, f64, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::diffeq::schrodinger_solver(components, time, step, write);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-master-equation-lindblad"></a>

> ## `master_equation_lindblad`

> Provides the module's **master equation lindblad** operation. Returns `i32`.

```valor
public i32 master_equation_lindblad( usize matrix_elements, f64 time, f64 step, (usize) -> f64 read_real, (usize) -> f64 read_imaginary, (f64, usize) -> f64 lindblad_real, (f64, usize) -> f64 lindblad_imaginary, (usize, f64, f64) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `matrix_elements`: usize (by value)
> - `time`: f64 (by value)
> - `step`: f64 (by value)
> - `write`: (usize) -> f64 read_real, (usize) -> f64 read_imaginary, (f64, usize) -> f64 lindblad_real, (f64, usize) -> f64 lindblad_imaginary, (usize, f64, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::diffeq::master_equation_lindblad(matrix_elements, time, step, write);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-valid-spacing"></a>

> ## `valid_spacing`

> *Internal API*
>
> Provides the module's **valid spacing** operation. Returns `bool`.

```valor
bool valid_spacing(f64 dx, f64 dy, f64 dz)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `dx`: f64 (by value)
> - `dy`: f64 (by value)
> - `dz`: f64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::diffeq::valid_spacing(dx, dy, dz);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-poisson-solver"></a>

> ## `poisson_solver`

> Provides the module's **poisson solver** operation. Returns `i32`.

```valor
public i32 poisson_solver( usize nx, usize ny, usize nz, f64 dx, f64 dy, f64 dz, f64 relaxation, (usize, usize, usize) -> f64 read, (usize, usize, usize) -> f64 source, (usize, usize, usize, f64) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^3)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `nx`: usize (by value)
> - `ny`: usize (by value)
> - `nz`: usize (by value)
> - `dx`: f64 (by value)
> - `dy`: f64 (by value)
> - `dz`: f64 (by value)
> - `relaxation`: f64 (by value)
> - `usize`: (usize, usize, usize) -> f64 read, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `write`: usize) -> f64 source, (usize, usize, usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::diffeq::poisson_solver(nx, ny, nz, dx, dy, dz, relaxation, usize, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-heat-diffusion-pde"></a>

> ## `heat_diffusion_pde`

> Provides the module's **heat diffusion pde** operation. Returns `i32`.

```valor
public i32 heat_diffusion_pde( usize nx, usize ny, usize nz, f64 dx, f64 dy, f64 dz, f64 diffusivity, f64 step, (usize, usize, usize) -> f64 read, (usize, usize, usize, f64) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^3)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `nx`: usize (by value)
> - `ny`: usize (by value)
> - `nz`: usize (by value)
> - `dx`: f64 (by value)
> - `dy`: f64 (by value)
> - `dz`: f64 (by value)
> - `diffusivity`: f64 (by value)
> - `step`: f64 (by value)
> - `usize`: (usize, usize, usize) -> f64 read, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `usize`: usize (by value)
> - `write`: f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::diffeq::heat_diffusion_pde(nx, ny, nz, dx, dy, dz, diffusivity, step, usize, usize, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-navier-stokes-incompressible"></a>

> ## `navier_stokes_incompressible`

> advection_diffusion(component,x,y,z) returns the complete provisional velocity derivative; pressure_gradient supplies the projection correction. advection_diffusion(component,x,y,z) returns the complete provisional velocity derivative; pressure_gradient supplies the projection correction.

```valor
public i32 navier_stokes_incompressible( usize nx, usize ny, usize nz, f64 time, f64 step, (u8, usize, usize, usize) -> f64 velocity, (u8, f64, usize, usize, usize) -> f64 advection_diffusion, (u8, usize, usize, usize) -> f64 pressure_gradient, (u8, usize, usize, usize, f64) -> void write_velocity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^4)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `nx`: usize (by value)
> - `ny`: usize (by value)
> - `nz`: usize (by value)
> - `time`: f64 (by value)
> - `step`: f64 (by value)
> - `u8`: (u8, usize, usize, usize) -> f64 velocity, ( (borrowed fn-ptr (callback))
> - `f64`: f64 (by value)
> - `usize`: usize (by value)
> - `usize`: usize (by value)
> - `write_velocity`: usize) -> f64 advection_diffusion, (u8, usize, usize, usize) -> f64 pressure_gradient, (u8, usize, usize, usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::diffeq::navier_stokes_incompressible(nx, ny, nz, time, step, u8, f64, usize, usize, write_velocity);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-wave-equation-3d"></a>

> ## `wave_equation_3d`

> Provides the module's **wave equation 3d** operation. Returns `i32`.

```valor
public i32 wave_equation_3d( usize nx, usize ny, usize nz, f64 dx, f64 dy, f64 dz, f64 speed, f64 step, (usize, usize, usize) -> f64 current, (usize, usize, usize) -> f64 previous, (usize, usize, usize, f64) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^3)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `nx`: usize (by value)
> - `ny`: usize (by value)
> - `nz`: usize (by value)
> - `dx`: f64 (by value)
> - `dy`: f64 (by value)
> - `dz`: f64 (by value)
> - `speed`: f64 (by value)
> - `step`: f64 (by value)
> - `usize`: (usize, usize, usize) -> f64 current, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `write`: usize) -> f64 previous, (usize, usize, usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::diffeq::wave_equation_3d(nx, ny, nz, dx, dy, dz, speed, step, usize, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-maxwell-pde-solver"></a>

> ## `maxwell_pde_solver`

> curl_e and curl_h are staggered-grid curl samples prepared by the caller.

```valor
public i32 maxwell_pde_solver( usize cells, f64 step, (u8, usize) -> f64 electric, (u8, usize) -> f64 magnetic, (u8, usize) -> f64 curl_e, (u8, usize) -> f64 curl_h, (usize) -> f64 permittivity, (usize) -> f64 permeability, (u8, usize, f64) -> void write_electric, (u8, usize, f64) -> void write_magnetic)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `cells`: usize (by value)
> - `step`: f64 (by value)
> - `u8`: (u8, usize) -> f64 electric, ( (borrowed fn-ptr (callback))
> - `write_magnetic`: usize) -> f64 magnetic, (u8, usize) -> f64 curl_e, (u8, usize) -> f64 curl_h, (usize) -> f64 permittivity, (usize) -> f64 permeability, (u8, usize, f64) -> void write_electric, (u8, usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::diffeq::maxwell_pde_solver(cells, step, u8, write_magnetic);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-elastodynamics-pde"></a>

> ## `elastodynamics_pde`

> Provides the module's **elastodynamics pde** operation. Returns `i32`.

```valor
public i32 elastodynamics_pde( usize cells, f64 step, (u8, usize) -> f64 velocity, (u8, usize) -> f64 stress, (u8, usize) -> f64 stress_divergence, (u8, usize) -> f64 strain_rate, (usize) -> f64 inverse_density, (u8, usize, f64) -> void write_velocity, (u8, usize, f64) -> void write_stress)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `cells`: usize (by value)
> - `step`: f64 (by value)
> - `u8`: (u8, usize) -> f64 velocity, ( (borrowed fn-ptr (callback))
> - `write_stress`: usize) -> f64 stress, (u8, usize) -> f64 stress_divergence, (u8, usize) -> f64 strain_rate, (usize) -> f64 inverse_density, (u8, usize, f64) -> void write_velocity, (u8, usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::diffeq::elastodynamics_pde(cells, step, u8, write_stress);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-neural-ode-layer"></a>

> ## `neural_ode_layer`

> Provides the module's **neural ode layer** operation. Returns `i32`.

```valor
public i32 neural_ode_layer( usize features, f64 time, f64 step, (usize) -> f64 activation, (u8, f64, usize) -> f64 neural_field, (usize, f64) -> void stage_write, (usize, f64) -> void output)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `features`: usize (by value)
> - `time`: f64 (by value)
> - `step`: f64 (by value)
> - `u8`: (usize) -> f64 activation, ( (borrowed fn-ptr (callback))
> - `f64`: f64 (by value)
> - `output`: usize) -> f64 neural_field, (usize, f64) -> void stage_write, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::diffeq::neural_ode_layer(features, time, step, u8, f64, output);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-pinn-loss-integrator"></a>

> ## `pinn_loss_integrator`

> Provides the module's **pinn loss integrator** operation. Returns `i32`.

```valor
public i32 pinn_loss_integrator( usize collocation_points, (usize) -> f64 pde_residual, (usize) -> f64 boundary_residual, (usize) -> f64 observation_residual, f64 boundary_weight, f64 observation_weight, (f64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `collocation_points`: usize (by value)
> - `receive`: (usize) -> f64 pde_residual, (usize) -> f64 boundary_residual, (usize) -> f64 observation_residual, f64 boundary_weight, f64 observation_weight, (f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::diffeq::pinn_loss_integrator(collocation_points, receive);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-symplectic-neural-network"></a>

> ## `symplectic_neural_network`

> Provides the module's **symplectic neural network** operation. Returns `i32`.

```valor
public i32 symplectic_neural_network( usize dimensions, f64 step, (usize) -> f64 position, (usize) -> f64 momentum, (u8, usize) -> f64 hamiltonian_gradient, (usize, f64) -> void stage_momentum, (usize, f64) -> void write_position, (usize, f64) -> void write_momentum)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `dimensions`: usize (by value)
> - `step`: f64 (by value)
> - `write_momentum`: (usize) -> f64 position, (usize) -> f64 momentum, (u8, usize) -> f64 hamiltonian_gradient, (usize, f64) -> void stage_momentum, (usize, f64) -> void write_position, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::diffeq::symplectic_neural_network(dimensions, step, write_momentum);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-lorenz-attractor-stepper"></a>

> ## `lorenz_attractor_stepper`

> Provides the module's **lorenz attractor stepper** operation. Returns `i32`.

```valor
public i32 lorenz_attractor_stepper( usize lanes, f64 step, f64 sigma, f64 rho, f64 beta, (u8, usize) -> f64 read, (u8, usize, f64) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `lanes`: usize (by value)
> - `step`: f64 (by value)
> - `sigma`: f64 (by value)
> - `rho`: f64 (by value)
> - `beta`: f64 (by value)
> - `u8`: (u8, usize) -> f64 read, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `write`: f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::diffeq::lorenz_attractor_stepper(lanes, step, sigma, rho, beta, u8, usize, write);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-geodesic-pde-stepper"></a>

> ## `geodesic_pde_stepper`

> acceleration(component) returns -Gamma^component_ij v^i v^j for the caller's metric representation. acceleration(component) returns -Gamma^component_ij v^i v^j for the caller's metric representation.

```valor
public i32 geodesic_pde_stepper( usize dimensions, f64 step, (usize) -> f64 position, (usize) -> f64 velocity, (usize) -> f64 acceleration, (usize, f64) -> void write_position, (usize, f64) -> void write_velocity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `dimensions`: usize (by value)
> - `step`: f64 (by value)
> - `write_velocity`: (usize) -> f64 position, (usize) -> f64 velocity, (usize) -> f64 acceleration, (usize, f64) -> void write_position, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::diffeq::geodesic_pde_stepper(dimensions, step, write_velocity);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

<a id="fn-hamilton-jacobi-bellman"></a>

> ## `hamilton_jacobi_bellman`

> The Hamiltonian callback minimizes over controls and returns H(x, grad(V)); diffusion_trace returns 0.5*tr(sigma*sigma^T Hessian(V)). The Hamiltonian callback minimizes over controls and returns H(x, grad(V)); diffusion_trace returns 0.5*tr(sigma*sigma^T Hessian(V)).

```valor
public i32 hamilton_jacobi_bellman( usize states, f64 time, f64 step, (usize) -> f64 value, (f64, usize) -> f64 hamiltonian, (f64, usize) -> f64 diffusion_trace, (usize, f64) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `states`: usize (by value)
> - `time`: f64 (by value)
> - `step`: f64 (by value)
> - `f64`: (usize) -> f64 value, ( (borrowed fn-ptr (callback))
> - `write`: usize) -> f64 hamiltonian, (f64, usize) -> f64 diffusion_trace, (usize, f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::diffeq::hamilton_jacobi_bellman(states, time, step, f64, write);
> ```

> ### SEE ALSO
>
> - [`std::diffeq::power_of_two`](#fn-power-of-two)
> - [`std::diffeq::valid_placement`](#fn-valid-placement)
> - [`std::diffeq::valid_state`](#fn-valid-state)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Solvers](STD-SOLVER-DOC.md) · [Table of contents](standard-library/README.md) · [Multivariable calculus →](STD-MULTICALC-DOC.md)
