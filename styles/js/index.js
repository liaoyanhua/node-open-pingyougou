$(function () {
   banner();
   goodsList();
  //  cat();
  //  cat1();
  //图片以及小圆点轮播渲染
  function banner() {
    $.ajax({
      type:'get',
      url: 'http://157.122.54.189:9094/api/public/v1/home/swiperdata',
      dataType:'json',
      success:function (res) {
        // console.log(res);
       if(res.meta.status==200){
         var html=template('bantemp',res);
         $('.ban').html(html);
         var indicator = template('indicate',res)
         $('.indicator').html(indicator);
         var gallery = mui('.mui-slider');
         gallery.slider({
           interval: 2000 //自动轮播周期，若为0则不自动播放，默认为0；
         });
       }
      }
    })
  }
  //商品列表渲染
  function goodsList() {
    $.ajax({
      type:'get',
      url: 'http://157.122.54.189:9094/api/public/v1/home/goodslist',
      dataType:'json',
      success:function (res) {
        // console.log(res);
        if(res.meta.status==200){
          var html1 = template('goodsList',res);
          $('.goodList').html(html1);
        }
      }
    })
  }
  // function cat() {
  //   // console.log(123);
  //   $.ajax({
  //     type:'get',
  //     url:'/getcate',
  //     dataType:'json',
  //     success:function (res) {
  //       console.log(res);
  //     }
  //   })
  // }
  // function cat1() {
  //   $.ajax({
  //     type:'get',
  //     url:'/catjson',
  //     dataType:'json',
  //     success:function (res) {
  //       console.log(res);
  //     }
  //   })
  // }
  
})