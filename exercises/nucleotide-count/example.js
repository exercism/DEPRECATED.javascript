

module.exports = dna;

function dna(strand) {
  const acids = (strand || '');
  const index = histogram(acids);

  for (const acid in acids) {
    if (!index.hasOwnProperty(acids[acid])) throw new RangeError(`Invalid DNA ${strand}`);
  }

  return Object.create({
    histogram: histogram.bind(null, acids),
    count: count.bind(null, acids),
  });
}

function count(acids, acid) {
  return acids.split(acid).length - 1;
}

function histogram(acids) {
  return {
    A: count(acids, 'A'),
    C: count(acids, 'C'),
    G: count(acids, 'G'),
    T: count(acids, 'T'),
  };
}
