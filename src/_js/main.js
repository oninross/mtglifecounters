// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import 'TweenLite';
import 'EasePack';
import 'AttrPlugin';
import 'CSSPlugin';

import './common/_modernizr';


import Player from '../_modules/player/player';
import ServiceWorker from '../_modules/serviceworker/serviceworker';


$(() => {
    new Player();


    // Set framerate to 60fps
    TweenLite.ticker.fps(60);


    // Simple Service Worker to make App Install work (OPTIONAL)
    // new ServiceWorker();

    console.log("I'm a Life Counter!!!");
});
