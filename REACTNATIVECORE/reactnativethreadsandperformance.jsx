/*
# React Native Threads & Performance — Cheatsheet

## Threads in React Native

### JS Thread
- Runs React logic, hooks, state
- Single-threaded
- Blocking it causes UI lag

### UI Thread
- Renders native UI
- Handles gestures & animations
- Must stay free for smooth UX

---

## Mental Model
JS thinks → UI shows

If JS blocks → UI waits

---

## Causes of UI Lag
- Heavy loops
- Expensive re-renders
- Large JSON parsing
- FlatList re-render storms
- JS-driven animations

---

## Animations

### JS-driven
- Depends on JS thread
- Can stutter under load

### Native-driven
- Runs on UI thread
- Smooth even if JS is busy

---

## Animated vs Reanimated
- Animated → older, limited
- Reanimated → UI thread, worklets, best performance

---

## Interview One-Liners
- "UI freezes happen when JS thread is blocked."
- "Reanimated avoids JS thread bottlenecks."
- "Native-driven animations are smoother."

*/