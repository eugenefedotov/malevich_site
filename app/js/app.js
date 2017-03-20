$(function () {
  if ($('.reviews .swiper-container').length) {
    new Swiper('.reviews .swiper-container', {
      nextButton: '.reviews .swiper-button-next',
      prevButton: '.reviews .swiper-button-prev',
      spaceBetween: 20,
      slidesPerView: 2,
      loop: true
    });
  }
});
