const { ValidationError } = require('yup');
const ApplicationError = require('../../errors/ApplicationError');

module.exports.yupValidationErrorHandler = async (err, req, res, next) => {
  if (err instanceof ValidationError) {
    return res.status(400).send(err.errors);
  }

  next(err);
};

module.exports.applicationErrorHandler = async (err, req, res, next) => {
  if (err instanceof ApplicationError) {
    return res.status(err.status).send(err.message);
  }

  next(err);
};

module.exports.basicErrorHandler = async (err, req, res, next) => {
  const code = err.status || 500;
  res.status(code).send(err.message);
};
