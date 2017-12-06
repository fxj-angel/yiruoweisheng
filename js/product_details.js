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

$(function(){
    $('.path .img').css('height',$('.path .text').css('height'));
});
