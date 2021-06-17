class Node {
  val: number;
  next: any;
  constructor(val: number) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  head: Node | null;
  tail: Node | null;
  length: number;
  constructor(head: Node, tail: Node) {
    this.head = head;
    this.tail = tail;
    this.length = 1;
  }
  push(val: number) {
    if(!this.head) {
      const newNode = new Node(val);
      this.head = newNode;
      this.tail = newNode;
    } else if(!this.head.next){
      const newNode = new Node(val);
      this.head.next = newNode;
      this.tail = newNode;
    } else {
      const newNode = new Node(val);
      if(this.tail) this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }
  pop() {
    if(!this.head) return undefined;
    let currentNode = this.head;
    let newTail = currentNode;
    while(currentNode && currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next; //traverse linkedList
      //when currentNode.next === null
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if(this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }
  unshift(val: number) {
    if(!this.head) {
      const newNode = new Node(val);
      this.head = newNode;
      this.tail = newNode;
    } else {
      const newNode = new Node(val);
      const prevNode = this.head;
      this.head = newNode;
      this.head.next = prevNode;
    }
    this.length += 1;
    return this;
  }

  shift() {
    const currentNode = this.head;
    if(currentNode) {
      const newHead = currentNode.next;
      this.head = newHead;
      if(this.head && !this.head.next) {
        this.head = null;
        this.tail = null;
      }
    }
    this.length -= 1;
    return currentNode;
  }
  get(idx: number) {
    if(idx < 0 || idx >= this.length) return null;
    if(idx === 0) return this.head;
    let currentNode = this.head;
    while(currentNode && idx > 0) {
      idx -= 1;
      currentNode = currentNode.next; 
     // 15 => 35 => 25
    }
    return currentNode;
  }
  set(val: number, idx: number) {
    const setNode = this.get(idx);
    if(setNode) {
      setNode.val = val;
      return true;
    }
    return false;
  }
  insert(val: number, idx: number) { // 1
     if(idx < 0 || idx > this.length) return false;
     let currentNode = this.head;
     while(idx > 0) {
       idx -= 1;
      if(currentNode && idx === 0) {
        const newNode = new Node(val);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        // currentNode = currentNode.next;
      }
     }
     this.length += 1;
     console.log(currentNode);
  }
  remove() {

  }
  reverse() {
    //declare currentNode
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    let next = null;
    let prev = null;
    for(let i = 0; i < this.length; i += 1) {
      if(currentNode) {
        next = currentNode.next; //1400
        currentNode.next = prev;
      }
      prev = currentNode;
      currentNode = next;
    }
    return this;
  }
  traverse() {
    let currentNode = this.head;
    while(currentNode) {
      currentNode = currentNode.next;
    }
  }
  size() {

  }
}
const initializationNode = new Node(2);
const newSinglyLinkedList = new SinglyLinkedList(initializationNode, initializationNode);

export {
  newSinglyLinkedList,
  Node
}