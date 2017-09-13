

function sumElements(element, index, array) {
  /* jshint validthis:true */
  this.push(element + (array[index + 1] || 0));
}

function fillRows(rows) {
  const result = [[1]];
  for (let x = 1; x < rows; x++) {
    const newRow = [1];
    result[x - 1].forEach(sumElements, newRow);
    result.push(newRow);
  }
  return result;
}

function Triangle(rows) {
  this.rows = fillRows(rows);
  this.lastRow = this.rows[this.rows.length - 1];
}

module.exports = Triangle;
