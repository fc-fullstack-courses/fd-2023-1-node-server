const express = require('express');
const { validateUser } = require('./middlewares/validate.mv');
const UserController = require('./controllers/users.controller');

const router = express.Router();
const bodyParser = express.json();

router
  .route('/users')
  .get(UserController.getUsers)
  .post(bodyParser, validateUser, UserController.createUser);

// app.get('/users', UserController.getUsers);

// app.post('/users', bodyParser, validateUser, UserController.createUser);

router.get('/user', UserController.getUserQuery);

router
  .route('/users/:userId')
  .get(UserController.getUser)
  .put(bodyParser, UserController.updateUser)
  .delete(UserController.deleteUser);

// app.get('/users/:userId', UserController.getUser);

// app.delete('/users/:userId', UserController.deleteUser);

// app.put('/users/:userId', bodyParser, UserController.updateUser);

module.exports = router;