var isLeap = require('./leap');

describe('Leap year', function() {

  it('is not very common', function() {
    expect(isLeap(2015)).toBe(false);
  });

  xit('is introduced every 4 years to adjust about a day', function() {
    expect(isLeap(2016)).toBe(true);
  });

  xit('is skipped every 100 years to remove an extra day', function() {
    expect(isLeap(1900)).toBe(false);
  });

  xit('is reintroduced every 400 years to adjust another day', function() {
    expect(isLeap(2000)).toBe(true);
  });

  // Feel free to enable the following tests to check some more examples
  xdescribe('Additional example of a leap year that', function () {

    it('is not a leap year', function () {
      expect(isLeap(1978)).toBe(false);
    });

    it('is a common leap year', function () {
      expect(isLeap(1992)).toBe(true);
    });

    it('is skipped every 100 years', function () {
      expect(isLeap(2100)).toBe(false);
    });

    it('is reintroduced every 400 years', function () {
      expect(isLeap(2400)).toBe(true);
    });

  });

});
