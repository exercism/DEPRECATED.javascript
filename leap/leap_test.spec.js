var isLeapYear = require('./leap');

describe("Leap year", function() {

  it("is not very common", function() {
    expect(isLeapYear(2015)).not.toBe(true);
  });

  xit("is introduced every 4 years to adjust about a day", function() {
    expect(isLeapYear(2016)).toBe(true);
  });

  xit("is skipped every 100 years to remove an extra day", function() {
    expect(isLeapYear(1900)).not.toBe(true);
  });

  xit("is reintroduced every 400 years to adjust another day", function() {
    expect(isLeapYear(2000)).toBe(true);
  });

  // Feel free to enable the following tests to check some more examples
  xdescribe("Additional example of a leap year that", function () {

    it("is not a leap year", function () {
      expect(isLeapYear(1978)).not.toBe(true);
    });

    it("is a common leap year", function () {
      expect(isLeapYear(1992)).toBe(true);
    });

    it("is skipped every 100 years", function () {
      expect(isLeapYear(2100)).not.toBe(true);
    });

    it("is reintroduced every 400 years", function () {
      expect(isLeapYear(2400)).toBe(true);
    });

  });

});
