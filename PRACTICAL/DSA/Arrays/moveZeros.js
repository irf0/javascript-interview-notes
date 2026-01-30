//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

//BRUTE FORCE APPROACH

//LOGIC:
//1. First filter out the npn-zero elements from the array.
//2. Create a new Array and fill the zeros in it.
//3. Return the merged arrays using ... 

function moveZeros(arr) {
    const nonZero = arr.filter((elem) => elem !== 0)
    const zeroElems = new Array(arr.length - nonZero.length).fill(0)

    return [...nonZero, ...zeroElems]
}
// console.log(moveZeros([0, 1, 0, 3, 12]))

//OPTIMAL APPROACH

//LOGIC:
//1. i (write) tracks for next non-zero 
//2. j (read) loops through the array
//3. If element ≠ 0 → place it (write it) at arr[i], increment i
//4. After loop, fill (write) remaining indices with 0

function moveZerosOpt(arr) {
    let i = 0

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] !== 0) {
            arr[j] = arr[i]
            i++
        }
    }

    while (i < arr.length) {
        arr[i++] = 0 //while 
    }

    return arr
}
console.log(moveZerosOpt([0, 1, 0, 3, 12]))
