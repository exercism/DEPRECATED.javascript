'use strict';

var fizzbuzz = function (x) {
    if (x % 15 === 0) {
        return "fizzbuzz";
    } else if (x % 5 === 0) {
        return "buzz";
    } else if (x % 3 === 0) {
        return "fizz";
    } else {
        return x;
    }
};

module.exports = fizzbuzz;
