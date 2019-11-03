'use strict';

export default class Player {
  constructor() {
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
