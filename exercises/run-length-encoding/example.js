exports.encode = function encode(plaintext) {
  return plaintext.replace(/([\w\s])\1*/g, match => (match.length > 1 ? match.length + match[0] : match[0]));
};

exports.decode = function decode(cypher) {
  return cypher.replace(/(\d+)(\w|\s)/g, (match, repeats, char) => new Array(+repeats + 1).join(char));
};
