<!-- stdlib-reference-style: modern -->
> # `std::collections::persistent`

`std::collections::persistent` persistent collection primitives.

[Standard library](standard-library/README.md) / [Collections and text](standard-library/README.md#collections-and-text) / **Persistent collections**

> **Source:** `stdlib/std/collections/persistent.valor` · **Routines:** 57 public

## Routines

<details>
<summary>Browse all 57 routines</summary>

- [`addFits`](#fn-addfits)
- [`numaPolicyIsValid`](#fn-numapolicyisvalid)
- [`power32`](#fn-power32)
- [`radixLevel`](#fn-radixlevel)
- [`radixFragment`](#fn-radixfragment)
- [`vectorTailOffset`](#fn-vectortailoffset)
- [`vectorStateIsValid`](#fn-vectorstateisvalid)
- [`vectorIndexIsInTail`](#fn-vectorindexisintail)
- [`vectorTailIndex`](#fn-vectortailindex)
- [`vectorAppendNeedsTreePush`](#fn-vectorappendneedstreepush)
- [`vectorLengthAfterAppend`](#fn-vectorlengthafterappend)
- [`vectorTailLengthAfterAppend`](#fn-vectortaillengthafterappend)
- [`vectorTrieCapacity`](#fn-vectortriecapacity)
- [`vectorAppendNeedsNewRoot`](#fn-vectorappendneedsnewroot)
- [`vectorShiftAfterRootGrowth`](#fn-vectorshiftafterrootgrowth)
- [`listStateIsValid`](#fn-liststateisvalid)
- [`listLengthAfterPrepend`](#fn-listlengthafterprepend)
- [`listLengthAfterTail`](#fn-listlengthaftertail)
- [`transientStateIsValid`](#fn-transientstateisvalid)
- [`transientCanEdit`](#fn-transientcanedit)
- [`transientMutationStatus`](#fn-transientmutationstatus)
- [`beginTransient`](#fn-begintransient)
- [`vectorVisitPath`](#fn-vectorvisitpath)
- [`vectorLookupPlan`](#fn-vectorlookupplan)
- [`vectorUpdatePlan`](#fn-vectorupdateplan)
- [`vectorAppendPlan`](#fn-vectorappendplan)
- [`laneBit`](#fn-lanebit)
- [`bitmapContains`](#fn-bitmapcontains)
- [`populationCount`](#fn-populationcount)
- [`packedBitmapIndex`](#fn-packedbitmapindex)
- [`hashFragment`](#fn-hashfragment)
- [`hamtNodeIsValid`](#fn-hamtnodeisvalid)
- [`hamtLookup`](#fn-hamtlookup)
- [`hamtInsertPlan`](#fn-hamtinsertplan)
- [`mapLengthAfterInsert`](#fn-maplengthafterinsert)
- [`mapLengthAfterRemove`](#fn-maplengthafterremove)
- [`treeBalance`](#fn-treebalance)
- [`treeHeight`](#fn-treeheight)
- [`treeWeight`](#fn-treeweight)
- [`treeNodeIsBalanced`](#fn-treenodeisbalanced)
- [`treeLookup`](#fn-treelookup)
- [`treeRotation`](#fn-treerotation)
- [`publishVectorSnapshot`](#fn-publishvectorsnapshot)
- [`publishMapSnapshot`](#fn-publishmapsnapshot)
- [`ropeNodeIsValid`](#fn-ropenodeisvalid)
- [`ropeLocate`](#fn-ropelocate)
- [`fingerDigitIsValid`](#fn-fingerdigitisvalid)
- [`fingerNodeIsValid`](#fn-fingernodeisvalid)
- [`fingerSearch`](#fn-fingersearch)
- [`zipperStateIsValid`](#fn-zipperstateisvalid)
- [`zipperMoveSibling`](#fn-zippermovesibling)
- [`zipperAscend`](#fn-zipperascend)
- [`transientPreparePath`](#fn-transientpreparepath)
- [`freezeTransient`](#fn-freezetransient)
- [`visitLeafGroups`](#fn-visitleafgroups)
- [`partitionBegin`](#fn-partitionbegin)
- [`partitionLength`](#fn-partitionlength)

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
> bool result = std::collections::persistent::addFits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)
> - [`std::collections::persistent::radixLevel`](#fn-radixlevel)

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
> bool result = std::collections::persistent::numaPolicyIsValid(policy);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::power32`](#fn-power32)
> - [`std::collections::persistent::radixLevel`](#fn-radixlevel)

<a id="fn-power32"></a>

> ## `power32`

> Provides the module's **power32** operation. Returns `usize`.

```valor
public usize power32(usize level)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `level`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::persistent::power32(level);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::radixLevel`](#fn-radixlevel)

<a id="fn-radixlevel"></a>

> ## `radixLevel`

> Provides the module's **radix level** operation. Returns `usize`.

```valor
public usize radixLevel(usize shift)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `shift`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::persistent::radixLevel(shift);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-radixfragment"></a>

> ## `radixFragment`

> Provides the module's **radix fragment** operation. Returns `usize`.

```valor
public usize radixFragment(usize value, usize shift)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: usize (by value)
> - `shift`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::persistent::radixFragment(value, shift);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-vectortailoffset"></a>

> ## `vectorTailOffset`

> Provides the module's **vector tail offset** operation. Returns `usize`.

```valor
public usize vectorTailOffset(usize length, usize tail_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `tail_length`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::persistent::vectorTailOffset(length, tail_length);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-vectorstateisvalid"></a>

> ## `vectorStateIsValid`

> Provides the module's **vector state is valid** operation. Returns `bool`.

```valor
public bool vectorStateIsValid(usize length, usize tail_length, usize shift)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `tail_length`: usize (by value)
> - `shift`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::persistent::vectorStateIsValid(length, tail_length, shift);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-vectorindexisintail"></a>

> ## `vectorIndexIsInTail`

> Provides the module's **vector index is in tail** operation. Returns `bool`.

```valor
public bool vectorIndexIsInTail(usize index, usize length, usize tail_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: usize (by value)
> - `length`: usize (by value)
> - `tail_length`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::persistent::vectorIndexIsInTail(index, length, tail_length);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-vectortailindex"></a>

> ## `vectorTailIndex`

> Provides the module's **vector tail index** operation. Returns `usize`.

```valor
public usize vectorTailIndex(usize index, usize length, usize tail_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: usize (by value)
> - `length`: usize (by value)
> - `tail_length`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::persistent::vectorTailIndex(index, length, tail_length);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-vectorappendneedstreepush"></a>

> ## `vectorAppendNeedsTreePush`

> Provides the module's **vector append needs tree push** operation. Returns `bool`.

```valor
public bool vectorAppendNeedsTreePush(usize tail_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tail_length`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::persistent::vectorAppendNeedsTreePush(tail_length);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-vectorlengthafterappend"></a>

> ## `vectorLengthAfterAppend`

> Provides the module's **vector length after append** operation. Returns `usize`.

```valor
public usize vectorLengthAfterAppend(usize length)
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
> usize result = std::collections::persistent::vectorLengthAfterAppend(length);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-vectortaillengthafterappend"></a>

> ## `vectorTailLengthAfterAppend`

> Provides the module's **vector tail length after append** operation. Returns `usize`.

```valor
public usize vectorTailLengthAfterAppend(usize tail_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tail_length`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::persistent::vectorTailLengthAfterAppend(tail_length);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-vectortriecapacity"></a>

> ## `vectorTrieCapacity`

> Provides the module's **vector trie capacity** operation. Returns `usize`.

```valor
public usize vectorTrieCapacity(usize shift)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `shift`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::persistent::vectorTrieCapacity(shift);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-vectorappendneedsnewroot"></a>

> ## `vectorAppendNeedsNewRoot`

> Provides the module's **vector append needs new root** operation. Returns `bool`.

```valor
public bool vectorAppendNeedsNewRoot(usize tree_length, usize shift)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `tree_length`: usize (by value)
> - `shift`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::persistent::vectorAppendNeedsNewRoot(tree_length, shift);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-vectorshiftafterrootgrowth"></a>

> ## `vectorShiftAfterRootGrowth`

> Provides the module's **vector shift after root growth** operation. Returns `usize`.

```valor
public usize vectorShiftAfterRootGrowth(usize shift, bool grows)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `shift`: usize (by value)
> - `grows`: bool (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::persistent::vectorShiftAfterRootGrowth(shift, grows);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-liststateisvalid"></a>

> ## `listStateIsValid`

> Provides the module's **list state is valid** operation. Returns `bool`.

```valor
public bool listStateIsValid(usize length, bool has_head)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `has_head`: bool (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::persistent::listStateIsValid(length, has_head);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-listlengthafterprepend"></a>

> ## `listLengthAfterPrepend`

> Provides the module's **list length after prepend** operation. Returns `usize`.

```valor
public usize listLengthAfterPrepend(usize length)
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
> usize result = std::collections::persistent::listLengthAfterPrepend(length);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-listlengthaftertail"></a>

> ## `listLengthAfterTail`

> Provides the module's **list length after tail** operation. Returns `usize`.

```valor
public usize listLengthAfterTail(usize length)
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
> usize result = std::collections::persistent::listLengthAfterTail(length);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-transientstateisvalid"></a>

> ## `transientStateIsValid`

> Provides the module's **transient state is valid** operation. Returns `bool`.

```valor
public bool transientStateIsValid(u64 owner_token, u8 state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `owner_token`: u64 (by value)
> - `state`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::persistent::transientStateIsValid(owner_token, state);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-transientcanedit"></a>

> ## `transientCanEdit`

> Provides the module's **transient can edit** operation. Returns `bool`.

```valor
public bool transientCanEdit(u64 node_owner, u64 transient_owner, u8 state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_owner`: u64 (by value)
> - `transient_owner`: u64 (by value)
> - `state`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::persistent::transientCanEdit(node_owner, transient_owner, state);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-transientmutationstatus"></a>

> ## `transientMutationStatus`

> Provides the module's **transient mutation status** operation. Returns `i32`.

```valor
public i32 transientMutationStatus(u64 owner_token, u8 state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `owner_token`: u64 (by value)
> - `state`: u8 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::persistent::transientMutationStatus(owner_token, state);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-begintransient"></a>

> ## `beginTransient`

> persistent_map.transient() and persistent_vector.transient() lower to this checked handoff: the immutable root is retained, then tagged lazily as paths become uniquely owned. persistent_map.transient() and persistent_vector.transient() lower to this checked handoff: the immutable root is retained, then tagged lazily as paths become uniquely owned. No element is copied merely to enter transient mode.

```valor
public i32 beginTransient(u64 base_generation, u64 owner_token, () -> void retain_root, (u64, u64) -> void receive_metadata)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `base_generation`: u64 (by value)
> - `owner_token`: u64 (by value)
> - `u64`: () -> void retain_root, ( (borrowed fn-ptr (callback))
> - `receive_metadata`: u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::persistent::beginTransient(base_generation, owner_token, u64, receive_metadata);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-vectorvisitpath"></a>

> ## `vectorVisitPath`

> visit_lane is invoked once per trie level, from root to leaf. visit_lane is invoked once per trie level, from root to leaf.  Implementors use it to load the next immutable node; update builders instead use the same lane stream to copy only the visited path.

```valor
public i32 vectorVisitPath(usize index, usize length, usize tail_length, usize shift, (usize, usize) -> void visit_lane)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: usize (by value)
> - `length`: usize (by value)
> - `tail_length`: usize (by value)
> - `shift`: usize (by value)
> - `visit_lane`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::persistent::vectorVisitPath(index, length, tail_length, shift, visit_lane);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-vectorlookupplan"></a>

> ## `vectorLookupPlan`

> Provides the module's **vector lookup plan** operation. Returns `i32`.

```valor
public i32 vectorLookupPlan(usize index, usize length, usize tail_length, usize shift, (usize) -> void read_tail, (usize, usize) -> void visit_lane)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: usize (by value)
> - `length`: usize (by value)
> - `tail_length`: usize (by value)
> - `shift`: usize (by value)
> - `usize`: (usize) -> void read_tail, ( (borrowed fn-ptr (callback))
> - `visit_lane`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::persistent::vectorLookupPlan(index, length, tail_length, shift, usize, visit_lane);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-vectorupdateplan"></a>

> ## `vectorUpdatePlan`

> copy_level receives the path lane at each level. copy_level receives the path lane at each level. share_subtrees records that all unvisited children are retained directly in the new node.

```valor
public i32 vectorUpdatePlan(usize index, usize length, usize tail_length, usize shift, (usize) -> void copy_tail, (usize, usize) -> void copy_level, (usize) -> void share_subtrees)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: usize (by value)
> - `length`: usize (by value)
> - `tail_length`: usize (by value)
> - `shift`: usize (by value)
> - `usize`: (usize) -> void copy_tail, ( (borrowed fn-ptr (callback))
> - `share_subtrees`: usize) -> void copy_level, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::persistent::vectorUpdatePlan(index, length, tail_length, shift, usize, share_subtrees);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-vectorappendplan"></a>

> ## `vectorAppendPlan`

> Provides the module's **vector append plan** operation. Returns `i32`.

```valor
public i32 vectorAppendPlan(usize length, usize tail_length, usize shift, () -> void copy_tail, () -> void push_full_tail, () -> void grow_root)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `tail_length`: usize (by value)
> - `shift`: usize (by value)
> - `grow_root`: () -> void copy_tail, () -> void push_full_tail, () -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::persistent::vectorAppendPlan(length, tail_length, shift, grow_root);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-lanebit"></a>

> ## `laneBit`

> Provides the module's **lane bit** operation. Returns `u32`.

```valor
public u32 laneBit(usize lane)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `lane`: usize (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::collections::persistent::laneBit(lane);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-bitmapcontains"></a>

> ## `bitmapContains`

> Provides the module's **bitmap contains** operation. Returns `bool`.

```valor
public bool bitmapContains(u32 bitmap, usize lane)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bitmap`: u32 (by value)
> - `lane`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::persistent::bitmapContains(bitmap, lane);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-populationcount"></a>

> ## `populationCount`

> Provides the module's **population count** operation. Returns `usize`.

```valor
public usize populationCount(u32 bitmap)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bitmap`: u32 (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::persistent::populationCount(bitmap);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-packedbitmapindex"></a>

> ## `packedBitmapIndex`

> Provides the module's **packed bitmap index** operation. Returns `usize`.

```valor
public usize packedBitmapIndex(u32 bitmap, usize lane)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bitmap`: u32 (by value)
> - `lane`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::persistent::packedBitmapIndex(bitmap, lane);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-hashfragment"></a>

> ## `hashFragment`

> Provides the module's **hash fragment** operation. Returns `usize`.

```valor
public usize hashFragment(u64 hash, usize shift)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `shift`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::persistent::hashFragment(hash, shift);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-hamtnodeisvalid"></a>

> ## `hamtNodeIsValid`

> Provides the module's **hamt node is valid** operation. Returns `bool`.

```valor
public bool hamtNodeIsValid(u32 data_bitmap, u32 child_bitmap, usize data_count, usize child_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `data_bitmap`: u32 (by value)
> - `child_bitmap`: u32 (by value)
> - `data_count`: usize (by value)
> - `child_count`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::persistent::hamtNodeIsValid(data_bitmap, child_bitmap, data_count, child_count);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-hamtlookup"></a>

> ## `hamtLookup`

> Provides the module's **hamt lookup** operation. Returns `i32`.

```valor
public i32 hamtLookup(u64 hash, K key, () -> u32 read_data_bitmap, () -> u32 read_child_bitmap, (usize) -> u64 read_hash, (usize) -> K read_key, (usize) -> V read_value, (usize) -> void descend, (K, K) -> bool equal, (V) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `key`: K (by value)
> - `receive`: () -> u32 read_data_bitmap, () -> u32 read_child_bitmap, (usize) -> u64 read_hash, (usize) -> K read_key, (usize) -> V read_value, (usize) -> void descend, (K, K) -> bool equal, (V) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::persistent::hamtLookup(hash, key, receive);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-hamtinsertplan"></a>

> ## `hamtInsertPlan`

> Provides the module's **hamt insert plan** operation. Returns `i32`.

```valor
public i32 hamtInsertPlan(u64 hash, K key, () -> u32 read_data_bitmap, () -> u32 read_child_bitmap, (usize) -> u64 read_hash, (usize) -> K read_key, (usize) -> void descend, (K, K) -> bool equal, (usize, usize) -> void copy_path, (usize, usize) -> void insert_leaf, (usize, usize) -> void replace_leaf, (usize, usize) -> void split_collision)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `key`: K (by value)
> - `split_collision`: () -> u32 read_data_bitmap, () -> u32 read_child_bitmap, (usize) -> u64 read_hash, (usize) -> K read_key, (usize) -> void descend, (K, K) -> bool equal, (usize, usize) -> void copy_path, (usize, usize) -> void insert_leaf, (usize, usize) -> void replace_leaf, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::persistent::hamtInsertPlan(hash, key, split_collision);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-maplengthafterinsert"></a>

> ## `mapLengthAfterInsert`

> Provides the module's **map length after insert** operation. Returns `usize`.

```valor
public usize mapLengthAfterInsert(usize length, bool replaced)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `replaced`: bool (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::persistent::mapLengthAfterInsert(length, replaced);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-maplengthafterremove"></a>

> ## `mapLengthAfterRemove`

> Provides the module's **map length after remove** operation. Returns `usize`.

```valor
public usize mapLengthAfterRemove(usize length, bool removed)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `removed`: bool (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::persistent::mapLengthAfterRemove(length, removed);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-treebalance"></a>

> ## `treeBalance`

> Provides the module's **tree balance** operation. Returns `u16`.

```valor
public u16 treeBalance(u16 left_height, u16 right_height)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_height`: u16 (by value)
> - `right_height`: u16 (by value)

> ### RETURNS (u16)

> ### EXAMPLE
>
> ```valor
> u16 result = std::collections::persistent::treeBalance(left_height, right_height);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-treeheight"></a>

> ## `treeHeight`

> Provides the module's **tree height** operation. Returns `u16`.

```valor
public u16 treeHeight(u16 left_height, u16 right_height)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_height`: u16 (by value)
> - `right_height`: u16 (by value)

> ### RETURNS (u16)

> ### EXAMPLE
>
> ```valor
> u16 result = std::collections::persistent::treeHeight(left_height, right_height);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-treeweight"></a>

> ## `treeWeight`

> Provides the module's **tree weight** operation. Returns `usize`.

```valor
public usize treeWeight(usize left_weight, usize right_weight)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_weight`: usize (by value)
> - `right_weight`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::persistent::treeWeight(left_weight, right_weight);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-treenodeisbalanced"></a>

> ## `treeNodeIsBalanced`

> Provides the module's **tree node is balanced** operation. Returns `bool`.

```valor
public bool treeNodeIsBalanced(u16 left_height, u16 right_height)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_height`: u16 (by value)
> - `right_height`: u16 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::persistent::treeNodeIsBalanced(left_height, right_height);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-treelookup"></a>

> ## `treeLookup`

> Provides the module's **tree lookup** operation. Returns `i32`.

```valor
public i32 treeLookup(K key, () -> K read_key, () -> V read_value, () -> bool has_left, () -> bool has_right, () -> void descend_left, () -> void descend_right, (K, K) -> i32 compare, (V) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `key`: K (by value)
> - `receive`: () -> K read_key, () -> V read_value, () -> bool has_left, () -> bool has_right, () -> void descend_left, () -> void descend_right, (K, K) -> i32 compare, (V) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::persistent::treeLookup(key, receive);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-treerotation"></a>

> ## `treeRotation`

> Provides the module's **tree rotation** operation. Returns `u8`.

```valor
public u8 treeRotation(u16 left_height, u16 right_height, u16 outer_height, u16 inner_height)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_height`: u16 (by value)
> - `right_height`: u16 (by value)
> - `outer_height`: u16 (by value)
> - `inner_height`: u16 (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::collections::persistent::treeRotation(left_height, right_height, outer_height, inner_height);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-publishvectorsnapshot"></a>

> ## `publishVectorSnapshot`

> The callback must perform acquire/release compare-exchange. The callback must perform acquire/release compare-exchange. The freshly built snapshot is immutable before this function is called. Failed writers simply release their unpublished arena and retry from the returned version.

```valor
public i32 publishVectorSnapshot(u64 expected_version, u64 next_version, () -> bool snapshot_is_complete, (u64, u64) -> bool compare_exchange_version, () -> void publish_root)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `expected_version`: u64 (by value)
> - `next_version`: u64 (by value)
> - `u64`: () -> bool snapshot_is_complete, ( (borrowed fn-ptr (callback))
> - `publish_root`: u64) -> bool compare_exchange_version, () -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::persistent::publishVectorSnapshot(expected_version, next_version, u64, publish_root);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-publishmapsnapshot"></a>

> ## `publishMapSnapshot`

> Provides the module's **publish map snapshot** operation. Returns `i32`.

```valor
public i32 publishMapSnapshot(u64 expected_version, u64 next_version, () -> bool snapshot_is_complete, (u64, u64) -> bool compare_exchange_version, () -> void publish_root)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `expected_version`: u64 (by value)
> - `next_version`: u64 (by value)
> - `u64`: () -> bool snapshot_is_complete, ( (borrowed fn-ptr (callback))
> - `publish_root`: u64) -> bool compare_exchange_version, () -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::persistent::publishMapSnapshot(expected_version, next_version, u64, publish_root);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-ropenodeisvalid"></a>

> ## `ropeNodeIsValid`

> Provides the module's **rope node is valid** operation. Returns `bool`.

```valor
public bool ropeNodeIsValid(usize chunk_length, usize weight, usize total_length, usize left_length, usize right_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `chunk_length`: usize (by value)
> - `weight`: usize (by value)
> - `total_length`: usize (by value)
> - `left_length`: usize (by value)
> - `right_length`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::persistent::ropeNodeIsValid(chunk_length, weight, total_length, left_length, right_length);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-ropelocate"></a>

> ## `ropeLocate`

> Leaf chunks are returned as zero-copy (offset, length) views.

```valor
public i32 ropeLocate(usize index, usize length, () -> usize read_left_length, () -> usize read_chunk_length, () -> bool has_left, () -> bool has_right, () -> void descend_left, () -> void descend_right, (usize, usize) -> void receive_chunk)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `index`: usize (by value)
> - `length`: usize (by value)
> - `receive_chunk`: () -> usize read_left_length, () -> usize read_chunk_length, () -> bool has_left, () -> bool has_right, () -> void descend_left, () -> void descend_right, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::persistent::ropeLocate(index, length, receive_chunk);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-fingerdigitisvalid"></a>

> ## `fingerDigitIsValid`

> Provides the module's **finger digit is valid** operation. Returns `bool`.

```valor
public bool fingerDigitIsValid(usize count)
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
> bool result = std::collections::persistent::fingerDigitIsValid(count);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-fingernodeisvalid"></a>

> ## `fingerNodeIsValid`

> Provides the module's **finger node is valid** operation. Returns `bool`.

```valor
public bool fingerNodeIsValid(usize value_count, usize child_count, usize measure)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value_count`: usize (by value)
> - `child_count`: usize (by value)
> - `measure`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::persistent::fingerNodeIsValid(value_count, child_count, measure);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-fingersearch"></a>

> ## `fingerSearch`

> Search follows cumulative monoidal measures and therefore works for indexed access as well as custom priority/size searches. Search follows cumulative monoidal measures and therefore works for indexed access as well as custom priority/size searches.

```valor
public i32 fingerSearch(usize target, usize total_measure, () -> usize child_count, (usize) -> usize child_measure, (usize) -> void descend, (usize) -> void receive_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `target`: usize (by value)
> - `total_measure`: usize (by value)
> - `receive_index`: () -> usize child_count, (usize) -> usize child_measure, (usize) -> void descend, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::persistent::fingerSearch(target, total_measure, receive_index);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-zipperstateisvalid"></a>

> ## `zipperStateIsValid`

> Provides the module's **zipper state is valid** operation. Returns `bool`.

```valor
public bool zipperStateIsValid(usize depth, bool has_path)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `depth`: usize (by value)
> - `has_path`: bool (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::persistent::zipperStateIsValid(depth, has_path);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-zippermovesibling"></a>

> ## `zipperMoveSibling`

> Provides the module's **zipper move sibling** operation. Returns `i32`.

```valor
public i32 zipperMoveSibling(usize focus_index, usize sibling_count, i32 direction, (usize) -> void receive_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `focus_index`: usize (by value)
> - `sibling_count`: usize (by value)
> - `direction`: i32 (by value)
> - `receive_index`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::persistent::zipperMoveSibling(focus_index, sibling_count, direction, receive_index);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-zipperascend"></a>

> ## `zipperAscend`

> Provides the module's **zipper ascend** operation. Returns `i32`.

```valor
public i32 zipperAscend(usize depth, bool has_path, () -> void receive_parent)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `depth`: usize (by value)
> - `has_path`: bool (by value)
> - `receive_parent`: () -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::persistent::zipperAscend(depth, has_path, receive_parent);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-transientpreparepath"></a>

> ## `transientPreparePath`

> retain_path/release_path integrate any safe reclamation policy. retain_path/release_path integrate any safe reclamation policy. A transient can reuse uniquely owned nodes; shared nodes are copied before mutation.

```valor
public i32 transientPreparePath(usize depth, u64 owner_token, u8 state, (usize) -> u64 read_node_owner, (usize) -> void retain_shared, (usize) -> void copy_for_owner)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `depth`: usize (by value)
> - `owner_token`: u64 (by value)
> - `state`: u8 (by value)
> - `copy_for_owner`: (usize) -> u64 read_node_owner, (usize) -> void retain_shared, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::persistent::transientPreparePath(depth, owner_token, state, copy_for_owner);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-freezetransient"></a>

> ## `freezeTransient`

> Provides the module's **freeze transient** operation. Returns `i32`.

```valor
public i32 freezeTransient(u64 owner_token, u8 state, () -> void clear_owner_tokens, () -> void publish_persistent_root)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `owner_token`: u64 (by value)
> - `state`: u8 (by value)
> - `publish_persistent_root`: () -> void clear_owner_tokens, () -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::persistent::freezeTransient(owner_token, state, publish_persistent_root);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-visitleafgroups"></a>

> ## `visitLeafGroups`

> SIMD-friendly leaf processing uses contiguous spans. SIMD-friendly leaf processing uses contiguous spans.  The callback may map each full 16-element group to a vector operation and handles the final tail.

```valor
public i32 visitLeafGroups(usize length, (usize, usize) -> void visit_group)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `visit_group`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::persistent::visitLeafGroups(length, visit_group);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-partitionbegin"></a>

> ## `partitionBegin`

> NUMA partitions are deterministic and disjoint; arena policies use these ranges for first-touch or interleaved placement without changing roots. NUMA partitions are deterministic and disjoint; arena policies use these ranges for first-touch or interleaved placement without changing roots.

```valor
public usize partitionBegin(usize length, usize partition, usize partition_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `partition`: usize (by value)
> - `partition_count`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::persistent::partitionBegin(length, partition, partition_count);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

<a id="fn-partitionlength"></a>

> ## `partitionLength`

> Provides the module's **partition length** operation. Returns `usize`.

```valor
public usize partitionLength(usize length, usize partition, usize partition_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `partition`: usize (by value)
> - `partition_count`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::persistent::partitionLength(length, partition, partition_count);
> ```

> ### SEE ALSO
>
> - [`std::collections::persistent::addFits`](#fn-addfits)
> - [`std::collections::persistent::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::persistent::power32`](#fn-power32)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Ordered collections](STD-COLLECTIONS-ORDERED-DOC.md) · [Table of contents](standard-library/README.md) · [Queues →](STD-COLLECTIONS-QUEUE-DOC.md)
