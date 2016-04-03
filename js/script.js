
(function() {
  var navIsActive = false;
  $('.site-header__nativation-toggle').on('click', function() {
    if (navIsActive) {
      $(this).removeClass('site-header__nativation-toggle--active');
      $('.site-header__navigation').slideUp();
    }
    else {
      $(this).addClass('site-header__nativation-toggle--active');
      $('.site-header__navigation').slideDown();
    }
    navIsActive = !navIsActive;
  });
})();
