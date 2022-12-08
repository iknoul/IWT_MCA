const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentsController");
const mysql = require("mysql");

const con = mysql.createPool({
    connectionLimit:10,
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME, 
});


//view All record
router.get("/",studentController.view);

//Add New records
router.get("/adduser",studentController.adduser);
router.post("/adduser",studentController.save);


//Update Records
router.get("/edituser/:ID",studentController.edituser);
router.post("/edituser/:ID",studentController.edit);

//Delete Records
router.get("/deleteuser/:ID",studentController.delete);

router.get("/attendence",studentController.viewatt);


router.post('/attendence', (req, res) => {
 
    con.query("SELECT * FROM mca",(err, result)  => {
         var atten=[];
         var data = req.body;
        //console.log(data);
       
        if(result.length){ 
        for( i = 0; i< result.length; i++) 
       
            {
             
            RegisterNumber=result[i].RegisterNumber;
            RegisterNumber=""+RegisterNumber;
            var datetime=new Date();
            console.log(date);
            let month=datetime.getMonth()+1;
      var date=datetime.getFullYear()+'-'+month+'-'+datetime.getDate();
      //console.log(date);
      
            atten[i] = data[RegisterNumber];
            if(atten[i]=='1'){
            
              con.query(`INSERT INTO attendence (RegisterNumber,date,remark) VALUES ('${RegisterNumber}','${date}','PRESENT')` ,function (err,result){
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
              
              con.query(`INSERT INTO attendence (RegisterNumber,date,remark) VALUES ('${RegisterNumber}','${date}','ABSENT')` ,function (err,result){
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


   router.post('/searchaction',function(req,res)
{ 
  var RegisterNumber=req.body.reg;

  console.log(RegisterNumber);
  var query=`select * from mca where RegisterNumber="${RegisterNumber}"`;
  con.query(query,function(error,rows)
  {
    if(error)throw error;
    else{
      res.render('searching',{rows});
    }
  
});
});

router.get("/totatt",studentController.totview);

module.exports = router;