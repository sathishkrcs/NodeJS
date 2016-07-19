var http = require('http');

http.createServer(function (req, res) {

    res.writeHead(200, { 'Content-Type': 'text/json' });
    var obj = {
        fname: "Sathish Kumar P",
        designation: "Developer"
    };
    
    res.end(JSON.stringify(obj));
    
    console.log('Listening to Port .... 9080');
    
}).listen(9080, '127.0.0.1');