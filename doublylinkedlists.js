class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = this.head;
    this.length = 1;
  }
  // PUSH
  push(value) {
    //   creates a new node instance? from Node class
    const newNode = new Node(value);
    if (!this.head) {
        // edge case: if the LL is empty (no head), make the newNode the head, and set the tail as equal to the head.
      this.head = newNode;
  
      this.tail = newNode;
    } else {
        // if the LL not empty, set the 'next' property of the current tail to the newNode, which slots it in after the tail.
      this.tail.next = newNode;
      // this is the only difference from LL - the .prev of newNode is set to this.tail so it will point back to the previous node (at the end of the DLL)
      newNode.prev = this.tail;
    //   then, assign 'tail' to the newNode. the 'next' of newNode is already 'null' so, eveyrthing is set for it to be inserted at the 'end' of the LL.
      this.tail = newNode;
      
    }
    this.length++;
    // increase length by 1
    return this;
    // return entire LL.
  }
  //  POP
  pop() {
    if (!this.head) return undefined;
    let pre = this.head;
    let temp = this.head;
    // sets a variable 'pre' which will eventually become the tail node, and a temporary variable 'temp' which will be returned at the end
    while (temp.next) {
      // while temp.next has a value - not null, as it will be in the tail
      pre = temp;
      temp = temp.next;
      // pre is set to the value of temp, then temp becomes the next value in the linked list - this is how we can iterate through a linked list
    }
    //    when temp.next is finally 'null', we have reached the tail.
    this.tail = pre;
    // we then set tail to pre, which will be the 2nd last node in the LL.
    this.tail.next = null;
    // we set tail.next to null, so it becomes the last node in the LL - its 'next' is not pointing to anything.
    this.length--;
    // reudce length by 1.
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // edge case - if the LL is empty - we set the head  & tail both to null.
    console.log(temp)
    temp.prev = null
    return temp;
    // return temp - the node we are Popping off from the end of the LL.
  }
    //  unshift
    unshift(value) {
        const newNode = new Node(value);
        // create new node - value will be argument passed to unshift().
        newNode.next = this.head
        // sets 'next' of new node to the current value of first node in LL
        this.head = newNode
        // set 'head' to the new node. this moves the head property from the new node rather than the prev. head.
        this.length++
        // increase length by 1
        return this
         // return entire LL which now has the newNode at the 'head' position.
    }
    shift() {
        if (!this.head) return undefined
        // if empty LL
        const toShift = this.head
        // capture the current head in a variable for use later
        this.head = this.head.next
        // set head to head.next - the node after head
        toShift.next = null
        // sets next property of toShift to null
        if (this.length === 1) {
            this.head = null
            this.tail = null
        }
        // edge case : if we are dealing with a LL with just one node, set head/tail properties to null (there will be no nodes left to be pointed to by these props)
        this.length--
        // reduce length by 1
        return toShift
         // if LL had 1 node, make sure head/tail are set to null after shift()

    }
    // GET
    get(index) {
        // index will be the index within the LL we are looking for
        if (index < 0 || index >= this.length) return undefined
        // edge case - if the index requested is less than 0 or greater than or equal to the length of the LL, return undefined (these values won't exist)
        let temp = this.head
        // assign value of this.head to a temp variable
        for (let i = 0; i < index; i++ ) {
            // iterate up from 0 while i is less than the index w'ere looking for.
            temp = temp.next
            // on each iteration, set temp to temp.next (the next node in sequence in LL). stop when i === index.
        }
        return temp
        // return temp, which will be the value found at the index we have set as an argument in get()
    }
// SET
    set(index, value) {
        let i = this.get(index)
        // i is a temp variable which is set equal to an index we Get using the Get method.
        if (i) {
        i.value = value
        // change the value of the i to the value passed in as an arugment
        return true}
        else {
            return false
        }
    }
    // INSERT
    insert(index, value) {
        const newNode = new Node(value);
        // create a new node
        if (index === 0) return this.unshift(value)
        // use unshift if we want to put the new node at index 0
        if (index === this.length) return this.push(value)
        // use push if we want to put the new node at the end of the array
        if (index < 0 || index >= this.length) { 
            console.log('nah'); return false
    }
        // 'nah'
        let i = this.get(index -1)
        // i is the index BEFORE the index we want to insert the node into
        if (i) {
            newNode.next = i.next
            // sets the .next property of the new node to the .next of the current node taking the index before the space we want to occupy with the new node (wordiest sentence ever)
            i.next = newNode
            // sets the .next property of the index -1  node to the new node. these two steps effectively insert the new node into the spot we want it to go.
            this.length++
            return true
        }
        return false
    }
    // REMOVE
    // i wrote this w/o using shift or pop because i thought the instructor wanted us to literally 'delete' the removed node..not return it. 
    remove(index) {
        
        if (index < 0 || index >= this.length) { 
            console.log('nah'); return false
            }
        let i = this.get(index)
        // set temp variable to index passed to remove()
        if (index===0) {
            this.head = i.next
            // set the head to the node with an index of 1
            i.next = null;
            // break i off from chain by setting its next to null
            this.length--
            // decrement length by 1
            return i
            // return the removed node
        }
        let i2 = this.get(index - 1)
        // if index not 0, there will be an index before it, so can define i2 variable as index - 1
         if (index === this.length - 1) {
            //  if index is the node in the last index position..
             i2.next = null
            //  set the .next property of the  node before it (2nd last node) to null
             this.tail = i2
            //  set the tail property to the 2nd last node
        
        }
        else {
            // any other number in the LL..
            i2.next = i.next
            // set the .next of i2 to the .next of i, joining those two nodes and breaking off the removed node
        }
            i.next = null 
            //  set i.next to null
            this.length--
            console.log(i)
            return i
    }
    // note: i want to revisit this and make sure I am following big O

    // REVERSE
    reverse() {
        let temp = this.head
        // sets 'temp' to the current value of this.head
        this.head = this.tail 
        // sets this.head to the current value of this.tail
        this.tail = temp
        // sets this.tail to the saved, original this.head
        let prev = null
        let next = temp.next
        for (let i=0; i < this.length; i++) {
        next = temp.next
        temp.next = prev;
        prev = temp
        temp = next
        }
        return this
    }
}

const ll = new DoublyLinkedList(1);

ll.push(4)
ll.push(5)

ll.pop()

console.log(ll);
