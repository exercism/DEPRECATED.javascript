var compute = require('./hamming');

describe('Hamming', function () {

  it('no difference between identical strands', function () {
    expect(compute('A', 'A')).toEqual(0);
  });

  xit('complete hamming distance for single nucleotide strand', function () {
    expect(compute('A','G')).toEqual(1);
  });

  xit('complete hamming distance for small strand', function () {
    expect(compute('AG','CT')).toEqual(2);
  });

  xit('small hamming distance', function () {
    expect(compute('AT','CT')).toEqual(1);
  });

  xit('small hamming distance in longer strand', function () {
    expect(compute('GGACG', 'GGTCG')).toEqual(1);
  });

  xit('large hamming distance', function () {
    expect(compute('GATACA', 'GCATAA')).toEqual(4);
  });

  xit('hamming distance in very long strand', function () {
    expect(compute('GGACGGATTCTG', 'AGGACGGATTCT')).toEqual(9);
  });

  xit('throws error when strands are not equal length', function() {
    expect(function() { compute('GGACGGATTCTG', 'AGGAC'); }).toThrow(
      new Error('DNA strands must be of equal length.')
    );
  });

});
