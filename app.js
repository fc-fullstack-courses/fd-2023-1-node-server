const express = require('express');
const yup = require('yup');
const app = express();

const users = [];

app.get('/', function (request, response) {
  response.end(`Your method is ${request.method} and path is ${request.path}`);
}); // GET request method

app.get('/users', (req, res) => {
  res.send(users);
});

// миддлвер, который берет и ложит JSON данные в req.body в дальнейших миддлверах / обработчиках
const bodyParser = express.json();

const USER_CREATION_SCHEMA = yup.object({
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(/^[a-zA-Z0-9!@#$%^&*]{8,32}$/)
    .required(),
});

app.post(
  '/users',
  bodyParser,
  async (req, res, next) => {
    try {
      const user = await USER_CREATION_SCHEMA.validate(req.body);
      req.user = user;
      next();
    } catch (error) {
      res.send('Error, invalid user data');
    }
  },
  async (req, res) => {
    /*
    1. распарсить JSON данные
    2. проверить их на корректность
    3. сохранить нового юзера (при этом подкинуть ему id)
    3.5 ОПЦИОНАЛЬНО создать сессию
    4. Отправить данные на клиент
  */
    const { user } = req;

    user.id = Date.now();
    users.push(user);

    res.send(user);
  }
);

app.get(
  '/test',
  (req, res, next) => {
    console.log('first handler');
    req.secret = 'secret data';
    next(); // обработчик выполнил все задачи, можно запускать следующий в цепочке
  },
  (req, res, next) => {
    if (Math.random() > 0.5) {
      console.log('second handler');
      next();
    } else {
      res.send('middleware ended cycle prematurely');
    }
  },
  (req, res, next) => {
    console.log('third handler');
    console.log(req.secret);
    next();
  },
  (req, res, next) => {
    console.log('last handler');

    res.send('all handlers worked');
  }
);

// app.post(); // POST request method
// app.put(); // PUT request method
// app.patch(); // PATCH request method
// app.delete(); // DELETE request method

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
