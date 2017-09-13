

function Words() {}

Words.prototype.count = function (input) {
  const counts = {};
  const words = input.toLowerCase()
    .replace(/[,."\/!&@$%\^\*;:{}()¡¿?]/g, ' ')
    .replace(/\s'(\w+)'\s/, ' ' + '$1' + ' ')
    .match(/\S+/g);

  words.forEach((word) => {
    counts[word] = counts.hasOwnProperty(word) ? counts[word] + 1 : 1;
  });
  return counts;
};

module.exports = Words;
