const mysql = require('mysql');
var connection  = mysql.createConnection({
    host: 'localhost',
    database: 'xltohtml',
    user:'root',
    password:'quantumn'
});

connection.connect(function(error){
    if(error)
    {
        throw error;
    }
    else
    {
        console.log('MySQl database is connected succesfully');
    }
});

module.exports = connection;
