var con=require('../dbconfig');
exports.main=function(req,res)
{
    res.render('index');
}


exports.show=function(req,res)
{
   con.query(`select * from student`,function(err,data){
       if(data.length>0)
       {
           res.render('crud',{msg:true,row:data});
       }
       else{
           res.render('crud',{msg:false,row:data});
       }
   })
}
exports.showTeacher=function(req,res)
{
   con.query(`select * from teacher`,function(err,data){
       if(data.length>0)
       {
           res.render('crudTeacher',{msg:true,row:data});
       }
       else{
           res.render('crudTeacher',{msg:false,row:data});
       }
   })
}
exports.view=function(req,res)
{
    res.render('admin');
}
exports.search=function(req,res)
{
    var regno=req.body.regNo;
    con.query(`select * from student where RegNo=${regno}`,function(err,data){
        if(data.length>0)
        {
            res.render('crud',{msg:true,row:data});
        }
        else{
            res.render('crud',{msg:false,row:data});
        }
    })

}
exports.add=function(req,res)
{
    id=req.params.id;
    console.log(id);
    if(id=='student')
    {
        res.render('addst',{userid:'Register Number'});

    }
    if(id=='teacher')
    {
        res.render('addst',{userid:'Teacher ID'});

    }
  
}
exports.addAction=function(req,res)
{

     id=req.params.id;
     if(id=='Register Number')
     {
        var regno=req.body.regNo;
    var name=req.body.name;
    var unimail=req.body.unimail;
    var persmail=req.body.email;
    var mob=req.body.mob;
    
    con.query(`insert into student(Name,RegNo,Unimail,EmailId,Mobile,Password) values ("${name}","${regno}","${unimail}","${persmail}","${mob}",DEFAULT)`,function(err,data){
        if(err) throw err;
        res.render('addst',{msg:true});
        
     
    })
     }
     if(id=='Teacher ID')
{
    var tchrId=req.body.regNo;
    var name=req.body.name;
    var unimail=req.body.unimail;
    var persmail=req.body.email;
    var mob=req.body.mob;
    
    con.query(`insert into teacher(tchrId,Name,Unimail,EmailId,Mobile,Password) values ("${tchrId}","${name}","${unimail}","${persmail}","${mob}",DEFAULT)`,function(err,data){
        if(err) throw err;
        res.render('addst',{msg:true});
        
     
    })
}   

}
exports.delete=function(req,res)
{
    console.log(req.params.id);
    con.query(`delete from student where RegNo=?`,[req.params.id],function(err,data){
        if(err) throw err;
        
        con.query(`select * from student`,function(err,data){
            if(data.length>0)
            {
                res.render('crud',{msg:true,row:data});
            }
            else{
                res.render('crud',{msg:false,row:data});
            }
        })
        
        
    })

}
exports.edit=function(req,res)
{
   
      //  $(document).
        


}
exports.editAction=function(req,res)
{
    console.log(req.params.id);
    con.query(`u student where RegNo=?`,[req.params.id],function(err,data){
        if(err) throw err;
        
        con.query(`select * from student`,function(err,data){
            if(data.length>0)
            {
                res.render('crud',{msg:true,row:data});
            }
            else{
                res.render('crud',{msg:false,row:data});
            }
        })
        
        
    })

}
exports.course=function(req,res)
{
    con.query(`select * from course`,function(err,data){
        if(data.length>0)
        {
            res.render('course',{msg:true,row:data});
        }
        else{
            res.render('course',{msg:false,row:data});
        }
    })

}
