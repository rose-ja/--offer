/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  if (s.length % 2 === 1) return false;

  const stack = [];
  const kuo = new Map([
    [')', '('],
    [']', '['],
    ['}', '{'],
  ]);

  for (let ch of s) {
    if (kuo.has(ch)) {
      if (!stack.length || stack[stack.length - 1] != kuo.get(ch)) return false;
      stack.pop();
    } else {
      stack.push(ch);
    }
  }
  return !stack.length;
};
