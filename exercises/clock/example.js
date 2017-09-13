exports.at = at;

const HOURS_IN_A_DAY = 24;
const MINUTES_IN_AN_HOUR = 60;
const MINUTES_IN_A_DAY = HOURS_IN_A_DAY * MINUTES_IN_AN_HOUR;
const MILLIS_IN_A_MINUTE = 60 * 1000;
const MILLIS_IN_AN_HOUR = MINUTES_IN_AN_HOUR * MILLIS_IN_A_MINUTE;
const MILLIS_IN_A_DAY = HOURS_IN_A_DAY * MILLIS_IN_AN_HOUR;

function makePositive(time, maxValue) {
  time %= maxValue;
  time += maxValue;
  return time;
}

function at(hours, minutes) {
  minutes = minutes || 0;
  hours = makePositive(hours, HOURS_IN_A_DAY);
  minutes = makePositive(minutes, MINUTES_IN_A_DAY);

  const clock = {};
  let value = (hours * MILLIS_IN_AN_HOUR) + (minutes * MILLIS_IN_A_MINUTE);
  value = makePositive(value, MILLIS_IN_A_DAY);

  clock.valueOf = function () {
    return value;
  };

  clock.toString = function () {
    const time = new Date(value).toISOString().split('T')[1].split(':');
    return `${time[0]}:${time[1]}`;
  };

  clock.plus = function (minutes) {
    value += minutes * MILLIS_IN_A_MINUTE;
    return clock;
  };

  clock.minus = function (minutes) {
    value -= minutes * MILLIS_IN_A_MINUTE;
    return clock;
  };

  clock.equals = function (other) {
    return +clock === +other;
  };

  return Object.create(clock);
}
