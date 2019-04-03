$(function () {
   banner();
  //图片轮播渲染
  function banner() {
    $.ajax({
      type:'get',
      url: 'http://157.122.54.189:9094/api/public/v1/home/swiperdata',
      dataType:'json',
      sunccess:function (res) {
        console.log(res);
      }
    })
  }
  var gallery = mui('.mui-slider');
  gallery.slider({
    interval: 2000 //自动轮播周期，若为0则不自动播放，默认为0；
  });
})