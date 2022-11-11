const {
  table
} = require('console');
var mysql = require('mysql');
const {
  parse
} = require('node:path/win32');
var num;
var Name, Personal_Email, Institutional_Email, Mobile, Register_Number;

function retrive() {
  num = parseInt(document.getElementById("reg").value);
  //getData(num);
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Rohit@123",
    database: "RegForm",
    insecureAuth: true
  });
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");  
  
    // con.query("SELECT * FROM mca WHERE Register_Number = ?", [num], function (err, result, fields) {
    //   if (err) throw err;
  
    //   Object.keys(result).forEach(function (key) {
    //     var row = result[key];
    //     Name = row.Name;
    //     Register_Number = row.Register_Number;
    //     Institutional_Email = row.Institutional_Email;
    //     Personal_Email = row.Personal_Email;
    //     Mobile = row.Mobile;
    //     //setData();
    //     document.getElementById("name").value = Name;
    //     console.log(Name);
    //     console.log(Register_Number);
    //     console.log(Institutional_Email);
    //     console.log(Personal_Email);
    //     console.log(Mobile);
    //   });
    // });
  });
};





function setData() {
  document.getElementById("name").value = Name;
  document.getElementById("iEmail").value = Institutional_Email;
  document.getElementById("pEmail").value = Personal_Email;
  document.getElementById("mob").value = Mobile;
};


//retrive();