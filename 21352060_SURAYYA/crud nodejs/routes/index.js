const { query } = require('express');
var express = require('express');
var router = express.Router();
var db=require('../dbconn');
const flag=1;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Student Details' });
});
router.get('/tabledetail', function(req, res, next) {
var  query=`select * from student`;
      db.query(query,function(error,data)
      {
        res.render('table',{tabledata:data});
      })
    })




router.post('/submitaction',function(req,res,next)
{
  var regno=req.body.reg;
if(regno.length!=8)
  {
    res.send('incorrect register number!');
  }
  else{
   var query=`select * from student where reg="${regno}"`;
    db.query(query,function(error,data)
    {
      if(error) throw error;
      else{
     /*  res.json({
          data:data
        });*/
        for(var i=0;i<data.length;i++)
        console.log(data[i].name);
   res.render('index',{title:'Student detail',sampledata:data});}
    });
  }
})
router.get('/form',function(req,res,next){
  res.render('insertform', { title:'Registration'});
})



router.post('/formaction',function(req,res){
  var regno=req.body.reg;
  var studentname=req.body.name;
  var unimail=req.body.unimail;
  var email=req.body.email;
  var phone=req.body.phone;
  console.log(studentname);
  var query=`insert into student (name,reg,unimail,email,mobile) values ("${studentname}","${regno}","${unimail}","${email}","${phone}")`;
  db.query(query, function(error,data)
  {
    if(error) throw error;
    else{
      query=`select * from student`;
      db.query(query,function(error,data)
      {
        res.render('table',{tabledata:data});
      })

    }
  })
})

router.post('/edittable',function(req,res)
{
 
  var regno=req.body.regno;


  var Name=req.body.name;
  var unimailid=req.body.unimail;
  var emailid=req.body.email;
  var mob=req.body.mob;
  console.log(regno);
  
 // console.log(reg+Name+unimailid+emailid+)


  var query=`update student set name="${Name}",unimail="${unimailid}",email="${emailid}",mobile="${mob}" where reg="${regno}"`;
  db.query(query,function(err,data){
     
  
    if(err) throw err;
    console.log(data.affectedRows);
    db.query(`select * from student where reg="${regno}"`,function(error,data)
    {
      res.render('index',{sampledata:data});
    })
    
  })  
 })

router.post('/attendance',function(req,res){
  db.query("select * from student",function(error,data){
   var register=[];
   var inputs=req.body;
   var todaydate=req.body.today;
   var datecol=todaydate.toString();
   let date=datecol.replace(/-/g,'_');
   var query=`alter table attendancetb add ${date} varchar(50)`;
    db.query(query,function(err,result)
    {
      if(err) throw err;
      for(var i=0;i<data.length;i++)
      {
        reg=data[i].reg;
        register[i]=inputs[reg];
      
      if(register[i]=="P")
      {
        db.query(`update attendancetb set ${date}="Present" where regno="${reg}"`,function(err,datas)
        {
          if(err) throw err;
            console.log("submitted");
           

        })
      }
      else{
        db.query(`update attendancetb set ${date}="Absent" where regno="${reg}"`,function(err,datas)
        {
          if(err) throw err;
            console.log("submitted");
            
        })
      }
    if(flag==1)
  {
    res.write('submitted')
  }}
    })
    
  })
})















module.exports = router;




