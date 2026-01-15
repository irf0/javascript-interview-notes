console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");

//Output => A D C B
//Reason => Synchronous code runs first, then microtasks (Promises), and finally macrotasks like setTimeout