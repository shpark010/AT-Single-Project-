$(function () {
    

    // 메인 페이지 이미지 변경
    var nowi = 0;

    setInterval(function() {
        showSlide();
    }, 6000);

    function showSlide() {
        var nexti = (nowi + 1) % 7;
        $('.bg').eq(nowi).fadeOut(3000);
        $('.bg').eq(nexti).fadeIn(3000);
        if(nexti==0) {
            $('.main_visual>.p2').fadeOut(1000);
            $('.main_visual>.p1').fadeIn(1000);
        }else if(nexti==1 || nexti==5){
            $('.main_visual>.p1').fadeOut(1000);
            $('.main_visual>.p2').fadeIn(1000).css('color','#fff');
        }else { 
            $('.main_visual>.p1').fadeOut(1000);
            $('.main_visual>.p2').fadeIn(1000).css('color','#333');
        }
        nowi = nexti;
    }

    
    // 사용자 메뉴 hover
    $('.top').hover(function () {
        let index = $(this).index();
        $(this).stop().animate({
            left:-5,
            width: 190,
            height:264,
            top:-5
        },300).css({
            backgroundColor:'#F8FFFF',
            boxShadow:'#e7e7cf'
        });
        $('.btn').css('background-color','#fff');
    }, function () {
        $(this).stop().animate({
            left:0,
            width: 180,
            height:254,
            top:0
        },300).css({
            backgroundColor:'#fff',
            boxShadow:'#c9c9c9'
        });
    });
    
    // 사용자 메뉴의 버튼 hover
    $('.btn').hover(function(){
        $(this).css('background-color','#cdcdcd');
        $(this).find('a').css('color','#fff');
    },function(){
        $(this).css('background-color','#fff');
        $(this).find('a').css('color','#000');
    });

    
});