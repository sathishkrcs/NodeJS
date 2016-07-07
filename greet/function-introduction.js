var a = 1;
var b = 2;
var c = a + b;
console.log(a + b);

//Function statements
function greet() {
    console.log('Hi Statement');
}
greet();

//Funtions are first class
function logGreeting(fn) {
    fn();
}
logGreeting(greet);

//Function expression
var greetMe = function () {
    console.log('Hi Expression');
}

greetMe();
logGreeting(greetMe);

//Use function expression on the fly

logGreeting(function () {
    console.log('Hello Sathish!');
});

//Prototypal inheritance

//IIEF

(function () {
    var name = "Sathish";
    console.log(name);
} ());

//console.log(name); throw error