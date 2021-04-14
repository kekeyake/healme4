$(function () {

    $('.price_info li').on('click',function(){
        var tg = "#" + $(this).attr("rel");
        $(this).addClass('on').siblings('li').removeClass('on');
        $(tg).addClass('on').siblings('div').removeClass('on');
    });
    
});
