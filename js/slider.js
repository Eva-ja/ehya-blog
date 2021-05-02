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

const attractionSider = new Swiper('.attraction-slider', {
  keyboard: {
    enabled: true,
  },
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.attraction-slider__button--next',
    prevEl: '.attraction-slider__button--prev',
  },

});
