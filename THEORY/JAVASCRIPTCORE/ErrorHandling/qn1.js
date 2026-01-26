//Error handling in JS

//Handling runtime issues so your app doesn’t crash and fails gracefully.

//try/catch handles runtime errors, not syntax errors.”
//throw is used to signal custom or logical failures.”
//finally is guaranteed execution.

//Short: try → catch if broken → finally always

//Q1.
try {
    console.log("A");
    throw new Error("Oops");
    console.log("B");
} catch (err) {
    console.log("C");
} finally {
    console.log("D");
}

console.log("E");

//Output => A C D E
//Reason =>
// 1. There is not async code so the execution is top to bottom
// 2. Execution stops immediately as error occured then it shifts to catch. Finally always executes regardless.