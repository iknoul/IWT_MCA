const { request } = require('express');
var con=require('../dbconfig');

exports.loginselect=function(req,res)
{
    res.render('loginselection');
}

exports.login=function(req,res)
{
    var id=req.params.id;
    if(id=='student')
    {
        res.render('login',{userid:'Register Number'});
    }
    if(id=='teacher')
    {
        res.render('login',{userid:'Teacher ID'});
    }
    if(id=='admin')
    {
        res.render('login',{userid:'User ID'});

    }
}

exports.loginaction=function(req, res) {
    var id=req.params.id;
    console.log(id);
    if(id=='Register Number')
    {
    var reg=req.body.id;
    var password=req.body.password;
    con.query(`select * from student where RegNo=${reg}`,function(err,data)
    {
         if(data.length>0)
         {
            if(data[0].password==password)
            {
                request.sessionID=data[0].Name;
                con.query(`select * from studentCourse`,function(err,data){
                res.render('student',{name:request.sessionID,course:data});  
                })
            }
            else{
                res.render('login',{msg:'Incorrect password'});
            }
         }
         else{
            res.render('login',{msg:'No student found'});
        }
         console.log("logged in");
    })
    }
    if(id=='Teacher ID')
    {
        var tchrid=req.body.id;
        var password=req.body.password;
        con.query(`select * from teacher where tchrId='${tchrid}'`,function(err,data)
        {
            console.log(data);
            console.log(data.length);


             if(data.length>0)
             {
                if(data[0].password==password)
                {
                    request.sessionID=data[0].Name;
                    res.render('teacher',{name:request.sessionID});
                }
                else{
                    res.render('login',{msg:'Incorrect password'});
                }
             }
             else{
                res.render('login',{msg:'No user found'});
            }
             console.log("logged in");
        })
    }
    if(id=='User ID')
    {
        var userid=req.body.id;
        var password=req.body.password;
        con.query(`select * from admin where userid='${userid}'`,function(err,data)
        {
            request.sessionID=data[0].userid;
            console.log(data);
            console.log(data.length);


             if(data.length>0)
             {
                if(data[0].password==password)
                {
                    res.render('admin',{name:request.sessionID});
                }
                else{
                    res.render('login',{msg:'Incorrect password'});
                }
             }
             else{
                res.render('login',{msg:'No user found'});
            }
             console.log("logged in");
        })

    }
   
 }
 exports.logout=function(req,res)
 {
    req.session.destroy();
    
    res.redirect('loginselection');
 }