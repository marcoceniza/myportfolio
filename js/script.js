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
    nav: true,
    dots: true,
    loop:true,
    autoplay: true,
    margin: 4,
  })

  $('#modal').fadeIn();

  $('#closeModal').click(function() {
    $('#modal').fadeOut();
  });

});