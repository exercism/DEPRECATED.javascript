'use strict';

function TwoBucket(bucketOne, bucketTwo, goal, startBucket) {
  this.startBucket = startBucket;
  this.bucketOne = bucketOne;
  this.bucketTwo = bucketTwo;
  this.goal = goal;

  this.reachedGoal = function (measurements) {
    var reached = false;
    if (measurements[0] === goal || measurements[1] === goal) {
      if (measurements[0] === goal) {
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
    var j = measurements[0];
    var k = measurements[1];
    while (true) {
      if (this.reachedGoal(measurements)) break;
      if (k > bucketOne && j === 0 && moveCount === 0) {
        j = bucketOne;
        k = bucketTwo - j;
      } else if (j === bucketOne) {
        j = 0;
      } else if ((k > bucketOne && j !== 0) || (k > bucketOne && prBool)) {
        k = k - (bucketOne - j);
        j = bucketOne;
      } else if (k > bucketOne || j === 0) {
        j = k;
        k = k - j;
      } else if (k === 0) {
        k = bucketTwo;
      }
      measurements = [j, k];
      moveCount++;
      prBool ? prBool = false : prBool = true;
    }
    return moveCount;
  };

  this.smallFirst = function (measurements, moveCount, prBool) {
    var j = measurements[0];
    var k = measurements[1];
    while (true) {
      if (this.reachedGoal(measurements)) break;
      if (j === bucketOne && moveCount === 0) {
        j = 0;
        k = bucketOne;
      } else if (j === 0) {
        j = bucketOne;
      } else if (j === bucketOne && k < bucketTwo) {
        var tempK = k;
        k + j > bucketTwo ? k = bucketTwo : k = tempK + j;
        tempK + j > bucketTwo ? j = j - (bucketTwo - tempK) : j = 0;
      } else if (k === bucketTwo) {
        k = 0;
      } else if (k === 0 && j < bucketOne) {
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
  var j = 0; // j will be running val of bucket one,
  var k = 0; // k will be running val of bucket two
  this.startBucket === 'one' ? j = this.bucketOne : k = this.bucketTwo;
  var measurements = [j, k];
  var moveCount = 0;
  var prBool = true; // pour / receive boolean - need to pour or receive everbucketTwo other turn
  if (this.startBucket === 'one') {
    moveCount = this.smallFirst(measurements, moveCount, prBool);
  } else {
    moveCount = this.bigFirst(measurements, moveCount, prBool);
  }
  return moveCount + 1; // accounts for first move made before loop (and moveCount starts at goalero before loop)
};

module.exports = TwoBucket;
