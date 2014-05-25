var min = 1000 * 60;
var hr = min * 60;

var at = exports.at = function (hours, minutes) {
  var out = (~~hours * hr) + (~~minutes * min);

  var self = {
    valueOf: function () {
      return out;
    },

    toString: function () {
      var time = new Date(+self).toISOString().split('T')[1].split(':');
      return time[0] + ":" + time[1];
    },

    plus: function (minutes) {
      out += ~~minutes * min;
      return self;
    },

    minus: function (minutes) {
      out -= ~~minutes * min;
      return self;
    },

    equals: function (clock) {
      return +self === +clock;
    }
  }

  return self;
};
