<!-- stdlib-reference-style: modern -->
> # `std::fs`

`std::fs` file-system operations.

[Standard library](standard-library/README.md) / [Memory, storage, and I/O](standard-library/README.md#memory-storage-and-i-o) / **File systems**

> **Source:** `stdlib/std/fs.valor` · **Routines:** 73 public · 1 internal

## Routines

<details>
<summary>Browse all 74 routines</summary>

- [`capability`](#fn-capability)
- [`addFits`](#fn-addfits)
- [`addFitsU64`](#fn-addfitsu64)
- [`powerOfTwo`](#fn-poweroftwo)
- [`pathFlavorIsValid`](#fn-pathflavorisvalid)
- [`pathEncodingIsValid`](#fn-pathencodingisvalid)
- [`resolveNativeFlavor`](#fn-resolvenativeflavor)
- [`pathStateIsValid`](#fn-pathstateisvalid)
- [`nativePathStateIsValid`](#fn-nativepathstateisvalid)
- [`pathBufStateIsValid`](#fn-pathbufstateisvalid)
- [`fileTypeIsValid`](#fn-filetypeisvalid)
- [`handleStateIsValid`](#fn-handlestateisvalid)
- [`permissionsStateIsValid`](#fn-permissionsstateisvalid)
- [`metadataStateIsValid`](#fn-metadatastateisvalid)
- [`flagIsSet`](#fn-flagisset)
- [`openFlagsAreValid`](#fn-openflagsarevalid)
- [`mapFlagsAreValid`](#fn-mapflagsarevalid)
- [`mapStateIsValid`](#fn-mapstateisvalid)
- [`lockStateIsValid`](#fn-lockstateisvalid)
- [`pathSeparator`](#fn-pathseparator)
- [`preferredSeparator`](#fn-preferredseparator)
- [`pathRootLength`](#fn-pathrootlength)
- [`pathIsAbsolute`](#fn-pathisabsolute)
- [`fileNameRange`](#fn-filenamerange)
- [`parentRange`](#fn-parentrange)
- [`extensionRange`](#fn-extensionrange)
- [`joinPath`](#fn-joinpath)
- [`normalizePath`](#fn-normalizepath)
- [`hashPath`](#fn-hashpath)
- [`openFile`](#fn-openfile)
- [`closeFile`](#fn-closefile)
- [`readFileAt`](#fn-readfileat)
- [`writeFileAt`](#fn-writefileat)
- [`flushFile`](#fn-flushfile)
- [`resizeFile`](#fn-resizefile)
- [`queryMetadata`](#fn-querymetadata)
- [`setPermissions`](#fn-setpermissions)
- [`openDirectory`](#fn-opendirectory)
- [`nextDirectoryBatch`](#fn-nextdirectorybatch)
- [`closeDirectory`](#fn-closedirectory)
- [`createDirectory`](#fn-createdirectory)
- [`removePath`](#fn-removepath)
- [`renamePath`](#fn-renamepath)
- [`copyFile`](#fn-copyfile)
- [`metadataCacheIndex`](#fn-metadatacacheindex)
- [`metadataCacheSampleIsValid`](#fn-metadatacachesampleisvalid)
- [`metadataCachePublish`](#fn-metadatacachepublish)
- [`metadataCacheRead`](#fn-metadatacacheread)
- [`metadataCacheInvalidate`](#fn-metadatacacheinvalidate)
- [`mapFile`](#fn-mapfile)
- [`flushMappedFile`](#fn-flushmappedfile)
- [`unmapFile`](#fn-unmapfile)
- [`createTempFile`](#fn-createtempfile)
- [`createTempDirectory`](#fn-createtempdirectory)
- [`persistTemp`](#fn-persisttemp)
- [`cleanupTemp`](#fn-cleanuptemp)
- [`acquireFileLock`](#fn-acquirefilelock)
- [`releaseFileLock`](#fn-releasefilelock)
- [`watchMaskIsValid`](#fn-watchmaskisvalid)
- [`watchEventKindIsValid`](#fn-watcheventkindisvalid)
- [`sequenceRingStateIsValid`](#fn-sequenceringstateisvalid)
- [`watchReadable`](#fn-watchreadable)
- [`createFileWatcher`](#fn-createfilewatcher)
- [`reserveWatchEvents`](#fn-reservewatchevents)
- [`commitWatchEvents`](#fn-commitwatchevents)
- [`acquireWatchEvents`](#fn-acquirewatchevents)
- [`consumeWatchEvents`](#fn-consumewatchevents)
- [`pollFileWatcher`](#fn-pollfilewatcher)
- [`closeFileWatcher`](#fn-closefilewatcher)
- [`selectNumaNode`](#fn-selectnumanode)
- [`metadataCacheProgress`](#fn-metadatacacheprogress)
- [`directoryProgress`](#fn-directoryprogress)
- [`watcherProgress`](#fn-watcherprogress)
- [`zeroCopyReadSupported`](#fn-zerocopyreadsupported)

</details>

## API reference

<a id="fn-capability"></a>

> ## `capability`

> *Internal API*
>
> Provides the module's **capability** operation. Returns `@`.

```valor
@capability(fs)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `fs`: fs (by value)

> ### RETURNS (@)

> ### EXAMPLE
>
> ```valor
> @ result = std::fs::capability(fs);
> ```

> ### SEE ALSO
>
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)
> - [`std::fs::powerOfTwo`](#fn-poweroftwo)

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
> bool result = std::fs::addFits(left, right);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)
> - [`std::fs::powerOfTwo`](#fn-poweroftwo)

<a id="fn-addfitsu64"></a>

> ## `addFitsU64`

> Provides the module's **add fits u64** operation. Returns `bool`.

```valor
public bool addFitsU64(u64 left, u64 right)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left`: u64 (by value)
> - `right`: u64 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::fs::addFitsU64(left, right);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::powerOfTwo`](#fn-poweroftwo)

<a id="fn-poweroftwo"></a>

> ## `powerOfTwo`

> Provides the module's **power of two** operation. Returns `bool`.

```valor
public bool powerOfTwo(usize value)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `value`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::fs::powerOfTwo(value);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-pathflavorisvalid"></a>

> ## `pathFlavorIsValid`

> Provides the module's **path flavor is valid** operation. Returns `bool`.

```valor
public bool pathFlavorIsValid(u8 flavor)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flavor`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::fs::pathFlavorIsValid(flavor);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-pathencodingisvalid"></a>

> ## `pathEncodingIsValid`

> Provides the module's **path encoding is valid** operation. Returns `bool`.

```valor
public bool pathEncodingIsValid(u8 encoding)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `encoding`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::fs::pathEncodingIsValid(encoding);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-resolvenativeflavor"></a>

> ## `resolveNativeFlavor`

> Provides the module's **resolve native flavor** operation. Returns `u8`.

```valor
public u8 resolveNativeFlavor(u8 flavor, bool windows_target)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flavor`: u8 (by value)
> - `windows_target`: bool (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::fs::resolveNativeFlavor(flavor, windows_target);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-pathstateisvalid"></a>

> ## `pathStateIsValid`

> Provides the module's **path state is valid** operation. Returns `bool`.

```valor
public bool pathStateIsValid(usize length, u8 flavor)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `flavor`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::fs::pathStateIsValid(length, flavor);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-nativepathstateisvalid"></a>

> ## `nativePathStateIsValid`

> Provides the module's **native path state is valid** operation. Returns `bool`.

```valor
public bool nativePathStateIsValid(usize length, u8 flavor, u8 encoding)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `flavor`: u8 (by value)
> - `encoding`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::fs::nativePathStateIsValid(length, flavor, encoding);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-pathbufstateisvalid"></a>

> ## `pathBufStateIsValid`

> Provides the module's **path buf state is valid** operation. Returns `bool`.

```valor
public bool pathBufStateIsValid(usize length, usize capacity, usize alignment, u8 flavor)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `alignment`: usize (by value)
> - `flavor`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::fs::pathBufStateIsValid(length, capacity, alignment, flavor);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-filetypeisvalid"></a>

> ## `fileTypeIsValid`

> Provides the module's **file type is valid** operation. Returns `bool`.

```valor
public bool fileTypeIsValid(u8 file_type)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `file_type`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::fs::fileTypeIsValid(file_type);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-handlestateisvalid"></a>

> ## `handleStateIsValid`

> Provides the module's **handle state is valid** operation. Returns `bool`.

```valor
public bool handleStateIsValid(u8 state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `state`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::fs::handleStateIsValid(state);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-permissionsstateisvalid"></a>

> ## `permissionsStateIsValid`

> Provides the module's **permissions state is valid** operation. Returns `bool`.

```valor
public bool permissionsStateIsValid(u32 mode)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `mode`: u32 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::fs::permissionsStateIsValid(mode);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-metadatastateisvalid"></a>

> ## `metadataStateIsValid`

> Provides the module's **metadata state is valid** operation. Returns `bool`.

```valor
public bool metadataStateIsValid(u64 size, u8 file_type, u32 mode)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `size`: u64 (by value)
> - `file_type`: u8 (by value)
> - `mode`: u32 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::fs::metadataStateIsValid(size, file_type, mode);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-flagisset"></a>

> ## `flagIsSet`

> Tests a power-of-two flag without relying on target-specific bit operators.

```valor
public bool flagIsSet(u32 flags, u32 flag)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u32 (by value)
> - `flag`: u32 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::fs::flagIsSet(flags, flag);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-openflagsarevalid"></a>

> ## `openFlagsAreValid`

> Provides the module's **open flags are valid** operation. Returns `bool`.

```valor
public bool openFlagsAreValid(u32 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u32 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::fs::openFlagsAreValid(flags);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-mapflagsarevalid"></a>

> ## `mapFlagsAreValid`

> Provides the module's **map flags are valid** operation. Returns `bool`.

```valor
public bool mapFlagsAreValid(u8 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flags`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::fs::mapFlagsAreValid(flags);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-mapstateisvalid"></a>

> ## `mapStateIsValid`

> Provides the module's **map state is valid** operation. Returns `bool`.

```valor
public bool mapStateIsValid(usize length, u64 file_offset, usize page_size, u8 flags)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `file_offset`: u64 (by value)
> - `page_size`: usize (by value)
> - `flags`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::fs::mapStateIsValid(length, file_offset, page_size, flags);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-lockstateisvalid"></a>

> ## `lockStateIsValid`

> Provides the module's **lock state is valid** operation. Returns `bool`.

```valor
public bool lockStateIsValid(u64 length, u8 mode, u8 state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: u64 (by value)
> - `mode`: u8 (by value)
> - `state`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::fs::lockStateIsValid(length, mode, state);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-pathseparator"></a>

> ## `pathSeparator`

> Provides the module's **path separator** operation. Returns `bool`.

```valor
public bool pathSeparator(u8 byte, u8 flavor)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `byte`: u8 (by value)
> - `flavor`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::fs::pathSeparator(byte, flavor);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-preferredseparator"></a>

> ## `preferredSeparator`

> Provides the module's **preferred separator** operation. Returns `u8`.

```valor
public u8 preferredSeparator(u8 flavor)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `flavor`: u8 (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::fs::preferredSeparator(flavor);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-pathrootlength"></a>

> ## `pathRootLength`

> Provides the module's **path root length** operation. Returns `usize`.

```valor
public usize pathRootLength(usize length, u8 flavor, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `flavor`: u8 (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::fs::pathRootLength(length, flavor, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-pathisabsolute"></a>

> ## `pathIsAbsolute`

> Provides the module's **path is absolute** operation. Returns `bool`.

```valor
public bool pathIsAbsolute(usize length, u8 flavor, (usize) -> u8 read_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `flavor`: u8 (by value)
> - `read_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::fs::pathIsAbsolute(length, flavor, read_byte);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-filenamerange"></a>

> ## `fileNameRange`

> Provides the module's **file name range** operation. Returns `i32`.

```valor
public i32 fileNameRange(usize length, u8 flavor, (usize) -> u8 read_byte, (usize, usize) -> void receive_range)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `flavor`: u8 (by value)
> - `usize`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `receive_range`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::fileNameRange(length, flavor, usize, receive_range);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-parentrange"></a>

> ## `parentRange`

> Provides the module's **parent range** operation. Returns `i32`.

```valor
public i32 parentRange(usize length, u8 flavor, (usize) -> u8 read_byte, (usize, usize) -> void receive_range)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `flavor`: u8 (by value)
> - `usize`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `receive_range`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::parentRange(length, flavor, usize, receive_range);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-extensionrange"></a>

> ## `extensionRange`

> Provides the module's **extension range** operation. Returns `i32`.

```valor
public i32 extensionRange(usize length, u8 flavor, (usize) -> u8 read_byte, (usize, usize) -> void receive_range)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `flavor`: u8 (by value)
> - `usize`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `receive_range`: usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::extensionRange(length, flavor, usize, receive_range);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-joinpath"></a>

> ## `joinPath`

> Provides the module's **join path** operation. Returns `i32`.

```valor
public i32 joinPath(usize left_length, usize right_length, usize capacity, u8 flavor, (usize) -> u8 read_left, (usize) -> u8 read_right, (usize, u8) -> void write_byte, (usize) -> void receive_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `left_length`: usize (by value)
> - `right_length`: usize (by value)
> - `capacity`: usize (by value)
> - `flavor`: u8 (by value)
> - `receive_length`: (usize) -> u8 read_left, (usize) -> u8 read_right, (usize, u8) -> void write_byte, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::joinPath(left_length, right_length, capacity, flavor, receive_length);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-normalizepath"></a>

> ## `normalizePath`

> normalizePath removes repeated separators and "." components without allocation. normalizePath removes repeated separators and "." components without allocation. ".." is delegated to pop_component so the caller can retain native roots and sandbox policy. Input and output may alias only when the supplied accessors support forward in-place compaction.

```valor
public i32 normalizePath(usize length, usize capacity, u8 flavor, (usize) -> u8 read_byte, (usize, u8) -> void write_byte, (usize) -> usize pop_component, (usize) -> void receive_length)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n^2)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `capacity`: usize (by value)
> - `flavor`: u8 (by value)
> - `usize`: (usize) -> u8 read_byte, ( (borrowed fn-ptr (callback))
> - `receive_length`: u8) -> void write_byte, (usize) -> usize pop_component, (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::normalizePath(length, capacity, flavor, usize, receive_length);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-hashpath"></a>

> ## `hashPath`

> A multiplicative rolling hash provides a stable, allocation-free cache key. A multiplicative rolling hash provides a stable, allocation-free cache key. Native case folding can be supplied by canonical_byte without changing the path representation.

```valor
public u64 hashPath(usize length, (usize) -> u8 canonical_byte)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(n)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `length`: usize (by value)
> - `canonical_byte`: (usize) -> u8 (borrowed fn-ptr (callback))

> ### RETURNS (u64)

> ### EXAMPLE
>
> ```valor
> u64 result = std::fs::hashPath(length, canonical_byte);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-openfile"></a>

> ## `openFile`

> Provides the module's **open file** operation. Returns `i32`.

```valor
public i32 openFile(usize path_length, u8 flavor, u32 flags, (u32) -> i32 open_native)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `path_length`: usize (by value)
> - `flavor`: u8 (by value)
> - `flags`: u32 (by value)
> - `open_native`: (u32) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::openFile(path_length, flavor, flags, open_native);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-closefile"></a>

> ## `closeFile`

> Provides the module's **close file** operation. Returns `i32`.

```valor
public i32 closeFile(u64 handle, u8 state, (u64) -> i32 close_native)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `handle`: u64 (by value)
> - `state`: u8 (by value)
> - `close_native`: (u64) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::closeFile(handle, state, close_native);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-readfileat"></a>

> ## `readFileAt`

> Provides the module's **read file at** operation. Returns `i32`.

```valor
public i32 readFileAt(u64 handle, u8 state, u64 offset, usize requested, (u64, u64, usize) -> i32 read_native)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `handle`: u64 (by value)
> - `state`: u8 (by value)
> - `offset`: u64 (by value)
> - `requested`: usize (by value)
> - `read_native`: (u64, u64, usize) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::readFileAt(handle, state, offset, requested, read_native);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-writefileat"></a>

> ## `writeFileAt`

> Provides the module's **write file at** operation. Returns `i32`.

```valor
public i32 writeFileAt(u64 handle, u8 state, u64 offset, usize requested, (u64, u64, usize) -> i32 write_native)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `handle`: u64 (by value)
> - `state`: u8 (by value)
> - `offset`: u64 (by value)
> - `requested`: usize (by value)
> - `write_native`: (u64, u64, usize) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::writeFileAt(handle, state, offset, requested, write_native);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-flushfile"></a>

> ## `flushFile`

> Provides the module's **flush file** operation. Returns `i32`.

```valor
public i32 flushFile(u64 handle, u8 state, bool metadata, (u64, bool) -> i32 flush_native)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `handle`: u64 (by value)
> - `state`: u8 (by value)
> - `metadata`: bool (by value)
> - `flush_native`: (u64, bool) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::flushFile(handle, state, metadata, flush_native);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-resizefile"></a>

> ## `resizeFile`

> Provides the module's **resize file** operation. Returns `i32`.

```valor
public i32 resizeFile(u64 handle, u8 state, u64 size, (u64, u64) -> i32 resize_native)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `handle`: u64 (by value)
> - `state`: u8 (by value)
> - `size`: u64 (by value)
> - `resize_native`: (u64, u64) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::resizeFile(handle, state, size, resize_native);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-querymetadata"></a>

> ## `queryMetadata`

> Provides the module's **query metadata** operation. Returns `i32`.

```valor
public i32 queryMetadata(usize path_length, u8 flavor, bool follow_symlinks, (bool) -> i32 query_native)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `path_length`: usize (by value)
> - `flavor`: u8 (by value)
> - `follow_symlinks`: bool (by value)
> - `query_native`: (bool) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::queryMetadata(path_length, flavor, follow_symlinks, query_native);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-setpermissions"></a>

> ## `setPermissions`

> Provides the module's **set permissions** operation. Returns `i32`.

```valor
public i32 setPermissions(usize path_length, u8 flavor, u32 mode, (u32) -> i32 set_native)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `path_length`: usize (by value)
> - `flavor`: u8 (by value)
> - `mode`: u32 (by value)
> - `set_native`: (u32) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::setPermissions(path_length, flavor, mode, set_native);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-opendirectory"></a>

> ## `openDirectory`

> Provides the module's **open directory** operation. Returns `i32`.

```valor
public i32 openDirectory(usize path_length, u8 flavor, u32 flags, (u32) -> i32 open_native)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `path_length`: usize (by value)
> - `flavor`: u8 (by value)
> - `flags`: u32 (by value)
> - `open_native`: (u32) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::openDirectory(path_length, flavor, flags, open_native);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-nextdirectorybatch"></a>

> ## `nextDirectoryBatch`

> The native callback writes at most capacity DirectoryEntry descriptors into caller-owned storage and reports a monotonically advancing cursor. The native callback writes at most capacity DirectoryEntry descriptors into caller-owned storage and reports a monotonically advancing cursor.

```valor
public i32 nextDirectoryBatch(u64 handle, u8 state, bool exhausted, u64 cursor, usize capacity, (u64, u64, usize) -> i32 read_native)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `handle`: u64 (by value)
> - `state`: u8 (by value)
> - `exhausted`: bool (by value)
> - `cursor`: u64 (by value)
> - `capacity`: usize (by value)
> - `read_native`: (u64, u64, usize) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::nextDirectoryBatch(handle, state, exhausted, cursor, capacity, read_native);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-closedirectory"></a>

> ## `closeDirectory`

> Provides the module's **close directory** operation. Returns `i32`.

```valor
public i32 closeDirectory(u64 handle, u8 state, (u64) -> i32 close_native)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `handle`: u64 (by value)
> - `state`: u8 (by value)
> - `close_native`: (u64) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::closeDirectory(handle, state, close_native);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-createdirectory"></a>

> ## `createDirectory`

> Provides the module's **create directory** operation. Returns `i32`.

```valor
public i32 createDirectory(usize path_length, u8 flavor, bool recursive, u32 mode, (bool, u32) -> i32 create_native)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `path_length`: usize (by value)
> - `flavor`: u8 (by value)
> - `recursive`: bool (by value)
> - `mode`: u32 (by value)
> - `create_native`: (bool, u32) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::createDirectory(path_length, flavor, recursive, mode, create_native);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-removepath"></a>

> ## `removePath`

> Provides the module's **remove path** operation. Returns `i32`.

```valor
public i32 removePath(usize path_length, u8 flavor, bool recursive, (bool) -> i32 remove_native)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `path_length`: usize (by value)
> - `flavor`: u8 (by value)
> - `recursive`: bool (by value)
> - `remove_native`: (bool) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::removePath(path_length, flavor, recursive, remove_native);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-renamepath"></a>

> ## `renamePath`

> Provides the module's **rename path** operation. Returns `i32`.

```valor
public i32 renamePath(usize from_length, usize to_length, u8 flavor, bool replace, (bool) -> i32 rename_native)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `from_length`: usize (by value)
> - `to_length`: usize (by value)
> - `flavor`: u8 (by value)
> - `replace`: bool (by value)
> - `rename_native`: (bool) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::renamePath(from_length, to_length, flavor, replace, rename_native);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-copyfile"></a>

> ## `copyFile`

> Provides the module's **copy file** operation. Returns `i32`.

```valor
public i32 copyFile(usize from_length, usize to_length, u8 flavor, bool replace, (bool) -> i32 copy_native)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `from_length`: usize (by value)
> - `to_length`: usize (by value)
> - `flavor`: u8 (by value)
> - `replace`: bool (by value)
> - `copy_native`: (bool) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::copyFile(from_length, to_length, flavor, replace, copy_native);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-metadatacacheindex"></a>

> ## `metadataCacheIndex`

> Provides the module's **metadata cache index** operation. Returns `usize`.

```valor
public usize metadataCacheIndex(u64 path_hash, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `path_hash`: u64 (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::fs::metadataCacheIndex(path_hash, capacity);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-metadatacachesampleisvalid"></a>

> ## `metadataCacheSampleIsValid`

> Provides the module's **metadata cache sample is valid** operation. Returns `bool`.

```valor
public bool metadataCacheSampleIsValid(u64 expected_hash, u64 sampled_hash, u64 first_sequence, u64 second_sequence, u64 expires_ns, u64 now_ns, u8 state)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `expected_hash`: u64 (by value)
> - `sampled_hash`: u64 (by value)
> - `first_sequence`: u64 (by value)
> - `second_sequence`: u64 (by value)
> - `expires_ns`: u64 (by value)
> - `now_ns`: u64 (by value)
> - `state`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::fs::metadataCacheSampleIsValid(expected_hash, sampled_hash, first_sequence, second_sequence, expires_ns, now_ns, state);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-metadatacachepublish"></a>

> ## `metadataCachePublish`

> Writers claim an even sequence with CAS, publish an odd in-progress value, store the payload, then release-store the next even sequence. Writers claim an even sequence with CAS, publish an odd in-progress value, store the payload, then release-store the next even sequence.

```valor
public i32 metadataCachePublish(u64 observed_sequence, u64 path_hash, u64 expires_ns, (u64, u64) -> bool claim_sequence, (u64, u64, u8) -> void store_header, () -> void store_metadata, (u64) -> void publish_sequence)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `observed_sequence`: u64 (by value)
> - `path_hash`: u64 (by value)
> - `expires_ns`: u64 (by value)
> - `u64`: (u64, u64) -> bool claim_sequence, ( (borrowed fn-ptr (callback))
> - `u64`: u64 (by value)
> - `publish_sequence`: u8) -> void store_header, () -> void store_metadata, (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::metadataCachePublish(observed_sequence, path_hash, expires_ns, u64, u64, publish_sequence);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-metadatacacheread"></a>

> ## `metadataCacheRead`

> Provides the module's **metadata cache read** operation. Returns `i32`.

```valor
public i32 metadataCacheRead(u64 expected_hash, u64 now_ns, () -> u64 load_sequence_acquire, () -> u64 load_hash, () -> u64 load_expiry, () -> u8 load_state, () -> void receive_metadata)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `expected_hash`: u64 (by value)
> - `now_ns`: u64 (by value)
> - `receive_metadata`: () -> u64 load_sequence_acquire, () -> u64 load_hash, () -> u64 load_expiry, () -> u8 load_state, () -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::metadataCacheRead(expected_hash, now_ns, receive_metadata);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-metadatacacheinvalidate"></a>

> ## `metadataCacheInvalidate`

> Provides the module's **metadata cache invalidate** operation. Returns `i32`.

```valor
public i32 metadataCacheInvalidate(u64 observed_sequence, (u64, u64) -> bool claim_sequence, () -> void store_tombstone, (u64) -> void publish_sequence)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `observed_sequence`: u64 (by value)
> - `publish_sequence`: (u64, u64) -> bool claim_sequence, () -> void store_tombstone, (u64) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::metadataCacheInvalidate(observed_sequence, publish_sequence);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-mapfile"></a>

> ## `mapFile`

> Provides the module's **map file** operation. Returns `i32`.

```valor
public i32 mapFile(u64 file_handle, u8 file_state, usize length, u64 file_offset, usize page_size, u8 flags, (u64, usize, u64, u8) -> i32 map_native)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `file_handle`: u64 (by value)
> - `file_state`: u8 (by value)
> - `length`: usize (by value)
> - `file_offset`: u64 (by value)
> - `page_size`: usize (by value)
> - `flags`: u8 (by value)
> - `map_native`: (u64, usize, u64, u8) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::mapFile(file_handle, file_state, length, file_offset, page_size, flags, map_native);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-flushmappedfile"></a>

> ## `flushMappedFile`

> Provides the module's **flush mapped file** operation. Returns `i32`.

```valor
public i32 flushMappedFile(u64 mapping, u8 state, usize offset, usize length, usize mapped_length, (u64, usize, usize) -> i32 flush_native)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `mapping`: u64 (by value)
> - `state`: u8 (by value)
> - `offset`: usize (by value)
> - `length`: usize (by value)
> - `mapped_length`: usize (by value)
> - `flush_native`: (u64, usize, usize) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::flushMappedFile(mapping, state, offset, length, mapped_length, flush_native);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-unmapfile"></a>

> ## `unmapFile`

> Provides the module's **unmap file** operation. Returns `i32`.

```valor
public i32 unmapFile(u64 mapping, u8 state, usize length, (u64, usize) -> i32 unmap_native)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `mapping`: u64 (by value)
> - `state`: u8 (by value)
> - `length`: usize (by value)
> - `unmap_native`: (u64, usize) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::unmapFile(mapping, state, length, unmap_native);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-createtempfile"></a>

> ## `createTempFile`

> Provides the module's **create temp file** operation. Returns `i32`.

```valor
public i32 createTempFile(usize prefix_length, usize suffix_length, u8 flavor, u32 flags, (u32) -> i32 create_native)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `prefix_length`: usize (by value)
> - `suffix_length`: usize (by value)
> - `flavor`: u8 (by value)
> - `flags`: u32 (by value)
> - `create_native`: (u32) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::createTempFile(prefix_length, suffix_length, flavor, flags, create_native);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-createtempdirectory"></a>

> ## `createTempDirectory`

> Provides the module's **create temp directory** operation. Returns `i32`.

```valor
public i32 createTempDirectory(usize prefix_length, u8 flavor, u32 mode, (u32) -> i32 create_native)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `prefix_length`: usize (by value)
> - `flavor`: u8 (by value)
> - `mode`: u32 (by value)
> - `create_native`: (u32) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::createTempDirectory(prefix_length, flavor, mode, create_native);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-persisttemp"></a>

> ## `persistTemp`

> Provides the module's **persist temp** operation. Returns `i32`.

```valor
public i32 persistTemp(u64 cleanup_token, bool persisted, (u64) -> i32 persist_native)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `cleanup_token`: u64 (by value)
> - `persisted`: bool (by value)
> - `persist_native`: (u64) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::persistTemp(cleanup_token, persisted, persist_native);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-cleanuptemp"></a>

> ## `cleanupTemp`

> Provides the module's **cleanup temp** operation. Returns `i32`.

```valor
public i32 cleanupTemp(u64 cleanup_token, bool persisted, (u64) -> i32 cleanup_native)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `cleanup_token`: u64 (by value)
> - `persisted`: bool (by value)
> - `cleanup_native`: (u64) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::cleanupTemp(cleanup_token, persisted, cleanup_native);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-acquirefilelock"></a>

> ## `acquireFileLock`

> Provides the module's **acquire file lock** operation. Returns `i32`.

```valor
public i32 acquireFileLock(u64 file_handle, u8 file_state, u64 offset, u64 length, u8 mode, bool wait, (u64, u64, u64, u8, bool) -> i32 lock_native)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `file_handle`: u64 (by value)
> - `file_state`: u8 (by value)
> - `offset`: u64 (by value)
> - `length`: u64 (by value)
> - `mode`: u8 (by value)
> - `wait`: bool (by value)
> - `lock_native`: (u64, u64, u64, u8, bool) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::acquireFileLock(file_handle, file_state, offset, length, mode, wait, lock_native);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-releasefilelock"></a>

> ## `releaseFileLock`

> Provides the module's **release file lock** operation. Returns `i32`.

```valor
public i32 releaseFileLock(u64 lock_handle, u8 state, (u64) -> i32 unlock_native)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `lock_handle`: u64 (by value)
> - `state`: u8 (by value)
> - `unlock_native`: (u64) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::releaseFileLock(lock_handle, state, unlock_native);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-watchmaskisvalid"></a>

> ## `watchMaskIsValid`

> Provides the module's **watch mask is valid** operation. Returns `bool`.

```valor
public bool watchMaskIsValid(u32 mask)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `mask`: u32 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::fs::watchMaskIsValid(mask);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-watcheventkindisvalid"></a>

> ## `watchEventKindIsValid`

> Provides the module's **watch event kind is valid** operation. Returns `bool`.

```valor
public bool watchEventKindIsValid(u8 kind)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `kind`: u8 (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::fs::watchEventKindIsValid(kind);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-sequenceringstateisvalid"></a>

> ## `sequenceRingStateIsValid`

> Provides the module's **sequence ring state is valid** operation. Returns `bool`.

```valor
public bool sequenceRingStateIsValid(usize read_sequence, usize write_sequence, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `read_sequence`: usize (by value)
> - `write_sequence`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::fs::sequenceRingStateIsValid(read_sequence, write_sequence, capacity);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-watchreadable"></a>

> ## `watchReadable`

> Provides the module's **watch readable** operation. Returns `usize`.

```valor
public usize watchReadable(usize read_sequence, usize write_sequence, usize capacity)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `read_sequence`: usize (by value)
> - `write_sequence`: usize (by value)
> - `capacity`: usize (by value)

> ### RETURNS (usize)

> ### EXAMPLE
>
> ```valor
> usize result = std::fs::watchReadable(read_sequence, write_sequence, capacity);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-createfilewatcher"></a>

> ## `createFileWatcher`

> Provides the module's **create file watcher** operation. Returns `i32`.

```valor
public i32 createFileWatcher(usize path_length, u8 flavor, u32 mask, usize capacity, (u32, usize) -> i32 watch_native)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `path_length`: usize (by value)
> - `flavor`: u8 (by value)
> - `mask`: u32 (by value)
> - `capacity`: usize (by value)
> - `watch_native`: (u32, usize) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::createFileWatcher(path_length, flavor, mask, capacity, watch_native);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-reservewatchevents"></a>

> ## `reserveWatchEvents`

> A successful reservation is one contiguous event span. A successful reservation is one contiguous event span. The producer fills that span and release-publishes the new sequence in commitWatchEvents.

```valor
public i32 reserveWatchEvents(usize read_sequence, usize write_sequence, usize capacity, usize requested, (usize, usize) -> void receive_span)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `read_sequence`: usize (by value)
> - `write_sequence`: usize (by value)
> - `capacity`: usize (by value)
> - `requested`: usize (by value)
> - `receive_span`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::reserveWatchEvents(read_sequence, write_sequence, capacity, requested, receive_span);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-commitwatchevents"></a>

> ## `commitWatchEvents`

> Provides the module's **commit watch events** operation. Returns `i32`.

```valor
public i32 commitWatchEvents(usize read_sequence, usize write_sequence, usize capacity, usize written, (usize) -> void store_write_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `read_sequence`: usize (by value)
> - `write_sequence`: usize (by value)
> - `capacity`: usize (by value)
> - `written`: usize (by value)
> - `store_write_release`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::commitWatchEvents(read_sequence, write_sequence, capacity, written, store_write_release);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-acquirewatchevents"></a>

> ## `acquireWatchEvents`

> Provides the module's **acquire watch events** operation. Returns `i32`.

```valor
public i32 acquireWatchEvents(usize read_sequence, usize write_sequence, usize capacity, usize requested, (usize, usize) -> void receive_span)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `read_sequence`: usize (by value)
> - `write_sequence`: usize (by value)
> - `capacity`: usize (by value)
> - `requested`: usize (by value)
> - `receive_span`: (usize, usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::acquireWatchEvents(read_sequence, write_sequence, capacity, requested, receive_span);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-consumewatchevents"></a>

> ## `consumeWatchEvents`

> Provides the module's **consume watch events** operation. Returns `i32`.

```valor
public i32 consumeWatchEvents(usize read_sequence, usize write_sequence, usize capacity, usize consumed, (usize) -> void store_read_release)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `read_sequence`: usize (by value)
> - `write_sequence`: usize (by value)
> - `capacity`: usize (by value)
> - `consumed`: usize (by value)
> - `store_read_release`: (usize) -> void (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::consumeWatchEvents(read_sequence, write_sequence, capacity, consumed, store_read_release);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-pollfilewatcher"></a>

> ## `pollFileWatcher`

> Provides the module's **poll file watcher** operation. Returns `i32`.

```valor
public i32 pollFileWatcher(u64 handle, u8 state, usize maximum, (u64, usize) -> i32 poll_native)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `handle`: u64 (by value)
> - `state`: u8 (by value)
> - `maximum`: usize (by value)
> - `poll_native`: (u64, usize) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::pollFileWatcher(handle, state, maximum, poll_native);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-closefilewatcher"></a>

> ## `closeFileWatcher`

> Provides the module's **close file watcher** operation. Returns `i32`.

```valor
public i32 closeFileWatcher(u64 handle, u8 state, (u64) -> i32 close_native)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `handle`: u64 (by value)
> - `state`: u8 (by value)
> - `close_native`: (u64) -> i32 (borrowed fn-ptr (callback))

> ### RETURNS (i32)

> ### EXAMPLE
>
> ```valor
> i32 result = std::fs::closeFileWatcher(handle, state, close_native);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-selectnumanode"></a>

> ## `selectNumaNode`

> Provides the module's **select numa node** operation. Returns `u32`.

```valor
public u32 selectNumaNode(u64 identity, u32 node_count, u8 policy, u32 preferred_node)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `identity`: u64 (by value)
> - `node_count`: u32 (by value)
> - `policy`: u8 (by value)
> - `preferred_node`: u32 (by value)

> ### RETURNS (u32)

> ### EXAMPLE
>
> ```valor
> u32 result = std::fs::selectNumaNode(identity, node_count, policy, preferred_node);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-metadatacacheprogress"></a>

> ## `metadataCacheProgress`

> Provides the module's **metadata cache progress** operation. Returns `u8`.

```valor
public u8 metadataCacheProgress(bool atomics_lock_free)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `atomics_lock_free`: bool (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::fs::metadataCacheProgress(atomics_lock_free);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-directoryprogress"></a>

> ## `directoryProgress`

> Provides the module's **directory progress** operation. Returns `u8`.

```valor
public u8 directoryProgress(bool native_async, bool completion_queue_lock_free)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `native_async`: bool (by value)
> - `completion_queue_lock_free`: bool (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::fs::directoryProgress(native_async, completion_queue_lock_free);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-watcherprogress"></a>

> ## `watcherProgress`

> Provides the module's **watcher progress** operation. Returns `u8`.

```valor
public u8 watcherProgress(bool native_async, bool event_ring_lock_free)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `native_async`: bool (by value)
> - `event_ring_lock_free`: bool (by value)

> ### RETURNS (u8)

> ### EXAMPLE
>
> ```valor
> u8 result = std::fs::watcherProgress(native_async, event_ring_lock_free);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

<a id="fn-zerocopyreadsupported"></a>

> ## `zeroCopyReadSupported`

> Provides the module's **zero copy read supported** operation. Returns `bool`.

```valor
public bool zeroCopyReadSupported(bool direct_buffer, usize offset, usize length, usize alignment)
```

> ### PERFORMANCE & HARDWARE BOUNDS
>
> $O(1)$; No heap allocation.

> ### INPUT PARAMETERS
>
> - `direct_buffer`: bool (by value)
> - `offset`: usize (by value)
> - `length`: usize (by value)
> - `alignment`: usize (by value)

> ### RETURNS (bool)

> ### EXAMPLE
>
> ```valor
> bool result = std::fs::zeroCopyReadSupported(direct_buffer, offset, length, alignment);
> ```

> ### SEE ALSO
>
> - [`std::fs::capability`](#fn-capability)
> - [`std::fs::addFits`](#fn-addfits)
> - [`std::fs::addFitsU64`](#fn-addfitsu64)

## Reference notes

Signatures and API descriptions are derived from the module source. Complexity describes
the routine's control-flow shape, not a benchmark promise. Examples show the call shape
with caller-owned values and callbacks.

The current implementations use deterministic scalar paths. Unless a routine says
otherwise, storage remains caller-owned and the standard-library kernel does not allocate.
Machine-checked Lean or TLA+ verification is not currently claimed for this module;
validation comes from the standard-library build and available native harnesses.

[← Input and output](STD-IO-DOC.md) · [Table of contents](standard-library/README.md) · [Storage →](STD-STORAGE-DOC.md)
