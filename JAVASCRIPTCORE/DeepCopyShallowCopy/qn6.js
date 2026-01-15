const obj1 = { a: { b: 1 } };
const obj2 = structuredClone(obj1);

obj2.a.b = 10;

console.log(obj1.a.b);

//Output => 1
//Reason =>
//1. Since there is structuredClone means it's a deep copy.
//2. deep copy copies everything regardless of nesting levels so the output will as same as the original value.