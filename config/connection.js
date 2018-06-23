// holds all of mysql connection data
var mysql = require("mysql");
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: "copey258",
    database: 'burger_db'
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected to mysql data");
});

module.exports = connection;