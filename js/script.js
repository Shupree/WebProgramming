$(document).ready(function () {
  let blinder_state = 0;

  $(document).on("mousemove", function (event) {
    let wWidth = $(window).width();
    let mouseX = event.pageX;
    let moveX = mouseX / wWidth - 0.5;

    $("#characters").css("margin-left", moveX * 2.4 + "%");
    $("#murders").css("margin-left", moveX * 0.9 + "%");
  });

  $(document).mouseleave(function () {
    $("#characters").css("margin-left", "0%");
    $("#murders").css("margin-left", "0%");
  });

  $(document).on("click", function () {
    if ($("#blinder").width() == 0) {
      if (blinder_state == 0) {
        $("#blinder").removeClass("clicked-again");
        $("#blinder").addClass("clicked");
        blinder_state = 1;
      } else {
        $("#blinder").removeClass("clicked");
        $("#blinder").addClass("clicked-again");
        blinder_state = 0;
      }

      $("#murders").addClass("clicked");
      $("#logo").addClass("clicked");
    }
  });
});
