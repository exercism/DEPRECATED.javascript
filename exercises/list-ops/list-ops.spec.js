const List = require('./list-ops');

describe('List', () => {
  // predicates to filter by & functions to map
  const isOdd = function (x) {
    return x % 2 === 1;
  };

  const plusOne = function (x) {
    return x + 1;
  };

  const divide = function (x, acc) {
    return x / acc;
  };

  describe('append', () => {
    it('appends two empty lists', () => {
      const emptyList = new List();
      expect(emptyList.append(emptyList).values).toEqual([]);
    });

    xit('appends an empty list to a non-empty list', () => {
      const emptyList = new List();
      const nonEmptyList = new List([1, 2, 3, 4]);
      expect(emptyList.append(nonEmptyList).values).toEqual([1, 2, 3, 4]);
    });

    xit('appends two non-empty lists', () => {
      const list1 = new List([1, 2]);
      const list2 = new List([2, 3, 4, 5]);
      expect(list1.append(list2).values).toEqual([1, 2, 2, 3, 4, 5]);
    });
  });

  describe('concat', () => {
    xit('concatenates an empty list', () => {
      const emptyList = new List();
      expect(emptyList.concat(emptyList).values).toEqual([]);
    });

    xit('concatenates a list of lists', () => {
      const list1 = new List([1, 2]);
      const list2 = new List([3]);
      const list3 = new List([]);
      const list4 = new List([4, 5, 6]);
      expect(list1
        .concat(list2)
        .concat(list3)
        .concat(list4).values).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });

  describe('filter', () => {
    xit('filters an empty list by a function', () => {
      const list = new List();
      expect(list.filter(isOdd).values).toEqual([]);
    });

    xit('filters a non-empty list by a function', () => {
      const list = new List([1, 2, 3, 5]);
      expect(list.filter(isOdd).values).toEqual([1, 3, 5]);
    });
  });

  describe('length', () => {
    xit('finds the length of a empty list', () => {
      const list = new List();
      expect(list.length()).toEqual(0);
    });

    xit('finds the length of a non-empty list', () => {
      const list = new List([1, 2, 3, 4]);
      expect(list.length()).toEqual(4);
    });
  });

  describe('map', () => {
    xit('maps a function over an empty list', () => {
      const list = new List([]);
      expect(list.map(plusOne).values).toEqual([]);
    });

    xit('maps a function over a non-empty list', () => {
      const list = new List([1, 3, 5, 7]);
      expect(list.map(plusOne).values).toEqual([2, 4, 6, 8]);
    });
  });

  describe('foldl', () => {
    xit('folds an empty list from the left with the given function', () => {
      const list = new List([]);
      expect(list.foldl(divide, 2)).toEqual(2);
    });

    xit('folds a non-empty list from the left with the given function', () => {
      const list = new List([1, 2, 3, 4]);
      expect(list.foldl(divide, 24)).toEqual(64);
    });
  });

  describe('foldr', () => {
    xit('folds an empty list from the right with the given function', () => {
      const list = new List([]);
      expect(list.foldr(divide, 2)).toEqual(2);
    });

    xit('folds a non-empty list from the right with the given function', () => {
      const list = new List([1, 2, 3, 4]);
      expect(list.foldr(divide, 24)).toEqual(9);
    });
  });

  describe('reverse', () => {
    xit('reverses an empty list', () => {
      const list = new List([]);
      expect(list.reverse().values).toEqual([]);
    });

    xit('reverses a non-empty list', () => {
      const list = new List([1, 3, 5, 7]);
      expect(list.reverse().values).toEqual([7, 5, 3, 1]);
    });
  });

  describe('must not call native Array function', () => {
    const list = new List([1, 2, 3, 4]);
    const list2 = new List([5, 1]);

    beforeAll(() => {
      spyOn(list.values, 'map').and.callThrough();
      spyOn(list.values, 'filter').and.callThrough();
      spyOn(list.values, 'reduce').and.callThrough();
      spyOn(list.values, 'reduceRight').and.callThrough();
      spyOn(list.values, 'reverse').and.callThrough();
      spyOn(list.values, 'concat').and.callThrough();

      list.length();
      list.append(list2);
      list.concat(list2);
      list.reverse();
      list.filter(isOdd);
      list.map(plusOne);
      list.foldl(divide, 24);
      list.foldr(divide, 24);
    });

    xit('Array.prototype.map()', () => {
      expect(list.values.map).not.toHaveBeenCalled();
    });
    xit('Array.prototype.filter()', () => {
      expect(list.values.filter).not.toHaveBeenCalled();
    });
    xit('Array.prototype.reduce()', () => {
      expect(list.values.reduce).not.toHaveBeenCalled();
    });
    xit('Array.prototype.reduceRight()', () => {
      expect(list.values.reduceRight).not.toHaveBeenCalled();
    });
    xit('Array.prototype.concat()', () => {
      expect(list.values.concat).not.toHaveBeenCalled();
    });
    xit('Array.prototype.reverse()', () => {
      expect(list.values.reverse).not.toHaveBeenCalled();
    });
  });
});
