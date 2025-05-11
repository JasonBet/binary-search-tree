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
}
