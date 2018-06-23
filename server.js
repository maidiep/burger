// require packages
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

var app = express ();
app.use(express.static(__dirname + '/public'));

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.engine('handlebars', exphbs({
    dafaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

var port = 3000;
app.listen(port);
console.log("Listen on port " + port);