//ハンバーガーメニューの記述

$('.burger-btn').on('click',function(){
  $('.burger-btn').toggleClass('cross');
  $('.header-nav').fadeToggle(300);
  $('body').toggleClass('noscroll');
})

if( $(window).width() <=375 ){
  $('.nav-item>a').on('click',function(){
    $('.header-nav').fadeOut(300);
    $('.burger-btn').removeClass('cross');
    $('body').removeClass('noscroll');
  })
}

