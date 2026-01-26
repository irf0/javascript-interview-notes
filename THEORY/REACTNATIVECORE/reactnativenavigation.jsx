/*
# React Native Navigation — Interview Cheatsheet

## Core Concept
- Navigation ≠ web routing
- Screens are stacked & often kept mounted
- Controls lifecycle, memory & gestures

---

## Mental Model
Navigation = stack of mounted screens
Focus ≠ mount

---

## Lifecycle Hooks
- useEffect → mount/unmount
- useFocusEffect → screen focus/blur
- useIsFocused → focus state boolean

---

## navigate vs push
- navigate → may reuse existing screen
- push → always creates new screen instance

---

## Stack vs Tabs
Stack:
- Screens stacked
- Higher memory
- Faster back nav

Tabs:
- Often all screens mounted
- Switching tabs ≠ remount
- Lazy load for performance

---

## Performance Best Practices
- Use useFocusEffect for API calls
- Cleanup listeners on blur
- Avoid deep navigation stacks
- Reset stack after flows

---

## Common Traps
- Heavy logic in useEffect ❌
- Assuming screen remounts ❌
- Conditional rendering instead of navigation ❌

---

## Interview One-Liners
- "Screens can be mounted but not focused."
- "useFocusEffect runs on focus."
- "Navigation affects memory usage."

+
*/