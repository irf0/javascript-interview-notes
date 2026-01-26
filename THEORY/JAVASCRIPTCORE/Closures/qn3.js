//Scenario 3
function createUser() {
    let password = "secret123";

    return {
        getPassword() {
            return password;
        },
        setPassword(newPass) {
            password = newPass;
        }
    };
}

const user = createUser();

console.log(user.password);
console.log(user.getPassword());
user.setPassword("newSecret");
console.log(user.getPassword());

//Output =>
// undefined
// "secret123"
// "newSecret"

//Reason => password is scoped to the createUser function. The returned methods form a closure over it, so it remains accessible internally but cannot be accessed directly from outside.

//Pattern => Data Encapsulation using Closures. 💖

