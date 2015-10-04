'use strict';

var DnaTranscriber = function(){};

var dnaToRna = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};

var rnaToDna = {
  G: 'C',
  C: 'G',
  U: 'A',
  A: 'T'
};

var transcribeDna = function(dna, lookupTable) {
  return dna.replace(/./g, function(dnaNucleotide) {
    return lookupTable[dnaNucleotide];
  });
}

DnaTranscriber.prototype.toRna = function(dna) {
  return transcribeDna(dna, dnaToRna);
}

DnaTranscriber.prototype.toDna = function(dna) {
  return transcribeDna(dna, rnaToDna);
}

module.exports = DnaTranscriber;
