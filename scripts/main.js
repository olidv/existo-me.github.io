const myCarouselElement = document.querySelector("#carouselTest");
const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: false,
    keyboard: false,
    pause: true,
    wrap: false,
});


(function ($) {
    ("use strict");

    carousel.pause();
    carousel.to(2);

})(jQuery);
