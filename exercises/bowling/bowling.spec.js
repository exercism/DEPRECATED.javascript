var Bowling = require('./bowling');

describe('Bowling', function() {
  describe('Check game can be scored correctly.', function() {
    it('should be able to score open frame', function() {
      var rolls = [3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      expect(new Bowling(rolls).score()).toEqual(7);
    });

    xit('should be able to score multiple frames', function() {
      var rolls = [3, 4, 2, 3, 5, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      expect(new Bowling(rolls).score()).toEqual(19);
    });

    xit('should be able to score a game with all gutterballs', function() {
      var rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      expect(new Bowling(rolls).score()).toEqual(0);
    });

    xit('should be able to score a game with all single pin rolls', function() {
      var rolls = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
      expect(new Bowling(rolls).score()).toEqual(20);
    });

    xit('should be able to score a game with all open frames', function() {
      var rolls = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
      expect(new Bowling(rolls).score()).toEqual(90);
    });

    xit('should be able to score a strike not in the last frame', function() {
      var rolls = [10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      expect(new Bowling(rolls).score()).toEqual(26);
    });

    xit('should be able to score a spare not in the last frame', function() {
      var rolls = [5, 5, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      expect(new Bowling(rolls).score()).toEqual(20);
    });

    xit('should be able to score multiple strikes in a row', function() {
      var rolls = [10, 10, 10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      expect(new Bowling(rolls).score()).toEqual(81);
    });

    xit('should be able to score multiple spares in a row', function() {
      var rolls = [5, 5, 3, 7, 4, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      expect(new Bowling(rolls).score()).toEqual(32);
    });

    xit('should allow fill balls when the last frame is a strike', function() {
      var rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 7, 1];
      expect(new Bowling(rolls).score()).toEqual(18);
    });

    xit('should allow fill ball when the last frame is a spare', function() {
      var rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 1, 7];
      expect(new Bowling(rolls).score()).toEqual(17);
    });

    xit('should allow fill balls to be a strike', function() {
      var rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];
      expect(new Bowling(rolls).score()).toEqual(30);
    });

    xit('should be able to score a perfect game', function() {
      var rolls = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
      expect(new Bowling(rolls).score()).toEqual(300);
    });
  });

  describe('Check game rules.', function() {
    xit('should not allow rolls with negative pins', function() {
      var rolls = [-1];
      expect(function() { new Bowling(rolls).score(); }).toThrow(
        new Error('Pins must have a value from 0 to 10')
      );
    });

    xit('should not allow rolls better than strike', function() {
      var rolls = [11];
      expect(function() { new Bowling(rolls).score(); }).toThrow(
        new Error('Pins must have a value from 0 to 10')
      );
    });

    xit('should not allow two normal rolls better than strike', function() {
      var rolls = [5, 6];
      expect(function() { new Bowling(rolls).score(); }).toThrow(
        new Error('Pin count exceeds pins on the lane')
      );
    });

    xit('should not allow two normal rolls better than strike in last frame', function() {
      var rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6];
      expect(function() { new Bowling(rolls).score(); }).toThrow(
        new Error('Pin count exceeds pins on the lane')
      );
    });

    xit('should not allow to take score at the beginning of the game', function() {
      var rolls = [];
      expect(function() { new Bowling(rolls).score(); }).toThrow(
        new Error('Score cannot be taken until the end of the game')
      );
    });

    xit('should not allow to take score before the game has ended', function() {
      var rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      expect(function() { new Bowling(rolls).score(); }).toThrow(
        new Error('Score cannot be taken until the end of the game')
      );
    });

    xit('should not allow rolls after the tenth frame', function() {
      var rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      expect(function() { new Bowling(rolls).score(); }).toThrow(
        new Error('Should not be able to roll after game is over')
      );
    });

    xit('should not calculate score before fill balls have been played', function() {
      var rolls = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
      expect(function() { new Bowling(rolls).score(); }).toThrow(
        new Error('Score cannot be taken until the end of the game')
      );
    });
  });
});
