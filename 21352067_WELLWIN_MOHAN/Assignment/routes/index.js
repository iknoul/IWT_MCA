var express = require('express');
var router = express.Router();
var database=require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/Form', function(req, res, next) {
  res.render('form', { title: 'Student details' });
});
router.post('/searchaction',function(req,res)
{ 
  var regno=req.body.reg;

  console.log(regno);
  var query=`select * from mca where regno="${regno}"`;
  database.query(query,function(error,data)
  {
    if(error)throw error;
    else{
      res.render('form',{title:'Student detail',sampledata:data});
    }
  
});
});


router.get('/home2', function(req, res)  {
  //res.render('table',{data:"result"});
  database.query(`SELECT * FROM mca`,function(err, result) {    
     
    console.log(err);
    if(err)throw err;
    else{
     
      res.render('display',{data:result});
    }
  });
});
/*
router.get('/home', function(req, res)  {
  //res.render('table',{data:"result"});
  database.query(`SELECT * FROM mca`,function(err, result) {    
     
    console.log(err);
    if(err)throw err;
    else{
     
      res.render('table',{data:result});
    }
  });
  sd
   
});*/

router.post('/attendence', (req, res) => {
 
 database.query("SELECT * FROM mca",(err, result)  => {
      var atten=[];
      var data = req.body;
     //console.log(data);
    
     if(result.length){ 
     for( i = 0; i< result.length; i++) 
    
         {
          
         regno=result[i].regno;
         regno=""+regno;
         var datetime=new Date();
         console.log(date);
         let month=datetime.getMonth()+1;
   var date=datetime.getFullYear()+'-'+month+'-'+datetime.getDate();
   //console.log(date);
   
         atten[i] = data[regno];
         if(atten[i]=='1'){
         
           database.query(`INSERT INTO attendence (reg_no,date,remark) VALUES ('${regno}','${date}','PRESENT')` ,function (err,result){
             if(err){
             console.log(err);
             res.render('attendence')
             }
             else{
              //router.get('/form');
             //console.log("sucess");
             //req.redirect('/');
             }
           });
         }
         else{
           
           database.query(`INSERT INTO attendence (reg_no,date,remark) VALUES ('${regno}','${date}','ABSENT')` ,function (err,result){
             if(err){
             console.log(err);
             //router.get('/Form', function(req, res, next) {
            //  res.render('form', { title: 'Student details' });
            //});
             }
             else{ 
             // router.get('/form');
             //console.log("sucess");
             //req.redirect('/');
             }
           });
           
         
         }
  
         //console.log(atten[i]);
         
         }
         res.redirect('/form');
     }
 
 })
});

router.get("/add",(req,res) => {
  //fetching data from form
  res.render("add",{title:'Student details', mesg: true })
  
});
module.exports = router;
