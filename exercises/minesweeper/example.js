const Minesweeper = function () {
  this.distanceXdistanceYs = [
    [-1, -1],
    [-1, 0],
    [-1, 1],

    [1, 1],
    [1, 0],
    [1, -1],

    [0, 1],
    [0, -1],

  ];
};


Minesweeper.prototype.annotate = function (rows) {
  if (rows.length === 0 || rows[0].length === 0) {
    return rows;
  }
  const board = rows.map(row => row.split(''));
  const outBoard = [];
  for (var x = 0; x < board.length; x++) {
    outBoard[x] = [];
    for (var y = 0; y < board[x].length; y++) {
      const spot = board[x][y];
      if (spot === '*') {
        outBoard[x][y] = spot;
        continue;
      }
      const bombCount = this.distanceXdistanceYs.map((dxdy) => {
        if (board[x + dxdy[0]] === undefined) {
          return 0;
        }
        return board[x + dxdy[0]][y + dxdy[1]] === '*' ? 1 : 0;
      }).reduce((total, num) => total + num);
      outBoard[x][y] = bombCount > 0 ? bombCount : ' ';
    }
  }
  return outBoard.map(row => row.join(''));
};

module.exports = Minesweeper;
