<!-- stdlib-reference-style: modern -->
> # `std::collections::queue`

`std::collections::queue` queue and deque operations.

[Standard library](standard-library/README.md) / [Collections and text](standard-library/README.md#collections-and-text) / **Queues**

> **Source:** `stdlib/std/collections/queue.valor` · **Routines:** 67 public

## Routines

<details>
<summary>Browse all 67 routines</summary>

- [`addFits`](#fn-addfits)
- [`powerOfTwo`](#fn-poweroftwo)
- [`wrappedIndex`](#fn-wrappedindex)
- [`nextLength`](#fn-nextlength)
- [`previousLength`](#fn-previouslength)
- [`contiguousStateIsValid`](#fn-contiguousstateisvalid)
- [`queueStateIsValid`](#fn-queuestateisvalid)
- [`boundedQueueStateIsValid`](#fn-boundedqueuestateisvalid)
- [`queueLength`](#fn-queuelength)
- [`queueCanEnqueue`](#fn-queuecanenqueue)
- [`queueCanDequeue`](#fn-queuecandequeue)
- [`queueEnqueueIndex`](#fn-queueenqueueindex)
- [`queueDequeueIndex`](#fn-queuedequeueindex)
- [`orderingIsValid`](#fn-orderingisvalid)
- [`heapStateIsValid`](#fn-heapstateisvalid)
- [`heapParent`](#fn-heapparent)
- [`heapLeftChild`](#fn-heapleftchild)
- [`heapRightChild`](#fn-heaprightchild)
- [`numaPolicyIsValid`](#fn-numapolicyisvalid)
- [`numaPartitionBegin`](#fn-numapartitionbegin)
- [`numaPartitionLength`](#fn-numapartitionlength)
- [`stackPush`](#fn-stackpush)
- [`stackPop`](#fn-stackpop)
- [`stackPeek`](#fn-stackpeek)
- [`queueEnqueue`](#fn-queueenqueue)
- [`queueDequeue`](#fn-queuedequeue)
- [`queueHeadAfterDequeue`](#fn-queueheadafterdequeue)
- [`queueTailAfterEnqueue`](#fn-queuetailafterenqueue)
- [`queueTryEnqueueConcurrent`](#fn-queuetryenqueueconcurrent)
- [`queueTryDequeueConcurrent`](#fn-queuetrydequeueconcurrent)
- [`heapPeek`](#fn-heappeek)
- [`heapInsert`](#fn-heapinsert)
- [`heapRemoveRoot`](#fn-heapremoveroot)
- [`heapSiftDown`](#fn-heapsiftdown)
- [`heapBuild`](#fn-heapbuild)
- [`stablePrecedes`](#fn-stableprecedes)
- [`nextInsertionOrderFits`](#fn-nextinsertionorderfits)
- [`stablePriorityInsert`](#fn-stablepriorityinsert)
- [`stablePriorityRemove`](#fn-stablepriorityremove)
- [`indexedSiftUp`](#fn-indexedsiftup)
- [`indexedSiftDown`](#fn-indexedsiftdown)
- [`indexedInsert`](#fn-indexedinsert)
- [`indexedUpdatePriority`](#fn-indexedupdatepriority)
- [`indexedRemove`](#fn-indexedremove)
- [`delayReady`](#fn-delayready)
- [`delayPeekStatus`](#fn-delaypeekstatus)
- [`delayInsert`](#fn-delayinsert)
- [`delayRemoveReady`](#fn-delayremoveready)
- [`timerWheelStateIsValid`](#fn-timerwheelstateisvalid)
- [`timerDeadlineTick`](#fn-timerdeadlinetick)
- [`timerWheelLevel`](#fn-timerwheellevel)
- [`timerWheelLevelDivisor`](#fn-timerwheelleveldivisor)
- [`timerWheelBucket`](#fn-timerwheelbucket)
- [`timerExpired`](#fn-timerexpired)
- [`timerWheelSchedule`](#fn-timerwheelschedule)
- [`timerWheelAdvance`](#fn-timerwheeladvance)
- [`calendarQueueStateIsValid`](#fn-calendarqueuestateisvalid)
- [`calendarBucket`](#fn-calendarbucket)
- [`calendarNextBucket`](#fn-calendarnextbucket)
- [`calendarResizeRecommended`](#fn-calendarresizerecommended)
- [`calendarSchedule`](#fn-calendarschedule)
- [`calendarTakeBucket`](#fn-calendartakebucket)
- [`workStealingStateIsValid`](#fn-workstealingstateisvalid)
- [`workStealingLength`](#fn-workstealinglength)
- [`workStealingOwnerPush`](#fn-workstealingownerpush)
- [`workStealingOwnerPop`](#fn-workstealingownerpop)
- [`workStealingSteal`](#fn-workstealingsteal)

</details>

## API reference

<a id="fn-addfits"></a>

> ## `addFits`

> Provides the module's **add fits** operation. Returns `bool`.

```valor
public bool addFits(usize left, usize right)
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
> bool result = std::collections::queue::addFits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)
> - [`std::collections::queue::nextLength`](#fn-nextlength)

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
> bool result = std::collections::queue::powerOfTwo(value);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)
> - [`std::collections::queue::nextLength`](#fn-nextlength)

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
> usize result = std::collections::queue::wrappedIndex(sequence, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::nextLength`](#fn-nextlength)

<a id="fn-nextlength"></a>

> ## `nextLength`

> Provides the module's **next length** operation. Returns `usize`.

```valor
public usize nextLength(usize length, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::queue::nextLength(length, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-previouslength"></a>

> ## `previousLength`

> Provides the module's **previous length** operation. Returns `usize`.

```valor
public usize previousLength(usize length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::queue::previousLength(length);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-contiguousstateisvalid"></a>

> ## `contiguousStateIsValid`

> Provides the module's **contiguous state is valid** operation. Returns `bool`.

```valor
public bool contiguousStateIsValid(usize length, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::queue::contiguousStateIsValid(length, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-queuestateisvalid"></a>

> ## `queueStateIsValid`

> Provides the module's **queue state is valid** operation. Returns `bool`.

```valor
public bool queueStateIsValid(usize head_sequence, usize tail_sequence, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `head_sequence`: usize (by value)
> - `tail_sequence`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::queue::queueStateIsValid(head_sequence, tail_sequence, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-boundedqueuestateisvalid"></a>

> ## `boundedQueueStateIsValid`

> Provides the module's **bounded queue state is valid** operation. Returns `bool`.

```valor
public bool boundedQueueStateIsValid(usize head_sequence, usize tail_sequence, usize capacity, usize fixed_capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `head_sequence`: usize (by value)
> - `tail_sequence`: usize (by value)
> - `capacity`: usize (by value)
> - `fixed_capacity`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::queue::boundedQueueStateIsValid(head_sequence, tail_sequence, capacity, fixed_capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-queuelength"></a>

> ## `queueLength`

> Provides the module's **queue length** operation. Returns `usize`.

```valor
public usize queueLength(usize head_sequence, usize tail_sequence)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `head_sequence`: usize (by value)
> - `tail_sequence`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::queue::queueLength(head_sequence, tail_sequence);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-queuecanenqueue"></a>

> ## `queueCanEnqueue`

> Provides the module's **queue can enqueue** operation. Returns `bool`.

```valor
public bool queueCanEnqueue(usize head_sequence, usize tail_sequence, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `head_sequence`: usize (by value)
> - `tail_sequence`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::queue::queueCanEnqueue(head_sequence, tail_sequence, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-queuecandequeue"></a>

> ## `queueCanDequeue`

> Provides the module's **queue can dequeue** operation. Returns `bool`.

```valor
public bool queueCanDequeue(usize head_sequence, usize tail_sequence, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `head_sequence`: usize (by value)
> - `tail_sequence`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::queue::queueCanDequeue(head_sequence, tail_sequence, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-queueenqueueindex"></a>

> ## `queueEnqueueIndex`

> Provides the module's **queue enqueue index** operation. Returns `usize`.

```valor
public usize queueEnqueueIndex(usize tail_sequence, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tail_sequence`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::queue::queueEnqueueIndex(tail_sequence, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-queuedequeueindex"></a>

> ## `queueDequeueIndex`

> Provides the module's **queue dequeue index** operation. Returns `usize`.

```valor
public usize queueDequeueIndex(usize head_sequence, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `head_sequence`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::queue::queueDequeueIndex(head_sequence, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-orderingisvalid"></a>

> ## `orderingIsValid`

> Provides the module's **ordering is valid** operation. Returns `bool`.

```valor
public bool orderingIsValid(u8 ordering)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `ordering`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::queue::orderingIsValid(ordering);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-heapstateisvalid"></a>

> ## `heapStateIsValid`

> Provides the module's **heap state is valid** operation. Returns `bool`.

```valor
public bool heapStateIsValid(usize length, usize capacity, u8 ordering)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `ordering`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::queue::heapStateIsValid(length, capacity, ordering);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-heapparent"></a>

> ## `heapParent`

> Provides the module's **heap parent** operation. Returns `usize`.

```valor
public usize heapParent(usize child)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `child`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::queue::heapParent(child);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-heapleftchild"></a>

> ## `heapLeftChild`

> Provides the module's **heap left child** operation. Returns `usize`.

```valor
public usize heapLeftChild(usize parent)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `parent`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::queue::heapLeftChild(parent);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-heaprightchild"></a>

> ## `heapRightChild`

> Provides the module's **heap right child** operation. Returns `usize`.

```valor
public usize heapRightChild(usize parent)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `parent`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::queue::heapRightChild(parent);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-numapolicyisvalid"></a>

> ## `numaPolicyIsValid`

> Provides the module's **numa policy is valid** operation. Returns `bool`.

```valor
public bool numaPolicyIsValid(u8 policy)
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
> bool result = std::collections::queue::numaPolicyIsValid(policy);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-numapartitionbegin"></a>

> ## `numaPartitionBegin`

> Provides the module's **numa partition begin** operation. Returns `usize`.

```valor
public usize numaPartitionBegin(usize capacity, usize node_count, usize node)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `node_count`: usize (by value)
> - `node`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::queue::numaPartitionBegin(capacity, node_count, node);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-numapartitionlength"></a>

> ## `numaPartitionLength`

> Provides the module's **numa partition length** operation. Returns `usize`.

```valor
public usize numaPartitionLength(usize capacity, usize node_count, usize node)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `node_count`: usize (by value)
> - `node`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::queue::numaPartitionLength(capacity, node_count, node);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-stackpush"></a>

> ## `stackPush`

> Provides the module's **stack push** operation. Returns `i32`.

```valor
public i32 stackPush(usize length, usize capacity, T value, (usize, T) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `value`: T (by value)
> - `write`: (usize, T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::queue::stackPush(length, capacity, value, write);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-stackpop"></a>

> ## `stackPop`

> Provides the module's **stack pop** operation. Returns `i32`.

```valor
public i32 stackPop(usize length, (usize) -> T read, (T) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `receive`: (usize) -> T read, (T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::queue::stackPop(length, receive);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-stackpeek"></a>

> ## `stackPeek`

> Provides the module's **stack peek** operation. Returns `i32`.

```valor
public i32 stackPeek(usize length, (usize) -> T read, (T) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `receive`: (usize) -> T read, (T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::queue::stackPeek(length, receive);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-queueenqueue"></a>

> ## `queueEnqueue`

> Provides the module's **queue enqueue** operation. Returns `i32`.

```valor
public i32 queueEnqueue(usize head_sequence, usize tail_sequence, usize capacity, T value, (usize, T) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `head_sequence`: usize (by value)
> - `tail_sequence`: usize (by value)
> - `capacity`: usize (by value)
> - `value`: T (by value)
> - `write`: (usize, T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::queue::queueEnqueue(head_sequence, tail_sequence, capacity, value, write);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-queuedequeue"></a>

> ## `queueDequeue`

> Provides the module's **queue dequeue** operation. Returns `i32`.

```valor
public i32 queueDequeue(usize head_sequence, usize tail_sequence, usize capacity, (usize) -> T read, (T) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `head_sequence`: usize (by value)
> - `tail_sequence`: usize (by value)
> - `capacity`: usize (by value)
> - `receive`: (usize) -> T read, (T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::queue::queueDequeue(head_sequence, tail_sequence, capacity, receive);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-queueheadafterdequeue"></a>

> ## `queueHeadAfterDequeue`

> Provides the module's **queue head after dequeue** operation. Returns `usize`.

```valor
public usize queueHeadAfterDequeue(usize head_sequence, usize tail_sequence)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `head_sequence`: usize (by value)
> - `tail_sequence`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::queue::queueHeadAfterDequeue(head_sequence, tail_sequence);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-queuetailafterenqueue"></a>

> ## `queueTailAfterEnqueue`

> Provides the module's **queue tail after enqueue** operation. Returns `usize`.

```valor
public usize queueTailAfterEnqueue(usize head_sequence, usize tail_sequence, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `head_sequence`: usize (by value)
> - `tail_sequence`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::queue::queueTailAfterEnqueue(head_sequence, tail_sequence, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-queuetryenqueueconcurrent"></a>

> ## `queueTryEnqueueConcurrent`

> Provides the module's **queue try enqueue concurrent** operation. Returns `i32`.

```valor
public i32 queueTryEnqueueConcurrent(usize capacity, T value, () -> usize load_tail, (usize, usize) -> bool compare_exchange_tail, (usize) -> usize load_slot_sequence, (usize, T) -> void write_value, (usize, usize) -> void publish_slot_sequence)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `value`: T (by value)
> - `usize`: () -> usize load_tail, ( (borrowed fn-ptr (callback))
> - `publish_slot_sequence`: usize) -> bool compare_exchange_tail, (usize) -> usize load_slot_sequence, (usize, T) -> void write_value, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::queue::queueTryEnqueueConcurrent(capacity, value, usize, publish_slot_sequence);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-queuetrydequeueconcurrent"></a>

> ## `queueTryDequeueConcurrent`

> Provides the module's **queue try dequeue concurrent** operation. Returns `i32`.

```valor
public i32 queueTryDequeueConcurrent(usize capacity, () -> usize load_head, (usize, usize) -> bool compare_exchange_head, (usize) -> usize load_slot_sequence, (usize) -> T read_value, (T) -> void receive, (usize, usize) -> void release_slot_sequence)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `usize`: () -> usize load_head, ( (borrowed fn-ptr (callback))
> - `release_slot_sequence`: usize) -> bool compare_exchange_head, (usize) -> usize load_slot_sequence, (usize) -> T read_value, (T) -> void receive, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::queue::queueTryDequeueConcurrent(capacity, usize, release_slot_sequence);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-heappeek"></a>

> ## `heapPeek`

> Provides the module's **heap peek** operation. Returns `i32`.

```valor
public i32 heapPeek(usize length, (usize) -> T read, (T) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `receive`: (usize) -> T read, (T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::queue::heapPeek(length, receive);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-heapinsert"></a>

> ## `heapInsert`

> Provides the module's **heap insert** operation. Returns `i32`.

```valor
public i32 heapInsert(usize length, usize capacity, T value, (usize) -> T read, (usize, T) -> void write, (T, T) -> bool precedes)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `value`: T (by value)
> - `usize`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `precedes`: T) -> void write, (T, T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::queue::heapInsert(length, capacity, value, usize, precedes);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-heapremoveroot"></a>

> ## `heapRemoveRoot`

> Provides the module's **heap remove root** operation. Returns `i32`.

```valor
public i32 heapRemoveRoot(usize length, (usize) -> T read, (usize, T) -> void write, (T, T) -> bool precedes, (T) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `usize`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `receive`: T) -> void write, (T, T) -> bool precedes, (T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::queue::heapRemoveRoot(length, usize, receive);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-heapsiftdown"></a>

> ## `heapSiftDown`

> Provides the module's **heap sift down** operation. Returns `i32`.

```valor
public i32 heapSiftDown(usize length, usize root, (usize) -> T read, (usize, T) -> void write, (T, T) -> bool precedes)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `root`: usize (by value)
> - `usize`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `precedes`: T) -> void write, (T, T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::queue::heapSiftDown(length, root, usize, precedes);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-heapbuild"></a>

> ## `heapBuild`

> Provides the module's **heap build** operation. Returns `i32`.

```valor
public i32 heapBuild(usize length, (usize) -> T read, (usize, T) -> void write, (T, T) -> bool precedes)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `usize`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `precedes`: T) -> void write, (T, T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::queue::heapBuild(length, usize, precedes);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-stableprecedes"></a>

> ## `stablePrecedes`

> Provides the module's **stable precedes** operation. Returns `bool`.

```valor
public bool stablePrecedes(i64 left_priority, u64 left_order, i64 right_priority, u64 right_order)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_priority`: i64 (by value)
> - `left_order`: u64 (by value)
> - `right_priority`: i64 (by value)
> - `right_order`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::queue::stablePrecedes(left_priority, left_order, right_priority, right_order);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-nextinsertionorderfits"></a>

> ## `nextInsertionOrderFits`

> Provides the module's **next insertion order fits** operation. Returns `bool`.

```valor
public bool nextInsertionOrderFits(u64 next_order)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `next_order`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::queue::nextInsertionOrderFits(next_order);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-stablepriorityinsert"></a>

> ## `stablePriorityInsert`

> Provides the module's **stable priority insert** operation. Returns `i32`.

```valor
public i32 stablePriorityInsert(usize length, usize capacity, u64 insertion_order, T value, i64 priority, (usize) -> T read_value, (usize) -> i64 read_priority, (usize) -> u64 read_order, (usize, T, i64, u64) -> void write_entry)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `insertion_order`: u64 (by value)
> - `value`: T (by value)
> - `priority`: i64 (by value)
> - `write_entry`: (usize) -> T read_value, (usize) -> i64 read_priority, (usize) -> u64 read_order, (usize, T, i64, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::queue::stablePriorityInsert(length, capacity, insertion_order, value, priority, write_entry);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-stablepriorityremove"></a>

> ## `stablePriorityRemove`

> Provides the module's **stable priority remove** operation. Returns `i32`.

```valor
public i32 stablePriorityRemove(usize length, (usize) -> T read_value, (usize) -> i64 read_priority, (usize) -> u64 read_order, (usize, T, i64, u64) -> void write_entry, (T, i64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `receive`: (usize) -> T read_value, (usize) -> i64 read_priority, (usize) -> u64 read_order, (usize, T, i64, u64) -> void write_entry, (T, i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::queue::stablePriorityRemove(length, receive);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-indexedsiftup"></a>

> ## `indexedSiftUp`

> Provides the module's **indexed sift up** operation. Returns `i32`.

```valor
public i32 indexedSiftUp(usize index, (usize) -> K read_key, (usize) -> P read_priority, (usize, K, P) -> void write_entry, (K, usize) -> void set_index, (P, P) -> bool precedes)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: usize (by value)
> - `precedes`: (usize) -> K read_key, (usize) -> P read_priority, (usize, K, P) -> void write_entry, (K, usize) -> void set_index, (P, P) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::queue::indexedSiftUp(index, precedes);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-indexedsiftdown"></a>

> ## `indexedSiftDown`

> Provides the module's **indexed sift down** operation. Returns `i32`.

```valor
public i32 indexedSiftDown(usize length, usize index, (usize) -> K read_key, (usize) -> P read_priority, (usize, K, P) -> void write_entry, (K, usize) -> void set_index, (P, P) -> bool precedes)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `index`: usize (by value)
> - `precedes`: (usize) -> K read_key, (usize) -> P read_priority, (usize, K, P) -> void write_entry, (K, usize) -> void set_index, (P, P) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::queue::indexedSiftDown(length, index, precedes);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-indexedinsert"></a>

> ## `indexedInsert`

> Provides the module's **indexed insert** operation. Returns `i32`.

```valor
public i32 indexedInsert(usize length, usize capacity, K key, P priority, (usize) -> K read_key, (usize) -> P read_priority, (usize, K, P) -> void write_entry, (K, usize) -> void set_index, (P, P) -> bool precedes)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `key`: K (by value)
> - `priority`: P (by value)
> - `precedes`: (usize) -> K read_key, (usize) -> P read_priority, (usize, K, P) -> void write_entry, (K, usize) -> void set_index, (P, P) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::queue::indexedInsert(length, capacity, key, priority, precedes);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-indexedupdatepriority"></a>

> ## `indexedUpdatePriority`

> Provides the module's **indexed update priority** operation. Returns `i32`.

```valor
public i32 indexedUpdatePriority(usize length, usize index, P new_priority, (usize) -> K read_key, (usize) -> P read_priority, (usize, K, P) -> void write_entry, (K, usize) -> void set_index, (P, P) -> bool precedes)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `index`: usize (by value)
> - `new_priority`: P (by value)
> - `precedes`: (usize) -> K read_key, (usize) -> P read_priority, (usize, K, P) -> void write_entry, (K, usize) -> void set_index, (P, P) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::queue::indexedUpdatePriority(length, index, new_priority, precedes);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-indexedremove"></a>

> ## `indexedRemove`

> Provides the module's **indexed remove** operation. Returns `i32`.

```valor
public i32 indexedRemove(usize length, usize index, (usize) -> K read_key, (usize) -> P read_priority, (usize, K, P) -> void write_entry, (K, usize) -> void set_index, (K) -> void erase_index, (P, P) -> bool precedes, (K, P) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `index`: usize (by value)
> - `receive`: (usize) -> K read_key, (usize) -> P read_priority, (usize, K, P) -> void write_entry, (K, usize) -> void set_index, (K) -> void erase_index, (P, P) -> bool precedes, (K, P) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::queue::indexedRemove(length, index, receive);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-delayready"></a>

> ## `delayReady`

> Provides the module's **delay ready** operation. Returns `bool`.

```valor
public bool delayReady(u64 deadline, u64 now)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `deadline`: u64 (by value)
> - `now`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::queue::delayReady(deadline, now);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-delaypeekstatus"></a>

> ## `delayPeekStatus`

> Provides the module's **delay peek status** operation. Returns `i32`.

```valor
public i32 delayPeekStatus(usize length, u64 root_deadline, u64 now)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `root_deadline`: u64 (by value)
> - `now`: u64 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::queue::delayPeekStatus(length, root_deadline, now);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-delayinsert"></a>

> ## `delayInsert`

> Provides the module's **delay insert** operation. Returns `i32`.

```valor
public i32 delayInsert(usize length, usize capacity, T value, u64 deadline, (usize) -> T read_value, (usize) -> u64 read_deadline, (usize, T, u64) -> void write_entry)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `value`: T (by value)
> - `deadline`: u64 (by value)
> - `write_entry`: (usize) -> T read_value, (usize) -> u64 read_deadline, (usize, T, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::queue::delayInsert(length, capacity, value, deadline, write_entry);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-delayremoveready"></a>

> ## `delayRemoveReady`

> Provides the module's **delay remove ready** operation. Returns `i32`.

```valor
public i32 delayRemoveReady(usize length, u64 now, (usize) -> T read_value, (usize) -> u64 read_deadline, (usize, T, u64) -> void write_entry, (T, u64) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `now`: u64 (by value)
> - `receive`: (usize) -> T read_value, (usize) -> u64 read_deadline, (usize, T, u64) -> void write_entry, (T, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::queue::delayRemoveReady(length, now, receive);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-timerwheelstateisvalid"></a>

> ## `timerWheelStateIsValid`

> Provides the module's **timer wheel state is valid** operation. Returns `bool`.

```valor
public bool timerWheelStateIsValid(usize length, usize capacity, usize level_count, usize slots_per_level, u64 tick_resolution)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `level_count`: usize (by value)
> - `slots_per_level`: usize (by value)
> - `tick_resolution`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::queue::timerWheelStateIsValid(length, capacity, level_count, slots_per_level, tick_resolution);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-timerdeadlinetick"></a>

> ## `timerDeadlineTick`

> Provides the module's **timer deadline tick** operation. Returns `u64`.

```valor
public u64 timerDeadlineTick(u64 deadline, u64 resolution)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `deadline`: u64 (by value)
> - `resolution`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::collections::queue::timerDeadlineTick(deadline, resolution);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-timerwheellevel"></a>

> ## `timerWheelLevel`

> Provides the module's **timer wheel level** operation. Returns `usize`.

```valor
public usize timerWheelLevel(u64 current_tick, u64 deadline_tick, usize level_count, usize slots_per_level)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `current_tick`: u64 (by value)
> - `deadline_tick`: u64 (by value)
> - `level_count`: usize (by value)
> - `slots_per_level`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::queue::timerWheelLevel(current_tick, deadline_tick, level_count, slots_per_level);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-timerwheelleveldivisor"></a>

> ## `timerWheelLevelDivisor`

> Provides the module's **timer wheel level divisor** operation. Returns `u64`.

```valor
public u64 timerWheelLevelDivisor(usize level, usize slots_per_level)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `level`: usize (by value)
> - `slots_per_level`: usize (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::collections::queue::timerWheelLevelDivisor(level, slots_per_level);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-timerwheelbucket"></a>

> ## `timerWheelBucket`

> Provides the module's **timer wheel bucket** operation. Returns `usize`.

```valor
public usize timerWheelBucket(u64 current_tick, u64 deadline_tick, usize level_count, usize slots_per_level)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `current_tick`: u64 (by value)
> - `deadline_tick`: u64 (by value)
> - `level_count`: usize (by value)
> - `slots_per_level`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::queue::timerWheelBucket(current_tick, deadline_tick, level_count, slots_per_level);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-timerexpired"></a>

> ## `timerExpired`

> Provides the module's **timer expired** operation. Returns `bool`.

```valor
public bool timerExpired(u64 deadline_tick, u64 current_tick)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `deadline_tick`: u64 (by value)
> - `current_tick`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::queue::timerExpired(deadline_tick, current_tick);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-timerwheelschedule"></a>

> ## `timerWheelSchedule`

> Provides the module's **timer wheel schedule** operation. Returns `i32`.

```valor
public i32 timerWheelSchedule(usize length, usize capacity, u64 current_tick, u64 deadline, u64 tick_resolution, usize level_count, usize slots_per_level, usize entry, (usize) -> usize read_bucket_head, (usize, usize) -> void write_next, (usize, usize) -> void write_bucket_head)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `current_tick`: u64 (by value)
> - `deadline`: u64 (by value)
> - `tick_resolution`: u64 (by value)
> - `level_count`: usize (by value)
> - `slots_per_level`: usize (by value)
> - `entry`: usize (by value)
> - `usize`: (usize) -> usize read_bucket_head, ( (borrowed fn-ptr (callback))
> - `write_bucket_head`: usize) -> void write_next, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::queue::timerWheelSchedule(length, capacity, current_tick, deadline, tick_resolution, level_count, slots_per_level, entry, usize, write_bucket_head);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-timerwheeladvance"></a>

> ## `timerWheelAdvance`

> Advances one level-zero bucket. Advances one level-zero bucket. The caller receives its intrusive list and may expire entries or reinsert them at a higher-resolution deadline.

```valor
public i32 timerWheelAdvance(u64 current_tick, usize slots_per_level, usize empty_bucket, (usize) -> usize read_bucket_head, (usize, usize) -> void write_bucket_head, (usize) -> void receive_head)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `current_tick`: u64 (by value)
> - `slots_per_level`: usize (by value)
> - `empty_bucket`: usize (by value)
> - `usize`: (usize) -> usize read_bucket_head, ( (borrowed fn-ptr (callback))
> - `receive_head`: usize) -> void write_bucket_head, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::queue::timerWheelAdvance(current_tick, slots_per_level, empty_bucket, usize, receive_head);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-calendarqueuestateisvalid"></a>

> ## `calendarQueueStateIsValid`

> Provides the module's **calendar queue state is valid** operation. Returns `bool`.

```valor
public bool calendarQueueStateIsValid(usize length, usize capacity, usize bucket_count, u64 bucket_width, usize current_bucket)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `bucket_count`: usize (by value)
> - `bucket_width`: u64 (by value)
> - `current_bucket`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::queue::calendarQueueStateIsValid(length, capacity, bucket_count, bucket_width, current_bucket);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-calendarbucket"></a>

> ## `calendarBucket`

> Provides the module's **calendar bucket** operation. Returns `usize`.

```valor
public usize calendarBucket(u64 timestamp, u64 origin, u64 bucket_width, usize bucket_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `timestamp`: u64 (by value)
> - `origin`: u64 (by value)
> - `bucket_width`: u64 (by value)
> - `bucket_count`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::queue::calendarBucket(timestamp, origin, bucket_width, bucket_count);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-calendarnextbucket"></a>

> ## `calendarNextBucket`

> Provides the module's **calendar next bucket** operation. Returns `usize`.

```valor
public usize calendarNextBucket(usize current_bucket, usize bucket_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `current_bucket`: usize (by value)
> - `bucket_count`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::queue::calendarNextBucket(current_bucket, bucket_count);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-calendarresizerecommended"></a>

> ## `calendarResizeRecommended`

> Provides the module's **calendar resize recommended** operation. Returns `bool`.

```valor
public bool calendarResizeRecommended(usize length, usize bucket_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `bucket_count`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::queue::calendarResizeRecommended(length, bucket_count);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-calendarschedule"></a>

> ## `calendarSchedule`

> Provides the module's **calendar schedule** operation. Returns `i32`.

```valor
public i32 calendarSchedule(usize length, usize capacity, u64 timestamp, u64 origin, u64 bucket_width, usize bucket_count, usize entry, (usize) -> usize read_bucket_head, (usize, usize) -> void write_next, (usize, usize) -> void write_bucket_head)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `timestamp`: u64 (by value)
> - `origin`: u64 (by value)
> - `bucket_width`: u64 (by value)
> - `bucket_count`: usize (by value)
> - `entry`: usize (by value)
> - `usize`: (usize) -> usize read_bucket_head, ( (borrowed fn-ptr (callback))
> - `write_bucket_head`: usize) -> void write_next, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::queue::calendarSchedule(length, capacity, timestamp, origin, bucket_width, bucket_count, entry, usize, write_bucket_head);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-calendartakebucket"></a>

> ## `calendarTakeBucket`

> Detaches a bucket in constant time. Detaches a bucket in constant time. Sorting inside a bucket is optional; expected constant-time behavior follows from adapting bucket_width to the observed timestamp distribution.

```valor
public i32 calendarTakeBucket(usize bucket, usize bucket_count, usize empty_bucket, (usize) -> usize read_bucket_head, (usize, usize) -> void write_bucket_head, (usize) -> void receive_head)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bucket`: usize (by value)
> - `bucket_count`: usize (by value)
> - `empty_bucket`: usize (by value)
> - `usize`: (usize) -> usize read_bucket_head, ( (borrowed fn-ptr (callback))
> - `receive_head`: usize) -> void write_bucket_head, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::queue::calendarTakeBucket(bucket, bucket_count, empty_bucket, usize, receive_head);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-workstealingstateisvalid"></a>

> ## `workStealingStateIsValid`

> Provides the module's **work stealing state is valid** operation. Returns `bool`.

```valor
public bool workStealingStateIsValid(usize top, usize bottom, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `top`: usize (by value)
> - `bottom`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::queue::workStealingStateIsValid(top, bottom, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-workstealinglength"></a>

> ## `workStealingLength`

> Provides the module's **work stealing length** operation. Returns `usize`.

```valor
public usize workStealingLength(usize top, usize bottom)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `top`: usize (by value)
> - `bottom`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::queue::workStealingLength(top, bottom);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-workstealingownerpush"></a>

> ## `workStealingOwnerPush`

> Provides the module's **work stealing owner push** operation. Returns `i32`.

```valor
public i32 workStealingOwnerPush(usize top, usize bottom, usize capacity, T value, (usize, T) -> void write, (usize) -> void publish_bottom)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `top`: usize (by value)
> - `bottom`: usize (by value)
> - `capacity`: usize (by value)
> - `value`: T (by value)
> - `publish_bottom`: (usize, T) -> void write, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::queue::workStealingOwnerPush(top, bottom, capacity, value, publish_bottom);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-workstealingownerpop"></a>

> ## `workStealingOwnerPop`

> Provides the module's **work stealing owner pop** operation. Returns `i32`.

```valor
public i32 workStealingOwnerPop(usize capacity, () -> usize load_top, () -> usize load_bottom, (usize) -> void store_bottom, (usize, usize) -> bool compare_exchange_top, (usize) -> T read, (T) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `receive`: () -> usize load_top, () -> usize load_bottom, (usize) -> void store_bottom, (usize, usize) -> bool compare_exchange_top, (usize) -> T read, (T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::queue::workStealingOwnerPop(capacity, receive);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

<a id="fn-workstealingsteal"></a>

> ## `workStealingSteal`

> Provides the module's **work stealing steal** operation. Returns `i32`.

```valor
public i32 workStealingSteal(usize capacity, () -> usize load_top, () -> usize load_bottom, (usize, usize) -> bool compare_exchange_top, (usize) -> T read, (T) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `receive`: () -> usize load_top, () -> usize load_bottom, (usize, usize) -> bool compare_exchange_top, (usize) -> T read, (T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::queue::workStealingSteal(capacity, receive);
> ```

> ### SEE ALSO
>
> - [`std::collections::queue::addFits`](#fn-addfits)
> - [`std::collections::queue::powerOfTwo`](#fn-poweroftwo)
> - [`std::collections::queue::wrappedIndex`](#fn-wrappedindex)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Persistent collections](STD-COLLECTIONS-PERSISTENT-DOC.md) · [Table of contents](standard-library/README.md) · [Bytes →](STD-BYTES-DOC.md)
