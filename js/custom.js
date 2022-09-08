$(function(){
   
$('.slick_mainnn').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical:true,
    centerMode: true,
    centerPadding: '0px',
    nextArrow:".next",
    prevArrow:".prev",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      
      
      
    ]
  });



  $('.slick_text').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slick_img'
  });
  $('.slick_img').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slick_text',
    centerMode: true,
    centerPadding:"0px",
    vertical:true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical:false,
        }
      },
      
      
      
      
    ]
  });


  $('.slick_count').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows:false

  });


  jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

$('.slick_market').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  arrows:false,
  centerMode:true,
  centerPadding:"0",

});

      
})