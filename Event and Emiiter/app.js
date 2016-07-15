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

// Object.create and Prototypes
var person = {
    firstName: "Sathish",
    lastName: "kumar",
    greet: function() {
        return this.firstName + '  ' + this.lastName;
    }
};

var john = Object.create(person);
john.firstName = "John";
john.lastName = "dae";

var Jane = Object.create(person);
Jane.firstName = "Jane";
Jane.lastName = "dae";

console.log(john.greet());
console.log(Jane.greet());

