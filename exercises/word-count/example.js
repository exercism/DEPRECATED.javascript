'use strict';

function Words() {}

Words.prototype.count = function (input) {
  var counts = {};
  var words = input.match(/\S+/g);

  words.forEach(function (word) {
    var lcWord = word.toLowerCase();
    counts[lcWord] = counts.hasOwnProperty(lcWord) ? counts[lcWord] + 1 : 1;
  });

  return counts;
};

module.exports = Words;
