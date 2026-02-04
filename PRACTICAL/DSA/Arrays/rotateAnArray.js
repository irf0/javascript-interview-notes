//Given an integer array nums, rotate the array to the end by k steps, where k is non-negative.

//BRUTE FORCE APPROACH
//LOGIC:
//1. Remove last element (.pop()) and place them to the front (.unshift()) k times
//2. TC: O(n*k) which is slower depending on k size

const arr = [1, 2, 3, 4, 5], k = 2

function rotateArrBrut(arr, k) {
    k = k % arr.length //to handle the cases where k might be bigger than the array itself
    for (let i = 0; i < k; i++) {
        let lastEelement = arr.pop()
        arr.unshift(lastEelement)
    }
    return arr
}
// console.log(rotateArrBrut(arr, k))

//OPTIMAL SOLUTION
//LOGIC:
//1. First reverse the whole array.   [5,4,3,2,1]
//2. Second reverse the first k elements  [4,5,3,2,1]
//3. Third reverse the remaining n-k elements. [4,5,1,2,3] 

function rotateArrOpt(arr, k) {
    k = k % arr.length

    function reverseElemsFunc(arr, start, end) {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]]
            start++
            end--
        }
    }

    reverseElemsFunc(arr, 0, arr.length - 1) //from start position to end position
    reverseElemsFunc(arr, 0, k - 1) //from start pos to first k position (2,3,4 anything)
    reverseElemsFunc(arr, k, arr.length - 1) //remaning elems

    return arr
}
console.log(rotateArrOpt(arr, k))
