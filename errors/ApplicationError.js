
class ApplicationError extends Error {
  constructor(code, message) {
    super();

    this.status = code || 500;
    this.message = message || 'Application Error';
    this.name = this.constructor.name; // ApplicationError
  }
}

module.exports = ApplicationError;