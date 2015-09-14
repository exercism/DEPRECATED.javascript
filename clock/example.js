exports.at = at;

function at(hours, minutes) {
  var min = 1000 * 60;
  var hr = min * 60;

  var clock = {};
  var value = (~~hours * hr) + (~~minutes * min);

  clock.valueOf = function () {
    return value;
  };

  clock.toString = function () {
    var time = new Date(value).toISOString().split('T')[1].split(':');
    return time[0] + ':' + time[1];
  };

  clock.plus = function (minutes) {
    value += ~~minutes * min;
    return clock;
  };

  clock.minus = function (minutes) {
    value -= ~~minutes * min;
    return clock;
  };

  clock.equals = function (other) {
    return +clock === +other;
  };

  return Object.create(clock);
};
