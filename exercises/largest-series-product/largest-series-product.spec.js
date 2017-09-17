var Series = require('./largest-series-product');

describe('Series', function () {

  it('can get the largest product of 2', function () {
    expect(new Series('0123456789').largestProduct(2)).toBe(72);
  });

  xit('works for a tiny number', function () {
    expect(new Series('19').largestProduct(2)).toBe(9);
  });

  xit('can get the largest product of 3', function () {
    expect(new Series('1027839564').largestProduct(3)).toBe(270);
  });

  xit('can get the largest product of a big number', function () {
    var largeNumber = '73167176531330624919225119674426574742355349194934969835203127745063262395783180169848018694788' +
      '51843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648' +
      '95044524452316173185640309871112172238311362229893423380308135336276614282806444486645238749303589072962904915604' +
      '40772390713810515859307960866701724271218839987979087922749219016997208880937766572733300105336788122023542180975' +
      '12545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622' +
      '48283972241375657056057490261407972968652414535100474821663704844031998900088952434506585412275886668811642717147' +
      '99244429282308634656748139191231628245861786645835912456652947654568284891288314260769004224219022671055626321111' +
      '10937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636' +
      '899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450';
    expect(new Series(largeNumber).largestProduct(13)).toBe(23514624000);
  });

  xit('returns 0 if all digits are zero', function () {
    expect(new Series('0000').largestProduct(2)).toBe(0);
  });

  xit('returns 0 if all spans contain zero', function () {
    expect(new Series('99099').largestProduct(3)).toBe(0);
  });

  xit('rejects invalid character in input', ()=> {
    expect(function () {
      new Series('1234a5').largestProduct('2')
    }).toThrow(new Error('Invalid input.'));
  });

  xit('rejects negative span', function () {
    expect(() => {
      new Series('12345').largestProduct(-1)
    }).toThrow(new Error('Invalid input.'));
  });

  xit('returns 1 for empty string and zero slice length', function () {
    expect(new Series('').largestProduct(0)).toBe(1);
  });

  xit('returns 1 for non-empty string and zero slice length', function () {
    expect(new Series('123').largestProduct(0)).toBe(1);
  });

  xit('throws an error for slices bigger than the number', function () {
    expect(function () {
      new Series('123').largestProduct(4);
    }).toThrow(new Error('Slice size is too big.'));
  });

  xit('throws an error for empty string and non-zero slice length', function () {
    expect(function () {
      new Series('').largestProduct(1);
    }).toThrow(new Error('Slice size is too big.'));
  });

});
