const swiper = new Swiper('.swiper-container', {
  // Optional parameters
direction: 'horizontal',
loop: true,
slidesPerView: 1,
// spaceBetween: 30,
speed: 400,

  // If we need pagination
pagination: {
    el: '.swiper-pagination',
},

  // Navigation arrows
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},

breakpoints: {
    // when window width is >= 320px
    400: {
    slidesPerView: 1,
    centeredSlides: false,
    // spaceBetween: 20
    },
    920: {
      slidesPerView: 2,
      spaceBetween: 30
      },
    // when window width is >= 480px
    1155: {
    slidesPerView: 3,
    spaceBetween: 30
    },
}

  // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
});