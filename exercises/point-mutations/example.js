

const DNA = module.exports = function DNA(nucleotides) {
  this.nucleotides = nucleotides;
};

DNA.prototype.hammingDistance = function (comparison) {
  let distance = 0;
  const calculationDistance = Math.min(this.nucleotides.length, comparison.length);

  for (let i = 0; i < calculationDistance; i++) {
    const currentNucleotide = this.nucleotides[i];
    const comparisonNucleotide = comparison[i];

    if (currentNucleotide !== comparisonNucleotide) { distance++; }
  }

  return distance;
};

