$(document).ready(function() {
  let webWith = $(window).width();

  $(window).resize(function() {

    if(webWith <= 575) {
      $('nav').addClass('bg-dark');
    } else {
      $('nav').removeClass('bg-dark');
    }
    
  })

  $('.owl-carousel').owlCarousel({
    nav: false,
    dots: false,
    loop:true,
    autoplay: true,
    margin: 4,
    responsive: {
      0:{
        items:1
      },
      500:{
        items:2
      },
      1000:{
        items:3
      },
    }
  })

  $('#modal').fadeIn();

  $('#closeModal').click(function() {
    $('#modal').fadeOut();
  });

});