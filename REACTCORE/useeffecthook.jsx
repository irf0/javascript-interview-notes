//useEffect lets you perform side effects after rendering, and the dependency array controls when the effect runs

// Render → What should UI look like?
// Effect → Now that UI exists, do this

// 3 main patterns (memorize these)

// 1. Run once (on mount)
useEffect(() => {
    fetchData();
}, []);

// 2. Run on state/prop change
useEffect(() => {
    updateTitle(count);
}, [count]);

// 3. Cleanup (on unmount / before re-run)
useEffect(() => {
    const id = setInterval(() => { }, 1000);
    return () => clearInterval(id);
}, []);


//Common Interview Traps

// 1. Missing dependencies
// useEffect(() => {
//   console.log(count);
// }, []); // ❌ count used but not listed

// Why bad?
// Stale values (count won't run after first time)
// Bugs that are hard to trace

// 2. Infinite loop
// useEffect(() => {
//   setCount(count + 1);
// }, [count]); // ❌

// Why bad?
// Effect updates state
// State triggers re-render
// Re-render triggers effect
// Loop 🔁


// 3. Functions in dependency array
// useEffect(() => {
//   doSomething();
// }, [doSomething]) --> Unless memoized, functions change on every render.