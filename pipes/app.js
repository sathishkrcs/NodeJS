var fs = require('fs');
var zlib = require('zlib');

//Create Read File Stream
var readable = fs.createReadStream(__dirname + '/greet.txt');

//Read And Wrie the Chunk
var writable = fs.createWriteStream(__dirname + '/greetCopy.txt');

//Create a stream to be compressed
var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

//create zip transform stream
var gzip = zlib.createGzip();

//Write using pipe function
readable.pipe(writable);

//write gzip compressed file
readable.pipe(gzip).pipe(compressed);

