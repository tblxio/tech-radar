"use strict";

const content = document.getElementById("content");
const loader = document.getElementById("loader");

setTimeout(() => {
    loader.style.display = "none";
    content.style.display = "block";
  }, 500);
