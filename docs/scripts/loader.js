"use strict";

setTimeout(() => {
  const content = document.getElementById("content");
  const loader = document.getElementById("loader");
  const texts = document.querySelectorAll('text');
  const radar = document.getElementById('radar');

  loader.style.display = "none";
  content.style.display = "block";
  radar.style.background = '#272727';
  texts.forEach(text => {
    text.style.fill = '#ffffff';
  });
}, 500);
