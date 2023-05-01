$(document).ready(function() {
    $("#slider").bxSlider({
        randomStart: true,
        moveSlides: 1,
        captions: true,
        auto: true,
        pause: 3000,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 500,
        slideMargin: 20, 
        pager: true,
        pagerSelector: "#id_pager",
        pagerType: 'short'
    });
});