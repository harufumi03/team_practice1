$(function () {
  $('#js-hamburger-menu, .nav__link').on('click', function () {
    $('.header_nav').slideToggle(500)
    $('.hamburger-menu').toggleClass('hamburger-menu--open')
  });
});
