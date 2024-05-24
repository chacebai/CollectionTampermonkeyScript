// ==UserScript==
// @name         csdn自定义脚本
// @namespace    http://tampermonkey.net/
// @version      2024-05-13
// @description  try to take over the world!
// @author       You
// @match        http*://blog.csdn.net/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=csdn.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...

    // 全部给我自动展开 谁设计的这傻逼玩意
    document.querySelectorAll("#content_views > pre > div > span").forEach(function(divElement) {
        divElement.click();
    });
})();
