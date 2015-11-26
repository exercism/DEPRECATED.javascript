var notAlpha = /[^a-z]+/gi,
  ALPHA_LENGTH = 26,
  cleaned,
  unique;

var Pangram = function(candidate) {
  unique = {};
  cleaned = (candidate.replace(notAlpha, '')).toLowerCase();
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
