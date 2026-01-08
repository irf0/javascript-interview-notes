const arr = [[1, 2]];
const copy = [...arr];

copy[0][0] = 99;

console.log(arr[0][0]);

//Output => 99
//Reason =>
//Spread creates a new outer array
//But the inner array is still the same reference
//Spread on arrays is also shallow; nested arrays still share references.