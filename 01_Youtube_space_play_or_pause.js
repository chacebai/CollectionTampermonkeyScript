// ==UserScript==
// @name         Youtube空格键播放
// @namespace    http://tampermonkey.net/
// @version      2024-05-22
// @description  try to take over the world!
// @author       You
// @match        https://www.youtube.com/watch?*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=youtube.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    console.log("Correct Pause v1.3 - Started Successfully");

    window.onkeyup = keyUpHandler;

    window.onkeydown = keyDownHandler;

    let latestAction;

    // Elements on which if focused pressing space won't play/pause the video

    let forbiddenElements = ['ytd-searchbox', 'contenteditable-root']

    // Determines if play/pause is allowed (e.g: when typing in search or comments)

    function isSpaceAllowed() {

        forbiddenElements.forEach(e => {

        });

        for (let i = 0; i < forbiddenElements.length; i++) {

            let element = forbiddenElements[i];

            if (document.activeElement.className === element

                || document.activeElement.id === element) return false;

        }

        return true;

    }

    function keyUpHandler(e) {

        if (!isSpaceAllowed()) return;

        let vid = document.querySelector('video');

        const key = e.code;

        if (key != 'Space') return;

        if (latestAction === 'play') play(vid);

        if (latestAction === 'pause') pause(vid);

    }

    function keyDownHandler(e) {

        if (!isSpaceAllowed()) return;

        let vid = document.querySelector('video');

        const key = e.code;

        if (key != 'Space') return;

        if (vid.paused || vid.ended) play(vid);

        else pause(vid);

    }

    function play(video) {

        latestAction = 'play';

        video.play();

    }

    function pause(video) {

        latestAction = 'pause';

        video.pause();

    }
})();
