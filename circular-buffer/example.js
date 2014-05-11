function CircularBuffer(capacity) {
  
  var readPoint = 0,
      writePoint = 0,
      buffer = new Array(capacity);
      
  return {
      read: function() {
        if (isEmpty()) { throw new BufferEmptyException(); }
        var data = buffer[readPoint];
        buffer[readPoint] = null;
        updateReadPoint();
        return data;
      },
  
      write: function(data) {
        updateBuffer(data, function() {
          if (isFull()) { throw new BufferFullException(); }
          buffer[writePoint] = data;
        })
      },
      
      forceWrite: function(data) {
        updateBuffer(data, function(){
          buffer[writePoint] = data;
          if (isFull()) { updateReadPoint() }
        })
      },
      
      clear: function() {
        readPoint = 0;
        writePoint = 0;
        buffer = new Array(capacity);
      }
  }
  
  function isEmpty() {
    return (buffer.filter(function(val) { 
      return (val !== null && val !== undefined); 
    }).length == 0);
  };
  
  function isFull() {
    return (buffer.filter(function(val) { 
      return (val !== null && val !== undefined); 
    }).length == capacity);
  };
  
  function updateBuffer(data, callback) {
    if (data === null || data === undefined) { return; } 
    callback();
    updateWritePoint();
  }
  
  function updateWritePoint() {
    writePoint = (writePoint + 1) % capacity  
  }
  
  function updateReadPoint() {
    readPoint = (readPoint + 1) % capacity  
  }
  
  function BufferEmptyException() {
    this.name = "BufferEmptyException";
    this.message = "Buffer is empty.";
  }
  
  function BufferFullException() {
    this.name = "BufferFullException";
    this.message = "Buffer is full.";
  }
      
}

module.exports = CircularBuffer;
