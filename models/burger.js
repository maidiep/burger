var orm = require('../config/orm.js');


//calling orm.all. inserting burgers as table input. running function of res as a callback to be sent to burgers_controllers.js

var burger = {
    all: function(cb){
        orm.all('burgers', function(res){
            cb(res);
        })
    },
    update: function(id,cb){
        orm.update('burgers', id, cb);
    },
    create: function(name,cb){
        orm.create('burgers', name,cb);
    }
} 
   


module.exports = burger;