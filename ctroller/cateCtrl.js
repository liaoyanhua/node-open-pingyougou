const cateModel=require('../modules/cateModel.js')
module.exports={
  catePage(req,res){
    res.render('category',{})
  },
  getcate(req, res) {
    cateModel.getcate(function (err, result) {
      if (err) {
        res.json({
          code: 1,
          msg: '数据获取失败'
        })
      } else {
        res.json({
          code: 0,
          msg: '数据获取成功',
          result: result
        })
        // console.log(result);
      }
    })
  },
  getonecate(req,res){
    var dataId=req.query.dataId;
    // console.log(dataId);
    cateModel.getonecate(dataId,function (err,result) {
      if(err){
        // console.log(err);
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
      }
    })
  },
  gettwocate(req,res){
    var arr=req.query.arr;
    console.log(arr);
    cateModel.gettwocate(arr,function (err,result) {
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
      }
    })
  }
}