const { response } = require("express");
const express = require("express");
const bodyParser = require("body-parser");
const db = require("./database")
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

db.connect(function(err){
    if(!!err) console.log(err);
    else console.log("db connected")
})
app.set("view engine", "ejs")

app.get('/', (req, res) => {
    res.render("index");
})

app.get('/searchid', (req, res) => {
    var reg_no = req.query.reg;

    let sql = "select * from student where Register_Number = "+ reg_no;
    let query = db.query(sql, (err, rows) => {
        res.send(rows[0]);
    })
})


app.post('/setdata',  (req, res, next) => {
    console.log(req.body)

    var reg_no = req.body.reg;
    var name = req.body.name;
    var iEmail = req.body.iEmail;
    var pEmail = req.body.pEmail;
    var mob = req.body.mob;


   var sqlQuery = `insert into student (Name, Register_Number, Institutional_Email, Personal_Email,  Mobile) values ("${name}", "${reg_no}", "${iEmail}", "${pEmail}", "${mob}")`;

    db.query(sqlQuery, function (err, data){
         if(err) throw err;

         res.json({
            success: 1,
            message: 'Data has been inserted',
        });
     });
});



app.post;

app.listen(3000);