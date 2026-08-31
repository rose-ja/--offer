/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
function longestCommonSubsequence(first, second) {
  const common = Array.from({ length: first.length + 1 }, () =>
    new Array(second.length + 1).fill(0),
  );

  for (let i = 1; i <= first.length; i++) {
    for (let j = 1; j <= second.length; j++) {
      if (first[i - 1] === second[j - 1]) {
        common[i][j] = common[i - 1][j - 1] + 1;
      } else {
        common[i][j] = Math.max(common[i - 1][j], common[i][j - 1]);
      }
    }
  }

  return common[first.length][second.length];
}

console.log(longestCommonSubsequence('abcde', 'ace')); // 3
console.log(longestCommonSubsequence('abc', 'abc')); // 3
console.log(longestCommonSubsequence('abc', 'def')); // 0
