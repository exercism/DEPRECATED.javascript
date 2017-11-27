var ReverseString = require('./reverse-string');

describe('ReverseString', function () {
  it('empty string', function () {
    var subject = new ReverseString('');
    var matches = subject.matches([ '']);

    expect(matches).toEqual(['']);
  });

  xit('a word', function () {
    var subject = new ReverseString('robot');
    var matches = subject.matches(['tobor']);

    expect(matches).toEqual(['tobor']);
  });


  xit('a capitalized word', function () {
    var subject = new ReverseString('Ramen');
    var matches = subject.matches(['nemaR']);

    expect(matches).toEqual(['nemaR']);
  });


  xit('a sentence with punctuation', function () {
    var subject = new ReverseString('I am hungry!');
    var matches = subject.matches(['!yrgnuh ma I']);

    expect(matches).toEqual(['!yrgnuh ma I']);
  });


  xit('a palindrome', function () {
    var subject = new ReverseString('racecar');
    var matches = subject.matches('racecar');

    expect(matches).toEqual(['racecar']);
  });

});
