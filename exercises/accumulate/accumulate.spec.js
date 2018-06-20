var accumulate = require('./accumulate');

describe('accumulate()', function () {
  it('accumulates an empty array', function () {
    var accumulator = function (e) { return e * e; };
    expect(accumulate([], accumulator)).toEqual([]);
  });

  it('accumulates squares', function () {
    var accumulator = function (number) {
      return number * number;
    };

    var result = accumulate([1, 2, 3], accumulator);

    expect(result).toEqual([1, 4, 9]);
  });

  it('accumulates upcases', function () {
    var accumulator = function (word) {
      return word.toUpperCase();
    };

    var result = accumulate('hello world'.split(/\s/), accumulator);

    expect(result).toEqual(['HELLO', 'WORLD']);
  });

  it('accumulates reversed strings', function () {
    var accumulator = function (word) {
      return word.split('').reverse().join('');
    };

    var result = accumulate('the quick brown fox etc'.split(/\s/), accumulator);

    expect(result).toEqual(['eht', 'kciuq', 'nworb', 'xof', 'cte']);
  });

  it('accumulates recursively', function () {
    var result = accumulate('a b c'.split(/\s/), function (char) {
      return accumulate('1 2 3'.split(/\s/), function (digit) {
        return char + digit;
      });
    });

    expect(result).toEqual([['a1', 'a2', 'a3'], ['b1', 'b2', 'b3'], ['c1', 'c2', 'c3']]);
  });
});
