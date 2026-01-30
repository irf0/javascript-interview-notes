const arr = [0, 3, 1]

//BRUTE FORCE APPROACH (NOT PREFRRED)
//1. Sort the array
//2. Compare the value at that index 
//3. First mismatch is the answer
//4. for an array, arr = [4,3,1] it will return the first mismatch as answer which is 0 here. 
//5. Valid ONLY when numbers are from 0 to n

function missingNumBrute(arr) {
    const sortedArr = arr.sort((a, b) => a - b) //sort in asc. order
    for (let i = 0; i < sortedArr.length; i++) {
        if (arr[i] !== i) {
            return i
        }
    }
    return arr.length
}

// console.log(missingNumBrute(arr))

//OPTIMAL APPROACH (Using Gauss Formula)
//1. Store all the elems in n
//2. Calculte expected sum using Gauss Formula (n*(n+1))/2
//3. Loop and calculate the total sum of the array
//4. Missing number = expected sum - actual sum

function missingNumOpt(arr) {
    const n = arr.length
    // const n = arr.length //where 0 is not there ex, [1,3,4]

    const expectedSum = (n * (n + 1)) / 2

    let actualSum = 0
    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i]  //eg. actualSum = actualSum + 5
    }

    return expectedSum - actualSum

}
console.log(missingNumOpt(arr))