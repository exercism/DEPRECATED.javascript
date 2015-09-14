var at = require('./clock').at;

describe('Clock', function () {

  it('prints the hour', function () {
    expect(at(8).toString()).toEqual('08:00');
    expect(at(9).toString()).toEqual('09:00');
  });

  xit('prints past the hour', function () {
    expect(at(11, 9).toString()).toEqual('11:09');
    expect(at(11, 19).toString()).toEqual('11:19');
  });

  xit('can add minutes', function () {
    var clock = at(10).plus(3);
    expect(clock.toString()).toEqual('10:03');
  });

  xit('can add over an hour', function () {
    var clock = at(10).plus(61);
    expect(clock.toString()).toEqual('11:01');
  });

  xit('wraps around midnight', function () {
    var clock = at(23, 59).plus(2);
    expect(clock.toString()).toEqual('00:01');
  });

  xit('can subtract minutes', function () {
    var clock = at(10, 3).minus(3);
    expect(clock.toString()).toEqual('10:00');
  });

  xit('can subtract over an hour', function () {
    var clock = at(10, 3).minus(30);
    expect(clock.toString()).toEqual('09:33');

    var clock = at(10, 3).minus(70);
    expect(clock.toString()).toEqual('08:53');
  });

  xit('can know if it\'s equal to another clock', function () {
    var clock1 = at(10, 3);
    var clock2 = at(10, 3);
    expect(clock1.equals(clock2)).toBe(true);
  });

  xit('can know if it\'s not equal to another clock', function () {
    var clock1 = at(10, 3);
    var clock2 = at(10, 4);
    expect(clock1.equals(clock2)).toBe(false);
  });

  xit('wraps around midnight backwards', function () {
    var clock = at(0, 3).minus(4);
    expect(clock.toString()).toEqual('23:59');
  });

});

