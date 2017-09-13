

module.exports = function (input) {
  this.input = input;

  this.normalizePlaintext = function () {
    return input.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
  };

  this.size = function () {
    const realLength = Math.sqrt(this.normalizePlaintext().length);
    return Math.ceil(realLength);
  };

  this.plaintextSegments = function () {
    const plainText = this.normalizePlaintext();
    const chunkSize = this.size();

    const splitRegex = new RegExp(`.{1,${chunkSize}}`, 'g');
    return plainText.match(splitRegex);
  };

  this.ciphertext = function () {
    const textSegments = this.plaintextSegments();
    let i,
      j;
    const columns = [];
    let currentSegment;
    let currentLetter;

    for (i = 0; i < this.size(); i++) {
      columns.push([]);
    }

    for (i = 0; i < textSegments.length; i++) {
      currentSegment = textSegments[i];

      for (j = 0; j < currentSegment.length; j++) {
        currentLetter = currentSegment[j];
        columns[j].push(currentLetter);
      }
    }

    for (i = 0; i < columns.length; i++) {
      columns[i] = columns[i].join('');
    }

    return columns.join('');
  };

  this.normalizeCiphertext = function () {
    const chunkSize = this.size();
    const splitRegex = new RegExp(`.{1,${chunkSize}}`, 'g');
    return this.ciphertext().match(splitRegex).join(' ');
  };
};
