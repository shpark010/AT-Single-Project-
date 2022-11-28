$(function () {
    let sub = $('.mainMenu ul');
    sub.hover(function () {
        $(this).prev().css('color', '#A2BCAA');
    }, function () {
        $(this).prev().css('color', '#000');
    });
    $('.mainMenu>li>a').hover(function(){
        $(this).css('color','#A2BCAA');
    },function(){
        $(this).css('color','#000');
    });
});