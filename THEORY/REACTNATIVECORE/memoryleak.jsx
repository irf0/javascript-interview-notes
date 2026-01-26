/*
Memory Leaks — React Native

CAUSES:
- Uncleaned listeners
- Timers not cleared
- Stale closures
- Native resources not released

TOOLS:
- Flipper → Memory usage
- React Profiler → Render leaks

DEBUG FLOW:
1. Open screen
2. Note memory
3. Close screen
4. Memory should drop

FIX:
- Cleanup in useEffect
- Stop animations
- Clear timers

ONE-LINER:
"A memory leak happens when components unmount but references remain."

*/