const Diamond = function () {
  this.makeDiamond = function (input) {
    const inputIndex = input.charCodeAt() - 65;
    let output = '';
    for (var i = 0; i <= inputIndex; i++) {
      output += getLine(inputIndex, i);
    }
    for (var i = inputIndex - 1; i >= 0; i--) {
      output += getLine(inputIndex, i);
    }
    return output;
  };

  var getLine = function (inputIndex, index) {
    const difference = inputIndex - index;
    return `${spaceTimes(difference) + printAlphabets(index) + spaceTimes(difference)}\n`;
  };

  var printAlphabets = function (index) {
    const character = 65 + index;
    if (index === 0) {
      return 'A';
    }

    return String.fromCharCode(character) + spaceTimes(((index - 1) * 2) + 1) + String.fromCharCode(character);
  };

  var spaceTimes = function (times) {
    return ' '.repeat(times);
  };
};

module.exports = Diamond;
