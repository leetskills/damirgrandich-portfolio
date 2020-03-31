AOS.init();

$(document).ready(function() {
  $('.navigation-toggle').click(function () {
    toggleNavigation()
    $('[data-tooltip="tooltip"]').tooltip()
  })
})

$(window).scroll(function() {
  var scroll = $(window).scrollTop()

  if (scroll >= 80) {
    $(".navbar")
      .addClass("navbar-scrolled navbar-light")
      .removeClass("navbar-dark")
  } else {
    $(".navbar")
      .removeClass("navbar-scrolled navbar-light")
      .addClass("navbar-dark")
  }
});
