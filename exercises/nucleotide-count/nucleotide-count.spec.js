const dna = require('./nucleotide-count');

describe('DNA', () => {
  it('Empty DNA strand has no adenosine', () => {
    expect(dna().count('A')).toEqual(0);
  });

  xit('Repetitive cytidine gets counted', () => {
    expect(dna('CCCCC').count('C')).toEqual(5);
  });

  xit('Counts only thymidine', () => {
    expect(dna('GGGGGTAACCCGG').count('T')).toEqual(1);
  });

  xit('Counts a nucleotide only once', () => {
    const acid = dna('CGATTGGG');
    acid.count('T');
    acid.count('T');
    expect(acid.count('T')).toEqual(2);
  });

  xit('Empty DNS strand has no nucleotides', () => {
    const expected = {
      A: 0, T: 0, C: 0, G: 0,
    };
    expect(dna().histogram()).toEqual(expected);
  });

  xit('Repetitive sequence has only guanosine', () => {
    const expected = {
      A: 0, T: 0, C: 0, G: 8,
    };
    expect(dna('GGGGGGGG').histogram()).toEqual(expected);
  });

  xit('Counts all nucleotides', () => {
    const strand = 'AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC';
    const expected = {
      A: 20, T: 21, C: 12, G: 17,
    };
    expect(dna(strand).histogram()).toEqual(expected);
  });

  xit('Validates DNA', () => {
    expect(dna.bind(null, 'JOHNNYAPPLESEED')).toThrow();
  });
});
