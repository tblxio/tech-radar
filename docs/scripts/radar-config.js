"use strict";

let entries = [];

const config = () => {
  paths.endpoints.forEach((element) => {
  fetch(element)
    .then(response => response.json())
    .then(result => {
      entries = [...entries, result];
    });
  });

  setTimeout(() => {
    const radarConfig = {
      ...chart,
      entries,
    };

    radar_visualization(radarConfig);
  }, 100);
};

window.addEventListener("load", () => config());
