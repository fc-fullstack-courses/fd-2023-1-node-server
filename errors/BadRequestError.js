const ApplicationError = require('./ApplicationError');

class BadRequestError extends ApplicationError {
  constructor(message) {
    super(400, message || 'BadRequestError');
  }
}

module.exports = BadRequestError;