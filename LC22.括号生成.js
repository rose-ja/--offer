/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const path = [],
    result = [];

  function dfs(left, right) {
    if (path.length === 2 * n) {
      result.push(path.join(''));
      return;
    }
    if (left < n) {
      path.push('(');
      dfs(left + 1, right);
      path.pop();
    }
    if (right < left) {
      path.push(')');
      dfs(left, right + 1);
      path.pop();
    }
  }
  dfs(0, 0);

  return result;
};
