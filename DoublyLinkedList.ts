class DLLNode {
  val: number;
  next: any;
  prev: any;
  constructor(val: number) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  head: DLLNode | null;
  tail: DLLNode | null;
  length: number;
  constructor(head: DLLNode, tail: DLLNode) {
    this.head = head;
    this.tail = tail;
    this.length = 1;
  }
  push(val: number) {
    const newNode = new DLLNode(val);
    if(!this.head) this.head = newNode;
    if(!this.tail) this.tail = newNode;
    if(this.tail) {
      const prev = this.tail;
      prev.next = newNode;
      newNode.prev = prev;
      this.tail = newNode;
    }
    this.length += 1;
  }
  pop() {
    if(!this.tail) return 'There is nothing to remove.';
    if(this.tail === this.head) { //remove head and tail if they're equivalent. Should 
      this.tail = null;
      this.head = null;
    }
    if(this.tail) { //previous node becomes the new tail.
      const removedNode = this.tail;
      const prev = removedNode.prev;
      this.tail = prev;
      if(this.tail) this.tail.next = null;
      this.length -= 1;
      return removedNode;
    }
  }
  shift() {

  }
  unshift() {
    
  }
}

const initializationNode = new DLLNode(10);
const newDoublyLinkedList = new DoublyLinkedList(initializationNode, initializationNode);


export {
  newDoublyLinkedList
}