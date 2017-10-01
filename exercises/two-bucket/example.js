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
    var currentBucketOne = measurements[0];
    var currentBucketTwo = measurements[1];
    var moveCount = 0;
    var pourOrReceive = true;
    while (true) {
      if (this.reachedGoal([currentBucketOne, currentBucketTwo])) {
        this.recordGoal([currentBucketOne, currentBucketTwo]);
        break;
      }
      if (currentBucketTwo > bucketOne && currentBucketOne === 0 && moveCount === 0) {
        currentBucketOne = bucketOne;
        currentBucketTwo = bucketTwo - currentBucketOne;
      } else if (currentBucketOne === bucketOne) {
        currentBucketOne = 0;
      } else if ((currentBucketTwo > bucketOne && currentBucketOne !== 0) || (currentBucketTwo > bucketOne && pourOrReceive)) {
        currentBucketTwo = currentBucketTwo - (bucketOne - currentBucketOne);
        currentBucketOne = bucketOne;
      } else if (currentBucketTwo > bucketOne || currentBucketOne === 0) {
        currentBucketOne = currentBucketTwo;
        currentBucketTwo = currentBucketTwo - currentBucketOne;
      } else if (currentBucketTwo === 0) {
        currentBucketTwo = bucketTwo;
      }
      moveCount++;
      pourOrReceive ? pourOrReceive = false : pourOrReceive = true;
    }
    return moveCount;
  };

  this.smallFirst = function (measurements) {
    var currentBucketOne = measurements[0];
    var currentBucketTwo = measurements[1];
    var moveCount = 0;
    var pourOrReceive = true;
    while (true) {
      if (this.reachedGoal([currentBucketOne, currentBucketTwo])) {
        this.recordGoal([currentBucketOne, currentBucketTwo]);
        break;
      }
      if (currentBucketOne === bucketOne && moveCount === 0) {
        currentBucketOne = 0;
        currentBucketTwo = bucketOne;
      } else if (currentBucketOne === 0) {
        currentBucketOne = bucketOne;
      } else if (currentBucketOne === bucketOne && currentBucketTwo < bucketTwo) {
        var temp = currentBucketTwo;
        currentBucketTwo + currentBucketOne > bucketTwo ? currentBucketTwo = bucketTwo : currentBucketTwo = temp + currentBucketOne;
        temp + currentBucketOne > bucketTwo ? currentBucketOne = currentBucketOne - (bucketTwo - temp) : currentBucketOne = 0;
      } else if (currentBucketTwo === bucketTwo) {
        currentBucketTwo = 0;
      } else if (currentBucketTwo === 0 && currentBucketOne < bucketOne) {
        currentBucketTwo = currentBucketOne;
        currentBucketOne = 0;
      }
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
