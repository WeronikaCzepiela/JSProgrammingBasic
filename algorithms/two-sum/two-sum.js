const twoSum = (array, target) => {
  let firstId = 0;
  let result = target - array[0];
  for (let i = 1; i <= array.length; i++) {
    if (result === array[i]) return [firstId, i];
    result = target - array[i];
    firstId = i;
  }
  return [];
};

console.log(twoSum([0, 1, 6], 7)); // [1,2]
console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 1, 2, 4], 6)); // [2,3]
console.log(twoSum([3, 3], 6)); // [0,1]
