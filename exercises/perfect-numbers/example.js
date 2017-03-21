'use strict';

var Divisors = require('./divisors');

var PerfectNumbers = function() {

};

PerfectNumbers.prototype.classify = function(number) {

  var i, sum, result;
  var divisors = new Divisors();

  // Check if the input is valid
  if (number <= 0) {
    return 'Classification is only possible for natural numbers.';
  }

  // Factorize the current number.
  var divsArray = divisors.getDivisors(number);

  // Sum the factors.
  sum = 0;
  for (i = 0; i < divsArray.length; i++) {
    sum = sum + divsArray[i];
  }

  // Check if the number is perfect.
  if (sum === number) {
    result = 'perfect';
  }
  else if (sum > number) {
    result = 'abundant';
  }
  else {
    result = 'deficient';
  }

  return result;
};

module.exports = PerfectNumbers;
