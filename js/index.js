//关于我们
$(function(){
    var index_about_height=$('#about .col-md-3').height();
    var index_about_width=$('#about .col-md-3').width();
    $('#about .col-md-3').each(function(){
        $(this).hover(function(){
            $(this).find('.about_mask').fadeIn(400);
            $(this).find('.border-left,.border-right').stop().animate({height:index_about_height+'px'},400);
            $(this).find('.border-top,.border-bottom').stop().animate({width:index_about_width+'px'},400);
        },function(){
            $(this).find('.about_mask').fadeOut(400);
            $(this).find('.border-left,.border-right').stop().animate({height:0},400);
            $(this).find('.border-top,.border-bottom').stop().animate({width:0},400);
        })
    });
});
//我们的产品
window.onload=function(){
    var div=document.getElementById('product');
    var row=div.getElementsByTagName("div")[1];
    var dl=row.getElementsByTagName("dl");

    row.innerHTML=row.innerHTML+row.innerHTML;
    row.style.width=dl[0].offsetWidth*dl.length+"px";
    function move(){
        //右移
        /*if(row.offsetLeft>0){
            row.style.left=-row.offsetWidth/2+"px";
        }
        row.style.left=row.offsetLeft+2+"px";*/
        //左移
        if(row.offsetLeft<-row.offsetWidth/2){
            row.style.left="0";
        }
        row.style.left=row.offsetLeft-2+"px";
    }

    var timer=setInterval(move,30);

    row.onmouseover=function(){
        clearInterval(timer);
    };
    row.onmouseout=function(){
        timer=setInterval(move,30);
    };
};

//新闻中心
$(function(){
    $("body").flowUp(".news_list", { transalteY: 350, duration: 1 });
});