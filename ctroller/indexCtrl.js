const cateModel=require('../modules/cateModel.js');
const fs=require('fs');
module.exports={
  getindex(req,res){
    res.render('index',{});
  },
  getcate(req,res){
    cateModel.getcate(function (err,result) {
      if(err){
        res.json({
          code:1,
          msg:'数据获取失败'
        })
      }else{
        res.json({
          code:0,
          msg:'数据获取成功',
          result:result
        })
        // console.log(result);
      }
    })
  },
  getcats(req,res){
    fs.readFile(__dirname+'/../catedata.json',(err,data)=>{
      console.log(err,data);
      
      if(err){
        res.json({
          code:1,
          msg:'数据获取失败',
        })
      }else{
        res.json({
          code:0,
          msg:'数据获取成功',
          result:data
        })
      }
    })
  }
}