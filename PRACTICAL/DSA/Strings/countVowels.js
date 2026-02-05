//Write a function countVowels(str) that takes a string and returns the number of vowels (a, e, i, o, u) found in it.

//LOGIC: 
//Store the vowels in an arr/str => check if the vowels include the current elem with .includes() => increase the counter if found

function countVowels(str) {
    let vowels = "aeiouAEIOU"
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            count++
        }
    }
    return count
}
console.log(countVowels("Hello World"))