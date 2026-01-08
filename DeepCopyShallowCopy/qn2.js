const obj1 = { x: 1 };
const obj2 = obj1;

obj2.x = 5;

console.log(obj1.x);

//Output => 5
//Reason =>
//Objects are assigned by reference, not by value.
//Both variables point to the same memory reference
//so obj2 does not get a new object