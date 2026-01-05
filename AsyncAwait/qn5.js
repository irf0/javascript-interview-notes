function task(label) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(label);
            resolve();
        }, 1000);
    });
}

async function run() {
    await task("A");
    await task("B");
}

run();

//Output => 2 seconds —> A B
//Reason => Because the Promises are awaited one after another, the tasks run sequentially, so the total time is the sum of individual delays.

//IMP
// await task("A"); // waits ~1s
// await task("B"); // waits another ~1s

// Each await waits before starting the next task
// This is sequential, not parallel
// Total time = 1s + 1s = 2s