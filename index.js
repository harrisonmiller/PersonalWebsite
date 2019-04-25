$( document ).ready(function() {

  $("#aboutNav").click(function() {
      $('html, body').animate({
          scrollTop: $("#about").offset().top
      }, 1000);
  });

  $("#projectNav").click(function() {
      $('html, body').animate({
          scrollTop: $("#projects").offset().top
      }, 1000);
  });

  $("#experienceNav").click(function() {
      $('html, body').animate({
          scrollTop: $("#experience").offset().top
      }, 1000);
  });

  $("#contactNav").click(function() {
      $('html, body').animate({
          scrollTop: $("#contact").offset().top
      }, 1000);
  });

  $("#inLineContactNav").click(function() {
      $('html, body').animate({
          scrollTop: $("#contact").offset().top
      }, 1000);
  });

});
