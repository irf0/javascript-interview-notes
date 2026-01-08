function test(a, ...rest) {
    console.log(rest);
}

test(1, 2, 3, 4);

//Output => [2, 3, 4]
//Reason => rest → array of remaining arguments