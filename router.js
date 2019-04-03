const express=require('express');
const shopCtrl=require('./ctroller/indexCtrl.js')
var router=express.Router();
router.get('/', shopCtrl.getindex)
      .get('/getcate',shopCtrl.getcate)
      .get('/catjson',shopCtrl.getcats)

module.exports=router;