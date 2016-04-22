//
// This is only a SKELETON file for the "Allergies" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

function Allergies(allergenIndex) {
  this.allergenIndex = allergenIndex;
}

Allergies.possibleAllergies = [ 'eggs', 'peanuts', 'shellfish', 'strawberries',
                                 'tomatoes', 'chocolate', 'pollen', 'cats'];

Allergies.prototype = {
  list: function() {
  //
  // YOUR CODE GOES HERE
  //
  },
  allergicTo: function(food) {
  //
  // YOUR CODE GOES HERE
  //
  }
};

module.exports = Allergies;
