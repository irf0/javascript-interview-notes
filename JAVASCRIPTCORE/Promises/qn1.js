/*
What is a Promise?
  Imagine you ordered food from Swiggy
  Now three things can happen:

   ✅ Delivered → food arrived → success

   ❌ Cancelled → restaurant closed → failure

   ⏳ On the way → you’re waiting → pending
*/

// Q1.What will be the output and in what order?

console.log("A");

Promise.resolve().then(() => {
    console.log("B");
});

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");

//Output => A & D immediately, then B & C.
//Reason => Synchronous code runs first, then Promise callbacks execute as microtasks in the order they were queued. 