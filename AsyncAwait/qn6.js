function fetchData(id) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(id);
            resolve(id);
        }, 1000);
    });
}

async function run() {
    const ids = [1, 2, 3];

    for (const id of ids) {
        await fetchData(id);
    }

    console.log("done");
}

run();

//Output => 3 seconds —> 1 2 3 done
//Reason => Using await inside a loop makes the async operations run sequentially.