
//Problem: Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

//Example: 
//nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4] 
//Output: 6 (The subarray [4, -1, 2, 1] has the largest sum = 6).

//BRUTE FORCE LOGIC:   TC:O(n2)
//1. Initialize maxSum to a very small number (-Infinity)
//2. Outer loop (i) defines the starting point of the subarray
//3. Inner loop (j) defines the ending point of the subarray
//4. Calculate sum for every pair of (i, j)
//5. If the currentSum > maxSum, update maxSum

function maximumSubarraySumBrut(arr) {
    let maxSum = -Infinity

    for (let i = 0; i < arr.length; i++) {
        let currenSum = 0
        for (let j = i; j < arr.length; j++) {
            currenSum += arr[j]
            if (currenSum > maxSum)
                maxSum = currenSum
        }
    }
    return maxSum
}

//OPTIMAL APPROACH LOGIC:   TC:O(n)
//1. Initialize sum and maxSum at arr[0]
//2. Add the current number to your sum
//3. If the currentNum is greater than my maxSum(sum+currentNum), it means the sum was negative so drop it and restart with updating sum = currentNum (this is now my new sum)
//5.Update maxSum if the new sum is higher. 

function maximumSubarraySumOpt(arr) {
    let currentSum = arr[0]
    let maxSum = arr[0]

    for (let i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]) //Here we're just checking if adding the past to current is better or only current one is better that the past. eg, (3,(2+3))
        maxSum = Math.max(maxSum, currentSum)

    }
    return maxSum

}

console.log(maximumSubarraySumOpt([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

//Math.max() returns the largest value

//ANALOGY
/**
 * THE DECISION: Math.max(currentNum, currentSum + currentNum)
 */

// Scenario A: THE PAST HELPS
// arr = [10, 5]
// currentNum = 5, currentSum = 10
Math.max(5, 10 + 5) // Returns 15
// LOGIC: "The past was positive. Adding it makes me bigger. KEEP STREAK."

// Scenario B: THE PAST HURTS
// arr = [-20, 5]
// currentNum = 5, currentSum = -20
Math.max(5, -20 + 5) // Returns 5
// LOGIC: "The past was negative. It drags me down. START FRESH TODAY."