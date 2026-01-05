//Scenario 2
function outer() {
    let count = 0;

    return function () {
        count++;
        console.log(count);
    };
}

const fn1 = outer();
const fn2 = outer();

fn1();
fn1();
fn2();
fn1();
fn2();

// fn1(); // count (fn1) = 1 → prints 1
// fn1(); // count (fn1) = 2 → prints 2

// fn2(); // count (fn2) = 1 → prints 1

// fn1(); // count (fn1) = 3 → prints 3
// fn2(); // count (fn2) = 2 → prints 2

//Reason => Each call to outer() creates a new lexical environment. fn1 and fn2 close over different instances of count, which is why they maintain independent state.

//Golden Rule => One function call = one closure = one private memory.
