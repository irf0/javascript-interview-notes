const arr = [1, 4, 7, 8, 25, 87, 14, 3, 2, 15, 9]

function findLargestElem(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]  // New max found

        }
    }
    return { max }
}

console.log(findLargestElem(arr)) //{max : 87}