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


$(function () {
  var strength1 = 50;
  var strength2 = 100;
  var strength3 = 200;
  $("html").mousemove(function(e){
      var pageX = e.pageX - ($(window).width() / 2);
      var pageY = e.pageY - ($(window).height() / 2);
      var newvalueX = 1* pageX * -1;
      var newvalueY = 1* pageY * -1;
      $('#background').css("background-position", (strength1 / $(window).width() * pageX * -1)+"px "+(strength1  / $(window).height() * pageY * -1)+"px");
      $('#middleground').css("background-position", (strength2 / $(window).width() * pageX * -1)+"px "+(strength2  / $(window).height() * pageY * -1)+"px");
      $('#foreground').css("background-position", (strength3 / $(window).width() * pageX * -1)+"px "+(strength3  / $(window).height() * pageY * -1)+"px");
  });
});
