const user = { name: "Irfan", age: 24 };
const updatedUser = { ...user, age: 25 };

console.log(updatedUser);

//Output => {"Irfan", 25}
//Reason => In object spread, properties defined later overwrite earlier ones.