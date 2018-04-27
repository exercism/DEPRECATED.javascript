var helloWorld = require('./hello-world');

describe('Hello World', function () {
  it('says hello world', function () {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
