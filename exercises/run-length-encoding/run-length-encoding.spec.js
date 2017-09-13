const RLE = require('./run-length-encoding');

describe('Run-length encoding', () => {
  it('encode empty string', () => {
    expect(RLE.encode('')).toEqual('');
  });

  xit('encode single characters only', () => {
    expect(RLE.encode('XYZ')).toEqual('XYZ');
  });

  xit('decode empty string', () => {
    expect(RLE.decode('')).toEqual('');
  });

  xit('decode single characters only', () => {
    expect(RLE.decode('XYZ')).toEqual('XYZ');
  });

  xit('encode simple', () => {
    expect(RLE.encode('AABBBCCCC')).toEqual('2A3B4C');
  });

  xit('decode simple', () => {
    expect(RLE.decode('2A3B4C')).toEqual('AABBBCCCC');
  });

  xit('encode with single values', () => {
    expect(RLE.encode('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB')).toEqual('12WB12W3B24WB');
  });

  xit('decode with single values', () => {
    expect(RLE.decode('12WB12W3B24WB')).toEqual('WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWB');
  });

  xit('decode(encode(...))combination', () => {
    expect(RLE.decode(RLE.encode('zzz ZZ  zZ'))).toEqual('zzz ZZ  zZ');
  });
});
