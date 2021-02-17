const http = require('http');
const port = 3001;
const server = http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.write(`Request's url: ${request.url} \n`);
    response.end();
}).listen(port);
console.log(`The server is running on port: ${port}.`);