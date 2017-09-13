

const DnaTranscriber = function () {};

const dnaToRna = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U',
};

const transcribeDna = function (dna, lookupTable) {
  return dna.replace(/./g, (dnaNucleotide) => {
    if (!(dnaNucleotide in lookupTable)) { throw Error('Invalid input'); }
    return lookupTable[dnaNucleotide];
  });
};

DnaTranscriber.prototype.toRna = function (dna) {
  return transcribeDna(dna, dnaToRna);
};

module.exports = DnaTranscriber;
