const express= require("express")
const mysql= require("mysql")
const app=express()
const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root12345",
    database:"database"
    
})


app.get("/fetch",(req,res)=>{
    con.query("select * from mca",function(err,result,fields)
    {
        if(err)
        {
            console.log(err)
        }else{
            res.send(result)
        }
    })
})
