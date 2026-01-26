//React compares previous values vs current values of dependencies using Object.is.
//If any value changes → effect runs again.

//3 Valid cases

//1. No dependency array 👉 Runs after every render
useEffect(() => {
    console.log("runs after every render");
});


// 2. Empty dependency array 👉 Runs only once (on mount)
useEffect(() => {
    console.log("runs once");
}, []);

// 3. With dependencies
useEffect(() => {
    console.log("runs when count changes");
}, [count]);


// Common interview traps (very important)

// 1. Missing dependencies
useEffect(() => {
    console.log(count);
}, []); // ❌ count used but not listed

// Why bad?
// Stale values
// Bugs that are hard to trace

// 2. Infinite loop
useEffect(() => {
    setCount(count + 1);
}, [count]); // ❌

// Why bad?
// Effect updates state
// State triggers re-render
// Re-render triggers effect
// Loop 🔁

// 3. Functions in dependency array
useEffect(() => {
    doSomething();
}, [doSomething]);
// Unless memoized, functions change on every render.