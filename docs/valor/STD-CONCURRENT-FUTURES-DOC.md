<!-- stdlib-reference-style: modern -->
> # `std::concurrent::futures`

`std::concurrent::futures` concurrent future operations.

[Standard library](standard-library/README.md) / [Concurrency and time](standard-library/README.md#concurrency-and-time) / **Concurrent futures**

> **Source:** `stdlib/std/concurrent/futures.valor` · **Routines:** 102 public

## Routines

<details>
<summary>Browse all 102 routines</summary>

- [`fut_min_usize`](#fn-fut-min-usize)
- [`fut_max_usize`](#fn-fut-max-usize)
- [`fut_min_u64`](#fn-fut-min-u64)
- [`fut_max_u64`](#fn-fut-max-u64)
- [`fut_min_i64`](#fn-fut-min-i64)
- [`fut_max_i64`](#fn-fut-max-i64)
- [`fut_mod_usize`](#fn-fut-mod-usize)
- [`fut_ceil_div`](#fn-fut-ceil-div)
- [`fut_ring_slot`](#fn-fut-ring-slot)
- [`future_state_is_terminal`](#fn-future-state-is-terminal)
- [`future_state_is_done`](#fn-future-state-is-done)
- [`future_state_is_pending`](#fn-future-state-is-pending)
- [`future_state_is_running`](#fn-future-state-is-running)
- [`future_state_is_success`](#fn-future-state-is-success)
- [`future_state_is_failure`](#fn-future-state-is-failure)
- [`future_state_is_cancelled`](#fn-future-state-is-cancelled)
- [`future_state_transition_is_legal`](#fn-future-state-transition-is-legal)
- [`future_advance_state`](#fn-future-advance-state)
- [`promise_is_settled`](#fn-promise-is-settled)
- [`promise_try_complete`](#fn-promise-try-complete)
- [`promise_try_succeed`](#fn-promise-try-succeed)
- [`promise_try_fail`](#fn-promise-try-fail)
- [`promise_try_cancel`](#fn-promise-try-cancel)
- [`completion_key_compare`](#fn-completion-key-compare)
- [`completion_key_less`](#fn-completion-key-less)
- [`wait_all_is_satisfied`](#fn-wait-all-is-satisfied)
- [`wait_all`](#fn-wait-all)
- [`wait_any`](#fn-wait-any)
- [`wait`](#fn-wait)
- [`as_completed_next`](#fn-as-completed-next)
- [`as_completed_drive`](#fn-as-completed-drive)
- [`map_ordered_result_index`](#fn-map-ordered-result-index)
- [`map_ordered_collect`](#fn-map-ordered-collect)
- [`map_unordered_collect`](#fn-map-unordered-collect)
- [`gather`](#fn-gather)
- [`race`](#fn-race)
- [`cancel_future`](#fn-cancel-future)
- [`cancel_all`](#fn-cancel-all)
- [`deadline_is_exceeded`](#fn-deadline-is-exceeded)
- [`deadline_compare`](#fn-deadline-compare)
- [`deadline_remaining`](#fn-deadline-remaining)
- [`admission_is_open`](#fn-admission-is-open)
- [`shutdown_target_state`](#fn-shutdown-target-state)
- [`shutdown_begin`](#fn-shutdown-begin)
- [`shutdown_now`](#fn-shutdown-now)
- [`admission_try_push`](#fn-admission-try-push)
- [`admission_try_pop`](#fn-admission-try-pop)
- [`admission_pending_count`](#fn-admission-pending-count)
- [`admission_is_full`](#fn-admission-is-full)
- [`admission_batch_reserve`](#fn-admission-batch-reserve)
- [`admission_policy_is_valid`](#fn-admission-policy-is-valid)
- [`admission_resolve`](#fn-admission-resolve)
- [`admission_heap_push`](#fn-admission-heap-push)
- [`admission_heap_pop`](#fn-admission-heap-pop)
- [`executor_stats`](#fn-executor-stats)
- [`executor_capacity`](#fn-executor-capacity)
- [`executor_pending_count`](#fn-executor-pending-count)
- [`executor_running_count`](#fn-executor-running-count)
- [`executor_is_saturated`](#fn-executor-is-saturated)
- [`task_error_encode`](#fn-task-error-encode)
- [`task_error_kind`](#fn-task-error-kind)
- [`task_error_code`](#fn-task-error-code)
- [`task_error_kind_preserved`](#fn-task-error-kind-preserved)
- [`task_error_from_cancellation`](#fn-task-error-from-cancellation)
- [`task_error_from_deadline`](#fn-task-error-from-deadline)
- [`task_error_from_queue_full`](#fn-task-error-from-queue-full)
- [`task_error_from_executor_closed`](#fn-task-error-from-executor-closed)
- [`task_error_from_worker_crash`](#fn-task-error-from-worker-crash)
- [`task_error_is_worker_fault`](#fn-task-error-is-worker-fault)
- [`task_error_is_transport_fault`](#fn-task-error-is-transport-fault)
- [`task_error_kind_for_state`](#fn-task-error-kind-for-state)
- [`transfer_encode_le`](#fn-transfer-encode-le)
- [`transfer_decode_le`](#fn-transfer-decode-le)
- [`transfer_schema_matches`](#fn-transfer-schema-matches)
- [`transfer_accept_message`](#fn-transfer-accept-message)
- [`transfer_handshake_is_compatible`](#fn-transfer-handshake-is-compatible)
- [`transfer_worker_admit`](#fn-transfer-worker-admit)
- [`shared_region_handle_is_valid`](#fn-shared-region-handle-is-valid)
- [`worker_count_is_explicit`](#fn-worker-count-is-explicit)
- [`queue_capacity_is_valid`](#fn-queue-capacity-is-valid)
- [`wait_mode_is_valid`](#fn-wait-mode-is-valid)
- [`queue_discipline_is_valid`](#fn-queue-discipline-is-valid)
- [`determinism_mode_is_valid`](#fn-determinism-mode-is-valid)
- [`strict_mode_admits_policy`](#fn-strict-mode-admits-policy)
- [`strict_mode_admits_discipline`](#fn-strict-mode-admits-discipline)
- [`run_inline_is_permitted`](#fn-run-inline-is-permitted)
- [`work_stealing_allowed`](#fn-work-stealing-allowed)
- [`thread_pool_config_is_reproducible`](#fn-thread-pool-config-is-reproducible)
- [`future_map_propagate`](#fn-future-map-propagate)
- [`future_then_compose_propagate`](#fn-future-then-compose-propagate)
- [`future_recover_propagate`](#fn-future-recover-propagate)
- [`future_with_timeout_propagate`](#fn-future-with-timeout-propagate)
- [`future_with_cancellation_propagate`](#fn-future-with-cancellation-propagate)
- [`future_zip_propagate`](#fn-future-zip-propagate)
- [`invariant_future_monotone`](#fn-invariant-future-monotone)
- [`invariant_single_completion`](#fn-invariant-single-completion)
- [`invariant_ordered_map_index`](#fn-invariant-ordered-map-index)
- [`invariant_wait_any_deterministic`](#fn-invariant-wait-any-deterministic)
- [`invariant_bounded`](#fn-invariant-bounded)
- [`invariant_shutdown_no_admit`](#fn-invariant-shutdown-no-admit)
- [`invariant_cancelled_queued_never_runs`](#fn-invariant-cancelled-queued-never-runs)
- [`invariant_protocol_type_safe`](#fn-invariant-protocol-type-safe)

</details>

## API reference

<a id="fn-fut-min-usize"></a>

> ## `fut_min_usize`

> Provides the module's **fut min usize** operation. Returns `usize`.

```valor
public usize fut_min_usize(usize a, usize b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: usize (by value)
> - `b`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::concurrent::futures::fut_min_usize(a, b);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)
> - [`std::concurrent::futures::fut_max_u64`](#fn-fut-max-u64)

<a id="fn-fut-max-usize"></a>

> ## `fut_max_usize`

> Provides the module's **fut max usize** operation. Returns `usize`.

```valor
public usize fut_max_usize(usize a, usize b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: usize (by value)
> - `b`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::concurrent::futures::fut_max_usize(a, b);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)
> - [`std::concurrent::futures::fut_max_u64`](#fn-fut-max-u64)

<a id="fn-fut-min-u64"></a>

> ## `fut_min_u64`

> Provides the module's **fut min u64** operation. Returns `u64`.

```valor
public u64 fut_min_u64(u64 a, u64 b)
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
> u64 result = std::concurrent::futures::fut_min_u64(a, b);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_max_u64`](#fn-fut-max-u64)

<a id="fn-fut-max-u64"></a>

> ## `fut_max_u64`

> Provides the module's **fut max u64** operation. Returns `u64`.

```valor
public u64 fut_max_u64(u64 a, u64 b)
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
> u64 result = std::concurrent::futures::fut_max_u64(a, b);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-fut-min-i64"></a>

> ## `fut_min_i64`

> Provides the module's **fut min i64** operation. Returns `i64`.

```valor
public i64 fut_min_i64(i64 a, i64 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: i64 (by value)
> - `b`: i64 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::concurrent::futures::fut_min_i64(a, b);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-fut-max-i64"></a>

> ## `fut_max_i64`

> Provides the module's **fut max i64** operation. Returns `i64`.

```valor
public i64 fut_max_i64(i64 a, i64 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: i64 (by value)
> - `b`: i64 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::concurrent::futures::fut_max_i64(a, b);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-fut-mod-usize"></a>

> ## `fut_mod_usize`

> Truncating modulo (Valor has no % operator).

```valor
public usize fut_mod_usize(usize a, usize b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: usize (by value)
> - `b`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::concurrent::futures::fut_mod_usize(a, b);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-fut-ceil-div"></a>

> ## `fut_ceil_div`

> Ceil(a / b), b > 0 guaranteed by the caller.

```valor
public usize fut_ceil_div(usize a, usize b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: usize (by value)
> - `b`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::concurrent::futures::fut_ceil_div(a, b);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-fut-ring-slot"></a>

> ## `fut_ring_slot`

> Ring-buffer slot for a monotone sequence number without a bitwise mask.

```valor
public usize fut_ring_slot(u64 sequence, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `sequence`: u64 (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::concurrent::futures::fut_ring_slot(sequence, capacity);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-future-state-is-terminal"></a>

> ## `future_state_is_terminal`

> A state is terminal iff it is one of {succeeded, failed, cancelled} = [2,4].

```valor
public bool future_state_is_terminal(u8 state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::future_state_is_terminal(state);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-future-state-is-done"></a>

> ## `future_state_is_done`

> isDone() -- the spec treats every terminal state as done.

```valor
public bool future_state_is_done(u8 state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::future_state_is_done(state);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-future-state-is-pending"></a>

> ## `future_state_is_pending`

> Provides the module's **future state is pending** operation. Returns `bool`.

```valor
public bool future_state_is_pending(u8 state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::future_state_is_pending(state);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-future-state-is-running"></a>

> ## `future_state_is_running`

> Provides the module's **future state is running** operation. Returns `bool`.

```valor
public bool future_state_is_running(u8 state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::future_state_is_running(state);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-future-state-is-success"></a>

> ## `future_state_is_success`

> Provides the module's **future state is success** operation. Returns `bool`.

```valor
public bool future_state_is_success(u8 state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::future_state_is_success(state);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-future-state-is-failure"></a>

> ## `future_state_is_failure`

> Provides the module's **future state is failure** operation. Returns `bool`.

```valor
public bool future_state_is_failure(u8 state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::future_state_is_failure(state);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-future-state-is-cancelled"></a>

> ## `future_state_is_cancelled`

> Provides the module's **future state is cancelled** operation. Returns `bool`.

```valor
public bool future_state_is_cancelled(u8 state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::future_state_is_cancelled(state);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-future-state-transition-is-legal"></a>

> ## `future_state_transition_is_legal`

> Monotone-transition legality (spec 4.1 / 20 monotonicity). Monotone-transition legality (spec 4.1 / 20 monotonicity).  A future never leaves a terminal state, only moves forward from pending, and may go from running only to a terminal state.

```valor
public bool future_state_transition_is_legal(u8 from, u8 to)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `from`: u8 (by value)
> - `to`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::future_state_transition_is_legal(from, to);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-future-advance-state"></a>

> ## `future_advance_state`

> Deterministic monotone advance via a caller compare-exchange on the state cell. Deterministic monotone advance via a caller compare-exchange on the state cell.  Loads the current state, checks legality, and attempts one CAS to the target terminal / running state.  Returns OK on success, ERR_BUSY when the CAS lost the race, ERR_INVALID for an illegal transition.

```valor
public i32 future_advance_state(( ) -> u8 load_state, (u8, u8) -> bool cas_state, u8 target)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `u8`: ( ) -> u8 load_state, ( (borrowed fn-ptr (callback))
> - `target`: u8) -> bool cas_state, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::future_advance_state(u8, target);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-promise-is-settled"></a>

> ## `promise_is_settled`

> Provides the module's **promise is settled** operation. Returns `bool`.

```valor
public bool promise_is_settled(( ) -> u8 load_state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `load_state`: ( ) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::promise_is_settled(load_state);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-promise-try-complete"></a>

> ## `promise_try_complete`

> Try to settle the paired future into `terminal_state` (succeeded / failed / cancelled). Try to settle the paired future into `terminal_state` (succeeded / failed / cancelled).  publish_value stores the result payload / error before the state becomes visible.  Returns a COMPLETE_* code.

```valor
public u8 promise_try_complete(( ) -> u8 load_state, (u8, u8) -> bool cas_state, ( ) -> void publish_value, u8 terminal_state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `u8`: ( ) -> u8 load_state, ( (borrowed fn-ptr (callback))
> - `terminal_state`: u8) -> bool cas_state, ( ) -> void publish_value, u8 (borrowed fn-ptr (callback))

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::concurrent::futures::promise_try_complete(u8, terminal_state);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-promise-try-succeed"></a>

> ## `promise_try_succeed`

> Provides the module's **promise try succeed** operation. Returns `u8`.

```valor
public u8 promise_try_succeed(( ) -> u8 load_state, (u8, u8) -> bool cas_state, ( ) -> void publish_value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `u8`: ( ) -> u8 load_state, ( (borrowed fn-ptr (callback))
> - `publish_value`: u8) -> bool cas_state, ( ) -> void (borrowed fn-ptr (callback))

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::concurrent::futures::promise_try_succeed(u8, publish_value);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-promise-try-fail"></a>

> ## `promise_try_fail`

> Provides the module's **promise try fail** operation. Returns `u8`.

```valor
public u8 promise_try_fail(( ) -> u8 load_state, (u8, u8) -> bool cas_state, ( ) -> void publish_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `u8`: ( ) -> u8 load_state, ( (borrowed fn-ptr (callback))
> - `publish_error`: u8) -> bool cas_state, ( ) -> void (borrowed fn-ptr (callback))

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::concurrent::futures::promise_try_fail(u8, publish_error);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-promise-try-cancel"></a>

> ## `promise_try_cancel`

> Provides the module's **promise try cancel** operation. Returns `u8`.

```valor
public u8 promise_try_cancel(( ) -> u8 load_state, (u8, u8) -> bool cas_state, ( ) -> void publish_reason)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `u8`: ( ) -> u8 load_state, ( (borrowed fn-ptr (callback))
> - `publish_reason`: u8) -> bool cas_state, ( ) -> void (borrowed fn-ptr (callback))

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::concurrent::futures::promise_try_cancel(u8, publish_reason);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-completion-key-compare"></a>

> ## `completion_key_compare`

> Provides the module's **completion key compare** operation. Returns `i32`.

```valor
public i32 completion_key_compare(u64 a_epoch, u64 a_tag, u64 a_submit, u64 b_epoch, u64 b_tag, u64 b_submit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a_epoch`: u64 (by value)
> - `a_tag`: u64 (by value)
> - `a_submit`: u64 (by value)
> - `b_epoch`: u64 (by value)
> - `b_tag`: u64 (by value)
> - `b_submit`: u64 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::completion_key_compare(a_epoch, a_tag, a_submit, b_epoch, b_tag, b_submit);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-completion-key-less"></a>

> ## `completion_key_less`

> Provides the module's **completion key less** operation. Returns `bool`.

```valor
public bool completion_key_less(u64 a_epoch, u64 a_tag, u64 a_submit, u64 b_epoch, u64 b_tag, u64 b_submit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a_epoch`: u64 (by value)
> - `a_tag`: u64 (by value)
> - `a_submit`: u64 (by value)
> - `b_epoch`: u64 (by value)
> - `b_tag`: u64 (by value)
> - `b_submit`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::completion_key_less(a_epoch, a_tag, a_submit, b_epoch, b_tag, b_submit);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-wait-all-is-satisfied"></a>

> ## `wait_all_is_satisfied`

> waitAll predicate: true iff every future in the dense set is terminal.

```valor
public bool wait_all_is_satisfied(usize count, (usize) -> u8 read_state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `read_state`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::wait_all_is_satisfied(count, read_state);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-wait-all"></a>

> ## `wait_all`

> waitAll: OK once every future is terminal, ERR_BUSY while any is pending.

```valor
public i32 wait_all(usize count, (usize) -> u8 read_state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `read_state`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::wait_all(count, read_state);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-wait-any"></a>

> ## `wait_any`

> waitAny under canonical tie-breaking: scan the dense set for terminal futures and report the one with the smallest CompletionKey. waitAny under canonical tie-breaking: scan the dense set for terminal futures and report the one with the smallest CompletionKey.  receive_index gets the winning index (NO_INDEX when none is terminal yet).  Deterministic even when several futures completed in the same epoch.

```valor
public i32 wait_any(usize count, (usize) -> u8 read_state, (usize) -> u64 read_epoch, (usize) -> u64 read_tag, (usize) -> u64 read_submit, (usize) -> void receive_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `receive_index`: (usize) -> u8 read_state, (usize) -> u64 read_epoch, (usize) -> u64 read_tag, (usize) -> u64 read_submit, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::wait_any(count, receive_index);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-wait"></a>

> ## `wait`

> wait(WaitMode): evaluate a wait predicate over the set and, for the "first" modes, report the winning index (canonical tie-break) through receive_index. wait(WaitMode): evaluate a wait predicate over the set and, for the "first" modes, report the winning index (canonical tie-break) through receive_index. Returns OK when the mode's condition is met, ERR_BUSY otherwise.

```valor
public i32 wait(u8 mode, usize count, (usize) -> u8 read_state, (usize) -> u64 read_epoch, (usize) -> u64 read_tag, (usize) -> u64 read_submit, (usize) -> void receive_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `mode`: u8 (by value)
> - `count`: usize (by value)
> - `receive_index`: (usize) -> u8 read_state, (usize) -> u64 read_epoch, (usize) -> u64 read_tag, (usize) -> u64 read_submit, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::wait(mode, count, receive_index);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-as-completed-next"></a>

> ## `as_completed_next`

> Provides the module's **as completed next** operation. Returns `i32`.

```valor
public i32 as_completed_next(usize count, (usize) -> u8 read_state, (usize) -> bool read_emitted, (usize) -> u64 read_epoch, (usize) -> u64 read_tag, (usize) -> u64 read_submit, (usize) -> void receive_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `receive_index`: (usize) -> u8 read_state, (usize) -> bool read_emitted, (usize) -> u64 read_epoch, (usize) -> u64 read_tag, (usize) -> u64 read_submit, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::as_completed_next(count, receive_index);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-as-completed-drive"></a>

> ## `as_completed_drive`

> Drive asCompleted to completion: repeatedly select the canonical next terminal future and hand it to `emit`, marking it via mark_emitted, until the whole set has been yielded in completion order. Drive asCompleted to completion: repeatedly select the canonical next terminal future and hand it to `emit`, marking it via mark_emitted, until the whole set has been yielded in completion order.  Deterministic tie-break.

```valor
public i32 as_completed_drive(usize count, (usize) -> u8 read_state, (usize) -> bool read_emitted, (usize) -> void mark_emitted, (usize) -> u64 read_epoch, (usize) -> u64 read_tag, (usize) -> u64 read_submit, (usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `emit`: (usize) -> u8 read_state, (usize) -> bool read_emitted, (usize) -> void mark_emitted, (usize) -> u64 read_epoch, (usize) -> u64 read_tag, (usize) -> u64 read_submit, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::as_completed_drive(count, emit);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-map-ordered-result-index"></a>

> ## `map_ordered_result_index`

> The ordered-map refinement invariant: result slot i always corresponds to input slot i. The ordered-map refinement invariant: result slot i always corresponds to input slot i.  This is the identity map, exposed as a checkable function.

```valor
public usize map_ordered_result_index(usize input_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `input_index`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::concurrent::futures::map_ordered_result_index(input_index);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-map-ordered-collect"></a>

> ## `map_ordered_collect`

> mapOrdered collection: deliver terminal results in submission (input) order, index i -> input i. mapOrdered collection: deliver terminal results in submission (input) order, index i -> input i.  Successful values go to receive_value(i, value); failed or cancelled slots go to receive_error(i, state).  Returns ERR_BUSY if any slot is not yet terminal (ordered delivery requires the whole prefix).

```valor
public i32 map_ordered_collect(usize count, (usize) -> u8 read_state, (usize) -> i64 read_value, (usize, i64) -> void receive_value, (usize, u8) -> void receive_error)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `receive_error`: (usize) -> u8 read_state, (usize) -> i64 read_value, (usize, i64) -> void receive_value, (usize, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::map_ordered_collect(count, receive_error);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-map-unordered-collect"></a>

> ## `map_unordered_collect`

> mapUnordered collection: deliver terminal results in canonical completion order (spec 8), successful values via receive_value(input_index, value). mapUnordered collection: deliver terminal results in canonical completion order (spec 8), successful values via receive_value(input_index, value).  A thin wrapper over the asCompleted driver so both share one tie-break rule.

```valor
public i32 map_unordered_collect(usize count, (usize) -> u8 read_state, (usize) -> bool read_emitted, (usize) -> void mark_emitted, (usize) -> u64 read_epoch, (usize) -> u64 read_tag, (usize) -> u64 read_submit, (usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `emit`: (usize) -> u8 read_state, (usize) -> bool read_emitted, (usize) -> void mark_emitted, (usize) -> u64 read_epoch, (usize) -> u64 read_tag, (usize) -> u64 read_submit, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::map_unordered_collect(count, emit);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-gather"></a>

> ## `gather`

> gather: collect typed successful values under a GatherPolicy. gather: collect typed successful values under a GatherPolicy.  Successful values are delivered in submission order via receive_value(i, value). * GATHER_FAIL_FAST     -> stop and return ERR_BUSY at the first failure, reporting the failing index through receive_fail. * GATHER_COLLECT_ERRORS-> report each failure via receive_fail, keep going. * GATHER_SKIP_ERRORS   -> silently drop failures. Requires every future terminal (ERR_BUSY otherwise, before any delivery of a trailing slot).  Caller-owned result storage -- no allocation here (spec 9).

```valor
public i32 gather(usize count, u8 policy, (usize) -> u8 read_state, (usize) -> i64 read_value, (usize, i64) -> void receive_value, (usize, u8) -> void receive_fail)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `policy`: u8 (by value)
> - `receive_fail`: (usize) -> u8 read_state, (usize) -> i64 read_value, (usize, i64) -> void receive_value, (usize, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::gather(count, policy, receive_fail);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-race"></a>

> ## `race`

> race: return the first result per policy, canonical tie-break. race: return the first result per policy, canonical tie-break. * RACE_FIRST_SUCCESS  -> smallest-key successful future. * RACE_FIRST_TERMINAL -> smallest-key terminal future (any outcome). receive_index gets the winner (NO_INDEX when no qualifying future exists).

```valor
public i32 race(usize count, u8 policy, (usize) -> u8 read_state, (usize) -> u64 read_epoch, (usize) -> u64 read_tag, (usize) -> u64 read_submit, (usize) -> void receive_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `policy`: u8 (by value)
> - `receive_index`: (usize) -> u8 read_state, (usize) -> u64 read_epoch, (usize) -> u64 read_tag, (usize) -> u64 read_submit, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::race(count, policy, receive_index);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-cancel-future"></a>

> ## `cancel_future`

> Deterministic single-future cancellation. Deterministic single-future cancellation.  Maps the current state to a CANCEL_* result and, for a queued (pending) task, attempts the atomic transition to cancelled so the task never begins (spec 20).  A running task only gets a cooperative request; a terminal future is already resolved.

```valor
public u8 cancel_future(( ) -> u8 load_state, (u8, u8) -> bool cas_state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `u8`: ( ) -> u8 load_state, ( (borrowed fn-ptr (callback))
> - `cas_state`: u8) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::concurrent::futures::cancel_future(u8, cas_state);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-cancel-all"></a>

> ## `cancel_all`

> cancelAll over a bounded future span; reports each per-future CANCEL_* result via receive_result(i, code). cancelAll over a bounded future span; reports each per-future CANCEL_* result via receive_result(i, code).  Returns the count of futures whose queued task was cancelled before start.

```valor
public i32 cancel_all(usize count, (usize) -> u8 load_state_at, (usize, u8, u8) -> bool cas_state_at, (usize, u8) -> void receive_result)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `usize`: (usize) -> u8 load_state_at, ( (borrowed fn-ptr (callback))
> - `u8`: u8 (by value)
> - `receive_result`: u8) -> bool cas_state_at, (usize, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::cancel_all(count, usize, u8, receive_result);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-deadline-is-exceeded"></a>

> ## `deadline_is_exceeded`

> A deadline is exceeded when the logical `now` has reached it, but only when both timestamps share a clock domain; a domain mismatch is never "exceeded". A deadline is exceeded when the logical `now` has reached it, but only when both timestamps share a clock domain; a domain mismatch is never "exceeded".

```valor
public bool deadline_is_exceeded(i64 now, i64 deadline, u8 now_domain, u8 deadline_domain)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `now`: i64 (by value)
> - `deadline`: i64 (by value)
> - `now_domain`: u8 (by value)
> - `deadline_domain`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::deadline_is_exceeded(now, deadline, now_domain, deadline_domain);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-deadline-compare"></a>

> ## `deadline_compare`

> Provides the module's **deadline compare** operation. Returns `i32`.

```valor
public i32 deadline_compare(i64 a, i64 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: i64 (by value)
> - `b`: i64 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::deadline_compare(a, b);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-deadline-remaining"></a>

> ## `deadline_remaining`

> Remaining logical budget (clamped at zero; never negative).

```valor
public i64 deadline_remaining(i64 now, i64 deadline)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `now`: i64 (by value)
> - `deadline`: i64 (by value)

> ### RETURNS (i64)

> ### EXAMPLE
>
> ```valor
> i64 result = std::concurrent::futures::deadline_remaining(now, deadline);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-admission-is-open"></a>

> ## `admission_is_open`

> Only the OPEN admission state admits new tasks.

```valor
public bool admission_is_open(u8 admission_state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `admission_state`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::admission_is_open(admission_state);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-shutdown-target-state"></a>

> ## `shutdown_target_state`

> The target admission state a shutdown mode drives the executor into.

```valor
public u8 shutdown_target_state(u8 mode)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `mode`: u8 (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::concurrent::futures::shutdown_target_state(mode);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-shutdown-begin"></a>

> ## `shutdown_begin`

> Begin structured shutdown by closing admission via a caller CAS from the current admission state to the mode's target state. Begin structured shutdown by closing admission via a caller CAS from the current admission state to the mode's target state.  Idempotent: a second shutdown that finds admission already closed returns OK.  Returns ERR_BUSY when the CAS loses to a concurrent shutdown.

```valor
public i32 shutdown_begin(( ) -> u8 load_admission, (u8, u8) -> bool cas_admission, u8 mode)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `u8`: ( ) -> u8 load_admission, ( (borrowed fn-ptr (callback))
> - `mode`: u8) -> bool cas_admission, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::shutdown_begin(u8, mode);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-shutdown-now"></a>

> ## `shutdown_now`

> shutdownNow: platform best-effort emergency termination. shutdownNow: platform best-effort emergency termination.  Never described as deterministic -- it only forces the admission state to CLOSED and reports the best-effort code.  Any in-flight work outcome is platform-defined.

```valor
public i32 shutdown_now((u8) -> void store_admission)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `store_admission`: (u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::shutdown_now(store_admission);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-admission-try-push"></a>

> ## `admission_try_push`

> Non-blocking admission push (trySubmit semantics: explicit saturation).

```valor
public i32 admission_try_push(usize capacity, usize retry_limit, ( ) -> u64 load_enqueue_pos, (usize) -> u64 load_slot_seq, (u64, u64) -> bool cas_enqueue_pos, (usize, u64) -> void store_slot_seq, (usize) -> void write_payload, (usize) -> void receive_slot)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `retry_limit`: usize (by value)
> - `receive_slot`: ( ) -> u64 load_enqueue_pos, (usize) -> u64 load_slot_seq, (u64, u64) -> bool cas_enqueue_pos, (usize, u64) -> void store_slot_seq, (usize) -> void write_payload, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::admission_try_push(capacity, retry_limit, receive_slot);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-admission-try-pop"></a>

> ## `admission_try_pop`

> Non-blocking admission pop (worker acquires the next task).

```valor
public i32 admission_try_pop(usize capacity, usize retry_limit, ( ) -> u64 load_dequeue_pos, (usize) -> u64 load_slot_seq, (u64, u64) -> bool cas_dequeue_pos, (usize, u64) -> void store_slot_seq, (usize) -> void read_payload, (usize) -> void receive_slot)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `retry_limit`: usize (by value)
> - `receive_slot`: ( ) -> u64 load_dequeue_pos, (usize) -> u64 load_slot_seq, (u64, u64) -> bool cas_dequeue_pos, (usize, u64) -> void store_slot_seq, (usize) -> void read_payload, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::admission_try_pop(capacity, retry_limit, receive_slot);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-admission-pending-count"></a>

> ## `admission_pending_count`

> Current queue occupancy from the two monotone counters (enqueue >= dequeue invariant holds, so the subtraction never underflows). Current queue occupancy from the two monotone counters (enqueue >= dequeue invariant holds, so the subtraction never underflows).

```valor
public u64 admission_pending_count(u64 enqueue_pos, u64 dequeue_pos)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `enqueue_pos`: u64 (by value)
> - `dequeue_pos`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::concurrent::futures::admission_pending_count(enqueue_pos, dequeue_pos);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-admission-is-full"></a>

> ## `admission_is_full`

> True when the ring is at capacity (a plain push would return ERR_FULL).

```valor
public bool admission_is_full(u64 enqueue_pos, u64 dequeue_pos, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `enqueue_pos`: u64 (by value)
> - `dequeue_pos`: u64 (by value)
> - `capacity`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::admission_is_full(enqueue_pos, dequeue_pos, capacity);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-admission-batch-reserve"></a>

> ## `admission_batch_reserve`

> submitBatch: reserve a contiguous block of `n` slots in one admission transaction. submitBatch: reserve a contiguous block of `n` slots in one admission transaction.  Fails atomically (ERR_FULL) unless the whole block fits under capacity, then advances the enqueue counter by n via one CAS and reports the reserved base position through receive_base.  Callers then fill positions base .. base+n-1.  Bounded: occupancy after the reservation is <= capacity.

```valor
public i32 admission_batch_reserve(usize n, usize capacity, usize retry_limit, ( ) -> u64 load_enqueue_pos, ( ) -> u64 load_dequeue_pos, (u64, u64) -> bool cas_enqueue_pos, (u64) -> void receive_base)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value)
> - `capacity`: usize (by value)
> - `retry_limit`: usize (by value)
> - `receive_base`: ( ) -> u64 load_enqueue_pos, ( ) -> u64 load_dequeue_pos, (u64, u64) -> bool cas_enqueue_pos, (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::admission_batch_reserve(n, capacity, retry_limit, receive_base);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-admission-policy-is-valid"></a>

> ## `admission_policy_is_valid`

> Provides the module's **admission policy is valid** operation. Returns `bool`.

```valor
public bool admission_policy_is_valid(u8 policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `policy`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::admission_policy_is_valid(policy);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-admission-resolve"></a>

> ## `admission_resolve`

> Resolve one admission attempt under `policy`. Resolve one admission attempt under `policy`.  is_closed short-circuits to ERR_CLOSED so a shut-down executor admits nothing (spec 20 shutdown safety). try_push_once() performs a single bounded ring push and returns its status; deadline_reached() reports whether a logical deadline has expired (used only by ADMIT_BLOCK_UNTIL_DEADLINE).  ADMIT_RUN_INLINE is reported, never executed here, because inline execution changes reentrancy / stack behavior (spec 12).

```valor
public i32 admission_resolve(u8 policy, bool is_closed, usize retry_limit, ( ) -> i32 try_push_once, ( ) -> bool deadline_reached)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `policy`: u8 (by value)
> - `is_closed`: bool (by value)
> - `retry_limit`: usize (by value)
> - `deadline_reached`: ( ) -> i32 try_push_once, ( ) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::admission_resolve(policy, is_closed, retry_limit, deadline_reached);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-admission-heap-push"></a>

> ## `admission_heap_push`

> Sift up the last element after the caller appended it (logical size = new_size, new element at index new_size - 1). Sift up the last element after the caller appended it (logical size = new_size, new element at index new_size - 1).

```valor
public i32 admission_heap_push(usize new_size, (usize, usize) -> i32 compare, (usize, usize) -> void swap)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `new_size`: usize (by value)
> - `usize`: (usize, usize) -> i32 compare, ( (borrowed fn-ptr (callback))
> - `swap`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::admission_heap_push(new_size, usize, swap);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-admission-heap-pop"></a>

> ## `admission_heap_pop`

> Pop the highest-priority element: swap root with the last slot (caller then drops the last slot, logical size becomes size - 1) and sift the new root down through the remaining `size - 1` elements. Pop the highest-priority element: swap root with the last slot (caller then drops the last slot, logical size becomes size - 1) and sift the new root down through the remaining `size - 1` elements.

```valor
public i32 admission_heap_pop(usize size, (usize, usize) -> i32 compare, (usize, usize) -> void swap)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `size`: usize (by value)
> - `usize`: (usize, usize) -> i32 compare, ( (borrowed fn-ptr (callback))
> - `swap`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::admission_heap_pop(size, usize, swap);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-executor-stats"></a>

> ## `executor_stats`

> Deliver the bounded telemetry tuple through a receive callback (the module constructs no ExecutorStats value). Deliver the bounded telemetry tuple through a receive callback (the module constructs no ExecutorStats value).  Fields mirror ExecutorStats.

```valor
public i32 executor_stats(u64 submitted, u64 completed, u64 failed, u64 cancelled, u64 queued, u64 running, u32 worker_count, u32 queue_capacity, (u64, u64, u64, u64, u64, u64, u32, u32) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `submitted`: u64 (by value)
> - `completed`: u64 (by value)
> - `failed`: u64 (by value)
> - `cancelled`: u64 (by value)
> - `queued`: u64 (by value)
> - `running`: u64 (by value)
> - `worker_count`: u32 (by value)
> - `queue_capacity`: u32 (by value)
> - `receive`: (u64, u64, u64, u64, u64, u64, u32, u32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::executor_stats(submitted, completed, failed, cancelled, queued, running, worker_count, queue_capacity, receive);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-executor-capacity"></a>

> ## `executor_capacity`

> Report worker and queue capacity (spec 8 capacity).

```valor
public i32 executor_capacity(u32 worker_count, u32 queue_capacity, (u32, u32) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `worker_count`: u32 (by value)
> - `queue_capacity`: u32 (by value)
> - `receive`: (u32, u32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::executor_capacity(worker_count, queue_capacity, receive);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-executor-pending-count"></a>

> ## `executor_pending_count`

> Provides the module's **executor pending count** operation. Returns `u64`.

```valor
public u64 executor_pending_count(u64 enqueue_pos, u64 dequeue_pos)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `enqueue_pos`: u64 (by value)
> - `dequeue_pos`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::concurrent::futures::executor_pending_count(enqueue_pos, dequeue_pos);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-executor-running-count"></a>

> ## `executor_running_count`

> Running count = admitted - completed - failed - cancelled - queued, clamped.

```valor
public u64 executor_running_count(u64 admitted, u64 completed, u64 failed, u64 cancelled, u64 queued)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `admitted`: u64 (by value)
> - `completed`: u64 (by value)
> - `failed`: u64 (by value)
> - `cancelled`: u64 (by value)
> - `queued`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::concurrent::futures::executor_running_count(admitted, completed, failed, cancelled, queued);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-executor-is-saturated"></a>

> ## `executor_is_saturated`

> True when the queue is saturated relative to its bounded capacity.

```valor
public bool executor_is_saturated(u64 queued, u32 queue_capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `queued`: u64 (by value)
> - `queue_capacity`: u32 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::executor_is_saturated(queued, queue_capacity);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-task-error-encode"></a>

> ## `task_error_encode`

> Provides the module's **task error encode** operation. Returns `u64`.

```valor
public u64 task_error_encode(u16 kind, u32 code)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u16 (by value)
> - `code`: u32 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::concurrent::futures::task_error_encode(kind, code);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-task-error-kind"></a>

> ## `task_error_kind`

> Provides the module's **task error kind** operation. Returns `u16`.

```valor
public u16 task_error_kind(u64 encoded)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `encoded`: u64 (by value)

> ### RETURNS (u16)

> ### EXAMPLE
>
> ```valor
> u16 result = std::concurrent::futures::task_error_kind(encoded);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-task-error-code"></a>

> ## `task_error_code`

> Provides the module's **task error code** operation. Returns `u32`.

```valor
public u32 task_error_code(u64 encoded)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `encoded`: u64 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::concurrent::futures::task_error_code(encoded);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-task-error-kind-preserved"></a>

> ## `task_error_kind_preserved`

> The stable kind is preserved regardless of any attached supplemental errno: the supplemental value lives in its own channel, so re-decoding the packed error still yields the original classification (spec 14). The stable kind is preserved regardless of any attached supplemental errno: the supplemental value lives in its own channel, so re-decoding the packed error still yields the original classification (spec 14).

```valor
public bool task_error_kind_preserved(u64 encoded, u16 original_kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `encoded`: u64 (by value)
> - `original_kind`: u16 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::task_error_kind_preserved(encoded, original_kind);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-task-error-from-cancellation"></a>

> ## `task_error_from_cancellation`

> Classification helpers for the outcomes this module can name directly.

```valor
public u64 task_error_from_cancellation()
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
> u64 result = std::concurrent::futures::task_error_from_cancellation();
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-task-error-from-deadline"></a>

> ## `task_error_from_deadline`

> Provides the module's **task error from deadline** operation. Returns `u64`.

```valor
public u64 task_error_from_deadline()
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
> u64 result = std::concurrent::futures::task_error_from_deadline();
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-task-error-from-queue-full"></a>

> ## `task_error_from_queue_full`

> Provides the module's **task error from queue full** operation. Returns `u64`.

```valor
public u64 task_error_from_queue_full()
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
> u64 result = std::concurrent::futures::task_error_from_queue_full();
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-task-error-from-executor-closed"></a>

> ## `task_error_from_executor_closed`

> Provides the module's **task error from executor closed** operation. Returns `u64`.

```valor
public u64 task_error_from_executor_closed()
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
> u64 result = std::concurrent::futures::task_error_from_executor_closed();
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-task-error-from-worker-crash"></a>

> ## `task_error_from_worker_crash`

> Provides the module's **task error from worker crash** operation. Returns `u64`.

```valor
public u64 task_error_from_worker_crash()
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
> u64 result = std::concurrent::futures::task_error_from_worker_crash();
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-task-error-is-worker-fault"></a>

> ## `task_error_is_worker_fault`

> True for error kinds a process-pool backend raises about worker health.

```valor
public bool task_error_is_worker_fault(u16 kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u16 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::task_error_is_worker_fault(kind);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-task-error-is-transport-fault"></a>

> ## `task_error_is_transport_fault`

> True for transport / serialization / protocol failures (process transfer).

```valor
public bool task_error_is_transport_fault(u16 kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u16 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::task_error_is_transport_fault(kind);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-task-error-kind-for-state"></a>

> ## `task_error_kind_for_state`

> Map a terminal future state to its canonical error kind (for failed / cancelled outcomes); a successful state has no error and returns NONE-like callableFailed=0 only when the caller already knows it failed. Map a terminal future state to its canonical error kind (for failed / cancelled outcomes); a successful state has no error and returns NONE-like callableFailed=0 only when the caller already knows it failed.

```valor
public u16 task_error_kind_for_state(u8 state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state`: u8 (by value)

> ### RETURNS (u16)

> ### EXAMPLE
>
> ```valor
> u16 result = std::concurrent::futures::task_error_kind_for_state(state);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-transfer-encode-le"></a>

> ## `transfer_encode_le`

> Little-endian encode `width` (1..8) low bytes of `value` via write_byte(k, b).

```valor
public i32 transfer_encode_le(u64 value, usize width, (usize, u8) -> void write_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)
> - `width`: usize (by value)
> - `write_byte`: (usize, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::transfer_encode_le(value, width, write_byte);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-transfer-decode-le"></a>

> ## `transfer_decode_le`

> Little-endian decode `width` (1..8) bytes via read_byte(k) into receive(value). Little-endian decode `width` (1..8) bytes via read_byte(k) into receive(value). The place multiplier is only advanced while more bytes remain, so it never reaches 2^64.

```valor
public i32 transfer_decode_le(usize width, (usize) -> u8 read_byte, (u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `width`: usize (by value)
> - `receive`: (usize) -> u8 read_byte, (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::transfer_decode_le(width, receive);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-transfer-schema-matches"></a>

> ## `transfer_schema_matches`

> Schema identity check (spec 18): a received message decodes to the declared task schema only when the canonical type id, field-order hash, wire width, and endianness all match. Schema identity check (spec 18): a received message decodes to the declared task schema only when the canonical type id, field-order hash, wire width, and endianness all match.  An unknown or incompatible variant is rejected.

```valor
public bool transfer_schema_matches(u64 local_type_id, u64 local_field_hash, u32 local_width, u8 local_endianness, u64 msg_type_id, u64 msg_field_hash, u32 msg_width, u8 msg_endianness)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `local_type_id`: u64 (by value)
> - `local_field_hash`: u64 (by value)
> - `local_width`: u32 (by value)
> - `local_endianness`: u8 (by value)
> - `msg_type_id`: u64 (by value)
> - `msg_field_hash`: u64 (by value)
> - `msg_width`: u32 (by value)
> - `msg_endianness`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::transfer_schema_matches(local_type_id, local_field_hash, local_width, local_endianness, msg_type_id, msg_field_hash, msg_width, msg_endianness);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-transfer-accept-message"></a>

> ## `transfer_accept_message`

> Reject an incoming message whose schema does not match: returns OK to accept, ERR_PROTOCOL to reject an unknown / incompatible variant (spec 18 / 20 process protocol type safety). Reject an incoming message whose schema does not match: returns OK to accept, ERR_PROTOCOL to reject an unknown / incompatible variant (spec 18 / 20 process protocol type safety).

```valor
public i32 transfer_accept_message(u64 local_type_id, u64 local_field_hash, u32 local_width, u8 local_endianness, u64 msg_type_id, u64 msg_field_hash, u32 msg_width, u8 msg_endianness)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `local_type_id`: u64 (by value)
> - `local_field_hash`: u64 (by value)
> - `local_width`: u32 (by value)
> - `local_endianness`: u8 (by value)
> - `msg_type_id`: u64 (by value)
> - `msg_field_hash`: u64 (by value)
> - `msg_width`: u32 (by value)
> - `msg_endianness`: u8 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::transfer_accept_message(local_type_id, local_field_hash, local_width, local_endianness, msg_type_id, msg_field_hash, msg_width, msg_endianness);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-transfer-handshake-is-compatible"></a>

> ## `transfer_handshake_is_compatible`

> Worker handshake compatibility (spec 18): a worker may accept tasks only when every element of the ABI tuple matches the parent's expectation. Worker handshake compatibility (spec 18): a worker may accept tasks only when every element of the ABI tuple matches the parent's expectation.  Incompatible workers must fail before accepting any task.

```valor
public bool transfer_handshake_is_compatible(u32 compiler_abi, u32 stdlib_abi, u64 target_triple_hash, u64 feature_mask, u64 serializer_hash, u32 want_compiler_abi, u32 want_stdlib_abi, u64 want_triple_hash, u64 want_feature_mask, u64 want_serializer_hash)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `compiler_abi`: u32 (by value)
> - `stdlib_abi`: u32 (by value)
> - `target_triple_hash`: u64 (by value)
> - `feature_mask`: u64 (by value)
> - `serializer_hash`: u64 (by value)
> - `want_compiler_abi`: u32 (by value)
> - `want_stdlib_abi`: u32 (by value)
> - `want_triple_hash`: u64 (by value)
> - `want_feature_mask`: u64 (by value)
> - `want_serializer_hash`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::transfer_handshake_is_compatible(compiler_abi, stdlib_abi, target_triple_hash, feature_mask, serializer_hash, want_compiler_abi, want_stdlib_abi, want_triple_hash, want_feature_mask, want_serializer_hash);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-transfer-worker-admit"></a>

> ## `transfer_worker_admit`

> Gate a worker before task acceptance: OK to accept work, ERR_INCOMPATIBLE to fail closed (spec 18). Gate a worker before task acceptance: OK to accept work, ERR_INCOMPATIBLE to fail closed (spec 18).

```valor
public i32 transfer_worker_admit(u32 compiler_abi, u32 stdlib_abi, u64 target_triple_hash, u64 feature_mask, u64 serializer_hash, u32 want_compiler_abi, u32 want_stdlib_abi, u64 want_triple_hash, u64 want_feature_mask, u64 want_serializer_hash)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `compiler_abi`: u32 (by value)
> - `stdlib_abi`: u32 (by value)
> - `target_triple_hash`: u64 (by value)
> - `feature_mask`: u64 (by value)
> - `serializer_hash`: u64 (by value)
> - `want_compiler_abi`: u32 (by value)
> - `want_stdlib_abi`: u32 (by value)
> - `want_triple_hash`: u64 (by value)
> - `want_feature_mask`: u64 (by value)
> - `want_serializer_hash`: u64 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::transfer_worker_admit(compiler_abi, stdlib_abi, target_triple_hash, feature_mask, serializer_hash, want_compiler_abi, want_stdlib_abi, want_triple_hash, want_feature_mask, want_serializer_hash);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-shared-region-handle-is-valid"></a>

> ## `shared_region_handle_is_valid`

> Shared-memory handle validity (spec 18 / 19): a generation-tagged, bounds- checked handle. Shared-memory handle validity (spec 18 / 19): a generation-tagged, bounds- checked handle.  The [offset, offset+length) window must lie inside the region and the generation must match the live region generation (rejecting stale handles).

```valor
public bool shared_region_handle_is_valid(u64 byte_offset, u64 length, u64 region_length, u64 generation, u64 live_generation)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_offset`: u64 (by value)
> - `length`: u64 (by value)
> - `region_length`: u64 (by value)
> - `generation`: u64 (by value)
> - `live_generation`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::shared_region_handle_is_valid(byte_offset, length, region_length, generation, live_generation);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-worker-count-is-explicit"></a>

> ## `worker_count_is_explicit`

> Worker count must be explicit (non-zero); hardware_concurrency() must not silently change reproducible behavior (spec 6). Worker count must be explicit (non-zero); hardware_concurrency() must not silently change reproducible behavior (spec 6).

```valor
public bool worker_count_is_explicit(u32 worker_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `worker_count`: u32 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::worker_count_is_explicit(worker_count);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-queue-capacity-is-valid"></a>

> ## `queue_capacity_is_valid`

> Provides the module's **queue capacity is valid** operation. Returns `bool`.

```valor
public bool queue_capacity_is_valid(u32 queue_capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `queue_capacity`: u32 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::queue_capacity_is_valid(queue_capacity);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-wait-mode-is-valid"></a>

> ## `wait_mode_is_valid`

> Provides the module's **wait mode is valid** operation. Returns `bool`.

```valor
public bool wait_mode_is_valid(u8 mode)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `mode`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::wait_mode_is_valid(mode);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-queue-discipline-is-valid"></a>

> ## `queue_discipline_is_valid`

> Provides the module's **queue discipline is valid** operation. Returns `bool`.

```valor
public bool queue_discipline_is_valid(u8 discipline)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `discipline`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::queue_discipline_is_valid(discipline);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-determinism-mode-is-valid"></a>

> ## `determinism_mode_is_valid`

> Provides the module's **determinism mode is valid** operation. Returns `bool`.

```valor
public bool determinism_mode_is_valid(u8 determinism)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `determinism`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::determinism_mode_is_valid(determinism);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-strict-mode-admits-policy"></a>

> ## `strict_mode_admits_policy`

> dropLowestPriority is excluded from strict deterministic mode unless the task priority and all tie-break keys are part of the canonical input (spec 12). dropLowestPriority is excluded from strict deterministic mode unless the task priority and all tie-break keys are part of the canonical input (spec 12).

```valor
public bool strict_mode_admits_policy(u8 policy, u8 determinism, bool keys_canonical)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `policy`: u8 (by value)
> - `determinism`: u8 (by value)
> - `keys_canonical`: bool (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::strict_mode_admits_policy(policy, determinism, keys_canonical);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-strict-mode-admits-discipline"></a>

> ## `strict_mode_admits_discipline`

> deterministicWorkStealing needs a specified canonical victim order and a stable externally-observable completion order in strict mode (spec 6 / 12). deterministicWorkStealing needs a specified canonical victim order and a stable externally-observable completion order in strict mode (spec 6 / 12).

```valor
public bool strict_mode_admits_discipline(u8 discipline, u8 determinism, bool canonical_victim_order)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `discipline`: u8 (by value)
> - `determinism`: u8 (by value)
> - `canonical_victim_order`: bool (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::strict_mode_admits_discipline(discipline, determinism, canonical_victim_order);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-run-inline-is-permitted"></a>

> ## `run_inline_is_permitted`

> runInline changes reentrancy and stack behavior and therefore must be opt-in (spec 12): it is admissible only when the caller explicitly enabled it. runInline changes reentrancy and stack behavior and therefore must be opt-in (spec 12): it is admissible only when the caller explicitly enabled it.

```valor
public bool run_inline_is_permitted(u8 policy, bool opt_in)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `policy`: u8 (by value)
> - `opt_in`: bool (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::run_inline_is_permitted(policy, opt_in);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-work-stealing-allowed"></a>

> ## `work_stealing_allowed`

> Work stealing must be disabled in strict deterministic mode unless the stealing protocol has a specified canonical victim order (spec 6). Work stealing must be disabled in strict deterministic mode unless the stealing protocol has a specified canonical victim order (spec 6).

```valor
public bool work_stealing_allowed(u8 determinism, bool allow_flag, bool canonical_victim_order)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `determinism`: u8 (by value)
> - `allow_flag`: bool (by value)
> - `canonical_victim_order`: bool (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::work_stealing_allowed(determinism, allow_flag, canonical_victim_order);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-thread-pool-config-is-reproducible"></a>

> ## `thread_pool_config_is_reproducible`

> Aggregate reproducible-configuration check for a thread pool (spec 6 / 11).

```valor
public bool thread_pool_config_is_reproducible(u32 worker_count, u32 queue_capacity, u8 discipline, u8 admission, u8 determinism, bool keys_canonical, bool canonical_victim_order, bool run_inline_opt_in)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `worker_count`: u32 (by value)
> - `queue_capacity`: u32 (by value)
> - `discipline`: u8 (by value)
> - `admission`: u8 (by value)
> - `determinism`: u8 (by value)
> - `keys_canonical`: bool (by value)
> - `canonical_victim_order`: bool (by value)
> - `run_inline_opt_in`: bool (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::thread_pool_config_is_reproducible(worker_count, queue_capacity, discipline, admission, determinism, keys_canonical, canonical_victim_order, run_inline_opt_in);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-future-map-propagate"></a>

> ## `future_map_propagate`

> map: transform a successful result, propagate failure / cancellation. map: transform a successful result, propagate failure / cancellation.  When the source is not yet terminal the derived future stays pending (ERR_BUSY).

```valor
public i32 future_map_propagate(u8 source_state, i64 source_value, (i64) -> i64 apply, (u8, i64) -> void publish)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `source_state`: u8 (by value)
> - `source_value`: i64 (by value)
> - `u8`: (i64) -> i64 apply, ( (borrowed fn-ptr (callback))
> - `publish`: i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::future_map_propagate(source_state, source_value, u8, publish);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-future-then-compose-propagate"></a>

> ## `future_then_compose_propagate`

> thenCompose: flatten Future<Future<U>> without blocking a worker. thenCompose: flatten Future<Future<U>> without blocking a worker.  When the outer future succeeded, the derived result is the inner future's outcome; otherwise the outer failure / cancellation propagates.

```valor
public i32 future_then_compose_propagate(u8 outer_state, u8 inner_state, i64 inner_value, (u8, i64) -> void publish)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `outer_state`: u8 (by value)
> - `inner_state`: u8 (by value)
> - `inner_value`: i64 (by value)
> - `publish`: (u8, i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::future_then_compose_propagate(outer_state, inner_state, inner_value, publish);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-future-recover-propagate"></a>

> ## `future_recover_propagate`

> recover: handle a failure, but do not silently convert cancellation unless `converts_cancel` says so (spec 9). recover: handle a failure, but do not silently convert cancellation unless `converts_cancel` says so (spec 9).  A success passes through unchanged.

```valor
public i32 future_recover_propagate(u8 source_state, i64 source_value, u64 source_error, bool converts_cancel, (u64) -> i64 apply_error, (u8, i64) -> void publish)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `source_state`: u8 (by value)
> - `source_value`: i64 (by value)
> - `source_error`: u64 (by value)
> - `converts_cancel`: bool (by value)
> - `u8`: (u64) -> i64 apply_error, ( (borrowed fn-ptr (callback))
> - `publish`: i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::future_recover_propagate(source_state, source_value, source_error, converts_cancel, u8, publish);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-future-with-timeout-propagate"></a>

> ## `future_with_timeout_propagate`

> withTimeout: derive a future that fails with deadlineExceeded if the source is not terminal by the deadline; a terminal source propagates unchanged. withTimeout: derive a future that fails with deadlineExceeded if the source is not terminal by the deadline; a terminal source propagates unchanged.

```valor
public i32 future_with_timeout_propagate(u8 source_state, i64 source_value, i64 now, i64 deadline, u8 now_domain, u8 deadline_domain, (u8, i64) -> void publish)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `source_state`: u8 (by value)
> - `source_value`: i64 (by value)
> - `now`: i64 (by value)
> - `deadline`: i64 (by value)
> - `now_domain`: u8 (by value)
> - `deadline_domain`: u8 (by value)
> - `publish`: (u8, i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::future_with_timeout_propagate(source_state, source_value, now, deadline, now_domain, deadline_domain, publish);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-future-with-cancellation-propagate"></a>

> ## `future_with_cancellation_propagate`

> withCancellation: derive a future cancelled when the token fires, otherwise the source outcome propagates once terminal. withCancellation: derive a future cancelled when the token fires, otherwise the source outcome propagates once terminal.

```valor
public i32 future_with_cancellation_propagate(u8 source_state, i64 source_value, bool token_fired, (u8, i64) -> void publish)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `source_state`: u8 (by value)
> - `source_value`: i64 (by value)
> - `token_fired`: bool (by value)
> - `publish`: (u8, i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::future_with_cancellation_propagate(source_state, source_value, token_fired, publish);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-future-zip-propagate"></a>

> ## `future_zip_propagate`

> zip: combine two sources into a pair; both must succeed. zip: combine two sources into a pair; both must succeed.  left / right identity is preserved regardless of completion order (spec 9).  The first non-success outcome propagates, preferring the left source on ties so the result is deterministic.

```valor
public i32 future_zip_propagate(u8 left_state, i64 left_value, u8 right_state, i64 right_value, (u8, i64, i64) -> void publish)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_state`: u8 (by value)
> - `left_value`: i64 (by value)
> - `right_state`: u8 (by value)
> - `right_value`: i64 (by value)
> - `publish`: (u8, i64, i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::concurrent::futures::future_zip_propagate(left_state, left_value, right_state, right_value, publish);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-invariant-future-monotone"></a>

> ## `invariant_future_monotone`

> Future state monotonicity: each future reaches at most one terminal state and never leaves it -- so any transition out of a terminal state is illegal. Future state monotonicity: each future reaches at most one terminal state and never leaves it -- so any transition out of a terminal state is illegal.

```valor
public bool invariant_future_monotone(u8 from, u8 to)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `from`: u8 (by value)
> - `to`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::invariant_future_monotone(from, to);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-invariant-single-completion"></a>

> ## `invariant_single_completion`

> Single completion: a settle is legal only from a non-terminal state, so a Promise cannot successfully complete more than once. Single completion: a settle is legal only from a non-terminal state, so a Promise cannot successfully complete more than once.

```valor
public bool invariant_single_completion(u8 prev_state, u8 terminal_state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `prev_state`: u8 (by value)
> - `terminal_state`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::invariant_single_completion(prev_state, terminal_state);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-invariant-ordered-map-index"></a>

> ## `invariant_ordered_map_index`

> Ordered-map refinement: result index i corresponds to input index i.

```valor
public bool invariant_ordered_map_index(usize input_index, usize result_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `input_index`: usize (by value)
> - `result_index`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::invariant_ordered_map_index(input_index, result_index);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-invariant-wait-any-deterministic"></a>

> ## `invariant_wait_any_deterministic`

> WaitAny determinism: equal observable completion epochs resolve by the canonical CompletionKey, so two distinct futures never tie under the key. WaitAny determinism: equal observable completion epochs resolve by the canonical CompletionKey, so two distinct futures never tie under the key.

```valor
public bool invariant_wait_any_deterministic(u64 a_epoch, u64 a_tag, u64 a_submit, u64 b_epoch, u64 b_tag, u64 b_submit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a_epoch`: u64 (by value)
> - `a_tag`: u64 (by value)
> - `a_submit`: u64 (by value)
> - `b_epoch`: u64 (by value)
> - `b_tag`: u64 (by value)
> - `b_submit`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::invariant_wait_any_deterministic(a_epoch, a_tag, a_submit, b_epoch, b_tag, b_submit);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-invariant-bounded"></a>

> ## `invariant_bounded`

> Boundedness: queue occupancy never exceeds the configured capacity.

```valor
public bool invariant_bounded(u64 occupancy, u64 capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `occupancy`: u64 (by value)
> - `capacity`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::invariant_bounded(occupancy, capacity);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-invariant-shutdown-no-admit"></a>

> ## `invariant_shutdown_no_admit`

> Shutdown safety: after executor closure, no new task is admitted.

```valor
public bool invariant_shutdown_no_admit(u8 admission_state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `admission_state`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::invariant_shutdown_no_admit(admission_state);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-invariant-cancelled-queued-never-runs"></a>

> ## `invariant_cancelled_queued_never_runs`

> Cancellation preservation: a cancelled queued task never begins execution -- i.e. Cancellation preservation: a cancelled queued task never begins execution -- i.e. there is no legal transition from cancelled to running.  Pass FUTURE_CANCELLED and FUTURE_RUNNING to check the queued-cancel guarantee; the predicate holds (returns true) for that pair because the transition is rejected, and holds vacuously for any other pair.

```valor
public bool invariant_cancelled_queued_never_runs(u8 from_state, u8 to_state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `from_state`: u8 (by value)
> - `to_state`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::invariant_cancelled_queued_never_runs(from_state, to_state);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

<a id="fn-invariant-protocol-type-safe"></a>

> ## `invariant_protocol_type_safe`

> Process protocol type safety: an accepted message decodes to the declared task schema. Process protocol type safety: an accepted message decodes to the declared task schema.

```valor
public bool invariant_protocol_type_safe(u64 local_type_id, u64 local_field_hash, u32 local_width, u8 local_endianness, u64 msg_type_id, u64 msg_field_hash, u32 msg_width, u8 msg_endianness)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `local_type_id`: u64 (by value)
> - `local_field_hash`: u64 (by value)
> - `local_width`: u32 (by value)
> - `local_endianness`: u8 (by value)
> - `msg_type_id`: u64 (by value)
> - `msg_field_hash`: u64 (by value)
> - `msg_width`: u32 (by value)
> - `msg_endianness`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::concurrent::futures::invariant_protocol_type_safe(local_type_id, local_field_hash, local_width, local_endianness, msg_type_id, msg_field_hash, msg_width, msg_endianness);
> ```

> ### SEE ALSO
>
> - [`std::concurrent::futures::fut_min_usize`](#fn-fut-min-usize)
> - [`std::concurrent::futures::fut_max_usize`](#fn-fut-max-usize)
> - [`std::concurrent::futures::fut_min_u64`](#fn-fut-min-u64)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Async](STD-ASYNC-DOC.md) · [Table of contents](standard-library/README.md) · [Synchronization →](STD-SYNC-DOC.md)
