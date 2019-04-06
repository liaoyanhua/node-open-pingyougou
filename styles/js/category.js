$(function () {
  leftcat();
  var dataId;
  function leftcat() {
    // console.log(123);
    $.ajax({
      type: 'get',
      url: '/getcate',
      dataType: 'json',
      success: function (res1) {
        // console.log(res1);
        var html1 = template('leftCate', res1);
        $('.left ul').html(html1)
        // 初始化iscroll
        var myScroll = new IScroll('.left');

        // 为左侧li绑定单击操作
        $('.left').on('tap', 'li', function () {
           $('body').addClass('loadding');
          // 样式的切换
          $(this).addClass('active').siblings().removeClass('active')
          // 实现 元素置顶
          myScroll.scrollToElement(this)
          // 动态渲染二级分类数据
          var index = $(this).index()
          //  alert(index);
          //  dataId = $(this).find('a')[0].dataset.id;
          dataId = $(this).find('a').data('id')
          rightcat();
          // console.log(dataId[0]);
        })
      }
    })
  }
  dataId = 1;
  var twoId;
  rightcat();
  var data1;
  var data2;
  var data3;
  function rightcat() {
    $.ajax({
      type: 'get',
      url: '/getonecate',
      data: {
        dataId: dataId
      },
      dataType: 'json',
      success: function (res2) {
        // 获取标题存储到全局
        data1 = res2;
        console.log(data1)
        var html2 = template('rightonecate', res2);
        $('.rightList').html(html2)
        // 判断图片是否全部加载完毕
        // 获取全部标题id 发送后台获取三级数据
        var arr = [];
        $('.rightList .catname').each(function (index, value) {
          twoId = $(value).data('id')
          arr.push(twoId)
        })
        $.ajax({
          type: 'get',
          url: '/twocate',
          data: {
            arr: arr
          },
          dataType: 'json',
          success: function (res3) {
            data2 = res3;
            data1.result.forEach((value, index) => {
              value.children = data2.result[index]
            })
            console.log(data1.result);
         html2 = template('rightonecate', {
          result: data1.result
        });
        $('.rightList').html(html2)
           
        
               var imgcount = $('.rightList img').length
               $('.rightList img').on('load', function () {
                 console.log(123);
                 // 只要触发这个事件，说明这张图片加载完毕了
                 imgcount--
                 if (imgcount == 0) {
                   $('body').removeClass('loadding')
                   // 使用iscroll实现滑动效果
                   var iscroll = new IScroll('.right')
                 }
               })
            
          }
        })
       
      }
    })
  }

})