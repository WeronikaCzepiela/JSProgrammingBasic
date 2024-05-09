const twoSum = (array, target) => {
  const shortedArray = [...array].sort().filter((number) => number < target);
  let result;
  for (let i = 0; i < shortedArray.length; i++) {
    for (let j = shortedArray.length - 1; j > i; j--) {
      result = shortedArray[i] + shortedArray[j];
      if (result === target)
        return [
          array.indexOf(shortedArray[i]),
          array.indexOf(shortedArray[j], j),
        ];
      if (result < target) break;
    }
  }

  return [];
};

console.log(twoSum([0, 1, 6], 7)); // [1,2]
console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 1, 2, 4], 6)); // [2,3]
console.log(twoSum([3, 3], 6)); // [0,1]

// Inne rozwiązanie:

// const twoSum = (array, target) => {
//   for (let i = 0; i < array.length; i++) {
//     let result = target - array[i];
//     for (let j = i+1; j <= array.length; j++) {
//       if (result === array[j]) return [i, j];
//     }
//   }
//   return [];
// };
