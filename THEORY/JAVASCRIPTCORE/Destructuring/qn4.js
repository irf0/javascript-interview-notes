const user = { name: "Irfan", age: 24 };
const { name: firstName, age } = user;

console.log(firstName, age);

//Output => "Irfan", 24
//Reason => name → extracted from object. Stored in a new variable called firstName. age matches directly