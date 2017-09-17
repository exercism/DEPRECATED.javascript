module.exports = {
  parse: function (phrase) {
    return phrase.match(/[A-Z]+[a-z]*|[a-z]+/g)
      .reduce(function (acronym, word) {
        return acronym += word[0].toUpperCase();
      }, '');
  }
};
