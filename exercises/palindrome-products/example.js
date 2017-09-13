

module.exports = function Palindromes(options) {
  this.maxFactor = options.maxFactor;
  this.minFactor = options.minFactor || 1;

  this.generate = function () {
    const minFactor = this.minFactor;
    const maxFactor = this.maxFactor;

    const palindromes = [];
    const palindromeIndexes = [];

    for (let i = minFactor; i <= maxFactor; i++) {
      for (let j = minFactor; j <= maxFactor; j++) {
        const result = i * j;
        if (!this.isPalindrome(result)) { continue; }

        const newFactor = [i, j].sort();

        if (palindromes[result] === undefined) {
          palindromes[result] = [];
          palindromeIndexes.push(result);
        }

        if (!arrayContainsArray(palindromes[result], newFactor)) {
          palindromes[result].push(newFactor);
        }
      }
    }

    this.palindromes = palindromes;
    this.palindromeIndexes = palindromeIndexes;
  };

  this.largest = function () {
    const largestPalindrome = Math.max.apply(null, this.palindromeIndexes);
    const factors = this.palindromes[largestPalindrome];
    return { value: largestPalindrome, factors };
  };

  this.smallest = function () {
    const smallestPalindrome = Math.min.apply(null, this.palindromeIndexes);
    const factors = this.palindromes[smallestPalindrome];
    return { value: smallestPalindrome, factors };
  };

  this.isPalindrome = function (number) {
    const numberAsString = number.toString();
    const reversedString = numberAsString.split('').reverse().join('');
    return (numberAsString === reversedString);
  };
};

function arrayContainsArray(array, element) {
  let containsArray = false;

  for (let i = 0; i < array.length; i++) {
    if (array[i].join() === element.join()) {
      containsArray = true;
    }
  }

  return containsArray;
}
