// Napisz algorytm zwracający silnię liczby n

const calculateFactorial = (number) => {
    let result = 1
    for (let i = 1; i <= number; i++) {
        result = result * i
    }
    return result
}

console.log(calculateFactorial(1)); // 1
console.log(calculateFactorial(2)); // 2
console.log(calculateFactorial(3)); // 6
console.log(calculateFactorial(4)); // 24
console.log(calculateFactorial(5)); // 120
console.log(calculateFactorial(6)); // 720