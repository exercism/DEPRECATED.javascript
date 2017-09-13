

const HelloWorld = function () {};

HelloWorld.prototype.hello = function (name) {
  name = name || 'World';
  return `Hello, ${name}!`;
};

module.exports = HelloWorld;
