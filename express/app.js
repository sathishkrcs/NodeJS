var moment = require('moment');
console.log(moment().format("ddd, hA"));

var express = require('express');
var app = express();

var port = process.env.port || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.get("/", function (req, res, next) {
	console.log('Request URI :' + req.url);
	next();
});

app.get("/", function (req, res) {
	res.send("<html><head><link href=assets/style.css rel=stylesheet /></head><body>Hello World</body></html>");
});

app.get("/greet", function (req, res) {
	res.send("<html><head></head><body>Hello Good day ..!</body></html>");
});

app.get("/list/:id", function (req, res) {
	res.send("<html><head></head><body>Hello World " + req.params.id + "</body></html>");
});

app.get("/api", function (req, res) {
	res.json({ fname: "Sathish", lname: "Kumar P" });
});


/*Mysql database connection Starts*/
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'webauth'
});
 
connection.connect();
 
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
 
  console.log('The solution is: ', rows[0].solution);
});

connection.query('SELECT * from user_pwd', function(err, rows, fields) {
  if (err) throw err;
 
  console.log(rows);
});
 
connection.end();
/*Mysql database connection Ends*/

app.listen(port);

