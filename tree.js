/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) {
      return 0;
    }
    let sum = this.root.val;

    function findSum(node) {
      for (let child of node.children) {
        // console.log("CHILD", child)
        sum += child.val
        // console.log("CHILD VALUE", child.val)
        // console.log("SUM", sum)

        // if the child has a child, findSum again for all of the children of that node
        if (child.children.length > 0) {
          findSum(child)
        }
      }
    }
    findSum(this.root);
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    let total = 0;
    if (!this.root) {
      return 0;
    }

    if (this.root % 2 === 0) {
      total = 1;
    }

    function findEvens(node) {
      for (let child of node.children) {
        // console.log("CHILD", child)
        if (child.val % 2 === 0) {
          total += 1
        }

        if (child.children.length > 0) {
          findEvens(child)
        }
      }
    }

    findEvens(this.root);
    return total;

  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    let total = 0;
    if (!this.root) {
      return 0;
    }

    if (this.root.val > lowerBound) {
      // console.log("HI")
      total += 1;
    }

    function findGreater(node) {
      for (let child of node.children) {
        // console.log("CHILD", child)
        if (child.val > lowerBound) {
          total += 1
        }
        if (child.children.length > 0) {
          findGreater(child)
        }
      }
    }
    findGreater(this.root);
    return total;

  }
}

module.exports = { Tree, TreeNode };
