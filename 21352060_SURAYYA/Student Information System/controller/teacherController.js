var con=require('../dbconfig');
exports.attendance=function(req,res)
{
    con.query(`select RegNo,Name from student`,function(err,data){
        if(data.length>0)
        {
            res.render('attendance',{msg:true,row:data});
        }
        else{
            res.render('attendance',{msg:false,row:data});
        }
    })
  
}

exports.attAction=function(req,res)
{
    con.query(`select * from student`,function(error,data){
        var register=[];
        var inputs=req.body;
        var todaydate=req.body.todaydate;
        var datecol=todaydate.toString();
        let date=datecol.replace(/-/g,'_');
        
         con.query(`alter table attendancetb add ${date} varchar(50)`,function(err,result)
         {
           if(err) throw err;
           for(var i=0;i<data.length;i++)
           {
             reg=data[i].RegNo;
             register[i]=inputs[reg];
           
           if(register[i]=="P")
           {
             con.query(`update attendancetb set ${date}="Present" where regno="${reg}"`,function(err,datas)
             {
               if(err) throw err;
                 console.log("submitted");
                
     
             })
           }
           else{
             con.query(`update attendancetb set ${date}="Absent" where regno="${reg}"`,function(err,datas)
             {
               if(err) throw err;
                 console.log("submitted");
                 
             })
           }
        }
           con.query(`select RegNo,Name from student`,function(err,data){
            if(data.length>0)
            {
                res.render('attendance',{msg:true,row:data});
            }
            else{
                res.render('attendance',{msg:false,row:data});
            }
        })

})
    })
}

exports.addmark=function(req,res)
{
  con.query('select RegNo from student',function(err,data){
    con.query('select * from course',function(err,result)
    {
      res.render('addmark',{row:data,subdata:result});
    })
   
  })

}
exports.markaction=function(req,res)
{
  var regno=req.body.regNo;
  var sub=req.body.sub;
  var internal1=parseInt(req.body.internal1);
  var internal2=parseInt(req.body.internal2);
  var assignment=parseInt(req.body.assignment);
 var external=parseInt(req.body.external);
  var internal=((internal1+internal2)/2)+assignment;
  var total=internal+external;
  con.query(`insert into mark values ("${regno}","${sub}",${internal1},${internal2},${assignment},${internal},${external},${total})`,function(err,data){
    if(err) throw err;
    res.render('addmark',{msg:true});
  });

}
