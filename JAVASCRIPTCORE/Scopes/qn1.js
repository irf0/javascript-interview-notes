// Theory
// var (The "Leaky" Old Way): Scoped to the function. It ignores {} blocks. It initializes as undefined when hoisted, which leads to silent bugs.

// let (The "Flexible" New Way): Scoped to the block {}. It’s safer because it stays trapped inside loops or if-statements. It crashes if accessed before declaration (Temporal Dead Zone).

// const (The "Locked" New Way): Scoped to the block. It cannot be reassigned. Use this by default for everything unless you know the variable must change.

//================================================================================================//

//Q1. What will be the output of this?.
console.log(a);
let a = 10;

//Output => ReferenceError because let is block scoped so even though let is hoisted but it is in Temporal Dead Zone (TDZ) until initialized.


