const express = require('express');
const router = require('./routers');

const app = express();

app.use(router);

// миддлвер, который берет и ложит JSON данные в req.body в дальнейших миддлверах / обработчиках
const bodyParser = express.json();

app.get('/users/:userId/messages/:messageId', async (req, res, next) => {
  res.send(req.params);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
