const yup = require('yup');

const USER_CREATION_SCHEMA = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(/^[a-zA-Z0-9!@#$%^&*]{8,32}$/)
    .required(),
});

module.exports.USER_CREATION_SCHEMA = USER_CREATION_SCHEMA;