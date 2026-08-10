<!-- stdlib-reference-style: modern -->
> # `std::collections::ordered`

`std::collections::ordered` ordered-map and ordered-set operations.

[Standard library](standard-library/README.md) / [Collections and text](standard-library/README.md#collections-and-text) / **Ordered collections**

> **Source:** `stdlib/std/collections/ordered.valor` · **Routines:** 57 public

## Routines

<details>
<summary>Browse all 57 routines</summary>

- [`numaPolicyIsValid`](#fn-numapolicyisvalid)
- [`treeStateIsValid`](#fn-treestateisvalid)
- [`binaryParent`](#fn-binaryparent)
- [`binaryLeft`](#fn-binaryleft)
- [`binaryRight`](#fn-binaryright)
- [`lowestPowerOfTwoFactor`](#fn-lowestpoweroftwofactor)
- [`nextPowerOfTwo`](#fn-nextpoweroftwo)
- [`numaPartitionBegin`](#fn-numapartitionbegin)
- [`numaPartitionLength`](#fn-numapartitionlength)
- [`lowerBound`](#fn-lowerbound)
- [`lowerBoundMask16`](#fn-lowerboundmask16)
- [`firstMaskLane`](#fn-firstmasklane)
- [`btreeShapeIsValid`](#fn-btreeshapeisvalid)
- [`btreeGet`](#fn-btreeget)
- [`btreeLeafInsert`](#fn-btreeleafinsert)
- [`btreeLeafErase`](#fn-btreeleaferase)
- [`btreeSplitChild`](#fn-btreesplitchild)
- [`bplusGet`](#fn-bplusget)
- [`bplusRangeScan`](#fn-bplusrangescan)
- [`treeFind`](#fn-treefind)
- [`treeFindInsertParent`](#fn-treefindinsertparent)
- [`treeMinimum`](#fn-treeminimum)
- [`treeMaximum`](#fn-treemaximum)
- [`treeSuccessor`](#fn-treesuccessor)
- [`treeIterate`](#fn-treeiterate)
- [`rotateLeft`](#fn-rotateleft)
- [`rotateRight`](#fn-rotateright)
- [`avlBalance`](#fn-avlbalance)
- [`avlRecomputeHeight`](#fn-avlrecomputeheight)
- [`subtreeSize`](#fn-subtreesize)
- [`recomputeSubtreeSize`](#fn-recomputesubtreesize)
- [`orderStatisticSelect`](#fn-orderstatisticselect)
- [`orderStatisticRank`](#fn-orderstatisticrank)
- [`splayNode`](#fn-splaynode)
- [`treapRestoreHeap`](#fn-treaprestoreheap)
- [`trieGet`](#fn-trieget)
- [`trieWalkPrefix`](#fn-triewalkprefix)
- [`radixPrefixBlock16`](#fn-radixprefixblock16)
- [`radixCommonPrefix`](#fn-radixcommonprefix)
- [`byteBit`](#fn-bytebit)
- [`patriciaFirstDifferentBit`](#fn-patriciafirstdifferentbit)
- [`ternaryGet`](#fn-ternaryget)
- [`intervalsOverlap`](#fn-intervalsoverlap)
- [`intervalFindAny`](#fn-intervalfindany)
- [`intervalVisitOverlaps`](#fn-intervalvisitoverlaps)
- [`intervalMaximumEnd`](#fn-intervalmaximumend)
- [`fenwickPointUpdate`](#fn-fenwickpointupdate)
- [`fenwickPointUpdateConcurrent`](#fn-fenwickpointupdateconcurrent)
- [`fenwickPrefixQuery`](#fn-fenwickprefixquery)
- [`fenwickRangeQuery`](#fn-fenwickrangequery)
- [`segmentPointUpdate`](#fn-segmentpointupdate)
- [`segmentRangeQuery`](#fn-segmentrangequery)
- [`segmentRangeUpdateLazy`](#fn-segmentrangeupdatelazy)
- [`publishOrderedSnapshot`](#fn-publishorderedsnapshot)
- [`claimOrderedNode`](#fn-claimorderednode)
- [`withNumaShard`](#fn-withnumashard)
- [`orderedTotalSize`](#fn-orderedtotalsize)

</details>

## API reference

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
> bool result = std::collections::ordered::numaPolicyIsValid(policy);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)
> - [`std::collections::ordered::binaryLeft`](#fn-binaryleft)

<a id="fn-treestateisvalid"></a>

> ## `treeStateIsValid`

> Provides the module's **tree state is valid** operation. Returns `bool`.

```valor
public bool treeStateIsValid(usize root, usize length, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `root`: usize (by value)
> - `length`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::ordered::treeStateIsValid(root, length, capacity);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)
> - [`std::collections::ordered::binaryLeft`](#fn-binaryleft)

<a id="fn-binaryparent"></a>

> ## `binaryParent`

> Provides the module's **binary parent** operation. Returns `usize`.

```valor
public usize binaryParent(usize node)
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
> usize result = std::collections::ordered::binaryParent(node);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryLeft`](#fn-binaryleft)

<a id="fn-binaryleft"></a>

> ## `binaryLeft`

> Provides the module's **binary left** operation. Returns `usize`.

```valor
public usize binaryLeft(usize node)
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
> usize result = std::collections::ordered::binaryLeft(node);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-binaryright"></a>

> ## `binaryRight`

> Provides the module's **binary right** operation. Returns `usize`.

```valor
public usize binaryRight(usize node)
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
> usize result = std::collections::ordered::binaryRight(node);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-lowestpoweroftwofactor"></a>

> ## `lowestPowerOfTwoFactor`

> Provides the module's **lowest power of two factor** operation. Returns `usize`.

```valor
public usize lowestPowerOfTwoFactor(usize value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::ordered::lowestPowerOfTwoFactor(value);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-nextpoweroftwo"></a>

> ## `nextPowerOfTwo`

> Provides the module's **next power of two** operation. Returns `usize`.

```valor
public usize nextPowerOfTwo(usize value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::ordered::nextPowerOfTwo(value);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-numapartitionbegin"></a>

> ## `numaPartitionBegin`

> Provides the module's **numa partition begin** operation. Returns `usize`.

```valor
public usize numaPartitionBegin(usize count, usize node_count, usize node)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `node_count`: usize (by value)
> - `node`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::ordered::numaPartitionBegin(count, node_count, node);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-numapartitionlength"></a>

> ## `numaPartitionLength`

> Provides the module's **numa partition length** operation. Returns `usize`.

```valor
public usize numaPartitionLength(usize count, usize node_count, usize node)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `node_count`: usize (by value)
> - `node`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::ordered::numaPartitionLength(count, node_count, node);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-lowerbound"></a>

> ## `lowerBound`

> Provides the module's **lower bound** operation. Returns `usize`.

```valor
public usize lowerBound(usize length, K key, (usize) -> K read_key, (K, K) -> bool less)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `key`: K (by value)
> - `K`: (usize) -> K read_key, ( (borrowed fn-ptr (callback))
> - `less`: K) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::ordered::lowerBound(length, key, K, less);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-lowerboundmask16"></a>

> ## `lowerBoundMask16`

> Provides the module's **lower bound mask16** operation. Returns `u16`.

```valor
public u16 lowerBoundMask16(usize length, K key, (usize) -> K read_key, (K, K) -> bool less)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `key`: K (by value)
> - `K`: (usize) -> K read_key, ( (borrowed fn-ptr (callback))
> - `less`: K) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (u16)

> ### EXAMPLE
>
> ```valor
> u16 result = std::collections::ordered::lowerBoundMask16(length, key, K, less);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-firstmasklane"></a>

> ## `firstMaskLane`

> Provides the module's **first mask lane** operation. Returns `usize`.

```valor
public usize firstMaskLane(u16 mask)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `mask`: u16 (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::ordered::firstMaskLane(mask);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-btreeshapeisvalid"></a>

> ## `btreeShapeIsValid`

> Provides the module's **btree shape is valid** operation. Returns `bool`.

```valor
public bool btreeShapeIsValid(usize node_key_capacity, usize minimum_degree)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_key_capacity`: usize (by value)
> - `minimum_degree`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::ordered::btreeShapeIsValid(node_key_capacity, minimum_degree);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-btreeget"></a>

> ## `btreeGet`

> Provides the module's **btree get** operation. Returns `i32`.

```valor
public i32 btreeGet(usize root, K key, (usize) -> usize read_count, (usize, usize) -> K read_key, (usize, usize) -> V read_value, (usize, usize) -> usize read_child, (usize) -> bool is_leaf, (K, K) -> bool less, (V) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `root`: usize (by value)
> - `key`: K (by value)
> - `usize`: (usize) -> usize read_count, ( (borrowed fn-ptr (callback))
> - `receive`: usize) -> K read_key, (usize, usize) -> V read_value, (usize, usize) -> usize read_child, (usize) -> bool is_leaf, (K, K) -> bool less, (V) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::ordered::btreeGet(root, key, usize, receive);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-btreeleafinsert"></a>

> ## `btreeLeafInsert`

> Provides the module's **btree leaf insert** operation. Returns `i32`.

```valor
public i32 btreeLeafInsert(usize count, usize key_capacity, K key, V value, (usize) -> K read_key, (usize) -> V read_value, (usize, K, V) -> void write_entry, (K, K) -> bool less)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `key_capacity`: usize (by value)
> - `key`: K (by value)
> - `value`: V (by value)
> - `less`: (usize) -> K read_key, (usize) -> V read_value, (usize, K, V) -> void write_entry, (K, K) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::ordered::btreeLeafInsert(count, key_capacity, key, value, less);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-btreeleaferase"></a>

> ## `btreeLeafErase`

> Provides the module's **btree leaf erase** operation. Returns `i32`.

```valor
public i32 btreeLeafErase(usize count, K key, (usize) -> K read_key, (usize) -> V read_value, (usize, K, V) -> void write_entry, (K, K) -> bool less, (usize) -> void write_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `key`: K (by value)
> - `write_count`: (usize) -> K read_key, (usize) -> V read_value, (usize, K, V) -> void write_entry, (K, K) -> bool less, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::ordered::btreeLeafErase(count, key, write_count);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-btreesplitchild"></a>

> ## `btreeSplitChild`

> Provides the module's **btree split child** operation. Returns `i32`.

```valor
public i32 btreeSplitChild(usize parent, usize child_position, usize full_child, usize sibling, usize minimum_degree, (usize, usize) -> K read_key, (usize, usize) -> V read_value, (usize, usize) -> usize read_child, (usize, usize, K, V) -> void write_entry, (usize, usize, usize) -> void write_child, (usize) -> usize read_count, (usize, usize) -> void write_count, (usize) -> bool is_leaf, (usize, bool) -> void write_leaf)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `parent`: usize (by value)
> - `child_position`: usize (by value)
> - `full_child`: usize (by value)
> - `sibling`: usize (by value)
> - `minimum_degree`: usize (by value)
> - `usize`: (usize, usize) -> K read_key, ( (borrowed fn-ptr (callback))
> - `write_leaf`: usize) -> V read_value, (usize, usize) -> usize read_child, (usize, usize, K, V) -> void write_entry, (usize, usize, usize) -> void write_child, (usize) -> usize read_count, (usize, usize) -> void write_count, (usize) -> bool is_leaf, (usize, bool) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::ordered::btreeSplitChild(parent, child_position, full_child, sibling, minimum_degree, usize, write_leaf);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-bplusget"></a>

> ## `bplusGet`

> Provides the module's **bplus get** operation. Returns `i32`.

```valor
public i32 bplusGet(usize root, K key, (usize) -> bool is_leaf, (usize) -> usize read_count, (usize, usize) -> K read_key, (usize, usize) -> usize read_child, (usize, usize) -> V read_leaf_value, (K, K) -> bool less, (V) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `root`: usize (by value)
> - `key`: K (by value)
> - `receive`: (usize) -> bool is_leaf, (usize) -> usize read_count, (usize, usize) -> K read_key, (usize, usize) -> usize read_child, (usize, usize) -> V read_leaf_value, (K, K) -> bool less, (V) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::ordered::bplusGet(root, key, receive);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-bplusrangescan"></a>

> ## `bplusRangeScan`

> Provides the module's **bplus range scan** operation. Returns `i32`.

```valor
public i32 bplusRangeScan(usize first_leaf, K lower, K upper, (usize) -> usize read_count, (usize, usize) -> K read_key, (usize, usize) -> V read_value, (usize) -> usize read_next_leaf, (K, K) -> bool less, (K, V) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `first_leaf`: usize (by value)
> - `lower`: K (by value)
> - `upper`: K (by value)
> - `usize`: (usize) -> usize read_count, ( (borrowed fn-ptr (callback))
> - `receive`: usize) -> K read_key, (usize, usize) -> V read_value, (usize) -> usize read_next_leaf, (K, K) -> bool less, (K, V) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::ordered::bplusRangeScan(first_leaf, lower, upper, usize, receive);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-treefind"></a>

> ## `treeFind`

> Provides the module's **tree find** operation. Returns `i32`.

```valor
public i32 treeFind(usize root, T value, (usize) -> T read_value, (usize) -> usize read_left, (usize) -> usize read_right, (T, T) -> bool less, (usize) -> void receive_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `root`: usize (by value)
> - `value`: T (by value)
> - `receive_index`: (usize) -> T read_value, (usize) -> usize read_left, (usize) -> usize read_right, (T, T) -> bool less, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::ordered::treeFind(root, value, receive_index);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-treefindinsertparent"></a>

> ## `treeFindInsertParent`

> Provides the module's **tree find insert parent** operation. Returns `i32`.

```valor
public i32 treeFindInsertParent(usize root, T value, (usize) -> T read_value, (usize) -> usize read_left, (usize) -> usize read_right, (T, T) -> bool less, (usize, bool) -> void receive_parent)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `root`: usize (by value)
> - `value`: T (by value)
> - `receive_parent`: (usize) -> T read_value, (usize) -> usize read_left, (usize) -> usize read_right, (T, T) -> bool less, (usize, bool) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::ordered::treeFindInsertParent(root, value, receive_parent);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-treeminimum"></a>

> ## `treeMinimum`

> Provides the module's **tree minimum** operation. Returns `usize`.

```valor
public usize treeMinimum(usize root, (usize) -> usize read_left)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `root`: usize (by value)
> - `read_left`: (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::ordered::treeMinimum(root, read_left);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-treemaximum"></a>

> ## `treeMaximum`

> Provides the module's **tree maximum** operation. Returns `usize`.

```valor
public usize treeMaximum(usize root, (usize) -> usize read_right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `root`: usize (by value)
> - `read_right`: (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::ordered::treeMaximum(root, read_right);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-treesuccessor"></a>

> ## `treeSuccessor`

> Provides the module's **tree successor** operation. Returns `usize`.

```valor
public usize treeSuccessor(usize node, (usize) -> usize read_left, (usize) -> usize read_right, (usize) -> usize read_parent)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `read_parent`: (usize) -> usize read_left, (usize) -> usize read_right, (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::ordered::treeSuccessor(node, read_parent);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-treeiterate"></a>

> ## `treeIterate`

> Provides the module's **tree iterate** operation. Returns `i32`.

```valor
public i32 treeIterate(usize root, (usize) -> T read_value, (usize) -> usize read_left, (usize) -> usize read_right, (usize) -> usize read_parent, (T) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `root`: usize (by value)
> - `receive`: (usize) -> T read_value, (usize) -> usize read_left, (usize) -> usize read_right, (usize) -> usize read_parent, (T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::ordered::treeIterate(root, receive);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-rotateleft"></a>

> ## `rotateLeft`

> Rotation callbacks update every affected link and may atomically publish a new root when parent is NO_INDEX. Rotation callbacks update every affected link and may atomically publish a new root when parent is NO_INDEX.

```valor
public i32 rotateLeft(usize pivot, (usize) -> usize read_left, (usize) -> usize read_right, (usize) -> usize read_parent, (usize, usize) -> void write_left, (usize, usize) -> void write_right, (usize, usize) -> void write_parent, (usize) -> void publish_root)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `pivot`: usize (by value)
> - `publish_root`: (usize) -> usize read_left, (usize) -> usize read_right, (usize) -> usize read_parent, (usize, usize) -> void write_left, (usize, usize) -> void write_right, (usize, usize) -> void write_parent, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::ordered::rotateLeft(pivot, publish_root);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-rotateright"></a>

> ## `rotateRight`

> Provides the module's **rotate right** operation. Returns `i32`.

```valor
public i32 rotateRight(usize pivot, (usize) -> usize read_left, (usize) -> usize read_right, (usize) -> usize read_parent, (usize, usize) -> void write_left, (usize, usize) -> void write_right, (usize, usize) -> void write_parent, (usize) -> void publish_root)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `pivot`: usize (by value)
> - `publish_root`: (usize) -> usize read_left, (usize) -> usize read_right, (usize) -> usize read_parent, (usize, usize) -> void write_left, (usize, usize) -> void write_right, (usize, usize) -> void write_parent, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::ordered::rotateRight(pivot, publish_root);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-avlbalance"></a>

> ## `avlBalance`

> Provides the module's **avl balance** operation. Returns `i16`.

```valor
public i16 avlBalance(usize node, (usize) -> usize read_left, (usize) -> usize read_right, (usize) -> i16 read_height)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `read_height`: (usize) -> usize read_left, (usize) -> usize read_right, (usize) -> i16 (borrowed fn-ptr (callback))

> ### RETURNS (i16)

> ### EXAMPLE
>
> ```valor
> i16 result = std::collections::ordered::avlBalance(node, read_height);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-avlrecomputeheight"></a>

> ## `avlRecomputeHeight`

> Provides the module's **avl recompute height** operation. Returns `i16`.

```valor
public i16 avlRecomputeHeight(usize node, (usize) -> usize read_left, (usize) -> usize read_right, (usize) -> i16 read_height)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `read_height`: (usize) -> usize read_left, (usize) -> usize read_right, (usize) -> i16 (borrowed fn-ptr (callback))

> ### RETURNS (i16)

> ### EXAMPLE
>
> ```valor
> i16 result = std::collections::ordered::avlRecomputeHeight(node, read_height);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-subtreesize"></a>

> ## `subtreeSize`

> Provides the module's **subtree size** operation. Returns `usize`.

```valor
public usize subtreeSize(usize node, (usize) -> usize read_size)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `read_size`: (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::ordered::subtreeSize(node, read_size);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-recomputesubtreesize"></a>

> ## `recomputeSubtreeSize`

> Provides the module's **recompute subtree size** operation. Returns `usize`.

```valor
public usize recomputeSubtreeSize(usize node, (usize) -> usize read_left, (usize) -> usize read_right, (usize) -> usize read_size)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `read_size`: (usize) -> usize read_left, (usize) -> usize read_right, (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::ordered::recomputeSubtreeSize(node, read_size);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-orderstatisticselect"></a>

> ## `orderStatisticSelect`

> Provides the module's **order statistic select** operation. Returns `i32`.

```valor
public i32 orderStatisticSelect(usize root, usize rank, (usize) -> T read_value, (usize) -> usize read_left, (usize) -> usize read_right, (usize) -> usize read_size, (T) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `root`: usize (by value)
> - `rank`: usize (by value)
> - `receive`: (usize) -> T read_value, (usize) -> usize read_left, (usize) -> usize read_right, (usize) -> usize read_size, (T) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::ordered::orderStatisticSelect(root, rank, receive);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-orderstatisticrank"></a>

> ## `orderStatisticRank`

> Provides the module's **order statistic rank** operation. Returns `usize`.

```valor
public usize orderStatisticRank(usize root, T value, (usize) -> T read_value, (usize) -> usize read_left, (usize) -> usize read_right, (usize) -> usize read_size, (T, T) -> bool less)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `root`: usize (by value)
> - `value`: T (by value)
> - `less`: (usize) -> T read_value, (usize) -> usize read_left, (usize) -> usize read_right, (usize) -> usize read_size, (T, T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::ordered::orderStatisticRank(root, value, less);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-splaynode"></a>

> ## `splayNode`

> Provides the module's **splay node** operation. Returns `i32`.

```valor
public i32 splayNode(usize node, (usize) -> usize read_left, (usize) -> usize read_right, (usize) -> usize read_parent, (usize) -> i32 rotate_left, (usize) -> i32 rotate_right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `rotate_right`: (usize) -> usize read_left, (usize) -> usize read_right, (usize) -> usize read_parent, (usize) -> i32 rotate_left, (usize) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::ordered::splayNode(node, rotate_right);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-treaprestoreheap"></a>

> ## `treapRestoreHeap`

> Provides the module's **treap restore heap** operation. Returns `i32`.

```valor
public i32 treapRestoreHeap(usize node, (usize) -> u64 read_priority, (usize) -> usize read_parent, (usize) -> usize read_left, (usize) -> i32 rotate_left, (usize) -> i32 rotate_right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `rotate_right`: (usize) -> u64 read_priority, (usize) -> usize read_parent, (usize) -> usize read_left, (usize) -> i32 rotate_left, (usize) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::ordered::treapRestoreHeap(node, rotate_right);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-trieget"></a>

> ## `trieGet`

> Provides the module's **trie get** operation. Returns `i32`.

```valor
public i32 trieGet(usize root, usize key_length, (usize) -> K read_key_symbol, (usize) -> usize read_first_child, (usize) -> usize read_next_sibling, (usize) -> K read_node_symbol, (usize) -> bool is_terminal, (usize) -> V read_value, (K, K) -> bool equal, (V) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `root`: usize (by value)
> - `key_length`: usize (by value)
> - `receive`: (usize) -> K read_key_symbol, (usize) -> usize read_first_child, (usize) -> usize read_next_sibling, (usize) -> K read_node_symbol, (usize) -> bool is_terminal, (usize) -> V read_value, (K, K) -> bool equal, (V) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::ordered::trieGet(root, key_length, receive);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-triewalkprefix"></a>

> ## `trieWalkPrefix`

> Provides the module's **trie walk prefix** operation. Returns `i32`.

```valor
public i32 trieWalkPrefix(usize root, usize key_length, (usize) -> K read_key_symbol, (usize) -> usize read_first_child, (usize) -> usize read_next_sibling, (usize) -> K read_node_symbol, (K, K) -> bool equal, (usize, usize) -> void receive_node_and_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `root`: usize (by value)
> - `key_length`: usize (by value)
> - `receive_node_and_length`: (usize) -> K read_key_symbol, (usize) -> usize read_first_child, (usize) -> usize read_next_sibling, (usize) -> K read_node_symbol, (K, K) -> bool equal, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::ordered::trieWalkPrefix(root, key_length, receive_node_and_length);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-radixprefixblock16"></a>

> ## `radixPrefixBlock16`

> The fixed 16-byte comparison block is the SIMD boundary for packed labels.

```valor
public usize radixPrefixBlock16(usize left_length, usize right_length, (usize) -> u8 read_left, (usize) -> u8 read_right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_length`: usize (by value)
> - `right_length`: usize (by value)
> - `read_right`: (usize) -> u8 read_left, (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::ordered::radixPrefixBlock16(left_length, right_length, read_right);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-radixcommonprefix"></a>

> ## `radixCommonPrefix`

> Provides the module's **radix common prefix** operation. Returns `usize`.

```valor
public usize radixCommonPrefix(usize left_length, usize right_length, (usize) -> u8 read_left, (usize) -> u8 read_right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_length`: usize (by value)
> - `right_length`: usize (by value)
> - `read_right`: (usize) -> u8 read_left, (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::ordered::radixCommonPrefix(left_length, right_length, read_right);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-bytebit"></a>

> ## `byteBit`

> Provides the module's **byte bit** operation. Returns `u8`.

```valor
public u8 byteBit(u8 value, usize bit_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u8 (by value)
> - `bit_index`: usize (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::collections::ordered::byteBit(value, bit_index);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-patriciafirstdifferentbit"></a>

> ## `patriciaFirstDifferentBit`

> Provides the module's **patricia first different bit** operation. Returns `usize`.

```valor
public usize patriciaFirstDifferentBit(usize left_length, usize right_length, (usize) -> u8 read_left, (usize) -> u8 read_right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_length`: usize (by value)
> - `right_length`: usize (by value)
> - `read_right`: (usize) -> u8 read_left, (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::ordered::patriciaFirstDifferentBit(left_length, right_length, read_right);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-ternaryget"></a>

> ## `ternaryGet`

> Provides the module's **ternary get** operation. Returns `i32`.

```valor
public i32 ternaryGet(usize root, usize key_length, (usize) -> u8 read_key_byte, (usize) -> u8 read_symbol, (usize) -> usize read_lower, (usize) -> usize read_equal, (usize) -> usize read_higher, (usize) -> bool is_terminal, (usize) -> V read_value, (V) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `root`: usize (by value)
> - `key_length`: usize (by value)
> - `receive`: (usize) -> u8 read_key_byte, (usize) -> u8 read_symbol, (usize) -> usize read_lower, (usize) -> usize read_equal, (usize) -> usize read_higher, (usize) -> bool is_terminal, (usize) -> V read_value, (V) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::ordered::ternaryGet(root, key_length, receive);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-intervalsoverlap"></a>

> ## `intervalsOverlap`

> Provides the module's **intervals overlap** operation. Returns `bool`.

```valor
public bool intervalsOverlap(T left_start, T left_end, T right_start, T right_end, (T, T) -> bool less)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_start`: T (by value)
> - `left_end`: T (by value)
> - `right_start`: T (by value)
> - `right_end`: T (by value)
> - `less`: (T, T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::collections::ordered::intervalsOverlap(left_start, left_end, right_start, right_end, less);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-intervalfindany"></a>

> ## `intervalFindAny`

> Provides the module's **interval find any** operation. Returns `i32`.

```valor
public i32 intervalFindAny(usize root, T query_start, T query_end, (usize) -> T read_start, (usize) -> T read_end, (usize) -> T read_maximum_end, (usize) -> usize read_left, (usize) -> usize read_right, (T, T) -> bool less, (usize) -> void receive_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `root`: usize (by value)
> - `query_start`: T (by value)
> - `query_end`: T (by value)
> - `receive_index`: (usize) -> T read_start, (usize) -> T read_end, (usize) -> T read_maximum_end, (usize) -> usize read_left, (usize) -> usize read_right, (T, T) -> bool less, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::ordered::intervalFindAny(root, query_start, query_end, receive_index);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-intervalvisitoverlaps"></a>

> ## `intervalVisitOverlaps`

> Provides the module's **interval visit overlaps** operation. Returns `usize`.

```valor
public usize intervalVisitOverlaps(usize node, usize depth, T query_start, T query_end, (usize) -> T read_start, (usize) -> T read_end, (usize) -> T read_maximum_end, (usize) -> usize read_left, (usize) -> usize read_right, (T, T) -> bool less, (usize) -> void receive_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `depth`: usize (by value)
> - `query_start`: T (by value)
> - `query_end`: T (by value)
> - `receive_index`: (usize) -> T read_start, (usize) -> T read_end, (usize) -> T read_maximum_end, (usize) -> usize read_left, (usize) -> usize read_right, (T, T) -> bool less, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::ordered::intervalVisitOverlaps(node, depth, query_start, query_end, receive_index);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-intervalmaximumend"></a>

> ## `intervalMaximumEnd`

> Provides the module's **interval maximum end** operation. Returns `T`.

```valor
public T intervalMaximumEnd(T own_end, usize left, usize right, (usize) -> T read_maximum_end, (T, T) -> bool less)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `own_end`: T (by value)
> - `left`: usize (by value)
> - `right`: usize (by value)
> - `T`: (usize) -> T read_maximum_end, ( (borrowed fn-ptr (callback))
> - `less`: T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (T)

> ### EXAMPLE
>
> ```valor
> T result = std::collections::ordered::intervalMaximumEnd(own_end, left, right, T, less);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-fenwickpointupdate"></a>

> ## `fenwickPointUpdate`

> Provides the module's **fenwick point update** operation. Returns `i32`.

```valor
public i32 fenwickPointUpdate(usize length, usize index, T change, (usize) -> T read, (usize, T) -> void write, (T, T) -> T combine)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `index`: usize (by value)
> - `change`: T (by value)
> - `usize`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `combine`: T) -> void write, (T, T) -> T (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::ordered::fenwickPointUpdate(length, index, change, usize, combine);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-fenwickpointupdateconcurrent"></a>

> ## `fenwickPointUpdateConcurrent`

> Provides the module's **fenwick point update concurrent** operation. Returns `i32`.

```valor
public i32 fenwickPointUpdateConcurrent(usize length, usize index, T change, (usize, T) -> bool atomic_combine)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `index`: usize (by value)
> - `change`: T (by value)
> - `atomic_combine`: (usize, T) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::ordered::fenwickPointUpdateConcurrent(length, index, change, atomic_combine);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-fenwickprefixquery"></a>

> ## `fenwickPrefixQuery`

> Provides the module's **fenwick prefix query** operation. Returns `T`.

```valor
public T fenwickPrefixQuery(usize end, T identity, (usize) -> T read, (T, T) -> T combine)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `end`: usize (by value)
> - `identity`: T (by value)
> - `T`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `combine`: T) -> T (borrowed fn-ptr (callback))

> ### RETURNS (T)

> ### EXAMPLE
>
> ```valor
> T result = std::collections::ordered::fenwickPrefixQuery(end, identity, T, combine);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-fenwickrangequery"></a>

> ## `fenwickRangeQuery`

> Provides the module's **fenwick range query** operation. Returns `T`.

```valor
public T fenwickRangeQuery(usize begin, usize end, T identity, (usize) -> T read, (T, T) -> T combine, (T, T) -> T remove_prefix)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `begin`: usize (by value)
> - `end`: usize (by value)
> - `identity`: T (by value)
> - `T`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `remove_prefix`: T) -> T combine, (T, T) -> T (borrowed fn-ptr (callback))

> ### RETURNS (T)

> ### EXAMPLE
>
> ```valor
> T result = std::collections::ordered::fenwickRangeQuery(begin, end, identity, T, remove_prefix);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-segmentpointupdate"></a>

> ## `segmentPointUpdate`

> Provides the module's **segment point update** operation. Returns `i32`.

```valor
public i32 segmentPointUpdate(usize length, usize leaf_base, usize index, T value, (usize) -> T read, (usize, T) -> void write, (T, T) -> T combine)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `leaf_base`: usize (by value)
> - `index`: usize (by value)
> - `value`: T (by value)
> - `usize`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `combine`: T) -> void write, (T, T) -> T (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::ordered::segmentPointUpdate(length, leaf_base, index, value, usize, combine);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-segmentrangequery"></a>

> ## `segmentRangeQuery`

> Provides the module's **segment range query** operation. Returns `T`.

```valor
public T segmentRangeQuery(usize leaf_base, usize begin, usize end, T identity, (usize) -> T read, (T, T) -> T combine)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `leaf_base`: usize (by value)
> - `begin`: usize (by value)
> - `end`: usize (by value)
> - `identity`: T (by value)
> - `T`: (usize) -> T read, ( (borrowed fn-ptr (callback))
> - `combine`: T) -> T (borrowed fn-ptr (callback))

> ### RETURNS (T)

> ### EXAMPLE
>
> ```valor
> T result = std::collections::ordered::segmentRangeQuery(leaf_base, begin, end, identity, T, combine);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-segmentrangeupdatelazy"></a>

> ## `segmentRangeUpdateLazy`

> Provides the module's **segment range update lazy** operation. Returns `i32`.

```valor
public i32 segmentRangeUpdateLazy(usize root, usize segment_begin, usize segment_end, usize update_begin, usize update_end, T update, (usize, usize, usize, T) -> void apply, (usize) -> void push, (usize) -> void pull)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `root`: usize (by value)
> - `segment_begin`: usize (by value)
> - `segment_end`: usize (by value)
> - `update_begin`: usize (by value)
> - `update_end`: usize (by value)
> - `update`: T (by value)
> - `pull`: (usize, usize, usize, T) -> void apply, (usize) -> void push, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::ordered::segmentRangeUpdateLazy(root, segment_begin, segment_end, update_begin, update_end, update, pull);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-publishorderedsnapshot"></a>

> ## `publishOrderedSnapshot`

> Provides the module's **publish ordered snapshot** operation. Returns `i32`.

```valor
public i32 publishOrderedSnapshot(usize expected_root, u64 expected_generation, usize new_root, usize new_length, () -> usize load_root_acquire, () -> u64 load_generation_acquire, (usize, u64, usize, usize) -> bool compare_exchange_snapshot, (usize) -> void retire_root)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `expected_root`: usize (by value)
> - `expected_generation`: u64 (by value)
> - `new_root`: usize (by value)
> - `new_length`: usize (by value)
> - `retire_root`: () -> usize load_root_acquire, () -> u64 load_generation_acquire, (usize, u64, usize, usize) -> bool compare_exchange_snapshot, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::ordered::publishOrderedSnapshot(expected_root, expected_generation, new_root, new_length, retire_root);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-claimorderednode"></a>

> ## `claimOrderedNode`

> Provides the module's **claim ordered node** operation. Returns `i32`.

```valor
public i32 claimOrderedNode(usize capacity, () -> usize load_cursor_acquire, (usize, usize) -> bool compare_exchange_cursor, (usize) -> void receive_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `usize`: () -> usize load_cursor_acquire, ( (borrowed fn-ptr (callback))
> - `receive_index`: usize) -> bool compare_exchange_cursor, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::ordered::claimOrderedNode(capacity, usize, receive_index);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-withnumashard"></a>

> ## `withNumaShard`

> Provides the module's **with numa shard** operation. Returns `i32`.

```valor
public i32 withNumaShard(usize shard_count, usize shard_index, (usize) -> bool try_claim, (usize) -> i32 operation, (usize) -> void release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `shard_count`: usize (by value)
> - `shard_index`: usize (by value)
> - `release`: (usize) -> bool try_claim, (usize) -> i32 operation, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::collections::ordered::withNumaShard(shard_count, shard_index, release);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

<a id="fn-orderedtotalsize"></a>

> ## `orderedTotalSize`

> Provides the module's **ordered total size** operation. Returns `usize`.

```valor
public usize orderedTotalSize(usize shard_count, (usize) -> usize read_shard_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `shard_count`: usize (by value)
> - `read_shard_length`: (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::collections::ordered::orderedTotalSize(shard_count, read_shard_length);
> ```

> ### SEE ALSO
>
> - [`std::collections::ordered::numaPolicyIsValid`](#fn-numapolicyisvalid)
> - [`std::collections::ordered::treeStateIsValid`](#fn-treestateisvalid)
> - [`std::collections::ordered::binaryParent`](#fn-binaryparent)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Hash collections](STD-COLLECTIONS-HASH-DOC.md) · [Table of contents](standard-library/README.md) · [Persistent collections →](STD-COLLECTIONS-PERSISTENT-DOC.md)
