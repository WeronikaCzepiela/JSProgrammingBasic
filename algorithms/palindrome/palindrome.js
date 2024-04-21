const palindrome = (number) => {
  const numbers = Array.from(number.toString());
  const rotatedNumbers = [...numbers].reverse();

  return rotatedNumbers.join("") === number.toString();
};

console.log(palindrome(1));
console.log(palindrome(-11));
console.log(palindrome(12321));
