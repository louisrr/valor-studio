<!-- stdlib-reference-style: modern -->
> # `std::graph`

`std::graph` graph representation and algorithms.

[Standard library](standard-library/README.md) / [Algorithms and computing](standard-library/README.md#algorithms-and-computing) / **Graphs**

> **Source:** `stdlib/std/graph.valor` · **Routines:** 58 public

## Routines

<details>
<summary>Browse all 58 routines</summary>

- [`addFits`](#fn-addfits)
- [`multiplyFits`](#fn-multiplyfits)
- [`validNumaPolicy`](#fn-validnumapolicy)
- [`validConcurrencyPolicy`](#fn-validconcurrencypolicy)
- [`nodeIndexIsValid`](#fn-nodeindexisvalid)
- [`edgeIndexIsValid`](#fn-edgeindexisvalid)
- [`graphCountsAreValid`](#fn-graphcountsarevalid)
- [`directedFlagIsValid`](#fn-directedflagisvalid)
- [`squareFits`](#fn-squarefits)
- [`matrixCellIndex`](#fn-matrixcellindex)
- [`matrixWordIndex`](#fn-matrixwordindex)
- [`bitIndexInWord`](#fn-bitindexinword)
- [`bitMask`](#fn-bitmask)
- [`wordsForMatrix`](#fn-wordsformatrix)
- [`adjacencyMatrixStateIsValid`](#fn-adjacencymatrixstateisvalid)
- [`compressedGraphStateIsValid`](#fn-compressedgraphstateisvalid)
- [`rowRangeIsValid`](#fn-rowrangeisvalid)
- [`partitionForNode`](#fn-partitionfornode)
- [`partitionBegin`](#fn-partitionbegin)
- [`partitionEnd`](#fn-partitionend)
- [`validateCompressedOffsets`](#fn-validatecompressedoffsets)
- [`validateCompressedTargets`](#fn-validatecompressedtargets)
- [`compressedDegree`](#fn-compresseddegree)
- [`forEachCompressedEdgeSimd`](#fn-foreachcompressededgesimd)
- [`forEachCompressedEdge`](#fn-foreachcompressededge)
- [`countDegrees`](#fn-countdegrees)
- [`prefixDegrees`](#fn-prefixdegrees)
- [`adjacencyInsertLockFree`](#fn-adjacencyinsertlockfree)
- [`adjacencyContains`](#fn-adjacencycontains)
- [`forEachAdjacent`](#fn-foreachadjacent)
- [`matrixHasEdge`](#fn-matrixhasedge)
- [`matrixSetPresence`](#fn-matrixsetpresence)
- [`disjointSetInitialize`](#fn-disjointsetinitialize)
- [`disjointSetFind`](#fn-disjointsetfind)
- [`disjointSetUnionRoots`](#fn-disjointsetunionroots)
- [`disjointSetUnionRootsLockFree`](#fn-disjointsetunionrootslockfree)
- [`topologicalSort`](#fn-topologicalsort)
- [`treeStateIsValid`](#fn-treestateisvalid)
- [`forestStateIsValid`](#fn-foreststateisvalid)
- [`dependencyRelease`](#fn-dependencyrelease)
- [`stateMachineStep`](#fn-statemachinestep)
- [`stateMachineStepU64`](#fn-statemachinestepu64)
- [`breadthFirstSearch`](#fn-breadthfirstsearch)
- [`computeIndegrees`](#fn-computeindegrees)
- [`graphDensity`](#fn-graphdensity)
- [`breadth_first_search`](#fn-breadth-first-search)
- [`depth_first_search`](#fn-depth-first-search)
- [`topological_sort`](#fn-topological-sort)
- [`transitive_reduction_dag`](#fn-transitive-reduction-dag)
- [`level_order_dag`](#fn-level-order-dag)
- [`strongly_connected_components`](#fn-strongly-connected-components)
- [`weakly_connected_components`](#fn-weakly-connected-components)
- [`dijkstra`](#fn-dijkstra)
- [`a_star`](#fn-a-star)
- [`dominator_tree`](#fn-dominator-tree)
- [`post_dominator_tree`](#fn-post-dominator-tree)
- [`liveness_fixed_point`](#fn-liveness-fixed-point)
- [`worklist_fixed_point`](#fn-worklist-fixed-point)

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
> bool result = std::graph::addFits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)
> - [`std::graph::validConcurrencyPolicy`](#fn-validconcurrencypolicy)

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
> bool result = std::graph::multiplyFits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)
> - [`std::graph::validConcurrencyPolicy`](#fn-validconcurrencypolicy)

<a id="fn-validnumapolicy"></a>

> ## `validNumaPolicy`

> Provides the module's **valid numa policy** operation. Returns `bool`.

```valor
public bool validNumaPolicy(u8 policy)
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
> bool result = std::graph::validNumaPolicy(policy);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validConcurrencyPolicy`](#fn-validconcurrencypolicy)

<a id="fn-validconcurrencypolicy"></a>

> ## `validConcurrencyPolicy`

> Provides the module's **valid concurrency policy** operation. Returns `bool`.

```valor
public bool validConcurrencyPolicy(u8 policy)
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
> bool result = std::graph::validConcurrencyPolicy(policy);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-nodeindexisvalid"></a>

> ## `nodeIndexIsValid`

> Provides the module's **node index is valid** operation. Returns `bool`.

```valor
public bool nodeIndexIsValid(usize node, usize node_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `node_count`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::graph::nodeIndexIsValid(node, node_count);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-edgeindexisvalid"></a>

> ## `edgeIndexIsValid`

> Provides the module's **edge index is valid** operation. Returns `bool`.

```valor
public bool edgeIndexIsValid(usize edge, usize edge_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `edge`: usize (by value)
> - `edge_count`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::graph::edgeIndexIsValid(edge, edge_count);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-graphcountsarevalid"></a>

> ## `graphCountsAreValid`

> Provides the module's **graph counts are valid** operation. Returns `bool`.

```valor
public bool graphCountsAreValid(usize node_count, usize node_capacity, usize edge_count, usize edge_capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_count`: usize (by value)
> - `node_capacity`: usize (by value)
> - `edge_count`: usize (by value)
> - `edge_capacity`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::graph::graphCountsAreValid(node_count, node_capacity, edge_count, edge_capacity);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-directedflagisvalid"></a>

> ## `directedFlagIsValid`

> Provides the module's **directed flag is valid** operation. Returns `bool`.

```valor
public bool directedFlagIsValid(u8 directed)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `directed`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::graph::directedFlagIsValid(directed);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-squarefits"></a>

> ## `squareFits`

> Provides the module's **square fits** operation. Returns `bool`.

```valor
public bool squareFits(usize value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::graph::squareFits(value);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-matrixcellindex"></a>

> ## `matrixCellIndex`

> Provides the module's **matrix cell index** operation. Returns `usize`.

```valor
public usize matrixCellIndex(usize row, usize column, usize node_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `row`: usize (by value)
> - `column`: usize (by value)
> - `node_count`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::graph::matrixCellIndex(row, column, node_count);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-matrixwordindex"></a>

> ## `matrixWordIndex`

> Provides the module's **matrix word index** operation. Returns `usize`.

```valor
public usize matrixWordIndex(usize row, usize column, usize node_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `row`: usize (by value)
> - `column`: usize (by value)
> - `node_count`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::graph::matrixWordIndex(row, column, node_count);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-bitindexinword"></a>

> ## `bitIndexInWord`

> Provides the module's **bit index in word** operation. Returns `usize`.

```valor
public usize bitIndexInWord(usize bit_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bit_index`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::graph::bitIndexInWord(bit_index);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-bitmask"></a>

> ## `bitMask`

> Provides the module's **bit mask** operation. Returns `u64`.

```valor
public u64 bitMask(usize bit_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `bit_index`: usize (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::graph::bitMask(bit_index);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-wordsformatrix"></a>

> ## `wordsForMatrix`

> Provides the module's **words for matrix** operation. Returns `usize`.

```valor
public usize wordsForMatrix(usize node_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_count`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::graph::wordsForMatrix(node_count);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-adjacencymatrixstateisvalid"></a>

> ## `adjacencyMatrixStateIsValid`

> Provides the module's **adjacency matrix state is valid** operation. Returns `bool`.

```valor
public bool adjacencyMatrixStateIsValid(usize node_count, usize value_capacity, usize word_capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_count`: usize (by value)
> - `value_capacity`: usize (by value)
> - `word_capacity`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::graph::adjacencyMatrixStateIsValid(node_count, value_capacity, word_capacity);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-compressedgraphstateisvalid"></a>

> ## `compressedGraphStateIsValid`

> Provides the module's **compressed graph state is valid** operation. Returns `bool`.

```valor
public bool compressedGraphStateIsValid(usize node_count, usize edge_count, usize offset_count, usize final_offset)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_count`: usize (by value)
> - `edge_count`: usize (by value)
> - `offset_count`: usize (by value)
> - `final_offset`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::graph::compressedGraphStateIsValid(node_count, edge_count, offset_count, final_offset);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-rowrangeisvalid"></a>

> ## `rowRangeIsValid`

> Provides the module's **row range is valid** operation. Returns `bool`.

```valor
public bool rowRangeIsValid(usize node, usize node_count, usize begin, usize end, usize edge_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `node_count`: usize (by value)
> - `begin`: usize (by value)
> - `end`: usize (by value)
> - `edge_count`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::graph::rowRangeIsValid(node, node_count, begin, end, edge_count);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-partitionfornode"></a>

> ## `partitionForNode`

> Provides the module's **partition for node** operation. Returns `usize`.

```valor
public usize partitionForNode(usize node, usize node_count, usize partition_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `node_count`: usize (by value)
> - `partition_count`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::graph::partitionForNode(node, node_count, partition_count);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-partitionbegin"></a>

> ## `partitionBegin`

> Provides the module's **partition begin** operation. Returns `usize`.

```valor
public usize partitionBegin(usize partition, usize node_count, usize partition_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `partition`: usize (by value)
> - `node_count`: usize (by value)
> - `partition_count`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::graph::partitionBegin(partition, node_count, partition_count);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-partitionend"></a>

> ## `partitionEnd`

> Provides the module's **partition end** operation. Returns `usize`.

```valor
public usize partitionEnd(usize partition, usize node_count, usize partition_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `partition`: usize (by value)
> - `node_count`: usize (by value)
> - `partition_count`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::graph::partitionEnd(partition, node_count, partition_count);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-validatecompressedoffsets"></a>

> ## `validateCompressedOffsets`

> Provides the module's **validate compressed offsets** operation. Returns `i32`.

```valor
public i32 validateCompressedOffsets(usize node_count, usize edge_count, (usize) -> usize read_offset)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_count`: usize (by value)
> - `edge_count`: usize (by value)
> - `read_offset`: (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::validateCompressedOffsets(node_count, edge_count, read_offset);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-validatecompressedtargets"></a>

> ## `validateCompressedTargets`

> Provides the module's **validate compressed targets** operation. Returns `i32`.

```valor
public i32 validateCompressedTargets(usize node_count, usize edge_count, (usize) -> usize read_target)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_count`: usize (by value)
> - `edge_count`: usize (by value)
> - `read_target`: (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::validateCompressedTargets(node_count, edge_count, read_target);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-compresseddegree"></a>

> ## `compressedDegree`

> Provides the module's **compressed degree** operation. Returns `usize`.

```valor
public usize compressedDegree(usize node, usize node_count, (usize) -> usize read_offset)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `node_count`: usize (by value)
> - `read_offset`: (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::graph::compressedDegree(node, node_count, read_offset);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-foreachcompressededgesimd"></a>

> ## `forEachCompressedEdgeSimd`

> Eight edges are presented per full batch. Eight edges are presented per full batch.  Implementations may map the batch callback to a native vector gather; the scalar tail is bounds checked.

```valor
public i32 forEachCompressedEdgeSimd( usize node, usize node_count, usize edge_count, (usize) -> usize read_offset, (usize, usize) -> void visit_batch8, (usize) -> void visit_scalar)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `node_count`: usize (by value)
> - `edge_count`: usize (by value)
> - `usize`: (usize) -> usize read_offset, ( (borrowed fn-ptr (callback))
> - `visit_scalar`: usize) -> void visit_batch8, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::forEachCompressedEdgeSimd(node, node_count, edge_count, usize, visit_scalar);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-foreachcompressededge"></a>

> ## `forEachCompressedEdge`

> Provides the module's **for each compressed edge** operation. Returns `i32`.

```valor
public i32 forEachCompressedEdge( usize node, usize node_count, usize edge_count, (usize) -> usize read_offset, (usize) -> void visit_edge)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `node_count`: usize (by value)
> - `edge_count`: usize (by value)
> - `visit_edge`: (usize) -> usize read_offset, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::forEachCompressedEdge(node, node_count, edge_count, visit_edge);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-countdegrees"></a>

> ## `countDegrees`

> Provides the module's **count degrees** operation. Returns `i32`.

```valor
public i32 countDegrees(usize node_count, usize edge_count, (usize) -> usize read_source, (usize) -> usize read_degree, (usize, usize) -> void write_degree)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_count`: usize (by value)
> - `edge_count`: usize (by value)
> - `write_degree`: (usize) -> usize read_source, (usize) -> usize read_degree, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::countDegrees(node_count, edge_count, write_degree);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-prefixdegrees"></a>

> ## `prefixDegrees`

> Provides the module's **prefix degrees** operation. Returns `i32`.

```valor
public i32 prefixDegrees(usize node_count, (usize) -> usize read_degree, (usize, usize) -> void write_offset)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_count`: usize (by value)
> - `usize`: (usize) -> usize read_degree, ( (borrowed fn-ptr (callback))
> - `write_offset`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::prefixDegrees(node_count, usize, write_offset);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-adjacencyinsertlockfree"></a>

> ## `adjacencyInsertLockFree`

> The caller's CAS must have acquire-release success ordering. The caller's CAS must have acquire-release success ordering.  An edge slot is initialized before publication through the source head, so readers using acquire loads observe a complete immutable edge record.

```valor
public i32 adjacencyInsertLockFree( usize source, usize target, usize node_count, usize edge_capacity, usize retry_limit, () -> usize fetch_add_edge_count, (usize) -> usize load_head_acquire, (usize, usize, usize) -> void write_target_and_next, (usize, usize, usize) -> bool compare_exchange_head)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `source`: usize (by value)
> - `target`: usize (by value)
> - `node_count`: usize (by value)
> - `edge_capacity`: usize (by value)
> - `retry_limit`: usize (by value)
> - `compare_exchange_head`: () -> usize fetch_add_edge_count, (usize) -> usize load_head_acquire, (usize, usize, usize) -> void write_target_and_next, (usize, usize, usize) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::adjacencyInsertLockFree(source, target, node_count, edge_capacity, retry_limit, compare_exchange_head);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-adjacencycontains"></a>

> ## `adjacencyContains`

> Provides the module's **adjacency contains** operation. Returns `i32`.

```valor
public i32 adjacencyContains(usize source, usize target, usize node_count, usize edge_capacity, (usize) -> usize read_head, (usize) -> usize read_target, (usize) -> usize read_next, (bool) -> void receive)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `source`: usize (by value)
> - `target`: usize (by value)
> - `node_count`: usize (by value)
> - `edge_capacity`: usize (by value)
> - `receive`: (usize) -> usize read_head, (usize) -> usize read_target, (usize) -> usize read_next, (bool) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::adjacencyContains(source, target, node_count, edge_capacity, receive);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-foreachadjacent"></a>

> ## `forEachAdjacent`

> Provides the module's **for each adjacent** operation. Returns `i32`.

```valor
public i32 forEachAdjacent(usize source, usize node_count, usize edge_capacity, (usize) -> usize read_head, (usize) -> usize read_next, (usize) -> void visit_edge)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `source`: usize (by value)
> - `node_count`: usize (by value)
> - `edge_capacity`: usize (by value)
> - `visit_edge`: (usize) -> usize read_head, (usize) -> usize read_next, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::forEachAdjacent(source, node_count, edge_capacity, visit_edge);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-matrixhasedge"></a>

> ## `matrixHasEdge`

> Provides the module's **matrix has edge** operation. Returns `bool`.

```valor
public bool matrixHasEdge(usize source, usize target, usize node_count, (usize) -> u64 read_word)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `source`: usize (by value)
> - `target`: usize (by value)
> - `node_count`: usize (by value)
> - `read_word`: (usize) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::graph::matrixHasEdge(source, target, node_count, read_word);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-matrixsetpresence"></a>

> ## `matrixSetPresence`

> Provides the module's **matrix set presence** operation. Returns `i32`.

```valor
public i32 matrixSetPresence(usize source, usize target, usize node_count, bool present, (usize) -> u64 read_word, (usize, u64) -> void write_word)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `source`: usize (by value)
> - `target`: usize (by value)
> - `node_count`: usize (by value)
> - `present`: bool (by value)
> - `usize`: (usize) -> u64 read_word, ( (borrowed fn-ptr (callback))
> - `write_word`: u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::matrixSetPresence(source, target, node_count, present, usize, write_word);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-disjointsetinitialize"></a>

> ## `disjointSetInitialize`

> Provides the module's **disjoint set initialize** operation. Returns `i32`.

```valor
public i32 disjointSetInitialize(usize length, usize capacity, (usize, usize) -> void write_parent, (usize, u8) -> void write_rank)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `usize`: (usize, usize) -> void write_parent, ( (borrowed fn-ptr (callback))
> - `write_rank`: u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::disjointSetInitialize(length, capacity, usize, write_rank);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-disjointsetfind"></a>

> ## `disjointSetFind`

> Path halving writes every visited node to its grandparent.

```valor
public i32 disjointSetFind(usize element, usize length, (usize) -> usize read_parent, (usize, usize) -> void write_parent, (usize) -> void receive_root)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `element`: usize (by value)
> - `length`: usize (by value)
> - `usize`: (usize) -> usize read_parent, ( (borrowed fn-ptr (callback))
> - `receive_root`: usize) -> void write_parent, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::disjointSetFind(element, length, usize, receive_root);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-disjointsetunionroots"></a>

> ## `disjointSetUnionRoots`

> Roots must be produced by disjointSetFind. Roots must be produced by disjointSetFind.  Equal rank increments only the winning root, bounding tree height before compression.

```valor
public i32 disjointSetUnionRoots( usize left_root, usize right_root, usize length, (usize) -> u8 read_rank, (usize, usize) -> void write_parent, (usize, u8) -> void write_rank, (usize, usize) -> void receive_root_and_merged)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_root`: usize (by value)
> - `right_root`: usize (by value)
> - `length`: usize (by value)
> - `usize`: (usize) -> u8 read_rank, ( (borrowed fn-ptr (callback))
> - `receive_root_and_merged`: usize) -> void write_parent, (usize, u8) -> void write_rank, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::disjointSetUnionRoots(left_root, right_root, length, usize, receive_root_and_merged);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-disjointsetunionrootslockfree"></a>

> ## `disjointSetUnionRootsLockFree`

> CAS-based root linking. CAS-based root linking.  Lock freedom depends on the supplied parent CAS being lock-free; failed races return ERR_BUSY for bounded caller retry.

```valor
public i32 disjointSetUnionRootsLockFree( usize left_root, usize right_root, usize length, (usize) -> usize load_parent_acquire, (usize, usize, usize) -> bool compare_exchange_parent)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_root`: usize (by value)
> - `right_root`: usize (by value)
> - `length`: usize (by value)
> - `usize`: (usize) -> usize load_parent_acquire, ( (borrowed fn-ptr (callback))
> - `usize`: usize (by value)
> - `compare_exchange_parent`: usize) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::disjointSetUnionRootsLockFree(left_root, right_root, length, usize, usize, compare_exchange_parent);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-topologicalsort"></a>

> ## `topologicalSort`

> Provides the module's **topological sort** operation. Returns `i32`.

```valor
public i32 topologicalSort( usize node_count, usize edge_count, (usize) -> usize read_offset, (usize) -> usize read_target, (usize) -> usize read_indegree, (usize, usize) -> void write_indegree, (usize) -> void queue_push, () -> usize queue_pop, (usize, usize) -> void write_order)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_count`: usize (by value)
> - `edge_count`: usize (by value)
> - `write_order`: (usize) -> usize read_offset, (usize) -> usize read_target, (usize) -> usize read_indegree, (usize, usize) -> void write_indegree, (usize) -> void queue_push, () -> usize queue_pop, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::topologicalSort(node_count, edge_count, write_order);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-treestateisvalid"></a>

> ## `treeStateIsValid`

> Provides the module's **tree state is valid** operation. Returns `i32`.

```valor
public i32 treeStateIsValid(usize node_count, usize root, (usize) -> usize read_parent)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_count`: usize (by value)
> - `root`: usize (by value)
> - `read_parent`: (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::treeStateIsValid(node_count, root, read_parent);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-foreststateisvalid"></a>

> ## `forestStateIsValid`

> Provides the module's **forest state is valid** operation. Returns `i32`.

```valor
public i32 forestStateIsValid(usize node_count, (usize) -> usize read_parent, (usize) -> void receive_root_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_count`: usize (by value)
> - `receive_root_count`: (usize) -> usize read_parent, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::forestStateIsValid(node_count, receive_root_count);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-dependencyrelease"></a>

> ## `dependencyRelease`

> Provides the module's **dependency release** operation. Returns `i32`.

```valor
public i32 dependencyRelease( usize completed, usize node_count, usize edge_count, (usize) -> usize read_reverse_offset, (usize) -> usize read_dependent, (usize) -> usize read_unresolved, (usize, usize) -> void write_unresolved, (usize) -> void ready)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `completed`: usize (by value)
> - `node_count`: usize (by value)
> - `edge_count`: usize (by value)
> - `ready`: (usize) -> usize read_reverse_offset, (usize) -> usize read_dependent, (usize) -> usize read_unresolved, (usize, usize) -> void write_unresolved, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::dependencyRelease(completed, node_count, edge_count, ready);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-statemachinestep"></a>

> ## `stateMachineStep`

> Provides the module's **state machine step** operation. Returns `i32`.

```valor
public i32 stateMachineStep( usize current_state, usize state_count, usize transition_count, Edge event, (usize) -> usize read_offset, (usize) -> usize read_target, (usize) -> Edge read_event, (Edge, Edge) -> bool events_equal, (usize) -> void receive_next_state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `current_state`: usize (by value)
> - `state_count`: usize (by value)
> - `transition_count`: usize (by value)
> - `event`: Edge (by value)
> - `receive_next_state`: (usize) -> usize read_offset, (usize) -> usize read_target, (usize) -> Edge read_event, (Edge, Edge) -> bool events_equal, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::stateMachineStep(current_state, state_count, transition_count, event, receive_next_state);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-statemachinestepu64"></a>

> ## `stateMachineStepU64`

> Provides the module's **state machine step u64** operation. Returns `i32`.

```valor
public i32 stateMachineStepU64( usize current_state, usize state_count, usize transition_count, u64 event, (usize) -> usize read_offset, (usize) -> usize read_target, (usize) -> u64 read_event, (usize) -> void receive_next_state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `current_state`: usize (by value)
> - `state_count`: usize (by value)
> - `transition_count`: usize (by value)
> - `event`: u64 (by value)
> - `receive_next_state`: (usize) -> usize read_offset, (usize) -> usize read_target, (usize) -> u64 read_event, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::stateMachineStepU64(current_state, state_count, transition_count, event, receive_next_state);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-breadthfirstsearch"></a>

> ## `breadthFirstSearch`

> Provides the module's **breadth first search** operation. Returns `i32`.

```valor
public i32 breadthFirstSearch( usize start, usize node_count, usize edge_count, (usize) -> usize read_offset, (usize) -> usize read_target, (usize) -> bool read_visited, (usize, bool) -> void write_visited, (usize) -> void queue_push, () -> usize queue_pop, (usize) -> void visit_node)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `node_count`: usize (by value)
> - `edge_count`: usize (by value)
> - `visit_node`: (usize) -> usize read_offset, (usize) -> usize read_target, (usize) -> bool read_visited, (usize, bool) -> void write_visited, (usize) -> void queue_push, () -> usize queue_pop, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::breadthFirstSearch(start, node_count, edge_count, visit_node);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-computeindegrees"></a>

> ## `computeIndegrees`

> Provides the module's **compute indegrees** operation. Returns `i32`.

```valor
public i32 computeIndegrees( usize node_count, usize edge_count, (usize) -> usize read_target, (usize) -> usize read_indegree, (usize, usize) -> void write_indegree)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_count`: usize (by value)
> - `edge_count`: usize (by value)
> - `write_indegree`: (usize) -> usize read_target, (usize) -> usize read_indegree, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::computeIndegrees(node_count, edge_count, write_indegree);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-graphdensity"></a>

> ## `graphDensity`

> Provides the module's **graph density** operation. Returns `f64`.

```valor
public f64 graphDensity(usize node_count, usize edge_count, bool directed)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_count`: usize (by value)
> - `edge_count`: usize (by value)
> - `directed`: bool (by value)

> ### RETURNS (f64)

> ### EXAMPLE
>
> ```valor
> f64 result = std::graph::graphDensity(node_count, edge_count, directed);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-breadth-first-search"></a>

> ## `breadth_first_search`

> FIFO breadth-first traversal from a single source over a CSR adjacency. FIFO breadth-first traversal from a single source over a CSR adjacency. visit_node fires once per reached node in non-decreasing distance order; within a distance layer, nodes appear in the order they were enqueued.

```valor
public i32 breadth_first_search( usize start, usize node_count, usize edge_count, (usize) -> usize read_offset, (usize) -> usize read_target, (usize) -> bool read_visited, (usize, bool) -> void write_visited, (usize) -> void queue_push, () -> usize queue_pop, (usize) -> void visit_node)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `node_count`: usize (by value)
> - `edge_count`: usize (by value)
> - `visit_node`: (usize) -> usize read_offset, (usize) -> usize read_target, (usize) -> bool read_visited, (usize, bool) -> void write_visited, (usize) -> void queue_push, () -> usize queue_pop, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::breadth_first_search(start, node_count, edge_count, visit_node);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-depth-first-search"></a>

> ## `depth_first_search`

> Pre-order depth-first traversal from a single source using an explicit caller stack (stack_pop returns NO_INDEX when empty). Pre-order depth-first traversal from a single source using an explicit caller stack (stack_pop returns NO_INDEX when empty).  Neighbours are pushed in descending stored edge index so they pop in ascending order, giving the same visitation order as textbook recursive DFS without recursion.  A node may be pushed once per in-edge, so the stack needs node_count + edge_count slots; the visit is guarded to fire exactly once per node.

```valor
public i32 depth_first_search( usize start, usize node_count, usize edge_count, (usize) -> usize read_offset, (usize) -> usize read_target, (usize) -> bool read_visited, (usize, bool) -> void write_visited, (usize) -> void stack_push, () -> usize stack_pop, (usize) -> void visit_node)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `node_count`: usize (by value)
> - `edge_count`: usize (by value)
> - `visit_node`: (usize) -> usize read_offset, (usize) -> usize read_target, (usize) -> bool read_visited, (usize, bool) -> void write_visited, (usize) -> void stack_push, () -> usize stack_pop, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::depth_first_search(start, node_count, edge_count, visit_node);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-topological-sort"></a>

> ## `topological_sort`

> Kahn topological sort. Kahn topological sort.  read_indegree must be pre-loaded with each node's in-degree (see computeIndegrees); it is consumed destructively.  Sources are seeded in ascending id order and the caller queue defines the tie order among ready nodes (a FIFO queue yields a stable, reproducible ordering). ERR_CYCLE is returned when fewer than node_count nodes can be emitted.

```valor
public i32 topological_sort( usize node_count, usize edge_count, (usize) -> usize read_offset, (usize) -> usize read_target, (usize) -> usize read_indegree, (usize, usize) -> void write_indegree, (usize) -> void queue_push, () -> usize queue_pop, (usize, usize) -> void write_order)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_count`: usize (by value)
> - `edge_count`: usize (by value)
> - `write_order`: (usize) -> usize read_offset, (usize) -> usize read_target, (usize) -> usize read_indegree, (usize, usize) -> void write_indegree, (usize) -> void queue_push, () -> usize queue_pop, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::topological_sort(node_count, edge_count, write_order);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-transitive-reduction-dag"></a>

> ## `transitive_reduction_dag`

> Transitive reduction of a DAG. Transitive reduction of a DAG.  reaches(a, b) must be the strict transitive closure of the same DAG: true iff a reaches b through one or more edges. Edge (u -> v) is kept iff no other out-edge of u leads to a distinct node w from which v is still reachable; write_keep records the decision per stored edge index.  For a DAG the reduction is unique, so the result is canonical given the closure.  Cost is O(sum of out-degree squared) closure queries.

```valor
public i32 transitive_reduction_dag( usize node_count, usize edge_count, (usize) -> usize read_offset, (usize) -> usize read_target, (usize, usize) -> bool reaches, (usize, bool) -> void write_keep)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^3)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_count`: usize (by value)
> - `edge_count`: usize (by value)
> - `write_keep`: (usize) -> usize read_offset, (usize) -> usize read_target, (usize, usize) -> bool reaches, (usize, bool) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::transitive_reduction_dag(node_count, edge_count, write_keep);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-level-order-dag"></a>

> ## `level_order_dag`

> Longest-path layering of a DAG. Longest-path layering of a DAG.  read_order must yield a valid topological order (position -> node); levels are initialised to 0 and relaxed so that level(v) = 1 + max over predecessors u of level(u).  Every edge therefore runs from a strictly lower level to a higher one, which is the canonical level assignment for scheduling and rank layout.

```valor
public i32 level_order_dag( usize node_count, usize edge_count, (usize) -> usize read_order, (usize) -> usize read_offset, (usize) -> usize read_target, (usize) -> usize read_level, (usize, usize) -> void write_level)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_count`: usize (by value)
> - `edge_count`: usize (by value)
> - `write_level`: (usize) -> usize read_order, (usize) -> usize read_offset, (usize) -> usize read_target, (usize) -> usize read_level, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::level_order_dag(node_count, edge_count, write_level);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-strongly-connected-components"></a>

> ## `strongly_connected_components`

> Tarjan strongly connected components, iterated with an explicit frame stack so recursion depth is bounded by caller storage rather than the native stack. Tarjan strongly connected components, iterated with an explicit frame stack so recursion depth is bounded by caller storage rather than the native stack.  read_index / read_lowlink / read_on_stack are scratch arrays of size node_count (initialised here); the frame arrays hold at most node_count entries and the component stack at most node_count nodes.  Each node is labelled with its component representative, the SCC root, which is the member with the smallest discovery index and is therefore a canonical id.

```valor
public i32 strongly_connected_components( usize node_count, usize edge_count, (usize) -> usize read_offset, (usize) -> usize read_target, (usize) -> usize read_index, (usize, usize) -> void write_index, (usize) -> usize read_lowlink, (usize, usize) -> void write_lowlink, (usize) -> bool read_on_stack, (usize, bool) -> void write_on_stack, (usize) -> void scc_stack_push, () -> usize scc_stack_pop, (usize) -> usize read_frame_node, (usize, usize) -> void write_frame_node, (usize) -> usize read_frame_cursor, (usize, usize) -> void write_frame_cursor, (usize, usize) -> void write_component, (usize) -> void receive_component_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^3)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_count`: usize (by value)
> - `edge_count`: usize (by value)
> - `receive_component_count`: (usize) -> usize read_offset, (usize) -> usize read_target, (usize) -> usize read_index, (usize, usize) -> void write_index, (usize) -> usize read_lowlink, (usize, usize) -> void write_lowlink, (usize) -> bool read_on_stack, (usize, bool) -> void write_on_stack, (usize) -> void scc_stack_push, () -> usize scc_stack_pop, (usize) -> usize read_frame_node, (usize, usize) -> void write_frame_node, (usize) -> usize read_frame_cursor, (usize, usize) -> void write_frame_cursor, (usize, usize) -> void write_component, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::strongly_connected_components(node_count, edge_count, receive_component_count);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-weakly-connected-components"></a>

> ## `weakly_connected_components`

> Weakly connected components: connectivity ignoring edge direction. Weakly connected components: connectivity ignoring edge direction.  Each edge is unioned into a caller-owned disjoint set (parent / rank arrays of size node_count, initialised here) using path halving and union by rank. A second ascending pass assigns every node the smallest id in its component as the canonical label, and the component count is returned.  read_label / write_label is a scratch array of size node_count.

```valor
public i32 weakly_connected_components( usize node_count, usize edge_count, (usize) -> usize read_source, (usize) -> usize read_target, (usize) -> usize read_parent, (usize, usize) -> void write_parent, (usize) -> u8 read_rank, (usize, u8) -> void write_rank, (usize) -> usize read_label, (usize, usize) -> void write_label, (usize, usize) -> void write_component, (usize) -> void receive_component_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_count`: usize (by value)
> - `edge_count`: usize (by value)
> - `receive_component_count`: (usize) -> usize read_source, (usize) -> usize read_target, (usize) -> usize read_parent, (usize, usize) -> void write_parent, (usize) -> u8 read_rank, (usize, u8) -> void write_rank, (usize) -> usize read_label, (usize, usize) -> void write_label, (usize, usize) -> void write_component, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::weakly_connected_components(node_count, edge_count, receive_component_count);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-dijkstra"></a>

> ## `dijkstra`

> Dijkstra single-source shortest paths over non-negative weights. Dijkstra single-source shortest paths over non-negative weights.  Distances live in a caller array (read_dist / write_dist), settled marks the frozen set, and write_parent records the shortest-path predecessor tree.  The caller supplies the ordering as an explicit strict-less comparator so this module never performs a floating comparison; distances and the "infinity" sentinel are opaque to it beyond addition.  The minimum is chosen by a linear, cache-friendly scan and equal distances break toward the smaller node id.  Initialise nothing: dist, settled, and parent are set here.

```valor
public i32 dijkstra( usize source, usize node_count, usize edge_count, f64 zero, f64 infinity, (usize) -> usize read_offset, (usize) -> usize read_target, (usize) -> f64 read_weight, (f64, f64) -> bool weight_less, (usize) -> f64 read_dist, (usize, f64) -> void write_dist, (usize) -> bool read_settled, (usize, bool) -> void write_settled, (usize, usize) -> void write_parent)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `source`: usize (by value)
> - `node_count`: usize (by value)
> - `edge_count`: usize (by value)
> - `zero`: f64 (by value)
> - `infinity`: f64 (by value)
> - `write_parent`: (usize) -> usize read_offset, (usize) -> usize read_target, (usize) -> f64 read_weight, (f64, f64) -> bool weight_less, (usize) -> f64 read_dist, (usize, f64) -> void write_dist, (usize) -> bool read_settled, (usize, bool) -> void write_settled, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::dijkstra(source, node_count, edge_count, zero, infinity, write_parent);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-a-star"></a>

> ## `a_star`

> A* shortest path to a single goal. A* shortest path to a single goal.  Identical settle-by-scan structure to dijkstra but the extracted vertex minimises f = g + h, where g is the known distance and h is the caller's admissible, non-negative heuristic to the goal.  Ordering flows entirely through weight_less, so no floating compare occurs in this module; ties break toward the smaller node id.  The search stops once the goal is settled and reports the reached node (goal on success, NO_INDEX if the goal is unreachable) through receive_reached.

```valor
public i32 a_star( usize source, usize goal, usize node_count, usize edge_count, f64 zero, f64 infinity, (usize) -> usize read_offset, (usize) -> usize read_target, (usize) -> f64 read_weight, (usize) -> f64 read_heuristic, (f64, f64) -> bool weight_less, (usize) -> f64 read_dist, (usize, f64) -> void write_dist, (usize) -> bool read_settled, (usize, bool) -> void write_settled, (usize, usize) -> void write_parent, (usize) -> void receive_reached)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `source`: usize (by value)
> - `goal`: usize (by value)
> - `node_count`: usize (by value)
> - `edge_count`: usize (by value)
> - `zero`: f64 (by value)
> - `infinity`: f64 (by value)
> - `receive_reached`: (usize) -> usize read_offset, (usize) -> usize read_target, (usize) -> f64 read_weight, (usize) -> f64 read_heuristic, (f64, f64) -> bool weight_less, (usize) -> f64 read_dist, (usize, f64) -> void write_dist, (usize) -> bool read_settled, (usize, bool) -> void write_settled, (usize, usize) -> void write_parent, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::a_star(source, goal, node_count, edge_count, zero, infinity, receive_reached);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-dominator-tree"></a>

> ## `dominator_tree`

> Immediate dominators by the Cooper-Harvey-Kennedy iterative algorithm. Immediate dominators by the Cooper-Harvey-Kennedy iterative algorithm. read_rpo_order maps a reverse-postorder position to a node with the entry at position 0; read_rpo_number maps a node to that position (NO_INDEX marks an unreachable node).  read_pred_offset / read_pred is the predecessor CSR. idom is initialised to NO_INDEX except the entry, whose idom is itself, then relaxed to a fixed point; intersect walks two fingers up the idom tree by reverse-postorder number.  Each node ends dominated by read_idom, forming the dominator tree.

```valor
public i32 dominator_tree( usize node_count, usize entry, (usize) -> usize read_rpo_order, (usize) -> usize read_rpo_number, (usize) -> usize read_pred_offset, (usize) -> usize read_pred, (usize) -> usize read_idom, (usize, usize) -> void write_idom)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^4)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_count`: usize (by value)
> - `entry`: usize (by value)
> - `write_idom`: (usize) -> usize read_rpo_order, (usize) -> usize read_rpo_number, (usize) -> usize read_pred_offset, (usize) -> usize read_pred, (usize) -> usize read_idom, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::dominator_tree(node_count, entry, write_idom);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-post-dominator-tree"></a>

> ## `post_dominator_tree`

> Immediate post-dominators: the dominator computation run on the reversed control-flow graph. Immediate post-dominators: the dominator computation run on the reversed control-flow graph.  read_rpo_order / read_rpo_number describe a reverse postorder of the reversed graph rooted at the exit block (position 0), and read_succ_offset / read_succ is the successor CSR that plays the role of the predecessor relation on the reversed graph.  ipdom is initialised to NO_INDEX except the exit, whose ipdom is itself, and relaxed to a fixed point, yielding the post-dominator tree.

```valor
public i32 post_dominator_tree( usize node_count, usize exit, (usize) -> usize read_rpo_order, (usize) -> usize read_rpo_number, (usize) -> usize read_succ_offset, (usize) -> usize read_succ, (usize) -> usize read_ipdom, (usize, usize) -> void write_ipdom)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^4)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_count`: usize (by value)
> - `exit`: usize (by value)
> - `write_ipdom`: (usize) -> usize read_rpo_order, (usize) -> usize read_rpo_number, (usize) -> usize read_succ_offset, (usize) -> usize read_succ, (usize) -> usize read_ipdom, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::post_dominator_tree(node_count, exit, write_ipdom);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-liveness-fixed-point"></a>

> ## `liveness_fixed_point`

> Backward live-variable analysis to a fixed point. Backward live-variable analysis to a fixed point.  Liveness is stored as a dense boolean per (block, variable) pair so the module needs no bitwise operators: read_use / read_def are the local sets, and read_in / read_out with their writers are the caller's in/out storage (initialised to false here).  Each pass computes out[b] = union of in[s] over successors s, then in[b] = use[b] OR (out[b] AND NOT def[b]); blocks are swept in descending id order for fast convergence.  Iterations run until no set changes, and the pass count is reported through receive_iterations.

```valor
public i32 liveness_fixed_point( usize block_count, usize var_count, usize edge_count, (usize) -> usize read_succ_offset, (usize) -> usize read_succ, (usize, usize) -> bool read_use, (usize, usize) -> bool read_def, (usize, usize) -> bool read_in, (usize, usize, bool) -> void write_in, (usize, usize) -> bool read_out, (usize, usize, bool) -> void write_out, (usize) -> void receive_iterations)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^4)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `block_count`: usize (by value)
> - `var_count`: usize (by value)
> - `edge_count`: usize (by value)
> - `receive_iterations`: (usize) -> usize read_succ_offset, (usize) -> usize read_succ, (usize, usize) -> bool read_use, (usize, usize) -> bool read_def, (usize, usize) -> bool read_in, (usize, usize, bool) -> void write_in, (usize, usize) -> bool read_out, (usize, usize, bool) -> void write_out, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::liveness_fixed_point(block_count, var_count, edge_count, receive_iterations);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-worklist-fixed-point"></a>

> ## `worklist_fixed_point`

> Generic monotone worklist fixed-point engine. Generic monotone worklist fixed-point engine.  transfer(n) recomputes node n's value from its inputs and returns true iff the value changed; when it does, every dependent of n (the CSR read_dep_offset / read_dep, i.e. the nodes whose value depends on n) is scheduled unless already queued.  All nodes are seeded in ascending id order; a FIFO worklist therefore yields a deterministic visitation order.  read_queued / write_queued is the membership flag that keeps the worklist duplicate-free, and the total number of node evaluations is reported through receive_visits.  This engine underlies the data-flow passes above when the lattice and transfer live in caller code.

```valor
public i32 worklist_fixed_point( usize node_count, usize edge_count, (usize) -> usize read_dep_offset, (usize) -> usize read_dep, (usize) -> bool transfer, (usize) -> void enqueue, () -> usize dequeue, (usize) -> bool read_queued, (usize, bool) -> void write_queued, (usize) -> void receive_visits)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_count`: usize (by value)
> - `edge_count`: usize (by value)
> - `receive_visits`: (usize) -> usize read_dep_offset, (usize) -> usize read_dep, (usize) -> bool transfer, (usize) -> void enqueue, () -> usize dequeue, (usize) -> bool read_queued, (usize, bool) -> void write_queued, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::graph::worklist_fixed_point(node_count, edge_count, receive_visits);
> ```

> ### SEE ALSO
>
> - [`std::graph::addFits`](#fn-addfits)
> - [`std::graph::multiplyFits`](#fn-multiplyfits)
> - [`std::graph::validNumaPolicy`](#fn-validnumapolicy)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Random](STD-RANDOM-DOC.md) · [Table of contents](standard-library/README.md) · [Sparse computing →](STD-SPARSE-DOC.md)
