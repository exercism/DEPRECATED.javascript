

function Raindrops() {}

Raindrops.prototype.convert = function (n) {
  let result = '';
  if (n % 3 === 0) { result += 'Pling'; }
  if (n % 5 === 0) { result += 'Plang'; }
  if (n % 7 === 0) { result += 'Plong'; }
  if (result === '') {
    return n.toString();
  }
  return result;
};

module.exports = Raindrops;
