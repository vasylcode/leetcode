/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
const postorder = function(root) {
    const solArr = [];
    const traverseTree = (node) => {
        if (!node) return;
        node.children.forEach((child) => traverseTree(child));
        solArr.push(node.val);
    }
    traverseTree(root);
    return solArr;
};
