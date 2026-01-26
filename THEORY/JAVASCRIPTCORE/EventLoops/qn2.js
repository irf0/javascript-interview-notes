console.log("start");

setTimeout(() => {
    console.log("timeout");

    Promise.resolve().then(() => {
        console.log("promise");
    });
}, 0);

Promise.resolve().then(() => {
    console.log("then");
});

console.log("end");

//Output => start end then promise timeout
//Reason => Microtasks created inside a macrotask run after that macrotask finishes, not before it starts.