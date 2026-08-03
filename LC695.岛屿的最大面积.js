/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  const m = grid.length,
    n = grid[0].length;
  let max = 0;
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function dfs(r, c) {
    if (r < 0 || r >= m || c < 0 || c >= n || grid[r][c] !== 1) return 0;

    let area = 1;
    grid[r][c] = 0;
    for (let [nr, nc] of dirs) {
      area += dfs(nr + r, nc + c);
    }

    return area;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        max = Math.max(max, dfs(i, j));
      }
    }
  }

  return max;
};
