//Error propagation

Promise.resolve()
    .then(() => {
        throw new Error("Oops");
    })
    .then(() => {
        console.log("A");
    })
    .catch(() => {
        console.log("B");
    });

//Output => B
//Reason => Error → skip .then() → go to .catch()

//IMP:
//Throwing an error rejects the Promise
//Control skips all remaining .then()
//Jumps directly to .catch()
