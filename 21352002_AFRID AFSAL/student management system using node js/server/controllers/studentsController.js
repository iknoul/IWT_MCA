const mysql = require("mysql");

const con = mysql.createPool({
    connectionLimit:10,
    host     : process.env.DB_HOST,
    user     : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME, 
});

exports.view = (req,res)=>{

    con.getConnection((err,connection)=>{
        if(err) throw err
        connection.query("select * from mca",(err,rows)=>{
            connection.release();
            if(!err){
                res.render("home",{rows});
            }
            else{
                console.log("Error in listing data "+err);
            }
        }); 
    });
    
};

exports.adduser = (_req,res)=>{
    res.render("adduser");
}

exports.save = (req,res)=>{
    con.getConnection((err,connection)=>{
        if(err) throw err
        const {Name,RegisterNumber,InstitutionalEmail,PersonalEmail,Mobile} = req.body;

        connection.query("insert into mca (Name,RegisterNumber,InstitutionalEmail,PersonalEmail,Mobile)values(?,?,?,?,?)",[Name,RegisterNumber,InstitutionalEmail,PersonalEmail,Mobile],(err)=>{

        
            connection.release();
            if(!err){
                res.render("adduser",{msg:"User details added successfully"});
            }
            else{
                console.log("Error in listing data "+err);
            }
        }); 
    });
}

exports.edituser = (req,res)=>{
    con.getConnection((err,connection)=>{
        if(err) throw err
        //get Id from url
        let ID = req.params.ID;
        connection.query("select * from mca where ID = ?",[ID],(err,rows)=>{
            connection.release();
            if(!err){
                res.render("edituser",{rows});
            }
            else{
                console.log("Error in listing data "+err);
            }
        }); 
    });
   
}

exports.edit = (req,res)=>{
    con.getConnection((err,connection)=>{
        if(err) throw err
        const {Name,RegisterNumber,InstitutionalEmail,PersonalEmail,Mobile} = req.body;
        let ID = req.params.ID;

        connection.query("update mca set Name = ?, RegisterNumber = ?, InstitutionalEmail = ?, PersonalEmail = ?, Mobile = ? where ID = ?",[Name,RegisterNumber,InstitutionalEmail,PersonalEmail,Mobile,ID],(err)=>{

        
            connection.release();
            if(!err){

                
                    con.getConnection((err,connection)=>{
                        if(err) throw err
                        //get Id from url
                        let ID = req.params.ID;
                        connection.query("select * from mca where ID = ?",[ID],(err,rows)=>{
                            connection.release();
                            if(!err){
                                
                                res.render("edituser",{rows,msg:"User details updated successfully"});
                            }
                            else{
                                console.log("Error in listing data "+err);
                            }
                        }); 
                    });
                
            }
            else{
                console.log("Error in listing data "+err);
            }
        }); 
    });
}

exports.delete = (req,res)=>{
    con.getConnection((err,connection)=>{
        if(err) throw err
        //Get ID from url
        let ID = req.params.ID;
        connection.query("delete from mca where ID=?",[ID],(err)=>{
            connection.release();
            if(!err){
                res.redirect("/");
                
            }else{
                console.log(err);
            }

        });
    });
};


exports.viewatt = (req,res)=>{

    con.getConnection((err,connection)=>{
        if(err) throw err
        connection.query("select * from mca",(err,rows)=>{
            connection.release();
            if(!err){
                res.render("attendence",{rows});
            }
            else{
                console.log("Error in listing data "+err);
            }
        }); 
    });
    
};


exports.totview = (req,res)=>{

    con.getConnection((err,connection)=>{
        if(err) throw err
        connection.query("select * from attendence",(err,rows)=>{
            connection.release();
            if(!err){
                res.render("totalattendence",{rows});
            }
            else{
                console.log("Error in listing data "+err);
            }
        }); 
    });
    
};
    
