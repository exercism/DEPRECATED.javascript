const HelloWorld = require('./hello-world');

describe('Hello World', () => {
  const helloWorld = new HelloWorld();

  it('says hello world', () => {
    expect(helloWorld.hello()).toEqual('Hello, World!');
  });
});
