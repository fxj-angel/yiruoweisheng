$(function(){
    //导航条固定
    var nav=$("#content .nav");
    var top=parseInt($(nav).offset().top);
    $(window).scroll(function(){
        if($(document).scrollTop()>=top){
            nav.addClass("fixednav");
            $('#path1').css('margin-top','71px');
        }else{
            nav.removeClass("fixednav");
            $('#path1').css('margin-top','0');
        }
    });

    //导航条a点击
    $(nav).children().find('a').click(function(){
        var s=true;
        var href=$(this).attr('href');
        $(href).css('padding-top','71px');
        var p=0,t=0;
        $(window).scroll(function(e){
            p = $(this).scrollTop();
            if(t>p && s){//上滚
                $(href).css('padding-top','0');
                s=false;
            }
            setTimeout(function(){t = p;},0);
        });
    })
});

