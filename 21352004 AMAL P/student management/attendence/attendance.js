const express = require('express');
const ejs = require('ejs');
const http = require('http');
var parseUrl = require('body-parser');
const app = express();

var mysql = require('mysql');
const { encode } = require('punycode');

let encodeUrl = parseUrl.urlencoded({ extended: true });
app.use(parseUrl.json());



var con = mysql.createConnection({
    host: "localhost",
    user: "root", // my username
    password: "root12345", // my password
    database: "database"
});

app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
   con.query("SELECT * FROM mca",(err, result)  => {    
      
     
      //res.send("<body><table><th></th><tr><td></td><td>"+i+9+""+data[i].name+""+data[i].reg_no+"</td></tr></table></body>");
       res.render('views',{data:result});
   })
   
    
});

app.post('/attendence', encodeUrl, (req, res) => {
 
 con.query("SELECT * FROM mca",(err, result)  => {
      var atten=[];
      var data = req.body;
     
    
     if(result.length){ 
     for( i = 0; i< result.length; i++) 
    
         {
         
         regno=result[i].Reg_Number;
         regno=""+regno;
         var datetime=new Date();
         
         let month=datetime.getMonth()+1;
  var date=datetime.getFullYear()+'-'+month+'-'+datetime.getDate();
  //console.log(date);
         
         atten[i] = data[regno];
         if(atten[i]=='1'){
         
          con.query(`INSERT INTO attendence (regno,date,remark) VALUES ('${regno}','${date}',1)` ,function (err,result)
          {
           if(err){
           console.log(err);
           }
           else {
           //console.log("sucess");
           //req.redirect('/');
           }
          });
         }
         else{
          
          con.query(`INSERT INTO attendence (regno,date,remark) VALUES ('${regno}','${date}',0)`,function (err,result)
          {
           if(err){
           console.log(err);
           }
           else{
           //console.log("sucess");
           //req.redirect('/');
           }
          });
         
         }
  
         //console.log(atten[i]);
         
         }
     }
 
 })
});

app.get('/lss', (req, res) => {
    res.sendFile(__dirname + '/register.html');
})

app.post('/register', encodeUrl, (req, res) => {
    var name = req.body.rname;
    var i_mail = req.body.imail;
    var p_name = req.body.pmail;
    var phone = req.body.phone;
    var regno = req.body.reg;
    con.connect(function(err) {
        if (err){
            console.log(err);
        };
        // checking user already registered or no
       
           
            //creating user page in userPage function
          
                // inserting new user data
                var sql = `INSERT INTO student_data (name,reg_no, institution_mail, personal_email, phone) VALUES ('${name}','${regno}', '${i_mail}', '${p_name}', '${phone}')`;
                con.query(sql, function (err, result) {
                    if (err){
                        console.log(err);
                    }
                    console.log("success");
                });
      
    });


});

app.listen(2000, ()=>{
    console.log("Server running on port 2000");
});