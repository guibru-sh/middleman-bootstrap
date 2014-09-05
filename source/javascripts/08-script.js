jQuery.fn.extend({
  scrollDown: function(e) {
      if (e != null) {
          e.preventDefault();
      }
      return $.scrollTo($("#features"), 1e3);
  }
});


$(".scroll-down").on("click", $.scrollDown);
