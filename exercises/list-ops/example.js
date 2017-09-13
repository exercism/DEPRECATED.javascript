

function List(arr) {
  this.values = arr || [];
}

List.prototype = {
  append(otherList) {
    const appended = this.values;

    for (let i = 0; i < otherList.length(); i++) {
      appended.push(otherList.values[i]);
    }

    return new List(appended);
  },

  concat(otherList) {
    return this.append(otherList);
  },

  cons(item, arr) {
    const x = new List([item]);
    const xs = new List(arr);
    return x.append(xs).values;
  },

  foldl(func, start) {
    let acc = start;

    for (let i = 0; i < this.length(); i++) {
      acc = func(this.values[i], acc);
    }

    return acc;
  },

  foldr(func, start) {
    let acc = start;

    for (let i = this.length() - 1; i >= 0; i--) {
      acc = func(this.values[i], acc);
    }

    return acc;
  },

  length() {
    let count = 0;
    this.values.forEach(() => { count++; });

    return count;
  },

  reverse() {
    return new List(this.foldl(this.cons, []));
  },

  map(func, arr) {
    const applyFuncThenCons = function (x, acc) {
      return this.cons(func(x), acc);
    };

    return new List(this.foldr(applyFuncThenCons.bind(this), []));
  },

  filter(pred) {
    const consIfPred = function (x, acc) {
      return pred(x) ? this.cons(x, acc) : acc;
    };

    return new List(this.foldr(consIfPred.bind(this), []));
  },
};

module.exports = List;
