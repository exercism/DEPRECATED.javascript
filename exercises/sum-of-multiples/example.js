

function isMultiple(i) {
  /* jshint validthis:true */
  let result = false;
  this.multiples.forEach((multiple) => {
    if (i % multiple === 0) {
      result = true;
    }
  });
  return result;
}

function SumOfMultiples(multiples) {
  if (!(this instanceof SumOfMultiples)) {
    return new SumOfMultiples(multiples);
  }
  this.multiples = multiples;
}

SumOfMultiples.prototype.to = function (limit) {
  let sum = 0;
  for (let i = 1; i < limit; i++) {
    if (isMultiple.call(this, i)) {
      sum += i;
    }
  }
  return sum;
};

module.exports = SumOfMultiples;
