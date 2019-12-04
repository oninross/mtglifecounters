'use strict';

export default class Player {
  constructor() {
    $('.planeswalker__logo').css({
      top: ($(window).height() / 2) - ($('.planeswalker__logo').height() / 2)
    });

    $('.player:nth-child(1) .player__life span').css({
      left: ($(window).width() / 2) - ($('.player__life span').width() / 2),
      top: ($('.player').height() / 2) - (($('.player__controls').outerHeight() + 30) / 2) - ($('.player__life span').height() / 2),
      width: $('.player__life span').width()
    });

    $('.player:nth-child(2) .player__life span').css({
      left: ($(window).width() / 2) - ($('.player__life span').width() / 2),
      top: ($('.player').height() / 2) - (($('.player__controls').outerHeight() - 80) / 2) - ($('.player__life span').height() / 2),
      width: $('.player__life span').width()
    });

    $('.-js-reset-life').on('click', function (e) {
      e.preventDefault();

      $('.player__life span').text(20).removeClass('-deads');
    });

    $('.-js-life').on('click', function (e) {
      let $this = $(this);

      $this.parent().next().find('span').text($this.text());
    });
  }
}
