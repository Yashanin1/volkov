$(document).ready(function () {

    $.fancybox.defaults.hideOnOverlayClick = true;
    
    $('.callback__form').submit(function () {
    var form = $(this);
    var nameLength = form.find('input[name="namee"]').val().length;
    var telLength = form.find('input[name="tel"]').val().length;
    if (nameLength < 4 && telLength < 16)  {
        form.find('input[name="namee"]').addClass('--error')
        form.find('input[name="tel"]').addClass('--error')
    }
    else if(nameLength < 4) {
        form.find('input[name="namee"]').addClass('--error')
    } else if (telLength < 16) {
        form.find('input[name="tel"]').addClass('--error')
    }
    else {

            $.ajax({
                type: "POST",
                dataType: 'text',
                url: '/volkov/form-handler.php',
                data: $(this).serialize(),
                
                
                success: function (data) {
                    console.log(nameLength, telLength);
                    form.find('input[name="namee"]').val();
                    form.find('input[name="tel"]').val();
                    form.find('.form__title').html('Мы уже получили <br> <span>вашу заявку!</span>');
                    form.find('.form__row').slideUp();
                    form.find('.form__policy').html('В ближайшее время с Вами свяжется администратор и проконсультирует Вас по условиям и стоимости лечения, подберёт врача и запишет Вас на приём.')
                    $.fancybox.open({
                        src: '#thankyou',
                        type: 'inline',
                        hash: 'thankyou',
                        position: 'center',
                    });
                    
                    console.log(data);
        
                }
            });
        }
        return false;
    })


        
    $('.form__input').click(function() {
        if($(this).hasClass('--error')) {
            $(this).removeClass('--error');
        }
    }) 

    $('input[type=tel]').mask('+7 000 000 00 00' )

    $('.header__burger').click(function() {
        $(this).toggleClass('active');
        $('.header').toggleClass('is-open');
        $('.header__menu-mob').fadeToggle();
    });

    if ($('.education__main-item').length > 4) {
        $('.education__main-item:gt(3)').hide();
    };
      
    $('.education__main-more').on('click', function() {
        $('.education__main-item:gt(3)').toggle();
        $(this).text() === 'Показать еще' ? $(this).text('Скрыть информацию') : $(this).text('Показать еще');
        return false;
    });

    if ($('.education__prof-item').length > 4) {
        $('.education__prof-item:gt(3)').hide();
    }
      
    $('.education__prof-more').on('click', function() {
        $('.education__prof-item:gt(3)').toggle();
        $(this).text() === 'Показать еще' ? $(this).text('Скрыть информацию') : $(this).text('Показать еще');
        return false;
    });


    $('.sert__block-choose').click(function() {
        var id = $(this).attr('data-id'),
            content = $('.sert__screen[data-id="'+ id +'"]');
        
        $('.sert__block-choose.active').removeClass('active'); // 1
        $(this).addClass('active'); // 2
        
        $('.sert__screen.active').removeClass('active'); // 3
        content.addClass('active'); // 4

        return false;
     });

     var swiper = new Swiper('.services__swiper',{
        spaceBetween: 12,
        slidesPerView: 1.15,
        pagination: {
            el: ".services__progress",
            type: "progressbar",
        },
        navigation: {
            nextEl: '.services__btn-next',
            prevEl: '.services__btn-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                pagination: {
                    el: ".services__pagination",
                    type: "bullets"
                },
            },
            1199: {
                spaceBetween: 40,
                slidesPerView: 2.5,
                pagination: {
                    el: ".services__pagination",
                    type: "bullets"
                },
            },
        },
          on: {
            init: function () {
                const observer = lozad();
                observer.observe()
            },
            slideChange: function () {
                const observer = lozad();
                observer.observe()
            },
        },
    })

    
    var swiper = new Swiper('.sert__list',{
        spaceBetween: 32,
        slidesPerView: 3,
        pagination: {
            el: ".sert__list-progress",
            type: "progressbar",
        },
         on: {
            init: function () {
                const observer = lozad();
                observer.observe()
            },
            slideChange: function () {
                const observer = lozad();
                observer.observe()
            },
        }
    });

    var swiper = new Swiper('.reviews__swiper',{
        spaceBetween: 12,
        slidesPerView: 1.15,
        pagination: {
            el: ".reviews__progress",
            type: "progressbar",
        },
        navigation: {
            nextEl: '.reviews__btn-next',
            prevEl: '.reviews__btn-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
                pagination: {
                    el: ".reviews__pagination",
                    type: "bullets",
                },
            },
            1199: {
                spaceBetween: 40,
                slidesPerView: 3,
                pagination: {
                    el: ".reviews__pagination",
                    type: "bullets",
                },
            },
        },
    })

    var swiper = new Swiper('.sert__swiper',{
        spaceBetween: 12,
        slidesPerView: 1.15,
        pagination: {
            el: ".sert__progress",
            type: "progressbar",
        },
    })


    var swiper = new Swiper('.education__main-swiper',{
        spaceBetween: 12,
        slidesPerView: 1.15,
        pagination: {
            el: ".education__main-progress",
            type: "progressbar",
        },
        breakpoints: {
            540: {
                slidesPerView: 2.15,
                
            },
        },
    })

    var swiper = new Swiper('.education__prof-swiper',{
        spaceBetween: 12,
        slidesPerView: 1.15,
        pagination: {
            el: ".education__prof-progress",
            type: "progressbar",
        },
        breakpoints: {
            540: {
                slidesPerView: 2.15,
                
            },
        },
    })


    $('.contacts__choose').click(function() {
        var id = $(this).attr('data-id'),
            content = $('.contacts__content[data-id="'+ id +'"]');
        
        $('.contacts__choose.active').removeClass('active'); // 1
        $(this).addClass('active'); // 2
        
        $('.contacts__content.active').removeClass('active').fadeOut(200); // 3
        content.addClass('active').fadeIn(600); // 4

        return false;
     });

     
    $('.reviews__text').readmore({
        speed: 75,
        lessLink: '<a class="reviews__hide" href="#">Скрыть отзыв</a>',
        collapsedHeight: 100, 
        moreLink: '<a class="reviews__hide" href="#">Читать отзыв</a>'
    });
});