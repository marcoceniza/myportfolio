$(document).ready(function() {
  let webWith = $(window).width();

  $(window).resize(function() {

    if(webWith <= 575) {
      $('nav').addClass('bg-dark');
    } else {
      $('nav').removeClass('bg-dark');
    }
    
  })

});