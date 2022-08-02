// LL are trees that don't fork.
// full tree: every item either points to 2 nodes or 0 nodes.
// perfect tree: every line is completely filled all the way across.always full and complete
// complete: every level except possibly the last is filled, and all nodes are as far to the left as possible -- - even if we add one more node, it's complete
// parent-child(sibling.s). child nodes ONLY have one parent.
// leaf nodes: nodes w/ no children



class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Binary search tree:
// one node is also 2 to the 1 - 1 node.
// 3 nodes = 2 to the 2 nodes -1
// every time we add a filled row, increase the power
// we drop the - 1.
// finding, removing, inserting a node all take the same number of steps (power #) -- Olog n
// divide and conquer, b/c every step we take down the tree we're cutting it in half
// wrost possible scenario: O(n), when each num is greater than the last so the tree never forks, and we don't get the advantage of being able to divide and conquer. having to do this is closer to  a O(log n) with binary search tree than LL.
// best possible: O(log n) (insert,lookup,remove())


// insert() - better with LL because it's O(1), just putting it on the end
// lookup() and remove () - better with BST, faster
// giving up some efficiency for inserting in order to make it faster to lookup or remove later
// arrays the same of linked lists in this way.

// you dont NEED to add a node at the time of creating hte tree 

class BST {
    constructor() {
        this.root = null
    }
    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
            return this
        }
        let temp = this.root
        while (true) {
            if (newNode.value === temp.value) return undefined
            if (newNode.value < temp.value) {
                if (temp.left === null) {
                    temp.left = newNode
                    return this
                }
                temp = temp.left
            } else {
                if (temp.right === null) {
                    temp.right = newNode
                    return this
                } 
                temp = temp.right
            }
        }
    }

    contains(value) {
        if (this.root === null) {
            return undefined
        }
        let temp = this.root
        while(temp) {
            if (value < temp.value) {
                temp = temp.left
                console.log('left')

            } 
            else if (value > temp.value) {
                temp = temp.right
                console.log('right')
            }
            else {
                console.log('yea')
                return true
            }
            console.log('neah')

        }
        return false

    }
    minValueNode(currentNode) {
        while (currentNode.left !== null) {
            currentNode = currentNode.left
        }
        return currentNode
    }
}


const newBST = new BST()

newBST.insert(1)
newBST.insert(2)
newBST.insert(3)
newBST.insert(4)
newBST.insert(20)
newBST.insert(30)
newBST.insert(40)
newBST.insert(50)

newBST.contains(40)



console.log(newBST)