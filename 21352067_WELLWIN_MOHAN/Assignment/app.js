var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var database=require('./database');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
/*app.use(function(req, res, next) {
  next(createError(404));
});*/
app.get("/display",(req,res) => {
  database.query(`SELECT * FROM mca`,function(err, result) {    
     
    console.log(err);
    if(err)throw err;
    else{
     
      res.render('display',{data:result});
    }
  });



});


app.get("/table",function(req,res)
{
  database.query(`SELECT * FROM mca`,function(err, result) {    
     
    console.log(err);
    if(err)throw err;
    else{
     
      res.render('table',{data:result});
    }
  });
  

})

app.get("/add",(req,res) => {
  //fetching data from form
  res.render("add")
  
});

//add
app.get("/addstudent",(req,res) => {
  //fetching data from form
  const { name, regno, iemail, pemail, mobile } = req.query

  //Sanitization XSS...
  let qry = "select * from mca where regno=?";
  database.query(qry, [regno],(err,results) => {
      if(err)
      throw err
      else{

         if(results.length > 0) {
res.render("add",{ checkmesg:true })
         } else {
              
          //insert query
          let qry2 = "insert into mca values(?,?,?,?,?)";
          database.query(qry2,[name,regno,iemail,pemail,mobile],(err,results) => {
              if(results.affectedRows > 0) {
                  res.render("add", {mesg5: true })
              }
          })
         }
      }
  })
});

//delete
app.get("/delete",(req,res) => {
  //fetching data from form
  res.render("delete") 
});

app.get("/removestudent", (req, res) => {

  // fetch data from the form


  const { regno } = req.query;

  let qry = "delete from mca where regno=?";
  database.query(qry, [regno], (err, results) => {
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

app.get("/edit",(req,res) => {
  res.render("edit")
})

app.get("/updatesearch", (req,res) => {
  const { regno } = req.query;

let qry ="select * from mca where regno=?";
database.query(qry,[regno],(err, results) => { 
  if(err)  throw err
  else {
      if (results.length > 0) {
          res.render("edit",{mesg1: true, mesg2: false, data: results})
      }else {
          res.render("edit",{mesg1: false, mesg2: true })
      }
  }
})
})
app.get("/updatestudent", (req,res) => {
  //fetch data
  const { name, iemail, pemail, mobile, regno  } = req.query;
  let qry = "update  mca set name=?, Institutional_Email=?, Personal_Email=?, Mobile=? where regno=?";

  database.query(qry,[name, iemail, pemail, mobile, regno], (err, results) => {
      if(err)
         throw err
      else {
          if (results.affectedRows > 0) {
              res.render("edit", { umesg: true })
          }
      }

  })
})



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.get("/back",(req,res) => {
  //fetching data from form
  res.render("form")
  
});

module.exports = app;
