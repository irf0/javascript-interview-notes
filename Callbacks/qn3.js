console.log("start");

setTimeout(() => {
    console.log("timeout");

    setTimeout(() => {
        console.log("inner");
    }, 0);

}, 0);

console.log("end");

//Output => start end timeout inner
//Reason => Each setTimeout callback is queued as a separate macrotask, so the inner timeout runs after the outer one completes.