/*
# React Native Rendering & Re-renders — Cheatsheet

## Rendering Flow
1. State/props change
2. React re-renders (JS thread)
3. Reconciliation
4. Updates sent to native
5. UI updates on UI thread

---

## Why Re-renders Are Costly
- Block JS thread
- Delay UI updates
- Cause frame drops & jank

---

## Common Re-render Triggers
- State changes
- Parent re-renders
- Prop reference changes
- Context value updates

---

## Memoization Tools

### React.memo
- Prevents re-render if props unchanged
- Critical for FlatList rows

### useCallback
- Stabilizes function references
- Prevents child re-renders

### useMemo
- Prevents expensive recalculation
- Does NOT directly stop re-renders

---

## RN-Specific Performance Killers
- Inline styles
- Anonymous functions in JSX
- Passing new objects as props
- Overusing Context

---

## Context Rule
- Avoid frequently changing values
- Split contexts if needed

---

## Interview One-Liners
- "Re-renders block the JS thread in RN."
- "React.memo is essential for list optimization."
- "Context updates can cause full tree re-renders."

*/