'use strict';

var HelloWorld = function() {};

HelloWorld.prototype.hello = function(name) {
  name = name || 'world';
  return 'Hello, ' + name + '!';
};

module.exports = HelloWorld;
