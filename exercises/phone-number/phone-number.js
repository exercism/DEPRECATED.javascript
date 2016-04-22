//
// This is only a SKELETON file for the "Phone Number" exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at test.script.js--that should give you some hints about what is
// expected here.

'use strict';

var Phone = module.exports = function Phone(number) {
  this.rawNumber = number;
  this.cleanedNumber = this.cleanNumber(number);
};

Phone.prototype.cleanNumber = function(number) {
//
// YOUR CODE GOES HERE
//
};

Phone.prototype.number = function() {
  return this.cleanedNumber;
};

Phone.prototype.areaCode = function() {
//
// YOUR CODE GOES HERE
//
};

Phone.prototype.exchangeCode = function() {
//
// YOUR CODE GOES HERE
//
};

Phone.prototype.subscriberNumber = function() {
//
// YOUR CODE GOES HERE
//
};

Phone.prototype.toString = function() {
//
// YOUR CODE GOES HERE
//
};
