
const Palindromes = require('./palindrome-products');

describe('Palindrome', () => {
  it('largest palindrome from single digit factors', () => {
    const palindromes = new Palindromes({ maxFactor: 9 });
    palindromes.generate();

    const largest = palindromes.largest();
    expect(largest.value).toEqual(9);
    const orderedLargestFactors = largest.factors.sort((a, b) => a[0] > b[0]);
    expect(orderedLargestFactors).toEqual([[1, 9], [3, 3]]);
  });

  xit('largest palindrome from double digit factors', () => {
    const palindromes = new Palindromes({ maxFactor: 99, minFactor: 10 });
    palindromes.generate();

    const largest = palindromes.largest();
    expect(largest.value).toEqual(9009);
    expect(largest.factors).toEqual([[91, 99]]);
  });

  xit('smallest palindrome from double digit factors', () => {
    const palindromes = new Palindromes({ maxFactor: 99, minFactor: 10 });
    palindromes.generate();

    const smallest = palindromes.smallest();
    expect(smallest.value).toEqual(121);
    expect(smallest.factors).toEqual([[11, 11]]);
  });

  xit('largest palindrome from triple digit factors', () => {
    const palindromes = new Palindromes({ maxFactor: 999, minFactor: 100 });
    palindromes.generate();

    const largest = palindromes.largest();
    expect(largest.value).toEqual(906609);
    expect(largest.factors).toEqual([[913, 993]]);
  });

  xit('smallest palindrome from triple digit factors', () => {
    const palindromes = new Palindromes({ maxFactor: 999, minFactor: 100 });
    palindromes.generate();

    const smallest = palindromes.smallest();
    expect(smallest.value).toEqual(10201);
    expect(smallest.factors).toEqual([[101, 101]]);
  });
});
