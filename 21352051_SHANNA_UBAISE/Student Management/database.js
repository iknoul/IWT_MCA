var mysql = require('mysql');

module.exports = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "shanna88",
    database: "mca",
    insecureAuth : true
  });