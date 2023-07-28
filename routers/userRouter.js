const express = require('express');
const multer = require('multer');
const path = require('path');

const { validateUser } = require('../middlewares/validate.mv');
const UserController = require('../controllers/users.controller');

const userRouter = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, '..', 'public', 'images'))
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`)
  }
});

const upload = multer({ storage });

userRouter
  .route('/')
  .get(UserController.getUsers)
  .post(upload.single('avatar'), validateUser, UserController.createUser);

userRouter
  .route('/:userId')
  .get(UserController.getUser)
  .put(upload.single('avatar'), UserController.updateUser)
  .delete(UserController.deleteUser);

module.exports = userRouter;
