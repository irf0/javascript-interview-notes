function doTask(cb) {
    cb("Error occurred", "Success");
}

doTask((err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
});

//Output => Error occurred
//Reason => In error-first callbacks, the first argument represents the error, and execution should return early if it exists.