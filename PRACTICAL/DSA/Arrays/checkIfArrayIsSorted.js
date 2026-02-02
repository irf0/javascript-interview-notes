//Given an array nums, return true if the array is sorted in non-decreasing order. Otherwise, return false.

//LOGIC: 
//1. We'll start with the assumtion that array is UNSORTED
//2. Start iterating the loop from the end. 
//3. Check for only one mistake (Left > Right) thus we prove array is UNSORTED
//4. If no mistakes then return true (means array is SORTED)

function isSortedOptimal(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false //means unorted
        }
    }
    return true  //means sorted

}