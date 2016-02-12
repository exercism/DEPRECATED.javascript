//alternate solution written by Fullstack student, Griffin Telljohann
'use strict';

function TwoBucket(bucket1, bucket2, goal, startingBucket) {
  this.b1max = bucket1;
  this.b2max = bucket2;
  this.goalAmount = goal;
  this.states = {};
  var invalid = (startingBucket == "one" ? 0 : this.b1max) + "," + (startingBucket == "two" ? 0 : this.b2max)
  this.beenHere = {};
  this.beenHere[invalid] = true;
  var bestSolution = this.solve((startingBucket == "one" ? this.b1max : 0), (startingBucket == "two" ? this.b2max : 0))
  this.goalBucket = bestSolution.goalBucket;
  this.otherBucket = bestSolution.otherBucketFill;
  this.minMoves = 1 + bestSolution.numMoves;
}

TwoBucket.prototype.moves = function() {
  return this.minMoves;
};

TwoBucket.prototype.solve = function(bucket1fill, bucket2fill) {
  // if you've already been in this state, return
  if (this.beenHere[bucket1fill + "," + bucket2fill]) return {goalBucket: null};
  else this.beenHere[bucket1fill + "," + bucket2fill] = true;

  // if either bucket is filled to the goal amount, you've found a solution
  if (bucket1fill == this.goalAmount) {
    return {numMoves: 0, goalBucket: "one", otherBucketFill: bucket2fill};
  }
  if (bucket2fill == this.goalAmount) {
    return {numMoves: 0, goalBucket: "two", otherBucketFill: bucket1fill};
  }

  if (this.states[bucket1fill + "," + bucket2fill]) {
    return this.states[bucket1fill + "," + bucket2fill];
  }


  var testObj, bestSolution = {goalBucket: null};
  // fill bucket 1 to top
  if (bucket1fill !== this.b1max && bucket2fill !== this.b2max) {
    testObj = this.solve(this.b1max, bucket2fill);
    bestSolution = betterSolution(testObj, bestSolution);
  }

  // fill bucket 2 to top
  if (bucket1fill !== this.b1max && bucket2fill !== this.b2max) {
    testObj = this.solve(bucket1fill, this.b2max);
    bestSolution = betterSolution(testObj, bestSolution);
  }

  // empty bucket 1
  if (bucket1fill !== 0 && bucket2fill !== 0) {
    //console.log("empty 1");
    testObj = this.solve(0, bucket2fill);
    bestSolution = betterSolution(testObj, bestSolution);
  }

  // empty bucket 2
  if (bucket1fill !== 0 && bucket2fill !== 0) {
    //console.log("empty 2");
    testObj = this.solve(bucket1fill, 0);
    bestSolution = betterSolution(testObj, bestSolution);
  }

  var totalAmount = bucket1fill + bucket2fill;
  // pour bucket 1 into bucket 2
  if (bucket2fill !== this.b2max) {
    if (totalAmount <= this.b2max) {testObj = this.solve(0, totalAmount);}
    else {testObj = this.solve(totalAmount - this.b2max, this.b2max);}
    bestSolution = betterSolution(testObj, bestSolution);
  }

  // pour bucket 2 into bucket 1
  if (bucket1fill !== this.b1max) {
    if (totalAmount <= this.b1max) testObj = this.solve(totalAmount, 0);
    else testObj = this.solve(this.b1max, totalAmount - this.b1max);
    bestSolution = betterSolution(testObj, bestSolution);
  }

  this.states[bucket1fill + "," + bucket2fill] = bestSolution;
  if (typeof bestSolution.numMoves === "number") {
    bestSolution.numMoves++;
  }
  return bestSolution;
}

function betterSolution(test, currentBest) {
  if (test.goalBucket) {
    if (!currentBest || !currentBest.goalBucket || test.numMoves < currentBest.numMoves) {
      return test;
    }
  }
  return currentBest;
}

module.exports = TwoBucket;
