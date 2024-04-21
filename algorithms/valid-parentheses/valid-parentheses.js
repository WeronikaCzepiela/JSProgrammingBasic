const validParentheses = (arg) => {
  const argArray = Array.from(arg);
  let firstValue;
  let secondValue;
  for (let i = 0; i < arg.length - 1; i = i + 2) {
    firstValue = argArray[i];
    secondValue = argArray[i + 1];
    if (firstValue === "(") {
      if (secondValue !== ")") return false;
    }
    if (firstValue === "[") {
      if (secondValue !== "]") return false;
    }
    if (firstValue === "{") {
      if (secondValue !== "}") return false;
    }
  }
  return true;
};

console.log(validParentheses("()"));
console.log(validParentheses("()[]{}"));
console.log(validParentheses("(]"));
console.log(validParentheses("(({}[]))"));
