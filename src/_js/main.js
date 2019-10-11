// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import 'TweenLite';
import 'EasePack';
import 'AttrPlugin';
import 'CSSPlugin';

import './common/_modernizr';

// for testing a11y only.  Remove before integration
import './common/tota11y.min';

import MaterialDesign from './common/_material-design';

import ServiceWorker from '../_modules/serviceworker/serviceworker';


$(() => {
    // Init Material Design
    const material = new MaterialDesign();
    material.init();


    // Set framerate to 60fps
    TweenLite.ticker.fps(60);


    // Simple Service Worker to make App Install work (OPTIONAL)
    // new ServiceWorker();


    material.toaster("I'm a Life Counter!!!", 0);
    console.log("I'm a Life Counter!!!");
});
