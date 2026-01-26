/*
Zustand — Quick Notes

WHAT IT IS:
- Lightweight global state
- Selector-based subscriptions

WHY FAST:
- Only re-renders on selected state change

BAD:
useStore(state => state)

GOOD:
useStore(state => state.user.id)

KEY PROBLEM IT SOLVES:
- Zombie re-renders

ONE-LINER:
"Zustand prevents unnecessary re-renders using selectors."

*/