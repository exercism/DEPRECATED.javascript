function Hamming() {}

Hamming.prototype.compute = function (strand1, strand2) {
  var len1 = strand1.length;
  var len2 = strand2.length;

  if (len1 !== len2) {
    throw new Error('DNA strands must be of equal length.');
  }

  var out = -0;
  var idx = -1;
  var end = Math.max(len1, len2);

  while (++idx < end) {
    if (strand1[idx] !== strand2[idx]) out++;
  }

  return out;
};

module.exports = Hamming;
