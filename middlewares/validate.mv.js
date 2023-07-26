const { USER_CREATION_SCHEMA } = require('../validation/usersValidation');

const validateUser = async (req, res, next) => {
  try {
    const user = await USER_CREATION_SCHEMA.validate(req.body);
    req.user = user;
    next();
  } catch (error) {
    res.send('Error, invalid user data');
  }
};

module.exports.validateUser = validateUser;
