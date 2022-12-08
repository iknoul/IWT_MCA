var express = require('express');
var router = express.Router();
var database=require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/form', function(req, res, next) {
  res.render('form', { title: 'Student Details' });
});


router.post('/searchaction',function(req,res) 
{
  var regno=req.body.reg;
  
  console.log(regno);



    var query=`select * from mca where regno="${regno}"`;
    database.query(query,function(error,data)
    {
      if(error) throw error;
      else
      {
       //  for(var i=0; i<data.length; i++)
       // console.log(data[i].name);
        res.render('form',{title:'Student detail',sampledata:data});
      }
    });

});





      
      


 
module.exports = router;
