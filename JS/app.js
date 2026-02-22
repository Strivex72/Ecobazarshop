    $(document).ready(function(){
        $('.sale-products-slider').slick({
            vertical: true,
            verticalSwiping: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            arrows: false,
            dots: false
        });
    });

 $('.number-slider').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: false,
  arrows: false,
  dots: false,
  variableWidth: true, 
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3
      }
    }
  ]
});

$('.prev-btn').click(function() {
  $('.number-slider').slick('slickPrev');
});

$('.next-btn').click(function() {
  $('.number-slider').slick('slickNext');
});