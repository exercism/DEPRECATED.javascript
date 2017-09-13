

function TwoBucket(x, y, z, starter) {
  this.starter = starter;
  this.x = x;
  this.y = y;

  this.reachedGoal = function (measurements) {
    let reached = false;
    if (measurements[0] == z || measurements[1] == z) {
      if (measurements[0] == z) {
        this.goalBucket = 'one';
        this.otherBucket = measurements[1];
      } else {
        this.goalBucket = 'two';
        this.otherBucket = measurements[0];
      }
      reached = true;
    }
    return reached;
  };

  this.bigFirst = function (measurements, moveCount, prBool) {
    let j = measurements[0],
      k = measurements[1];
    while (true) {
      if (this.reachedGoal(measurements)) break;
      if (k > x && j == 0 && moveCount == 0) {
        j = x;
        k = y - j;
      } else if (j == x) {
        j = 0;
      } else if ((k > x && j !== 0) || (k > x && prBool)) {
        k -= (x - j);
        j = x;
      } else if (k > x || j == 0) {
        j = k;
        k -= j;
      } else if (k == 0) {
        k = y;
      }
      measurements = [j, k];
      moveCount++;
      prBool ? prBool = false : prBool = true;
    }
    return moveCount;
  };

  this.smallFirst = function (measurements, moveCount, prBool) {
    let j = measurements[0],
      k = measurements[1];
    while (true) {
      if (this.reachedGoal(measurements)) break;
      if (j == x && moveCount == 0) {
        j = 0;
        k = x;
      } else if (j == 0) {
        j = x;
      } else if (j == x && k < y) {
        const tempK = k;
        k + j > y ? k = y : k = tempK + j;
        tempK + j > y ? j -= (y - tempK) : j = 0;
      } else if (k == y) {
        k = 0;
      } else if (k == 0 && j < x) {
        k = j;
        j = 0;
      }
      measurements = [j, k];
      moveCount++;
      prBool ? prBool = false : prBool = true;
    }
    return moveCount;
  };
}

TwoBucket.prototype.moves = function () {
  let j = 0,
    k = 0; // j will be running val of bucket one, k = running val of bucket two
  this.starter == 'one' ? j = this.x : k = this.y;
  const measurements = [j, k];
  let moveCount = 0;
  const prBool = true; // pour / receive boolean - need to pour or receive every other turn
  if (this.starter == 'one') {
    moveCount = this.smallFirst(measurements, moveCount, prBool);
  } else {
    moveCount = this.bigFirst(measurements, moveCount, prBool);
  }
  return moveCount + 1; // accounts for first move made before loop (and moveCount starts at zero before loop)
};

module.exports = TwoBucket;
