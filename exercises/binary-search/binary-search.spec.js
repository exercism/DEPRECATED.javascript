const BinarySearch = require('./binary-search');

describe('BinarySearch', () => {
  const sortedArray = [1, 2, 3, 4, 5, 6];
  const sortedArrayOfOddLength = [0, 1, 2, 2, 3, 10, 12];
  const unsortedArray = [10, 2, 5, 1];

  it('should require a sorted array', () => {
    const invalidBinarySearch = new BinarySearch(unsortedArray);
    const validBinarySearch = new BinarySearch(sortedArray);

    expect(typeof invalidBinarySearch.array).toEqual('undefined');
    expect(Array.isArray(validBinarySearch.array)).toEqual(true);
  });

  xit('should find the correct index of an included value in the middle of the array', () => {
    expect(new BinarySearch(sortedArray).indexOf(3)).toEqual(2);
  });

  xit('should find the correct index of an included value at the beginning of the array', () => {
    expect(new BinarySearch(sortedArray).indexOf(1)).toEqual(0);
  });

  xit('should find the correct index of an included value at the end of the array', () => {
    expect(new BinarySearch(sortedArray).indexOf(6)).toEqual(5);
  });

  xit('should search the middle of the array', () => {
    expect(new BinarySearch(sortedArrayOfOddLength).indexOf(2)).toEqual(3);
  });

  xit('should return -1 for a value not in the array', () => {
    expect(new BinarySearch(sortedArray).indexOf(10)).toEqual(-1);
  });
});
