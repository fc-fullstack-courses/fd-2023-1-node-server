const express = require('express');
const { validateUser } = require('../middlewares/validate.mv');
const UserController = require('../controllers/users.controller');

const userRouter = express.Router();

userRouter
  .route('/')
  .get(UserController.getUsers)
  .post(validateUser, UserController.createUser);

userRouter
  .route('/:userId')
  .get(UserController.getUser)
  .put(UserController.updateUser)
  .delete(UserController.deleteUser);

module.exports = userRouter;
