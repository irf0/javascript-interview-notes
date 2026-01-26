const arr = [1, 4, 7, 8, 25, 87, 14, 3, 2, 15, 9]

// function maxMin(arr) {
//     let min = arr[0]
//     let max = arr[0]

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i]
//         }
//         else if (arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return { min, max }
// }

function bruteMinMax(arr) {
    arr.sort((a, b) => a - b)

    const min = arr[0]
    const max = arr[arr.length - 1]
    return { min, max }

}

function jsBuiltin(arr) {
    const min = Math.min(...arr)
    const max = Math.max(...arr)

    return { min, max }
}



//Find Largest element 
function findMaxElem(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]

        }
    }
    return { max }
}

console.log(findMaxElem(arr))

//Reverse an array

function reverseArrBruteForce(arr) { //extra space reqd. O(n)
    const resultArr = []

    for (i = arr.length - 1; i >= 0; i--) { //start the loop at the end 
        resultArr.push(arr[i])
    }
    return resultArr

}
console.log(reverseArrBruteForce(arr))






function reverseArrayOpt(arr) {
    let left = 0
    let right = arr.length - 1

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]  //JS destructure concept [a,b] = [b,a]
        left++
        right--
    }
    return arr
}
// console.log(reverseArrayOpt(arr))