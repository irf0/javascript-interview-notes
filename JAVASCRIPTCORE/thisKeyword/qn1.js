//this keyword in JS is a special reference that points to the object currently executing the code or the context in which a fucntion is called.

//Hack: 
//Normal Function -> this is decided at call time.
//Arrow Function -> this is decided at write time. 

//Q1. Output and Reason of this?
const user = {
    name: "Irfan",
    greet: function () {
        const arrow = () => {
            console.log(this.name);
        };

        function normal() {
            console.log(this.name);
        }

        arrow();
        normal();
    },
};

user.greet();

//Output => Irfan, undefined
//Reason => 
    //Arrow Function -> Arrow functions don’t decide this at call time, they capture it at definition time.
    
    //Normal Function -> Normal functions get this at call time, and since normal() is called without an object, this is undefined.