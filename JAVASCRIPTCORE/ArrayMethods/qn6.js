const nums = [1, 2, 3, 4];

const result = nums
    .filter(n => n > 2)
    .map(n => n * 2);

console.log(result);

//Output => [6, 8]
//Reason =>
// filter(n > 2) → [3, 4]
// map(n * 2) → [6, 8]