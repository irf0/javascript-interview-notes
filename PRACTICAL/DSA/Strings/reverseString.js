//Given a string, reverse it.

//LOGIC: Start loop from the end backward loop
function reverseStringBrut(str) {
    let reversedStr = ''
    for (let i = str.length - 1; i >= 0; i--) { //starting loop from the end 
        reversedStr += str[i]
    }
    return reversedStr
}

//LOGIC: Convert to array -> Use two pointers and keep swapping the chars -> Convert back to string
function reverseStringOpt(str) {
    let arr = str.split('')
    let left = 0
    let right = str.length - 1

    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]]
        left++
        right--
    }

    return arr.join('')
}

//LOGIC: Use JS shorthand 
function reverseStringJS(str) {
    return str.split('').reverse().join('')
}