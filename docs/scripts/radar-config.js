"use strict";

const config = async () => {
    let entries = [];

    for await (let endpoint of paths.endpoints) {
      const data = await fetch(endpoint);
      const dataJSON = await data.json();
      entries = [...chart.entries, ...entries, dataJSON];
    }

    const radarConfig = {
      ...chart,
      entries,
    };

    radar_visualization(radarConfig);
  };

  window.addEventListener("load", () => config());
