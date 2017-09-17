var SumOfMultiples = require('./sum-of-multiples');

describe('SumOfMultiples', function () {
  it('to 1', function () {
    expect(SumOfMultiples([3, 5]).to(1)).toBe(0);
  });

  xit('to 3', function () {
    expect(SumOfMultiples([3, 5]).to(4)).toBe(3);
  });

  xit('to 10', function () {
    expect(SumOfMultiples([3, 5]).to(10)).toBe(23);
  });

  xit('to 100', function () {
    expect(SumOfMultiples([3, 5]).to(100)).toBe(2318);
  });

  xit('to 1000', function () {
    expect(SumOfMultiples([3, 5]).to(1000)).toBe(233168);
  });

  xit('[7, 13, 17] to 20', function () {
    expect(SumOfMultiples([7, 13, 17]).to(20)).toBe(51);
  });

  xit('[4, 6] to 15', function () {
    expect(SumOfMultiples([4, 6]).to(15)).toBe(30);
  });

  xit('[5, 6, 8] to 150', function () {
    expect(SumOfMultiples([5, 6, 8]).to(150)).toBe(4419);
  });

  xit('[43, 47] to 10000', function () {
    expect(SumOfMultiples([43, 47]).to(10000)).toBe(2203160);
  });
});
