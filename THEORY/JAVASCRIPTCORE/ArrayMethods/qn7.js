const nums = [1, 2, 3, 4, 5];

const result = nums
  .filter(n => n % 2 !== 0)
  .reduce((acc, n) => acc + n, 0);

//Output => 9
//Reason => 
    //1. Filtered items = [1, 3, 5]
    //2. reduce works like this, 
    //0+1 =1
    //1+3 =4
    //4+5 =9 so 9 is the final answer 