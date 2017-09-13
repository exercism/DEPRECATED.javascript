const DNA = require('./point-mutations');

describe('DNA', () => {
  it('no difference between empty strands', () => {
    const dna = new DNA('');
    expect(dna.hammingDistance('')).toEqual(0);
  });

  xit('no difference between identical strands', () => {
    const dna = new DNA('GGACTGA');
    expect(dna.hammingDistance('GGACTGA')).toEqual(0);
  });

  xit('complete hamming distance in small strand', () => {
    const dna = new DNA('ACT');
    expect(dna.hammingDistance('GGA')).toEqual(3);
  });

  xit('hamming distance in off by one strand', () => {
    const dna = new DNA('GGACGGATTCTGACCTGGACTAATTTTGGGG');
    expect(dna.hammingDistance('AGGACGGATTCTGACCTGGACTAATTTTGGGG')).toEqual(19);
  });

  xit('small hamming distance in middle somewhere', () => {
    const dna = new DNA('GGACG');
    expect(dna.hammingDistance('GGTCG')).toEqual(1);
  });

  xit('larger distance', () => {
    const dna = new DNA('ACCAGGG');
    expect(dna.hammingDistance('ACTATGG')).toEqual(2);
  });

  xit('shortens other strand when longer', () => {
    const dna = new DNA('AAACTAGGGG');
    expect(dna.hammingDistance('AGGCTAGCGGTAGGAC')).toEqual(3);
  });

  xit('shortens original strand when longer', () => {
    const dna = new DNA('GACTACGGACAGGGTAGGGAAT');
    expect(dna.hammingDistance('GACATCGCACACC')).toEqual(5);
  });
});
