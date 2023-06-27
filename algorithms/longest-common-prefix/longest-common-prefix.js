const longestCommonPrefix = (strs) => {
  let prefix = "";

  if (strs.length === 1) {
    prefix = strs[0];
  } else {
    for (let i = 0; i < strs.length; i++) {
      if (i + 1 === strs.length) {
        break;
      }
      for (let j = 1; j < strs[0].length; j++) {
        if (
          strs[i].startsWith(strs[0].substring(0, j)) &&
          strs[i + 1].startsWith(strs[0].substring(0, j))
        ) {
          prefix = strs[0].substring(0, j);
        }
      }
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); //fl
console.log(longestCommonPrefix(["dog", "racecar", "car"])); //''
console.log(longestCommonPrefix(["dog"])); //dog
console.log(longestCommonPrefix(["ab", "a"])); //a

// export function longestCommonPrefix(strs) {
//
// }
