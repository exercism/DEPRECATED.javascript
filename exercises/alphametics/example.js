function solve(puzzle) {
  const parts = puzzle
    .split(/[+|==]/g)
    .map(o => o.trim())
    .filter(o => o !== '');

  if (parts.length < 3) {
    return null;
  }

  const uniqueLetters = getUniqueLetters(parts.join(''));
  const firstLetters = getFirstLetters(parts);

  const numberCombinations = getNumberCombinations([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], uniqueLetters.length);
  const permutations = getPermutations(Array(uniqueLetters.length).fill().map((_, i) => i));

  while (numberCombinations.length) {
    const numberCombination = numberCombinations.pop();
    for (let k = 0; k < permutations.length; k++) {
      const newNumbers = assignNumbers(numberCombination, uniqueLetters, permutations[k]);
      if (testNumbers(newNumbers, parts, firstLetters)) {
        return newNumbers;
      }
    }
  }
  return null;
}

function getFirstLetters(words) {
  return words
    .map(word => word[0])
    .filter((val, i, arr) => arr.indexOf(val) === i);
}

function assignNumbers(numbers, letters, orders) {
  const output = {};
  for (let i = 0; i < letters.length; i++) {
    output[letters[i]] = numbers[orders[i]];
  }
  return output;
}

function getUniqueLetters(string) {
  return string.split('').filter((val, i, arr) => arr.indexOf(val) === i);
}

function testNumbers(numbers, puzzleParts, firstLetters) {
  const keys = Object.keys(numbers);
  for (let i = 0; i < keys.length; i++) {
    if (numbers[keys[i]] === 0 && firstLetters.indexOf(keys[i]) !== -1) {
      return false;
    }
  }
  const replaceRegex = new RegExp(`[${keys.join('')}]`, 'g');

  puzzleParts = puzzleParts.join(',')
    .replace(replaceRegex, input => numbers[input])
    .split(',')
    .map(t => parseInt(t));

  const total = puzzleParts.slice(puzzleParts.length - 1)[0];
  return total === puzzleParts
    .slice(0, puzzleParts.length - 1)
    .reduce((acc, val) => acc + val, 0);
}

function getPermutations(inputArr) {
  const results = [];
  function permute(arr, memo) {
    var cur,
      memo = memo || [];
    for (let i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }
    return results;
  }
  return permute(inputArr);
}

function getNumberCombinations(set, k) {
  let i,
    j,
    combs,
    head,
    tailcombs;
  if (k > set.length || k <= 0) {
    return [];
  }
  if (k === 1) {
    combs = [];
    for (i = 0; i < set.length; i++) {
      combs.push([set[i]]);
    }
    return combs;
  }
  combs = [];
  for (i = 0; i < set.length - k + 1; i++) {
    head = set.slice(i, i + 1);
    tailcombs = getNumberCombinations(set.slice(i + 1), k - 1);
    for (j = 0; j < tailcombs.length; j++) {
      combs.push(head.concat(tailcombs[j]));
    }
  }
  return combs;
}

module.exports = solve;
