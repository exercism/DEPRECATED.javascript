'use strict';

var DnaTranscriber = function(){};

var dnaToRna = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};

var transcribeDna = function(dna, lookupTable) {
  return dna.replace(/./g, function(dnaNucleotide) {
    return lookupTable[dnaNucleotide];
  });
}

DnaTranscriber.prototype.toRna = function(dna) {
  return transcribeDna(dna, dnaToRna);
}

module.exports = DnaTranscriber;
