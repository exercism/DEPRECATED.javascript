const DnaTranscriber = require('./rna-transcription');

const dnaTranscriber = new DnaTranscriber();

describe('toRna()', () => {
  it('transcribes cytosine to guanine', () => {
    expect(dnaTranscriber.toRna('C')).toEqual('G');
  });

  xit('transcribes guanine to cytosine', () => {
    expect(dnaTranscriber.toRna('G')).toEqual('C');
  });

  xit('transcribes adenine to uracil', () => {
    expect(dnaTranscriber.toRna('A')).toEqual('U');
  });

  xit('transcribes thymine to adenine', () => {
    expect(dnaTranscriber.toRna('T')).toEqual('A');
  });

  xit('transcribes all dna nucleotides to their rna complements', () => {
    expect(dnaTranscriber.toRna('ACGTGGTCTTAA'))
      .toEqual('UGCACCAGAAUU');
  });

  xit('correctly handles completely invalid input', () => {
    expect(() => { dnaTranscriber.toRna('XXX'); }).toThrow(new Error('Invalid input'));
  });

  xit('correctly handles partially invalid input', () => {
    expect(() => { dnaTranscriber.toRna('ACGTXXXCTTAA'); }).toThrow(new Error('Invalid input'));
  });
});
