//Given an array of integers arr[], the task is to find the maximum and minimum elements in the array using the minimum number of comparisons.
//Example:
// Input: arr[] = [3, 5, 4, 1, 9]
// Output: [1, 9]
// Explanation: The minimum element is 1, and the maximum element is 9.

/*
LOGIC:
1.Initialize two variables, min and max, with the first element of the array.
2.Loop through the rest of the array.
3.If the current element is smaller than min, update min.
4.If the current element is larger than max, update max.
*/

//Brute Force Method - Sorting the whole arrays everytime is expensive O(nlogn)
function bruteForceMinMax(arr) {
    arr.sort((a, b) => a - b);

    return {
        min: arr[0],  //first element 
        max: arr[arr.length - 1]  //last element
    };
}

console.log(findMaxMin([3, 5, 4, 1, 9]))


//Optimal Method 
function findMaxMin(arr) {
    let min = arr[0]
    let max = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        } else if (arr[i] > max) {
            max = arr[i]
        }
    }
    return { min, max }
}
// console.log(findMaxMin([3, 5, 4, 1, 9]))

//JS Built-in Method 
function findMaxMin(arr) {
    let min = Math.min(...arr)
    let max = Math.max(...arr)
    return { min, max }
}
// console.log(findMaxMin([3, 5, 4, 1, 9]))

//React built-in method (Real World)
const products = [
    { name: "item1", price: 3 },
    { name: "item2", price: 5 },
    { name: "item3", price: 1 }
];

const range = products.reduce((acc, product) => {
    return {
        // Access the price property of the object
        min: Math.min(acc.min, product.price),
        max: Math.max(acc.max, product.price)
    };
}, { min: products[0].price, max: products[0].price });

console.log(range); 