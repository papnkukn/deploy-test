/**************************************************************************************//**
 * A simple HTTP server.
 ******************************************************************************************/
var express = require('express');
var path = require('path');

var PORT = 3000;

var app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.bodyParser());

/**************************************************************************************//**
 * Generates a global unique identifier.
 ******************************************************************************************/
function guid() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
    return v.toString(16);
	});
}

/**************************************************************************************//**
 * Generates a new GUID.
 ******************************************************************************************/
app.get('/guid', function(req, res) {
	res.end(guid());
});

/**************************************************************************************//**
 * Gets id in JSON object.
 ******************************************************************************************/
app.post('/test/:id', function(req, res) {
	var id = req.params.id;
	res.json({ id: id });
});

app.listen(PORT);
console.log("Listening at port " + PORT);