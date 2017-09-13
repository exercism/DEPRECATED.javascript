

const LETTERS = 'abcdefghijklmnopqrstuvwxyz';
const REVERSED_LETTERS = 'zyxwvutsrqponmlkjihgfedcba';

function insertSpacing(s, interval) {
  const matcher = new RegExp(`.{1,${interval}}`, 'g');
  return s.match(matcher).join(' ');
}

function invert(character) {
  /* jshint validthis: true */
  if (character.match(/\d/)) {
    this.push(character);
  } else {
    this.push(LETTERS[REVERSED_LETTERS.indexOf(character)]);
  }
}

module.exports = {
  encode(s) {
    let encoded = '';
    const characters = [];
    s.toLowerCase().split('').forEach(invert, characters);
    encoded = insertSpacing(characters.join(''), 5);
    return encoded;
  },
};
