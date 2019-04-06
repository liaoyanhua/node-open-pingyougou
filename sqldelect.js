const mysql=require('mysql');
var conn=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'lyhsupermarket'
})
conn.connect();
var sql1='select *from sp_category where cat_level=0';
var sql2 = 'select *from sp_category where cat_level=1';
conn.query(sql1,(err,result)=>{
  if(err) return console.log(err.message);
  console.log(result);
})