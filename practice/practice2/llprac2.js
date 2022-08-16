
// 

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}


class LinkedList {
    constructor(value) {
        const newNode = new Node (value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }
    push(value) {
        const newNode = new Node (value)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++
        return this
    }
    pop() {
        if (!this.head) return null
        let pre = this.head
        let temp = this.head
        while (temp.next) {
            pre = temp
            temp = temp.next   
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return temp
    }
    unshift(value) {
        let newNode = new Node(value) 
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        }
        else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    shift() {
        if (!this.head) return undefined
        let temp = this.head
        temp.next = null
        if (this.length === 1) {
            this.head = null
            this.tail = null
        }
        else {
        this.head = this.head.next
        }
        this.length--
        return temp
    }
    get(index) {
        if (index < 0 || index > index.length) return undefined
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next
        }
        return temp
    }
    set(index, value) {
       const indexToSet = this.get(index)
       if (indexToSet) {
        indexToSet.value = value
        return true
       }
       return false
    }
    
}

const ll = new LinkedList(3)

ll.set(0, 2)



console.log(ll)