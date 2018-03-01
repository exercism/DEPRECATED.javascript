module.exports = function School() {
  var db = {};

  function add(student, gradeLvl) {
    if (db[gradeLvl]) {
      db[gradeLvl].push(student);
    } else {
      db[gradeLvl] = [student];
    }
  }

  function grade(level) {
    return db[level] ? clone(db[level]).sort() : [];
  }

  function roster() {
    return sortedGrades().reduce(function (sorted, gradeLvl) {
      sorted[gradeLvl] = clone(db[gradeLvl]).sort();
      return sorted;
    }, {});
  }

  function sortedGrades() {
    return Object.keys(db).sort();
  }

  return {
    roster: roster,
    add: add,
    grade: grade
  };
};

function clone(array) {
  return array.slice();
}
