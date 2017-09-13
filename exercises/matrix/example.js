

function columnsFromRows(rows) {
  const columns = [];
  rows.forEach((row) => {
    row.forEach((n, index) => {
      columns[index] = columns[index] || [];
      columns[index].push(n);
    });
  });
  return columns;
}

function parseRows(description) {
  return description.split('\n').map(row => row.split(' ').map(char => parseInt(char, 10)));
}

function Matrix(description) {
  this.rows = parseRows(description);
  this.columns = columnsFromRows(this.rows);
}

module.exports = Matrix;
