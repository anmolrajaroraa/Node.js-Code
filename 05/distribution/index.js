'use strict';

var http = require('http');
var port = 3001;
var server = http.createServer(function (request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    response.write('Request\'s url: ' + request.url + ' \n');
    response.end();
}).listen(port);
console.log('The server is running on port: ' + port + '.');