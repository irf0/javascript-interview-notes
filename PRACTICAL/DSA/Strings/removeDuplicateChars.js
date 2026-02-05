//Given a string s which may contain lowercase and uppercase characters. The task is to remove all duplicate characters from the string and find the resultant string.


//LOGIC: check if 
function removeDuplicateCharsBrut(str) { //TC: O(n2)
    let result = ""

    for (let i = 0; i < str.length; i++) {
        if (!result.includes(str[i])) {
            result += str[i]
        }
    }
    return result
}




console.log(removeDuplicateCharsOpt("frontend"))


function removeDuplicateCharsOpt(str) {
    let seen = new Set()
    let result = ''

    for (let i = 0; i < str.length; i++) {
        if (!seen.has(str[i])) {
            seen.add(str[i])
            result += str[i]
        }
    }

    return result
}