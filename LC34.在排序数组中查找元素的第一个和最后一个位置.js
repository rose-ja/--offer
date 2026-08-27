/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const lower = (target) => {
    let left = 0;
    let right = nums.length - 1;
    let ans = nums.length;

    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);

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

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1, -1]
console.log(searchRange([], 0)); // [-1, -1]
console.log(searchRange([2, 2, 2], 2)); // [0, 2]
console.log(searchRange([1], 1)); // [0, 0]
