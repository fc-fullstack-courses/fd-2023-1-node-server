const http = require('http');
const fs = require('fs').promises;

const users = [];

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
    } else if (request.url === '/about.html') {
      const aboutText = await fs.readFile('./views/about.html', 'utf-8');

      response.end(aboutText);
    }
  } else if (request.method === 'POST') {
    if (request.url === '/users') {
      // логика создания пользователя
      let jsonString = '';

      // записываем прибывающие данные
      request.on('data', (chunk) => {
        jsonString += chunk;
      });

      // все данные пришли
      request.on('end', () => {
        const newUser = JSON.parse(jsonString);

        newUser.id = Date.now();

        users.push(newUser);
        console.log(users);

        response.end(JSON.stringify(newUser));
      });
    }
  }
});

const PORT = 5000;

server.listen(PORT);
