var fizzbuzz = require('./fizzbuzz')();

describe('fizzbuzz', function() {

  it('should have one when one passed', function() {
    var result = fizzbuzz.fizzbuzz(1);
    expect(result).toBe('1');
  });

  it('should have "fizz" when three passed', function() {
    var result = fizzbuzz.fizzbuzz(3);
    expect(result).toBe('fizz');
  });

  it('should have "buzz" when five passed', function() {
    var result = fizzbuzz.fizzbuzz(5);
    expect(result).toBe('buzz');
  });

  it('should have "fizzbuzz" when multiple of three and five passed', function() {
    var result = fizzbuzz.fizzbuzz(15);
    expect(result).toBe('fizzbuzz');
  });

});
