

module.exports = {
  translate(english) {
    const words = english.split(' ');
    const translated = [];

    function translateWord(word) {
      const parts = word.match(/^([^aeiou]?qu|[^aeiou]*)(.+)/);
      const beginning = parts[1];
      const ending = parts[2];

      if (beginning.length === 0) {
        translated.push(`${word}ay`);
      } else {
        translated.push(`${ending + beginning}ay`);
      }
    }

    words.forEach(translateWord);
    return translated.join(' ');
  },
};
