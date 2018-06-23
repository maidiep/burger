// holds all of mysql connection data
var mysql = require("mysql");
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    port:3000,
    password: process.env.password,
    database: 'burgers_db'
});

connection.connect(function(err){
    if (err) throw err;
    console.log("connected to mysql data");
});

module.exports = connection;