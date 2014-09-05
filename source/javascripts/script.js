jQuery.fn.extend({
  scrollToFeatures: function(e) {
    console.log('Hello');
    if (e != null) {
        e.preventDefault();
    }
    return $('html, body').animate({scrollTop: $("#features").offset().top - $('#navbar div').height()}, 2000);
  }
});

$(document).ready(function () {
  $(".scroll-down").on("click", $.scrollToFeatures);
});
