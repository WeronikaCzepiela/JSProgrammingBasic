const palindrome = (number) => {
  const numberArray = Array.from(number.toString());
  const rotatedNumberArray = [];
  for (let i = numberArray.length - 1; i >= 0; i--) {
    rotatedNumberArray.push(numberArray[i]);
  }

  return rotatedNumberArray.join("") === number.toString();
};

console.log(palindrome(1));
console.log(palindrome(-12));
console.log(palindrome(12321));
