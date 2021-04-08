"use strict";

const config = async (chart, paths) => {
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

  return radarConfig;
};
