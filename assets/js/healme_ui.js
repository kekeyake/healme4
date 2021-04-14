var $winW, $winH, $isMobile;
$(function () {

    chkBrowserSize();
    $(window).resize(function () {
        chkBrowserSize();
    });

    $('.input_text').off().on('focus', function () {
        $(this).next('label').addClass('on');
    });
    $('.input_text + label').off().on('click', function () {
        $(this).addClass('on');
        $(this).prev('input').focus();
    });

    $('.input_text').on('blur', function () {
        if( $(this).val() == ""){
            $(this).next('label').removeClass('on');            
            $(this).next('label').show();
        } else {
            $(this).next('label').hide();
        }
        
        
    });

    $('.agree_check_txt').on('click',function(){
        if($(this).find('input').is(':checked')){
            $(this).find('input').prop('checked',false);
            $(this).next('div').hide();
            $(this).removeClass('on');
        } else {
            $(this).find('input').prop('checked', true);
            $(this).next('div').show();
            $(this).addClass('on');
        }
        return false;
    });

    $('.opening_hours p').on('click',function(){
        if (!$(this).hasClass('data')) {
            if( $(this).hasClass('on') ){
                $(this).next('ul').hide();
                $(this).removeClass('on');
            } else {
                $(this).next('ul').show();
                $(this).addClass('on');
            }
        }
        return false;
    });

    $('textarea').on('focus',function(){
        $(this).next('p').addClass('on');
    });
    $('textarea').on('blur', function () {
        if( $(this).val() == ""){
            $(this).next('p').removeClass('on');            
            $(this).next('p').show();
        } else {
            $(this).next('p').hide();
        }
    });


    $('.etc_li').on('click',function(){
        if($(this).find('input').is(':checked')){
            $(this).find('input').prop('checked',false);
            $('.hospital .etc_cure').hide();
            $(this).removeClass('on');
        } else {
            $(this).find('input').prop('checked', true);
            $('.hospital .etc_cure').show();
            $(this).addClass('on');
        }
        return false;
    });
    
    $('.scrollbar-macosx').scrollbar();

    // mobile menu
    function mmenuClose() {
        $('body').removeClass('menu_open');
        $('.nav_button').removeClass('menu_open');
        $('.nav_wrap').removeClass('menu_open');
    }
    function mmenuOpen() {
        $('body').addClass('menu_open');
        $('.nav_button').addClass('menu_open');
        $('.nav_wrap').addClass('menu_open');
    }

    $('.nav_button').addClass('nav_button_close');

    $('.nav_button').click(function () {
        mmenuOpen();
        return false;
    });
    
    $('.closed_menu').click(function () {
        mmenuClose();
        return false;
    });

    
    
});

function chkBrowserSize() {
    $winW = $(window).width();
    $winH = $(window).height();

    if ($winW < 1025) {
        $isMobile = true;
    } else {
        $isMobile = false;
    }
}
