'use strict';

import Player from '../player';

describe('Player View', function() {

  beforeEach(() => {
    this.player = new Player();
  });

  it('Should run a few assertions', () => {
    expect(this.player);
  });

});
