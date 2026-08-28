/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;
  const sink = (s, c) => {
    if (
      s < 0 ||
      c < 0 ||
      s >= grid.length ||
      c >= grid[0].length ||
      grid[s][c] !== '1'
    )
      return;

    grid[s][c] = '0';
    sink(s + 1, c);
    sink(s - 1, c);
    sink(s, c + 1);
    sink(s, c - 1);
  };

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === '1') {
        count++;
        sink(i, j);
      }
    }
  }

  return count;
};

console.log(
  numIslands([
    ['1', '1', '0', '1'],
    ['1', '0', '0', '0'],
    ['0', '0', '1', '1'],
  ]),
); // 3
console.log(
  numIslands([
    ['0', '0'],
    ['0', '0'],
  ]),
); // 0
console.log(numIslands([['1']])); // 1
console.log(numIslands([])); // 0
