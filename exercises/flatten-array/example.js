var Flattener = function(){};

Flattener.prototype.flatten = function(unflattenedArray, flattenedArray) {
   var  self = this, flattenedArray = flattenedArray || []; 
   unflattenedArray.forEach(function(m){
       if(Array.isArray(m)){
           return self.flatten(m, flattenedArray);
       }else{
           flattenedArray.push(m);
}
  });
  return flattenedArray;
  }


;

module.exports = Flattener;