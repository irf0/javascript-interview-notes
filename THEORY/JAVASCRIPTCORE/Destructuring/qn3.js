const arr = [1];
const [a = 10, b = 20] = arr;

console.log(a, b);

//Output => 1 20
//Reason =>
//a gets 1 → default is NOT used because the value exists
//b gets undefined → default 20 kicks in

//**Default values are used only when the value is undefined, not when it exists.

//Common Interview Trap 👇

// const [a = 10] = [null];
// console.log(a); // null (default NOT used)

// const [b = 10] = [];
// console.log(b); // 10 (default used)
