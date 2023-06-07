// Napisz algorytm sortowania bąbelkowego
// http://www.algorytm.org/algorytmy-sortowania/sortowanie-babelkowe-bubblesort.html

const bubbleSort = (array) => {
    let helper = 0;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                helper = array[j + 1]
                array[j + 1] = array[j]
                array[j] = helper
            }
        }
    }

    return array
}

console.log(bubbleSort([1, 6, 2, 3, 9, 5, 2, 6, 11])); // [1,2,2,3,5,6,6,9,11]
console.log(bubbleSort([1, 6, 2, 22, 3, 9, 5, -1, 2, 40, 6, 11])); // [-1,1,2,2,3,5,6,6,9,11,22,40]
console.log(bubbleSort([])); // []