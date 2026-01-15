const arr = [1, 2, 3];
const [a, b] = arr;

console.log(a, b);

//Output => 1 2
//Reason => Order matters in arrays. We never destructured the third element so it will be a,b. If we did destructure third then it would be undefined.
//console.log(a, b, c);  // 1 2 undefined
