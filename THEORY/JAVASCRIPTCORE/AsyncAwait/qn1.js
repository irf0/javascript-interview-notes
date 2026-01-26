//An async function always returns a Promise.
//await pauses only the async function, not the whole program.

async function foo() {
    console.log("A");

    await Promise.resolve();

    console.log("B");
}

console.log("C");
foo();
console.log("D");

//Output => C A D B
//Reason => Code inside an async function runs synchronously until the first await. After await, the remaining code runs as a microtask.