const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async function (request, response) {
  console.log(request);
  // console.log(response);

  const htmlText = await fs.readFile('./views/index.html', 'utf-8');

  response.end(htmlText);
});

const PORT = 5000;

server.listen(PORT);
