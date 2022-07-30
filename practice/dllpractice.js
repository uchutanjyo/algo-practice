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
            console.log('1st half', this.length / 2 + 1)

        for (let i = 0; i < index; i++) {
            temp = temp.next
        }
    }
        else {
            temp = this.tail
            for (let i = this.length - 1; i > index; i--) {
            temp = temp.prev
            console.log(temp, i)
        }
    }
        console.log(temp)
        return temp
    }

    
}

const dll = new DoublyLinkedList(1) 

dll.push(2)
dll.push(3)
dll.push(4)


dll.get(3)

console.log(dll)