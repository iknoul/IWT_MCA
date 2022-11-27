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
        connection.query("select * from mcasts",(err,rows)=>{
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

exports.adduser = (req,res)=>{
    res.render("adduser");
}

exports.save = (req,res)=>{
    con.getConnection((err,connection)=>{
        if(err) throw err
        const {name,registerNumber,InstitutionalMail,personalMail,mobile} = req.body;

        connection.query("insert into mcasts (Name,RegisterNumber,InstitutionalEmail,PersonalEmail,Mobile)values(?,?,?,?,?)",[name,registerNumber,InstitutionalMail,personalMail,mobile],(err,rows)=>{

        
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
        let id = req.params.id;
        connection.query("select * from mcasts where ID = ?",[id],(err,rows)=>{
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
        const {name,registerNumber,institutionalMail,personalMail,mobile} = req.body;
        let id = req.params.id;

        connection.query("update mcasts set Name = ?, RegisterNumber = ?, InstitutionalEmail = ?, PersonalEmail = ?, Mobile = ? where ID = ?",[name,registerNumber,institutionalMail,personalMail,mobile,id],(err,rows)=>{

        
            connection.release();
            if(!err){

                
                    con.getConnection((err,connection)=>{
                        if(err) throw err
                        //get Id from url
                        let id = req.params.id;
                        connection.query("select * from mcasts where ID = ?",[id],(err,rows)=>{
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
        let id = req.params.id;
        connection.query("delete from mcasts where ID=?",[id],(err,rows)=>{
            connection.release();
            if(!err){
                res.redirect("/");
                
            }else{
                console.log(err);
            }

        });
    });
};



                                            //ATTENDANCE MODULE

exports.attendance = (req,res)=>{
   
    con.getConnection((err,connection)=>{
        if(err) throw err
        //get Id from url
        let id = req.params.id;
        connection.query("select * from mcasts where ID = ?",[id],(err,rows)=>{
            connection.release();
            if(!err){
                res.render("attendance",{rows});
            }
            else{
                console.log("Error in listing data "+err);
            }
        }); 
    });
   
}

//ALTER table mcasts add column (? date)

exports.mark_attendance = (req,res)=>{
 
    con.getConnection((err,connection)=>{
        if(err) throw err
        const {todaydate,faculties,subjects} = req.body;
        const columnName = todaydate.concat(' ',faculties);
        const staffSubject = columnName.concat(' ',subjects);
        connection.query("ALTER table mcasts add column `?` VARCHAR(45)",[staffSubject],(err,rows)=>{
            connection.release();
            if(!err){
                
            //    res.render("",{rows,msg:"COLUMN ADDED"});
            }
            else{
                // console.log("Error in ADDING COLUMN "+err);
            }
        }); 
    });
    
    
    con.getConnection((err,connection)=>{
        
        if(err) throw err
        const {name,registerNumber,todaydate,attendance,faculties,subjects} = req.body;
        const columnName = todaydate.concat(' ',faculties);
        const staffSubject = columnName.concat(' ',subjects);
        let id = req.params.id;
        
        
        //connection.query("ALTER TABLE mcasts ADD date ? DATETIME",[TODAY],(err,rows)=>{
        connection.query("update mcasts set Name = ?, RegisterNumber = ?, `?` = ? where ID = ?",[name,registerNumber,staffSubject,attendance,id],(err,rows)=>{
            

        
            connection.release();
            if(!err){

                
                    con.getConnection((err,connection)=>{
                        if(err) throw err
                        //get Id from url
                        let id = req.params.id;
                        connection.query("select * from mcasts where ID = ?",[id],(err,rows)=>{
                            connection.release();
                            if(!err){
                                
                                res.render("attendance",{rows,msg:"ATTENDANCE MARKED SUCCESFULLY"});
                            }
                            else{
                                console.log("Error in listing data "+err);
                            }
                        }); 
                    });
                
            }
            else{
                console.log("Error in adding column"+err);
            }
        }); 
    });
    
}

// INTERNAL MARK

exports.internalMark = (req,res)=>{
    con.getConnection((err,connection)=>{
        if(err) throw err
        //get Id from url
        let id = req.params.id;
        connection.query("select * from mcasts where ID = ?",[id],(err,rows)=>{
            connection.release();
            if(!err){
                res.render("internalMark",{rows});
            }
            else{
                console.log("Error in listing data "+err);
            }
        }); 
    });
   
}

exports.internal = (req,res)=>{
    con.getConnection((err,connection)=>{
        if(err) throw err
        const {name,registerNumber,institutionalMail,firstInternal,secondInternal,thirdInternal} = req.body;
        let id = req.params.id;

        connection.query("update mcasts set Name = ?, RegisterNumber = ?, InstitutionalEmail = ?, Internal_1 = ?, Internal_2 = ?, Internal_3 = ? where ID = ?",[name,registerNumber,institutionalMail,firstInternal,secondInternal,thirdInternal,id],(err,rows)=>{

        
            connection.release();
            if(!err){

                
                    con.getConnection((err,connection)=>{
                        if(err) throw err
                        //get Id from url
                        let id = req.params.id;
                        connection.query("select * from mcasts where ID = ?",[id],(err,rows)=>{
                            connection.release();
                            if(!err){
                                
                                res.render("internalMark",{rows,msg:"EVALUATED AND MARK UPDATED"});
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
