class TreeNode {
  constructor(value, left = null, right = null) {
    this.val = value;
    this.left = left;
    this.right = right;
  }
}

/**
 * 判断一棵二叉树是否满足严格的二叉搜索树规则。
 *
 * @param {TreeNode | null} root
 * @returns {boolean}
 */
function isValidBST(root) {
  return validate(root, -Infinity, Infinity);
}

/**
 * 验证 node 子树中的每个节点都位于开区间 (lowerBound, upperBound) 内。
 *
 * @param {TreeNode | null | undefined} node
 * @param {number} lowerBound
 * @param {number} upperBound
 * @returns {boolean}
 */
function validate(node, lowerBound, upperBound) {
  if (node === null || node === undefined) {
    return true;
  }

  if (typeof node !== 'object' || !Number.isFinite(node.val)) {
    return false;
  }

  if (node.val <= lowerBound || node.val >= upperBound) {
    return false;
  }

  // 左子树继承下界并收紧上界；右子树继承上界并收紧下界。
  return (
    validate(node.left, lowerBound, node.val) &&
    validate(node.right, node.val, upperBound)
  );
}

const validTree = new TreeNode(
  5,
  new TreeNode(2, new TreeNode(1), new TreeNode(3)),
  new TreeNode(7, null, new TreeNode(9)),
);

const invalidTree = new TreeNode(
  5,
  new TreeNode(1),
  new TreeNode(8, new TreeNode(4), new TreeNode(9)),
);

console.log(isValidBST(validTree)); // true
console.log(isValidBST(invalidTree)); // false：4 在 5 的右子树，却小于 5
console.log(isValidBST(new TreeNode(2, new TreeNode(2), new TreeNode(3)))); // false：BST 不允许重复值
console.log(isValidBST(null)); // true
