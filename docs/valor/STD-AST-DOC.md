<!-- stdlib-reference-style: modern -->
> # `std::ast`

`std::ast` aST data and traversal helpers.

[Standard library](standard-library/README.md) / [Foundations](standard-library/README.md#foundations) / **Abstract syntax tree**

> **Source:** `stdlib/std/ast.valor` · **Routines:** 97 public

## Routines

<details>
<summary>Browse all 97 routines</summary>

- [`ast_min_usize`](#fn-ast-min-usize)
- [`ast_max_usize`](#fn-ast-max-usize)
- [`ast_min_u32`](#fn-ast-min-u32)
- [`ast_max_u32`](#fn-ast-max-u32)
- [`ast_mod_usize`](#fn-ast-mod-usize)
- [`ast_ceil_div`](#fn-ast-ceil-div)
- [`ast_range_end`](#fn-ast-range-end)
- [`ast_is_space`](#fn-ast-is-space)
- [`ast_is_newline`](#fn-ast-is-newline)
- [`ast_is_digit`](#fn-ast-is-digit)
- [`ast_is_hex_digit`](#fn-ast-is-hex-digit)
- [`ast_is_alpha`](#fn-ast-is-alpha)
- [`ast_is_ident_start`](#fn-ast-is-ident-start)
- [`ast_is_ident_continue`](#fn-ast-is-ident-continue)
- [`validate_utf8`](#fn-validate-utf8)
- [`build_line_index`](#fn-build-line-index)
- [`line_of_offset`](#fn-line-of-offset)
- [`column_of_offset`](#fn-column-of-offset)
- [`lex_scan_identifier`](#fn-lex-scan-identifier)
- [`lex_scan_number`](#fn-lex-scan-number)
- [`range_contains_dot`](#fn-range-contains-dot)
- [`lex_scan_string`](#fn-lex-scan-string)
- [`lex_scan_space`](#fn-lex-scan-space)
- [`lex_scan_line_comment`](#fn-lex-scan-line-comment)
- [`lex_tokens`](#fn-lex-tokens)
- [`ast_is_operator_byte`](#fn-ast-is-operator-byte)
- [`token_is_trivia`](#fn-token-is-trivia)
- [`is_complete_fragment`](#fn-is-complete-fragment)
- [`next_significant_token`](#fn-next-significant-token)
- [`previous_significant_token`](#fn-previous-significant-token)
- [`token_at_offset`](#fn-token-at-offset)
- [`decoded_string_length`](#fn-decoded-string-length)
- [`integer_literal_value`](#fn-integer-literal-value)
- [`node_root`](#fn-node-root)
- [`node_last_child`](#fn-node-last-child)
- [`node_child_count`](#fn-node-child-count)
- [`node_child_at`](#fn-node-child-at)
- [`node_children`](#fn-node-children)
- [`node_depth`](#fn-node-depth)
- [`node_ancestors`](#fn-node-ancestors)
- [`lowest_common_ancestor`](#fn-lowest-common-ancestor)
- [`node_covering_range`](#fn-node-covering-range)
- [`visit_preorder`](#fn-visit-preorder)
- [`visit_postorder`](#fn-visit-postorder)
- [`fold_preorder_i64`](#fn-fold-preorder-i64)
- [`subtree_node_count`](#fn-subtree-node-count)
- [`count_by_kind`](#fn-count-by-kind)
- [`find_first_by_kind`](#fn-find-first-by-kind)
- [`find_by_kind`](#fn-find-by-kind)
- [`contains_errors`](#fn-contains-errors)
- [`source_equals`](#fn-source-equals)
- [`structural_equals`](#fn-structural-equals)
- [`collect_declarations`](#fn-collect-declarations)
- [`kind_is_privileged`](#fn-kind-is-privileged)
- [`kind_is_control_flow`](#fn-kind-is-control-flow)
- [`complexity_metrics`](#fn-complexity-metrics)
- [`as_node_kind`](#fn-as-node-kind)
- [`as_function_declaration`](#fn-as-function-declaration)
- [`as_call_expression`](#fn-as-call-expression)
- [`as_import_declaration`](#fn-as-import-declaration)
- [`as_binary_expression`](#fn-as-binary-expression)
- [`first_child_of_kind`](#fn-first-child-of-kind)
- [`function_name_token`](#fn-function-name-token)
- [`function_return_type`](#fn-function-return-type)
- [`function_body`](#fn-function-body)
- [`function_parameters`](#fn-function-parameters)
- [`call_callee`](#fn-call-callee)
- [`pattern_matches`](#fn-pattern-matches)
- [`match_all`](#fn-match-all)
- [`node_policy_status`](#fn-node-policy-status)
- [`inspect_policy_violations`](#fn-inspect-policy-violations)
- [`sanitize_decision`](#fn-sanitize-decision)
- [`profile_allows_kind`](#fn-profile-allows-kind)
- [`edit_less`](#fn-edit-less)
- [`seal_edits`](#fn-seal-edits)
- [`validate_non_overlapping`](#fn-validate-non-overlapping)
- [`apply_edits`](#fn-apply-edits)
- [`map_offset_through_edits`](#fn-map-offset-through-edits)
- [`ast_hash_byte`](#fn-ast-hash-byte)
- [`ast_hash_u32`](#fn-ast-hash-u32)
- [`ast_hash_combine`](#fn-ast-hash-combine)
- [`source_fingerprint`](#fn-source-fingerprint)
- [`subtree_fingerprint`](#fn-subtree-fingerprint)
- [`edit_script_fingerprint`](#fn-edit-script-fingerprint)
- [`serialize_header`](#fn-serialize-header)
- [`serialize_put_u32`](#fn-serialize-put-u32)
- [`serialize_put_u64`](#fn-serialize-put-u64)
- [`validate_header`](#fn-validate-header)
- [`validate_tree_ranges`](#fn-validate-tree-ranges)
- [`diagnostic_fingerprint`](#fn-diagnostic-fingerprint)
- [`line_column`](#fn-line-column)
- [`line_text_range`](#fn-line-text-range)
- [`edition_is_supported`](#fn-edition-is-supported)
- [`parse_options_are_valid`](#fn-parse-options-are-valid)
- [`traversal_order_is_valid`](#fn-traversal-order-is-valid)
- [`rewrite_mode_is_valid`](#fn-rewrite-mode-is-valid)
- [`parse_preflight`](#fn-parse-preflight)

</details>

## API reference

<a id="fn-ast-min-usize"></a>

> ## `ast_min_usize`

> Provides the module's **ast min usize** operation. Returns `usize`.

```valor
public usize ast_min_usize(usize a, usize b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: usize (by value)
> - `b`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::ast_min_usize(a, b);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)
> - [`std::ast::ast_max_u32`](#fn-ast-max-u32)

<a id="fn-ast-max-usize"></a>

> ## `ast_max_usize`

> Provides the module's **ast max usize** operation. Returns `usize`.

```valor
public usize ast_max_usize(usize a, usize b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: usize (by value)
> - `b`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::ast_max_usize(a, b);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)
> - [`std::ast::ast_max_u32`](#fn-ast-max-u32)

<a id="fn-ast-min-u32"></a>

> ## `ast_min_u32`

> Provides the module's **ast min u32** operation. Returns `u32`.

```valor
public u32 ast_min_u32(u32 a, u32 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: u32 (by value)
> - `b`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::ast::ast_min_u32(a, b);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_max_u32`](#fn-ast-max-u32)

<a id="fn-ast-max-u32"></a>

> ## `ast_max_u32`

> Provides the module's **ast max u32** operation. Returns `u32`.

```valor
public u32 ast_max_u32(u32 a, u32 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: u32 (by value)
> - `b`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::ast::ast_max_u32(a, b);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-ast-mod-usize"></a>

> ## `ast_mod_usize`

> Truncating-division modulo (Valor has no % operator).

```valor
public usize ast_mod_usize(usize a, usize b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: usize (by value)
> - `b`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::ast_mod_usize(a, b);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-ast-ceil-div"></a>

> ## `ast_ceil_div`

> Ceil(a / b) with b > 0 assumed by the caller.

```valor
public usize ast_ceil_div(usize a, usize b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: usize (by value)
> - `b`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::ast_ceil_div(a, b);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-ast-range-end"></a>

> ## `ast_range_end`

> End offset of a half-open range, computed in usize to avoid u32 overflow.

```valor
public usize ast_range_end(u32 start, u32 length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: u32 (by value)
> - `length`: u32 (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::ast_range_end(start, length);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-ast-is-space"></a>

> ## `ast_is_space`

> Byte classification (ASCII). Byte classification (ASCII).  All comparisons are on plain integer codes.

```valor
public bool ast_is_space(u8 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `b`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::ast::ast_is_space(b);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-ast-is-newline"></a>

> ## `ast_is_newline`

> Provides the module's **ast is newline** operation. Returns `bool`.

```valor
public bool ast_is_newline(u8 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `b`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::ast::ast_is_newline(b);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-ast-is-digit"></a>

> ## `ast_is_digit`

> Provides the module's **ast is digit** operation. Returns `bool`.

```valor
public bool ast_is_digit(u8 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `b`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::ast::ast_is_digit(b);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-ast-is-hex-digit"></a>

> ## `ast_is_hex_digit`

> Provides the module's **ast is hex digit** operation. Returns `bool`.

```valor
public bool ast_is_hex_digit(u8 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `b`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::ast::ast_is_hex_digit(b);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-ast-is-alpha"></a>

> ## `ast_is_alpha`

> Provides the module's **ast is alpha** operation. Returns `bool`.

```valor
public bool ast_is_alpha(u8 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `b`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::ast::ast_is_alpha(b);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-ast-is-ident-start"></a>

> ## `ast_is_ident_start`

> Provides the module's **ast is ident start** operation. Returns `bool`.

```valor
public bool ast_is_ident_start(u8 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `b`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::ast::ast_is_ident_start(b);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-ast-is-ident-continue"></a>

> ## `ast_is_ident_continue`

> Provides the module's **ast is ident continue** operation. Returns `bool`.

```valor
public bool ast_is_ident_continue(u8 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `b`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::ast::ast_is_ident_continue(b);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-validate-utf8"></a>

> ## `validate_utf8`

> Validate a byte span as UTF-8. Validate a byte span as UTF-8.  Returns OK or AST_PARSE_INVALID_UTF8.  The scalar reference below is what any SIMD acceleration must refine to.

```valor
public i32 validate_utf8(usize source_len, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `source_len`: usize (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ast::validate_utf8(source_len, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-build-line-index"></a>

> ## `build_line_index`

> Build a line-start index: line 0 begins at offset 0, and each LF opens the next line at the following byte. Build a line-start index: line 0 begins at offset 0, and each LF opens the next line at the following byte.  Writes line starts through write_line_start and returns the line count.  Deterministic and locale-independent.

```valor
public usize build_line_index(usize source_len, (usize) -> u8 read_byte, (usize, u32) -> void write_line_start)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `source_len`: usize (by value)
> - `usize`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `write_line_start`: u32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::build_line_index(source_len, usize, write_line_start);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-line-of-offset"></a>

> ## `line_of_offset`

> Map an absolute offset to a 1-based line number via binary search over a caller line-start array of `line_count` entries (from build_line_index). Map an absolute offset to a 1-based line number via binary search over a caller line-start array of `line_count` entries (from build_line_index).

```valor
public usize line_of_offset(u32 offset, usize line_count, (usize) -> u32 read_line_start)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: u32 (by value)
> - `line_count`: usize (by value)
> - `read_line_start`: (usize) -> u32 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::line_of_offset(offset, line_count, read_line_start);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-column-of-offset"></a>

> ## `column_of_offset`

> Column (1-based, in bytes) of an offset given its line start.

```valor
public u32 column_of_offset(u32 offset, u32 line_start)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: u32 (by value)
> - `line_start`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::ast::column_of_offset(offset, line_start);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-lex-scan-identifier"></a>

> ## `lex_scan_identifier`

> Scan a run of identifier bytes starting at `start`; returns the end offset.

```valor
public usize lex_scan_identifier(usize start, usize source_len, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `source_len`: usize (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::lex_scan_identifier(start, source_len, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-lex-scan-number"></a>

> ## `lex_scan_number`

> Scan a numeric literal (integer or simple float with a single '.'). Scan a numeric literal (integer or simple float with a single '.').  Returns the end offset.  Whether the literal is a float is determined separately by range_contains_dot (no captured state, so no closure is required).

```valor
public usize lex_scan_number(usize start, usize source_len, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `source_len`: usize (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::lex_scan_number(start, source_len, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-range-contains-dot"></a>

> ## `range_contains_dot`

> Whether the byte range [start, end) contains a '.' (float discriminator).

```valor
public bool range_contains_dot(usize start, usize end, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `end`: usize (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::ast::range_contains_dot(start, end, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-lex-scan-string"></a>

> ## `lex_scan_string`

> Scan a double-quoted string literal starting at the opening quote. Scan a double-quoted string literal starting at the opening quote.  Handles backslash escapes without decoding them.  Returns the offset just past the closing quote (or end-of-source for an unterminated literal).

```valor
public usize lex_scan_string(usize start, usize source_len, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `source_len`: usize (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::lex_scan_string(start, source_len, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-lex-scan-space"></a>

> ## `lex_scan_space`

> Scan a run of horizontal whitespace (not newlines); returns the end offset.

```valor
public usize lex_scan_space(usize start, usize source_len, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `source_len`: usize (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::lex_scan_space(start, source_len, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-lex-scan-line-comment"></a>

> ## `lex_scan_line_comment`

> Scan a line comment ("//" ... Scan a line comment ("//" ... newline); returns the offset of the newline or end-of-source.  Caller has already checked the "//" prefix.

```valor
public usize lex_scan_line_comment(usize start, usize source_len, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: usize (by value)
> - `source_len`: usize (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::lex_scan_line_comment(start, source_len, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-lex-tokens"></a>

> ## `lex_tokens`

> The full tokenizer. The full tokenizer.  Emits every token (including trivia so the stream is lossless); the caller may drop trivia per ParseOptions.trivia.  `classify_kw` receives an identifier byte range and returns true for reserved words.

```valor
public i32 lex_tokens( usize source_len, (usize) -> u8 read_byte, usize max_tokens, (usize, usize) -> bool classify_kw, // (start, len) -> is keyword (u16, u32, u32) -> void emit_token)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `source_len`: usize (by value)
> - `usize`: (usize) -> u8 read_byte, usize max_tokens, ( (borrowed fn-ptr (callback))
> - `emit_token`: usize) -> bool classify_kw, // (start, len) -> is keyword (u16, u32, u32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ast::lex_tokens(source_len, usize, emit_token);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-ast-is-operator-byte"></a>

> ## `ast_is_operator_byte`

> Single-byte operator classification (multi-byte operators lex as adjacent single operator tokens; a grammar layer can fuse them). Single-byte operator classification (multi-byte operators lex as adjacent single operator tokens; a grammar layer can fuse them).

```valor
public bool ast_is_operator_byte(u8 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `b`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::ast::ast_is_operator_byte(b);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-token-is-trivia"></a>

> ## `token_is_trivia`

> Whether a token kind is trivia (whitespace / newline / comment).

```valor
public bool token_is_trivia(u16 kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u16 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::ast::token_is_trivia(kind);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-is-complete-fragment"></a>

> ## `is_complete_fragment`

> Whether a fragment is bracket-balanced (a syntactic completeness heuristic for REPL / editor use). Whether a fragment is bracket-balanced (a syntactic completeness heuristic for REPL / editor use).  Counts (), [], {} depth; ignores strings/comments for simplicity of the pure-syntax check.

```valor
public bool is_complete_fragment(usize source_len, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `source_len`: usize (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::ast::is_complete_fragment(source_len, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-next-significant-token"></a>

> ## `next_significant_token`

> Index of the next non-trivia token at or after `from` (NO_INDEX if none).

```valor
public usize next_significant_token(usize from, usize token_count, (usize) -> u16 tok_kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `from`: usize (by value)
> - `token_count`: usize (by value)
> - `tok_kind`: (usize) -> u16 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::next_significant_token(from, token_count, tok_kind);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-previous-significant-token"></a>

> ## `previous_significant_token`

> Index of the previous non-trivia token at or before `from` (NO_INDEX if none).

```valor
public usize previous_significant_token(usize from, usize token_count, (usize) -> u16 tok_kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `from`: usize (by value)
> - `token_count`: usize (by value)
> - `tok_kind`: (usize) -> u16 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::previous_significant_token(from, token_count, tok_kind);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-token-at-offset"></a>

> ## `token_at_offset`

> Token index covering an absolute offset via binary search on token starts. Token index covering an absolute offset via binary search on token starts. Assumes tokens are non-overlapping and sorted (the lexer guarantees this).

```valor
public usize token_at_offset(u32 offset, usize token_count, (usize) -> u32 tok_start, (usize) -> u32 tok_len)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: u32 (by value)
> - `token_count`: usize (by value)
> - `tok_len`: (usize) -> u32 tok_start, (usize) -> u32 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::token_at_offset(offset, token_count, tok_len);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-decoded-string-length"></a>

> ## `decoded_string_length`

> Decoded length of a string literal token, counting each escape as one byte. Decoded length of a string literal token, counting each escape as one byte. Delivers the count via receive; returns true when the text has no escapes (in which case the caller may borrow the interior range directly, zero-copy).

```valor
public bool decoded_string_length(u32 start, u32 length, (usize) -> u8 read_byte, (usize) -> void receive_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: u32 (by value)
> - `length`: u32 (by value)
> - `receive_length`: (usize) -> u8 read_byte, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::ast::decoded_string_length(start, length, receive_length);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-integer-literal-value"></a>

> ## `integer_literal_value`

> Parse a decimal integer literal (ignoring '_' separators) into a u64. Parse a decimal integer literal (ignoring '_' separators) into a u64. Returns AST_PARSE_SIZE_LIMIT on overflow past u64, otherwise OK; the value is delivered through receive_value.  Overflow-checked before it can trap.

```valor
public i32 integer_literal_value(u32 start, u32 length, (usize) -> u8 read_byte, (u64) -> void receive_value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `start`: u32 (by value)
> - `length`: u32 (by value)
> - `receive_value`: (usize) -> u8 read_byte, (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ast::integer_literal_value(start, length, receive_value);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-node-root"></a>

> ## `node_root`

> Provides the module's **node root** operation. Returns `usize`.

```valor
public usize node_root(usize node, (usize) -> usize node_parent)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `node_parent`: (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::node_root(node, node_parent);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-node-last-child"></a>

> ## `node_last_child`

> Provides the module's **node last child** operation. Returns `usize`.

```valor
public usize node_last_child(usize node, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `node_next_sibling`: (usize) -> usize node_first_child, (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::node_last_child(node, node_next_sibling);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-node-child-count"></a>

> ## `node_child_count`

> Provides the module's **node child count** operation. Returns `usize`.

```valor
public usize node_child_count(usize node, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `node_next_sibling`: (usize) -> usize node_first_child, (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::node_child_count(node, node_next_sibling);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-node-child-at"></a>

> ## `node_child_at`

> The nth child (0-based) or NO_INDEX if out of range.

```valor
public usize node_child_at(usize node, usize n, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `n`: usize (by value)
> - `node_next_sibling`: (usize) -> usize node_first_child, (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::node_child_at(node, n, node_next_sibling);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-node-children"></a>

> ## `node_children`

> Visit each direct child in source order.

```valor
public i32 node_children(usize node, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> void visit_child)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `visit_child`: (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ast::node_children(node, visit_child);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-node-depth"></a>

> ## `node_depth`

> Depth of a node (root has depth 0).

```valor
public usize node_depth(usize node, (usize) -> usize node_parent)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `node_parent`: (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::node_depth(node, node_parent);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-node-ancestors"></a>

> ## `node_ancestors`

> Visit each ancestor from the immediate parent up to the root.

```valor
public i32 node_ancestors(usize node, (usize) -> usize node_parent, (usize) -> void visit_ancestor)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `visit_ancestor`: (usize) -> usize node_parent, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ast::node_ancestors(node, visit_ancestor);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-lowest-common-ancestor"></a>

> ## `lowest_common_ancestor`

> Lowest common ancestor of two nodes (NO_INDEX if they are in different trees).

```valor
public usize lowest_common_ancestor(usize a, usize b, (usize) -> usize node_parent)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: usize (by value)
> - `b`: usize (by value)
> - `node_parent`: (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::lowest_common_ancestor(a, b, node_parent);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-node-covering-range"></a>

> ## `node_covering_range`

> Deepest node whose range fully covers [start, start+length). Deepest node whose range fully covers [start, start+length).  Walks down from the given root, descending into the first child that contains the range.

```valor
public usize node_covering_range(usize root, u32 range_start, u32 range_length, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> u32 node_start, (usize) -> u32 node_len)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `root`: usize (by value)
> - `range_start`: u32 (by value)
> - `range_length`: u32 (by value)
> - `node_len`: (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> u32 node_start, (usize) -> u32 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::node_covering_range(root, range_start, range_length, node_len);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-visit-preorder"></a>

> ## `visit_preorder`

> Preorder / source-order traversal from `root`. Preorder / source-order traversal from `root`.  Pushes the node then descends left-to-right, so children are visited in source order.  Returns OK, or AST_PARSE_DEPTH_LIMIT if the stack capacity is exceeded.

```valor
public i32 visit_preorder(usize root, usize stack_cap, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> usize stack_get, (usize, usize) -> void stack_set, (usize) -> void visit_node)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `root`: usize (by value)
> - `stack_cap`: usize (by value)
> - `visit_node`: (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> usize stack_get, (usize, usize) -> void stack_set, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ast::visit_preorder(root, stack_cap, visit_node);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-visit-postorder"></a>

> ## `visit_postorder`

> Postorder traversal: children fully visited before their parent. Postorder traversal: children fully visited before their parent.  Uses a node frame stack plus a per-frame child cursor stack (no native recursion).

```valor
public i32 visit_postorder(usize root, usize stack_cap, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> usize frame_node_get, (usize, usize) -> void frame_node_set, (usize) -> usize frame_cursor_get, (usize, usize) -> void frame_cursor_set, (usize) -> void visit_node)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `root`: usize (by value)
> - `stack_cap`: usize (by value)
> - `visit_node`: (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> usize frame_node_get, (usize, usize) -> void frame_node_set, (usize) -> usize frame_cursor_get, (usize, usize) -> void frame_cursor_set, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ast::visit_postorder(root, stack_cap, visit_node);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-fold-preorder-i64"></a>

> ## `fold_preorder_i64`

> Preorder fold: threads an i64 accumulator through folder(acc, node) in source order. Preorder fold: threads an i64 accumulator through folder(acc, node) in source order.  Delivers the final accumulator via receive_result; returns the traversal status.

```valor
public i32 fold_preorder_i64(usize root, usize stack_cap, i64 initial, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> usize stack_get, (usize, usize) -> void stack_set, (i64, usize) -> i64 folder, (i64) -> void receive_result)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `root`: usize (by value)
> - `stack_cap`: usize (by value)
> - `initial`: i64 (by value)
> - `receive_result`: (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> usize stack_get, (usize, usize) -> void stack_set, (i64, usize) -> i64 folder, (i64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ast::fold_preorder_i64(root, stack_cap, initial, receive_result);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-subtree-node-count"></a>

> ## `subtree_node_count`

> Number of nodes in the subtree rooted at `node` (inclusive), via child walk.

```valor
public usize subtree_node_count(usize node, usize stack_cap, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> usize stack_get, (usize, usize) -> void stack_set)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `stack_cap`: usize (by value)
> - `stack_set`: (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> usize stack_get, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::subtree_node_count(node, stack_cap, stack_set);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-count-by-kind"></a>

> ## `count_by_kind`

> Count nodes of a given kind in a subtree (KIND_ANY counts every node).

```valor
public usize count_by_kind(usize root, u16 want_kind, usize stack_cap, (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> usize stack_get, (usize, usize) -> void stack_set)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `root`: usize (by value)
> - `want_kind`: u16 (by value)
> - `stack_cap`: usize (by value)
> - `stack_set`: (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> usize stack_get, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::count_by_kind(root, want_kind, stack_cap, stack_set);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-find-first-by-kind"></a>

> ## `find_first_by_kind`

> First node of a given kind in source order (NO_INDEX if none).

```valor
public usize find_first_by_kind(usize root, u16 want_kind, usize stack_cap, (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> usize stack_get, (usize, usize) -> void stack_set)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `root`: usize (by value)
> - `want_kind`: u16 (by value)
> - `stack_cap`: usize (by value)
> - `stack_set`: (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> usize stack_get, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::find_first_by_kind(root, want_kind, stack_cap, stack_set);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-find-by-kind"></a>

> ## `find_by_kind`

> Visit every node of a given kind in source order (KIND_ANY visits all).

```valor
public i32 find_by_kind(usize root, u16 want_kind, usize stack_cap, (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> usize stack_get, (usize, usize) -> void stack_set, (usize) -> void receive_node)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `root`: usize (by value)
> - `want_kind`: u16 (by value)
> - `stack_cap`: usize (by value)
> - `receive_node`: (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> usize stack_get, (usize, usize) -> void stack_set, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ast::find_by_kind(root, want_kind, stack_cap, receive_node);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-contains-errors"></a>

> ## `contains_errors`

> Whether a subtree contains any error or recovery-marker node.

```valor
public bool contains_errors(usize root, usize stack_cap, (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> usize stack_get, (usize, usize) -> void stack_set)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `root`: usize (by value)
> - `stack_cap`: usize (by value)
> - `stack_set`: (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> usize stack_get, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::ast::contains_errors(root, stack_cap, stack_set);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-source-equals"></a>

> ## `source_equals`

> Byte-equality of two source ranges (spec: sourceEquals). Byte-equality of two source ranges (spec: sourceEquals).  Zero-copy compare.

```valor
public bool source_equals(u32 a_start, u32 a_len, u32 b_start, u32 b_len, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a_start`: u32 (by value)
> - `a_len`: u32 (by value)
> - `b_start`: u32 (by value)
> - `b_len`: u32 (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::ast::source_equals(a_start, a_len, b_start, b_len, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-structural-equals"></a>

> ## `structural_equals`

> Structural equality of two subtrees (spec: structuralEquals): same kinds and same child structure, ignoring absolute offsets. Structural equality of two subtrees (spec: structuralEquals): same kinds and same child structure, ignoring absolute offsets.  Uses two parallel stacks.

```valor
public bool structural_equals(usize a, usize b, usize stack_cap, (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> usize stack_a_get, (usize, usize) -> void stack_a_set, (usize) -> usize stack_b_get, (usize, usize) -> void stack_b_set)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: usize (by value)
> - `b`: usize (by value)
> - `stack_cap`: usize (by value)
> - `stack_b_set`: (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> usize stack_a_get, (usize, usize) -> void stack_a_set, (usize) -> usize stack_b_get, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::ast::structural_equals(a, b, stack_cap, stack_b_set);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-collect-declarations"></a>

> ## `collect_declarations`

> Provides the module's **collect declarations** operation. Returns `i32`.

```valor
public i32 collect_declarations(usize root, usize stack_cap, (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> usize stack_get, (usize, usize) -> void stack_set, (usize) -> void receive_node)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `root`: usize (by value)
> - `stack_cap`: usize (by value)
> - `receive_node`: (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> usize stack_get, (usize, usize) -> void stack_set, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ast::collect_declarations(root, stack_cap, receive_node);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-kind-is-privileged"></a>

> ## `kind_is_privileged`

> Whether a node kind requests privileged / unsafe / foreign capability. Whether a node kind requests privileged / unsafe / foreign capability.  Used by capability inspection and the sanitizer's fail-closed default.

```valor
public bool kind_is_privileged(u16 kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u16 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::ast::kind_is_privileged(kind);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-kind-is-control-flow"></a>

> ## `kind_is_control_flow`

> Whether a node kind is a syntactic control-flow form.

```valor
public bool kind_is_control_flow(u16 kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u16 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::ast::kind_is_control_flow(kind);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-complexity-metrics"></a>

> ## `complexity_metrics`

> Complexity metrics (spec: complexityMetrics). Complexity metrics (spec: complexityMetrics).  A single traversal accumulates node count, max nesting depth, branch count, and declaration count, delivered through receive_metrics.  Cyclomatic approximation = branch_count + 1.

```valor
public i32 complexity_metrics(usize root, usize stack_cap, (usize) -> u16 node_kind, (usize) -> usize node_parent, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> usize stack_get, (usize, usize) -> void stack_set, (usize, usize, usize, usize) -> void receive_metrics)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `root`: usize (by value)
> - `stack_cap`: usize (by value)
> - `receive_metrics`: (usize) -> u16 node_kind, (usize) -> usize node_parent, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> usize stack_get, (usize, usize) -> void stack_set, (usize, usize, usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ast::complexity_metrics(root, stack_cap, receive_metrics);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-as-node-kind"></a>

> ## `as_node_kind`

> Validate that `node` has the expected kind before a typed view is built.

```valor
public i32 as_node_kind(usize node, u16 expected, (usize) -> u16 node_kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `expected`: u16 (by value)
> - `node_kind`: (usize) -> u16 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ast::as_node_kind(node, expected, node_kind);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-as-function-declaration"></a>

> ## `as_function_declaration`

> Provides the module's **as function declaration** operation. Returns `i32`.

```valor
public i32 as_function_declaration(usize node, (usize) -> u16 node_kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `node_kind`: (usize) -> u16 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ast::as_function_declaration(node, node_kind);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-as-call-expression"></a>

> ## `as_call_expression`

> Provides the module's **as call expression** operation. Returns `i32`.

```valor
public i32 as_call_expression(usize node, (usize) -> u16 node_kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `node_kind`: (usize) -> u16 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ast::as_call_expression(node, node_kind);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-as-import-declaration"></a>

> ## `as_import_declaration`

> Provides the module's **as import declaration** operation. Returns `i32`.

```valor
public i32 as_import_declaration(usize node, (usize) -> u16 node_kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `node_kind`: (usize) -> u16 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ast::as_import_declaration(node, node_kind);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-as-binary-expression"></a>

> ## `as_binary_expression`

> Provides the module's **as binary expression** operation. Returns `i32`.

```valor
public i32 as_binary_expression(usize node, (usize) -> u16 node_kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `node_kind`: (usize) -> u16 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ast::as_binary_expression(node, node_kind);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-first-child-of-kind"></a>

> ## `first_child_of_kind`

> First child of a given kind (NO_INDEX if absent) -- the accessor primitive underneath the typed field readers below. First child of a given kind (NO_INDEX if absent) -- the accessor primitive underneath the typed field readers below.

```valor
public usize first_child_of_kind(usize node, u16 want_kind, (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `want_kind`: u16 (by value)
> - `node_next_sibling`: (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::first_child_of_kind(node, want_kind, node_next_sibling);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-function-name-token"></a>

> ## `function_name_token`

> Typed field readers for a function declaration. Typed field readers for a function declaration.  Return NO_INDEX when the optional child is absent (return type / body may be missing on a stub).

```valor
public usize function_name_token(usize node, (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `node_next_sibling`: (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::function_name_token(node, node_next_sibling);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-function-return-type"></a>

> ## `function_return_type`

> Provides the module's **function return type** operation. Returns `usize`.

```valor
public usize function_return_type(usize node, (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `node_next_sibling`: (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::function_return_type(node, node_next_sibling);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-function-body"></a>

> ## `function_body`

> Provides the module's **function body** operation. Returns `usize`.

```valor
public usize function_body(usize node, (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `node_next_sibling`: (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::function_body(node, node_next_sibling);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-function-parameters"></a>

> ## `function_parameters`

> Visit each parameter node of a function declaration in source order.

```valor
public i32 function_parameters(usize node, (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> void visit_param)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `visit_param`: (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ast::function_parameters(node, visit_param);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-call-callee"></a>

> ## `call_callee`

> The callee identifier of a call expression (NO_INDEX if not found).

```valor
public usize call_callee(usize node, (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `node_next_sibling`: (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::call_callee(node, node_next_sibling);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-pattern-matches"></a>

> ## `pattern_matches`

> Whether the subtree at `node` matches the pattern subtree at `pat`.

```valor
public bool pattern_matches(usize node, usize pat, usize stack_cap, (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> u16 pat_kind, (usize) -> usize pat_first_child, (usize) -> usize pat_next_sibling, (usize) -> usize stack_n_get, (usize, usize) -> void stack_n_set, (usize) -> usize stack_p_get, (usize, usize) -> void stack_p_set)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `pat`: usize (by value)
> - `stack_cap`: usize (by value)
> - `stack_p_set`: (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> u16 pat_kind, (usize) -> usize pat_first_child, (usize) -> usize pat_next_sibling, (usize) -> usize stack_n_get, (usize, usize) -> void stack_n_set, (usize) -> usize stack_p_get, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::ast::pattern_matches(node, pat, stack_cap, stack_p_set);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-match-all"></a>

> ## `match_all`

> Visit every node in the subtree whose subtree matches the pattern. Visit every node in the subtree whose subtree matches the pattern.  Reports match roots through receive_match in source order.

```valor
public i32 match_all(usize root, usize pat, usize walk_cap, usize match_cap, (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> u16 pat_kind, (usize) -> usize pat_first_child, (usize) -> usize pat_next_sibling, (usize) -> usize walk_get, (usize, usize) -> void walk_set, (usize) -> usize m_n_get, (usize, usize) -> void m_n_set, (usize) -> usize m_p_get, (usize, usize) -> void m_p_set, (usize) -> void receive_match)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `root`: usize (by value)
> - `pat`: usize (by value)
> - `walk_cap`: usize (by value)
> - `match_cap`: usize (by value)
> - `receive_match`: (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> u16 pat_kind, (usize) -> usize pat_first_child, (usize) -> usize pat_next_sibling, (usize) -> usize walk_get, (usize, usize) -> void walk_set, (usize) -> usize m_n_get, (usize, usize) -> void m_n_set, (usize) -> usize m_p_get, (usize, usize) -> void m_p_set, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ast::match_all(root, pat, walk_cap, match_cap, receive_match);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-node-policy-status"></a>

> ## `node_policy_status`

> A single-node policy check: returns OK or the first violation code.

```valor
public i32 node_policy_status(usize node, (usize) -> u16 node_kind, (u16) -> bool kind_allowed, (u16) -> bool kind_rejected, (u16) -> bool capability_allowed, u8 unknown_mode)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node`: usize (by value)
> - `unknown_mode`: (usize) -> u16 node_kind, (u16) -> bool kind_allowed, (u16) -> bool kind_rejected, (u16) -> bool capability_allowed, u8 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ast::node_policy_status(node, unknown_mode);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-inspect-policy-violations"></a>

> ## `inspect_policy_violations`

> Inspect a subtree against a policy, reporting each violating node and its code through receive_violation. Inspect a subtree against a policy, reporting each violating node and its code through receive_violation.  Returns the number of violations found.

```valor
public usize inspect_policy_violations(usize root, usize stack_cap, (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> usize stack_get, (usize, usize) -> void stack_set, (u16) -> bool kind_allowed, (u16) -> bool kind_rejected, (u16) -> bool capability_allowed, u8 unknown_mode, (usize, i32) -> void receive_violation)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `root`: usize (by value)
> - `stack_cap`: usize (by value)
> - `receive_violation`: (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> usize stack_get, (usize, usize) -> void stack_set, (u16) -> bool kind_allowed, (u16) -> bool kind_rejected, (u16) -> bool capability_allowed, u8 unknown_mode, (usize, i32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::inspect_policy_violations(root, stack_cap, receive_violation);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-sanitize-decision"></a>

> ## `sanitize_decision`

> Whole-tree sanitize decision. Whole-tree sanitize decision.  Fail-closed: returns the first violation code (or a complexity code) and OK only when the tree fully satisfies the policy within the complexity budget.  Node/branch/decl/depth counts come from the caller (typically via complexity_metrics), keeping this a pure decision.

```valor
public i32 sanitize_decision(usize root, usize stack_cap, (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> usize stack_get, (usize, usize) -> void stack_set, (u16) -> bool kind_allowed, (u16) -> bool kind_rejected, (u16) -> bool capability_allowed, u8 unknown_mode, usize node_total, usize max_depth, usize branch_total, usize decl_total, usize limit_nodes, usize limit_depth, usize limit_branches, usize limit_decls)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `root`: usize (by value)
> - `stack_cap`: usize (by value)
> - `limit_decls`: (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> usize stack_get, (usize, usize) -> void stack_set, (u16) -> bool kind_allowed, (u16) -> bool kind_rejected, (u16) -> bool capability_allowed, u8 unknown_mode, usize node_total, usize max_depth, usize branch_total, usize decl_total, usize limit_nodes, usize limit_depth, usize limit_branches, usize (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ast::sanitize_decision(root, stack_cap, limit_decls);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-profile-allows-kind"></a>

> ## `profile_allows_kind`

> Baseline profile membership: whether a kind is allowed under a named profile (spec section 10.3). Baseline profile membership: whether a kind is allowed under a named profile (spec section 10.3).  Fail-closed -- unknown kinds are not allowed here.

```valor
public bool profile_allows_kind(u8 profile, u16 kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `profile`: u8 (by value)
> - `kind`: u16 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::ast::profile_allows_kind(profile, kind);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-edit-less"></a>

> ## `edit_less`

> Comparison for canonical edit ordering. Comparison for canonical edit ordering.  Returns true if edit a should sort strictly before edit b.

```valor
public bool edit_less(usize a, usize b, (usize) -> u32 edit_start, (usize) -> u32 edit_len)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `a`: usize (by value)
> - `b`: usize (by value)
> - `edit_len`: (usize) -> u32 edit_start, (usize) -> u32 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::ast::edit_less(a, b, edit_len);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-seal-edits"></a>

> ## `seal_edits`

> Seal edits into canonical order. Seal edits into canonical order.  Fills the caller order array with a permutation of [0, edit_count) via insertion sort (stable, deterministic, in-place over the caller-owned order array).  Returns OK.

```valor
public i32 seal_edits(usize edit_count, (usize) -> u32 edit_start, (usize) -> u32 edit_len, (usize) -> usize order_get, (usize, usize) -> void order_set)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `edit_count`: usize (by value)
> - `order_set`: (usize) -> u32 edit_start, (usize) -> u32 edit_len, (usize) -> usize order_get, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ast::seal_edits(edit_count, order_set);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-validate-non-overlapping"></a>

> ## `validate_non_overlapping`

> Validate that sealed edits (in canonical order) do not overlap. Validate that sealed edits (in canonical order) do not overlap.  Adjacent (touching) ranges are permitted; genuinely overlapping ranges conflict.

```valor
public i32 validate_non_overlapping(usize edit_count, (usize) -> u32 edit_start, (usize) -> u32 edit_len, (usize) -> usize order_get)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `edit_count`: usize (by value)
> - `order_get`: (usize) -> u32 edit_start, (usize) -> u32 edit_len, (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ast::validate_non_overlapping(edit_count, order_get);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-apply-edits"></a>

> ## `apply_edits`

> Apply sealed, non-overlapping edits to a source span, writing the result through write_out. Apply sealed, non-overlapping edits to a source span, writing the result through write_out.  Returns the output length via receive_out_len, or AST_EDIT_CAPACITY if the output would exceed out_cap.  Single-pass, O(source + total replacement).

```valor
public i32 apply_edits(usize source_len, (usize) -> u8 read_byte, usize edit_count, (usize) -> u32 edit_start, (usize) -> u32 edit_len, (usize) -> u32 repl_start, (usize) -> u32 repl_len, (usize) -> u8 read_repl, (usize) -> usize order_get, usize out_cap, (usize, u8) -> void write_out, (usize) -> void receive_out_len)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `source_len`: usize (by value)
> - `receive_out_len`: (usize) -> u8 read_byte, usize edit_count, (usize) -> u32 edit_start, (usize) -> u32 edit_len, (usize) -> u32 repl_start, (usize) -> u32 repl_len, (usize) -> u8 read_repl, (usize) -> usize order_get, usize out_cap, (usize, u8) -> void write_out, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ast::apply_edits(source_len, receive_out_len);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-map-offset-through-edits"></a>

> ## `map_offset_through_edits`

> Map an offset in the original source to its offset in the edited source, given sealed edits in canonical order. Map an offset in the original source to its offset in the edited source, given sealed edits in canonical order.  Offsets inside a replaced range map to the start of that range's replacement (spec: mapRangeThroughEdits).

```valor
public u32 map_offset_through_edits(u32 offset, usize edit_count, (usize) -> u32 edit_start, (usize) -> u32 edit_len, (usize) -> u32 repl_len, (usize) -> usize order_get)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: u32 (by value)
> - `edit_count`: usize (by value)
> - `order_get`: (usize) -> u32 edit_start, (usize) -> u32 edit_len, (usize) -> u32 repl_len, (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::ast::map_offset_through_edits(offset, edit_count, order_get);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-ast-hash-byte"></a>

> ## `ast_hash_byte`

> Fold one byte into a 31-bit rolling hash. Fold one byte into a 31-bit rolling hash.  The multiply is done in u64 so the product (up to (2^31-1)*1000003 ~ 2.1e15) never overflows the 32-bit type and traps; the folded result is < AST_HASH_MOD < 2^31 and fits back into u32.

```valor
public u32 ast_hash_byte(u32 h, u8 b)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `h`: u32 (by value)
> - `b`: u8 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::ast::ast_hash_byte(h, b);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-ast-hash-u32"></a>

> ## `ast_hash_u32`

> Fold a u32 word into the hash, four bytes low-to-high (endian-defined).

```valor
public u32 ast_hash_u32(u32 h, u32 v)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `h`: u32 (by value)
> - `v`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::ast::ast_hash_u32(h, v);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-ast-hash-combine"></a>

> ## `ast_hash_combine`

> Combine two 31-bit lanes into a 62-bit fingerprint (< 2^63, never overflows).

```valor
public u64 ast_hash_combine(u32 hi, u32 lo)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `hi`: u32 (by value)
> - `lo`: u32 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::ast::ast_hash_combine(hi, lo);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-source-fingerprint"></a>

> ## `source_fingerprint`

> Fingerprint a source buffer: two independent lanes over the bytes plus the length, combined into a stable u64. Fingerprint a source buffer: two independent lanes over the bytes plus the length, combined into a stable u64.  Locale- and address-independent.

```valor
public u64 source_fingerprint(usize source_len, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `source_len`: usize (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::ast::source_fingerprint(source_len, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-subtree-fingerprint"></a>

> ## `subtree_fingerprint`

> Fingerprint a subtree by structure: fold each node's kind and child count in preorder (source order). Fingerprint a subtree by structure: fold each node's kind and child count in preorder (source order).  Independent of absolute offsets and addresses, so structurally-equal subtrees fingerprint identically (spec determinism rule).

```valor
public u64 subtree_fingerprint(usize root, usize stack_cap, (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> usize stack_get, (usize, usize) -> void stack_set)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `root`: usize (by value)
> - `stack_cap`: usize (by value)
> - `stack_set`: (usize) -> u16 node_kind, (usize) -> usize node_first_child, (usize) -> usize node_next_sibling, (usize) -> usize stack_get, (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::ast::subtree_fingerprint(root, stack_cap, stack_set);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-edit-script-fingerprint"></a>

> ## `edit_script_fingerprint`

> Fingerprint of an ordered edit script (spec: editScriptFingerprint).

```valor
public u64 edit_script_fingerprint(usize edit_count, (usize) -> u32 edit_start, (usize) -> u32 edit_len, (usize) -> u32 repl_len, (usize) -> usize order_get)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `edit_count`: usize (by value)
> - `order_get`: (usize) -> u32 edit_start, (usize) -> u32 edit_len, (usize) -> u32 repl_len, (usize) -> usize (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::ast::edit_script_fingerprint(edit_count, order_get);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-serialize-header"></a>

> ## `serialize_header`

> Write the canonical binary header (spec section 12) little-endian into a caller byte sink. Write the canonical binary header (spec section 12) little-endian into a caller byte sink.  Returns the number of bytes written (AST_HEADER_WORDS * 4 plus the two 64-bit hashes).  Pointer-free and version-stamped.

```valor
public usize serialize_header(u16 language_edition, u32 flags, u64 source_hash, u64 tree_hash, u32 node_count, u32 token_count, (usize, u8) -> void write_out)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `language_edition`: u16 (by value)
> - `flags`: u32 (by value)
> - `source_hash`: u64 (by value)
> - `tree_hash`: u64 (by value)
> - `node_count`: u32 (by value)
> - `token_count`: u32 (by value)
> - `write_out`: (usize, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::serialize_header(language_edition, flags, source_hash, tree_hash, node_count, token_count, write_out);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-serialize-put-u32"></a>

> ## `serialize_put_u32`

> Little-endian u32 writer; returns the advanced offset.

```valor
public usize serialize_put_u32(usize out, u32 v, (usize, u8) -> void write_out)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `out`: usize (by value)
> - `v`: u32 (by value)
> - `write_out`: (usize, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::serialize_put_u32(out, v, write_out);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-serialize-put-u64"></a>

> ## `serialize_put_u64`

> Little-endian u64 writer; returns the advanced offset.

```valor
public usize serialize_put_u64(usize out, u64 v, (usize, u8) -> void write_out)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `out`: usize (by value)
> - `v`: u64 (by value)
> - `write_out`: (usize, u8) -> void (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::ast::serialize_put_u64(out, v, write_out);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-validate-header"></a>

> ## `validate_header`

> Validate a serialized header before any public view is constructed (spec section 16 deserialization hardening). Validate a serialized header before any public view is constructed (spec section 16 deserialization hardening).  Returns OK / AST_SER_VERSION / AST_SER_CORRUPT.

```valor
public i32 validate_header(u32 magic, u16 format_version, u32 node_count, u32 token_count, u32 available_nodes, u32 available_tokens)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `magic`: u32 (by value)
> - `format_version`: u16 (by value)
> - `node_count`: u32 (by value)
> - `token_count`: u32 (by value)
> - `available_nodes`: u32 (by value)
> - `available_tokens`: u32 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ast::validate_header(magic, format_version, node_count, token_count, available_nodes, available_tokens);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-validate-tree-ranges"></a>

> ## `validate_tree_ranges`

> Validate that every node's range lies within the source and that each child range lies within its parent (except explicit recovery markers). Validate that every node's range lies within the source and that each child range lies within its parent (except explicit recovery markers).  This is the well-formedness gate from the formal verification plan (spec section 20).

```valor
public i32 validate_tree_ranges(usize node_count, u32 source_length, (usize) -> u16 node_kind, (usize) -> usize node_parent, (usize) -> u32 node_start, (usize) -> u32 node_len)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `node_count`: usize (by value)
> - `source_length`: u32 (by value)
> - `node_len`: (usize) -> u16 node_kind, (usize) -> usize node_parent, (usize) -> u32 node_start, (usize) -> u32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ast::validate_tree_ranges(node_count, source_length, node_len);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-diagnostic-fingerprint"></a>

> ## `diagnostic_fingerprint`

> Machine diagnostic identity fingerprint: code + severity + ranges + args, so stable consumers compare identities rather than localized strings. Machine diagnostic identity fingerprint: code + severity + ranges + args, so stable consumers compare identities rather than localized strings.

```valor
public u64 diagnostic_fingerprint(i32 code, u8 severity, u32 primary_start, u32 primary_length, u64 arg0, u64 arg1)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `code`: i32 (by value)
> - `severity`: u8 (by value)
> - `primary_start`: u32 (by value)
> - `primary_length`: u32 (by value)
> - `arg0`: u64 (by value)
> - `arg1`: u64 (by value)

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::ast::diagnostic_fingerprint(code, severity, primary_start, primary_length, arg0, arg1);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-line-column"></a>

> ## `line_column`

> Deliver 1-based (line, column) for an offset through receive_line_column, given a caller line-start index. Deliver 1-based (line, column) for an offset through receive_line_column, given a caller line-start index.

```valor
public i32 line_column(u32 offset, usize line_count, (usize) -> u32 read_line_start, (usize, u32) -> void receive_line_column)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: u32 (by value)
> - `line_count`: usize (by value)
> - `usize`: (usize) -> u32 read_line_start, ( (borrowed fn-ptr (callback))
> - `receive_line_column`: u32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ast::line_column(offset, line_count, usize, receive_line_column);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-line-text-range"></a>

> ## `line_text_range`

> Deliver the [start, end) byte range of the line containing `offset`.

```valor
public i32 line_text_range(u32 offset, usize line_count, u32 source_length, (usize) -> u32 read_line_start, (u32, u32) -> void receive_range)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `offset`: u32 (by value)
> - `line_count`: usize (by value)
> - `source_length`: u32 (by value)
> - `u32`: (usize) -> u32 read_line_start, ( (borrowed fn-ptr (callback))
> - `receive_range`: u32) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ast::line_text_range(offset, line_count, source_length, u32, receive_range);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-edition-is-supported"></a>

> ## `edition_is_supported`

> Whether a language edition is supported by this build.

```valor
public bool edition_is_supported(u16 edition)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `edition`: u16 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::ast::edition_is_supported(edition);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-parse-options-are-valid"></a>

> ## `parse_options_are_valid`

> Whether parse options are internally valid (bounds present, edition known).

```valor
public bool parse_options_are_valid(u16 edition, u32 max_source_bytes, u32 max_tokens, u16 max_nesting_depth)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `edition`: u16 (by value)
> - `max_source_bytes`: u32 (by value)
> - `max_tokens`: u32 (by value)
> - `max_nesting_depth`: u16 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::ast::parse_options_are_valid(edition, max_source_bytes, max_tokens, max_nesting_depth);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-traversal-order-is-valid"></a>

> ## `traversal_order_is_valid`

> Whether a traversal order is one of the deterministic single-order modes.

```valor
public bool traversal_order_is_valid(u8 order)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `order`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::ast::traversal_order_is_valid(order);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-rewrite-mode-is-valid"></a>

> ## `rewrite_mode_is_valid`

> Whether a sanitizer rewrite mode is defined.

```valor
public bool rewrite_mode_is_valid(u8 mode)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `mode`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::ast::rewrite_mode_is_valid(mode);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

<a id="fn-parse-preflight"></a>

> ## `parse_preflight`

> Preflight a parse request against its declared bounds: returns OK or the specific typed limit code (spec: fail with a limit diagnostic, never OOM). Preflight a parse request against its declared bounds: returns OK or the specific typed limit code (spec: fail with a limit diagnostic, never OOM).

```valor
public i32 parse_preflight(usize source_len, u16 edition, u32 max_source_bytes, u32 max_tokens, u16 max_nesting_depth)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `source_len`: usize (by value)
> - `edition`: u16 (by value)
> - `max_source_bytes`: u32 (by value)
> - `max_tokens`: u32 (by value)
> - `max_nesting_depth`: u16 (by value)

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::ast::parse_preflight(source_len, edition, max_source_bytes, max_tokens, max_nesting_depth);
> ```

> ### SEE ALSO
>
> - [`std::ast::ast_min_usize`](#fn-ast-min-usize)
> - [`std::ast::ast_max_usize`](#fn-ast-max-usize)
> - [`std::ast::ast_min_u32`](#fn-ast-min-u32)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Compiler](STD-COMPILER-DOC.md) · [Table of contents](standard-library/README.md) · [Sequence collections →](STD-COLLECTIONS-SEQUENCE-DOC.md)
