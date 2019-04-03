$(function () {
   banner();
  //图片轮播渲染
  function banner() {
    $.ajax({
      type:'get',
      url: 'home/swiperdata',
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
  
})