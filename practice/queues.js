
    // enque/deque / FIFO (firstinfirstout)
    // remember pop/push is O(1), shift/unshift O(n) ( no way to get around this )
    // as long as they're opposite ends, it doesnt matter which side we do w/e from.
    // compared to LL, shift/unshift are both O(1), pop/push - pop is O(n) and push is O(1). so, with LL, you don't want to dequeue from the end (b/c O(n)) - you want to from the front.
    // Queues - first/last rather than head/tail

    class Node {
        constructor(value) {
            this.value = value;
            this.next = null;
        }
    }

    class Queue {
        constructor (value) {
            const newNode = new Node(value)
            this.first = newNode
            this.last = newNode
            this.length = 1
        }
        enqueue(value) {
            const newNode = new Node(value)
            if (this.length === 0) {
                this.first = newNode
                this.last = newNode
            }
            this.last.next = newNode
            this.last = newNode
            this.length++
            return this
        }
        dequeue() {
            if (this.length === 0) return undefined
            const temp = this.first
            if (this.length === 1) {
                this.first = null
                this.last = null
            } else {
            this.first = temp.next
            temp.next = null;
            }
            this.length--
            return temp
    }
    }

    const newQ = new Queue(3)

    newQ.enqueue(4)

    newQ.enqueue(4)

    newQ.dequeue()


    console.log(newQ)