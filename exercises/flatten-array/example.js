var Flattener = function(){
  this.flattenedArray = [];
};

Flattener.prototype.flatten = function(unflattenedArray, flattenedArray) {

   var self = this;
    unflattenedArray.forEach(function(m){
    if(Array.isArray(m)){
     return self.flatten(m, self.flattenedArray);
     }else if( m !== null){
     self.flattenedArray.push(m);
}
  });
  return self.flattenedArray;
  }

Flattener.prototype.clear = function(){
  return this.flattenedArray = [];
}
;

module.exports = Flattener;