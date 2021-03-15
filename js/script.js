$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');
    });
    $(".content__nav,.content__action").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top-65 }, 750);
    });
    let lastScrollTop = 0;
    $(window).scroll(function () {
        let posit = $(this).scrollTop();
        $('.content__position').css({ 'top': posit * 0.047 - 16 })
        lastScrollTop = posit;
    });
});