https://learnxinyminutes.com/docs/typescript/

Events and Events Emmiter
------------------------
Event:
*****
Something that has happened in our app that, we can respond to.
Node js we actually have 2 kinds of events

System events [c++ core - libuv]
eg : finished data read from file or db
 
Custom events [Javascript core - Event Emitter]

Object properties, first class functions and arrays
-------------------------------------------------------

//Object properties and methods
var obj = {
  greet: 'Hello'
};
var prop = 'greet';
console.log(obj.greet);
console.log(obj['greet']);
console.log(obj[prop]);

//functions and arrays

var arr = [];
arr.push(function() {
  console.log('function 1');
});
arr.push(function() {
  console.log('function 2');
});
arr.push(function() {
  console.log('function 3');
});

arr.forEach(function(item, index) {
  item();
});

The Node Event Emitter
----------------------
Events Listener: Code that responds to an Events

Magic String 
-----------
A String has special meaning in our code.




























