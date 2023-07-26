const yup = require('yup');

const USER_CREATION_SCHEMA = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(/^[a-zA-Z0-9!@#$%^&*]{8,32}$/)
    .required(),
});

const validateUser = async (req, res, next) => {
  try {
    const user = await USER_CREATION_SCHEMA.validate(req.body);
    req.user = user;
    next();
  } catch (error) {
    res.send('Error, invalid user data');
  }
}

module.exports.validateUser = validateUser;