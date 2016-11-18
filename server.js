var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var bodyParser = require('body-parser');

// port number
app.set('port', process.env.PORT || 9000);
app.use(bodyParser.urlencoded({ extended: false }));

// static path
app.use('/public', express.static(__dirname + '/public'));

//view template
app.set('views', './views');
app.set('view engine', 'jade');

// 0.0 home page
app.get('/', function(req, res){
  res.render('home');
});

http.listen(app.get('port'), function()
{
	console.log('listening on Unibee server', app.get('port'));
});
