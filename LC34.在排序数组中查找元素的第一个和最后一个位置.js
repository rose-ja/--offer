/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const lower = (target) => {
    let left = 0,
      right = nums.length - 1,
      ans = nums.length;

    while (left <= right) {
      const mid = (left + right) >> 1;
      if (nums[mid] >= target) {
        ans = mid;
        right = mid - 1;
      } else left = mid + 1;
    }

    return ans;
  };

  const first = lower(target);
  if (first === nums.length || nums[first] !== target) return [-1, -1];
  const last = lower(target + 1) - 1;
  return [first, last];
};
