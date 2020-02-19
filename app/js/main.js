$(function () {
  $('.feedback-wrapper').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 500,
      settings: "unslick"
    }]
  });
  $('.slick-prev').addClass('slider-btn prev-bnt').text('Назад')
  $('.slick-next').addClass('slider-btn next-bnt').text('Далее')

});