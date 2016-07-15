var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    EventEmitter.call(this);
    this.greeting = 'Hello World';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function() {
  console.log(this.greeting);
  this.emit('greet');
}

var gretr1 = new Greetr();
gretr1.on('greet', function() {
    console.log('Somebody greeted...!');
});
gretr1.greet();

