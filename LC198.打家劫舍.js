/**
 * @param {number[]} nums
 * @return {number}
 */
function rob(amounts) {
  let best1 = 0
  let best2 = amounts[0];

  for (let step = 2; step <= amounts.length; step++) {
    const temp = Math.max(best1 + amounts[step-1], best2)
    best1 = best2
    best2 = temp
  }

  return best2;
}


console.log(rob([2, 7, 9, 3, 1])); // 12
console.log(rob([2, 1, 1, 2])); // 4
console.log(rob([5])); // 5
