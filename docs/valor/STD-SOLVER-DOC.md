<!-- stdlib-reference-style: modern -->
> # `std::solver`

`std::solver` equation and optimization solvers.

[Standard library](standard-library/README.md) / [Algorithms and computing](standard-library/README.md#algorithms-and-computing) / **Solvers**

> **Source:** `stdlib/std/solver.valor` · **Routines:** 13 public

## Routines

<details>
<summary>Browse all 13 routines</summary>

- [`least_fixed_point`](#fn-least-fixed-point)
- [`greatest_fixed_point`](#fn-greatest-fixed-point)
- [`worklist_solve`](#fn-worklist-solve)
- [`solver_find_halving`](#fn-solver-find-halving)
- [`union_find`](#fn-union-find)
- [`weighted_union_find`](#fn-weighted-union-find)
- [`bisection`](#fn-bisection)
- [`newton_bounded`](#fn-newton-bounded)
- [`secant_bounded`](#fn-secant-bounded)
- [`gradient_descent_bounded`](#fn-gradient-descent-bounded)
- [`projected_gradient`](#fn-projected-gradient)
- [`coordinate_descent`](#fn-coordinate-descent)
- [`conjugate_gradient`](#fn-conjugate-gradient)

</details>

## API reference

<a id="fn-least-fixed-point"></a>

> ## `least_fixed_point`

> Least fixed point: seed at bottom, `transfer` joins upward and is monotone increasing, iterate ascending sweeps until a sweep is stationary. Least fixed point: seed at bottom, `transfer` joins upward and is monotone increasing, iterate ascending sweeps until a sweep is stationary.  Ascending order makes the reached fixed point a deterministic function of the lattice.

```valor
public i32 least_fixed_point( usize count, () -> void seed_bottom, (usize) -> bool transfer, usize budget_max_iterations, (usize) -> void receive_rounds)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `receive_rounds`: () -> void seed_bottom, (usize) -> bool transfer, usize budget_max_iterations, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::solver::least_fixed_point(count, receive_rounds);
> ```

> ### SEE ALSO
>
> - [`std::solver::greatest_fixed_point`](#fn-greatest-fixed-point)
> - [`std::solver::worklist_solve`](#fn-worklist-solve)
> - [`std::solver::solver_find_halving`](#fn-solver-find-halving)

<a id="fn-greatest-fixed-point"></a>

> ## `greatest_fixed_point`

> Greatest fixed point: the dual of the above. Greatest fixed point: the dual of the above.  Seed at top, `transfer` meets downward and is monotone decreasing, iterate ascending sweeps until a sweep is stationary.  Same deterministic ascending schedule and same budget rule.

```valor
public i32 greatest_fixed_point( usize count, () -> void seed_top, (usize) -> bool transfer, usize budget_max_iterations, (usize) -> void receive_rounds)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `receive_rounds`: () -> void seed_top, (usize) -> bool transfer, usize budget_max_iterations, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::solver::greatest_fixed_point(count, receive_rounds);
> ```

> ### SEE ALSO
>
> - [`std::solver::least_fixed_point`](#fn-least-fixed-point)
> - [`std::solver::worklist_solve`](#fn-worklist-solve)
> - [`std::solver::solver_find_halving`](#fn-solver-find-halving)

<a id="fn-worklist-solve"></a>

> ## `worklist_solve`

> Worklist fixed-point solver. Worklist fixed-point solver.  A demand-driven refinement of the round-robin engines: `transfer(n)` recomputes unknown n and returns true iff it moved; when it moves, every unknown that depends on n (the CSR dependency lists read_dep_offset / read_dep) is scheduled unless already queued.  All unknowns are seeded in ascending id order and the worklist is drained FIFO, so the visitation order is a pure function of the dependency graph.  The budget caps total unknown evaluations; read_queued / write_queued is the duplicate-free membership flag and receive_visits reports the evaluations actually spent.

```valor
public i32 worklist_solve( usize count, usize dependency_count, (usize) -> usize read_dep_offset, (usize) -> usize read_dep, (usize) -> bool transfer, (usize) -> void enqueue, () -> usize dequeue, (usize) -> bool read_queued, (usize, bool) -> void write_queued, usize budget_max_iterations, (usize) -> void receive_visits)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `dependency_count`: usize (by value)
> - `receive_visits`: (usize) -> usize read_dep_offset, (usize) -> usize read_dep, (usize) -> bool transfer, (usize) -> void enqueue, () -> usize dequeue, (usize) -> bool read_queued, (usize, bool) -> void write_queued, usize budget_max_iterations, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::solver::worklist_solve(count, dependency_count, receive_visits);
> ```

> ### SEE ALSO
>
> - [`std::solver::least_fixed_point`](#fn-least-fixed-point)
> - [`std::solver::greatest_fixed_point`](#fn-greatest-fixed-point)
> - [`std::solver::solver_find_halving`](#fn-solver-find-halving)

<a id="fn-solver-find-halving"></a>

> ## `solver_find_halving`

> Path-halving find over a caller-owned parent array. Path-halving find over a caller-owned parent array.  Every second node on the path is repointed to its grandparent, keeping future finds shallow without a second pass.  Bounded by element_count so a malformed (cyclic) forest returns NO_INDEX instead of spinning.

```valor
public usize solver_find_halving( usize start, usize element_count, (usize) -> usize read_parent, (usize, usize) -> void write_parent)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `element_count`: usize (by value)
> - `usize`: (usize) -> usize read_parent, ( (borrowed fn-ptr (callback))
> - `write_parent`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::solver::solver_find_halving(start, element_count, usize, write_parent);
> ```

> ### SEE ALSO
>
> - [`std::solver::least_fixed_point`](#fn-least-fixed-point)
> - [`std::solver::greatest_fixed_point`](#fn-greatest-fixed-point)
> - [`std::solver::worklist_solve`](#fn-worklist-solve)

<a id="fn-union-find"></a>

> ## `union_find`

> Union-find equivalence solver. Union-find equivalence solver.  Given `pair_count` equivalence assertions (read_left(k), read_right(k)) over `element_count` elements, build the partition into equivalence classes and label every element with the smallest id in its class.  Elements are unioned into a caller-owned disjoint set (parent / rank arrays of size element_count, initialised here) using path halving and union by rank; rank ties settle toward the smaller root id so the forest -- and hence the labelling -- is a deterministic function of the input. A final ascending pass assigns the canonical smallest-id label and the number of classes is returned through receive_class_count.

```valor
public i32 union_find( usize element_count, usize pair_count, (usize) -> usize read_left, (usize) -> usize read_right, (usize) -> usize read_parent, (usize, usize) -> void write_parent, (usize) -> u8 read_rank, (usize, u8) -> void write_rank, (usize, usize) -> void write_label, (usize) -> void receive_class_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `element_count`: usize (by value)
> - `pair_count`: usize (by value)
> - `receive_class_count`: (usize) -> usize read_left, (usize) -> usize read_right, (usize) -> usize read_parent, (usize, usize) -> void write_parent, (usize) -> u8 read_rank, (usize, u8) -> void write_rank, (usize, usize) -> void write_label, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::solver::union_find(element_count, pair_count, receive_class_count);
> ```

> ### SEE ALSO
>
> - [`std::solver::least_fixed_point`](#fn-least-fixed-point)
> - [`std::solver::greatest_fixed_point`](#fn-greatest-fixed-point)
> - [`std::solver::worklist_solve`](#fn-worklist-solve)

<a id="fn-weighted-union-find"></a>

> ## `weighted_union_find`

> Weighted union-find (difference-constraint solver). Weighted union-find (difference-constraint solver).  Each element carries an integer potential relative to its parent; the class root has potential 0, so the potential of any element is the running sum of edge weights up to the root.  Assertion k states potential(read_from(k)) - potential(read_to(k)) == read_offset(k).  Merging two classes fixes the new root edge so the assertion holds; asserting within an existing class checks it.  A violated assertion is reported (ERR_INCONSISTENT) and the offending pair index left in receive_conflict; a consistent system returns OK with NO_INDEX as the conflict.  Only integer equality is tested, never ordering, so the result is exact and target-independent.  Ties settle toward the smaller root id. parents / ranks / weights are caller arrays of size element_count, all initialised here (weight-to-self = 0).

```valor
public i32 weighted_union_find( usize element_count, usize constraint_count, (usize) -> usize read_from, (usize) -> usize read_to, (usize) -> i64 read_offset, (usize) -> usize read_parent, (usize, usize) -> void write_parent, (usize) -> u8 read_rank, (usize, u8) -> void write_rank, (usize) -> i64 read_weight, (usize, i64) -> void write_weight, (usize) -> void receive_conflict)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `element_count`: usize (by value)
> - `constraint_count`: usize (by value)
> - `receive_conflict`: (usize) -> usize read_from, (usize) -> usize read_to, (usize) -> i64 read_offset, (usize) -> usize read_parent, (usize, usize) -> void write_parent, (usize) -> u8 read_rank, (usize, u8) -> void write_rank, (usize) -> i64 read_weight, (usize, i64) -> void write_weight, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::solver::weighted_union_find(element_count, constraint_count, receive_conflict);
> ```

> ### SEE ALSO
>
> - [`std::solver::least_fixed_point`](#fn-least-fixed-point)
> - [`std::solver::greatest_fixed_point`](#fn-greatest-fixed-point)
> - [`std::solver::worklist_solve`](#fn-worklist-solve)

<a id="fn-bisection"></a>

> ## `bisection`

> Bisection. Bisection.  Requires that the residual sign at `lower` and `upper` differ (a genuine bracket), otherwise ERR_NO_BRACKET.  Each step halves the bracket and keeps the half whose endpoints straddle a sign change; an exact zero at the midpoint stops immediately.  Convergence is tested on the bracket width against the midpoint scale.  The root estimate and the iterations spent are reported through receive callbacks.  Deterministic: the retained half is chosen by the integer sign product, never by a float compare.

```valor
public i32 bisection( f64 lower, f64 upper, (f64) -> f64 evaluate, (f64) -> i32 sign, (f64, f64) -> bool converged, usize budget_max_iterations, (usize) -> void receive_iterations, (f64) -> void receive_root)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `lower`: f64 (by value)
> - `upper`: f64 (by value)
> - `receive_root`: (f64) -> f64 evaluate, (f64) -> i32 sign, (f64, f64) -> bool converged, usize budget_max_iterations, (usize) -> void receive_iterations, (f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::solver::bisection(lower, upper, receive_root);
> ```

> ### SEE ALSO
>
> - [`std::solver::least_fixed_point`](#fn-least-fixed-point)
> - [`std::solver::greatest_fixed_point`](#fn-greatest-fixed-point)
> - [`std::solver::worklist_solve`](#fn-worklist-solve)

<a id="fn-newton-bounded"></a>

> ## `newton_bounded`

> Newton's method confined to [lower, upper]. Newton's method confined to [lower, upper].  Each step is x' = x - f(x)/f'(x), then clamped back into the bracket through the caller's `less` so the iterate can never escape its feasible interval (a robust guard against overshoot on flat regions).  A vanishing derivative -- reported by `is_zero` -- is refused as ERR_SINGULAR rather than dividing.  Convergence is the caller's predicate on the signed step and the new iterate's scale.

```valor
public i32 newton_bounded( f64 initial, f64 lower, f64 upper, (f64) -> f64 evaluate, (f64) -> f64 derivative, (f64) -> bool is_zero, (f64, f64) -> bool less, (f64, f64) -> bool converged, usize budget_max_iterations, (usize) -> void receive_iterations, (f64) -> void receive_root)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `initial`: f64 (by value)
> - `lower`: f64 (by value)
> - `upper`: f64 (by value)
> - `receive_root`: (f64) -> f64 evaluate, (f64) -> f64 derivative, (f64) -> bool is_zero, (f64, f64) -> bool less, (f64, f64) -> bool converged, usize budget_max_iterations, (usize) -> void receive_iterations, (f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::solver::newton_bounded(initial, lower, upper, receive_root);
> ```

> ### SEE ALSO
>
> - [`std::solver::least_fixed_point`](#fn-least-fixed-point)
> - [`std::solver::greatest_fixed_point`](#fn-greatest-fixed-point)
> - [`std::solver::worklist_solve`](#fn-worklist-solve)

<a id="fn-secant-bounded"></a>

> ## `secant_bounded`

> Secant method confined to [lower, upper]. Secant method confined to [lower, upper].  Uses the last two iterates to approximate the derivative: x' = x1 - f(x1)*(x1 - x0)/(f(x1) - f(x0)), then clamps into the bracket via `less`.  A vanishing denominator (`is_zero` on f(x1) - f(x0)) is refused as ERR_SINGULAR.  Convergence is the caller's predicate on the signed step and the new iterate's scale.

```valor
public i32 secant_bounded( f64 first, f64 second, f64 lower, f64 upper, (f64) -> f64 evaluate, (f64) -> bool is_zero, (f64, f64) -> bool less, (f64, f64) -> bool converged, usize budget_max_iterations, (usize) -> void receive_iterations, (f64) -> void receive_root)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `first`: f64 (by value)
> - `second`: f64 (by value)
> - `lower`: f64 (by value)
> - `upper`: f64 (by value)
> - `receive_root`: (f64) -> f64 evaluate, (f64) -> bool is_zero, (f64, f64) -> bool less, (f64, f64) -> bool converged, usize budget_max_iterations, (usize) -> void receive_iterations, (f64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::solver::secant_bounded(first, second, lower, upper, receive_root);
> ```

> ### SEE ALSO
>
> - [`std::solver::least_fixed_point`](#fn-least-fixed-point)
> - [`std::solver::greatest_fixed_point`](#fn-greatest-fixed-point)
> - [`std::solver::worklist_solve`](#fn-worklist-solve)

<a id="fn-gradient-descent-bounded"></a>

> ## `gradient_descent_bounded`

> Bounded gradient descent. Bounded gradient descent.  Each iteration: `refresh_gradient` recomputes the gradient at the current point into caller storage, then every component takes a fixed step x_i <- x_i - step_size * g_i in one ascending sweep.  The convergence quantity is the Kahan-summed squared gradient norm, offered with the Kahan-summed squared step norm as scale to the caller's predicate.  No float ordering is performed here; the predicate owns the tolerance test.

```valor
public i32 gradient_descent_bounded( usize dimension, f64 step_size, () -> void refresh_gradient, (usize) -> f64 read_gradient, (usize) -> f64 read_point, (usize, f64) -> void write_point, (f64, f64) -> bool converged, usize budget_max_iterations, (usize) -> void receive_iterations)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `dimension`: usize (by value)
> - `step_size`: f64 (by value)
> - `receive_iterations`: () -> void refresh_gradient, (usize) -> f64 read_gradient, (usize) -> f64 read_point, (usize, f64) -> void write_point, (f64, f64) -> bool converged, usize budget_max_iterations, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::solver::gradient_descent_bounded(dimension, step_size, receive_iterations);
> ```

> ### SEE ALSO
>
> - [`std::solver::least_fixed_point`](#fn-least-fixed-point)
> - [`std::solver::greatest_fixed_point`](#fn-greatest-fixed-point)
> - [`std::solver::worklist_solve`](#fn-worklist-solve)

<a id="fn-projected-gradient"></a>

> ## `projected_gradient`

> Projected gradient descent. Projected gradient descent.  A gradient step followed by a projection of the whole iterate back onto the feasible set through the caller's `project` hook (a box clamp, a simplex projection, whatever the caller wires).  The progress quantity is the squared gradient-step norm (step_size^2 * ||g||^2), a storage-free, projection-monotone measure of the step, offered with the squared gradient norm as scale to the caller's predicate.

```valor
public i32 projected_gradient( usize dimension, f64 step_size, () -> void refresh_gradient, (usize) -> f64 read_gradient, (usize) -> f64 read_point, (usize, f64) -> void write_point, () -> void project, (f64, f64) -> bool converged, usize budget_max_iterations, (usize) -> void receive_iterations)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `dimension`: usize (by value)
> - `step_size`: f64 (by value)
> - `receive_iterations`: () -> void refresh_gradient, (usize) -> f64 read_gradient, (usize) -> f64 read_point, (usize, f64) -> void write_point, () -> void project, (f64, f64) -> bool converged, usize budget_max_iterations, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::solver::projected_gradient(dimension, step_size, receive_iterations);
> ```

> ### SEE ALSO
>
> - [`std::solver::least_fixed_point`](#fn-least-fixed-point)
> - [`std::solver::greatest_fixed_point`](#fn-greatest-fixed-point)
> - [`std::solver::worklist_solve`](#fn-worklist-solve)

<a id="fn-coordinate-descent"></a>

> ## `coordinate_descent`

> Cyclic coordinate descent. Cyclic coordinate descent.  Coordinates are optimised one at a time in strict ascending order (the deterministic schedule); `minimize_coordinate(i)` returns the value of x_i that minimises the objective with all other coordinates fixed, and the change is accumulated as a Kahan-summed squared step norm.  Convergence is the caller's predicate on that squared change with the Kahan-summed squared iterate norm as scale.  One budgeted iteration is one full ascending sweep over all coordinates.

```valor
public i32 coordinate_descent( usize dimension, (usize) -> f64 minimize_coordinate, (usize) -> f64 read_point, (usize, f64) -> void write_point, (f64, f64) -> bool converged, usize budget_max_iterations, (usize) -> void receive_iterations)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `dimension`: usize (by value)
> - `receive_iterations`: (usize) -> f64 minimize_coordinate, (usize) -> f64 read_point, (usize, f64) -> void write_point, (f64, f64) -> bool converged, usize budget_max_iterations, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::solver::coordinate_descent(dimension, receive_iterations);
> ```

> ### SEE ALSO
>
> - [`std::solver::least_fixed_point`](#fn-least-fixed-point)
> - [`std::solver::greatest_fixed_point`](#fn-greatest-fixed-point)
> - [`std::solver::worklist_solve`](#fn-worklist-solve)

<a id="fn-conjugate-gradient"></a>

> ## `conjugate_gradient`

> Linear conjugate gradient, matrix-free. Linear conjugate gradient, matrix-free.  Solves A x = b for a symmetric positive-definite A whose action is supplied by `apply_matrix`, which reads the direction buffer p and writes A*p into the buffer q.  The residual r, direction p and product q are caller vectors of size dimension; x is seeded by the caller.  The initial residual is r = b - A x, and each iteration performs the standard CG update with Kahan-reduced dot products.  A non-positive curvature p.q -- reported by `is_zero` -- is refused as ERR_SINGULAR. Convergence is the caller's predicate on the Kahan-summed squared residual norm with the previous squared residual norm as scale.

```valor
public i32 conjugate_gradient( usize dimension, (usize) -> f64 read_b, (usize) -> f64 read_point, (usize, f64) -> void write_point, (usize) -> f64 read_resid, (usize, f64) -> void write_resid, (usize) -> f64 read_dir, (usize, f64) -> void write_dir, (usize) -> f64 read_prod, () -> void apply_matrix, (f64) -> bool is_zero, (f64, f64) -> bool converged, usize budget_max_iterations, (usize) -> void receive_iterations)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `dimension`: usize (by value)
> - `receive_iterations`: (usize) -> f64 read_b, (usize) -> f64 read_point, (usize, f64) -> void write_point, (usize) -> f64 read_resid, (usize, f64) -> void write_resid, (usize) -> f64 read_dir, (usize, f64) -> void write_dir, (usize) -> f64 read_prod, () -> void apply_matrix, (f64) -> bool is_zero, (f64, f64) -> bool converged, usize budget_max_iterations, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::solver::conjugate_gradient(dimension, receive_iterations);
> ```

> ### SEE ALSO
>
> - [`std::solver::least_fixed_point`](#fn-least-fixed-point)
> - [`std::solver::greatest_fixed_point`](#fn-greatest-fixed-point)
> - [`std::solver::worklist_solve`](#fn-worklist-solve)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Linear algebra](STD-LA-DOC.md) · [Table of contents](standard-library/README.md) · [Differential equations →](STD-DIFFEQ-DOC.md)
