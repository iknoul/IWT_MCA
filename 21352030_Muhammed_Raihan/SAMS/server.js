const express = require("express");
const ejs = require("ejs");
const http = require("http");
var parseUrl = require("body-parser");
const app = express();

var db = require("mysql");
const { encode } = require("punycode");
const { nextTick } = require("process");
const { urlencoded } = require("express");

let encodeUrl = parseUrl.urlencoded({ extended: true });
app.use(parseUrl.json());
app.use(express.static("public"));

var con = db.createConnection({
  host: "localhost",
  user: "root",
  password: "773008",
  database: "student",
});

app.engine("ejs", require("ejs").renderFile);
app.set("view engine", "ejs");

con.connect();

app.get("/", (req, res) => {
  con.query("SELECT * FROM student", (err, result) => {
    if (err) console.log(err);
    else res.render("home", { data: result });
  });
});

app.get("/attendance", (req, res) => {
  console.log("\n    GET  ---> /attendance\n");
  con.query(`select * from student `, (err, result) => {
    res.render("attd", {
      mydate: "nil",
      mysub: "IWT",
      data: result,
      data2: result,
    });
  });
});
app.post("/attendance", encodeUrl, (req, res) => {
  console.log("\n    POST  --->   /attendance\n");
  con.query("select * from student", (err, result) => {
    var dates = req.body.datein;
    var sub = req.body.sub;
    console.log("Date : " + dates);
    console.log("Sub : " + sub);
    if (typeof dates === "undefined"||dates=='') {
      var datetime = new Date();
      let month = datetime.getMonth() + 1;
      dates = datetime.getFullYear() + "-" + month + "-" + datetime.getDate();
      console.log("Date : " + dates);
    }
    console.log(dates);
    if (typeof sub === "undefined") {
      sub = "IWT";
    }
    var sql = `select * from attendance where date='${dates}' and sub='${sub}'`;
    con.query(sql, (err, result2) => {
      res.render("attd", {
        mydate: dates,
        mysub: sub,
        data: result,
        data2: result2,
      });
    });
  });
});

app.get("/attenupdate", (req, res) => {
  console.log("\n    GET  --->   /attenupdate\n");
  var sql = `select * from student `;
  res.setHeader("Content-Type", "text/html");
  con.query(sql, (err, result) => {
    var datetime = new Date();
    let month = datetime.getMonth() + 1;
    var date = datetime.getFullYear() + "-" + month + "-" + datetime.getDate();
    res.render("attdup", {
      mydate: date,
      mysub: "IWT",
      data: result,
      data2: result,
    });
  });
});

app.post("/attenupdate", encodeUrl, (req, res, next) => {
  console.log("\n    POST  --->   /attenupdate\n");
  con.query("SELECT * FROM student", (err, result) => {
    var atten = [];
    var sub = req.body.sub;
    var mydate = req.body.datein;
    var data = req.body;
    if (typeof sub === "undefined") {
      sub = "IWT";
    }
    if (typeof mydate === "undefined") {
      var datetime = new Date();
      let month = datetime.getMonth() + 1;
      mydate = datetime.getFullYear() + "-" + month + "-" + datetime.getDate();
    }
    console.log(mydate, sub);
    if (result.length) {
      for (i = 0; i < result.length; i++) {
        regno = result[i].reg_no;
        rname = result[i].name;
        console.log(regno);
        console.log(rname);
        atten[i] = data[regno];
        if (atten[i] == "1") {
          console.log(atten[i]);
          console.log("Present...");
          var sql5 = `INSERT INTO attendance VALUES ('${rname}',${regno},'${sub}','${mydate}','1')`;
          console.log("sql5 : " + sql5);
          con.query(sql5, function (err, result3) {
            if (err) {
              if (err.code == "ER_DUP_ENTRY") {
                console.log(regno+" Already updated");
              } else {
                console.log(err);
              }
            } else {
              console.log("Success");
            }
          });
        }
        if (atten[i] == "0") {
          console.log(atten[i]);
          console.log("Absent...");
          var sql6 = `INSERT INTO attendance VALUES ('${rname}',${regno},'${sub}','${mydate}','0')`;
          console.log("sql6 : " + sql6);
          con.query(sql6, function (err, result3) {
            if (err) {
              if (err.code == "ER_DUP_ENTRY") {
                console.log(regno+" Already updated");
              } else {
                console.log(err);
              }
            } else {
              console.log("Success");
            }
          });
        }
      }
      var sql = `select * from attendance where date='${mydate}' and sub='${sub}'`;
      con.query(sql, (err, result2) => {
        res.render("attd", {
          mydate: mydate,
          mysub: sub,
          data: result,
          data2: result2,
        });
      });
    }
  });
});

app.get("/register", (req, res) => {
  console.log("\n    GET  --->   /register\n");
  res.render("form");
});

app.post("/register", encodeUrl, (req, res) => {
  console.log("\n    POST  --->   /register\n");
  var name = req.body.rname;
  var i_mail = req.body.imail;
  var p_name = req.body.pmail;
  var phone = req.body.phone;
  var regino = req.body.reg;
  con.connect(function (err) {
    if (err) {
      console.log(err);
    }
    var sql1 = `INSERT INTO student (name,reg_no, institution_mail, personal_mail, phone) VALUES ('${name}','${regino}', '${i_mail}', '${p_name}', '${phone}')`;
    con.query(sql1, function (err, result) {
      if (err) {
        console.log(err);
        res.redirect("/register");
      } else {
        console.log("Student added to the list");
        res.redirect("/");
      }
    });
  });
});

app.get("/search", (req, res) => {
  console.log("\n    GET  --->   /search\n");
  con.query("SELECT * FROM student where reg_no=''", (err, result) => {
    res.render("search", { data: result, isFound: 2 });
  });
});

app.post("/search", encodeUrl, function (req, res) {
  console.log("\n    POST  --->   /search\n");
  var regno = req.body.search;
  var sql3 = `select * from student where reg_no='${regno}'`;
  con.query(sql3, function (error, result) {
    if (error) throw error;
    else {
      if (result.length) {
        res.render("search", { data: result, isFound: 1 });
      } else {
        res.render("search", { data: result, isFound: 0 });
      }
    }
  });
});

app.post("/edit", encodeUrl, (req, res) => {
  console.log("\n    POST  --->   /edit\n");
  var reg = req.body.r1;
  var name = req.body.n;
  var imail = req.body.i;
  var pmail = req.body.p;
  var fone = req.body.f;
  var sql = `update student set name='${name}', institution_mail='${imail}', personal_mail='${pmail}', phone='${fone}' where reg_no='${reg}'`;
  console.log(sql);
  con.query(sql, (err, result) => {
    if (err) throw err;
    else {
      con.query(
        `SELECT * FROM student where reg_no='${reg}'`,
        (err, result2) => {
          res.render("search", { data: result2, isFound: 1 });
        }
      );
    }
  });
});

app.post("/delete:r", encodeUrl, (req, res) => {
  console.log("\n    POST  --->   /delete\n");
  var reg = req.params.r;
  var sql = `delete FROM student where reg_no='${reg}'`;
  console.log(sql);
  con.query(sql, (err, result) => {
    if (err) throw err;
    else {
      con.query(`SELECT * FROM student where reg_no=''`, (err, result2) => {
        res.render("search", { data: result2, isFound: 2 });
      });
    }
  });
});

app.listen(80, () => {
  console.log("Server running on https://localhost");
});
