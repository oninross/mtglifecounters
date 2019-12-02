'use strict';

export default class Player {
  constructor() {
    $('.planeswalker__logo').css({
      top: $(window).height() / 2 - $('.planeswalker__logo').height() / 2
    });

    $('.player, .player__controls, .player__control').css({
      height: $(window).height() / 2
    });

    $('.player__life span').css({
      left: $(window).width() / 2 - $('.player__life span').width() / 2,
      top: $('.player').height() / 2 - $('.player__life span').height() / 2
    });

    $('.player__controls span').css({
      top: $('.player').height() / 2 - $('.player__controls span').height() / 2
    });

    $('.-js-life-up').on('click', function (e) {
      e.preventDefault();

      const $lifeText = $(this).parent().next().find('span');
      let $thisLife = Number($lifeText.text());

      $thisLife += 1;

      if ($thisLife <= 0) {
        $lifeText.addClass('-deads');
      } else {
        $lifeText.removeClass('-deads');
      }

      $lifeText.text($thisLife);
    });

    $('.-js-life-down').on('click', function (e) {
      e.preventDefault();

      const $lifeText = $(this).parent().next().find('span');
      let $thisLife = Number($lifeText.text());

      $thisLife -= 1;

      if ($thisLife <= 0) {
        $lifeText.addClass('-deads');
      } else {
        $lifeText.removeClass('-deads');
      }

      $lifeText.text($thisLife);
    });

    $('.-js-reset-life').on('click', function (e) {
      e.preventDefault();

      $('.player__life span').text(20).removeClass('-deads');
    });
  }
}
