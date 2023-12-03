$(document).ready(function(){
    $('.slider__inner').slick({
      prevArrow: "<img src='icons/arrowback.png' class='prev' alt='1'>",
      nextArrow: "<img src='icons/arrownext.png' class='next' alt='2'>",
      centerMode: true,
      centerPadding: '60px',
      speed: 300,
      autoplay: true,
      fade: true, 
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1201,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
  });

  