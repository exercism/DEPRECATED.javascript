

const Change = function () {


};

module.exports = Change;


// data structure to hold each candidate solution that is generated
const Candidate = function () {
  let searched = false;
  const coins = [];

  this.Searched = function () {
    searched = true;
  };

  this.isSearched = function () {
    return searched;
  };

  this.getCoins = function () {
    return coins;
  };

  this.addCoin = function (coin) {
    function sortNum(a, b) {
      return a - b;
    }

    coins.push(coin);
    coins.sort(sortNum);
  };

  this.getCoinCount = function () {
    return coins.length;
  };

  this.getSum = function () {
    function getSum(total, num) { return total + num; }
    return coins.reduce(getSum);
  };
};

Change.prototype.calculate = function (coinArray, target) {
  const candidates = [];
  // fill the array with 0 to start
  candidates[target] = 0;
  candidates.fill(0);

  // validation checks up front
  if (target == 0) return [];

  if (target < 0) {
    throw new Error('Negative totals are not allowed.');
  }

  if (target < Math.min.apply(null, coinArray)) {
    throw new Error(`The total ${target} cannot be represented in the given currency.`);
  }


  initialize();
  // printAll();


  // process the arrange until everything is searched
  while (isDone() == false) {
    const candidate = getNext();
    branch(candidate);
    candidate.Searched();
  }
  // printAll();


  // print the result
  if (typeof (candidates[target]) !== 'number') { return candidates[target].getCoins(); }
  throw new Error(`The total ${target} cannot be represented in the given currency.`);


  // print the candidate array
  function printAll() {
    for (let j = 0; j < candidates.length; j++) {
      if (typeof (candidates[j]) === 'object') {
        console.log(`index: ${j} ${candidates[j].getCoins()} searched: ${candidates[j].isSearched()}`);
      } else {
        console.log(`index: ${j} is empty ${typeof (candidates[j])}`);
      }
    }
  }

  // initialize the candidate array with the given coins only
  function initialize() {
    for (let j = 0; j < coinArray.length; j++) {
      const temp = coinArray[j];
      const candidate = new Candidate();
      candidate.addCoin(temp);
      saveCandidate(candidate);
    }
  }

  // is everthing searched?
  function isDone() {
    let done = true;
    for (let i = 0; i < candidates.length; i++) {
      const temp = candidates[i];
      if (typeof (temp) !== 'number') {
        if (temp.isSearched() == false) {
          done = false;
          break;
        }
      }
    }
    return done;
  }

  // get the next unsearched member of the candidate array
  function getNext() {
    for (let i = 0; i < candidates.length; i++) {
      const temp = candidates[i];
      if (typeof (temp) !== 'number' &&
                temp.isSearched() == false) return temp;
    }
    return null;
  }

  // save a new candidate to the candidate array
  function saveCandidate(candidate) {
    const sum = candidate.getSum();

    if (candidate.getSum() <= target &&
            typeof (candidates[sum]) !== 'number' &&
            candidates[sum].getCoinCount() > candidate.getCoinCount()) {
      candidates[sum] = candidate;
    }

    if (candidate.getSum() <= target &&
           typeof (candidates[sum]) === 'number') {
      candidates[sum] = candidate;
    }
  }


  // for the candidate, generate another candate for each of the possible coins
  function branch(current) {
    for (let j = 0; j < coinArray.length; j++) {
      // make a new Candidate for coin type
      const candidate = new Candidate();

      // copy the curent coins into it and add the new coin type
      for (let i = 0; i < current.getCoins().length; i++)candidate.addCoin(current.getCoins()[i]);

      candidate.addCoin(coinArray[j]);

      saveCandidate(candidate);
    }
  }
};

