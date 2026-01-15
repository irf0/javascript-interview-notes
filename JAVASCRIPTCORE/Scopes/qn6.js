//Q6.What will be printed & Why?
var y = 1;

function outer() {
    console.log(y);

    var y = 2;

    function inner() {
        console.log(y);
    }

    inner();
}

outer();

//Output => undefined 2. The first console.log prints undefined because var x is hoisted inside outer, shadowing the global x. After assignment, x becomes 2, and the inner function accesses it via the scope chain, so it logs 2.