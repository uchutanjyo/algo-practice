// node class - 

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}


class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        this.tail.next = newNode;
        this.tail = newNode
        this.length++;
        return this
    }
    pop() {
        if (!this.head) {
            return undefined
        }
        let pre = this.head
        let temp = this.head
        while(temp.next) {
            pre = temp;
            temp = temp.next
        }
            this.tail = pre;
            this.tail.next = null
            this.length--
            return this
    }
}


const ll = new LinkedList(1);

ll.push(4)
ll.push(7)
ll.push(9)

ll.pop()

console.log(ll)
