'use strict';

function reverseString(s) {}

ReverseString.prototype.convert = function (s) {
	
  var rString = '';
  for (var i=s.length-1; i>=0; i--){
  	rString += s[i];
  }
  return rString;
};

module.exports = ReverseString;
