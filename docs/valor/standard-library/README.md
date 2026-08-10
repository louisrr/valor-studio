# Valor standard library

A readable guide to Valor's standard library, web profile, and ValorX extensions.
Use the categories below as the main table of contents. Every chapter also includes
breadcrumbs, a local routine index, related chapters, and previous/next navigation.

> Start with a category, then use each module's routine index to jump directly to an API.

## Table of contents

<a id="foundations"></a>

### Foundations

Core types, language support, metadata, and compiler-facing APIs.

- [Core](../STD-CORE-DOC.md) — Runtime profile, ABI helpers, and foundational operations.
- [Built-ins](../STD-BUILTINS-DOC.md) — Compiler-provided primitive operations.
- [Typing](../STD-TYPING-DOC.md) — Type inspection and typing utilities.
- [Layout](../STD-LAYOUT-DOC.md) — Size, alignment, and layout operations.
- [System](../STD-SYS-DOC.md) — Low-level system-facing utilities.
- [Compiler](../STD-COMPILER-DOC.md) — Compiler integration and introspection.
- [Abstract syntax tree](../STD-AST-DOC.md) — AST data and traversal helpers.

<a id="collections-and-text"></a>

### Collections and text

Sequences, maps, iteration, encoding, strings, and structured data.

- [Sequence collections](../STD-COLLECTIONS-SEQUENCE-DOC.md) — Sequence-oriented collection kernels.
- [Hash collections](../STD-COLLECTIONS-HASH-DOC.md) — Hash-table control and lookup operations.
- [Ordered collections](../STD-COLLECTIONS-ORDERED-DOC.md) — Ordered-map and ordered-set operations.
- [Persistent collections](../STD-COLLECTIONS-PERSISTENT-DOC.md) — Persistent collection primitives.
- [Queues](../STD-COLLECTIONS-QUEUE-DOC.md) — Queue and deque operations.
- [Bytes](../STD-BYTES-DOC.md) — Byte-oriented manipulation utilities.
- [Data](../STD-DATA-DOC.md) — General data transformation helpers.
- [Hashing](../STD-HASH-DOC.md) — General-purpose hash operations.
- [Iterators](../STD-ITER-DOC.md) — Iterator construction and composition.
- [Functional tools](../STD-FUNCTOOLS-DOC.md) — Function composition and higher-order helpers.
- [Streams](../STD-STREAM-DOC.md) — Pull- and push-style stream processing.
- [Strings](../STD-STRING-DOC.md) — The public string module reference.
- [Text](../STD-TEXT-DOC.md) — Text processing and Unicode-facing operations.
- [Regular expressions](../STD-REGEX-DOC.md) — Pattern matching operations.
- [Codecs](../STD-CODEC-DOC.md) — Encoding and decoding primitives.
- [Serialization](../STD-SERIALIZATION-DOC.md) — Structured serialization operations.
- [URLs](../STD-URL-DOC.md) — URL parsing and normalization.
- [String specification](../STD-STRING-SPEC.md) — Frozen string semantics and versioned ABI.
- [String architecture](../STD-STRING-ARCH-CORRECTION.md) — Architecture correction and migration notes.
- [String verification study](../STD-STRING-IEEE.md) — Formal and empirical string-core study.

<a id="algorithms-and-computing"></a>

### Algorithms and computing

Algorithms, numerical computing, modeling, tensors, and AI.

- [Algorithms](../STD-ALGO-DOC.md) — General algorithms.
- [Sorting](../STD-ALGO-SORT-DOC.md) — Sorting and ordering algorithms.
- [Reduction](../STD-ALGO-REDUCE-DOC.md) — Reduction and aggregation algorithms.
- [Mathematics](../STD-MATH-DOC.md) — Core mathematical functions.
- [Numeric](../STD-NUMERIC-DOC.md) — Numeric utility operations.
- [Random](../STD-RANDOM-DOC.md) — Deterministic random-number operations.
- [Graphs](../STD-GRAPH-DOC.md) — Graph representation and algorithms.
- [Sparse computing](../STD-SPARSE-DOC.md) — Sparse data and compute kernels.
- [Linear algebra](../STD-LA-DOC.md) — Linear algebra operations.
- [Solvers](../STD-SOLVER-DOC.md) — Equation and optimization solvers.
- [Differential equations](../STD-DIFFEQ-DOC.md) — Differential-equation kernels.
- [Multivariable calculus](../STD-MULTICALC-DOC.md) — Multivariable calculus operations.
- [Probabilistic computing](../STD-PROBABILISTIC-DOC.md) — Probability-oriented computation.
- [Quantitative computing](../STD-QUANT-DOC.md) — Quantitative and financial operations.
- [Tensors](../STD-TENSOR-DOC.md) — Tensor construction and compute operations.
- [Artificial intelligence](../STD-AI-DOC.md) — AI-oriented primitives.

<a id="memory-storage-and-i-o"></a>

### Memory, storage, and I/O

Memory algorithms, files, storage, and input/output.

- [Memory](../STD-MEMORY-DOC.md) — Memory-region and ownership helpers.
- [Memory algorithms](../STD-MEMORY-ALGO-DOC.md) — Construction, relocation, movement, and compaction.
- [Input and output](../STD-IO-DOC.md) — General input/output operations.
- [File systems](../STD-FS-DOC.md) — File-system operations.
- [Storage](../STD-STORAGE-DOC.md) — Durable storage operations.

<a id="concurrency-and-time"></a>

### Concurrency and time

Asynchronous work, synchronization, scheduling, and clocks.

- [Async](../STD-ASYNC-DOC.md) — Asynchronous control-flow primitives.
- [Concurrent futures](../STD-CONCURRENT-FUTURES-DOC.md) — Concurrent future operations.
- [Synchronization](../STD-SYNC-DOC.md) — Synchronization primitives.
- [Scheduling](../STD-SCHEDULE-DOC.md) — Scheduling and policy operations.
- [Time](../STD-TIME-DOC.md) — Clocks, durations, and time calculations.

<a id="networking-and-security"></a>

### Networking and security

Transport, HTTP, cryptographic hashing, and security policy.

- [Networking](../STD-NET-DOC.md) — Network addressing and transport helpers.
- [HTTP](../STD-HTTP-DOC.md) — Standard-library HTTP operations.
- [Security](../STD-SECURITY-DOC.md) — Security checks and policy operations.
- [Cryptographic hashing](../STD-CRYPTO-HASH-DOC.md) — Cryptographic hash operations.

<a id="web-platform"></a>

### Web platform

The web profile and its protocol-specific modules.

- [Web profile](../WEB-DOC.md) — Web runtime profile and initialization.
- [Web async](../WEB-ASYNC-DOC.md) — Async operations for web workloads.
- [Web HTTP](../WEB-HTTP-DOC.md) — Web-profile HTTP operations.
- [JSON](../WEB-JSON-DOC.md) — JSON parsing and serialization.
- [gRPC](../WEB-GRPC-DOC.md) — gRPC protocol operations.
- [QUIC](../WEB-QUIC-DOC.md) — QUIC transport operations.
- [Server-sent events](../WEB-SSE-DOC.md) — Server-sent event operations.
- [TLS](../WEB-TLS-DOC.md) — TLS protocol operations.
- [WebAssembly](../WEB-WASM-DOC.md) — WebAssembly integration.
- [WebSockets](../WEB-WS-DOC.md) — WebSocket protocol operations.

<a id="valorx"></a>

### ValorX

Higher-level extension modules built on the standard library.

- [Data frames](../VALORX-DATAFRAME-DOC.md) — Columnar data-frame operations.

## Suggested reading paths

- **New to the library:** Core → Built-ins → Typing → Iterators → Algorithms.
- **Building services:** Async → Networking → HTTP → Security → Web profile.
- **Data and compute:** Collections → Serialization → Linear algebra → Tensors → Data frames.
- **Systems work:** Layout → Memory → Memory algorithms → I/O → File systems.
