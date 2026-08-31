/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const ans = [];
  for (let interval of intervals) {
    if (ans.length !== 0 && ans[ans.length - 1][1] >= interval[0]) {
      ans[ans.length - 1][1] =
        ans[ans.length - 1][1] > interval[1]
          ? ans[ans.length - 1][1]
          : interval[1];
    } else {
      ans.push(interval);
    }
  }

  return ans;
};

console.log(merge([[1, 4]]));
console.log(
  merge([
    [1, 3],
    [3, 5],
  ]),
);
console.log(
  merge([
    [1, 10],
    [2, 6],
  ]),
);
console.log(
  merge([
    [8, 10],
    [1, 3],
    [2, 6],
    [9, 12],
  ]),
);
