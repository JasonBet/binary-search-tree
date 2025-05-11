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
        this.prettyPrint(this.root);
        return this.root; 
    }
}
