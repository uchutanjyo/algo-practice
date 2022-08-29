// hashtable runs a function on a key value pair and decides where in a numbered table it iwll be placed.

// but, you cant run it backwards (get the string from the hash
// determininstic: the same number will always be produced when running the same k/v thru
// set () ... collision - when two '''' are being placed in the same spot
// --- when an item maps to same spot in memory (already taken)

// the key value pairs stored in address space are actually being stored as arrays within another array
// this is called Separate Chaining

// Linear Probinggoing to the next space instead -  type of open adressing

// another way is lInked List

// you get a more randomized distribution if the number of memory spaces in hash table is a prime number


class HashTable {
    // default value for size is 7 as it's good for randomization.
    constructor(size = 7) {
        // dataMap property is an array w/ specified size (number of empty slots)
        this.dataMap = new Array(size)
    }
    // a function whcih takes a key as an argument (the string)
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            // iterates up from 0 until reach the length of key ( number of characters)
            // sets hash equal to 0 + the the charCode at each cahracter of the key, multiplies by 23
            // divides by the length of the dataMap (how many array spaces)
            hash = (hash + key.charCodeAt(i) * 23) % (this.dataMap.length)
        }
        console.log(hash, 'hdfh')
        return hash
    }
    // takes key value pair as argument to be set to a particular space in dataMap
    set(key, value) {
        // sets index equal to the returned hash from calling _hash function with the key (string)
        let index = this._hash(key)
        // if there is no value at all in the dataMap at the given index, set it equal to an empty array
        if (!this.dataMap[index]) {
            this.dataMap[index] = []
        }
        // push the key value pair as an array to that space in the dataMap
        this.dataMap[index].push([key, value])
        return this
    }
    // takes key as argument and returns the requested property
    get(key) {
        // same as set ^^
        let index = this._hash(key)
        // if there is something at that index,
        if (this.dataMap[index]) {
            console.log(this.dataMap[index])
            // iterate over the data
            for (let i = 0; i < this.dataMap[index].length; i++) {
                // checks if the key value pair's [0] index (the key) is equal to the requested key (string), return the value (the [1] index of the key value array)
                if (this.dataMap[index][i][0] === key) {
                    console.log(this.dataMap[index][i][1])
                    return this.dataMap[index][i][1]
                }
            }
        }
        // if there's nothing at that index, return undefined.
        return undefined
    }

    keys() {
        let allKeys = [];
        for (let i = 0; i < this.dataMap.length; i++) {
            if (this.dataMap[i]) {
                for (let j = 0; j < this.dataMap[i].length; j++) {
                    allKeys.push(this.dataMap[i][j][0])
                }
            }
        }
        console.log(allKeys)
        return allKeys
    }
}

// Big O for hash: 
// set, get method: O(1)
// get is O(1) because the built in hash function (JS objects) in JS is very efficient at randomizing, so it's rare that you'll have a bunch of kv pairs ending up at the same index. 
// it would be O(n) if this was the case, but due to the randomization 'get' is O(1)


// interview Question:
// check whether two arrays have any common values
const arr1 = [1, 3, 5]

const arr2 = [2, 3, 6]


function itemInCommon(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) return true
        }
    }
    return false
}

// make it more efficient

function itemInCommonEfficient(arr1, arr2) {
    let obj = {};
    for (let i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = true
    }
    for (let j = 0; j < arr2.length; j++) {
        if (obj[arr2[j]]) return true
    }
    return false
}

// console.log(itemInCommonEfficient(arr1, arr2))



// const myHT = new HashTable(7)


// myHT.set('poop', 500)

// myHT.set('acorns', 200)

// myHT.set('red apple', 200)



// myHT.get('poop')

// myHT.keys()


// console.log(myHT)

class HashTable2 {
    constructor(size = 7) {
        this.dataMap = new Array(size)
    }
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = hash + ((key.charAt(i) * 23) % this.dataMap.length)
        }
        return hash
    }
    get(key, value) {

    }
}

class HashTable3 {
    constructor(size = 7) {
        this.dataMap = new Array(size)
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = hash + ((key.charAt(i) * 23) % this.dataMap.length)
        }
        return hash
    }
    
    set(key, value) {
        let index = this._hash(key)
        if (!this.dataMap[index]) {
            this.dataMap[index] = [];
        }
        this.dataMap[index].push([key, value])
        return this
    }

}

const myHt4 = new HashTable3(7)
