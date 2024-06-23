// ==UserScript==
// @name    [Gematsu] News Tracker
// @author  Aurange
// @version 1.3
// @match   https://www.gematsu.com/
// @grant   window.close
// ==/UserScript==

"use strict";

let lSL = localStorage.getItem("latest");

if(!lSL || document.querySelectorAll(".gematsu-post__info > h2 > a")[5].innerText !== lSL) localStorage.setItem("latest", document.querySelectorAll(".gematsu-post__info > h2 > a")[5].innerText);
else window.close();
