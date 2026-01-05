//A closure is created when an inner function accesses variables from its outer scope
//The inner function remembers the variables, not their values.
//Closures are used for ->data privacy, counters, memoization.
//-----------------------------------------------------------------------------//

//Scenario 1
// function outer() {
//   let count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }

//   return inner;
// }

// const fn = outer();
// fn();
// fn();
// fn();

//Output => 1,2,3.
//Reason => The inner function forms a closure over count. Because the returned function still references count, JavaScript keeps it alive in memory even after outer has finished executing.

