var http = require('http');

http.createServer(function (req, res) {

    if (req.url == "/api") {
        res.writeHead(200, { 'Content-Type': 'text/json' });
        var obj = {
            fname: "Sathish Kumar P",
            designation: "Developer"
        };

        res.end(JSON.stringify(obj));
    }

    else if (req.url == "/") {

        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Hi Try [/api] to check routing...!");

    } 
    
    else {

        res.writeHead(404);
        res.end('Boom Your page is not available...!');

    }

    console.log('Listening to Port .... 9080');

}).listen(9080, '127.0.0.1');