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
  inOrder() {

  }
  preOrder() {

  }
  postOrder() {

  }
}

const newNode = new BSTNode(10);
const newBST = new BST(newNode);
// BST()

export {
  newBST
}