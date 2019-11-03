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


$(() => {
  new Player();


  // Set framerate to 60fps
  TweenLite.ticker.fps(60);

  console.log("I'm a Life Counter!!!");
});


// Simple Service Worker to make App Install work (OPTIONAL)
// if ('serviceWorker' in navigator) {
//   window.addEventListener('load', function () {
//     if ('serviceWorker' in navigator) {
//       navigator.serviceWorker.register('/service-worker.js', { scope: './' })
//         .then(function (registration) {
//           console.log('registered service worker');

//           registration.onupdatefound = function () {
//             // The updatefound event implies that registration.installing is set; see
//             // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
//             const installingWorker = registration.installing;

//             installingWorker.onstatechange = function () {
//               switch (installingWorker.state) {
//                 case 'installed':
//                   if (!navigator.serviceWorker.controller) {
//                     console.log('Caching complete!');
//                   }
//                   break;

//                 case 'redundant':
//                   throw Error('The installing service worker became redundant.');
//               }
//             };
//           };
//         })
//         .catch(function (whut) {
//           console.error('uh oh... ');
//           console.error(whut);
//         });
//     }
//   });

//   window.addEventListener('beforeinstallprompt', function (e) {
//     // Prevent Add to Homescreen Banner from firing
//     e.preventDefault();
//     return false;
//   });

//   // Check to see if the service worker controlling the page at initial load
//   // has become redundant, since this implies there's a new service worker with fresh content.
//   if (navigator.serviceWorker && navigator.serviceWorker.controller) {
//     console.log("navigator.serviceWorker.controller.onstatechange:: " + navigator.serviceWorker.controller.onstatechange)
//     navigator.serviceWorker.controller.onstatechange = function (event) {
//       if (event.target.state === 'redundant') {
//         console.log('A new version of this app is available.', 0, true);
//       }
//     };
//   }
// }