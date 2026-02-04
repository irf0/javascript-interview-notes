//Given a string str. Your task is to determine whether it is a palindrome.
//Palindrome means a word that reads same from both sides example "MALAYALAM"


//LOGIC: Check if reversed string = original string
function isPalindromeBrut(str) {
    let reversedStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i]
    }
    return reversedStr === str ? true : false


}
// console.log(isPalindromeBrut("volvo"))

//LOGIC: If mismatch found, means its not a palindrome
function isPalindromeOpt(originalStr) {
    let str = originalStr.toLowerCase()
    let left = 0
    let right = str.length - 1

    while (left < right) {
        if (str[left] !== str[right]) { //means a mismatch is found
            return false
        }
        left++
        right--
    }
    return true

}
console.log(isPalindromeOpt("Anna"))
