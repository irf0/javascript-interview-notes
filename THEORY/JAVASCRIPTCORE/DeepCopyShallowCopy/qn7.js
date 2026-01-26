const obj1 = { a: { b: 1 } };
const obj2 = { ...obj1 };

obj2.a.b = 5;
obj2.a = { b: 10 };

console.log(obj1.a.b);
console.log(obj2.a.b);   //10

//Output => 5
//Reason =>
// obj1.a still points to the original inner object, which was mutated to { b: 5 } in step 2.
// obj2.a now points to the new object { b: 10 }