//закрыть карточку услуги----------

$('.kartochka_uslugi_close').click(function () {
    $('body').css('overflow', 'auto');
    $('.kartochka_uslugi').css('opacity', '0');
    setTimeout(function () {

        $('.kartochka_uslugi').css('display', 'none');

    }, 500);
});
//открыть карточку услуги-----------

/* $('.usluga_button').click(function () {
    $('.kartochka_uslugi').css('display', 'block');
    setTimeout(function () {
        $('.kartochka_uslugi').css('opacity', '1');
    }, 1);
}); */


// Кнопки Всех Услуг
$('.vivoz_grunta_button').click(function () {
    $('.vivoz_grunta').css('display', 'block');
    setTimeout(function () {

        $('.kartochka_uslugi.vivoz_grunta').css('opacity', '1');
    }, 1);
    $('body').css('overflow', 'hidden');
});

$('.demontazh_zdaniy_button').click(function () {
    $('.demontazh_zdaniy').css('display', 'block');
    setTimeout(function () {

        $('.kartochka_uslugi.demontazh_zdaniy').css('opacity', '1');
    }, 1);
    $('body').css('overflow', 'hidden');
});

$('.vivoz_musora_button').click(function () {
    $('.vivoz_musora').css('display', 'block');
    setTimeout(function () {

        $('.kartochka_uslugi.vivoz_musora').css('opacity', '1');
    }, 1);
    $('body').css('overflow', 'hidden');
});

$('.dostavka_peska_button').click(function () {
    $('.dostavka_peska').css('display', 'block');
    setTimeout(function () {

        $('.kartochka_uslugi.dostavka_peska').css('opacity', '1');
    }, 1);
    $('body').css('overflow', 'hidden');
});

$('.transhei_button').click(function () {
    $('.transhei').css('display', 'block');
    setTimeout(function () {

        $('.kartochka_uslugi.transhei').css('opacity', '1');
    }, 1);
    $('body').css('overflow', 'hidden');
});

$('.planiroka_uchastka_button').click(function () {
    $('.planiroka_uchastka').css('display', 'block');
    setTimeout(function () {

        $('.kartochka_uslugi.planiroka_uchastka').css('opacity', '1');
    }, 1);
    $('body').css('overflow', 'hidden');
});

$('.vodoem_button').click(function () {
    $('.vodoem').css('display', 'block');
    setTimeout(function () {

        $('.kartochka_uslugi.vodoem').css('opacity', '1');
    }, 1);
    $('body').css('overflow', 'hidden');
});

$('.razrabotka_kotlovanov_button').click(function () {
    $('.razrabotka_kotlovanov').css('display', 'block');
    setTimeout(function () {

        $('.kartochka_uslugi.razrabotka_kotlovanov').css('opacity', '1');
    }, 1);
    $('body').css('overflow', 'hidden');
});

$('.korchevka_pnei_button').click(function () {
    $('.korchevka_pnei').css('display', 'block');
    setTimeout(function () {

        $('.kartochka_uslugi.korchevka_pnei').css('opacity', '1');
    }, 1);
    $('body').css('overflow', 'hidden');
});




$('.volvo_button').click(function () {
    $('.volvo').css('display', 'block');
    setTimeout(function () {

        $('.kartochka_uslugi.volvo').css('opacity', '1');
    }, 1);
    $('body').css('overflow', 'hidden');
});
$('.evro3_button').click(function () {
    $('.evro3').css('display', 'block');
    setTimeout(function () {

        $('.kartochka_uslugi.evro3').css('opacity', '1');
    }, 1);
    $('body').css('overflow', 'hidden');
});
$('.kamaz_button').click(function () {
    $('.kamaz').css('display', 'block');
    setTimeout(function () {

        $('.kartochka_uslugi.kamaz').css('opacity', '1');
    }, 1);
    $('body').css('overflow', 'hidden');
});
$('.lonking_button').click(function () {
    $('.lonking').css('display', 'block');
    setTimeout(function () {

        $('.kartochka_uslugi.lonking').css('opacity', '1');
    }, 1);
    $('body').css('overflow', 'hidden');
});
$('.jcbsuper_button').click(function () {
    $('.jcbsuper').css('display', 'block');
    setTimeout(function () {

        $('.kartochka_uslugi.jcbsuper').css('opacity', '1');
    }, 1);
    $('body').css('overflow', 'hidden');
});
$('.jcb_button').click(function () {
    $('.jcb').css('display', 'block');
    setTimeout(function () {

        $('.kartochka_uslugi.jcb').css('opacity', '1');
    }, 1);
    $('body').css('overflow', 'hidden');
});




//КНОПКА СЛЕДУЮЩЕГО СЛАЙДА-----------

schet = 0;
function next() {
    $current = $('.block')[schet];
    $($current).css('opacity', '0');
    if (schet + 1 > $('.block').length - 1) {
        schet = 0;
        $next = $('.block')[schet];
        $($next).css('opacity', '1');
    }
    else {
        $next = $('.block')[schet + 1];
        $($next).css('opacity', '1');
        schet = schet + 1;
    }
}

$('.next_btn').click(next);

//АВТОМАТИЧЕСКОЕ ИЗМЕНЕНИЕ СЛАЙДА

setInterval(next, 4000);

//КНОПКА ПРЕДЫДУЩЕГО СЛАЙДА

function prev() {
    $current = $('.block')[schet];
    $($current).css('opacity', '0');
    if (schet - 1 < 0) {
        schet = $('.block').length - 1;
        $next = $('.block')[schet];
        $($next).css('opacity', '1');
    }
    else {
        $next = $('.block')[schet - 1];
        $($next).css('opacity', '1');
        schet = schet - 1;
    }
}
$('.prev_btn').click(prev);
$('.back_page_top').click(function () {
    $(window).scrollTop(0);
});

$(window).scroll(function (event) {
    var top = $(window).scrollTop();
    if (top > 600) {
        $('.back_page_top').css('display', 'block');


    }
    else {
        $('.back_page_top').css('display', 'none');

    }
});



//СМЕНА КАРТИНКИ В УСЛУГАХ
$('.kartochka_uslugi_galereya').find('img').click(function () {
    $('.kartochka_uslugi_galereya').find('img').removeClass('main_img');
    $('.kartochka_uslugi_galereya').find('img').css('order', '1')
    $(this).addClass('main_img');
    $(this).css('order', '0');
});




$('.1-1').click(function () {
    $('.1-3').toggleClass('uslugi_show');
    $('.1-2').toggleClass('burger_nav_uslugi_menu_show');

});
$('.2-1').click(function () {
    $('.2-3').toggleClass('uslugi_show');
    $('.2-2').toggleClass('burger_nav_uslugi_menu_show');

});
$('.burger_toggle').click(function () {
    $('.burger_toggle').toggleClass('active');
    $('.burger_menu').toggleClass('burger_menu_active');
    $('body').toggleClass('lock');
    $('.burger_outer').toggleClass('burger_outer_active');
});