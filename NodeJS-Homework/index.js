var express = require('express');
var bodyParser = require('body-parser');
var socketio = require('socket.io');
var app = express();
var server = app.listen(8888);
var io = socketio.listen(server);

var staticDir = __dirname + '/public/';
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var messages = [];

app.get('/', function(req, res) {
	res.sendFile(staticDir + 'ajax.html');
});

app.get('/jquery', function(req, res) {
	res.sendFile(staticDir + 'jq.html');
});

app.get('/socket', function(req, res) {
	res.sendFile(staticDir + 'socket.html');
});

app.get('/messages', function(req, res) {
	res.json(messages);
});

app.post('/messages', function(req, res) {
	var message = req.body;
	messages.push(message);
	res.json(message);
});

io.on('connection', function(socket) {
	
	console.log('Client connected');
	
	socket.on('disconnected', function() {
		console.log('Client disconnected');
	});

	socket.on('chat message', function(msg) {
		messages.push(msg);
		io.emit('chat message', msg);
	});

	socket.emit('chat history', messages);
});