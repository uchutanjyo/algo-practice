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
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
            return temp;
    }
    // unshift
    unshift(value) {
        const newNode = new Node(value) 
        if (!this.head) {
            newNode = this.head
            this.tail = this.head
        }
         newNode.next = this.head;
         this.head = newNode
         this.length++
         return this
    }
    shift() {
        if (!this.head) {
            return undefined
        }
      
        let temp = this.head;
        this.head = this.head.next
        temp.next = null;
        if (this.length === 1) {
        this.head = null
        this.tail = null
        }
        this.length--
        console.log(temp)
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
        let i = this.get(index);
        if (i) {
            i = value;
            return true
        }
        return false
    }
    insert(index, value) {
        if (index === 0 ) {
          return this.unshift(newNode);
        }
        if (index === this.length) {
           return this.push(value)
        }
        if (index < 0 || index > this.length) {
            return false
        }
        const newNode = new Node(value);
        let i = this.get(index - 1);
        if (i) {
        newNode.next = i.next
        i.next = newNode
        this.length++;
        return true
        }
        return false
    }
    remove(index) {
        if (index < 0 || index > this.length) return false
        if (index === this.length - 1) return this.pop()
        if (index === 0) return this.shift()
        
        let before = this.get(index - 1)
        let temp = before.next
        before.next = temp.next
        temp.next = null
        this.length--
        console.log(temp)
        return temp
    }
    reverse() {
        console.log('original LL', this)

        let temp = this.head
        this.head = this.tail
        this.tail = temp

        let prev = null
        let next = temp.next
        for (let i = 0; i < this.length; i++) {
            next = temp.next
            console.log('next', next)
            temp.next = prev;
            console.log('temp.next', temp.next)
            prev = temp
            console.log('prev',prev)
            temp = next
            console.log('temp', temp)
            console.log('endo')
        }
        return this
    }
}


const ll = new LinkedList(1);

ll.push(2)

ll.push(3)

ll.push(4)


ll.reverse()

console.log(ll)
