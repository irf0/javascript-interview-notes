const data = null;
const { value } = data;

console.log(value);

//Output => TypeError: Cannot destructure property 'value' of null
//Reason =>
//Destructuring expects an object
//null is not an object
//JS tries to read properties from null → immediate crash