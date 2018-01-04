'use strict';

function Bowling(rolls) {
  this.rolls = rolls;
}

Bowling.prototype.score = function () {
  var maxFrames = 10;
  var maxPins = 10;

  var initialState = {
    frameNumber: 1,
    rollNumber: 1,
    pinsRemaining: 10,
    spareLastFrame: false,
    strikeLastFrame: false,
    twoStrikesInARow: false,
    fillBall: false,
    score: 0
  };

  var finalState = this.rolls.reduce(function (state, roll) {
    if (roll < 0 || roll > maxFrames ) {
      throw new Error('Pins must have a value from 0 to 10');
    }

    if (roll > state.pinsRemaining) {
      throw new Error('Pin count exceeds pins on the lane');
    }

    if (state.frameNumber > maxFrames ) {
      throw new Error('Should not be able to roll after game is over');
    }

    var finalFrame = state.frameNumber === maxFrames;
    var strike = state.rollNumber === 1 && roll === 10;
    var spare = state.rollNumber === 2 && roll === state.pinsRemaining;
    var frameOver = finalFrame
      ? (!state.fillBall && !spare && state.rollNumber === 2) || state.rollNumber === 3
      : strike || spare || state.rollNumber === 2;

    var score = state.score + roll;

    if (state.strikeLastFrame && state.rollNumber < 3) { score = incrementScore(score, roll); }
    if (state.spareLastFrame && state.rollNumber === 1) { score = incrementScore(score, roll); }
    if (state.twoStrikesInARow && state.rollNumber === 1) { score = incrementScore(score, roll); }

    var next = {};

    next.frameNumber = frameOver ? state.frameNumber + 1 : state.frameNumber;
    next.rollNumber = frameOver ? 1 : state.rollNumber + 1;
    if ( finalFrame ) {
      next.pinsRemaining = (strike || spare) ? maxPins : pinsRemaining(state.pinsRemaining, roll);
    } else {
      next.pinsRemaining = frameOver ? maxPins : pinsRemaining(state.pinsRemaining, roll);
    }
    next.spareLastFrame = frameOver ? spare : state.spareLastFrame;
    next.strikeLastFrame = frameOver ? strike : state.strikeLastFrame;
    next.twoStrikesInARow = frameOver ? strike && state.strikeLastFrame : state.twoStrikesInARow;
    next.fillBall = next.fillBall || (finalFrame && (strike || spare));
    next.score = score;

    return next;
  }, initialState);

  if (finalState.frameNumber <= maxFrames ) {
    throw new Error('Score cannot be taken until the end of the game');
  }

  return finalState.score;
};

function incrementScore(score, roll) {
  return score + roll;
}

function pinsRemaining(pins, roll) {
  return pins - roll;
}


module.exports = Bowling;
