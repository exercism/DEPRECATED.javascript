module.exports = function (word) {
  this.word = word.replace(/ |-/g, '');

  this.isIsogram = function () {
    const unique = this.word.toLowerCase().split('').filter((element, index, self) => self.indexOf(element) === index);

    return unique.length === this.word.length;
  };
};
