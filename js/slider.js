const exampleSider = new Swiper('.example-slider', {
  keyboard: {
    enabled: true,
  },
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.example-slider__button--next',
    prevEl: '.example-slider__button--prev',
  },

});