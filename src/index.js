import { Tree } from "./tree.js";

const arr = [9, 3, 1, 4, 18, 9, 2, 10];
const tree = new Tree(arr);

tree.buildTree(arr);


tree.insert(22);
tree.insert(33)
tree.prettyPrint(tree.root);
console.log(tree.isBalanced());
tree.rebalance();
tree.prettyPrint(tree.root);