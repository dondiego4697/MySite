/*document.body.style.overflow = 'hidden';*/
$(window).scroll(function () {
    var navbar_fixed_top = $(".navbar-fixed-top");
    var navbar = $(".navbar");
    if (navbar.offset().top > 50) {
        navbar_fixed_top.addClass("top-nav-collapse");
    } else {
        navbar_fixed_top.removeClass("top-nav-collapse");
    }
});

$(document).ready(function () {
    $("#menu").on("click", "a", function (event) {
        event.preventDefault();

        var id = $(this).attr('href');
        var top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 500);
    });

    $("#btn-menu").on("click", function (event) {
        event.preventDefault();
        var btn = $("#btn-menu");
        if (btn.hasClass("is-active")) {
            btn.removeClass("is-active");
        } else {
            btn.addClass("is-active");
        }
    });

    $(".circle-text").hover(function () {
        $(".bg-intro-section").addClass("bg-intro-section-hover");
        $(".circle-text").addClass("circle-text-hover");
    }, function () {
        $(".bg-intro-section").removeClass("bg-intro-section-hover");
        $(".circle-text").removeClass("circle-text-hover");
    });
});