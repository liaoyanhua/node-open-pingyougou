const express=require('express');
const router=require('./router');
var app=express();
app.listen(3000,()=>{
  console.log('the serve is running http://127.0.0.1:3000/index');
})
app.set('view engine', 'ejs');
app.set('views','./views');
app.use(express.static('lib'))
app.use(express.static('styles'))
app.use(router)
