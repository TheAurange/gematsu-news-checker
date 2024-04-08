// ==UserScript==
// @name    [Gematsu] News Tracker
// @author  Aurange
// @version 1.2
// @match   https://www.gematsu.com/
// @grant   window.close
// ==/UserScript==

"use strict";

if(!localStorage.getItem("latest") || document.querySelectorAll(".gematsu-post__info > h2 > a")[5].innerText !== localStorage.getItem("latest")) localStorage.setItem("latest", document.querySelectorAll(".gematsu-post__info > h2 > a")[5].innerText);
else window.close();
