var Emitter = require('events');
var config = require('./config').events;

var emtr = new Emitter();

emtr.on(config.greet, function() {
    console.log("Hi da...!");
});

emtr.on(config.greet, function() {
    console.log("Hi da2...!");
});

emtr.on(config.greet, function() {
    console.log("Hi da3...!");
});

console.log('Hello..!');

emtr.emit('greet');