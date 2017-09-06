var notAlpha = /[^a-z]+/gi,
  ALPHA_LENGTH = 26,
  cleaned,
  unique;

var Pangram = function(candidate) {
  var msg = candidate || '';
  unique = {};
  cleaned = (msg.replace(notAlpha, '')).toLowerCase();
  cleaned.split('').forEach(function (el) {
    unique[el] = true;
  });

  return {
    isPangram: function () {
      return Object.keys(unique).length === ALPHA_LENGTH;
    }
  };
};

module.exports = Pangram;
