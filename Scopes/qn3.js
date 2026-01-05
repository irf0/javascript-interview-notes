
//Q3. What will be the output of this?.
let a = 10;

function test2() {
    console.log(a);
    let a = 20;
}

test2();

//Output =>ReferenceError. let variables are hoisted but not initialized, so accessing them before declaration results in a ReferenceError due to the temporal dead zone(TDZ).