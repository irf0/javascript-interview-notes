const arr = [1, 2, 3];
const [, b] = arr;

console.log(b);

//Output => 2
//Reason => First value (1) is skipped. b gets arr[1] → 2