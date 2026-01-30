//Given an array of integers, find the second largest distinct element in the array. 

//BRUTE FORCE METHOD (Sorting)
//LOGIC:
//1. Use Set to remove duplicates from the array
//2. Sort the array in descending order
//3. Return the value at index 1 (second largest)

function findSecondMaxBrut(arr) {
    const uniqueArr = [...new Set(arr)]
    uniqueArr.sort((a, b) => b - a) //sort in desc. order
    return uniqueArr[1] //return at index 1 not 0 thus second largest 
}

//OPTIMAL METHOD (Two Pointers)
//LOGIC
//1. Assume max at 0 and secondMax at Infinity
//2. Loop - If bigger than max do these,
// i) Shift old max to secondMax
// ii) Update max
//3. Else if between max and secondMax --> Update secondMax
//4. Return secondMax 

function findSecondMaxOpt(arr) {
    let max = arr[0]
    let secondMax = -1

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max  //old max becomes secondMax
            max = arr[i] //current elem becomes new max
        }
        else if (arr[i] > secondMax && arr[i] !== max) { //is bigger than secondLargest but NOT bigger than largest.
            arr[i] = secondMax
        }
    }

    return secondMax
}
console.log(findSecondMaxOpt([1, 0, 4, 7, 8, 0, 25, 87, 0, 14, 3, 2, 15, 0, 0, 0, 9]
))