'use strict';

function MeetupDayException(message) {
  this.message = message;
  this.name = 'MeetupDayException';
}

function meetupDay(year, month, dayOfWeek, which) {
  var candidates = _getCandidates(year, month, dayOfWeek);
  var res;
  var day;

  day = which.toLowerCase();
  if (day === 'teenth') {
    res = _find(candidates, function (d) {return d.getDate() >= 13 && d.getDate() <= 19; });
  } else if (day === 'last') {
    res = candidates.pop();
  } else {
    day = parseInt(day, 10) - 1;
    res = candidates.slice(day, day + 1).pop();
  }

  if (!res) { throw new MeetupDayException('Day not found!'); }

  return res;
}

function _getCandidates(year, month, dayOfWeek) {
  var d;
  var i;
  var numDaysInMonth = new Date(year, month + 1, 0).getDate();
  var res = [];

  for (i = 0; i < numDaysInMonth; i++) {
    d = new Date(year, month, i + 1);

    if (d.getDay() === _getDayIndex(dayOfWeek)) {
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

  var temp = day.toLowerCase();

  return daysInd[temp];
}

function _find(ary, callback) {
  for (var i = 0; i < ary.length; i++) {
    if (callback(ary[i], i, ary)) { return ary[i]; }
  }
  return null;
}

module.exports = meetupDay;

