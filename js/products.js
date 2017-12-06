$(function(){
    var li = $(".classification .varieties_one ul li");
    var title = $(".product_box");

    li.click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var index = $(this).index();

        title.eq(index).addClass("active_pro").siblings().removeClass("active_pro");
    })
})
