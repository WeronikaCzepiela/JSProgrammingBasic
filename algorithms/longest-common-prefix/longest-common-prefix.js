const longestCommonPrefix = (strs) => {
    let prefix = strs[0].substring(0, 1)

    for (let i = 1; i < strs.length; i++) {
        for (let j = 1; j < strs[0].length; j++) {
            if ((strs[i].startsWith(prefix)) && (strs[i+1].startsWith(prefix))) {
                prefix = strs[0].substring(0, j-1)
                // console.log(prefix)
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