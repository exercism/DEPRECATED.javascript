let notAlpha = /[^a-z]+/gi,
  ALPHA_LENGTH = 26,
  cleaned,
  unique;

const Pangram = function (candidate) {
  unique = {};
  cleaned = (candidate.replace(notAlpha, '')).toLowerCase();
  cleaned.split('').forEach((el) => {
    unique[el] = true;
  });

  return {
    isPangram() {
      return Object.keys(unique).length === ALPHA_LENGTH;
    },
  };
};

module.exports = Pangram;
