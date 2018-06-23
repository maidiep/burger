// require packages
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

// create express connection
var app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended:false
}));

app.engine('handlebars', exphbs({
    dafaultLayout: 'main'
}));

app.set('view engine', 'handlebars');


// require routes folder, named burgers_controller.js
var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);

var port = 3000;
app.listen(port);
console.log("Listening on port " + port);