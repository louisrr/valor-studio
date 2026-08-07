# Using Invariants

Valor contracts describe facts that must remain true. Use `invariant` for type
and loop predicates, `requires` for a function's caller obligations, and
`ensures` for facts the function establishes before returning.

## Type invariants

A type invariant is a comma-separated set of Boolean predicates over `self`.
The predicates apply at observable boundaries of the value, including after
construction and mutation.

```valor
module app;

public struct BoundedBuffer {
    usize length;
    usize capacity;

    invariant {
        self.length <= self.capacity,
        self.capacity > 0
    }
}
```

Contract predicates must be pure: they may read values and call `@pure`
functions, but they cannot mutate state, allocate, or perform I/O.

## Function contracts

Put `requires` and `ensures` between the function signature and body. The caller
must satisfy `requires`; the function must satisfy `ensures` on every return.
Inside `ensures`, `return` is the returned value and `old(expression)` is the
expression's value at function entry.

```valor
@pure public bool has_room(usize length, usize capacity) {
    return length < capacity;
}

public usize append_length(usize length, usize capacity)
    requires { has_room(length, capacity) }
    ensures { return == old(length) + 1 }
{
    return length + 1;
}
```

## Loop invariants

A loop invariant states what must hold before the loop and after each
iteration. Keep it strong enough to prove the loop's safety, but simple enough
for the verifier to evaluate deterministically.

```valor
public usize count_to(usize limit) {
    usize current = 0;

    while (current < limit)
        invariant { current <= limit }
    {
        current = current + 1;
    }

    return current;
}
```

## Reusable invariant declarations

A named invariant is a reusable constraint set. A class or service absorbs it
with `inherits`:

```valor
public invariant bounded_work {
    worst_case_tokens <= 2000;
    dispatch == constant_time;
    allocation == bounded;
}

public service worker inherits bounded_work {
}
```

Named invariant inheritance is implemented in the parser and reference
verification model; some semantic enforcement and lowering paths remain
**staged**. Type, function, and loop contracts use the contract verifier's
canonical obligation ordering.

## Check and build

Save the code in a `.valor` file, then run the normal compiler checks:

```bash
valorc check-snippet "$(< contracts.valor)" --tier sema --kind module
valorc build contracts.valor --out contracts
```

When a predicate is proven, its runtime check can be erased. Unknown predicates
are retained as checks in checked/debug verification or rejected by the
fail-closed release verification profile; a refuted predicate is an error.

For the formal model and complete predicate restrictions, see
**[Contracts v0.1](../docs/Contracts_v0_1.md)**. Continue with
**[Building services](services.md)** to use contracts alongside a service.
