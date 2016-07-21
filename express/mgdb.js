var express = require('express');
var app = express();
var mongoose = require('mongoose');
var port = process.env.port || 3000;

mongoose.connect('mongodb://sathish:sathish@ds049868.mlab.com:49868/auth');

var schema = mongoose.Schema;

var personSchema = ({
	fname: 'string',
	lname: 'string',
	address: 'string'
});

var Person = mongoose.model('person', personSchema);
var sat = Person({
	fname: 'Ganesh',
	lname: 'kumar',
	address: 'Cocunut Groove'
});

sat.save(function (err) {
	if (err) throw err;
	console.log('Person saved...!');
});

Person.find({}, function (err, users) {
	if (err) throw err;
	console.log(users);
});


app.listen(port);

