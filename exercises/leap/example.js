'use strict';

/**
 * Whether given year is a leap year.
 *
 * @return {boolean}
 * Whether given year is a leap year.
 */
function isLeap (year) {
  return (year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0));
}

module.exports = isLeap;
