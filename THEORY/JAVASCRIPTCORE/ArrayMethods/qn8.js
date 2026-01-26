const nums = [1, 2, 3, 4];

const result = nums
    .map(n => n * 2)
    .filter(n => n > 4)
    .reduce((acc, n) => acc + n);

console.log(result);

//Output => 14
//Reason =>
//.map -> [2 4 6 8]
//.filter -> [6 8]
//.reduce -> 6+8 =14