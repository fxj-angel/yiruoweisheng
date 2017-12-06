$(function(){
    //地图的高度
    var m_height=parseInt($('.map').css('width'))/2.4;
    $('.ditu').css('height',m_height);
    $('.map').css('height',m_height);

    //第一个地图
    var map1 = new BMap.Map("firstmap");          // 创建地图实例
    var point1 = new BMap.Point(118.894215,32.094106);  // 创建点坐标
    map1.centerAndZoom(point1, 15);                 // 初始化地图，设置中心点坐标和地图级别
    var marker1 = new BMap.Marker(point1);        // 创建标注
    map1.addOverlay(marker1);                     // 将标注添加到地图中
    //map1.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    marker1.addEventListener("click", function(){
        $('.firstmap').css('display','block');
        //弹框左边height
        var i_height=$('.firstmap .img').css('height');
        $('.firstmap .text').css('height',i_height);
    });

    //第二个地图
    var map = new BMap.Map("secondmap");
    var point = new BMap.Point(118.973376,31.377395);
    map.centerAndZoom(point, 15);
    var marker = new BMap.Marker(point);
    map.addOverlay(marker);
    //map.enableScrollWheelZoom(true);
    marker.addEventListener("click", function(){
        $('.secondmap').css('display','block');
        //弹框左边height
        var i_height=$('.secondmap .img').css('height');
        $('.secondmap .text').css('height',i_height);
    });

    //X点击
    $('.img-X').click(function(){
        $(this).parent().parent().css('display','none');
        $(this).parent().parent().prev().css('display','none');
    })

});









