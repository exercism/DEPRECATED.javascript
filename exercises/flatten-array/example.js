var Flattener = function () {};

Flattener.prototype.flatten = function (unflattenedArray, flattenedArray) {
  var  self = this, flattenedArray = flattenedArray || [];
  unflattenedArray.forEach(function (element) {
    if (Array.isArray(element)) {
      return self.flatten(element, flattenedArray);
    } else if ( element !== null) {
      flattenedArray.push(element);
    }
  });
  return flattenedArray;
};

module.exports = Flattener;
