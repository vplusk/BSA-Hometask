var path = require('path'),
	express = require('express'),
	app = express(),
	staticPath = path.normalize(__dirname),
	server = app.listen(7777);

app.use(express.static(staticPath));

var footballers = [{
	"id": "0",
	"firstName": "Cristiano",
	"lastName": "Ronaldo",
	"email": "cristano@realmadrid.com"
}, {
	"id": "1",
	"firstName": "Lionel",
	"lastName": "Messi",
	"email": "messi@barcelona.sp"
}, {
	"id": "2",
	"firstName": "David",
	"lastName": "Backham",
	"email": "backham@united.co.uk"
}, {
	"id": "3",
	"firstName": "Andriy",
	"lastName": "Shevchenko",
	"email": "sheva@dynamo.ua"
}]

app.get('/footballers', function (req, res) {
	res.send(footballers);
});

app.delete('/footballers/:id', function(req, res) {
	footballers.splice(req.params.id, 1);	
});

module.exports = app;