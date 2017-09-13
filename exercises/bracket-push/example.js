

var bracketPush = module.exports = function (input) {
  if (input.length === 0) {
    return true;
  }

  let bracketArray;
  bracketArray = input;
  const iArr = [];

  if (typeof input === 'string') {
    bracketArray = input.split('');
  }

  const openArray = ['{', '[', '('];
  const closeArray = ['}', ']', ')'];

  for (let i = 0; i < bracketArray.length; i++) {
    for (let j = 0; j < openArray.length; j++) {
      if (bracketArray[i] === openArray[j]) {
        iArr.push(i);
      }
    }
  }

  const topNumber = Math.max(...iArr);

  for (let k = 0; k < 3; k++) {
    if (bracketArray[topNumber] === openArray[k]) {
      if (typeof bracketArray[(topNumber + 1)] !== undefined) {
        if (bracketArray[(topNumber + 1)] === closeArray[k]) {
          bracketArray.splice(topNumber, 2);
          return bracketPush(bracketArray);
        }
      }
    }
  }
  return false;
};
