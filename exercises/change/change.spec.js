

const Change = require('./change');

describe('Change', () => {
  it('change for 1 cent', () => {
    const change = new Change();
    const result = change.calculate([1, 5, 10, 25], 1);
    expect(result).toEqual([1]);
  });

  xit('return a single coin', () => {
    const change = new Change();
    const result = change.calculate([1, 5, 10, 25, 100], 25);
    expect(result).toEqual([25]);
  });

  xit('multiple coins coin', () => {
    const change = new Change();
    const result = change.calculate([1, 5, 10, 25, 100], 15);
    expect(result).toEqual([5, 10]);
  });

  xit('test with Lillipution Currency where a greedy algorithm fails', () => {
    // https://en.wikipedia.org/wiki/Change-making_problem#Greedy_method
    const change = new Change();
    const result = change.calculate([1, 4, 15, 20, 50], 23);
    expect(result).toEqual([4, 4, 15]);
  });

  xit('test with lower Elbonian Currency where a greedy algorithm fails', () => {
    // https://en.wikipedia.org/wiki/Change-making_problem#Greedy_method
    const change = new Change();
    const result = change.calculate([1, 5, 10, 21, 25], 63);
    expect(result).toEqual([21, 21, 21]);
  });

  xit('test large amount of change', () => {
    const change = new Change();
    const result = change.calculate([1, 2, 5, 10, 20, 50, 100], 999);
    expect(result).toEqual([2, 2, 5, 20, 20, 50, 100, 100, 100, 100, 100, 100, 100, 100, 100]);
  });

  xit('test zero change', () => {
    const change = new Change();
    const result = change.calculate([1, 5, 10, 21, 25], 0);
    expect(result).toEqual([]);
  });

  xit('test less than the smallest currency represented', () => {
    const change = new Change();
    const message = 'The total 3 cannot be represented in the given currency.';
    const test = function () { return change.calculate([5, 10], 3); };
    expect(test).toThrowError(Error, message);
  });

  xit('test a large value that the currency cannot represent', () => {
    const change = new Change();
    const message = 'The total 94 cannot be represented in the given currency.';
    const test = function () { return change.calculate([5, 10], 94); };
    expect(test).toThrowError(Error, message);
  });

  xit('negative change is rejected', () => {
    const change = new Change();
    const message = 'Negative totals are not allowed.';
    const test = function () { return change.calculate([1, 2, 5], -5); };
    expect(test).toThrowError(Error, message);
  });
});
