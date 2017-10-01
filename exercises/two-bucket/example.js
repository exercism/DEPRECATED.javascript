'use strict';

function TwoBucket(bucketOne, bucketTwo, goal, startBucket) {
  this.bucketOne = bucketOne;
  this.bucketTwo = bucketTwo;
  this.goal = goal;
  this.startBucket = startBucket;

  this.reachedGoal = function (measurements) {
    return (measurements[0] === goal || measurements[1] === goal);
  };

  this.recordGoal = function (measurements) {
    if (measurements[0] === goal) {
      this.goalBucket = 'one';
      this.otherBucket = measurements[1];
    } else {
      this.goalBucket = 'two';
      this.otherBucket = measurements[0];
    }
  };

  this.bigFirst = function (measurements) {
    var j = measurements[0];
    var k = measurements[1];
    var moveCount = 0;
    var pourOrReceive = true;
    while (true) {
      if (this.reachedGoal(measurements)) {
        this.recordGoal(measurements);
        break;
      }
      if (k > bucketOne && j === 0 && moveCount === 0) {
        j = bucketOne;
        k = bucketTwo - j;
      } else if (j === bucketOne) {
        j = 0;
      } else if ((k > bucketOne && j !== 0) || (k > bucketOne && pourOrReceive)) {
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
      pourOrReceive ? pourOrReceive = false : pourOrReceive = true;
    }
    return moveCount;
  };

  this.smallFirst = function (measurements) {
    var j = measurements[0];
    var k = measurements[1];
    var moveCount = 0;
    var pourOrReceive = true;
    while (true) {
      if (this.reachedGoal(measurements)) {
        this.recordGoal(measurements);
        break;
      }
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
      pourOrReceive ? pourOrReceive = false : pourOrReceive = true;
    }
    return moveCount;
  };

  this.moves = function () {
    if (this.startBucket === 'one') {
      return this.smallFirst([this.bucketOne, 0]) + 1;
    }
    return this.bigFirst([0, this.bucketTwo]) + 1;
  };
}

module.exports = TwoBucket;
