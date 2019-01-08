$(document).ready(function() {
  $('.navigation-toggle').click(function () {
    toggleNavigation()
    $('[data-tooltip="tooltip"]').tooltip()
  })
})
