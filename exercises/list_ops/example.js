(function() {
  'use strict';

  function length(List) {
    return List.size();
  }

  function reverse(List) {
    var result = new Array(List);
    result.reverse();
    return result;
  }

  function map(List) {
    
  }

  function reduce(List) {
    
  }

  function filter(List) {
    
  }

  function concat(List1,List2) {
    var r1 = new Array(List1);
    var r2 = new Array(List2);
    var final = r1.concat(r2);
    return final;
  }


  module.exports = ListOps;
})();