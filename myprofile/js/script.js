$(function () {
    $('.mainvisual').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 5000,
        fade: true,
        cssEase: 'linear',
        arrows: false,
    });



    $('a').hover(
        function(){
            $(this).animate({'opacity':0.5},300);
        },
        function(){
            $(this).animate({'opacity': 1},300);
        }
    );
    // $('.home, #about, #works').on('mouseenter', function () {
    //     $(this).css('opacity', '0.5')
    // });

    // $('.home, #about, #works').on('mouseout', function () {
    //     $(this).css('opacity', '1')
    // });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#top-button').fadeIn();
        } else {
            $('#top-button').fadeOut();
        }
    });

    // $('a[href^="#"]').click(function () {
    //     const speed = 500;
    //     const href = $(this).attr('href');
    //     let $target;
    //     if (href == '#') {
    //         $target = $('html');
    //     }
    //     else {
    //         $target = $(href);
    //     }
    //     const position = $target.offset().top;
    //     $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
    //     return false;
    // });
    $('a[href^="#"]').click(function () {
        const speed = 500;
        const href = $(this).attr('href');
        let $target;
        if (href == '#') {
          $target = $('html');
        }
        else {
          $target = $(href);
        }
        // ーーーーーー修正前ーーーーーーー
        // const position = $(this).offset().top;
        // ーーーーーーーーーーーーーーーー

        // ーーーーーーAI先生修正ーーーーー
        const headerHeight = $('header').outerHeight();
        const position = $target.offset().top - headerHeight;
        // ーーーーーーーーーーーーーーーー
        $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
        return false;
      });
});
