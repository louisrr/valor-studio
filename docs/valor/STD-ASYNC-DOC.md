<!-- stdlib-reference-style: modern -->
> # `std::async`

`std::async` asynchronous control-flow primitives.

[Standard library](standard-library/README.md) / [Concurrency and time](standard-library/README.md#concurrency-and-time) / **Async**

> **Source:** `stdlib/std/async.valor` · **Routines:** 44 public

## Routines

<details>
<summary>Browse all 44 routines</summary>

- [`pollTagIsValid`](#fn-polltagisvalid)
- [`futureStateIsTerminal`](#fn-futurestateisterminal)
- [`taskStateIsTerminal`](#fn-taskstateisterminal)
- [`powerOfTwo`](#fn-poweroftwo)
- [`wrappedIndex`](#fn-wrappedindex)
- [`futurePoll`](#fn-futurepoll)
- [`promiseComplete`](#fn-promisecomplete)
- [`futureCancel`](#fn-futurecancel)
- [`wakerWake`](#fn-wakerwake)
- [`taskPoll`](#fn-taskpoll)
- [`joinPoll`](#fn-joinpoll)
- [`cancellationRequested`](#fn-cancellationrequested)
- [`cancellationRequest`](#fn-cancellationrequest)
- [`taskGroupSpawn`](#fn-taskgroupspawn)
- [`taskGroupChildComplete`](#fn-taskgroupchildcomplete)
- [`taskGroupCloseAndJoin`](#fn-taskgroupcloseandjoin)
- [`deadlineExpired`](#fn-deadlineexpired)
- [`timeoutPoll`](#fn-timeoutpoll)
- [`reactorRegister`](#fn-reactorregister)
- [`reactorPoll`](#fn-reactorpoll)
- [`schedulerSubmit`](#fn-schedulersubmit)
- [`schedulerNext`](#fn-schedulernext)
- [`dequePush`](#fn-dequepush)
- [`dequeSteal`](#fn-dequesteal)
- [`asyncQueueTrySend`](#fn-asyncqueuetrysend)
- [`asyncQueueTryReceive`](#fn-asyncqueuetryreceive)
- [`asyncQueueSend`](#fn-asyncqueuesend)
- [`asyncQueueReceive`](#fn-asyncqueuereceive)
- [`asyncChannelClose`](#fn-asyncchannelclose)
- [`asyncMutexLock`](#fn-asyncmutexlock)
- [`asyncMutexUnlock`](#fn-asyncmutexunlock)
- [`asyncRwLockRead`](#fn-asyncrwlockread)
- [`asyncRwLockWrite`](#fn-asyncrwlockwrite)
- [`asyncRwLockReadUnlock`](#fn-asyncrwlockreadunlock)
- [`asyncRwLockWriteUnlock`](#fn-asyncrwlockwriteunlock)
- [`asyncSemaphoreAcquire`](#fn-asyncsemaphoreacquire)
- [`asyncSemaphoreRelease`](#fn-asyncsemaphorerelease)
- [`waitNodeCancel`](#fn-waitnodecancel)
- [`asyncIteratorNext`](#fn-asynciteratornext)
- [`taskLocalGet`](#fn-tasklocalget)
- [`selectRegister`](#fn-selectregister)
- [`selectNotify`](#fn-selectnotify)
- [`selectPoll`](#fn-selectpoll)
- [`selectCancelLosers`](#fn-selectcancellosers)

</details>

## API reference

<a id="fn-polltagisvalid"></a>

> ## `pollTagIsValid`

> Provides the module's **poll tag is valid** operation. Returns `bool`.

```valor
public bool pollTagIsValid(u8 tag)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tag`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::async::pollTagIsValid(tag);
> ```

> ### SEE ALSO
>
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)
> - [`std::async::powerOfTwo`](#fn-poweroftwo)

<a id="fn-futurestateisterminal"></a>

> ## `futureStateIsTerminal`

> Provides the module's **future state is terminal** operation. Returns `bool`.

```valor
public bool futureStateIsTerminal(u32 state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state`: u32 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::async::futureStateIsTerminal(state);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)
> - [`std::async::powerOfTwo`](#fn-poweroftwo)

<a id="fn-taskstateisterminal"></a>

> ## `taskStateIsTerminal`

> Provides the module's **task state is terminal** operation. Returns `bool`.

```valor
public bool taskStateIsTerminal(u32 state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state`: u32 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::async::taskStateIsTerminal(state);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::powerOfTwo`](#fn-poweroftwo)

<a id="fn-poweroftwo"></a>

> ## `powerOfTwo`

> Provides the module's **power of two** operation. Returns `bool`.

```valor
public bool powerOfTwo(usize value)
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
> bool result = std::async::powerOfTwo(value);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-wrappedindex"></a>

> ## `wrappedIndex`

> Provides the module's **wrapped index** operation. Returns `usize`.

```valor
public usize wrappedIndex(u64 sequence, usize capacity)
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
> usize result = std::async::wrappedIndex(sequence, capacity);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-futurepoll"></a>

> ## `futurePoll`

> Provides the module's **future poll** operation. Returns `i32`.

```valor
public i32 futurePoll(() -> u32 load_state_acquire, () -> T read_result, (T) -> void receive, (usize, u64) -> void publish_waker_release, usize task, u64 generation)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `generation`: () -> u32 load_state_acquire, () -> T read_result, (T) -> void receive, (usize, u64) -> void publish_waker_release, usize task, u64 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::futurePoll(generation);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-promisecomplete"></a>

> ## `promiseComplete`

> Provides the module's **promise complete** operation. Returns `i32`.

```valor
public i32 promiseComplete(T value, (u32, u32) -> bool claim_completion, (T) -> void write_result, (u32) -> void publish_state_release, () -> void wake_registered)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: T (by value)
> - `wake_registered`: (u32, u32) -> bool claim_completion, (T) -> void write_result, (u32) -> void publish_state_release, () -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::promiseComplete(value, wake_registered);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-futurecancel"></a>

> ## `futureCancel`

> Provides the module's **future cancel** operation. Returns `i32`.

```valor
public i32 futureCancel((u32) -> u32 exchange_state_acq_rel, () -> void wake_registered)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `wake_registered`: (u32) -> u32 exchange_state_acq_rel, () -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::futureCancel(wake_registered);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-wakerwake"></a>

> ## `wakerWake`

> Provides the module's **waker wake** operation. Returns `i32`.

```valor
public i32 wakerWake(usize task, u64 generation, (usize) -> u64 load_task_generation_acquire, (usize) -> u32 load_task_state_acquire, (usize, u32, u32) -> bool claim_task, (usize) -> void schedule_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `task`: usize (by value)
> - `generation`: u64 (by value)
> - `schedule_release`: (usize) -> u64 load_task_generation_acquire, (usize) -> u32 load_task_state_acquire, (usize, u32, u32) -> bool claim_task, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::wakerWake(task, generation, schedule_release);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-taskpoll"></a>

> ## `taskPoll`

> Provides the module's **task poll** operation. Returns `i32`.

```valor
public i32 taskPoll(usize task, (usize, u32, u32) -> bool claim_state, (usize) -> i32 resume_frame, (usize) -> u32 load_state_acquire, (usize) -> void publish_completion_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `task`: usize (by value)
> - `publish_completion_release`: (usize, u32, u32) -> bool claim_state, (usize) -> i32 resume_frame, (usize) -> u32 load_state_acquire, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::taskPoll(task, publish_completion_release);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-joinpoll"></a>

> ## `joinPoll`

> Provides the module's **join poll** operation. Returns `i32`.

```valor
public i32 joinPoll(usize task, u64 generation, (usize) -> u64 load_generation_acquire, (usize) -> u32 load_state_acquire, (usize) -> T read_completion, (T) -> void receive, (usize) -> void register_waiter)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `task`: usize (by value)
> - `generation`: u64 (by value)
> - `register_waiter`: (usize) -> u64 load_generation_acquire, (usize) -> u32 load_state_acquire, (usize) -> T read_completion, (T) -> void receive, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::joinPoll(task, generation, register_waiter);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-cancellationrequested"></a>

> ## `cancellationRequested`

> Provides the module's **cancellation requested** operation. Returns `bool`.

```valor
public bool cancellationRequested(usize token, usize maximum_depth, (usize) -> u32 load_state_acquire, (usize) -> usize load_parent, (bool) -> void depth_bound_exceeded)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `token`: usize (by value)
> - `maximum_depth`: usize (by value)
> - `depth_bound_exceeded`: (usize) -> u32 load_state_acquire, (usize) -> usize load_parent, (bool) -> void (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::async::cancellationRequested(token, maximum_depth, depth_bound_exceeded);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-cancellationrequest"></a>

> ## `cancellationRequest`

> Provides the module's **cancellation request** operation. Returns `i32`.

```valor
public i32 cancellationRequest(usize token, (usize, u32, u32) -> bool claim_cancelled, (usize) -> void wake_waiters, (usize) -> usize first_child, (usize) -> usize next_sibling, usize maximum_children)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `token`: usize (by value)
> - `maximum_children`: (usize, u32, u32) -> bool claim_cancelled, (usize) -> void wake_waiters, (usize) -> usize first_child, (usize) -> usize next_sibling, usize (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::cancellationRequest(token, maximum_children);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-taskgroupspawn"></a>

> ## `taskGroupSpawn`

> Provides the module's **task group spawn** operation. Returns `i32`.

```valor
public i32 taskGroupSpawn(usize group, usize task, () -> bool group_accepts_children, (usize, usize) -> void link_child_release, (usize) -> void increment_live_acq_rel, (usize) -> void schedule_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `group`: usize (by value)
> - `task`: usize (by value)
> - `usize`: () -> bool group_accepts_children, ( (borrowed fn-ptr (callback))
> - `schedule_release`: usize) -> void link_child_release, (usize) -> void increment_live_acq_rel, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::taskGroupSpawn(group, task, usize, schedule_release);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-taskgroupchildcomplete"></a>

> ## `taskGroupChildComplete`

> Provides the module's **task group child complete** operation. Returns `i32`.

```valor
public i32 taskGroupChildComplete(usize group, usize task, (usize, usize) -> void unlink_child_acq_rel, (usize) -> usize decrement_live_acq_rel, (usize) -> void wake_joiners)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `group`: usize (by value)
> - `task`: usize (by value)
> - `wake_joiners`: (usize, usize) -> void unlink_child_acq_rel, (usize) -> usize decrement_live_acq_rel, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::taskGroupChildComplete(group, task, wake_joiners);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-taskgroupcloseandjoin"></a>

> ## `taskGroupCloseAndJoin`

> Scope exit is deliberately two phase: stop admission and request cancellation, then asynchronously join. Scope exit is deliberately two phase: stop admission and request cancellation, then asynchronously join. Destruction is a separate caller action and is never used as cancellation.

```valor
public i32 taskGroupCloseAndJoin(usize group, (usize) -> void close_admission_release, (usize) -> void cancel_children, (usize) -> usize load_live_acquire, (usize) -> void register_join_waker)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `group`: usize (by value)
> - `register_join_waker`: (usize) -> void close_admission_release, (usize) -> void cancel_children, (usize) -> usize load_live_acquire, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::taskGroupCloseAndJoin(group, register_join_waker);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-deadlineexpired"></a>

> ## `deadlineExpired`

> Provides the module's **deadline expired** operation. Returns `bool`.

```valor
public bool deadlineExpired(u64 deadline_ticks, u64 now_ticks)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `deadline_ticks`: u64 (by value)
> - `now_ticks`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::async::deadlineExpired(deadline_ticks, now_ticks);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-timeoutpoll"></a>

> ## `timeoutPoll`

> Provides the module's **timeout poll** operation. Returns `i32`.

```valor
public i32 timeoutPoll(bool finite, u64 deadline_ticks, () -> u64 now_ticks, () -> void register_deadline, () -> void request_cancellation)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `finite`: bool (by value)
> - `deadline_ticks`: u64 (by value)
> - `request_cancellation`: () -> u64 now_ticks, () -> void register_deadline, () -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::timeoutPoll(finite, deadline_ticks, request_cancellation);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-reactorregister"></a>

> ## `reactorRegister`

> Provides the module's **reactor register** operation. Returns `i32`.

```valor
public i32 reactorRegister(usize registration, u64 deadline_ticks, () -> usize load_active_acquire, () -> usize load_capacity, (usize, u64) -> bool insert_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `registration`: usize (by value)
> - `deadline_ticks`: u64 (by value)
> - `insert_release`: () -> usize load_active_acquire, () -> usize load_capacity, (usize, u64) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::reactorRegister(registration, deadline_ticks, insert_release);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-reactorpoll"></a>

> ## `reactorPoll`

> Provides the module's **reactor poll** operation. Returns `usize`.

```valor
public usize reactorPoll(u64 now_ticks, usize event_budget, () -> bool has_ready, () -> usize pop_ready_acq_rel, (usize) -> void wake_registration)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `now_ticks`: u64 (by value)
> - `event_budget`: usize (by value)
> - `wake_registration`: () -> bool has_ready, () -> usize pop_ready_acq_rel, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::async::reactorPoll(now_ticks, event_budget, wake_registration);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-schedulersubmit"></a>

> ## `schedulerSubmit`

> Provides the module's **scheduler submit** operation. Returns `i32`.

```valor
public i32 schedulerSubmit(usize task, u32 current_worker, u32 affinity_worker, u32 task_numa_node, u8 memory_intensive, (u32, usize) -> bool local_push_release, (u32, usize) -> bool node_push_release, (usize) -> bool global_push_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `task`: usize (by value)
> - `current_worker`: u32 (by value)
> - `affinity_worker`: u32 (by value)
> - `task_numa_node`: u32 (by value)
> - `memory_intensive`: u8 (by value)
> - `u32`: (u32, usize) -> bool local_push_release, ( (borrowed fn-ptr (callback))
> - `global_push_release`: usize) -> bool node_push_release, (usize) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::schedulerSubmit(task, current_worker, affinity_worker, task_numa_node, memory_intensive, u32, global_push_release);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-schedulernext"></a>

> ## `schedulerNext`

> Provides the module's **scheduler next** operation. Returns `i32`.

```valor
public i32 schedulerNext(u32 worker, u32 numa_node, usize steal_batch, (u32) -> usize local_pop_acq_rel, (u32, u32, usize) -> usize steal_same_node_acq_rel, (u32, usize) -> usize steal_cross_node_acq_rel, () -> usize global_pop_acq_rel, (usize) -> void receive_task)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `worker`: u32 (by value)
> - `numa_node`: u32 (by value)
> - `steal_batch`: usize (by value)
> - `u32`: (u32) -> usize local_pop_acq_rel, ( (borrowed fn-ptr (callback))
> - `u32`: u32 (by value)
> - `receive_task`: usize) -> usize steal_same_node_acq_rel, (u32, usize) -> usize steal_cross_node_acq_rel, () -> usize global_pop_acq_rel, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::schedulerNext(worker, numa_node, steal_batch, u32, u32, receive_task);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-dequepush"></a>

> ## `dequePush`

> Provides the module's **deque push** operation. Returns `i32`.

```valor
public i32 dequePush(usize task, usize capacity, () -> u64 load_bottom_relaxed, () -> u64 load_top_acquire, (u64, usize) -> void write_slot, (u64) -> void store_bottom_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `task`: usize (by value)
> - `capacity`: usize (by value)
> - `store_bottom_release`: () -> u64 load_bottom_relaxed, () -> u64 load_top_acquire, (u64, usize) -> void write_slot, (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::dequePush(task, capacity, store_bottom_release);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-dequesteal"></a>

> ## `dequeSteal`

> Provides the module's **deque steal** operation. Returns `i32`.

```valor
public i32 dequeSteal(usize batch_limit, () -> u64 load_top_acquire, () -> u64 load_bottom_acquire, (u64) -> usize read_slot, (u64, u64) -> bool claim_top_acq_rel, (usize) -> void receive_task)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `batch_limit`: usize (by value)
> - `receive_task`: () -> u64 load_top_acquire, () -> u64 load_bottom_acquire, (u64) -> usize read_slot, (u64, u64) -> bool claim_top_acq_rel, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::dequeSteal(batch_limit, receive_task);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-asyncqueuetrysend"></a>

> ## `asyncQueueTrySend`

> Provides the module's **async queue try send** operation. Returns `i32`.

```valor
public i32 asyncQueueTrySend(usize capacity, usize mask, () -> u8 load_state_acquire, () -> u64 load_enqueue_relaxed, (usize) -> u64 load_sequence_acquire, (u64, u64) -> bool claim_enqueue_relaxed, (usize) -> void write_slot, (usize, u64) -> void publish_sequence_release, () -> void wake_receiver, (usize) -> void receive_slot_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `mask`: usize (by value)
> - `receive_slot_index`: () -> u8 load_state_acquire, () -> u64 load_enqueue_relaxed, (usize) -> u64 load_sequence_acquire, (u64, u64) -> bool claim_enqueue_relaxed, (usize) -> void write_slot, (usize, u64) -> void publish_sequence_release, () -> void wake_receiver, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::asyncQueueTrySend(capacity, mask, receive_slot_index);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-asyncqueuetryreceive"></a>

> ## `asyncQueueTryReceive`

> Provides the module's **async queue try receive** operation. Returns `i32`.

```valor
public i32 asyncQueueTryReceive(usize capacity, usize mask, () -> u8 load_state_acquire, () -> u64 load_dequeue_relaxed, (usize) -> u64 load_sequence_acquire, (u64, u64) -> bool claim_dequeue_relaxed, (usize) -> T read_slot, (usize, u64) -> void publish_sequence_release, () -> void wake_sender, (T) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `mask`: usize (by value)
> - `receive`: () -> u8 load_state_acquire, () -> u64 load_dequeue_relaxed, (usize) -> u64 load_sequence_acquire, (u64, u64) -> bool claim_dequeue_relaxed, (usize) -> T read_slot, (usize, u64) -> void publish_sequence_release, () -> void wake_sender, (T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::asyncQueueTryReceive(capacity, mask, receive);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-asyncqueuesend"></a>

> ## `asyncQueueSend`

> Provides the module's **async queue send** operation. Returns `i32`.

```valor
public i32 asyncQueueSend(i32 try_status, usize wait_node, (usize) -> void enqueue_sender_release, () -> i32 retry_after_registration)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `try_status`: i32 (by value)
> - `wait_node`: usize (by value)
> - `retry_after_registration`: (usize) -> void enqueue_sender_release, () -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::asyncQueueSend(try_status, wait_node, retry_after_registration);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-asyncqueuereceive"></a>

> ## `asyncQueueReceive`

> Provides the module's **async queue receive** operation. Returns `i32`.

```valor
public i32 asyncQueueReceive(i32 try_status, usize wait_node, (usize) -> void enqueue_receiver_release, () -> i32 retry_after_registration)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `try_status`: i32 (by value)
> - `wait_node`: usize (by value)
> - `retry_after_registration`: (usize) -> void enqueue_receiver_release, () -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::asyncQueueReceive(try_status, wait_node, retry_after_registration);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-asyncchannelclose"></a>

> ## `asyncChannelClose`

> Provides the module's **async channel close** operation. Returns `i32`.

```valor
public i32 asyncChannelClose(u8 target_state, (u8, u8) -> bool claim_state_acq_rel, () -> void wake_all_senders, () -> void wake_all_receivers)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `target_state`: u8 (by value)
> - `wake_all_receivers`: (u8, u8) -> bool claim_state_acq_rel, () -> void wake_all_senders, () -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::asyncChannelClose(target_state, wake_all_receivers);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-asyncmutexlock"></a>

> ## `asyncMutexLock`

> Provides the module's **async mutex lock** operation. Returns `i32`.

```valor
public i32 asyncMutexLock(usize task, usize wait_node, (usize) -> bool try_claim_owner_acquire, (usize) -> void enqueue_waiter_release, () -> bool cancellation_requested)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `task`: usize (by value)
> - `wait_node`: usize (by value)
> - `cancellation_requested`: (usize) -> bool try_claim_owner_acquire, (usize) -> void enqueue_waiter_release, () -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::asyncMutexLock(task, wait_node, cancellation_requested);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-asyncmutexunlock"></a>

> ## `asyncMutexUnlock`

> Provides the module's **async mutex unlock** operation. Returns `i32`.

```valor
public i32 asyncMutexUnlock(usize task, (usize) -> bool release_if_owner, () -> usize pop_waiter_skipping_cancelled, (usize) -> void handoff_and_wake_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `task`: usize (by value)
> - `handoff_and_wake_release`: (usize) -> bool release_if_owner, () -> usize pop_waiter_skipping_cancelled, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::asyncMutexUnlock(task, handoff_and_wake_release);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-asyncrwlockread"></a>

> ## `asyncRwLockRead`

> Provides the module's **async rw lock read** operation. Returns `i32`.

```valor
public i32 asyncRwLockRead(usize wait_node, () -> u32 load_writer_acquire, () -> u32 load_queued_writers_acquire, () -> bool increment_readers_if_zero_writer, (usize) -> void enqueue_reader_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `wait_node`: usize (by value)
> - `enqueue_reader_release`: () -> u32 load_writer_acquire, () -> u32 load_queued_writers_acquire, () -> bool increment_readers_if_zero_writer, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::asyncRwLockRead(wait_node, enqueue_reader_release);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-asyncrwlockwrite"></a>

> ## `asyncRwLockWrite`

> Provides the module's **async rw lock write** operation. Returns `i32`.

```valor
public i32 asyncRwLockWrite(usize wait_node, () -> bool claim_writer_if_no_readers, (usize) -> void enqueue_writer_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `wait_node`: usize (by value)
> - `enqueue_writer_release`: () -> bool claim_writer_if_no_readers, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::asyncRwLockWrite(wait_node, enqueue_writer_release);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-asyncrwlockreadunlock"></a>

> ## `asyncRwLockReadUnlock`

> Provides the module's **async rw lock read unlock** operation.

```valor
public void asyncRwLockReadUnlock( () -> u32 decrement_readers_release, () -> usize pop_writer_skipping_cancelled, (usize) -> void wake_writer)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `wake_writer`: () -> u32 decrement_readers_release, () -> usize pop_writer_skipping_cancelled, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::async::asyncRwLockReadUnlock(wake_writer);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-asyncrwlockwriteunlock"></a>

> ## `asyncRwLockWriteUnlock`

> Provides the module's **async rw lock write unlock** operation.

```valor
public void asyncRwLockWriteUnlock( () -> usize pop_writer_skipping_cancelled, () -> void wake_all_readers, (usize) -> void handoff_writer_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `handoff_writer_release`: () -> usize pop_writer_skipping_cancelled, () -> void wake_all_readers, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::async::asyncRwLockWriteUnlock(handoff_writer_release);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-asyncsemaphoreacquire"></a>

> ## `asyncSemaphoreAcquire`

> Provides the module's **async semaphore acquire** operation. Returns `i32`.

```valor
public i32 asyncSemaphoreAcquire(u64 permits, usize wait_node, () -> u64 load_permits_acquire, (u64, u64) -> bool claim_permits_acq_rel, (usize, u64) -> void enqueue_waiter_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `permits`: u64 (by value)
> - `wait_node`: usize (by value)
> - `u64`: () -> u64 load_permits_acquire, ( (borrowed fn-ptr (callback))
> - `enqueue_waiter_release`: u64) -> bool claim_permits_acq_rel, (usize, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::asyncSemaphoreAcquire(permits, wait_node, u64, enqueue_waiter_release);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-asyncsemaphorerelease"></a>

> ## `asyncSemaphoreRelease`

> Provides the module's **async semaphore release** operation. Returns `i32`.

```valor
public i32 asyncSemaphoreRelease(u64 permits, () -> u64 load_permits_acquire, (u64, u64) -> bool add_permits_acq_rel, (u64) -> void wake_satisfied_waiters)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `permits`: u64 (by value)
> - `u64`: () -> u64 load_permits_acquire, ( (borrowed fn-ptr (callback))
> - `wake_satisfied_waiters`: u64) -> bool add_permits_acq_rel, (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::asyncSemaphoreRelease(permits, u64, wake_satisfied_waiters);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-waitnodecancel"></a>

> ## `waitNodeCancel`

> Provides the module's **wait node cancel** operation. Returns `i32`.

```valor
public i32 waitNodeCancel(usize node, (usize, u32, u32) -> bool mark_cancelled_acq_rel, (usize) -> void wake_task)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `wake_task`: (usize, u32, u32) -> bool mark_cancelled_acq_rel, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::waitNodeCancel(node, wake_task);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-asynciteratornext"></a>

> ## `asyncIteratorNext`

> Provides the module's **async iterator next** operation. Returns `i32`.

```valor
public i32 asyncIteratorNext( () -> i32 resume, () -> u32 load_state_acquire, () -> T read_current, (T) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `receive`: () -> i32 resume, () -> u32 load_state_acquire, () -> T read_current, (T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::asyncIteratorNext(receive);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-tasklocalget"></a>

> ## `taskLocalGet`

> Provides the module's **task local get** operation. Returns `i32`.

```valor
public i32 taskLocalGet(u64 task_id, usize capacity, (u64, usize) -> usize find_slot, (usize) -> bool is_initialized, (usize) -> T initialize, (usize, T) -> void write_value, (usize) -> void publish_initialized_release, (usize) -> T read_value, (T) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `task_id`: u64 (by value)
> - `capacity`: usize (by value)
> - `receive`: (u64, usize) -> usize find_slot, (usize) -> bool is_initialized, (usize) -> T initialize, (usize, T) -> void write_value, (usize) -> void publish_initialized_release, (usize) -> T read_value, (T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::taskLocalGet(task_id, capacity, receive);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-selectregister"></a>

> ## `selectRegister`

> Provides the module's **select register** operation. Returns `i32`.

```valor
public i32 selectRegister(usize operation, usize capacity, () -> usize load_count_acquire, (usize, u64) -> bool register_operation_release, u64 generation)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `operation`: usize (by value)
> - `capacity`: usize (by value)
> - `usize`: () -> usize load_count_acquire, ( (borrowed fn-ptr (callback))
> - `generation`: u64) -> bool register_operation_release, u64 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::selectRegister(operation, capacity, usize, generation);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-selectnotify"></a>

> ## `selectNotify`

> Provides the module's **select notify** operation. Returns `i32`.

```valor
public i32 selectNotify(usize operation, u64 generation, () -> u64 load_generation_acquire, (usize, usize) -> bool claim_winner_acq_rel, () -> void wake_selector)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `operation`: usize (by value)
> - `generation`: u64 (by value)
> - `usize`: () -> u64 load_generation_acquire, ( (borrowed fn-ptr (callback))
> - `wake_selector`: usize) -> bool claim_winner_acq_rel, () -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::selectNotify(operation, generation, usize, wake_selector);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-selectpoll"></a>

> ## `selectPoll`

> Provides the module's **select poll** operation. Returns `i32`.

```valor
public i32 selectPoll( () -> usize load_winner_acquire, (usize) -> void receive_winner, () -> void register_selector)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `register_selector`: () -> usize load_winner_acquire, (usize) -> void receive_winner, () -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::async::selectPoll(register_selector);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

<a id="fn-selectcancellosers"></a>

> ## `selectCancelLosers`

> Provides the module's **select cancel losers** operation.

```valor
public void selectCancelLosers(usize count, usize winner, (usize) -> usize registration_at, (usize) -> void cancel_registration)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `winner`: usize (by value)
> - `cancel_registration`: (usize) -> usize registration_at, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::async::selectCancelLosers(count, winner, cancel_registration);
> ```

> ### SEE ALSO
>
> - [`std::async::pollTagIsValid`](#fn-polltagisvalid)
> - [`std::async::futureStateIsTerminal`](#fn-futurestateisterminal)
> - [`std::async::taskStateIsTerminal`](#fn-taskstateisterminal)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Storage](STD-STORAGE-DOC.md) · [Table of contents](standard-library/README.md) · [Concurrent futures →](STD-CONCURRENT-FUTURES-DOC.md)
