<!-- stdlib-reference-style: modern -->
> # `std::sync`

`std::sync` synchronization primitives.

[Standard library](standard-library/README.md) / [Concurrency and time](standard-library/README.md#concurrency-and-time) / **Synchronization**

> **Source:** `stdlib/std/sync.valor` · **Routines:** 79 public

## Routines

<details>
<summary>Browse all 79 routines</summary>

- [`validProgress`](#fn-validprogress)
- [`validFairness`](#fn-validfairness)
- [`atomicIsLockFree`](#fn-atomicislockfree)
- [`atomicLoad`](#fn-atomicload)
- [`atomicStore`](#fn-atomicstore)
- [`atomicExchange`](#fn-atomicexchange)
- [`atomicCompareExchange`](#fn-atomiccompareexchange)
- [`mutexLockAdaptive`](#fn-mutexlockadaptive)
- [`mutexUnlock`](#fn-mutexunlock)
- [`spinLockTry`](#fn-spinlocktry)
- [`ticketLockAcquire`](#fn-ticketlockacquire)
- [`ticketLockRelease`](#fn-ticketlockrelease)
- [`rwReaderMayEnter`](#fn-rwreadermayenter)
- [`rwLockRead`](#fn-rwlockread)
- [`rwLockWrite`](#fn-rwlockwrite)
- [`conditionWait`](#fn-conditionwait)
- [`conditionNotifyOne`](#fn-conditionnotifyone)
- [`conditionNotifyAll`](#fn-conditionnotifyall)
- [`semaphoreTryAcquire`](#fn-semaphoretryacquire)
- [`semaphoreAcquire`](#fn-semaphoreacquire)
- [`semaphoreRelease`](#fn-semaphorerelease)
- [`barrierArrive`](#fn-barrierarrive)
- [`latchCountDown`](#fn-latchcountdown)
- [`eventWait`](#fn-eventwait)
- [`eventSet`](#fn-eventset)
- [`eventReset`](#fn-eventreset)
- [`onceRun`](#fn-oncerun)
- [`onceCellGet`](#fn-oncecellget)
- [`onceCellSet`](#fn-oncecellset)
- [`lazyGet`](#fn-lazyget)
- [`threadLocalGet`](#fn-threadlocalget)
- [`hazardProtect`](#fn-hazardprotect)
- [`hazardClear`](#fn-hazardclear)
- [`hazardMayReclaim`](#fn-hazardmayreclaim)
- [`hazardScan`](#fn-hazardscan)
- [`epochMinimumActive`](#fn-epochminimumactive)
- [`epochEnter`](#fn-epochenter)
- [`epochLeave`](#fn-epochleave)
- [`epochMayReclaim`](#fn-epochmayreclaim)
- [`epochTryAdvance`](#fn-epochtryadvance)
- [`rcuPublish`](#fn-rcupublish)
- [`rcuRead`](#fn-rcuread)
- [`seqLockRead`](#fn-seqlockread)
- [`seqLockWrite`](#fn-seqlockwrite)
- [`versionedCellRead`](#fn-versionedcellread)
- [`versionedCellTryWrite`](#fn-versionedcelltrywrite)
- [`powerOfTwo`](#fn-poweroftwo)
- [`wrappedIndex`](#fn-wrappedindex)
- [`spscTryEnqueue`](#fn-spsctryenqueue)
- [`spscTryDequeue`](#fn-spsctrydequeue)
- [`mpscTryEnqueue`](#fn-mpsctryenqueue)
- [`mpscTryDequeue`](#fn-mpsctrydequeue)
- [`mpmcTryEnqueue`](#fn-mpmctryenqueue)
- [`mpmcTryDequeue`](#fn-mpmctrydequeue)
- [`spmcTryDequeue`](#fn-spmctrydequeue)
- [`boundedChannelTrySend`](#fn-boundedchanneltrysend)
- [`oneshotTrySend`](#fn-oneshottrysend)
- [`oneshotTryReceive`](#fn-oneshottryreceive)
- [`watchPublish`](#fn-watchpublish)
- [`watchRead`](#fn-watchread)
- [`unboundedChannelTrySend`](#fn-unboundedchanneltrysend)
- [`broadcastPublish`](#fn-broadcastpublish)
- [`broadcastTryReceive`](#fn-broadcasttryreceive)
- [`concurrentDequePushBottom`](#fn-concurrentdequepushbottom)
- [`concurrentDequeSteal`](#fn-concurrentdequesteal)
- [`concurrentMapTryInsert`](#fn-concurrentmaptryinsert)
- [`concurrentSetTryInsert`](#fn-concurrentsettryinsert)
- [`numaShard`](#fn-numashard)
- [`aggregateNumaCounters`](#fn-aggregatenumacounters)
- [`concurrentMapTryMutate`](#fn-concurrentmaptrymutate)
- [`spscProgress`](#fn-spscprogress)
- [`mpmcProgress`](#fn-mpmcprogress)
- [`mutexProgress`](#fn-mutexprogress)
- [`rwLockProgress`](#fn-rwlockprogress)
- [`hazardProtectionProgress`](#fn-hazardprotectionprogress)
- [`mpscProgress`](#fn-mpscprogress)
- [`concurrentMapProgress`](#fn-concurrentmapprogress)
- [`boundedChannelProgress`](#fn-boundedchannelprogress)
- [`parkingPrimitiveProgress`](#fn-parkingprimitiveprogress)

</details>

## API reference

<a id="fn-validprogress"></a>

> ## `validProgress`

> Provides the module's **valid progress** operation. Returns `bool`.

```valor
public bool validProgress(u8 progress)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `progress`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::sync::validProgress(progress);
> ```

> ### SEE ALSO
>
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)
> - [`std::sync::atomicLoad`](#fn-atomicload)

<a id="fn-validfairness"></a>

> ## `validFairness`

> Provides the module's **valid fairness** operation. Returns `bool`.

```valor
public bool validFairness(u8 fairness)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `fairness`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::sync::validFairness(fairness);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)
> - [`std::sync::atomicLoad`](#fn-atomicload)

<a id="fn-atomicislockfree"></a>

> ## `atomicIsLockFree`

> Provides the module's **atomic is lock free** operation. Returns `bool`.

```valor
public bool atomicIsLockFree(u8 lock_free_on_target)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `lock_free_on_target`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::sync::atomicIsLockFree(lock_free_on_target);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicLoad`](#fn-atomicload)

<a id="fn-atomicload"></a>

> ## `atomicLoad`

> Provides the module's **atomic load** operation. Returns `T`.

```valor
public T atomicLoad(u8 order, (u8) -> T load_ordered)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `order`: u8 (by value)
> - `load_ordered`: (u8) -> T (borrowed fn-ptr (callback))

> ### RETURNS (T)

> ### EXAMPLE
>
> ```valor
> T result = std::sync::atomicLoad(order, load_ordered);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-atomicstore"></a>

> ## `atomicStore`

> Provides the module's **atomic store** operation.

```valor
public void atomicStore(T value, u8 order, (T, u8) -> void store_ordered)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: T (by value)
> - `order`: u8 (by value)
> - `store_ordered`: (T, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::sync::atomicStore(value, order, store_ordered);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-atomicexchange"></a>

> ## `atomicExchange`

> Provides the module's **atomic exchange** operation. Returns `T`.

```valor
public T atomicExchange(T value, u8 order, (T, u8) -> T exchange_ordered)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: T (by value)
> - `order`: u8 (by value)
> - `exchange_ordered`: (T, u8) -> T (borrowed fn-ptr (callback))

> ### RETURNS (T)

> ### EXAMPLE
>
> ```valor
> T result = std::sync::atomicExchange(value, order, exchange_ordered);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-atomiccompareexchange"></a>

> ## `atomicCompareExchange`

> Provides the module's **atomic compare exchange** operation. Returns `bool`.

```valor
public bool atomicCompareExchange(T expected, T desired, u8 success_order, u8 failure_order, (T, T, u8, u8) -> bool compare_exchange_ordered)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `expected`: T (by value)
> - `desired`: T (by value)
> - `success_order`: u8 (by value)
> - `failure_order`: u8 (by value)
> - `compare_exchange_ordered`: (T, T, u8, u8) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::sync::atomicCompareExchange(expected, desired, success_order, failure_order, compare_exchange_ordered);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-mutexlockadaptive"></a>

> ## `mutexLockAdaptive`

> Adaptive mutex: spin briefly, then register and park. Adaptive mutex: spin briefly, then register and park. A successful unlock may directly hand ownership to a waiter through handoff_one.

```valor
public i32 mutexLockAdaptive(usize spin_limit, () -> bool try_acquire, () -> void register_waiter, () -> i32 park_until_handoff, () -> void unregister_waiter)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `spin_limit`: usize (by value)
> - `unregister_waiter`: () -> bool try_acquire, () -> void register_waiter, () -> i32 park_until_handoff, () -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::mutexLockAdaptive(spin_limit, unregister_waiter);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-mutexunlock"></a>

> ## `mutexUnlock`

> Provides the module's **mutex unlock** operation. Returns `i32`.

```valor
public i32 mutexUnlock(bool poisoned, () -> bool release_if_uncontended, () -> i32 handoff_one)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `poisoned`: bool (by value)
> - `handoff_one`: () -> bool release_if_uncontended, () -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::mutexUnlock(poisoned, handoff_one);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-spinlocktry"></a>

> ## `spinLockTry`

> Provides the module's **spin lock try** operation. Returns `i32`.

```valor
public i32 spinLockTry(usize retry_limit, () -> bool try_acquire)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `retry_limit`: usize (by value)
> - `try_acquire`: () -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::spinLockTry(retry_limit, try_acquire);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-ticketlockacquire"></a>

> ## `ticketLockAcquire`

> Provides the module's **ticket lock acquire** operation. Returns `i32`.

```valor
public i32 ticketLockAcquire(u64 ticket, usize spin_limit, () -> u64 load_serving_acquire, () -> i32 park)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `ticket`: u64 (by value)
> - `spin_limit`: usize (by value)
> - `park`: () -> u64 load_serving_acquire, () -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::ticketLockAcquire(ticket, spin_limit, park);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-ticketlockrelease"></a>

> ## `ticketLockRelease`

> Provides the module's **ticket lock release** operation.

```valor
public void ticketLockRelease(u64 ticket, (u64) -> void store_serving_release, () -> void wake_next)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `ticket`: u64 (by value)
> - `wake_next`: (u64) -> void store_serving_release, () -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::sync::ticketLockRelease(ticket, wake_next);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-rwreadermayenter"></a>

> ## `rwReaderMayEnter`

> Provides the module's **rw reader may enter** operation. Returns `bool`.

```valor
public bool rwReaderMayEnter(u8 fairness, u32 writer_state, u32 queued_writers, u32 phase)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `fairness`: u8 (by value)
> - `writer_state`: u32 (by value)
> - `queued_writers`: u32 (by value)
> - `phase`: u32 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::sync::rwReaderMayEnter(fairness, writer_state, queued_writers, phase);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-rwlockread"></a>

> ## `rwLockRead`

> Provides the module's **rw lock read** operation. Returns `i32`.

```valor
public i32 rwLockRead(u8 fairness, usize retry_limit, () -> u32 load_writer_acquire, () -> u32 load_queued_writers_acquire, () -> u32 load_phase_acquire, () -> bool try_increment_readers, () -> void decrement_readers_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `fairness`: u8 (by value)
> - `retry_limit`: usize (by value)
> - `decrement_readers_release`: () -> u32 load_writer_acquire, () -> u32 load_queued_writers_acquire, () -> u32 load_phase_acquire, () -> bool try_increment_readers, () -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::rwLockRead(fairness, retry_limit, decrement_readers_release);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-rwlockwrite"></a>

> ## `rwLockWrite`

> Provides the module's **rw lock write** operation. Returns `i32`.

```valor
public i32 rwLockWrite(usize retry_limit, () -> bool try_claim_writer, () -> u32 load_readers_acquire, () -> void release_writer, () -> i32 park_writer)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `retry_limit`: usize (by value)
> - `park_writer`: () -> bool try_claim_writer, () -> u32 load_readers_acquire, () -> void release_writer, () -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::rwLockWrite(retry_limit, park_writer);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-conditionwait"></a>

> ## `conditionWait`

> Provides the module's **condition wait** operation. Returns `i32`.

```valor
public i32 conditionWait(u64 observed_generation, () -> void unlock_release, (u64) -> i32 park_while_equal, () -> i32 relock_acquire)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `observed_generation`: u64 (by value)
> - `relock_acquire`: () -> void unlock_release, (u64) -> i32 park_while_equal, () -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::conditionWait(observed_generation, relock_acquire);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-conditionnotifyone"></a>

> ## `conditionNotifyOne`

> Provides the module's **condition notify one** operation.

```valor
public void conditionNotifyOne(() -> u64 increment_generation_release, () -> void wake_one)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `wake_one`: () -> u64 increment_generation_release, () -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::sync::conditionNotifyOne(wake_one);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-conditionnotifyall"></a>

> ## `conditionNotifyAll`

> Provides the module's **condition notify all** operation.

```valor
public void conditionNotifyAll(() -> u64 increment_generation_release, () -> void wake_all)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `wake_all`: () -> u64 increment_generation_release, () -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::sync::conditionNotifyAll(wake_all);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-semaphoretryacquire"></a>

> ## `semaphoreTryAcquire`

> Provides the module's **semaphore try acquire** operation. Returns `i32`.

```valor
public i32 semaphoreTryAcquire(u64 permits, () -> u64 load_permits_acquire, (u64, u64) -> bool compare_exchange_permits)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `permits`: u64 (by value)
> - `u64`: () -> u64 load_permits_acquire, ( (borrowed fn-ptr (callback))
> - `compare_exchange_permits`: u64) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::semaphoreTryAcquire(permits, u64, compare_exchange_permits);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-semaphoreacquire"></a>

> ## `semaphoreAcquire`

> Provides the module's **semaphore acquire** operation. Returns `i32`.

```valor
public i32 semaphoreAcquire(u64 permits, () -> u64 load_permits_acquire, (u64, u64) -> bool compare_exchange_permits, (u64) -> i32 park_for_permits)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `permits`: u64 (by value)
> - `u64`: () -> u64 load_permits_acquire, ( (borrowed fn-ptr (callback))
> - `park_for_permits`: u64) -> bool compare_exchange_permits, (u64) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::semaphoreAcquire(permits, u64, park_for_permits);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-semaphorerelease"></a>

> ## `semaphoreRelease`

> Provides the module's **semaphore release** operation. Returns `i32`.

```valor
public i32 semaphoreRelease(u64 permits, () -> u64 load_permits, (u64, u64) -> bool compare_exchange_permits, (u64) -> void wake_waiters)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `permits`: u64 (by value)
> - `u64`: () -> u64 load_permits, ( (borrowed fn-ptr (callback))
> - `wake_waiters`: u64) -> bool compare_exchange_permits, (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::semaphoreRelease(permits, u64, wake_waiters);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-barrierarrive"></a>

> ## `barrierArrive`

> Provides the module's **barrier arrive** operation. Returns `i32`.

```valor
public i32 barrierArrive(usize parties, () -> usize increment_arrived_acq_rel, () -> void reset_and_advance_generation_release, () -> i32 wait_for_generation)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `parties`: usize (by value)
> - `wait_for_generation`: () -> usize increment_arrived_acq_rel, () -> void reset_and_advance_generation_release, () -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::barrierArrive(parties, wait_for_generation);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-latchcountdown"></a>

> ## `latchCountDown`

> Provides the module's **latch count down** operation. Returns `i32`.

```valor
public i32 latchCountDown(usize amount, () -> usize load_remaining, (usize, usize) -> bool compare_exchange_remaining, () -> void wake_all)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `amount`: usize (by value)
> - `usize`: () -> usize load_remaining, ( (borrowed fn-ptr (callback))
> - `wake_all`: usize) -> bool compare_exchange_remaining, () -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::latchCountDown(amount, usize, wake_all);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-eventwait"></a>

> ## `eventWait`

> Provides the module's **event wait** operation. Returns `i32`.

```valor
public i32 eventWait(() -> u32 load_signaled_acquire, () -> i32 park)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `park`: () -> u32 load_signaled_acquire, () -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::eventWait(park);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-eventset"></a>

> ## `eventSet`

> Provides the module's **event set** operation.

```valor
public void eventSet((u32) -> void store_signaled_release, () -> void wake_all)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `wake_all`: (u32) -> void store_signaled_release, () -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::sync::eventSet(wake_all);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-eventreset"></a>

> ## `eventReset`

> Provides the module's **event reset** operation.

```valor
public void eventReset((u32) -> void store_signaled_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `store_signaled_release`: (u32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::sync::eventReset(store_signaled_release);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-oncerun"></a>

> ## `onceRun`

> Provides the module's **once run** operation. Returns `i32`.

```valor
public i32 onceRun(() -> u32 load_state_acquire, (u32, u32) -> bool compare_exchange_state, () -> i32 initialize, (u32) -> void publish_state_release, () -> i32 wait_for_completion)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `u32`: () -> u32 load_state_acquire, ( (borrowed fn-ptr (callback))
> - `wait_for_completion`: u32) -> bool compare_exchange_state, () -> i32 initialize, (u32) -> void publish_state_release, () -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::onceRun(u32, wait_for_completion);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-oncecellget"></a>

> ## `onceCellGet`

> Provides the module's **once cell get** operation. Returns `i32`.

```valor
public i32 onceCellGet(() -> u32 load_state_acquire, () -> T read_value, (T) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `receive`: () -> u32 load_state_acquire, () -> T read_value, (T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::onceCellGet(receive);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-oncecellset"></a>

> ## `onceCellSet`

> Provides the module's **once cell set** operation. Returns `i32`.

```valor
public i32 onceCellSet(T value, (u32, u32) -> bool compare_exchange_state, (T) -> void write_value, (u32) -> void publish_state_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: T (by value)
> - `publish_state_release`: (u32, u32) -> bool compare_exchange_state, (T) -> void write_value, (u32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::onceCellSet(value, publish_state_release);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-lazyget"></a>

> ## `lazyGet`

> Provides the module's **lazy get** operation. Returns `i32`.

```valor
public i32 lazyGet(() -> u32 load_state_acquire, (u32, u32) -> bool compare_exchange_state, () -> T initialize, (T) -> void write_value, () -> T read_value, (u32) -> void publish_state_release, (T) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `u32`: () -> u32 load_state_acquire, ( (borrowed fn-ptr (callback))
> - `receive`: u32) -> bool compare_exchange_state, () -> T initialize, (T) -> void write_value, () -> T read_value, (u32) -> void publish_state_release, (T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::lazyGet(u32, receive);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-threadlocalget"></a>

> ## `threadLocalGet`

> Provides the module's **thread local get** operation. Returns `i32`.

```valor
public i32 threadLocalGet(usize thread_index, usize thread_capacity, (usize) -> bool is_initialized, (usize) -> T initialize, (usize, T) -> void write_value, (usize) -> void publish_initialized, (usize) -> T read_value, (T) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `thread_index`: usize (by value)
> - `thread_capacity`: usize (by value)
> - `receive`: (usize) -> bool is_initialized, (usize) -> T initialize, (usize, T) -> void write_value, (usize) -> void publish_initialized, (usize) -> T read_value, (T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::threadLocalGet(thread_index, thread_capacity, receive);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-hazardprotect"></a>

> ## `hazardProtect`

> Provides the module's **hazard protect** operation. Returns `i32`.

```valor
public i32 hazardProtect(usize retry_limit, () -> usize load_source_acquire, (usize) -> void publish_hazard_seq_cst, (usize) -> void receive_address)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `retry_limit`: usize (by value)
> - `receive_address`: () -> usize load_source_acquire, (usize) -> void publish_hazard_seq_cst, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::hazardProtect(retry_limit, receive_address);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-hazardclear"></a>

> ## `hazardClear`

> Provides the module's **hazard clear** operation.

```valor
public void hazardClear((usize) -> void publish_hazard_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `publish_hazard_release`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::sync::hazardClear(publish_hazard_release);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-hazardmayreclaim"></a>

> ## `hazardMayReclaim`

> Provides the module's **hazard may reclaim** operation. Returns `bool`.

```valor
public bool hazardMayReclaim(usize address, usize hazard_count, (usize) -> usize load_hazard_acquire)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `address`: usize (by value)
> - `hazard_count`: usize (by value)
> - `load_hazard_acquire`: (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::sync::hazardMayReclaim(address, hazard_count, load_hazard_acquire);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-hazardscan"></a>

> ## `hazardScan`

> Provides the module's **hazard scan** operation. Returns `i32`.

```valor
public i32 hazardScan(usize retired_count, usize hazard_count, (usize) -> usize read_retired, (usize) -> usize load_hazard_acquire, (usize) -> void reclaim, (usize) -> void retain_retired)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `retired_count`: usize (by value)
> - `hazard_count`: usize (by value)
> - `retain_retired`: (usize) -> usize read_retired, (usize) -> usize load_hazard_acquire, (usize) -> void reclaim, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::hazardScan(retired_count, hazard_count, retain_retired);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-epochminimumactive"></a>

> ## `epochMinimumActive`

> Provides the module's **epoch minimum active** operation. Returns `u64`.

```valor
public u64 epochMinimumActive(u64 global_epoch, usize participant_count, (usize) -> bool load_active_acquire, (usize) -> u64 load_epoch_acquire)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `global_epoch`: u64 (by value)
> - `participant_count`: usize (by value)
> - `load_epoch_acquire`: (usize) -> bool load_active_acquire, (usize) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::sync::epochMinimumActive(global_epoch, participant_count, load_epoch_acquire);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-epochenter"></a>

> ## `epochEnter`

> Provides the module's **epoch enter** operation.

```valor
public void epochEnter(u32 participant, u64 epoch, (u32, u64) -> void publish_epoch_release, (u32, bool) -> void publish_active_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `participant`: u32 (by value)
> - `epoch`: u64 (by value)
> - `u32`: (u32, u64) -> void publish_epoch_release, ( (borrowed fn-ptr (callback))
> - `publish_active_release`: bool) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::sync::epochEnter(participant, epoch, u32, publish_active_release);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-epochleave"></a>

> ## `epochLeave`

> Provides the module's **epoch leave** operation.

```valor
public void epochLeave(u32 participant, (u32, bool) -> void publish_active_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `participant`: u32 (by value)
> - `publish_active_release`: (u32, bool) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::sync::epochLeave(participant, publish_active_release);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-epochmayreclaim"></a>

> ## `epochMayReclaim`

> Provides the module's **epoch may reclaim** operation. Returns `bool`.

```valor
public bool epochMayReclaim(u64 retired_epoch, u64 minimum_active_epoch)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `retired_epoch`: u64 (by value)
> - `minimum_active_epoch`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::sync::epochMayReclaim(retired_epoch, minimum_active_epoch);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-epochtryadvance"></a>

> ## `epochTryAdvance`

> Provides the module's **epoch try advance** operation. Returns `i32`.

```valor
public i32 epochTryAdvance(u64 current_epoch, (u64, u64) -> bool compare_exchange_global_epoch)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `current_epoch`: u64 (by value)
> - `compare_exchange_global_epoch`: (u64, u64) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::epochTryAdvance(current_epoch, compare_exchange_global_epoch);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-rcupublish"></a>

> ## `rcuPublish`

> Provides the module's **rcu publish** operation. Returns `i32`.

```valor
public i32 rcuPublish(T replacement, () -> u64 load_generation_acquire, (u64, u64) -> bool compare_exchange_generation, (T) -> void publish_replacement_release, (u64) -> void publish_generation_release, (u64, T) -> void retire_previous, () -> T read_previous)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `replacement`: T (by value)
> - `u64`: () -> u64 load_generation_acquire, ( (borrowed fn-ptr (callback))
> - `read_previous`: u64) -> bool compare_exchange_generation, (T) -> void publish_replacement_release, (u64) -> void publish_generation_release, (u64, T) -> void retire_previous, () -> T (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::rcuPublish(replacement, u64, read_previous);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-rcuread"></a>

> ## `rcuRead`

> Provides the module's **rcu read** operation. Returns `i32`.

```valor
public i32 rcuRead(usize retry_limit, () -> u64 load_generation_acquire, () -> T read_snapshot, (T) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `retry_limit`: usize (by value)
> - `receive`: () -> u64 load_generation_acquire, () -> T read_snapshot, (T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::rcuRead(retry_limit, receive);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-seqlockread"></a>

> ## `seqLockRead`

> Provides the module's **seq lock read** operation. Returns `i32`.

```valor
public i32 seqLockRead(usize retry_limit, () -> u64 load_version_acquire, () -> T copy_value, (T) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `retry_limit`: usize (by value)
> - `receive`: () -> u64 load_version_acquire, () -> T copy_value, (T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::seqLockRead(retry_limit, receive);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-seqlockwrite"></a>

> ## `seqLockWrite`

> Provides the module's **seq lock write** operation. Returns `i32`.

```valor
public i32 seqLockWrite(T value, () -> u64 load_version, (u64, u64) -> bool compare_exchange_version, (T) -> void write_value, (u64) -> void publish_version_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: T (by value)
> - `u64`: () -> u64 load_version, ( (borrowed fn-ptr (callback))
> - `publish_version_release`: u64) -> bool compare_exchange_version, (T) -> void write_value, (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::seqLockWrite(value, u64, publish_version_release);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-versionedcellread"></a>

> ## `versionedCellRead`

> Provides the module's **versioned cell read** operation. Returns `i32`.

```valor
public i32 versionedCellRead(usize retry_limit, () -> u64 load_version_acquire, () -> T read_value, (T, u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `retry_limit`: usize (by value)
> - `receive`: () -> u64 load_version_acquire, () -> T read_value, (T, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::versionedCellRead(retry_limit, receive);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-versionedcelltrywrite"></a>

> ## `versionedCellTryWrite`

> Provides the module's **versioned cell try write** operation. Returns `i32`.

```valor
public i32 versionedCellTryWrite(u64 expected_version, T value, (u64, u64) -> bool compare_exchange_version, (T) -> void write_value, (u64) -> void publish_version_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `expected_version`: u64 (by value)
> - `value`: T (by value)
> - `publish_version_release`: (u64, u64) -> bool compare_exchange_version, (T) -> void write_value, (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::versionedCellTryWrite(expected_version, value, publish_version_release);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

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
> bool result = std::sync::powerOfTwo(value);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-wrappedindex"></a>

> ## `wrappedIndex`

> Provides the module's **wrapped index** operation. Returns `usize`.

```valor
public usize wrappedIndex(usize sequence, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `sequence`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::sync::wrappedIndex(sequence, capacity);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-spsctryenqueue"></a>

> ## `spscTryEnqueue`

> Provides the module's **spsc try enqueue** operation. Returns `i32`.

```valor
public i32 spscTryEnqueue(usize capacity, T value, () -> usize load_head_acquire, () -> usize load_tail_relaxed, (usize, T) -> void write_slot, (usize) -> void store_tail_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `value`: T (by value)
> - `store_tail_release`: () -> usize load_head_acquire, () -> usize load_tail_relaxed, (usize, T) -> void write_slot, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::spscTryEnqueue(capacity, value, store_tail_release);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-spsctrydequeue"></a>

> ## `spscTryDequeue`

> Provides the module's **spsc try dequeue** operation. Returns `i32`.

```valor
public i32 spscTryDequeue(usize capacity, () -> usize load_head_relaxed, () -> usize load_tail_acquire, (usize) -> T read_slot, (T) -> void receive, (usize) -> void store_head_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `store_head_release`: () -> usize load_head_relaxed, () -> usize load_tail_acquire, (usize) -> T read_slot, (T) -> void receive, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::spscTryDequeue(capacity, store_head_release);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-mpsctryenqueue"></a>

> ## `mpscTryEnqueue`

> Provides the module's **mpsc try enqueue** operation. Returns `i32`.

```valor
public i32 mpscTryEnqueue(usize producer, usize producer_count, usize capacity, T value, (usize) -> usize load_head_acquire, (usize) -> usize load_tail_relaxed, (usize, usize, T) -> void write_slot, (usize, usize) -> void store_tail_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `producer`: usize (by value)
> - `producer_count`: usize (by value)
> - `capacity`: usize (by value)
> - `value`: T (by value)
> - `store_tail_release`: (usize) -> usize load_head_acquire, (usize) -> usize load_tail_relaxed, (usize, usize, T) -> void write_slot, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::mpscTryEnqueue(producer, producer_count, capacity, value, store_tail_release);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-mpsctrydequeue"></a>

> ## `mpscTryDequeue`

> Provides the module's **mpsc try dequeue** operation. Returns `i32`.

```valor
public i32 mpscTryDequeue(usize start_producer, usize producer_count, usize capacity, (usize) -> usize load_head_relaxed, (usize) -> usize load_tail_acquire, (usize, usize) -> T read_slot, (T) -> void receive, (usize, usize) -> void store_head_release, (usize) -> void receive_next_cursor)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start_producer`: usize (by value)
> - `producer_count`: usize (by value)
> - `capacity`: usize (by value)
> - `receive_next_cursor`: (usize) -> usize load_head_relaxed, (usize) -> usize load_tail_acquire, (usize, usize) -> T read_slot, (T) -> void receive, (usize, usize) -> void store_head_release, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::mpscTryDequeue(start_producer, producer_count, capacity, receive_next_cursor);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-mpmctryenqueue"></a>

> ## `mpmcTryEnqueue`

> Provides the module's **mpmc try enqueue** operation. Returns `i32`.

```valor
public i32 mpmcTryEnqueue(usize capacity, usize retry_limit, T value, () -> usize load_tail_relaxed, (usize, usize) -> bool compare_exchange_tail, (usize) -> usize load_sequence_acquire, (usize, T) -> void write_payload, (usize, usize) -> void store_sequence_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `retry_limit`: usize (by value)
> - `value`: T (by value)
> - `usize`: () -> usize load_tail_relaxed, ( (borrowed fn-ptr (callback))
> - `store_sequence_release`: usize) -> bool compare_exchange_tail, (usize) -> usize load_sequence_acquire, (usize, T) -> void write_payload, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::mpmcTryEnqueue(capacity, retry_limit, value, usize, store_sequence_release);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-mpmctrydequeue"></a>

> ## `mpmcTryDequeue`

> Provides the module's **mpmc try dequeue** operation. Returns `i32`.

```valor
public i32 mpmcTryDequeue(usize capacity, usize retry_limit, () -> usize load_head_relaxed, (usize, usize) -> bool compare_exchange_head, (usize) -> usize load_sequence_acquire, (usize) -> T read_payload, (T) -> void receive, (usize, usize) -> void store_sequence_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `retry_limit`: usize (by value)
> - `usize`: () -> usize load_head_relaxed, ( (borrowed fn-ptr (callback))
> - `store_sequence_release`: usize) -> bool compare_exchange_head, (usize) -> usize load_sequence_acquire, (usize) -> T read_payload, (T) -> void receive, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::mpmcTryDequeue(capacity, retry_limit, usize, store_sequence_release);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-spmctrydequeue"></a>

> ## `spmcTryDequeue`

> Provides the module's **spmc try dequeue** operation. Returns `i32`.

```valor
public i32 spmcTryDequeue(usize capacity, usize retry_limit, () -> usize load_head_relaxed, (usize, usize) -> bool compare_exchange_head, (usize) -> usize load_sequence_acquire, (usize) -> T read_payload, (T) -> void receive, (usize, usize) -> void store_sequence_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `retry_limit`: usize (by value)
> - `usize`: () -> usize load_head_relaxed, ( (borrowed fn-ptr (callback))
> - `store_sequence_release`: usize) -> bool compare_exchange_head, (usize) -> usize load_sequence_acquire, (usize) -> T read_payload, (T) -> void receive, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::spmcTryDequeue(capacity, retry_limit, usize, store_sequence_release);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-boundedchanneltrysend"></a>

> ## `boundedChannelTrySend`

> Provides the module's **bounded channel try send** operation. Returns `i32`.

```valor
public i32 boundedChannelTrySend(bool closed, usize capacity, T value, () -> usize load_tail_relaxed, (usize, usize) -> bool compare_exchange_tail, (usize) -> usize load_sequence_acquire, (usize, T) -> void write_payload, (usize, usize) -> void store_sequence_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `closed`: bool (by value)
> - `capacity`: usize (by value)
> - `value`: T (by value)
> - `usize`: () -> usize load_tail_relaxed, ( (borrowed fn-ptr (callback))
> - `store_sequence_release`: usize) -> bool compare_exchange_tail, (usize) -> usize load_sequence_acquire, (usize, T) -> void write_payload, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::boundedChannelTrySend(closed, capacity, value, usize, store_sequence_release);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-oneshottrysend"></a>

> ## `oneshotTrySend`

> Provides the module's **oneshot try send** operation. Returns `i32`.

```valor
public i32 oneshotTrySend(T value, (u32, u32) -> bool compare_exchange_state, (T) -> void write_value, (u32) -> void publish_state_release, () -> void wake_receiver)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: T (by value)
> - `wake_receiver`: (u32, u32) -> bool compare_exchange_state, (T) -> void write_value, (u32) -> void publish_state_release, () -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::oneshotTrySend(value, wake_receiver);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-oneshottryreceive"></a>

> ## `oneshotTryReceive`

> Provides the module's **oneshot try receive** operation. Returns `i32`.

```valor
public i32 oneshotTryReceive(() -> u32 load_state_acquire, () -> T read_value, (T) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `receive`: () -> u32 load_state_acquire, () -> T read_value, (T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::oneshotTryReceive(receive);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-watchpublish"></a>

> ## `watchPublish`

> Provides the module's **watch publish** operation.

```valor
public void watchPublish(T value, (T) -> void write_value, () -> u64 increment_version_release, () -> void wake_all)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: T (by value)
> - `wake_all`: (T) -> void write_value, () -> u64 increment_version_release, () -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::sync::watchPublish(value, wake_all);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-watchread"></a>

> ## `watchRead`

> Provides the module's **watch read** operation. Returns `i32`.

```valor
public i32 watchRead(u64 observed_version, () -> u64 load_version_acquire, () -> T read_value, (T, u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `observed_version`: u64 (by value)
> - `receive`: () -> u64 load_version_acquire, () -> T read_value, (T, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::watchRead(observed_version, receive);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-unboundedchanneltrysend"></a>

> ## `unboundedChannelTrySend`

> Provides the module's **unbounded channel try send** operation. Returns `i32`.

```valor
public i32 unboundedChannelTrySend(bool closed, T value, () -> usize load_segment_acquire, (usize, T) -> i32 try_write_segment, (usize) -> i32 allocate_and_link_segment)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `closed`: bool (by value)
> - `value`: T (by value)
> - `usize`: () -> usize load_segment_acquire, ( (borrowed fn-ptr (callback))
> - `allocate_and_link_segment`: T) -> i32 try_write_segment, (usize) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::unboundedChannelTrySend(closed, value, usize, allocate_and_link_segment);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-broadcastpublish"></a>

> ## `broadcastPublish`

> Provides the module's **broadcast publish** operation. Returns `i32`.

```valor
public i32 broadcastPublish(usize capacity, T value, () -> u64 fetch_next_version_acq_rel, (usize, T) -> void write_payload, (usize, u64) -> void publish_slot_version_release, () -> void wake_subscribers)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `value`: T (by value)
> - `usize`: () -> u64 fetch_next_version_acq_rel, ( (borrowed fn-ptr (callback))
> - `wake_subscribers`: T) -> void write_payload, (usize, u64) -> void publish_slot_version_release, () -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::broadcastPublish(capacity, value, usize, wake_subscribers);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-broadcasttryreceive"></a>

> ## `broadcastTryReceive`

> Provides the module's **broadcast try receive** operation. Returns `i32`.

```valor
public i32 broadcastTryReceive(u64 wanted_version, usize capacity, (usize) -> u64 load_slot_version_acquire, (usize) -> T read_payload, (T, u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `wanted_version`: u64 (by value)
> - `capacity`: usize (by value)
> - `receive`: (usize) -> u64 load_slot_version_acquire, (usize) -> T read_payload, (T, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::broadcastTryReceive(wanted_version, capacity, receive);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-concurrentdequepushbottom"></a>

> ## `concurrentDequePushBottom`

> Provides the module's **concurrent deque push bottom** operation. Returns `i32`.

```valor
public i32 concurrentDequePushBottom(usize capacity, usize top, usize bottom, T value, (usize, T) -> void write_slot, (usize) -> void store_bottom_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `top`: usize (by value)
> - `bottom`: usize (by value)
> - `value`: T (by value)
> - `store_bottom_release`: (usize, T) -> void write_slot, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::concurrentDequePushBottom(capacity, top, bottom, value, store_bottom_release);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-concurrentdequesteal"></a>

> ## `concurrentDequeSteal`

> Provides the module's **concurrent deque steal** operation. Returns `i32`.

```valor
public i32 concurrentDequeSteal(usize capacity, () -> usize load_top_acquire, () -> usize load_bottom_acquire, (usize, usize) -> bool compare_exchange_top, (usize) -> T read_slot, (T) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `receive`: () -> usize load_top_acquire, () -> usize load_bottom_acquire, (usize, usize) -> bool compare_exchange_top, (usize) -> T read_slot, (T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::concurrentDequeSteal(capacity, receive);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-concurrentmaptryinsert"></a>

> ## `concurrentMapTryInsert`

> Provides the module's **concurrent map try insert** operation. Returns `i32`.

```valor
public i32 concurrentMapTryInsert(usize capacity, u64 hash, K key, V value, (usize) -> u8 load_control_acquire, (usize, u8, u8) -> bool compare_exchange_control, (usize, K, V) -> void write_entry, (usize, u8) -> void publish_control_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `hash`: u64 (by value)
> - `key`: K (by value)
> - `value`: V (by value)
> - `usize`: (usize) -> u8 load_control_acquire, ( (borrowed fn-ptr (callback))
> - `u8`: u8 (by value)
> - `publish_control_release`: u8) -> bool compare_exchange_control, (usize, K, V) -> void write_entry, (usize, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::concurrentMapTryInsert(capacity, hash, key, value, usize, u8, publish_control_release);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-concurrentsettryinsert"></a>

> ## `concurrentSetTryInsert`

> Provides the module's **concurrent set try insert** operation. Returns `i32`.

```valor
public i32 concurrentSetTryInsert(usize capacity, u64 hash, T value, (usize) -> u8 load_control_acquire, (usize, u8, u8) -> bool compare_exchange_control, (usize, T) -> void write_value, (usize, u8) -> void publish_control_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `hash`: u64 (by value)
> - `value`: T (by value)
> - `usize`: (usize) -> u8 load_control_acquire, ( (borrowed fn-ptr (callback))
> - `u8`: u8 (by value)
> - `publish_control_release`: u8) -> bool compare_exchange_control, (usize, T) -> void write_value, (usize, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::concurrentSetTryInsert(capacity, hash, value, usize, u8, publish_control_release);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-numashard"></a>

> ## `numaShard`

> Provides the module's **numa shard** operation. Returns `usize`.

```valor
public usize numaShard(u64 hash, usize node_count, usize shards_per_node)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `node_count`: usize (by value)
> - `shards_per_node`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::sync::numaShard(hash, node_count, shards_per_node);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-aggregatenumacounters"></a>

> ## `aggregateNumaCounters`

> Local combining avoids a global counter in the mutation path. Local combining avoids a global counter in the mutation path. Aggregation is explicitly deferred and may be performed off the critical path.

```valor
public u64 aggregateNumaCounters(usize node_count, (usize) -> u64 load_local_acquire)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_count`: usize (by value)
> - `load_local_acquire`: (usize) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::sync::aggregateNumaCounters(node_count, load_local_acquire);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-concurrentmaptrymutate"></a>

> ## `concurrentMapTryMutate`

> Provides the module's **concurrent map try mutate** operation. Returns `i32`.

```valor
public i32 concurrentMapTryMutate(u64 hash, usize node_count, usize shards_per_node, (usize) -> bool try_claim_shard, (usize) -> i32 mutate, (usize) -> void release_shard)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `node_count`: usize (by value)
> - `shards_per_node`: usize (by value)
> - `release_shard`: (usize) -> bool try_claim_shard, (usize) -> i32 mutate, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::sync::concurrentMapTryMutate(hash, node_count, shards_per_node, release_shard);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-spscprogress"></a>

> ## `spscProgress`

> Provides the module's **spsc progress** operation. Returns `u8`.

```valor
public u8 spscProgress(bool target_atomics_lock_free)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `target_atomics_lock_free`: bool (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::sync::spscProgress(target_atomics_lock_free);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-mpmcprogress"></a>

> ## `mpmcProgress`

> Provides the module's **mpmc progress** operation. Returns `u8`.

```valor
public u8 mpmcProgress(bool target_atomics_lock_free)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `target_atomics_lock_free`: bool (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::sync::mpmcProgress(target_atomics_lock_free);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-mutexprogress"></a>

> ## `mutexProgress`

> Provides the module's **mutex progress** operation. Returns `u8`.

```valor
public u8 mutexProgress()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::sync::mutexProgress();
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-rwlockprogress"></a>

> ## `rwLockProgress`

> Provides the module's **rw lock progress** operation. Returns `u8`.

```valor
public u8 rwLockProgress()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::sync::rwLockProgress();
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-hazardprotectionprogress"></a>

> ## `hazardProtectionProgress`

> Provides the module's **hazard protection progress** operation. Returns `u8`.

```valor
public u8 hazardProtectionProgress(bool target_atomics_lock_free)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `target_atomics_lock_free`: bool (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::sync::hazardProtectionProgress(target_atomics_lock_free);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-mpscprogress"></a>

> ## `mpscProgress`

> Provides the module's **mpsc progress** operation. Returns `u8`.

```valor
public u8 mpscProgress(bool target_atomics_lock_free)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `target_atomics_lock_free`: bool (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::sync::mpscProgress(target_atomics_lock_free);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-concurrentmapprogress"></a>

> ## `concurrentMapProgress`

> Provides the module's **concurrent map progress** operation. Returns `u8`.

```valor
public u8 concurrentMapProgress(bool atomics_lock_free, bool reclamation_lock_free)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `atomics_lock_free`: bool (by value)
> - `reclamation_lock_free`: bool (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::sync::concurrentMapProgress(atomics_lock_free, reclamation_lock_free);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-boundedchannelprogress"></a>

> ## `boundedChannelProgress`

> Provides the module's **bounded channel progress** operation. Returns `u8`.

```valor
public u8 boundedChannelProgress(bool target_atomics_lock_free)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `target_atomics_lock_free`: bool (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::sync::boundedChannelProgress(target_atomics_lock_free);
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

<a id="fn-parkingprimitiveprogress"></a>

> ## `parkingPrimitiveProgress`

> Provides the module's **parking primitive progress** operation. Returns `u8`.

```valor
public u8 parkingPrimitiveProgress()
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> None.

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::sync::parkingPrimitiveProgress();
> ```

> ### SEE ALSO
>
> - [`std::sync::validProgress`](#fn-validprogress)
> - [`std::sync::validFairness`](#fn-validfairness)
> - [`std::sync::atomicIsLockFree`](#fn-atomicislockfree)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Concurrent futures](STD-CONCURRENT-FUTURES-DOC.md) · [Table of contents](standard-library/README.md) · [Scheduling →](STD-SCHEDULE-DOC.md)
