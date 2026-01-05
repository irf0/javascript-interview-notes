
//Q5.What will be printed & Why? (Closure based question)
for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}

//Output => 3,3,3
//Reason -> var is function scoped, so the loop shares a single variable i. setTimeout runs after the loop completes, and by that time i equals 3, so it prints 3 three times.
//in short -> Async + var loop = last value repeated.

//Q5(a).What will be printed & Why?
//Fix for the above solution
// for (let i = 0; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 1000);
// }

//Output =>0,1,2
//Reason -> let is block scoped and creates a new binding per iteration, so each callback closes over a different value of i, which is why it logs 0, 1, 2.