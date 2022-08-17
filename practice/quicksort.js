

// pivot point --

// Pivot


// swap - make it its own func b/c we're going to use it twice

function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex]
    array[firstIndex] = array[secondIndex]
    array[secondIndex] = temp
}

// makes everything on the left of the pivotIndex less than it, everything on the right greater than it.
function pivot(array, pivotIndex = 0, endIndex = array.length - 1) {
    // to start, set swap to same index as pivot
    let swapIndex = pivotIndex
    // for loop starts at 2nd index, goes till LT/ET endindex, increment
    // goes until the array looks like ____ lol
    for (let i = pivotIndex + 1; i <= endIndex; i++) {
        if (array[i] < array[pivotIndex]) {
            swapIndex++
            swap(array, swapIndex, i)
        }
    }
    swap(array, pivotIndex, swapIndex)
    return swapIndex
}


// we only have to worry about left/right when we start calling quickSort recursively.
function quickSort(array, left=0, right = array.length - 1) {
    // rearranges the array we pass to quickSort (does what pivot does)
    // stores index that pivot returns
    let pivotIndex = pivot(array, left, right)
    // calls qS recursively with the full array, 0, and the last item on the left half of array
    quickSort(array, left, pivotIndex - 1)
}   

