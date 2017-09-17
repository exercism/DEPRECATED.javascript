function MeetupDayException(message) {
  this.message = message;
  this.name = 'MeetupDayException';
}

function meetupDay(year, month, day_of_week, which) {
  'use strict';

  var candidates = _getCandidates(year, month, day_of_week),
    d,
    i,
    res;
  which = which.toLowerCase();

  if (which === 'teenth') {
    res = _find(candidates, function (d) {
      return d.getDate() >= 13 && d.getDate() <= 19;
    });
  } else if (which === 'last') {
    res = candidates.pop();
  } else {
    which = parseInt(which) - 1;
    res = candidates.slice(which, which + 1).pop();
  }

  if (!res) { throw new MeetupDayException('Day not found! ;_;'); }

  return res;
}

function _getCandidates(year, month, day_of_week) {
  var d,
    i,
    numDaysInMonth = new Date(year, month + 1, 0).getDate(),
    res = [];

  for (i = 0; i < numDaysInMonth; i++) {
    d = new Date(year, month, i + 1);

    if (d.getDay() === _getDayIndex(day_of_week)) {
      res.push(d);
    }
  }

  return res;
}

function _getDayIndex(day) {
  var daysInd = {
    'sunday': 0,
    'monday': 1,
    'tuesday': 2,
    'wednesday': 3,
    'thursday': 4,
    'friday': 5,
    'saturday': 6
  };

  day = day.toLowerCase();

  return daysInd[day];
}

function _find(ary, callback) {
  for (var i = 0; i < ary.length; i++) {
    if (callback(ary[i], i, ary)) { return ary[i]; }
  }
}

module.exports = meetupDay;
