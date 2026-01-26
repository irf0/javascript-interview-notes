const obj1 = { a: { b: 1 } };
const obj2 = { ...obj1 };

obj2.a = { b: 5 };

console.log(obj1.a.b);

//Output => 1
//Reason => 
    // You are NOT mutating the shared object.
    // You are reassigning a to a brand-new object in obj2.
    //Memory now looks like, 
    // obj1 ──► { a ──► { b: 1 } }
    // obj2 ──► { a ──► { b: 5 } }
