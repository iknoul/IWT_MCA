const express =require("express");
const app=express();
const port =3004
const mysql =require("./connection").con
// configuration 
app.set("view engine","hbs");
app.set("views","./view")
app.use(express.static(__dirname + "/public"))

//app.use(express.urlencoded())
//app.use(express.json())
//Routing
app.get("/",(_req,res) => {
   res.render("index")
})
app.get("/add",(_req,res) => {
    res.render("add")
 })
 app.get("/search",(req,res) => {
    res.render("search")
 })
 app.get("/update",(req,res) => {
    res.render("update")
 })
 app.get("/delete",(req,res) => {
    res.render("delete")
 })
 app.get("/attendance", (req, res) => {
    let qry = "select * from mca_1";
    mysql.query(qry, (err, results) => {
        if (err) throw err
        else {
            res.render("attendance", { data: results });
        }

    });
});
app.get("/view", (req, res) => {
    let qry = "select * from mca_1";
    mysql.query(qry, (err, results) => {
        if (err) throw err
        else {
            res.render("view", { data: results });
        }

    });

});
//add
 app.get("/addstudent",(req,res) => {
    //fetching data from form
    const { name, regno, iemail, pemail, mobile } = req.query

    //Sanitization XSS...
    let qry = "select * from mca_1 where regno=?";
    mysql.query(qry, [regno],(err,results) => {
        if(err)
        throw err
        else{

           if(results.length > 0) {
res.render("add",{ checkmesg:true })
           } else {
                
            //insert query
            let qry2 = "insert into mca_1 values(?,?,?,?,?)";
            mysql.query(qry2,[name,regno,iemail,pemail,mobile],(err,results) => {
                if(results.affectedRows > 0 ) {
                    res.render("add", {mesg: true })
                }
            })
           }
        }
    })
 });

//search
 app.get("/searchstudent", (req,res) => {
//fetch data from the form 

const { regno } = req.query;

let qry ="select * from mca_1 where regno=?";
mysql.query(qry,[regno],(err, results) => { 
    if(err)  throw err
    else {
        if (results.length > 0) {
            res.render("search",{mesg1: true, mesg2: false })
        }else {
            res.render("search",{mesg1: false, mesg2: true })
        }
    }
})
 })

//update
app.get("/updatesearch", (req,res) => {
    const { regno } = req.query;

let qry ="select * from mca_1 where regno=?";
mysql.query(qry,[regno],(err, results) => { 
    if(err)  throw err
    else {
        if (results.length > 0) {
            res.render("update",{mesg1: true, mesg2: false, data: results})
        }else {
            res.render("update",{mesg1: false, mesg2: true })
        }
    }
})
 })
app.get("/updatestudent", (req,res) => {
    //fetch data
    const { name, iemail, pemail, mobile, regno  } = req.query;
    let qry = "update  mca_1 set name=?, insmail=?, permail=?, mobileno=? where regno=?";

    mysql.query(qry,[name, iemail, pemail, mobile, regno], (err, results) => {
        if(err)
           throw err
        else {
            if (results.affectedRows > 0) {
                res.render("update", { umesg: true })
            }
        }

    })
})


//delete

app.get("/removestudent", (req, res) => {

    // fetch data from the form


    const { regno } = req.query;

    let qry = "delete from mca_1 where regno=?";
    mysql.query(qry, [regno], (err, results) => {
        if (err) throw err
        else {
            if (results.affectedRows > 0) {
                res.render("delete", { mesg1: true, mesg2: false })
            } else {

                res.render("delete", { mesg1: false, mesg2: true })

            }

        }
    });
});

//attendance
app.post('/attendance', (req, res) => {
    var atten = [];
    var data = req.query;
    console.log("data : "+  data);
    mysql.query("SELECT * FROM mca_1", (err, result) => {
        
        

        if (result.length) {
            for (i = 0; i < result.length; i++) {

                var regno = result[i].regno;
                var datetime = new Date();
                
                let month = datetime.getMonth() + 1;
                var date = datetime.getFullYear() + '-' + month + '-' + datetime.getDate();
                atten[i] = data[regno];
                // if (!reg) return

                if (atten[i] == '1') {

                    mysql.query(`INSERT INTO stu_attendance (reg_no,date,remark) VALUES ('${regno}','${date}','ABSENT')`, function (err, result) {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            console.log("success");
                        }
                    });
                }
                else {

                    mysql.query(`INSERT INTO stu_attendance (reg_no,date,remark) VALUES ('${regno}','${date}','PRESENT')`, function (err, result) {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            //console.log("sucess");
                        }
                    });

                }

                //console.log(atten[i]);

            }
            res.redirect('/');
        }

    })
});


//Create Server
app.listen(port,(err) => {
    if(err)
      throw err
    else
      console.log("Server is running at port %d:",port);
});
