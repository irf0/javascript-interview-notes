let a = 10;
let b = a;

b = 20;

console.log(a);

//Output => 10
//Reason => Primitive values are copied by value, not by reference.