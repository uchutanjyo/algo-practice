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
    constructor(size = 7) {
        this.dataMap = new Array(size)
    }
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % (this.dataLength.size)
        }
        return hash
    }

    set(key, value) {
        let index = this._hash(key)
        if (!this.dataMap[index]) {
            this.dataMap[index] = []
        }

    }
}