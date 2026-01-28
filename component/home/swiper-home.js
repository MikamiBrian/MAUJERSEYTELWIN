document.addEventListener("DOMContentLoaded", () => {

  if (document.querySelector(".mySwiperMain")) {
    const thumbs = new Swiper(".mySwiperThumbs", {
      slidesPerView: 3,
      spaceBetween: 10,
      watchSlidesProgress: true,
    });

    new Swiper(".mySwiperMain", {
      loop: true,
      autoplay: { delay: 3500 },
      thumbs: { swiper: thumbs },
    });
  }

  if (document.querySelector(".mySwiper")) {
    new Swiper(".mySwiper", {
      loop: true,
      autoplay: { delay: 3000 },
      breakpoints: {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }

});
