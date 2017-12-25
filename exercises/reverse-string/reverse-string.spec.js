var ReverseString = require('./reverse-string');

describe('ReverseString', function () {
  it('empty string', function () {
    var expected = '';                
    var actual = ReverseString(''); 
    expect(actual).toEqual(expected);  
  });
  it('a word', function () {
    var expected = 'tac';                
    var actual = ReverseString('cat');  
    expect(actual).toEqual(expected);  
  });

  it('a capitalized word', function () {
    var expected = 'nemaR';                
    var actual = ReverseString('Ramen');  
    expect(actual).toEqual(expected);  
  });

  it('a sentence with punctuation', function () {
    var expected = '!yrgnuh ma I';                
    var actual = ReverseString('I am hungry!');  
    expect(actual).toEqual(expected);  
  });

  it('a palindrome', function () {
    var expected = 'racecar';                
    var actual = ReverseString('racecar');  
    expect(actual).toEqual(expected);  
  });
});
