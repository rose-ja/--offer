/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const n = height.length;
  let left = 0,
    right = n - 1,
    leftMax = 0,
    rightMax = 0,
    sum = 0;

  while (left < right) {
    leftMax = Math.max(height[left], leftMax);
    rightMax = Math.max(height[right], rightMax);

    if (leftMax < rightMax) {
      sum += leftMax - height[left];
      left++;
    } else {
      sum += rightMax - height[right];
      right--;
    }
  }

  return sum;
};
