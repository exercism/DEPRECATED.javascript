function CircularBuffer(capacity) {
  let readPoint = 0;
  let writePoint = 0;
  let buffer = new Array(capacity);

  return {
    read() {
      if (isBufferEmpty()) { throw new BufferEmptyException(); }
      const data = buffer[readPoint];
      buffer[readPoint] = null;
      updateReadPoint();
      return data;
    },

    write(data) {
      updateBuffer(data, () => {
        if (isBufferFull()) { throw new BufferFullException(); }
        buffer[writePoint] = data;
      });
    },

    forceWrite(data) {
      updateBuffer(data, () => {
        if (isBufferFull()) { updateReadPoint(); }
        buffer[writePoint] = data;
      });
    },

    clear() {
      readPoint = 0;
      writePoint = 0;
      buffer = new Array(capacity);
    },

    isFull() {
      return isBufferFull();
    },

    isEmpty() {
      return isBufferEmpty();
    },
  };

  function isBufferEmpty() {
    return buffer.every(isEmpty);
  }

  function isBufferFull() {
    return buffer.filter(isFull).length === capacity;
  }

  function updateBuffer(data, callback) {
    if (isEmpty(data)) { return; }
    callback();
    updateWritePoint();
  }

  function updateWritePoint() {
    writePoint = (writePoint + 1) % capacity;
  }

  function updateReadPoint() {
    readPoint = (readPoint + 1) % capacity;
  }

  function isFull(data) {
    return !isEmpty(data);
  }

  function isEmpty(data) {
    return data === null || data === undefined;
  }
}

function BufferEmptyException() {
  this.name = 'BufferEmptyException';
  this.message = 'Buffer is empty.';
}

function BufferFullException() {
  this.name = 'BufferFullException';
  this.message = 'Buffer is full.';
}

module.exports = {
  circularBuffer(capacity) {
    return new CircularBuffer(capacity);
  },

  bufferEmptyException() {
    return new BufferEmptyException();
  },

  bufferFullException() {
    return new BufferFullException();
  },
};
