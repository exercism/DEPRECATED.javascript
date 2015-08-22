var BigInt = require('./big_integer');

/**
 * @author github.com/nonsensery
 * @class Grains
 *
 * Computes the number of grains on the squares of a
 * chess board, starting with one grain on the first
 * square, and doubling with each successive square.
 */
function Grains() {
  // no op!
}

/**
 * Gets the number of grains on the nth square.
 */
Grains.prototype.square = function(num) {
  return BigInt(2).pow(num - 1).toString();
};

/**
 * Gets the total number of grains on all squares.
 */
Grains.prototype.total = function () {
  var total = BigInt(0);

  for (var squareNum = 1; squareNum <= 64; ++squareNum) {
    total = total.add(this.square(squareNum));
  }

  return total.toString();
};

module.exports = Grains;