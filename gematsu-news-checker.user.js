// ==UserScript==
// @name    [Gematsu] News Checker
// @author  Aurange
// @version 1.0
// @match   https://www.gematsu.com/
// @grant   window.close
// ==/UserScript==

"use strict";

if(localStorage.getItem("latest") === null) localStorage.setItem("latest", document.querySelectorAll(".gematsu-post__info > h2 > a")[5].innerText);
else if(document.querySelectorAll(".gematsu-post__info > h2 > a")[5].innerText === localStorage.getItem("latest")){
  window.close();
}
else localStorage.setItem("latest", document.querySelectorAll(".gematsu-post__info > h2 > a")[5].innerText);
