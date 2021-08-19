$(document).ready(function () {
  $(".world__list").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: "unslick",
      },
    ],
  });

});
