$(document).ready(function() {
  // button voor sidebar

  $(".sidebar").hide();

  $(".buttonsb").click(function(e) {
    e.preventDefault();
    $(".header, .content, .subheader, .footer")
      .removeClass("verlichten")
      .addClass("schemeren");
    $(".sidebar").show(500, "swing");
    e.stopPropagation();
  });

  $(".sidebar").click(function(e) {
    e.stopPropagation();
  });

  $(document.body).click(function(e) {
    if ($(".sidebar").css("display") !== "none") {
      $(".sidebar").hide(500, "swing");
      $(".header, .content, .subheader, .footer")
        .removeClass("verduisteren")
        .addClass("verlichten");
    } else {
      e.stopPropagation();
    }
  });
});
