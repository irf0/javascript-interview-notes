//It means React re-executes the component function
//Re-render = function re-execution, not DOM update

//After re-render:
// React compares old UI vs new UI (reconciliation)
// Updates only what changed

//A component re-renders ONLY in these 4 cases:

//1. Its state changes
//2. Its props change
//3. Its parent re-renders
//4. Context value it uses changes