/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  const s = new Set(nums);
  let ans = 0;

  for (let x of s) {
    if (s.has(x - 1)) continue;
    let y = x + 1;
    while (s.has(y)) {
      y++;
    }
    ans = Math.max(ans, y - x);
    if (ans * 2 >= s.size) break;
  }
  
  return ans;
};
