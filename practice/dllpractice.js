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
}

const dll = new DoublyLinkedList(1) 

dll.push(2)
dll.push(3)


dll.shift()

console.log(dll)