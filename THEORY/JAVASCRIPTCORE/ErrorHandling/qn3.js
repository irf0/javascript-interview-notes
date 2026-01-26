function demo() {
    try {
        return "A";
    } finally {
        return "B";
    }
}

console.log(demo());

//Output => B
//Reason => Return inside finally overrides try and catch returns.