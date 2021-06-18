import { Queue } from './Queue';

class BSTNode {
  val: number;
  left: BSTNode | null;
  right: BSTNode | null;
  parent: BSTNode | null;
  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

class BST {
  root: BSTNode | null;
  constructor(root: BSTNode | null) {
    this.root = root;
  }
  insert(val: number) {
    if(!this.root) return this.root = new BSTNode(val);
    let currentNode = this.root;
    function recurse(current = currentNode): BSTNode | undefined{
      if(!current) return;
      if(val < current.val && !current.left && current) {//go left
        current.left = new BSTNode(val);
        current.left.parent = current;
        return current.left;
      }
      else if (val > current.val && !current.right && current){ //go right
        current.right = new BSTNode(val);
        current.right.parent = current;
        return current.right;
      } 
      else if(val < current.val && current.left) {
        return recurse(current.left);
      }
      else if(val > current.val && current.right) {
        return recurse(current.right);
      }
    }
    return recurse();
  }
  remove(val: number) {
    let currentNode = this.root;
    function recurse(current = currentNode) {
      if(current && val < current.val) {

      }
    }
  }
  contains(val: number) {
    let currentNode = this.root;
    function recurse(current = currentNode): boolean{
      if(!current) return false;
      if(current.val === val) {
        return true;
      } else {
        if(val < current.val) { //if less, traverse left
          return recurse(current.left);
        } else { //else traverse right
          return recurse(current.right);
        }
      }
    }
    return recurse();
  }
  preOrder(tree: BSTNode) { //DFS
    let currentNode = tree;
  }
  inOrder() { //DFS

  }

  postOrder() { //DFS

  }
  bfs(tree: BSTNode, val: number) {
    const myQueue: Array<BSTNode> = [],
          visited: Array<BSTNode | number> = [];
    myQueue.unshift(tree);
    // console.log(myQueue);
    while(myQueue.length) {
      let node = myQueue.shift(); //turns into the shifted node
      if(node && val === node.val) return true;
      if(node) visited.push(node.val);
      if(node && node.left) {
        myQueue.push(node.left);
      }
      if(node && node.right){
        myQueue.push(node.right);
      }
    }
    return visited;
  }
}

const newNode = new BSTNode(10);
const newBST = new BST(newNode);

export {
  newBST,
  newNode
}