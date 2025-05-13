// tree.js
import { Node } from "./node.js";
export class Tree {
    constructor(arr) {
        this.arr = arr;
        this.root = null;
    }

    sortedArrayToBST(arr, start, end) {
        if(start > end) return null;

        let mid = start + Math.floor((end-start) / 2);
        let root = new Node(arr[mid]);
        root.left = this.sortedArrayToBST(arr, start, mid - 1);
        root.right = this.sortedArrayToBST(arr, mid + 1, end);

        return root;
    }

    prettyPrint(node, prefix="", isLeft = true) {
        if (node === null) {
            return;
        }
        if (node.right !== null) {
            this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
            this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    }

    buildTree(array) {
        const cleanArray = [...new Set(array)].sort((x, y) => x - y);
        this.root = this.sortedArrayToBST(cleanArray, 0, cleanArray.length - 1);
        return this.root; 
    }

    _insertRec(node, value) {
        if(node === null) return new Node(value);

        if(value < node.data) node.left = this._insertRec(node.left, value);
        else if(value > node.data) node.right = this._insertRec(node.right, value);

        return node;
    }

    insert(value) {
        this.root = this._insertRec(this.root, value)
    }

    _deleteRec(node, value) {
        if(node === null) return node;

        if(value < node.data) {
            node.left = this._deleteRec(node.left, value);
        }
        else if(value > node.data) {
            node.right = this._deleteRec(node.right, value);
        }
        else {
            if(node.left === null) return node.right;

            if(node.right === null) return node.left;

            let succ = this.getSuccessor(node);
            node.data = succ.data;
            node.right = this._deleteRec(node.right, succ.data);
        }
        return node;
    }

    getSuccessor(curr) {
        curr = curr.right;
        while(curr != null && curr.left != null) {
            curr = curr.left;
        }
        return curr;
    }

    delete(value) {
        this.root = this._deleteRec(this.root, value);
    }

    _search(node, value) {
        if(node === null || node.data === value) return node;

        if(node.data < value) return this._search(node.right, value);

        return this._search(node.left, value);
    }

    find(value) {
        return this._search(this.root, value);
    }

    levelOrder(callback) {
        if(typeof callback !== "function") {
            throw new Error("levelOrder requires a callback function");
        }

        if(!this.root) return;

        const queue = [this.root];
        while(queue.length) {
            const node = queue.shift();
            callback(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
    }

    inOrder(callback)   { this.dfs(callback, "in");  }
    preOrder(callback)  { this.dfs(callback, "pre"); }
    postOrder(callback) { this.dfs(callback, "post"); }

    dfs(callback, order) {
        if (typeof callback !== "function") {
          throw new Error(`${order}Order requires a callback function`);
        }
        const traverse = (node) => {
          if (!node) return;
          if (order === "pre")  callback(node);
          traverse(node.left);
          if (order === "in")   callback(node);
          traverse(node.right);
          if (order === "post") callback(node);
        };
        traverse(this.root);
    }

    _height(node) {
        if (!node) return -1;
        return 1 + Math.max(this._height(node.left), this._height(node.right));
    }
      
      height(value) {
        const start = this.find(value);
        return start ? this._height(start) : null;
    }
      
      _depth(node, value, d = 0) {
        if (!node) return -1;
        if (node.data === value) return d;
        return value < node.data
             ? this._depth(node.left,  value, d + 1)
             : this._depth(node.right, value, d + 1);
    }
      
      depth(value) {
        const d = this._depth(this.root, value);
        return d === -1 ? null : d;
    }

    _isBalanced(node) {
        if (!node) return [true, -1];
        const [leftOk,  lH] = this._isBalanced(node.left);
        const [rightOk, rH] = this._isBalanced(node.right);
        const balanced = leftOk && rightOk && Math.abs(lH - rH) <= 1;
        return [balanced, 1 + Math.max(lH, rH)];
    }
      
      isBalanced() {
        return this._isBalanced(this.root)[0];
    }

      rebalance() {
        const values = [];
        this.inOrder((node) => values.push(node.data));
        this.root = this.sortedArrayToBST(values, 0, values.length - 1);
    }
}
