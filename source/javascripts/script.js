function scrollToFeatures() {
  console.log('Hello');
  return $('html, body').animate({scrollTop: $("#features").offset().top - $('#navbar div').height()}, 1000);
}

// Required, see: http://stackoverflow.com/a/9453794
$(function () {
  $("[data-toggle=tooltip]").tooltip();
  $("[data-toggle=popover]").popover();
});

$(document).ready(function () {
  $(".scroll-down").click(scrollToFeatures);
});
