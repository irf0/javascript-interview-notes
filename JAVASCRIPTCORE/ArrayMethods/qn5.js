//REDUCE

const nums = [1, 2, 3];

const result = nums.reduce((acc, n) => acc + n, 0);

console.log(result);

//Output => 6
//Reason => reduce collapses the array into one value.
// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6

//Note : If reduce has no initial value, the first element becomes the accumulator.