import { Node } from './SinglyLinkedList';
/*
class Node {
  val: number;
  next: any;
  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}
*/

class Queue {
  first: Node | null;
  last: Node | null;
  size: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val: number) {
    if(!this.first) {
      const newNode = new Node(val);
      this.first = newNode;
      this.last = newNode;
      this.size += 1;
    } else {
      const current = this.last,
            newNode = new Node(val);
      if(current) current.next = newNode;
      this.last = newNode;
      this.size += 1;
    }
  }
  dequeue() {
    if(!this.first) return null;
    const current = this.first;
    if(this.first === this.last) this.last = null;
    this.first = this.first.next;
    this.size -= 1;
    return current.val;
  }
}

const newQueue = new Queue();

export {
  newQueue,
  Queue
}