//A callback is just a function you give to another function, to be run later.

//Q1.
console.log("A");

setTimeout(function () {
    console.log("B");
}, 0);

console.log("C");

//Output => A C B
//Reason => JavaScript executes all synchronous code first, and then executes callbacks from the task queue.