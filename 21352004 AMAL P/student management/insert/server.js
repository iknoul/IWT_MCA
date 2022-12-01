const express = require('express');

const http = require('http');
var parseUrl = require('body-parser');
const app = express();

var mysql = require('mysql');
const { encode } = require('punycode');

let encodeUrl = parseUrl.urlencoded({ extended: false });

//session middleware


var con = mysql.createConnection({
    host: "localhost",
    user: "root", // my username
    password: "root12345", // my password
    database: "database"
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/form.html');
})

app.post('/register', encodeUrl, (req, res) => {
    var name = req.body.rname;
    var i_mail = req.body.imail;
    var p_name = req.body.pmail;
    var phone = req.body.phone;
    var reg_no=req.body.reg_no;

    con.connect(function(err) {
        if (err){
            console.log(err);
        };
        // checking user already registered or no
       
           
            //creating user page in userPage function
          
                // inserting new user data
                var sql = "INSERT INTO mca (Name, Reg_Number,I_Email, P_Email, Mobile) VALUES ('"+name+"','"+reg_no+"', '"+i_mail+"', '"+p_name+"', '"+phone+"')";
                con.query(sql, function (err, result) {
                    if (err){
                        console.log(err);
                    }
                    console.log("success");
                });

        

      
    });


});


app.listen(4000, ()=>{
    console.log("Server running on port 4000");
});