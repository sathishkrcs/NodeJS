var Emitter = require('./Emitter');
var emtr = new Emitter();

emtr.on('greet', function() {
    console.log("Hi da...!");
});

emtr.on('greet', function() {
    console.log("Hi da2...!");
});

emtr.on('greet', function() {
    console.log("Hi da3...!");
});

console.log('Hello..!');

emtr.emit('greet');