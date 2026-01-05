Promise.resolve()
    .then(() => {
        console.log("A");
        return "B";
    })
    .then((value) => {
        console.log(value);
    });

//Output => A then B
//Reason => Returning a value from .then() resolves the next Promise with that value, which is received by the next .then().

//imp.
//return value → passed to next .then
//No return → next .then gets undefined
