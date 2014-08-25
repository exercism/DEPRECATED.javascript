var BracketPush = function(input) {
  if (input.length===0) {
    return "true";
  }
  var bracketArray;
  bracketArray = input;
  var iArr = [];
  if(typeof input === "string"){
    bracketArray = input.split("");
  }
  var compareArray = ["{", "[", "("];
  var closeArray = ["}", "]", ")"];
  for (var i=0; i<bracketArray.length; i++) {
    for (var j=0; j<compareArray.length; j++) {
      if (bracketArray[i]===compareArray[j]) {
        iArr.push(i);
      }
    }
  }
  var topNumber = Math.max.apply(Math, iArr);
  console.log(bracketArray[topNumber]);
  console.log(compareArray[1]);
  for (var k=0; k<3; k++) {
    console.log(k);
    if (bracketArray[topNumber]===compareArray[k]) {
      console.log(compareArray[k]);
      if (typeof bracketArray[(topNumber+1)] !== "undefined") {
        if (bracketArray[(topNumber+1)]===closeArray[k]) {
          bracketArray.splice(topNumber, 2);
          return BracketPush(bracketArray);
        }
      }
    }
  }
  return "false";
};