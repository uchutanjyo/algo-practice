class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
};

class DoublyLinkedList {
    constructor(value) {
    const newNode = new Node(value)
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
    }
    push(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        if (!this.head) return undefined
        let pre = this.head
        let temp = this.head;
        while(temp.next) {
            pre = temp;
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null 
        temp.prev = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        temp.prev = null;
        console.log(temp)
        return temp
}

    unshift(value) {
        const newNode = new Node(value);
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
        if(!this.head) return undefined
        let temp = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        }
         else { 
        this.head = this.head.next
        this.head.prev = null
        temp.next = null
        this.length--
        console.log(temp)
         }
        return temp
    }

    get(index) {
        if (index < 0 || index > this.length) return undefined
        let temp = this.head
        if (index === 0) return temp
        if  (index < this.length / 2) {
            // console.log('1st half', this.length / 2 + 1)

        for (let i = 0; i < index; i++) {
            temp = temp.next
        }
    }
        else {
            temp = this.tail
            for (let i = this.length - 1; i > index; i--) {
            temp = temp.prev
        }
    }
        console.log(temp)
        return temp
    }
    set(index, value) {
        let temp = this.get(index)
        if (temp) {
        temp.value = value
        return true
    }
        else {
            return false
        }
    }

    insert(index, value) {
        if (index === 0) return this.unshift(value)
        if (index === this.length) return this.push(value)
        if (index < 0 || index > this.length) return undefined 
            const newNode = new Node(value)
            const before = this.get(index - 1)
            const after = before.next
            newNode.prev = before
            newNode.next = after
            after.prev = newNode
            this.length++
            return true
    }
    remove(index) {
        if (index < 0 || index > this.length) return false
        if (index === this.length - 1) return this.pop()
        if (index === 0) return this.shift()
        const temp = this.get(index )
        temp.prev.next = temp.next
        temp.next.prev = temp.prev
        temp.prev = null
        temp.next = null
        this.length--
        console.log(temp)
        return temp
    }
}

const dll = new DoublyLinkedList(1) 

dll.push(2)
dll.push(3)
dll.push(4)


dll.set(1, 1)

console.log(dll)