

module.exports = {
  strain(array, filter, keepMatches) {
    const results = [];
    for (let i = 0; i < array.length; i++) {
      const item = array[i];
      if (filter(item) === keepMatches) {
        results.push(item);
      }
    }
    return results;
  },

  keep(array, filter) {
    return this.strain(array, filter, true);
  },

  discard(array, filter) {
    return this.strain(array, filter, false);
  },
};
