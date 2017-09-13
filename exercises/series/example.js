

function Series(numberString) {
  this.numberString = numberString;
  this.digits = this.getDigits();
}

Series.prototype.getDigits = function () {
  return this.numberString.split('').map(digit => parseInt(digit, 10));
};

Series.prototype.slices = function (sliceSize) {
  const result = [];
  let slice = [];

  if (sliceSize > this.digits.length) {
    throw new Error('Slice size is too big.');
  }

  for (let i = 0; i < this.digits.length - sliceSize + 1; i++) {
    for (let j = 0; j < sliceSize; j++) {
      slice.push(this.digits[i + j]);
    }
    result.push(slice);
    slice = [];
  }

  return result;
};

module.exports = Series;
