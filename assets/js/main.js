

$(document).ready(function () {
    $(window).scroll(function () {
      if ($(document).scrollTop() > 120) {
     $("h1").addClass("active")
    } else {
        
        $("h1").removeClass("active")
    }
    });
  });