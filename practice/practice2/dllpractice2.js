class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        const newNode = new Node(value) 
        this.head = newNode;
        this.tail = newNode;
        this.length = 1
    }
    push(value) {
        const newNode = new Node(value) 
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if(!this.head) return undefined
        let pre = this.head 
        let temp = this.head
        while(temp.next) {
            pre = temp
            temp = temp.next
        }
        pre.next = null
        this.tail = pre
        temp.prev = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        console.log(temp)
        return temp
    }
    unshift(value) {
        const newNode = new Node(value) 
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
        return this
    }
    shift() {
        if (!this.head) return undefined
        let temp = this.head 
        if (this.length === 1) {
            this.head = null
            this.tail = null
        }
        else {
            this.head = this.head.next
            this.head.prev = null
            temp.next = null
        }
        this.length--
        console.log(temp)
        return temp
    }
    get(index) {
        if (index < 0 || index > this.length) return undefined
        let temp = this.head
        if (index === 0) return temp
        // we only check the 1st half if the index we want is within the first half
        if  (index < this.length / 2) {
        // iterate through the 1st half until we reach the index we specified
        for (let i = 0; i < index; i++) {
            temp = temp.next
        }
    }
    // if index is in 2nd half
        else {
        // set temp to the tail rather than the head
            temp = this.tail
        // iterate thru 2nd half until we get to the index we're looking for (decrement from the tail)
            for (let i = this.length - 1; i > index; i--) {
            temp = temp.prev
        }
    }
    // temp is now set to the index we specified. return temp.
        console.log(temp)
        return temp
    }

    set(index, value) {
        let temp = this.get(index)
        if (temp) {
             temp.value = value
             return true
        }        
        else {return false}
    }
    insert(index, value) {
        if (index === 0) return this.unshift(value)
        if (index === this.length) return this.push(value)
        if (index < 0 || index > this.length) return undefined

            const newNode = new Node(value)
            // before is the index BEFORE the specified index
            const before = this.get(index - 1)
            // after is the index actual index (same as using get(index) but mroe efficient to do it this way)
            const after = before.next
            // then, set before.next to the newNode
            before.next = newNode
            // set newNode prev/next to before/after
            newNode.prev = before
            newNode.next = after
            // set after prev to newNode
            after.prev = newNode
            this.length++
            // return true (already returning false in edge cases above - this is the 'else')
            return true 
          
        } 
        
}

const dll = new DoublyLinkedList(4)

dll.push(5)

dll.push(6)

dll.insert(1, 1)


console.log(dll)