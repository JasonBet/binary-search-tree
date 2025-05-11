import { Tree } from "./tree.js";

const arr = [9, 3, 1, 4, 18, 9, 2, 10];
const tree = new Tree(arr);

tree.buildTree(arr);
tree.prettyPrint(tree.root);

tree.delete(4);
tree.prettyPrint(tree.root);
