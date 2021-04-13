"use strict";

// This function modifys the radar styles when it is loaded in the DOM
const radarStyles = () => {
  const texts = document.querySelectorAll("text");
  const parentElement = document.querySelectorAll("g");
  const gridTexts = parentElement[1].querySelectorAll("text");
  const svgElement = document.getElementById("radar");
  const width = window.innerWidth;
  const height = window.innerHeight;
  const lg_Screen = window.matchMedia("(max-width: 1380px)")
  const md_Screen = window.matchMedia("(max-width: 1080px)")

  svgElement.style.marginTop = "70px";

  texts.forEach((text) => {
    text.style.fill = "#ffffff";
  });

  gridTexts.forEach((gridText) => {
    gridText.style.fill = "#525252";
  });
  
  // Media Queries
  const radarAjust = () => {
    svgElement.setAttribute("width", window.innerWidth);
    svgElement.setAttribute("height", window.innerHeight);
  };
  
  md_Screen.matches ?
    svgElement.setAttribute("viewBox", `-200 -100 ${width + 400} ${height + 400}`)
  : lg_Screen.matches ?
      svgElement.setAttribute("viewBox", `-100 -100 ${width + 200} ${height + 200}`)
  : svgElement.setAttribute("viewBox", `0 -50 ${width} ${height + 100}`);

  window.addEventListener("resize", radarAjust);
};
