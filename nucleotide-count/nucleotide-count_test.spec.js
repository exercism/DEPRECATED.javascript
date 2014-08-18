var dna = require('./nucleotide-count');

describe('DNA', function() {

  it('Empty DNA strand has no adenosine', function() {
    expect(0, dna().count('A'));
  });

  xit('Repetitive cytidine gets counted', function() {
    expect(5, dna('CCCCC').count('C'));
  });

  xit('Counts only thymidine', function() {
    expect(1, dna('GGGGGTAACCCGG').count('T'));
  });

  xit('Counts a nucleotide only once', function() {
    var acid = dna('CGATTGGG');
    acid.count('T');
    acid.count('T');
    expect(2, acid.count('T'));
  });

  xit('Empty DNS strand has no nucleotides', function() {
    var expected = {A: 0, T: 0, C: 0, G: 0};
    expect(expected, dna().histogram());
  });

  xit('Repetitive sequence has only guanosine', function() {
    var expected = {A: 0, T: 0, C: 0, G: 8};
    expect(expected, dna('GGGGGGGG').histogram());
  });

  xit('Counts all nucleotides', function() {
    var strand = 'AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC';
    var expected = {A: 20, T: 21, C: 17, G: 12};
    expect(expected, dna(strand).histogram());
  });

  xit('Validates DNA', function() {
    expect(dna.bind(null, 'JOHNNYAPPLESEED')).toThrow();
  });

});
