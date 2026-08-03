/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const mid = (left + right) >> 1;
    if (target === nums[mid]) return mid;

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && nums[mid] > target) right = mid - 1;
      else left = mid + 1;
    } else {
      if (nums[right] >= target && nums[mid] < target) left = mid + 1;
      else right = mid - 1;
    }
  }

  return -1;
};
