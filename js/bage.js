$('.down').mouseenter(function(){
    $(this).find('div').slideDown('slow');
    $(this).children().css('border-bottom','2px solid transparent');
});
$('.down').mouseleave(function(){
    $(this).find('div').slideUp('slow')
});