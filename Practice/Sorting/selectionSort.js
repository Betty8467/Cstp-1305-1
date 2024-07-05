let array = [10, 2, 11, 3, 4, 0]; // n = 6, n - 1 = 5
//** SELECTION SORT **/

// [10, 2, 11, 3, 4, 0]
// min = array[i], 10

// min > array[j]
  // swap
// [2, 10,  11, 3, 4, 0]

// min = 2
    // swap
// [0, 10,  11, 3, 4, 2]
  // min = 0



  function selectionSort(array) {
    let n = array.length;

    for (let i = 0; i < n -1; i++) {
        let min = i;

        for (let j =  i + 1; j < n ;j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }

        if (min !== i) {
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }

    return array;
}