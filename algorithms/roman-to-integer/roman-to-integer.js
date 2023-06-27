const romanToInt = (s) => {
  const array = s.split("");
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "I") {
      array.splice(i, 1, 1);
    }
    if (array[i] === "V") {
      array.splice(i, 1, 5);
    }
    if (array[i] === "X") {
      array.splice(i, 1, 10);
    }
    if (array[i] === "L") {
      array.splice(i, 1, 50);
    }
    if (array[i] === "C") {
      array.splice(i, 1, 100);
    }
    if (array[i] === "D") {
      array.splice(i, 1, 500);
    }
    if (array[i] === "M") {
      array.splice(i, 1, 1000);
    }
  }

  let a = 0;
  for (let i = 0; i < array.length; i++) {
    if (i + 1 < array.length) {
      if (array[i] > array[i + 1]) {
        a = a + array[i];
      }
      if (array[i] < array[i + 1]) {
        a = a + array[i + 1] - array[i];
        i++;
      }
      if (array[i] === array[i + 1]) {
        a = a + array[i + 1] + array[i];
        i++;
      }
    } else {
      a = a + array[i];
    }
  }

  return a;
};

console.log(romanToInt("III")); // 3
console.log(romanToInt("IV")); // 4
console.log(romanToInt("IX")); // 9
console.log(romanToInt("LVIII")); //58
console.log(romanToInt("MCMXCIV")); // 1994
