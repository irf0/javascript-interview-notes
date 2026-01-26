function print() {
    console.log("Hello");
}

setTimeout(print(), 1000);
console.log("Done");

//Output => Hello, Done
//Reason => Passing a function reference schedules it as a callback. Calling the function executes it immediately.