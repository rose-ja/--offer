/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  let ans = 0;
  function dfs(node, depth) {
    if (node === null) return;
    depth++;
    ans = Math.max(ans, depth);
    dfs(node.left, depth);
    dfs(node.right, depth);
  }
  dfs(root, 0);
  return ans;
};
