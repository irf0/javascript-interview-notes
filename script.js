const arr = [1, 0, 4, 7, 8, 0, 25, 87, 0, 14, 3, 2, 15, 0, 0, 0, 9]

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
// console.log(reverseArrBruteForce(arr))






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

function moveZerosBt(arr) {
    const nonZeroElems = arr.filter((elem) => elem !== 0)
    const zeroElems = new Array(arr.length - nonZeroElems.length).fill(0)

    return [...nonZeroElems, ...zeroElems]
}

function moveZerosOpt(arr) {
    let i = 0

    for (let j = 0; j < arr.length; j++) {
        if (arr[j] !== 0) {
            arr[j] = arr[i]
            i++
        }
    }

    while (i < arr.length) {
        arr[i++] = 0
    }

    return arr
}

function missingNumOpt(arr) {
    const n = arr.length
    const expectedSum = (n * (n + 1)) / 2
    let actualSum = 0

    for (let i = 0; i < arr.length; i++) {
        actualSum += arr[i]
    }
    return expectedSum - actualSum
}

console.log(missingNumOpt([0, 2, 3])) //1

function findLargestElem(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return { max }
}

function maxSubArrayOpt(arr) {
    let currenSum = arr[0]
    let maxSum = arr[0]

    for (let i = 1; i < arr.length; i++) {
        currenSum = Math.max(arr[i], currenSum + arr[i])
        maxSum = (currenSum, maxSum)
    }
    return maxSum
}

function twoosum(arr) {
    let seen = {}
    for (let i = 0; i < arr.length; i++) {
        const needed = target - arr[i]
        if (seen[needed] !== undefined) { //means it is available in the hashmap already
            return [seen[needed], i]

        } else {
            seen[arr[i]] = arr[i] //store the current item in the hashmap
        }
    }
}

function findMin(arr) {
    let min = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i] //if i find that the current elem is smaller than my min, i'll update my min to new value and keep doing it through out the loop  
        }
    }
    return min
}

function movezero(arr) {
    let i = 0
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] !== 0) {
            arr[j] = i
            i++
        }
    }

    while (i < arr.length) {
        arr[i] += 0
    }

    return arr
}

function removeDups(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) { //means duplicacy prsent

        }
    }

}

function reverseString(str) {
    let left = 0
    let right = str.length - 1

    while (str[left] < str[right]) {
        [str[left], str[right]] = [str[right], str[left]]
        left++
        right--
    }
    return str
}


function outerFunc() {
    let name = "irfan"

    function innerFunc() {
        console.log(name)
    }

    return innerFunc
}

const myClosureFunc = outerFunc() //outerFunc() is done execution here but still remembers innerFunc outside

myClosureFunc()