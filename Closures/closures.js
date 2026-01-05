//A closure is created when an inner function accesses variables from its outer scope
//The inner function remembers the variables, not their values.
//Closures are used for ->data privacy, counters, memoization.
//-----------------------------------------------------------------------------//

//Scenario 1
// function outer() {
//   let count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }

//   return inner;
// }

// const fn = outer();
// fn();
// fn();
// fn();

//Output => 1,2,3. 
//Reason => The inner function forms a closure over count. Because the returned function still references count, JavaScript keeps it alive in memory even after outer has finished executing.

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


function createUser() {
    let password = "secret123";

    return {
        getPassword() {
            return password;
        },
        setPassword(newPass) {
            password = newPass;
        }
    };
}

const user = createUser();

console.log(user.password);
console.log(user.getPassword());
user.setPassword("newSecret");
console.log(user.getPassword());

//Output =>
// undefined
// "secret123"
// "newSecret"

//Reason => password is scoped to the createUser function. The returned methods form a closure over it, so it remains accessible internally but cannot be accessed directly from outside.

//Pattern => Data Encapsulation using Closures 💖

