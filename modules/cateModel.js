const mysql=require('mysql');
var conn=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'root',
  database:'lyhsupermarket'
})
conn.connect();
module.exports={
  getcate(callback){
    var sql = 'select * from sp_category';
    conn.query(sql, (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    })
  }
}
