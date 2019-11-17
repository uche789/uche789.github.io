$(document).ready(function () {
  var firstItem = $('.crumb')[0];
  $('.content-item').removeClass('active');
  $(firstItem).addClass('active');
  $('#' + $(firstItem).data('id')).addClass('active');

  $('.crumb').click(function() {
    $('.content-item').removeClass('active');
    $('.crumb').removeClass('active');
    $(this).addClass('active');

    $('#' + $(this).data('id')).addClass('active');
    setTimeout(function() {
      var offset = $('#' + $(this).data('id')).offset();
      offset.left -= 20;
      offset.top -= 20;

      $('html, body').animate({
        scrollTop: offset.top,
        scrollLeft: offset.left
    });
    }.bind(this), 500);
  });
});

$('[data-modal]').click(function () {
  $('.modal').removeClass('show');
  $('#' + $(this).data('modal')).addClass('show');
  $('body').css('overflow', 'hidden');
});

$('.modal-header__close').click(function () {
  $('.modal').removeClass('show');
  $('body').css('overflow', 'auto');
})