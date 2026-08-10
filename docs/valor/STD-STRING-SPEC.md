<!-- stdlib-reference-style: modern -->
> # `std::string` — Frozen Specification & Versioned ABI (v1)

[Standard library](standard-library/README.md) / [Collections and text](standard-library/README.md#collections-and-text) / **String specification**

## In this chapter

- [Design thesis](#design-thesis)
- [Representation & semantic model (§13.1)](#representation-and-semantic-model-13-1)
- [Versioned ABI (§13.2)](#versioned-abi-13-2)
- [Function catalogue (implemented core)](#function-catalogue-implemented-core)
- [Concurrency contract (§13.7)](#concurrency-contract-13-7)
- [What is machine-proved vs. measured](#what-is-machine-proved-vs-measured)
- [Latency claim discipline (§13.10)](#latency-claim-discipline-13-10)

> Module: `stdlib/std/string.valor` · Module path: `std::string` · **ABI VERSION = 1**
> Unicode Character Database: **15.1.0 (frozen)** · Hash: versioned, architecture-independent
> This document is normative. Where the source and this document disagree, that is a bug in one of them; neither is allowed to drift silently, because both are versioned.

This specification is written **before** the implementation is trusted (§13.1 of the
directive) and is the contract the code, the Lean model (`formal/lean/StringCore.lean`),
the golden IR tests (`tests/golden/string_*`), and the C-harness run tests
(`tests/stdlib/string/`) are all checked against. Nothing here is inherited from the host:
Unicode tables, hashing, FP mode, byte order, and size limits are all pinned to VERSION 1.

## Design thesis

The previous module was a facade of ~99 `return valor_std_string_<name>(...)` calls into
a runtime ABI **that does not exist** (no such symbols are declared, defined, or emitted
anywhere in the toolchain). See [String architecture correction](STD-STRING-ARCH-CORRECTION.md).

The replacement is a **deterministic scalar core** built only on `std::builtins` and
`std::bytes`, in the allocation-free **callback-view** idiom. A string is never passed by
pointer or materialised as a struct; it is reached through a caller accessor, and every
output is written through a caller sink after a matching sizing query. This is the same
idiom already validated for `bytes`, `layout`, `memory::algo`, `stream`, `sparse`, `ast`.

The defensible target (directive §13, closing line) is:

> deterministic **and** bit-exact within a versioned runtime, thread-safe throughout,
> lock-free for a documented subset, with measured bounds for explicitly capped inputs on
> specified platforms.

The implementation makes those guarantees for its own scalar control flow. End-to-end
progress also depends on caller callbacks, and `print` additionally depends on the installed
runtime sink. The latency measurement boundary is defined below.

## Representation & semantic model (§13.1)

| Question | Decision (VERSION 1) |
|---|---|
| String representation | **Immutable UTF-8 bytes.** The module never mutates, retains, or frees caller storage. |
| ABI shape | The 36 pure-core routines use a **callback view**: `len : usize` + `read : (usize) -> u8`. `view(string)` returns a borrowed runtime `stringview`; `print(string)` submits that view to the runtime sink. |
| Malformed encodings | **Rejected** on operations that require well-formedness (`codePointCount`, `codePointAt`, `reverseCodePoints`, `toUtf16`, `toUtf16Len`) → `ERR_ENCODING`, receiver **not** called. Pure byte operations (`equals`, `compare`, `startsWith`, `endsWith`, `indexOf`, `hash`, `toHex`, `toBase64`) are **encoding-agnostic and total** — defined for arbitrary bytes. |
| Indices count | **Bytes.** All offsets, ranges, and search results are byte indices (O(1), storage-aligned). Scalar-valued operations are named explicitly (`codePointAt`, `codePointCount`). |
| `char` | One **byte** (`u8`) at `charAt`. A **Unicode scalar value** (`u32`, U+0000..U+10FFFF minus surrogates) at `codePointAt`. |
| Bounds & overflow | Every range is checked against `[0, len]`; every multiplicative size is checked against `MAX_STRING_BYTES` **before** the multiply, so a size computation can never wrap (proved bounded in Lean; see §5). |
| Allocation failure | **Impossible in this core** — no function allocates. Output capacity shortfall is a normal, returned `ERR_NO_SPACE`, never a trap. |
| Max sizes | `MAX_STRING_BYTES = 2^30` bytes. `NOT_FOUND = 2^63 − 1` sentinel (exceeds any legal length, so it can never collide with a real index). |
| Nullability / empty | Empty is `len == 0`; canonical and total. `isEmpty` is O(1). Empty-input behaviour is defined per function below. |
| Locale | **None consulted, ever.** All classification is against fixed ASCII code points. |
| Unicode version | **15.1.0**, frozen (`UNICODE_VERSION_MAJOR/MINOR/PATCH`). Case folding and whitespace in the trusted core are **ASCII-only**; full-Unicode case/normalization is a separate library, never host-inherited. |
| Hash | `hash` uses the versioned `std::builtins::hash_bytes` fold seeded with `STRING_HASH_SEED`; its value is pinned by Lean. `hashAlt` uses the module-local `STRING_HASH_ALT_*` constants and reduces every step modulo `HASH_MOD_LOCAL` to avoid the overflow defect in `std::builtins::hash_bytes_alt`. Both return unsigned `u64`. |
| FP similarity | **Out of the trusted core** (moved to a separate similarity library, §13.8). The core ships bytewise integer `compare` only, so no floating-point comparison is required. |
| Regex | **Out of the trusted core.** A non-backtracking (DFA/NFA) engine is a separate library (§13.8). |
| Base64 / hex | Base64 = **RFC 4648** standard alphabet (`A–Z a–z 0–9 + /`) with `=` padding. Hex = **lowercase** `0–9 a–f` on encode; decode accepts upper- or lower-case; malformed → `ERR_ENCODING`, odd length → `ERR_PARAM`. |
| UTF-16 | **Explicit `big_endian` parameter.** No BOM is emitted. Supplementary scalars use surrogate pairs. |
| Overlap of `getChars`-style ops | Replaced: `substring` takes an explicit `(start, end, cap, write)` — destination offset is always 0, capacity is explicit, and the returned status distinguishes `ERR_BOUNDS` from `ERR_NO_SPACE`. |
| Ownership/lifetime of returns | **No owned objects are returned.** Results are scalars, receiver values, caller-sink bytes, or the borrowed `stringview` returned by `view`. That runtime view is valid only for the lifetime of its input `string`. Span routines report `[start, end)` indices into the caller's buffer. |

## Versioned ABI (§13.2)

### 2.1 Opaque types → concrete callback-view

The old signatures used undeclared collection and subsystem handles (`ByteArray`, `CharArray`,
`StringArray`, `Regex`, `Arena`, `Vocab`, `Merges`, `Model`, `Corpus`, `FnHandle`). VERSION 1
**removes** them from the trusted core and replaces their data flow with caller views and
sinks. The only exposed runtime view is the real borrowed `stringview` produced by `view`:

| Old opaque param | VERSION 1 form |
|---|---|
| an immutable byte input | `len : usize`, `read : (usize) -> u8` |
| runtime `string` interop | `view(string) -> stringview`; borrowed, O(1), no copy |
| output `string` / `ByteArray` / `CharArray` | `cap : usize`, `write : (usize, u8) -> void`, returned `i32` status |
| a returned length | `receive : (usize) -> void` |
| a returned scalar / code point | `receive : (u8) -> void` / `(u32, usize) -> void` |
| KMP failure table (search) | `cap`, `read_fail : (usize) -> usize`, `write_fail : (usize, usize) -> void` |
| `Regex`, `Vocab`, `Merges`, `Model`, `Corpus`, `Arena`, `StringArray` | **not in the core** — separate libraries define their own immutable ABIs |

### 2.2 Calling convention, visibility, purity

* All 38 public routines are ordinary Valor `public` functions. The 36 callback-core
  routines lower without a string-object ABI. `view` and `print` deliberately cross the
  runtime boundary through `valor_std_string_view` and `valor_rt_print`.
* **No module-owned mutable state.** The file declares constants but no global mutable data,
  thread-locals, caches, locks, or allocations. Runtime I/O state is consulted only by
  `print` and is governed by the runtime's I/O contract.
* **Inputs** are borrowed for the duration of the call and never retained. **Outputs** are
  caller-owned. There is no reference counting and no destructor cascade.

### 2.3 Error representation

`i32` status codes, no exceptions, no thread-local `errno`:

| Code | Name | Meaning |
|---|---|---|
| 0 | `OK` | success; any non-empty output was delivered as specified |
| 1 | `ERR_ENCODING` | input is not well-formed UTF-8 |
| 2 | `ERR_BOUNDS` | byte index/range outside `[0, len]`, or `start > end` |
| 3 | `ERR_NO_SPACE` | caller output capacity too small |
| 4 | `ERR_OVERFLOW` | a size would exceed `MAX_STRING_BYTES` (checked *before* the multiply) |
| 5 | `ERR_PARAM` | inconsistent argument (e.g. odd-length hex) |
| 6 | `ERR_EMPTY` | reserved for an operation undefined on empty input; no current public routine emits it |

**Invariant (proved by construction, checked by the C-harness):** on any non-`OK` return the
receiver/writer is **not** called, so a caller can never mistake a partial result for a value.

### 2.4 Checked size arithmetic

Every multiplicative size uses the guard `len > MAX_STRING_BYTES / count` (division, which
cannot overflow) **before** computing `len * count`. `toBase64Len`, `toHexLen`, `repeatLen`,
`toUtf16Len`, and `jsonEscapeLen` expose or validate required output size before writes. The
Lean model proves the hash fold never approaches `2^31` (`hashBytes_lt_mod`), the structural
reason the value is bit-identical on any ≥64-bit target.

### 2.5 Opt-level and version stability

* VERSION 1 defines optimization-independent results. Current regression evidence captures
  `-O0` and `-O2`; other optimization levels are part of the semantic contract but are not
  claimed as separately executed by the string-specific golden suite.
* A program compiled against ABI VERSION *k* runs against runtime VERSION *k*. Any change to
  the hash constant, the Unicode version, an alphabet, or an error code is an **ABI break**
  and bumps `VERSION`.

### 2.6 Runtime adapters

The callback core is ordinary library code. Two public adapters intentionally use runtime
services: `view` calls `valor_std_string_view`, and `print` passes that borrowed view to
`valor_rt_print`. No other public routine in this module depends on a string runtime symbol.

## Function catalogue (implemented core)

The current surface contains **38 public routines**. `read`/`read_a`/`read_b`/`read_needle`/`read_prefix`/`read_suffix` are
`(usize) -> u8`; `write` is `(usize, u8) -> void`; `receive`/`ru`/`r8`/`rcp`/`rspan` are the
receivers named in §2.1.

**Runtime adapters** — `view`, `print`.
**Length / validity** — `isEmpty`, `byteLength`, `isValidUtf8`, `codePointCount`.
**Access** — `charAt`, `isCharBoundary`, `codePointAt`.
**Compare** — `equals`, `compare`, `equalsIgnoreCaseAscii`.
**Search (worst-case linear, KMP)** — `startsWith`, `endsWith`, `indexOf`, `contains`, `countMatches`, `lastIndexOf`.
**Slice / whitespace (allocation-free spans)** — `stripSpan`, `stripLeftSpan`, `stripRightSpan`, `substring`.
**Case (ASCII, locale-free)** — `toLowerAscii`, `toUpperAscii`.
**Producers (checked sizing)** — `repeatLen`, `repeat`, `reverseCodePoints`.
**Encodings (fixed alphabets)** — `toHexLen`, `toHex`, `fromHex`, `toBase64Len`, `toBase64`, `toUtf16Len`, `toUtf16`.
**Escaping** — `jsonEscapeLen`, `jsonEscape`.
**Hash (versioned, arch-independent)** — `hash`, `hashAlt`.

Empty-input behaviour: `isEmpty [] = true`; `compare [] [] = EQUAL`, `compare [] (x::_) = LESS`;
`toBase64 [] = []`, `toHex [] = []`; `indexOf` of an empty needle = 0; `countMatches` of an
empty needle = 0 (documented deterministic choice). Deterministic tie-breaks: first match
(`indexOf`), last match (`lastIndexOf`), non-overlapping left-to-right (`countMatches`).

### Deliberately excluded from the trusted core (§13.8)

Regex match/extract/replace; `StringArray`/collection-returning `split`/`join`/`findAll`;
interning + `dedup`; arenas; normalization/slugify/case-mapping beyond ASCII; Aho–Corasick;
BPE/WordPiece/SentencePiece/vocab/model tokenization; TF-IDF/corpus; `jaro`/`jaroWinkler`/
`similarity` and all fuzzy matching. Each belongs to a **separate library** with its own
immutable ABI, its own reclamation story, and its own workload-specific latency claims.
Keeping them out of the trusted core is a **correctness requirement**, not an omission.

## Concurrency contract (§13.7)

* Callback-view inputs are **immutable**. The 36 callback-core routines are functions of
  their arguments and synchronous callbacks; `view` is a borrowed conversion and `print` is
  explicitly effectful.
* No function-local lazy initialisation, no global tables, no locks. Read-only constants are
  compile-time and require no initialisation ordering.
* **Progress scope:** module-owned control flow is bounded and allocation-free. A callback
  routine is end-to-end wait-free only when the supplied `read`, `write`, failure-table, and
  receiver callbacks are themselves wait-free. The module neither adds a lock nor retains a
  callback.
* Callbacks: `read`/`write`/`receive` are called synchronously, in index order, and the core
  keeps no state across them; a caller may back them with thread-confined or immutably-shared
  storage. Callback behavior is part of the caller's correctness and progress contract.

### Effectful `print(string)` adapter

`print` is intentionally outside the pure callback core. It performs an O(1), zero-copy
conversion from the immutable runtime string to its borrowed `(ptr,len)` view and makes exactly
one call to the versioned `valor_rt_print` stdout sink. The wrapper/dispatch cost is O(1), but
transferring `n` bytes is necessarily O(n); no specification or benchmark may describe total
printing time as constant.

The submitted bytes are deterministic and bit-exact, with no implicit newline, transcoding, or
locale conversion. Terminal rendering and externally observable ordering between concurrent
calls are not deterministic. Concurrent calls are race-free for a fixed runtime I/O
configuration whose installed `ValorIoVTable` obeys its lifetime and concurrency contract.
Lock-free progress is claimed only when that sink is itself lock-free and nonblocking and accepts
the complete, explicitly capped input in the single call. The default host stdout implementation,
runtime I/O reconfiguration, short writes, pipes beyond their atomic-write bound, filesystems,
terminals, and backpressure are outside the lock-free and latency-bounded subset.

## What is machine-proved vs. measured

* **Proved (Lean 4, `formal/lean/StringCore.lean`, re-runnable):** selected model properties (hex round-trip
  over all 256 bytes; RFC-4648 Base64 vectors; hex/Base64 length laws; `compare` reflexive;
  primary `hash` pinned); determinism (output invariant under a modelled nondeterminism source, for
  every input); reproducibility (64/128-bit word hash models equal the unbounded reference;
  `hashBytes_lt_mod` bounds every primary-hash accumulator `< 2^31`). These theorems do not
  cover all 38 implementation routines or the `hashAlt` algorithm.
* **Verified (compiler):** the module lowers to valid LLVM IR at `-O0` and `-O2`, all kernels
  emitted, no ICE (§7 golden IR).
* **Checked (C-harness, `tests/stdlib/string/`):** semantic run tests over real byte buffers
  under ASan/UBSan/TSan (§5–6 of the directive). The 19 callback-core cases currently pass
  in plain, ASan/UBSan, and TSan builds when run independently.
* **Measured, not asserted (§11 below):** latency percentiles. The module-owned kernels are allocation-free
  and bounded, but a *number* (p99.999) is only published after workload-specific
  measurement on named hardware; none is asserted here.

## Latency claim discipline (§13.10)

No universal or default-stdout p99.999 figure is published for `print` in VERSION 1. The
fixed-sink harness and its most recent recorded platform envelope are documented in
[`reports/std_string_print_latency.md`](reports/std_string_print_latency.md). On 2026-08-09,
the current end-to-end harness failed its concurrent byte-verification precheck; that report
must therefore be treated as historical until the adapter gate passes again. Any promoted SLO
will state: sink implementation, target platform, input-size
bucket + hard maximum, thread count/contention, CPU model + frequency policy, NUMA policy,
warm/cold cache, allocator/memory-pressure, whether page faults/startup/OOM are included, the
measurement window, and coordinated-omission-resistant methodology — with far more than 10⁶
samples across repeated runs before any percentile is trusted. The *structural* guarantees
that make such a claim attainable (no allocation, no lock, bounded per-byte work, single-exit
loops) hold now and are verified above.

[← URLs](STD-URL-DOC.md) · [Table of contents](standard-library/README.md) · [String architecture →](STD-STRING-ARCH-CORRECTION.md)
