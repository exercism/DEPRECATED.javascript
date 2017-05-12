var Minesweeper = function() {
  this.distanceXdistanceYs = [
      [-1,-1],
      [-1,0],
      [-1,1],

      [1,1],
      [1,0],
      [1,-1],

      [0,1],
      [0,-1]

  ]
};


Minesweeper.prototype.annotate = function(rows) {
  if (rows.length === 0 || rows[0].length === 0) {
    return rows;
  }
  var board = rows.map(function(row) { return row.split(""); });
  var outBoard = [];
  for (var x = 0; x < board.length; x++) {
    outBoard[x] = [];
    for (var y = 0; y < board[x].length; y++) {
      var spot = board[x][y];
      if (spot === "*") {
        outBoard[x][y] = spot;
        continue;
      }
      var bombCount = this.distanceXdistanceYs.map(function(dxdy) {
        if (board[x + dxdy[0]] === undefined) {
          return 0;
        }
        return board[x + dxdy[0]][y + dxdy[1]] === "*" ? 1 : 0;
      }).reduce(function(total, num) {
        return total + num;
      });
      outBoard[x][y] = bombCount > 0 ? bombCount : " ";
    }
  }
  return outBoard.map(function(row) {
    return row.join("");
  });
};

module.exports = Minesweeper;
