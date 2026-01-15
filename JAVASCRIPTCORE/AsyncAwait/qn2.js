async function test() {
    console.log("A");

    const result = await Promise.resolve().then(() => {
        console.log("B");
        return "C";
    });

    console.log(result);
    console.log("D");
}

console.log("E");
test();
console.log("F");

//Output => E A F B C D
//Reason => The async function executes synchronously until await. The awaited Promise’s .then() runs as a microtask, and the resolved value is assigned before the function resumes.