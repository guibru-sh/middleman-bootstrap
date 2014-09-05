function scrollToFeatures() {
  console.log('Hello');
  return $('html, body').animate({scrollTop: $("#features").offset().top - $('#navbar div').height()}, 1000);
}
});

$(document).ready(function () {
  $(".scroll-down").click(scrollToFeatures);
});
