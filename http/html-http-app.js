var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });

    var html = fs.readFileSync(__dirname + "/index.html");
    res.end(html);

    console.log('Listening to Port .... 9080'); 
    
}).listen(9080, '127.0.0.1');