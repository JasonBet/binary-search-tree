import { Tree } from "./tree.js";

const arr = [9, 3, 1, 4, 8, 9, 2];
const tree = new Tree(arr);

console.log(tree.buildTree(arr));
