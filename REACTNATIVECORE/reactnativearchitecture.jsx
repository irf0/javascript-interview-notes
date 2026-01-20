/*
WHAT IS REACT NATIVE AND WHY WE USE IT ?

# React Native Architecture — Interview Cheatsheet

## What React Native Is
- Framework to build mobile apps using React + JavaScript
- Renders **real native UI components**, not WebView
- Same React concepts (components, hooks, reconciliation)

---

## High-Level Architecture
React Native has 3 main parts:

1. **JavaScript Layer**
   - Your React code (components, hooks, state)
   - Runs on a **separate JS thread**
   - Uses React Reconciler (conceptually same as web)

2. **Native Layer**
   - iOS: UIView (Swift / Obj-C)
   - Android: View (Kotlin / Java)
   - Runs on **UI thread**
   - Responsible for rendering, gestures, animations

3. **Communication Layer**
   - Connects JS ↔ Native
   - Old: Bridge
   - New: JSI + Fabric + TurboModules

---

## Mental Model (Must Remember)
JS logic ≠ UI rendering

JS Thread (React logic)
        ↓
Native UI Thread (Actual buttons, views)

If JS thread blocks → UI lags/freezes.

---

## Old Architecture (Bridge)
- Async only
- JSON serialization
- Performance bottleneck

Flow:
JS → JSON → Bridge → Native

Problems:
- Slow animations
- Delayed gestures
- Frame drops under heavy load

---

## New Architecture (Modern RN)
Components:
- **JSI**: JS talks directly to native
- **Fabric**: New rendering system
- **TurboModules**: Faster native modules

Benefits:
- No JSON serialization
- Sync communication possible
- Better performance & responsiveness

Flow:
JS ↔ JSI ↔ Native

---

## Common Interview Questions & Traps

Q: Is React Native hybrid?
A: No. It renders real native components. Logic runs in JS.

Q: Does React Native use the DOM?
A: No DOM, no HTML, no CSS.

Q: Is React Native single-threaded?
A: JS runs on a single thread, UI runs on a separate native thread.

Q: Why does UI freeze in React Native?
A: JS thread is blocked (heavy computation, re-renders, loops).

Q: Is React Native slower than Flutter?
A: Depends on use case. New RN architecture significantly improves performance.

---

## Real-World Performance Killers
- Large list re-renders
- Heavy synchronous JS loops
- Expensive JSON parsing
- Poor memoization
- Blocking JS thread during animations

Symptoms:
- Touch delay
- Scroll jank
- Slow navigation

---

## Interview One-Liners (Memorize)
- "React Native runs React logic on a JS thread and renders real native UI components."
- "UI freezes happen when the JS thread is blocked."
- "The new architecture removes the JSON bridge using JSI and Fabric."

---

## When to Use React Native
Pros:
- One codebase for iOS & Android
- Faster development
- OTA updates possible

Cons:
- Heavy animations
- Deep native/hardware-level apps


*/