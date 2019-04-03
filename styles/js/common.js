$(function () {
  const baseURl = 'http://157.122.54.189:9094/api/public/v1/';
  $.ajaxSettings.beforeSend=function (xhr,obj) {
    console.log(obj);
    obj.url=baseURl+obj.url;
  }
  $.ajaxSettings.complete=function () {
    console.log(456);
  }
})