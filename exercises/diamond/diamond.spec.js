const Diamond = require('./diamond');

describe('Diamond', () => {
  const diamond = new Diamond();

  it('test letter A', () => {
    result = 'A\n';
    expect(diamond.makeDiamond('A')).toEqual(result);
  });

  it('test letter C', () => {
    result = `${['  A  ',
      ' B B ',
      'C   C',
      ' B B ',
      '  A  '].join('\n')}\n`;
    expect(diamond.makeDiamond('C')).toEqual(result);
  });

  it('test letter E', () => {
    result = `${['    A    ',
      '   B B   ',
      '  C   C  ',
      ' D     D ',
      'E       E',
      ' D     D ',
      '  C   C  ',
      '   B B   ',
      '    A    '].join('\n')}\n`;
    expect(diamond.makeDiamond('E')).toEqual(result);
  });
});
