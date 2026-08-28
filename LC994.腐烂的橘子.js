var orangesRotting = function (grid) {
  let fresh = 0;
  let q = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) fresh++;
      else if (grid[i][j] === 2) q.push([i, j]);
    }
  }

  let time = 0;
  while (q.length && fresh) {
    const temp = q;
    q = [];
    for (const [x, y] of temp) {
      for (const [i, j] of [
        [x - 1, y],
        [x + 1, y],
        [x, y - 1],
        [x, y + 1],
      ]) {
        if (
          i < 0 ||
          j < 0 ||
          i >= grid.length ||
          j >= grid[0].length ||
          grid[i][j] !== 1
        )
          continue;
        else {
          fresh--;
          grid[i][j] = 2;
          q.push([i, j]);
        }
      }
    }

    time++;
  }

  return fresh ? -1 : time;
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [0, 0, 1],
  ]),
); // 4
console.log(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ]),
); // -1
console.log(orangesRotting([[0, 2]])); // 0
console.log(
  orangesRotting([
    [1, 1],
    [1, 1],
  ]),
); // -1
