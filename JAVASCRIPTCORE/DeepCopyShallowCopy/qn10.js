const arr1 = [{ x: 1 }];
const arr2 = [...arr1];

arr2[0].x = 5;

console.log(arr1[0].x);

//Output => 5
//Reason => Because here mutation is happening not reassignment (refer qn8 for concept)