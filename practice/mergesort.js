// this only seems to work when both arrays are in order
function merge(array1, array2) {
    let combined = [];
    let i = 0
    let j = 0
    // runs while each variable is less than the array length
    while (i < array1.length && j < array2.length) {

        // compares the current index in array1 with the corresponding index in array2
        // if the ar1 index is less than the ar2, push it to combined, increment i
        // same goes for ar2, increment j
        // we break out of the loop when one of the two arrays reaches its final index
        if (array1[i] < array2[j]) {
            combined.push(array1[i])
            i++
        } else {
            combined.push(array2[j])
            j++
        }
    }
        // so, for any of the remaining values from the arrays, run these two loops to do the same (from the last position of the previous loops)
        // this one won't run b/c array1's i is already at its 'length' index
    while (i < array1.length) {
        combined.push(array1[i])
        i++
    }
        // this will hit every index since none of array2 has been sorted yet (all greater values)
    while (j < array2.length) {
        combined.push(array2[j])
        j++
    }
    return combined
}

function mergeSort(array) {
    // base case
    if (array.length === 1) return array
    // all of this slices the array into two, so that merge() can be run on the two arrays
    let mid = Math.floor(array.length / 2)
    let left = array.slice(0, mid)
    let right = array.slice(mid)
// using recursion, divides the arrays in half until the length of each is 1
// then, merges the divided arrays using merge.
    return merge(mergeSort(left), mergeSort(right))
}

// merge([1,2,3,4,5],[6,7,8,9,10])

console.log(mergeSort([3,1,10,  5, 15, 2]))

console.log('wtf')

