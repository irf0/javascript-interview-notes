async function foo() {
    console.log("A");

    await Promise.resolve();

    console.log("B");
}

console.log("C");

setTimeout(() => {
    console.log("D");
}, 0);

foo();

console.log("E");

//Output => C A E B D
//Reason => An async function runs synchronously until the first await; the continuation runs as a microtask, before any macrotasks.

//Explanation:

//Code execution flow 👇
//1. Sync code (call stack)
// i) console.log("C") → C
// ii) foo() is called
//      a. logs "A" immediately → A
//      b. hits await → pauses foo, schedules microtask
// v) console.log("E") → E

// 2. Microtasks
// Resume foo after await → "B" → B

// 3. Macrotasks
// setTimeout → "D" → D