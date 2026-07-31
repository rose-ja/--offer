/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  const m = board.length,
    n = board[0].length;

  function dfs(x, y, index) {
    if (word[index] !== board[x][y]) return false;
    if (index === word.length - 1) return true;

    const curr = board[x][y];
    board[x][y] = '#';

    for (const [dr, dc] of dirs) {
      let nr = x + dr,
        nc = y + dc;
      if (nr < 0 || nc < 0 || nr >= m || nc >= n) continue;

      if (dfs(nr, nc, index + 1)) {
        board[x][y] = curr;
        return true;
      }
    }

    board[x][y] = curr;
    return false;
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (word[0] === board[i][j] && dfs(i, j, 0)) return true;
    }
  }

  return false;
};
