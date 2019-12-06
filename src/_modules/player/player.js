'use strict';

export default class Player {
  constructor() {
    let $window = $(window);
    let $logo = $('.planeswalker__logo');
    let $player = $('.player');
    let $life = $('.player__life span');
    let $controls = $('.player__controls');

    let windowWidth = $window.width();
    let windowHeight = $window.height();
    let lifeWidth = $life.width();
    let lifeHeight = $life.height();
    let controlHeight = $controls.outerHeight();

    $logo.css({
      top: (windowHeight / 2) - ($logo.height() / 2)
    });

    $player.css({
      height: windowHeight / 2
    });

    $('.player:nth-child(1) .player__life span').css({
      left: (windowWidth / 2) - (lifeWidth / 2),
      top: ($player.height() / 2) - ((controlHeight + 30) / 2) - (lifeHeight / 2),
      width: lifeWidth
    });

    $('.player:nth-child(2) .player__life span').css({
      left: (windowWidth / 2) - (lifeWidth / 2),
      top: ($player.height() / 2) - ((controlHeight - 80) / 2) - (lifeHeight / 2),
      width: lifeWidth
    });

    $('.-js-reset-life').on('click', function (e) {
      e.preventDefault();

      $life.text(20).removeClass('-deads');
    });

    $('.-js-life').on('click', function (e) {
      let $this = $(this);

      $this.parent().next().find('span').text($this.text());
    });
  }
}
