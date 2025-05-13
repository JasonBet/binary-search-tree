/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _tree_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree.js */ \"./src/tree.js\");\n\n\nconst arr = [9, 3, 1, 4, 18, 9, 2, 10];\nconst tree = new _tree_js__WEBPACK_IMPORTED_MODULE_0__.Tree(arr);\n\ntree.buildTree(arr);\n\n\ntree.insert(22);\ntree.insert(33)\ntree.prettyPrint(tree.root);\nconsole.log(tree.isBalanced());\ntree.rebalance();\ntree.prettyPrint(tree.root);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7QUFBaUM7O0FBRWpDO0FBQ0EsaUJBQWlCLDBDQUFJOztBQUVyQjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcz9kY2ZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyZWUgfSBmcm9tIFwiLi90cmVlLmpzXCI7XG5cbmNvbnN0IGFyciA9IFs5LCAzLCAxLCA0LCAxOCwgOSwgMiwgMTBdO1xuY29uc3QgdHJlZSA9IG5ldyBUcmVlKGFycik7XG5cbnRyZWUuYnVpbGRUcmVlKGFycik7XG5cblxudHJlZS5pbnNlcnQoMjIpO1xudHJlZS5pbnNlcnQoMzMpXG50cmVlLnByZXR0eVByaW50KHRyZWUucm9vdCk7XG5jb25zb2xlLmxvZyh0cmVlLmlzQmFsYW5jZWQoKSk7XG50cmVlLnJlYmFsYW5jZSgpO1xudHJlZS5wcmV0dHlQcmludCh0cmVlLnJvb3QpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/node.js":
/*!*********************!*\
  !*** ./src/node.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Node: () => (/* binding */ Node)\n/* harmony export */ });\n// node.js\nclass Node {\n    constructor(data) {\n        this.data = data;\n        this.left = null;\n        this.right = null;\n    }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbm9kZS5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvbm9kZS5qcz9mNmU0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIG5vZGUuanNcbmV4cG9ydCBjbGFzcyBOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMubGVmdCA9IG51bGw7XG4gICAgICAgIHRoaXMucmlnaHQgPSBudWxsO1xuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/node.js\n");

/***/ }),

/***/ "./src/tree.js":
/*!*********************!*\
  !*** ./src/tree.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Tree: () => (/* binding */ Tree)\n/* harmony export */ });\n/* harmony import */ var _node_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node.js */ \"./src/node.js\");\n// tree.js\n\nclass Tree {\n    constructor(arr) {\n        this.arr = arr;\n        this.root = null;\n    }\n\n    sortedArrayToBST(arr, start, end) {\n        if(start > end) return null;\n\n        let mid = start + Math.floor((end-start) / 2);\n        let root = new _node_js__WEBPACK_IMPORTED_MODULE_0__.Node(arr[mid]);\n        root.left = this.sortedArrayToBST(arr, start, mid - 1);\n        root.right = this.sortedArrayToBST(arr, mid + 1, end);\n\n        return root;\n    }\n\n    prettyPrint(node, prefix=\"\", isLeft = true) {\n        if (node === null) {\n            return;\n        }\n        if (node.right !== null) {\n            this.prettyPrint(node.right, `${prefix}${isLeft ? \"│   \" : \"    \"}`, false);\n        }\n        console.log(`${prefix}${isLeft ? \"└── \" : \"┌── \"}${node.data}`);\n        if (node.left !== null) {\n            this.prettyPrint(node.left, `${prefix}${isLeft ? \"    \" : \"│   \"}`, true);\n        }\n    }\n\n    buildTree(array) {\n        const cleanArray = [...new Set(array)].sort((x, y) => x - y);\n        this.root = this.sortedArrayToBST(cleanArray, 0, cleanArray.length - 1);\n        return this.root; \n    }\n\n    _insertRec(node, value) {\n        if(node === null) return new _node_js__WEBPACK_IMPORTED_MODULE_0__.Node(value);\n\n        if(value < node.data) node.left = this._insertRec(node.left, value);\n        else if(value > node.data) node.right = this._insertRec(node.right, value);\n\n        return node;\n    }\n\n    insert(value) {\n        this.root = this._insertRec(this.root, value)\n    }\n\n    _deleteRec(node, value) {\n        if(node === null) return node;\n\n        if(value < node.data) {\n            node.left = this._deleteRec(node.left, value);\n        }\n        else if(value > node.data) {\n            node.right = this._deleteRec(node.right, value);\n        }\n        else {\n            if(node.left === null) return node.right;\n\n            if(node.right === null) return node.left;\n\n            let succ = this.getSuccessor(node);\n            node.data = succ.data;\n            node.right = this._deleteRec(node.right, succ.data);\n        }\n        return node;\n    }\n\n    getSuccessor(curr) {\n        curr = curr.right;\n        while(curr != null && curr.left != null) {\n            curr = curr.left;\n        }\n        return curr;\n    }\n\n    delete(value) {\n        this.root = this._deleteRec(this.root, value);\n    }\n\n    _search(node, value) {\n        if(node === null || node.data === value) return node;\n\n        if(node.data < value) return this._search(node.right, value);\n\n        return this._search(node.left, value);\n    }\n\n    find(value) {\n        return this._search(this.root, value);\n    }\n\n    levelOrder(callback) {\n        if(typeof callback !== \"function\") {\n            throw new Error(\"levelOrder requires a callback function\");\n        }\n\n        if(!this.root) return;\n\n        const queue = [this.root];\n        while(queue.length) {\n            const node = queue.shift();\n            callback(node);\n            if(node.left) queue.push(node.left);\n            if(node.right) queue.push(node.right);\n        }\n    }\n\n    inOrder(callback)   { this.dfs(callback, \"in\");  }\n    preOrder(callback)  { this.dfs(callback, \"pre\"); }\n    postOrder(callback) { this.dfs(callback, \"post\"); }\n\n    dfs(callback, order) {\n        if (typeof callback !== \"function\") {\n          throw new Error(`${order}Order requires a callback function`);\n        }\n        const traverse = (node) => {\n          if (!node) return;\n          if (order === \"pre\")  callback(node);\n          traverse(node.left);\n          if (order === \"in\")   callback(node);\n          traverse(node.right);\n          if (order === \"post\") callback(node);\n        };\n        traverse(this.root);\n    }\n\n    _height(node) {\n        if (!node) return -1;\n        return 1 + Math.max(this._height(node.left), this._height(node.right));\n    }\n      \n      height(value) {\n        const start = this.find(value);\n        return start ? this._height(start) : null;\n    }\n      \n      _depth(node, value, d = 0) {\n        if (!node) return -1;\n        if (node.data === value) return d;\n        return value < node.data\n             ? this._depth(node.left,  value, d + 1)\n             : this._depth(node.right, value, d + 1);\n    }\n      \n      depth(value) {\n        const d = this._depth(this.root, value);\n        return d === -1 ? null : d;\n    }\n\n    _isBalanced(node) {\n        if (!node) return [true, -1];\n        const [leftOk,  lH] = this._isBalanced(node.left);\n        const [rightOk, rH] = this._isBalanced(node.right);\n        const balanced = leftOk && rightOk && Math.abs(lH - rH) <= 1;\n        return [balanced, 1 + Math.max(lH, rH)];\n    }\n      \n      isBalanced() {\n        return this._isBalanced(this.root)[0];\n    }\n\n      rebalance() {\n        const values = [];\n        this.inOrder((node) => values.push(node.data));\n        this.root = this.sortedArrayToBST(values, 0, values.length - 1);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHJlZS5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ2lDO0FBQzFCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QiwwQ0FBSTtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QyxPQUFPLEVBQUUseUJBQXlCO0FBQzlFO0FBQ0EsdUJBQXVCLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxVQUFVO0FBQ3JFO0FBQ0EsMkNBQTJDLE9BQU8sRUFBRSx5QkFBeUI7QUFDN0U7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLDBDQUFJOztBQUV6QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwwQkFBMEI7QUFDMUIsMEJBQTBCO0FBQzFCLDBCQUEwQjs7QUFFMUI7QUFDQTtBQUNBLDZCQUE2QixNQUFNO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3RyZWUuanM/NmI5NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0cmVlLmpzXG5pbXBvcnQgeyBOb2RlIH0gZnJvbSBcIi4vbm9kZS5qc1wiO1xuZXhwb3J0IGNsYXNzIFRyZWUge1xuICAgIGNvbnN0cnVjdG9yKGFycikge1xuICAgICAgICB0aGlzLmFyciA9IGFycjtcbiAgICAgICAgdGhpcy5yb290ID0gbnVsbDtcbiAgICB9XG5cbiAgICBzb3J0ZWRBcnJheVRvQlNUKGFyciwgc3RhcnQsIGVuZCkge1xuICAgICAgICBpZihzdGFydCA+IGVuZCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgbGV0IG1pZCA9IHN0YXJ0ICsgTWF0aC5mbG9vcigoZW5kLXN0YXJ0KSAvIDIpO1xuICAgICAgICBsZXQgcm9vdCA9IG5ldyBOb2RlKGFyclttaWRdKTtcbiAgICAgICAgcm9vdC5sZWZ0ID0gdGhpcy5zb3J0ZWRBcnJheVRvQlNUKGFyciwgc3RhcnQsIG1pZCAtIDEpO1xuICAgICAgICByb290LnJpZ2h0ID0gdGhpcy5zb3J0ZWRBcnJheVRvQlNUKGFyciwgbWlkICsgMSwgZW5kKTtcblxuICAgICAgICByZXR1cm4gcm9vdDtcbiAgICB9XG5cbiAgICBwcmV0dHlQcmludChub2RlLCBwcmVmaXg9XCJcIiwgaXNMZWZ0ID0gdHJ1ZSkge1xuICAgICAgICBpZiAobm9kZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub2RlLnJpZ2h0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnByZXR0eVByaW50KG5vZGUucmlnaHQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwi4pSCICAgXCIgOiBcIiAgICBcIn1gLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYCR7cHJlZml4fSR7aXNMZWZ0ID8gXCLilJTilIDilIAgXCIgOiBcIuKUjOKUgOKUgCBcIn0ke25vZGUuZGF0YX1gKTtcbiAgICAgICAgaWYgKG5vZGUubGVmdCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5wcmV0dHlQcmludChub2RlLmxlZnQsIGAke3ByZWZpeH0ke2lzTGVmdCA/IFwiICAgIFwiIDogXCLilIIgICBcIn1gLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJ1aWxkVHJlZShhcnJheSkge1xuICAgICAgICBjb25zdCBjbGVhbkFycmF5ID0gWy4uLm5ldyBTZXQoYXJyYXkpXS5zb3J0KCh4LCB5KSA9PiB4IC0geSk7XG4gICAgICAgIHRoaXMucm9vdCA9IHRoaXMuc29ydGVkQXJyYXlUb0JTVChjbGVhbkFycmF5LCAwLCBjbGVhbkFycmF5Lmxlbmd0aCAtIDEpO1xuICAgICAgICByZXR1cm4gdGhpcy5yb290OyBcbiAgICB9XG5cbiAgICBfaW5zZXJ0UmVjKG5vZGUsIHZhbHVlKSB7XG4gICAgICAgIGlmKG5vZGUgPT09IG51bGwpIHJldHVybiBuZXcgTm9kZSh2YWx1ZSk7XG5cbiAgICAgICAgaWYodmFsdWUgPCBub2RlLmRhdGEpIG5vZGUubGVmdCA9IHRoaXMuX2luc2VydFJlYyhub2RlLmxlZnQsIHZhbHVlKTtcbiAgICAgICAgZWxzZSBpZih2YWx1ZSA+IG5vZGUuZGF0YSkgbm9kZS5yaWdodCA9IHRoaXMuX2luc2VydFJlYyhub2RlLnJpZ2h0LCB2YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgaW5zZXJ0KHZhbHVlKSB7XG4gICAgICAgIHRoaXMucm9vdCA9IHRoaXMuX2luc2VydFJlYyh0aGlzLnJvb3QsIHZhbHVlKVxuICAgIH1cblxuICAgIF9kZWxldGVSZWMobm9kZSwgdmFsdWUpIHtcbiAgICAgICAgaWYobm9kZSA9PT0gbnVsbCkgcmV0dXJuIG5vZGU7XG5cbiAgICAgICAgaWYodmFsdWUgPCBub2RlLmRhdGEpIHtcbiAgICAgICAgICAgIG5vZGUubGVmdCA9IHRoaXMuX2RlbGV0ZVJlYyhub2RlLmxlZnQsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKHZhbHVlID4gbm9kZS5kYXRhKSB7XG4gICAgICAgICAgICBub2RlLnJpZ2h0ID0gdGhpcy5fZGVsZXRlUmVjKG5vZGUucmlnaHQsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmKG5vZGUubGVmdCA9PT0gbnVsbCkgcmV0dXJuIG5vZGUucmlnaHQ7XG5cbiAgICAgICAgICAgIGlmKG5vZGUucmlnaHQgPT09IG51bGwpIHJldHVybiBub2RlLmxlZnQ7XG5cbiAgICAgICAgICAgIGxldCBzdWNjID0gdGhpcy5nZXRTdWNjZXNzb3Iobm9kZSk7XG4gICAgICAgICAgICBub2RlLmRhdGEgPSBzdWNjLmRhdGE7XG4gICAgICAgICAgICBub2RlLnJpZ2h0ID0gdGhpcy5fZGVsZXRlUmVjKG5vZGUucmlnaHQsIHN1Y2MuZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgZ2V0U3VjY2Vzc29yKGN1cnIpIHtcbiAgICAgICAgY3VyciA9IGN1cnIucmlnaHQ7XG4gICAgICAgIHdoaWxlKGN1cnIgIT0gbnVsbCAmJiBjdXJyLmxlZnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgY3VyciA9IGN1cnIubGVmdDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY3VycjtcbiAgICB9XG5cbiAgICBkZWxldGUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5yb290ID0gdGhpcy5fZGVsZXRlUmVjKHRoaXMucm9vdCwgdmFsdWUpO1xuICAgIH1cblxuICAgIF9zZWFyY2gobm9kZSwgdmFsdWUpIHtcbiAgICAgICAgaWYobm9kZSA9PT0gbnVsbCB8fCBub2RlLmRhdGEgPT09IHZhbHVlKSByZXR1cm4gbm9kZTtcblxuICAgICAgICBpZihub2RlLmRhdGEgPCB2YWx1ZSkgcmV0dXJuIHRoaXMuX3NlYXJjaChub2RlLnJpZ2h0LCB2YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlYXJjaChub2RlLmxlZnQsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBmaW5kKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zZWFyY2godGhpcy5yb290LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgbGV2ZWxPcmRlcihjYWxsYmFjaykge1xuICAgICAgICBpZih0eXBlb2YgY2FsbGJhY2sgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwibGV2ZWxPcmRlciByZXF1aXJlcyBhIGNhbGxiYWNrIGZ1bmN0aW9uXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIXRoaXMucm9vdCkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHF1ZXVlID0gW3RoaXMucm9vdF07XG4gICAgICAgIHdoaWxlKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgbm9kZSA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgICAgICBjYWxsYmFjayhub2RlKTtcbiAgICAgICAgICAgIGlmKG5vZGUubGVmdCkgcXVldWUucHVzaChub2RlLmxlZnQpO1xuICAgICAgICAgICAgaWYobm9kZS5yaWdodCkgcXVldWUucHVzaChub2RlLnJpZ2h0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluT3JkZXIoY2FsbGJhY2spICAgeyB0aGlzLmRmcyhjYWxsYmFjaywgXCJpblwiKTsgIH1cbiAgICBwcmVPcmRlcihjYWxsYmFjaykgIHsgdGhpcy5kZnMoY2FsbGJhY2ssIFwicHJlXCIpOyB9XG4gICAgcG9zdE9yZGVyKGNhbGxiYWNrKSB7IHRoaXMuZGZzKGNhbGxiYWNrLCBcInBvc3RcIik7IH1cblxuICAgIGRmcyhjYWxsYmFjaywgb3JkZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke29yZGVyfU9yZGVyIHJlcXVpcmVzIGEgY2FsbGJhY2sgZnVuY3Rpb25gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0cmF2ZXJzZSA9IChub2RlKSA9PiB7XG4gICAgICAgICAgaWYgKCFub2RlKSByZXR1cm47XG4gICAgICAgICAgaWYgKG9yZGVyID09PSBcInByZVwiKSAgY2FsbGJhY2sobm9kZSk7XG4gICAgICAgICAgdHJhdmVyc2Uobm9kZS5sZWZ0KTtcbiAgICAgICAgICBpZiAob3JkZXIgPT09IFwiaW5cIikgICBjYWxsYmFjayhub2RlKTtcbiAgICAgICAgICB0cmF2ZXJzZShub2RlLnJpZ2h0KTtcbiAgICAgICAgICBpZiAob3JkZXIgPT09IFwicG9zdFwiKSBjYWxsYmFjayhub2RlKTtcbiAgICAgICAgfTtcbiAgICAgICAgdHJhdmVyc2UodGhpcy5yb290KTtcbiAgICB9XG5cbiAgICBfaGVpZ2h0KG5vZGUpIHtcbiAgICAgICAgaWYgKCFub2RlKSByZXR1cm4gLTE7XG4gICAgICAgIHJldHVybiAxICsgTWF0aC5tYXgodGhpcy5faGVpZ2h0KG5vZGUubGVmdCksIHRoaXMuX2hlaWdodChub2RlLnJpZ2h0KSk7XG4gICAgfVxuICAgICAgXG4gICAgICBoZWlnaHQodmFsdWUpIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLmZpbmQodmFsdWUpO1xuICAgICAgICByZXR1cm4gc3RhcnQgPyB0aGlzLl9oZWlnaHQoc3RhcnQpIDogbnVsbDtcbiAgICB9XG4gICAgICBcbiAgICAgIF9kZXB0aChub2RlLCB2YWx1ZSwgZCA9IDApIHtcbiAgICAgICAgaWYgKCFub2RlKSByZXR1cm4gLTE7XG4gICAgICAgIGlmIChub2RlLmRhdGEgPT09IHZhbHVlKSByZXR1cm4gZDtcbiAgICAgICAgcmV0dXJuIHZhbHVlIDwgbm9kZS5kYXRhXG4gICAgICAgICAgICAgPyB0aGlzLl9kZXB0aChub2RlLmxlZnQsICB2YWx1ZSwgZCArIDEpXG4gICAgICAgICAgICAgOiB0aGlzLl9kZXB0aChub2RlLnJpZ2h0LCB2YWx1ZSwgZCArIDEpO1xuICAgIH1cbiAgICAgIFxuICAgICAgZGVwdGgodmFsdWUpIHtcbiAgICAgICAgY29uc3QgZCA9IHRoaXMuX2RlcHRoKHRoaXMucm9vdCwgdmFsdWUpO1xuICAgICAgICByZXR1cm4gZCA9PT0gLTEgPyBudWxsIDogZDtcbiAgICB9XG5cbiAgICBfaXNCYWxhbmNlZChub2RlKSB7XG4gICAgICAgIGlmICghbm9kZSkgcmV0dXJuIFt0cnVlLCAtMV07XG4gICAgICAgIGNvbnN0IFtsZWZ0T2ssICBsSF0gPSB0aGlzLl9pc0JhbGFuY2VkKG5vZGUubGVmdCk7XG4gICAgICAgIGNvbnN0IFtyaWdodE9rLCBySF0gPSB0aGlzLl9pc0JhbGFuY2VkKG5vZGUucmlnaHQpO1xuICAgICAgICBjb25zdCBiYWxhbmNlZCA9IGxlZnRPayAmJiByaWdodE9rICYmIE1hdGguYWJzKGxIIC0gckgpIDw9IDE7XG4gICAgICAgIHJldHVybiBbYmFsYW5jZWQsIDEgKyBNYXRoLm1heChsSCwgckgpXTtcbiAgICB9XG4gICAgICBcbiAgICAgIGlzQmFsYW5jZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc0JhbGFuY2VkKHRoaXMucm9vdClbMF07XG4gICAgfVxuXG4gICAgICByZWJhbGFuY2UoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuICAgICAgICB0aGlzLmluT3JkZXIoKG5vZGUpID0+IHZhbHVlcy5wdXNoKG5vZGUuZGF0YSkpO1xuICAgICAgICB0aGlzLnJvb3QgPSB0aGlzLnNvcnRlZEFycmF5VG9CU1QodmFsdWVzLCAwLCB2YWx1ZXMubGVuZ3RoIC0gMSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/tree.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;