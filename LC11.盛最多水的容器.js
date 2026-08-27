/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let area = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    let currentArea = (right - left) * Math.min(height[left], height[right]);
    area = Math.max(currentArea, area);
    if (height[left] < height[right]) left++;
    else right--;
  }

  return area;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
console.log(maxArea([4, 3, 2, 1, 4])); // 16
console.log(maxArea([1])); // 0