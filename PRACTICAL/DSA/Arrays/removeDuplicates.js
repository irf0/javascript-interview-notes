// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

//UNSORTED ARRAY

const unsortedArr = [10, 5, 10, 8, 5, 2, 8, 10];  // Expected Output: [10, 5, 8, 2]


const unique = [...new Set(unsortedArr)]
// console.log(unique)


//SORTED ARRAY
const sortedArr = [1, 1, 2, 3, 3, 3, 4, 5, 5]; // Expected Output: [1, 2, 3, 4, 5]

//LOGIC:
//1. i is at index 0 j starts at index 1
//2. compare - arr[j] different from arr[i]?
//3. If NO -> means it's a Duplicate so j moves to next element.
//4. If YES -> means it's a new unique element. We increment i to create space and copy arr[j] into that new spot.

function removeDuplicates(arr) {
    let i = 0

    for (j = 1; j < arr.length; j++) {
        if (arr[j] !== arr[i]) {
            i++
            arr[i] = arr[j]
        } else {
            // CASE: DUPLICATE FOUND DO NOTHING

        }
    }
    return i + 1
}

const uniqueElement = removeDuplicates(sortedArr)
console.log(sortedArr.slice(0, uniqueElement))

