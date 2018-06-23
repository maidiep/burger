var orm = require('../config/orm.js');


//calling orm.all. inserting burgers as table input. running function of res as a callback to be sent to burgers_controllers.js

var burger = {
    all: function(cb){
        orm.all('burgers', function(res){
            cb(res);
        })
    }
}

module.exports = burger;