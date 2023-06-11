const longestCommonPrefix = (strs) => {
    let prefix = []

    for (let i = 1; i < strs.length; i++) {
        if (i+1 === strs.length) {break}
        for (let j = 1; j < strs[0].length; j++) {
            if ((strs[i].startsWith(strs[0].substring(0, j))) && (strs[i+1].startsWith(strs[0].substring(0, j)))) {
                prefix = strs[0].substring(0, j)
            }
        }
    }

    return prefix
}


console.log(longestCommonPrefix(["flower", "flow", "flight"])) //fl
console.log(longestCommonPrefix(["dog", "racecar", "car"])) //[]


// export function longestCommonPrefix(strs) {
//
// }