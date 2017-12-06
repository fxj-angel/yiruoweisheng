$(function(){
    var sss = $("#news_content .news_text .news_text_left ul li:not(:first)");
    var news_rights = $(".news_rights");
    sss.click(function(){
        $(this).addClass('news_content_active').siblings().removeClass("news_content_active");
        var index= $(this).index()-1;
        news_rights.eq(index).removeClass("new_active").siblings().addClass("new_active");
    })
});


