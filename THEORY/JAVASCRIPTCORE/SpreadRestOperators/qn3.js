const arr = [10, 20, 30, 40];
const [a, b, ...rest] = arr;

console.log(rest);

//Output => 30 40
//Reason => rest → array of remaining elements