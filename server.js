var express = require("express");
var app = express();
var fs = require("fs");

app.get('/', function(req, res){
	
	res.send( "Hello World!" );

});

app.post("/", function(req, res){
	res.send(" It's a post ");
});

app.put("/", function(req, res){
	res.send("it's me! Mario!");
});

app.delete("/", function(req, res){
	res.send("it's a delete command!");
});

var server = app.listen(8081, function(){

	var host = server.address().address
	var port = server.address().port

	console.log("Example app listening at http://%s:%s", host, port);

});