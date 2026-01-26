/*
Memoization in React Native

Memoization = “Don’t redo work if inputs didn’t change.”

React.memo (Component-level)
- Prevents re-render if props same
- Used for components

  Use when:
  - FlatList / FlashList items
  - Pure UI components

useCallback (Function-level)
- Memoizes functions
- Prevents prop reference change

  Use when:
  - Passing callbacks to memoized children
  - Event handlers

useMemo (Value-level)
- Memoizes computed values
- Avoids expensive recalculations

  Use when:
  - Derived data
  - Expensive computations

   useMemo example : 
   const filteredData = useMemo(() => {
   return data.filter(x => x.active);
   }, [data]);


COMMON BUG:
Inline functions break memoization

ONE-LINER:
"Memoization reduces unnecessary re-renders by preserving references."


Mental Models (Interview Gold)
1. React.memo → “Are props the same?”
2. useCallback → “Is function reference the same?”
3. useMemo → “Is computed value the same?”




*/