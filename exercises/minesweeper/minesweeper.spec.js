const Minesweeper = require('./minesweeper');

describe('Minesweeper()', () => {
  it('handles no rows', () => {
    const minesweeper = new Minesweeper();
    expect(minesweeper.annotate([])).toEqual([]);
  });

  xit('handles no columns', () => {
    const minesweeper = new Minesweeper();
    expect(minesweeper.annotate([''])).toEqual(['']);
  });

  xit('handles no mines', () => {
    const minesweeper = new Minesweeper();
    const input = [
      '   ',
      '   ',
      '   ',
    ];
    const expected = [
      '   ',
      '   ',
      '   ',
    ];
    expect(minesweeper.annotate(input)).toEqual(expected);
  });

  xit('handles board with only mines', () => {
    const minesweeper = new Minesweeper();
    const input = [
      '***',
      '***',
      '***',
    ];
    const expected = [
      '***',
      '***',
      '***',
    ];
    expect(minesweeper.annotate(input)).toEqual(expected);
  });

  xit('handles mine surrounded by spaces', () => {
    const minesweeper = new Minesweeper();
    const input = [
      '   ',
      ' * ',
      '   ',
    ];
    const expected = [
      '111',
      '1*1',
      '111',
    ];
    expect(minesweeper.annotate(input)).toEqual(expected);
  });

  xit('handles space surrounded by mines', () => {
    const minesweeper = new Minesweeper();
    const input = [
      '***',
      '* *',
      '***',
    ];
    const expected = [
      '***',
      '*8*',
      '***',
    ];
    expect(minesweeper.annotate(input)).toEqual(expected);
  });

  xit('handles space surrounded by mines', () => {
    const minesweeper = new Minesweeper();
    const input = [
      '***',
      '* *',
      '***',
    ];
    const expected = [
      '***',
      '*8*',
      '***',
    ];
    expect(minesweeper.annotate(input)).toEqual(expected);
  });

  xit('handles horizontal line', () => {
    const minesweeper = new Minesweeper();
    const input = [' * * '];
    const expected = ['1*2*1'];
    expect(minesweeper.annotate(input)).toEqual(expected);
  });

  xit('handles horizontal line, mines at edges', () => {
    const minesweeper = new Minesweeper();
    const input = ['*   *'];
    const expected = ['*1 1*'];
    expect(minesweeper.annotate(input)).toEqual(expected);
  });

  xit('handles vertical line', () => {
    const minesweeper = new Minesweeper();
    const input = [
      ' ',
      '*',
      ' ',
      '*',
      ' ',
    ];
    const expected = [
      '1',
      '*',
      '2',
      '*',
      '1',
    ];
    expect(minesweeper.annotate(input)).toEqual(expected);
  });

  xit('handles vertical line, mines at edges', () => {
    const minesweeper = new Minesweeper();
    const input = [
      '*',
      ' ',
      ' ',
      ' ',
      '*',
    ];
    const expected = [
      '*',
      '1',
      ' ',
      '1',
      '*',
    ];
    expect(minesweeper.annotate(input)).toEqual(expected);
  });

  xit('handles cross', () => {
    const minesweeper = new Minesweeper();
    const input = [
      '  *  ',
      '  *  ',
      '*****',
      '  *  ',
      '  *  ',
    ];
    const expected = [
      ' 2*2 ',
      '25*52',
      '*****',
      '25*52',
      ' 2*2 ',
    ];
    expect(minesweeper.annotate(input)).toEqual(expected);
  });

  xit('handles large board', () => {
    const minesweeper = new Minesweeper();
    const input = [
      ' *  * ',
      '  *   ',
      '    * ',
      '   * *',
      ' *  * ',
      '      ',
    ];
    const expected = [
      '1*22*1',
      '12*322',
      ' 123*2',
      '112*4*',
      '1*22*2',
      '111111',
    ];
    expect(minesweeper.annotate(input)).toEqual(expected);
  });
});
