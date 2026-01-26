async function run() {
    try {
        Promise.reject("Error!");
        console.log("A");
    } catch (e) {
        console.log("B");
    }
}

run();
console.log("C");

//Output => A C
//Reason => Promise.reject("Error!") is NOT awaited. So try/catch does nothing here.
//try/catch in async functions only catches rejected Promises if they are awaited.