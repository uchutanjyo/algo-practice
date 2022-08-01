// linked list stacks - null terminated end (start) is always going to be at the top
// because, removing / adding to the top (shift/unshift) are both O(n). on the other end, it's O(n) and O(1)

// 

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        const newNode = new Node(value)
        this.top = newNode;
        this.length = 1;
    }
    // similar to unshift in LL
    push() {
        const newNode = new Node(value)
        if (this.length === 0) {
            this.top = newNode
        }
        else {
            newNode.next = this.top
            this.top = newNode
        }
        this.length++
        return this
    }
}

let newStack = new Stack(22)

console.log(newStack)