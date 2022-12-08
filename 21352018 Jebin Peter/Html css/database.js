const{createPool} = require('mysql');
const pool = createPool({host:"localhost",user: "root", password:'quantumn', database: "xtohtml", connectionLimit: 10})
pool.query("select * from students", (err, result, fields)=>
{
    if(err)
    {
        return console.log(err);
    }
    return console.log(result);
})