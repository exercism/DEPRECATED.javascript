var HelloWorld = require('./hello_world');

describe('Hello World', function() {
  var helloWorld = new HelloWorld();

  it('says hello world with no name', function() {
    expect(helloWorld.hello('')).toEqual('Hello, World!');
  });

  xit('says hello to bob', function() {
    expect(helloWorld.hello('Bob')).toEqual('Hello, Bob!');
  });

  xit('says hello to sally', function() {
    expect(helloWorld.hello('Sally')).toEqual('Hello, Sally!');
  });
});
