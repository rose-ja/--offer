/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  let count = 0;
  const sink = (r, c) => {
    if (
      r < 0 ||
      r >= grid.length ||
      c < 0 ||
      c >= grid[0].length ||
      grid[r][c] !== '1'
    )
      return;
    grid[r][c] = '0';
    sink(r - 1, c);
    sink(r, c - 1);
    sink(r + 1, c);
    sink(r, c + 1);
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
