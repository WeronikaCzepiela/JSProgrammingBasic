// 1. Napisz funkcję strzałkową które wyświetla w konsoli napis "Hello World"

const displayMessage = () => console.log('Hello World')


displayMessage(); // Hello World


// 2. Napisz funckję która przyjmuje liczbę i zwraca jej kwadrat

const findSquare = (x) => (x * x)


console.log(findSquare(2)); // 4
console.log(findSquare(9)); // 81


// 3. Napisz funkcję która przelicza stopnie celcjusa na farenheity

const celciusToFarenheit = (x) => (x * 9 / 5 + 32)

console.log(celciusToFarenheit(0)); // 32
console.log(celciusToFarenheit(20)); // 68
console.log(celciusToFarenheit(40)); // 104


// 4. Napisz funckję która zwraca pole prostokątu o bokach długości a oraz b

const rectangleArea = (a, b) => (a * b)

console.log(rectangleArea(10, 20)); // 200
console.log(rectangleArea(30, 30)); // 900


// 5. Napisz funkcję która zwraca obwód oraz pole koła na podstawie promienia w postaci obiektu

const circleValues = (rad) => ({
    perimeter: Number((2 * 3.1415 * rad).toFixed(2)),
    area: Number((3.1415 * rad * rad).toFixed(2))
})

console.log(circleValues(10)) // { perimeter: 62.83, area: 314.15 }
console.log(circleValues(15)) // { perimeter: 94.24, area: 706.85 }
console.log(circleValues(25)) // { perimeter: 157.07, area: 1963.49 }


// 6. Napisz funkcję która zwraca długość tablicy podanej jako argument

const getArrayLength = (array) => array.length

console.log(getArrayLength([1, 1, 2, 2, 3])); // 5
console.log(getArrayLength([1, "xxx", 2, false])); // 4
console.log(getArrayLength([])); // 0


// 7. Napisz funkcję która zmapuje tablicę z liczbami na tablice z stringami
// Użyj w tym celu funkcji map 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

const numberArrayToStringArray = (array) => (array.map(String))

console.log(numberArrayToStringArray([1, 7, 99])); // ["1", "7", "99"]
console.log(numberArrayToStringArray([])); // []


// 8. Napisz funkcję która zwróci sumę liczb podanych w tablicy
// Użyj w tym celu funkcji reduce 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const getArraySum = (array) => array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0,
);


console.log(getArraySum([5, 20, 5])); // 30
console.log(getArraySum([-1, 0, 1])); // 0


// 9. Napisz funkcję która zwróci podaną tablicę bez liczb parzystych
// Użyj funkcji filter
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

const getArrayWithoutEvenNumbers = (array) => (array.filter(item => item % 2 !== 0))

console.log(getArrayWithoutEvenNumbers([1, 2, 3, 4, 5, 6, 7])); // [1, 3, 5, 7]
console.log(getArrayWithoutEvenNumbers([10, 20, 100])); // []
console.log(getArrayWithoutEvenNumbers([1, 9, 17])); // [1, 9, 17]


// 10. Napisz funkcję która zwróci sumę najmniejszej parzystej oraz 
// największej nieparzystej liczby z tablicy.
// Jeśli w tablicy nie występuje żadna wartość parzysta lub nieparzysta
// Podstawn za nią 0

const getSumOfSomething = (array) => {
    const evenNumbers = array.filter(item => item % 2 === 0)
    const evenNumber = evenNumbers.length ? Math.min(...evenNumbers) : 0

    const oddNumbers = array.filter(item => item % 2 === 1)
    const oddNumber = oddNumbers.length ? Math.max(...oddNumbers) : 0

    return oddNumber + evenNumber;
}

console.log(getSumOfSomething([1, 8, 4, 27, 13, 30])); // 31
console.log(getSumOfSomething([1, 3, 5, 7])); // 7
console.log(getSumOfSomething([2, 2, 2, 2])); // 2
console.log(getSumOfSomething([2, 2, 1, 3])); // 5


// 11. Napisz funkcję która zwraca odwróconą liczbę 
// Użyj do tego operatora reszty z dzielenia "%"

const reverseNumber = () => {
    // ...
}

console.log(reverseNumber(1234)); //4321
console.log(reverseNumber(212121)); //121212
console.log(reverseNumber(0)); //0


// 12. Napisz funkcję która zwraca liczbę samogłosek w podanym stringu

const countVowel = () => {
    // ...
}

console.log(countVowel("Hello")) //2
console.log(countVowel("Umbrella")) //3


// 13. Napisz funkcję która sprawdza czy słowo jest palindromem

const findPalindrome = () => {
    // ...
}

console.log(findPalindrome("bannana")) //false
console.log(findPalindrome("racecar")) //true
console.log(findPalindrome("madam")) //true


// 14. Napisz funkcję która spłaszcza tablicę 2D do tablicy 1D

const flattenArr = () => {
    // ...
}

console.log(flattenArr([[1, 2, 3], [4, 5, 6], [7, 8, 9]])) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(flattenArr([[1, 2, 3], [], [7, 8, 9]])) // [1, 2, 3, 7, 8, 9]


// 15. Napisz funkcję która zwraca losową liczbę całkowitą z zadanego przedziału

const genRandom = () => {
    // ...
}

console.log(genRandom(1, 10)) // 1 - 10
console.log(genRandom(80, 90)) // 80 - 90


// 16. Napisz funkcję, która doda do siebie nielimitowaną liczbę argumentów

const addNumber = (...args) => {
    // ...
}

console.log(addNumber(1, 2, 3, 4, 5)); // 15
console.log(addNumber(1, 2, 3)); // 6


// 17. Napisz funkcję która zwróci liczbę zadanych znaków w zadanym stringu
// Jeśli podamy "X" to zliczamy zarówno "x" jak i "X"

const letterCount = () => {
    // ...
}

console.log(letterCount("Connect", 'c')) // 2
console.log(letterCount("first person shooter", 's')) // 2


// 18. Napisz funkcję która sprawdzi czy liczba jest liczbą pierwszą

const checkPrime = () => {
    // ...
}

console.log(checkPrime(1)); // true
console.log(checkPrime(2)); // true
console.log(checkPrime(7)); // true
console.log(checkPrime(4)); // false
console.log(checkPrime(27)) // false
console.log(checkPrime(19)) // true
console.log(checkPrime(100000)) // false


// 19. Napisz funkcję, która na podstawie tablicy z a,b oraz c zwróci ich miejsca zerowe
// deltę oraz współrzędne wierzchołka 

const squareFunctionInfo = () => {
    // ...
}

console.log(squareFunctionInfo([{a: 2, b: 4, c: 1}]));
// [{ zeros: [-2, 0], delta: 0, node: [-1, -2]}]
console.log(squareFunctionInfo([{a: 2, b: 4, c: 1}, {a: 1, b: 0, c: 4}]));
// [{ zeros: [-2, 0], delta: 0, node: [-1, -2]}, { zeros: [], delta: 16, node: [0, 4]}]


// 20. Napisz funkcje obliczającą potęgę pierwszego argumentu do potęgi drugiego argumentu

const calculatePower = () => {
    // ...
}

console.log(calculatePower(2, 5)); // 32
console.log(calculatePower(6, 4)); // 1296
console.log(calculatePower(9, 1)); // 9
console.log(calculatePower(20, 0)); // 1
console.log(calculatePower(8, -2)); // 0.015625