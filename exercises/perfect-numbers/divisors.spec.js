var Divisors = require('./divisors');

describe('Divisors', function() {

  var divisors;

  beforeEach(function() {
    divisors = new Divisors();
  });

  it('Should return an array with the divisors of a number', function() {
    expect(divisors.getDivisors(1)).toEqual([]);
    expect(divisors.getDivisors(2)).toEqual([1]);
    expect(divisors.getDivisors(6)).toEqual([1, 2, 3]);
    expect(divisors.getDivisors(28)).toEqual([1, 2, 4, 7, 14]);
  });

});
