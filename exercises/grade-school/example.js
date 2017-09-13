module.exports = function School() {
  const db = {};

  function add(student, grade) {
    if (db[grade]) {
      db[grade].push(student);
    } else {
      db[grade] = [student];
    }
  }

  function grade(level) {
    return db[level] ? clone(db[level]).sort() : [];
  }

  function roster() {
    return sortedGrades().reduce((sorted, grade) => {
      sorted[grade] = clone(db[grade]).sort();
      return sorted;
    }, {});
  }

  function sortedGrades() {
    return Object.keys(db).sort();
  }

  return {
    roster,
    add,
    grade,
  };
};

function clone(array) {
  return array.slice();
}
