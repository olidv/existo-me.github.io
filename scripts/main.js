const myCarouselElement = document.querySelector("#carouselTest");
const carousel = new bootstrap.Carousel(myCarouselElement, {
    // interval: false,
    // keyboard: false,
    // pause: true,
    // wrap: false,
    interval: 60000,
    wrap: true,
});


(function ($) {
    ("use strict");

    // carousel.to(1);
    // carousel.pause();

})(jQuery);
