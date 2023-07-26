const express = require('express');

const app = express();

const users = ['User 1', 'User 2', 'User 3'];

app.get('/', function (request, response) {
  response.end(`Your method is ${request.method} and path is ${request.path}`);
}); // GET request method

app.get('/users', (req, res) => {
  res.send(users);
});

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
