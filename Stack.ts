interface Contents {
  [key: number]: number | string | null;
}

class StackAsAnArray {
  stack: Array<number>;
  size: number;
  constructor() {
    this.stack = [];
    this.size = this.stack.length;
  }
  push(val: number) {
    //avoiding built in array method for funsies.
    this.stack[this.size] = val;
  }
  pop() {
    const poppedItem = this.stack[this.size - 1];
    delete this.stack[this.size - 1];
    return poppedItem;
  }
  shift() {

  }
  unshift(val: number) {
    this.stack[0] = val;
    //set the first element to be the new value
    for(let i = 1; i < this.size; i += 1) {
      const placeholder = this.stack[i];
      if(this.stack[i + 1]) {
        this.stack[i] = this.stack[i + 1];
        this.stack[i + 1] = placeholder;
      }
    }
  }
}

class Stack {
  contents: Contents;
  size: number;
  constructor() {
    this.contents = {};
    this.size = 0;
  }
  push(val: number) {
    this.contents[this.size] = val;
    this.size += 1;
  }
  pop() {
    const poppedItem = this.contents[this.size - 1];
    delete this.contents[this.size - 1];
    return poppedItem;
  }
  shift() {

  }
  unshift() {

  }
}

const newStackAsArray = new StackAsAnArray();
const newStack = new Stack();

export {
  newStackAsArray,
  newStack
}