const nums = [10, 20, 30, 40];

const result = nums.filter((n, i) => i % 2 === 0);

console.log(result);

//Output => [10, 30]
//Reason =>
// filter does NOT return the callback result
// It uses the callback result as a boolean check
// If true → keep the element
// If false → discard it

//Here,
// 10 → index 0 → 0 % 2 === 0 ✅ keep
// 20 → index 1 → ❌ remove
// 30 → index 2 → ✅ keep
// 40 → index 3 → ❌ remove