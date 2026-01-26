const arr = [1, 2, 3, 4, 5, 6];


//BRUTE FORCE METHOD (extra memory O(n) space reqd.)
function reverseArrBruteForce(arr) {
    let result = []

    for (let i = arr.length - 1; i >= 0; i--) { //start the loop at the end 
        result.push(arr[i]);
    }
    return result
}

// console.log(reverseArrBruteForce([1, 2, 3, 4, 5, 6]))

//OPTIMAL METHOD

//LOGIC:
//1. Create two pointers at the start (left) and at the end (right)
//2. Move left FORWARD and right BACKWARD till they meet in the middle
//3. Keep swapping the values as these positions
//4. Return the new array

const newarr = [1, 2, 3, 4, 5, 6];

function reverseArrayOpt(arr) {
    let left = 0 //start index
    let right = arr.length - 1 //end index

    while (left < right) { //while they haven't met at the middle
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }
    return arr
}

console.log(reverseArrayOpt([1, 2, 3, 4, 5, 6]))

