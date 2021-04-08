"use strict";

// This function modifys the radar styles when it is loaded in the DOM
const radarStyles = () => {
  const texts = document.querySelectorAll("text");
  const parentElement = document.querySelectorAll("g");
  const gridTexts = parentElement[1].querySelectorAll("text");

  texts.forEach((text) => {
    text.style.fill = "#ffffff";
  });

  gridTexts.forEach((gridText) => {
    gridText.style.fill = "#525252";
  });
};
