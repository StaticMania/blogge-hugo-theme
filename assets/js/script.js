$(document).ready(function () {
  "use strict";
  //  Headroom Initialize
});

$(".widget-slider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

// sticky nav
$(window).on("scroll", function () {
  if ($(window).scrollTop()) {
    $("nav").addClass("nav-bg");
  } else {
    $("nav").removeClass("nav-bg");
  }
});
