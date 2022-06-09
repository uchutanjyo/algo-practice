console.log("");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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
      this.tail = this.head;
    } else {
        // if the LL not empty, set the 'next' property of the current tail to the newNode, which slots it in after the tail.
      this.tail.next = newNode;
    //   then, assign 'tail' to the newNode. the 'next' of newNode is already 'null' so, eveyrthing is set for it to be inserted at the 'end' of the LL.
      this.tail = newNode;
    }
    this.length++;
    // increase length by 1
    console.log(this);
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
    console.log(temp);
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    // edge case - if the LL is empty - we set the head  & tail both to null.
    return temp;
    // return temp - the node we are Popping off from the end of the LL.
  }
}

const ll = new LinkedList(1);

ll.push(4);
ll.push(7);

ll.pop();

console.log(ll);
