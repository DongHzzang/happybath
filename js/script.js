$(document).ready(function(){
    $('.slide-wrapper').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        swipe: true,
        dots: true
    });

    // 모바일메뉴
    let btnOpen = $('.btn-open')
    mMenu = $('.m-menu')
    btnClose = $('.btn-close')

    // btnOpen.click(function(){})
    btnOpen.on('click' , function(){
        mMenu.animate({ left : '100%'}, 600, 'easeInOutCubic')
    })
    // btnOpen.click(function(){})
    btnClose.on('click' , function(){
        mMenu.animate({  left : '-100%'}, 600, 'easeInOutCubic')
    })

  });