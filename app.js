/*
I want to be able to...
	-> have a basic access to the db where it's possible to view what's in it, and add / edit entries
		- this should happen on erm... like 'regular pages', right? (By that, I mean 'static'.)
		- /admin/*
	-> have a rest api that allows a similar kinda querying of data, which is to be accessed from the actual 'frontend'
		- /api/*
	-> serve the actual site... which should be a dynamic javascript api thing... I think?
		- /*	
*/

var express = require('express');
var app = express();


// These are my (very basic) routes

app.get('/', function(request, response){
	response.send('Hello world');
});

app.get('/admin', function(request, response){
	response.send('Hello admin');
});

app.get('/api', function(request, response){
	reponse.send('Hello api query');
});

app.post('/api', function(request, response){
	response.send('Hello api post request');
});

app.listen(3000);