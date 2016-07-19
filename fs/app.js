var fs = require('fs');

console.log(__dirname);
console.log(__dirname + '\\README.md');

var fsync = fs.readFileSync(__dirname + '\\README.md', 'utf8');

var fasync = fs.readFile(__dirname + '\\README.md', 'utf8',
    function (err, data) {
        if (!err) {
            console.log("file read asyncronous");
            console.log(data);
        }
    }
);

console.log("file read syncronous");
console.log(fsync);

//Create Read File Stream
var readable = fs.createReadStream(__dirname + '/greet.txt',
    { encoding: 'utf8', highWaterMark: 16 * 1024 });

//Read And Wrie the Chunk
var writable = fs.createWriteStream(__dirname + '/greetCopy.txt');

readable.on('data', function (chunk) {
    console.log(chunk.length); //Reads chunk by chunk based given size(highWaterMark)
    writable.write(chunk);
    console.log(chunk);
});