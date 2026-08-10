<!-- stdlib-reference-style: modern -->
> # `valorx::dataframe`

`valorx::dataframe` columnar data-frame operations.

[Standard library](standard-library/README.md) / [ValorX](standard-library/README.md#valorx) / **Data frames**

> **Source:** `stdlib/valorx/dataframe.valor` · **Routines:** 35 public

## Routines

<details>
<summary>Browse all 35 routines</summary>

- [`addFits`](#fn-addfits)
- [`multiplyFits`](#fn-multiplyfits)
- [`rangeIsValid`](#fn-rangeisvalid)
- [`concurrencyPolicyIsValid`](#fn-concurrencypolicyisvalid)
- [`expressionDescriptorIsValid`](#fn-expressiondescriptorisvalid)
- [`queryPlanDescriptorIsValid`](#fn-queryplandescriptorisvalid)
- [`partitionDescriptorIsValid`](#fn-partitiondescriptorisvalid)
- [`joinPlanIsValid`](#fn-joinplanisvalid)
- [`expressionIsLeaf`](#fn-expressionisleaf)
- [`expressionIsComparison`](#fn-expressioniscomparison)
- [`expressionIsBoolean`](#fn-expressionisboolean)
- [`expressionCanPushDown`](#fn-expressioncanpushdown)
- [`projectionWordCount`](#fn-projectionwordcount)
- [`bitDivisor`](#fn-bitdivisor)
- [`projectionContains`](#fn-projectioncontains)
- [`collectExpressionColumns`](#fn-collectexpressioncolumns)
- [`predicatePushdownTarget`](#fn-predicatepushdowntarget)
- [`pruneProjections`](#fn-pruneprojections)
- [`chooseJoinAlgorithm`](#fn-choosejoinalgorithm)
- [`hashPartition`](#fn-hashpartition)
- [`buildHashJoin`](#fn-buildhashjoin)
- [`probeHashJoin`](#fn-probehashjoin)
- [`mergeJoin`](#fn-mergejoin)
- [`nestedLoopJoin`](#fn-nestedloopjoin)
- [`executeBatches8`](#fn-executebatches8)
- [`schedulePartitions`](#fn-schedulepartitions)
- [`balancedPartitionBegin`](#fn-balancedpartitionbegin)
- [`balancedPartitionEnd`](#fn-balancedpartitionend)
- [`partitionNumaNode`](#fn-partitionnumanode)
- [`rollingBegin`](#fn-rollingbegin)
- [`rollingEnd`](#fn-rollingend)
- [`rollingWindowMeetsMinimum`](#fn-rollingwindowmeetsminimum)
- [`visitGroups`](#fn-visitgroups)
- [`appendPlanNode`](#fn-appendplannode)
- [`publishSnapshot`](#fn-publishsnapshot)

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
> bool result = valorx::dataframe::addFits(left, right);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)
> - [`valorx::dataframe::concurrencyPolicyIsValid`](#fn-concurrencypolicyisvalid)

<a id="fn-multiplyfits"></a>

> ## `multiplyFits`

> Provides the module's **multiply fits** operation. Returns `bool`.

```valor
public bool multiplyFits(usize left, usize right)
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
> bool result = valorx::dataframe::multiplyFits(left, right);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)
> - [`valorx::dataframe::concurrencyPolicyIsValid`](#fn-concurrencypolicyisvalid)

<a id="fn-rangeisvalid"></a>

> ## `rangeIsValid`

> Provides the module's **range is valid** operation. Returns `bool`.

```valor
public bool rangeIsValid(usize offset, usize length, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: usize (by value)
> - `length`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = valorx::dataframe::rangeIsValid(offset, length, capacity);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::concurrencyPolicyIsValid`](#fn-concurrencypolicyisvalid)

<a id="fn-concurrencypolicyisvalid"></a>

> ## `concurrencyPolicyIsValid`

> Provides the module's **concurrency policy is valid** operation. Returns `bool`.

```valor
public bool concurrencyPolicyIsValid(u8 concurrency)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `concurrency`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = valorx::dataframe::concurrencyPolicyIsValid(concurrency);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-expressiondescriptorisvalid"></a>

> ## `expressionDescriptorIsValid`

> Provides the module's **expression descriptor is valid** operation. Returns `bool`.

```valor
public bool expressionDescriptorIsValid( usize node_count, usize node_capacity, usize root, (usize) -> u8 read_opcode, (usize) -> usize read_left, (usize) -> usize read_right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_count`: usize (by value)
> - `node_capacity`: usize (by value)
> - `root`: usize (by value)
> - `read_right`: (usize) -> u8 read_opcode, (usize) -> usize read_left, (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = valorx::dataframe::expressionDescriptorIsValid(node_count, node_capacity, root, read_right);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-queryplandescriptorisvalid"></a>

> ## `queryPlanDescriptorIsValid`

> Provides the module's **query plan descriptor is valid** operation. Returns `bool`.

```valor
public bool queryPlanDescriptorIsValid( usize node_count, usize node_capacity, usize edge_count, usize edge_capacity, usize root, (usize) -> u8 read_kind, (usize) -> usize read_first_input, (usize) -> usize read_input_count, (usize) -> usize read_input)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_count`: usize (by value)
> - `node_capacity`: usize (by value)
> - `edge_count`: usize (by value)
> - `edge_capacity`: usize (by value)
> - `root`: usize (by value)
> - `read_input`: (usize) -> u8 read_kind, (usize) -> usize read_first_input, (usize) -> usize read_input_count, (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = valorx::dataframe::queryPlanDescriptorIsValid(node_count, node_capacity, edge_count, edge_capacity, root, read_input);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-partitiondescriptorisvalid"></a>

> ## `partitionDescriptorIsValid`

> Provides the module's **partition descriptor is valid** operation. Returns `bool`.

```valor
public bool partitionDescriptorIsValid( usize row_count, usize partition_count, (usize) -> usize read_offset)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `row_count`: usize (by value)
> - `partition_count`: usize (by value)
> - `read_offset`: (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = valorx::dataframe::partitionDescriptorIsValid(row_count, partition_count, read_offset);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-joinplanisvalid"></a>

> ## `joinPlanIsValid`

> Provides the module's **join plan is valid** operation. Returns `bool`.

```valor
public bool joinPlanIsValid(usize key_count, usize left_rows, usize right_rows, usize partition_count, u8 kind, u8 algorithm)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `key_count`: usize (by value)
> - `left_rows`: usize (by value)
> - `right_rows`: usize (by value)
> - `partition_count`: usize (by value)
> - `kind`: u8 (by value)
> - `algorithm`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = valorx::dataframe::joinPlanIsValid(key_count, left_rows, right_rows, partition_count, kind, algorithm);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-expressionisleaf"></a>

> ## `expressionIsLeaf`

> Provides the module's **expression is leaf** operation. Returns `bool`.

```valor
public bool expressionIsLeaf(u8 opcode)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `opcode`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = valorx::dataframe::expressionIsLeaf(opcode);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-expressioniscomparison"></a>

> ## `expressionIsComparison`

> Provides the module's **expression is comparison** operation. Returns `bool`.

```valor
public bool expressionIsComparison(u8 opcode)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `opcode`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = valorx::dataframe::expressionIsComparison(opcode);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-expressionisboolean"></a>

> ## `expressionIsBoolean`

> Provides the module's **expression is boolean** operation. Returns `bool`.

```valor
public bool expressionIsBoolean(u8 opcode)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `opcode`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = valorx::dataframe::expressionIsBoolean(opcode);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-expressioncanpushdown"></a>

> ## `expressionCanPushDown`

> Provides the module's **expression can push down** operation. Returns `bool`.

```valor
public bool expressionCanPushDown( usize root, usize node_count, (usize) -> u8 read_opcode, (usize) -> u8 read_flags, (usize) -> usize read_left, (usize) -> usize read_right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `root`: usize (by value)
> - `node_count`: usize (by value)
> - `read_right`: (usize) -> u8 read_opcode, (usize) -> u8 read_flags, (usize) -> usize read_left, (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = valorx::dataframe::expressionCanPushDown(root, node_count, read_right);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-projectionwordcount"></a>

> ## `projectionWordCount`

> Provides the module's **projection word count** operation. Returns `usize`.

```valor
public usize projectionWordCount(usize column_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `column_count`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = valorx::dataframe::projectionWordCount(column_count);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-bitdivisor"></a>

> ## `bitDivisor`

> Provides the module's **bit divisor** operation. Returns `u64`.

```valor
public u64 bitDivisor(usize bit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bit`: usize (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = valorx::dataframe::bitDivisor(bit);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-projectioncontains"></a>

> ## `projectionContains`

> Provides the module's **projection contains** operation. Returns `bool`.

```valor
public bool projectionContains(usize column, (usize) -> u64 read_word)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `column`: usize (by value)
> - `read_word`: (usize) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = valorx::dataframe::projectionContains(column, read_word);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-collectexpressioncolumns"></a>

> ## `collectExpressionColumns`

> Calls require_column once per distinct referenced column when the expression arena is in topological order. Calls require_column once per distinct referenced column when the expression arena is in topological order. The receiver can set a compact projection bit.

```valor
public i32 collectExpressionColumns( usize node_count, usize column_count, (usize) -> u8 read_opcode, (usize) -> u32 read_column, (usize) -> bool already_required, (usize) -> void require_column)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_count`: usize (by value)
> - `column_count`: usize (by value)
> - `require_column`: (usize) -> u8 read_opcode, (usize) -> u32 read_column, (usize) -> bool already_required, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = valorx::dataframe::collectExpressionColumns(node_count, column_count, require_column);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-predicatepushdowntarget"></a>

> ## `predicatePushdownTarget`

> Finds the deepest unary path above a scan through which a filter may move. Finds the deepest unary path above a scan through which a filter may move. Joins, aggregations, limits, windows, pivots, and sinks are barriers.

```valor
public usize predicatePushdownTarget( usize filter_node, (usize) -> u8 read_kind, (usize) -> usize read_single_input, (usize) -> bool projection_preserves_predicate)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `filter_node`: usize (by value)
> - `projection_preserves_predicate`: (usize) -> u8 read_kind, (usize) -> usize read_single_input, (usize) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = valorx::dataframe::predicatePushdownTarget(filter_node, projection_preserves_predicate);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-pruneprojections"></a>

> ## `pruneProjections`

> Backward projection propagation. Backward projection propagation. The callbacks keep optimizer storage caller-owned and allow words to be updated atomically by a parallel planner.

```valor
public void pruneProjections( usize node_count, usize projection_words, (usize) -> u8 read_kind, (usize) -> usize read_input_count, (usize, usize) -> usize read_input, (usize, usize) -> u64 read_required, (usize, usize, usize, u64) -> u64 map_required, (usize, usize, u64) -> void merge_required)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^3)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_count`: usize (by value)
> - `projection_words`: usize (by value)
> - `merge_required`: (usize) -> u8 read_kind, (usize) -> usize read_input_count, (usize, usize) -> usize read_input, (usize, usize) -> u64 read_required, (usize, usize, usize, u64) -> u64 map_required, (usize, usize, u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> valorx::dataframe::pruneProjections(node_count, projection_words, merge_required);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-choosejoinalgorithm"></a>

> ## `chooseJoinAlgorithm`

> Provides the module's **choose join algorithm** operation. Returns `u8`.

```valor
public u8 chooseJoinAlgorithm(usize left_rows, usize right_rows, usize key_count, usize memory_budget, bool left_sorted, bool right_sorted, bool keys_hashable)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_rows`: usize (by value)
> - `right_rows`: usize (by value)
> - `key_count`: usize (by value)
> - `memory_budget`: usize (by value)
> - `left_sorted`: bool (by value)
> - `right_sorted`: bool (by value)
> - `keys_hashable`: bool (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = valorx::dataframe::chooseJoinAlgorithm(left_rows, right_rows, key_count, memory_budget, left_sorted, right_sorted, keys_hashable);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-hashpartition"></a>

> ## `hashPartition`

> Provides the module's **hash partition** operation. Returns `usize`.

```valor
public usize hashPartition(u64 hash, usize partition_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `partition_count`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = valorx::dataframe::hashPartition(hash, partition_count);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-buildhashjoin"></a>

> ## `buildHashJoin`

> The table callbacks define a lock-free open-addressed hash table. The table callbacks define a lock-free open-addressed hash table. A slot is visible only after publish_slot performs a release publication.

```valor
public i32 buildHashJoin( usize build_rows, usize capacity, usize max_probe, (usize) -> u64 read_hash, (usize, usize) -> bool key_equal_to_slot, (usize) -> bool slot_is_empty, (usize, usize) -> void write_slot, (usize, usize) -> void link_duplicate, (usize) -> void publish_slot)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `build_rows`: usize (by value)
> - `capacity`: usize (by value)
> - `max_probe`: usize (by value)
> - `usize`: (usize) -> u64 read_hash, ( (borrowed fn-ptr (callback))
> - `publish_slot`: usize) -> bool key_equal_to_slot, (usize) -> bool slot_is_empty, (usize, usize) -> void write_slot, (usize, usize) -> void link_duplicate, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = valorx::dataframe::buildHashJoin(build_rows, capacity, max_probe, usize, publish_slot);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-probehashjoin"></a>

> ## `probeHashJoin`

> Provides the module's **probe hash join** operation. Returns `i32`.

```valor
public i32 probeHashJoin( usize probe_rows, usize capacity, usize max_probe, (usize) -> u64 read_hash, (usize) -> bool slot_is_empty, (usize, usize) -> bool key_equal_to_slot, (usize) -> usize read_build_row, (usize) -> usize read_next_build_row, (usize, usize) -> void emit_pair)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^3)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `probe_rows`: usize (by value)
> - `capacity`: usize (by value)
> - `max_probe`: usize (by value)
> - `emit_pair`: (usize) -> u64 read_hash, (usize) -> bool slot_is_empty, (usize, usize) -> bool key_equal_to_slot, (usize) -> usize read_build_row, (usize) -> usize read_next_build_row, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = valorx::dataframe::probeHashJoin(probe_rows, capacity, max_probe, emit_pair);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-mergejoin"></a>

> ## `mergeJoin`

> Provides the module's **merge join** operation. Returns `i32`.

```valor
public i32 mergeJoin( usize left_rows, usize right_rows, (usize, usize) -> i32 compare_rows, (usize, usize) -> void emit_pair)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_rows`: usize (by value)
> - `right_rows`: usize (by value)
> - `usize`: (usize, usize) -> i32 compare_rows, ( (borrowed fn-ptr (callback))
> - `emit_pair`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = valorx::dataframe::mergeJoin(left_rows, right_rows, usize, emit_pair);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-nestedloopjoin"></a>

> ## `nestedLoopJoin`

> Provides the module's **nested loop join** operation. Returns `i32`.

```valor
public i32 nestedLoopJoin( usize left_rows, usize right_rows, (usize, usize) -> bool rows_equal, (usize, usize) -> void emit_pair)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_rows`: usize (by value)
> - `right_rows`: usize (by value)
> - `usize`: (usize, usize) -> bool rows_equal, ( (borrowed fn-ptr (callback))
> - `emit_pair`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = valorx::dataframe::nestedLoopJoin(left_rows, right_rows, usize, emit_pair);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-executebatches8"></a>

> ## `executeBatches8`

> Vector callbacks operate on eight contiguous rows. Vector callbacks operate on eight contiguous rows. The scalar callback is used only for the bounded tail.

```valor
public void executeBatches8(usize begin, usize end, (usize) -> void execute_vector8, (usize) -> void execute_scalar)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `begin`: usize (by value)
> - `end`: usize (by value)
> - `execute_scalar`: (usize) -> void execute_vector8, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> valorx::dataframe::executeBatches8(begin, end, execute_scalar);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-schedulepartitions"></a>

> ## `schedulePartitions`

> Emits independent ranges. Emits independent ranges. A scheduler may run them concurrently because no range overlaps another.

```valor
public i32 schedulePartitions( usize row_count, usize partition_count, (usize) -> usize read_offset, (usize) -> u32 read_numa_node, (usize, usize, usize, u32) -> void submit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `row_count`: usize (by value)
> - `partition_count`: usize (by value)
> - `submit`: (usize) -> usize read_offset, (usize) -> u32 read_numa_node, (usize, usize, usize, u32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = valorx::dataframe::schedulePartitions(row_count, partition_count, submit);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-balancedpartitionbegin"></a>

> ## `balancedPartitionBegin`

> Provides the module's **balanced partition begin** operation. Returns `usize`.

```valor
public usize balancedPartitionBegin(usize rows, usize partitions, usize partition)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rows`: usize (by value)
> - `partitions`: usize (by value)
> - `partition`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = valorx::dataframe::balancedPartitionBegin(rows, partitions, partition);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-balancedpartitionend"></a>

> ## `balancedPartitionEnd`

> Provides the module's **balanced partition end** operation. Returns `usize`.

```valor
public usize balancedPartitionEnd(usize rows, usize partitions, usize partition)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `rows`: usize (by value)
> - `partitions`: usize (by value)
> - `partition`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = valorx::dataframe::balancedPartitionEnd(rows, partitions, partition);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-partitionnumanode"></a>

> ## `partitionNumaNode`

> Provides the module's **partition numa node** operation. Returns `u32`.

```valor
public u32 partitionNumaNode(usize partition, usize node_count, u32 preferred_node)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `partition`: usize (by value)
> - `node_count`: usize (by value)
> - `preferred_node`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = valorx::dataframe::partitionNumaNode(partition, node_count, preferred_node);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-rollingbegin"></a>

> ## `rollingBegin`

> Provides the module's **rolling begin** operation. Returns `usize`.

```valor
public usize rollingBegin(usize row, usize partition_begin, usize preceding)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `row`: usize (by value)
> - `partition_begin`: usize (by value)
> - `preceding`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = valorx::dataframe::rollingBegin(row, partition_begin, preceding);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-rollingend"></a>

> ## `rollingEnd`

> Provides the module's **rolling end** operation. Returns `usize`.

```valor
public usize rollingEnd(usize row, usize partition_end, usize following)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `row`: usize (by value)
> - `partition_end`: usize (by value)
> - `following`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = valorx::dataframe::rollingEnd(row, partition_end, following);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-rollingwindowmeetsminimum"></a>

> ## `rollingWindowMeetsMinimum`

> Provides the module's **rolling window meets minimum** operation. Returns `bool`.

```valor
public bool rollingWindowMeetsMinimum(usize begin, usize end, usize minimum_periods)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `begin`: usize (by value)
> - `end`: usize (by value)
> - `minimum_periods`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = valorx::dataframe::rollingWindowMeetsMinimum(begin, end, minimum_periods);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-visitgroups"></a>

> ## `visitGroups`

> Provides the module's **visit groups** operation. Returns `i32`.

```valor
public i32 visitGroups( usize row_count, usize group_count, (usize) -> usize read_offset, (usize, usize, usize) -> void visit_group)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `row_count`: usize (by value)
> - `group_count`: usize (by value)
> - `usize`: (usize) -> usize read_offset, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `visit_group`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = valorx::dataframe::visitGroups(row_count, group_count, usize, usize, visit_group);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-appendplannode"></a>

> ## `appendPlanNode`

> Reserve/publish is lock-free when the callbacks use compare-exchange and release publication. Reserve/publish is lock-free when the callbacks use compare-exchange and release publication. Failed reservations do not modify the plan.

```valor
public i32 appendPlanNode( usize capacity, (usize, usize) -> bool reserve_cursor, (usize) -> void write_node, (usize) -> void publish_node, (usize) -> void receive_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `receive_index`: (usize, usize) -> bool reserve_cursor, (usize) -> void write_node, (usize) -> void publish_node, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = valorx::dataframe::appendPlanNode(capacity, receive_index);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

<a id="fn-publishsnapshot"></a>

> ## `publishSnapshot`

> Immutable snapshots make readers wait-free. Immutable snapshots make readers wait-free. The callback supplies the compare-exchange memory ordering appropriate for the execution target.

```valor
public i32 publishSnapshot( u64 expected_generation, u64 next_generation, (u64, u64) -> bool compare_exchange_generation, () -> void publish_descriptor)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `expected_generation`: u64 (by value)
> - `next_generation`: u64 (by value)
> - `publish_descriptor`: (u64, u64) -> bool compare_exchange_generation, () -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = valorx::dataframe::publishSnapshot(expected_generation, next_generation, publish_descriptor);
> ```

> ### SEE ALSO
>
> - [`valorx::dataframe::addFits`](#fn-addfits)
> - [`valorx::dataframe::multiplyFits`](#fn-multiplyfits)
> - [`valorx::dataframe::rangeIsValid`](#fn-rangeisvalid)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← WebSockets](WEB-WS-DOC.md) · [Table of contents](standard-library/README.md) · Next →
