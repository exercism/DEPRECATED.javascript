function Gigasecond(dateOfBirth) {
  'use strict';

  this.dateOfBirth = dateOfBirth;

  this.date = function() {
    return new Date(this.dateOfBirth.getTime() + Math.pow(10, 12));
  };

}

module.exports = Gigasecond;
