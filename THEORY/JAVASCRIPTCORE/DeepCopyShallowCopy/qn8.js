const obj1 = { a: { b: 1 } };
const obj2 = { ...obj1 };

obj2.a = { b: 2 };
obj2.a.b = 3;

console.log(obj1.a.b);

//Output => 1

//IMPORTANT:-
//MUTATION = Link is active means if obj2.a.b = 6 then obj will be 6.

//REASSIGNMENT = Link is broken means if obj2.a = {b:7} then link with obj1 is broken and obj1 is still pointing to same old element.



//Reason =>
// Step1 Reassignment (VERY IMPORTANT)
// obj2.a = { b: 2 }; ──► This breaks the shared reference.

// Now memory is:
// obj1 ──► { a ──► { b: 1 } }
// obj2 ──► { a ──► { b: 2 } }
// (They are no longer connected.)
