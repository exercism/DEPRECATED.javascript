var ReverseString = require('./reverse-string');

describe('ReverseString', function () {
  it('no matches', function () {
    var subject = new ReverseString('car');
    var matches = subject.matches([ 'girl', 'Japan', 'bear', 'candy']);

    expect(matches).toEqual([]);
  });

  xit('detects simple reverse string', function () {
    var subject = new ReverseString('ant');
    var matches = subject.matches(['tna']);

    expect(matches).toEqual(['tna']);
  });



  xit('detects anagram', function () {
    var subject = new ReverseString('listen');
    var matches = subject.matches(['netsil']);

    expect(matches).toEqual(['netsil']);
  });



  xit('detects anagrams case-insensitively', function () {
    var subject = new ReverseString('NinJa');
    var matches = subject.matches(['ajnin']);

    expect(matches).toEqual(['ajnin']);
  });



  xit('matches() accepts string arguments', function () {
    var subject = new ReverseString('ant');
    var matches = subject.matches('tna');

    expect(matches).toEqual(['tna']);
  });

  xit('matches() accepts single string argument', function () {
    var subject = new ReverseString('ant');
    var matches = subject.matches('tna');

    expect(matches).toEqual(['tna']);
  });
});