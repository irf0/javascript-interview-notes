const obj1 = { x: 1 };
const obj2 = obj1;

obj2.x = 5;

console.log(obj1.x);

//Output => 5
//Reason =>
//This is NOT a shallow or deep copy. Since there is no spread operator or object or array to indicate its a shallow/deep copy.
//This is called Reference assignment hence mutation reflects
