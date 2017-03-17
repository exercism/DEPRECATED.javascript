(function() {
  'use strict';

  function length(list) {
    return list.size();
  }

  function reverse(list) {
    var result = new Array(list);
    result.reverse();
    return result;
  }
/*
  function map(list) {

  }

  function reduce(list) {

  }

  function filter(list) {

  }
*/
  function concat(list1,list2) {
    var r1 = new Array(list1);
    var r2 = new Array(list2);
    var final = r1.concat(r2);
    return final;
  }


  module.exports = ListOps;
})();
