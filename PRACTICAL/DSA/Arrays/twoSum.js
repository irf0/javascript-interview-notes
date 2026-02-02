/**
 * Problem:
 * Given an array of integers nums and an integer target,
 * return indices of the two numbers such that they add up to target.
 *
 * Assumptions:
 * - Exactly one solution exists
 * - Same element cannot be used twice
 */

//Brute Force Soln. 
//Idea is to just find a pair which adds to make the target 

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

// console.log(twoSum([12, 4, 6, 9, 3, 15, 8, 7, 11, 5, 2, 10, 14], 12));

//Optimized Soln
// The Idea is:
// The Logic: As you iterate, calculate the complement (Target - Current Number). 
// Check if that complement is already in your "memory" (the map).
// If yes: You found the pair! Return the current index and the stored index.
// If no: Save the current number and its index in the Map and move to the next.

function twoSum(nums, target) {
    const seen = {}
    for (let i = 0; i < nums.length; i++) {
        const needed = target - nums[i]
        if (seen[needed] !== undefined) {
            return [seen[needed], i]
        } else {
            seen[nums[i]] = i // If not found, store the current number with its index so it can be used later
        }
    }
}

// console.log(twoSum([12, 4, 6, 9, 3, 15, 8, 7, 11, 5, 2, 10, 14], 158)); //[3,4]



