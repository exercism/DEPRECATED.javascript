(function () {
  'use strict';

  function bottles(number) {
    var str = '';

    if (number === 0) {
      str = 'No more bottles';
    } else if (number === 1) {
      str = '1 bottle';
    } else {
      str = number + ' bottles';
    }

    return str;
  }

  function action(current_verse) {
    var sbj, str = '';

    if (current_verse === 0) {
      str = 'Go to the store and buy some more, ';
    } else {
      sbj = (current_verse === 1 ? 'it' : 'one');
      str = 'Take ' + sbj + ' down and pass it around, ';
    }

    return str;
  }

  function next_bottle(current_verse) {
    return bottles(next_verse(current_verse)).toLowerCase() + ' of beer on the wall.\n';
  }

  function next_verse(current_verse) {
    return current_verse === 0 ? 99 : (current_verse - 1);
  }

  function BeerSong() {}

  BeerSong.prototype.sing = function (first, last) {
    if (typeof (first) === 'undefined') {
      first = 99;
    }
    if (typeof (last) === 'undefined') {
      last = 0;
    }

    var verses = [];
    for (var i = first; i >= last; i--) {
      verses.push(this.verse(i));
    }

    return verses.join('\n');
  };

  BeerSong.prototype.verse = function (number) {
    var line1 = bottles(number) + ' of beer on the wall, ';
    var line2 = bottles(number).toLowerCase() + ' of beer.\n';
    var line3 = action(number);
    var line4 = next_bottle(number);

    return [line1, line2, line3, line4].join('');
  };

  module.exports = BeerSong;
})();
