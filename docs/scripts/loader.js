"use strict";

const removeLoader = () => {
  const content = document.getElementById("content");
  const loader = document.getElementById("loader");

  loader.style.display = "none";
  content.style.display = "block";
};
