// Napisz program, który wyświetla liczby od 1 do 100. 
// Dla liczb podzielnych przez 3 niech program wyświetli „Fizz”,
// dla liczb podzielnych przez 5 niech wyświetli 'Buzz’,
// a dla liczb podzielnych przez 15 niech wyświetli 'FizzBuzz’.
// https://en.wikipedia.org/wiki/Fizz_buzz

const fizzBuzz = () => {
    const array = Array.from({length: 100}).map(
        (item, idx) => {
            let word = ''
            if ((idx+1) % 3 ===0) {
                word += 'Fizz'
            }
            if ((idx+1) % 5 === 0) {
                word += 'Buzz'
            }
            if (word == '') {return idx+1}
            else {return word}
        }
    )
    return array
}

// const fizzBuzz = () => {
//   const array = Array.from({length: 100}).map(
//       (item, idx) => {
//           if (((idx+1) % 3 ===0) && ((idx+1) % 5 === 0)) {
//             return 'FizzBuzz'
//           }
//           if ((idx+1) % 3 ===0) {
//               return 'Fizz'
//           }
//           if ((idx+1) % 5 === 0) {
//               return 'Buzz'
//           }
//           else {
//               return idx + 1
//           }
//       }
//   )
//     return array
// }

console.log(fizzBuzz());
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...