// Слайдер

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    760: {
      slidesPerView: 4.5,
      spaceBetween: 30
    }
  }
});

// Плавный переход

$(document).ready(function () {
  $("#menu").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top - 150 }, 500);
  });
});

