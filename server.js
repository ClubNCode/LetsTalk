var mongo =require('mongodb').MongoClient,
    client = require('socket.io').listen(8080).sockets;

mongo.connect('mongodb://127.0.0.1/LetsTalk', function(err, db) {
	if (err) throw err;

    client.on('connection', function(socket) {

    });
	
});