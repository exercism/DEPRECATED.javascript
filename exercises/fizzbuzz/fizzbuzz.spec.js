var fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', function() {
  
  it('should have 2 when two passed', function() {
    expect(fizzbuzz.fizzbuzz(2)).toBe(2);
  });

  it('should have "fizz" when three passed', function() {
    expect(fizzbuzz.fizzbuzz(3)).toBe('fizz');
  });

  it('should have "buzz" when five passed', function() {
    expect(fizzbuzz.fizzbuzz(5)).toBe('buzz');
  });
  
  it('should have "fizz" when six passed', function() {
    expect(fizzbuzz.fizzbuzz(6)).toBe('fizz');
  });
  
  it('should have 11 when eleven passed', function() {
    expect(fizzbuzz.fizzbuzz(11)).toBe(11);
  });
  
  it('should have "fizzbuzz" when multiple of three and five passed', function() {
    expect(fizzbuzz.fizzbuzz(30)).toBe('fizzbuzz');
  });

});
