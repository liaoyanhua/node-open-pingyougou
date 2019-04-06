const express=require('express');
const indexCtrl=require('./ctroller/indexCtrl.js');
const cateCtrl=require('./ctroller/cateCtrl.js')
var router=express.Router();
router.get('/index', indexCtrl.getindex) 
      .get('/categories',cateCtrl.catePage)
      .get('/getcate', cateCtrl.getcate)
      .get('/catjson',indexCtrl.getcats)
      .get('/getonecate',cateCtrl.getonecate)
      .get('/twocate',cateCtrl.gettwocate)

module.exports=router;