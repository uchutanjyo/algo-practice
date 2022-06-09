console.log('')

class Node {
    constructor(value) {
        this.value = value;
        this. next = null
    }
}

class LinkedList {
    constructor(value) {
    const newNode = new Node(value)
       this.head = newNode
       this.tail = this.head
       this.length = 1 
    }
    // PUSH
    push(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        }
        else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        console.log(this)
        return this   
     }
    //  POP
     pop() {
        if (!this.head) return undefined 
        if (this.length === 1) {
            this.head = null
            this.tail = null
        }
            const pre = this.head
            const temp = this.head

        while (temp.next) {
        }
        this.length--

    
        return this   
     }
}

const ll = new LinkedList(1)

console.log(ll.push)

ll.push(3)



