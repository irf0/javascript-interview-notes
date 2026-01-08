const obj = { a: 1, b: 2, c: 3 };
const { a, ...rest } = obj;

console.log(rest);

//Output => { b: 2, c: 3 }
//Reason =>
//a is extracted and removed
//rest collects remaining properties
//rest is an object, not values

//...rest in destructuring always gives you the remaining properties, in the same data structure (object here).