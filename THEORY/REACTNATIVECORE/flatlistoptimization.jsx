/*
# React Native FlatList — Performance Cheatsheet

## Why FlatList Exists
- Virtualized list
- Renders only visible items
- Recycles views
- Optimizes memory & performance

---

## Core Concepts
- Virtualization → render visible rows only
- Windowing → sliding window of mounted items
- Recycling → reuse native views

---

## High-ROI Props
- keyExtractor → stable keys (never index)
- renderItem → memoize with useCallback
- initialNumToRender → startup performance
- windowSize → memory vs smoothness
- getItemLayout → skip layout calculation
- removeClippedSubviews → unmount offscreen views

---

## Performance Best Practices
- React.memo for row components
- Memoized renderItem
- Avoid inline styles/functions
- Avoid re-rendering parent frequently
- Paginate data

---

## Common Traps
- ScrollView for long lists ❌
- Index as key ❌
- Heavy components inside rows ❌

---

## Interview One-Liners
- "FlatList improves performance via virtualization."
- "Keys enable efficient recycling."
- "getItemLayout boosts scroll performance."


*/