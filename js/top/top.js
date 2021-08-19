$(document).ready(function () {
  // tab works
  $(".works__tab li a").click(function () {
    $(".works__tab-panel").hide();
    $(".works__tab a.works__tab-item--active").removeClass("works__tab-item--active");
    $(this).addClass("works__tab-item--active");
    var panel = $(this).attr("href");
    $(panel).fadeIn(500);
    return false;
  });

  $(".select-type select").change(function () {
    $(".works__tab-panel").hide();
    var panel = $(this).val();
    $("#" + panel).fadeIn(500);
  });
  $(".works__tab li:first a").click();

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
