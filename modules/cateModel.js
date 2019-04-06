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
    var sqlLeft = 'select * from sp_category where cat_level=0';
    conn.query(sqlLeft, (err, result) => {
      if (err) return callback(err);
      callback(null, result);
    })
  },
  getonecate(dataId,callback){
    var sqlonecate=`select * from sp_category where cat_pid=${dataId}`;
    // console.log(sqlonecate)
    conn.query(sqlonecate,(err,result)=>{
      if(err)return callback(err);
      callback(null,result);
    })
  },
  gettwocate(arr,callback){
    var datatwo=[];
    for(var i=0;i<arr.length;i++){
      console.log(arr[i]);
      var sqltwocate=`select * from sp_category where cat_pid=${arr[i]}`;
      
      conn.query(sqltwocate, (err, result) => {
        if (err) return callback(err);
       datatwo.push(result);
      })
      
    }
    setTimeout(() => {
      console.log('data------>', datatwo);
      callback(null, datatwo);
  
}, 1000);   
    //  callback(null, datatwo);
  }

}
