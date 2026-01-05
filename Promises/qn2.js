console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
});

console.log("4");

//Output => 1,4,3,2
//Reason => 1,4 are synchronous task so runs immediately.

//Why 3 runs before 2?
// Promise.then() --> microtask
// setTimeout --> macrotask
//in JS, microtasks always run before macrotasks.