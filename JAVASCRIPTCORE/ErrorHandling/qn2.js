function test() {
    try {
        console.log("1");
        return "try";
    } catch (e) {
        console.log("2");
        return "catch";
    } finally {
        console.log("3");
    }
}

console.log(test());

//Output => 1 3 try
//Reason => try → return decided → finally → return happens. 
