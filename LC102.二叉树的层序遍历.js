class TreeNode {
  constructor(value, left = null, right = null) {
    this.val = value;
    this.left = left;
    this.right = right;
  }
}

/**
 * 按从上到下、从左到右的顺序，返回二叉树每一层的节点值。
 *
 * @param {TreeNode | null} root
 * @returns {number[][]}
 */
function levelOrder(root) {
  if (root === null) return [];

  let cur = [root];
  const levels = [];

  while (cur.length) {
    const values = [];
    const next = [];

    for (let node of cur) {
      values.push(node.val);
      if (node.left) next.push(node.left);
      if (node.right) next.push(node.right);
    }
    cur = next;
    levels.push(values);
  }

  return levels;
}

const root = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7)),
);

console.log(levelOrder(root)); // [[3], [9, 20], [15, 7]]
console.log(levelOrder(null)); // []
console.log(levelOrder(new TreeNode(1))); // [[1]]
