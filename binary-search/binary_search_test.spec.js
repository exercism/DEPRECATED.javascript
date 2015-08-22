var BinarySearch = require('./binary_search');

describe('BinarySearch', function() {

  var sortedArray = [1, 2, 3, 4, 5, 6];
  var sortedArrayOfOddLength = [0, 1, 2, 2, 3, 10, 12];
  var unsortedArray = [10, 2, 5, 1];

  it ('should require a sorted array', function() {
    var invalidBinarySearch = new BinarySearch(unsortedArray);
    var validBinarySearch = new BinarySearch(sortedArray);

    expect(typeof invalidBinarySearch.array).toEqual('undefined');
    expect(Array.isArray(validBinarySearch.array)).toEqual(true);
  });

  xit('should find the correct index of an included value', function() {
    expect(2).toEqual(new BinarySearch(sortedArray).indexOf(3));
  });

  xit('should search the middle of the array', function() {
    expect(3).toEqual(new BinarySearch(sortedArrayOfOddLength).indexOf(2));
  });

  xit('should return -1 for a value not in the array', function() {
    expect(-1).toEqual(new BinarySearch(sortedArray).indexOf(10));
  });
});

