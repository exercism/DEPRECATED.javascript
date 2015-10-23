var DnaTranscriber = require('./rna-transcription');
var dnaTranscriber = new DnaTranscriber();

describe('toRna()', function() {

  it('transcribes cytosine to guanine', function() {
    expect(dnaTranscriber.toRna('C')).toEqual('G');
  });

  xit('transcribes guanine to cytosine', function() {
    expect(dnaTranscriber.toRna('G')).toEqual('C');
  });

  xit('transcribes adenine to uracil', function() {
    expect(dnaTranscriber.toRna('A')).toEqual('U');
  });

  xit('transcribes thymine to adenine', function() {
    expect(dnaTranscriber.toRna('T')).toEqual('A');
  });

  xit('transcribes all dna nucleotides to their rna complements', function() {
    expect(dnaTranscriber.toRna('ACGTGGTCTTAA'))
        .toEqual('UGCACCAGAAUU');
  });
});

xdescribe('toDna()', function() {
  it('transcribes cytosine to guanine', function() {
    expect(dnaTranscriber.toDna('C')).toEqual('G');
  });

  xit('transcribes guanine to cytosine', function() {
    expect(dnaTranscriber.toDna('G')).toEqual('C');
  });

  xit('transcribes adenine to uracil', function() {
    expect(dnaTranscriber.toDna('U')).toEqual('A');
  });

  xit('transcribes thymine to adenine', function() {
    expect(dnaTranscriber.toDna('A')).toEqual('T');
  });

  xit('transcribes all dna nucleotides to their rna complements', function() {
    expect(dnaTranscriber.toDna('UGAACCCGACAUG'))
        .toEqual('ACTTGGGCTGTAC');
  });
});
