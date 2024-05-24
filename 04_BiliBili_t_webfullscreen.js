// ==UserScript==
// @name         bilibili按T键网页全屏
// @namespace    http://tampermonkey.net/
// @version      2024-03-17
// @description  try to take over the world!
// @author       You
// @match        https://www.bilibili.com/video/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.onkeydown = function (event) {
        if(event.keyCode === 84){
            console.log('保存成功');
            document.querySelector("#bilibili-player > div > div > div.bpx-player-primary-area > div.bpx-player-video-area > div.bpx-player-control-wrap > div.bpx-player-control-entity > div.bpx-player-control-bottom > div.bpx-player-control-bottom-right > div.bpx-player-ctrl-btn.bpx-player-ctrl-web").click()
        }
    }
})();
