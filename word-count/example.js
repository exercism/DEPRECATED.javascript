'use strict';

module.exports = function (input) {
  var counts = {};
  var words = input.split(/\s/);

  words.forEach(function (word) {
    counts[word] = counts.hasOwnProperty(word) ? counts[word] + 1 : 1;
  });

  return counts;
};
