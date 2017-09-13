

function SecretHandshake(handshake) {
  SecretHandshake.allCommands = ['wink', 'double blink', 'close your eyes', 'jump', 'REVERSE'];
  const handshakeCommands = SecretHandshake.allCommands;

  if (typeof handshake !== 'number') {
    throw new Error('Handshake must be a number');
  }

  this.commands = function () {
    return this.shakeWith;
  };

  this.calculateHandshake = function (handshake) {
    /* jshint bitwise:false */
    const shakeWith = [];

    for (let i = 0; i < handshakeCommands.length; i++) {
      const currentCommand = handshakeCommands[i];
      const handshakeHasCommand = (handshake & Math.pow(2, i));

      if (handshakeHasCommand) {
        if (currentCommand === 'REVERSE') {
          shakeWith.reverse();
        } else {
          shakeWith.push(handshakeCommands[i]);
        }
      }
    }

    return shakeWith;
  };

  this.shakeWith = this.calculateHandshake(handshake);
}

module.exports = SecretHandshake;
