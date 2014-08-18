'use strict';

module.exports = dna;

function dna(strand) {
  var acids = (strand || '');
  var index = histogram(acids);

  for (var acid in acids) {
    if (!index.hasOwnProperty(acids[acid])) throw new RangeError("Invalid DNA " + strand);
  }

  return Object.create({
    histogram: histogram.bind(null, acids),
    count: count.bind(null, acids)
  });
}

function count(acids, acid) {
  return acids.split(acid).length - 1;
}

function histogram(acids) {
  return {
    A: count.call(acids, 'A'),
    C: count.call(acids, 'C'),
    G: count.call(acids, 'G'),
    T: count.call(acids, 'T')
  };
}
