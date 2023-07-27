const express = require('express');
const { validateUser } = require('./middlewares/validate.mv');
const UserController = require('./controllers/users.controller');
const app = express();

const router = express.Router();

app.use(router);

// миддлвер, который берет и ложит JSON данные в req.body в дальнейших миддлверах / обработчиках
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

app.get('/users/:userId/messages/:messageId', async (req, res, next) => {
  res.send(req.params);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
