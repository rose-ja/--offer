/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
  const ways = new Array(n+1).fill(0);
  ways[0] = 1;
  ways[1] = 1;

  if (n === 1) return ways[1];

  for (let step = 2; step <= n; step++) {
    ways[step] = ways[step - 1] + ways[step - 2];
  }

  return ways[n];
}

console.log(climbStairs(0)); // 1
console.log(climbStairs(1)); // 1
console.log(climbStairs(2)); // 2
console.log(climbStairs(3)); // 3
console.log(climbStairs(5)); // 8
console.log(climbStairs(-1)); // 0
