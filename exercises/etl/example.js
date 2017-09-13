

function ETL() {}

ETL.prototype.transform = function (input) {
  const output = {};
  const object = Object.keys(input);

  function processKey(key) {
    const items = input[key] || [];

    items.forEach((item) => {
      const value = item.toLowerCase();
      output[value] = Number(key);
    });
  }

  object.forEach(processKey);

  return output;
};

module.exports = ETL;

