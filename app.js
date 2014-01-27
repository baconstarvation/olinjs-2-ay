var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('hello world');
});

app.get('/olin', function(req, res) {
	res.send('hello olin');
})

app.listen(3000);


// App Configure

app.configure(function(){
	app.set('port', process.env.PORT || 3000); // sets up the port
	app.set('views', __dirname + '/views'); // sets the path for views
	app.set('view engine', 'jade'); // sets the engine that the views are rendered with
	app.use(express.favicon()); // default favicon
	app.use(express.logger('dev')); // error logging
	app.use(express.bodyParser()); // 
	app.use(express.methodOverride());
	app.use(app.router); // 
	app.use(express.static(path.join(__dirname, 'public'))); // sets the path for public files (css & js)
});




