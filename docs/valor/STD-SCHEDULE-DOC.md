<!-- stdlib-reference-style: modern -->
> # `std::schedule`

`std::schedule` scheduling and policy operations.

[Standard library](standard-library/README.md) / [Concurrency and time](standard-library/README.md#concurrency-and-time) / **Scheduling**

> **Source:** `stdlib/std/schedule.valor` · **Routines:** 44 public

## Routines

<details>
<summary>Browse all 44 routines</summary>

- [`sched_min_usize`](#fn-sched-min-usize)
- [`sched_max_usize`](#fn-sched-max-usize)
- [`sched_min_i64`](#fn-sched-min-i64)
- [`sched_max_i64`](#fn-sched-max-i64)
- [`sched_mod_usize`](#fn-sched-mod-usize)
- [`sched_ceil_div`](#fn-sched-ceil-div)
- [`sched_ring_slot`](#fn-sched-ring-slot)
- [`worker_count_is_valid`](#fn-worker-count-is-valid)
- [`chunk_size_is_valid`](#fn-chunk-size-is-valid)
- [`numa_policy_is_valid`](#fn-numa-policy-is-valid)
- [`concurrency_policy_is_valid`](#fn-concurrency-policy-is-valid)
- [`execution_policy_is_valid`](#fn-execution-policy-is-valid)
- [`bounded_queue_capacity_is_valid`](#fn-bounded-queue-capacity-is-valid)
- [`binding_is_valid`](#fn-binding-is-valid)
- [`schedule_policy_is_deterministic`](#fn-schedule-policy-is-deterministic)
- [`schedule_policy_preserves_order`](#fn-schedule-policy-preserves-order)
- [`static_partition`](#fn-static-partition)
- [`static_partition_bounds`](#fn-static-partition-bounds)
- [`blocked_partition`](#fn-blocked-partition)
- [`blocked_block_count`](#fn-blocked-block-count)
- [`blocked_block_owner`](#fn-blocked-block-owner)
- [`cyclic_owner`](#fn-cyclic-owner)
- [`cyclic_partition`](#fn-cyclic-partition)
- [`weighted_partition`](#fn-weighted-partition)
- [`prefix_partition`](#fn-prefix-partition)
- [`stable_bucket_dispatch`](#fn-stable-bucket-dispatch)
- [`deterministic_device_dispatch`](#fn-deterministic-device-dispatch)
- [`deterministic_expert_dispatch`](#fn-deterministic-expert-dispatch)
- [`bounded_work_queue_try_push`](#fn-bounded-work-queue-try-push)
- [`bounded_work_queue_try_pop`](#fn-bounded-work-queue-try-pop)
- [`heap_parent`](#fn-heap-parent)
- [`heap_left_child`](#fn-heap-left-child)
- [`bounded_priority_queue_push`](#fn-bounded-priority-queue-push)
- [`bounded_priority_queue_pop`](#fn-bounded-priority-queue-pop)
- [`bounded_priority_queue_has_top`](#fn-bounded-priority-queue-has-top)
- [`dag_schedule`](#fn-dag-schedule)
- [`critical_path`](#fn-critical-path)
- [`level_schedule`](#fn-level-schedule)
- [`schedule_sequential`](#fn-schedule-sequential)
- [`schedule_static`](#fn-schedule-static)
- [`schedule_deterministic_dynamic`](#fn-schedule-deterministic-dynamic)
- [`work_stealing_take`](#fn-work-stealing-take)
- [`work_stealing_steal`](#fn-work-stealing-steal)
- [`schedule_requires_ordered_claim`](#fn-schedule-requires-ordered-claim)

</details>

## API reference

<a id="fn-sched-min-usize"></a>

> ## `sched_min_usize`

> Provides the module's **sched min usize** operation. Returns `usize`.

```valor
public usize sched_min_usize(usize a, usize b)
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
> usize result = std::schedule::sched_min_usize(a, b);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)
> - [`std::schedule::sched_max_i64`](#fn-sched-max-i64)

<a id="fn-sched-max-usize"></a>

> ## `sched_max_usize`

> Provides the module's **sched max usize** operation. Returns `usize`.

```valor
public usize sched_max_usize(usize a, usize b)
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
> usize result = std::schedule::sched_max_usize(a, b);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)
> - [`std::schedule::sched_max_i64`](#fn-sched-max-i64)

<a id="fn-sched-min-i64"></a>

> ## `sched_min_i64`

> Provides the module's **sched min i64** operation. Returns `i64`.

```valor
public i64 sched_min_i64(i64 a, i64 b)
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
> i64 result = std::schedule::sched_min_i64(a, b);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_max_i64`](#fn-sched-max-i64)

<a id="fn-sched-max-i64"></a>

> ## `sched_max_i64`

> Provides the module's **sched max i64** operation. Returns `i64`.

```valor
public i64 sched_max_i64(i64 a, i64 b)
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
> i64 result = std::schedule::sched_max_i64(a, b);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-sched-mod-usize"></a>

> ## `sched_mod_usize`

> Truncating division-based modulo (no % operator in Valor).

```valor
public usize sched_mod_usize(usize a, usize b)
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
> usize result = std::schedule::sched_mod_usize(a, b);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-sched-ceil-div"></a>

> ## `sched_ceil_div`

> Ceil(a / b) with b > 0 guaranteed by the caller predicate.

```valor
public usize sched_ceil_div(usize a, usize b)
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
> usize result = std::schedule::sched_ceil_div(a, b);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-sched-ring-slot"></a>

> ## `sched_ring_slot`

> Ring-buffer slot for a monotone sequence number without a bitwise mask.

```valor
public usize sched_ring_slot(u64 sequence, usize capacity)
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
> usize result = std::schedule::sched_ring_slot(sequence, capacity);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-worker-count-is-valid"></a>

> ## `worker_count_is_valid`

> Provides the module's **worker count is valid** operation. Returns `bool`.

```valor
public bool worker_count_is_valid(usize worker_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `worker_count`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::schedule::worker_count_is_valid(worker_count);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-chunk-size-is-valid"></a>

> ## `chunk_size_is_valid`

> Provides the module's **chunk size is valid** operation. Returns `bool`.

```valor
public bool chunk_size_is_valid(usize chunk_size)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `chunk_size`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::schedule::chunk_size_is_valid(chunk_size);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-numa-policy-is-valid"></a>

> ## `numa_policy_is_valid`

> Provides the module's **numa policy is valid** operation. Returns `bool`.

```valor
public bool numa_policy_is_valid(u8 numa_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `numa_policy`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::schedule::numa_policy_is_valid(numa_policy);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-concurrency-policy-is-valid"></a>

> ## `concurrency_policy_is_valid`

> Provides the module's **concurrency policy is valid** operation. Returns `bool`.

```valor
public bool concurrency_policy_is_valid(u8 concurrency_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `concurrency_policy`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::schedule::concurrency_policy_is_valid(concurrency_policy);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-execution-policy-is-valid"></a>

> ## `execution_policy_is_valid`

> Provides the module's **execution policy is valid** operation. Returns `bool`.

```valor
public bool execution_policy_is_valid(u8 policy)
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
> bool result = std::schedule::execution_policy_is_valid(policy);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-bounded-queue-capacity-is-valid"></a>

> ## `bounded_queue_capacity_is_valid`

> A bounded queue capacity must be non-zero; ring-buffer drivers additionally document that a power-of-two capacity keeps sched_ring_slot division-friendly. A bounded queue capacity must be non-zero; ring-buffer drivers additionally document that a power-of-two capacity keeps sched_ring_slot division-friendly.

```valor
public bool bounded_queue_capacity_is_valid(usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::schedule::bounded_queue_capacity_is_valid(capacity);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-binding-is-valid"></a>

> ## `binding_is_valid`

> Explicit affinity + NUMA placement is present and internally consistent.

```valor
public bool binding_is_valid(usize worker_count, usize chunk_size, usize queue_capacity, u8 numa_policy, u8 concurrency_policy, u8 policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `worker_count`: usize (by value)
> - `chunk_size`: usize (by value)
> - `queue_capacity`: usize (by value)
> - `numa_policy`: u8 (by value)
> - `concurrency_policy`: u8 (by value)
> - `policy`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::schedule::binding_is_valid(worker_count, chunk_size, queue_capacity, numa_policy, concurrency_policy, policy);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-schedule-policy-is-deterministic"></a>

> ## `schedule_policy_is_deterministic`

> Deterministic policies preserve assignment order; work stealing does not.

```valor
public bool schedule_policy_is_deterministic(u8 policy)
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
> bool result = std::schedule::schedule_policy_is_deterministic(policy);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-schedule-policy-preserves-order"></a>

> ## `schedule_policy_preserves_order`

> Whether a policy guarantees stable per-item assignment order.

```valor
public bool schedule_policy_preserves_order(u8 policy)
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
> bool result = std::schedule::schedule_policy_preserves_order(policy);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-static-partition"></a>

> ## `static_partition`

> Even contiguous split: the first (item_count mod worker_count) workers get one extra item. Even contiguous split: the first (item_count mod worker_count) workers get one extra item.  Deterministic and order-preserving.  Delivers the half-open range [begin, end) owned by `worker`.

```valor
public i32 static_partition(usize item_count, usize worker_count, usize worker, (usize, usize) -> void receive_range)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `item_count`: usize (by value)
> - `worker_count`: usize (by value)
> - `worker`: usize (by value)
> - `receive_range`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::schedule::static_partition(item_count, worker_count, worker, receive_range);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-static-partition-bounds"></a>

> ## `static_partition_bounds`

> Fill the full boundary array (worker_count + 1 entries) for an even split. Fill the full boundary array (worker_count + 1 entries) for an even split. Contiguous boundaries keep every partition a single cache-friendly extent.

```valor
public i32 static_partition_bounds(usize item_count, usize worker_count, (usize, usize) -> void write_bound)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `item_count`: usize (by value)
> - `worker_count`: usize (by value)
> - `write_bound`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::schedule::static_partition_bounds(item_count, worker_count, write_bound);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-blocked-partition"></a>

> ## `blocked_partition`

> Fixed-block layout: item space is cut into ceil(item_count / chunk_size) contiguous blocks. Fixed-block layout: item space is cut into ceil(item_count / chunk_size) contiguous blocks.  Returns the [begin, end) extent of `block_index`.

```valor
public i32 blocked_partition(usize item_count, usize chunk_size, usize block_index, (usize, usize) -> void receive_range)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `item_count`: usize (by value)
> - `chunk_size`: usize (by value)
> - `block_index`: usize (by value)
> - `receive_range`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::schedule::blocked_partition(item_count, chunk_size, block_index, receive_range);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-blocked-block-count"></a>

> ## `blocked_block_count`

> Provides the module's **blocked block count** operation. Returns `usize`.

```valor
public usize blocked_block_count(usize item_count, usize chunk_size)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `item_count`: usize (by value)
> - `chunk_size`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::schedule::blocked_block_count(item_count, chunk_size);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-blocked-block-owner"></a>

> ## `blocked_block_owner`

> Owner worker of a fixed block under blocked-cyclic (schedule(static,chunk)).

```valor
public usize blocked_block_owner(usize block_index, usize worker_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `block_index`: usize (by value)
> - `worker_count`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::schedule::blocked_block_owner(block_index, worker_count);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-cyclic-owner"></a>

> ## `cyclic_owner`

> Cyclic (round-robin) ownership: item i is owned by worker i mod worker_count.

```valor
public usize cyclic_owner(usize item_index, usize worker_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `item_index`: usize (by value)
> - `worker_count`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::schedule::cyclic_owner(item_index, worker_count);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-cyclic-partition"></a>

> ## `cyclic_partition`

> Visit exactly the items owned by `worker` under a cyclic schedule, in ascending index order (start = worker, step = worker_count). Visit exactly the items owned by `worker` under a cyclic schedule, in ascending index order (start = worker, step = worker_count).

```valor
public i32 cyclic_partition(usize item_count, usize worker_count, usize worker, (usize) -> void visit_item)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `item_count`: usize (by value)
> - `worker_count`: usize (by value)
> - `worker`: usize (by value)
> - `visit_item`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::schedule::cyclic_partition(item_count, worker_count, worker, visit_item);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-weighted-partition"></a>

> ## `weighted_partition`

> Balanced weighted partition into worker_count contiguous ranges, minimizing the maximum partition weight. Balanced weighted partition into worker_count contiguous ranges, minimizing the maximum partition weight.  Uses binary search on the load bound (the "linear partition / painter's" formulation): fully deterministic, integer only, and it never calls the weight callback out of order.  Weights are i64 so all comparisons are integer (no f64 compare).  Emits boundaries through write_bound with boundary[0] == 0 and boundary[worker_count] == item_count.

```valor
public i32 weighted_partition(usize item_count, usize worker_count, (usize) -> i64 read_weight, (usize, usize) -> void write_bound)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `item_count`: usize (by value)
> - `worker_count`: usize (by value)
> - `usize`: (usize) -> i64 read_weight, ( (borrowed fn-ptr (callback))
> - `write_bound`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::schedule::weighted_partition(item_count, worker_count, usize, write_bound);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-prefix-partition"></a>

> ## `prefix_partition`

> Partition from a caller-supplied prefix-sum view: read_prefix(k) is the cumulative weight of items [0, k), so read_prefix(0) == 0 and read_prefix(item_count) == total. Partition from a caller-supplied prefix-sum view: read_prefix(k) is the cumulative weight of items [0, k), so read_prefix(0) == 0 and read_prefix(item_count) == total.  Splits the total into worker_count balanced quantile ranges via lower-bound search on the (monotone) prefix. Zero-copy: reuses the caller's existing prefix array with no reduction pass.

```valor
public i32 prefix_partition(usize item_count, usize worker_count, (usize) -> i64 read_prefix, (usize, usize) -> void write_bound)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `item_count`: usize (by value)
> - `worker_count`: usize (by value)
> - `usize`: (usize) -> i64 read_prefix, ( (borrowed fn-ptr (callback))
> - `write_bound`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::schedule::prefix_partition(item_count, worker_count, usize, write_bound);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-stable-bucket-dispatch"></a>

> ## `stable_bucket_dispatch`

> Stable bucket dispatch: a two-pass counting sort that groups items by bucket key while preserving input order within each bucket. Stable bucket dispatch: a two-pass counting sort that groups items by bucket key while preserving input order within each bucket.  read_bucket(i) returns the bucket of item i (< bucket_count).  The caller's cursor array (read_count / write_count, length bucket_count) is used as scratch; write_slot(i, slot) records the stable output position of item i.  Cache-friendly dense scan; no data-dependent branching in the scatter beyond the bucket lookup.

```valor
public i32 stable_bucket_dispatch(usize item_count, usize bucket_count, (usize) -> usize read_bucket, (usize) -> usize read_count, (usize, usize) -> void write_count, (usize, usize) -> void write_slot)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `item_count`: usize (by value)
> - `bucket_count`: usize (by value)
> - `write_slot`: (usize) -> usize read_bucket, (usize) -> usize read_count, (usize, usize) -> void write_count, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::schedule::stable_bucket_dispatch(item_count, bucket_count, write_slot);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-deterministic-device-dispatch"></a>

> ## `deterministic_device_dispatch`

> Deterministic capacity-proportional device dispatch via stride scheduling. Deterministic capacity-proportional device dispatch via stride scheduling. read_stride(d) is the caller-precomputed pass increment STRIDE_BASE/capacity for device d (smaller stride == higher capacity == more items).  The caller's accumulator lane (read_pass / write_pass, length device_count) is scratch. Items are processed in ascending order and each is assigned to the device with the smallest accumulated pass (ties broken by lowest device index), so the assignment is deterministic and preserves item order.  No large products are formed, so no overflow trap for realistic item counts.

```valor
public i32 deterministic_device_dispatch(usize item_count, usize device_count, (usize) -> usize read_stride, (usize) -> usize read_pass, (usize, usize) -> void write_pass, (usize, usize) -> void write_device)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `item_count`: usize (by value)
> - `device_count`: usize (by value)
> - `write_device`: (usize) -> usize read_stride, (usize) -> usize read_pass, (usize, usize) -> void write_pass, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::schedule::deterministic_device_dispatch(item_count, device_count, write_device);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-deterministic-expert-dispatch"></a>

> ## `deterministic_expert_dispatch`

> Deterministic mixture-of-experts routing with capacity. Deterministic mixture-of-experts routing with capacity.  read_expert(i) is item i's desired expert.  The caller's remaining-capacity lane (read_remaining / write_remaining, length expert_count) tracks slots.  Items are processed in ascending order and admitted to their desired expert while capacity remains; on overflow the item is deterministically dropped (assigned NO_INDEX).  The dropped set is a pure function of the inputs, so the routing is reproducible.

```valor
public i32 deterministic_expert_dispatch(usize item_count, usize expert_count, (usize) -> usize read_expert, (usize) -> usize read_remaining, (usize, usize) -> void write_remaining, (usize, usize) -> void write_assignment)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `item_count`: usize (by value)
> - `expert_count`: usize (by value)
> - `write_assignment`: (usize) -> usize read_expert, (usize) -> usize read_remaining, (usize, usize) -> void write_remaining, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::schedule::deterministic_expert_dispatch(item_count, expert_count, write_assignment);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-bounded-work-queue-try-push"></a>

> ## `bounded_work_queue_try_push`

> Try to enqueue once. Try to enqueue once.  On success writes the payload into the claimed slot via write_payload(slot) and publishes slot_seq[slot] = position + 1; receive_slot reports the claimed slot (NO_INDEX when full or contended out).  Returns OK on success, ERR_FULL when full, ERR_BUSY when the retry budget is exhausted.

```valor
public i32 bounded_work_queue_try_push(usize capacity, usize retry_limit, () -> u64 load_enqueue_pos, (usize) -> u64 load_slot_seq, (u64, u64) -> bool cas_enqueue_pos, (usize, u64) -> void store_slot_seq, (usize) -> void write_payload, (usize) -> void receive_slot)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `retry_limit`: usize (by value)
> - `receive_slot`: () -> u64 load_enqueue_pos, (usize) -> u64 load_slot_seq, (u64, u64) -> bool cas_enqueue_pos, (usize, u64) -> void store_slot_seq, (usize) -> void write_payload, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::schedule::bounded_work_queue_try_push(capacity, retry_limit, receive_slot);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-bounded-work-queue-try-pop"></a>

> ## `bounded_work_queue_try_pop`

> Try to dequeue once. Try to dequeue once.  On success reads the payload from the claimed slot via read_payload(slot) and republishes slot_seq[slot] = position + capacity; receive_slot reports the claimed slot (NO_INDEX when empty or contended out).

```valor
public i32 bounded_work_queue_try_pop(usize capacity, usize retry_limit, () -> u64 load_dequeue_pos, (usize) -> u64 load_slot_seq, (u64, u64) -> bool cas_dequeue_pos, (usize, u64) -> void store_slot_seq, (usize) -> void read_payload, (usize) -> void receive_slot)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `retry_limit`: usize (by value)
> - `receive_slot`: () -> u64 load_dequeue_pos, (usize) -> u64 load_slot_seq, (u64, u64) -> bool cas_dequeue_pos, (usize, u64) -> void store_slot_seq, (usize) -> void read_payload, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::schedule::bounded_work_queue_try_pop(capacity, retry_limit, receive_slot);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-heap-parent"></a>

> ## `heap_parent`

> Provides the module's **heap parent** operation. Returns `usize`.

```valor
public usize heap_parent(usize node)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::schedule::heap_parent(node);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-heap-left-child"></a>

> ## `heap_left_child`

> Provides the module's **heap left child** operation. Returns `usize`.

```valor
public usize heap_left_child(usize node)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::schedule::heap_left_child(node);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-bounded-priority-queue-push"></a>

> ## `bounded_priority_queue_push`

> Push: the caller has already written the new element at index `size`. Push: the caller has already written the new element at index `size`.  Sifts it up to restore the heap order.  ERR_NO_SPACE when the heap is full.

```valor
public i32 bounded_priority_queue_push(usize size, usize capacity, (usize, usize) -> i32 compare, (usize, usize) -> void swap, (usize) -> void receive_size)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `size`: usize (by value)
> - `capacity`: usize (by value)
> - `usize`: (usize, usize) -> i32 compare, ( (borrowed fn-ptr (callback))
> - `receive_size`: usize) -> void swap, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::schedule::bounded_priority_queue_push(size, capacity, usize, receive_size);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-bounded-priority-queue-pop"></a>

> ## `bounded_priority_queue_pop`

> Pop the max: swaps the root to index size-1 (so the caller can read the popped payload there), then sifts the new root down over the remaining size-1 elements. Pop the max: swaps the root to index size-1 (so the caller can read the popped payload there), then sifts the new root down over the remaining size-1 elements.  ERR_EMPTY when the heap is empty.

```valor
public i32 bounded_priority_queue_pop(usize size, (usize, usize) -> i32 compare, (usize, usize) -> void swap, (usize) -> void receive_size)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `size`: usize (by value)
> - `usize`: (usize, usize) -> i32 compare, ( (borrowed fn-ptr (callback))
> - `receive_size`: usize) -> void swap, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::schedule::bounded_priority_queue_pop(size, usize, receive_size);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-bounded-priority-queue-has-top"></a>

> ## `bounded_priority_queue_has_top`

> Peek reports whether the heap is non-empty; the root (index 0) is the max.

```valor
public bool bounded_priority_queue_has_top(usize size)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `size`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::schedule::bounded_priority_queue_has_top(size);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-dag-schedule"></a>

> ## `dag_schedule`

> Deterministic Kahn topological schedule. Deterministic Kahn topological schedule.  read_indegree/write_indegree is the caller's mutable in-degree lane (write_indegree may store NO_INDEX to mark a node emitted).  At each step the lowest-id ready node is emitted, giving a stable order without a heap.  write_order(position, node) records the schedule; receive_count reports how many nodes were scheduled (< node_count signals a cycle, also flagged via ERR_CYCLE).

```valor
public i32 dag_schedule(usize node_count, usize edge_count, (usize) -> usize read_offset, (usize) -> usize read_target, (usize) -> usize read_indegree, (usize, usize) -> void write_indegree, (usize, usize) -> void write_order, (usize) -> void receive_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_count`: usize (by value)
> - `edge_count`: usize (by value)
> - `receive_count`: (usize) -> usize read_offset, (usize) -> usize read_target, (usize) -> usize read_indegree, (usize, usize) -> void write_indegree, (usize, usize) -> void write_order, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::schedule::dag_schedule(node_count, edge_count, receive_count);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-critical-path"></a>

> ## `critical_path`

> Critical path (longest weighted path) over a DAG given a valid topological order. Critical path (longest weighted path) over a DAG given a valid topological order.  read_topo(position) yields the node scheduled at that position; read_weight(node) is its i64 duration.  read_dist/write_dist is the caller's i64 longest-finish lane.  Processes nodes in topo order, relaxing successors; receive_length reports the maximum finish time (the critical-path length). All comparisons are i64 integer comparisons.

```valor
public i32 critical_path(usize node_count, usize edge_count, (usize) -> usize read_topo, (usize) -> usize read_offset, (usize) -> usize read_target, (usize) -> i64 read_weight, (usize) -> i64 read_dist, (usize, i64) -> void write_dist, (i64) -> void receive_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_count`: usize (by value)
> - `edge_count`: usize (by value)
> - `receive_length`: (usize) -> usize read_topo, (usize) -> usize read_offset, (usize) -> usize read_target, (usize) -> i64 read_weight, (usize) -> i64 read_dist, (usize, i64) -> void write_dist, (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::schedule::critical_path(node_count, edge_count, receive_length);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-level-schedule"></a>

> ## `level_schedule`

> Level schedule (ASAP levels): level(node) = longest predecessor chain length, so all nodes sharing a level are mutually independent and may run in the same wave. Level schedule (ASAP levels): level(node) = longest predecessor chain length, so all nodes sharing a level are mutually independent and may run in the same wave.  Given a topological order and the CSR successor view, forward-relaxes levels; read_level/write_level is the caller's usize level lane. receive_max_level reports the deepest level (wave count == max_level + 1).

```valor
public i32 level_schedule(usize node_count, usize edge_count, (usize) -> usize read_topo, (usize) -> usize read_offset, (usize) -> usize read_target, (usize) -> usize read_level, (usize, usize) -> void write_level, (usize) -> void receive_max_level)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_count`: usize (by value)
> - `edge_count`: usize (by value)
> - `receive_max_level`: (usize) -> usize read_topo, (usize) -> usize read_offset, (usize) -> usize read_target, (usize) -> usize read_level, (usize, usize) -> void write_level, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::schedule::level_schedule(node_count, edge_count, receive_max_level);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-schedule-sequential"></a>

> ## `schedule_sequential`

> schedule::sequential -- one worker executes every item in ascending order.

```valor
public i32 schedule_sequential(usize item_count, (usize) -> void execute)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `item_count`: usize (by value)
> - `execute`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::schedule::schedule_sequential(item_count, execute);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-schedule-static"></a>

> ## `schedule_static`

> schedule::static -- `worker` executes its even contiguous share in order, optionally grained by chunk_size so successive chunks stay cache-resident. schedule::static -- `worker` executes its even contiguous share in order, optionally grained by chunk_size so successive chunks stay cache-resident. Assignment is a pure function of (item_count, worker_count, worker), so the per-item worker mapping is fully deterministic.

```valor
public i32 schedule_static(usize item_count, usize worker_count, usize worker, usize chunk_size, (usize, usize) -> void execute_range)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `item_count`: usize (by value)
> - `worker_count`: usize (by value)
> - `worker`: usize (by value)
> - `chunk_size`: usize (by value)
> - `execute_range`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::schedule::schedule_static(item_count, worker_count, worker, chunk_size, execute_range);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-schedule-deterministic-dynamic"></a>

> ## `schedule_deterministic_dynamic`

> schedule::deterministic_dynamic -- workers claim contiguous chunks by atomic fetch-add of a shared chunk counter (next_chunk_index). schedule::deterministic_dynamic -- workers claim contiguous chunks by atomic fetch-add of a shared chunk counter (next_chunk_index).  The SET of chunks and the order of items within each chunk are deterministic; only the worker-to-chunk mapping floats.  execute_range runs each claimed chunk.

```valor
public i32 schedule_deterministic_dynamic(usize item_count, usize chunk_size, () -> usize next_chunk_index, (usize, usize) -> void execute_range)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `item_count`: usize (by value)
> - `chunk_size`: usize (by value)
> - `usize`: () -> usize next_chunk_index, ( (borrowed fn-ptr (callback))
> - `execute_range`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::schedule::schedule_deterministic_dynamic(item_count, chunk_size, usize, execute_range);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-work-stealing-take"></a>

> ## `work_stealing_take`

> schedule::work_stealing helpers -- Chase-Lev deque index protocol. schedule::work_stealing helpers -- Chase-Lev deque index protocol. The deque is a caller-owned circular buffer with a bottom counter (owner end) and a top counter (thief end), both driven through atomic callbacks. WEAKER REPRODUCIBILITY: stealing is racy, so execution order is not stable across runs even though the completed item set is. Owner take: pop from the bottom.  Requires the owner to hold `bottom`. Reports the taken slot payload index through receive_index (NO_INDEX when the deque is empty or a concurrent steal won the last element).

```valor
public i32 work_stealing_take(usize capacity, () -> u64 load_bottom, (u64) -> void store_bottom, () -> u64 load_top, (u64, u64) -> bool cas_top, (usize) -> usize read_slot, (usize) -> void receive_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `receive_index`: () -> u64 load_bottom, (u64) -> void store_bottom, () -> u64 load_top, (u64, u64) -> bool cas_top, (usize) -> usize read_slot, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::schedule::work_stealing_take(capacity, receive_index);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-work-stealing-steal"></a>

> ## `work_stealing_steal`

> Thief steal: pop from the top. Thief steal: pop from the top.  Reports the stolen slot payload index through receive_index (NO_INDEX when empty or the CAS lost to another thief/owner).

```valor
public i32 work_stealing_steal(usize capacity, () -> u64 load_top, () -> u64 load_bottom, (u64, u64) -> bool cas_top, (usize) -> usize read_slot, (usize) -> void receive_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `receive_index`: () -> u64 load_top, () -> u64 load_bottom, (u64, u64) -> bool cas_top, (usize) -> usize read_slot, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::schedule::work_stealing_steal(capacity, receive_index);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

<a id="fn-schedule-requires-ordered-claim"></a>

> ## `schedule_requires_ordered_claim`

> Dispatch a policy code to a boolean the runtime can branch on when wiring an executor: returns true when the policy demands stable per-item ordering, so the caller must avoid a stealing deque and use ordered claiming instead. Dispatch a policy code to a boolean the runtime can branch on when wiring an executor: returns true when the policy demands stable per-item ordering, so the caller must avoid a stealing deque and use ordered claiming instead.

```valor
public bool schedule_requires_ordered_claim(u8 policy)
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
> bool result = std::schedule::schedule_requires_ordered_claim(policy);
> ```

> ### SEE ALSO
>
> - [`std::schedule::sched_min_usize`](#fn-sched-min-usize)
> - [`std::schedule::sched_max_usize`](#fn-sched-max-usize)
> - [`std::schedule::sched_min_i64`](#fn-sched-min-i64)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Synchronization](STD-SYNC-DOC.md) · [Table of contents](standard-library/README.md) · [Time →](STD-TIME-DOC.md)
