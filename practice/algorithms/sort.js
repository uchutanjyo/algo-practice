// Bubble sort

// sorts array least to greatest 
function bubbleSort(array) {
    // start at end of array, go until i = 1, decrement
    for (let i=array.length - 1; i > 0; i--){

        for (let j=0; j < i; j++) {
    // on every decrement of i, increment j from 0 until  end of array (which is 1 less each time- i decrements each time)
            if (array[j] > array[j+ 1]) {
    // if current index of array is greater than the NEXT index of the array (j+1),
    // set temp variable to current index of array
                let temp = array[j]
    // change current index value to the value of the next index
                array[j] = array[j + 1]
    // change the value of the next index to the temp variable
                array[j +1] = temp
            }
        }
    }
    // the two index positions switch. return the sorted array
    console.log(array)
    return array
}

function selectionSort(array) {
    let min 
    for (let i=0; i < array.length - 1; i++) {
        min = i;
        // 2nd loop checks index of next variable in array - i mean, sets it to j
        for (let j = i + 1; j < array.length; j++) {
            // if the next index in array is less than the current index (min, i), set min equal to j 
            if (array[j] < array[min]) min = j   
            }
            // if the current index in 1st loop is not equal to the current value of min, run the following
            if (i !== min) {
            // set temp equal to the current value
            let temp = array[i]
            // set the current index in array equal to the min value
            array[i] = array[min]
            // set the array min value equal to temp
            array[min] = temp
        }
    }
    console.log(array)
    return array

}

function insertionSort(array) {
    let temp
    // i is set to index 1 rather than 0 
    for (let i = 1; i < array.length; i++) {
        // temp variable set to index i in array
        temp = array[i]
        //2nd loop j set to the current value of i - 1 (the prev index) and  while the array index of j is greater than temp (index i in array), decrement.
        for (var j = i - 1; array[j] > temp; j--) {
            array[j+1] = array[j]
        }
        array[j+1] = temp
    }
    return array
}



let arr1 = [6,2,9,4, 240,5,1, 0]

console.log(insertionSort(arr1))


// Selection sort
