// Q4.What will the output of this and why?
let x = 5;

{
    console.log(x);
    let x = 10;
}

//Output => ReferenceError due to let in TDZ (outer x is not considered since let is block scoped)