var http = require('http');

http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World....!\n');

    console.log('Listening to Port .... 9080'); 
    
}).listen(9080, '127.0.0.1');