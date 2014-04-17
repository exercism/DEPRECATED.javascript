"use strict";
module.exports = anagram;

function anagram(word) {
  return {
    // public API
    matches: matches.bind(this, word)
  };
}

function matches(word, words) {
  words = Array.isArray(words) ? words : [].slice.call(arguments, 1);

  return words.filter(function (candidate) {
    return !sameWord(word, candidate) && isAnagram(word, candidate);
  });
}

function sameWord(word, candidate) {
  return word.toLowerCase() === candidate.toLowerCase();
}

function isAnagram(word, candiate) {
  return normalize(word) === normalize(candiate);
}

function normalize(string) {
  return string.toLowerCase().split("").sort().toString();
}

