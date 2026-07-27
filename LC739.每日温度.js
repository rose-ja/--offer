/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const len = temperatures.length;
  const arr = new Array(len).fill(0);
  const stack = [];

  for (let i = 0; i < len; i++) {
    let temp = temperatures[i];
    while (stack.length && temp > temperatures[stack[stack.length - 1]]) {
      let j = stack.pop();
      arr[j] = i - j;
    }
    stack.push(i);
  }
  return arr;
};
