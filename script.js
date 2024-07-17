let sky = document.getElementById("sky");
let moon = document.getElementById("moon");
let beach = document.getElementById("beach");
let text = document.getElementById("text");
let btn = document.getElementById("btn");
let title = document.getElementById("title");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  sky.style.top = value * 0.5 + "px";
  moon.style.top = value * 1.25 + "px";
  text.style.marginRight = value + "px";
  title.style.marginBottom = value * 0.1 + "px";
  btn.style.marginLeft = value + "px";
  btn.style.zIndex = value > 50 ? 0 : 1000;
});

const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

  autoplay: {
    delay: 2000, // Slide delay in milliseconds
    disableOnInteraction: false, // Keep autoplay enabled after manual interaction
  },

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
