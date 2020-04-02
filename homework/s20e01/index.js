const http = require('http');
const fs = require("fs");

function createTable(users) {
  
  const gridWidth = Number(3);
  const gridHeight = Number(users.length);

  let result = '';
  result = result + '<html><table border="1">';

  for (let i = 0; i < gridHeight; i++) {
    result = result + '<tr>';
    for (let j = 1; j <= gridWidth; j++) {
      if (j = 1) {
        result = result + `<td>${users[i].number}</td>`;
      }
      if (j = 2) {
        result = result + `<td><a href="/homeworks/${users[i].id}">${users[i].title}</a></td>`;
      }
      if (j = 3) {
        result = result + `<td>delete</td>`;
      }
    }
    result = result + '</tr>';
  }

  result = result + '</table></html>';
  return result;
}
/**
 * @param {http.IncomingMessage} request
 * @param {http.ServerResponse} response
 */
function requestHandler(request, response) {
  console.log('Requested: ', request.url);

  if (request.method === 'GET') {

    if (request.url.startsWith("/homeworks/")) {
      const url = request.url;
      const id = url.slice(11);
      const data = fs.readFile("../s20e01.json", (err, data) => {
        if (err) throw err;
        const dataJSON = JSON.parse(data.toString("utf8"));
        dataJSON.forEach( eachObj => {
          if (eachObj.id === id) {
            response.writeHead(200, {"Content-Type": "application/json; charset=utf-8;"});
            response.write(JSON.stringify(eachObj, null, 4), "utf8");
            response.end();
          }
        });
      });
    }

    if (request.url = "/homeworks") {
      const data = fs.readFile("../s20e01.json", (err, data) => {
        if (err) throw err;
        response.writeHead(200, {"Content-Type": "text/html; charset=utf-8;"});
        const users = JSON.parse(data.toString("utf8"));
        response.write(createTable(users), "utf8");
        response.end();
      });
    }
  }
}

const server = http.createServer(requestHandler);
const PORT = 5000;

server.on('listening', () => console.log(`Listening on port: ${PORT}`));

server.listen(PORT);