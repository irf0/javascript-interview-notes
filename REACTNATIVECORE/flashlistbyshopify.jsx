/*
FlashList — Ultra Short Notes

- Recycles native views
- Avoids mount/unmount
- Less JS thread work
- Needs estimatedItemSize
- Ideal for large lists

FlatList = recreate
FlashList = reuse

One-liner:
"FlashList reuses views instead of rebuilding them."

*/