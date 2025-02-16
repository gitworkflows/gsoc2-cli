'use strict';

const format = require('util').format;

module.exports = class Logger {
  constructor(stream) {
    this.stream = stream;
  }

  log() {
    const message = format(...arguments);
    this.stream.write(`[gsoc2-cli] ${message}\n`);
  }
};
