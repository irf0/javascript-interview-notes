const obj = { a: 1 };
const newObj = { a: 2, ...obj };

console.log(newObj);

//Output => { a: 1 }
//Reason =>
//{ a: 2, ...obj } is equivalent to { a: 2, a: 1 }
//Later properties overwrite earlier ones