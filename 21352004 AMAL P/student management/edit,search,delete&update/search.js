const express = require('express');
const ejs = require('ejs');
const http = require('http');
var parseUrl = require('body-parser');
const app = express();

var mysql = require('mysql');
const { encode } = require('punycode');

let encodeUrl = parseUrl.urlencoded({ extended: true });
app.use(parseUrl.json());



var con = mysql.createConnection({
    host: "localhost",
    user: "root", // my username
    password: "root12345", // my password
    database: "database"
});

app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('srch', { data: 'Express' });
});

app.post('/search', encodeUrl, (req, res) => {
    var rnum = req.body.rnumb;
    con.query(`SELECT * FROM mca where Reg_Number= "${rnum}"  `, (err, result) => {
        //console.log(result);   
        res.render('srch', { data: result });
    })

});
app.post('/edit/:data', encodeUrl, (req, res) => {
    var rnum = req.params.data;
    var name = req.body.rname;
    var i_mail = req.body.imail;
    var p_mail = req.body.pmail;
    var phone = req.body.phone;
    //var regno = req.body.reg;
    console.log(rnum);
    console.log(p_mail);
    var qry = `update mca set Name='${name}',I_Email= '${i_mail}',P_Email='${p_mail}',Mobile=${phone} where Reg_Number= "${rnum}"`;
    console.log(qry);
    con.query(qry, (err, result) => {
        console.log(result);
        res.render('srch', { data: "hello" });
    })
});
app.post('/delete/:data', encodeUrl, (req, res) => {
    var rnum = req.params.data;
    // var name = req.body.rname;
    //var i_mail = req.body.imail;
    //var p_mail = req.body.pmail;
    //var phone = req.body.phone;
    //var regno = req.body.reg;
    console.log(rnum);
    //console.log(p_mail);
    var qry = `delete from mca where Reg_Number= "${rnum}"`;
    console.log(qry);
    con.query(qry, (err, result) => {
        console.log(result);
        res.render('srch', { data: "hello" });
    })
});
app.post('/register', encodeUrl, (req, res) => {
    var rnum = req.body.reg;
    var name = req.body.rname;
    var i_mail = req.body.imail;
    var p_mail = req.body.pmail;
    var phone = req.body.phone;
    console.log(rnum);
    console.log(p_mail);

    var qry = `INSERT INTO mca (Name, Reg_Number,I_Email, P_Email, Mobile) VALUES ('${name}','${rnum}', '${i_mail}', '${p_mail}', '${phone}')`;
    console.log(qry);
    con.query(qry, (err, result) => {
        console.log(result);
        res.render('srch', { data: "hello" });
    })
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});