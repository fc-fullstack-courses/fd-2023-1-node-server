const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async function (request, response) {
  console.log(request.url);
  console.log(request.method);

  if (request.method === 'GET') {
    if (request.url === '/' || request.url === '/index.html') {
      const htmlMainPage = await fs.readFile('./views/index.html', 'utf-8');

      response.end(htmlMainPage);
    } else if (request.url === '/contacts.html') {
      const contactsText = await fs.readFile('./views/contacts.html', 'utf-8');

      response.end(contactsText);
    }else if (request.url === '/about.html') {
      const aboutText = await fs.readFile('./views/about.html', 'utf-8');

      response.end(aboutText);
    }
  }
});

const PORT = 5000;

server.listen(PORT);
