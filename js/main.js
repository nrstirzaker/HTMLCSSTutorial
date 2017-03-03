$(document).ready(function () {


    // $("#nav-bar").hover(function () {
    //     $(this).fadeTo("fast", 1.0);
    // });

    $("#nav-bar").mouseover(function () {
        $("#nav-bar").fadeTo("fast", 1.0);
    }).mouseout(function () {
        $("#nav-bar").fadeTo("fast", 0.75);
    });

    $('.moving-bit').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

});