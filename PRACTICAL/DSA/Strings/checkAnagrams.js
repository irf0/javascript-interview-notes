//To be an anagram, two strings must have:

// 1.The exact same length.
// 2.The exact same characters.
// 3.The exact same frequency (count) for each character.
//ex. CINEMA == ICEMAN

//LOGIC: split('') then sort and again join ('')
function isAnagramBrut(str1, str2) {
    let str1LowerCs = str1.toLowerCase()
    let str2LowerCs = str2.toLowerCase()
    if (str1LowerCs.length !== str2LowerCs.length) return false

    let sortedStr1 = str1LowerCs.split('').sort().join('')
    let sortedStr2 = str2LowerCs.split('').sort().join('')

    return sortedStr1 === sortedStr2
}

console.log(isAnagramBrut('Cinema', 'Iceman'))

function isAnagramOpt(str1, str2) {
    if (str1.length !== str2.length) return false;

    // Correct: Normalizing to lowercase
    let s1 = str1.toLowerCase();
    let s2 = str2.toLowerCase();

    let count = {};

    // First Loop: Building the Frequency Map
    for (let char of s1) {
        if (count[char]) {
            count[char]++; // Target the KEY, not the object
        } else {
            count[char] = 1; // Initialize the KEY
        }
    }

    // Second Loop: Checking against the Map
    for (let char of s2) {
        // If the character isn't in the object, or its count is 0
        if (!count[char]) {
            return false;
        } else {
            count[char]--; // Decrement the number
        }
    }

    return true;
}