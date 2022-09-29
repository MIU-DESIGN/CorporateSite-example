'use strict'

{
    //スクロールでヘッダーの背景色変更
    const header = document.querySelector('.l-header');
    window.addEventListener('scroll', () => {
        if ( 0 < $(this).scrollTop()) {
            header.classList.add('change-color');
        } else {
            header.classList.remove('change-color');
        }
    });

    //スライダー
    $('.js-slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
      });

    //ハンバーガーメニュー
    $(".c-btn__menu").click(function () {
        $(this).toggleClass('is-active');
        $('.p-header-nav').toggleClass('is-show');
    });
}

