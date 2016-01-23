'use strict';

function Words() {}

Words.prototype.count = function (input) {
  var counts = {};
  var words = input.match(/\S+/g);

  words.forEach(function (word) {
    counts[word] = counts.hasOwnProperty(word) ? counts[word] + 1 : 1;
  });

  return counts;
};

module.exports = Words;

