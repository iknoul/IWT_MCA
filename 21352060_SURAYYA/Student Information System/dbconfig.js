const db=require('mysql');

var con=db.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "iwtdb"
});

con.connect(function(err)
{
  if(err) throw err;
  console.log("connected");
});

module.exports=con;