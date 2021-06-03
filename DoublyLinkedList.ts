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
    if(!this.head && !this.tail) return "There is nothing to remove.";
    if(this.head) {
      const next = this.head.next;
      if(next) next.prev = null;
      this.head = next;
      this.length -= 1;
    }
  }
  unshift(val: number) {
    const newNode = new DLLNode(val);
    if(!this.head && !this.tail) {
      this.head = newNode;
      this.tail = newNode;
    }
    if(this.head) {
      this.head.prev = newNode; //set current head to newNode as previous
      newNode.next = this.head; //set the newNodes' next to the current head
      this.head = newNode; //reassign head to be the new node
    }
  }
  get(idx: number) {
    const mid = Math.floor(this.length / 2);
    let current = this.head;
    if(idx < mid) {
      //traverse the list forward
      while((idx) > 0) {
        if(this.head){
          current = this.head.next;
        }
        idx -= 1;
      }
    } else {
      //traverse the list in reverse
      while((idx) > mid) {
        if(this.tail){
          current = this.tail.next;
        }
        idx -= 1;
      }
    }
    return current ? current.val : false;
  }
}

const initializationNode = new DLLNode(10);
const newDoublyLinkedList = new DoublyLinkedList(initializationNode, initializationNode);


export {
  newDoublyLinkedList
}