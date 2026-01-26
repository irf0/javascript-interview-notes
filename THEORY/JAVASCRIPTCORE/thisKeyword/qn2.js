//this inside setTimeout (Common Interview Bug)

// Q2: What is the output?

const user = {
    name: "Irfan",
    greet() {
        setTimeout(function () {
            console.log(this.name);
        }, 100);
    },
};

user.greet();

//Output => undefined
//Reason => Normal functions inside callbacks lose object context unless this is preserved.

//Solutions to fix it.
//Fix 1 : Arrow Function
setTimeout(() => {
    console.log(this.name);
}, 100);

// Why it works => Arrow function inherits this from greet() → user

//Fix 2 : bind 
setTimeout(function () {
    console.log(this.name);
}.bind(this), 100);

//Why it works => bind explicitly(manually) sets this.