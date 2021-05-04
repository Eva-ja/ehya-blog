const exampleSider = new Swiper('.example-slider', {
  keyboard: {
    enabled: true,
  },
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.example-info__button--next',
    prevEl: '.example-info__button--prev',
  },

});

const attractionSider = new Swiper('.attraction-slider', {
  keyboard: {
    enabled: true,
  },
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.attraction-swiper__button--next',
    prevEl: '.attraction-swiper__button--prev',
  },

});
