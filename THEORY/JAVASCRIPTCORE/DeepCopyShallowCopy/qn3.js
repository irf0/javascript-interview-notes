const obj = { a: { b: 1 } };
const copy = { ...obj };   //{ a: { b: 1 } }

copy.a.b = 2;

console.log(obj.a.b);

//Output => 2
//Reason =>
//Top-level a is copied
//BUT a points to the same inner object in memory
