const express = require('express');
const router = require('./routers');
const { ValidationError } = require('yup');
const ApplicationError = require('./errors/ApplicationError');

const app = express();

// миддлвер, который берет и ложит JSON данные в req.body в дальнейших миддлверах / обработчиках
app.use(express.json());
app.use(router); // подключает миддлверы на все маршруты
// app.use('/api', router); // подключает миддлверы на все маршруты которые начинаются с /api

app.get('/users/:userId/messages/:messageId', async (req, res, next) => {
  res.send(req.params);
});

app.use(async (err, req, res, next) => {
  if (err instanceof ValidationError) {
    res.status(400).send(err.errors);
  } else if (err instanceof ApplicationError) {
    res.status(err.status).send(err.message);
  } else {
    const code = err.status || 500;
    res.status(code).send(err.message);
  }
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
