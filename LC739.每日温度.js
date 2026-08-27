/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const stack = [];
  const arr = new Array(temperatures.length).fill(0);
  for (let i = 0; i < temperatures.length; i++) {
    const temp = temperatures[i];
    while (stack.length && temp > temperatures[stack[stack.length - 1]]) {
      let j = stack.pop();
      arr[j] = i - j;
    }
    stack.push(i);
  }
  return arr;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
// [1, 1, 4, 2, 1, 1, 0, 0]

console.log(dailyTemperatures([30, 40, 50, 60])); // [1, 1, 1, 0]
console.log(dailyTemperatures([30, 60, 90])); // [1, 1, 0]
console.log(dailyTemperatures([90, 80, 70])); // [0, 0, 0]
