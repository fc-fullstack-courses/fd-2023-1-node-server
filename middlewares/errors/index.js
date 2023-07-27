module.exports.basicErrorHandler = async (err, req, res, next) => {
  if (err instanceof ValidationError) {
    res.status(400).send(err.errors);
  } else if (err instanceof ApplicationError) {
    res.status(err.status).send(err.message);
  } else {
    const code = err.status || 500;
    res.status(code).send(err.message);
  }
};
