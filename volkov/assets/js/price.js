$(document).ready(function () {
    $('.price-popup__selectable').click(function() {
        var id = $(this).attr('data-id'),
            content = $('.price-popup__wrapper[data-id="'+ id +'"]');
        
        $('.price-popup__selectable.active').removeClass('active'); // 1
        $(this).addClass('active'); // 2
        
        $('.price-popup__wrapper.active').removeClass('active').fadeOut(0); // 3
        content.addClass('active').fadeIn(800); // 4
     });

     if($(window).width() < 768) {
        $('.header__nav-mob-link').click(function() {
            $('.header.is-open').removeClass('is-open');
            $('.header__menu-mob').slideUp();
            $('.header__burger.active').removeClass('active');
        })
     }
}); 