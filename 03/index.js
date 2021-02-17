const http = require('http');
const port = 3001;
const server = http.createServer((request, response) => {
    // response.write("This is a response for a request!");
    response.writeHead(200, {
        'Content-Type': 'text/html',
        'Trailer': 'Content-MD5'
    });
    const ipAddress = request.socket.remoteAddress;
    response.write(`Your IP address is ${ipAddress} \n`);
    response.write(`Request's url: ${request.url} \n`);
    // response.write(`Detailed request's url: ${JSON.stringify(require('url').parse(request.url, true).query.email)}`)
    response.write(`Detailed request's url: ${JSON.stringify(require('url').parse(request.url, true))}`)
    response.addTrailers({'Content-MD5': '7895bf4b8828b55ceaf47747b4bca667'});
    response.end();
}).listen(port);
console.log(`Server is running on port: ${port}.`);