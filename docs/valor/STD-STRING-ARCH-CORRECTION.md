<!-- stdlib-reference-style: modern -->
> # Architectural Correction — `std::string`

[Standard library](standard-library/README.md) / [Collections and text](standard-library/README.md#collections-and-text) / **String architecture**

## In this chapter

- [The defect](#the-defect)
- [The correction](#the-correction)
- [Why this is the defensible architecture, not a downgrade](#why-this-is-the-defensible-architecture-not-a-downgrade)
- [Migration notes](#migration-notes)
- [Verification trail](#verification-trail)

> Scope: `stdlib/std/string.valor`. Companion to [String specification](STD-STRING-SPEC.md)
> and [String verification study](STD-STRING-IEEE.md). Status: **applied and verified** (codegen
> `-O0`/`-O2`, Lean proofs green, C-harness run tests).

## The defect

The prior `std::string` was **99 one-line facades**, each of the form:

```valor
public string concat(string a, string b) { return valor_std_string_concat(a, b) }
public StringArray split(string s, string delim) { return valor_std_string_split(s, delim) }
public IntArray bpeEncode(string s, Merges merges) { return valor_std_string_bpeEncode(s, merges) }
```

Every body forwarded to a `valor_std_string_<name>` runtime symbol. **None of those symbols
exist.** They are not declared in any `extern` block, not defined in any runtime `.a`, and
not emitted by the compiler's injected runtime registry. The module also referenced opaque
types (`stringview`, `ByteArray`, `CharArray`, `StringArray`, `Regex`, `Arena`, `Vocab`,
`Merges`, `Model`, `Corpus`, `FnHandle`, `IntArray2D`, `StringIntArrayMap`, …) that have no
declared layout anywhere.

The consequences were categorical, not cosmetic:

1. **It could not link.** Any program importing `std::string` and using a function would fail
   at link time on an undefined symbol.
2. **It could not be tested.** There is nothing to run.
3. **It could not be proved.** There is no semantics to model.
4. **It silently promised host-dependent behaviour.** Case mapping, normalization, hashing,
   regex, tokenization, and FP similarity were all implicitly delegated to a nonexistent
   runtime that, had it existed the obvious way, would have inherited the host's Unicode
   tables, allocator, FP mode, and byte order — the exact opposite of the *deterministic,
   bit-exact, versioned* requirement.

A module in this state cannot make any of the guarantees the directive asks for (determinism,
bit-exactness, thread-safety, lock-freedom, latency bounds), because it has no behaviour at
all.

## The correction

Replace the facade with a **real, self-contained deterministic core** in the
allocation-free **callback-view** idiom already proven across the pure-Valor stdlib (`bytes`,
`layout`, `memory::algo`, `stream`, `sparse`, `ast`). Concretely:

* **Remove the nonexistent runtime dependency.** The module now `import`s only `std.builtins`
  and `std.bytes`, both of which are real, pure, fully-codegenning Valor modules. There is no
  `valor_std_string_*` symbol anywhere in the rewrite.
* **Remove the undeclared opaque handles.** A string is a caller accessor `(len, read)`;
  outputs go through a caller `write` sink after a `*_len` sizing query; search uses a caller
  KMP-table workspace. No handle has a layout to get wrong because no handle exists.
* **Pin every source of nondeterminism.** Unicode 15.1.0 (frozen; ASCII-only case/whitespace
  in the core), a versioned architecture-independent hash seed, RFC-4648 Base64, lowercase
  hex, explicit UTF-16 endianness, `MAX_STRING_BYTES` size cap. Nothing is read from the host.
* **Shrink the trusted core.** Regex, interning/arenas, Aho–Corasick, normalization, and all
  tokenization / NLP / fuzzy-similarity surfaces are *removed* from `std::string` and assigned
  to separate libraries (directive §13.8). This is a correctness decision: those subsystems
  carry reclamation, work-bound, and FP-rounding obligations that must not be smuggled into
  the trusted core.

The result is a module of ~40 functions that **actually compiles** (LLVM IR at `-O0` and
`-O2`, all kernels emitted, no ICE), **actually runs** (C-harness over real buffers), and
**actually satisfies** its stated invariants (Lean proofs of correctness, determinism,
reproducibility).

## Why this is the defensible architecture, not a downgrade

| Property | Old facade | Corrected core |
|---|---|---|
| Links | ✗ (undefined symbols) | ✓ |
| Runs | ✗ | ✓ (C-harness) |
| Deterministic | unknowable | ✓ (proved) |
| Bit-exact across targets | impossible (host-inherited) | ✓ for byte ops (proved: word models agree) |
| Thread-safe | unknowable | ✓ (immutable, no shared state) |
| Lock-free subset | unstated | ✓ (documented: entire core is wait-free + alloc-free) |
| Allocation | hidden in "runtime" | **none** in the core |
| Surface size | 99 functions, 0 real | ~40 functions, all real |

The apparent reduction from 99 to ~40 functions is the point. The 99 included regex,
BPE/WordPiece/SentencePiece, TF-IDF, arenas, interning, and fuzzy similarity — a "trusted
core" that large cannot be made deterministic, bounded, and reclamation-safe as one unit. The
corrected core is the subset that **can** carry those guarantees, and it carries them with
machine-checked proof. The excluded surfaces are not deleted from the world; they are
relocated to libraries that must earn their own contracts (§13.8, §13.9, §13.12).

## Migration notes

* `getChars(string, CharArray)` → `substring(len, read, start, end, cap, write)` with an
  explicit capacity and an `ERR_BOUNDS`/`ERR_NO_SPACE` distinction (the old signature had no
  destination offset, capacity, or written-length — directive §13.9).
* `fromBase64`/`fromHex` now return `i32` error results, never a sentinel string.
* `zeroAlloc(string, FnHandle) -> string` (a contradiction — a zero-alloc call cannot return
  an owned string) is removed; the whole core is zero-alloc, so the concept is subsumed.
* `viewSlice`, `intern`, `arena`, `Regex`/`Vocab`/`Merges`/`Model`/`Corpus` operations are not
  part of VERSION 1; they move to separate libraries with defined immutable ABIs.
* `similarity`/`jaro`/`jaroWinkler` move to a similarity library with exact FP rounding rules;
  the core emits no `fcmp` and ships integer `compareBytes` only.

## Verification trail

* Codegen: `valorc build … --emit-llvm -O0` and `-O2` (with `--clang` = LLVM 20 driver) —
  all ~40 kernels present, no ICE. See [String verification study](STD-STRING-IEEE.md) §8.
* Proofs: `lean formal/lean/StringCore.lean` — `correct_corpus`, `deterministic_corpus`,
  `reproducible_corpus`, `deterministic_all`, `hex_roundtrip_all_bytes`,
  `base64_rfc4648_vectors`, `hash_is_pinned`, `hashBytes_lt_mod` all green.
* Golden IR + symbol tables: `tests/golden/string_*` via `regression_suite_test.cc`.
* Run + sanitizers: `tests/stdlib/string/` (ASan/UBSan/TSan).

[← String specification](STD-STRING-SPEC.md) · [Table of contents](standard-library/README.md) · [String verification study →](STD-STRING-IEEE.md)
