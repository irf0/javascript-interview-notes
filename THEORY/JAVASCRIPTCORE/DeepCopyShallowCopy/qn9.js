//Interview Question 9 (array + shallow copy + reassignment)

const arr1 = [{ x: 1 }];
const arr2 = [...arr1];

arr2[0] = { x: 5 };

console.log(arr1[0].x);

//Output => 1
//Reason => Because link is broken since arr2 is reassigned to {x:5} so arr1 is still pointing to same element.

//refer qn8 for concept clarity