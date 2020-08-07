$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        /* autoplay: true, 
        autoplayTimeout: 3000, */
        responsive: {
            650: {
                items: 2,
                margin: 20,
            },
            1240: {
                items: 3,
                dots: false,
                nav: true,
                margin: 15,
            },
        }
    }); /* Карусель */
    
    $('.header__mobmenu-button').on('click', function(){
        $('.header__popup-menu').slideToggle();
    });
    $(window).resize(function() {
        if($(window).width() >= 1240){
            $('.header__popup-menu').hide();
        };
    }); /* Меню */
    
     let body = document.body;
    let disableScroll = function () {
	let pagePosition = window.scrollY;
	body.classList.add('disable-scroll');
	body.dataset.position = pagePosition;
	body.style.top = -pagePosition + 'px';
}
    let enableScroll = function () {
	let pagePosition = parseInt(document.body.dataset.position, 10);
	body.style.top = 'auto';
	body.classList.remove('disable-scroll');
	window.scroll({top: pagePosition, left: 0});
	body.removeAttribute('data-position');
}
    $('.header__feedback-button').on('click', function(){
        if ($('body').hasClass('disable-scroll')) {
            enableScroll();
        } else {
            disableScroll();
        }
        $('.header__feedback-holder').css('display', 'flex');
    });
    $('.about-worker__button').on('click', function(){
        if ($('body').hasClass('disable-scroll')) {
            enableScroll();
        } else {
            disableScroll();
        }
        $('.header__feedback-holder').css('display', 'flex');
        $('.back-call__email-label').css('display', 'block');
        $('.back-call__email').css('display', 'block');
    });
    $('.about-skills__button').on('click', function(){
        if ($('body').hasClass('disable-scroll')) {
            enableScroll();
        } else {
            disableScroll();
        }
        $('.header__feedback-holder').css('display', 'flex');
        $('.back-call__email-label').css('display', 'block');
        $('.back-call__email').css('display', 'block');
    });
    $('.about-product__button').on('click', function(){
        if ($('body').hasClass('disable-scroll')) {
            enableScroll();
        } else {
            disableScroll();
        }
        $('.header__feedback-holder').css('display', 'flex');
        $('.back-call__email-label').css('display', 'block');
        $('.back-call__email').css('display', 'block');
    });
    $('.footer-stuff__feedback-button').on('click', function(){
        if ($('body').hasClass('disable-scroll')) {
            enableScroll();
        } else {
            disableScroll();
        }
        $('.header__feedback-holder').css('display', 'flex');
    }); /* Обратная связь и отключение скролла  */

    $('.link-skills').on('click', function(event){
        event.preventDefault();
        let top = $('.about-skills').offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $('.link-product').on('click', function(event){
        event.preventDefault();
        let top = $('.about-product').offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
    $('.link-price').on('click', function(event){
        event.preventDefault();
        let top = $('.about-price').offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    }); /* Скролл к секциям сайта */
})