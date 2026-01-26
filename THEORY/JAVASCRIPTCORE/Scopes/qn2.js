//Q2. What will be the output of this?.
var a = 10
function test() {
    console.log(a)
    var a = 20
}
test()

//Output => undefined.
//Reason => Because If a variable exists locally, JS will NEVER look outside.
