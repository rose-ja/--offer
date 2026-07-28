/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  const ans = [];

  if (n < 4) return [];

  for (let a = 0; a < n - 3; a++) {
    if (nums[a] + nums[a + 1] + nums[a + 2] + nums[a + 3] > target) break;
    if (nums[a] + nums[n - 1] + nums[n - 2] + nums[n - 3] < target) continue;
    if (a > 0 && nums[a] === nums[a - 1]) continue;

    for (let b = a + 1; b < n - 2; b++) {
      if (nums[a] + nums[b + 1] + nums[b + 2] + nums[b] > target) break;
      if (nums[a] + nums[n - 1] + nums[n - 2] + nums[b] < target) continue;
      if (b > a + 1 && nums[b] === nums[b - 1]) continue;

      let c = b + 1,
        d = n - 1;

      while (c < d) {
        let sum = nums[a] + nums[b] + nums[c] + nums[d];
        if (sum === target) {
          ans.push([nums[a], nums[b], nums[c], nums[d]]);
          while (c < d && nums[c] === nums[c + 1]) c++;
          while (c < d && nums[d] === nums[d - 1]) d--;
          c++;
          d--;
        } else if (sum < target) {
          c++;
        } else {
          d--;
        }
      }
    }
  }

  return ans;
};
