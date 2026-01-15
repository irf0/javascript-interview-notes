Promise.resolve()
    .then(() => {
        return Promise.resolve("A");
    })
    .then((value) => {
        console.log(value);
    });

//Output => A
//Reason => If a Promise is returned from a .then(), the next .then() waits for it and receives its resolved value.