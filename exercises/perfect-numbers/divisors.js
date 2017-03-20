'use strict';

var Divisors = function() {

}

/**
 * Calculate all the divisors for a given number and return them as an array.
 * Note: the actual number is not include in the returned array.
 */
Divisors.prototype.getDivisors = function(number) {

  var i;
  var divs = new Array();

  // Accepts only natura numbers greater than 1.
  if (number <= 1)
    return divs;

  // 1 always divides everyone!
  divs.push(1);

  // Calculate the divisors up the the half of the number + 1
  for (i = 2; i <= number / 2; i++) {

    if (number % i === 0)
      divs.push(i);
  }

  return divs;
};

module.exports = Divisors;
