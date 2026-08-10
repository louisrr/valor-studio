<!-- stdlib-reference-style: modern -->
> # `std::compiler`

`std::compiler` compiler integration and introspection.

[Standard library](standard-library/README.md) / [Foundations](standard-library/README.md#foundations) / **Compiler**

> **Source:** `stdlib/std/compiler.valor` · **Routines:** 51 public

## Routines

<details>
<summary>Browse all 51 routines</summary>

- [`both`](#fn-both)
- [`either`](#fn-either)
- [`validNumaPolicy`](#fn-validnumapolicy)
- [`validConcurrency`](#fn-validconcurrency)
- [`addFits`](#fn-addfits)
- [`wrappedIndex`](#fn-wrappedindex)
- [`mixHash`](#fn-mixhash)
- [`hashBytes`](#fn-hashbytes)
- [`sourceTextIsValid`](#fn-sourcetextisvalid)
- [`spanIsValid`](#fn-spanisvalid)
- [`spanEnd`](#fn-spanend)
- [`spansOverlap`](#fn-spansoverlap)
- [`buildLineMap`](#fn-buildlinemap)
- [`locateByte`](#fn-locatebyte)
- [`tokenIsValid`](#fn-tokenisvalid)
- [`tokenFullWidth`](#fn-tokenfullwidth)
- [`tokenLowerBound`](#fn-tokenlowerbound)
- [`tokenStreamAppendLockFree`](#fn-tokenstreamappendlockfree)
- [`tokenChangeWindow`](#fn-tokenchangewindow)
- [`greenNodeIsValid`](#fn-greennodeisvalid)
- [`greenChildrenAreValid`](#fn-greenchildrenarevalid)
- [`greenChildAt`](#fn-greenchildat)
- [`greenFingerprint`](#fn-greenfingerprint)
- [`greenFindEquivalent`](#fn-greenfindequivalent)
- [`subtreeCanBeReused`](#fn-subtreecanbereused)
- [`materializeRedNodeLockFree`](#fn-materializerednodelockfree)
- [`symbolProbe`](#fn-symbolprobe)
- [`symbolFind`](#fn-symbolfind)
- [`symbolInsertLockFree`](#fn-symbolinsertlockfree)
- [`walkScopeChain`](#fn-walkscopechain)
- [`severityIsValid`](#fn-severityisvalid)
- [`editIsValid`](#fn-editisvalid)
- [`compareDiagnosticKeys`](#fn-comparediagnostickeys)
- [`diagnosticStableId`](#fn-diagnosticstableid)
- [`diagnosticAppendLockFree`](#fn-diagnosticappendlockfree)
- [`validateDiagnosticOrder`](#fn-validatediagnosticorder)
- [`validateNonOverlappingEdits`](#fn-validatenonoverlappingedits)
- [`applyTextEdits`](#fn-applytextedits)
- [`internShard`](#fn-internshard)
- [`internFind`](#fn-internfind)
- [`internInsertLockFree`](#fn-interninsertlockfree)
- [`alignUp`](#fn-alignup)
- [`arenaReserve`](#fn-arenareserve)
- [`arenaReserveLockFree`](#fn-arenareservelockfree)
- [`validateCsr`](#fn-validatecsr)
- [`cfgForEachSuccessor`](#fn-cfgforeachsuccessor)
- [`dependencyCompleteLockFree`](#fn-dependencycompletelockfree)
- [`incrementalKey`](#fn-incrementalkey)
- [`incrementalFind`](#fn-incrementalfind)
- [`incrementalPublishLockFree`](#fn-incrementalpublishlockfree)
- [`cacheEntryIsReusable`](#fn-cacheentryisreusable)

</details>

## API reference

<a id="fn-both"></a>

> ## `both`

> Provides the module's **both** operation. Returns `bool`.

```valor
public bool both(bool left, bool right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: bool (by value)
> - `right`: bool (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::compiler::both(left, right);
> ```

> ### SEE ALSO
>
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)
> - [`std::compiler::validConcurrency`](#fn-validconcurrency)

<a id="fn-either"></a>

> ## `either`

> Provides the module's **either** operation. Returns `bool`.

```valor
public bool either(bool left, bool right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: bool (by value)
> - `right`: bool (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::compiler::either(left, right);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)
> - [`std::compiler::validConcurrency`](#fn-validconcurrency)

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
> bool result = std::compiler::validNumaPolicy(policy);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validConcurrency`](#fn-validconcurrency)

<a id="fn-validconcurrency"></a>

> ## `validConcurrency`

> Provides the module's **valid concurrency** operation. Returns `bool`.

```valor
public bool validConcurrency(u8 policy)
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
> bool result = std::compiler::validConcurrency(policy);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

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
> bool result = std::compiler::addFits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-wrappedindex"></a>

> ## `wrappedIndex`

> Provides the module's **wrapped index** operation. Returns `usize`.

```valor
public usize wrappedIndex(usize value, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::compiler::wrappedIndex(value, capacity);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-mixhash"></a>

> ## `mixHash`

> Provides the module's **mix hash** operation. Returns `u64`.

```valor
public u64 mixHash(u64 value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::compiler::mixHash(value);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-hashbytes"></a>

> ## `hashBytes`

> Provides the module's **hash bytes** operation. Returns `u64`.

```valor
public u64 hashBytes(usize length, u64 seed, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `seed`: u64 (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::compiler::hashBytes(length, seed, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-sourcetextisvalid"></a>

> ## `sourceTextIsValid`

> Provides the module's **source text is valid** operation. Returns `bool`.

```valor
public bool sourceTextIsValid(usize byte_length, u8 numa_policy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_length`: usize (by value)
> - `numa_policy`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::compiler::sourceTextIsValid(byte_length, numa_policy);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-spanisvalid"></a>

> ## `spanIsValid`

> Provides the module's **span is valid** operation. Returns `bool`.

```valor
public bool spanIsValid(usize start, usize length, usize source_bytes)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `length`: usize (by value)
> - `source_bytes`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::compiler::spanIsValid(start, length, source_bytes);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-spanend"></a>

> ## `spanEnd`

> Provides the module's **span end** operation. Returns `usize`.

```valor
public usize spanEnd(usize start, usize length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `length`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::compiler::spanEnd(start, length);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-spansoverlap"></a>

> ## `spansOverlap`

> Provides the module's **spans overlap** operation. Returns `bool`.

```valor
public bool spansOverlap(usize a_start, usize a_length, usize b_start, usize b_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a_start`: usize (by value)
> - `a_length`: usize (by value)
> - `b_start`: usize (by value)
> - `b_length`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::compiler::spansOverlap(a_start, a_length, b_start, b_length);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-buildlinemap"></a>

> ## `buildLineMap`

> Builds monotonically increasing byte offsets. Builds monotonically increasing byte offsets. CRLF is one line break and isolated CR is accepted, making mapping deterministic across platforms.

```valor
public i32 buildLineMap(usize source_bytes, usize capacity, (usize) -> u8 read_byte, (usize, usize) -> void write_line_start, (usize) -> void publish_line_count_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `source_bytes`: usize (by value)
> - `capacity`: usize (by value)
> - `usize`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `publish_line_count_release`: usize) -> void write_line_start, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::compiler::buildLineMap(source_bytes, capacity, usize, publish_line_count_release);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-locatebyte"></a>

> ## `locateByte`

> Binary search returns a zero-based line and byte column without reading text.

```valor
public i32 locateByte(usize byte_offset, usize source_bytes, usize line_count, (usize) -> usize read_line_start, (u32, u32) -> void receive_line_column)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte_offset`: usize (by value)
> - `source_bytes`: usize (by value)
> - `line_count`: usize (by value)
> - `u32`: (usize) -> usize read_line_start, ( (borrowed fn-ptr (callback))
> - `receive_line_column`: u32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::compiler::locateByte(byte_offset, source_bytes, line_count, u32, receive_line_column);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-tokenisvalid"></a>

> ## `tokenIsValid`

> Provides the module's **token is valid** operation. Returns `bool`.

```valor
public bool tokenIsValid(usize start, u32 leading, u32 width, u32 trailing, usize source_bytes)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `leading`: u32 (by value)
> - `width`: u32 (by value)
> - `trailing`: u32 (by value)
> - `source_bytes`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::compiler::tokenIsValid(start, leading, width, trailing, source_bytes);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-tokenfullwidth"></a>

> ## `tokenFullWidth`

> Provides the module's **token full width** operation. Returns `usize`.

```valor
public usize tokenFullWidth(u32 leading, u32 width, u32 trailing)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `leading`: u32 (by value)
> - `width`: u32 (by value)
> - `trailing`: u32 (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::compiler::tokenFullWidth(leading, width, trailing);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-tokenlowerbound"></a>

> ## `tokenLowerBound`

> Provides the module's **token lower bound** operation. Returns `usize`.

```valor
public usize tokenLowerBound(usize count, usize byte_offset, (usize) -> usize read_start)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `byte_offset`: usize (by value)
> - `read_start`: (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::compiler::tokenLowerBound(count, byte_offset, read_start);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-tokenstreamappendlockfree"></a>

> ## `tokenStreamAppendLockFree`

> The fetch-add callback reserves a unique slot. The fetch-add callback reserves a unique slot. Publishing the state with release ordering makes the initialized token visible to acquire readers.

```valor
public i32 tokenStreamAppendLockFree(usize capacity, Token token, bool target_fetch_add_is_lock_free, () -> usize fetch_add_count, (usize, Token) -> void write_token, (usize, u8) -> void publish_state_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `token`: Token (by value)
> - `target_fetch_add_is_lock_free`: bool (by value)
> - `usize`: () -> usize fetch_add_count, ( (borrowed fn-ptr (callback))
> - `publish_state_release`: Token) -> void write_token, (usize, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::compiler::tokenStreamAppendLockFree(capacity, token, target_fetch_add_is_lock_free, usize, publish_state_release);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-tokenchangewindow"></a>

> ## `tokenChangeWindow`

> Finds the unchanged token prefix/suffix for an incremental re-lex. Finds the unchanged token prefix/suffix for an incremental re-lex. Token fingerprints include kind, bytes, and lexical context.

```valor
public void tokenChangeWindow(usize old_count, usize new_count, (usize) -> u64 read_old_fingerprint, (usize) -> u64 read_new_fingerprint, (usize, usize, usize) -> void receive_prefix_old_end_new_end)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `old_count`: usize (by value)
> - `new_count`: usize (by value)
> - `receive_prefix_old_end_new_end`: (usize) -> u64 read_old_fingerprint, (usize) -> u64 read_new_fingerprint, (usize, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (void)

> ### EXAMPLE
>
> ```valor
> std::compiler::tokenChangeWindow(old_count, new_count, receive_prefix_old_end_new_end);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-greennodeisvalid"></a>

> ## `greenNodeIsValid`

> Provides the module's **green node is valid** operation. Returns `bool`.

```valor
public bool greenNodeIsValid(usize node, usize node_count)
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
> bool result = std::compiler::greenNodeIsValid(node, node_count);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-greenchildrenarevalid"></a>

> ## `greenChildrenAreValid`

> Provides the module's **green children are valid** operation. Returns `bool`.

```valor
public bool greenChildrenAreValid(usize first_child, u32 child_count, usize total_children)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `first_child`: usize (by value)
> - `child_count`: u32 (by value)
> - `total_children`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::compiler::greenChildrenAreValid(first_child, child_count, total_children);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-greenchildat"></a>

> ## `greenChildAt`

> Provides the module's **green child at** operation. Returns `i32`.

```valor
public i32 greenChildAt(usize node, usize ordinal, usize node_count, (usize) -> usize read_first_child, (usize) -> u32 read_child_count, (usize) -> usize read_child_index, (usize) -> void receive_child)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `ordinal`: usize (by value)
> - `node_count`: usize (by value)
> - `receive_child`: (usize) -> usize read_first_child, (usize) -> u32 read_child_count, (usize) -> usize read_child_index, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::compiler::greenChildAt(node, ordinal, node_count, receive_child);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-greenfingerprint"></a>

> ## `greenFingerprint`

> Provides the module's **green fingerprint** operation. Returns `u64`.

```valor
public u64 greenFingerprint(u16 kind, u16 flags, u32 full_width, usize child_count, (usize) -> u64 read_child_fingerprint)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u16 (by value)
> - `flags`: u16 (by value)
> - `full_width`: u32 (by value)
> - `child_count`: usize (by value)
> - `read_child_fingerprint`: (usize) -> u64 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::compiler::greenFingerprint(kind, flags, full_width, child_count, read_child_fingerprint);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-greenfindequivalent"></a>

> ## `greenFindEquivalent`

> Hash-consing probe for immutable green nodes. Hash-consing probe for immutable green nodes. Equality is supplied by the caller so no node payload is copied.

```valor
public i32 greenFindEquivalent(usize table_capacity, u64 fingerprint, (usize) -> u8 read_control, (usize) -> u64 read_fingerprint, (usize) -> usize read_node, (usize) -> bool node_equals, (usize) -> void receive_node)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `table_capacity`: usize (by value)
> - `fingerprint`: u64 (by value)
> - `receive_node`: (usize) -> u8 read_control, (usize) -> u64 read_fingerprint, (usize) -> usize read_node, (usize) -> bool node_equals, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::compiler::greenFindEquivalent(table_capacity, fingerprint, receive_node);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-subtreecanbereused"></a>

> ## `subtreeCanBeReused`

> Reuses old immutable subtrees outside the token change window.

```valor
public bool subtreeCanBeReused(usize token_first, usize token_count, usize changed_first, usize changed_old_end, u64 old_context_hash, u64 new_context_hash)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `token_first`: usize (by value)
> - `token_count`: usize (by value)
> - `changed_first`: usize (by value)
> - `changed_old_end`: usize (by value)
> - `old_context_hash`: u64 (by value)
> - `new_context_hash`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::compiler::subtreeCanBeReused(token_first, token_count, changed_first, changed_old_end, old_context_hash, new_context_hash);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-materializerednodelockfree"></a>

> ## `materializeRedNodeLockFree`

> Provides the module's **materialize red node lock free** operation. Returns `i32`.

```valor
public i32 materializeRedNodeLockFree(usize capacity, usize green_index, usize parent_red_index, usize absolute_offset, u64 generation, bool target_cas_is_lock_free, (usize) -> usize load_red_index_acquire, (usize) -> bool claim_green_slot, () -> usize fetch_add_red_count, (usize, usize, usize, usize, u64) -> void write_red_node, (usize, usize) -> void publish_green_to_red_release, (usize) -> void receive_red_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `green_index`: usize (by value)
> - `parent_red_index`: usize (by value)
> - `absolute_offset`: usize (by value)
> - `generation`: u64 (by value)
> - `target_cas_is_lock_free`: bool (by value)
> - `receive_red_index`: (usize) -> usize load_red_index_acquire, (usize) -> bool claim_green_slot, () -> usize fetch_add_red_count, (usize, usize, usize, usize, u64) -> void write_red_node, (usize, usize) -> void publish_green_to_red_release, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::compiler::materializeRedNodeLockFree(capacity, green_index, parent_red_index, absolute_offset, generation, target_cas_is_lock_free, receive_red_index);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-symbolprobe"></a>

> ## `symbolProbe`

> Provides the module's **symbol probe** operation. Returns `usize`.

```valor
public usize symbolProbe(u64 name_id, usize step, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `name_id`: u64 (by value)
> - `step`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::compiler::symbolProbe(name_id, step, capacity);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-symbolfind"></a>

> ## `symbolFind`

> Provides the module's **symbol find** operation. Returns `i32`.

```valor
public i32 symbolFind(usize table_capacity, u64 name_id, (usize) -> u8 read_control, (usize) -> u64 read_name_id, (usize) -> usize read_symbol_index, (usize) -> void receive_symbol_index)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `table_capacity`: usize (by value)
> - `name_id`: u64 (by value)
> - `receive_symbol_index`: (usize) -> u8 read_control, (usize) -> u64 read_name_id, (usize) -> usize read_symbol_index, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::compiler::symbolFind(table_capacity, name_id, receive_symbol_index);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-symbolinsertlockfree"></a>

> ## `symbolInsertLockFree`

> Provides the module's **symbol insert lock free** operation. Returns `i32`.

```valor
public i32 symbolInsertLockFree(usize table_capacity, u64 name_id, usize symbol_index, bool target_cas_is_lock_free, (usize) -> u8 read_control, (usize) -> u64 read_name_id, (usize) -> bool claim_slot, (usize, u64, usize) -> void write_entry, (usize, u8) -> void publish_control_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `table_capacity`: usize (by value)
> - `name_id`: u64 (by value)
> - `symbol_index`: usize (by value)
> - `target_cas_is_lock_free`: bool (by value)
> - `publish_control_release`: (usize) -> u8 read_control, (usize) -> u64 read_name_id, (usize) -> bool claim_slot, (usize, u64, usize) -> void write_entry, (usize, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::compiler::symbolInsertLockFree(table_capacity, name_id, symbol_index, target_cas_is_lock_free, publish_control_release);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-walkscopechain"></a>

> ## `walkScopeChain`

> Provides the module's **walk scope chain** operation. Returns `i32`.

```valor
public i32 walkScopeChain(usize start_scope, usize scope_count, (usize) -> usize read_parent, (usize) -> bool visit_scope)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start_scope`: usize (by value)
> - `scope_count`: usize (by value)
> - `visit_scope`: (usize) -> usize read_parent, (usize) -> bool (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::compiler::walkScopeChain(start_scope, scope_count, visit_scope);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-severityisvalid"></a>

> ## `severityIsValid`

> Provides the module's **severity is valid** operation. Returns `bool`.

```valor
public bool severityIsValid(u8 severity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `severity`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::compiler::severityIsValid(severity);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-editisvalid"></a>

> ## `editIsValid`

> Provides the module's **edit is valid** operation. Returns `bool`.

```valor
public bool editIsValid(usize start, usize length, usize source_bytes, u8 kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `length`: usize (by value)
> - `source_bytes`: usize (by value)
> - `kind`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::compiler::editIsValid(start, length, source_bytes, kind);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-comparediagnostickeys"></a>

> ## `compareDiagnosticKeys`

> Returns -1, 0, 1 using arithmetic comparisons to keep the common path branch-light and provide one canonical diagnostic order. Returns -1, 0, 1 using arithmetic comparisons to keep the common path branch-light and provide one canonical diagnostic order.

```valor
public i32 compareDiagnosticKeys( u64 left_file, usize left_start, u8 left_severity, u32 left_code, u64 left_message, u64 left_stable, u64 right_file, usize right_start, u8 right_severity, u32 right_code, u64 right_message, u64 right_stable)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_file`: u64 (by value)
> - `left_start`: usize (by value)
> - `left_severity`: u8 (by value)
> - `left_code`: u32 (by value)
> - `left_message`: u64 (by value)
> - `left_stable`: u64 (by value)
> - `right_file`: u64 (by value)
> - `right_start`: usize (by value)
> - `right_severity`: u8 (by value)
> - `right_code`: u32 (by value)
> - `right_message`: u64 (by value)
> - `right_stable`: u64 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::compiler::compareDiagnosticKeys(left_file, left_start, left_severity, left_code, left_message, left_stable, right_file, right_start, right_severity, right_code, right_message, right_stable);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-diagnosticstableid"></a>

> ## `diagnosticStableId`

> Provides the module's **diagnostic stable id** operation. Returns `u64`.

```valor
public u64 diagnosticStableId(u32 code, u64 file_id, usize byte_start, u64 message_symbol)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `code`: u32 (by value)
> - `file_id`: u64 (by value)
> - `byte_start`: usize (by value)
> - `message_symbol`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::compiler::diagnosticStableId(code, file_id, byte_start, message_symbol);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-diagnosticappendlockfree"></a>

> ## `diagnosticAppendLockFree`

> Provides the module's **diagnostic append lock free** operation. Returns `i32`.

```valor
public i32 diagnosticAppendLockFree(usize capacity, Diagnostic diagnostic, bool target_fetch_add_is_lock_free, () -> usize fetch_add_count, (usize, Diagnostic) -> void write_diagnostic, (usize, u8) -> void publish_state_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `diagnostic`: Diagnostic (by value)
> - `target_fetch_add_is_lock_free`: bool (by value)
> - `usize`: () -> usize fetch_add_count, ( (borrowed fn-ptr (callback))
> - `publish_state_release`: Diagnostic) -> void write_diagnostic, (usize, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::compiler::diagnosticAppendLockFree(capacity, diagnostic, target_fetch_add_is_lock_free, usize, publish_state_release);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-validatediagnosticorder"></a>

> ## `validateDiagnosticOrder`

> Validates the sorted index produced by a stable merge. Validates the sorted index produced by a stable merge. This small contract lets callers use a parallel radix/merge sort without embedding a scheduler.

```valor
public i32 validateDiagnosticOrder(usize count, (usize) -> usize read_sorted_index, (usize, usize) -> i32 compare_diagnostics)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `count`: usize (by value)
> - `usize`: (usize) -> usize read_sorted_index, ( (borrowed fn-ptr (callback))
> - `compare_diagnostics`: usize) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::compiler::validateDiagnosticOrder(count, usize, compare_diagnostics);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-validatenonoverlappingedits"></a>

> ## `validateNonOverlappingEdits`

> Provides the module's **validate non overlapping edits** operation. Returns `i32`.

```valor
public i32 validateNonOverlappingEdits(usize edit_count, (usize) -> usize read_start, (usize) -> usize read_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `edit_count`: usize (by value)
> - `read_length`: (usize) -> usize read_start, (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::compiler::validateNonOverlappingEdits(edit_count, read_length);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-applytextedits"></a>

> ## `applyTextEdits`

> Streams a zero-copy edit application: unchanged source slices and replacement slices are emitted without constructing an intermediate string. Streams a zero-copy edit application: unchanged source slices and replacement slices are emitted without constructing an intermediate string.

```valor
public i32 applyTextEdits(usize source_bytes, usize edit_count, (usize) -> usize read_edit_start, (usize) -> usize read_edit_length, (usize) -> usize read_replacement_length, (usize, usize, usize) -> void emit_source_slice, (usize, usize, usize) -> void emit_replacement_slice)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `source_bytes`: usize (by value)
> - `edit_count`: usize (by value)
> - `emit_replacement_slice`: (usize) -> usize read_edit_start, (usize) -> usize read_edit_length, (usize) -> usize read_replacement_length, (usize, usize, usize) -> void emit_source_slice, (usize, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::compiler::applyTextEdits(source_bytes, edit_count, emit_replacement_slice);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-internshard"></a>

> ## `internShard`

> Provides the module's **intern shard** operation. Returns `usize`.

```valor
public usize internShard(u64 hash, usize shard_count)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hash`: u64 (by value)
> - `shard_count`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::compiler::internShard(hash, shard_count);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-internfind"></a>

> ## `internFind`

> Provides the module's **intern find** operation. Returns `i32`.

```valor
public i32 internFind(usize table_capacity, u64 hash, usize byte_length, (usize) -> u8 read_control, (usize) -> u64 read_hash, (usize) -> usize read_length, (usize, usize) -> bool bytes_equal, (usize) -> u64 read_symbol, (u64) -> void receive_symbol)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `table_capacity`: usize (by value)
> - `hash`: u64 (by value)
> - `byte_length`: usize (by value)
> - `receive_symbol`: (usize) -> u8 read_control, (usize) -> u64 read_hash, (usize) -> usize read_length, (usize, usize) -> bool bytes_equal, (usize) -> u64 read_symbol, (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::compiler::internFind(table_capacity, hash, byte_length, receive_symbol);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-interninsertlockfree"></a>

> ## `internInsertLockFree`

> Claim -> copy bytes -> write metadata -> release-publish. Claim -> copy bytes -> write metadata -> release-publish. Symbols should be canonicalized by a deterministic sorted merge when shard scheduling differs.

```valor
public i32 internInsertLockFree(usize table_capacity, usize bytes_used, usize bytes_capacity, u64 hash, usize byte_length, u64 symbol, bool target_cas_is_lock_free, (usize) -> u8 read_control, (usize) -> bool claim_slot, (usize) -> u8 read_source_byte, (usize, u8) -> void write_pool_byte, (usize, u64, usize, usize, u64) -> void write_metadata, (usize, u8) -> void publish_control_release, (usize, usize) -> void publish_counts_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `table_capacity`: usize (by value)
> - `bytes_used`: usize (by value)
> - `bytes_capacity`: usize (by value)
> - `hash`: u64 (by value)
> - `byte_length`: usize (by value)
> - `symbol`: u64 (by value)
> - `target_cas_is_lock_free`: bool (by value)
> - `publish_counts_release`: (usize) -> u8 read_control, (usize) -> bool claim_slot, (usize) -> u8 read_source_byte, (usize, u8) -> void write_pool_byte, (usize, u64, usize, usize, u64) -> void write_metadata, (usize, u8) -> void publish_control_release, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::compiler::internInsertLockFree(table_capacity, bytes_used, bytes_capacity, hash, byte_length, symbol, target_cas_is_lock_free, publish_counts_release);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-alignup"></a>

> ## `alignUp`

> Provides the module's **align up** operation. Returns `usize`.

```valor
public usize alignUp(usize value, usize alignment)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: usize (by value)
> - `alignment`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::compiler::alignUp(value, alignment);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-arenareserve"></a>

> ## `arenaReserve`

> Provides the module's **arena reserve** operation. Returns `i32`.

```valor
public i32 arenaReserve(usize used, usize capacity, usize byte_count, usize alignment, (usize) -> void publish_used_release, (usize) -> void receive_offset)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `used`: usize (by value)
> - `capacity`: usize (by value)
> - `byte_count`: usize (by value)
> - `alignment`: usize (by value)
> - `receive_offset`: (usize) -> void publish_used_release, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::compiler::arenaReserve(used, capacity, byte_count, alignment, receive_offset);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-arenareservelockfree"></a>

> ## `arenaReserveLockFree`

> CAS reserves a disjoint aligned range. CAS reserves a disjoint aligned range. Failed CAS retries do not expose it.

```valor
public i32 arenaReserveLockFree(usize capacity, usize byte_count, usize alignment, usize retry_limit, bool target_cas_is_lock_free, () -> usize load_used_acquire, (usize, usize) -> bool compare_exchange_used, (usize) -> void receive_offset)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `capacity`: usize (by value)
> - `byte_count`: usize (by value)
> - `alignment`: usize (by value)
> - `retry_limit`: usize (by value)
> - `target_cas_is_lock_free`: bool (by value)
> - `usize`: () -> usize load_used_acquire, ( (borrowed fn-ptr (callback))
> - `receive_offset`: usize) -> bool compare_exchange_used, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::compiler::arenaReserveLockFree(capacity, byte_count, alignment, retry_limit, target_cas_is_lock_free, usize, receive_offset);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-validatecsr"></a>

> ## `validateCsr`

> Provides the module's **validate csr** operation. Returns `i32`.

```valor
public i32 validateCsr(usize node_count, usize edge_count, (usize) -> usize read_offset, (usize) -> usize read_target)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_count`: usize (by value)
> - `edge_count`: usize (by value)
> - `read_target`: (usize) -> usize read_offset, (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::compiler::validateCsr(node_count, edge_count, read_target);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-cfgforeachsuccessor"></a>

> ## `cfgForEachSuccessor`

> Provides the module's **cfg for each successor** operation. Returns `i32`.

```valor
public i32 cfgForEachSuccessor(usize block, usize block_count, (usize) -> usize read_offset, (usize) -> usize read_successor, (usize, usize) -> void visit_edge)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `block`: usize (by value)
> - `block_count`: usize (by value)
> - `visit_edge`: (usize) -> usize read_offset, (usize) -> usize read_successor, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::compiler::cfgForEachSuccessor(block, block_count, visit_edge);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-dependencycompletelockfree"></a>

> ## `dependencyCompleteLockFree`

> Kahn scheduling primitive. Kahn scheduling primitive. Workers claim ready nodes; completing a node decrements its dependents with atomic callbacks. Exactly-one transition to zero publishes each newly ready node.

```valor
public i32 dependencyCompleteLockFree(usize node, usize node_count, bool target_fetch_sub_is_lock_free, (usize) -> usize read_dependent_begin, (usize) -> usize read_dependent_end, (usize) -> usize read_dependent, (usize) -> usize fetch_sub_unresolved, (usize) -> void publish_ready_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `node_count`: usize (by value)
> - `target_fetch_sub_is_lock_free`: bool (by value)
> - `publish_ready_release`: (usize) -> usize read_dependent_begin, (usize) -> usize read_dependent_end, (usize) -> usize read_dependent, (usize) -> usize fetch_sub_unresolved, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::compiler::dependencyCompleteLockFree(node, node_count, target_fetch_sub_is_lock_free, publish_ready_release);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-incrementalkey"></a>

> ## `incrementalKey`

> Provides the module's **incremental key** operation. Returns `u64`.

```valor
public u64 incrementalKey(u64 source_hash, u64 dependency_hash, u64 configuration_hash, u64 compiler_version)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `source_hash`: u64 (by value)
> - `dependency_hash`: u64 (by value)
> - `configuration_hash`: u64 (by value)
> - `compiler_version`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::compiler::incrementalKey(source_hash, dependency_hash, configuration_hash, compiler_version);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-incrementalfind"></a>

> ## `incrementalFind`

> Provides the module's **incremental find** operation. Returns `i32`.

```valor
public i32 incrementalFind(usize table_capacity, u64 key_hash, u64 dependency_hash, u64 configuration_hash, u64 minimum_generation, (usize) -> u8 read_control, (usize) -> u64 read_key_hash, (usize) -> u64 read_dependency_hash, (usize) -> u64 read_configuration_hash, (usize) -> u64 read_generation, (usize, usize, usize) -> void receive_slot_offset_length, (usize) -> usize read_offset, (usize) -> usize read_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `table_capacity`: usize (by value)
> - `key_hash`: u64 (by value)
> - `dependency_hash`: u64 (by value)
> - `configuration_hash`: u64 (by value)
> - `minimum_generation`: u64 (by value)
> - `read_length`: (usize) -> u8 read_control, (usize) -> u64 read_key_hash, (usize) -> u64 read_dependency_hash, (usize) -> u64 read_configuration_hash, (usize) -> u64 read_generation, (usize, usize, usize) -> void receive_slot_offset_length, (usize) -> usize read_offset, (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::compiler::incrementalFind(table_capacity, key_hash, dependency_hash, configuration_hash, minimum_generation, read_length);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-incrementalpublishlockfree"></a>

> ## `incrementalPublishLockFree`

> Reservation of value bytes is separate so concurrent writers never overlap. Reservation of value bytes is separate so concurrent writers never overlap. The entry becomes visible only after metadata and bytes are complete.

```valor
public i32 incrementalPublishLockFree(usize table_capacity, u64 key_hash, u64 dependency_hash, u64 configuration_hash, usize value_offset, usize value_length, u64 generation, bool target_cas_is_lock_free, (usize) -> u8 read_control, (usize) -> bool claim_slot, (usize) -> u8 read_value_byte, (usize, u8) -> void write_cache_byte, (usize, u64, u64, u64, usize, usize, u64) -> void write_metadata, (usize, u8) -> void publish_control_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `table_capacity`: usize (by value)
> - `key_hash`: u64 (by value)
> - `dependency_hash`: u64 (by value)
> - `configuration_hash`: u64 (by value)
> - `value_offset`: usize (by value)
> - `value_length`: usize (by value)
> - `generation`: u64 (by value)
> - `target_cas_is_lock_free`: bool (by value)
> - `publish_control_release`: (usize) -> u8 read_control, (usize) -> bool claim_slot, (usize) -> u8 read_value_byte, (usize, u8) -> void write_cache_byte, (usize, u64, u64, u64, usize, usize, u64) -> void write_metadata, (usize, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::compiler::incrementalPublishLockFree(table_capacity, key_hash, dependency_hash, configuration_hash, value_offset, value_length, generation, target_cas_is_lock_free, publish_control_release);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

<a id="fn-cacheentryisreusable"></a>

> ## `cacheEntryIsReusable`

> Provides the module's **cache entry is reusable** operation. Returns `bool`.

```valor
public bool cacheEntryIsReusable(u64 cached_source_hash, u64 current_source_hash, u64 cached_dependency_hash, u64 current_dependency_hash, u64 cached_configuration_hash, u64 current_configuration_hash)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `cached_source_hash`: u64 (by value)
> - `current_source_hash`: u64 (by value)
> - `cached_dependency_hash`: u64 (by value)
> - `current_dependency_hash`: u64 (by value)
> - `cached_configuration_hash`: u64 (by value)
> - `current_configuration_hash`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::compiler::cacheEntryIsReusable(cached_source_hash, current_source_hash, cached_dependency_hash, current_dependency_hash, cached_configuration_hash, current_configuration_hash);
> ```

> ### SEE ALSO
>
> - [`std::compiler::both`](#fn-both)
> - [`std::compiler::either`](#fn-either)
> - [`std::compiler::validNumaPolicy`](#fn-validnumapolicy)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← System](STD-SYS-DOC.md) · [Table of contents](standard-library/README.md) · [Abstract syntax tree →](STD-AST-DOC.md)
