var solve = require('./alphametics');

describe('Solve the alphametics puzzle', function () {
  it('puzzle with three letters', function () {
    var puzzle = 'I + BB == ILL';
    var expected = {
      'I': 1,
      'B': 9,
      'L': 0
    };
    expect(solve(puzzle)).toEqual(expected);
  });

  xit('solution must have unique value for each letter', function () {
    var puzzle = 'A == B';
    expect(solve(puzzle)).toBeNull();
  });

  xit('leading zero solution is invalid', function () {
    var puzzle = 'ACA + DD == BD';
    expect(solve(puzzle)).toBeNull();
  });

  xit('puzzle with four letters', function () {
    var puzzle = 'AS + A == MOM';
    var expected =  {
      'A': 9,
      'S': 2,
      'M': 1,
      'O': 0
    };
    expect(solve(puzzle)).toEqual(expected);
  });

  xit('puzzle with six letters', function () {
    var puzzle = 'NO + NO + TOO == LATE';
    var expected =  {
      'N': 7,
      'O': 4,
      'T': 9,
      'L': 1,
      'A': 0,
      'E': 2
    };
    expect(solve(puzzle)).toEqual(expected);
  });

  xit('puzzle with seven letters', function () {
    var puzzle = 'HE + SEES + THE == LIGHT';
    var expected =  {
      'E': 4,
      'G': 2,
      'H': 5,
      'I': 0,
      'L': 1,
      'S': 9,
      'T': 7
    };
    expect(solve(puzzle)).toEqual(expected);
  });

  xit('puzzle with eight letters', function () {
    var puzzle = 'SEND + MORE == MONEY';
    var expected =  {
      'S': 9,
      'E': 5,
      'N': 6,
      'D': 7,
      'M': 1,
      'O': 0,
      'R': 8,
      'Y': 2
    };
    expect(solve(puzzle)).toEqual(expected);
  });

  xit('puzzle with ten letters', function () {
    var puzzle = 'AND + A + STRONG + OFFENSE + AS + A + GOOD == DEFENSE';
    var expected =   {
      'A': 5,
      'D': 3,
      'E': 4,
      'F': 7,
      'G': 8,
      'N': 0,
      'O': 2,
      'R': 1,
      'S': 6,
      'T': 9
    };
    expect(solve(puzzle)).toEqual(expected);
  });
});
