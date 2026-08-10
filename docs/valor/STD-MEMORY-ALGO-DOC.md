<!-- stdlib-reference-style: modern -->
> # `std::memory::algo`

`std::memory::algo` construction, relocation, movement, and compaction.

[Standard library](standard-library/README.md) / [Memory, storage, and I/O](standard-library/README.md#memory-storage-and-i-o) / **Memory algorithms**

> **Source:** `stdlib/std/memory/algo.valor` · **Routines:** 16 public

## Routines

<details>
<summary>Browse all 16 routines</summary>

- [`uninitialized_copy`](#fn-uninitialized-copy)
- [`uninitialized_move`](#fn-uninitialized-move)
- [`uninitialized_fill`](#fn-uninitialized-fill)
- [`destroy_range`](#fn-destroy-range)
- [`relocate`](#fn-relocate)
- [`relocate_nonoverlapping`](#fn-relocate-nonoverlapping)
- [`zero`](#fn-zero)
- [`secure_zero`](#fn-secure-zero)
- [`fill_pattern`](#fn-fill-pattern)
- [`copy_nonoverlapping`](#fn-copy-nonoverlapping)
- [`move_overlapping`](#fn-move-overlapping)
- [`gather_copy`](#fn-gather-copy)
- [`scatter_copy`](#fn-scatter-copy)
- [`compact_indices`](#fn-compact-indices)
- [`stable_compact`](#fn-stable-compact)
- [`compact`](#fn-compact)

</details>

## API reference

<a id="fn-uninitialized-copy"></a>

> ## `uninitialized_copy`

> Copy-construct n elements into raw destination storage, ascending, exactly once each. Invokes construct_copy(i) for i in [0, n) in strictly ascending order. The caller's closure copy-constructs destination element i from source element i and leaves the source unchanged. On return the whole destination range is initialized. The module moves no bytes itself; the element type stays opaque behind the callback.

```valor
public void uninitialized_copy(usize n, (usize) -> void construct_copy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(n); No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value) - Number of elements to construct. n == 0 is a defined no-op (callback never fires).
> - `construct_copy`: (usize) -> void (borrowed fn-ptr) - Per-element copy-constructor keyed by logical index. Must target RAW (uninitialized) destination storage distinct from the source.

> ### RETURNS (void - no value; side effect is n copy-constructions performed via the callback.)

> ### EXAMPLE
>
> ```valor
> // dst is raw storage, src is an initialized array, both caller-owned.
> void copy_one(usize i) { /* dst.construct(i, src.load(i)) */ }
> std::memory::algo::uninitialized_copy(len, copy_one);
> ```

> ### SEE ALSO
>
> - [`std::memory::algo::uninitialized_move`](#fn-uninitialized-move)
> - [`std::memory::algo::uninitialized_fill`](#fn-uninitialized-fill)
> - [`std::memory::algo::relocate_nonoverlapping`](#fn-relocate-nonoverlapping)
> - [`std::memory::algo::copy_nonoverlapping`](#fn-copy-nonoverlapping)

<a id="fn-uninitialized-move"></a>

> ## `uninitialized_move`

> Move-construct n elements into raw destination storage, ascending, exactly once each. Invokes construct_move(i) for i in [0, n) ascending. The caller's closure move- constructs destination element i from source element i; sources are left in their moved-from state but are NOT destroyed here (use relocate for move-then- destroy). Destination is raw on entry, fully initialized on return.

```valor
public void uninitialized_move(usize n, (usize) -> void construct_move)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(n); No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value) - Number of elements to move-construct. n == 0 is a defined no-op.
> - `construct_move`: (usize) -> void (borrowed fn-ptr) - Per-element move-constructor keyed by logical index. Targets RAW destination; leaves source moved-from (caller destroys separately if needed).

> ### RETURNS (void - no value; side effect is n move-constructions.)

> ### EXAMPLE
>
> ```valor
> void move_one(usize i) { /* dst.move_construct(i, src.take(i)) */ }
> std::memory::algo::uninitialized_move(len, move_one);
> ```

> ### SEE ALSO
>
> - [`std::memory::algo::uninitialized_copy`](#fn-uninitialized-copy)
> - [`std::memory::algo::relocate`](#fn-relocate)
> - [`std::memory::algo::relocate_nonoverlapping`](#fn-relocate-nonoverlapping)
> - [`std::memory::algo::destroy_range`](#fn-destroy-range)

<a id="fn-uninitialized-fill"></a>

> ## `uninitialized_fill`

> Construct n elements from a fixed source value into raw storage, ascending. Invokes construct_fill(i) for i in [0, n) ascending; the caller's closure constructs destination element i from a fixed prototype value. Destination is raw on entry and fully initialized on return.

```valor
public void uninitialized_fill(usize n, (usize) -> void construct_fill)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(n); No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value) - Number of elements to construct. n == 0 is a defined no-op.
> - `construct_fill`: (usize) -> void (borrowed fn-ptr) - Per-element constructor from a fixed value. Targets RAW destination storage.

> ### RETURNS (void - no value; side effect is n value-constructions.)

> ### EXAMPLE
>
> ```valor
> void fill_default(usize i) { /* dst.construct(i, prototype) */ }
> std::memory::algo::uninitialized_fill(len, fill_default);
> ```

> ### SEE ALSO
>
> - [`std::memory::algo::uninitialized_copy`](#fn-uninitialized-copy)
> - [`std::memory::algo::uninitialized_move`](#fn-uninitialized-move)
> - [`std::memory::algo::zero`](#fn-zero)
> - [`std::memory::algo::fill_pattern`](#fn-fill-pattern)

<a id="fn-destroy-range"></a>

> ## `destroy_range`

> Destroy n initialized elements in strict REVERSE index order. Invokes destroy(i) for i = n-1 down to 0 -- the exact inverse of ascending construction, so an element constructed later (and possibly dependent on an earlier one) is torn down first. Elements must be initialized on entry. The reverse order is a guaranteed, documented contract, not an implementation detail.

```valor
public void destroy_range(usize n, (usize) -> void destroy)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(n); No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value) - Number of initialized elements to destroy. n == 0 destroys nothing (no-op).
> - `destroy`: (usize) -> void (borrowed fn-ptr) - Per-element destructor keyed by logical index. Every index in [0, n) must currently be INITIALIZED.

> ### RETURNS (void - no value; side effect is n destructions in order n-1..0.)

> ### EXAMPLE
>
> ```valor
> void drop_one(usize i) { /* run destructor of element i */ }
> std::memory::algo::destroy_range(len, drop_one);
> ```

> ### SEE ALSO
>
> - [`std::memory::algo::relocate`](#fn-relocate)
> - [`std::memory::algo::relocate_nonoverlapping`](#fn-relocate-nonoverlapping)
> - [`std::memory::algo::uninitialized_move`](#fn-uninitialized-move)
> - [`std::memory::algo::stable_compact`](#fn-stable-compact)

<a id="fn-relocate"></a>

> ## `relocate`

> Relocate n possibly-overlapping elements, picking an overlap-safe direction once. relocate_one(i) must move-construct destination element i from source element i and then destroy source element i (a single-element relocate). Overlap is resolved by direction, decided a single time up front: when dst_below_src is true the destination lies at lower addresses and the run is ascending (0..n-1); otherwise it is descending (n-1..0). Writing the overlapped end last guarantees no source element is overwritten before it has been relocated.

```valor
public void relocate(usize n, bool dst_below_src, (usize) -> void relocate_one)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(n); No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value) - Number of elements to relocate. n == 0 is a defined no-op.
> - `dst_below_src`: bool (by value) - True iff destination addresses are lower than source addresses. Caller must set this to match the real address relationship of the two ranges.
> - `relocate_one`: (usize) -> void (borrowed fn-ptr) - Move-construct dst i then destroy src i. Must both move-construct the destination and destroy the source for index i.

> ### RETURNS (void - no value; source range is emptied, destination range is initialized.)

> ### EXAMPLE
>
> ```valor
> // Shift a run down by one slot (destination below source -> ascending).
> void reloc(usize i) { /* dst.move_construct(i, src(i)); src.destroy(i) */ }
> std::memory::algo::relocate(len, true, reloc);
> ```

> ### SEE ALSO
>
> - [`std::memory::algo::relocate_nonoverlapping`](#fn-relocate-nonoverlapping)
> - [`std::memory::algo::move_overlapping`](#fn-move-overlapping)
> - [`std::memory::algo::uninitialized_move`](#fn-uninitialized-move)
> - [`std::memory::algo::destroy_range`](#fn-destroy-range)

<a id="fn-relocate-nonoverlapping"></a>

> ## `relocate_nonoverlapping`

> Relocate n elements between DISJOINT ranges, always ascending. As relocate, but source and destination are guaranteed disjoint, so direction is irrelevant to correctness and the run is always ascending (0..n-1) for a predictable, forward-prefetching sweep. relocate_one(i) move-constructs destination i from source i and destroys source i.

```valor
public void relocate_nonoverlapping(usize n, (usize) -> void relocate_one)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(n); No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value) - Number of elements to relocate. n == 0 is a defined no-op.
> - `relocate_one`: (usize) -> void (borrowed fn-ptr) - Move-construct dst i then destroy src i. Source and destination ranges MUST NOT overlap.

> ### RETURNS (void - no value; disjoint source emptied, destination initialized.)

> ### EXAMPLE
>
> ```valor
> void reloc(usize i) { /* dst.move_construct(i, src(i)); src.destroy(i) */ }
> std::memory::algo::relocate_nonoverlapping(len, reloc);
> ```

> ### SEE ALSO
>
> - [`std::memory::algo::relocate`](#fn-relocate)
> - [`std::memory::algo::copy_nonoverlapping`](#fn-copy-nonoverlapping)
> - [`std::memory::algo::uninitialized_move`](#fn-uninitialized-move)
> - [`std::memory::algo::destroy_range`](#fn-destroy-range)

<a id="fn-zero"></a>

> ## `zero`

> Store 0 into every byte of [0, n), ascending. Invokes write(i, 0) for i in [0, n) ascending. This is an ordinary clear: an optimizer MAY legitimately elide it if the caller never observes the bytes again. Use secure_zero when the wipe must survive dead-store elimination (e.g. key material).

```valor
public void zero(usize n, (usize, u8) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(n); No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value) - Number of bytes to clear. n == 0 writes nothing.
> - `write`: (usize, u8) -> void (borrowed fn-ptr) - Byte store at a logical index. Destination [0, n) must be writable.

> ### RETURNS (void - no value; side effect is n zero stores.)

> ### EXAMPLE
>
> ```valor
> void wr(usize i, u8 b) { /* store b at scratch[i] */ }
> std::memory::algo::zero(4096, wr);
> ```

> ### SEE ALSO
>
> - [`std::memory::algo::secure_zero`](#fn-secure-zero)
> - [`std::memory::algo::fill_pattern`](#fn-fill-pattern)
> - [`std::memory::algo::copy_nonoverlapping`](#fn-copy-nonoverlapping)

<a id="fn-secure-zero"></a>

> ## `secure_zero`

> Clear [0, n) to zero in a way that cannot be optimized away, returning an observable sink. Two defenses keep the wipe live: (1) every byte is cleared through the opaque write callback -- a call the optimizer cannot prove dead; (2) every cleared byte is then read back through read and folded into the returned accumulator, creating a data dependence on the wiped bytes so the clear survives even if the writer inlines to a plain store. For a correct clear the result is always 0; a caller that stores or checks it keeps the whole operation observable. The accumulator only ever sums zeros, so it never overflows.

```valor
public u64 secure_zero(usize n, (usize) -> u8 read, (usize, u8) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(n); No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value) - Number of bytes to securely clear. n == 0 returns 0, no callback fired.
> - `read`: (usize) -> u8 (borrowed fn-ptr) - Byte load at a logical index (verify pass). Must read back the same storage write targets.
> - `write`: (usize, u8) -> void (borrowed fn-ptr) - Byte store at a logical index (clear pass). Destination [0, n) must be writable.

> ### RETURNS (u64 - the read-back accumulator; ALWAYS 0 for a correctly cleared buffer. The caller MUST observe (store/compare) the return value, or the anti-elision guarantee is void.)

> ### EXAMPLE
>
> ```valor
> u8 rd(usize i) { return 0 /* load key_buf[i] */; }
> void wr(usize i, u8 b) { /* store b at key_buf[i] */ }
> u64 residue = std::memory::algo::secure_zero(key_len, rd, wr);
> sink_observe(residue);  // keep the wipe live
> ```

> ### SEE ALSO
>
> - [`std::memory::algo::zero`](#fn-zero)
> - [`std::memory::algo::fill_pattern`](#fn-fill-pattern)
> - [`std::memory::algo::destroy_range`](#fn-destroy-range)

<a id="fn-fill-pattern"></a>

> ## `fill_pattern`

> Fill [0, n) by cyclically repeating a byte pattern, without using modulo. Destination byte i receives pattern byte (i cycled over [0, pattern_len)). The pattern cursor is advanced and wrapped with a compare-and-reset instead of a modulo, keeping the inner step branch-light. An empty pattern (pattern_len == 0) is defined as a no-op: there is nothing to repeat, so nothing is written.

```valor
public void fill_pattern(usize n, usize pattern_len, (usize) -> u8 pattern_read, (usize, u8) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(n); No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value) - Number of destination bytes to write. n == 0 writes nothing.
> - `pattern_len`: usize (by value) - Length of the repeating pattern. pattern_len == 0 is a defined no-op (no writes).
> - `pattern_read`: (usize) -> u8 (borrowed fn-ptr) - Byte load of pattern index in [0, pattern_len). Must be valid for indices 0..pattern_len-1.
> - `write`: (usize, u8) -> void (borrowed fn-ptr) - Destination byte store at a logical index. Destination [0, n) must be writable.

> ### RETURNS (void - no value; side effect is n patterned stores (0 if pattern_len == 0).)

> ### EXAMPLE
>
> ```valor
> u8 pat(usize i) { return 0 /* pattern[i] */; }
> void wr(usize i, u8 b) { /* dst[i] = b */ }
> std::memory::algo::fill_pattern(1024, 4, pat, wr);
> ```

> ### SEE ALSO
>
> - [`std::memory::algo::zero`](#fn-zero)
> - [`std::memory::algo::secure_zero`](#fn-secure-zero)
> - [`std::memory::algo::copy_nonoverlapping`](#fn-copy-nonoverlapping)

<a id="fn-copy-nonoverlapping"></a>

> ## `copy_nonoverlapping`

> Copy n bytes from a DISJOINT source to destination, ascending. Destination byte i receives source byte i for i in [0, n) ascending. Source and destination must not overlap; with overlap the result is undefined (use move_overlapping). The source is left unchanged.

```valor
public void copy_nonoverlapping(usize n, (usize) -> u8 read, (usize, u8) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(n); No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value) - Number of bytes to copy. n == 0 copies nothing.
> - `read`: (usize) -> u8 (borrowed fn-ptr) - Source byte load at a logical index. Source must be initialized.
> - `write`: (usize, u8) -> void (borrowed fn-ptr) - Destination byte store at a logical index. Destination MUST NOT overlap the source.

> ### RETURNS (void - no value; side effect is n byte copies.)

> ### EXAMPLE
>
> ```valor
> u8 rd(usize i) { return 0 /* src[i] */; }
> void wr(usize i, u8 b) { /* dst[i] = b */ }
> std::memory::algo::copy_nonoverlapping(n, rd, wr);
> ```

> ### SEE ALSO
>
> - [`std::memory::algo::move_overlapping`](#fn-move-overlapping)
> - [`std::memory::algo::gather_copy`](#fn-gather-copy)
> - [`std::memory::algo::scatter_copy`](#fn-scatter-copy)
> - [`std::memory::algo::relocate_nonoverlapping`](#fn-relocate-nonoverlapping)

<a id="fn-move-overlapping"></a>

> ## `move_overlapping`

> Move n bytes within one buffer with memmove semantics, correct under overlap. read/write address absolute positions in a single buffer. The safe direction is chosen once from the offsets: if dst_off > src_off the copy runs high-to-low (descending) so a destination byte is written only after the source byte it would overlap has been read; otherwise it runs low-to-high (ascending). Offsets are ordinary indices well below 2^31, so the single direction compare is exact under the current signed-lowering.

```valor
public void move_overlapping(usize n, usize src_off, usize dst_off, (usize) -> u8 read, (usize, u8) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(n); No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value) - Number of bytes to move. n == 0 moves nothing.
> - `src_off`: usize (by value) - Absolute start index of the source run. src_off + n must be in bounds.
> - `dst_off`: usize (by value) - Absolute start index of the destination run. dst_off + n must be in bounds.
> - `read`: (usize) -> u8 (borrowed fn-ptr) - Absolute byte load in the shared buffer. Same buffer as write.
> - `write`: (usize, u8) -> void (borrowed fn-ptr) - Absolute byte store in the shared buffer. Same buffer as read.

> ### RETURNS (void - no value; the n bytes at src_off appear at dst_off, overlap-correct.)

> ### EXAMPLE
>
> ```valor
> u8 rd(usize i) { return 0 /* buf[i] */; }
> void wr(usize i, u8 b) { /* buf[i] = b */ }
> std::memory::algo::move_overlapping(8, 0, 3, rd, wr);  // shift right by 3
> ```

> ### SEE ALSO
>
> - [`std::memory::algo::copy_nonoverlapping`](#fn-copy-nonoverlapping)
> - [`std::memory::algo::relocate`](#fn-relocate)
> - [`std::memory::algo::gather_copy`](#fn-gather-copy)

<a id="fn-gather-copy"></a>

> ## `gather_copy`

> Indexed load: destination byte i receives source byte index_read(i). For i in [0, n) ascending, writes src_read(index_read(i)) to destination i. index_read supplies an arbitrary (possibly repeated) source index per destination slot -- the canonical gather / permutation-apply primitive. Destination is distinct from source.

```valor
public void gather_copy(usize n, (usize) -> usize index_read, (usize) -> u8 src_read, (usize, u8) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(n); No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value) - Number of destination slots to fill. n == 0 copies nothing.
> - `index_read`: (usize) -> usize (borrowed fn-ptr) - Source index for destination slot i. Each returned index must be a valid source position.
> - `src_read`: (usize) -> u8 (borrowed fn-ptr) - Source byte load at a gathered index. Source must be initialized.
> - `write`: (usize, u8) -> void (borrowed fn-ptr) - Destination byte store at slot i. Destination distinct from source.

> ### RETURNS (void - no value; side effect is n gathered stores.)

> ### EXAMPLE
>
> ```valor
> usize idx(usize i) { return i /* perm[i] */; }
> u8 srd(usize i) { return 0 /* src[i] */; }
> void wr(usize i, u8 b) { /* dst[i] = b */ }
> std::memory::algo::gather_copy(n, idx, srd, wr);
> ```

> ### SEE ALSO
>
> - [`std::memory::algo::scatter_copy`](#fn-scatter-copy)
> - [`std::memory::algo::copy_nonoverlapping`](#fn-copy-nonoverlapping)
> - [`std::memory::algo::compact_indices`](#fn-compact-indices)

<a id="fn-scatter-copy"></a>

> ## `scatter_copy`

> Indexed store: destination byte index_read(i) receives source byte i. For i in [0, n) ascending, writes src_read(i) to destination index_read(i). If two source positions map to the same destination index, the later source (larger i) wins, because stores happen in ascending i order. For a permutation of distinct indices this is an exact inverse of gather_copy. Destination is distinct from source.

```valor
public void scatter_copy(usize n, (usize) -> usize index_read, (usize) -> u8 src_read, (usize, u8) -> void write)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(n); No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value) - Number of source elements to scatter. n == 0 copies nothing.
> - `index_read`: (usize) -> usize (borrowed fn-ptr) - Destination index for source element i. Duplicate indices resolve last-wins; a permutation gives an exact gather inverse.
> - `src_read`: (usize) -> u8 (borrowed fn-ptr) - Source byte load at index i. Source must be initialized.
> - `write`: (usize, u8) -> void (borrowed fn-ptr) - Destination byte store at a scattered index. Destination distinct from source.

> ### RETURNS (void - no value; side effect is n scattered stores (last-wins on collisions).)

> ### EXAMPLE
>
> ```valor
> usize idx(usize i) { return i /* perm[i] */; }
> u8 srd(usize i) { return 0 /* src[i] */; }
> void wr(usize i, u8 b) { /* dst[i] = b */ }
> std::memory::algo::scatter_copy(n, idx, srd, wr);
> ```

> ### SEE ALSO
>
> - [`std::memory::algo::gather_copy`](#fn-gather-copy)
> - [`std::memory::algo::copy_nonoverlapping`](#fn-copy-nonoverlapping)
> - [`std::memory::algo::compact_indices`](#fn-compact-indices)

<a id="fn-compact-indices"></a>

> ## `compact_indices`

> Compute the compaction map without touching the payload; returns the kept count. For each kept index i (keep(i) == true), in ascending order, invokes emit(out_pos, i) with out_pos running 0, 1, 2, ... The payload is never read or moved -- this is the zero-copy form that yields a stable index list / permutation the caller can apply later. Returns the number of kept elements.

```valor
public usize compact_indices(usize n, (usize) -> bool keep, (usize, usize) -> void emit)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(n); No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value) - Number of candidate elements. n == 0 emits nothing, returns 0.
> - `keep`: (usize) -> bool (borrowed fn-ptr) - Retention predicate for index i. Pure; evaluated once per index.
> - `emit`: (usize, usize) -> void (borrowed fn-ptr) - Receives (output position, kept source index). Called kept-count times, positions strictly ascending from 0.

> ### RETURNS (usize - the number of kept elements (length of the emitted map).)

> ### EXAMPLE
>
> ```valor
> bool keep(usize i) { return true /* predicate(i) */; }
> void emit(usize pos, usize src) { /* map[pos] = src */ }
> usize kept = std::memory::algo::compact_indices(n, keep, emit);
> ```

> ### SEE ALSO
>
> - [`std::memory::algo::stable_compact`](#fn-stable-compact)
> - [`std::memory::algo::compact`](#fn-compact)
> - [`std::memory::algo::gather_copy`](#fn-gather-copy)

<a id="fn-stable-compact"></a>

> ## `stable_compact`

> Pack kept elements to the front PRESERVING relative order; returns the kept count. Sweeps ascending with a write cursor w <= i: when keep(i) is true and i != w, move_one(i, w) relocates element i down into hole w. Because w never exceeds i, the target slot is always already-processed, so a live element is never clobbered and relative order is preserved. Slots in [returned, n) are left moved-from and are the caller's to destroy.

```valor
public usize stable_compact(usize n, (usize) -> bool keep, (usize, usize) -> void move_one)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(n); No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value) - Number of candidate elements. n == 0 returns 0.
> - `keep`: (usize) -> bool (borrowed fn-ptr) - Retention predicate for index i. Pure; evaluated once per index.
> - `move_one`: (usize, usize) -> void (borrowed fn-ptr) - Relocate element from index -> to index. Called only when source != destination; target is an already-vacated slot.

> ### RETURNS (usize - the new logical length (count of kept elements). Slots [ret, n) are moved-from.)

> ### EXAMPLE
>
> ```valor
> bool keep(usize i) { return true /* predicate(i) */; }
> void mv(usize from, usize to) { /* relocate elem from->to */ }
> usize len2 = std::memory::algo::stable_compact(n, keep, mv);
> std::memory::algo::destroy_range(n - len2, /* tail destroyer */ drop);
> ```

> ### SEE ALSO
>
> - [`std::memory::algo::compact`](#fn-compact)
> - [`std::memory::algo::compact_indices`](#fn-compact-indices)
> - [`std::memory::algo::destroy_range`](#fn-destroy-range)
> - [`std::memory::algo::relocate`](#fn-relocate)

<a id="fn-compact"></a>

> ## `compact`

> Pack kept elements to the front with the FEWEST moves; order NOT preserved. Two cursors close in from both ends: a leading cursor skips kept elements in place, and each hole it finds is filled by pulling the next kept element from the trailing end via move_one(from, to). The number of moves equals the number of holes below the final boundary, which is optimal, but a trailing element overwrites a leading hole, so relative order is not preserved. Use stable_compact when order matters. Slots in [returned, n) are moved-from and the caller's to destroy.

```valor
public usize compact(usize n, (usize) -> bool keep, (usize, usize) -> void move_one)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> O(n); No heap allocation.

> ### INPUT PARAMETERS
>
> - `n`: usize (by value) - Number of candidate elements. n == 0 returns 0.
> - `keep`: (usize) -> bool (borrowed fn-ptr) - Retention predicate for index i. Pure; each index tested once.
> - `move_one`: (usize, usize) -> void (borrowed fn-ptr) - Relocate a trailing keeper into a leading hole. Called minimal-move times; source > destination always.

> ### RETURNS (usize - the new logical length (count of kept elements). Slots [ret, n) are moved-from.)

> ### EXAMPLE
>
> ```valor
> bool keep(usize i) { return true /* predicate(i) */; }
> void mv(usize from, usize to) { /* relocate elem from->to */ }
> usize len2 = std::memory::algo::compact(n, keep, mv);
> ```

> ### SEE ALSO
>
> - [`std::memory::algo::stable_compact`](#fn-stable-compact)
> - [`std::memory::algo::compact_indices`](#fn-compact-indices)
> - [`std::memory::algo::destroy_range`](#fn-destroy-range)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

The memory-algorithm harness currently reports **34/34 passing cases**, including
ordering, overlap, compaction, and zero-length behavior.

[← Memory](STD-MEMORY-DOC.md) · [Table of contents](standard-library/README.md) · [Input and output →](STD-IO-DOC.md)
