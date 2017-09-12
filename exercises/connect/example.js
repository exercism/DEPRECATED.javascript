/**
 * "Player O" plays from top to bottom, "Player X" plays from left to right.
 * @param board
 */
var Board = function(initBoard) {
  var boardInstance = this;
  
  (function(){
    boardInstance.board = [];
    for (var i = 0; i < initBoard.length; i++) {
      boardInstance.board[i] = initBoard[i];
    }
  })();

  boardInstance.winner = function() {
    var players = ['X', 'O'];
    for (var i = 0; i < players.length; i++) {
      if (boardInstance.checkWin(players[i])) {
        return players[i];
      }
    }
    return '';
  };

  boardInstance.checkWin = function(player) {
    var positions = boardInstance.startPositions(player);
    for (var i = 0; i < positions.length; i++) {
      if (boardInstance.search(positions[i], player, [])) {
        return true;
      }
    }
    return false;
  };

  boardInstance.search = function(pos, XorO, checked) {
    if (!boardInstance.matches(pos, XorO)) {
      return false;
    }
    if (boardInstance.winningSpot(pos, XorO)) {
      return true;
    }
    checked = checked.slice(0);
    checked.push(pos);

    var matches = boardInstance.neighbors(pos).filter(function(xy){
       return boardInstance.matches(xy, XorO) && 
       checked.filter(function(spot) { return spot.x === xy.x && spot.y === xy.y; }).length === 0;
    });

    if (matches.length === 0) {
      return false;
    }

    return matches.filter(function(spot) {return boardInstance.search(spot, XorO, checked);}).length > 0;
  };

  boardInstance.neighbors = function(xy) {
    return [
      { x: xy.y + 2, y: xy.y + 2 },
      { x: xy.y - 2, y: xy.y - 2 },

      { x: xy.x + 1, y: xy.y + 1 },
      { x: xy.x - 1, y: xy.y + 1 },

      { x: xy.x + 1, y: xy.y - 1 },
      { x: xy.x - 1, y: xy.y - 1 },
    ];
  };

  boardInstance.startPositions = function(XorO) {
    return XorO === 'X' ?
    boardInstance.board.map(function(pos, i){ return { x: i, y: i };}) :
    Array.prototype.map.call(boardInstance.board[0], function(pos, i){ return { x: 0, y: i };});
  };

  boardInstance.winningSpot = function(xy, XorO) {
    return XorO === 'X' ?
      xy.y === boardInstance.board[0].length - 1 + xy.x :
      xy.x === boardInstance.board.length - 1;
  };

  boardInstance.matches = function(xy, XorO) {
    return boardInstance.board[xy.x] !== undefined && boardInstance.board[xy.x][xy.y] === XorO;
  };

};

module.exports = Board;

