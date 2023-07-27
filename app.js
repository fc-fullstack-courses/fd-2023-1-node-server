const express = require('express');
const router = require('./routers');

const app = express();

// миддлвер, который берет и ложит JSON данные в req.body в дальнейших миддлверах / обработчиках
app.use(express.json());
app.use(router); // подключает миддлверы на все маршруты
// app.use('/api', router); // подключает миддлверы на все маршруты которые начинаются с /api

app.get('/users/:userId/messages/:messageId', async (req, res, next) => {
  res.send(req.params);
});

app.use(async (err, req, res, next) => {
  res.send(err.message);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
