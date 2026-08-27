/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchRotatedArray = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) return mid;
    if (nums[mid] >= nums[left]) {
      if (target >= nums[left] && nums[mid] > target) right = mid - 1;
      else left = mid + 1;
    } else {
      if (target > nums[mid] && nums[right] >= target) left = mid + 1;
      else right = mid - 1;
    }
  }

  return -1;
};

console.log(searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(searchRotatedArray([1], 0)); // -1
console.log(searchRotatedArray([1], 1)); // 0
console.log(searchRotatedArray([5, 1, 3], 5)); // 0
