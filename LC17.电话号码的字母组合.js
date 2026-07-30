/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = [
    '',
    '',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz',
  ];
  const result = [],
    curr = [];

  function dfs(index) {
    if (!digits) return [];
    if (index === digits.length) {
      result.push(curr.join(''));
      return;
    }

    let letter = map[digits[index]];
    for (const c of letter) {
      curr.push(c);
      dfs(index + 1);
      curr.pop();
    }
  }
  dfs(0);

  return result;
};
