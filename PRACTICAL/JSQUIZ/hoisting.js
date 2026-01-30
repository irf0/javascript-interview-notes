//1.Output and why ?
console.log(check);
if (true) {
    function check() { return "Inside"; }
}

//Undefined. The "name" check is hoisted to the top of the script, but it is initialized with undefined.