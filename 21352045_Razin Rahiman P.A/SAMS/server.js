const express = require('express');
const ejs = require('ejs');
const http = require('http');
var parseUrl = require('body-parser');
const app = express();
const session = require('express-session');
const path = require('path')

var mysql = require('mysql');
const { encode } = require('punycode');

let encodeUrl = parseUrl.urlencoded({ extended: true });
app.use(parseUrl.json());



var con = mysql.createConnection({
    host: "localhost",
    user: "root", // my username
    password: "123456", // my password
    database: "db"
});

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(express.static(path.join(__dirname, 'static')));

app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', function(request, response) {
	// Render login template
	response.sendFile(path.join(__dirname + '/login.html'));
});
// http://localhost:3000/auth
app.post('/auth', function(request, response) {
	// Capture the input fields
	let username = request.body.username;
	let password = request.body.password;
	// Ensure the input fields exists and are not empty
	if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		con.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				// Authenticate the user
				request.session.loggedin = true;
				request.session.username = username;
				console.log(results[0].type)
				// Redirect to home page
				if(results[0].type == "teacher"){
					
					return response.redirect('/home');
					}
				if(results[0].type === "student"){
					response.redirect('/home');
					}
				else {
				response.redirect('/');
				}
					
			} else {
				response.send('Incorrect Username and/or Password!');
			}			
			response.end();
		});
	} else {
		response.send('Please enter Username and Password!');
		response.end();
	}
});


   
 app.get('/home', (req, res) => {
  res.render('home');    
});
 app.get('/homestu', (req, res) => {
  res.render('homestu');    
});

app.get('/stuatten', (req, res) => {
  
   con.query("SELECT * FROM MCA",(err, result)  => {    
      
     
      //res.send("<body><table><th></th><tr><td></td><td>"+i+9+""+data[i].name+""+data[i].reg_no+"</td></tr></table></body>");
       res.render('view',{data:result});
   })

app.get('/Attendence', (req, res) => {
  
   con.query("SELECT * FROM attendence ",(err, result)  => {    
      
     
      //res.send("<body><table><th></th><tr><td></td><td>"+i+9+""+data[i].name+""+data[i].reg_no+"</td></tr></table></body>");
       res.render('view',{data:result});
   })
   
    
});

app.post('/attendence', encodeUrl, (req, res) => {
	
	con.query("SELECT * FROM MCA",(err, result)  => {
	     var atten=[];
	     var data = req.body;
	    //console.log(data);
	   
	    if(result.length){ 
	    for( i = 0; i< result.length; i++) 
	   
	        {
	        
	        regno=result[i].RNUM;
	        regno=""+regno;
	        var datetime=new Date();
	        //console.log(date);
	        let month=datetime.getMonth()+1;
		var date=datetime.getFullYear()+'-'+month+'-'+datetime.getDate();
		//console.log(date);
	        
	        atten[i] = data[regno];
	        if(atten[i]=='1'){
	        
	        	con.query(`INSERT INTO attendence (reg_no,date,remark) VALUES ('${regno}','${date}','1')` ,function (err,result){
	        		if(err){
	        		console.log(err);
	        		}
	        		else{
	        		//console.log("sucess");
	        		//req.redirect('/');
	        		}
	        	});
	        }
	        else{
	        	
	        	con.query(`INSERT INTO attendence (reg_no,date,remark) VALUES ('${regno}','${date}','0')` ,function (err,result){
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

app.get('/addstu', (req, res) => {
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






//Edit or delete



app.get('/hhhh', (req, res) => {
   con.query("SELECT * FROM MCA",(err, result)  => {    
      
     
      //res.send("<body><table><th></th><tr><td></td><td>"+i+9+""+data[i].name+""+data[i].reg_no+"</td></tr></table></body>");
       res.render('view',{data:result});
   })
   
    
});






app.get('/Search01', (req, res) => {
    
      
     
      
     res.render('search',{data:'Express'});

   
    
});


app.get('/view', encodeUrl, (req, res) => {

	 con.query("SELECT * FROM MCA",(err, result)  => { 
	//console.log(result);   
        res.render('table',{data:result});
})

});

app.post('/search', encodeUrl, (req, res) => {


	var rnum=req.body.rnumb;
	
	con.query(`SELECT * FROM MCA where RNUM= "${rnum}"  `,(err, result)  => { 
	//console.log(result);   
        res.render('search',{data:result});
})

});		



app.post('/edit/:data', encodeUrl, (req, res) => {


	var rnum=req.params.data;
	var name = req.body.rname;
	var i_mail = req.body.imail;
	var p_mail = req.body.pmail;
	var phone = req.body.phone;
	//var regno = req.body.reg;
	console.log(rnum);
	console.log(p_mail);
	var qry = `update MCA set NAME='${name}',IMAIL= '${i_mail}',PMAIL='${p_mail}',MOBILE=${phone} where RNUM= "${rnum}"`;
	console.log(qry);
	con.query(qry,(err, result)  => { 
	console.log(result);
        res.render('search',{data:"hello"});
	})

});

app.listen(4000, ()=>{
    console.log("Server running on port 4000");
});
