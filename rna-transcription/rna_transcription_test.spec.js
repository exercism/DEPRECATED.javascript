var toRna = require('./rna_transcription');

describe('toRna()', function() {
  it('transcribes cytosine to guanine', function() {
    expect(toRna('C')).toEqual('G');
  });

  xit('transcribes guanine to cytosine', function() {
    expect(toRna('G')).toEqual('C');
  });

  xit('transcribes adenine to uracil', function() {
    expect(toRna('A')).toEqual('U');
  });

  xit('transcribes thymine to adenine', function() {
    expect(toRna('T')).toEqual('A');
  });

  xit('transcribes all dna nucleotides to their rna complements', function() {
    expect(toRna('ACGTGGTCTTAA'))
        .toEqual('UGCACCAGAAUU');
  });
});
