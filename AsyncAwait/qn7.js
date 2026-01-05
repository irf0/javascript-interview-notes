function p1() {
    return Promise.resolve("A");
}

function p2() {
    return Promise.reject("B");
}

async function run() {
    try {
        const res = await Promise.all([p1(), p2()]);
        console.log(res);
    } catch (e) {
        console.log(e);
    }
}

run();
console.log("C");

//Output => C B
//Reason => Promise.all rejects as soon as any one of Promise rejects, and the rejection is caught by try/catch if it’s awaited.