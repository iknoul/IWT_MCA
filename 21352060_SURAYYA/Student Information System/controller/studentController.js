var con=require('../dbconfig');


exports.regcourse=function(req,res){
    con.query('select * from course',function(err,data){
     res.render('regcourse',{subdata:data})
    })
}

exports.regaction=function(req,res)
{
    regno=req.body.regNo;
    course=req.body.sub;
    
    con.query(`select Name from course where code="${course}"`,function(err,data)
    {
     coursename=data[0].Name;
        con.query(`insert into studentCourse values("${regno}","${course}","${coursename}")`,function(err,data)
    {
        res.render('regcourse',{msg:true,});

    });

    })
    
}

