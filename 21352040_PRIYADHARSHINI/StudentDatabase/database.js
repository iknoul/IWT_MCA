const mysql= require("mysql");
var connection = mysql.createConnection({
    host:'localhost',
    database: 'random',
    user:'root',
    password:'Password'
});
  connection.connect(function(error){
    if(error)
    {
        throw error
    }
    else{
        console.log('MySQL database is conneccted');
    }
  });

  module.exports = connection;