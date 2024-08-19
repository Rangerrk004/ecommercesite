// alert('');
jQuery(document).ready(function () {
  /// story section slider

  $('#one-time').slick({
    dots: false,
    infinite: true,
    autoplay: false,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 479,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
          slidesToShow: 1,
        },
      },
    ]
  });


  $(".m-viewslider").slick({
    infinite: true,
    autoplay: false,
    autoplaySpeed: 2500,
    arrows: false,
    dots: false,
    speed: 300,
    slidesToScroll: 1,
    pauseOnHover: true,
    centerMode: false,
    centerPadding: "0px",
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 479,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
          slidesToShow: 1,
        },
      },
    ],
  });

  $("#store-items").slick({
    infinite: false,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: false,
    dots: false,
    speed: 300,
    slidesToScroll: 1,
    pauseOnHover: true,
    centerMode: false,
    centerPadding: "0px",
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
          slidesToShow: 1,
        },
      },
    ],
  });




  // $("#team-slider").slick({
  //   infinite: false,
  //   autoplay: true,
  //   autoplaySpeed: 2500,
  //   arrows: false,
  //   dots: false,
  //   speed: 300,
  //   slidesToScroll: 1,
  //   pauseOnHover: true,
  //   centerMode: false,
  //   centerPadding: "0px",
  //   slidesToShow: 3,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         arrows: false,
  //         centerMode: false,
  //         centerPadding: "0px",
  //         slidesToShow: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         arrows: false,
  //         centerMode: false,
  //         centerPadding: "0px",
  //         slidesToShow: 1,
  //         slidesToShow: 1,
  //       },
  //     },
  //   ],
  // });
});