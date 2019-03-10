$(document).ready(() => {
  $('.site-header__toggle').on('click', () => {
    $('.site-header__navigation').show();
    $('.site-header__toggle').addClass('site-header__toggle--active');
  });

  $('.navigation__toggle-close').on('click', () => {
    $('.site-header__navigation').hide();
    $('.navigation__toggle-close__line').addClass('navigation__toggle-close__line--active');
    $('.site-header__toggle').removeClass('site-header__toggle--active');
  });
})
