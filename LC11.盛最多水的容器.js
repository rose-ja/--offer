/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let area = 0,
    left = 0,
    right = height.length - 1;

  while (left < right) {
    currentArea = (right - left) * Math.min(height[left], height[right]);
    area = Math.max(area, currentArea);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return area;
};
