function delay(label) {
    return new Promise((resolve) => {
        console.log(label);
        resolve();
    });
}

async function run() {
    await delay("A");
    await delay("B");
}

run();
console.log("C");

//Output => A C B
//Reason => Even with await, the Promise executor runs synchronously. The async function pauses only after the Promise is created.