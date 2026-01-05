console.log("A");

Promise.resolve().then(() => {
    console.log("B");

    Promise.resolve().then(() => {
        console.log("C");
    });
});

setTimeout(() => {
    console.log("D");
}, 0);

console.log("E");

//Output => A E B C D
//Reason => JavaScript drains the microtask queue completely before executing the next macrotask.