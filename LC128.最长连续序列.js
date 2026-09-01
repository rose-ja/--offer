/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums);
  let ans = 0;

  for (let num of nums) {
    if (set.has(num - 1)) continue;

    let next = num + 1;
    while (set.has(next)) {
      next++;
    }
    ans = Math.max(ans, next - num);
    if (ans * 2 >= set.size) break; // 如果我们发现其中一条链的长度至少为 m/2,不可能还有一条大于m/2的链
  }
  return ans;
};
