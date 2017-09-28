function Bob() {
  'use strict';

  function isSilence(message) {
    return message.replace(/\s+/g, '') === '';
  }

  function isShouting(message) {
    return message.toUpperCase() === message && /[A-Z]/.test(message);
  }

  function isAQuestion(message) {
    return message[message.length - 1] === '?';
  }

  this.hey = function (input) {
    var message = input.trim();
    if (isSilence(message)) {
      return 'Fine. Be that way!';
    } else if (isShouting(message)) {
      return 'Whoa, chill out!';
    } else if (isAQuestion(message)) {
      return 'Sure.';
    }
    return 'Whatever.';
  };
}

module.exports = Bob;
