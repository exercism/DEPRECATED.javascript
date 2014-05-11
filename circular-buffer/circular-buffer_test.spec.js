var CircularBuffer = require('./circular-buffer');

describe('CircularBuffer', function () {
  
  it('reading an empty buffer throws a BufferEmptyException', function () {
    var buffer = new CircularBuffer(1);
    expect(function () {
      buffer.read();
    }).toThrow({ message: "Buffer is empty."});
  });
  
  xit('write and read back one item', function () {
    var buffer = new CircularBuffer(1);
    buffer.write('1');
    expect(buffer.read()).toBe('1');
    expect(function () {
      buffer.read();
    }).toThrow({ message: "Buffer is empty."});
  });
  
  xit('write and read back multiple items', function () {
    var buffer = new CircularBuffer(2);
    buffer.write('1');
    buffer.write('2');
    expect(buffer.read()).toBe('1');
    expect(buffer.read()).toBe('2');
    expect(function () {
      buffer.read();
    }).toThrow({ message: "Buffer is empty."});
  });
  
  xit('clearing a buffer', function () {
    var buffer = new CircularBuffer(2);
    buffer.write('1');
    buffer.write('2');
    buffer.clear();
    expect(function () {
      buffer.read();
    }).toThrow({ message: "Buffer is empty."});
    buffer.write('3');
    buffer.write('4');
    expect(buffer.read()).toBe('3');
    expect(buffer.read()).toBe('4');
  });
  
  xit('alternate write and read', function () {
    var buffer = new CircularBuffer(2);
    buffer.write('1');
    expect(buffer.read()).toBe('1');
    buffer.write('2');
    expect(buffer.read()).toBe('2');
  });
  
  xit('reads back oldest item', function () {
    var buffer = new CircularBuffer(3);
    buffer.write('1');
    buffer.write('2');
    buffer.read();
    buffer.write('3');
    expect(buffer.read()).toBe('2');
    expect(buffer.read()).toBe('3');
  });
  
  xit('writes of undefined or null don\'t occupy buffer', function () {
    var buffer = new CircularBuffer(3);
    buffer.write(null);
    buffer.write(undefined);
    buffer.write('1');
    buffer.write('2');
    buffer.write('3');
    expect(buffer.read()).toBe('1');
  });
  
  xit('writing to a full buffer throws a BufferFullException', function () {
    var buffer = new CircularBuffer(2);
    buffer.write('1');
    buffer.write('2');
    expect(function () {
      buffer.write('A');
    }).toThrow({ message: "Buffer is full."});
  });
  
  xit('forced writes over write oldest item in a full buffer', function () {
    var buffer = new CircularBuffer(2);
    buffer.write('1');
    buffer.write('2');
    buffer.forceWrite('A');
    expect(buffer.read()).toBe('2');
    expect(buffer.read()).toBe('A');
    expect(function () {
      buffer.read();
    }).toThrow({ message: "Buffer is empty."});
  });
  
  xit('alternate force write and read into full buffer', function () {
    var buffer = new CircularBuffer(5);
    buffer.write('1');
    buffer.write('2');
    buffer.write('3');
    buffer.read();
    buffer.read();
    buffer.write('4');
    buffer.read();
    buffer.write('5');
    buffer.write('6');
    buffer.write('7');
    buffer.write('8');
    buffer.forceWrite('A');
    buffer.forceWrite('B');
    expect(buffer.read()).toBe('6');
    expect(buffer.read()).toBe('7');
    expect(buffer.read()).toBe('8');
    expect(buffer.read()).toBe('A');
    expect(buffer.read()).toBe('B');
    expect(function () {
      buffer.read();
    }).toThrow({ message: "Buffer is empty."});
  });
  
});